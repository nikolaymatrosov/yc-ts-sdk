import { Any } from 'generated/google/protobuf/any';
declare type IServiceInstance = {
    [key: string]: () => Promise<any> | any;
};
export declare function pimpServiceInstance(instance: IServiceInstance): IServiceInstance;
export declare function extractAny(data: Any | undefined): import("generated/typeRegistry").UnknownMessage | undefined;
export {};
