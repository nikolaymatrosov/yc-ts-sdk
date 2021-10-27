"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryServiceClient = exports.RepositoryServiceService = exports.DeleteRepositoryMetadata = exports.DeleteRepositoryRequest = exports.UpsertRepositoryMetadata = exports.UpsertRepositoryRequest = exports.ListRepositoriesResponse = exports.ListRepositoriesRequest = exports.GetRepositoryByNameRequest = exports.GetRepositoryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const access_1 = require("../../../../yandex/cloud/access/access");
const repository_1 = require("../../../../yandex/cloud/containerregistry/v1/repository");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseGetRepositoryRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetRepositoryRequest',
    repositoryId: '',
};
exports.GetRepositoryRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetRepositoryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRepositoryRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetRepositoryRequest };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetRepositoryRequest };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRepositoryRequest.$type, exports.GetRepositoryRequest);
const baseGetRepositoryByNameRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest',
    repositoryName: '',
};
exports.GetRepositoryByNameRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryName !== '') {
            writer.uint32(10).string(message.repositoryName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRepositoryByNameRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryName = reader.string();
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
            ...baseGetRepositoryByNameRequest,
        };
        if (object.repositoryName !== undefined &&
            object.repositoryName !== null) {
            message.repositoryName = String(object.repositoryName);
        }
        else {
            message.repositoryName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryName !== undefined &&
            (obj.repositoryName = message.repositoryName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetRepositoryByNameRequest,
        };
        if (object.repositoryName !== undefined &&
            object.repositoryName !== null) {
            message.repositoryName = object.repositoryName;
        }
        else {
            message.repositoryName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRepositoryByNameRequest.$type, exports.GetRepositoryByNameRequest);
const baseListRepositoriesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListRepositoriesRequest',
    registryId: '',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListRepositoriesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListRepositoriesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.folderId !== '') {
            writer.uint32(50).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRepositoriesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 6:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
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
        const message = {
            ...baseListRepositoriesRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRepositoriesRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRepositoriesRequest.$type, exports.ListRepositoriesRequest);
const baseListRepositoriesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListRepositoriesResponse',
    nextPageToken: '',
};
exports.ListRepositoriesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListRepositoriesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.repositories) {
            repository_1.Repository.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListRepositoriesResponse,
        };
        message.repositories = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositories.push(repository_1.Repository.decode(reader, reader.uint32()));
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
            ...baseListRepositoriesResponse,
        };
        message.repositories = [];
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(repository_1.Repository.fromJSON(e));
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
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e ? repository_1.Repository.toJSON(e) : undefined);
        }
        else {
            obj.repositories = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRepositoriesResponse,
        };
        message.repositories = [];
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(repository_1.Repository.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRepositoriesResponse.$type, exports.ListRepositoriesResponse);
const baseUpsertRepositoryRequest = {
    $type: 'yandex.cloud.containerregistry.v1.UpsertRepositoryRequest',
    name: '',
};
exports.UpsertRepositoryRequest = {
    $type: 'yandex.cloud.containerregistry.v1.UpsertRepositoryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRepositoryRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            ...baseUpsertRepositoryRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpsertRepositoryRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpsertRepositoryRequest.$type, exports.UpsertRepositoryRequest);
const baseUpsertRepositoryMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.UpsertRepositoryMetadata',
    repositoryId: '',
};
exports.UpsertRepositoryMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.UpsertRepositoryMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRepositoryMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
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
            ...baseUpsertRepositoryMetadata,
        };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpsertRepositoryMetadata,
        };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpsertRepositoryMetadata.$type, exports.UpsertRepositoryMetadata);
const baseDeleteRepositoryRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRepositoryRequest',
    repositoryId: '',
};
exports.DeleteRepositoryRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRepositoryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRepositoryRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
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
            ...baseDeleteRepositoryRequest,
        };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRepositoryRequest,
        };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRepositoryRequest.$type, exports.DeleteRepositoryRequest);
const baseDeleteRepositoryMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRepositoryMetadata',
    repositoryId: '',
};
exports.DeleteRepositoryMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRepositoryMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRepositoryMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
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
            ...baseDeleteRepositoryMetadata,
        };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRepositoryMetadata,
        };
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRepositoryMetadata.$type, exports.DeleteRepositoryMetadata);
/** A set of methods for managing Repository resources. */
exports.RepositoryServiceService = {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRepositoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(repository_1.Repository.encode(value).finish()),
        responseDeserialize: (value) => repository_1.Repository.decode(value),
    },
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRepositoryByNameRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRepositoryByNameRequest.decode(value),
        responseSerialize: (value) => Buffer.from(repository_1.Repository.encode(value).finish()),
        responseDeserialize: (value) => repository_1.Repository.decode(value),
    },
    /** Retrieves the list of Repository resources in the specified registry. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRepositoriesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRepositoriesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRepositoriesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRepositoriesResponse.decode(value),
    },
    /** Lists access bindings for the specified repository. */
    listAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Upserts a repository in the specified registry. */
    upsert: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/Upsert',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpsertRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpsertRepositoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified repository. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRepositoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Sets access bindings for the specified repository. */
    setAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified repository. */
    updateAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.RepositoryServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RepositoryServiceService, 'yandex.cloud.containerregistry.v1.RepositoryService');
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
