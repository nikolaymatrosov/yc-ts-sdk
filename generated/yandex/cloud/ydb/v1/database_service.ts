/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    BackupSettings,
    BackupConfig,
} from '../../../../yandex/cloud/ydb/v1/backup';
import {
    Database,
    StorageConfig,
    ScalePolicy,
    ZonalDatabase,
    RegionalDatabase,
    DedicatedDatabase,
    ServerlessDatabase,
    MonitoringConfig,
} from '../../../../yandex/cloud/ydb/v1/database';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ydb.v1';

export interface RestoreBackupRequest {
    /** Required. ID of the YDB backup. */
    backupId: string;
    /** Required. ID of the YDB database. */
    databaseId: string;
    /**
     * Specify paths to restore.
     * If empty, all paths will restored by default.
     */
    pathsToRestore: string[];
    /** Specify target path. */
    targetPath: string;
}

export interface RestoreBackupMetadata {
    backupId: string;
    databaseId: string;
}

export interface BackupDatabaseRequest {
    databaseId: string;
    /** custom backup options, if required. */
    backupSettings: BackupSettings | undefined;
}

export interface BackupDatabaseMetadata {
    backupId: string;
    databaseId: string;
}

export interface StartDatabaseRequest {
    databaseId: string;
}

export interface StartDatabaseMetadata {
    databaseId: string;
    databaseName: string;
}

export interface StopDatabaseRequest {
    databaseId: string;
}

export interface StopDatabaseMetadata {
    databaseId: string;
    databaseName: string;
}

export interface GetDatabaseRequest {
    /** Required. ID of the YDB cluster. */
    databaseId: string;
}

export interface ListDatabasesRequest {
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListDatabases requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListDatabases
     * request to get the next page of results.
     */
    pageToken: string;
}

export interface ListDatabasesResponse {
    databases: Database[];
    /**
     * This token allows you to get the next page of results for ListDatabases requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListDatabases request. Subsequent ListDatabases
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDatabaseRequest {
    folderId: string;
    name: string;
    description: string;
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    /** deprecated field */
    zonalDatabase: ZonalDatabase | undefined;
    /** deprecated field */
    regionalDatabase: RegionalDatabase | undefined;
    dedicatedDatabase: DedicatedDatabase | undefined;
    serverlessDatabase: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: { [key: string]: string };
    backupConfig: BackupConfig | undefined;
    monitoringConfig: MonitoringConfig | undefined;
}

export interface CreateDatabaseRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateDatabaseMetadata {
    /** Required. ID of the YDB cluster. */
    databaseId: string;
    /** Required. Name of the creating database. */
    databaseName: string;
}

export interface UpdateDatabaseRequest {
    folderId: string;
    updateMask: FieldMask | undefined;
    databaseId: string;
    name: string;
    description: string;
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    zonalDatabase: ZonalDatabase | undefined;
    regionalDatabase: RegionalDatabase | undefined;
    dedicatedDatabase: DedicatedDatabase | undefined;
    serverlessDatabase: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: { [key: string]: string };
    backupConfig: BackupConfig | undefined;
    monitoringConfig: MonitoringConfig | undefined;
}

export interface UpdateDatabaseRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateDatabaseMetadata {
    databaseId: string;
    databaseName: string;
}

export interface DeleteDatabaseRequest {
    databaseId: string;
}

export interface DeleteDatabaseMetadata {
    databaseId: string;
    databaseName: string;
}

const baseRestoreBackupRequest: object = {
    backupId: '',
    databaseId: '',
    pathsToRestore: '',
    targetPath: '',
};

