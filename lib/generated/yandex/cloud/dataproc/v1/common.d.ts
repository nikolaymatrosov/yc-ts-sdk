import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export declare enum Health {
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    DEAD = 2,
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function healthFromJSON(object: any): Health;
export declare function healthToJSON(object: Health): string;
export interface Resources {
    /**
     * ID of the resource preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/data-proc/concepts/instance-types).
     */
    resourcePresetId: string;
    /**
     * Type of the storage environment for the host.
     * Possible values:
     * * network-hdd - network HDD drive,
     * * network-ssd - network SSD drive.
     */
    diskTypeId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
}
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
