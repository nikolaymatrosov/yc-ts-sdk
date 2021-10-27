import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.resourcemanager.v1";
/** A Folder resource. For more information, see [Folder](/docs/resource-manager/concepts/resources-hierarchy#folder). */
export interface Folder {
    $type: 'yandex.cloud.resourcemanager.v1.Folder';
    /** ID of the folder. */
    id: string;
    /** ID of the cloud that the folder belongs to. */
    cloudId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the folder.
     * The name is unique within the cloud. 3-63 characters long.
     */
    name: string;
    /** Description of the folder. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the folder. */
    status: Folder_Status;
}
export declare enum Folder_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The folder is active. */
    ACTIVE = 1,
    /** DELETING - The folder is being deleted. */
    DELETING = 2,
    /** PENDING_DELETION - Stopping folder resources and waiting for the deletion start timestamp. */
    PENDING_DELETION = 3,
    UNRECOGNIZED = -1
}
export declare function folder_StatusFromJSON(object: any): Folder_Status;
export declare function folder_StatusToJSON(object: Folder_Status): string;
export interface Folder_LabelsEntry {
    $type: 'yandex.cloud.resourcemanager.v1.Folder.LabelsEntry';
    key: string;
    value: string;
}
export declare const Folder: {
    $type: "yandex.cloud.resourcemanager.v1.Folder";
    encode(message: Folder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Folder;
    fromJSON(object: any): Folder;
    toJSON(message: Folder): unknown;
    fromPartial(object: DeepPartial<Folder>): Folder;
};
export declare const Folder_LabelsEntry: {
    $type: "yandex.cloud.resourcemanager.v1.Folder.LabelsEntry";
    encode(message: Folder_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Folder_LabelsEntry;
    fromJSON(object: any): Folder_LabelsEntry;
    toJSON(message: Folder_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Folder_LabelsEntry>): Folder_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
