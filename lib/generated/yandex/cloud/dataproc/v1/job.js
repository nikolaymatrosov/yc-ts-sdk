"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveJob_ScriptVariablesEntry = exports.HiveJob_PropertiesEntry = exports.HiveJob = exports.QueryList = exports.PysparkJob_PropertiesEntry = exports.PysparkJob = exports.SparkJob_PropertiesEntry = exports.SparkJob = exports.MapreduceJob_PropertiesEntry = exports.MapreduceJob = exports.ApplicationInfo = exports.ApplicationAttempt = exports.Job = exports.job_StatusToJSON = exports.job_StatusFromJSON = exports.Job_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.dataproc.v1';
var Job_Status;
(function (Job_Status) {
    Job_Status[Job_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Job is logged in the database and is waiting for the agent to run it. */
    Job_Status[Job_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** PENDING - Job is acquired by the agent and is in the queue for execution. */
    Job_Status[Job_Status["PENDING"] = 2] = "PENDING";
    /** RUNNING - Job is being run in the cluster. */
    Job_Status[Job_Status["RUNNING"] = 3] = "RUNNING";
    /** ERROR - Job failed to finish the run properly. */
    Job_Status[Job_Status["ERROR"] = 4] = "ERROR";
    /** DONE - Job is finished. */
    Job_Status[Job_Status["DONE"] = 5] = "DONE";
    Job_Status[Job_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Job_Status = exports.Job_Status || (exports.Job_Status = {}));
function job_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Job_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Job_Status.PROVISIONING;
        case 2:
        case 'PENDING':
            return Job_Status.PENDING;
        case 3:
        case 'RUNNING':
            return Job_Status.RUNNING;
        case 4:
        case 'ERROR':
            return Job_Status.ERROR;
        case 5:
        case 'DONE':
            return Job_Status.DONE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Job_Status.UNRECOGNIZED;
    }
}
exports.job_StatusFromJSON = job_StatusFromJSON;
function job_StatusToJSON(object) {
    switch (object) {
        case Job_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Job_Status.PROVISIONING:
            return 'PROVISIONING';
        case Job_Status.PENDING:
            return 'PENDING';
        case Job_Status.RUNNING:
            return 'RUNNING';
        case Job_Status.ERROR:
            return 'ERROR';
        case Job_Status.DONE:
            return 'DONE';
        default:
            return 'UNKNOWN';
    }
}
exports.job_StatusToJSON = job_StatusToJSON;
const baseJob = {
    id: '',
    clusterId: '',
    name: '',
    createdBy: '',
    status: 0,
};
exports.Job = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.createdBy !== '') {
            writer.uint32(98).string(message.createdBy);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.mapreduceJob !== undefined) {
            exports.MapreduceJob.encode(message.mapreduceJob, writer.uint32(66).fork()).ldelim();
        }
        if (message.sparkJob !== undefined) {
            exports.SparkJob.encode(message.sparkJob, writer.uint32(74).fork()).ldelim();
        }
        if (message.pysparkJob !== undefined) {
            exports.PysparkJob.encode(message.pysparkJob, writer.uint32(82).fork()).ldelim();
        }
        if (message.hiveJob !== undefined) {
            exports.HiveJob.encode(message.hiveJob, writer.uint32(90).fork()).ldelim();
        }
        if (message.applicationInfo !== undefined) {
            exports.ApplicationInfo.encode(message.applicationInfo, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJob };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.finishedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 12:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.mapreduceJob = exports.MapreduceJob.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sparkJob = exports.SparkJob.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.pysparkJob = exports.PysparkJob.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.hiveJob = exports.HiveJob.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.applicationInfo = exports.ApplicationInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseJob };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = fromJsonTimestamp(object.startedAt);
        }
        else {
            message.startedAt = undefined;
        }
        if (object.finishedAt !== undefined && object.finishedAt !== null) {
            message.finishedAt = fromJsonTimestamp(object.finishedAt);
        }
        else {
            message.finishedAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.createdBy !== undefined && object.createdBy !== null) {
            message.createdBy = String(object.createdBy);
        }
        else {
            message.createdBy = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = job_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.mapreduceJob !== undefined && object.mapreduceJob !== null) {
            message.mapreduceJob = exports.MapreduceJob.fromJSON(object.mapreduceJob);
        }
        else {
            message.mapreduceJob = undefined;
        }
        if (object.sparkJob !== undefined && object.sparkJob !== null) {
            message.sparkJob = exports.SparkJob.fromJSON(object.sparkJob);
        }
        else {
            message.sparkJob = undefined;
        }
        if (object.pysparkJob !== undefined && object.pysparkJob !== null) {
            message.pysparkJob = exports.PysparkJob.fromJSON(object.pysparkJob);
        }
        else {
            message.pysparkJob = undefined;
        }
        if (object.hiveJob !== undefined && object.hiveJob !== null) {
            message.hiveJob = exports.HiveJob.fromJSON(object.hiveJob);
        }
        else {
            message.hiveJob = undefined;
        }
        if (object.applicationInfo !== undefined &&
            object.applicationInfo !== null) {
            message.applicationInfo = exports.ApplicationInfo.fromJSON(object.applicationInfo);
        }
        else {
            message.applicationInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined &&
            (obj.finishedAt = message.finishedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.status !== undefined &&
            (obj.status = job_StatusToJSON(message.status));
        message.mapreduceJob !== undefined &&
            (obj.mapreduceJob = message.mapreduceJob
                ? exports.MapreduceJob.toJSON(message.mapreduceJob)
                : undefined);
        message.sparkJob !== undefined &&
            (obj.sparkJob = message.sparkJob
                ? exports.SparkJob.toJSON(message.sparkJob)
                : undefined);
        message.pysparkJob !== undefined &&
            (obj.pysparkJob = message.pysparkJob
                ? exports.PysparkJob.toJSON(message.pysparkJob)
                : undefined);
        message.hiveJob !== undefined &&
            (obj.hiveJob = message.hiveJob
                ? exports.HiveJob.toJSON(message.hiveJob)
                : undefined);
        message.applicationInfo !== undefined &&
            (obj.applicationInfo = message.applicationInfo
                ? exports.ApplicationInfo.toJSON(message.applicationInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseJob };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = object.startedAt;
        }
        else {
            message.startedAt = undefined;
        }
        if (object.finishedAt !== undefined && object.finishedAt !== null) {
            message.finishedAt = object.finishedAt;
        }
        else {
            message.finishedAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.createdBy !== undefined && object.createdBy !== null) {
            message.createdBy = object.createdBy;
        }
        else {
            message.createdBy = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.mapreduceJob !== undefined && object.mapreduceJob !== null) {
            message.mapreduceJob = exports.MapreduceJob.fromPartial(object.mapreduceJob);
        }
        else {
            message.mapreduceJob = undefined;
        }
        if (object.sparkJob !== undefined && object.sparkJob !== null) {
            message.sparkJob = exports.SparkJob.fromPartial(object.sparkJob);
        }
        else {
            message.sparkJob = undefined;
        }
        if (object.pysparkJob !== undefined && object.pysparkJob !== null) {
            message.pysparkJob = exports.PysparkJob.fromPartial(object.pysparkJob);
        }
        else {
            message.pysparkJob = undefined;
        }
        if (object.hiveJob !== undefined && object.hiveJob !== null) {
            message.hiveJob = exports.HiveJob.fromPartial(object.hiveJob);
        }
        else {
            message.hiveJob = undefined;
        }
        if (object.applicationInfo !== undefined &&
            object.applicationInfo !== null) {
            message.applicationInfo = exports.ApplicationInfo.fromPartial(object.applicationInfo);
        }
        else {
            message.applicationInfo = undefined;
        }
        return message;
    },
};
const baseApplicationAttempt = { id: '', amContainerId: '' };
exports.ApplicationAttempt = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.amContainerId !== '') {
            writer.uint32(18).string(message.amContainerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplicationAttempt };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.amContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseApplicationAttempt };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.amContainerId !== undefined &&
            object.amContainerId !== null) {
            message.amContainerId = String(object.amContainerId);
        }
        else {
            message.amContainerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.amContainerId !== undefined &&
            (obj.amContainerId = message.amContainerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApplicationAttempt };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.amContainerId !== undefined &&
            object.amContainerId !== null) {
            message.amContainerId = object.amContainerId;
        }
        else {
            message.amContainerId = '';
        }
        return message;
    },
};
const baseApplicationInfo = { id: '' };
exports.ApplicationInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.applicationAttempts) {
            exports.ApplicationAttempt.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplicationInfo };
        message.applicationAttempts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.applicationAttempts.push(exports.ApplicationAttempt.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseApplicationInfo };
        message.applicationAttempts = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.applicationAttempts !== undefined &&
            object.applicationAttempts !== null) {
            for (const e of object.applicationAttempts) {
                message.applicationAttempts.push(exports.ApplicationAttempt.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.applicationAttempts) {
            obj.applicationAttempts = message.applicationAttempts.map((e) => e ? exports.ApplicationAttempt.toJSON(e) : undefined);
        }
        else {
            obj.applicationAttempts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApplicationInfo };
        message.applicationAttempts = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.applicationAttempts !== undefined &&
            object.applicationAttempts !== null) {
            for (const e of object.applicationAttempts) {
                message.applicationAttempts.push(exports.ApplicationAttempt.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMapreduceJob = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
};
exports.MapreduceJob = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.MapreduceJob_PropertiesEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.mainJarFileUri !== undefined) {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== undefined) {
            writer.uint32(58).string(message.mainClass);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMapreduceJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = exports.MapreduceJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMapreduceJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(String(e));
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(String(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null) {
            message.mainJarFileUri = String(object.mainJarFileUri);
        }
        else {
            message.mainJarFileUri = undefined;
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = String(object.mainClass);
        }
        else {
            message.mainClass = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        }
        else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        }
        else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        }
        else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined &&
            (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMapreduceJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(e);
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null) {
            message.mainJarFileUri = object.mainJarFileUri;
        }
        else {
            message.mainJarFileUri = undefined;
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = object.mainClass;
        }
        else {
            message.mainClass = undefined;
        }
        return message;
    },
};
const baseMapreduceJob_PropertiesEntry = { key: '', value: '' };
exports.MapreduceJob_PropertiesEntry = {
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
        const message = {
            ...baseMapreduceJob_PropertiesEntry,
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
            ...baseMapreduceJob_PropertiesEntry,
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
            ...baseMapreduceJob_PropertiesEntry,
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
const baseSparkJob = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainJarFileUri: '',
    mainClass: '',
    packages: '',
    repositories: '',
    excludePackages: '',
};
exports.SparkJob = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.SparkJob_PropertiesEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.mainJarFileUri !== '') {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== '') {
            writer.uint32(58).string(message.mainClass);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSparkJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = exports.SparkJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSparkJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(String(e));
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(String(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null) {
            message.mainJarFileUri = String(object.mainJarFileUri);
        }
        else {
            message.mainJarFileUri = '';
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = String(object.mainClass);
        }
        else {
            message.mainClass = '';
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(String(e));
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(String(e));
            }
        }
        if (object.excludePackages !== undefined &&
            object.excludePackages !== null) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        }
        else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        }
        else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        }
        else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined &&
            (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        }
        else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        }
        else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        }
        else {
            obj.excludePackages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSparkJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(e);
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null) {
            message.mainJarFileUri = object.mainJarFileUri;
        }
        else {
            message.mainJarFileUri = '';
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = object.mainClass;
        }
        else {
            message.mainClass = '';
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(e);
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(e);
            }
        }
        if (object.excludePackages !== undefined &&
            object.excludePackages !== null) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(e);
            }
        }
        return message;
    },
};
const baseSparkJob_PropertiesEntry = { key: '', value: '' };
exports.SparkJob_PropertiesEntry = {
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
        const message = {
            ...baseSparkJob_PropertiesEntry,
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
            ...baseSparkJob_PropertiesEntry,
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
            ...baseSparkJob_PropertiesEntry,
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
const basePysparkJob = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainPythonFileUri: '',
    pythonFileUris: '',
    packages: '',
    repositories: '',
    excludePackages: '',
};
exports.PysparkJob = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.PysparkJob_PropertiesEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.mainPythonFileUri !== '') {
            writer.uint32(50).string(message.mainPythonFileUri);
        }
        for (const v of message.pythonFileUris) {
            writer.uint32(58).string(v);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePysparkJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = exports.PysparkJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainPythonFileUri = reader.string();
                    break;
                case 7:
                    message.pythonFileUris.push(reader.string());
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePysparkJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(String(e));
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(String(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.mainPythonFileUri !== undefined &&
            object.mainPythonFileUri !== null) {
            message.mainPythonFileUri = String(object.mainPythonFileUri);
        }
        else {
            message.mainPythonFileUri = '';
        }
        if (object.pythonFileUris !== undefined &&
            object.pythonFileUris !== null) {
            for (const e of object.pythonFileUris) {
                message.pythonFileUris.push(String(e));
            }
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(String(e));
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(String(e));
            }
        }
        if (object.excludePackages !== undefined &&
            object.excludePackages !== null) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        }
        else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        }
        else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        }
        else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainPythonFileUri !== undefined &&
            (obj.mainPythonFileUri = message.mainPythonFileUri);
        if (message.pythonFileUris) {
            obj.pythonFileUris = message.pythonFileUris.map((e) => e);
        }
        else {
            obj.pythonFileUris = [];
        }
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        }
        else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        }
        else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        }
        else {
            obj.excludePackages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePysparkJob };
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(e);
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.mainPythonFileUri !== undefined &&
            object.mainPythonFileUri !== null) {
            message.mainPythonFileUri = object.mainPythonFileUri;
        }
        else {
            message.mainPythonFileUri = '';
        }
        if (object.pythonFileUris !== undefined &&
            object.pythonFileUris !== null) {
            for (const e of object.pythonFileUris) {
                message.pythonFileUris.push(e);
            }
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(e);
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(e);
            }
        }
        if (object.excludePackages !== undefined &&
            object.excludePackages !== null) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(e);
            }
        }
        return message;
    },
};
const basePysparkJob_PropertiesEntry = { key: '', value: '' };
exports.PysparkJob_PropertiesEntry = {
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
        const message = {
            ...basePysparkJob_PropertiesEntry,
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
            ...basePysparkJob_PropertiesEntry,
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
            ...basePysparkJob_PropertiesEntry,
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
const baseQueryList = { queries: '' };
exports.QueryList = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.queries) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryList };
        message.queries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryList };
        message.queries = [];
        if (object.queries !== undefined && object.queries !== null) {
            for (const e of object.queries) {
                message.queries.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map((e) => e);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryList };
        message.queries = [];
        if (object.queries !== undefined && object.queries !== null) {
            for (const e of object.queries) {
                message.queries.push(e);
            }
        }
        return message;
    },
};
const baseHiveJob = { continueOnFailure: false, jarFileUris: '' };
exports.HiveJob = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.HiveJob_PropertiesEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        if (message.continueOnFailure === true) {
            writer.uint32(16).bool(message.continueOnFailure);
        }
        Object.entries(message.scriptVariables).forEach(([key, value]) => {
            exports.HiveJob_ScriptVariablesEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        for (const v of message.jarFileUris) {
            writer.uint32(34).string(v);
        }
        if (message.queryFileUri !== undefined) {
            writer.uint32(42).string(message.queryFileUri);
        }
        if (message.queryList !== undefined) {
            exports.QueryList.encode(message.queryList, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHiveJob };
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.HiveJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.properties[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.continueOnFailure = reader.bool();
                    break;
                case 3:
                    const entry3 = exports.HiveJob_ScriptVariablesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.scriptVariables[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.jarFileUris.push(reader.string());
                    break;
                case 5:
                    message.queryFileUri = reader.string();
                    break;
                case 6:
                    message.queryList = exports.QueryList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHiveJob };
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.continueOnFailure !== undefined &&
            object.continueOnFailure !== null) {
            message.continueOnFailure = Boolean(object.continueOnFailure);
        }
        else {
            message.continueOnFailure = false;
        }
        if (object.scriptVariables !== undefined &&
            object.scriptVariables !== null) {
            Object.entries(object.scriptVariables).forEach(([key, value]) => {
                message.scriptVariables[key] = String(value);
            });
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.queryFileUri !== undefined && object.queryFileUri !== null) {
            message.queryFileUri = String(object.queryFileUri);
        }
        else {
            message.queryFileUri = undefined;
        }
        if (object.queryList !== undefined && object.queryList !== null) {
            message.queryList = exports.QueryList.fromJSON(object.queryList);
        }
        else {
            message.queryList = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.continueOnFailure !== undefined &&
            (obj.continueOnFailure = message.continueOnFailure);
        obj.scriptVariables = {};
        if (message.scriptVariables) {
            Object.entries(message.scriptVariables).forEach(([k, v]) => {
                obj.scriptVariables[k] = v;
            });
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        message.queryFileUri !== undefined &&
            (obj.queryFileUri = message.queryFileUri);
        message.queryList !== undefined &&
            (obj.queryList = message.queryList
                ? exports.QueryList.toJSON(message.queryList)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHiveJob };
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.continueOnFailure !== undefined &&
            object.continueOnFailure !== null) {
            message.continueOnFailure = object.continueOnFailure;
        }
        else {
            message.continueOnFailure = false;
        }
        if (object.scriptVariables !== undefined &&
            object.scriptVariables !== null) {
            Object.entries(object.scriptVariables).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.scriptVariables[key] = String(value);
                }
            });
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.queryFileUri !== undefined && object.queryFileUri !== null) {
            message.queryFileUri = object.queryFileUri;
        }
        else {
            message.queryFileUri = undefined;
        }
        if (object.queryList !== undefined && object.queryList !== null) {
            message.queryList = exports.QueryList.fromPartial(object.queryList);
        }
        else {
            message.queryList = undefined;
        }
        return message;
    },
};
const baseHiveJob_PropertiesEntry = { key: '', value: '' };
exports.HiveJob_PropertiesEntry = {
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
        const message = {
            ...baseHiveJob_PropertiesEntry,
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
            ...baseHiveJob_PropertiesEntry,
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
            ...baseHiveJob_PropertiesEntry,
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
const baseHiveJob_ScriptVariablesEntry = { key: '', value: '' };
exports.HiveJob_ScriptVariablesEntry = {
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
        const message = {
            ...baseHiveJob_ScriptVariablesEntry,
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
            ...baseHiveJob_ScriptVariablesEntry,
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
            ...baseHiveJob_ScriptVariablesEntry,
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
