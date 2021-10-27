import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
export declare enum DeviceView {
    /**
     * BASIC - Server responses without monitoring data.
     * The default value.
     */
    BASIC = 0,
    /** FULL - Server responses with monitoring data. */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function deviceViewFromJSON(object: any): DeviceView;
export declare function deviceViewToJSON(object: DeviceView): string;
/** A device. For more information, see [Device](/docs/iot-core/concepts/index#device). */
export interface Device {
    $type: 'yandex.cloud.iot.devices.v1.Device';
    /** ID of the device. */
    id: string;
    /** ID of the registry that the device belongs to. */
    registryId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the device. The name is unique within the registry. */
    name: string;
    /** Description of the device. 0-256 characters long. */
    description: string;
    /**
     * Alias of a device topic.
     *
     * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/abcdef/events`.
     */
    topicAliases: {
        [key: string]: string;
    };
    /** Status of the device. */
    status: Device_Status;
    /** Device monitoring data, returns if FULL view specified. */
    monitoringData: DeviceMonitoringData | undefined;
}
export declare enum Device_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Device is being created. */
    CREATING = 1,
    /** ACTIVE - Device is ready to use. */
    ACTIVE = 2,
    /** DELETING - Device is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1
}
export declare function device_StatusFromJSON(object: any): Device_Status;
export declare function device_StatusToJSON(object: Device_Status): string;
export interface Device_TopicAliasesEntry {
    $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry';
    key: string;
    value: string;
}
/** A device certificate. For more information, see [Managing device certificates](/docs/iot-core/operations/certificates/device-certificates). */
export interface DeviceCertificate {
    $type: 'yandex.cloud.iot.devices.v1.DeviceCertificate';
    /** ID of the device that the certificate belongs to. */
    deviceId: string;
    /** SHA256 hash of the certificate. */
    fingerprint: string;
    /** Public part of the certificate. */
    certificateData: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
}
/** A device password. */
export interface DevicePassword {
    $type: 'yandex.cloud.iot.devices.v1.DevicePassword';
    /** ID of the device that the password belongs to. */
    deviceId: string;
    /** ID of the password. */
    id: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
}
export interface DeviceMonitoringData {
    $type: 'yandex.cloud.iot.devices.v1.DeviceMonitoringData';
    lastAuthIp: string;
    lastAuthTime: Date | undefined;
    lastPubActivityTime: Date | undefined;
    lastSubActivityTime: Date | undefined;
    lastOnlineTime: Date | undefined;
}
export declare const Device: {
    $type: "yandex.cloud.iot.devices.v1.Device";
    encode(message: Device, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Device;
    fromJSON(object: any): Device;
    toJSON(message: Device): unknown;
    fromPartial(object: DeepPartial<Device>): Device;
};
export declare const Device_TopicAliasesEntry: {
    $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry";
    encode(message: Device_TopicAliasesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Device_TopicAliasesEntry;
    fromJSON(object: any): Device_TopicAliasesEntry;
    toJSON(message: Device_TopicAliasesEntry): unknown;
    fromPartial(object: DeepPartial<Device_TopicAliasesEntry>): Device_TopicAliasesEntry;
};
export declare const DeviceCertificate: {
    $type: "yandex.cloud.iot.devices.v1.DeviceCertificate";
    encode(message: DeviceCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeviceCertificate;
    fromJSON(object: any): DeviceCertificate;
    toJSON(message: DeviceCertificate): unknown;
    fromPartial(object: DeepPartial<DeviceCertificate>): DeviceCertificate;
};
export declare const DevicePassword: {
    $type: "yandex.cloud.iot.devices.v1.DevicePassword";
    encode(message: DevicePassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DevicePassword;
    fromJSON(object: any): DevicePassword;
    toJSON(message: DevicePassword): unknown;
    fromPartial(object: DeepPartial<DevicePassword>): DevicePassword;
};
export declare const DeviceMonitoringData: {
    $type: "yandex.cloud.iot.devices.v1.DeviceMonitoringData";
    encode(message: DeviceMonitoringData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeviceMonitoringData;
    fromJSON(object: any): DeviceMonitoringData;
    toJSON(message: DeviceMonitoringData): unknown;
    fromPartial(object: DeepPartial<DeviceMonitoringData>): DeviceMonitoringData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
