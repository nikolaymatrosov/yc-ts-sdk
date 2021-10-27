"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRequirements = exports.ExternalIpv4Address = exports.Address_LabelsEntry = exports.Address = exports.address_IpVersionToJSON = exports.address_IpVersionFromJSON = exports.Address_IpVersion = exports.address_TypeToJSON = exports.address_TypeFromJSON = exports.Address_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.vpc.v1';
var Address_Type;
(function (Address_Type) {
    Address_Type[Address_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** INTERNAL - Internal IP address. */
    Address_Type[Address_Type["INTERNAL"] = 1] = "INTERNAL";
    /** EXTERNAL - Public IP address. */
    Address_Type[Address_Type["EXTERNAL"] = 2] = "EXTERNAL";
    Address_Type[Address_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Address_Type = exports.Address_Type || (exports.Address_Type = {}));
function address_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Address_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'INTERNAL':
            return Address_Type.INTERNAL;
        case 2:
        case 'EXTERNAL':
            return Address_Type.EXTERNAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Address_Type.UNRECOGNIZED;
    }
}
exports.address_TypeFromJSON = address_TypeFromJSON;
function address_TypeToJSON(object) {
    switch (object) {
        case Address_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Address_Type.INTERNAL:
            return 'INTERNAL';
        case Address_Type.EXTERNAL:
            return 'EXTERNAL';
        default:
            return 'UNKNOWN';
    }
}
exports.address_TypeToJSON = address_TypeToJSON;
var Address_IpVersion;
(function (Address_IpVersion) {
    Address_IpVersion[Address_IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address. */
    Address_IpVersion[Address_IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address. */
    Address_IpVersion[Address_IpVersion["IPV6"] = 2] = "IPV6";
    Address_IpVersion[Address_IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Address_IpVersion = exports.Address_IpVersion || (exports.Address_IpVersion = {}));
function address_IpVersionFromJSON(object) {
    switch (object) {
        case 0:
        case 'IP_VERSION_UNSPECIFIED':
            return Address_IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case 'IPV4':
            return Address_IpVersion.IPV4;
        case 2:
        case 'IPV6':
            return Address_IpVersion.IPV6;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Address_IpVersion.UNRECOGNIZED;
    }
}
exports.address_IpVersionFromJSON = address_IpVersionFromJSON;
function address_IpVersionToJSON(object) {
    switch (object) {
        case Address_IpVersion.IP_VERSION_UNSPECIFIED:
            return 'IP_VERSION_UNSPECIFIED';
        case Address_IpVersion.IPV4:
            return 'IPV4';
        case Address_IpVersion.IPV6:
            return 'IPV6';
        default:
            return 'UNKNOWN';
    }
}
exports.address_IpVersionToJSON = address_IpVersionToJSON;
const baseAddress = {
    $type: 'yandex.cloud.vpc.v1.Address',
    id: '',
    folderId: '',
    name: '',
    description: '',
    reserved: false,
    used: false,
    type: 0,
    ipVersion: 0,
};
exports.Address = {
    $type: 'yandex.cloud.vpc.v1.Address',
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
            exports.Address_LabelsEntry.encode({
                $type: 'yandex.cloud.vpc.v1.Address.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.externalIpv4Address !== undefined) {
            exports.ExternalIpv4Address.encode(message.externalIpv4Address, writer.uint32(58).fork()).ldelim();
        }
        if (message.reserved === true) {
            writer.uint32(120).bool(message.reserved);
        }
        if (message.used === true) {
            writer.uint32(128).bool(message.used);
        }
        if (message.type !== 0) {
            writer.uint32(136).int32(message.type);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(144).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddress };
        message.labels = {};
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
                    const entry6 = exports.Address_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.externalIpv4Address = exports.ExternalIpv4Address.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.reserved = reader.bool();
                    break;
                case 16:
                    message.used = reader.bool();
                    break;
                case 17:
                    message.type = reader.int32();
                    break;
                case 18:
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
        const message = { ...baseAddress };
        message.labels = {};
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
        if (object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null) {
            message.externalIpv4Address = exports.ExternalIpv4Address.fromJSON(object.externalIpv4Address);
        }
        else {
            message.externalIpv4Address = undefined;
        }
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = Boolean(object.reserved);
        }
        else {
            message.reserved = false;
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = Boolean(object.used);
        }
        else {
            message.used = false;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = address_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = address_IpVersionFromJSON(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
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
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address
                ? exports.ExternalIpv4Address.toJSON(message.externalIpv4Address)
                : undefined);
        message.reserved !== undefined && (obj.reserved = message.reserved);
        message.used !== undefined && (obj.used = message.used);
        message.type !== undefined &&
            (obj.type = address_TypeToJSON(message.type));
        message.ipVersion !== undefined &&
            (obj.ipVersion = address_IpVersionToJSON(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddress };
        message.labels = {};
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
        if (object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null) {
            message.externalIpv4Address = exports.ExternalIpv4Address.fromPartial(object.externalIpv4Address);
        }
        else {
            message.externalIpv4Address = undefined;
        }
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = object.reserved;
        }
        else {
            message.reserved = false;
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = object.used;
        }
        else {
            message.used = false;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
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
typeRegistry_1.messageTypeRegistry.set(exports.Address.$type, exports.Address);
const baseAddress_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.Address.LabelsEntry',
    key: '',
    value: '',
};
exports.Address_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.Address.LabelsEntry',
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
        const message = { ...baseAddress_LabelsEntry };
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
        const message = { ...baseAddress_LabelsEntry };
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
        const message = { ...baseAddress_LabelsEntry };
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
typeRegistry_1.messageTypeRegistry.set(exports.Address_LabelsEntry.$type, exports.Address_LabelsEntry);
const baseExternalIpv4Address = {
    $type: 'yandex.cloud.vpc.v1.ExternalIpv4Address',
    address: '',
    zoneId: '',
};
exports.ExternalIpv4Address = {
    $type: 'yandex.cloud.vpc.v1.ExternalIpv4Address',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.zoneId !== '') {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.requirements !== undefined) {
            exports.AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalIpv4Address };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.requirements = exports.AddressRequirements.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseExternalIpv4Address };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = exports.AddressRequirements.fromJSON(object.requirements);
        }
        else {
            message.requirements = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? exports.AddressRequirements.toJSON(message.requirements)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseExternalIpv4Address };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = exports.AddressRequirements.fromPartial(object.requirements);
        }
        else {
            message.requirements = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv4Address.$type, exports.ExternalIpv4Address);
const baseAddressRequirements = {
    $type: 'yandex.cloud.vpc.v1.AddressRequirements',
    ddosProtectionProvider: '',
    outgoingSmtpCapability: '',
};
exports.AddressRequirements = {
    $type: 'yandex.cloud.vpc.v1.AddressRequirements',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ddosProtectionProvider !== '') {
            writer.uint32(10).string(message.ddosProtectionProvider);
        }
        if (message.outgoingSmtpCapability !== '') {
            writer.uint32(18).string(message.outgoingSmtpCapability);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddressRequirements };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ddosProtectionProvider = reader.string();
                    break;
                case 2:
                    message.outgoingSmtpCapability = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddressRequirements };
        if (object.ddosProtectionProvider !== undefined &&
            object.ddosProtectionProvider !== null) {
            message.ddosProtectionProvider = String(object.ddosProtectionProvider);
        }
        else {
            message.ddosProtectionProvider = '';
        }
        if (object.outgoingSmtpCapability !== undefined &&
            object.outgoingSmtpCapability !== null) {
            message.outgoingSmtpCapability = String(object.outgoingSmtpCapability);
        }
        else {
            message.outgoingSmtpCapability = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ddosProtectionProvider !== undefined &&
            (obj.ddosProtectionProvider = message.ddosProtectionProvider);
        message.outgoingSmtpCapability !== undefined &&
            (obj.outgoingSmtpCapability = message.outgoingSmtpCapability);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddressRequirements };
        if (object.ddosProtectionProvider !== undefined &&
            object.ddosProtectionProvider !== null) {
            message.ddosProtectionProvider = object.ddosProtectionProvider;
        }
        else {
            message.ddosProtectionProvider = '';
        }
        if (object.outgoingSmtpCapability !== undefined &&
            object.outgoingSmtpCapability !== null) {
            message.outgoingSmtpCapability = object.outgoingSmtpCapability;
        }
        else {
            message.outgoingSmtpCapability = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddressRequirements.$type, exports.AddressRequirements);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
