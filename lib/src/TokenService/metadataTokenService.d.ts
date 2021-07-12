import { ITokenService } from './ITokenService';
export declare class MetadataTokenService implements ITokenService {
    private _url;
    private _opts;
    private _token?;
    constructor();
    getToken(): Promise<string>;
    private _fetchToken;
    private _initialize;
}
