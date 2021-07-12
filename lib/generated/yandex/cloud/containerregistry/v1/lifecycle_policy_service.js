/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import { LifecyclePolicy, LifecycleRule, lifecyclePolicy_StatusFromJSON, lifecyclePolicy_StatusToJSON, } from '../../../../yandex/cloud/containerregistry/v1/lifecycle_policy';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseGetLifecyclePolicyRequest = { lifecyclePolicyId: '' };
export const GetLifecyclePolicyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListLifecyclePoliciesRequest = {
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
export const ListLifecyclePoliciesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListLifecyclePoliciesResponse = { nextPageToken: '' };
export const ListLifecyclePoliciesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lifecyclePolicies) {
            LifecyclePolicy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLifecyclePoliciesResponse,
        };
        message.lifecyclePolicies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicies.push(LifecyclePolicy.decode(reader, reader.uint32()));
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
                message.lifecyclePolicies.push(LifecyclePolicy.fromJSON(e));
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
            obj.lifecyclePolicies = message.lifecyclePolicies.map((e) => e ? LifecyclePolicy.toJSON(e) : undefined);
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
                message.lifecyclePolicies.push(LifecyclePolicy.fromPartial(e));
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
const baseCreateLifecyclePolicyRequest = {
    repositoryId: '',
    name: '',
    description: '',
    status: 0,
};
export const CreateLifecyclePolicyRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            LifecycleRule.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
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
            message.status = lifecyclePolicy_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromJSON(e));
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
            (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? LifecycleRule.toJSON(e) : undefined);
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
                message.rules.push(LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateLifecyclePolicyRequest = {
    lifecyclePolicyId: '',
    name: '',
    description: '',
    status: 0,
};
export const UpdateLifecyclePolicyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
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
            LifecycleRule.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
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
                    message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
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
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
            message.status = lifecyclePolicy_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromJSON(e));
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
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? LifecycleRule.toJSON(e) : undefined);
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
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
                message.rules.push(LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDeleteLifecyclePolicyRequest = { lifecyclePolicyId: '' };
export const DeleteLifecyclePolicyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseCreateLifecyclePolicyMetadata = { lifecyclePolicyId: '' };
export const CreateLifecyclePolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateLifecyclePolicyMetadata = { lifecyclePolicyId: '' };
export const UpdateLifecyclePolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteLifecyclePolicyMetadata = { lifecyclePolicyId: '' };
export const DeleteLifecyclePolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDryRunLifecyclePolicyRequest = { lifecyclePolicyId: '' };
export const DryRunLifecyclePolicyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDryRunLifecyclePolicyMetadata = {
    dryRunLifecyclePolicyResultId: '',
    lifecyclePolicyId: '',
};
export const DryRunLifecyclePolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(18).string(message.lifecyclePolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDryRunLifecyclePolicyResult = {
    dryRunLifecyclePolicyResultId: '',
    lifecyclePolicyId: '',
    affectedImagesCount: 0,
};
export const DryRunLifecyclePolicyResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(18).string(message.lifecyclePolicyId);
        }
        if (message.runAt !== undefined) {
            Timestamp.encode(toTimestamp(message.runAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.affectedImagesCount !== 0) {
            writer.uint32(32).int64(message.affectedImagesCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.runAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
const baseGetDryRunLifecyclePolicyResultRequest = {
    dryRunLifecyclePolicyResultId: '',
};
export const GetDryRunLifecyclePolicyResultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDryRunLifecyclePolicyResultsRequest = {
    lifecyclePolicyId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
export const ListDryRunLifecyclePolicyResultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDryRunLifecyclePolicyResultsResponse = {
    nextPageToken: '',
};
export const ListDryRunLifecyclePolicyResultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.dryRunLifecyclePolicyResults) {
            DryRunLifecyclePolicyResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDryRunLifecyclePolicyResultsResponse,
        };
        message.dryRunLifecyclePolicyResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResults.push(DryRunLifecyclePolicyResult.decode(reader, reader.uint32()));
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
                message.dryRunLifecyclePolicyResults.push(DryRunLifecyclePolicyResult.fromJSON(e));
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
                message.dryRunLifecyclePolicyResults.map((e) => e ? DryRunLifecyclePolicyResult.toJSON(e) : undefined);
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
                message.dryRunLifecyclePolicyResults.push(DryRunLifecyclePolicyResult.fromPartial(e));
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
const baseListDryRunLifecyclePolicyResultAffectedImagesRequest = {
    dryRunLifecyclePolicyResultId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
export const ListDryRunLifecyclePolicyResultAffectedImagesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDryRunLifecyclePolicyResultAffectedImagesResponse = {
    nextPageToken: '',
};
export const ListDryRunLifecyclePolicyResultAffectedImagesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.affectedImages) {
            Image.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        };
        message.affectedImages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.affectedImages.push(Image.decode(reader, reader.uint32()));
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
                message.affectedImages.push(Image.fromJSON(e));
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
            obj.affectedImages = message.affectedImages.map((e) => e ? Image.toJSON(e) : undefined);
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
                message.affectedImages.push(Image.fromPartial(e));
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
export const LifecyclePolicyServiceService = {
    get: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => GetLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(LifecyclePolicy.encode(value).finish()),
        responseDeserialize: (value) => LifecyclePolicy.decode(value),
    },
    list: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListLifecyclePoliciesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListLifecyclePoliciesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListLifecyclePoliciesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListLifecyclePoliciesResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    dryRun: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DryRunLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => DryRunLifecyclePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    getDryRunResult: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetDryRunLifecyclePolicyResultRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDryRunLifecyclePolicyResultRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DryRunLifecyclePolicyResult.encode(value).finish()),
        responseDeserialize: (value) => DryRunLifecyclePolicyResult.decode(value),
    },
    listDryRunResults: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDryRunLifecyclePolicyResultsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDryRunLifecyclePolicyResultsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDryRunLifecyclePolicyResultsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDryRunLifecyclePolicyResultsResponse.decode(value),
    },
    listDryRunResultAffectedImages: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDryRunLifecyclePolicyResultAffectedImagesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDryRunLifecyclePolicyResultAffectedImagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDryRunLifecyclePolicyResultAffectedImagesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDryRunLifecyclePolicyResultAffectedImagesResponse.decode(value),
    },
};
export const LifecyclePolicyServiceClient = makeGenericClientConstructor(LifecyclePolicyServiceService, 'yandex.cloud.containerregistry.v1.LifecyclePolicyService');
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
