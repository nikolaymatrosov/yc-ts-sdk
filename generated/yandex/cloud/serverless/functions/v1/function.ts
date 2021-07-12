/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.serverless.functions.v1';

/** A serverless function. For details about the concept, see [Functions](/docs/functions/concepts/function). */
export interface Function {
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
    labels: { [key: string]: string };
    /** ID of the log group for the function. */
    logGroupId: string;
    /** URL that needs to be requested to invoke the function. */
    httpInvokeUrl: string;
    /** Status of the function. */
    status: Function_Status;
}

export enum Function_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Function is being created. */
    CREATING = 1,
    /** ACTIVE - Function is ready to be invoked. */
    ACTIVE = 2,
    /** DELETING - Function is being deleted. */
    DELETING = 3,
    /** ERROR - Function failed. */
    ERROR = 4,
    UNRECOGNIZED = -1,
}

export function function_StatusFromJSON(object: any): Function_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Function_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Function_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Function_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Function_Status.DELETING;
        case 4:
        case 'ERROR':
            return Function_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Function_Status.UNRECOGNIZED;
    }
}

export function function_StatusToJSON(object: Function_Status): string {
    switch (object) {
        case Function_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Function_Status.CREATING:
            return 'CREATING';
        case Function_Status.ACTIVE:
            return 'ACTIVE';
        case Function_Status.DELETING:
            return 'DELETING';
        case Function_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

export interface Function_LabelsEntry {
    key: string;
    value: string;
}

/** Version of a function. For details about the concept, see [Function versions](/docs/functions/concepts/function#version). */
export interface Version {
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
    environment: { [key: string]: string };
    /** Network access. If specified the version will be attached to specified network/subnet(s). */
    connectivity: Connectivity | undefined;
    /** Additional service accounts to be used by the version. */
    namedServiceAccounts: { [key: string]: string };
}

export enum Version_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Version is being created. */
    CREATING = 1,
    /** ACTIVE - Version is ready to use. */
    ACTIVE = 2,
    UNRECOGNIZED = -1,
}

export function version_StatusFromJSON(object: any): Version_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Version_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Version_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Version_Status.ACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Version_Status.UNRECOGNIZED;
    }
}

export function version_StatusToJSON(object: Version_Status): string {
    switch (object) {
        case Version_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Version_Status.CREATING:
            return 'CREATING';
        case Version_Status.ACTIVE:
            return 'ACTIVE';
        default:
            return 'UNKNOWN';
    }
}

export interface Version_EnvironmentEntry {
    key: string;
    value: string;
}

export interface Version_NamedServiceAccountsEntry {
    key: string;
    value: string;
}

/** Resources allocated to a version. */
export interface Resources {
    /** Amount of memory available to the version, specified in bytes. */
    memory: number;
}

/** Version deployment package. */
export interface Package {
    /** Name of the bucket that stores the code for the version. */
    bucketName: string;
    /** Name of the object in the bucket that stores the code for the version. */
    objectName: string;
    /** SHA256 hash of the version deployment package. */
    sha256: string;
}

/** Version connectivity specification. */
export interface Connectivity {
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
    /** ID of the function that the scaling policy belongs to. */
    functionId: string;
    /** Tag of the version that the scaling policy belongs to. For details, see [Version tag](/docs/functions/concepts/function#tag). */
    tag: string;
    /** Creation timestamp for the scaling policy */
    createdAt: Date | undefined;
    /** Modification timestamp for the scaling policy */
    modifiedAt: Date | undefined;
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

const baseFunction: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    logGroupId: '',
    httpInvokeUrl: '',
    status: 0,
};

