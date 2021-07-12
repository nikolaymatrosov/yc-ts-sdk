import { Session, TokenCreator } from 'src/index';
import AWS, { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

class DocAPIServiceSettings {
    static __endpointId = 'docapi';
    private _address: string;
    public _tokenCreator: TokenCreator;
    private $method_definitions: any;

    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
}


class DocAPIService {
    private _tokenCreator: TokenCreator;
    private dynamoDb: DynamoDB;
    private documentClient: DocumentClient;

    constructor(endpoint: string, session?: Session) {
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

    async createTable(params: DynamoDB.CreateTableInput | ((err: AWS.AWSError, data: DynamoDB.CreateTableOutput) => void) | undefined) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.createTable(<DynamoDB.CreateTableInput>params), token);
    }

    async deleteTable(params: DynamoDB.DeleteTableInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.deleteTable(params), token);
    }

    async describeTable(params: DynamoDB.DescribeTableInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.describeTable(params), token);
    }

    async listTables(params: DynamoDB.ListTablesInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.listTables(params), token);
    }


    async batchGetItem(params: DynamoDB.DocumentClient.BatchGetItemInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.batchGet(params), token);
    }

    async batchWriteItem(params: DynamoDB.DocumentClient.BatchWriteItemInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.batchWrite(params), token);
    }

    async deleteItem(params: DynamoDB.DocumentClient.DeleteItemInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.delete(params), token);
    }

    async getItem(params: DynamoDB.DocumentClient.GetItemInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.get(params), token);
    }

    async putItem(params: DynamoDB.DocumentClient.PutItemInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.put(params), token);
    }

    async query(params: DynamoDB.DocumentClient.QueryInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.query(params), token);
    }

    async scan(params: DynamoDB.DocumentClient.ScanInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.scan(params), token);
    }

    async transactGetItems(params: DynamoDB.DocumentClient.TransactGetItemsInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.transactGet(params), token);
    }

    async transactWriteItems(params: DynamoDB.DocumentClient.TransactWriteItemsInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.transactWrite(params), token);
    }

    async updateItem(params: DynamoDB.DocumentClient.UpdateItemInput) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.update(params), token);
    }

    sendRequest<T>(
        request: AWS.Request<T, AWS.AWSError>,
        token: string) {
        request.on('sign', (req: { httpRequest: { headers: { [x: string]: string; }; }; }) => {
            req.httpRequest.headers['Authorization'] = 'Bearer ' + token;
        });
        return new Promise((resolve, reject) => {
            request.send((err, out) => {
                if (err) reject(err);
                else resolve(out);
            });
        });
    }
}

module.exports = {
    DocAPIService,
};



