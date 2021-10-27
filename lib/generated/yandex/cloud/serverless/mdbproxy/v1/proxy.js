"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Target_ClickHouse = exports.Target_PostgreSQL = exports.Target = exports.Proxy_LabelsEntry = exports.Proxy = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.mdbproxy.v1';
const baseProxy = { id: '', folderId: '', name: '', description: '' };
exports.Proxy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Proxy_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.target !== undefined) {
            exports.Target.encode(message.target, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProxy };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
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
                    const entry6 = exports.Proxy_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.target = exports.Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProxy };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = exports.Target.fromJSON(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.target !== undefined &&
            (obj.target = message.target
                ? exports.Target.toJSON(message.target)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProxy };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = exports.Target.fromPartial(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
};
const baseProxy_LabelsEntry = { key: '', value: '' };
exports.Proxy_LabelsEntry = {
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
        const message = { ...baseProxy_LabelsEntry };
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
        const message = { ...baseProxy_LabelsEntry };
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
        const message = { ...baseProxy_LabelsEntry };
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
const baseTarget = {};
exports.Target = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clickhouse !== undefined) {
            exports.Target_ClickHouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
        }
        if (message.postgresql !== undefined) {
            exports.Target_PostgreSQL.encode(message.postgresql, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clickhouse = exports.Target_ClickHouse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.postgresql = exports.Target_PostgreSQL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTarget };
        if (object.clickhouse !== undefined && object.clickhouse !== null) {
            message.clickhouse = exports.Target_ClickHouse.fromJSON(object.clickhouse);
        }
        else {
            message.clickhouse = undefined;
        }
        if (object.postgresql !== undefined && object.postgresql !== null) {
            message.postgresql = exports.Target_PostgreSQL.fromJSON(object.postgresql);
        }
        else {
            message.postgresql = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? exports.Target_ClickHouse.toJSON(message.clickhouse)
                : undefined);
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? exports.Target_PostgreSQL.toJSON(message.postgresql)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTarget };
        if (object.clickhouse !== undefined && object.clickhouse !== null) {
            message.clickhouse = exports.Target_ClickHouse.fromPartial(object.clickhouse);
        }
        else {
            message.clickhouse = undefined;
        }
        if (object.postgresql !== undefined && object.postgresql !== null) {
            message.postgresql = exports.Target_PostgreSQL.fromPartial(object.postgresql);
        }
        else {
            message.postgresql = undefined;
        }
        return message;
    },
};
const baseTarget_PostgreSQL = {
    clusterId: '',
    user: '',
    password: '',
    db: '',
    endpoint: '',
};
exports.Target_PostgreSQL = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.user !== '') {
            writer.uint32(18).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        if (message.db !== '') {
            writer.uint32(34).string(message.db);
        }
        if (message.endpoint !== '') {
            writer.uint32(42).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget_PostgreSQL };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.db = reader.string();
                    break;
                case 5:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTarget_PostgreSQL };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        }
        else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        if (object.db !== undefined && object.db !== null) {
            message.db = String(object.db);
        }
        else {
            message.db = '';
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = String(object.endpoint);
        }
        else {
            message.endpoint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.db !== undefined && (obj.db = message.db);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTarget_PostgreSQL };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        }
        else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        if (object.db !== undefined && object.db !== null) {
            message.db = object.db;
        }
        else {
            message.db = '';
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = object.endpoint;
        }
        else {
            message.endpoint = '';
        }
        return message;
    },
};
const baseTarget_ClickHouse = {
    clusterId: '',
    user: '',
    password: '',
    db: '',
    endpoint: '',
};
exports.Target_ClickHouse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.user !== '') {
            writer.uint32(18).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        if (message.db !== '') {
            writer.uint32(34).string(message.db);
        }
        if (message.endpoint !== '') {
            writer.uint32(42).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget_ClickHouse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.db = reader.string();
                    break;
                case 5:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTarget_ClickHouse };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        }
        else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        if (object.db !== undefined && object.db !== null) {
            message.db = String(object.db);
        }
        else {
            message.db = '';
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = String(object.endpoint);
        }
        else {
            message.endpoint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.db !== undefined && (obj.db = message.db);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTarget_ClickHouse };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        }
        else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        if (object.db !== undefined && object.db !== null) {
            message.db = object.db;
        }
        else {
            message.db = '';
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = object.endpoint;
        }
        else {
            message.endpoint = '';
        }
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
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
