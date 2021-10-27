"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationServiceClient = exports.OrganizationServiceService = exports.ListOrganizationOperationsResponse = exports.ListOrganizationOperationsRequest = exports.UpdateOrganizationMetadata = exports.UpdateOrganizationRequest_LabelsEntry = exports.UpdateOrganizationRequest = exports.ListOrganizationsResponse = exports.ListOrganizationsRequest = exports.GetOrganizationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const access_1 = require("../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const organization_1 = require("../../../../yandex/cloud/organizationmanager/v1/organization");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.organizationmanager.v1';
const baseGetOrganizationRequest = { organizationId: '' };
exports.GetOrganizationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOrganizationRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
            ...baseGetOrganizationRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetOrganizationRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
        }
        return message;
    },
};
const baseListOrganizationsRequest = {
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListOrganizationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
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
            ...baseListOrganizationsRequest,
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOrganizationsRequest,
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
const baseListOrganizationsResponse = { nextPageToken: '' };
exports.ListOrganizationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.organizations) {
            organization_1.Organization.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListOrganizationsResponse,
        };
        message.organizations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizations.push(organization_1.Organization.decode(reader, reader.uint32()));
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
            ...baseListOrganizationsResponse,
        };
        message.organizations = [];
        if (object.organizations !== undefined &&
            object.organizations !== null) {
            for (const e of object.organizations) {
                message.organizations.push(organization_1.Organization.fromJSON(e));
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
        if (message.organizations) {
            obj.organizations = message.organizations.map((e) => e ? organization_1.Organization.toJSON(e) : undefined);
        }
        else {
            obj.organizations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOrganizationsResponse,
        };
        message.organizations = [];
        if (object.organizations !== undefined &&
            object.organizations !== null) {
            for (const e of object.organizations) {
                message.organizations.push(organization_1.Organization.fromPartial(e));
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
const baseUpdateOrganizationRequest = {
    organizationId: '',
    name: '',
    description: '',
    title: '',
};
exports.UpdateOrganizationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.title !== '') {
            writer.uint32(42).string(message.title);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateOrganizationRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOrganizationRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    const entry6 = exports.UpdateOrganizationRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
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
            ...baseUpdateOrganizationRequest,
        };
        message.labels = {};
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.title !== undefined && (obj.title = message.title);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateOrganizationRequest,
        };
        message.labels = {};
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        return message;
    },
};
const baseUpdateOrganizationRequest_LabelsEntry = {
    key: '',
    value: '',
};
exports.UpdateOrganizationRequest_LabelsEntry = {
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
            ...baseUpdateOrganizationRequest_LabelsEntry,
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
            ...baseUpdateOrganizationRequest_LabelsEntry,
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
            ...baseUpdateOrganizationRequest_LabelsEntry,
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
const baseUpdateOrganizationMetadata = { organizationId: '' };
exports.UpdateOrganizationMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOrganizationMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
            ...baseUpdateOrganizationMetadata,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateOrganizationMetadata,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
        }
        return message;
    },
};
const baseListOrganizationOperationsRequest = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListOrganizationOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
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
            ...baseListOrganizationOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
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
            ...baseListOrganizationOperationsRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOrganizationOperationsRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
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
        return message;
    },
};
const baseListOrganizationOperationsResponse = { nextPageToken: '' };
exports.ListOrganizationOperationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListOrganizationOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
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
            ...baseListOrganizationOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromJSON(e));
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
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOrganizationOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromPartial(e));
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
/** A set of methods for managing Organization resources. */
exports.OrganizationServiceService = {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOrganizationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(organization_1.Organization.encode(value).finish()),
        responseDeserialize: (value) => organization_1.Organization.decode(value),
    },
    /** Retrieves the list of Organization resources. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOrganizationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOrganizationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOrganizationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOrganizationsResponse.decode(value),
    },
    /** Updates the specified organization. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOrganizationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified organization. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOrganizationOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOrganizationOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOrganizationOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOrganizationOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified organization. */
    listAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified organization. */
    setAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OrganizationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OrganizationServiceService, 'yandex.cloud.organizationmanager.v1.OrganizationService');
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
