import { Session } from '../../index';
import { Buffer } from 'buffer';
import fetch from 'node-fetch';
import fs from 'fs';
class StorageObject {
    constructor(bucketName, objectName, bufferPromise) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.bufferPromise = bufferPromise;
    }
    static fromFile(bucketName, objectName, fileName) {
        return new this(bucketName, objectName, new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    return reject(err);
                }
                return resolve(data);
            });
        }));
    }
    static fromString(bucketName, objectName, content) {
        return this.fromBuffer(bucketName, objectName, Buffer.from(content, 'utf-8'));
    }
    static fromBuffer(bucketName, objectName, buffer) {
        return new this(bucketName, objectName, new Promise((resolve) => {
            resolve(buffer);
        }));
    }
    async getData(encoding) {
        encoding = encoding || 'utf-8';
        let buffer = await this.bufferPromise;
        return buffer.toString(encoding);
    }
}
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
                'X-YaCloud-SubjectToken': token,
            },
        });
        if (!res.ok) {
            throw new Error(`Storage replied with ${res.status}: ${res.statusText}`);
        }
        const buf = await res.buffer();
        return StorageObject.fromBuffer(bucketName, objectName, buf);
    }
    async putObject({ bucketName, bufferPromise, objectName, }) {
        const token = await this._tokenCreator();
        const buffer = await bufferPromise;
        const res = await fetch(this._url(bucketName, objectName), {
            method: 'PUT',
            headers: {
                'X-YaCloud-SubjectToken': token,
            },
            body: buffer,
        });
        if (!res.ok) {
            throw new Error(`Storage replied with ${res.status}: ${res.statusText}`);
        }
    }
}
StorageServiceImpl.__endpointId = 'storage';
export function StorageService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.restClient(StorageServiceImpl);
}
