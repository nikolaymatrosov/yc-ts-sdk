declare type IServiceInstance = {
    [key: string]: () => Promise<any> | any;
};
export declare function pimpServiceInstance(instance: IServiceInstance): IServiceInstance;
export declare function extractAny(data: any): any;
export {};
