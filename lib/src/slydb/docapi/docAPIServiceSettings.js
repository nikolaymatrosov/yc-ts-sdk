export class DocAPIServiceSettings {
    constructor(address, credentials, options, tokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
}
DocAPIServiceSettings.__endpointId = 'docapi';
