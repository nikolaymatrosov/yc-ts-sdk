"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMonitoringData = exports.DevicePassword = exports.DeviceCertificate = exports.Device_TopicAliasesEntry = exports.Device = exports.device_StatusToJSON = exports.device_StatusFromJSON = exports.Device_Status = exports.deviceViewToJSON = exports.deviceViewFromJSON = exports.DeviceView = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iot.devices.v1';
var DeviceView;
(function (DeviceView) {
    /**
     * BASIC - Server responses without monitoring data.
     * The default value.
     */
    DeviceView[DeviceView["BASIC"] = 0] = "BASIC";
    /** FULL - Server responses with monitoring data. */
    DeviceView[DeviceView["FULL"] = 1] = "FULL";
    DeviceView[DeviceView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DeviceView = exports.DeviceView || (exports.DeviceView = {}));
function deviceViewFromJSON(object) {
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
exports.deviceViewFromJSON = deviceViewFromJSON;
function deviceViewToJSON(object) {
    switch (object) {
        case DeviceView.BASIC:
            return 'BASIC';
        case DeviceView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}
exports.deviceViewToJSON = deviceViewToJSON;
var Device_Status;
(function (Device_Status) {
    Device_Status[Device_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Device is being created. */
    Device_Status[Device_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Device is ready to use. */
    Device_Status[Device_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Device is being deleted. */
    Device_Status[Device_Status["DELETING"] = 3] = "DELETING";
    Device_Status[Device_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Device_Status = exports.Device_Status || (exports.Device_Status = {}));
function device_StatusFromJSON(object) {
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
exports.device_StatusFromJSON = device_StatusFromJSON;
function device_StatusToJSON(object) {
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
exports.device_StatusToJSON = device_StatusToJSON;
const baseDevice = {
    $type: 'yandex.cloud.iot.devices.v1.Device',
    id: '',
    registryId: '',
    name: '',
    description: '',
    status: 0,
};
exports.Device = {
    $type: 'yandex.cloud.iot.devices.v1.Device',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.registryId !== '') {
            writer.uint32(18).string(message.registryId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            exports.Device_TopicAliasesEntry.encode({
                $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.monitoringData !== undefined) {
            exports.DeviceMonitoringData.encode(message.monitoringData, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDevice };
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Device_TopicAliasesEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.topicAliases[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.monitoringData = exports.DeviceMonitoringData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDevice };
        message.topicAliases = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                message.topicAliases[key] = String(value);
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = device_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.monitoringData !== undefined &&
            object.monitoringData !== null) {
            message.monitoringData = exports.DeviceMonitoringData.fromJSON(object.monitoringData);
        }
        else {
            message.monitoringData = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
                ? exports.DeviceMonitoringData.toJSON(message.monitoringData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDevice };
        message.topicAliases = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
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
        }
        else {
            message.status = 0;
        }
        if (object.monitoringData !== undefined &&
            object.monitoringData !== null) {
            message.monitoringData = exports.DeviceMonitoringData.fromPartial(object.monitoringData);
        }
        else {
            message.monitoringData = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Device.$type, exports.Device);
const baseDevice_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry',
    key: '',
    value: '',
};
exports.Device_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDevice_TopicAliasesEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDevice_TopicAliasesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDevice_TopicAliasesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Device_TopicAliasesEntry.$type, exports.Device_TopicAliasesEntry);
const baseDeviceCertificate = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceCertificate',
    deviceId: '',
    fingerprint: '',
    certificateData: '',
};
exports.DeviceCertificate = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceCertificate',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeviceCertificate };
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeviceCertificate };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        }
        else {
            message.fingerprint = '';
        }
        if (object.certificateData !== undefined &&
            object.certificateData !== null) {
            message.certificateData = String(object.certificateData);
        }
        else {
            message.certificateData = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeviceCertificate };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        }
        else {
            message.fingerprint = '';
        }
        if (object.certificateData !== undefined &&
            object.certificateData !== null) {
            message.certificateData = object.certificateData;
        }
        else {
            message.certificateData = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeviceCertificate.$type, exports.DeviceCertificate);
const baseDevicePassword = {
    $type: 'yandex.cloud.iot.devices.v1.DevicePassword',
    deviceId: '',
    id: '',
};
exports.DevicePassword = {
    $type: 'yandex.cloud.iot.devices.v1.DevicePassword',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDevicePassword };
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDevicePassword };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDevicePassword };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DevicePassword.$type, exports.DevicePassword);
const baseDeviceMonitoringData = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceMonitoringData',
    lastAuthIp: '',
};
exports.DeviceMonitoringData = {
    $type: 'yandex.cloud.iot.devices.v1.DeviceMonitoringData',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastAuthIp !== '') {
            writer.uint32(10).string(message.lastAuthIp);
        }
        if (message.lastAuthTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastAuthTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastPubActivityTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastPubActivityTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.lastSubActivityTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastSubActivityTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastOnlineTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastOnlineTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeviceMonitoringData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastAuthIp = reader.string();
                    break;
                case 2:
                    message.lastAuthTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastPubActivityTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastSubActivityTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastOnlineTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeviceMonitoringData };
        if (object.lastAuthIp !== undefined && object.lastAuthIp !== null) {
            message.lastAuthIp = String(object.lastAuthIp);
        }
        else {
            message.lastAuthIp = '';
        }
        if (object.lastAuthTime !== undefined && object.lastAuthTime !== null) {
            message.lastAuthTime = fromJsonTimestamp(object.lastAuthTime);
        }
        else {
            message.lastAuthTime = undefined;
        }
        if (object.lastPubActivityTime !== undefined &&
            object.lastPubActivityTime !== null) {
            message.lastPubActivityTime = fromJsonTimestamp(object.lastPubActivityTime);
        }
        else {
            message.lastPubActivityTime = undefined;
        }
        if (object.lastSubActivityTime !== undefined &&
            object.lastSubActivityTime !== null) {
            message.lastSubActivityTime = fromJsonTimestamp(object.lastSubActivityTime);
        }
        else {
            message.lastSubActivityTime = undefined;
        }
        if (object.lastOnlineTime !== undefined &&
            object.lastOnlineTime !== null) {
            message.lastOnlineTime = fromJsonTimestamp(object.lastOnlineTime);
        }
        else {
            message.lastOnlineTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseDeviceMonitoringData };
        if (object.lastAuthIp !== undefined && object.lastAuthIp !== null) {
            message.lastAuthIp = object.lastAuthIp;
        }
        else {
            message.lastAuthIp = '';
        }
        if (object.lastAuthTime !== undefined && object.lastAuthTime !== null) {
            message.lastAuthTime = object.lastAuthTime;
        }
        else {
            message.lastAuthTime = undefined;
        }
        if (object.lastPubActivityTime !== undefined &&
            object.lastPubActivityTime !== null) {
            message.lastPubActivityTime = object.lastPubActivityTime;
        }
        else {
            message.lastPubActivityTime = undefined;
        }
        if (object.lastSubActivityTime !== undefined &&
            object.lastSubActivityTime !== null) {
            message.lastSubActivityTime = object.lastSubActivityTime;
        }
        else {
            message.lastSubActivityTime = undefined;
        }
        if (object.lastOnlineTime !== undefined &&
            object.lastOnlineTime !== null) {
            message.lastOnlineTime = object.lastOnlineTime;
        }
        else {
            message.lastOnlineTime = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeviceMonitoringData.$type, exports.DeviceMonitoringData);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
