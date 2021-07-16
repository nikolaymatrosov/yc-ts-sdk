import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";
export interface Proxy {
    /** ID of the proxy. */
    id: string;
    /** ID of the folder that the proxy belongs to. */
    folderId: string;
    /** Creation timestamp for the proxy. */
    createdAt: Date | undefined;
    /** Name of the proxy. */
    name: string;
    /** Description of the proxy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** MDB specific settings. */
    target: Target | undefined;
}
export interface Proxy_LabelsEntry {
    key: string;
    value: string;
}
export interface Target {
    /** PostgreSQL settings for proxy. */
    postgresql: Target_PostgreSQL | undefined;
}
export interface Target_PostgreSQL {
    /** Cluster identifier for postgresql. */
    clusterId: string;
    /** PostgreSQL user. */
    user: string;
    /** PostgreSQL password, input only field. */
    password: string;
    /** PostgreSQL database name. */
    db: string;
    /** PostgreSQL proxy-host for connection, output only field. */
    endpoint: string;
}
export declare const Proxy: {
    encode(message: Proxy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proxy;
    fromJSON(object: any): Proxy;
    toJSON(message: Proxy): unknown;
    fromPartial(object: DeepPartial<Proxy>): Proxy;
};
export declare const Proxy_LabelsEntry: {
    encode(message: Proxy_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proxy_LabelsEntry;
    fromJSON(object: any): Proxy_LabelsEntry;
    toJSON(message: Proxy_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Proxy_LabelsEntry>): Proxy_LabelsEntry;
};
export declare const Target: {
    encode(message: Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial(object: DeepPartial<Target>): Target;
};
export declare const Target_PostgreSQL: {
    encode(message: Target_PostgreSQL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target_PostgreSQL;
    fromJSON(object: any): Target_PostgreSQL;
    toJSON(message: Target_PostgreSQL): unknown;
    fromPartial(object: DeepPartial<Target_PostgreSQL>): Target_PostgreSQL;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
