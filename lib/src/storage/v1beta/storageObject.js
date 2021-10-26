import { Buffer } from 'buffer';
import fs from 'fs';
export class StorageObject {
    constructor(bucketName, objectName, bufferPromise) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.bufferPromise = bufferPromise;
    }
    // noinspection JSUnusedGlobalSymbols
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
    // noinspection JSUnusedGlobalSymbols
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
        const buffer = await this.bufferPromise;
        return buffer.toString(encoding);
    }
}
