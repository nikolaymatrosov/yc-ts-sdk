import { Session } from '../../index';
import AWS, { DynamoDB } from 'aws-sdk';
class DocAPIServiceSettings {
    constructor(address, credentials, options, tokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
}
DocAPIServiceSettings.__endpointId = 'docapi';
class DocAPIService {
    constructor(endpoint, session) {
        if (session === undefined) {
            session = new Session({});
        }
        var settings = session.restClient(DocAPIServiceSettings);
        this._tokenCreator = settings._tokenCreator;
        AWS.config.update({
            region: 'us-west-2',
            dynamodb: {
                // DocAPI proxy endpoint, https://host:port/full/database/name
                endpoint: endpoint,
            },
            /*
              Does not matter - we later replace Authorization header
            */
            accessKeyId: 'fakeMyKeyId',
            secretAccessKey: 'fakeSecretAccessKey',
        });
        this.dynamoDb = new DynamoDB();
        this.documentClient = new DynamoDB.DocumentClient();
    }
    async createTable(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.createTable(params), token);
    }
    async deleteTable(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.deleteTable(params), token);
    }
    async describeTable(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.describeTable(params), token);
    }
    async listTables(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.listTables(params), token);
    }
    async batchGetItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.batchGet(params), token);
    }
    async batchWriteItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.batchWrite(params), token);
    }
    async deleteItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.delete(params), token);
    }
    async getItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.get(params), token);
    }
    async putItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.put(params), token);
    }
    async query(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.query(params), token);
    }
    async scan(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.scan(params), token);
    }
    async transactGetItems(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.transactGet(params), token);
    }
    async transactWriteItems(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.transactWrite(params), token);
    }
    async updateItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.update(params), token);
    }
    sendRequest(request, token) {
        request.on('sign', (req) => {
            req.httpRequest.headers['Authorization'] = 'Bearer ' + token;
        });
        return new Promise((resolve, reject) => {
            request.send((err, out) => {
                if (err)
                    reject(err);
                else
                    resolve(out);
            });
        });
    }
}
module.exports = {
    DocAPIService,
};
