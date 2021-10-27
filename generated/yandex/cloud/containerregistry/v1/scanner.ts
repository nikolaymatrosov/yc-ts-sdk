/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

/** A ScanResult resource. */
export interface ScanResult {
    /** Output only. ID of the ScanResult. */
    id: string;
    /** Output only. ID of the Image that the ScanResult belongs to. */
    imageId: string;
    /** Output only. The timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format when the scan been finished. */
    scannedAt: Date | undefined;
    /** Output only. The status of the ScanResult. */
    status: ScanResult_Status;
    /** Output only. Summary information about vulnerabilities found. */
    vulnerabilities: VulnerabilityStats | undefined;
}

export enum ScanResult_Status {
    STATUS_UNSPECIFIED = 0,
    /** RUNNING - Image scan is in progress. */
    RUNNING = 1,
    /** READY - Image has been scanned and result is ready. */
    READY = 2,
    /** ERROR - Image scan is failed. */
    ERROR = 3,
    UNRECOGNIZED = -1,
}

export function scanResult_StatusFromJSON(object: any): ScanResult_Status {
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

export function scanResult_StatusToJSON(object: ScanResult_Status): string {
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

/** A VulnerabilityStats resource. */
export interface VulnerabilityStats {
    /** Count of CRITICAL vulnerabilities. */
    critical: number;
    /** Count of HIGH vulnerabilities. */
    high: number;
    /** Count of MEDIUM vulnerabilities. */
    medium: number;
    /** Count of LOW vulnerabilities. */
    low: number;
    /** Count of NEGLIGIBLE vulnerabilities. */
    negligible: number;
    /** Count of other vulnerabilities. */
    undefined: number;
}

/** A Vulnerability resource. */
export interface Vulnerability {
    /** Output only. Severity of the Vulnerability. */
    severity: Vulnerability_Severity;
    package: PackageVulnerability | undefined;
}

export enum Vulnerability_Severity {
    SEVERITY_UNSPECIFIED = 0,
    /**
     * CRITICAL - Critical severity is a world-burning problem, exploitable for nearly all users.
     * Includes remote root privilege escalations, or massive data loss.
     */
    CRITICAL = 1,
    /**
     * HIGH - High severity is a real problem, exploitable for many users in a default installation.
     * Includes serious remote denial of services, local root privilege escalations, or data loss.
     */
    HIGH = 2,
    /**
     * MEDIUM - Medium severity is a real security problem, and is exploitable for many users.
     * Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges.
     * Updates should be made soon for this priority of issue.
     */
    MEDIUM = 3,
    /**
     * LOW - Low severity is a security problem, but is hard to exploit due to environment, requires a user-assisted attack,
     * a small install base, or does very little damage. These tend to be included in security updates only when
     * higher priority issues require an update, or if many low priority issues have built up.
     */
    LOW = 4,
    /**
     * NEGLIGIBLE - Negligible severity is technically a security problem, but is only theoretical in nature, requires a very special situation,
     * has almost no install base, or does no real damage. These tend not to get backport from upstream,
     * and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
     */
    NEGLIGIBLE = 5,
    /**
     * UNDEFINED - Unknown severity is either a security problem that has not been assigned to a priority yet or
     * a priority that our system did not recognize.
     */
    UNDEFINED = 6,
    UNRECOGNIZED = -1,
}

export function vulnerability_SeverityFromJSON(
    object: any
): Vulnerability_Severity {
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

export function vulnerability_SeverityToJSON(
    object: Vulnerability_Severity
): string {
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

/** A PackageVulnerability resource. */
export interface PackageVulnerability {
    /** Name of vulnerability in CVE database. */
    name: string;
    /** URL to the page with description of vulnerability. */
    link: string;
    /** The package name where vulnerability has been found. */
    package: string;
    /** The package manager name. Ex.: yum, rpm, dpkg. */
    source: string;
    /** The version of the package where vulnerability has been found. */
    version: string;
    /** The version of the package where vulnerability has been fixed. */
    fixedBy: string;
}

const baseScanResult: object = { id: '', imageId: '', status: 0 };

export const ScanResult = {
    encode(
        message: ScanResult,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.imageId !== '') {
            writer.uint32(18).string(message.imageId);
        }
        if (message.scannedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.scannedAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.vulnerabilities !== undefined) {
            VulnerabilityStats.encode(
                message.vulnerabilities,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanResult {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanResult } as ScanResult;
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
                    message.scannedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.vulnerabilities = VulnerabilityStats.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanResult {
        const message = { ...baseScanResult } as ScanResult;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = '';
        }
        if (object.scannedAt !== undefined && object.scannedAt !== null) {
            message.scannedAt = fromJsonTimestamp(object.scannedAt);
        } else {
            message.scannedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = scanResult_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null
        ) {
            message.vulnerabilities = VulnerabilityStats.fromJSON(
                object.vulnerabilities
            );
        } else {
            message.vulnerabilities = undefined;
        }
        return message;
    },

    toJSON(message: ScanResult): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.scannedAt !== undefined &&
            (obj.scannedAt = message.scannedAt.toISOString());
        message.status !== undefined &&
            (obj.status = scanResult_StatusToJSON(message.status));
        message.vulnerabilities !== undefined &&
            (obj.vulnerabilities = message.vulnerabilities
                ? VulnerabilityStats.toJSON(message.vulnerabilities)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ScanResult>): ScanResult {
        const message = { ...baseScanResult } as ScanResult;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = '';
        }
        if (object.scannedAt !== undefined && object.scannedAt !== null) {
            message.scannedAt = object.scannedAt;
        } else {
            message.scannedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (
            object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null
        ) {
            message.vulnerabilities = VulnerabilityStats.fromPartial(
                object.vulnerabilities
            );
        } else {
            message.vulnerabilities = undefined;
        }
        return message;
    },
};

const baseVulnerabilityStats: object = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    negligible: 0,
    undefined: 0,
};

export const VulnerabilityStats = {
    encode(
        message: VulnerabilityStats,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): VulnerabilityStats {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVulnerabilityStats } as VulnerabilityStats;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.critical = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.high = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.medium = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.low = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.negligible = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.undefined = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VulnerabilityStats {
        const message = { ...baseVulnerabilityStats } as VulnerabilityStats;
        if (object.critical !== undefined && object.critical !== null) {
            message.critical = Number(object.critical);
        } else {
            message.critical = 0;
        }
        if (object.high !== undefined && object.high !== null) {
            message.high = Number(object.high);
        } else {
            message.high = 0;
        }
        if (object.medium !== undefined && object.medium !== null) {
            message.medium = Number(object.medium);
        } else {
            message.medium = 0;
        }
        if (object.low !== undefined && object.low !== null) {
            message.low = Number(object.low);
        } else {
            message.low = 0;
        }
        if (object.negligible !== undefined && object.negligible !== null) {
            message.negligible = Number(object.negligible);
        } else {
            message.negligible = 0;
        }
        if (object.undefined !== undefined && object.undefined !== null) {
            message.undefined = Number(object.undefined);
        } else {
            message.undefined = 0;
        }
        return message;
    },

    toJSON(message: VulnerabilityStats): unknown {
        const obj: any = {};
        message.critical !== undefined && (obj.critical = message.critical);
        message.high !== undefined && (obj.high = message.high);
        message.medium !== undefined && (obj.medium = message.medium);
        message.low !== undefined && (obj.low = message.low);
        message.negligible !== undefined &&
            (obj.negligible = message.negligible);
        message.undefined !== undefined && (obj.undefined = message.undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<VulnerabilityStats>): VulnerabilityStats {
        const message = { ...baseVulnerabilityStats } as VulnerabilityStats;
        if (object.critical !== undefined && object.critical !== null) {
            message.critical = object.critical;
        } else {
            message.critical = 0;
        }
        if (object.high !== undefined && object.high !== null) {
            message.high = object.high;
        } else {
            message.high = 0;
        }
        if (object.medium !== undefined && object.medium !== null) {
            message.medium = object.medium;
        } else {
            message.medium = 0;
        }
        if (object.low !== undefined && object.low !== null) {
            message.low = object.low;
        } else {
            message.low = 0;
        }
        if (object.negligible !== undefined && object.negligible !== null) {
            message.negligible = object.negligible;
        } else {
            message.negligible = 0;
        }
        if (object.undefined !== undefined && object.undefined !== null) {
            message.undefined = object.undefined;
        } else {
            message.undefined = 0;
        }
        return message;
    },
};

const baseVulnerability: object = { severity: 0 };

export const Vulnerability = {
    encode(
        message: Vulnerability,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.severity !== 0) {
            writer.uint32(8).int32(message.severity);
        }
        if (message.package !== undefined) {
            PackageVulnerability.encode(
                message.package,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Vulnerability {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVulnerability } as Vulnerability;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.severity = reader.int32() as any;
                    break;
                case 2:
                    message.package = PackageVulnerability.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Vulnerability {
        const message = { ...baseVulnerability } as Vulnerability;
        if (object.severity !== undefined && object.severity !== null) {
            message.severity = vulnerability_SeverityFromJSON(object.severity);
        } else {
            message.severity = 0;
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = PackageVulnerability.fromJSON(object.package);
        } else {
            message.package = undefined;
        }
        return message;
    },

    toJSON(message: Vulnerability): unknown {
        const obj: any = {};
        message.severity !== undefined &&
            (obj.severity = vulnerability_SeverityToJSON(message.severity));
        message.package !== undefined &&
            (obj.package = message.package
                ? PackageVulnerability.toJSON(message.package)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Vulnerability>): Vulnerability {
        const message = { ...baseVulnerability } as Vulnerability;
        if (object.severity !== undefined && object.severity !== null) {
            message.severity = object.severity;
        } else {
            message.severity = 0;
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = PackageVulnerability.fromPartial(object.package);
        } else {
            message.package = undefined;
        }
        return message;
    },
};

const basePackageVulnerability: object = {
    name: '',
    link: '',
    package: '',
    source: '',
    version: '',
    fixedBy: '',
};

export const PackageVulnerability = {
    encode(
        message: PackageVulnerability,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PackageVulnerability {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePackageVulnerability } as PackageVulnerability;
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

    fromJSON(object: any): PackageVulnerability {
        const message = { ...basePackageVulnerability } as PackageVulnerability;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = String(object.link);
        } else {
            message.link = '';
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = String(object.package);
        } else {
            message.package = '';
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        } else {
            message.source = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (object.fixedBy !== undefined && object.fixedBy !== null) {
            message.fixedBy = String(object.fixedBy);
        } else {
            message.fixedBy = '';
        }
        return message;
    },

    toJSON(message: PackageVulnerability): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.link !== undefined && (obj.link = message.link);
        message.package !== undefined && (obj.package = message.package);
        message.source !== undefined && (obj.source = message.source);
        message.version !== undefined && (obj.version = message.version);
        message.fixedBy !== undefined && (obj.fixedBy = message.fixedBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PackageVulnerability>
    ): PackageVulnerability {
        const message = { ...basePackageVulnerability } as PackageVulnerability;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = object.link;
        } else {
            message.link = '';
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = object.package;
        } else {
            message.package = '';
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        } else {
            message.source = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (object.fixedBy !== undefined && object.fixedBy !== null) {
            message.fixedBy = object.fixedBy;
        } else {
            message.fixedBy = '';
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
