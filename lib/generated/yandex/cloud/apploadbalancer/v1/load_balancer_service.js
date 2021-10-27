"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancerServiceClient = exports.LoadBalancerServiceService = exports.ListLoadBalancerOperationsResponse = exports.ListLoadBalancerOperationsRequest = exports.UpdateSniMatchMetadata = exports.UpdateSniMatchRequest = exports.RemoveSniMatchMetadata = exports.RemoveSniMatchRequest = exports.AddSniMatchMetadata = exports.AddSniMatchRequest = exports.GetTargetStatesResponse = exports.GetTargetStatesRequest = exports.ListenerSpec = exports.EndpointSpec = exports.ExternalIpv6AddressSpec = exports.InternalIpv4AddressSpec = exports.ExternalIpv4AddressSpec = exports.AddressSpec = exports.UpdateListenerMetadata = exports.UpdateListenerRequest = exports.RemoveListenerMetadata = exports.RemoveListenerRequest = exports.AddListenerMetadata = exports.AddListenerRequest = exports.StopLoadBalancerMetadata = exports.StopLoadBalancerRequest = exports.StartLoadBalancerMetadata = exports.StartLoadBalancerRequest = exports.CreateLoadBalancerMetadata = exports.CreateLoadBalancerRequest_LabelsEntry = exports.CreateLoadBalancerRequest = exports.UpdateLoadBalancerMetadata = exports.UpdateLoadBalancerRequest_LabelsEntry = exports.UpdateLoadBalancerRequest = exports.DeleteLoadBalancerMetadata = exports.DeleteLoadBalancerRequest = exports.ListLoadBalancersResponse = exports.ListLoadBalancersRequest = exports.GetLoadBalancerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const load_balancer_1 = require("../../../../yandex/cloud/apploadbalancer/v1/load_balancer");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseGetLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest',
    loadBalancerId: '',
};
exports.GetLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetLoadBalancerRequest.$type, exports.GetLoadBalancerRequest);
const baseListLoadBalancersRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListLoadBalancersRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest',
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
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancersRequest.$type, exports.ListLoadBalancersRequest);
const baseListLoadBalancersResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse',
    nextPageToken: '',
};
exports.ListLoadBalancersResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.loadBalancers) {
            load_balancer_1.LoadBalancer.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListLoadBalancersResponse,
        };
        message.loadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancers.push(load_balancer_1.LoadBalancer.decode(reader, reader.uint32()));
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
                message.loadBalancers.push(load_balancer_1.LoadBalancer.fromJSON(e));
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
            obj.loadBalancers = message.loadBalancers.map((e) => e ? load_balancer_1.LoadBalancer.toJSON(e) : undefined);
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
                message.loadBalancers.push(load_balancer_1.LoadBalancer.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancersResponse.$type, exports.ListLoadBalancersResponse);
const baseDeleteLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest',
    loadBalancerId: '',
};
exports.DeleteLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLoadBalancerRequest.$type, exports.DeleteLoadBalancerRequest);
const baseDeleteLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata',
    loadBalancerId: '',
};
exports.DeleteLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLoadBalancerMetadata.$type, exports.DeleteLoadBalancerMetadata);
const baseUpdateLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest',
    loadBalancerId: '',
    name: '',
    description: '',
    securityGroupIds: '',
};
exports.UpdateLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
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
            exports.UpdateLoadBalancerRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            load_balancer_1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.allocationPolicy = load_balancer_1.AllocationPolicy.decode(reader, reader.uint32());
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
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = load_balancer_1.AllocationPolicy.fromJSON(object.allocationPolicy);
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
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? load_balancer_1.AllocationPolicy.toJSON(message.allocationPolicy)
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
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = load_balancer_1.AllocationPolicy.fromPartial(object.allocationPolicy);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLoadBalancerRequest.$type, exports.UpdateLoadBalancerRequest);
const baseUpdateLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLoadBalancerRequest_LabelsEntry.$type, exports.UpdateLoadBalancerRequest_LabelsEntry);
const baseUpdateLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata',
    loadBalancerId: '',
};
exports.UpdateLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLoadBalancerMetadata.$type, exports.UpdateLoadBalancerMetadata);
const baseCreateLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest',
    folderId: '',
    name: '',
    description: '',
    regionId: '',
    networkId: '',
    securityGroupIds: '',
};
exports.CreateLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest',
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
            exports.CreateLoadBalancerRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        if (message.networkId !== '') {
            writer.uint32(50).string(message.networkId);
        }
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            load_balancer_1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(74).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    const entry4 = exports.CreateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.allocationPolicy = load_balancer_1.AllocationPolicy.decode(reader, reader.uint32());
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
                message.listenerSpecs.push(exports.ListenerSpec.fromJSON(e));
            }
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = load_balancer_1.AllocationPolicy.fromJSON(object.allocationPolicy);
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
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? exports.ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? load_balancer_1.AllocationPolicy.toJSON(message.allocationPolicy)
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
                message.listenerSpecs.push(exports.ListenerSpec.fromPartial(e));
            }
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = load_balancer_1.AllocationPolicy.fromPartial(object.allocationPolicy);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateLoadBalancerRequest.$type, exports.CreateLoadBalancerRequest);
const baseCreateLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateLoadBalancerRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateLoadBalancerRequest_LabelsEntry.$type, exports.CreateLoadBalancerRequest_LabelsEntry);
const baseCreateLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata',
    loadBalancerId: '',
};
exports.CreateLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateLoadBalancerMetadata.$type, exports.CreateLoadBalancerMetadata);
const baseStartLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest',
    loadBalancerId: '',
};
exports.StartLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StartLoadBalancerRequest.$type, exports.StartLoadBalancerRequest);
const baseStartLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata',
    loadBalancerId: '',
};
exports.StartLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StartLoadBalancerMetadata.$type, exports.StartLoadBalancerMetadata);
const baseStopLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest',
    loadBalancerId: '',
};
exports.StopLoadBalancerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StopLoadBalancerRequest.$type, exports.StopLoadBalancerRequest);
const baseStopLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata',
    loadBalancerId: '',
};
exports.StopLoadBalancerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.StopLoadBalancerMetadata.$type, exports.StopLoadBalancerMetadata);
const baseAddListenerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddListenerRequest',
    loadBalancerId: '',
};
exports.AddListenerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddListenerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            exports.ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddListenerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
        const message = { ...baseAddListenerRequest };
        if (object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null) {
            message.loadBalancerId = String(object.loadBalancerId);
        }
        else {
            message.loadBalancerId = '';
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
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? exports.ListenerSpec.toJSON(message.listenerSpec)
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
            message.listenerSpec = exports.ListenerSpec.fromPartial(object.listenerSpec);
        }
        else {
            message.listenerSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddListenerRequest.$type, exports.AddListenerRequest);
const baseAddListenerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddListenerMetadata',
    loadBalancerId: '',
    listenerName: '',
};
exports.AddListenerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddListenerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddListenerMetadata.$type, exports.AddListenerMetadata);
const baseRemoveListenerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveListenerRequest',
    loadBalancerId: '',
    name: '',
};
exports.RemoveListenerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveListenerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RemoveListenerRequest.$type, exports.RemoveListenerRequest);
const baseRemoveListenerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata',
    loadBalancerId: '',
    listenerName: '',
};
exports.RemoveListenerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
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
typeRegistry_1.messageTypeRegistry.set(exports.RemoveListenerMetadata.$type, exports.RemoveListenerMetadata);
const baseUpdateListenerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateListenerRequest',
    loadBalancerId: '',
};
exports.UpdateListenerRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateListenerRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.listenerSpec !== undefined) {
            exports.ListenerSpec.encode(message.listenerSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
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
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? exports.ListenerSpec.toJSON(message.listenerSpec)
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
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateListenerRequest.$type, exports.UpdateListenerRequest);
const baseUpdateListenerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata',
    loadBalancerId: '',
    listenerName: '',
};
exports.UpdateListenerMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateListenerMetadata.$type, exports.UpdateListenerMetadata);
const baseAddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddressSpec',
};
exports.AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.externalIpv4AddressSpec !== undefined) {
            exports.ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.internalIpv4AddressSpec !== undefined) {
            exports.InternalIpv4AddressSpec.encode(message.internalIpv4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalIpv6AddressSpec !== undefined) {
            exports.ExternalIpv6AddressSpec.encode(message.externalIpv6AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddressSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4AddressSpec =
                        exports.ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.internalIpv4AddressSpec =
                        exports.InternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalIpv6AddressSpec =
                        exports.ExternalIpv6AddressSpec.decode(reader, reader.uint32());
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
            message.externalIpv4AddressSpec = exports.ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec);
        }
        else {
            message.externalIpv4AddressSpec = undefined;
        }
        if (object.internalIpv4AddressSpec !== undefined &&
            object.internalIpv4AddressSpec !== null) {
            message.internalIpv4AddressSpec = exports.InternalIpv4AddressSpec.fromJSON(object.internalIpv4AddressSpec);
        }
        else {
            message.internalIpv4AddressSpec = undefined;
        }
        if (object.externalIpv6AddressSpec !== undefined &&
            object.externalIpv6AddressSpec !== null) {
            message.externalIpv6AddressSpec = exports.ExternalIpv6AddressSpec.fromJSON(object.externalIpv6AddressSpec);
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
                ? exports.ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec)
                : undefined);
        message.internalIpv4AddressSpec !== undefined &&
            (obj.internalIpv4AddressSpec = message.internalIpv4AddressSpec
                ? exports.InternalIpv4AddressSpec.toJSON(message.internalIpv4AddressSpec)
                : undefined);
        message.externalIpv6AddressSpec !== undefined &&
            (obj.externalIpv6AddressSpec = message.externalIpv6AddressSpec
                ? exports.ExternalIpv6AddressSpec.toJSON(message.externalIpv6AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddressSpec };
        if (object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null) {
            message.externalIpv4AddressSpec =
                exports.ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec);
        }
        else {
            message.externalIpv4AddressSpec = undefined;
        }
        if (object.internalIpv4AddressSpec !== undefined &&
            object.internalIpv4AddressSpec !== null) {
            message.internalIpv4AddressSpec =
                exports.InternalIpv4AddressSpec.fromPartial(object.internalIpv4AddressSpec);
        }
        else {
            message.internalIpv4AddressSpec = undefined;
        }
        if (object.externalIpv6AddressSpec !== undefined &&
            object.externalIpv6AddressSpec !== null) {
            message.externalIpv6AddressSpec =
                exports.ExternalIpv6AddressSpec.fromPartial(object.externalIpv6AddressSpec);
        }
        else {
            message.externalIpv6AddressSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddressSpec.$type, exports.AddressSpec);
