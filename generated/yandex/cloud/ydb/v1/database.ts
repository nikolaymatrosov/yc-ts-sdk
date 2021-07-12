/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { BackupConfig } from '../../../../yandex/cloud/ydb/v1/backup';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ydb.v1';

/** YDB database. */
export interface Database {
    id: string;
    folderId: string;
    createdAt: Date | undefined;
    name: string;
    description: string;
    status: Database_Status;
    endpoint: string;
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
    documentApiEndpoint: string;
    kinesisApiEndpoint: string;
}

export enum Database_Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    UPDATING = 4,
    ERROR = 5,
    DELETING = 6,
    STARTING = 7,
    STOPPED = 8,
    UNRECOGNIZED = -1,
}

export function database_StatusFromJSON(object: any): Database_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Database_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Database_Status.PROVISIONING;
        case 2:
        case 'RUNNING':
            return Database_Status.RUNNING;
        case 4:
        case 'UPDATING':
            return Database_Status.UPDATING;
        case 5:
        case 'ERROR':
            return Database_Status.ERROR;
        case 6:
        case 'DELETING':
            return Database_Status.DELETING;
        case 7:
        case 'STARTING':
            return Database_Status.STARTING;
        case 8:
        case 'STOPPED':
            return Database_Status.STOPPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Database_Status.UNRECOGNIZED;
    }
}

export function database_StatusToJSON(object: Database_Status): string {
    switch (object) {
        case Database_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Database_Status.PROVISIONING:
            return 'PROVISIONING';
        case Database_Status.RUNNING:
            return 'RUNNING';
        case Database_Status.UPDATING:
            return 'UPDATING';
        case Database_Status.ERROR:
            return 'ERROR';
        case Database_Status.DELETING:
            return 'DELETING';
        case Database_Status.STARTING:
            return 'STARTING';
        case Database_Status.STOPPED:
            return 'STOPPED';
        default:
            return 'UNKNOWN';
    }
}

export interface Database_LabelsEntry {
    key: string;
    value: string;
}

export interface DedicatedDatabase {
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    assignPublicIps: boolean;
}

export interface ServerlessDatabase {}

export interface ZonalDatabase {
    zoneId: string;
}

export interface RegionalDatabase {
    regionId: string;
}

export interface ScalePolicy {
    fixedScale: ScalePolicy_FixedScale | undefined;
}

export interface ScalePolicy_FixedScale {
    size: number;
}

export interface StorageConfig {
    storageOptions: StorageOption[];
}

export interface StorageOption {
    storageTypeId: string;
    groupCount: number;
}

const baseDatabase: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    endpoint: '',
    resourcePresetId: '',
    networkId: '',
    subnetIds: '',
    assignPublicIps: false,
    locationId: '',
    documentApiEndpoint: '',
    kinesisApiEndpoint: '',
};

export const Database = {
    encode(
        message: Database,
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
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.endpoint !== '') {
            writer.uint32(66).string(message.endpoint);
        }
        if (message.resourcePresetId !== '') {
            writer.uint32(74).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            StorageConfig.encode(
                message.storageConfig,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(98).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(106).string(v!);
        }
        if (message.zonalDatabase !== undefined) {
            ZonalDatabase.encode(
                message.zonalDatabase,
                writer.uint32(114).fork()
            ).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            RegionalDatabase.encode(
                message.regionalDatabase,
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            DedicatedDatabase.encode(
                message.dedicatedDatabase,
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            ServerlessDatabase.encode(
                message.serverlessDatabase,
                writer.uint32(154).fork()
            ).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(128).bool(message.assignPublicIps);
        }
        if (message.locationId !== '') {
            writer.uint32(138).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Database_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(162).fork()
            ).ldelim();
        });
        if (message.backupConfig !== undefined) {
            BackupConfig.encode(
                message.backupConfig,
                writer.uint32(170).fork()
            ).ldelim();
        }
        if (message.documentApiEndpoint !== '') {
            writer.uint32(178).string(message.documentApiEndpoint);
        }
        if (message.kinesisApiEndpoint !== '') {
            writer.uint32(186).string(message.kinesisApiEndpoint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Database {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatabase } as Database;
        message.subnetIds = [];
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
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.endpoint = reader.string();
                    break;
                case 9:
                    message.resourcePresetId = reader.string();
                    break;
                case 10:
                    message.storageConfig = StorageConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.networkId = reader.string();
                    break;
                case 13:
                    message.subnetIds.push(reader.string());
                    break;
                case 14:
                    message.zonalDatabase = ZonalDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 15:
                    message.regionalDatabase = RegionalDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 18:
                    message.dedicatedDatabase = DedicatedDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 19:
                    message.serverlessDatabase = ServerlessDatabase.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 16:
                    message.assignPublicIps = reader.bool();
                    break;
                case 17:
                    message.locationId = reader.string();
                    break;
                case 20:
                    const entry20 = Database_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry20.value !== undefined) {
                        message.labels[entry20.key] = entry20.value;
                    }
                    break;
                case 21:
                    message.backupConfig = BackupConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 22:
                    message.documentApiEndpoint = reader.string();
                    break;
                case 23:
                    message.kinesisApiEndpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Database {
        const message = { ...baseDatabase } as Database;
        message.subnetIds = [];
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
        if (object.status !== undefined && object.status !== null) {
            message.status = database_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = String(object.endpoint);
        } else {
            message.endpoint = '';
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
            object.documentApiEndpoint !== undefined &&
            object.documentApiEndpoint !== null
        ) {
            message.documentApiEndpoint = String(object.documentApiEndpoint);
        } else {
            message.documentApiEndpoint = '';
        }
        if (
            object.kinesisApiEndpoint !== undefined &&
            object.kinesisApiEndpoint !== null
        ) {
            message.kinesisApiEndpoint = String(object.kinesisApiEndpoint);
        } else {
            message.kinesisApiEndpoint = '';
        }
        return message;
    },

    toJSON(message: Database): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = database_StatusToJSON(message.status));
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
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
        message.documentApiEndpoint !== undefined &&
            (obj.documentApiEndpoint = message.documentApiEndpoint);
        message.kinesisApiEndpoint !== undefined &&
            (obj.kinesisApiEndpoint = message.kinesisApiEndpoint);
        return obj;
    },

    fromPartial(object: DeepPartial<Database>): Database {
        const message = { ...baseDatabase } as Database;
        message.subnetIds = [];
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = object.endpoint;
        } else {
            message.endpoint = '';
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
            object.documentApiEndpoint !== undefined &&
            object.documentApiEndpoint !== null
        ) {
            message.documentApiEndpoint = object.documentApiEndpoint;
        } else {
            message.documentApiEndpoint = '';
        }
        if (
            object.kinesisApiEndpoint !== undefined &&
            object.kinesisApiEndpoint !== null
        ) {
            message.kinesisApiEndpoint = object.kinesisApiEndpoint;
        } else {
            message.kinesisApiEndpoint = '';
        }
        return message;
    },
};

