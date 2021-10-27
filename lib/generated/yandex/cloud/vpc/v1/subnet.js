"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhcpOptions = exports.Subnet_LabelsEntry = exports.Subnet = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.vpc.v1';
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion = exports.IpVersion || (exports.IpVersion = {}));
function ipVersionFromJSON(object) {
    switch (object) {
        case 0:
        case 'IP_VERSION_UNSPECIFIED':
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case 'IPV4':
            return IpVersion.IPV4;
        case 2:
        case 'IPV6':
            return IpVersion.IPV6;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpVersion.UNRECOGNIZED;
    }
}
exports.ipVersionFromJSON = ipVersionFromJSON;
function ipVersionToJSON(object) {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return 'IP_VERSION_UNSPECIFIED';
        case IpVersion.IPV4:
            return 'IPV4';
        case IpVersion.IPV6:
            return 'IPV6';
        default:
            return 'UNKNOWN';
    }
}
exports.ipVersionToJSON = ipVersionToJSON;
const baseSubnet = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    zoneId: '',
    v4CidrBlocks: '',
    v6CidrBlocks: '',
    routeTableId: '',
};
exports.Subnet = {
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
            exports.Subnet_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        if (message.zoneId !== '') {
            writer.uint32(66).string(message.zoneId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(82).string(v);
        }
        for (const v of message.v6CidrBlocks) {
            writer.uint32(90).string(v);
        }
        if (message.routeTableId !== '') {
            writer.uint32(98).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            exports.DhcpOptions.encode(message.dhcpOptions, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubnet };
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
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
                    const entry6 = exports.Subnet_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 10:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 11:
                    message.v6CidrBlocks.push(reader.string());
                    break;
                case 12:
                    message.routeTableId = reader.string();
                    break;
                case 13:
                    message.dhcpOptions = exports.DhcpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSubnet };
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
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
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = exports.DhcpOptions.fromJSON(object.dhcpOptions);
        }
        else {
            message.dhcpOptions = undefined;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? exports.DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSubnet };
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
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
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = exports.DhcpOptions.fromPartial(object.dhcpOptions);
        }
        else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
};
const baseSubnet_LabelsEntry = { key: '', value: '' };
exports.Subnet_LabelsEntry = {
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
        const message = { ...baseSubnet_LabelsEntry };
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
        const message = { ...baseSubnet_LabelsEntry };
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
        const message = { ...baseSubnet_LabelsEntry };
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
const baseDhcpOptions = {
    domainNameServers: '',
    domainName: '',
    ntpServers: '',
};
exports.DhcpOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.domainNameServers) {
            writer.uint32(10).string(v);
        }
        if (message.domainName !== '') {
            writer.uint32(18).string(message.domainName);
        }
        for (const v of message.ntpServers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDhcpOptions };
        message.domainNameServers = [];
        message.ntpServers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domainNameServers.push(reader.string());
                    break;
                case 2:
                    message.domainName = reader.string();
                    break;
                case 3:
                    message.ntpServers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDhcpOptions };
        message.domainNameServers = [];
        message.ntpServers = [];
        if (object.domainNameServers !== undefined &&
            object.domainNameServers !== null) {
            for (const e of object.domainNameServers) {
                message.domainNameServers.push(String(e));
            }
        }
        if (object.domainName !== undefined && object.domainName !== null) {
            message.domainName = String(object.domainName);
        }
        else {
            message.domainName = '';
        }
        if (object.ntpServers !== undefined && object.ntpServers !== null) {
            for (const e of object.ntpServers) {
                message.ntpServers.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.domainNameServers) {
            obj.domainNameServers = message.domainNameServers.map((e) => e);
        }
        else {
            obj.domainNameServers = [];
        }
        message.domainName !== undefined &&
            (obj.domainName = message.domainName);
        if (message.ntpServers) {
            obj.ntpServers = message.ntpServers.map((e) => e);
        }
        else {
            obj.ntpServers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDhcpOptions };
        message.domainNameServers = [];
        message.ntpServers = [];
        if (object.domainNameServers !== undefined &&
            object.domainNameServers !== null) {
            for (const e of object.domainNameServers) {
                message.domainNameServers.push(e);
            }
        }
        if (object.domainName !== undefined && object.domainName !== null) {
            message.domainName = object.domainName;
        }
        else {
            message.domainName = '';
        }
        if (object.ntpServers !== undefined && object.ntpServers !== null) {
            for (const e of object.ntpServers) {
                message.ntpServers.push(e);
            }
        }
        return message;
    },
};
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
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
