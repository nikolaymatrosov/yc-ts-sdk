import { ITokenService } from './ITokenService';
export declare class MetadataTokenService implements ITokenService {
    private readonly url;
    private readonly opts;
    private token?;
    constructor();
    getToken(): Promise<string>;
    private fetchToken;
    private initialize;
}
