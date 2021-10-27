import { IIAmCredentials } from './TokenService/iamTokenService';
import './operation';
import { ServiceDefinition } from '@grpc/grpc-js';
import { Client } from 'nice-grpc';
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
export declare type SdkServiceDefinition<T> = ServiceDefinition<T> & {
    __endpointId: string;
};
declare type SessionConfig = OAuthCredentialsConfig | IamTokenCredentialsConfig | ServiceAccountCredentialsConfig | GenericConfig;
export declare type TokenCreator = () => Promise<string>;
export declare type SdkRestServiceImp<T> = new (address: string, credentials: any, options: any, tokenCreator: TokenCreator) => T;
export declare type SdkRestServiceDefinition<T> = SdkRestServiceImp<T> & {
    __endpointId: string;
};
export declare class Session {
    private config;
    private endpointResolver;
    private channelCredentials;
    constructor(config?: SessionConfig);
    private _tokenCreator;
    get tokenCreator(): TokenCreator;
    get pollInterval(): number | undefined;
    setEndpoint(newEndpoint: string): Promise<void>;
    client<Service extends ServiceDefinition<T>, T>(cls: SdkServiceDefinition<T>): Client<ServiceDefinition<T>, any>;
    restClient<T>(cls: SdkRestServiceDefinition<T>): T;
}
export {};
