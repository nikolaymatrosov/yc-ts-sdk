"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePresetServiceClient = exports.ResourcePresetServiceService = exports.ListResourcePresetsResponse = exports.ListResourcePresetsRequest = exports.GetResourcePresetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const resource_preset_1 = require("../../../../../yandex/cloud/mdb/mysql/v1/resource_preset");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mysql.v1';
const baseGetResourcePresetRequest = { resourcePresetId: '' };
exports.GetResourcePresetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetResourcePresetRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
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
            ...baseGetResourcePresetRequest,
        };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetResourcePresetRequest,
        };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        return message;
    },
};
const baseListResourcePresetsRequest = { pageSize: 0, pageToken: '' };
exports.ListResourcePresetsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcePresetsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
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
            ...baseListResourcePresetsRequest,
        };
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListResourcePresetsRequest,
        };
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListResourcePresetsResponse = { nextPageToken: '' };
exports.ListResourcePresetsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resourcePresets) {
            resource_preset_1.ResourcePreset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcePresetsResponse,
        };
        message.resourcePresets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresets.push(resource_preset_1.ResourcePreset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
            ...baseListResourcePresetsResponse,
        };
        message.resourcePresets = [];
        if (object.resourcePresets !== undefined &&
            object.resourcePresets !== null) {
            for (const e of object.resourcePresets) {
                message.resourcePresets.push(resource_preset_1.ResourcePreset.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resourcePresets) {
            obj.resourcePresets = message.resourcePresets.map((e) => e ? resource_preset_1.ResourcePreset.toJSON(e) : undefined);
        }
        else {
            obj.resourcePresets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListResourcePresetsResponse,
        };
        message.resourcePresets = [];
        if (object.resourcePresets !== undefined &&
            object.resourcePresets !== null) {
            for (const e of object.resourcePresets) {
                message.resourcePresets.push(resource_preset_1.ResourcePreset.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
/** A set of methods for managing resource presets. */
exports.ResourcePresetServiceService = {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.mysql.v1.ResourcePresetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetResourcePresetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetResourcePresetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(resource_preset_1.ResourcePreset.encode(value).finish()),
        responseDeserialize: (value) => resource_preset_1.ResourcePreset.decode(value),
    },
    /** Retrieves the list of available resource presets. */
    list: {
        path: '/yandex.cloud.mdb.mysql.v1.ResourcePresetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListResourcePresetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListResourcePresetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListResourcePresetsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListResourcePresetsResponse.decode(value),
    },
};
exports.ResourcePresetServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ResourcePresetServiceService, 'yandex.cloud.mdb.mysql.v1.ResourcePresetService');
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
