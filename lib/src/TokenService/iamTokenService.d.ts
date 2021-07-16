/// <reference types="node" />
import { ITokenService } from './ITokenService';
interface ServiceAccountJsonFileContents {
    id: string;
    created_at: string;
    key_algorithm: string;
    service_account_id: string;
    private_key: string;
    public_key: string;
}
export declare function fromServiceAccountJsonFile(data: ServiceAccountJsonFileContents): IIAmCredentials;
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
export declare class IamTokenService implements ITokenService {
    readonly sslCredentials?: ISslCredentials;
    private jwtExpirationTimeout;
    private tokenExpirationTimeout;
    private tokenRequestTimeout;
    private token;
    private tokenTimestamp;
    private readonly iamCredentials;
    private endpointResolver;
    constructor(iamCredentials: IIAmCredentials, sslCredentials?: ISslCredentials);
    private get expired();
    getToken(): Promise<string>;
    private client;
    private getJwtRequest;
    private initialize;
    private sendTokenRequest;
}
export {};