export const Function = {
    encode(
        message: Function,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Function_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.logGroupId !== '') {
            writer.uint32(58).string(message.logGroupId);
        }
        if (message.httpInvokeUrl !== '') {
            writer.uint32(66).string(message.httpInvokeUrl);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Function {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunction } as Function;
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
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Function_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.logGroupId = reader.string();
                    break;
                case 8:
                    message.httpInvokeUrl = reader.string();
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Function {
        const message = { ...baseFunction } as Function;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (
            object.httpInvokeUrl !== undefined &&
            object.httpInvokeUrl !== null
        ) {
            message.httpInvokeUrl = String(object.httpInvokeUrl);
        } else {
            message.httpInvokeUrl = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = function_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        return message;
    },

    toJSON(message: Function): unknown {
        const obj: any = {};
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
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.httpInvokeUrl !== undefined &&
            (obj.httpInvokeUrl = message.httpInvokeUrl);
        message.status !== undefined &&
            (obj.status = function_StatusToJSON(message.status));
        return obj;
    },

    fromPartial(object: DeepPartial<Function>): Function {
        const message = { ...baseFunction } as Function;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (
            object.httpInvokeUrl !== undefined &&
            object.httpInvokeUrl !== null
        ) {
            message.httpInvokeUrl = object.httpInvokeUrl;
        } else {
            message.httpInvokeUrl = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        return message;
    },
};

const baseFunction_LabelsEntry: object = { key: '', value: '' };

export const Function_LabelsEntry = {
    encode(
        message: Function_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Function_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunction_LabelsEntry } as Function_LabelsEntry;
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

    fromJSON(object: any): Function_LabelsEntry {
        const message = { ...baseFunction_LabelsEntry } as Function_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Function_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Function_LabelsEntry>
    ): Function_LabelsEntry {
        const message = { ...baseFunction_LabelsEntry } as Function_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseVersion: object = {
    id: '',
    functionId: '',
    description: '',
    runtime: '',
    entrypoint: '',
    serviceAccountId: '',
    imageSize: 0,
    status: 0,
    tags: '',
    logGroupId: '',
};

export const Version = {
    encode(
        message: Version,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.functionId !== '') {
            writer.uint32(18).string(message.functionId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.runtime !== '') {
            writer.uint32(50).string(message.runtime);
        }
        if (message.entrypoint !== '') {
            writer.uint32(58).string(message.entrypoint);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            Duration.encode(
                message.executionTimeout,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.imageSize !== 0) {
            writer.uint32(96).int64(message.imageSize);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        for (const v of message.tags) {
            writer.uint32(114).string(v!);
        }
        if (message.logGroupId !== '') {
            writer.uint32(122).string(message.logGroupId);
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            Version_EnvironmentEntry.encode(
                { key: key as any, value },
                writer.uint32(130).fork()
            ).ldelim();
        });
        if (message.connectivity !== undefined) {
            Connectivity.encode(
                message.connectivity,
                writer.uint32(138).fork()
            ).ldelim();
        }
        Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
            Version_NamedServiceAccountsEntry.encode(
                { key: key as any, value },
                writer.uint32(146).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Version {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersion } as Version;
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.functionId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.runtime = reader.string();
                    break;
                case 7:
                    message.entrypoint = reader.string();
                    break;
                case 8:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.executionTimeout = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 12:
                    message.imageSize = longToNumber(reader.int64() as Long);
                    break;
                case 13:
                    message.status = reader.int32() as any;
                    break;
                case 14:
                    message.tags.push(reader.string());
                    break;
                case 15:
                    message.logGroupId = reader.string();
                    break;
                case 16:
                    const entry16 = Version_EnvironmentEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry16.value !== undefined) {
                        message.environment[entry16.key] = entry16.value;
                    }
                    break;
                case 17:
                    message.connectivity = Connectivity.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 18:
                    const entry18 = Version_NamedServiceAccountsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry18.value !== undefined) {
                        message.namedServiceAccounts[entry18.key] =
                            entry18.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Version {
        const message = { ...baseVersion } as Version;
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        } else {
            message.functionId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.runtime !== undefined && object.runtime !== null) {
            message.runtime = String(object.runtime);
        } else {
            message.runtime = '';
        }
        if (object.entrypoint !== undefined && object.entrypoint !== null) {
            message.entrypoint = String(object.entrypoint);
        } else {
            message.entrypoint = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (
            object.executionTimeout !== undefined &&
            object.executionTimeout !== null
        ) {
            message.executionTimeout = Duration.fromJSON(
                object.executionTimeout
            );
        } else {
            message.executionTimeout = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.imageSize !== undefined && object.imageSize !== null) {
            message.imageSize = Number(object.imageSize);
        } else {
            message.imageSize = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = version_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(String(e));
            }
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                message.environment[key] = String(value);
            });
        }
        if (object.connectivity !== undefined && object.connectivity !== null) {
            message.connectivity = Connectivity.fromJSON(object.connectivity);
        } else {
            message.connectivity = undefined;
        }
        if (
            object.namedServiceAccounts !== undefined &&
            object.namedServiceAccounts !== null
        ) {
            Object.entries(object.namedServiceAccounts).forEach(
                ([key, value]) => {
                    message.namedServiceAccounts[key] = String(value);
                }
            );
        }
        return message;
    },

    toJSON(message: Version): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.entrypoint !== undefined &&
            (obj.entrypoint = message.entrypoint);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.imageSize !== undefined && (obj.imageSize = message.imageSize);
        message.status !== undefined &&
            (obj.status = version_StatusToJSON(message.status));
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        } else {
            obj.tags = [];
        }
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? Connectivity.toJSON(message.connectivity)
                : undefined);
        obj.namedServiceAccounts = {};
        if (message.namedServiceAccounts) {
            Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
                obj.namedServiceAccounts[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Version>): Version {
        const message = { ...baseVersion } as Version;
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        } else {
            message.functionId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.runtime !== undefined && object.runtime !== null) {
            message.runtime = object.runtime;
        } else {
            message.runtime = '';
        }
        if (object.entrypoint !== undefined && object.entrypoint !== null) {
            message.entrypoint = object.entrypoint;
        } else {
            message.entrypoint = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (
            object.executionTimeout !== undefined &&
            object.executionTimeout !== null
        ) {
            message.executionTimeout = Duration.fromPartial(
                object.executionTimeout
            );
        } else {
            message.executionTimeout = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.imageSize !== undefined && object.imageSize !== null) {
            message.imageSize = object.imageSize;
        } else {
            message.imageSize = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(e);
            }
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.environment[key] = String(value);
                }
            });
        }
        if (object.connectivity !== undefined && object.connectivity !== null) {
            message.connectivity = Connectivity.fromPartial(
                object.connectivity
            );
        } else {
            message.connectivity = undefined;
        }
        if (
            object.namedServiceAccounts !== undefined &&
            object.namedServiceAccounts !== null
        ) {
            Object.entries(object.namedServiceAccounts).forEach(
                ([key, value]) => {
                    if (value !== undefined) {
                        message.namedServiceAccounts[key] = String(value);
                    }
                }
            );
        }
        return message;
    },
};

