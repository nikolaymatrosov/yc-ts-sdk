"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheck_HttpOptions = exports.HealthCheck_TcpOptions = exports.HealthCheck = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.loadbalancer.v1';
const baseHealthCheck = {
    name: '',
    unhealthyThreshold: 0,
    healthyThreshold: 0,
};
exports.HealthCheck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(32).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(40).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            exports.HealthCheck_TcpOptions.encode(message.tcpOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.httpOptions !== undefined) {
            exports.HealthCheck_HttpOptions.encode(message.httpOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unhealthyThreshold = longToNumber(reader.int64());
                    break;
                case 5:
                    message.healthyThreshold = longToNumber(reader.int64());
                    break;
                case 6:
                    message.tcpOptions = exports.HealthCheck_TcpOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.httpOptions = exports.HealthCheck_HttpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHealthCheck };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = duration_1.Duration.fromJSON(object.interval);
        }
        else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromJSON(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null) {
            message.unhealthyThreshold = Number(object.unhealthyThreshold);
        }
        else {
            message.unhealthyThreshold = 0;
        }
        if (object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null) {
            message.healthyThreshold = Number(object.healthyThreshold);
        }
        else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = exports.HealthCheck_TcpOptions.fromJSON(object.tcpOptions);
        }
        else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = exports.HealthCheck_HttpOptions.fromJSON(object.httpOptions);
        }
        else {
            message.httpOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = message.unhealthyThreshold);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = message.healthyThreshold);
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? exports.HealthCheck_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? exports.HealthCheck_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHealthCheck };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = duration_1.Duration.fromPartial(object.interval);
        }
        else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromPartial(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null) {
            message.unhealthyThreshold = object.unhealthyThreshold;
        }
        else {
            message.unhealthyThreshold = 0;
        }
        if (object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null) {
            message.healthyThreshold = object.healthyThreshold;
        }
        else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = exports.HealthCheck_TcpOptions.fromPartial(object.tcpOptions);
        }
        else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = exports.HealthCheck_HttpOptions.fromPartial(object.httpOptions);
        }
        else {
            message.httpOptions = undefined;
        }
        return message;
    },
};
const baseHealthCheck_TcpOptions = { port: 0 };
exports.HealthCheck_TcpOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_TcpOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
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
            ...baseHealthCheck_TcpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheck_TcpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        return message;
    },
};
const baseHealthCheck_HttpOptions = { port: 0, path: '' };
exports.HealthCheck_HttpOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_HttpOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
                    break;
                case 2:
                    message.path = reader.string();
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
            ...baseHealthCheck_HttpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = message.port);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheck_HttpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = '';
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
