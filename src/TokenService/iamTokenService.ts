import AbortController from 'node-abort-controller';
import { isAbortError } from 'abort-controller-x';
import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';
import { ITokenService } from './ITokenService';
import { Client, createChannel, createClient } from 'nice-grpc';
import { credentials } from '@grpc/grpc-js';
import { EndpointResolver } from '../endpoint';
import { CreateIamTokenRequest, CreateIamTokenResponse, IamTokenServiceService } from 'cloud/iam/v1/iam_token_service';

interface ServiceAccountJsonFileContents {
    id: string;
    created_at: string;
    key_algorithm: string;
    service_account_id: string;
    private_key: string;
    public_key: string;
}

export function fromServiceAccountJsonFile(data: ServiceAccountJsonFileContents): IIAmCredentials {
    return {
        accessKeyId: data.id,
        privateKey: data.private_key,
        serviceAccountId: data.service_account_id,
    };
}

export interface IIAmCredentials {
    serviceAccountId: string;
    accessKeyId: string;
    privateKey: Buffer | string;
}

export interface ISslCredentials {
    rootCertificates?: Buffer;
    clientPrivateKey?: Buffer;
    clientCertChain?: Buffer;
}

export class IamTokenService implements ITokenService {
    public readonly sslCredentials?: ISslCredentials;
    private jwtExpirationTimeout = 3600 * 1000;
    private tokenExpirationTimeout = 120 * 1000;
    private tokenRequestTimeout = 10 * 1000;
    private token: string = '';
    private tokenTimestamp: DateTime | null;
    private readonly iamCredentials: IIAmCredentials;
    private endpointResolver: EndpointResolver;


    constructor(iamCredentials: IIAmCredentials, sslCredentials?: ISslCredentials) {
        this.iamCredentials = iamCredentials;
        this.tokenTimestamp = null;

        this.sslCredentials = sslCredentials;
        this.endpointResolver = new EndpointResolver();
    }

    private get expired() {
        return !this.tokenTimestamp || (
            DateTime.utc().diff(this.tokenTimestamp).valueOf() > this.tokenExpirationTimeout
        );
    }

    public async getToken(): Promise<string> {
        if (this.expired) {
            await this.initialize();
        }
        return this.token;
    }

    private client(): Client<typeof IamTokenServiceService> {
        const channel = createChannel(this.endpointResolver.resolve('iam'), credentials.createSsl());
        return createClient(IamTokenServiceService as any, channel) as Client<typeof IamTokenServiceService>;
    }

    private getJwtRequest() {
        const now = DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const payload = {
            'iss': this.iamCredentials.serviceAccountId,
            'aud': 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
            'iat': Math.round(now.toSeconds()),
            'exp': Math.round(expires.toSeconds()),
        };
        const options: jwt.SignOptions = {
            algorithm: 'PS256',
            keyid: this.iamCredentials.accessKeyId,
        };
        return jwt.sign(payload, this.iamCredentials.privateKey, options);
    }

    private async initialize() {
        const resp = await this.sendTokenRequest();
        if (resp) {
            this.token = resp.iamToken;
            this.tokenTimestamp = DateTime.utc();
        } else {
            throw new Error('Received empty token from IAM!');
        }
    }

    private sendTokenRequest(): Promise<CreateIamTokenResponse | void> {
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
                } else {
                    throw error;
                }
            });
    }
}