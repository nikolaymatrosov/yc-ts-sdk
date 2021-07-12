/// <reference types="node" />
import { Session, TokenCreator } from '../../index';
declare class StorageObject {
    private bucketName;
    private objectName;
    private bufferPromise;
    constructor(bucketName: string, objectName: string, bufferPromise: Promise<Buffer>);
    static fromFile(bucketName: string, objectName: string, fileName: string): StorageObject;
    static fromString(bucketName: string, objectName: string, content: string): StorageObject;
    static fromBuffer(bucketName: string, objectName: string, buffer: Buffer): StorageObject;
    getData(encoding: BufferEncoding): Promise<string>;
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
declare class StorageServiceImpl implements StorageService {
    static __endpointId: string;
    private _address;
    private _tokenCreator;
    private $method_definitions;
    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator);
    _url(bucketName: string, objectName: string): string;
    getObject(bucketName: string, objectName: string): Promise<StorageObject>;
    putObject({ bucketName, bufferPromise, objectName, }: Object): Promise<void>;
}
export declare function StorageService(session: Session): StorageServiceImpl;
export {};
