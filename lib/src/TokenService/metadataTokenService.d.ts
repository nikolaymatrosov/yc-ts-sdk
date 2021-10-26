import { ITokenService } from './ITokenService';
export declare class MetadataTokenService implements ITokenService {
    private readonly _url;
    private readonly _opts;
    private _token?;
    constructor();
    getToken(): Promise<string>;
    private _fetchToken;
    private _initialize;
}
