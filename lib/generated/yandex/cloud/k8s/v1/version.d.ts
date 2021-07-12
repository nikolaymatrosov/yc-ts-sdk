import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface VersionInfo {
    /** Current Kubernetes version, format: major.minor (e.g. 1.15). */
    currentVersion: string;
    /**
     * Newer revisions may include Kubernetes patches (e.g 1.15.1 -> 1.15.2) as well
     * as some internal component updates - new features or bug fixes in Yandex specific
     * components either on the master or nodes.
     */
    newRevisionAvailable: boolean;
    /**
     * Description of the changes to be applied when updating to the latest
     * revision. Empty if new_revision_available is false.
     */
    newRevisionSummary: string;
    /**
     * The current version is on the deprecation schedule, component (master or node group)
     * should be upgraded.
     */
    versionDeprecated: boolean;
}
export interface UpdateVersionSpec {
    /** Request update to a newer version of Kubernetes (1.x -> 1.y). */
    version: string | undefined;
    /** Request update to the latest revision for the current version. */
    latestRevision: boolean | undefined;
}
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    fromPartial(object: DeepPartial<VersionInfo>): VersionInfo;
};
export declare const UpdateVersionSpec: {
    encode(message: UpdateVersionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVersionSpec;
    fromJSON(object: any): UpdateVersionSpec;
    toJSON(message: UpdateVersionSpec): unknown;
    fromPartial(object: DeepPartial<UpdateVersionSpec>): UpdateVersionSpec;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
