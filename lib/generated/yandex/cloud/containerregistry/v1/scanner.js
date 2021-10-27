"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageVulnerability = exports.Vulnerability = exports.VulnerabilityStats = exports.ScanResult = exports.vulnerability_SeverityToJSON = exports.vulnerability_SeverityFromJSON = exports.Vulnerability_Severity = exports.scanResult_StatusToJSON = exports.scanResult_StatusFromJSON = exports.ScanResult_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
var ScanResult_Status;
(function (ScanResult_Status) {
    ScanResult_Status[ScanResult_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** RUNNING - Image scan is in progress. */
    ScanResult_Status[ScanResult_Status["RUNNING"] = 1] = "RUNNING";
    /** READY - Image has been scanned and result is ready. */
    ScanResult_Status[ScanResult_Status["READY"] = 2] = "READY";
    /** ERROR - Image scan is failed. */
    ScanResult_Status[ScanResult_Status["ERROR"] = 3] = "ERROR";
    ScanResult_Status[ScanResult_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScanResult_Status = exports.ScanResult_Status || (exports.ScanResult_Status = {}));
function scanResult_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return ScanResult_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'RUNNING':
            return ScanResult_Status.RUNNING;
        case 2:
        case 'READY':
            return ScanResult_Status.READY;
        case 3:
        case 'ERROR':
            return ScanResult_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ScanResult_Status.UNRECOGNIZED;
    }
}
exports.scanResult_StatusFromJSON = scanResult_StatusFromJSON;
function scanResult_StatusToJSON(object) {
    switch (object) {
        case ScanResult_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case ScanResult_Status.RUNNING:
            return 'RUNNING';
        case ScanResult_Status.READY:
            return 'READY';
        case ScanResult_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}
exports.scanResult_StatusToJSON = scanResult_StatusToJSON;
var Vulnerability_Severity;
(function (Vulnerability_Severity) {
    Vulnerability_Severity[Vulnerability_Severity["SEVERITY_UNSPECIFIED"] = 0] = "SEVERITY_UNSPECIFIED";
    /**
     * CRITICAL - Critical severity is a world-burning problem, exploitable for nearly all users.
     * Includes remote root privilege escalations, or massive data loss.
     */
    Vulnerability_Severity[Vulnerability_Severity["CRITICAL"] = 1] = "CRITICAL";
    /**
     * HIGH - High severity is a real problem, exploitable for many users in a default installation.
     * Includes serious remote denial of services, local root privilege escalations, or data loss.
     */
    Vulnerability_Severity[Vulnerability_Severity["HIGH"] = 2] = "HIGH";
    /**
     * MEDIUM - Medium severity is a real security problem, and is exploitable for many users.
     * Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges.
     * Updates should be made soon for this priority of issue.
     */
    Vulnerability_Severity[Vulnerability_Severity["MEDIUM"] = 3] = "MEDIUM";
    /**
     * LOW - Low severity is a security problem, but is hard to exploit due to environment, requires a user-assisted attack,
     * a small install base, or does very little damage. These tend to be included in security updates only when
     * higher priority issues require an update, or if many low priority issues have built up.
     */
    Vulnerability_Severity[Vulnerability_Severity["LOW"] = 4] = "LOW";
    /**
     * NEGLIGIBLE - Negligible severity is technically a security problem, but is only theoretical in nature, requires a very special situation,
     * has almost no install base, or does no real damage. These tend not to get backport from upstream,
     * and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
     */
    Vulnerability_Severity[Vulnerability_Severity["NEGLIGIBLE"] = 5] = "NEGLIGIBLE";
    /**
     * UNDEFINED - Unknown severity is either a security problem that has not been assigned to a priority yet or
     * a priority that our system did not recognize.
     */
    Vulnerability_Severity[Vulnerability_Severity["UNDEFINED"] = 6] = "UNDEFINED";
    Vulnerability_Severity[Vulnerability_Severity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Vulnerability_Severity = exports.Vulnerability_Severity || (exports.Vulnerability_Severity = {}));
function vulnerability_SeverityFromJSON(object) {
    switch (object) {
        case 0:
        case 'SEVERITY_UNSPECIFIED':
            return Vulnerability_Severity.SEVERITY_UNSPECIFIED;
        case 1:
        case 'CRITICAL':
            return Vulnerability_Severity.CRITICAL;
        case 2:
        case 'HIGH':
            return Vulnerability_Severity.HIGH;
        case 3:
        case 'MEDIUM':
            return Vulnerability_Severity.MEDIUM;
        case 4:
        case 'LOW':
            return Vulnerability_Severity.LOW;
        case 5:
        case 'NEGLIGIBLE':
            return Vulnerability_Severity.NEGLIGIBLE;
        case 6:
        case 'UNDEFINED':
            return Vulnerability_Severity.UNDEFINED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Vulnerability_Severity.UNRECOGNIZED;
    }
}
exports.vulnerability_SeverityFromJSON = vulnerability_SeverityFromJSON;
function vulnerability_SeverityToJSON(object) {
    switch (object) {
        case Vulnerability_Severity.SEVERITY_UNSPECIFIED:
            return 'SEVERITY_UNSPECIFIED';
        case Vulnerability_Severity.CRITICAL:
            return 'CRITICAL';
        case Vulnerability_Severity.HIGH:
            return 'HIGH';
        case Vulnerability_Severity.MEDIUM:
            return 'MEDIUM';
        case Vulnerability_Severity.LOW:
            return 'LOW';
        case Vulnerability_Severity.NEGLIGIBLE:
            return 'NEGLIGIBLE';
        case Vulnerability_Severity.UNDEFINED:
            return 'UNDEFINED';
        default:
            return 'UNKNOWN';
    }
}
exports.vulnerability_SeverityToJSON = vulnerability_SeverityToJSON;
const baseScanResult = {
    $type: 'yandex.cloud.containerregistry.v1.ScanResult',
    id: '',
    imageId: '',
    status: 0,
};
exports.ScanResult = {
    $type: 'yandex.cloud.containerregistry.v1.ScanResult',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.imageId !== '') {
            writer.uint32(18).string(message.imageId);
        }
        if (message.scannedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.scannedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.vulnerabilities !== undefined) {
            exports.VulnerabilityStats.encode(message.vulnerabilities, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanResult };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.imageId = reader.string();
                    break;
                case 3:
                    message.scannedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.vulnerabilities = exports.VulnerabilityStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScanResult };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        if (object.scannedAt !== undefined && object.scannedAt !== null) {
            message.scannedAt = fromJsonTimestamp(object.scannedAt);
        }
        else {
            message.scannedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = scanResult_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null) {
            message.vulnerabilities = exports.VulnerabilityStats.fromJSON(object.vulnerabilities);
        }
        else {
            message.vulnerabilities = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.scannedAt !== undefined &&
            (obj.scannedAt = message.scannedAt.toISOString());
        message.status !== undefined &&
            (obj.status = scanResult_StatusToJSON(message.status));
        message.vulnerabilities !== undefined &&
            (obj.vulnerabilities = message.vulnerabilities
                ? exports.VulnerabilityStats.toJSON(message.vulnerabilities)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScanResult };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        if (object.scannedAt !== undefined && object.scannedAt !== null) {
            message.scannedAt = object.scannedAt;
        }
        else {
            message.scannedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null) {
            message.vulnerabilities = exports.VulnerabilityStats.fromPartial(object.vulnerabilities);
        }
        else {
            message.vulnerabilities = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScanResult.$type, exports.ScanResult);
const baseVulnerabilityStats = {
    $type: 'yandex.cloud.containerregistry.v1.VulnerabilityStats',
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    negligible: 0,
    undefined: 0,
};
exports.VulnerabilityStats = {
    $type: 'yandex.cloud.containerregistry.v1.VulnerabilityStats',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.critical !== 0) {
            writer.uint32(8).int64(message.critical);
        }
        if (message.high !== 0) {
            writer.uint32(16).int64(message.high);
        }
        if (message.medium !== 0) {
            writer.uint32(24).int64(message.medium);
        }
        if (message.low !== 0) {
            writer.uint32(32).int64(message.low);
        }
        if (message.negligible !== 0) {
            writer.uint32(40).int64(message.negligible);
        }
        if (message.undefined !== 0) {
            writer.uint32(48).int64(message.undefined);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVulnerabilityStats };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.critical = longToNumber(reader.int64());
                    break;
                case 2:
                    message.high = longToNumber(reader.int64());
                    break;
                case 3:
                    message.medium = longToNumber(reader.int64());
                    break;
                case 4:
                    message.low = longToNumber(reader.int64());
                    break;
                case 5:
                    message.negligible = longToNumber(reader.int64());
                    break;
                case 6:
                    message.undefined = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVulnerabilityStats };
        if (object.critical !== undefined && object.critical !== null) {
            message.critical = Number(object.critical);
        }
        else {
            message.critical = 0;
        }
        if (object.high !== undefined && object.high !== null) {
            message.high = Number(object.high);
        }
        else {
            message.high = 0;
        }
        if (object.medium !== undefined && object.medium !== null) {
            message.medium = Number(object.medium);
        }
        else {
            message.medium = 0;
        }
        if (object.low !== undefined && object.low !== null) {
            message.low = Number(object.low);
        }
        else {
            message.low = 0;
        }
        if (object.negligible !== undefined && object.negligible !== null) {
            message.negligible = Number(object.negligible);
        }
        else {
            message.negligible = 0;
        }
        if (object.undefined !== undefined && object.undefined !== null) {
            message.undefined = Number(object.undefined);
        }
        else {
            message.undefined = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.critical !== undefined && (obj.critical = message.critical);
        message.high !== undefined && (obj.high = message.high);
        message.medium !== undefined && (obj.medium = message.medium);
        message.low !== undefined && (obj.low = message.low);
        message.negligible !== undefined &&
            (obj.negligible = message.negligible);
        message.undefined !== undefined && (obj.undefined = message.undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVulnerabilityStats };
        if (object.critical !== undefined && object.critical !== null) {
            message.critical = object.critical;
        }
        else {
            message.critical = 0;
        }
        if (object.high !== undefined && object.high !== null) {
            message.high = object.high;
        }
        else {
            message.high = 0;
        }
        if (object.medium !== undefined && object.medium !== null) {
            message.medium = object.medium;
        }
        else {
            message.medium = 0;
        }
        if (object.low !== undefined && object.low !== null) {
            message.low = object.low;
        }
        else {
            message.low = 0;
        }
        if (object.negligible !== undefined && object.negligible !== null) {
            message.negligible = object.negligible;
        }
        else {
            message.negligible = 0;
        }
        if (object.undefined !== undefined && object.undefined !== null) {
            message.undefined = object.undefined;
        }
        else {
            message.undefined = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.VulnerabilityStats.$type, exports.VulnerabilityStats);
const baseVulnerability = {
    $type: 'yandex.cloud.containerregistry.v1.Vulnerability',
    severity: 0,
};
exports.Vulnerability = {
    $type: 'yandex.cloud.containerregistry.v1.Vulnerability',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.severity !== 0) {
            writer.uint32(8).int32(message.severity);
        }
        if (message.package !== undefined) {
            exports.PackageVulnerability.encode(message.package, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVulnerability };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.severity = reader.int32();
                    break;
                case 2:
                    message.package = exports.PackageVulnerability.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVulnerability };
        if (object.severity !== undefined && object.severity !== null) {
            message.severity = vulnerability_SeverityFromJSON(object.severity);
        }
        else {
            message.severity = 0;
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = exports.PackageVulnerability.fromJSON(object.package);
        }
        else {
            message.package = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.severity !== undefined &&
            (obj.severity = vulnerability_SeverityToJSON(message.severity));
        message.package !== undefined &&
            (obj.package = message.package
                ? exports.PackageVulnerability.toJSON(message.package)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVulnerability };
        if (object.severity !== undefined && object.severity !== null) {
            message.severity = object.severity;
        }
        else {
            message.severity = 0;
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = exports.PackageVulnerability.fromPartial(object.package);
        }
        else {
            message.package = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Vulnerability.$type, exports.Vulnerability);
const basePackageVulnerability = {
    $type: 'yandex.cloud.containerregistry.v1.PackageVulnerability',
    name: '',
    link: '',
    package: '',
    source: '',
    version: '',
    fixedBy: '',
};
exports.PackageVulnerability = {
    $type: 'yandex.cloud.containerregistry.v1.PackageVulnerability',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.link !== '') {
            writer.uint32(18).string(message.link);
        }
        if (message.package !== '') {
            writer.uint32(26).string(message.package);
        }
        if (message.source !== '') {
            writer.uint32(34).string(message.source);
        }
        if (message.version !== '') {
            writer.uint32(42).string(message.version);
        }
        if (message.fixedBy !== '') {
            writer.uint32(50).string(message.fixedBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePackageVulnerability };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.link = reader.string();
                    break;
                case 3:
                    message.package = reader.string();
                    break;
                case 4:
                    message.source = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.fixedBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePackageVulnerability };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = String(object.link);
        }
        else {
            message.link = '';
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = String(object.package);
        }
        else {
            message.package = '';
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.fixedBy !== undefined && object.fixedBy !== null) {
            message.fixedBy = String(object.fixedBy);
        }
        else {
            message.fixedBy = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.link !== undefined && (obj.link = message.link);
        message.package !== undefined && (obj.package = message.package);
        message.source !== undefined && (obj.source = message.source);
        message.version !== undefined && (obj.version = message.version);
        message.fixedBy !== undefined && (obj.fixedBy = message.fixedBy);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePackageVulnerability };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = object.link;
        }
        else {
            message.link = '';
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = object.package;
        }
        else {
            message.package = '';
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.fixedBy !== undefined && object.fixedBy !== null) {
            message.fixedBy = object.fixedBy;
        }
        else {
            message.fixedBy = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PackageVulnerability.$type, exports.PackageVulnerability);
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
