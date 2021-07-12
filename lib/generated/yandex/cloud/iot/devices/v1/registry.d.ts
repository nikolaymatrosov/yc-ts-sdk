import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
/** A registry. For more information, see [Registry](/docs/iot-core/concepts/index#registry). */
export interface Registry {
    /** ID of the registry. */
    id: string;
    /** ID of the folder that the registry belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the registry. The name is unique within the folder. */
    name: string;
    /** Description of the registry. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the registry. */
    status: Registry_Status;
    /** ID of the logs group for the specified registry. */
    logGroupId: string;
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
/** A registry certificate. For more information, see [Managing registry certificates](/docs/iot-core/operations/certificates/registry-certificates). */
export interface RegistryCertificate {
    /** ID of the registry that the certificate belongs to. */
    registryId: string;
    /** SHA256 hash of the certificates. */
    fingerprint: string;
    /** Public part of the certificate. */
    certificateData: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
}
/**
 * A device topic alias.
 *
 * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/abcdef/events`. For more information, see [Using topic aliases](/docs/iot-core/concepts/topic#aliases).
 */
export interface DeviceAlias {
    /** ID of the device that the alias belongs to. */
    deviceId: string;
    /** Prefix of a canonical topic name to be aliased, e.g. `$devices/abcdef`. */
    topicPrefix: string;
    /** Alias of a device topic. */
    alias: string;
}
/** A registry password. */
export interface RegistryPassword {
    /** ID of the registry that the password belongs to. */
    registryId: string;
    /** ID of the password. */
    id: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
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
export declare const RegistryCertificate: {
    encode(message: RegistryCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegistryCertificate;
    fromJSON(object: any): RegistryCertificate;
    toJSON(message: RegistryCertificate): unknown;
    fromPartial(object: DeepPartial<RegistryCertificate>): RegistryCertificate;
};
export declare const DeviceAlias: {
    encode(message: DeviceAlias, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeviceAlias;
    fromJSON(object: any): DeviceAlias;
    toJSON(message: DeviceAlias): unknown;
    fromPartial(object: DeepPartial<DeviceAlias>): DeviceAlias;
};
export declare const RegistryPassword: {
    encode(message: RegistryPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegistryPassword;
    fromJSON(object: any): RegistryPassword;
    toJSON(message: RegistryPassword): unknown;
    fromPartial(object: DeepPartial<RegistryPassword>): RegistryPassword;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
