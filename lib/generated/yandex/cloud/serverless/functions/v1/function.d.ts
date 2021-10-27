import { Duration } from '../../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.functions.v1";
/** A serverless function. For details about the concept, see [Functions](/docs/functions/concepts/function). */
export interface Function {
    $type: 'yandex.cloud.serverless.functions.v1.Function';
    /** ID of the function. Generated at creation time. */
    id: string;
    /** ID of the folder that the function belongs to. */
    folderId: string;
    /** Creation timestamp for the function. */
    createdAt: Date | undefined;
    /** Name of the function. The name is unique within the folder. */
    name: string;
    /** Description of the function. */
    description: string;
    /** Function labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the log group for the function. */
    logGroupId: string;
    /** URL that needs to be requested to invoke the function. */
    httpInvokeUrl: string;
    /** Status of the function. */
    status: Function_Status;
}
export declare enum Function_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Function is being created. */
    CREATING = 1,
    /** ACTIVE - Function is ready to be invoked. */
    ACTIVE = 2,
    /** DELETING - Function is being deleted. */
    DELETING = 3,
    /** ERROR - Function failed. */
    ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function function_StatusFromJSON(object: any): Function_Status;
export declare function function_StatusToJSON(object: Function_Status): string;
export interface Function_LabelsEntry {
    $type: 'yandex.cloud.serverless.functions.v1.Function.LabelsEntry';
    key: string;
    value: string;
}
/** Version of a function. For details about the concept, see [Function versions](/docs/functions/concepts/function#version). */
export interface Version {
    $type: 'yandex.cloud.serverless.functions.v1.Version';
    /** ID of the version. */
    id: string;
    /** ID of the function that the version belongs to. */
    functionId: string;
    /** Description of the version. */
    description: string;
    /** Creation timestamp for the version. */
    createdAt: Date | undefined;
    /**
     * ID of the runtime environment for the function.
     *
     * Supported environments and their identifiers are listed in the [Runtime environments](/docs/functions/concepts/runtime).
     */
    runtime: string;
    /**
     * Entrypoint for the function: the name of the function to be called as the handler.
     *
     * Specified in the format `<function file name>.<handler name>`, for example, `index.myFunction`.
     */
    entrypoint: string;
    /** Resources allocated to the version. */
    resources: Resources | undefined;
    /**
     * Timeout for the execution of the version.
     *
     * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
     */
    executionTimeout: Duration | undefined;
    /** ID of the service account associated with the version. */
    serviceAccountId: string;
    /** Final size of the deployment package after unpacking. */
    imageSize: number;
    /** Status of the version. */
    status: Version_Status;
    /** Version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
    tags: string[];
    /** ID of the log group for the version. */
    logGroupId: string;
    /** Environment settings for the version. */
    environment: {
        [key: string]: string;
    };
    /** Network access. If specified the version will be attached to specified network/subnet(s). */
    connectivity: Connectivity | undefined;
    /** Additional service accounts to be used by the version. */
    namedServiceAccounts: {
        [key: string]: string;
    };
}
export declare enum Version_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Version is being created. */
    CREATING = 1,
    /** ACTIVE - Version is ready to use. */
    ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function version_StatusFromJSON(object: any): Version_Status;
