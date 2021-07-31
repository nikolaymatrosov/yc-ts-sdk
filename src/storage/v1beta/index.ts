// noinspection JSUnusedGlobalSymbols

import { Session, TokenCreator } from 'src/index';

import fetch from 'node-fetch';
import { IStorageObject, StorageObject } from 'src/storage/v1beta/storageObject';


interface StorageService {

    getObject(bucketName: string, objectName: string): Promise<IStorageObject>;

    putObject(object: object): Promise<void>;
}

class StorageServiceImpl implements StorageService {
    // tslint:disable-next-line:variable-name
    static __endpointId = 'storage';
    private readonly _address: string;
    private readonly _tokenCreator: TokenCreator;
    // tslint:disable-next-line:variable-name
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
        }: IStorageObject) {
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
