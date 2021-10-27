/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.iot.devices.v1';

export enum DeviceView {
    /**
     * BASIC - Server responses without monitoring data.
     * The default value.
     */
    BASIC = 0,
    /** FULL - Server responses with monitoring data. */
    FULL = 1,
    UNRECOGNIZED = -1,
}

export function deviceViewFromJSON(object: any): DeviceView {
    switch (object) {
        case 0:
        case 'BASIC':
            return DeviceView.BASIC;
        case 1:
        case 'FULL':
            return DeviceView.FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DeviceView.UNRECOGNIZED;
    }
}

export function deviceViewToJSON(object: DeviceView): string {
    switch (object) {
        case DeviceView.BASIC:
            return 'BASIC';
        case DeviceView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}

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
    topicAliases: { [key: string]: string };
    /** Status of the device. */
    status: Device_Status;
    /** Device monitoring data, returns if FULL view specified. */
    monitoringData: DeviceMonitoringData | undefined;
}

export enum Device_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Device is being created. */
    CREATING = 1,
    /** ACTIVE - Device is ready to use. */
    ACTIVE = 2,
    /** DELETING - Device is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function device_StatusFromJSON(object: any): Device_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Device_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Device_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Device_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Device_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Device_Status.UNRECOGNIZED;
    }
}

export function device_StatusToJSON(object: Device_Status): string {
    switch (object) {
        case Device_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Device_Status.CREATING:
            return 'CREATING';
        case Device_Status.ACTIVE:
            return 'ACTIVE';
        case Device_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

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

const baseDevice: object = {
    $type: 'yandex.cloud.iot.devices.v1.Device',
    id: '',
    registryId: '',
    name: '',
    description: '',
    status: 0,
};

export const Device = {
    $type: 'yandex.cloud.iot.devices.v1.Device' as const,

    encode(
        message: Device,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.registryId !== '') {
            writer.uint32(18).string(message.registryId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            Device_TopicAliasesEntry.encode(
                {
                    $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.monitoringData !== undefined) {
            DeviceMonitoringData.encode(
                message.monitoringData,
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Device {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDevice } as Device;
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.registryId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Device_TopicAliasesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.topicAliases[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.monitoringData = DeviceMonitoringData.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Device {
        const message = { ...baseDevice } as Device;
        message.topicAliases = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                message.topicAliases[key] = String(value);
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = device_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.monitoringData !== undefined &&
            object.monitoringData !== null
        ) {
            message.monitoringData = DeviceMonitoringData.fromJSON(
                object.monitoringData
            );
        } else {
            message.monitoringData = undefined;
        }
        return message;
    },

    toJSON(message: Device): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = device_StatusToJSON(message.status));
        message.monitoringData !== undefined &&
            (obj.monitoringData = message.monitoringData
                ? DeviceMonitoringData.toJSON(message.monitoringData)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Device>): Device {
        const message = { ...baseDevice } as Device;
        message.topicAliases = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.topicAliases[key] = String(value);
                }
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (
            object.monitoringData !== undefined &&
            object.monitoringData !== null
        ) {
            message.monitoringData = DeviceMonitoringData.fromPartial(
                object.monitoringData
            );
        } else {
            message.monitoringData = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Device.$type, Device);

const baseDevice_TopicAliasesEntry: object = {
    $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry',
    key: '',
    value: '',
};

export const Device_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry' as const,

    encode(
        message: Device_TopicAliasesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Device_TopicAliasesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDevice_TopicAliasesEntry,
        } as Device_TopicAliasesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Device_TopicAliasesEntry {
        const message = {
            ...baseDevice_TopicAliasesEntry,
        } as Device_TopicAliasesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Device_TopicAliasesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Device_TopicAliasesEntry>
    ): Device_TopicAliasesEntry {
        const message = {
            ...baseDevice_TopicAliasesEntry,
        } as Device_TopicAliasesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    Device_TopicAliasesEntry.$type,
    Device_TopicAliasesEntry
);

const baseDeviceCertificate: object = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceCertificate',
    deviceId: '',
    fingerprint: '',
    certificateData: '',
};

export const DeviceCertificate = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceCertificate' as const,

    encode(
        message: DeviceCertificate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeviceCertificate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeviceCertificate } as DeviceCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeviceCertificate {
        const message = { ...baseDeviceCertificate } as DeviceCertificate;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = String(object.certificateData);
        } else {
            message.certificateData = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        return message;
    },

    toJSON(message: DeviceCertificate): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<DeviceCertificate>): DeviceCertificate {
        const message = { ...baseDeviceCertificate } as DeviceCertificate;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = object.certificateData;
        } else {
            message.certificateData = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(DeviceCertificate.$type, DeviceCertificate);

const baseDevicePassword: object = {
    $type: 'yandex.cloud.iot.devices.v1.DevicePassword',
    deviceId: '',
    id: '',
};

export const DevicePassword = {
    $type: 'yandex.cloud.iot.devices.v1.DevicePassword' as const,

    encode(
        message: DevicePassword,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DevicePassword {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDevicePassword } as DevicePassword;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DevicePassword {
        const message = { ...baseDevicePassword } as DevicePassword;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        return message;
    },

    toJSON(message: DevicePassword): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<DevicePassword>): DevicePassword {
        const message = { ...baseDevicePassword } as DevicePassword;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(DevicePassword.$type, DevicePassword);

const baseDeviceMonitoringData: object = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceMonitoringData',
    lastAuthIp: '',
};

export const DeviceMonitoringData = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceMonitoringData' as const,

    encode(
        message: DeviceMonitoringData,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lastAuthIp !== '') {
            writer.uint32(10).string(message.lastAuthIp);
        }
        if (message.lastAuthTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastAuthTime),
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.lastPubActivityTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastPubActivityTime),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.lastSubActivityTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastSubActivityTime),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.lastOnlineTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastOnlineTime),
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeviceMonitoringData {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeviceMonitoringData } as DeviceMonitoringData;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastAuthIp = reader.string();
                    break;
                case 2:
                    message.lastAuthTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.lastPubActivityTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.lastSubActivityTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.lastOnlineTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeviceMonitoringData {
        const message = { ...baseDeviceMonitoringData } as DeviceMonitoringData;
        if (object.lastAuthIp !== undefined && object.lastAuthIp !== null) {
            message.lastAuthIp = String(object.lastAuthIp);
        } else {
            message.lastAuthIp = '';
        }
        if (object.lastAuthTime !== undefined && object.lastAuthTime !== null) {
            message.lastAuthTime = fromJsonTimestamp(object.lastAuthTime);
        } else {
            message.lastAuthTime = undefined;
        }
        if (
            object.lastPubActivityTime !== undefined &&
            object.lastPubActivityTime !== null
        ) {
            message.lastPubActivityTime = fromJsonTimestamp(
                object.lastPubActivityTime
            );
        } else {
            message.lastPubActivityTime = undefined;
        }
        if (
            object.lastSubActivityTime !== undefined &&
            object.lastSubActivityTime !== null
        ) {
            message.lastSubActivityTime = fromJsonTimestamp(
                object.lastSubActivityTime
            );
        } else {
            message.lastSubActivityTime = undefined;
        }
        if (
            object.lastOnlineTime !== undefined &&
            object.lastOnlineTime !== null
        ) {
            message.lastOnlineTime = fromJsonTimestamp(object.lastOnlineTime);
        } else {
            message.lastOnlineTime = undefined;
        }
        return message;
    },

    toJSON(message: DeviceMonitoringData): unknown {
        const obj: any = {};
        message.lastAuthIp !== undefined &&
            (obj.lastAuthIp = message.lastAuthIp);
        message.lastAuthTime !== undefined &&
            (obj.lastAuthTime = message.lastAuthTime.toISOString());
        message.lastPubActivityTime !== undefined &&
            (obj.lastPubActivityTime =
                message.lastPubActivityTime.toISOString());
        message.lastSubActivityTime !== undefined &&
            (obj.lastSubActivityTime =
                message.lastSubActivityTime.toISOString());
        message.lastOnlineTime !== undefined &&
            (obj.lastOnlineTime = message.lastOnlineTime.toISOString());
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeviceMonitoringData>
    ): DeviceMonitoringData {
        const message = { ...baseDeviceMonitoringData } as DeviceMonitoringData;
        if (object.lastAuthIp !== undefined && object.lastAuthIp !== null) {
            message.lastAuthIp = object.lastAuthIp;
        } else {
            message.lastAuthIp = '';
        }
        if (object.lastAuthTime !== undefined && object.lastAuthTime !== null) {
            message.lastAuthTime = object.lastAuthTime;
        } else {
            message.lastAuthTime = undefined;
        }
        if (
            object.lastPubActivityTime !== undefined &&
            object.lastPubActivityTime !== null
        ) {
            message.lastPubActivityTime = object.lastPubActivityTime;
        } else {
            message.lastPubActivityTime = undefined;
        }
        if (
            object.lastSubActivityTime !== undefined &&
            object.lastSubActivityTime !== null
        ) {
            message.lastSubActivityTime = object.lastSubActivityTime;
        } else {
            message.lastSubActivityTime = undefined;
        }
        if (
            object.lastOnlineTime !== undefined &&
            object.lastOnlineTime !== null
        ) {
            message.lastOnlineTime = object.lastOnlineTime;
        } else {
            message.lastOnlineTime = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(DeviceMonitoringData.$type, DeviceMonitoringData);

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
