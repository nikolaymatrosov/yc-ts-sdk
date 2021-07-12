import { ChannelCredentials, credentials, Metadata, ServiceDefinition } from '@grpc/grpc-js';
import { EndpointResolver } from './endpoint';

import { MetadataTokenService } from './TokenService/metadataTokenService';
import { IamTokenService, IIAmCredentials } from './TokenService/iamTokenService';

import './operation';

import * as iam from '../api/iam/v1';
import { Client, createChannel, createClient } from 'nice-grpc';
import { ITokenService } from './TokenService/ITokenService';

export interface GenericConfig {
    pollInterval?: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
    oauthToken: string;
}

export interface IamTokenCredentialsConfig extends GenericConfig {
    iamToken: string;
}

export type SdkServiceDefinition<T> = ServiceDefinition<T> & {
    __endpointId: string;
}

async function createIamToken(iamEndpoint: string, req: any) {
    const client = iam.IamTokenService();
    const resp = await client.create(req);
    return resp.iamToken;
}

interface TokenCreatorConfig {
    iamToken?: string;
    oauthToken?: string;
    serviceAccountJson?: IIAmCredentials;
    pollInterval: number;
    metadataToken: boolean;
}

function newTokenCreator(config: TokenCreatorConfig, iamEndpoint: string): () => Promise<string> {
    if (config.oauthToken) {
        return () => {
            return createIamToken(iamEndpoint, {
                yandexPassportOauthToken: config.oauthToken,
            });
        };
    }

    const iamToken = config.iamToken;
    if (iamToken !== undefined) {
        return async () => {
            return iamToken;
        };
    }
    let tokenService: ITokenService;
    if (config.serviceAccountJson) {
        tokenService = new IamTokenService(config.serviceAccountJson);

    } else {
        tokenService = new MetadataTokenService();
    }

    return async () => {
        return tokenService.getToken();
    };
}

function newChannelCredentials(tokenCreator: TokenCreator) {
    return credentials.combineChannelCredentials(
        credentials.createSsl(),
        credentials.createFromMetadataGenerator(
            (params: { service_url: string }, callback: (error: any, result?: any) => void,
            ) => {
                tokenCreator()
                    .then((token) => {
                        const md = new Metadata();
                        md.set('authorization', 'Bearer ' + token);
                        return callback(null, md);
                    })
                    .catch((e) => {
                        return callback(e);
                    });
            }),
    );
}

const defaultConfig = {
    pollInterval: 1000,
    metadataToken: false,
};

export type TokenCreator = () => Promise<string>;


export interface SdkRestServiceImp<T> {
    new(address: string, credentials: any, options: any, tokenCreator: TokenCreator): T;
}

export type SdkRestServiceDefinition<T> = SdkRestServiceImp<T> & {
    __endpointId: string;
}

export class Session {
    __config: TokenCreatorConfig;
    private __endpointResolver: EndpointResolver;
    private __channelCredentials: ChannelCredentials;
    private __tokenCreator: TokenCreator;

    constructor(
        config?:
            | OAuthCredentialsConfig
            | IamTokenCredentialsConfig
            | GenericConfig,
    ) {
        this.__config = {
            ...defaultConfig,
            ...config,
        };
        this.__endpointResolver = new EndpointResolver();
        this.__tokenCreator = newTokenCreator(
            this.__config,
            this.__endpointResolver.resolve('iam'),
        );
        this.__channelCredentials = newChannelCredentials(this.__tokenCreator);
    }

    get tokenCreator(): TokenCreator {
        return this.__tokenCreator;
    }

    async setEndpoint(newEndpoint: string) {
        await this.__endpointResolver.updateEndpointList(newEndpoint);
    }

    client<Service extends ServiceDefinition<T>, T>(cls: SdkServiceDefinition<T>): Client<ServiceDefinition<T>> {
        const channel = createChannel(this.__endpointResolver.resolve(cls.__endpointId), this.__channelCredentials);

        return createClient(cls as ServiceDefinition<T>, channel);
    }

    restClient<T>(cls: SdkRestServiceDefinition<T>) {
        return new cls(this.__endpointResolver.resolve(cls.__endpointId), this.__channelCredentials, this.__config, this.__tokenCreator);
    }
}
