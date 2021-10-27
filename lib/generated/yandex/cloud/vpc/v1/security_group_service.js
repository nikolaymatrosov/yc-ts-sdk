"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupServiceClient = exports.SecurityGroupServiceService = exports.MoveSecurityGroupMetadata = exports.MoveSecurityGroupRequest = exports.ListSecurityGroupOperationsResponse = exports.ListSecurityGroupOperationsRequest = exports.DeleteSecurityGroupMetadata = exports.DeleteSecurityGroupRequest = exports.UpdateSecurityGroupRuleMetadata = exports.UpdateSecurityGroupRuleRequest_LabelsEntry = exports.UpdateSecurityGroupRuleRequest = exports.UpdateSecurityGroupRulesRequest = exports.UpdateSecurityGroupMetadata = exports.UpdateSecurityGroupRequest_LabelsEntry = exports.UpdateSecurityGroupRequest = exports.CreateSecurityGroupMetadata = exports.SecurityGroupRuleSpec_LabelsEntry = exports.SecurityGroupRuleSpec = exports.CreateSecurityGroupRequest_LabelsEntry = exports.CreateSecurityGroupRequest = exports.ListSecurityGroupsResponse = exports.ListSecurityGroupsRequest = exports.GetSecurityGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const security_group_1 = require("../../../../yandex/cloud/vpc/v1/security_group");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.vpc.v1';
const baseGetSecurityGroupRequest = { securityGroupId: '' };
exports.GetSecurityGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetSecurityGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
            ...baseGetSecurityGroupRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetSecurityGroupRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
};
const baseListSecurityGroupsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListSecurityGroupsRequest = {
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
            ...baseListSecurityGroupsRequest,
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
            ...baseListSecurityGroupsRequest,
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
            ...baseListSecurityGroupsRequest,
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
const baseListSecurityGroupsResponse = { nextPageToken: '' };
exports.ListSecurityGroupsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.securityGroups) {
            security_group_1.SecurityGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListSecurityGroupsResponse,
        };
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroups.push(security_group_1.SecurityGroup.decode(reader, reader.uint32()));
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
            ...baseListSecurityGroupsResponse,
        };
        message.securityGroups = [];
        if (object.securityGroups !== undefined &&
            object.securityGroups !== null) {
            for (const e of object.securityGroups) {
                message.securityGroups.push(security_group_1.SecurityGroup.fromJSON(e));
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
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e ? security_group_1.SecurityGroup.toJSON(e) : undefined);
        }
        else {
            obj.securityGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSecurityGroupsResponse,
        };
        message.securityGroups = [];
        if (object.securityGroups !== undefined &&
            object.securityGroups !== null) {
            for (const e of object.securityGroups) {
                message.securityGroups.push(security_group_1.SecurityGroup.fromPartial(e));
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
const baseCreateSecurityGroupRequest = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
};
exports.CreateSecurityGroupRequest = {
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
            exports.CreateSecurityGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        for (const v of message.ruleSpecs) {
            exports.SecurityGroupRuleSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecurityGroupRequest,
        };
        message.labels = {};
        message.ruleSpecs = [];
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
                    const entry4 = exports.CreateSecurityGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.ruleSpecs.push(exports.SecurityGroupRuleSpec.decode(reader, reader.uint32()));
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
            ...baseCreateSecurityGroupRequest,
        };
        message.labels = {};
        message.ruleSpecs = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(exports.SecurityGroupRuleSpec.fromJSON(e));
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.ruleSpecs) {
            obj.ruleSpecs = message.ruleSpecs.map((e) => e ? exports.SecurityGroupRuleSpec.toJSON(e) : undefined);
        }
        else {
            obj.ruleSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSecurityGroupRequest,
        };
        message.labels = {};
        message.ruleSpecs = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(exports.SecurityGroupRuleSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateSecurityGroupRequest_LabelsEntry = {
    key: '',
    value: '',
};
exports.CreateSecurityGroupRequest_LabelsEntry = {
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
            ...baseCreateSecurityGroupRequest_LabelsEntry,
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
            ...baseCreateSecurityGroupRequest_LabelsEntry,
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
            ...baseCreateSecurityGroupRequest_LabelsEntry,
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
const baseSecurityGroupRuleSpec = { description: '', direction: 0 };
exports.SecurityGroupRuleSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.SecurityGroupRuleSpec_LabelsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.direction !== 0) {
            writer.uint32(24).int32(message.direction);
        }
        if (message.ports !== undefined) {
            security_group_1.PortRange.encode(message.ports, writer.uint32(34).fork()).ldelim();
        }
        if (message.protocolName !== undefined) {
            writer.uint32(42).string(message.protocolName);
        }
        if (message.protocolNumber !== undefined) {
            writer.uint32(48).int64(message.protocolNumber);
        }
        if (message.cidrBlocks !== undefined) {
            security_group_1.CidrBlocks.encode(message.cidrBlocks, writer.uint32(58).fork()).ldelim();
        }
        if (message.securityGroupId !== undefined) {
            writer.uint32(66).string(message.securityGroupId);
        }
        if (message.predefinedTarget !== undefined) {
            writer.uint32(74).string(message.predefinedTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityGroupRuleSpec,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    const entry2 = exports.SecurityGroupRuleSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.direction = reader.int32();
                    break;
                case 4:
                    message.ports = security_group_1.PortRange.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.protocolName = reader.string();
                    break;
                case 6:
                    message.protocolNumber = longToNumber(reader.int64());
                    break;
                case 7:
                    message.cidrBlocks = security_group_1.CidrBlocks.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupId = reader.string();
                    break;
                case 9:
                    message.predefinedTarget = reader.string();
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
            ...baseSecurityGroupRuleSpec,
        };
        message.labels = {};
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
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = (0, security_group_1.securityGroupRule_DirectionFromJSON)(object.direction);
        }
        else {
            message.direction = 0;
        }
        if (object.ports !== undefined && object.ports !== null) {
            message.ports = security_group_1.PortRange.fromJSON(object.ports);
        }
        else {
            message.ports = undefined;
        }
        if (object.protocolName !== undefined && object.protocolName !== null) {
            message.protocolName = String(object.protocolName);
        }
        else {
            message.protocolName = undefined;
        }
        if (object.protocolNumber !== undefined &&
            object.protocolNumber !== null) {
            message.protocolNumber = Number(object.protocolNumber);
        }
        else {
            message.protocolNumber = undefined;
        }
        if (object.cidrBlocks !== undefined && object.cidrBlocks !== null) {
            message.cidrBlocks = security_group_1.CidrBlocks.fromJSON(object.cidrBlocks);
        }
        else {
            message.cidrBlocks = undefined;
        }
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = undefined;
        }
        if (object.predefinedTarget !== undefined &&
            object.predefinedTarget !== null) {
            message.predefinedTarget = String(object.predefinedTarget);
        }
        else {
            message.predefinedTarget = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.direction !== undefined &&
            (obj.direction = (0, security_group_1.securityGroupRule_DirectionToJSON)(message.direction));
        message.ports !== undefined &&
            (obj.ports = message.ports
                ? security_group_1.PortRange.toJSON(message.ports)
                : undefined);
        message.protocolName !== undefined &&
            (obj.protocolName = message.protocolName);
        message.protocolNumber !== undefined &&
            (obj.protocolNumber = message.protocolNumber);
        message.cidrBlocks !== undefined &&
            (obj.cidrBlocks = message.cidrBlocks
                ? security_group_1.CidrBlocks.toJSON(message.cidrBlocks)
                : undefined);
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.predefinedTarget !== undefined &&
            (obj.predefinedTarget = message.predefinedTarget);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityGroupRuleSpec,
        };
        message.labels = {};
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
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = object.direction;
        }
        else {
            message.direction = 0;
        }
        if (object.ports !== undefined && object.ports !== null) {
            message.ports = security_group_1.PortRange.fromPartial(object.ports);
        }
        else {
            message.ports = undefined;
        }
        if (object.protocolName !== undefined && object.protocolName !== null) {
            message.protocolName = object.protocolName;
        }
        else {
            message.protocolName = undefined;
        }
        if (object.protocolNumber !== undefined &&
            object.protocolNumber !== null) {
            message.protocolNumber = object.protocolNumber;
        }
        else {
            message.protocolNumber = undefined;
        }
        if (object.cidrBlocks !== undefined && object.cidrBlocks !== null) {
            message.cidrBlocks = security_group_1.CidrBlocks.fromPartial(object.cidrBlocks);
        }
        else {
            message.cidrBlocks = undefined;
        }
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = undefined;
        }
        if (object.predefinedTarget !== undefined &&
            object.predefinedTarget !== null) {
            message.predefinedTarget = object.predefinedTarget;
        }
        else {
            message.predefinedTarget = undefined;
        }
        return message;
    },
};
const baseSecurityGroupRuleSpec_LabelsEntry = { key: '', value: '' };
exports.SecurityGroupRuleSpec_LabelsEntry = {
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
            ...baseSecurityGroupRuleSpec_LabelsEntry,
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
            ...baseSecurityGroupRuleSpec_LabelsEntry,
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
            ...baseSecurityGroupRuleSpec_LabelsEntry,
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
const baseCreateSecurityGroupMetadata = { securityGroupId: '' };
exports.CreateSecurityGroupMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecurityGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
            ...baseCreateSecurityGroupMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSecurityGroupMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
};
const baseUpdateSecurityGroupRequest = {
    securityGroupId: '',
    name: '',
    description: '',
};
exports.UpdateSecurityGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
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
            exports.UpdateSecurityGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.ruleSpecs) {
            exports.SecurityGroupRuleSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRequest,
        };
        message.labels = {};
        message.ruleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
                    const entry5 = exports.UpdateSecurityGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.ruleSpecs.push(exports.SecurityGroupRuleSpec.decode(reader, reader.uint32()));
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
            ...baseUpdateSecurityGroupRequest,
        };
        message.labels = {};
        message.ruleSpecs = [];
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
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
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(exports.SecurityGroupRuleSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
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
        if (message.ruleSpecs) {
            obj.ruleSpecs = message.ruleSpecs.map((e) => e ? exports.SecurityGroupRuleSpec.toJSON(e) : undefined);
        }
        else {
            obj.ruleSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSecurityGroupRequest,
        };
        message.labels = {};
        message.ruleSpecs = [];
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
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
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(exports.SecurityGroupRuleSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateSecurityGroupRequest_LabelsEntry = {
    key: '',
    value: '',
};
exports.UpdateSecurityGroupRequest_LabelsEntry = {
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
            ...baseUpdateSecurityGroupRequest_LabelsEntry,
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
            ...baseUpdateSecurityGroupRequest_LabelsEntry,
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
            ...baseUpdateSecurityGroupRequest_LabelsEntry,
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
const baseUpdateSecurityGroupMetadata = {
    securityGroupId: '',
    addedRuleIds: '',
};
exports.UpdateSecurityGroupMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        for (const v of message.addedRuleIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupMetadata,
        };
        message.addedRuleIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.addedRuleIds.push(reader.string());
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
            ...baseUpdateSecurityGroupMetadata,
        };
        message.addedRuleIds = [];
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        if (object.addedRuleIds !== undefined && object.addedRuleIds !== null) {
            for (const e of object.addedRuleIds) {
                message.addedRuleIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        if (message.addedRuleIds) {
            obj.addedRuleIds = message.addedRuleIds.map((e) => e);
        }
        else {
            obj.addedRuleIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSecurityGroupMetadata,
        };
        message.addedRuleIds = [];
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        if (object.addedRuleIds !== undefined && object.addedRuleIds !== null) {
            for (const e of object.addedRuleIds) {
                message.addedRuleIds.push(e);
            }
        }
        return message;
    },
};
const baseUpdateSecurityGroupRulesRequest = {
    securityGroupId: '',
    deletionRuleIds: '',
};
exports.UpdateSecurityGroupRulesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        for (const v of message.deletionRuleIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.additionRuleSpecs) {
            exports.SecurityGroupRuleSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRulesRequest,
        };
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.deletionRuleIds.push(reader.string());
                    break;
                case 3:
                    message.additionRuleSpecs.push(exports.SecurityGroupRuleSpec.decode(reader, reader.uint32()));
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
            ...baseUpdateSecurityGroupRulesRequest,
        };
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        if (object.deletionRuleIds !== undefined &&
            object.deletionRuleIds !== null) {
            for (const e of object.deletionRuleIds) {
                message.deletionRuleIds.push(String(e));
            }
        }
        if (object.additionRuleSpecs !== undefined &&
            object.additionRuleSpecs !== null) {
            for (const e of object.additionRuleSpecs) {
                message.additionRuleSpecs.push(exports.SecurityGroupRuleSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        if (message.deletionRuleIds) {
            obj.deletionRuleIds = message.deletionRuleIds.map((e) => e);
        }
        else {
            obj.deletionRuleIds = [];
        }
        if (message.additionRuleSpecs) {
            obj.additionRuleSpecs = message.additionRuleSpecs.map((e) => e ? exports.SecurityGroupRuleSpec.toJSON(e) : undefined);
        }
        else {
            obj.additionRuleSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSecurityGroupRulesRequest,
        };
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        if (object.deletionRuleIds !== undefined &&
            object.deletionRuleIds !== null) {
            for (const e of object.deletionRuleIds) {
                message.deletionRuleIds.push(e);
            }
        }
        if (object.additionRuleSpecs !== undefined &&
            object.additionRuleSpecs !== null) {
            for (const e of object.additionRuleSpecs) {
                message.additionRuleSpecs.push(exports.SecurityGroupRuleSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateSecurityGroupRuleRequest = {
    securityGroupId: '',
    ruleId: '',
    description: '',
};
exports.UpdateSecurityGroupRuleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.ruleId !== '') {
            writer.uint32(18).string(message.ruleId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateSecurityGroupRuleRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRuleRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateSecurityGroupRuleRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
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
            ...baseUpdateSecurityGroupRuleRequest,
        };
        message.labels = {};
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = String(object.ruleId);
        }
        else {
            message.ruleId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
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
            ...baseUpdateSecurityGroupRuleRequest,
        };
        message.labels = {};
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = object.ruleId;
        }
        else {
            message.ruleId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        return message;
    },
};
const baseUpdateSecurityGroupRuleRequest_LabelsEntry = {
    key: '',
    value: '',
};
exports.UpdateSecurityGroupRuleRequest_LabelsEntry = {
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
            ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
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
            ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
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
            ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
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
const baseUpdateSecurityGroupRuleMetadata = {
    securityGroupId: '',
    ruleId: '',
};
exports.UpdateSecurityGroupRuleMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.ruleId !== '') {
            writer.uint32(18).string(message.ruleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRuleMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
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
            ...baseUpdateSecurityGroupRuleMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = String(object.ruleId);
        }
        else {
            message.ruleId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSecurityGroupRuleMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = object.ruleId;
        }
        else {
            message.ruleId = '';
        }
        return message;
    },
};
const baseDeleteSecurityGroupRequest = { securityGroupId: '' };
exports.DeleteSecurityGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSecurityGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
            ...baseDeleteSecurityGroupRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSecurityGroupRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
};
const baseDeleteSecurityGroupMetadata = { securityGroupId: '' };
exports.DeleteSecurityGroupMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSecurityGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
            ...baseDeleteSecurityGroupMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSecurityGroupMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
};
const baseListSecurityGroupOperationsRequest = {
    securityGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListSecurityGroupOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
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
            ...baseListSecurityGroupOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
            ...baseListSecurityGroupOperationsRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
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
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSecurityGroupOperationsRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
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
const baseListSecurityGroupOperationsResponse = { nextPageToken: '' };
exports.ListSecurityGroupOperationsResponse = {
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
            ...baseListSecurityGroupOperationsResponse,
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
            ...baseListSecurityGroupOperationsResponse,
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
            ...baseListSecurityGroupOperationsResponse,
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
const baseMoveSecurityGroupRequest = {
    securityGroupId: '',
    destinationFolderId: '',
};
exports.MoveSecurityGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveSecurityGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
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
            ...baseMoveSecurityGroupRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        if (object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null) {
            message.destinationFolderId = String(object.destinationFolderId);
        }
        else {
            message.destinationFolderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMoveSecurityGroupRequest,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        if (object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null) {
            message.destinationFolderId = object.destinationFolderId;
        }
        else {
            message.destinationFolderId = '';
        }
        return message;
    },
};
const baseMoveSecurityGroupMetadata = { securityGroupId: '' };
exports.MoveSecurityGroupMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveSecurityGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
            ...baseMoveSecurityGroupMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = String(object.securityGroupId);
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMoveSecurityGroupMetadata,
        };
        if (object.securityGroupId !== undefined &&
            object.securityGroupId !== null) {
            message.securityGroupId = object.securityGroupId;
        }
        else {
            message.securityGroupId = '';
        }
        return message;
    },
};
exports.SecurityGroupServiceService = {
    get: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(security_group_1.SecurityGroup.encode(value).finish()),
        responseDeserialize: (value) => security_group_1.SecurityGroup.decode(value),
    },
    list: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecurityGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecurityGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecurityGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecurityGroupsResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    updateRules: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecurityGroupRulesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecurityGroupRulesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** update rule description or labels */
    updateRule: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecurityGroupRuleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecurityGroupRuleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    move: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    listOperations: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecurityGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecurityGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecurityGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecurityGroupOperationsResponse.decode(value),
    },
};
exports.SecurityGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SecurityGroupServiceService, 'yandex.cloud.vpc.v1.SecurityGroupService');
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
