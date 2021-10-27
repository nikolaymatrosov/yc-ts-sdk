"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfig = exports.HadoopConfig_PropertiesEntry = exports.HadoopConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.hadoopConfig_ServiceToJSON = exports.hadoopConfig_ServiceFromJSON = exports.HadoopConfig_Service = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const common_1 = require("../../../../yandex/cloud/dataproc/v1/common");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.dataproc.v1';
var Cluster_Status;
(function (Cluster_Status) {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    Cluster_Status[Cluster_Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    /** CREATING - Cluster is being created. */
    Cluster_Status[Cluster_Status["CREATING"] = 1] = "CREATING";
    /** RUNNING - Cluster is running normally. */
    Cluster_Status[Cluster_Status["RUNNING"] = 2] = "RUNNING";
    /** ERROR - Cluster encountered a problem and cannot operate. */
    Cluster_Status[Cluster_Status["ERROR"] = 3] = "ERROR";
    /** STOPPING - Cluster is stopping. */
    Cluster_Status[Cluster_Status["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - Cluster stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 5] = "STOPPED";
    /** STARTING - Cluster is starting. */
    Cluster_Status[Cluster_Status["STARTING"] = 6] = "STARTING";
    Cluster_Status[Cluster_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Status = exports.Cluster_Status || (exports.Cluster_Status = {}));
function cluster_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNKNOWN':
            return Cluster_Status.STATUS_UNKNOWN;
        case 1:
        case 'CREATING':
            return Cluster_Status.CREATING;
        case 2:
        case 'RUNNING':
            return Cluster_Status.RUNNING;
        case 3:
        case 'ERROR':
            return Cluster_Status.ERROR;
        case 4:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 6:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}
exports.cluster_StatusFromJSON = cluster_StatusFromJSON;
function cluster_StatusToJSON(object) {
    switch (object) {
        case Cluster_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Cluster_Status.CREATING:
            return 'CREATING';
        case Cluster_Status.RUNNING:
            return 'RUNNING';
        case Cluster_Status.ERROR:
            return 'ERROR';
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}
exports.cluster_StatusToJSON = cluster_StatusToJSON;
var HadoopConfig_Service;
(function (HadoopConfig_Service) {
    HadoopConfig_Service[HadoopConfig_Service["SERVICE_UNSPECIFIED"] = 0] = "SERVICE_UNSPECIFIED";
    HadoopConfig_Service[HadoopConfig_Service["HDFS"] = 1] = "HDFS";
    HadoopConfig_Service[HadoopConfig_Service["YARN"] = 2] = "YARN";
    HadoopConfig_Service[HadoopConfig_Service["MAPREDUCE"] = 3] = "MAPREDUCE";
    HadoopConfig_Service[HadoopConfig_Service["HIVE"] = 4] = "HIVE";
    HadoopConfig_Service[HadoopConfig_Service["TEZ"] = 5] = "TEZ";
    HadoopConfig_Service[HadoopConfig_Service["ZOOKEEPER"] = 6] = "ZOOKEEPER";
    HadoopConfig_Service[HadoopConfig_Service["HBASE"] = 7] = "HBASE";
    HadoopConfig_Service[HadoopConfig_Service["SQOOP"] = 8] = "SQOOP";
    HadoopConfig_Service[HadoopConfig_Service["FLUME"] = 9] = "FLUME";
    HadoopConfig_Service[HadoopConfig_Service["SPARK"] = 10] = "SPARK";
    HadoopConfig_Service[HadoopConfig_Service["ZEPPELIN"] = 11] = "ZEPPELIN";
    HadoopConfig_Service[HadoopConfig_Service["OOZIE"] = 12] = "OOZIE";
    HadoopConfig_Service[HadoopConfig_Service["LIVY"] = 13] = "LIVY";
    HadoopConfig_Service[HadoopConfig_Service["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HadoopConfig_Service = exports.HadoopConfig_Service || (exports.HadoopConfig_Service = {}));
function hadoopConfig_ServiceFromJSON(object) {
    switch (object) {
        case 0:
        case 'SERVICE_UNSPECIFIED':
            return HadoopConfig_Service.SERVICE_UNSPECIFIED;
        case 1:
        case 'HDFS':
            return HadoopConfig_Service.HDFS;
        case 2:
        case 'YARN':
            return HadoopConfig_Service.YARN;
        case 3:
        case 'MAPREDUCE':
            return HadoopConfig_Service.MAPREDUCE;
        case 4:
        case 'HIVE':
            return HadoopConfig_Service.HIVE;
        case 5:
        case 'TEZ':
            return HadoopConfig_Service.TEZ;
        case 6:
        case 'ZOOKEEPER':
            return HadoopConfig_Service.ZOOKEEPER;
        case 7:
        case 'HBASE':
            return HadoopConfig_Service.HBASE;
        case 8:
        case 'SQOOP':
            return HadoopConfig_Service.SQOOP;
        case 9:
        case 'FLUME':
            return HadoopConfig_Service.FLUME;
        case 10:
        case 'SPARK':
            return HadoopConfig_Service.SPARK;
        case 11:
        case 'ZEPPELIN':
            return HadoopConfig_Service.ZEPPELIN;
        case 12:
        case 'OOZIE':
            return HadoopConfig_Service.OOZIE;
        case 13:
        case 'LIVY':
            return HadoopConfig_Service.LIVY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HadoopConfig_Service.UNRECOGNIZED;
    }
}
exports.hadoopConfig_ServiceFromJSON = hadoopConfig_ServiceFromJSON;
function hadoopConfig_ServiceToJSON(object) {
    switch (object) {
        case HadoopConfig_Service.SERVICE_UNSPECIFIED:
            return 'SERVICE_UNSPECIFIED';
        case HadoopConfig_Service.HDFS:
            return 'HDFS';
        case HadoopConfig_Service.YARN:
            return 'YARN';
        case HadoopConfig_Service.MAPREDUCE:
            return 'MAPREDUCE';
        case HadoopConfig_Service.HIVE:
            return 'HIVE';
        case HadoopConfig_Service.TEZ:
            return 'TEZ';
        case HadoopConfig_Service.ZOOKEEPER:
            return 'ZOOKEEPER';
        case HadoopConfig_Service.HBASE:
            return 'HBASE';
        case HadoopConfig_Service.SQOOP:
            return 'SQOOP';
        case HadoopConfig_Service.FLUME:
            return 'FLUME';
        case HadoopConfig_Service.SPARK:
            return 'SPARK';
        case HadoopConfig_Service.ZEPPELIN:
            return 'ZEPPELIN';
        case HadoopConfig_Service.OOZIE:
            return 'OOZIE';
        case HadoopConfig_Service.LIVY:
            return 'LIVY';
        default:
            return 'UNKNOWN';
    }
}
exports.hadoopConfig_ServiceToJSON = hadoopConfig_ServiceToJSON;
const baseCluster = {
    $type: 'yandex.cloud.dataproc.v1.Cluster',
    id: '',
    folderId: '',
    name: '',
    description: '',
    health: 0,
    status: 0,
    zoneId: '',
    serviceAccountId: '',
    bucket: '',
    uiProxy: false,
    securityGroupIds: '',
    hostGroupIds: '',
    deletionProtection: false,
    logGroupId: '',
};
exports.Cluster = {
    $type: 'yandex.cloud.dataproc.v1.Cluster',
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
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Cluster_LabelsEntry.encode({
                $type: 'yandex.cloud.dataproc.v1.Cluster.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        for (const v of message.monitoring) {
            exports.Monitoring.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.ClusterConfig.encode(message.config, writer.uint32(66).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(72).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.zoneId !== '') {
            writer.uint32(90).string(message.zoneId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.bucket !== '') {
            writer.uint32(106).string(message.bucket);
        }
        if (message.uiProxy === true) {
            writer.uint32(112).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(122).string(v);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(130).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(136).bool(message.deletionProtection);
        }
        if (message.logGroupId !== '') {
            writer.uint32(146).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster };
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                    const entry6 = exports.Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.monitoring.push(exports.Monitoring.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.config = exports.ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.health = reader.int32();
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    message.zoneId = reader.string();
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.bucket = reader.string();
                    break;
                case 14:
                    message.uiProxy = reader.bool();
                    break;
                case 15:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 16:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 17:
                    message.deletionProtection = reader.bool();
                    break;
                case 18:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCluster };
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.monitoring !== undefined && object.monitoring !== null) {
            for (const e of object.monitoring) {
                message.monitoring.push(exports.Monitoring.fromJSON(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.ClusterConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = (0, common_1.healthFromJSON)(object.health);
        }
        else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = cluster_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        }
        else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = Boolean(object.uiProxy);
        }
        else {
            message.uiProxy = false;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(String(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
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
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => e ? exports.Monitoring.toJSON(e) : undefined);
        }
        else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.ClusterConfig.toJSON(message.config)
                : undefined);
        message.health !== undefined &&
            (obj.health = (0, common_1.healthToJSON)(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCluster };
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.monitoring !== undefined && object.monitoring !== null) {
            for (const e of object.monitoring) {
                message.monitoring.push(exports.Monitoring.fromPartial(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.ClusterConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        }
        else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        }
        else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = object.uiProxy;
        }
        else {
            message.uiProxy = false;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(e);
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: 'yandex.cloud.dataproc.v1.Cluster.LabelsEntry',
    key: '',
    value: '',
};
exports.Cluster_LabelsEntry = {
    $type: 'yandex.cloud.dataproc.v1.Cluster.LabelsEntry',
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
        const message = { ...baseCluster_LabelsEntry };
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
        const message = { ...baseCluster_LabelsEntry };
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
        const message = { ...baseCluster_LabelsEntry };
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
typeRegistry_1.messageTypeRegistry.set(exports.Cluster_LabelsEntry.$type, exports.Cluster_LabelsEntry);
const baseMonitoring = {
    $type: 'yandex.cloud.dataproc.v1.Monitoring',
    name: '',
    description: '',
    link: '',
};
exports.Monitoring = {
    $type: 'yandex.cloud.dataproc.v1.Monitoring',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.link !== '') {
            writer.uint32(26).string(message.link);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMonitoring };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.link = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMonitoring };
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
        if (object.link !== undefined && object.link !== null) {
            message.link = String(object.link);
        }
        else {
            message.link = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMonitoring };
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
        if (object.link !== undefined && object.link !== null) {
            message.link = object.link;
        }
        else {
            message.link = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Monitoring.$type, exports.Monitoring);
const baseHadoopConfig = {
    $type: 'yandex.cloud.dataproc.v1.HadoopConfig',
    services: 0,
    sshPublicKeys: '',
};
exports.HadoopConfig = {
    $type: 'yandex.cloud.dataproc.v1.HadoopConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.services) {
            writer.int32(v);
        }
        writer.ldelim();
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.HadoopConfig_PropertiesEntry.encode({
                $type: 'yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry',
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        for (const v of message.sshPublicKeys) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHadoopConfig };
        message.services = [];
        message.properties = {};
        message.sshPublicKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.services.push(reader.int32());
                        }
                    }
                    else {
                        message.services.push(reader.int32());
                    }
                    break;
                case 2:
                    const entry2 = exports.HadoopConfig_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.properties[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.sshPublicKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHadoopConfig };
        message.services = [];
        message.properties = {};
        message.sshPublicKeys = [];
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(hadoopConfig_ServiceFromJSON(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.sshPublicKeys !== undefined &&
            object.sshPublicKeys !== null) {
            for (const e of object.sshPublicKeys) {
                message.sshPublicKeys.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.services) {
            obj.services = message.services.map((e) => hadoopConfig_ServiceToJSON(e));
        }
        else {
            obj.services = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        if (message.sshPublicKeys) {
            obj.sshPublicKeys = message.sshPublicKeys.map((e) => e);
        }
        else {
            obj.sshPublicKeys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHadoopConfig };
        message.services = [];
        message.properties = {};
        message.sshPublicKeys = [];
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.sshPublicKeys !== undefined &&
            object.sshPublicKeys !== null) {
            for (const e of object.sshPublicKeys) {
                message.sshPublicKeys.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HadoopConfig.$type, exports.HadoopConfig);
const baseHadoopConfig_PropertiesEntry = {
    $type: 'yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry',
    key: '',
    value: '',
};
exports.HadoopConfig_PropertiesEntry = {
    $type: 'yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry',
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
            ...baseHadoopConfig_PropertiesEntry,
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
            ...baseHadoopConfig_PropertiesEntry,
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
            ...baseHadoopConfig_PropertiesEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.HadoopConfig_PropertiesEntry.$type, exports.HadoopConfig_PropertiesEntry);
const baseClusterConfig = {
    $type: 'yandex.cloud.dataproc.v1.ClusterConfig',
    versionId: '',
};
exports.ClusterConfig = {
    $type: 'yandex.cloud.dataproc.v1.ClusterConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        if (message.hadoop !== undefined) {
            exports.HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterConfig };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.hadoop = exports.HadoopConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseClusterConfig };
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = exports.HadoopConfig.fromJSON(object.hadoop);
        }
        else {
            message.hadoop = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? exports.HadoopConfig.toJSON(message.hadoop)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClusterConfig };
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = exports.HadoopConfig.fromPartial(object.hadoop);
        }
        else {
            message.hadoop = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
