import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";
export interface Proxy {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.Proxy';
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
    $type: 'yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry';
    key: string;
    value: string;
}
export interface Target {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.Target';
    /** Clickhouse settings for proxy. */
    clickhouse: Target_ClickHouse | undefined;
    /** PostgreSQL settings for proxy. */
    postgresql: Target_PostgreSQL | undefined;
}
export interface Target_PostgreSQL {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL';
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
export interface Target_ClickHouse {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse';
    /** Cluster identifier for clickhouse. */
    clusterId: string;
    /** Clickhouse user. */
    user: string;
    /** Clickhouse password, input only field. */
    password: string;
    /** Clickhouse database name. */
    db: string;
    /** Clickhouse proxy-host for connection, output only field. */
    endpoint: string;
}
export declare const Proxy: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy";
    encode(message: Proxy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proxy;
    fromJSON(object: any): Proxy;
    toJSON(message: Proxy): unknown;
    fromPartial(object: DeepPartial<Proxy>): Proxy;
};
export declare const Proxy_LabelsEntry: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry";
    encode(message: Proxy_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proxy_LabelsEntry;
    fromJSON(object: any): Proxy_LabelsEntry;
    toJSON(message: Proxy_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Proxy_LabelsEntry>): Proxy_LabelsEntry;
};
export declare const Target: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target";
    encode(message: Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial(object: DeepPartial<Target>): Target;
};
export declare const Target_PostgreSQL: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL";
    encode(message: Target_PostgreSQL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target_PostgreSQL;
    fromJSON(object: any): Target_PostgreSQL;
    toJSON(message: Target_PostgreSQL): unknown;
    fromPartial(object: DeepPartial<Target_PostgreSQL>): Target_PostgreSQL;
};
export declare const Target_ClickHouse: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse";
    encode(message: Target_ClickHouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target_ClickHouse;
    fromJSON(object: any): Target_ClickHouse;
    toJSON(message: Target_ClickHouse): unknown;
    fromPartial(object: DeepPartial<Target_ClickHouse>): Target_ClickHouse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
