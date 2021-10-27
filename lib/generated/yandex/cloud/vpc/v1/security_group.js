"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidrBlocks = exports.PortRange = exports.SecurityGroupRule_LabelsEntry = exports.SecurityGroupRule = exports.SecurityGroup_LabelsEntry = exports.SecurityGroup = exports.securityGroupRule_DirectionToJSON = exports.securityGroupRule_DirectionFromJSON = exports.SecurityGroupRule_Direction = exports.securityGroup_StatusToJSON = exports.securityGroup_StatusFromJSON = exports.SecurityGroup_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.vpc.v1';
var SecurityGroup_Status;
(function (SecurityGroup_Status) {
    SecurityGroup_Status[SecurityGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    SecurityGroup_Status[SecurityGroup_Status["CREATING"] = 1] = "CREATING";
    SecurityGroup_Status[SecurityGroup_Status["ACTIVE"] = 2] = "ACTIVE";
    /** UPDATING - updating is a long operation because we must update all instances in SG */
    SecurityGroup_Status[SecurityGroup_Status["UPDATING"] = 3] = "UPDATING";
    SecurityGroup_Status[SecurityGroup_Status["DELETING"] = 4] = "DELETING";
    SecurityGroup_Status[SecurityGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityGroup_Status = exports.SecurityGroup_Status || (exports.SecurityGroup_Status = {}));
function securityGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return SecurityGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return SecurityGroup_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return SecurityGroup_Status.ACTIVE;
        case 3:
        case 'UPDATING':
            return SecurityGroup_Status.UPDATING;
        case 4:
        case 'DELETING':
            return SecurityGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityGroup_Status.UNRECOGNIZED;
    }
}
exports.securityGroup_StatusFromJSON = securityGroup_StatusFromJSON;
function securityGroup_StatusToJSON(object) {
    switch (object) {
        case SecurityGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case SecurityGroup_Status.CREATING:
            return 'CREATING';
        case SecurityGroup_Status.ACTIVE:
            return 'ACTIVE';
        case SecurityGroup_Status.UPDATING:
            return 'UPDATING';
        case SecurityGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.securityGroup_StatusToJSON = securityGroup_StatusToJSON;
var SecurityGroupRule_Direction;
(function (SecurityGroupRule_Direction) {
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["DIRECTION_UNSPECIFIED"] = 0] = "DIRECTION_UNSPECIFIED";
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["INGRESS"] = 1] = "INGRESS";
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["EGRESS"] = 2] = "EGRESS";
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityGroupRule_Direction = exports.SecurityGroupRule_Direction || (exports.SecurityGroupRule_Direction = {}));
function securityGroupRule_DirectionFromJSON(object) {
    switch (object) {
        case 0:
        case 'DIRECTION_UNSPECIFIED':
            return SecurityGroupRule_Direction.DIRECTION_UNSPECIFIED;
        case 1:
        case 'INGRESS':
            return SecurityGroupRule_Direction.INGRESS;
        case 2:
        case 'EGRESS':
            return SecurityGroupRule_Direction.EGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityGroupRule_Direction.UNRECOGNIZED;
    }
}
exports.securityGroupRule_DirectionFromJSON = securityGroupRule_DirectionFromJSON;
function securityGroupRule_DirectionToJSON(object) {
    switch (object) {
        case SecurityGroupRule_Direction.DIRECTION_UNSPECIFIED:
            return 'DIRECTION_UNSPECIFIED';
        case SecurityGroupRule_Direction.INGRESS:
            return 'INGRESS';
        case SecurityGroupRule_Direction.EGRESS:
            return 'EGRESS';
        default:
            return 'UNKNOWN';
    }
}
exports.securityGroupRule_DirectionToJSON = securityGroupRule_DirectionToJSON;
const baseSecurityGroup = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroup',
    id: '',
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    status: 0,
    defaultForNetwork: false,
};
exports.SecurityGroup = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroup',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.SecurityGroup_LabelsEntry.encode({
                $type: 'yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        for (const v of message.rules) {
            exports.SecurityGroupRule.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.defaultForNetwork === true) {
            writer.uint32(80).bool(message.defaultForNetwork);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityGroup };
        message.labels = {};
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.SecurityGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.rules.push(exports.SecurityGroupRule.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.defaultForNetwork = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSecurityGroup };
        message.labels = {};
        message.rules = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
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
        if (object.status !== undefined && object.status !== null) {
            message.status = securityGroup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(exports.SecurityGroupRule.fromJSON(e));
            }
        }
        if (object.defaultForNetwork !== undefined &&
            object.defaultForNetwork !== null) {
            message.defaultForNetwork = Boolean(object.defaultForNetwork);
        }
        else {
            message.defaultForNetwork = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
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
        message.status !== undefined &&
            (obj.status = securityGroup_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? exports.SecurityGroupRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        message.defaultForNetwork !== undefined &&
            (obj.defaultForNetwork = message.defaultForNetwork);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityGroup };
        message.labels = {};
        message.rules = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(exports.SecurityGroupRule.fromPartial(e));
            }
        }
        if (object.defaultForNetwork !== undefined &&
            object.defaultForNetwork !== null) {
            message.defaultForNetwork = object.defaultForNetwork;
        }
        else {
            message.defaultForNetwork = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroup.$type, exports.SecurityGroup);