const baseExternalIpv4AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec',
    address: '',
};
exports.ExternalIpv4AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv4AddressSpec.$type, exports.ExternalIpv4AddressSpec);
const baseInternalIpv4AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec',
    address: '',
    subnetId: '',
};
exports.InternalIpv4AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.InternalIpv4AddressSpec.$type, exports.InternalIpv4AddressSpec);
const baseExternalIpv6AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec',
    address: '',
};
exports.ExternalIpv6AddressSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv6AddressSpec.$type, exports.ExternalIpv6AddressSpec);
const baseEndpointSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.EndpointSpec',
    ports: 0,
};
exports.EndpointSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.EndpointSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addressSpecs) {
            exports.AddressSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.ports) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEndpointSpec };
        message.addressSpecs = [];
        message.ports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressSpecs.push(exports.AddressSpec.decode(reader, reader.uint32()));
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
                message.addressSpecs.push(exports.AddressSpec.fromJSON(e));
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
            obj.addressSpecs = message.addressSpecs.map((e) => e ? exports.AddressSpec.toJSON(e) : undefined);
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
                message.addressSpecs.push(exports.AddressSpec.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.EndpointSpec.$type, exports.EndpointSpec);
const baseListenerSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListenerSpec',
    name: '',
};
exports.ListenerSpec = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListenerSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpointSpecs) {
            exports.EndpointSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            load_balancer_1.HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            load_balancer_1.TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.endpointSpecs.push(exports.EndpointSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.http = load_balancer_1.HttpListener.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tls = load_balancer_1.TlsListener.decode(reader, reader.uint32());
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
                message.endpointSpecs.push(exports.EndpointSpec.fromJSON(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = load_balancer_1.HttpListener.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = load_balancer_1.TlsListener.fromJSON(object.tls);
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
            obj.endpointSpecs = message.endpointSpecs.map((e) => e ? exports.EndpointSpec.toJSON(e) : undefined);
        }
        else {
            obj.endpointSpecs = [];
        }
        message.http !== undefined &&
            (obj.http = message.http
                ? load_balancer_1.HttpListener.toJSON(message.http)
                : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? load_balancer_1.TlsListener.toJSON(message.tls)
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
                message.endpointSpecs.push(exports.EndpointSpec.fromPartial(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = load_balancer_1.HttpListener.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = load_balancer_1.TlsListener.fromPartial(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListenerSpec.$type, exports.ListenerSpec);
const baseGetTargetStatesRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest',
    loadBalancerId: '',
    backendGroupId: '',
    targetGroupId: '',
};
exports.GetTargetStatesRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesRequest.$type, exports.GetTargetStatesRequest);
const baseGetTargetStatesResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse',
};
exports.GetTargetStatesResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetStates) {
            load_balancer_1.TargetState.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.targetStates.push(load_balancer_1.TargetState.decode(reader, reader.uint32()));
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
                message.targetStates.push(load_balancer_1.TargetState.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetStates) {
            obj.targetStates = message.targetStates.map((e) => e ? load_balancer_1.TargetState.toJSON(e) : undefined);
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
                message.targetStates.push(load_balancer_1.TargetState.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesResponse.$type, exports.GetTargetStatesResponse);
const baseAddSniMatchRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddSniMatchRequest',
    loadBalancerId: '',
    listenerName: '',
    name: '',
    serverNames: '',
};
exports.AddSniMatchRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddSniMatchRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            load_balancer_1.TlsHandler.encode(message.handler, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.handler = load_balancer_1.TlsHandler.decode(reader, reader.uint32());
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
            message.handler = load_balancer_1.TlsHandler.fromJSON(object.handler);
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
                ? load_balancer_1.TlsHandler.toJSON(message.handler)
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
            message.handler = load_balancer_1.TlsHandler.fromPartial(object.handler);
        }
        else {
            message.handler = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddSniMatchRequest.$type, exports.AddSniMatchRequest);
const baseAddSniMatchMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata',
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
exports.AddSniMatchMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddSniMatchMetadata.$type, exports.AddSniMatchMetadata);
const baseRemoveSniMatchRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest',
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
exports.RemoveSniMatchRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RemoveSniMatchRequest.$type, exports.RemoveSniMatchRequest);
const baseRemoveSniMatchMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata',
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
exports.RemoveSniMatchMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RemoveSniMatchMetadata.$type, exports.RemoveSniMatchMetadata);
const baseUpdateSniMatchRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest',
    loadBalancerId: '',
    listenerName: '',
    name: '',
    serverNames: '',
};
exports.UpdateSniMatchRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.serverNames) {
            writer.uint32(42).string(v);
        }
        if (message.handler !== undefined) {
            load_balancer_1.TlsHandler.encode(message.handler, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.serverNames.push(reader.string());
                    break;
                case 6:
                    message.handler = load_balancer_1.TlsHandler.decode(reader, reader.uint32());
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
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
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
            message.handler = load_balancer_1.TlsHandler.fromJSON(object.handler);
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
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        }
        else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? load_balancer_1.TlsHandler.toJSON(message.handler)
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
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
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
            message.handler = load_balancer_1.TlsHandler.fromPartial(object.handler);
        }
        else {
            message.handler = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSniMatchRequest.$type, exports.UpdateSniMatchRequest);
const baseUpdateSniMatchMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata',
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};
exports.UpdateSniMatchMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSniMatchMetadata.$type, exports.UpdateSniMatchMetadata);
const baseListLoadBalancerOperationsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest',
    loadBalancerId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListLoadBalancerOperationsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancerOperationsRequest.$type, exports.ListLoadBalancerOperationsRequest);
const baseListLoadBalancerOperationsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse',
    nextPageToken: '',
};
exports.ListLoadBalancerOperationsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse',
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
            ...baseListLoadBalancerOperationsResponse,
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
            ...baseListLoadBalancerOperationsResponse,
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
            ...baseListLoadBalancerOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancerOperationsResponse.$type, exports.ListLoadBalancerOperationsResponse);
/** A set of methods for managing application load balancers. */
exports.LoadBalancerServiceService = {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(load_balancer_1.LoadBalancer.encode(value).finish()),
        responseDeserialize: (value) => load_balancer_1.LoadBalancer.decode(value),
    },
    /** Lists application load balancers in the specified folder. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLoadBalancersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLoadBalancersResponse.decode(value),
    },
    /** Creates an application load balancer in the specified folder. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified application load balancer. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified application load balancer. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified application load balancer. */
    start: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified application load balancer. */
    stop: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds a listener to the specified application load balancer. */
    addListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified listener. */
    removeListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified listener of the specified application load balancer. */
    updateListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.AddSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.UpdateSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.RemoveSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTargetStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetTargetStatesResponse.decode(value),
    },
    /** Lists operations for the specified application load balancer. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLoadBalancerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLoadBalancerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLoadBalancerOperationsResponse.decode(value),
    },
};
exports.LoadBalancerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LoadBalancerServiceService, 'yandex.cloud.apploadbalancer.v1.LoadBalancerService');
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
