import { Session, TokenCreator } from 'src/index';
import { Buffer } from 'buffer';

import fetch from 'node-fetch';

import fs from 'fs';

class StorageObject {
    private bucketName: string;
    private objectName: string;
    private bufferPromise: Promise<Buffer>;

    constructor(bucketName: string, objectName: string, bufferPromise: Promise<Buffer>) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.bufferPromise = bufferPromise;
    }

    static fromFile(bucketName: string, objectName: string, fileName: string) {
        return new this(
            bucketName,
            objectName,
            new Promise((resolve, reject) => {
                fs.readFile(fileName, (err: any, data: Buffer | PromiseLike<Buffer>) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(data);
                });
            }),
        );
    }

    static fromString(bucketName: string, objectName: string, content: string) {
        return this.fromBuffer(
            bucketName,
            objectName,
            Buffer.from(content, 'utf-8'),
        );
    }

    static fromBuffer(bucketName: string, objectName: string, buffer: Buffer) {
        return new this(
            bucketName,
            objectName,
            new Promise((resolve) => {
                resolve(buffer);
            }),
        );
    }

    async getData(encoding: BufferEncoding) {
        encoding = encoding || 'utf-8';
        let buffer = await this.bufferPromise;
        return buffer.toString(encoding);
    }
}

interface Object {
    bucketName: string;
    bufferPromise: Promise<Buffer>;
    objectName: string;
}


interface StorageService {

    getObject(bucketName: string, objectName: string): Promise<StorageObject>;

    putObject(object: Object): Promise<void>;
}

class StorageServiceImpl implements StorageService {
    static __endpointId = 'storage';
    private _address: string;
    private _tokenCreator: TokenCreator;
    private $method_definitions: {};

    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;

        this.$method_definitions = {};
    }

    _url(bucketName: string, objectName: string) {
        return `https://${this._address}/${bucketName}/${objectName}`;
    }

    async getObject(bucketName: string, objectName: string) {
        const token = await this._tokenCreator();

        const res = await fetch(this._url(bucketName, objectName), {
            method: 'GET',
            headers: {
                'X-YaCloud-SubjectToken': token,
            },
        });

        if (!res.ok) {
            throw new Error(
                `Storage replied with ${res.status}: ${res.statusText}`,
            );
        }
        const buf = await res.buffer();
        return StorageObject.fromBuffer(bucketName, objectName, buf);
    }

    async putObject(
        {
            bucketName,
            bufferPromise,
            objectName,
        }: Object) {
        const token = await this._tokenCreator();
        const buffer = await bufferPromise;

        const res = await fetch(
            this._url(bucketName, objectName),
            {
                method: 'PUT',
                headers: {
                    'X-YaCloud-SubjectToken': token,
                },
                body: buffer,
            },
        );

        if (!res.ok) {
            throw new Error(
                `Storage replied with ${res.status}: ${res.statusText}`,
            );
        }
    }
}


export function StorageService(session: Session) {
    if (session === undefined) {
        session = new Session();
    }

    return session.restClient(StorageServiceImpl);
}
