"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageServiceClient = exports.ImageServiceService = exports.DeleteImageMetadata = exports.DeleteImageRequest = exports.GetImageRequest = exports.ListImagesResponse = exports.ListImagesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const image_1 = require("../../../../yandex/cloud/containerregistry/v1/image");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseListImagesRequest = {
    registryId: '',
    repositoryName: '',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListImagesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.repositoryName !== '') {
            writer.uint32(18).string(message.repositoryName);
        }
        if (message.folderId !== '') {
            writer.uint32(58).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.repositoryName = reader.string();
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListImagesRequest };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        if (object.repositoryName !== undefined &&
            object.repositoryName !== null) {
            message.repositoryName = String(object.repositoryName);
        }
        else {
            message.repositoryName = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        }
        else {
            message.orderBy = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.repositoryName !== undefined &&
            (obj.repositoryName = message.repositoryName);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListImagesRequest };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        if (object.repositoryName !== undefined &&
            object.repositoryName !== null) {
            message.repositoryName = object.repositoryName;
        }
        else {
            message.repositoryName = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        }
        else {
            message.orderBy = '';
        }
        return message;
    },
};
const baseListImagesResponse = { nextPageToken: '' };
exports.ListImagesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.images) {
            image_1.Image.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesResponse };
        message.images = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.images.push(image_1.Image.decode(reader, reader.uint32()));
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
        const message = { ...baseListImagesResponse };
        message.images = [];
        if (object.images !== undefined && object.images !== null) {
            for (const e of object.images) {
                message.images.push(image_1.Image.fromJSON(e));
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
        if (message.images) {
            obj.images = message.images.map((e) => e ? image_1.Image.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListImagesResponse };
        message.images = [];
        if (object.images !== undefined && object.images !== null) {
            for (const e of object.images) {
                message.images.push(image_1.Image.fromPartial(e));
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
const baseGetImageRequest = { imageId: '' };
exports.GetImageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetImageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseDeleteImageRequest = { imageId: '' };
exports.DeleteImageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseDeleteImageMetadata = { imageId: '' };
exports.DeleteImageMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
/** A set of methods for managing Image resources. */
exports.ImageServiceService = {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListImagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListImagesResponse.decode(value),
    },
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_1.Image.encode(value).finish()),
        responseDeserialize: (value) => image_1.Image.decode(value),
    },
    /** Deletes the specified Docker image. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ImageServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageServiceService, 'yandex.cloud.containerregistry.v1.ImageService');
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
