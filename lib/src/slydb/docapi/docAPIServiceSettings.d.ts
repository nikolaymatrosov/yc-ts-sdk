import { TokenCreator } from '../../index';
export declare class DocAPIServiceSettings {
    static __endpointId: string;
    private _address;
    _tokenCreator: TokenCreator;
    private $method_definitions;
    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator);
}