const baseDatabase_LabelsEntry: object = { key: '', value: '' };

export const Database_LabelsEntry = {
    encode(
        message: Database_LabelsEntry,
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
    ): Database_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatabase_LabelsEntry } as Database_LabelsEntry;
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

    fromJSON(object: any): Database_LabelsEntry {
        const message = { ...baseDatabase_LabelsEntry } as Database_LabelsEntry;
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

    toJSON(message: Database_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Database_LabelsEntry>
    ): Database_LabelsEntry {
        const message = { ...baseDatabase_LabelsEntry } as Database_LabelsEntry;
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

const baseDedicatedDatabase: object = {
    resourcePresetId: '',
    networkId: '',
    subnetIds: '',
    assignPublicIps: false,
};

export const DedicatedDatabase = {
    encode(
        message: DedicatedDatabase,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            StorageConfig.encode(
                message.storageConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(34).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v!);
        }
        if (message.assignPublicIps === true) {
            writer.uint32(48).bool(message.assignPublicIps);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DedicatedDatabase {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDedicatedDatabase } as DedicatedDatabase;
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.storageConfig = StorageConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.networkId = reader.string();
                    break;
                case 5:
                    message.subnetIds.push(reader.string());
                    break;
                case 6:
                    message.assignPublicIps = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DedicatedDatabase {
        const message = { ...baseDedicatedDatabase } as DedicatedDatabase;
        message.subnetIds = [];
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
            object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null
        ) {
            message.assignPublicIps = Boolean(object.assignPublicIps);
        } else {
            message.assignPublicIps = false;
        }
        return message;
    },

    toJSON(message: DedicatedDatabase): unknown {
        const obj: any = {};
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
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        return obj;
    },

    fromPartial(object: DeepPartial<DedicatedDatabase>): DedicatedDatabase {
        const message = { ...baseDedicatedDatabase } as DedicatedDatabase;
        message.subnetIds = [];
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
            object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null
        ) {
            message.assignPublicIps = object.assignPublicIps;
        } else {
            message.assignPublicIps = false;
        }
        return message;
    },
};

const baseServerlessDatabase: object = {};

export const ServerlessDatabase = {
    encode(
        _: ServerlessDatabase,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ServerlessDatabase {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServerlessDatabase } as ServerlessDatabase;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ServerlessDatabase {
        const message = { ...baseServerlessDatabase } as ServerlessDatabase;
        return message;
    },

    toJSON(_: ServerlessDatabase): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<ServerlessDatabase>): ServerlessDatabase {
        const message = { ...baseServerlessDatabase } as ServerlessDatabase;
        return message;
    },
};

const baseZonalDatabase: object = { zoneId: '' };

export const ZonalDatabase = {
    encode(
        message: ZonalDatabase,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ZonalDatabase {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZonalDatabase } as ZonalDatabase;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ZonalDatabase {
        const message = { ...baseZonalDatabase } as ZonalDatabase;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        return message;
    },

    toJSON(message: ZonalDatabase): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },

    fromPartial(object: DeepPartial<ZonalDatabase>): ZonalDatabase {
        const message = { ...baseZonalDatabase } as ZonalDatabase;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        return message;
    },
};

const baseRegionalDatabase: object = { regionId: '' };

export const RegionalDatabase = {
    encode(
        message: RegionalDatabase,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.regionId !== '') {
            writer.uint32(10).string(message.regionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegionalDatabase {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegionalDatabase } as RegionalDatabase;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegionalDatabase {
        const message = { ...baseRegionalDatabase } as RegionalDatabase;
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        } else {
            message.regionId = '';
        }
        return message;
    },

    toJSON(message: RegionalDatabase): unknown {
        const obj: any = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        return obj;
    },

    fromPartial(object: DeepPartial<RegionalDatabase>): RegionalDatabase {
        const message = { ...baseRegionalDatabase } as RegionalDatabase;
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        } else {
            message.regionId = '';
        }
        return message;
    },
};

const baseScalePolicy: object = {};

export const ScalePolicy = {
    encode(
        message: ScalePolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.fixedScale !== undefined) {
            ScalePolicy_FixedScale.encode(
                message.fixedScale,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy } as ScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = ScalePolicy_FixedScale.decode(
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

    fromJSON(object: any): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = ScalePolicy_FixedScale.fromJSON(
                object.fixedScale
            );
        } else {
            message.fixedScale = undefined;
        }
        return message;
    },

    toJSON(message: ScalePolicy): unknown {
        const obj: any = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ScalePolicy>): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = ScalePolicy_FixedScale.fromPartial(
                object.fixedScale
            );
        } else {
            message.fixedScale = undefined;
        }
        return message;
    },
};

