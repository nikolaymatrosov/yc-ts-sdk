import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export declare enum MaintenancePolicy {
    MAINTENANCE_POLICY_UNSPECIFIED = 0,
    /** RESTART - Restart instances on the same host after maintenance event. */
    RESTART = 1,
    /** MIGRATE - Migrate instances to another host before maintenance event. */
    MIGRATE = 2,
    UNRECOGNIZED = -1
}
export declare function maintenancePolicyFromJSON(object: any): MaintenancePolicy;
export declare function maintenancePolicyToJSON(object: MaintenancePolicy): string;
/** Represents group of dedicated hosts */
export interface HostGroup {
    /** ID of the group. */
    id: string;
    /** ID of the folder that the group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /** Name of the group. The name is unique within the folder. */
    name: string;
    /** Description of the group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Availability zone where all dedicated hosts are allocated. */
    zoneId: string;
    /** Status of the group. */
    status: HostGroup_Status;
    /** ID of host type. Resources provided by each host of the group. */
    typeId: string;
    /** Behaviour on maintenance events. */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy: ScalePolicy | undefined;
}
export declare enum HostGroup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    UPDATING = 3,
    DELETING = 4,
    UNRECOGNIZED = -1
}
export declare function hostGroup_StatusFromJSON(object: any): HostGroup_Status;
export declare function hostGroup_StatusToJSON(object: HostGroup_Status): string;
export interface HostGroup_LabelsEntry {
    key: string;
    value: string;
}
/** Represents a dedicated host */
export interface Host {
    /** ID of the host. */
    id: string;
    /** Current status of the host. New instances are unable to start on host in DOWN status. */
    status: Host_Status;
    /** ID of the physical server that the host belongs to. */
    serverId: string;
}
export declare enum Host_Status {
    STATUS_UNSPECIFIED = 0,
    UP = 1,
    DOWN = 2,
    UNRECOGNIZED = -1
}
export declare function host_StatusFromJSON(object: any): Host_Status;
export declare function host_StatusToJSON(object: Host_Status): string;
export interface ScalePolicy {
    fixedScale: ScalePolicy_FixedScale | undefined;
}
export interface ScalePolicy_FixedScale {
    size: number;
}
export declare const HostGroup: {
    encode(message: HostGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostGroup;
    fromJSON(object: any): HostGroup;
    toJSON(message: HostGroup): unknown;
    fromPartial(object: DeepPartial<HostGroup>): HostGroup;
};
export declare const HostGroup_LabelsEntry: {
    encode(message: HostGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostGroup_LabelsEntry;
    fromJSON(object: any): HostGroup_LabelsEntry;
    toJSON(message: HostGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<HostGroup_LabelsEntry>): HostGroup_LabelsEntry;
};
export declare const Host: {
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
export declare const ScalePolicy: {
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial(object: DeepPartial<ScalePolicy>): ScalePolicy;
};
export declare const ScalePolicy_FixedScale: {
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_FixedScale>): ScalePolicy_FixedScale;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