const baseSecurityGroup_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry',
    key: '',
    value: '',
};
exports.SecurityGroup_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry',
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
            ...baseSecurityGroup_LabelsEntry,
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
            ...baseSecurityGroup_LabelsEntry,
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
            ...baseSecurityGroup_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroup_LabelsEntry.$type, exports.SecurityGroup_LabelsEntry);
const baseSecurityGroupRule = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroupRule',
    id: '',
    description: '',
    direction: 0,
    protocolName: '',
    protocolNumber: 0,
};
exports.SecurityGroupRule = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroupRule',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.SecurityGroupRule_LabelsEntry.encode({
                $type: 'yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        if (message.ports !== undefined) {
            exports.PortRange.encode(message.ports, writer.uint32(42).fork()).ldelim();
        }
        if (message.protocolName !== '') {
            writer.uint32(50).string(message.protocolName);
        }
        if (message.protocolNumber !== 0) {
            writer.uint32(56).int64(message.protocolNumber);
        }
        if (message.cidrBlocks !== undefined) {
            exports.CidrBlocks.encode(message.cidrBlocks, writer.uint32(66).fork()).ldelim();
        }
        if (message.securityGroupId !== undefined) {
            writer.uint32(74).string(message.securityGroupId);
        }
        if (message.predefinedTarget !== undefined) {
            writer.uint32(82).string(message.predefinedTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityGroupRule };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    const entry3 = exports.SecurityGroupRule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.ports = exports.PortRange.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.protocolName = reader.string();
                    break;
                case 7:
                    message.protocolNumber = longToNumber(reader.int64());
                    break;
                case 8:
                    message.cidrBlocks = exports.CidrBlocks.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.securityGroupId = reader.string();
                    break;
                case 10:
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
        const message = { ...baseSecurityGroupRule };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
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
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = securityGroupRule_DirectionFromJSON(object.direction);
        }
        else {
            message.direction = 0;
        }
        if (object.ports !== undefined && object.ports !== null) {
            message.ports = exports.PortRange.fromJSON(object.ports);
        }
        else {
            message.ports = undefined;
        }
        if (object.protocolName !== undefined && object.protocolName !== null) {
            message.protocolName = String(object.protocolName);
        }
        else {
            message.protocolName = '';
        }
        if (object.protocolNumber !== undefined &&
            object.protocolNumber !== null) {
            message.protocolNumber = Number(object.protocolNumber);
        }
        else {
            message.protocolNumber = 0;
        }
        if (object.cidrBlocks !== undefined && object.cidrBlocks !== null) {
            message.cidrBlocks = exports.CidrBlocks.fromJSON(object.cidrBlocks);
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
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.direction !== undefined &&
            (obj.direction = securityGroupRule_DirectionToJSON(message.direction));
        message.ports !== undefined &&
            (obj.ports = message.ports
                ? exports.PortRange.toJSON(message.ports)
                : undefined);
        message.protocolName !== undefined &&
            (obj.protocolName = message.protocolName);
        message.protocolNumber !== undefined &&
            (obj.protocolNumber = message.protocolNumber);
        message.cidrBlocks !== undefined &&
            (obj.cidrBlocks = message.cidrBlocks
                ? exports.CidrBlocks.toJSON(message.cidrBlocks)
                : undefined);
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.predefinedTarget !== undefined &&
            (obj.predefinedTarget = message.predefinedTarget);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityGroupRule };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
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
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = object.direction;
        }
        else {
            message.direction = 0;
        }
        if (object.ports !== undefined && object.ports !== null) {
            message.ports = exports.PortRange.fromPartial(object.ports);
        }
        else {
            message.ports = undefined;
        }
        if (object.protocolName !== undefined && object.protocolName !== null) {
            message.protocolName = object.protocolName;
        }
        else {
            message.protocolName = '';
        }
        if (object.protocolNumber !== undefined &&
            object.protocolNumber !== null) {
            message.protocolNumber = object.protocolNumber;
        }
        else {
            message.protocolNumber = 0;
        }
        if (object.cidrBlocks !== undefined && object.cidrBlocks !== null) {
            message.cidrBlocks = exports.CidrBlocks.fromPartial(object.cidrBlocks);
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
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroupRule.$type, exports.SecurityGroupRule);
const baseSecurityGroupRule_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry',
    key: '',
    value: '',
};
exports.SecurityGroupRule_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry',
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
            ...baseSecurityGroupRule_LabelsEntry,
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
            ...baseSecurityGroupRule_LabelsEntry,
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
            ...baseSecurityGroupRule_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroupRule_LabelsEntry.$type, exports.SecurityGroupRule_LabelsEntry);