const baseVersion_EnvironmentEntry: object = { key: '', value: '' };

export const Version_EnvironmentEntry = {
    encode(
        message: Version_EnvironmentEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Version_EnvironmentEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVersion_EnvironmentEntry,
        } as Version_EnvironmentEntry;
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

    fromJSON(object: any): Version_EnvironmentEntry {
        const message = {
            ...baseVersion_EnvironmentEntry,
        } as Version_EnvironmentEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Version_EnvironmentEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Version_EnvironmentEntry>
    ): Version_EnvironmentEntry {
        const message = {
            ...baseVersion_EnvironmentEntry,
        } as Version_EnvironmentEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseVersion_NamedServiceAccountsEntry: object = { key: '', value: '' };

export const Version_NamedServiceAccountsEntry = {
    encode(
        message: Version_NamedServiceAccountsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Version_NamedServiceAccountsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVersion_NamedServiceAccountsEntry,
        } as Version_NamedServiceAccountsEntry;
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

    fromJSON(object: any): Version_NamedServiceAccountsEntry {
        const message = {
            ...baseVersion_NamedServiceAccountsEntry,
        } as Version_NamedServiceAccountsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Version_NamedServiceAccountsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Version_NamedServiceAccountsEntry>
    ): Version_NamedServiceAccountsEntry {
        const message = {
            ...baseVersion_NamedServiceAccountsEntry,
        } as Version_NamedServiceAccountsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseResources: object = { memory: 0 };

export const Resources = {
    encode(
        message: Resources,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources } as Resources;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resources {
        const message = { ...baseResources } as Resources;
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        } else {
            message.memory = 0;
        }
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.memory !== undefined && (obj.memory = message.memory);
        return obj;
    },

    fromPartial(object: DeepPartial<Resources>): Resources {
        const message = { ...baseResources } as Resources;
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        } else {
            message.memory = 0;
        }
        return message;
    },
};

const basePackage: object = { bucketName: '', objectName: '', sha256: '' };

export const Package = {
    encode(
        message: Package,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.bucketName !== '') {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.objectName !== '') {
            writer.uint32(18).string(message.objectName);
        }
        if (message.sha256 !== '') {
            writer.uint32(26).string(message.sha256);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Package {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePackage } as Package;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.objectName = reader.string();
                    break;
                case 3:
                    message.sha256 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Package {
        const message = { ...basePackage } as Package;
        if (object.bucketName !== undefined && object.bucketName !== null) {
            message.bucketName = String(object.bucketName);
        } else {
            message.bucketName = '';
        }
        if (object.objectName !== undefined && object.objectName !== null) {
            message.objectName = String(object.objectName);
        } else {
            message.objectName = '';
        }
        if (object.sha256 !== undefined && object.sha256 !== null) {
            message.sha256 = String(object.sha256);
        } else {
            message.sha256 = '';
        }
        return message;
    },

    toJSON(message: Package): unknown {
        const obj: any = {};
        message.bucketName !== undefined &&
            (obj.bucketName = message.bucketName);
        message.objectName !== undefined &&
            (obj.objectName = message.objectName);
        message.sha256 !== undefined && (obj.sha256 = message.sha256);
        return obj;
    },

    fromPartial(object: DeepPartial<Package>): Package {
        const message = { ...basePackage } as Package;
        if (object.bucketName !== undefined && object.bucketName !== null) {
            message.bucketName = object.bucketName;
        } else {
            message.bucketName = '';
        }
        if (object.objectName !== undefined && object.objectName !== null) {
            message.objectName = object.objectName;
        } else {
            message.objectName = '';
        }
        if (object.sha256 !== undefined && object.sha256 !== null) {
            message.sha256 = object.sha256;
        } else {
            message.sha256 = '';
        }
        return message;
    },
};

const baseConnectivity: object = { networkId: '', subnetId: '' };

export const Connectivity = {
    encode(
        message: Connectivity,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetId) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connectivity {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectivity } as Connectivity;
        message.subnetId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Connectivity {
        const message = { ...baseConnectivity } as Connectivity;
        message.subnetId = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            for (const e of object.subnetId) {
                message.subnetId.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: Connectivity): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetId) {
            obj.subnetId = message.subnetId.map((e) => e);
        } else {
            obj.subnetId = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Connectivity>): Connectivity {
        const message = { ...baseConnectivity } as Connectivity;
        message.subnetId = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            for (const e of object.subnetId) {
                message.subnetId.push(e);
            }
        }
        return message;
    },
};

const baseScalingPolicy: object = {
    functionId: '',
    tag: '',
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
};

export const ScalingPolicy = {
    encode(
        message: ScalingPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.modifiedAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.zoneInstancesLimit !== 0) {
            writer.uint32(56).int64(message.zoneInstancesLimit);
        }
        if (message.zoneRequestsLimit !== 0) {
            writer.uint32(64).int64(message.zoneRequestsLimit);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalingPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalingPolicy } as ScalingPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.modifiedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.zoneInstancesLimit = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 8:
                    message.zoneRequestsLimit = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalingPolicy {
        const message = { ...baseScalingPolicy } as ScalingPolicy;
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        } else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        } else {
            message.tag = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.modifiedAt !== undefined && object.modifiedAt !== null) {
            message.modifiedAt = fromJsonTimestamp(object.modifiedAt);
        } else {
            message.modifiedAt = undefined;
        }
        if (
            object.zoneInstancesLimit !== undefined &&
            object.zoneInstancesLimit !== null
        ) {
            message.zoneInstancesLimit = Number(object.zoneInstancesLimit);
        } else {
            message.zoneInstancesLimit = 0;
        }
        if (
            object.zoneRequestsLimit !== undefined &&
            object.zoneRequestsLimit !== null
        ) {
            message.zoneRequestsLimit = Number(object.zoneRequestsLimit);
        } else {
            message.zoneRequestsLimit = 0;
        }
        return message;
    },

    toJSON(message: ScalingPolicy): unknown {
        const obj: any = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.zoneInstancesLimit !== undefined &&
            (obj.zoneInstancesLimit = message.zoneInstancesLimit);
        message.zoneRequestsLimit !== undefined &&
            (obj.zoneRequestsLimit = message.zoneRequestsLimit);
        return obj;
    },

    fromPartial(object: DeepPartial<ScalingPolicy>): ScalingPolicy {
        const message = { ...baseScalingPolicy } as ScalingPolicy;
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        } else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        } else {
            message.tag = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.modifiedAt !== undefined && object.modifiedAt !== null) {
            message.modifiedAt = object.modifiedAt;
        } else {
            message.modifiedAt = undefined;
        }
        if (
            object.zoneInstancesLimit !== undefined &&
            object.zoneInstancesLimit !== null
        ) {
            message.zoneInstancesLimit = object.zoneInstancesLimit;
        } else {
            message.zoneInstancesLimit = 0;
        }
        if (
            object.zoneRequestsLimit !== undefined &&
            object.zoneRequestsLimit !== null
        ) {
            message.zoneRequestsLimit = object.zoneRequestsLimit;
        } else {
            message.zoneRequestsLimit = 0;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
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
