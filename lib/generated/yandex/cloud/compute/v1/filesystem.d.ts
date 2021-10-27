import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
/**
 * A filesystem resource.
 * For details about the concept, see [documentation](/docs/compute/concepts/filesystem).
 */
export interface Filesystem {
    $type: 'yandex.cloud.compute.v1.Filesystem';
    /** ID of the filesystem. Generated at creation time. */
    id: string;
    /** ID of the folder that the filesystem belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the filesystem. The name is unique within the folder. */
    name: string;
    /** Description of the filesystem. */
    description: string;
    /**
     * Filesystem labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the filesystem type.
     *
     * To get a list of available filesystem types, make a [yandex.cloud.compute.v1.DiskTypeService.List] request.
     */
    typeId: string;
    /**
     * ID of the availability zone where the filesystem resides.
     *
     * A filesystem can be attached only to instances residing in the same availability zone.
     */
    zoneId: string;
    /** Size of the filesystem, specified in bytes. */
    size: number;
    /** Block size used for the filesystem, specified in bytes. */
    blockSize: number;
    /** Current status of the filesystem. */
    status: Filesystem_Status;
}
export declare enum Filesystem_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The filesystem is being created. */
    CREATING = 1,
    /** READY - The filesystem is ready to use. */
    READY = 2,
    /** ERROR - The filesystem encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - The filesystem is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1
}
export declare function filesystem_StatusFromJSON(object: any): Filesystem_Status;
export declare function filesystem_StatusToJSON(object: Filesystem_Status): string;
export interface Filesystem_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.Filesystem.LabelsEntry';
    key: string;
    value: string;
}
export declare const Filesystem: {
    $type: "yandex.cloud.compute.v1.Filesystem";
    encode(message: Filesystem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Filesystem;
    fromJSON(object: any): Filesystem;
    toJSON(message: Filesystem): unknown;
    fromPartial(object: DeepPartial<Filesystem>): Filesystem;
};
export declare const Filesystem_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry";
    encode(message: Filesystem_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Filesystem_LabelsEntry;
    fromJSON(object: any): Filesystem_LabelsEntry;
    toJSON(message: Filesystem_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Filesystem_LabelsEntry>): Filesystem_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
