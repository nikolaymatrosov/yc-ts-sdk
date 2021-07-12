import { credentials, Metadata } from '@grpc/grpc-js';
import { EndpointResolver } from './endpoint';
import { MetadataTokenService } from './TokenService/metadataTokenService';
import { IamTokenService } from './TokenService/iamTokenService';
import './operation';
import * as iam from '../api/iam/v1';
import { createChannel, createClient } from 'nice-grpc';
async function createIamToken(iamEndpoint, req) {
    const client = iam.IamTokenService();
    const resp = await client.create(req);
    return resp.iamToken;
}
function newTokenCreator(config, iamEndpoint) {
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
    let tokenService;
    if (config.serviceAccountJson) {
        tokenService = new IamTokenService(config.serviceAccountJson);
    }
    else {
        tokenService = new MetadataTokenService();
    }
    return async () => {
        return tokenService.getToken();
    };
}
function newChannelCredentials(tokenCreator) {
    return credentials.combineChannelCredentials(credentials.createSsl(), credentials.createFromMetadataGenerator((params, callback) => {
        tokenCreator()
            .then((token) => {
            const md = new Metadata();
            md.set('authorization', 'Bearer ' + token);
            return callback(null, md);
        })
            .catch((e) => {
            return callback(e);
        });
    }));
}
const defaultConfig = {
    pollInterval: 1000,
    metadataToken: false,
};
export class Session {
    constructor(config) {
        this.__config = {
            ...defaultConfig,
            ...config,
        };
        this.__endpointResolver = new EndpointResolver();
        this.__tokenCreator = newTokenCreator(this.__config, this.__endpointResolver.resolve('iam'));
        this.__channelCredentials = newChannelCredentials(this.__tokenCreator);
    }
    get tokenCreator() {
        return this.__tokenCreator;
    }
    async setEndpoint(newEndpoint) {
        await this.__endpointResolver.updateEndpointList(newEndpoint);
    }
    client(cls) {
        const channel = createChannel(this.__endpointResolver.resolve(cls.__endpointId), this.__channelCredentials);
        return createClient(cls, channel);
    }
    restClient(cls) {
        return new cls(this.__endpointResolver.resolve(cls.__endpointId), this.__channelCredentials, this.__config, this.__tokenCreator);
    }
}
