import { EndpointResolver } from './endpoint';
import * as metadata from './metadata';
import * as util from './util';
import './operation';
const grpc = require('grpc');
const iam = require('./api/iam/v1');
async function createIamToken(iamEndpoint, req) {
    const ctor = iam.IamTokenService.makeGrpcConstructor();
    let client = new ctor(iamEndpoint, grpc.credentials.createSsl());
    client = util.pimpServiceInstance(client);
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
    if (config.iamToken) {
        return async () => {
            return config.iamToken;
        };
    }
    const tokenService = new metadata.TokenService();
    return async () => {
        await tokenService.initialize();
        return tokenService.getToken();
    };
}
function newChannelCredentials(tokenCreator) {
    return grpc.credentials.combineChannelCredentials(grpc.credentials.createSsl(), grpc.credentials.createFromMetadataGenerator((params, callback) => {
        tokenCreator()
            .then((token) => {
            const md = new grpc.Metadata();
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
    async setEndpoint(newEndpoint) {
        await this.__endpointResolver.updateEndpointList(newEndpoint);
    }
    client(cls) {
        return util.pimpServiceInstance(new cls(this.__endpointResolver.resolve(cls.__endpointId), this.__channelCredentials, undefined, this.__tokenCreator));
    }
}
export default {
    Session,
    TokenService: metadata.TokenService,
};
//# sourceMappingURL=index.js.map