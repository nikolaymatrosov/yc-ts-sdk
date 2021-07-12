/// <reference types="node" />
import { ITokenService } from './ITokenService';
export interface IIAmCredentials {
    serviceAccountId: string;
    accessKeyId: string;
    privateKey: Buffer;
    iamEndpoint: string;
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
    private __endpointResolver;
    constructor(iamCredentials: IIAmCredentials, sslCredentials?: ISslCredentials);
    private get expired();
    getToken(): Promise<string>;
    private client;
    private getJwtRequest;
    private initialize;
    private sendTokenRequest;
}
