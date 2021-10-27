"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderServiceClient = exports.ProviderServiceService = exports.ListActivatedProvidersResponse = exports.ListActivatedProvidersRequest = exports.ActivateProviderMetadata = exports.ActivateProviderRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.cdn.v1';
const baseActivateProviderRequest = { folderId: '', providerType: '' };
exports.ActivateProviderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.providerType !== '') {
            writer.uint32(18).string(message.providerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateProviderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.providerType = reader.string();
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
            ...baseActivateProviderRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.providerType !== undefined && object.providerType !== null) {
            message.providerType = String(object.providerType);
        }
        else {
            message.providerType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.providerType !== undefined &&
            (obj.providerType = message.providerType);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateProviderRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.providerType !== undefined && object.providerType !== null) {
            message.providerType = object.providerType;
        }
        else {
            message.providerType = '';
        }
        return message;
    },
};
const baseActivateProviderMetadata = { folderId: '' };
exports.ActivateProviderMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateProviderMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
            ...baseActivateProviderMetadata,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateProviderMetadata,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseListActivatedProvidersRequest = { folderId: '' };
exports.ListActivatedProvidersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListActivatedProvidersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
            ...baseListActivatedProvidersRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListActivatedProvidersRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseListActivatedProvidersResponse = { providers: '' };
exports.ListActivatedProvidersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListActivatedProvidersResponse,
        };
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(reader.string());
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
            ...baseListActivatedProvidersResponse,
        };
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListActivatedProvidersResponse,
        };
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(e);
            }
        }
        return message;
    },
};
/** A set of methods for managing Provider Service resources. */
exports.ProviderServiceService = {
    /** Activate provider for specified client. */
    activate: {
        path: '/yandex.cloud.cdn.v1.ProviderService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List activated providers for specified client. */
    listActivated: {
        path: '/yandex.cloud.cdn.v1.ProviderService/ListActivated',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListActivatedProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListActivatedProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListActivatedProvidersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListActivatedProvidersResponse.decode(value),
    },
};
exports.ProviderServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProviderServiceService, 'yandex.cloud.cdn.v1.ProviderService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
