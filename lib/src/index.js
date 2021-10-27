"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const iamTokenService_1 = require("./TokenService/iamTokenService");
const metadataTokenService_1 = require("./TokenService/metadataTokenService");
const endpoint_1 = require("./endpoint");
require("./operation");
const grpc_js_1 = require("@grpc/grpc-js");
const iam_token_service_1 = require("../generated/yandex/cloud/iam/v1/iam_token_service");
const nice_grpc_1 = require("nice-grpc");
async function createIamToken(iamEndpoint, req) {
    const channel = (0, nice_grpc_1.createChannel)(iamEndpoint, grpc_js_1.credentials.createSsl());
    const client = (0, nice_grpc_1.createClient)(iam_token_service_1.IamTokenServiceService, channel);
    const resp = await client.create(iam_token_service_1.CreateIamTokenRequest.fromJSON(req));
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
            tokenService = new iamTokenService_1.IamTokenService(config.serviceAccountJson);
        }
        else {
            tokenService = new metadataTokenService_1.MetadataTokenService();
        }
        return async () => {
            return tokenService.getToken();
        };
    }
}
function newChannelCredentials(tokenCreator) {
    return grpc_js_1.credentials.combineChannelCredentials(grpc_js_1.credentials.createSsl(), grpc_js_1.credentials.createFromMetadataGenerator((
    // eslint-disable-next-line @typescript-eslint/naming-convention
    params, callback) => {
        tokenCreator()
            .then((token) => {
            const md = new grpc_js_1.Metadata();
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
class Session {
    constructor(config) {
        this.config = {
            ...defaultConfig,
            ...config,
        };
        this.endpointResolver = new endpoint_1.EndpointResolver();
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
        const channel = (0, nice_grpc_1.createChannel)(this.endpointResolver.resolve(cls.__endpointId), this.channelCredentials);
        return (0, nice_grpc_1.createClient)(cls, channel);
    }
    restClient(cls) {
        return new cls(this.endpointResolver.resolve(cls.__endpointId), this.channelCredentials, this.config, this._tokenCreator);
    }
}
exports.Session = Session;
