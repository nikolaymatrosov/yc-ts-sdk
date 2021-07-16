/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { LoadBalancer, AllocationPolicy, HttpListener, TlsListener, TargetState, TlsHandler, } from '../../../../yandex/cloud/apploadbalancer/v1/load_balancer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseGetLoadBalancerRequest = { loadBalancerId: '' };
export const GetLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseGetLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseListLoadBalancersRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListLoadBalancersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLoadBalancersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseListLoadBalancersRequest,
        };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLoadBalancersRequest,
        };
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
        return message;
    },
};
const baseListLoadBalancersResponse = { nextPageToken: '' };
export const ListLoadBalancersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.loadBalancers) {
            LoadBalancer.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListLoadBalancersResponse,
        };
        message.loadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancers.push(LoadBalancer.decode(reader, reader.uint32()));
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
            ...baseListLoadBalancersResponse,
        };
        message.loadBalancers = [];
        if (object.loadBalancers !== undefined &&
            object.loadBalancers !== null) {
            for (const e of object.loadBalancers) {
                message.loadBalancers.push(LoadBalancer.fromJSON(e));
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
        if (message.loadBalancers) {
            obj.loadBalancers = message.loadBalancers.map((e) => e ? LoadBalancer.toJSON(e) : undefined);
        }
        else {
            obj.loadBalancers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLoadBalancersResponse,
        };
        message.loadBalancers = [];
        if (object.loadBalancers !== undefined &&
            object.loadBalancers !== null) {
            for (const e of object.loadBalancers) {
                message.loadBalancers.push(LoadBalancer.fromPartial(e));
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
const baseDeleteLoadBalancerRequest = { loadBalancerId: '' };
export const DeleteLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseDeleteLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseDeleteLoadBalancerMetadata = { loadBalancerId: '' };
export const DeleteLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseDeleteLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseUpdateLoadBalancerRequest = {
    loadBalancerId: '',
    name: '',
    description: '',
    securityGroupIds: '',
};
export const UpdateLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateLoadBalancerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.listenerSpecs) {
            ListenerSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
                    const entry5 = UpdateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
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
            ...baseUpdateLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromJSON(e));
            }
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromPartial(e));
            }
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};
const baseUpdateLoadBalancerRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const UpdateLoadBalancerRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLoadBalancerRequest_LabelsEntry,
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
            ...baseUpdateLoadBalancerRequest_LabelsEntry,
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
            ...baseUpdateLoadBalancerRequest_LabelsEntry,
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
const baseUpdateLoadBalancerMetadata = { loadBalancerId: '' };
export const UpdateLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseUpdateLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseCreateLoadBalancerRequest = {
    folderId: '',
    name: '',
    description: '',
    regionId: '',
    networkId: '',
    securityGroupIds: '',
};
export const CreateLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateLoadBalancerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        if (message.networkId !== '') {
            writer.uint32(50).string(message.networkId);
        }
        for (const v of message.listenerSpecs) {
            ListenerSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(message.allocationPolicy, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(74).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 6:
                    message.networkId = reader.string();
                    break;
                case 7:
                    message.listenerSpecs.push(ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.securityGroupIds.push(reader.string());
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
            ...baseCreateLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        }
        else {
            message.regionId = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromJSON(e));
            }
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        }
        else {
            message.regionId = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromPartial(e));
            }
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};
const baseCreateLoadBalancerRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const CreateLoadBalancerRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLoadBalancerRequest_LabelsEntry,
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
            ...baseCreateLoadBalancerRequest_LabelsEntry,
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
            ...baseCreateLoadBalancerRequest_LabelsEntry,
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
const baseCreateLoadBalancerMetadata = { loadBalancerId: '' };
export const CreateLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseCreateLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseStartLoadBalancerRequest = { loadBalancerId: '' };
export const StartLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseStartLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseStartLoadBalancerMetadata = { loadBalancerId: '' };
export const StartLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseStartLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseStopLoadBalancerRequest = { loadBalancerId: '' };
export const StopLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseStopLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopLoadBalancerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseStopLoadBalancerMetadata = { loadBalancerId: '' };
export const StopLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseStopLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopLoadBalancerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        return message;
    },
};
const baseAddListenerRequest = { loadBalancerId: '' };
export const AddListenerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddListenerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerSpec = ListenerSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddListenerRequest };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromJSON(object.listenerSpec);
        }
        else {
            message.listenerSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddListenerRequest };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromPartial(object.listenerSpec);
        }
        else {
            message.listenerSpec = undefined;
        }
        return message;
    },
};
const baseAddListenerMetadata = {
    loadBalancerId: '',
    listenerName: '',
};
export const AddListenerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddListenerMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddListenerMetadata };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddListenerMetadata };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        return message;
    },
};
const baseRemoveListenerRequest = { loadBalancerId: '', name: '' };
export const RemoveListenerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveListenerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
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
            ...baseRemoveListenerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
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
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveListenerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
};
const baseRemoveListenerMetadata = {
    loadBalancerId: '',
    listenerName: '',
};
export const RemoveListenerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveListenerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
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
            ...baseRemoveListenerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveListenerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        return message;
    },
};
const baseUpdateListenerRequest = { loadBalancerId: '' };
export const UpdateListenerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.listenerSpec !== undefined) {
            ListenerSpec.encode(message.listenerSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateListenerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.listenerSpec = ListenerSpec.decode(reader, reader.uint32());
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
            ...baseUpdateListenerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromJSON(object.listenerSpec);
        }
        else {
            message.listenerSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateListenerRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromPartial(object.listenerSpec);
        }
        else {
            message.listenerSpec = undefined;
        }
        return message;
    },
};
const baseUpdateListenerMetadata = {
    loadBalancerId: '',
    listenerName: '',
};
export const UpdateListenerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateListenerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
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
            ...baseUpdateListenerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateListenerMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        return message;
    },
};
const baseAddressSpec = {};
export const AddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.externalIpv4AddressSpec !== undefined) {
            ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.internalIpv4AddressSpec !== undefined) {
            InternalIpv4AddressSpec.encode(message.internalIpv4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalIpv6AddressSpec !== undefined) {
            ExternalIpv6AddressSpec.encode(message.externalIpv6AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddressSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4AddressSpec =
                        ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.internalIpv4AddressSpec =
                        InternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalIpv6AddressSpec =
                        ExternalIpv6AddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddressSpec };
        if (object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null) {
            message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec);
        }
        else {
            message.externalIpv4AddressSpec = undefined;
        }
        if (object.internalIpv4AddressSpec !== undefined &&
            object.internalIpv4AddressSpec !== null) {
            message.internalIpv4AddressSpec = InternalIpv4AddressSpec.fromJSON(object.internalIpv4AddressSpec);
        }
        else {
            message.internalIpv4AddressSpec = undefined;
        }
        if (object.externalIpv6AddressSpec !== undefined &&
            object.externalIpv6AddressSpec !== null) {
            message.externalIpv6AddressSpec = ExternalIpv6AddressSpec.fromJSON(object.externalIpv6AddressSpec);
        }
        else {
            message.externalIpv6AddressSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.externalIpv4AddressSpec !== undefined &&
            (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
                ? ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec)
                : undefined);
        message.internalIpv4AddressSpec !== undefined &&
            (obj.internalIpv4AddressSpec = message.internalIpv4AddressSpec
                ? InternalIpv4AddressSpec.toJSON(message.internalIpv4AddressSpec)
                : undefined);
        message.externalIpv6AddressSpec !== undefined &&
            (obj.externalIpv6AddressSpec = message.externalIpv6AddressSpec
                ? ExternalIpv6AddressSpec.toJSON(message.externalIpv6AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddressSpec };
        if (object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null) {
            message.externalIpv4AddressSpec =
                ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec);
        }
        else {
            message.externalIpv4AddressSpec = undefined;
        }
        if (object.internalIpv4AddressSpec !== undefined &&
            object.internalIpv4AddressSpec !== null) {
            message.internalIpv4AddressSpec =
                InternalIpv4AddressSpec.fromPartial(object.internalIpv4AddressSpec);
        }
        else {
            message.internalIpv4AddressSpec = undefined;
        }
        if (object.externalIpv6AddressSpec !== undefined &&
            object.externalIpv6AddressSpec !== null) {
            message.externalIpv6AddressSpec =
                ExternalIpv6AddressSpec.fromPartial(object.externalIpv6AddressSpec);
        }
        else {
            message.externalIpv6AddressSpec = undefined;
        }
        return message;
    },
};
const baseExternalIpv4AddressSpec = { address: '' };
export const ExternalIpv4AddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalIpv4AddressSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseExternalIpv4AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseExternalIpv4AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    },
};
const baseInternalIpv4AddressSpec = { address: '', subnetId: '' };
export const InternalIpv4AddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInternalIpv4AddressSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
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
            ...baseInternalIpv4AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInternalIpv4AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseExternalIpv6AddressSpec = { address: '' };
