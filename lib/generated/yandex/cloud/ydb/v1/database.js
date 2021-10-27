"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageOption = exports.StorageConfig = exports.ScalePolicy_FixedScale = exports.ScalePolicy = exports.RegionalDatabase = exports.ZonalDatabase = exports.ServerlessDatabase = exports.DedicatedDatabase = exports.MonitoringConfig = exports.Alert = exports.NotificationChannel = exports.AlertParameter_LabelListParameterValue = exports.AlertParameter_TextListParameterValue = exports.AlertParameter_TextParameterValue = exports.AlertParameter_IntegerParameterValue = exports.AlertParameter_DoubleParameterValue = exports.AlertParameter = exports.Database_LabelsEntry = exports.Database = exports.database_StatusToJSON = exports.database_StatusFromJSON = exports.Database_Status = exports.alertEvaluationStatusToJSON = exports.alertEvaluationStatusFromJSON = exports.AlertEvaluationStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const backup_1 = require("../../../../yandex/cloud/ydb/v1/backup");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ydb.v1';
var AlertEvaluationStatus;
(function (AlertEvaluationStatus) {
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_UNSPECIFIED"] = 0] = "ALERT_EVALUATION_STATUS_UNSPECIFIED";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_OK"] = 1] = "ALERT_EVALUATION_STATUS_OK";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_NO_DATA"] = 2] = "ALERT_EVALUATION_STATUS_NO_DATA";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_ERROR"] = 3] = "ALERT_EVALUATION_STATUS_ERROR";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_ALARM"] = 4] = "ALERT_EVALUATION_STATUS_ALARM";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_WARN"] = 5] = "ALERT_EVALUATION_STATUS_WARN";
    AlertEvaluationStatus[AlertEvaluationStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AlertEvaluationStatus = exports.AlertEvaluationStatus || (exports.AlertEvaluationStatus = {}));
function alertEvaluationStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'ALERT_EVALUATION_STATUS_UNSPECIFIED':
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED;
        case 1:
        case 'ALERT_EVALUATION_STATUS_OK':
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK;
        case 2:
        case 'ALERT_EVALUATION_STATUS_NO_DATA':
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA;
        case 3:
        case 'ALERT_EVALUATION_STATUS_ERROR':
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR;
        case 4:
        case 'ALERT_EVALUATION_STATUS_ALARM':
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM;
        case 5:
        case 'ALERT_EVALUATION_STATUS_WARN':
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AlertEvaluationStatus.UNRECOGNIZED;
    }
}
exports.alertEvaluationStatusFromJSON = alertEvaluationStatusFromJSON;
function alertEvaluationStatusToJSON(object) {
    switch (object) {
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED:
            return 'ALERT_EVALUATION_STATUS_UNSPECIFIED';
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK:
            return 'ALERT_EVALUATION_STATUS_OK';
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA:
            return 'ALERT_EVALUATION_STATUS_NO_DATA';
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR:
            return 'ALERT_EVALUATION_STATUS_ERROR';
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM:
            return 'ALERT_EVALUATION_STATUS_ALARM';
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN:
            return 'ALERT_EVALUATION_STATUS_WARN';
        default:
            return 'UNKNOWN';
    }
}
exports.alertEvaluationStatusToJSON = alertEvaluationStatusToJSON;
var Database_Status;
(function (Database_Status) {
    Database_Status[Database_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Database_Status[Database_Status["PROVISIONING"] = 1] = "PROVISIONING";
    Database_Status[Database_Status["RUNNING"] = 2] = "RUNNING";
    Database_Status[Database_Status["UPDATING"] = 4] = "UPDATING";
    Database_Status[Database_Status["ERROR"] = 5] = "ERROR";
    Database_Status[Database_Status["DELETING"] = 6] = "DELETING";
    Database_Status[Database_Status["STARTING"] = 7] = "STARTING";
    Database_Status[Database_Status["STOPPED"] = 8] = "STOPPED";
    Database_Status[Database_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Database_Status = exports.Database_Status || (exports.Database_Status = {}));
function database_StatusFromJSON(object) {
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
exports.database_StatusFromJSON = database_StatusFromJSON;
function database_StatusToJSON(object) {
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
exports.database_StatusToJSON = database_StatusToJSON;
const baseDatabase = {
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
exports.Database = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
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
            exports.StorageConfig.encode(message.storageConfig, writer.uint32(82).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(98).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(106).string(v);
        }
        if (message.zonalDatabase !== undefined) {
            exports.ZonalDatabase.encode(message.zonalDatabase, writer.uint32(114).fork()).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            exports.RegionalDatabase.encode(message.regionalDatabase, writer.uint32(122).fork()).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            exports.DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(146).fork()).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            exports.ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(154).fork()).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(128).bool(message.assignPublicIps);
        }
        if (message.locationId !== '') {
            writer.uint32(138).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Database_LabelsEntry.encode({ key: key, value }, writer.uint32(162).fork()).ldelim();
        });
        if (message.backupConfig !== undefined) {
            backup_1.BackupConfig.encode(message.backupConfig, writer.uint32(170).fork()).ldelim();
        }
        if (message.documentApiEndpoint !== '') {
            writer.uint32(178).string(message.documentApiEndpoint);
        }
        if (message.kinesisApiEndpoint !== '') {
            writer.uint32(186).string(message.kinesisApiEndpoint);
        }
        if (message.monitoringConfig !== undefined) {
            exports.MonitoringConfig.encode(message.monitoringConfig, writer.uint32(194).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatabase };
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.endpoint = reader.string();
                    break;
                case 9:
                    message.resourcePresetId = reader.string();
                    break;
                case 10:
                    message.storageConfig = exports.StorageConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.networkId = reader.string();
                    break;
                case 13:
                    message.subnetIds.push(reader.string());
                    break;
                case 14:
                    message.zonalDatabase = exports.ZonalDatabase.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.regionalDatabase = exports.RegionalDatabase.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.dedicatedDatabase = exports.DedicatedDatabase.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.serverlessDatabase = exports.ServerlessDatabase.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.assignPublicIps = reader.bool();
                    break;
                case 17:
                    message.locationId = reader.string();
                    break;
                case 20:
                    const entry20 = exports.Database_LabelsEntry.decode(reader, reader.uint32());
                    if (entry20.value !== undefined) {
                        message.labels[entry20.key] = entry20.value;
                    }
                    break;
                case 21:
                    message.backupConfig = backup_1.BackupConfig.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.documentApiEndpoint = reader.string();
                    break;
                case 23:
                    message.kinesisApiEndpoint = reader.string();
                    break;
                case 24:
                    message.monitoringConfig = exports.MonitoringConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDatabase };
        message.subnetIds = [];
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
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
        if (object.status !== undefined && object.status !== null) {
            message.status = database_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = String(object.endpoint);
        }
        else {
            message.endpoint = '';
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
            message.storageConfig = exports.StorageConfig.fromJSON(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromJSON(object.scalePolicy);
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
            message.zonalDatabase = exports.ZonalDatabase.fromJSON(object.zonalDatabase);
        }
        else {
            message.zonalDatabase = undefined;
        }
        if (object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null) {
            message.regionalDatabase = exports.RegionalDatabase.fromJSON(object.regionalDatabase);
        }
        else {
            message.regionalDatabase = undefined;
        }
        if (object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null) {
            message.dedicatedDatabase = exports.DedicatedDatabase.fromJSON(object.dedicatedDatabase);
        }
        else {
            message.dedicatedDatabase = undefined;
        }
        if (object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null) {
            message.serverlessDatabase = exports.ServerlessDatabase.fromJSON(object.serverlessDatabase);
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
            message.backupConfig = backup_1.BackupConfig.fromJSON(object.backupConfig);
        }
        else {
            message.backupConfig = undefined;
        }
        if (object.documentApiEndpoint !== undefined &&
            object.documentApiEndpoint !== null) {
            message.documentApiEndpoint = String(object.documentApiEndpoint);
        }
        else {
            message.documentApiEndpoint = '';
        }
        if (object.kinesisApiEndpoint !== undefined &&
            object.kinesisApiEndpoint !== null) {
            message.kinesisApiEndpoint = String(object.kinesisApiEndpoint);
        }
        else {
            message.kinesisApiEndpoint = '';
        }
        if (object.monitoringConfig !== undefined &&
            object.monitoringConfig !== null) {
            message.monitoringConfig = exports.MonitoringConfig.fromJSON(object.monitoringConfig);
        }
        else {
            message.monitoringConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
                ? exports.StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
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
                ? exports.ZonalDatabase.toJSON(message.zonalDatabase)
                : undefined);
        message.regionalDatabase !== undefined &&
            (obj.regionalDatabase = message.regionalDatabase
                ? exports.RegionalDatabase.toJSON(message.regionalDatabase)
                : undefined);
        message.dedicatedDatabase !== undefined &&
            (obj.dedicatedDatabase = message.dedicatedDatabase
                ? exports.DedicatedDatabase.toJSON(message.dedicatedDatabase)
                : undefined);
        message.serverlessDatabase !== undefined &&
            (obj.serverlessDatabase = message.serverlessDatabase
                ? exports.ServerlessDatabase.toJSON(message.serverlessDatabase)
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
                ? backup_1.BackupConfig.toJSON(message.backupConfig)
                : undefined);
        message.documentApiEndpoint !== undefined &&
            (obj.documentApiEndpoint = message.documentApiEndpoint);
        message.kinesisApiEndpoint !== undefined &&
            (obj.kinesisApiEndpoint = message.kinesisApiEndpoint);
        message.monitoringConfig !== undefined &&
            (obj.monitoringConfig = message.monitoringConfig
                ? exports.MonitoringConfig.toJSON(message.monitoringConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDatabase };
        message.subnetIds = [];
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = object.endpoint;
        }
        else {
            message.endpoint = '';
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
            message.storageConfig = exports.StorageConfig.fromPartial(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromPartial(object.scalePolicy);
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
            message.zonalDatabase = exports.ZonalDatabase.fromPartial(object.zonalDatabase);
        }
        else {
            message.zonalDatabase = undefined;
        }
        if (object.regionalDatabase !== undefined &&
            object.regionalDatabase !== null) {
            message.regionalDatabase = exports.RegionalDatabase.fromPartial(object.regionalDatabase);
        }
        else {
            message.regionalDatabase = undefined;
        }
        if (object.dedicatedDatabase !== undefined &&
            object.dedicatedDatabase !== null) {
            message.dedicatedDatabase = exports.DedicatedDatabase.fromPartial(object.dedicatedDatabase);
        }
        else {
            message.dedicatedDatabase = undefined;
        }
        if (object.serverlessDatabase !== undefined &&
            object.serverlessDatabase !== null) {
            message.serverlessDatabase = exports.ServerlessDatabase.fromPartial(object.serverlessDatabase);
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
            message.backupConfig = backup_1.BackupConfig.fromPartial(object.backupConfig);
        }
        else {
            message.backupConfig = undefined;
        }
        if (object.documentApiEndpoint !== undefined &&
            object.documentApiEndpoint !== null) {
            message.documentApiEndpoint = object.documentApiEndpoint;
        }
        else {
            message.documentApiEndpoint = '';
        }
        if (object.kinesisApiEndpoint !== undefined &&
            object.kinesisApiEndpoint !== null) {
            message.kinesisApiEndpoint = object.kinesisApiEndpoint;
        }
        else {
            message.kinesisApiEndpoint = '';
        }
        if (object.monitoringConfig !== undefined &&
            object.monitoringConfig !== null) {
            message.monitoringConfig = exports.MonitoringConfig.fromPartial(object.monitoringConfig);
        }
        else {
            message.monitoringConfig = undefined;
        }
        return message;
    },
};
const baseDatabase_LabelsEntry = { key: '', value: '' };
exports.Database_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatabase_LabelsEntry };
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
        const message = { ...baseDatabase_LabelsEntry };
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
        const message = { ...baseDatabase_LabelsEntry };
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
const baseAlertParameter = {};
exports.AlertParameter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.doubleParameterValue !== undefined) {
            exports.AlertParameter_DoubleParameterValue.encode(message.doubleParameterValue, writer.uint32(10).fork()).ldelim();
        }
        if (message.integerParameterValue !== undefined) {
            exports.AlertParameter_IntegerParameterValue.encode(message.integerParameterValue, writer.uint32(18).fork()).ldelim();
        }
        if (message.textParameterValue !== undefined) {
            exports.AlertParameter_TextParameterValue.encode(message.textParameterValue, writer.uint32(26).fork()).ldelim();
        }
        if (message.textListParameterValue !== undefined) {
            exports.AlertParameter_TextListParameterValue.encode(message.textListParameterValue, writer.uint32(34).fork()).ldelim();
        }
        if (message.labelListParameterValue !== undefined) {
            exports.AlertParameter_LabelListParameterValue.encode(message.labelListParameterValue, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAlertParameter };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.doubleParameterValue =
                        exports.AlertParameter_DoubleParameterValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.integerParameterValue =
                        exports.AlertParameter_IntegerParameterValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.textParameterValue =
                        exports.AlertParameter_TextParameterValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.textListParameterValue =
                        exports.AlertParameter_TextListParameterValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.labelListParameterValue =
                        exports.AlertParameter_LabelListParameterValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAlertParameter };
        if (object.doubleParameterValue !== undefined &&
            object.doubleParameterValue !== null) {
            message.doubleParameterValue =
                exports.AlertParameter_DoubleParameterValue.fromJSON(object.doubleParameterValue);
        }
        else {
            message.doubleParameterValue = undefined;
        }
        if (object.integerParameterValue !== undefined &&
            object.integerParameterValue !== null) {
            message.integerParameterValue =
                exports.AlertParameter_IntegerParameterValue.fromJSON(object.integerParameterValue);
        }
        else {
            message.integerParameterValue = undefined;
        }
        if (object.textParameterValue !== undefined &&
            object.textParameterValue !== null) {
            message.textParameterValue =
                exports.AlertParameter_TextParameterValue.fromJSON(object.textParameterValue);
        }
        else {
            message.textParameterValue = undefined;
        }
        if (object.textListParameterValue !== undefined &&
            object.textListParameterValue !== null) {
            message.textListParameterValue =
                exports.AlertParameter_TextListParameterValue.fromJSON(object.textListParameterValue);
        }
        else {
            message.textListParameterValue = undefined;
        }
        if (object.labelListParameterValue !== undefined &&
            object.labelListParameterValue !== null) {
            message.labelListParameterValue =
                exports.AlertParameter_LabelListParameterValue.fromJSON(object.labelListParameterValue);
        }
        else {
            message.labelListParameterValue = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.doubleParameterValue !== undefined &&
            (obj.doubleParameterValue = message.doubleParameterValue
                ? exports.AlertParameter_DoubleParameterValue.toJSON(message.doubleParameterValue)
                : undefined);
        message.integerParameterValue !== undefined &&
            (obj.integerParameterValue = message.integerParameterValue
                ? exports.AlertParameter_IntegerParameterValue.toJSON(message.integerParameterValue)
                : undefined);
        message.textParameterValue !== undefined &&
            (obj.textParameterValue = message.textParameterValue
                ? exports.AlertParameter_TextParameterValue.toJSON(message.textParameterValue)
                : undefined);
        message.textListParameterValue !== undefined &&
            (obj.textListParameterValue = message.textListParameterValue
                ? exports.AlertParameter_TextListParameterValue.toJSON(message.textListParameterValue)
                : undefined);
        message.labelListParameterValue !== undefined &&
            (obj.labelListParameterValue = message.labelListParameterValue
                ? exports.AlertParameter_LabelListParameterValue.toJSON(message.labelListParameterValue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAlertParameter };
        if (object.doubleParameterValue !== undefined &&
            object.doubleParameterValue !== null) {
            message.doubleParameterValue =
                exports.AlertParameter_DoubleParameterValue.fromPartial(object.doubleParameterValue);
        }
        else {
            message.doubleParameterValue = undefined;
        }
        if (object.integerParameterValue !== undefined &&
            object.integerParameterValue !== null) {
            message.integerParameterValue =
                exports.AlertParameter_IntegerParameterValue.fromPartial(object.integerParameterValue);
        }
        else {
            message.integerParameterValue = undefined;
        }
        if (object.textParameterValue !== undefined &&
            object.textParameterValue !== null) {
            message.textParameterValue =
                exports.AlertParameter_TextParameterValue.fromPartial(object.textParameterValue);
        }
        else {
            message.textParameterValue = undefined;
        }
        if (object.textListParameterValue !== undefined &&
            object.textListParameterValue !== null) {
            message.textListParameterValue =
                exports.AlertParameter_TextListParameterValue.fromPartial(object.textListParameterValue);
        }
        else {
            message.textListParameterValue = undefined;
        }
        if (object.labelListParameterValue !== undefined &&
            object.labelListParameterValue !== null) {
            message.labelListParameterValue =
                exports.AlertParameter_LabelListParameterValue.fromPartial(object.labelListParameterValue);
        }
        else {
            message.labelListParameterValue = undefined;
        }
        return message;
    },
};
const baseAlertParameter_DoubleParameterValue = { name: '', value: 0 };
exports.AlertParameter_DoubleParameterValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== 0) {
            writer.uint32(17).double(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAlertParameter_DoubleParameterValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
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
            ...baseAlertParameter_DoubleParameterValue,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        else {
            message.value = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAlertParameter_DoubleParameterValue,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = 0;
        }
        return message;
    },
};
const baseAlertParameter_IntegerParameterValue = { name: '', value: 0 };
exports.AlertParameter_IntegerParameterValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAlertParameter_IntegerParameterValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64());
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
            ...baseAlertParameter_IntegerParameterValue,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        else {
            message.value = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAlertParameter_IntegerParameterValue,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = 0;
        }
        return message;
    },
};
const baseAlertParameter_TextParameterValue = { name: '', value: '' };
exports.AlertParameter_TextParameterValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAlertParameter_TextParameterValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            ...baseAlertParameter_TextParameterValue,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
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
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAlertParameter_TextParameterValue,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
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
const baseAlertParameter_TextListParameterValue = {
    name: '',
    values: '',
};
exports.AlertParameter_TextListParameterValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.values) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAlertParameter_TextListParameterValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.values.push(reader.string());
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
            ...baseAlertParameter_TextListParameterValue,
        };
        message.values = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAlertParameter_TextListParameterValue,
        };
        message.values = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};
