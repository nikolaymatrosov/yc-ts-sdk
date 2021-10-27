"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePreset = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';
const baseResourcePreset = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.ResourcePreset',
    id: '',
    zoneIds: '',
    cores: 0,
    memory: 0,
};
exports.ResourcePreset = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.ResourcePreset',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.zoneIds) {
            writer.uint32(18).string(v);
        }
        if (message.cores !== 0) {
            writer.uint32(24).int64(message.cores);
        }
        if (message.memory !== 0) {
            writer.uint32(32).int64(message.memory);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcePreset };
        message.zoneIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.zoneIds.push(reader.string());
                    break;
                case 3:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 4:
                    message.memory = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResourcePreset };
        message.zoneIds = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.zoneIds !== undefined && object.zoneIds !== null) {
            for (const e of object.zoneIds) {
                message.zoneIds.push(String(e));
            }
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = Number(object.cores);
        }
        else {
            message.cores = 0;
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        }
        else {
            message.memory = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        message.cores !== undefined && (obj.cores = message.cores);
        message.memory !== undefined && (obj.memory = message.memory);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResourcePreset };
        message.zoneIds = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.zoneIds !== undefined && object.zoneIds !== null) {
            for (const e of object.zoneIds) {
                message.zoneIds.push(e);
            }
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = object.cores;
        }
        else {
            message.cores = 0;
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        }
        else {
            message.memory = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcePreset.$type, exports.ResourcePreset);
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