export const ExternalIpv6AddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalIpv6AddressSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseExternalIpv6AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseExternalIpv6AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    },
};
const baseEndpointSpec = { ports: 0 };
export const EndpointSpec = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addressSpecs) {
            AddressSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.ports) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEndpointSpec };
        message.addressSpecs = [];
        message.ports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressSpecs.push(AddressSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ports.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.ports.push(longToNumber(reader.int64()));
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
        const message = { ...baseEndpointSpec };
        message.addressSpecs = [];
        message.ports = [];
        if (object.addressSpecs !== undefined && object.addressSpecs !== null) {
            for (const e of object.addressSpecs) {
                message.addressSpecs.push(AddressSpec.fromJSON(e));
            }
        }
        if (object.ports !== undefined && object.ports !== null) {
            for (const e of object.ports) {
                message.ports.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addressSpecs) {
            obj.addressSpecs = message.addressSpecs.map((e) => e ? AddressSpec.toJSON(e) : undefined);
        }
        else {
            obj.addressSpecs = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => e);
        }
        else {
            obj.ports = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEndpointSpec };
        message.addressSpecs = [];
        message.ports = [];
        if (object.addressSpecs !== undefined && object.addressSpecs !== null) {
            for (const e of object.addressSpecs) {
                message.addressSpecs.push(AddressSpec.fromPartial(e));
            }
        }
        if (object.ports !== undefined && object.ports !== null) {
            for (const e of object.ports) {
                message.ports.push(e);
            }
        }
        return message;
    },
};
const baseListenerSpec = { name: '' };
export const ListenerSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpointSpecs) {
            EndpointSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListenerSpec };
        message.endpointSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.endpointSpecs.push(EndpointSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.http = HttpListener.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tls = TlsListener.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListenerSpec };
        message.endpointSpecs = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.endpointSpecs !== undefined &&
            object.endpointSpecs !== null) {
            for (const e of object.endpointSpecs) {
                message.endpointSpecs.push(EndpointSpec.fromJSON(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpListener.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = TlsListener.fromJSON(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.endpointSpecs) {
            obj.endpointSpecs = message.endpointSpecs.map((e) => e ? EndpointSpec.toJSON(e) : undefined);
        }
        else {
            obj.endpointSpecs = [];
        }
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpListener.toJSON(message.http)
                : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? TlsListener.toJSON(message.tls)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListenerSpec };
        message.endpointSpecs = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.endpointSpecs !== undefined &&
            object.endpointSpecs !== null) {
            for (const e of object.endpointSpecs) {
                message.endpointSpecs.push(EndpointSpec.fromPartial(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpListener.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = TlsListener.fromPartial(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
};
const baseGetTargetStatesRequest = {
    loadBalancerId: '',
    backendGroupId: '',
    targetGroupId: '',
};
export const GetTargetStatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.backendGroupId !== '') {
            writer.uint32(18).string(message.backendGroupId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(26).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTargetStatesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.backendGroupId = reader.string();
                    break;
                case 3:
                    message.targetGroupId = reader.string();
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
            ...baseGetTargetStatesRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = String(object.targetGroupId);
        }
        else {
            message.targetGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetTargetStatesRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = object.targetGroupId;
        }
        else {
            message.targetGroupId = '';
        }
        return message;
    },
};
const baseGetTargetStatesResponse = {};
export const GetTargetStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.targetStates) {
            TargetState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTargetStatesResponse,
        };
        message.targetStates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetStates.push(TargetState.decode(reader, reader.uint32()));
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
            ...baseGetTargetStatesResponse,
        };
        message.targetStates = [];
        if (object.targetStates !== undefined && object.targetStates !== null) {
            for (const e of object.targetStates) {
                message.targetStates.push(TargetState.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetStates) {
            obj.targetStates = message.targetStates.map((e) => e ? TargetState.toJSON(e) : undefined);
        }
        else {
            obj.targetStates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetTargetStatesResponse,
        };
        message.targetStates = [];
        if (object.targetStates !== undefined && object.targetStates !== null) {
            for (const e of object.targetStates) {
                message.targetStates.push(TargetState.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAddSniMatchRequest = {
    loadBalancerId: '',
    listenerName: '',
    name: '',
    serverNames: '',
};
export const AddSniMatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.serverNames) {
            writer.uint32(34).string(v);
        }
        if (message.handler !== undefined) {
            TlsHandler.encode(message.handler, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddSniMatchRequest };
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.serverNames.push(reader.string());
                    break;
                case 5:
                    message.handler = TlsHandler.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddSniMatchRequest };
        message.serverNames = [];
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(String(e));
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromJSON(object.handler);
        }
        else {
            message.handler = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.name !== undefined && (obj.name = message.name);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        }
        else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddSniMatchRequest };
        message.serverNames = [];
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(e);
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromPartial(object.handler);
        }
        else {
            message.handler = undefined;
        }
        return message;
    },
};
const baseAddSniMatchMetadata = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
export const AddSniMatchMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddSniMatchMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddSniMatchMetadata };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddSniMatchMetadata };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
};
const baseRemoveSniMatchRequest = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
export const RemoveSniMatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveSniMatchRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
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
            ...baseRemoveSniMatchRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveSniMatchRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
};
const baseRemoveSniMatchMetadata = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
export const RemoveSniMatchMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveSniMatchMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
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
            ...baseRemoveSniMatchMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveSniMatchMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
};
const baseUpdateSniMatchRequest = {
    loadBalancerId: '',
    listenerName: '',
    name: '',
    serverNames: '',
};
export const UpdateSniMatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.serverNames) {
            writer.uint32(42).string(v);
        }
        if (message.handler !== undefined) {
            TlsHandler.encode(message.handler, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSniMatchRequest,
        };
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.serverNames.push(reader.string());
                    break;
                case 6:
                    message.handler = TlsHandler.decode(reader, reader.uint32());
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
            ...baseUpdateSniMatchRequest,
        };
        message.serverNames = [];
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(String(e));
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromJSON(object.handler);
        }
        else {
            message.handler = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        }
        else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSniMatchRequest,
        };
        message.serverNames = [];
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(e);
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromPartial(object.handler);
        }
        else {
            message.handler = undefined;
        }
        return message;
    },
};
const baseUpdateSniMatchMetadata = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
export const UpdateSniMatchMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSniMatchMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
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
            ...baseUpdateSniMatchMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSniMatchMetadata,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        }
        else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        }
        else {
            message.sniMatchName = '';
        }
        return message;
    },
};
const baseListLoadBalancerOperationsRequest = {
    loadBalancerId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListLoadBalancerOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLoadBalancerOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
            ...baseListLoadBalancerOperationsRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
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
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLoadBalancerOperationsRequest,
        };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = object.loadBalancerId;
        }
        else {
            message.loadBalancerId = '';
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
const baseListLoadBalancerOperationsResponse = { nextPageToken: '' };
export const ListLoadBalancerOperationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operations) {
            Operation.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListLoadBalancerOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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
            ...baseListLoadBalancerOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromJSON(e));
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
            obj.operations = message.operations.map((e) => e ? Operation.toJSON(e) : undefined);
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
            ...baseListLoadBalancerOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromPartial(e));
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
/** A set of methods for managing application load balancers. */
export const LoadBalancerServiceService = {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => GetLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(LoadBalancer.encode(value).finish()),
        responseDeserialize: (value) => LoadBalancer.decode(value),
    },
    /** Lists application load balancers in the specified folder. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListLoadBalancersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListLoadBalancersResponse.decode(value),
    },
    /** Creates an application load balancer in the specified folder. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified application load balancer. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified application load balancer. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Starts the specified application load balancer. */
    start: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StartLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => StartLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Stops the specified application load balancer. */
    stop: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StopLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => StopLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Adds a listener to the specified application load balancer. */
    addListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => AddListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified listener. */
    removeListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RemoveListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => RemoveListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified listener of the specified application load balancer. */
    updateListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    addSniMatch: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => AddSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    updateSniMatch: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    removeSniMatch: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RemoveSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => RemoveSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => GetTargetStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => GetTargetStatesResponse.decode(value),
    },
    /** Lists operations for the specified application load balancer. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListLoadBalancerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListLoadBalancerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListLoadBalancerOperationsResponse.decode(value),
    },
};
export const LoadBalancerServiceClient = makeGenericClientConstructor(LoadBalancerServiceService, 'yandex.cloud.apploadbalancer.v1.LoadBalancerService');
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
