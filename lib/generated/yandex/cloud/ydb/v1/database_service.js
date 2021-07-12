/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { BackupSettings, BackupConfig, } from '../../../../yandex/cloud/ydb/v1/backup';
import { Database, StorageConfig, ScalePolicy, ZonalDatabase, RegionalDatabase, DedicatedDatabase, ServerlessDatabase, } from '../../../../yandex/cloud/ydb/v1/database';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ydb.v1';
const baseRestoreBackupRequest = {
    backupId: '',
    databaseId: '',
    pathsToRestore: '',
    targetPath: '',
};
export const RestoreBackupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        for (const v of message.pathsToRestore) {
            writer.uint32(26).string(v);
        }
        if (message.targetPath !== '') {
            writer.uint32(34).string(message.targetPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestoreBackupRequest };
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
    fromJSON(object) {
        const message = { ...baseRestoreBackupRequest };
        message.pathsToRestore = [];
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        }
        else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.pathsToRestore !== undefined &&
            object.pathsToRestore !== null) {
            for (const e of object.pathsToRestore) {
                message.pathsToRestore.push(String(e));
            }
        }
        if (object.targetPath !== undefined && object.targetPath !== null) {
            message.targetPath = String(object.targetPath);
        }
        else {
            message.targetPath = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        if (message.pathsToRestore) {
            obj.pathsToRestore = message.pathsToRestore.map((e) => e);
        }
        else {
            obj.pathsToRestore = [];
        }
        message.targetPath !== undefined &&
            (obj.targetPath = message.targetPath);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRestoreBackupRequest };
        message.pathsToRestore = [];
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        }
        else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.pathsToRestore !== undefined &&
            object.pathsToRestore !== null) {
            for (const e of object.pathsToRestore) {
                message.pathsToRestore.push(e);
            }
        }
        if (object.targetPath !== undefined && object.targetPath !== null) {
            message.targetPath = object.targetPath;
        }
        else {
            message.targetPath = '';
        }
        return message;
    },
};
const baseRestoreBackupMetadata = { backupId: '', databaseId: '' };
export const RestoreBackupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreBackupMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseRestoreBackupMetadata,
        };
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        }
        else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestoreBackupMetadata,
        };
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        }
        else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
};
const baseBackupDatabaseRequest = { databaseId: '' };
export const BackupDatabaseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.backupSettings !== undefined) {
            BackupSettings.encode(message.backupSettings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBackupDatabaseRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.backupSettings = BackupSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseBackupDatabaseRequest,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.backupSettings !== undefined &&
            object.backupSettings !== null) {
            message.backupSettings = BackupSettings.fromJSON(object.backupSettings);
        }
        else {
            message.backupSettings = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.backupSettings !== undefined &&
            (obj.backupSettings = message.backupSettings
                ? BackupSettings.toJSON(message.backupSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBackupDatabaseRequest,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.backupSettings !== undefined &&
            object.backupSettings !== null) {
            message.backupSettings = BackupSettings.fromPartial(object.backupSettings);
        }
        else {
            message.backupSettings = undefined;
        }
        return message;
    },
};
const baseBackupDatabaseMetadata = { backupId: '', databaseId: '' };
export const BackupDatabaseMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBackupDatabaseMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseBackupDatabaseMetadata,
        };
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        }
        else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBackupDatabaseMetadata,
        };
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        }
        else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
};
const baseStartDatabaseRequest = { databaseId: '' };
export const StartDatabaseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartDatabaseRequest };
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
    fromJSON(object) {
        const message = { ...baseStartDatabaseRequest };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStartDatabaseRequest };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
};
const baseStartDatabaseMetadata = { databaseId: '', databaseName: '' };
export const StartDatabaseMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartDatabaseMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseStartDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseStopDatabaseRequest = { databaseId: '' };
export const StopDatabaseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopDatabaseRequest };
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
    fromJSON(object) {
        const message = { ...baseStopDatabaseRequest };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopDatabaseRequest };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
};
const baseStopDatabaseMetadata = { databaseId: '', databaseName: '' };
export const StopDatabaseMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopDatabaseMetadata };
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
    fromJSON(object) {
        const message = { ...baseStopDatabaseMetadata };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopDatabaseMetadata };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseGetDatabaseRequest = { databaseId: '' };
