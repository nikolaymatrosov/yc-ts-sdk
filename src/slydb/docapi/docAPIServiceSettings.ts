/* tslint:disable:variable-name */
import { TokenCreator } from 'src/index';

export class DocAPIServiceSettings {
    static __endpointId = 'docapi';
    private _address: string;
    public _tokenCreator: TokenCreator;
    private $method_definitions: any;

    constructor(
        address: string,
        credentials: any,
        options: any,
        tokenCreator: TokenCreator
    ) {
        this._address = address;
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
}
