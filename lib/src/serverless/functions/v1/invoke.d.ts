import { Session, TokenCreator } from '../../../index';
declare class InvokeServiceImpl {
    static __endpointId: string;
    $method_definitions: {};
    private _tokenCreator;
    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator);
    invoke(functionId: string, payload?: any): Promise<object | string>;
    wrap(functionId: string): (payload?: any) => Promise<object | string>;
}
export declare function InvokeService(session?: Session): InvokeServiceImpl;
export {};
