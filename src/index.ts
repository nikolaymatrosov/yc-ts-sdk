import * as iam from '../api/iam/v1';
import {
    CreateIamTokenRequest,
    IamTokenServiceService,
} from '../generated/yandex/cloud/iam/v1/iam_token_service';
import { ITokenService } from './TokenService/ITokenService';
import {
    IamTokenService,
    IIAmCredentials,
} from './TokenService/iamTokenService';
import { MetadataTokenService } from './TokenService/metadataTokenService';
import { EndpointResolver } from './endpoint';
import './operation';
import {
    ChannelCredentials,
    credentials,
    Metadata,
    ServiceDefinition,
} from '@grpc/grpc-js';
import { Client, createChannel, createClient } from 'nice-grpc';

export interface GenericConfig {
    pollInterval?: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
    oauthToken: string;
}

export interface IamTokenCredentialsConfig extends GenericConfig {
    iamToken: string;
}

export interface ServiceAccountCredentialsConfig extends GenericConfig {
    serviceAccountJson: IIAmCredentials;
}

export type SdkServiceDefinition<T> = ServiceDefinition<T> & {
    __endpointId: string;
};

async function createIamToken(iamEndpoint: string, req: any) {
    const channel = createChannel(iamEndpoint, credentials.createSsl());
    const client = createClient(IamTokenServiceService, channel);
    const resp = await client.create(CreateIamTokenRequest.fromJSON(req));
    return resp.iamToken;
}

type SessionConfig =
    | OAuthCredentialsConfig
    | IamTokenCredentialsConfig
    | ServiceAccountCredentialsConfig
    | GenericConfig;

function isOAuthCredentialsConfig(
    config: SessionConfig
): config is OAuthCredentialsConfig {
    return 'oauthToken' in config;
}

function isIamTokenCredentialsConfig(
    config: SessionConfig
): config is IamTokenCredentialsConfig {
    return 'iamToken' in config;
}

function isServiceAccountCredentialsConfig(
    config: SessionConfig
): config is ServiceAccountCredentialsConfig {
    return 'serviceAccountJson' in config;
}

function newTokenCreator(
    config: SessionConfig,
    iamEndpoint: string
): () => Promise<string> {
    if (isOAuthCredentialsConfig(config)) {
        return () => {
            return createIamToken(iamEndpoint, {
                yandexPassportOauthToken: config.oauthToken,
            });
        };
    } else if (isIamTokenCredentialsConfig(config)) {
        const iamToken = config.iamToken;
        // eslint-disable-next-line @typescript-eslint/require-await
        return async () => {
            return iamToken;
        };
    } else {
        let tokenService: ITokenService;
        if (isServiceAccountCredentialsConfig(config)) {
            tokenService = new IamTokenService(config.serviceAccountJson);
        } else {
            tokenService = new MetadataTokenService();
        }

        return async () => {
            return tokenService.getToken();
        };
    }
}

function newChannelCredentials(tokenCreator: TokenCreator) {
    return credentials.combineChannelCredentials(
        credentials.createSsl(),
        credentials.createFromMetadataGenerator(
            (
                // eslint-disable-next-line @typescript-eslint/naming-convention
                params: { service_url: string },
                callback: (error: any, result?: any) => void
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
            }
        )
    );
}

const defaultConfig: SessionConfig = {
    pollInterval: 1000,
};

export type TokenCreator = () => Promise<string>;

export type SdkRestServiceImp<T> = new (
    address: string,
    // eslint-disable-next-line no-shadow
    credentials: any,
    options: any,
    tokenCreator: TokenCreator
) => T;

export type SdkRestServiceDefinition<T> = SdkRestServiceImp<T> & {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __endpointId: string;
};

export class Session {
    private config: SessionConfig;
    private endpointResolver: EndpointResolver;
    private channelCredentials: ChannelCredentials;

    constructor(config?: SessionConfig) {
        this.config = {
            ...defaultConfig,
            ...config,
        };
        this.endpointResolver = new EndpointResolver();
        this._tokenCreator = newTokenCreator(
            this.config,
            this.endpointResolver.resolve('iam')
        );
        this.channelCredentials = newChannelCredentials(this._tokenCreator);
    }

    private _tokenCreator: TokenCreator;

    get tokenCreator(): TokenCreator {
        return this._tokenCreator;
    }

    get pollInterval() {
        return this.config.pollInterval;
    }

    async setEndpoint(newEndpoint: string) {
        await this.endpointResolver.updateEndpointList(newEndpoint);
    }

    client<Service extends ServiceDefinition<T>, T>(
        cls: SdkServiceDefinition<T>
    ): Client<ServiceDefinition<T>, any> {
        const channel = createChannel(
            this.endpointResolver.resolve(cls.__endpointId),
            this.channelCredentials
        );

        return createClient(cls as ServiceDefinition<T>, channel);
    }

    restClient<T>(cls: SdkRestServiceDefinition<T>) {
        return new cls(
            this.endpointResolver.resolve(cls.__endpointId),
            this.channelCredentials,
            this.config,
            this._tokenCreator
        );
    }
}