export const RestoreBackupRequest = {
    encode(
        message: RestoreBackupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        for (const v of message.pathsToRestore) {
            writer.uint32(26).string(v!);
        }
        if (message.targetPath !== '') {
            writer.uint32(34).string(message.targetPath);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestoreBackupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestoreBackupRequest } as RestoreBackupRequest;
        message.pathsToRestore = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                case 3:
                    message.pathsToRestore.push(reader.string());
                    break;
                case 4:
                    message.targetPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreBackupRequest {
        const message = { ...baseRestoreBackupRequest } as RestoreBackupRequest;
        message.pathsToRestore = [];
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (
            object.pathsToRestore !== undefined &&
            object.pathsToRestore !== null
        ) {
            for (const e of object.pathsToRestore) {
                message.pathsToRestore.push(String(e));
            }
        }
        if (object.targetPath !== undefined && object.targetPath !== null) {
            message.targetPath = String(object.targetPath);
        } else {
            message.targetPath = '';
        }
        return message;
    },

    toJSON(message: RestoreBackupRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        if (message.pathsToRestore) {
            obj.pathsToRestore = message.pathsToRestore.map((e) => e);
        } else {
            obj.pathsToRestore = [];
        }
        message.targetPath !== undefined &&
            (obj.targetPath = message.targetPath);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreBackupRequest>
    ): RestoreBackupRequest {
        const message = { ...baseRestoreBackupRequest } as RestoreBackupRequest;
        message.pathsToRestore = [];
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (
            object.pathsToRestore !== undefined &&
            object.pathsToRestore !== null
        ) {
            for (const e of object.pathsToRestore) {
                message.pathsToRestore.push(e);
            }
        }
        if (object.targetPath !== undefined && object.targetPath !== null) {
            message.targetPath = object.targetPath;
        } else {
            message.targetPath = '';
        }
        return message;
    },
};

const baseRestoreBackupMetadata: object = { backupId: '', databaseId: '' };

export const RestoreBackupMetadata = {
    encode(
        message: RestoreBackupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestoreBackupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreBackupMetadata,
        } as RestoreBackupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreBackupMetadata {
        const message = {
            ...baseRestoreBackupMetadata,
        } as RestoreBackupMetadata;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: RestoreBackupMetadata): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreBackupMetadata>
    ): RestoreBackupMetadata {
        const message = {
            ...baseRestoreBackupMetadata,
        } as RestoreBackupMetadata;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

const baseBackupDatabaseRequest: object = { databaseId: '' };

export const BackupDatabaseRequest = {
    encode(
        message: BackupDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.backupSettings !== undefined) {
            BackupSettings.encode(
                message.backupSettings,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): BackupDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBackupDatabaseRequest,
        } as BackupDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.backupSettings = BackupSettings.decode(
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

    fromJSON(object: any): BackupDatabaseRequest {
        const message = {
            ...baseBackupDatabaseRequest,
        } as BackupDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (
            object.backupSettings !== undefined &&
            object.backupSettings !== null
        ) {
            message.backupSettings = BackupSettings.fromJSON(
                object.backupSettings
            );
        } else {
            message.backupSettings = undefined;
        }
        return message;
    },

    toJSON(message: BackupDatabaseRequest): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.backupSettings !== undefined &&
            (obj.backupSettings = message.backupSettings
                ? BackupSettings.toJSON(message.backupSettings)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BackupDatabaseRequest>
    ): BackupDatabaseRequest {
        const message = {
            ...baseBackupDatabaseRequest,
        } as BackupDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (
            object.backupSettings !== undefined &&
            object.backupSettings !== null
        ) {
            message.backupSettings = BackupSettings.fromPartial(
                object.backupSettings
            );
        } else {
            message.backupSettings = undefined;
        }
        return message;
    },
};

const baseBackupDatabaseMetadata: object = { backupId: '', databaseId: '' };

export const BackupDatabaseMetadata = {
    encode(
        message: BackupDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): BackupDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBackupDatabaseMetadata,
        } as BackupDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackupDatabaseMetadata {
        const message = {
            ...baseBackupDatabaseMetadata,
        } as BackupDatabaseMetadata;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: BackupDatabaseMetadata): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BackupDatabaseMetadata>
    ): BackupDatabaseMetadata {
        const message = {
            ...baseBackupDatabaseMetadata,
        } as BackupDatabaseMetadata;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

const baseStartDatabaseRequest: object = { databaseId: '' };

export const StartDatabaseRequest = {
    encode(
        message: StartDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartDatabaseRequest } as StartDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartDatabaseRequest {
        const message = { ...baseStartDatabaseRequest } as StartDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: StartDatabaseRequest): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartDatabaseRequest>
    ): StartDatabaseRequest {
        const message = { ...baseStartDatabaseRequest } as StartDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

const baseStartDatabaseMetadata: object = { databaseId: '', databaseName: '' };

export const StartDatabaseMetadata = {
    encode(
        message: StartDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartDatabaseMetadata,
        } as StartDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartDatabaseMetadata {
        const message = {
            ...baseStartDatabaseMetadata,
        } as StartDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: StartDatabaseMetadata): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartDatabaseMetadata>
    ): StartDatabaseMetadata {
        const message = {
            ...baseStartDatabaseMetadata,
        } as StartDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseStopDatabaseRequest: object = { databaseId: '' };

export const StopDatabaseRequest = {
    encode(
        message: StopDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopDatabaseRequest } as StopDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopDatabaseRequest {
        const message = { ...baseStopDatabaseRequest } as StopDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: StopDatabaseRequest): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(object: DeepPartial<StopDatabaseRequest>): StopDatabaseRequest {
        const message = { ...baseStopDatabaseRequest } as StopDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

const baseStopDatabaseMetadata: object = { databaseId: '', databaseName: '' };

export const StopDatabaseMetadata = {
    encode(
        message: StopDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopDatabaseMetadata } as StopDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopDatabaseMetadata {
        const message = { ...baseStopDatabaseMetadata } as StopDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: StopDatabaseMetadata): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopDatabaseMetadata>
    ): StopDatabaseMetadata {
        const message = { ...baseStopDatabaseMetadata } as StopDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseGetDatabaseRequest: object = { databaseId: '' };

export const GetDatabaseRequest = {
    encode(
        message: GetDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDatabaseRequest } as GetDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDatabaseRequest {
        const message = { ...baseGetDatabaseRequest } as GetDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: GetDatabaseRequest): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetDatabaseRequest>): GetDatabaseRequest {
        const message = { ...baseGetDatabaseRequest } as GetDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

const baseListDatabasesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListDatabasesRequest = {
    encode(
        message: ListDatabasesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDatabasesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDatabasesRequest } as ListDatabasesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDatabasesRequest {
        const message = { ...baseListDatabasesRequest } as ListDatabasesRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        return message;
    },

    toJSON(message: ListDatabasesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDatabasesRequest>
    ): ListDatabasesRequest {
        const message = { ...baseListDatabasesRequest } as ListDatabasesRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        return message;
    },
};

const baseListDatabasesResponse: object = { nextPageToken: '' };

export const ListDatabasesResponse = {
    encode(
        message: ListDatabasesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.databases) {
            Database.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDatabasesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDatabasesResponse,
        } as ListDatabasesResponse;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databases.push(
                        Database.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDatabasesResponse {
        const message = {
            ...baseListDatabasesResponse,
        } as ListDatabasesResponse;
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(Database.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListDatabasesResponse): unknown {
        const obj: any = {};
        if (message.databases) {
            obj.databases = message.databases.map((e) =>
                e ? Database.toJSON(e) : undefined
            );
        } else {
            obj.databases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDatabasesResponse>
    ): ListDatabasesResponse {
        const message = {
            ...baseListDatabasesResponse,
        } as ListDatabasesResponse;
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(Database.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseCreateDatabaseRequest: object = {
    folderId: '',
    name: '',
    description: '',
    resourcePresetId: '',
    networkId: '',
    subnetIds: '',
    assignPublicIps: false,
    locationId: '',
};

export const CreateDatabaseRequest = {
    encode(
        message: CreateDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.resourcePresetId !== '') {
            writer.uint32(34).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            StorageConfig.encode(
                message.storageConfig,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(66).string(v!);
        }
        if (message.zonalDatabase !== undefined) {
            ZonalDatabase.encode(
                message.zonalDatabase,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            RegionalDatabase.encode(
                message.regionalDatabase,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            DedicatedDatabase.encode(
                message.dedicatedDatabase,
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            ServerlessDatabase.encode(
                message.serverlessDatabase,
                writer.uint32(114).fork()
            ).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(88).bool(message.assignPublicIps);
        }
        if (message.locationId !== '') {
            writer.uint32(98).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateDatabaseRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(122).fork()
            ).ldelim();
        });
        if (message.backupConfig !== undefined) {
            BackupConfig.encode(
                message.backupConfig,
                writer.uint32(130).fork()
            ).ldelim();
        }
        if (message.monitoringConfig !== undefined) {
            MonitoringConfig.encode(
                message.monitoringConfig,
                writer.uint32(138).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseRequest,
        } as CreateDatabaseRequest;
        message.subnetIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.resourcePresetId = reader.string();
                    break;
                case 5:
                    message.storageConfig = StorageConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.subnetIds.push(reader.string());
                    break;
                case 9:
                    message.zonalDatabase = ZonalDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.regionalDatabase = RegionalDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 13:
                    message.dedicatedDatabase = DedicatedDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 14:
                    message.serverlessDatabase = ServerlessDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.assignPublicIps = reader.bool();
                    break;
                case 12:
                    message.locationId = reader.string();
                    break;
                case 15:
                    const entry15 = CreateDatabaseRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry15.value !== undefined) {
                        message.labels[entry15.key] = entry15.value;
                    }
                    break;
                case 16:
                    message.backupConfig = BackupConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 17:
                    message.monitoringConfig = MonitoringConfig.decode(
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

    fromJSON(object: any): CreateDatabaseRequest {
        const message = {
            ...baseCreateDatabaseRequest,
        } as CreateDatabaseRequest;
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
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
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = String(object.resourcePresetId);
        } else {
            message.resourcePresetId = '';
        }
        if (
            object.storageConfig !== undefined &&
            object.storageConfig !== null
        ) {
            message.storageConfig = StorageConfig.fromJSON(
                object.storageConfig
            );
        } else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
        }
        if (
            object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null
        ) {
            message.zonalDatabase = ZonalDatabase.fromJSON(
                object.zonalDatabase
            );
        } else {
            message.zonalDatabase = undefined;
        }
        if (
            object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null
        ) {
            message.regionalDatabase = RegionalDatabase.fromJSON(
                object.regionalDatabase
            );
        } else {
            message.regionalDatabase = undefined;
        }
        if (
            object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null
        ) {
            message.dedicatedDatabase = DedicatedDatabase.fromJSON(
                object.dedicatedDatabase
            );
        } else {
            message.dedicatedDatabase = undefined;
        }
        if (
            object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null
        ) {
            message.serverlessDatabase = ServerlessDatabase.fromJSON(
                object.serverlessDatabase
            );
        } else {
            message.serverlessDatabase = undefined;
        }
        if (
            object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null
        ) {
            message.assignPublicIps = Boolean(object.assignPublicIps);
        } else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = String(object.locationId);
        } else {
            message.locationId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.backupConfig !== undefined && object.backupConfig !== null) {
            message.backupConfig = BackupConfig.fromJSON(object.backupConfig);
        } else {
            message.backupConfig = undefined;
        }
        if (
            object.monitoringConfig !== undefined &&
            object.monitoringConfig !== null
        ) {
            message.monitoringConfig = MonitoringConfig.fromJSON(
                object.monitoringConfig
            );
        } else {
            message.monitoringConfig = undefined;
        }
        return message;
    },

    toJSON(message: CreateDatabaseRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
        message.zonalDatabase !== undefined &&
            (obj.zonalDatabase = message.zonalDatabase
                ? ZonalDatabase.toJSON(message.zonalDatabase)
                : undefined);
        message.regionalDatabase !== undefined &&
            (obj.regionalDatabase = message.regionalDatabase
                ? RegionalDatabase.toJSON(message.regionalDatabase)
                : undefined);
        message.dedicatedDatabase !== undefined &&
            (obj.dedicatedDatabase = message.dedicatedDatabase
                ? DedicatedDatabase.toJSON(message.dedicatedDatabase)
                : undefined);
        message.serverlessDatabase !== undefined &&
            (obj.serverlessDatabase = message.serverlessDatabase
                ? ServerlessDatabase.toJSON(message.serverlessDatabase)
                : undefined);
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        message.locationId !== undefined &&
            (obj.locationId = message.locationId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.backupConfig !== undefined &&
            (obj.backupConfig = message.backupConfig
                ? BackupConfig.toJSON(message.backupConfig)
                : undefined);
        message.monitoringConfig !== undefined &&
            (obj.monitoringConfig = message.monitoringConfig
                ? MonitoringConfig.toJSON(message.monitoringConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDatabaseRequest>
    ): CreateDatabaseRequest {
        const message = {
            ...baseCreateDatabaseRequest,
        } as CreateDatabaseRequest;
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
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
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = object.resourcePresetId;
        } else {
            message.resourcePresetId = '';
        }
        if (
            object.storageConfig !== undefined &&
            object.storageConfig !== null
        ) {
            message.storageConfig = StorageConfig.fromPartial(
                object.storageConfig
            );
        } else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
        }
        if (
            object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null
        ) {
            message.zonalDatabase = ZonalDatabase.fromPartial(
                object.zonalDatabase
            );
        } else {
            message.zonalDatabase = undefined;
        }
        if (
            object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null
        ) {
            message.regionalDatabase = RegionalDatabase.fromPartial(
                object.regionalDatabase
            );
        } else {
            message.regionalDatabase = undefined;
        }
        if (
            object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null
        ) {
            message.dedicatedDatabase = DedicatedDatabase.fromPartial(
                object.dedicatedDatabase
            );
        } else {
            message.dedicatedDatabase = undefined;
        }
        if (
            object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null
        ) {
            message.serverlessDatabase = ServerlessDatabase.fromPartial(
                object.serverlessDatabase
            );
        } else {
            message.serverlessDatabase = undefined;
        }
        if (
            object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null
        ) {
            message.assignPublicIps = object.assignPublicIps;
        } else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = object.locationId;
        } else {
            message.locationId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.backupConfig !== undefined && object.backupConfig !== null) {
            message.backupConfig = BackupConfig.fromPartial(
                object.backupConfig
            );
        } else {
            message.backupConfig = undefined;
        }
        if (
            object.monitoringConfig !== undefined &&
            object.monitoringConfig !== null
        ) {
            message.monitoringConfig = MonitoringConfig.fromPartial(
                object.monitoringConfig
            );
        } else {
            message.monitoringConfig = undefined;
        }
        return message;
    },
};

const baseCreateDatabaseRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateDatabaseRequest_LabelsEntry = {
    encode(
        message: CreateDatabaseRequest_LabelsEntry,
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
    ): CreateDatabaseRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseRequest_LabelsEntry,
        } as CreateDatabaseRequest_LabelsEntry;
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

    fromJSON(object: any): CreateDatabaseRequest_LabelsEntry {
        const message = {
            ...baseCreateDatabaseRequest_LabelsEntry,
        } as CreateDatabaseRequest_LabelsEntry;
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

    toJSON(message: CreateDatabaseRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDatabaseRequest_LabelsEntry>
    ): CreateDatabaseRequest_LabelsEntry {
        const message = {
            ...baseCreateDatabaseRequest_LabelsEntry,
        } as CreateDatabaseRequest_LabelsEntry;
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

const baseCreateDatabaseMetadata: object = { databaseId: '', databaseName: '' };

export const CreateDatabaseMetadata = {
    encode(
        message: CreateDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseMetadata,
        } as CreateDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDatabaseMetadata {
        const message = {
            ...baseCreateDatabaseMetadata,
        } as CreateDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: CreateDatabaseMetadata): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDatabaseMetadata>
    ): CreateDatabaseMetadata {
        const message = {
            ...baseCreateDatabaseMetadata,
        } as CreateDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseUpdateDatabaseRequest: object = {
    folderId: '',
    databaseId: '',
    name: '',
    description: '',
    resourcePresetId: '',
    networkId: '',
    subnetIds: '',
    assignPublicIps: false,
    locationId: '',
};

export const UpdateDatabaseRequest = {
    encode(
        message: UpdateDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.databaseId !== '') {
            writer.uint32(26).string(message.databaseId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.resourcePresetId !== '') {
            writer.uint32(50).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            StorageConfig.encode(
                message.storageConfig,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(74).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(82).string(v!);
        }
        if (message.zonalDatabase !== undefined) {
            ZonalDatabase.encode(
                message.zonalDatabase,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            RegionalDatabase.encode(
                message.regionalDatabase,
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            DedicatedDatabase.encode(
                message.dedicatedDatabase,
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            ServerlessDatabase.encode(
                message.serverlessDatabase,
                writer.uint32(130).fork()
            ).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(104).bool(message.assignPublicIps);
        }
        if (message.locationId !== '') {
            writer.uint32(114).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateDatabaseRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(138).fork()
            ).ldelim();
        });
        if (message.backupConfig !== undefined) {
            BackupConfig.encode(
                message.backupConfig,
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.monitoringConfig !== undefined) {
            MonitoringConfig.encode(
                message.monitoringConfig,
                writer.uint32(154).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatabaseRequest,
        } as UpdateDatabaseRequest;
        message.subnetIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.databaseId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.resourcePresetId = reader.string();
                    break;
                case 7:
                    message.storageConfig = StorageConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.networkId = reader.string();
                    break;
                case 10:
                    message.subnetIds.push(reader.string());
                    break;
                case 11:
                    message.zonalDatabase = ZonalDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.regionalDatabase = RegionalDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 15:
                    message.dedicatedDatabase = DedicatedDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 16:
                    message.serverlessDatabase = ServerlessDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 13:
                    message.assignPublicIps = reader.bool();
                    break;
                case 14:
                    message.locationId = reader.string();
                    break;
                case 17:
                    const entry17 = UpdateDatabaseRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry17.value !== undefined) {
                        message.labels[entry17.key] = entry17.value;
                    }
                    break;
                case 18:
                    message.backupConfig = BackupConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 19:
                    message.monitoringConfig = MonitoringConfig.decode(
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

    fromJSON(object: any): UpdateDatabaseRequest {
        const message = {
            ...baseUpdateDatabaseRequest,
        } as UpdateDatabaseRequest;
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
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
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = String(object.resourcePresetId);
        } else {
            message.resourcePresetId = '';
        }
        if (
            object.storageConfig !== undefined &&
            object.storageConfig !== null
        ) {
            message.storageConfig = StorageConfig.fromJSON(
                object.storageConfig
            );
        } else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
        }
        if (
            object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null
        ) {
            message.zonalDatabase = ZonalDatabase.fromJSON(
                object.zonalDatabase
            );
        } else {
            message.zonalDatabase = undefined;
        }
        if (
            object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null
        ) {
            message.regionalDatabase = RegionalDatabase.fromJSON(
                object.regionalDatabase
            );
        } else {
            message.regionalDatabase = undefined;
        }
        if (
            object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null
        ) {
            message.dedicatedDatabase = DedicatedDatabase.fromJSON(
                object.dedicatedDatabase
            );
        } else {
            message.dedicatedDatabase = undefined;
        }
        if (
            object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null
        ) {
            message.serverlessDatabase = ServerlessDatabase.fromJSON(
                object.serverlessDatabase
            );
        } else {
            message.serverlessDatabase = undefined;
        }
        if (
            object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null
        ) {
            message.assignPublicIps = Boolean(object.assignPublicIps);
        } else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = String(object.locationId);
        } else {
            message.locationId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.backupConfig !== undefined && object.backupConfig !== null) {
            message.backupConfig = BackupConfig.fromJSON(object.backupConfig);
        } else {
            message.backupConfig = undefined;
        }
        if (
            object.monitoringConfig !== undefined &&
            object.monitoringConfig !== null
        ) {
            message.monitoringConfig = MonitoringConfig.fromJSON(
                object.monitoringConfig
            );
        } else {
            message.monitoringConfig = undefined;
        }
        return message;
    },

    toJSON(message: UpdateDatabaseRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
        message.zonalDatabase !== undefined &&
            (obj.zonalDatabase = message.zonalDatabase
                ? ZonalDatabase.toJSON(message.zonalDatabase)
                : undefined);
        message.regionalDatabase !== undefined &&
            (obj.regionalDatabase = message.regionalDatabase
                ? RegionalDatabase.toJSON(message.regionalDatabase)
                : undefined);
        message.dedicatedDatabase !== undefined &&
            (obj.dedicatedDatabase = message.dedicatedDatabase
                ? DedicatedDatabase.toJSON(message.dedicatedDatabase)
                : undefined);
        message.serverlessDatabase !== undefined &&
            (obj.serverlessDatabase = message.serverlessDatabase
                ? ServerlessDatabase.toJSON(message.serverlessDatabase)
                : undefined);
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        message.locationId !== undefined &&
            (obj.locationId = message.locationId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.backupConfig !== undefined &&
            (obj.backupConfig = message.backupConfig
                ? BackupConfig.toJSON(message.backupConfig)
                : undefined);
        message.monitoringConfig !== undefined &&
            (obj.monitoringConfig = message.monitoringConfig
                ? MonitoringConfig.toJSON(message.monitoringConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDatabaseRequest>
    ): UpdateDatabaseRequest {
        const message = {
            ...baseUpdateDatabaseRequest,
        } as UpdateDatabaseRequest;
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
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
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = object.resourcePresetId;
        } else {
            message.resourcePresetId = '';
        }
        if (
            object.storageConfig !== undefined &&
            object.storageConfig !== null
        ) {
            message.storageConfig = StorageConfig.fromPartial(
                object.storageConfig
            );
        } else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
        }
        if (
            object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null
        ) {
            message.zonalDatabase = ZonalDatabase.fromPartial(
                object.zonalDatabase
            );
        } else {
            message.zonalDatabase = undefined;
        }
        if (
            object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null
        ) {
            message.regionalDatabase = RegionalDatabase.fromPartial(
                object.regionalDatabase
            );
        } else {
            message.regionalDatabase = undefined;
        }
        if (
            object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null
        ) {
            message.dedicatedDatabase = DedicatedDatabase.fromPartial(
                object.dedicatedDatabase
            );
        } else {
            message.dedicatedDatabase = undefined;
        }
        if (
            object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null
        ) {
            message.serverlessDatabase = ServerlessDatabase.fromPartial(
                object.serverlessDatabase
            );
        } else {
            message.serverlessDatabase = undefined;
        }
        if (
            object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null
        ) {
            message.assignPublicIps = object.assignPublicIps;
        } else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = object.locationId;
        } else {
            message.locationId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.backupConfig !== undefined && object.backupConfig !== null) {
            message.backupConfig = BackupConfig.fromPartial(
                object.backupConfig
            );
        } else {
            message.backupConfig = undefined;
        }
        if (
            object.monitoringConfig !== undefined &&
            object.monitoringConfig !== null
        ) {
            message.monitoringConfig = MonitoringConfig.fromPartial(
                object.monitoringConfig
            );
        } else {
            message.monitoringConfig = undefined;
        }
        return message;
    },
};

const baseUpdateDatabaseRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateDatabaseRequest_LabelsEntry = {
    encode(
        message: UpdateDatabaseRequest_LabelsEntry,
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
    ): UpdateDatabaseRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatabaseRequest_LabelsEntry,
        } as UpdateDatabaseRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDatabaseRequest_LabelsEntry {
        const message = {
            ...baseUpdateDatabaseRequest_LabelsEntry,
        } as UpdateDatabaseRequest_LabelsEntry;
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

    toJSON(message: UpdateDatabaseRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDatabaseRequest_LabelsEntry>
    ): UpdateDatabaseRequest_LabelsEntry {
        const message = {
            ...baseUpdateDatabaseRequest_LabelsEntry,
        } as UpdateDatabaseRequest_LabelsEntry;
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

const baseUpdateDatabaseMetadata: object = { databaseId: '', databaseName: '' };

export const UpdateDatabaseMetadata = {
    encode(
        message: UpdateDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatabaseMetadata,
        } as UpdateDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDatabaseMetadata {
        const message = {
            ...baseUpdateDatabaseMetadata,
        } as UpdateDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: UpdateDatabaseMetadata): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDatabaseMetadata>
    ): UpdateDatabaseMetadata {
        const message = {
            ...baseUpdateDatabaseMetadata,
        } as UpdateDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseDeleteDatabaseRequest: object = { databaseId: '' };

export const DeleteDatabaseRequest = {
    encode(
        message: DeleteDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseRequest,
        } as DeleteDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDatabaseRequest {
        const message = {
            ...baseDeleteDatabaseRequest,
        } as DeleteDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: DeleteDatabaseRequest): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDatabaseRequest>
    ): DeleteDatabaseRequest {
        const message = {
            ...baseDeleteDatabaseRequest,
        } as DeleteDatabaseRequest;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

const baseDeleteDatabaseMetadata: object = { databaseId: '', databaseName: '' };

export const DeleteDatabaseMetadata = {
    encode(
        message: DeleteDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseMetadata,
        } as DeleteDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDatabaseMetadata {
        const message = {
            ...baseDeleteDatabaseMetadata,
        } as DeleteDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: DeleteDatabaseMetadata): unknown {
        const obj: any = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDatabaseMetadata>
    ): DeleteDatabaseMetadata {
        const message = {
            ...baseDeleteDatabaseMetadata,
        } as DeleteDatabaseMetadata;
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

/** A set of methods for managing databases. */
export const DatabaseServiceService = {
    /** Returns the specified database. */
    get: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDatabaseRequest) =>
            Buffer.from(GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDatabaseRequest.decode(value),
        responseSerialize: (value: Database) =>
            Buffer.from(Database.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Database.decode(value),
    },
    /** Retrieves a list of databases. */
    list: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDatabasesRequest) =>
            Buffer.from(ListDatabasesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDatabasesRequest.decode(value),
        responseSerialize: (value: ListDatabasesResponse) =>
            Buffer.from(ListDatabasesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDatabasesResponse.decode(value),
    },
    /** Creates a new database. */
    create: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDatabaseRequest) =>
            Buffer.from(CreateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Modifies the specified database. */
    update: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDatabaseRequest) =>
            Buffer.from(UpdateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified database. */
    start: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartDatabaseRequest) =>
            Buffer.from(StartDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StartDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified database. */
    stop: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopDatabaseRequest) =>
            Buffer.from(StopDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StopDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified database. */
    delete: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDatabaseRequest) =>
            Buffer.from(DeleteDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Restores the specified backup */
    restore: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Restore',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestoreBackupRequest) =>
            Buffer.from(RestoreBackupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RestoreBackupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    backup: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Backup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BackupDatabaseRequest) =>
            Buffer.from(BackupDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            BackupDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DatabaseServiceServer extends UntypedServiceImplementation {
    /** Returns the specified database. */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves a list of databases. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new database. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Modifies the specified database. */
    update: handleUnaryCall<UpdateDatabaseRequest, Operation>;
    /** Starts the specified database. */
    start: handleUnaryCall<StartDatabaseRequest, Operation>;
    /** Stops the specified database. */
    stop: handleUnaryCall<StopDatabaseRequest, Operation>;
    /** Deletes the specified database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
    /** Restores the specified backup */
    restore: handleUnaryCall<RestoreBackupRequest, Operation>;
    backup: handleUnaryCall<BackupDatabaseRequest, Operation>;
}

export interface DatabaseServiceClient extends Client {
    /** Returns the specified database. */
    get(
        request: GetDatabaseRequest,
        callback: (error: ServiceError | null, response: Database) => void
    ): ClientUnaryCall;
    get(
        request: GetDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Database) => void
    ): ClientUnaryCall;
    get(
        request: GetDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Database) => void
    ): ClientUnaryCall;
    /** Retrieves a list of databases. */
    list(
        request: ListDatabasesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDatabasesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDatabasesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDatabasesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDatabasesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDatabasesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a new database. */
    create(
        request: CreateDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Modifies the specified database. */
    update(
        request: UpdateDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Starts the specified database. */
    start(
        request: StartDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Stops the specified database. */
    stop(
        request: StopDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified database. */
    delete(
        request: DeleteDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Restores the specified backup */
    restore(
        request: RestoreBackupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restore(
        request: RestoreBackupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restore(
        request: RestoreBackupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    backup(
        request: BackupDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    backup(
        request: BackupDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    backup(
        request: BackupDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const DatabaseServiceClient = makeGenericClientConstructor(
    DatabaseServiceService,
    'yandex.cloud.ydb.v1.DatabaseService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DatabaseServiceClient;
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