const baseScalePolicy_FixedScale: object = { size: 0 };

export const ScalePolicy_FixedScale = {
    encode(
        message: ScalePolicy_FixedScale,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScalePolicy_FixedScale {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_FixedScale,
        } as ScalePolicy_FixedScale;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalePolicy_FixedScale {
        const message = {
            ...baseScalePolicy_FixedScale,
        } as ScalePolicy_FixedScale;
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        } else {
            message.size = 0;
        }
        return message;
    },

    toJSON(message: ScalePolicy_FixedScale): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = message.size);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScalePolicy_FixedScale>
    ): ScalePolicy_FixedScale {
        const message = {
            ...baseScalePolicy_FixedScale,
        } as ScalePolicy_FixedScale;
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            message.size = 0;
        }
        return message;
    },
};

const baseStorageConfig: object = {};

export const StorageConfig = {
    encode(
        message: StorageConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.storageOptions) {
            StorageOption.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageConfig } as StorageConfig;
        message.storageOptions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageOptions.push(
                        StorageOption.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageConfig {
        const message = { ...baseStorageConfig } as StorageConfig;
        message.storageOptions = [];
        if (
            object.storageOptions !== undefined &&
            object.storageOptions !== null
        ) {
            for (const e of object.storageOptions) {
                message.storageOptions.push(StorageOption.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: StorageConfig): unknown {
        const obj: any = {};
        if (message.storageOptions) {
            obj.storageOptions = message.storageOptions.map((e) =>
                e ? StorageOption.toJSON(e) : undefined
            );
        } else {
            obj.storageOptions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<StorageConfig>): StorageConfig {
        const message = { ...baseStorageConfig } as StorageConfig;
        message.storageOptions = [];
        if (
            object.storageOptions !== undefined &&
            object.storageOptions !== null
        ) {
            for (const e of object.storageOptions) {
                message.storageOptions.push(StorageOption.fromPartial(e));
            }
        }
        return message;
    },
};

const baseStorageOption: object = { storageTypeId: '', groupCount: 0 };

export const StorageOption = {
    encode(
        message: StorageOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storageTypeId !== '') {
            writer.uint32(10).string(message.storageTypeId);
        }
        if (message.groupCount !== 0) {
            writer.uint32(16).int64(message.groupCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageOption } as StorageOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypeId = reader.string();
                    break;
                case 2:
                    message.groupCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageOption {
        const message = { ...baseStorageOption } as StorageOption;
        if (
            object.storageTypeId !== undefined &&
            object.storageTypeId !== null
        ) {
            message.storageTypeId = String(object.storageTypeId);
        } else {
            message.storageTypeId = '';
        }
        if (object.groupCount !== undefined && object.groupCount !== null) {
            message.groupCount = Number(object.groupCount);
        } else {
            message.groupCount = 0;
        }
        return message;
    },

    toJSON(message: StorageOption): unknown {
        const obj: any = {};
        message.storageTypeId !== undefined &&
            (obj.storageTypeId = message.storageTypeId);
        message.groupCount !== undefined &&
            (obj.groupCount = message.groupCount);
        return obj;
    },

    fromPartial(object: DeepPartial<StorageOption>): StorageOption {
        const message = { ...baseStorageOption } as StorageOption;
        if (
            object.storageTypeId !== undefined &&
            object.storageTypeId !== null
        ) {
            message.storageTypeId = object.storageTypeId;
        } else {
            message.storageTypeId = '';
        }
        if (object.groupCount !== undefined && object.groupCount !== null) {
            message.groupCount = object.groupCount;
        } else {
            message.groupCount = 0;
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
