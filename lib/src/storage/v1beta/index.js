// noinspection JSUnusedGlobalSymbols
import fetch from 'node-fetch';
import { Session } from '../../index';
import { StorageObject, } from '../../storage/v1beta/storageObject';
class StorageServiceImpl {
    constructor(address, credentials, options, tokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
    _url(bucketName, objectName) {
        return `https://${this._address}/${bucketName}/${objectName}`;
    }
    async getObject(bucketName, objectName) {
        const token = await this._tokenCreator();
        const res = await fetch(this._url(bucketName, objectName), {
            method: 'GET',
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'X-YaCloud-SubjectToken': token,
            },
        });
        if (!res.ok) {
            throw new Error(`Storage replied with ${res.status}: ${res.statusText}`);
        }
        const buf = await res.buffer();
        return StorageObject.fromBuffer(bucketName, objectName, buf);
    }
    async putObject({ bucketName, bufferPromise, objectName }) {
        const token = await this._tokenCreator();
        const buffer = await bufferPromise;
        const res = await fetch(this._url(bucketName, objectName), {
            method: 'PUT',
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'X-YaCloud-SubjectToken': token,
            },
            body: buffer,
        });
        if (!res.ok) {
            throw new Error(`Storage replied with ${res.status}: ${res.statusText}`);
        }
    }
}
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-denylist,id-match
StorageServiceImpl.__endpointId = 'storage';
// eslint-disable-next-line @typescript-eslint/naming-convention
export function StorageService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.restClient(StorageServiceImpl);
}
