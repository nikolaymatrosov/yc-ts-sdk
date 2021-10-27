"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkLoadBalancerServiceClient = exports.NetworkLoadBalancerServiceService = exports.ListenerSpec = exports.InternalAddressSpec = exports.ExternalAddressSpec = exports.GetTargetStatesResponse = exports.GetTargetStatesRequest = exports.ListNetworkLoadBalancerOperationsResponse = exports.ListNetworkLoadBalancerOperationsRequest = exports.RemoveNetworkLoadBalancerListenerMetadata = exports.RemoveNetworkLoadBalancerListenerRequest = exports.AddNetworkLoadBalancerListenerMetadata = exports.AddNetworkLoadBalancerListenerRequest = exports.DetachNetworkLoadBalancerTargetGroupMetadata = exports.DetachNetworkLoadBalancerTargetGroupRequest = exports.AttachNetworkLoadBalancerTargetGroupMetadata = exports.AttachNetworkLoadBalancerTargetGroupRequest = exports.StopNetworkLoadBalancerMetadata = exports.StopNetworkLoadBalancerRequest = exports.StartNetworkLoadBalancerMetadata = exports.StartNetworkLoadBalancerRequest = exports.DeleteNetworkLoadBalancerMetadata = exports.DeleteNetworkLoadBalancerRequest = exports.UpdateNetworkLoadBalancerMetadata = exports.UpdateNetworkLoadBalancerRequest_LabelsEntry = exports.UpdateNetworkLoadBalancerRequest = exports.CreateNetworkLoadBalancerMetadata = exports.CreateNetworkLoadBalancerRequest_LabelsEntry = exports.CreateNetworkLoadBalancerRequest = exports.ListNetworkLoadBalancersResponse = exports.ListNetworkLoadBalancersRequest = exports.GetNetworkLoadBalancerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const network_load_balancer_1 = require("../../../../yandex/cloud/loadbalancer/v1/network_load_balancer");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.loadbalancer.v1';
const baseGetNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest',
    networkLoadBalancerId: '',
};
exports.GetNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetNetworkLoadBalancerRequest.$type, exports.GetNetworkLoadBalancerRequest);
const baseListNetworkLoadBalancersRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListNetworkLoadBalancersRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancersRequest.$type, exports.ListNetworkLoadBalancersRequest);
const baseListNetworkLoadBalancersResponse = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse',
    nextPageToken: '',
};
exports.ListNetworkLoadBalancersResponse = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.networkLoadBalancers) {
            network_load_balancer_1.NetworkLoadBalancer.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListNetworkLoadBalancersResponse,
        };
        message.networkLoadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancers.push(network_load_balancer_1.NetworkLoadBalancer.decode(reader, reader.uint32()));
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
                message.networkLoadBalancers.push(network_load_balancer_1.NetworkLoadBalancer.fromJSON(e));
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
            obj.networkLoadBalancers = message.networkLoadBalancers.map((e) => e ? network_load_balancer_1.NetworkLoadBalancer.toJSON(e) : undefined);
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
                message.networkLoadBalancers.push(network_load_balancer_1.NetworkLoadBalancer.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancersResponse.$type, exports.ListNetworkLoadBalancersResponse);
const baseCreateNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest',
    folderId: '',
    name: '',
    description: '',
    regionId: '',
    type: 0,
};
exports.CreateNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.CreateNetworkLoadBalancerRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            network_load_balancer_1.AttachedTargetGroup.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    const entry4 = exports.CreateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.decode(reader, reader.uint32()));
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
            message.type = (0, network_load_balancer_1.networkLoadBalancer_TypeFromJSON)(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(exports.ListenerSpec.fromJSON(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.fromJSON(e));
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
            (obj.type = (0, network_load_balancer_1.networkLoadBalancer_TypeToJSON)(message.type));
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? exports.ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? network_load_balancer_1.AttachedTargetGroup.toJSON(e) : undefined);
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
                message.listenerSpecs.push(exports.ListenerSpec.fromPartial(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNetworkLoadBalancerRequest.$type, exports.CreateNetworkLoadBalancerRequest);
const baseCreateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateNetworkLoadBalancerRequest_LabelsEntry.$type, exports.CreateNetworkLoadBalancerRequest_LabelsEntry);
const baseCreateNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata',
    networkLoadBalancerId: '',
};
exports.CreateNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateNetworkLoadBalancerMetadata.$type, exports.CreateNetworkLoadBalancerMetadata);
const baseUpdateNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest',
    networkLoadBalancerId: '',
    name: '',
    description: '',
};
exports.UpdateNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateNetworkLoadBalancerRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            network_load_balancer_1.AttachedTargetGroup.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.decode(reader, reader.uint32()));
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(exports.ListenerSpec.fromJSON(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.fromJSON(e));
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
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
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
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? exports.ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? network_load_balancer_1.AttachedTargetGroup.toJSON(e) : undefined);
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
                message.listenerSpecs.push(exports.ListenerSpec.fromPartial(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNetworkLoadBalancerRequest.$type, exports.UpdateNetworkLoadBalancerRequest);
const baseUpdateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNetworkLoadBalancerRequest_LabelsEntry.$type, exports.UpdateNetworkLoadBalancerRequest_LabelsEntry);
const baseUpdateNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata',
    networkLoadBalancerId: '',
};
exports.UpdateNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNetworkLoadBalancerMetadata.$type, exports.UpdateNetworkLoadBalancerMetadata);
const baseDeleteNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest',
    networkLoadBalancerId: '',
};
exports.DeleteNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNetworkLoadBalancerRequest.$type, exports.DeleteNetworkLoadBalancerRequest);
const baseDeleteNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata',
    networkLoadBalancerId: '',
};
exports.DeleteNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNetworkLoadBalancerMetadata.$type, exports.DeleteNetworkLoadBalancerMetadata);
const baseStartNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest',
    networkLoadBalancerId: '',
};
exports.StartNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StartNetworkLoadBalancerRequest.$type, exports.StartNetworkLoadBalancerRequest);
const baseStartNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata',
    networkLoadBalancerId: '',
};
exports.StartNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StartNetworkLoadBalancerMetadata.$type, exports.StartNetworkLoadBalancerMetadata);
const baseStopNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest',
    networkLoadBalancerId: '',
};
exports.StopNetworkLoadBalancerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StopNetworkLoadBalancerRequest.$type, exports.StopNetworkLoadBalancerRequest);
const baseStopNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata',
    networkLoadBalancerId: '',
};
exports.StopNetworkLoadBalancerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StopNetworkLoadBalancerMetadata.$type, exports.StopNetworkLoadBalancerMetadata);
const baseAttachNetworkLoadBalancerTargetGroupRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest',
    networkLoadBalancerId: '',
};
exports.AttachNetworkLoadBalancerTargetGroupRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.attachedTargetGroup !== undefined) {
            network_load_balancer_1.AttachedTargetGroup.encode(message.attachedTargetGroup, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.attachedTargetGroup = network_load_balancer_1.AttachedTargetGroup.decode(reader, reader.uint32());
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
            message.attachedTargetGroup = network_load_balancer_1.AttachedTargetGroup.fromJSON(object.attachedTargetGroup);
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
                ? network_load_balancer_1.AttachedTargetGroup.toJSON(message.attachedTargetGroup)
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
            message.attachedTargetGroup = network_load_balancer_1.AttachedTargetGroup.fromPartial(object.attachedTargetGroup);
        }
        else {
            message.attachedTargetGroup = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachNetworkLoadBalancerTargetGroupRequest.$type, exports.AttachNetworkLoadBalancerTargetGroupRequest);
const baseAttachNetworkLoadBalancerTargetGroupMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata',
    networkLoadBalancerId: '',
    targetGroupId: '',
};
exports.AttachNetworkLoadBalancerTargetGroupMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AttachNetworkLoadBalancerTargetGroupMetadata.$type, exports.AttachNetworkLoadBalancerTargetGroupMetadata);
const baseDetachNetworkLoadBalancerTargetGroupRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest',
    networkLoadBalancerId: '',
    targetGroupId: '',
};
exports.DetachNetworkLoadBalancerTargetGroupRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DetachNetworkLoadBalancerTargetGroupRequest.$type, exports.DetachNetworkLoadBalancerTargetGroupRequest);
const baseDetachNetworkLoadBalancerTargetGroupMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata',
    networkLoadBalancerId: '',
    targetGroupId: '',
};
exports.DetachNetworkLoadBalancerTargetGroupMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DetachNetworkLoadBalancerTargetGroupMetadata.$type, exports.DetachNetworkLoadBalancerTargetGroupMetadata);
const baseAddNetworkLoadBalancerListenerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest',
    networkLoadBalancerId: '',
};
exports.AddNetworkLoadBalancerListenerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            exports.ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.listenerSpec = exports.ListenerSpec.decode(reader, reader.uint32());
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
            message.listenerSpec = exports.ListenerSpec.fromJSON(object.listenerSpec);
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
                ? exports.ListenerSpec.toJSON(message.listenerSpec)
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
            message.listenerSpec = exports.ListenerSpec.fromPartial(object.listenerSpec);
        }
        else {
            message.listenerSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddNetworkLoadBalancerListenerRequest.$type, exports.AddNetworkLoadBalancerListenerRequest);
const baseAddNetworkLoadBalancerListenerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata',
    networkLoadBalancerId: '',
};
exports.AddNetworkLoadBalancerListenerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddNetworkLoadBalancerListenerMetadata.$type, exports.AddNetworkLoadBalancerListenerMetadata);
const baseRemoveNetworkLoadBalancerListenerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest',
    networkLoadBalancerId: '',
    listenerName: '',
};
exports.RemoveNetworkLoadBalancerListenerRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RemoveNetworkLoadBalancerListenerRequest.$type, exports.RemoveNetworkLoadBalancerListenerRequest);
const baseRemoveNetworkLoadBalancerListenerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata',
    networkLoadBalancerId: '',
};
exports.RemoveNetworkLoadBalancerListenerMetadata = {
    $type: 'yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RemoveNetworkLoadBalancerListenerMetadata.$type, exports.RemoveNetworkLoadBalancerListenerMetadata);
const baseListNetworkLoadBalancerOperationsRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest',
    networkLoadBalancerId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListNetworkLoadBalancerOperationsRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancerOperationsRequest.$type, exports.ListNetworkLoadBalancerOperationsRequest);
const baseListNetworkLoadBalancerOperationsResponse = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse',
    nextPageToken: '',
};
exports.ListNetworkLoadBalancerOperationsResponse = {
    $type: 'yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse',
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
            ...baseListNetworkLoadBalancerOperationsResponse,
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
            ...baseListNetworkLoadBalancerOperationsResponse,
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
            ...baseListNetworkLoadBalancerOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancerOperationsResponse.$type, exports.ListNetworkLoadBalancerOperationsResponse);
const baseGetTargetStatesRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.GetTargetStatesRequest',
    networkLoadBalancerId: '',
    targetGroupId: '',
};
exports.GetTargetStatesRequest = {
    $type: 'yandex.cloud.loadbalancer.v1.GetTargetStatesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== '') {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesRequest.$type, exports.GetTargetStatesRequest);
const baseGetTargetStatesResponse = {
    $type: 'yandex.cloud.loadbalancer.v1.GetTargetStatesResponse',
};
exports.GetTargetStatesResponse = {
    $type: 'yandex.cloud.loadbalancer.v1.GetTargetStatesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetStates) {
            network_load_balancer_1.TargetState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTargetStatesResponse,
        };
        message.targetStates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetStates.push(network_load_balancer_1.TargetState.decode(reader, reader.uint32()));
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
                message.targetStates.push(network_load_balancer_1.TargetState.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetStates) {
            obj.targetStates = message.targetStates.map((e) => e ? network_load_balancer_1.TargetState.toJSON(e) : undefined);
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
                message.targetStates.push(network_load_balancer_1.TargetState.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesResponse.$type, exports.GetTargetStatesResponse);
const baseExternalAddressSpec = {
    $type: 'yandex.cloud.loadbalancer.v1.ExternalAddressSpec',
    address: '',
    ipVersion: 0,
};
exports.ExternalAddressSpec = {
    $type: 'yandex.cloud.loadbalancer.v1.ExternalAddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            message.ipVersion = (0, network_load_balancer_1.ipVersionFromJSON)(object.ipVersion);
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
            (obj.ipVersion = (0, network_load_balancer_1.ipVersionToJSON)(message.ipVersion));
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
typeRegistry_1.messageTypeRegistry.set(exports.ExternalAddressSpec.$type, exports.ExternalAddressSpec);
const baseInternalAddressSpec = {
    $type: 'yandex.cloud.loadbalancer.v1.InternalAddressSpec',
    address: '',
    subnetId: '',
    ipVersion: 0,
};
exports.InternalAddressSpec = {
    $type: 'yandex.cloud.loadbalancer.v1.InternalAddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            message.ipVersion = (0, network_load_balancer_1.ipVersionFromJSON)(object.ipVersion);
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
            (obj.ipVersion = (0, network_load_balancer_1.ipVersionToJSON)(message.ipVersion));
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
typeRegistry_1.messageTypeRegistry.set(exports.InternalAddressSpec.$type, exports.InternalAddressSpec);
const baseListenerSpec = {
    $type: 'yandex.cloud.loadbalancer.v1.ListenerSpec',
    name: '',
    port: 0,
    protocol: 0,
    targetPort: 0,
};
exports.ListenerSpec = {
    $type: 'yandex.cloud.loadbalancer.v1.ListenerSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.ExternalAddressSpec.encode(message.externalAddressSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.internalAddressSpec !== undefined) {
            exports.InternalAddressSpec.encode(message.internalAddressSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.targetPort !== 0) {
            writer.uint32(40).int64(message.targetPort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.externalAddressSpec = exports.ExternalAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.internalAddressSpec = exports.InternalAddressSpec.decode(reader, reader.uint32());
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
            message.protocol = (0, network_load_balancer_1.listener_ProtocolFromJSON)(object.protocol);
        }
        else {
            message.protocol = 0;
        }
        if (object.externalAddressSpec !== undefined &&
            object.externalAddressSpec !== null) {
            message.externalAddressSpec = exports.ExternalAddressSpec.fromJSON(object.externalAddressSpec);
        }
        else {
            message.externalAddressSpec = undefined;
        }
        if (object.internalAddressSpec !== undefined &&
            object.internalAddressSpec !== null) {
            message.internalAddressSpec = exports.InternalAddressSpec.fromJSON(object.internalAddressSpec);
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
            (obj.protocol = (0, network_load_balancer_1.listener_ProtocolToJSON)(message.protocol));
        message.externalAddressSpec !== undefined &&
            (obj.externalAddressSpec = message.externalAddressSpec
                ? exports.ExternalAddressSpec.toJSON(message.externalAddressSpec)
                : undefined);
        message.internalAddressSpec !== undefined &&
            (obj.internalAddressSpec = message.internalAddressSpec
                ? exports.InternalAddressSpec.toJSON(message.internalAddressSpec)
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
            message.externalAddressSpec = exports.ExternalAddressSpec.fromPartial(object.externalAddressSpec);
        }
        else {
            message.externalAddressSpec = undefined;
        }
        if (object.internalAddressSpec !== undefined &&
            object.internalAddressSpec !== null) {
            message.internalAddressSpec = exports.InternalAddressSpec.fromPartial(object.internalAddressSpec);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListenerSpec.$type, exports.ListenerSpec);
/** A set of methods for managing NetworkLoadBalancer resources. */
exports.NetworkLoadBalancerServiceService = {
    /**
     * Returns the specified NetworkLoadBalancer resource.
     *
     * Get the list of available NetworkLoadBalancer resources by making a [List] request.
     */
    get: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(network_load_balancer_1.NetworkLoadBalancer.encode(value).finish()),
        responseDeserialize: (value) => network_load_balancer_1.NetworkLoadBalancer.decode(value),
    },
    /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
    list: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNetworkLoadBalancersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNetworkLoadBalancersResponse.decode(value),
    },
    /** Creates a network load balancer in the specified folder using the data specified in the request. */
    create: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified network load balancer. */
    update: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified network load balancer. */
    delete: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Starts load balancing and health checking with the specified network load balancer with specified settings.
     * Changes network load balancer status to `` ACTIVE ``.
     */
    start: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Stops load balancing and health checking with the specified network load balancer.
     * Changes load balancer status to `` STOPPED ``.
     */
    stop: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Attaches a target group to the specified network load balancer. */
    attachTargetGroup: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AttachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AttachNetworkLoadBalancerTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Detaches the target group from the specified network load balancer. */
    detachTargetGroup: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetachNetworkLoadBalancerTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Gets states of target resources in the attached target group. */
    getTargetStates: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTargetStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetTargetStatesResponse.decode(value),
    },
    /** Adds a listener to the specified network load balancer. */
    addListener: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddNetworkLoadBalancerListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddNetworkLoadBalancerListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes the listener from the specified network load balancer. */
    removeListener: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveNetworkLoadBalancerListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveNetworkLoadBalancerListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified network load balancer. */
    listOperations: {
        path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNetworkLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNetworkLoadBalancerOperationsResponse.decode(value),
    },
};
exports.NetworkLoadBalancerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NetworkLoadBalancerServiceService, 'yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService');
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
