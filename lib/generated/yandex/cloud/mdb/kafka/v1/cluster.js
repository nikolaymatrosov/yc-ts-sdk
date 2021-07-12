/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';
import { compressionTypeFromJSON, compressionTypeToJSON, } from '../../../../../yandex/cloud/mdb/kafka/v1/common';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';
export var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
    Cluster_Environment[Cluster_Environment["PRODUCTION"] = 1] = "PRODUCTION";
    /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
    Cluster_Environment[Cluster_Environment["PRESTABLE"] = 2] = "PRESTABLE";
    Cluster_Environment[Cluster_Environment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Environment || (Cluster_Environment = {}));
export function cluster_EnvironmentFromJSON(object) {
    switch (object) {
        case 0:
        case 'ENVIRONMENT_UNSPECIFIED':
            return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
        case 1:
        case 'PRODUCTION':
            return Cluster_Environment.PRODUCTION;
        case 2:
        case 'PRESTABLE':
            return Cluster_Environment.PRESTABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Environment.UNRECOGNIZED;
    }
}
export function cluster_EnvironmentToJSON(object) {
    switch (object) {
        case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
            return 'ENVIRONMENT_UNSPECIFIED';
        case Cluster_Environment.PRODUCTION:
            return 'PRODUCTION';
        case Cluster_Environment.PRESTABLE:
            return 'PRESTABLE';
        default:
            return 'UNKNOWN';
    }
}
export var Cluster_Health;
(function (Cluster_Health) {
    /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
    Cluster_Health[Cluster_Health["DEGRADED"] = 3] = "DEGRADED";
    Cluster_Health[Cluster_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Health || (Cluster_Health = {}));
export function cluster_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Cluster_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Cluster_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Cluster_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Cluster_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}
export function cluster_HealthToJSON(object) {
    switch (object) {
        case Cluster_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Cluster_Health.ALIVE:
            return 'ALIVE';
        case Cluster_Health.DEAD:
            return 'DEAD';
        case Cluster_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}
export var Cluster_Status;
(function (Cluster_Status) {
    /** STATUS_UNKNOWN - cluster state is unknown. */
    Cluster_Status[Cluster_Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    /** CREATING - cluster is being created. */
    Cluster_Status[Cluster_Status["CREATING"] = 1] = "CREATING";
    /** RUNNING - cluster is running normally. */
    Cluster_Status[Cluster_Status["RUNNING"] = 2] = "RUNNING";
    /** ERROR - cluster encountered a problem and cannot operate. */
    Cluster_Status[Cluster_Status["ERROR"] = 3] = "ERROR";
    /** UPDATING - cluster is being updated. */
    Cluster_Status[Cluster_Status["UPDATING"] = 4] = "UPDATING";
    /** STOPPING - cluster is stopping. */
    Cluster_Status[Cluster_Status["STOPPING"] = 5] = "STOPPING";
    /** STOPPED - cluster stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 6] = "STOPPED";
    /** STARTING - cluster is starting. */
    Cluster_Status[Cluster_Status["STARTING"] = 7] = "STARTING";
    Cluster_Status[Cluster_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Status || (Cluster_Status = {}));
export function cluster_StatusFromJSON(object) {
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
        case 'UPDATING':
            return Cluster_Status.UPDATING;
        case 5:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 6:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 7:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}
export function cluster_StatusToJSON(object) {
    switch (object) {
        case Cluster_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Cluster_Status.CREATING:
            return 'CREATING';
        case Cluster_Status.RUNNING:
            return 'RUNNING';
        case Cluster_Status.ERROR:
            return 'ERROR';
        case Cluster_Status.UPDATING:
            return 'UPDATING';
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
export var Host_Role;
(function (Host_Role) {
    Host_Role[Host_Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    /** KAFKA - the host is a Kafka broker. */
    Host_Role[Host_Role["KAFKA"] = 1] = "KAFKA";
    /** ZOOKEEPER - the host is a ZooKeeper server. */
    Host_Role[Host_Role["ZOOKEEPER"] = 2] = "ZOOKEEPER";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role || (Host_Role = {}));
export function host_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'KAFKA':
            return Host_Role.KAFKA;
        case 2:
        case 'ZOOKEEPER':
            return Host_Role.ZOOKEEPER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Role.UNRECOGNIZED;
    }
}
export function host_RoleToJSON(object) {
    switch (object) {
        case Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case Host_Role.KAFKA:
            return 'KAFKA';
        case Host_Role.ZOOKEEPER:
            return 'ZOOKEEPER';
        default:
            return 'UNKNOWN';
    }
}
export var Host_Health;
(function (Host_Health) {
    /** UNKNOWN - health of the host is unknown. */
    Host_Health[Host_Health["UNKNOWN"] = 0] = "UNKNOWN";
    /** ALIVE - the host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
    Host_Health[Host_Health["DEGRADED"] = 3] = "DEGRADED";
    Host_Health[Host_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Health || (Host_Health = {}));
export function host_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return Host_Health.UNKNOWN;
        case 1:
        case 'ALIVE':
            return Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Health.UNRECOGNIZED;
    }
}
export function host_HealthToJSON(object) {
    switch (object) {
        case Host_Health.UNKNOWN:
            return 'UNKNOWN';
        case Host_Health.ALIVE:
            return 'ALIVE';
        case Host_Health.DEAD:
            return 'DEAD';
        case Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}
const baseCluster = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    health: 0,
    status: 0,
    securityGroupIds: '',
    hostGroupIds: '',
};
export const Cluster = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Cluster_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        for (const v of message.monitoring) {
            Monitoring.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.config !== undefined) {
            ConfigSpec.encode(message.config, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(88).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(96).int32(message.status);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(106).string(v);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(114).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.environment = reader.int32();
                    break;
                case 8:
                    message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.config = ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.health = reader.int32();
                    break;
                case 12:
                    message.status = reader.int32();
                    break;
                case 13:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 14:
                    message.hostGroupIds.push(reader.string());
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = cluster_EnvironmentFromJSON(object.environment);
        }
        else {
            message.environment = 0;
        }
        if (object.monitoring !== undefined && object.monitoring !== null) {
            for (const e of object.monitoring) {
                message.monitoring.push(Monitoring.fromJSON(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = ConfigSpec.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = cluster_HealthFromJSON(object.health);
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
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => e ? Monitoring.toJSON(e) : undefined);
        }
        else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config
                ? ConfigSpec.toJSON(message.config)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = object.environment;
        }
        else {
            message.environment = 0;
        }
        if (object.monitoring !== undefined && object.monitoring !== null) {
            for (const e of object.monitoring) {
                message.monitoring.push(Monitoring.fromPartial(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = ConfigSpec.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
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
        return message;
    },
};
const baseCluster_LabelsEntry = { key: '', value: '' };
export const Cluster_LabelsEntry = {
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
const baseMonitoring = { name: '', description: '', link: '' };
export const Monitoring = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseConfigSpec = {
    version: '',
    zoneId: '',
    assignPublicIp: false,
    unmanagedTopics: false,
};
export const ConfigSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.kafka !== undefined) {
            ConfigSpec_Kafka.encode(message.kafka, writer.uint32(18).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            ConfigSpec_Zookeeper.encode(message.zookeeper, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.zoneId) {
            writer.uint32(34).string(v);
        }
        if (message.brokersCount !== undefined) {
            Int64Value.encode({ value: message.brokersCount }, writer.uint32(42).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        if (message.unmanagedTopics === true) {
            writer.uint32(56).bool(message.unmanagedTopics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfigSpec };
        message.zoneId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.kafka = ConfigSpec_Kafka.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.zookeeper = ConfigSpec_Zookeeper.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zoneId.push(reader.string());
                    break;
                case 5:
                    message.brokersCount = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                case 7:
                    message.unmanagedTopics = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConfigSpec };
        message.zoneId = [];
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.kafka !== undefined && object.kafka !== null) {
            message.kafka = ConfigSpec_Kafka.fromJSON(object.kafka);
        }
        else {
            message.kafka = undefined;
        }
        if (object.zookeeper !== undefined && object.zookeeper !== null) {
            message.zookeeper = ConfigSpec_Zookeeper.fromJSON(object.zookeeper);
        }
        else {
            message.zookeeper = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            for (const e of object.zoneId) {
                message.zoneId.push(String(e));
            }
        }
        if (object.brokersCount !== undefined && object.brokersCount !== null) {
            message.brokersCount = Number(object.brokersCount);
        }
        else {
            message.brokersCount = undefined;
        }
        if (object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null) {
            message.assignPublicIp = Boolean(object.assignPublicIp);
        }
        else {
            message.assignPublicIp = false;
        }
        if (object.unmanagedTopics !== undefined &&
            object.unmanagedTopics !== null) {
            message.unmanagedTopics = Boolean(object.unmanagedTopics);
        }
        else {
            message.unmanagedTopics = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.kafka !== undefined &&
            (obj.kafka = message.kafka
                ? ConfigSpec_Kafka.toJSON(message.kafka)
                : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? ConfigSpec_Zookeeper.toJSON(message.zookeeper)
                : undefined);
        if (message.zoneId) {
            obj.zoneId = message.zoneId.map((e) => e);
        }
        else {
            obj.zoneId = [];
        }
        message.brokersCount !== undefined &&
            (obj.brokersCount = message.brokersCount);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.unmanagedTopics !== undefined &&
            (obj.unmanagedTopics = message.unmanagedTopics);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConfigSpec };
        message.zoneId = [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.kafka !== undefined && object.kafka !== null) {
            message.kafka = ConfigSpec_Kafka.fromPartial(object.kafka);
        }
        else {
            message.kafka = undefined;
        }
        if (object.zookeeper !== undefined && object.zookeeper !== null) {
            message.zookeeper = ConfigSpec_Zookeeper.fromPartial(object.zookeeper);
        }
        else {
            message.zookeeper = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            for (const e of object.zoneId) {
                message.zoneId.push(e);
            }
        }
        if (object.brokersCount !== undefined && object.brokersCount !== null) {
            message.brokersCount = object.brokersCount;
        }
        else {
            message.brokersCount = undefined;
        }
        if (object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null) {
            message.assignPublicIp = object.assignPublicIp;
        }
        else {
            message.assignPublicIp = false;
        }
        if (object.unmanagedTopics !== undefined &&
            object.unmanagedTopics !== null) {
            message.unmanagedTopics = object.unmanagedTopics;
        }
        else {
            message.unmanagedTopics = false;
        }
        return message;
    },
};
const baseConfigSpec_Kafka = {};
export const ConfigSpec_Kafka = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.kafkaConfig21 !== undefined) {
            Kafkaconfig21.encode(message.kafkaConfig21, writer.uint32(18).fork()).ldelim();
        }
        if (message.kafkaConfig26 !== undefined) {
            Kafkaconfig26.encode(message.kafkaConfig26, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfigSpec_Kafka };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.kafkaConfig21 = Kafkaconfig21.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.kafkaConfig26 = Kafkaconfig26.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConfigSpec_Kafka };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.kafkaConfig21 !== undefined &&
            object.kafkaConfig21 !== null) {
            message.kafkaConfig21 = Kafkaconfig21.fromJSON(object.kafkaConfig21);
        }
        else {
            message.kafkaConfig21 = undefined;
        }
        if (object.kafkaConfig26 !== undefined &&
            object.kafkaConfig26 !== null) {
            message.kafkaConfig26 = Kafkaconfig26.fromJSON(object.kafkaConfig26);
        }
        else {
            message.kafkaConfig26 = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.kafkaConfig21 !== undefined &&
            (obj.kafkaConfig21 = message.kafkaConfig21
                ? Kafkaconfig21.toJSON(message.kafkaConfig21)
                : undefined);
        message.kafkaConfig26 !== undefined &&
            (obj.kafkaConfig26 = message.kafkaConfig26
                ? Kafkaconfig26.toJSON(message.kafkaConfig26)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConfigSpec_Kafka };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.kafkaConfig21 !== undefined &&
            object.kafkaConfig21 !== null) {
            message.kafkaConfig21 = Kafkaconfig21.fromPartial(object.kafkaConfig21);
        }
        else {
            message.kafkaConfig21 = undefined;
        }
        if (object.kafkaConfig26 !== undefined &&
            object.kafkaConfig26 !== null) {
            message.kafkaConfig26 = Kafkaconfig26.fromPartial(object.kafkaConfig26);
        }
        else {
            message.kafkaConfig26 = undefined;
        }
        return message;
    },
};
const baseConfigSpec_Zookeeper = {};
export const ConfigSpec_Zookeeper = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfigSpec_Zookeeper };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConfigSpec_Zookeeper };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConfigSpec_Zookeeper };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseResources = {
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};
export const Resources = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== '') {
            writer.uint32(26).string(message.diskTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResources };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        }
        else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        }
        else {
            message.diskTypeId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResources };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        }
        else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        }
        else {
            message.diskTypeId = '';
        }
        return message;
    },
};
const baseKafkaconfig21 = { compressionType: 0 };
export const Kafkaconfig21 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.compressionType !== 0) {
            writer.uint32(8).int32(message.compressionType);
        }
        if (message.logFlushIntervalMessages !== undefined) {
            Int64Value.encode({ value: message.logFlushIntervalMessages }, writer.uint32(18).fork()).ldelim();
        }
        if (message.logFlushIntervalMs !== undefined) {
            Int64Value.encode({ value: message.logFlushIntervalMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.logFlushSchedulerIntervalMs !== undefined) {
            Int64Value.encode({ value: message.logFlushSchedulerIntervalMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.logRetentionBytes !== undefined) {
            Int64Value.encode({ value: message.logRetentionBytes }, writer.uint32(42).fork()).ldelim();
        }
        if (message.logRetentionHours !== undefined) {
            Int64Value.encode({ value: message.logRetentionHours }, writer.uint32(50).fork()).ldelim();
        }
        if (message.logRetentionMinutes !== undefined) {
            Int64Value.encode({ value: message.logRetentionMinutes }, writer.uint32(58).fork()).ldelim();
        }
        if (message.logRetentionMs !== undefined) {
            Int64Value.encode({ value: message.logRetentionMs }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logSegmentBytes !== undefined) {
            Int64Value.encode({ value: message.logSegmentBytes }, writer.uint32(74).fork()).ldelim();
        }
        if (message.logPreallocate !== undefined) {
            BoolValue.encode({ value: message.logPreallocate }, writer.uint32(82).fork()).ldelim();
        }
        if (message.socketSendBufferBytes !== undefined) {
            Int64Value.encode({ value: message.socketSendBufferBytes }, writer.uint32(90).fork()).ldelim();
        }
        if (message.socketReceiveBufferBytes !== undefined) {
            Int64Value.encode({ value: message.socketReceiveBufferBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.autoCreateTopicsEnable !== undefined) {
            BoolValue.encode({ value: message.autoCreateTopicsEnable }, writer.uint32(106).fork()).ldelim();
        }
        if (message.numPartitions !== undefined) {
            Int64Value.encode({ value: message.numPartitions }, writer.uint32(114).fork()).ldelim();
        }
        if (message.defaultReplicationFactor !== undefined) {
            Int64Value.encode({ value: message.defaultReplicationFactor }, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaconfig21 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.compressionType = reader.int32();
                    break;
                case 2:
                    message.logFlushIntervalMessages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.logFlushIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.logFlushSchedulerIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.logRetentionBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.logRetentionHours = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.logRetentionMinutes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.logRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logSegmentBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.logPreallocate = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.socketSendBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.socketReceiveBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.autoCreateTopicsEnable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.numPartitions = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.defaultReplicationFactor = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseKafkaconfig21 };
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = compressionTypeFromJSON(object.compressionType);
        }
        else {
            message.compressionType = 0;
        }
        if (object.logFlushIntervalMessages !== undefined &&
            object.logFlushIntervalMessages !== null) {
            message.logFlushIntervalMessages = Number(object.logFlushIntervalMessages);
        }
        else {
            message.logFlushIntervalMessages = undefined;
        }
        if (object.logFlushIntervalMs !== undefined &&
            object.logFlushIntervalMs !== null) {
            message.logFlushIntervalMs = Number(object.logFlushIntervalMs);
        }
        else {
            message.logFlushIntervalMs = undefined;
        }
        if (object.logFlushSchedulerIntervalMs !== undefined &&
            object.logFlushSchedulerIntervalMs !== null) {
            message.logFlushSchedulerIntervalMs = Number(object.logFlushSchedulerIntervalMs);
        }
        else {
            message.logFlushSchedulerIntervalMs = undefined;
        }
        if (object.logRetentionBytes !== undefined &&
            object.logRetentionBytes !== null) {
            message.logRetentionBytes = Number(object.logRetentionBytes);
        }
        else {
            message.logRetentionBytes = undefined;
        }
        if (object.logRetentionHours !== undefined &&
            object.logRetentionHours !== null) {
            message.logRetentionHours = Number(object.logRetentionHours);
        }
        else {
            message.logRetentionHours = undefined;
        }
        if (object.logRetentionMinutes !== undefined &&
            object.logRetentionMinutes !== null) {
            message.logRetentionMinutes = Number(object.logRetentionMinutes);
        }
        else {
            message.logRetentionMinutes = undefined;
        }
        if (object.logRetentionMs !== undefined &&
            object.logRetentionMs !== null) {
            message.logRetentionMs = Number(object.logRetentionMs);
        }
        else {
            message.logRetentionMs = undefined;
        }
        if (object.logSegmentBytes !== undefined &&
            object.logSegmentBytes !== null) {
            message.logSegmentBytes = Number(object.logSegmentBytes);
        }
        else {
            message.logSegmentBytes = undefined;
        }
        if (object.logPreallocate !== undefined &&
            object.logPreallocate !== null) {
            message.logPreallocate = Boolean(object.logPreallocate);
        }
        else {
            message.logPreallocate = undefined;
        }
        if (object.socketSendBufferBytes !== undefined &&
            object.socketSendBufferBytes !== null) {
            message.socketSendBufferBytes = Number(object.socketSendBufferBytes);
        }
        else {
            message.socketSendBufferBytes = undefined;
        }
        if (object.socketReceiveBufferBytes !== undefined &&
            object.socketReceiveBufferBytes !== null) {
            message.socketReceiveBufferBytes = Number(object.socketReceiveBufferBytes);
        }
        else {
            message.socketReceiveBufferBytes = undefined;
        }
        if (object.autoCreateTopicsEnable !== undefined &&
            object.autoCreateTopicsEnable !== null) {
            message.autoCreateTopicsEnable = Boolean(object.autoCreateTopicsEnable);
        }
        else {
            message.autoCreateTopicsEnable = undefined;
        }
        if (object.numPartitions !== undefined &&
            object.numPartitions !== null) {
            message.numPartitions = Number(object.numPartitions);
        }
        else {
            message.numPartitions = undefined;
        }
        if (object.defaultReplicationFactor !== undefined &&
            object.defaultReplicationFactor !== null) {
            message.defaultReplicationFactor = Number(object.defaultReplicationFactor);
        }
        else {
            message.defaultReplicationFactor = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.compressionType !== undefined &&
            (obj.compressionType = compressionTypeToJSON(message.compressionType));
        message.logFlushIntervalMessages !== undefined &&
            (obj.logFlushIntervalMessages = message.logFlushIntervalMessages);
        message.logFlushIntervalMs !== undefined &&
            (obj.logFlushIntervalMs = message.logFlushIntervalMs);
        message.logFlushSchedulerIntervalMs !== undefined &&
            (obj.logFlushSchedulerIntervalMs =
                message.logFlushSchedulerIntervalMs);
        message.logRetentionBytes !== undefined &&
            (obj.logRetentionBytes = message.logRetentionBytes);
        message.logRetentionHours !== undefined &&
            (obj.logRetentionHours = message.logRetentionHours);
        message.logRetentionMinutes !== undefined &&
            (obj.logRetentionMinutes = message.logRetentionMinutes);
        message.logRetentionMs !== undefined &&
            (obj.logRetentionMs = message.logRetentionMs);
        message.logSegmentBytes !== undefined &&
            (obj.logSegmentBytes = message.logSegmentBytes);
        message.logPreallocate !== undefined &&
            (obj.logPreallocate = message.logPreallocate);
        message.socketSendBufferBytes !== undefined &&
            (obj.socketSendBufferBytes = message.socketSendBufferBytes);
        message.socketReceiveBufferBytes !== undefined &&
            (obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes);
        message.autoCreateTopicsEnable !== undefined &&
            (obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable);
        message.numPartitions !== undefined &&
            (obj.numPartitions = message.numPartitions);
        message.defaultReplicationFactor !== undefined &&
            (obj.defaultReplicationFactor = message.defaultReplicationFactor);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseKafkaconfig21 };
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = object.compressionType;
        }
        else {
            message.compressionType = 0;
        }
        if (object.logFlushIntervalMessages !== undefined &&
            object.logFlushIntervalMessages !== null) {
            message.logFlushIntervalMessages = object.logFlushIntervalMessages;
        }
        else {
            message.logFlushIntervalMessages = undefined;
        }
        if (object.logFlushIntervalMs !== undefined &&
            object.logFlushIntervalMs !== null) {
            message.logFlushIntervalMs = object.logFlushIntervalMs;
        }
        else {
            message.logFlushIntervalMs = undefined;
        }
        if (object.logFlushSchedulerIntervalMs !== undefined &&
            object.logFlushSchedulerIntervalMs !== null) {
            message.logFlushSchedulerIntervalMs =
                object.logFlushSchedulerIntervalMs;
        }
        else {
            message.logFlushSchedulerIntervalMs = undefined;
        }
        if (object.logRetentionBytes !== undefined &&
            object.logRetentionBytes !== null) {
            message.logRetentionBytes = object.logRetentionBytes;
        }
        else {
            message.logRetentionBytes = undefined;
        }
        if (object.logRetentionHours !== undefined &&
            object.logRetentionHours !== null) {
            message.logRetentionHours = object.logRetentionHours;
        }
        else {
            message.logRetentionHours = undefined;
        }
        if (object.logRetentionMinutes !== undefined &&
            object.logRetentionMinutes !== null) {
            message.logRetentionMinutes = object.logRetentionMinutes;
        }
        else {
            message.logRetentionMinutes = undefined;
        }
        if (object.logRetentionMs !== undefined &&
            object.logRetentionMs !== null) {
            message.logRetentionMs = object.logRetentionMs;
        }
        else {
            message.logRetentionMs = undefined;
        }
        if (object.logSegmentBytes !== undefined &&
            object.logSegmentBytes !== null) {
            message.logSegmentBytes = object.logSegmentBytes;
        }
        else {
            message.logSegmentBytes = undefined;
        }
        if (object.logPreallocate !== undefined &&
            object.logPreallocate !== null) {
            message.logPreallocate = object.logPreallocate;
        }
        else {
            message.logPreallocate = undefined;
        }
        if (object.socketSendBufferBytes !== undefined &&
            object.socketSendBufferBytes !== null) {
            message.socketSendBufferBytes = object.socketSendBufferBytes;
        }
        else {
            message.socketSendBufferBytes = undefined;
        }
        if (object.socketReceiveBufferBytes !== undefined &&
            object.socketReceiveBufferBytes !== null) {
            message.socketReceiveBufferBytes = object.socketReceiveBufferBytes;
        }
        else {
            message.socketReceiveBufferBytes = undefined;
        }
        if (object.autoCreateTopicsEnable !== undefined &&
            object.autoCreateTopicsEnable !== null) {
            message.autoCreateTopicsEnable = object.autoCreateTopicsEnable;
        }
        else {
            message.autoCreateTopicsEnable = undefined;
        }
        if (object.numPartitions !== undefined &&
            object.numPartitions !== null) {
            message.numPartitions = object.numPartitions;
        }
        else {
            message.numPartitions = undefined;
        }
        if (object.defaultReplicationFactor !== undefined &&
            object.defaultReplicationFactor !== null) {
            message.defaultReplicationFactor = object.defaultReplicationFactor;
        }
        else {
            message.defaultReplicationFactor = undefined;
        }
        return message;
    },
};
const baseKafkaconfig26 = { compressionType: 0 };
export const Kafkaconfig26 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.compressionType !== 0) {
            writer.uint32(8).int32(message.compressionType);
        }
        if (message.logFlushIntervalMessages !== undefined) {
            Int64Value.encode({ value: message.logFlushIntervalMessages }, writer.uint32(18).fork()).ldelim();
        }
        if (message.logFlushIntervalMs !== undefined) {
            Int64Value.encode({ value: message.logFlushIntervalMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.logFlushSchedulerIntervalMs !== undefined) {
            Int64Value.encode({ value: message.logFlushSchedulerIntervalMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.logRetentionBytes !== undefined) {
            Int64Value.encode({ value: message.logRetentionBytes }, writer.uint32(42).fork()).ldelim();
        }
        if (message.logRetentionHours !== undefined) {
            Int64Value.encode({ value: message.logRetentionHours }, writer.uint32(50).fork()).ldelim();
        }
        if (message.logRetentionMinutes !== undefined) {
            Int64Value.encode({ value: message.logRetentionMinutes }, writer.uint32(58).fork()).ldelim();
        }
        if (message.logRetentionMs !== undefined) {
            Int64Value.encode({ value: message.logRetentionMs }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logSegmentBytes !== undefined) {
            Int64Value.encode({ value: message.logSegmentBytes }, writer.uint32(74).fork()).ldelim();
        }
        if (message.logPreallocate !== undefined) {
            BoolValue.encode({ value: message.logPreallocate }, writer.uint32(82).fork()).ldelim();
        }
        if (message.socketSendBufferBytes !== undefined) {
            Int64Value.encode({ value: message.socketSendBufferBytes }, writer.uint32(90).fork()).ldelim();
        }
        if (message.socketReceiveBufferBytes !== undefined) {
            Int64Value.encode({ value: message.socketReceiveBufferBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.autoCreateTopicsEnable !== undefined) {
            BoolValue.encode({ value: message.autoCreateTopicsEnable }, writer.uint32(106).fork()).ldelim();
        }
        if (message.numPartitions !== undefined) {
            Int64Value.encode({ value: message.numPartitions }, writer.uint32(114).fork()).ldelim();
        }
        if (message.defaultReplicationFactor !== undefined) {
            Int64Value.encode({ value: message.defaultReplicationFactor }, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaconfig26 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.compressionType = reader.int32();
                    break;
                case 2:
                    message.logFlushIntervalMessages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.logFlushIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.logFlushSchedulerIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.logRetentionBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.logRetentionHours = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.logRetentionMinutes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.logRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logSegmentBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.logPreallocate = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.socketSendBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.socketReceiveBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.autoCreateTopicsEnable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.numPartitions = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.defaultReplicationFactor = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseKafkaconfig26 };
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = compressionTypeFromJSON(object.compressionType);
        }
        else {
            message.compressionType = 0;
        }
        if (object.logFlushIntervalMessages !== undefined &&
            object.logFlushIntervalMessages !== null) {
            message.logFlushIntervalMessages = Number(object.logFlushIntervalMessages);
        }
        else {
            message.logFlushIntervalMessages = undefined;
        }
        if (object.logFlushIntervalMs !== undefined &&
            object.logFlushIntervalMs !== null) {
            message.logFlushIntervalMs = Number(object.logFlushIntervalMs);
        }
        else {
            message.logFlushIntervalMs = undefined;
        }
        if (object.logFlushSchedulerIntervalMs !== undefined &&
            object.logFlushSchedulerIntervalMs !== null) {
            message.logFlushSchedulerIntervalMs = Number(object.logFlushSchedulerIntervalMs);
        }
        else {
            message.logFlushSchedulerIntervalMs = undefined;
        }
        if (object.logRetentionBytes !== undefined &&
            object.logRetentionBytes !== null) {
            message.logRetentionBytes = Number(object.logRetentionBytes);
        }
        else {
            message.logRetentionBytes = undefined;
        }
        if (object.logRetentionHours !== undefined &&
            object.logRetentionHours !== null) {
            message.logRetentionHours = Number(object.logRetentionHours);
        }
        else {
            message.logRetentionHours = undefined;
        }
        if (object.logRetentionMinutes !== undefined &&
            object.logRetentionMinutes !== null) {
            message.logRetentionMinutes = Number(object.logRetentionMinutes);
        }
        else {
            message.logRetentionMinutes = undefined;
        }
        if (object.logRetentionMs !== undefined &&
            object.logRetentionMs !== null) {
            message.logRetentionMs = Number(object.logRetentionMs);
        }
        else {
            message.logRetentionMs = undefined;
        }
        if (object.logSegmentBytes !== undefined &&
            object.logSegmentBytes !== null) {
            message.logSegmentBytes = Number(object.logSegmentBytes);
        }
        else {
            message.logSegmentBytes = undefined;
        }
        if (object.logPreallocate !== undefined &&
            object.logPreallocate !== null) {
            message.logPreallocate = Boolean(object.logPreallocate);
        }
        else {
            message.logPreallocate = undefined;
        }
        if (object.socketSendBufferBytes !== undefined &&
            object.socketSendBufferBytes !== null) {
            message.socketSendBufferBytes = Number(object.socketSendBufferBytes);
        }
        else {
            message.socketSendBufferBytes = undefined;
        }
        if (object.socketReceiveBufferBytes !== undefined &&
            object.socketReceiveBufferBytes !== null) {
            message.socketReceiveBufferBytes = Number(object.socketReceiveBufferBytes);
        }
        else {
            message.socketReceiveBufferBytes = undefined;
        }
        if (object.autoCreateTopicsEnable !== undefined &&
            object.autoCreateTopicsEnable !== null) {
            message.autoCreateTopicsEnable = Boolean(object.autoCreateTopicsEnable);
        }
        else {
            message.autoCreateTopicsEnable = undefined;
        }
        if (object.numPartitions !== undefined &&
            object.numPartitions !== null) {
            message.numPartitions = Number(object.numPartitions);
        }
        else {
            message.numPartitions = undefined;
        }
        if (object.defaultReplicationFactor !== undefined &&
            object.defaultReplicationFactor !== null) {
            message.defaultReplicationFactor = Number(object.defaultReplicationFactor);
        }
        else {
            message.defaultReplicationFactor = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.compressionType !== undefined &&
            (obj.compressionType = compressionTypeToJSON(message.compressionType));
        message.logFlushIntervalMessages !== undefined &&
            (obj.logFlushIntervalMessages = message.logFlushIntervalMessages);
        message.logFlushIntervalMs !== undefined &&
            (obj.logFlushIntervalMs = message.logFlushIntervalMs);
        message.logFlushSchedulerIntervalMs !== undefined &&
            (obj.logFlushSchedulerIntervalMs =
                message.logFlushSchedulerIntervalMs);
        message.logRetentionBytes !== undefined &&
            (obj.logRetentionBytes = message.logRetentionBytes);
        message.logRetentionHours !== undefined &&
            (obj.logRetentionHours = message.logRetentionHours);
        message.logRetentionMinutes !== undefined &&
            (obj.logRetentionMinutes = message.logRetentionMinutes);
        message.logRetentionMs !== undefined &&
            (obj.logRetentionMs = message.logRetentionMs);
        message.logSegmentBytes !== undefined &&
            (obj.logSegmentBytes = message.logSegmentBytes);
        message.logPreallocate !== undefined &&
            (obj.logPreallocate = message.logPreallocate);
        message.socketSendBufferBytes !== undefined &&
            (obj.socketSendBufferBytes = message.socketSendBufferBytes);
        message.socketReceiveBufferBytes !== undefined &&
            (obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes);
        message.autoCreateTopicsEnable !== undefined &&
            (obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable);
        message.numPartitions !== undefined &&
            (obj.numPartitions = message.numPartitions);
        message.defaultReplicationFactor !== undefined &&
            (obj.defaultReplicationFactor = message.defaultReplicationFactor);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseKafkaconfig26 };
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = object.compressionType;
        }
        else {
            message.compressionType = 0;
        }
        if (object.logFlushIntervalMessages !== undefined &&
            object.logFlushIntervalMessages !== null) {
            message.logFlushIntervalMessages = object.logFlushIntervalMessages;
        }
        else {
            message.logFlushIntervalMessages = undefined;
        }
        if (object.logFlushIntervalMs !== undefined &&
            object.logFlushIntervalMs !== null) {
            message.logFlushIntervalMs = object.logFlushIntervalMs;
        }
        else {
            message.logFlushIntervalMs = undefined;
        }
        if (object.logFlushSchedulerIntervalMs !== undefined &&
            object.logFlushSchedulerIntervalMs !== null) {
            message.logFlushSchedulerIntervalMs =
                object.logFlushSchedulerIntervalMs;
        }
        else {
            message.logFlushSchedulerIntervalMs = undefined;
        }
        if (object.logRetentionBytes !== undefined &&
            object.logRetentionBytes !== null) {
            message.logRetentionBytes = object.logRetentionBytes;
        }
        else {
            message.logRetentionBytes = undefined;
        }
        if (object.logRetentionHours !== undefined &&
            object.logRetentionHours !== null) {
            message.logRetentionHours = object.logRetentionHours;
        }
        else {
            message.logRetentionHours = undefined;
        }
        if (object.logRetentionMinutes !== undefined &&
            object.logRetentionMinutes !== null) {
            message.logRetentionMinutes = object.logRetentionMinutes;
        }
        else {
            message.logRetentionMinutes = undefined;
        }
        if (object.logRetentionMs !== undefined &&
            object.logRetentionMs !== null) {
            message.logRetentionMs = object.logRetentionMs;
        }
        else {
            message.logRetentionMs = undefined;
        }
        if (object.logSegmentBytes !== undefined &&
            object.logSegmentBytes !== null) {
            message.logSegmentBytes = object.logSegmentBytes;
        }
        else {
            message.logSegmentBytes = undefined;
        }
        if (object.logPreallocate !== undefined &&
            object.logPreallocate !== null) {
            message.logPreallocate = object.logPreallocate;
        }
        else {
            message.logPreallocate = undefined;
        }
        if (object.socketSendBufferBytes !== undefined &&
            object.socketSendBufferBytes !== null) {
            message.socketSendBufferBytes = object.socketSendBufferBytes;
        }
        else {
            message.socketSendBufferBytes = undefined;
        }
        if (object.socketReceiveBufferBytes !== undefined &&
            object.socketReceiveBufferBytes !== null) {
            message.socketReceiveBufferBytes = object.socketReceiveBufferBytes;
        }
        else {
            message.socketReceiveBufferBytes = undefined;
        }
        if (object.autoCreateTopicsEnable !== undefined &&
            object.autoCreateTopicsEnable !== null) {
            message.autoCreateTopicsEnable = object.autoCreateTopicsEnable;
        }
        else {
            message.autoCreateTopicsEnable = undefined;
        }
        if (object.numPartitions !== undefined &&
            object.numPartitions !== null) {
            message.numPartitions = object.numPartitions;
        }
        else {
            message.numPartitions = undefined;
        }
        if (object.defaultReplicationFactor !== undefined &&
            object.defaultReplicationFactor !== null) {
            message.defaultReplicationFactor = object.defaultReplicationFactor;
        }
        else {
            message.defaultReplicationFactor = undefined;
        }
        return message;
    },
};
const baseHost = {
    name: '',
    clusterId: '',
    zoneId: '',
    role: 0,
    health: 0,
    subnetId: '',
    assignPublicIp: false,
};
export const Host = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.zoneId !== '') {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.role !== 0) {
            writer.uint32(32).int32(message.role);
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        if (message.subnetId !== '') {
            writer.uint32(66).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.role = reader.int32();
                    break;
                case 5:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.health = reader.int32();
                    break;
                case 8:
                    message.subnetId = reader.string();
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHost };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = host_RoleFromJSON(object.role);
        }
        else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = host_HealthFromJSON(object.health);
        }
        else {
            message.health = 0;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null) {
            message.assignPublicIp = Boolean(object.assignPublicIp);
        }
        else {
            message.assignPublicIp = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.role !== undefined &&
            (obj.role = host_RoleToJSON(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHost };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        }
        else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        }
        else {
            message.health = 0;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null) {
            message.assignPublicIp = object.assignPublicIp;
        }
        else {
            message.assignPublicIp = false;
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
