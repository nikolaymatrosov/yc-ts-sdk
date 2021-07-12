/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { NetworkLoadBalancer, AttachedTargetGroup, TargetState, networkLoadBalancer_TypeFromJSON, networkLoadBalancer_TypeToJSON, ipVersionFromJSON, ipVersionToJSON, listener_ProtocolFromJSON, listener_ProtocolToJSON, } from '../../../../yandex/cloud/loadbalancer/v1/network_load_balancer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.loadbalancer.v1';
const baseGetNetworkLoadBalancerRequest = { networkLoadBalancerId: '' };
export const GetNetworkLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetNetworkLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseGetNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseListNetworkLoadBalancersRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListNetworkLoadBalancersRequest = {
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
            ...baseListNetworkLoadBalancersRequest,
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
            ...baseListNetworkLoadBalancersRequest,
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
            ...baseListNetworkLoadBalancersRequest,
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
const baseListNetworkLoadBalancersResponse = { nextPageToken: '' };
export const ListNetworkLoadBalancersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.networkLoadBalancers) {
            NetworkLoadBalancer.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListNetworkLoadBalancersResponse,
        };
        message.networkLoadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancers.push(NetworkLoadBalancer.decode(reader, reader.uint32()));
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
            ...baseListNetworkLoadBalancersResponse,
        };
        message.networkLoadBalancers = [];
        if (object.networkLoadBalancers !== undefined &&
            object.networkLoadBalancers !== null) {
            for (const e of object.networkLoadBalancers) {
                message.networkLoadBalancers.push(NetworkLoadBalancer.fromJSON(e));
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
        if (message.networkLoadBalancers) {
            obj.networkLoadBalancers = message.networkLoadBalancers.map((e) => e ? NetworkLoadBalancer.toJSON(e) : undefined);
        }
        else {
            obj.networkLoadBalancers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListNetworkLoadBalancersResponse,
        };
        message.networkLoadBalancers = [];
        if (object.networkLoadBalancers !== undefined &&
            object.networkLoadBalancers !== null) {
            for (const e of object.networkLoadBalancers) {
                message.networkLoadBalancers.push(NetworkLoadBalancer.fromPartial(e));
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
const baseCreateNetworkLoadBalancerRequest = {
    folderId: '',
    name: '',
    description: '',
    regionId: '',
    type: 0,
};
export const CreateNetworkLoadBalancerRequest = {
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
            CreateNetworkLoadBalancerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        for (const v of message.listenerSpecs) {
            ListenerSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            AttachedTargetGroup.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNetworkLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
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
                    const entry4 = CreateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                case 7:
                    message.listenerSpecs.push(ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.attachedTargetGroups.push(AttachedTargetGroup.decode(reader, reader.uint32()));
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
            ...baseCreateNetworkLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
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
        if (object.type !== undefined && object.type !== null) {
            message.type = networkLoadBalancer_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromJSON(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(AttachedTargetGroup.fromJSON(e));
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
        message.type !== undefined &&
            (obj.type = networkLoadBalancer_TypeToJSON(message.type));
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? AttachedTargetGroup.toJSON(e) : undefined);
        }
        else {
            obj.attachedTargetGroups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateNetworkLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
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
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromPartial(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(AttachedTargetGroup.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateNetworkLoadBalancerRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const CreateNetworkLoadBalancerRequest_LabelsEntry = {
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
            ...baseCreateNetworkLoadBalancerRequest_LabelsEntry,
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
            ...baseCreateNetworkLoadBalancerRequest_LabelsEntry,
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
            ...baseCreateNetworkLoadBalancerRequest_LabelsEntry,
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
const baseCreateNetworkLoadBalancerMetadata = {
    networkLoadBalancerId: '',
};
export const CreateNetworkLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNetworkLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseCreateNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseUpdateNetworkLoadBalancerRequest = {
    networkLoadBalancerId: '',
    name: '',
    description: '',
};
export const UpdateNetworkLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
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
            UpdateNetworkLoadBalancerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.listenerSpecs) {
            ListenerSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            AttachedTargetGroup.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNetworkLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
                    const entry5 = UpdateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.attachedTargetGroups.push(AttachedTargetGroup.decode(reader, reader.uint32()));
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
            ...baseUpdateNetworkLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(AttachedTargetGroup.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
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
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? AttachedTargetGroup.toJSON(e) : undefined);
        }
        else {
            obj.attachedTargetGroups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateNetworkLoadBalancerRequest,
        };
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(AttachedTargetGroup.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateNetworkLoadBalancerRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const UpdateNetworkLoadBalancerRequest_LabelsEntry = {
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
            ...baseUpdateNetworkLoadBalancerRequest_LabelsEntry,
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
            ...baseUpdateNetworkLoadBalancerRequest_LabelsEntry,
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
            ...baseUpdateNetworkLoadBalancerRequest_LabelsEntry,
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
const baseUpdateNetworkLoadBalancerMetadata = {
    networkLoadBalancerId: '',
};
export const UpdateNetworkLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNetworkLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseUpdateNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseDeleteNetworkLoadBalancerRequest = {
    networkLoadBalancerId: '',
};
export const DeleteNetworkLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNetworkLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseDeleteNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseDeleteNetworkLoadBalancerMetadata = {
    networkLoadBalancerId: '',
};
export const DeleteNetworkLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNetworkLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseDeleteNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseStartNetworkLoadBalancerRequest = {
    networkLoadBalancerId: '',
};
export const StartNetworkLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartNetworkLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseStartNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseStartNetworkLoadBalancerMetadata = {
    networkLoadBalancerId: '',
};
export const StartNetworkLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartNetworkLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseStartNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseStopNetworkLoadBalancerRequest = {
    networkLoadBalancerId: '',
};
export const StopNetworkLoadBalancerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopNetworkLoadBalancerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseStopNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopNetworkLoadBalancerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseStopNetworkLoadBalancerMetadata = {
    networkLoadBalancerId: '',
};
export const StopNetworkLoadBalancerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopNetworkLoadBalancerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseStopNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopNetworkLoadBalancerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseAttachNetworkLoadBalancerTargetGroupRequest = {
    networkLoadBalancerId: '',
};
export const AttachNetworkLoadBalancerTargetGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.attachedTargetGroup !== undefined) {
            AttachedTargetGroup.encode(message.attachedTargetGroup, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachNetworkLoadBalancerTargetGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.attachedTargetGroup = AttachedTargetGroup.decode(reader, reader.uint32());
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
            ...baseAttachNetworkLoadBalancerTargetGroupRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        if (object.attachedTargetGroup !== undefined &&
            object.attachedTargetGroup !== null) {
            message.attachedTargetGroup = AttachedTargetGroup.fromJSON(object.attachedTargetGroup);
        }
        else {
            message.attachedTargetGroup = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.attachedTargetGroup !== undefined &&
            (obj.attachedTargetGroup = message.attachedTargetGroup
                ? AttachedTargetGroup.toJSON(message.attachedTargetGroup)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachNetworkLoadBalancerTargetGroupRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        if (object.attachedTargetGroup !== undefined &&
            object.attachedTargetGroup !== null) {
            message.attachedTargetGroup = AttachedTargetGroup.fromPartial(object.attachedTargetGroup);
        }
        else {
            message.attachedTargetGroup = undefined;
        }
        return message;
    },
};
const baseAttachNetworkLoadBalancerTargetGroupMetadata = {
    networkLoadBalancerId: '',
    targetGroupId: '',
};
export const AttachNetworkLoadBalancerTargetGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachNetworkLoadBalancerTargetGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
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
            ...baseAttachNetworkLoadBalancerTargetGroupMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachNetworkLoadBalancerTargetGroupMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseDetachNetworkLoadBalancerTargetGroupRequest = {
    networkLoadBalancerId: '',
    targetGroupId: '',
};
export const DetachNetworkLoadBalancerTargetGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachNetworkLoadBalancerTargetGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
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
            ...baseDetachNetworkLoadBalancerTargetGroupRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetachNetworkLoadBalancerTargetGroupRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseDetachNetworkLoadBalancerTargetGroupMetadata = {
    networkLoadBalancerId: '',
    targetGroupId: '',
};
export const DetachNetworkLoadBalancerTargetGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachNetworkLoadBalancerTargetGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
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
            ...baseDetachNetworkLoadBalancerTargetGroupMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetachNetworkLoadBalancerTargetGroupMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseAddNetworkLoadBalancerListenerRequest = {
    networkLoadBalancerId: '',
};
export const AddNetworkLoadBalancerListenerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddNetworkLoadBalancerListenerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
        const message = {
            ...baseAddNetworkLoadBalancerListenerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddNetworkLoadBalancerListenerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseAddNetworkLoadBalancerListenerMetadata = {
    networkLoadBalancerId: '',
};
export const AddNetworkLoadBalancerListenerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddNetworkLoadBalancerListenerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseAddNetworkLoadBalancerListenerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddNetworkLoadBalancerListenerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseRemoveNetworkLoadBalancerListenerRequest = {
    networkLoadBalancerId: '',
    listenerName: '',
};
export const RemoveNetworkLoadBalancerListenerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
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
            ...baseRemoveNetworkLoadBalancerListenerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseRemoveNetworkLoadBalancerListenerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveNetworkLoadBalancerListenerRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseRemoveNetworkLoadBalancerListenerMetadata = {
    networkLoadBalancerId: '',
};
export const RemoveNetworkLoadBalancerListenerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveNetworkLoadBalancerListenerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseRemoveNetworkLoadBalancerListenerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveNetworkLoadBalancerListenerMetadata,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
        }
        return message;
    },
};
const baseListNetworkLoadBalancerOperationsRequest = {
    networkLoadBalancerId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListNetworkLoadBalancerOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
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
            ...baseListNetworkLoadBalancerOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
            ...baseListNetworkLoadBalancerOperationsRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListNetworkLoadBalancerOperationsRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseListNetworkLoadBalancerOperationsResponse = {
    nextPageToken: '',
};
export const ListNetworkLoadBalancerOperationsResponse = {
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
            ...baseListNetworkLoadBalancerOperationsResponse,
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
            ...baseListNetworkLoadBalancerOperationsResponse,
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
            ...baseListNetworkLoadBalancerOperationsResponse,
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
const baseGetTargetStatesRequest = {
    networkLoadBalancerId: '',
    targetGroupId: '',
};
export const GetTargetStatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
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
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
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
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = String(object.networkLoadBalancerId);
        }
        else {
            message.networkLoadBalancerId = '';
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetTargetStatesRequest,
        };
        if (object.networkLoadBalancerId !== undefined &&
            object.networkLoadBalancerId !== null) {
            message.networkLoadBalancerId = object.networkLoadBalancerId;
        }
        else {
            message.networkLoadBalancerId = '';
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
const baseExternalAddressSpec = { address: '', ipVersion: 0 };
export const ExternalAddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalAddressSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseExternalAddressSpec };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseExternalAddressSpec };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
};
const baseInternalAddressSpec = {
    address: '',
    subnetId: '',
    ipVersion: 0,
};
export const InternalAddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(24).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInternalAddressSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.ipVersion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInternalAddressSpec };
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
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInternalAddressSpec };
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
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
};
const baseListenerSpec = {
    name: '',
    port: 0,
    protocol: 0,
    targetPort: 0,
};
export const ListenerSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.protocol !== 0) {
            writer.uint32(24).int32(message.protocol);
        }
        if (message.externalAddressSpec !== undefined) {
            ExternalAddressSpec.encode(message.externalAddressSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.internalAddressSpec !== undefined) {
            InternalAddressSpec.encode(message.internalAddressSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.targetPort !== 0) {
            writer.uint32(40).int64(message.targetPort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListenerSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64());
                    break;
                case 3:
                    message.protocol = reader.int32();
                    break;
                case 4:
                    message.externalAddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.internalAddressSpec = InternalAddressSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.targetPort = longToNumber(reader.int64());
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = listener_ProtocolFromJSON(object.protocol);
        }
        else {
            message.protocol = 0;
        }
        if (object.externalAddressSpec !== undefined &&
            object.externalAddressSpec !== null) {
            message.externalAddressSpec = ExternalAddressSpec.fromJSON(object.externalAddressSpec);
        }
        else {
            message.externalAddressSpec = undefined;
        }
        if (object.internalAddressSpec !== undefined &&
            object.internalAddressSpec !== null) {
            message.internalAddressSpec = InternalAddressSpec.fromJSON(object.internalAddressSpec);
        }
        else {
            message.internalAddressSpec = undefined;
        }
        if (object.targetPort !== undefined && object.targetPort !== null) {
            message.targetPort = Number(object.targetPort);
        }
        else {
            message.targetPort = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.port !== undefined && (obj.port = message.port);
        message.protocol !== undefined &&
            (obj.protocol = listener_ProtocolToJSON(message.protocol));
        message.externalAddressSpec !== undefined &&
            (obj.externalAddressSpec = message.externalAddressSpec
                ? ExternalAddressSpec.toJSON(message.externalAddressSpec)
                : undefined);
        message.internalAddressSpec !== undefined &&
            (obj.internalAddressSpec = message.internalAddressSpec
                ? InternalAddressSpec.toJSON(message.internalAddressSpec)
                : undefined);
        message.targetPort !== undefined &&
            (obj.targetPort = message.targetPort);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListenerSpec };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = object.protocol;
        }
        else {
            message.protocol = 0;
        }
        if (object.externalAddressSpec !== undefined &&
            object.externalAddressSpec !== null) {
            message.externalAddressSpec = ExternalAddressSpec.fromPartial(object.externalAddressSpec);
        }
        else {
            message.externalAddressSpec = undefined;
        }
        if (object.internalAddressSpec !== undefined &&
            object.internalAddressSpec !== null) {
            message.internalAddressSpec = InternalAddressSpec.fromPartial(object.internalAddressSpec);
        }
        else {
            message.internalAddressSpec = undefined;
        }
        if (object.targetPort !== undefined && object.targetPort !== null) {
            message.targetPort = object.targetPort;
        }
        else {
            message.targetPort = 0;
        }
        return message;
    },
};
/** A set of methods for managing NetworkLoadBalancer resources. */
export const NetworkLoadBalancerServiceService = {
    /**
     * Returns the specified NetworkLoadBalancer resource.
     *
     * Get the list of available NetworkLoadBalancer resources by making a [List] request.
     */
    get: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => GetNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(NetworkLoadBalancer.encode(value).finish()),
        responseDeserialize: (value) => NetworkLoadBalancer.decode(value),
    },
    /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
    list: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListNetworkLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListNetworkLoadBalancersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListNetworkLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListNetworkLoadBalancersResponse.decode(value),
    },
    /** Creates a network load balancer in the specified folder using the data specified in the request. */
    create: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified network load balancer. */
    update: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified network load balancer. */
    delete: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Starts load balancing and health checking with the specified network load balancer with specified settings.
     * Changes network load balancer status to `` ACTIVE ``.
     */
    start: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StartNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => StartNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Stops load balancing and health checking with the specified network load balancer.
     * Changes load balancer status to `` STOPPED ``.
     */
    stop: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StopNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => StopNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Attaches a target group to the specified network load balancer. */
    attachTargetGroup: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AttachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => AttachNetworkLoadBalancerTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Detaches the target group from the specified network load balancer. */
    detachTargetGroup: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DetachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => DetachNetworkLoadBalancerTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Gets states of target resources in the attached target group. */
    getTargetStates: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => GetTargetStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => GetTargetStatesResponse.decode(value),
    },
    /** Adds a listener to the specified network load balancer. */
    addListener: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddNetworkLoadBalancerListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => AddNetworkLoadBalancerListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Removes the listener from the specified network load balancer. */
    removeListener: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RemoveNetworkLoadBalancerListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => RemoveNetworkLoadBalancerListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified network load balancer. */
    listOperations: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListNetworkLoadBalancerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListNetworkLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListNetworkLoadBalancerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListNetworkLoadBalancerOperationsResponse.decode(value),
    },
};
export const NetworkLoadBalancerServiceClient = makeGenericClientConstructor(NetworkLoadBalancerServiceService, 'yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService');
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
