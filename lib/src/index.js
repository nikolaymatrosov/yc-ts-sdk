import { CreateIamTokenRequest, IamTokenServiceService, } from '../generated/yandex/cloud/iam/v1/iam_token_service';
import { IamTokenService, } from './TokenService/iamTokenService';
import { MetadataTokenService } from './TokenService/metadataTokenService';
import { EndpointResolver } from './endpoint';
import './operation';
import { credentials, Metadata, } from '@grpc/grpc-js';
import { createChannel, createClient } from 'nice-grpc';
async function createIamToken(iamEndpoint, req) {
    const channel = createChannel(iamEndpoint, credentials.createSsl());
    const client = createClient(IamTokenServiceService, channel);
    const resp = await client.create(CreateIamTokenRequest.fromJSON(req));
    return resp.iamToken;
}
function isOAuthCredentialsConfig(config) {
    return 'oauthToken' in config;
}
function isIamTokenCredentialsConfig(config) {
    return 'iamToken' in config;
}
function isServiceAccountCredentialsConfig(config) {
    return 'serviceAccountJson' in config;
}
function newTokenCreator(config, iamEndpoint) {
    if (isOAuthCredentialsConfig(config)) {
        return () => {
            return createIamToken(iamEndpoint, {
                yandexPassportOauthToken: config.oauthToken,
            });
        };
    }
    else if (isIamTokenCredentialsConfig(config)) {
        const iamToken = config.iamToken;
        // eslint-disable-next-line @typescript-eslint/require-await
        return async () => {
            return iamToken;
        };
    }
    else {
        let tokenService;
        if (isServiceAccountCredentialsConfig(config)) {
            tokenService = new IamTokenService(config.serviceAccountJson);
        }
        else {
            tokenService = new MetadataTokenService();
        }
        return async () => {
            return tokenService.getToken();
        };
    }
}
function newChannelCredentials(tokenCreator) {
    return credentials.combineChannelCredentials(credentials.createSsl(), credentials.createFromMetadataGenerator((
    // eslint-disable-next-line @typescript-eslint/naming-convention
    params, callback) => {
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
};
export class Session {
    constructor(config) {
        this.config = {
            ...defaultConfig,
            ...config,
        };
        this.endpointResolver = new EndpointResolver();
        this._tokenCreator = newTokenCreator(this.config, this.endpointResolver.resolve('iam'));
        this.channelCredentials = newChannelCredentials(this._tokenCreator);
    }
    get tokenCreator() {
        return this._tokenCreator;
    }
    get pollInterval() {
        return this.config.pollInterval;
    }
    async setEndpoint(newEndpoint) {
        await this.endpointResolver.updateEndpointList(newEndpoint);
    }
    client(cls) {
        const channel = createChannel(this.endpointResolver.resolve(cls.__endpointId), this.channelCredentials);
        return createClient(cls, channel);
    }
    restClient(cls) {
        return new cls(this.endpointResolver.resolve(cls.__endpointId), this.channelCredentials, this.config, this._tokenCreator);
    }
}