export const GetDatabaseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDatabaseRequest };
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
    fromJSON(object) {
        const message = { ...baseGetDatabaseRequest };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetDatabaseRequest };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
};
const baseListDatabasesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListDatabasesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDatabasesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = { ...baseListDatabasesRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListDatabasesRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListDatabasesResponse = { nextPageToken: '' };
export const ListDatabasesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.databases) {
            Database.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDatabasesResponse,
        };
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databases.push(Database.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseListDatabasesResponse,
        };
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(Database.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.databases) {
            obj.databases = message.databases.map((e) => e ? Database.toJSON(e) : undefined);
        }
        else {
            obj.databases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDatabasesResponse,
        };
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(Database.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseCreateDatabaseRequest = {
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
    encode(message, writer = _m0.Writer.create()) {
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
            StorageConfig.encode(message.storageConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(66).string(v);
        }
        if (message.zonalDatabase !== undefined) {
            ZonalDatabase.encode(message.zonalDatabase, writer.uint32(74).fork()).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            RegionalDatabase.encode(message.regionalDatabase, writer.uint32(82).fork()).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(106).fork()).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(114).fork()).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(88).bool(message.assignPublicIps);
        }
        if (message.locationId !== '') {
            writer.uint32(98).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateDatabaseRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(122).fork()).ldelim();
        });
        if (message.backupConfig !== undefined) {
            BackupConfig.encode(message.backupConfig, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseRequest,
        };
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
                    message.storageConfig = StorageConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.subnetIds.push(reader.string());
                    break;
                case 9:
                    message.zonalDatabase = ZonalDatabase.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.regionalDatabase = RegionalDatabase.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.dedicatedDatabase = DedicatedDatabase.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.serverlessDatabase = ServerlessDatabase.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.assignPublicIps = reader.bool();
                    break;
                case 12:
                    message.locationId = reader.string();
                    break;
                case 15:
                    const entry15 = CreateDatabaseRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.labels[entry15.key] = entry15.value;
                    }
                    break;
                case 16:
                    message.backupConfig = BackupConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseCreateDatabaseRequest,
        };
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.storageConfig !== undefined &&
            object.storageConfig !== null) {
            message.storageConfig = StorageConfig.fromJSON(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
        }
        if (object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null) {
            message.zonalDatabase = ZonalDatabase.fromJSON(object.zonalDatabase);
        }
        else {
            message.zonalDatabase = undefined;
        }
        if (object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null) {
            message.regionalDatabase = RegionalDatabase.fromJSON(object.regionalDatabase);
        }
        else {
            message.regionalDatabase = undefined;
        }
        if (object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null) {
            message.dedicatedDatabase = DedicatedDatabase.fromJSON(object.dedicatedDatabase);
        }
        else {
            message.dedicatedDatabase = undefined;
        }
        if (object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null) {
            message.serverlessDatabase = ServerlessDatabase.fromJSON(object.serverlessDatabase);
        }
        else {
            message.serverlessDatabase = undefined;
        }
        if (object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null) {
            message.assignPublicIps = Boolean(object.assignPublicIps);
        }
        else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = String(object.locationId);
        }
        else {
            message.locationId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.backupConfig !== undefined && object.backupConfig !== null) {
            message.backupConfig = BackupConfig.fromJSON(object.backupConfig);
        }
        else {
            message.backupConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
        }
        else {
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
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDatabaseRequest,
        };
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.storageConfig !== undefined &&
            object.storageConfig !== null) {
            message.storageConfig = StorageConfig.fromPartial(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
        }
        if (object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null) {
            message.zonalDatabase = ZonalDatabase.fromPartial(object.zonalDatabase);
        }
        else {
            message.zonalDatabase = undefined;
        }
        if (object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null) {
            message.regionalDatabase = RegionalDatabase.fromPartial(object.regionalDatabase);
        }
        else {
            message.regionalDatabase = undefined;
        }
        if (object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null) {
            message.dedicatedDatabase = DedicatedDatabase.fromPartial(object.dedicatedDatabase);
        }
        else {
            message.dedicatedDatabase = undefined;
        }
        if (object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null) {
            message.serverlessDatabase = ServerlessDatabase.fromPartial(object.serverlessDatabase);
        }
        else {
            message.serverlessDatabase = undefined;
        }
        if (object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null) {
            message.assignPublicIps = object.assignPublicIps;
        }
        else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = object.locationId;
        }
        else {
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
            message.backupConfig = BackupConfig.fromPartial(object.backupConfig);
        }
        else {
            message.backupConfig = undefined;
        }
        return message;
    },
};
const baseCreateDatabaseRequest_LabelsEntry = { key: '', value: '' };
export const CreateDatabaseRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseRequest_LabelsEntry,
        };
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
        const message = {
            ...baseCreateDatabaseRequest_LabelsEntry,
        };
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
        const message = {
            ...baseCreateDatabaseRequest_LabelsEntry,
        };
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
const baseCreateDatabaseMetadata = { databaseId: '', databaseName: '' };
export const CreateDatabaseMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseCreateDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseUpdateDatabaseRequest = {
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
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
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
            StorageConfig.encode(message.storageConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(74).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(82).string(v);
        }
        if (message.zonalDatabase !== undefined) {
            ZonalDatabase.encode(message.zonalDatabase, writer.uint32(90).fork()).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            RegionalDatabase.encode(message.regionalDatabase, writer.uint32(98).fork()).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(122).fork()).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(130).fork()).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(104).bool(message.assignPublicIps);
        }
        if (message.locationId !== '') {
            writer.uint32(114).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateDatabaseRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(138).fork()).ldelim();
        });
        if (message.backupConfig !== undefined) {
            BackupConfig.encode(message.backupConfig, writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatabaseRequest,
        };
        message.subnetIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
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
                    message.storageConfig = StorageConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.networkId = reader.string();
                    break;
                case 10:
                    message.subnetIds.push(reader.string());
                    break;
                case 11:
                    message.zonalDatabase = ZonalDatabase.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.regionalDatabase = RegionalDatabase.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.dedicatedDatabase = DedicatedDatabase.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.serverlessDatabase = ServerlessDatabase.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.assignPublicIps = reader.bool();
                    break;
                case 14:
                    message.locationId = reader.string();
                    break;
                case 17:
                    const entry17 = UpdateDatabaseRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry17.value !== undefined) {
                        message.labels[entry17.key] = entry17.value;
                    }
                    break;
                case 18:
                    message.backupConfig = BackupConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseUpdateDatabaseRequest,
        };
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
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
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.storageConfig !== undefined &&
            object.storageConfig !== null) {
            message.storageConfig = StorageConfig.fromJSON(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
        }
        if (object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null) {
            message.zonalDatabase = ZonalDatabase.fromJSON(object.zonalDatabase);
        }
        else {
            message.zonalDatabase = undefined;
        }
        if (object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null) {
            message.regionalDatabase = RegionalDatabase.fromJSON(object.regionalDatabase);
        }
        else {
            message.regionalDatabase = undefined;
        }
        if (object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null) {
            message.dedicatedDatabase = DedicatedDatabase.fromJSON(object.dedicatedDatabase);
        }
        else {
            message.dedicatedDatabase = undefined;
        }
        if (object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null) {
            message.serverlessDatabase = ServerlessDatabase.fromJSON(object.serverlessDatabase);
        }
        else {
            message.serverlessDatabase = undefined;
        }
        if (object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null) {
            message.assignPublicIps = Boolean(object.assignPublicIps);
        }
        else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = String(object.locationId);
        }
        else {
            message.locationId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.backupConfig !== undefined && object.backupConfig !== null) {
            message.backupConfig = BackupConfig.fromJSON(object.backupConfig);
        }
        else {
            message.backupConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
        }
        else {
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
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateDatabaseRequest,
        };
        message.subnetIds = [];
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
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
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.storageConfig !== undefined &&
            object.storageConfig !== null) {
            message.storageConfig = StorageConfig.fromPartial(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
        }
        if (object.zonalDatabase !== undefined &&
            object.zonalDatabase !== null) {
            message.zonalDatabase = ZonalDatabase.fromPartial(object.zonalDatabase);
        }
        else {
            message.zonalDatabase = undefined;
        }
        if (object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null) {
            message.regionalDatabase = RegionalDatabase.fromPartial(object.regionalDatabase);
        }
        else {
            message.regionalDatabase = undefined;
        }
        if (object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null) {
            message.dedicatedDatabase = DedicatedDatabase.fromPartial(object.dedicatedDatabase);
        }
        else {
            message.dedicatedDatabase = undefined;
        }
        if (object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null) {
            message.serverlessDatabase = ServerlessDatabase.fromPartial(object.serverlessDatabase);
        }
        else {
            message.serverlessDatabase = undefined;
        }
        if (object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null) {
            message.assignPublicIps = object.assignPublicIps;
        }
        else {
            message.assignPublicIps = false;
        }
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = object.locationId;
        }
        else {
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
            message.backupConfig = BackupConfig.fromPartial(object.backupConfig);
        }
        else {
            message.backupConfig = undefined;
        }
        return message;
    },
};
const baseUpdateDatabaseRequest_LabelsEntry = { key: '', value: '' };
export const UpdateDatabaseRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatabaseRequest_LabelsEntry,
        };
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
        const message = {
            ...baseUpdateDatabaseRequest_LabelsEntry,
        };
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
        const message = {
            ...baseUpdateDatabaseRequest_LabelsEntry,
        };
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
const baseUpdateDatabaseMetadata = { databaseId: '', databaseName: '' };
export const UpdateDatabaseMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatabaseMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseDeleteDatabaseRequest = { databaseId: '' };
export const DeleteDatabaseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDeleteDatabaseRequest,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDatabaseRequest,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        return message;
    },
};
const baseDeleteDatabaseMetadata = { databaseId: '', databaseName: '' };
export const DeleteDatabaseMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDeleteDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDatabaseMetadata,
        };
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
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
        requestSerialize: (value) => Buffer.from(GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Database.encode(value).finish()),
        responseDeserialize: (value) => Database.decode(value),
    },
    /** Retrieves a list of databases. */
    list: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDatabasesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDatabasesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDatabasesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDatabasesResponse.decode(value),
    },
    /** Creates a new database. */
    create: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Modifies the specified database. */
    update: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Starts the specified database. */
    start: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StartDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => StartDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Stops the specified database. */
    stop: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StopDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => StopDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified database. */
    delete: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Restores the specified backup */
    restore: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Restore',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RestoreBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => RestoreBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    backup: {
        path: '/yandex.cloud.ydb.v1.DatabaseService/Backup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(BackupDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => BackupDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const DatabaseServiceClient = makeGenericClientConstructor(DatabaseServiceService, 'yandex.cloud.ydb.v1.DatabaseService');
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
