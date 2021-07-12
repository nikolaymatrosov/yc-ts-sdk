import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export declare enum IpPermissionAction {
    IP_PERMISSION_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of an ip permission. */
    ADD = 1,
    /** REMOVE - Removal of an ip permission. */
    REMOVE = 2,
    UNRECOGNIZED = -1
}
export declare function ipPermissionActionFromJSON(object: any): IpPermissionAction;
export declare function ipPermissionActionToJSON(object: IpPermissionAction): string;
export interface IpPermission {
    action: IpPermission_Action;
    ip: string;
}
export declare enum IpPermission_Action {
    ACTION_UNSPECIFIED = 0,
    PULL = 1,
    PUSH = 2,
    UNRECOGNIZED = -1
}
export declare function ipPermission_ActionFromJSON(object: any): IpPermission_Action;
export declare function ipPermission_ActionToJSON(object: IpPermission_Action): string;
export interface IpPermissionDelta {
    /** The action that is being performed on an ip permission. */
    action: IpPermissionAction;
    /** Ip permission. */
    ipPermission: IpPermission | undefined;
}
export declare const IpPermission: {
    encode(message: IpPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IpPermission;
    fromJSON(object: any): IpPermission;
    toJSON(message: IpPermission): unknown;
    fromPartial(object: DeepPartial<IpPermission>): IpPermission;
};
export declare const IpPermissionDelta: {
    encode(message: IpPermissionDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IpPermissionDelta;
    fromJSON(object: any): IpPermissionDelta;
    toJSON(message: IpPermissionDelta): unknown;
    fromPartial(object: DeepPartial<IpPermissionDelta>): IpPermissionDelta;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
