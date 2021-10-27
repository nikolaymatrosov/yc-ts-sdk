"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifecyclePolicyServiceClient = exports.LifecyclePolicyServiceService = exports.ListDryRunLifecyclePolicyResultAffectedImagesResponse = exports.ListDryRunLifecyclePolicyResultAffectedImagesRequest = exports.ListDryRunLifecyclePolicyResultsResponse = exports.ListDryRunLifecyclePolicyResultsRequest = exports.GetDryRunLifecyclePolicyResultRequest = exports.DryRunLifecyclePolicyResult = exports.DryRunLifecyclePolicyMetadata = exports.DryRunLifecyclePolicyRequest = exports.DeleteLifecyclePolicyMetadata = exports.UpdateLifecyclePolicyMetadata = exports.CreateLifecyclePolicyMetadata = exports.DeleteLifecyclePolicyRequest = exports.UpdateLifecyclePolicyRequest = exports.CreateLifecyclePolicyRequest = exports.ListLifecyclePoliciesResponse = exports.ListLifecyclePoliciesRequest = exports.GetLifecyclePolicyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const image_1 = require("../../../../yandex/cloud/containerregistry/v1/image");
const lifecycle_policy_1 = require("../../../../yandex/cloud/containerregistry/v1/lifecycle_policy");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseGetLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest',
    lifecyclePolicyId: '',
};
exports.GetLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLifecyclePolicyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseGetLifecyclePolicyRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetLifecyclePolicyRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLifecyclePolicyRequest.$type, exports.GetLifecyclePolicyRequest);
const baseListLifecyclePoliciesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListLifecyclePoliciesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== undefined) {
            writer.uint32(10).string(message.registryId);
        }
        if (message.repositoryId !== undefined) {
            writer.uint32(50).string(message.repositoryId);
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
            ...baseListLifecyclePoliciesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 6:
                    message.repositoryId = reader.string();
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
            ...baseListLifecyclePoliciesRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = undefined;
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
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLifecyclePoliciesRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = undefined;
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
typeRegistry_1.messageTypeRegistry.set(exports.ListLifecyclePoliciesRequest.$type, exports.ListLifecyclePoliciesRequest);
const baseListLifecyclePoliciesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse',
    nextPageToken: '',
};
exports.ListLifecyclePoliciesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.lifecyclePolicies) {
            lifecycle_policy_1.LifecyclePolicy.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListLifecyclePoliciesResponse,
        };
        message.lifecyclePolicies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicies.push(lifecycle_policy_1.LifecyclePolicy.decode(reader, reader.uint32()));
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
            ...baseListLifecyclePoliciesResponse,
        };
        message.lifecyclePolicies = [];
        if (object.lifecyclePolicies !== undefined &&
            object.lifecyclePolicies !== null) {
            for (const e of object.lifecyclePolicies) {
                message.lifecyclePolicies.push(lifecycle_policy_1.LifecyclePolicy.fromJSON(e));
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
        if (message.lifecyclePolicies) {
            obj.lifecyclePolicies = message.lifecyclePolicies.map((e) => e ? lifecycle_policy_1.LifecyclePolicy.toJSON(e) : undefined);
        }
        else {
            obj.lifecyclePolicies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLifecyclePoliciesResponse,
        };
        message.lifecyclePolicies = [];
        if (object.lifecyclePolicies !== undefined &&
            object.lifecyclePolicies !== null) {
            for (const e of object.lifecyclePolicies) {
                message.lifecyclePolicies.push(lifecycle_policy_1.LifecyclePolicy.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListLifecyclePoliciesResponse.$type, exports.ListLifecyclePoliciesResponse);
const baseCreateLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest',
    repositoryId: '',
    name: '',
    description: '',
    status: 0,
};
exports.CreateLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        for (const v of message.rules) {
            lifecycle_policy_1.LifecycleRule.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLifecyclePolicyRequest,
        };
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.rules.push(lifecycle_policy_1.LifecycleRule.decode(reader, reader.uint32()));
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
            ...baseCreateLifecyclePolicyRequest,
        };
        message.rules = [];
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = (0, lifecycle_policy_1.lifecyclePolicy_StatusFromJSON)(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(lifecycle_policy_1.LifecycleRule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = (0, lifecycle_policy_1.lifecyclePolicy_StatusToJSON)(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? lifecycle_policy_1.LifecycleRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateLifecyclePolicyRequest,
        };
        message.rules = [];
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(lifecycle_policy_1.LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLifecyclePolicyRequest.$type, exports.CreateLifecyclePolicyRequest);
const baseUpdateLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest',
    lifecyclePolicyId: '',
    name: '',
    description: '',
    status: 0,
};
exports.UpdateLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
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
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        for (const v of message.rules) {
            lifecycle_policy_1.LifecycleRule.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLifecyclePolicyRequest,
        };
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
                    message.status = reader.int32();
                    break;
                case 6:
                    message.rules.push(lifecycle_policy_1.LifecycleRule.decode(reader, reader.uint32()));
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
            ...baseUpdateLifecyclePolicyRequest,
        };
        message.rules = [];
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = (0, lifecycle_policy_1.lifecyclePolicy_StatusFromJSON)(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(lifecycle_policy_1.LifecycleRule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = (0, lifecycle_policy_1.lifecyclePolicy_StatusToJSON)(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? lifecycle_policy_1.LifecycleRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateLifecyclePolicyRequest,
        };
        message.rules = [];
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(lifecycle_policy_1.LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLifecyclePolicyRequest.$type, exports.UpdateLifecyclePolicyRequest);
const baseDeleteLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest',
    lifecyclePolicyId: '',
};
exports.DeleteLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLifecyclePolicyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseDeleteLifecyclePolicyRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteLifecyclePolicyRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLifecyclePolicyRequest.$type, exports.DeleteLifecyclePolicyRequest);
const baseCreateLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata',
    lifecyclePolicyId: '',
};
exports.CreateLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLifecyclePolicyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseCreateLifecyclePolicyMetadata,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateLifecyclePolicyMetadata,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLifecyclePolicyMetadata.$type, exports.CreateLifecyclePolicyMetadata);
const baseUpdateLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata',
    lifecyclePolicyId: '',
};
exports.UpdateLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLifecyclePolicyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseUpdateLifecyclePolicyMetadata,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateLifecyclePolicyMetadata,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLifecyclePolicyMetadata.$type, exports.UpdateLifecyclePolicyMetadata);
const baseDeleteLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata',
    lifecyclePolicyId: '',
};
exports.DeleteLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLifecyclePolicyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseDeleteLifecyclePolicyMetadata,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteLifecyclePolicyMetadata,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLifecyclePolicyMetadata.$type, exports.DeleteLifecyclePolicyMetadata);
const baseDryRunLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest',
    lifecyclePolicyId: '',
};
exports.DryRunLifecyclePolicyRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDryRunLifecyclePolicyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseDryRunLifecyclePolicyRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDryRunLifecyclePolicyRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DryRunLifecyclePolicyRequest.$type, exports.DryRunLifecyclePolicyRequest);
const baseDryRunLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata',
    dryRunLifecyclePolicyResultId: '',
    lifecyclePolicyId: '',
};
exports.DryRunLifecyclePolicyMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(18).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDryRunLifecyclePolicyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
                    break;
                case 2:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseDryRunLifecyclePolicyMetadata,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId = String(object.dryRunLifecyclePolicyResultId);
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDryRunLifecyclePolicyMetadata,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DryRunLifecyclePolicyMetadata.$type, exports.DryRunLifecyclePolicyMetadata);
const baseDryRunLifecyclePolicyResult = {
    $type: 'yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult',
    dryRunLifecyclePolicyResultId: '',
    lifecyclePolicyId: '',
    affectedImagesCount: 0,
};
exports.DryRunLifecyclePolicyResult = {
    $type: 'yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(18).string(message.lifecyclePolicyId);
        }
        if (message.runAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.runAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.affectedImagesCount !== 0) {
            writer.uint32(32).int64(message.affectedImagesCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDryRunLifecyclePolicyResult,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
                    break;
                case 2:
                    message.lifecyclePolicyId = reader.string();
                    break;
                case 3:
                    message.runAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.affectedImagesCount = longToNumber(reader.int64());
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
            ...baseDryRunLifecyclePolicyResult,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId = String(object.dryRunLifecyclePolicyResultId);
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
        }
        if (object.runAt !== undefined && object.runAt !== null) {
            message.runAt = fromJsonTimestamp(object.runAt);
        }
        else {
            message.runAt = undefined;
        }
        if (object.affectedImagesCount !== undefined &&
            object.affectedImagesCount !== null) {
            message.affectedImagesCount = Number(object.affectedImagesCount);
        }
        else {
            message.affectedImagesCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        message.runAt !== undefined &&
            (obj.runAt = message.runAt.toISOString());
        message.affectedImagesCount !== undefined &&
            (obj.affectedImagesCount = message.affectedImagesCount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDryRunLifecyclePolicyResult,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
        }
        if (object.runAt !== undefined && object.runAt !== null) {
            message.runAt = object.runAt;
        }
        else {
            message.runAt = undefined;
        }
        if (object.affectedImagesCount !== undefined &&
            object.affectedImagesCount !== null) {
            message.affectedImagesCount = object.affectedImagesCount;
        }
        else {
            message.affectedImagesCount = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DryRunLifecyclePolicyResult.$type, exports.DryRunLifecyclePolicyResult);
const baseGetDryRunLifecyclePolicyResultRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest',
    dryRunLifecyclePolicyResultId: '',
};
exports.GetDryRunLifecyclePolicyResultRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDryRunLifecyclePolicyResultRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
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
            ...baseGetDryRunLifecyclePolicyResultRequest,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId = String(object.dryRunLifecyclePolicyResultId);
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetDryRunLifecyclePolicyResultRequest,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDryRunLifecyclePolicyResultRequest.$type, exports.GetDryRunLifecyclePolicyResultRequest);
const baseListDryRunLifecyclePolicyResultsRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest',
    lifecyclePolicyId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListDryRunLifecyclePolicyResultsRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
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
            ...baseListDryRunLifecyclePolicyResultsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
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
            ...baseListDryRunLifecyclePolicyResultsRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        }
        else {
            message.lifecyclePolicyId = '';
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
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDryRunLifecyclePolicyResultsRequest,
        };
        if (object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        }
        else {
            message.lifecyclePolicyId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDryRunLifecyclePolicyResultsRequest.$type, exports.ListDryRunLifecyclePolicyResultsRequest);
const baseListDryRunLifecyclePolicyResultsResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse',
    nextPageToken: '',
};
exports.ListDryRunLifecyclePolicyResultsResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.dryRunLifecyclePolicyResults) {
            exports.DryRunLifecyclePolicyResult.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDryRunLifecyclePolicyResultsResponse,
        };
        message.dryRunLifecyclePolicyResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResults.push(exports.DryRunLifecyclePolicyResult.decode(reader, reader.uint32()));
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
            ...baseListDryRunLifecyclePolicyResultsResponse,
        };
        message.dryRunLifecyclePolicyResults = [];
        if (object.dryRunLifecyclePolicyResults !== undefined &&
            object.dryRunLifecyclePolicyResults !== null) {
            for (const e of object.dryRunLifecyclePolicyResults) {
                message.dryRunLifecyclePolicyResults.push(exports.DryRunLifecyclePolicyResult.fromJSON(e));
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
        if (message.dryRunLifecyclePolicyResults) {
            obj.dryRunLifecyclePolicyResults =
                message.dryRunLifecyclePolicyResults.map((e) => e ? exports.DryRunLifecyclePolicyResult.toJSON(e) : undefined);
        }
        else {
            obj.dryRunLifecyclePolicyResults = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDryRunLifecyclePolicyResultsResponse,
        };
        message.dryRunLifecyclePolicyResults = [];
        if (object.dryRunLifecyclePolicyResults !== undefined &&
            object.dryRunLifecyclePolicyResults !== null) {
            for (const e of object.dryRunLifecyclePolicyResults) {
                message.dryRunLifecyclePolicyResults.push(exports.DryRunLifecyclePolicyResult.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDryRunLifecyclePolicyResultsResponse.$type, exports.ListDryRunLifecyclePolicyResultsResponse);
const baseListDryRunLifecyclePolicyResultAffectedImagesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest',
    dryRunLifecyclePolicyResultId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListDryRunLifecyclePolicyResultAffectedImagesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
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
            ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
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
            ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId = String(object.dryRunLifecyclePolicyResultId);
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
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
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
        };
        if (object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        }
        else {
            message.dryRunLifecyclePolicyResultId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDryRunLifecyclePolicyResultAffectedImagesRequest.$type, exports.ListDryRunLifecyclePolicyResultAffectedImagesRequest);
const baseListDryRunLifecyclePolicyResultAffectedImagesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse',
    nextPageToken: '',
};
exports.ListDryRunLifecyclePolicyResultAffectedImagesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.affectedImages) {
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
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        };
        message.affectedImages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.affectedImages.push(image_1.Image.decode(reader, reader.uint32()));
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
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        };
        message.affectedImages = [];
        if (object.affectedImages !== undefined &&
            object.affectedImages !== null) {
            for (const e of object.affectedImages) {
                message.affectedImages.push(image_1.Image.fromJSON(e));
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
        if (message.affectedImages) {
            obj.affectedImages = message.affectedImages.map((e) => e ? image_1.Image.toJSON(e) : undefined);
        }
        else {
            obj.affectedImages = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        };
        message.affectedImages = [];
        if (object.affectedImages !== undefined &&
            object.affectedImages !== null) {
            for (const e of object.affectedImages) {
                message.affectedImages.push(image_1.Image.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDryRunLifecyclePolicyResultAffectedImagesResponse.$type, exports.ListDryRunLifecyclePolicyResultAffectedImagesResponse);
/** A set of methods for managing Lifecycle policy resources. */
exports.LifecyclePolicyServiceService = {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(lifecycle_policy_1.LifecyclePolicy.encode(value).finish()),
        responseDeserialize: (value) => lifecycle_policy_1.LifecyclePolicy.decode(value),
    },
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLifecyclePoliciesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLifecyclePoliciesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLifecyclePoliciesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLifecyclePoliciesResponse.decode(value),
    },
    /** Creates a lifecycle policy in the specified repository. */
    create: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified lifecycle policy. */
    update: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified lifecycle policy. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DryRunLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DryRunLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDryRunLifecyclePolicyResultRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDryRunLifecyclePolicyResultRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DryRunLifecyclePolicyResult.encode(value).finish()),
        responseDeserialize: (value) => exports.DryRunLifecyclePolicyResult.decode(value),
    },
    /** Retrieves the list of the dry run results. */
    listDryRunResults: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDryRunLifecyclePolicyResultsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDryRunLifecyclePolicyResultsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDryRunLifecyclePolicyResultsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDryRunLifecyclePolicyResultsResponse.decode(value),
    },
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDryRunLifecyclePolicyResultAffectedImagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDryRunLifecyclePolicyResultAffectedImagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDryRunLifecyclePolicyResultAffectedImagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDryRunLifecyclePolicyResultAffectedImagesResponse.decode(value),
    },
};
exports.LifecyclePolicyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LifecyclePolicyServiceService, 'yandex.cloud.containerregistry.v1.LifecyclePolicyService');
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
