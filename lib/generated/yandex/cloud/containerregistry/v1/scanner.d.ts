import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
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
export declare enum ScanResult_Status {
    STATUS_UNSPECIFIED = 0,
    /** RUNNING - Image scan is in progress. */
    RUNNING = 1,
    /** READY - Image has been scanned and result is ready. */
    READY = 2,
    /** ERROR - Image scan is failed. */
    ERROR = 3,
    UNRECOGNIZED = -1
}
export declare function scanResult_StatusFromJSON(object: any): ScanResult_Status;
export declare function scanResult_StatusToJSON(object: ScanResult_Status): string;
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
export declare enum Vulnerability_Severity {
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
    UNRECOGNIZED = -1
}
export declare function vulnerability_SeverityFromJSON(object: any): Vulnerability_Severity;
export declare function vulnerability_SeverityToJSON(object: Vulnerability_Severity): string;
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
export declare const ScanResult: {
    encode(message: ScanResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScanResult;
    fromJSON(object: any): ScanResult;
    toJSON(message: ScanResult): unknown;
    fromPartial(object: DeepPartial<ScanResult>): ScanResult;
};
export declare const VulnerabilityStats: {
    encode(message: VulnerabilityStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VulnerabilityStats;
    fromJSON(object: any): VulnerabilityStats;
    toJSON(message: VulnerabilityStats): unknown;
    fromPartial(object: DeepPartial<VulnerabilityStats>): VulnerabilityStats;
};
export declare const Vulnerability: {
    encode(message: Vulnerability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vulnerability;
    fromJSON(object: any): Vulnerability;
    toJSON(message: Vulnerability): unknown;
    fromPartial(object: DeepPartial<Vulnerability>): Vulnerability;
};
export declare const PackageVulnerability: {
    encode(message: PackageVulnerability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PackageVulnerability;
    fromJSON(object: any): PackageVulnerability;
    toJSON(message: PackageVulnerability): unknown;
    fromPartial(object: DeepPartial<PackageVulnerability>): PackageVulnerability;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
