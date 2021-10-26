import { Session, TokenCreator } from '../../index';
import { IStorageObject, StorageObject } from '../../storage/v1beta/storageObject';
interface StorageService {
    getObject(bucketName: string, objectName: string): Promise<IStorageObject>;
    putObject(object: object): Promise<void>;
}
declare class StorageServiceImpl implements StorageService {
    static __endpointId: string;
    private readonly _address;
    private readonly _tokenCreator;
    private $method_definitions;
    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator);
    _url(bucketName: string, objectName: string): string;
    getObject(bucketName: string, objectName: string): Promise<StorageObject>;
    putObject({ bucketName, bufferPromise, objectName }: IStorageObject): Promise<void>;
}
export declare function StorageService(session: Session): StorageServiceImpl;
export {};
