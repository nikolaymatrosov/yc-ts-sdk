import AbortController from 'node-abort-controller';
import { isAbortError } from 'abort-controller-x';
import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';
import { createChannel, createClient } from 'nice-grpc';
import { credentials } from '@grpc/grpc-js';
import { EndpointResolver } from '../endpoint';
import { CreateIamTokenRequest, IamTokenServiceService } from '../../generated/yandex/cloud/iam/v1/iam_token_service';
export function fromServiceAccountJsonFile(data) {
    return {
        accessKeyId: data.id,
        privateKey: data.private_key,
        serviceAccountId: data.service_account_id,
    };
}
export class IamTokenService {
    constructor(iamCredentials, sslCredentials) {
        this.jwtExpirationTimeout = 3600 * 1000;
        this.tokenExpirationTimeout = 120 * 1000;
        this.tokenRequestTimeout = 10 * 1000;
        this.token = '';
        this.iamCredentials = iamCredentials;
        this.tokenTimestamp = null;
        this.sslCredentials = sslCredentials;
        this.endpointResolver = new EndpointResolver();
    }
    get expired() {
        return !this.tokenTimestamp || (DateTime.utc().diff(this.tokenTimestamp).valueOf() > this.tokenExpirationTimeout);
    }
    async getToken() {
        if (this.expired) {
            await this.initialize();
        }
        return this.token;
    }
    client() {
        const channel = createChannel(this.endpointResolver.resolve('iam'), credentials.createSsl());
        return createClient(IamTokenServiceService, channel);
    }
    getJwtRequest() {
        const now = DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const payload = {
            'iss': this.iamCredentials.serviceAccountId,
            'aud': 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
            'iat': Math.round(now.toSeconds()),
            'exp': Math.round(expires.toSeconds()),
        };
        const options = {
            algorithm: 'PS256',
            keyid: this.iamCredentials.accessKeyId,
        };
        return jwt.sign(payload, this.iamCredentials.privateKey, options);
    }
    async initialize() {
        const resp = await this.sendTokenRequest();
        if (resp) {
            this.token = resp.iamToken;
            this.tokenTimestamp = DateTime.utc();
        }
        else {
            throw new Error('Received empty token from IAM!');
        }
    }
    sendTokenRequest() {
        const abortController = new AbortController();
        setTimeout(() => {
            abortController.abort();
        }, this.tokenRequestTimeout);
        return this.client()
            .create(CreateIamTokenRequest.fromPartial({ jwt: this.getJwtRequest() }), {
            signal: abortController.signal,
        })
            .catch(error => {
            if (isAbortError(error)) {
                // aborted
            }
            else {
                throw error;
            }
        });
    }
}