const basePortRange = {
    $type: 'yandex.cloud.vpc.v1.PortRange',
    fromPort: 0,
    toPort: 0,
};
exports.PortRange = {
    $type: 'yandex.cloud.vpc.v1.PortRange',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromPort !== 0) {
            writer.uint32(8).int64(message.fromPort);
        }
        if (message.toPort !== 0) {
            writer.uint32(16).int64(message.toPort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePortRange };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromPort = longToNumber(reader.int64());
                    break;
                case 2:
                    message.toPort = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePortRange };
        if (object.fromPort !== undefined && object.fromPort !== null) {
            message.fromPort = Number(object.fromPort);
        }
        else {
            message.fromPort = 0;
        }
        if (object.toPort !== undefined && object.toPort !== null) {
            message.toPort = Number(object.toPort);
        }
        else {
            message.toPort = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fromPort !== undefined && (obj.fromPort = message.fromPort);
        message.toPort !== undefined && (obj.toPort = message.toPort);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePortRange };
        if (object.fromPort !== undefined && object.fromPort !== null) {
            message.fromPort = object.fromPort;
        }
        else {
            message.fromPort = 0;
        }
        if (object.toPort !== undefined && object.toPort !== null) {
            message.toPort = object.toPort;
        }
        else {
            message.toPort = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PortRange.$type, exports.PortRange);
const baseCidrBlocks = {
    $type: 'yandex.cloud.vpc.v1.CidrBlocks',
    v4CidrBlocks: '',
    v6CidrBlocks: '',
};
exports.CidrBlocks = {
    $type: 'yandex.cloud.vpc.v1.CidrBlocks',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.v4CidrBlocks) {
            writer.uint32(10).string(v);
        }
        for (const v of message.v6CidrBlocks) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCidrBlocks };
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 2:
                    message.v6CidrBlocks.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCidrBlocks };
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(String(e));
            }
        }
        if (object.v6CidrBlocks !== undefined && object.v6CidrBlocks !== null) {
            for (const e of object.v6CidrBlocks) {
                message.v6CidrBlocks.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        if (message.v6CidrBlocks) {
            obj.v6CidrBlocks = message.v6CidrBlocks.map((e) => e);
        }
        else {
            obj.v6CidrBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCidrBlocks };
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(e);
            }
        }
        if (object.v6CidrBlocks !== undefined && object.v6CidrBlocks !== null) {
            for (const e of object.v6CidrBlocks) {
                message.v6CidrBlocks.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CidrBlocks.$type, exports.CidrBlocks);
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
