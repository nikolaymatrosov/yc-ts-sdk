import { ServiceDefinition } from '@grpc/grpc-js';
import { IIAmCredentials } from './TokenService/iamTokenService';
import './operation';
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
export declare type SdkServiceDefinition<T> = ServiceDefinition<T> & {
    __endpointId: string;
};
interface TokenCreatorConfig {
    iamToken?: string;
    oauthToken?: string;
    serviceAccountJson?: IIAmCredentials;
    pollInterval: number;
    metadataToken: boolean;
}
export declare type TokenCreator = () => Promise<string>;
export interface SdkRestServiceImp<T> {
    new (address: string, credentials: any, options: any, tokenCreator: TokenCreator): T;
}
export declare type SdkRestServiceDefinition<T> = SdkRestServiceImp<T> & {
    __endpointId: string;
};
export declare class Session {
    __config: TokenCreatorConfig;
    private __endpointResolver;
    private __channelCredentials;
    private __tokenCreator;
    constructor(config?: OAuthCredentialsConfig | IamTokenCredentialsConfig | GenericConfig);
    get tokenCreator(): TokenCreator;
    setEndpoint(newEndpoint: string): Promise<void>;
    client<Service extends ServiceDefinition<T>, T>(cls: SdkServiceDefinition<T>): Client<ServiceDefinition<T>>;
    restClient<T>(cls: SdkRestServiceDefinition<T>): T;
}
export {};
