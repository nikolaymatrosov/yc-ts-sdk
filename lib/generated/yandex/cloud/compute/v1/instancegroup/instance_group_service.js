/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../../yandex/cloud/access/access';
import { InstanceTemplate, ScalePolicy, DeployPolicy, AllocationPolicy, LoadBalancerSpec, HealthChecksSpec, Variable, ApplicationLoadBalancerSpec, InstanceGroup, ManagedInstance, LogRecord, } from '../../../../../yandex/cloud/compute/v1/instancegroup/instance_group';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.compute.v1.instancegroup';
export var InstanceGroupView;
(function (InstanceGroupView) {
    /** BASIC - Doesn't include the metadata of the instance template in the server response. */
    InstanceGroupView[InstanceGroupView["BASIC"] = 0] = "BASIC";
    /** FULL - Returns the metadata of the instance template in the server response. */
    InstanceGroupView[InstanceGroupView["FULL"] = 1] = "FULL";
    InstanceGroupView[InstanceGroupView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceGroupView || (InstanceGroupView = {}));
export function instanceGroupViewFromJSON(object) {
    switch (object) {
        case 0:
        case 'BASIC':
            return InstanceGroupView.BASIC;
        case 1:
        case 'FULL':
            return InstanceGroupView.FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InstanceGroupView.UNRECOGNIZED;
    }
}
export function instanceGroupViewToJSON(object) {
    switch (object) {
        case InstanceGroupView.BASIC:
            return 'BASIC';
        case InstanceGroupView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}
const baseResumeInstanceGroupProcessesRequest = { instanceGroupId: '' };
export const ResumeInstanceGroupProcessesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeInstanceGroupProcessesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseResumeInstanceGroupProcessesRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResumeInstanceGroupProcessesRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseResumeInstanceGroupProcessMetadata = { instanceGroupId: '' };
export const ResumeInstanceGroupProcessMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeInstanceGroupProcessMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseResumeInstanceGroupProcessMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResumeInstanceGroupProcessMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const basePauseInstanceGroupProcessesRequest = { instanceGroupId: '' };
export const PauseInstanceGroupProcessesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseInstanceGroupProcessesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...basePauseInstanceGroupProcessesRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePauseInstanceGroupProcessesRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const basePauseInstanceGroupProcessMetadata = { instanceGroupId: '' };
export const PauseInstanceGroupProcessMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseInstanceGroupProcessMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...basePauseInstanceGroupProcessMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePauseInstanceGroupProcessMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseGetInstanceGroupRequest = { instanceGroupId: '', view: 0 };
export const GetInstanceGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetInstanceGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32();
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
            ...baseGetInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = instanceGroupViewFromJSON(object.view);
        }
        else {
            message.view = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.view !== undefined &&
            (obj.view = instanceGroupViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        }
        else {
            message.view = 0;
        }
        return message;
    },
};
const baseCreateInstanceGroupRequest = {
    folderId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    deletionProtection: false,
};
export const CreateInstanceGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateInstanceGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            InstanceTemplate.encode(message.instanceTemplate, writer.uint32(50).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(message.deployPolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.loadBalancerSpec !== undefined) {
            LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(82).fork()).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        for (const v of message.variables) {
            Variable.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(112).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupRequest,
        };
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = CreateInstanceGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.instanceTemplate = InstanceTemplate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.loadBalancerSpec = LoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.healthChecksSpec = HealthChecksSpec.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.variables.push(Variable.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.deletionProtection = reader.bool();
                    break;
                case 15:
                    message.applicationLoadBalancerSpec =
                        ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
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
            ...baseCreateInstanceGroupRequest,
        };
        message.labels = {};
        message.variables = [];
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
        if (object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null) {
            message.instanceTemplate = InstanceTemplate.fromJSON(object.instanceTemplate);
        }
        else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null) {
            message.loadBalancerSpec = LoadBalancerSpec.fromJSON(object.loadBalancerSpec);
        }
        else {
            message.loadBalancerSpec = undefined;
        }
        if (object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null) {
            message.healthChecksSpec = HealthChecksSpec.fromJSON(object.healthChecksSpec);
        }
        else {
            message.healthChecksSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromJSON(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        if (object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null) {
            message.applicationLoadBalancerSpec =
                ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec);
        }
        else {
            message.applicationLoadBalancerSpec = undefined;
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? Variable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec =
                message.applicationLoadBalancerSpec
                    ? ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceGroupRequest,
        };
        message.labels = {};
        message.variables = [];
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
        if (object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null) {
            message.instanceTemplate = InstanceTemplate.fromPartial(object.instanceTemplate);
        }
        else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null) {
            message.loadBalancerSpec = LoadBalancerSpec.fromPartial(object.loadBalancerSpec);
        }
        else {
            message.loadBalancerSpec = undefined;
        }
        if (object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null) {
            message.healthChecksSpec = HealthChecksSpec.fromPartial(object.healthChecksSpec);
        }
        else {
            message.healthChecksSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromPartial(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        if (object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null) {
            message.applicationLoadBalancerSpec =
                ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec);
        }
        else {
            message.applicationLoadBalancerSpec = undefined;
        }
        return message;
    },
};
const baseCreateInstanceGroupRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const CreateInstanceGroupRequest_LabelsEntry = {
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
            ...baseCreateInstanceGroupRequest_LabelsEntry,
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
            ...baseCreateInstanceGroupRequest_LabelsEntry,
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
            ...baseCreateInstanceGroupRequest_LabelsEntry,
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
const baseCreateInstanceGroupFromYamlRequest = {
    folderId: '',
    instanceGroupYaml: '',
};
export const CreateInstanceGroupFromYamlRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.instanceGroupYaml !== '') {
            writer.uint32(18).string(message.instanceGroupYaml);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupFromYamlRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.instanceGroupYaml = reader.string();
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
            ...baseCreateInstanceGroupFromYamlRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null) {
            message.instanceGroupYaml = String(object.instanceGroupYaml);
        }
        else {
            message.instanceGroupYaml = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.instanceGroupYaml !== undefined &&
            (obj.instanceGroupYaml = message.instanceGroupYaml);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceGroupFromYamlRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null) {
            message.instanceGroupYaml = object.instanceGroupYaml;
        }
        else {
            message.instanceGroupYaml = '';
        }
        return message;
    },
};
const baseCreateInstanceGroupMetadata = { instanceGroupId: '' };
export const CreateInstanceGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseCreateInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseUpdateInstanceGroupRequest = {
    instanceGroupId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    deletionProtection: false,
};
export const UpdateInstanceGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
            UpdateInstanceGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            InstanceTemplate.encode(message.instanceTemplate, writer.uint32(50).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(message.deployPolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.loadBalancerSpec !== undefined) {
            LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.variables) {
            Variable.encode(v, writer.uint32(122).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupRequest,
        };
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
                    const entry5 = UpdateInstanceGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.instanceTemplate = InstanceTemplate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.healthChecksSpec = HealthChecksSpec.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.loadBalancerSpec = LoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.variables.push(Variable.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
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
            ...baseUpdateInstanceGroupRequest,
        };
        message.labels = {};
        message.variables = [];
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
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
        if (object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null) {
            message.instanceTemplate = InstanceTemplate.fromJSON(object.instanceTemplate);
        }
        else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null) {
            message.healthChecksSpec = HealthChecksSpec.fromJSON(object.healthChecksSpec);
        }
        else {
            message.healthChecksSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null) {
            message.loadBalancerSpec = LoadBalancerSpec.fromJSON(object.loadBalancerSpec);
        }
        else {
            message.loadBalancerSpec = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromJSON(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? Variable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceGroupRequest,
        };
        message.labels = {};
        message.variables = [];
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
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
        if (object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null) {
            message.instanceTemplate = InstanceTemplate.fromPartial(object.instanceTemplate);
        }
        else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = AllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null) {
            message.healthChecksSpec = HealthChecksSpec.fromPartial(object.healthChecksSpec);
        }
        else {
            message.healthChecksSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null) {
            message.loadBalancerSpec = LoadBalancerSpec.fromPartial(object.loadBalancerSpec);
        }
        else {
            message.loadBalancerSpec = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromPartial(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
};
const baseUpdateInstanceGroupRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const UpdateInstanceGroupRequest_LabelsEntry = {
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
            ...baseUpdateInstanceGroupRequest_LabelsEntry,
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
            ...baseUpdateInstanceGroupRequest_LabelsEntry,
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
            ...baseUpdateInstanceGroupRequest_LabelsEntry,
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
const baseUpdateInstanceGroupFromYamlRequest = {
    instanceGroupId: '',
    instanceGroupYaml: '',
};
export const UpdateInstanceGroupFromYamlRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        if (message.instanceGroupYaml !== '') {
            writer.uint32(18).string(message.instanceGroupYaml);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupFromYamlRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.instanceGroupYaml = reader.string();
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
            ...baseUpdateInstanceGroupFromYamlRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null) {
            message.instanceGroupYaml = String(object.instanceGroupYaml);
        }
        else {
            message.instanceGroupYaml = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.instanceGroupYaml !== undefined &&
            (obj.instanceGroupYaml = message.instanceGroupYaml);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceGroupFromYamlRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null) {
            message.instanceGroupYaml = object.instanceGroupYaml;
        }
        else {
            message.instanceGroupYaml = '';
        }
        return message;
    },
};
const baseUpdateInstanceGroupMetadata = { instanceGroupId: '' };
export const UpdateInstanceGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseUpdateInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseStartInstanceGroupRequest = { instanceGroupId: '' };
export const StartInstanceGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartInstanceGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseStartInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseStartInstanceGroupMetadata = { instanceGroupId: '' };
export const StartInstanceGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartInstanceGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseStartInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseStopInstanceGroupRequest = { instanceGroupId: '' };
export const StopInstanceGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopInstanceGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseStopInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseStopInstanceGroupMetadata = { instanceGroupId: '' };
export const StopInstanceGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopInstanceGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseStopInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseDeleteInstanceGroupRequest = { instanceGroupId: '' };
export const DeleteInstanceGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseDeleteInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteInstanceGroupRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseDeleteInstanceGroupMetadata = { instanceGroupId: '' };
export const DeleteInstanceGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseDeleteInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteInstanceGroupMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseDeleteInstancesMetadata = { instanceGroupId: '' };
export const DeleteInstancesMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstancesMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseDeleteInstancesMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteInstancesMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseStopInstancesMetadata = { instanceGroupId: '' };
export const StopInstancesMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopInstancesMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseStopInstancesMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStopInstancesMetadata,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        return message;
    },
};
const baseListInstanceGroupsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    view: 0,
};
export const ListInstanceGroupsRequest = {
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
        if (message.view !== 0) {
            writer.uint32(40).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupsRequest,
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
                case 5:
                    message.view = reader.int32();
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
            ...baseListInstanceGroupsRequest,
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
        if (object.view !== undefined && object.view !== null) {
            message.view = instanceGroupViewFromJSON(object.view);
        }
        else {
            message.view = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.view !== undefined &&
            (obj.view = instanceGroupViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupsRequest,
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
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        }
        else {
            message.view = 0;
        }
        return message;
    },
};
const baseListInstanceGroupsResponse = { nextPageToken: '' };
export const ListInstanceGroupsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instanceGroups) {
            InstanceGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListInstanceGroupsResponse,
        };
        message.instanceGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroups.push(InstanceGroup.decode(reader, reader.uint32()));
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
            ...baseListInstanceGroupsResponse,
        };
        message.instanceGroups = [];
        if (object.instanceGroups !== undefined &&
            object.instanceGroups !== null) {
            for (const e of object.instanceGroups) {
                message.instanceGroups.push(InstanceGroup.fromJSON(e));
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
        if (message.instanceGroups) {
            obj.instanceGroups = message.instanceGroups.map((e) => e ? InstanceGroup.toJSON(e) : undefined);
        }
        else {
            obj.instanceGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupsResponse,
        };
        message.instanceGroups = [];
        if (object.instanceGroups !== undefined &&
            object.instanceGroups !== null) {
            for (const e of object.instanceGroups) {
                message.instanceGroups.push(InstanceGroup.fromPartial(e));
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
const baseListInstanceGroupInstancesRequest = {
    instanceGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListInstanceGroupInstancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
            ...baseListInstanceGroupInstancesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseListInstanceGroupInstancesRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
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
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupInstancesRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
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
const baseListInstanceGroupInstancesResponse = { nextPageToken: '' };
export const ListInstanceGroupInstancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instances) {
            ManagedInstance.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListInstanceGroupInstancesResponse,
        };
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(ManagedInstance.decode(reader, reader.uint32()));
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
            ...baseListInstanceGroupInstancesResponse,
        };
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(ManagedInstance.fromJSON(e));
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
        if (message.instances) {
            obj.instances = message.instances.map((e) => e ? ManagedInstance.toJSON(e) : undefined);
        }
        else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupInstancesResponse,
        };
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(ManagedInstance.fromPartial(e));
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
const baseDeleteInstancesRequest = {
    instanceGroupId: '',
    managedInstanceIds: '',
    createAnother: false,
};
export const DeleteInstancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v);
        }
        if (message.createAnother === true) {
            writer.uint32(24).bool(message.createAnother);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstancesRequest,
        };
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
                    break;
                case 3:
                    message.createAnother = reader.bool();
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
            ...baseDeleteInstancesRequest,
        };
        message.managedInstanceIds = [];
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(String(e));
            }
        }
        if (object.createAnother !== undefined &&
            object.createAnother !== null) {
            message.createAnother = Boolean(object.createAnother);
        }
        else {
            message.createAnother = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        }
        else {
            obj.managedInstanceIds = [];
        }
        message.createAnother !== undefined &&
            (obj.createAnother = message.createAnother);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteInstancesRequest,
        };
        message.managedInstanceIds = [];
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(e);
            }
        }
        if (object.createAnother !== undefined &&
            object.createAnother !== null) {
            message.createAnother = object.createAnother;
        }
        else {
            message.createAnother = false;
        }
        return message;
    },
};
const baseStopInstancesRequest = {
    instanceGroupId: '',
    managedInstanceIds: '',
};
export const StopInstancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstancesRequest };
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStopInstancesRequest };
        message.managedInstanceIds = [];
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        }
        else {
            obj.managedInstanceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopInstancesRequest };
        message.managedInstanceIds = [];
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(e);
            }
        }
        return message;
    },
};
const baseListInstanceGroupOperationsRequest = {
    instanceGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListInstanceGroupOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
            ...baseListInstanceGroupOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseListInstanceGroupOperationsRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
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
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupOperationsRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
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
const baseListInstanceGroupOperationsResponse = { nextPageToken: '' };
export const ListInstanceGroupOperationsResponse = {
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
            ...baseListInstanceGroupOperationsResponse,
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
            ...baseListInstanceGroupOperationsResponse,
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
            ...baseListInstanceGroupOperationsResponse,
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
const baseListInstanceGroupLogRecordsRequest = {
    instanceGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListInstanceGroupLogRecordsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
            ...baseListInstanceGroupLogRecordsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
            ...baseListInstanceGroupLogRecordsRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
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
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupLogRecordsRequest,
        };
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
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
const baseListInstanceGroupLogRecordsResponse = { nextPageToken: '' };
export const ListInstanceGroupLogRecordsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.logRecords) {
            LogRecord.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListInstanceGroupLogRecordsResponse,
        };
        message.logRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logRecords.push(LogRecord.decode(reader, reader.uint32()));
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
            ...baseListInstanceGroupLogRecordsResponse,
        };
        message.logRecords = [];
        if (object.logRecords !== undefined && object.logRecords !== null) {
            for (const e of object.logRecords) {
                message.logRecords.push(LogRecord.fromJSON(e));
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
        if (message.logRecords) {
            obj.logRecords = message.logRecords.map((e) => e ? LogRecord.toJSON(e) : undefined);
        }
        else {
            obj.logRecords = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceGroupLogRecordsResponse,
        };
        message.logRecords = [];
        if (object.logRecords !== undefined && object.logRecords !== null) {
            for (const e of object.logRecords) {
                message.logRecords.push(LogRecord.fromPartial(e));
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
/** A set of methods for managing InstanceGroup resources. */
export const InstanceGroupServiceService = {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => GetInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(InstanceGroup.encode(value).finish()),
        responseDeserialize: (value) => InstanceGroup.decode(value),
    },
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListInstanceGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListInstanceGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListInstanceGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListInstanceGroupsResponse.decode(value),
    },
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateInstanceGroupFromYamlRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateInstanceGroupFromYamlRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateInstanceGroupFromYamlRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateInstanceGroupFromYamlRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Stops the specified instance group. */
    stop: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StopInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => StopInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Starts the specified instance group. */
    start: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StartInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => StartInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified instance group. */
    delete: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists instances for the specified instance group. */
    listInstances: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListInstanceGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListInstanceGroupInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListInstanceGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListInstanceGroupInstancesResponse.decode(value),
    },
    /** Delete instances from the instance group. */
    deleteInstances: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Stop instances from the instance group. */
    stopInstances: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StopInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => StopInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified instance group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListInstanceGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListInstanceGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListInstanceGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListInstanceGroupOperationsResponse.decode(value),
    },
    /** Lists logs for the specified instance group. */
    listLogRecords: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListInstanceGroupLogRecordsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListInstanceGroupLogRecordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListInstanceGroupLogRecordsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListInstanceGroupLogRecordsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified instance group. */
    setAccessBindings: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    resumeProcesses: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ResumeInstanceGroupProcessesRequest.encode(value).finish()),
        requestDeserialize: (value) => ResumeInstanceGroupProcessesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    pauseProcesses: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(PauseInstanceGroupProcessesRequest.encode(value).finish()),
        requestDeserialize: (value) => PauseInstanceGroupProcessesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const InstanceGroupServiceClient = makeGenericClientConstructor(InstanceGroupServiceService, 'yandex.cloud.compute.v1.instancegroup.InstanceGroupService');
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
