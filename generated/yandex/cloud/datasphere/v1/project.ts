/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.datasphere.v1';

/** A Project resource. */
export interface Project {
    /** ID of the project. */
    id: string;
    /** ID of the folder that the project belongs to. */
    folderId: string;
    createdAt: Date | undefined;
    /** Name of the project. 1-63 characters long. */
    name: string;
    /** Description of the project. 0-256 characters long. */
    description: string;
    /** Settings of the project. */
    settings: Project_Settings | undefined;
    /** Limits of the project. */
    limits: Project_Limits | undefined;
}

export interface Project_Settings {
    /** ID of the service account, on whose behalf all operations with clusters will be performed. */
    serviceAccountId: string;
    /**
     * ID of the subnet where the DataProc cluster resides.
     * Currently only subnets created in the availability zone ru-central1-a are supported.
     */
    subnetId: string;
    /** ID of the DataProc cluster. */
    dataProcClusterId: string;
    /** Commit mode that is assigned to the project. */
    commitMode: Project_Settings_CommitMode;
}

export enum Project_Settings_CommitMode {
    COMMIT_MODE_UNSPECIFIED = 0,
    /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
    STANDARD = 1,
    /**
     * AUTO - Commit happens periodically.
     * Also, automatic saving of state occurs when switching to another type of computing resource.
     */
    AUTO = 2,
    UNRECOGNIZED = -1,
}

export function project_Settings_CommitModeFromJSON(
    object: any
): Project_Settings_CommitMode {
    switch (object) {
        case 0:
        case 'COMMIT_MODE_UNSPECIFIED':
            return Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return Project_Settings_CommitMode.STANDARD;
        case 2:
        case 'AUTO':
            return Project_Settings_CommitMode.AUTO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Project_Settings_CommitMode.UNRECOGNIZED;
    }
}

export function project_Settings_CommitModeToJSON(
    object: Project_Settings_CommitMode
): string {
    switch (object) {
        case Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED:
            return 'COMMIT_MODE_UNSPECIFIED';
        case Project_Settings_CommitMode.STANDARD:
            return 'STANDARD';
        case Project_Settings_CommitMode.AUTO:
            return 'AUTO';
        default:
            return 'UNKNOWN';
    }
}

export interface Project_Limits {
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour: number | undefined;
    /** The number of units that can be spent on the one execution. */
    maxUnitsPerExecution: number | undefined;
}

const baseProject: object = { id: '', folderId: '', name: '', description: '' };

export const Project = {
    encode(
        message: Project,
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
        if (message.settings !== undefined) {
            Project_Settings.encode(
                message.settings,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.limits !== undefined) {
            Project_Limits.encode(
                message.limits,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Project {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject } as Project;
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
                    message.settings = Project_Settings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.limits = Project_Limits.decode(
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

    fromJSON(object: any): Project {
        const message = { ...baseProject } as Project;
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromJSON(object.settings);
        } else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = Project_Limits.fromJSON(object.limits);
        } else {
            message.limits = undefined;
        }
        return message;
    },

    toJSON(message: Project): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? Project_Limits.toJSON(message.limits)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Project>): Project {
        const message = { ...baseProject } as Project;
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromPartial(object.settings);
        } else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = Project_Limits.fromPartial(object.limits);
        } else {
            message.limits = undefined;
        }
        return message;
    },
};

const baseProject_Settings: object = {
    serviceAccountId: '',
    subnetId: '',
    dataProcClusterId: '',
    commitMode: 0,
};

export const Project_Settings = {
    encode(
        message: Project_Settings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.dataProcClusterId !== '') {
            writer.uint32(26).string(message.dataProcClusterId);
        }
        if (message.commitMode !== 0) {
            writer.uint32(32).int32(message.commitMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Project_Settings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject_Settings } as Project_Settings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.dataProcClusterId = reader.string();
                    break;
                case 4:
                    message.commitMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Project_Settings {
        const message = { ...baseProject_Settings } as Project_Settings;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.dataProcClusterId !== undefined &&
            object.dataProcClusterId !== null
        ) {
            message.dataProcClusterId = String(object.dataProcClusterId);
        } else {
            message.dataProcClusterId = '';
        }
        if (object.commitMode !== undefined && object.commitMode !== null) {
            message.commitMode = project_Settings_CommitModeFromJSON(
                object.commitMode
            );
        } else {
            message.commitMode = 0;
        }
        return message;
    },

    toJSON(message: Project_Settings): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.dataProcClusterId !== undefined &&
            (obj.dataProcClusterId = message.dataProcClusterId);
        message.commitMode !== undefined &&
            (obj.commitMode = project_Settings_CommitModeToJSON(
                message.commitMode
            ));
        return obj;
    },

    fromPartial(object: DeepPartial<Project_Settings>): Project_Settings {
        const message = { ...baseProject_Settings } as Project_Settings;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.dataProcClusterId !== undefined &&
            object.dataProcClusterId !== null
        ) {
            message.dataProcClusterId = object.dataProcClusterId;
        } else {
            message.dataProcClusterId = '';
        }
        if (object.commitMode !== undefined && object.commitMode !== null) {
            message.commitMode = object.commitMode;
        } else {
            message.commitMode = 0;
        }
        return message;
    },
};

const baseProject_Limits: object = {};

export const Project_Limits = {
    encode(
        message: Project_Limits,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxUnitsPerHour !== undefined) {
            Int64Value.encode(
                { value: message.maxUnitsPerHour! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            Int64Value.encode(
                { value: message.maxUnitsPerExecution! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Project_Limits {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject_Limits } as Project_Limits;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.maxUnitsPerHour = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.maxUnitsPerExecution = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Project_Limits {
        const message = { ...baseProject_Limits } as Project_Limits;
        if (
            object.maxUnitsPerHour !== undefined &&
            object.maxUnitsPerHour !== null
        ) {
            message.maxUnitsPerHour = Number(object.maxUnitsPerHour);
        } else {
            message.maxUnitsPerHour = undefined;
        }
        if (
            object.maxUnitsPerExecution !== undefined &&
            object.maxUnitsPerExecution !== null
        ) {
            message.maxUnitsPerExecution = Number(object.maxUnitsPerExecution);
        } else {
            message.maxUnitsPerExecution = undefined;
        }
        return message;
    },

    toJSON(message: Project_Limits): unknown {
        const obj: any = {};
        message.maxUnitsPerHour !== undefined &&
            (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },

    fromPartial(object: DeepPartial<Project_Limits>): Project_Limits {
        const message = { ...baseProject_Limits } as Project_Limits;
        if (
            object.maxUnitsPerHour !== undefined &&
            object.maxUnitsPerHour !== null
        ) {
            message.maxUnitsPerHour = object.maxUnitsPerHour;
        } else {
            message.maxUnitsPerHour = undefined;
        }
        if (
            object.maxUnitsPerExecution !== undefined &&
            object.maxUnitsPerExecution !== null
        ) {
            message.maxUnitsPerExecution = object.maxUnitsPerExecution;
        } else {
            message.maxUnitsPerExecution = undefined;
        }
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
