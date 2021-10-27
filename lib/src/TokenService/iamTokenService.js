"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamTokenService = exports.fromServiceAccountJsonFile = void 0;
const endpoint_1 = require("../endpoint");
const grpc_js_1 = require("@grpc/grpc-js");
const abort_controller_x_1 = require("abort-controller-x");
const iam_token_service_1 = require("../../generated/yandex/cloud/iam/v1/iam_token_service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const luxon_1 = require("luxon");
const nice_grpc_1 = require("nice-grpc");
const node_abort_controller_1 = __importDefault(require("node-abort-controller"));
function fromServiceAccountJsonFile(data) {
    return {
        accessKeyId: data.id,
        privateKey: data.private_key,
        serviceAccountId: data.service_account_id,
    };
}
exports.fromServiceAccountJsonFile = fromServiceAccountJsonFile;
class IamTokenService {
    constructor(iamCredentials, sslCredentials) {
        this.jwtExpirationTimeout = 3600 * 1000;
        this.tokenExpirationTimeout = 120 * 1000;
        this.tokenRequestTimeout = 10 * 1000;
        this.token = '';
        this.iamCredentials = iamCredentials;
        this.tokenTimestamp = null;
        this.sslCredentials = sslCredentials;
        this.endpointResolver = new endpoint_1.EndpointResolver();
    }
    get expired() {
        return (!this.tokenTimestamp ||
            luxon_1.DateTime.utc().diff(this.tokenTimestamp).valueOf() >
                this.tokenExpirationTimeout);
    }
    async getToken() {
        if (this.expired) {
            await this.initialize();
        }
        return this.token;
    }
    client() {
        const channel = (0, nice_grpc_1.createChannel)(this.endpointResolver.resolve('iam'), grpc_js_1.credentials.createSsl());
        return (0, nice_grpc_1.createClient)(iam_token_service_1.IamTokenServiceService, channel);
    }
    getJwtRequest() {
        const now = luxon_1.DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const payload = {
            iss: this.iamCredentials.serviceAccountId,
            aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
            iat: Math.round(now.toSeconds()),
            exp: Math.round(expires.toSeconds()),
        };
        const options = {
            algorithm: 'PS256',
            keyid: this.iamCredentials.accessKeyId,
        };
        return jsonwebtoken_1.default.sign(payload, this.iamCredentials.privateKey, options);
    }
    async initialize() {
        const resp = await this.sendTokenRequest();
        if (resp) {
            this.token = resp.iamToken;
            this.tokenTimestamp = luxon_1.DateTime.utc();
        }
        else {
            throw new Error('Received empty token from IAM!');
        }
    }
    sendTokenRequest() {
        const abortController = new node_abort_controller_1.default();
        setTimeout(() => {
            abortController.abort();
        }, this.tokenRequestTimeout);
        return this.client()
            .create(iam_token_service_1.CreateIamTokenRequest.fromPartial({
            jwt: this.getJwtRequest(),
        }), {
            signal: abortController.signal,
        })
            .catch((error) => {
            if ((0, abort_controller_x_1.isAbortError)(error)) {
                // aborted
            }
            else {
                throw error;
            }
        });
    }
}
exports.IamTokenService = IamTokenService;
