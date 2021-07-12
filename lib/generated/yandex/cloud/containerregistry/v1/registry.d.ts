import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
/** A Registry resource. For more information, see [Registry](/docs/cloud/containerregistry/registry). */
export interface Registry {
    /** Output only. ID of the registry. */
    id: string;
    /** ID of the folder that the registry belongs to. */
    folderId: string;
    /** Name of the registry. */
    name: string;
    /** Output only. Status of the registry. */
    status: Registry_Status;
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export declare enum Registry_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Registry is being created. */
    CREATING = 1,
    /** ACTIVE - Registry is ready to use. */
    ACTIVE = 2,
    /** DELETING - Registry is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1
}
export declare function registry_StatusFromJSON(object: any): Registry_Status;
export declare function registry_StatusToJSON(object: Registry_Status): string;
export interface Registry_LabelsEntry {
    key: string;
    value: string;
}
export declare const Registry: {
    encode(message: Registry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Registry;
    fromJSON(object: any): Registry;
    toJSON(message: Registry): unknown;
    fromPartial(object: DeepPartial<Registry>): Registry;
};
export declare const Registry_LabelsEntry: {
    encode(message: Registry_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Registry_LabelsEntry;
    fromJSON(object: any): Registry_LabelsEntry;
    toJSON(message: Registry_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Registry_LabelsEntry>): Registry_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
