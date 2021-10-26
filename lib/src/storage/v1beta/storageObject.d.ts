/// <reference types="node" />
export interface IStorageObject {
    bucketName: string;
    bufferPromise: Promise<Buffer>;
    objectName: string;
}
export declare class StorageObject implements IStorageObject {
    bucketName: string;
    objectName: string;
    bufferPromise: Promise<Buffer>;
    constructor(bucketName: string, objectName: string, bufferPromise: Promise<Buffer>);
    static fromFile(bucketName: string, objectName: string, fileName: string): StorageObject;
    static fromString(bucketName: string, objectName: string, content: string): StorageObject;
    static fromBuffer(bucketName: string, objectName: string, buffer: Buffer): StorageObject;
    getData(encoding: BufferEncoding): Promise<string>;
}