const baseAlertParameter_LabelListParameterValue = {
    name: '',
    values: '',
};
exports.AlertParameter_LabelListParameterValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.values) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAlertParameter_LabelListParameterValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.values.push(reader.string());
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
            ...baseAlertParameter_LabelListParameterValue,
        };
        message.values = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAlertParameter_LabelListParameterValue,
        };
        message.values = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};
const baseNotificationChannel = {
    notificationChannelId: '',
    notifyAboutStatuses: 0,
    repeateNotifyDelayMs: 0,
};
exports.NotificationChannel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.notificationChannelId !== '') {
            writer.uint32(10).string(message.notificationChannelId);
        }
        writer.uint32(18).fork();
        for (const v of message.notifyAboutStatuses) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.repeateNotifyDelayMs !== 0) {
            writer.uint32(24).int64(message.repeateNotifyDelayMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNotificationChannel };
        message.notifyAboutStatuses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notificationChannelId = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notifyAboutStatuses.push(reader.int32());
                        }
                    }
                    else {
                        message.notifyAboutStatuses.push(reader.int32());
                    }
                    break;
                case 3:
                    message.repeateNotifyDelayMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNotificationChannel };
        message.notifyAboutStatuses = [];
        if (object.notificationChannelId !== undefined &&
            object.notificationChannelId !== null) {
            message.notificationChannelId = String(object.notificationChannelId);
        }
        else {
            message.notificationChannelId = '';
        }
        if (object.notifyAboutStatuses !== undefined &&
            object.notifyAboutStatuses !== null) {
            for (const e of object.notifyAboutStatuses) {
                message.notifyAboutStatuses.push(alertEvaluationStatusFromJSON(e));
            }
        }
        if (object.repeateNotifyDelayMs !== undefined &&
            object.repeateNotifyDelayMs !== null) {
            message.repeateNotifyDelayMs = Number(object.repeateNotifyDelayMs);
        }
        else {
            message.repeateNotifyDelayMs = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.notificationChannelId !== undefined &&
            (obj.notificationChannelId = message.notificationChannelId);
        if (message.notifyAboutStatuses) {
            obj.notifyAboutStatuses = message.notifyAboutStatuses.map((e) => alertEvaluationStatusToJSON(e));
        }
        else {
            obj.notifyAboutStatuses = [];
        }
        message.repeateNotifyDelayMs !== undefined &&
            (obj.repeateNotifyDelayMs = message.repeateNotifyDelayMs);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNotificationChannel };
        message.notifyAboutStatuses = [];
        if (object.notificationChannelId !== undefined &&
            object.notificationChannelId !== null) {
            message.notificationChannelId = object.notificationChannelId;
        }
        else {
            message.notificationChannelId = '';
        }
        if (object.notifyAboutStatuses !== undefined &&
            object.notifyAboutStatuses !== null) {
            for (const e of object.notifyAboutStatuses) {
                message.notifyAboutStatuses.push(e);
            }
        }
        if (object.repeateNotifyDelayMs !== undefined &&
            object.repeateNotifyDelayMs !== null) {
            message.repeateNotifyDelayMs = object.repeateNotifyDelayMs;
        }
        else {
            message.repeateNotifyDelayMs = 0;
        }
        return message;
    },
};
const baseAlert = {
    alertId: '',
    alertTemplateId: '',
    name: '',
    description: '',
};
exports.Alert = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alertId !== '') {
            writer.uint32(10).string(message.alertId);
        }
        if (message.alertTemplateId !== '') {
            writer.uint32(18).string(message.alertTemplateId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.notificationChannels) {
            exports.NotificationChannel.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.alertParameters) {
            exports.AlertParameter.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.alertThresholds) {
            exports.AlertParameter.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAlert };
        message.notificationChannels = [];
        message.alertParameters = [];
        message.alertThresholds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alertId = reader.string();
                    break;
                case 2:
                    message.alertTemplateId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.notificationChannels.push(exports.NotificationChannel.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.alertParameters.push(exports.AlertParameter.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.alertThresholds.push(exports.AlertParameter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAlert };
        message.notificationChannels = [];
        message.alertParameters = [];
        message.alertThresholds = [];
        if (object.alertId !== undefined && object.alertId !== null) {
            message.alertId = String(object.alertId);
        }
        else {
            message.alertId = '';
        }
        if (object.alertTemplateId !== undefined &&
            object.alertTemplateId !== null) {
            message.alertTemplateId = String(object.alertTemplateId);
        }
        else {
            message.alertTemplateId = '';
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
        if (object.notificationChannels !== undefined &&
            object.notificationChannels !== null) {
            for (const e of object.notificationChannels) {
                message.notificationChannels.push(exports.NotificationChannel.fromJSON(e));
            }
        }
        if (object.alertParameters !== undefined &&
            object.alertParameters !== null) {
            for (const e of object.alertParameters) {
                message.alertParameters.push(exports.AlertParameter.fromJSON(e));
            }
        }
        if (object.alertThresholds !== undefined &&
            object.alertThresholds !== null) {
            for (const e of object.alertThresholds) {
                message.alertThresholds.push(exports.AlertParameter.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alertId !== undefined && (obj.alertId = message.alertId);
        message.alertTemplateId !== undefined &&
            (obj.alertTemplateId = message.alertTemplateId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.notificationChannels) {
            obj.notificationChannels = message.notificationChannels.map((e) => e ? exports.NotificationChannel.toJSON(e) : undefined);
        }
        else {
            obj.notificationChannels = [];
        }
        if (message.alertParameters) {
            obj.alertParameters = message.alertParameters.map((e) => e ? exports.AlertParameter.toJSON(e) : undefined);
        }
        else {
            obj.alertParameters = [];
        }
        if (message.alertThresholds) {
            obj.alertThresholds = message.alertThresholds.map((e) => e ? exports.AlertParameter.toJSON(e) : undefined);
        }
        else {
            obj.alertThresholds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAlert };
        message.notificationChannels = [];
        message.alertParameters = [];
        message.alertThresholds = [];
        if (object.alertId !== undefined && object.alertId !== null) {
            message.alertId = object.alertId;
        }
        else {
            message.alertId = '';
        }
        if (object.alertTemplateId !== undefined &&
            object.alertTemplateId !== null) {
            message.alertTemplateId = object.alertTemplateId;
        }
        else {
            message.alertTemplateId = '';
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
        if (object.notificationChannels !== undefined &&
            object.notificationChannels !== null) {
            for (const e of object.notificationChannels) {
                message.notificationChannels.push(exports.NotificationChannel.fromPartial(e));
            }
        }
        if (object.alertParameters !== undefined &&
            object.alertParameters !== null) {
            for (const e of object.alertParameters) {
                message.alertParameters.push(exports.AlertParameter.fromPartial(e));
            }
        }
        if (object.alertThresholds !== undefined &&
            object.alertThresholds !== null) {
            for (const e of object.alertThresholds) {
                message.alertThresholds.push(exports.AlertParameter.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMonitoringConfig = {};
exports.MonitoringConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alerts) {
            exports.Alert.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMonitoringConfig };
        message.alerts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alerts.push(exports.Alert.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMonitoringConfig };
        message.alerts = [];
        if (object.alerts !== undefined && object.alerts !== null) {
            for (const e of object.alerts) {
                message.alerts.push(exports.Alert.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alerts) {
            obj.alerts = message.alerts.map((e) => e ? exports.Alert.toJSON(e) : undefined);
        }
        else {
            obj.alerts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMonitoringConfig };
        message.alerts = [];
        if (object.alerts !== undefined && object.alerts !== null) {
            for (const e of object.alerts) {
                message.alerts.push(exports.Alert.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDedicatedDatabase = {
    resourcePresetId: '',
    networkId: '',
    subnetIds: '',
    assignPublicIps: false,
};
exports.DedicatedDatabase = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            exports.StorageConfig.encode(message.storageConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(26).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(34).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v);
        }
        if (message.assignPublicIps === true) {
            writer.uint32(48).bool(message.assignPublicIps);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDedicatedDatabase };
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.storageConfig = exports.StorageConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = { ...baseDedicatedDatabase };
        message.subnetIds = [];
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.storageConfig !== undefined &&
            object.storageConfig !== null) {
            message.storageConfig = exports.StorageConfig.fromJSON(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromJSON(object.scalePolicy);
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
        if (object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null) {
            message.assignPublicIps = Boolean(object.assignPublicIps);
        }
        else {
            message.assignPublicIps = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? exports.StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDedicatedDatabase };
        message.subnetIds = [];
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.storageConfig !== undefined &&
            object.storageConfig !== null) {
            message.storageConfig = exports.StorageConfig.fromPartial(object.storageConfig);
        }
        else {
            message.storageConfig = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromPartial(object.scalePolicy);
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
        if (object.assignPublicIps !== undefined &&
            object.assignPublicIps !== null) {
            message.assignPublicIps = object.assignPublicIps;
        }
        else {
            message.assignPublicIps = false;
        }
        return message;
    },
};
const baseServerlessDatabase = {
    throttlingRcuLimit: 0,
    storageSizeLimit: 0,
    enableThrottlingRcuLimit: false,
    provisionedRcuLimit: 0,
};
exports.ServerlessDatabase = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.throttlingRcuLimit !== 0) {
            writer.uint32(8).int64(message.throttlingRcuLimit);
        }
        if (message.storageSizeLimit !== 0) {
            writer.uint32(16).int64(message.storageSizeLimit);
        }
        if (message.enableThrottlingRcuLimit === true) {
            writer.uint32(24).bool(message.enableThrottlingRcuLimit);
        }
        if (message.provisionedRcuLimit !== 0) {
            writer.uint32(32).int64(message.provisionedRcuLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServerlessDatabase };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.throttlingRcuLimit = longToNumber(reader.int64());
                    break;
                case 2:
                    message.storageSizeLimit = longToNumber(reader.int64());
                    break;
                case 3:
                    message.enableThrottlingRcuLimit = reader.bool();
                    break;
                case 4:
                    message.provisionedRcuLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseServerlessDatabase };
        if (object.throttlingRcuLimit !== undefined &&
            object.throttlingRcuLimit !== null) {
            message.throttlingRcuLimit = Number(object.throttlingRcuLimit);
        }
        else {
            message.throttlingRcuLimit = 0;
        }
        if (object.storageSizeLimit !== undefined &&
            object.storageSizeLimit !== null) {
            message.storageSizeLimit = Number(object.storageSizeLimit);
        }
        else {
            message.storageSizeLimit = 0;
        }
        if (object.enableThrottlingRcuLimit !== undefined &&
            object.enableThrottlingRcuLimit !== null) {
            message.enableThrottlingRcuLimit = Boolean(object.enableThrottlingRcuLimit);
        }
        else {
            message.enableThrottlingRcuLimit = false;
        }
        if (object.provisionedRcuLimit !== undefined &&
            object.provisionedRcuLimit !== null) {
            message.provisionedRcuLimit = Number(object.provisionedRcuLimit);
        }
        else {
            message.provisionedRcuLimit = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.throttlingRcuLimit !== undefined &&
            (obj.throttlingRcuLimit = message.throttlingRcuLimit);
        message.storageSizeLimit !== undefined &&
            (obj.storageSizeLimit = message.storageSizeLimit);
        message.enableThrottlingRcuLimit !== undefined &&
            (obj.enableThrottlingRcuLimit = message.enableThrottlingRcuLimit);
        message.provisionedRcuLimit !== undefined &&
            (obj.provisionedRcuLimit = message.provisionedRcuLimit);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseServerlessDatabase };
        if (object.throttlingRcuLimit !== undefined &&
            object.throttlingRcuLimit !== null) {
            message.throttlingRcuLimit = object.throttlingRcuLimit;
        }
        else {
            message.throttlingRcuLimit = 0;
        }
        if (object.storageSizeLimit !== undefined &&
            object.storageSizeLimit !== null) {
            message.storageSizeLimit = object.storageSizeLimit;
        }
        else {
            message.storageSizeLimit = 0;
        }
        if (object.enableThrottlingRcuLimit !== undefined &&
            object.enableThrottlingRcuLimit !== null) {
            message.enableThrottlingRcuLimit = object.enableThrottlingRcuLimit;
        }
        else {
            message.enableThrottlingRcuLimit = false;
        }
        if (object.provisionedRcuLimit !== undefined &&
            object.provisionedRcuLimit !== null) {
            message.provisionedRcuLimit = object.provisionedRcuLimit;
        }
        else {
            message.provisionedRcuLimit = 0;
        }
        return message;
    },
};
const baseZonalDatabase = { zoneId: '' };
exports.ZonalDatabase = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZonalDatabase };
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
    fromJSON(object) {
        const message = { ...baseZonalDatabase };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseZonalDatabase };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        return message;
    },
};
const baseRegionalDatabase = { regionId: '' };
exports.RegionalDatabase = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.regionId !== '') {
            writer.uint32(10).string(message.regionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegionalDatabase };
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
    fromJSON(object) {
        const message = { ...baseRegionalDatabase };
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        }
        else {
            message.regionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRegionalDatabase };
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        }
        else {
            message.regionId = '';
        }
        return message;
    },
};
const baseScalePolicy = {};
exports.ScalePolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        return message;
    },
};
const baseScalePolicy_FixedScale = { size: 0 };
exports.ScalePolicy_FixedScale = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
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
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = message.size);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        return message;
    },
};
const baseStorageConfig = { storageSizeLimit: 0 };
exports.StorageConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.storageOptions) {
            exports.StorageOption.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.storageSizeLimit !== 0) {
            writer.uint32(16).int64(message.storageSizeLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageConfig };
        message.storageOptions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageOptions.push(exports.StorageOption.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.storageSizeLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStorageConfig };
        message.storageOptions = [];
        if (object.storageOptions !== undefined &&
            object.storageOptions !== null) {
            for (const e of object.storageOptions) {
                message.storageOptions.push(exports.StorageOption.fromJSON(e));
            }
        }
        if (object.storageSizeLimit !== undefined &&
            object.storageSizeLimit !== null) {
            message.storageSizeLimit = Number(object.storageSizeLimit);
        }
        else {
            message.storageSizeLimit = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.storageOptions) {
            obj.storageOptions = message.storageOptions.map((e) => e ? exports.StorageOption.toJSON(e) : undefined);
        }
        else {
            obj.storageOptions = [];
        }
        message.storageSizeLimit !== undefined &&
            (obj.storageSizeLimit = message.storageSizeLimit);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStorageConfig };
        message.storageOptions = [];
        if (object.storageOptions !== undefined &&
            object.storageOptions !== null) {
            for (const e of object.storageOptions) {
                message.storageOptions.push(exports.StorageOption.fromPartial(e));
            }
        }
        if (object.storageSizeLimit !== undefined &&
            object.storageSizeLimit !== null) {
            message.storageSizeLimit = object.storageSizeLimit;
        }
        else {
            message.storageSizeLimit = 0;
        }
        return message;
    },
};
const baseStorageOption = { storageTypeId: '', groupCount: 0 };
exports.StorageOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storageTypeId !== '') {
            writer.uint32(10).string(message.storageTypeId);
        }
        if (message.groupCount !== 0) {
            writer.uint32(16).int64(message.groupCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageOption };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypeId = reader.string();
                    break;
                case 2:
                    message.groupCount = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStorageOption };
        if (object.storageTypeId !== undefined &&
            object.storageTypeId !== null) {
            message.storageTypeId = String(object.storageTypeId);
        }
        else {
            message.storageTypeId = '';
        }
        if (object.groupCount !== undefined && object.groupCount !== null) {
            message.groupCount = Number(object.groupCount);
        }
        else {
            message.groupCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storageTypeId !== undefined &&
            (obj.storageTypeId = message.storageTypeId);
        message.groupCount !== undefined &&
            (obj.groupCount = message.groupCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStorageOption };
        if (object.storageTypeId !== undefined &&
            object.storageTypeId !== null) {
            message.storageTypeId = object.storageTypeId;
        }
        else {
            message.storageTypeId = '';
        }
        if (object.groupCount !== undefined && object.groupCount !== null) {
            message.groupCount = object.groupCount;
        }
        else {
            message.groupCount = 0;
        }
        return message;
    },
};
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
    return { seconds, nanos };
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
