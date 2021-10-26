import { Resources } from '../../../../../yandex/cloud/mdb/greenplum/v1/config';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export interface Host {
    /**
     * Name of the Greenplum host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the Greenplum cluster. The ID is assigned by MDB at creation time. */
    clusterId: string;
    /** ID of the availability zone where the Greenplum host resides. */
    zoneId: string;
    /** Type of the host. */
    type: Host_Type;
    /** Resources allocated to the Greenplum host. */
    resources: Resources | undefined;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
}
export declare enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** MASTER - Greenplum master host. */
    MASTER = 1,
    /** REPLICA - Greenplum master host. */
    REPLICA = 2,
    /** SEGMENT - Greenplum segment host. */
    SEGMENT = 3,
    UNRECOGNIZED = -1
}
export declare function host_TypeFromJSON(object: any): Host_Type;
export declare function host_TypeToJSON(object: Host_Type): string;
export declare enum Host_Health {
    /** UNKNOWN - Health of the host is unknown. */
    UNKNOWN = 0,
    /** ALIVE - The host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is working below capacity or not fully functional. */
    DEGRADED = 3,
    /** UNBALANCED - One or more segments are not in prefer role. */
    UNBALANCED = 4,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
export declare const Host: {
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
