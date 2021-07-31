import { Buffer } from 'buffer';
import fs from 'fs';

export interface IStorageObject {
    bucketName: string;
    bufferPromise: Promise<Buffer>;
    objectName: string;
}

export class StorageObject implements IStorageObject {
    bucketName: string;
    objectName: string;
    bufferPromise: Promise<Buffer>;

    constructor(bucketName: string, objectName: string, bufferPromise: Promise<Buffer>) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.bufferPromise = bufferPromise;
    }

    // noinspection JSUnusedGlobalSymbols
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

    // noinspection JSUnusedGlobalSymbols
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
        const buffer = await this.bufferPromise;
        return buffer.toString(encoding);
    }
}