export declare function version_StatusToJSON(object: Version_Status): string;
export interface Version_EnvironmentEntry {
    $type: 'yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry';
    key: string;
    value: string;
}
export interface Version_NamedServiceAccountsEntry {
    $type: 'yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry';
    key: string;
    value: string;
}
/** Resources allocated to a version. */
export interface Resources {
    $type: 'yandex.cloud.serverless.functions.v1.Resources';
    /** Amount of memory available to the version, specified in bytes. */
    memory: number;
}
/** Version deployment package. */
export interface Package {
    $type: 'yandex.cloud.serverless.functions.v1.Package';
    /** Name of the bucket that stores the code for the version. */
    bucketName: string;
    /** Name of the object in the bucket that stores the code for the version. */
    objectName: string;
    /** SHA256 hash of the version deployment package. */
    sha256: string;
}
/** Version connectivity specification. */
export interface Connectivity {
    $type: 'yandex.cloud.serverless.functions.v1.Connectivity';
    /**
     * Network the version will have access to.
     * It's essential to specify network with subnets in all availability zones.
     */
    networkId: string;
    /**
     * Complete list of subnets (from the same network) the version can be attached to.
     * It's essential to specify at least one subnet for each availability zones.
     */
    subnetId: string[];
}
export interface ScalingPolicy {
    $type: 'yandex.cloud.serverless.functions.v1.ScalingPolicy';
    /** ID of the function that the scaling policy belongs to. */
    functionId: string;
    /** Tag of the version that the scaling policy belongs to. For details, see [Version tag](/docs/functions/concepts/function#tag). */
    tag: string;
    /** Creation timestamp for the scaling policy */
    createdAt: Date | undefined;
    /** Modification timestamp for the scaling policy */
    modifiedAt: Date | undefined;
    /**
     * Minimum guaranteed provisioned instances count for all zones in total.
     * Billed separately.
     */
    provisionedInstancesCount: number;
    /**
     * Upper limit for instance count in each zone.
     * 0 means no limit.
     */
    zoneInstancesLimit: number;
    /**
     * Upper limit of requests count in each zone.
     * 0 means no limit.
     */
    zoneRequestsLimit: number;
}
export declare const Function: {
    $type: "yandex.cloud.serverless.functions.v1.Function";
    encode(message: Function, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Function;
    fromJSON(object: any): Function;
    toJSON(message: Function): unknown;
    fromPartial(object: DeepPartial<Function>): Function;
};
export declare const Function_LabelsEntry: {
    $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry";
    encode(message: Function_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Function_LabelsEntry;
    fromJSON(object: any): Function_LabelsEntry;
    toJSON(message: Function_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Function_LabelsEntry>): Function_LabelsEntry;
};
export declare const Version: {
    $type: "yandex.cloud.serverless.functions.v1.Version";
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial(object: DeepPartial<Version>): Version;
};
export declare const Version_EnvironmentEntry: {
    $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry";
    encode(message: Version_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version_EnvironmentEntry;
    fromJSON(object: any): Version_EnvironmentEntry;
    toJSON(message: Version_EnvironmentEntry): unknown;
    fromPartial(object: DeepPartial<Version_EnvironmentEntry>): Version_EnvironmentEntry;
};
export declare const Version_NamedServiceAccountsEntry: {
    $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry";
    encode(message: Version_NamedServiceAccountsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version_NamedServiceAccountsEntry;
    fromJSON(object: any): Version_NamedServiceAccountsEntry;
    toJSON(message: Version_NamedServiceAccountsEntry): unknown;
    fromPartial(object: DeepPartial<Version_NamedServiceAccountsEntry>): Version_NamedServiceAccountsEntry;
};
export declare const Resources: {
    $type: "yandex.cloud.serverless.functions.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const Package: {
    $type: "yandex.cloud.serverless.functions.v1.Package";
    encode(message: Package, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Package;
    fromJSON(object: any): Package;
    toJSON(message: Package): unknown;
    fromPartial(object: DeepPartial<Package>): Package;
};
export declare const Connectivity: {
    $type: "yandex.cloud.serverless.functions.v1.Connectivity";
    encode(message: Connectivity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connectivity;
    fromJSON(object: any): Connectivity;
    toJSON(message: Connectivity): unknown;
    fromPartial(object: DeepPartial<Connectivity>): Connectivity;
};
export declare const ScalingPolicy: {
    $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy";
    encode(message: ScalingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalingPolicy;
    fromJSON(object: any): ScalingPolicy;
    toJSON(message: ScalingPolicy): unknown;
    fromPartial(object: DeepPartial<ScalingPolicy>): ScalingPolicy;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
