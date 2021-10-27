"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongodb50 = exports.Mongodb44_MongoInfra = exports.Mongodb44_Mongos = exports.Mongodb44_MongoCfg = exports.Mongodb44_Mongod = exports.Mongodb44 = exports.Mongodb42_MongoInfra = exports.Mongodb42_Mongos = exports.Mongodb42_MongoCfg = exports.Mongodb42_Mongod = exports.Mongodb42 = exports.Mongodb40_MongoInfra = exports.Mongodb40_Mongos = exports.Mongodb40_MongoCfg = exports.Mongodb40_Mongod = exports.Mongodb40 = exports.Mongodb36_MongoInfra = exports.Mongodb36_Mongos = exports.Mongodb36_MongoCfg = exports.Mongodb36_Mongod = exports.Mongodb36 = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.service_HealthToJSON = exports.service_HealthFromJSON = exports.Service_Health = exports.service_TypeToJSON = exports.service_TypeFromJSON = exports.Service_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_RoleToJSON = exports.host_RoleFromJSON = exports.Host_Role = exports.host_TypeToJSON = exports.host_TypeFromJSON = exports.Host_Type = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
exports.Access = exports.Resources = exports.Service = exports.Host = exports.Shard = exports.Mongodb50_MongoInfra = exports.Mongodb50_Mongos = exports.Mongodb50_MongoCfg = exports.Mongodb50_Mongod = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
const timeofday_1 = require("../../../../../google/type/timeofday");
const mongodb3_6_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6");
const mongodb4_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0");
const mongodb4_2_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2");
const mongodb4_4_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4");
const mongodb5_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/maintenance");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mongodb.v1';
/** Deployment environment. */
var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /**
     * PRODUCTION - Stable environment with a conservative update policy: only hotfixes
     * are applied during regular maintenance.
     */
    Cluster_Environment[Cluster_Environment["PRODUCTION"] = 1] = "PRODUCTION";
    /**
     * PRESTABLE - Environment with more aggressive update policy: new versions
     * are rolled out irrespective of backward compatibility.
     */
    Cluster_Environment[Cluster_Environment["PRESTABLE"] = 2] = "PRESTABLE";
    Cluster_Environment[Cluster_Environment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Environment = exports.Cluster_Environment || (exports.Cluster_Environment = {}));
function cluster_EnvironmentFromJSON(object) {
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
exports.cluster_EnvironmentFromJSON = cluster_EnvironmentFromJSON;
function cluster_EnvironmentToJSON(object) {
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
exports.cluster_EnvironmentToJSON = cluster_EnvironmentToJSON;
var Cluster_Health;
(function (Cluster_Health) {
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    Cluster_Health[Cluster_Health["DEGRADED"] = 3] = "DEGRADED";
    Cluster_Health[Cluster_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Health = exports.Cluster_Health || (exports.Cluster_Health = {}));
function cluster_HealthFromJSON(object) {
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
exports.cluster_HealthFromJSON = cluster_HealthFromJSON;
function cluster_HealthToJSON(object) {
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
exports.cluster_HealthToJSON = cluster_HealthToJSON;
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
    /** UPDATING - Cluster is being updated. */
    Cluster_Status[Cluster_Status["UPDATING"] = 4] = "UPDATING";
    /** STOPPING - Cluster is stopping. */
    Cluster_Status[Cluster_Status["STOPPING"] = 5] = "STOPPING";
    /** STOPPED - Cluster stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 6] = "STOPPED";
    /** STARTING - Cluster is starting. */
    Cluster_Status[Cluster_Status["STARTING"] = 7] = "STARTING";
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
exports.cluster_StatusToJSON = cluster_StatusToJSON;
var Host_Type;
(function (Host_Type) {
    Host_Type[Host_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** MONGOD - A mongod host. */
    Host_Type[Host_Type["MONGOD"] = 1] = "MONGOD";
    /** MONGOS - A mongos host. */
    Host_Type[Host_Type["MONGOS"] = 2] = "MONGOS";
    /** MONGOCFG - A mongocfg host. */
    Host_Type[Host_Type["MONGOCFG"] = 3] = "MONGOCFG";
    /** MONGOINFRA - A mongoinfra (mongos+mongocfg) host. */
    Host_Type[Host_Type["MONGOINFRA"] = 4] = "MONGOINFRA";
    Host_Type[Host_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Type = exports.Host_Type || (exports.Host_Type = {}));
function host_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'MONGOD':
            return Host_Type.MONGOD;
        case 2:
        case 'MONGOS':
            return Host_Type.MONGOS;
        case 3:
        case 'MONGOCFG':
            return Host_Type.MONGOCFG;
        case 4:
        case 'MONGOINFRA':
            return Host_Type.MONGOINFRA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Type.UNRECOGNIZED;
    }
}
exports.host_TypeFromJSON = host_TypeFromJSON;
function host_TypeToJSON(object) {
    switch (object) {
        case Host_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Host_Type.MONGOD:
            return 'MONGOD';
        case Host_Type.MONGOS:
            return 'MONGOS';
        case Host_Type.MONGOCFG:
            return 'MONGOCFG';
        case Host_Type.MONGOINFRA:
            return 'MONGOINFRA';
        default:
            return 'UNKNOWN';
    }
}
exports.host_TypeToJSON = host_TypeToJSON;
var Host_Role;
(function (Host_Role) {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    Host_Role[Host_Role["ROLE_UNKNOWN"] = 0] = "ROLE_UNKNOWN";
    /** PRIMARY - Host is the primary MongoDB server in the cluster. */
    Host_Role[Host_Role["PRIMARY"] = 1] = "PRIMARY";
    /** SECONDARY - Host is a secondary MongoDB server in the cluster. */
    Host_Role[Host_Role["SECONDARY"] = 2] = "SECONDARY";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role = exports.Host_Role || (exports.Host_Role = {}));
function host_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case 'ROLE_UNKNOWN':
            return Host_Role.ROLE_UNKNOWN;
        case 1:
        case 'PRIMARY':
            return Host_Role.PRIMARY;
        case 2:
        case 'SECONDARY':
            return Host_Role.SECONDARY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Role.UNRECOGNIZED;
    }
}
exports.host_RoleFromJSON = host_RoleFromJSON;
function host_RoleToJSON(object) {
    switch (object) {
        case Host_Role.ROLE_UNKNOWN:
            return 'ROLE_UNKNOWN';
        case Host_Role.PRIMARY:
            return 'PRIMARY';
        case Host_Role.SECONDARY:
            return 'SECONDARY';
        default:
            return 'UNKNOWN';
    }
}
exports.host_RoleToJSON = host_RoleToJSON;
var Host_Health;
(function (Host_Health) {
    /** HEALTH_UNKNOWN - Health of the host is unknown. */
    Host_Health[Host_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - The host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
    Host_Health[Host_Health["DEGRADED"] = 3] = "DEGRADED";
    Host_Health[Host_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Health = exports.Host_Health || (exports.Host_Health = {}));
function host_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Host_Health.HEALTH_UNKNOWN;
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
exports.host_HealthFromJSON = host_HealthFromJSON;
function host_HealthToJSON(object) {
    switch (object) {
        case Host_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
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
exports.host_HealthToJSON = host_HealthToJSON;
var Service_Type;
(function (Service_Type) {
    Service_Type[Service_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** MONGOD - The host is running a mongod daemon. */
    Service_Type[Service_Type["MONGOD"] = 1] = "MONGOD";
    /** MONGOS - The host is running a mongos daemon. */
    Service_Type[Service_Type["MONGOS"] = 2] = "MONGOS";
    /** MONGOCFG - The host is running a MongoDB config server. */
    Service_Type[Service_Type["MONGOCFG"] = 3] = "MONGOCFG";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type = exports.Service_Type || (exports.Service_Type = {}));
function service_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'MONGOD':
            return Service_Type.MONGOD;
        case 2:
        case 'MONGOS':
            return Service_Type.MONGOS;
        case 3:
        case 'MONGOCFG':
            return Service_Type.MONGOCFG;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Service_Type.UNRECOGNIZED;
    }
}
exports.service_TypeFromJSON = service_TypeFromJSON;
function service_TypeToJSON(object) {
    switch (object) {
        case Service_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Service_Type.MONGOD:
            return 'MONGOD';
        case Service_Type.MONGOS:
            return 'MONGOS';
        case Service_Type.MONGOCFG:
            return 'MONGOCFG';
        default:
            return 'UNKNOWN';
    }
}
exports.service_TypeToJSON = service_TypeToJSON;
var Service_Health;
(function (Service_Health) {
    /** HEALTH_UNKNOWN - Health of the server is unknown. */
    Service_Health[Service_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - The server is working normally. */
    Service_Health[Service_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The server is dead or unresponsive. */
    Service_Health[Service_Health["DEAD"] = 2] = "DEAD";
    Service_Health[Service_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Health = exports.Service_Health || (exports.Service_Health = {}));
function service_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Service_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Service_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Service_Health.DEAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Service_Health.UNRECOGNIZED;
    }
}
exports.service_HealthFromJSON = service_HealthFromJSON;
function service_HealthToJSON(object) {
    switch (object) {
        case Service_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Service_Health.ALIVE:
            return 'ALIVE';
        case Service_Health.DEAD:
            return 'DEAD';
        default:
            return 'UNKNOWN';
    }
}
exports.service_HealthToJSON = service_HealthToJSON;
const baseCluster = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    health: 0,
    status: 0,
    sharded: false,
    securityGroupIds: '',
    deletionProtection: false,
};
exports.Cluster = {
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
            exports.Cluster_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        for (const v of message.monitoring) {
            exports.Monitoring.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
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
        if (message.sharded === true) {
            writer.uint32(104).bool(message.sharded);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(114).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            maintenance_1.MaintenanceOperation.encode(message.plannedOperation, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(130).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(136).bool(message.deletionProtection);
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
                    message.environment = reader.int32();
                    break;
                case 8:
                    message.monitoring.push(exports.Monitoring.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.config = exports.ClusterConfig.decode(reader, reader.uint32());
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
                    message.sharded = reader.bool();
                    break;
                case 14:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.plannedOperation = maintenance_1.MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 17:
                    message.deletionProtection = reader.bool();
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
                message.monitoring.push(exports.Monitoring.fromJSON(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.ClusterConfig.fromJSON(object.config);
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
        if (object.sharded !== undefined && object.sharded !== null) {
            message.sharded = Boolean(object.sharded);
        }
        else {
            message.sharded = false;
        }
        if (object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null) {
            message.maintenanceWindow = maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        if (object.plannedOperation !== undefined &&
            object.plannedOperation !== null) {
            message.plannedOperation = maintenance_1.MaintenanceOperation.fromJSON(object.plannedOperation);
        }
        else {
            message.plannedOperation = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
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
            obj.monitoring = message.monitoring.map((e) => e ? exports.Monitoring.toJSON(e) : undefined);
        }
        else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.ClusterConfig.toJSON(message.config)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.sharded !== undefined && (obj.sharded = message.sharded);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? maintenance_1.MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCluster };
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
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
                message.monitoring.push(exports.Monitoring.fromPartial(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.ClusterConfig.fromPartial(object.config);
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
        if (object.sharded !== undefined && object.sharded !== null) {
            message.sharded = object.sharded;
        }
        else {
            message.sharded = false;
        }
        if (object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null) {
            message.maintenanceWindow = maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        if (object.plannedOperation !== undefined &&
            object.plannedOperation !== null) {
            message.plannedOperation = maintenance_1.MaintenanceOperation.fromPartial(object.plannedOperation);
        }
        else {
            message.plannedOperation = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
};
const baseCluster_LabelsEntry = { key: '', value: '' };
exports.Cluster_LabelsEntry = {
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
const baseMonitoring = { name: '', description: '', link: '' };
exports.Monitoring = {
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
const baseClusterConfig = {
    version: '',
    featureCompatibilityVersion: '',
};
exports.ClusterConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.featureCompatibilityVersion !== '') {
            writer.uint32(42).string(message.featureCompatibilityVersion);
        }
        if (message.mongodb36 !== undefined) {
            exports.Mongodb36.encode(message.mongodb36, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongodb40 !== undefined) {
            exports.Mongodb40.encode(message.mongodb40, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongodb42 !== undefined) {
            exports.Mongodb42.encode(message.mongodb42, writer.uint32(58).fork()).ldelim();
        }
        if (message.mongodb44 !== undefined) {
            exports.Mongodb44.encode(message.mongodb44, writer.uint32(66).fork()).ldelim();
        }
        if (message.mongodb50 !== undefined) {
            exports.Mongodb50.encode(message.mongodb50, writer.uint32(82).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.backupRetainPeriodDays }, writer.uint32(74).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(50).fork()).ldelim();
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
                    message.version = reader.string();
                    break;
                case 5:
                    message.featureCompatibilityVersion = reader.string();
                    break;
                case 2:
                    message.mongodb36 = exports.Mongodb36.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongodb40 = exports.Mongodb40.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mongodb42 = exports.Mongodb42.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.mongodb44 = exports.Mongodb44.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.mongodb50 = exports.Mongodb50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.backupRetainPeriodDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.access = exports.Access.decode(reader, reader.uint32());
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
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.featureCompatibilityVersion !== undefined &&
            object.featureCompatibilityVersion !== null) {
            message.featureCompatibilityVersion = String(object.featureCompatibilityVersion);
        }
        else {
            message.featureCompatibilityVersion = '';
        }
        if (object.mongodb36 !== undefined && object.mongodb36 !== null) {
            message.mongodb36 = exports.Mongodb36.fromJSON(object.mongodb36);
        }
        else {
            message.mongodb36 = undefined;
        }
        if (object.mongodb40 !== undefined && object.mongodb40 !== null) {
            message.mongodb40 = exports.Mongodb40.fromJSON(object.mongodb40);
        }
        else {
            message.mongodb40 = undefined;
        }
        if (object.mongodb42 !== undefined && object.mongodb42 !== null) {
            message.mongodb42 = exports.Mongodb42.fromJSON(object.mongodb42);
        }
        else {
            message.mongodb42 = undefined;
        }
        if (object.mongodb44 !== undefined && object.mongodb44 !== null) {
            message.mongodb44 = exports.Mongodb44.fromJSON(object.mongodb44);
        }
        else {
            message.mongodb44 = undefined;
        }
        if (object.mongodb50 !== undefined && object.mongodb50 !== null) {
            message.mongodb50 = exports.Mongodb50.fromJSON(object.mongodb50);
        }
        else {
            message.mongodb50 = undefined;
        }
        if (object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null) {
            message.backupWindowStart = timeofday_1.TimeOfDay.fromJSON(object.backupWindowStart);
        }
        else {
            message.backupWindowStart = undefined;
        }
        if (object.backupRetainPeriodDays !== undefined &&
            object.backupRetainPeriodDays !== null) {
            message.backupRetainPeriodDays = Number(object.backupRetainPeriodDays);
        }
        else {
            message.backupRetainPeriodDays = undefined;
        }
        if (object.access !== undefined && object.access !== null) {
            message.access = exports.Access.fromJSON(object.access);
        }
        else {
            message.access = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.featureCompatibilityVersion !== undefined &&
            (obj.featureCompatibilityVersion =
                message.featureCompatibilityVersion);
        message.mongodb36 !== undefined &&
            (obj.mongodb36 = message.mongodb36
                ? exports.Mongodb36.toJSON(message.mongodb36)
                : undefined);
        message.mongodb40 !== undefined &&
            (obj.mongodb40 = message.mongodb40
                ? exports.Mongodb40.toJSON(message.mongodb40)
                : undefined);
        message.mongodb42 !== undefined &&
            (obj.mongodb42 = message.mongodb42
                ? exports.Mongodb42.toJSON(message.mongodb42)
                : undefined);
        message.mongodb44 !== undefined &&
            (obj.mongodb44 = message.mongodb44
                ? exports.Mongodb44.toJSON(message.mongodb44)
                : undefined);
        message.mongodb50 !== undefined &&
            (obj.mongodb50 = message.mongodb50
                ? exports.Mongodb50.toJSON(message.mongodb50)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.access !== undefined &&
            (obj.access = message.access
                ? exports.Access.toJSON(message.access)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClusterConfig };
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.featureCompatibilityVersion !== undefined &&
            object.featureCompatibilityVersion !== null) {
            message.featureCompatibilityVersion =
                object.featureCompatibilityVersion;
        }
        else {
            message.featureCompatibilityVersion = '';
        }
        if (object.mongodb36 !== undefined && object.mongodb36 !== null) {
            message.mongodb36 = exports.Mongodb36.fromPartial(object.mongodb36);
        }
        else {
            message.mongodb36 = undefined;
        }
        if (object.mongodb40 !== undefined && object.mongodb40 !== null) {
            message.mongodb40 = exports.Mongodb40.fromPartial(object.mongodb40);
        }
        else {
            message.mongodb40 = undefined;
        }
        if (object.mongodb42 !== undefined && object.mongodb42 !== null) {
            message.mongodb42 = exports.Mongodb42.fromPartial(object.mongodb42);
        }
        else {
            message.mongodb42 = undefined;
        }
        if (object.mongodb44 !== undefined && object.mongodb44 !== null) {
            message.mongodb44 = exports.Mongodb44.fromPartial(object.mongodb44);
        }
        else {
            message.mongodb44 = undefined;
        }
        if (object.mongodb50 !== undefined && object.mongodb50 !== null) {
            message.mongodb50 = exports.Mongodb50.fromPartial(object.mongodb50);
        }
        else {
            message.mongodb50 = undefined;
        }
        if (object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null) {
            message.backupWindowStart = timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart);
        }
        else {
            message.backupWindowStart = undefined;
        }
        if (object.backupRetainPeriodDays !== undefined &&
            object.backupRetainPeriodDays !== null) {
            message.backupRetainPeriodDays = object.backupRetainPeriodDays;
        }
        else {
            message.backupRetainPeriodDays = undefined;
        }
        if (object.access !== undefined && object.access !== null) {
            message.access = exports.Access.fromPartial(object.access);
        }
        else {
            message.access = undefined;
        }
        return message;
    },
};
const baseMongodb36 = {};
exports.Mongodb36 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb36_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb36_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb36_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb36_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb36 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb36_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb36_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb36_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb36_MongoInfra.fromJSON(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb36_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb36_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb36_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb36_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb36_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb36_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb36_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb36_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb36_Mongod = {};
exports.Mongodb36_Mongod = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongodconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongodconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb36_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb3_6_1.Mongodconfigset36.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb3_6_1.Mongodconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb3_6_1.Mongodconfigset36.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb36_MongoCfg = {};
exports.Mongodb36_MongoCfg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongocfgconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongocfgconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb36_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb3_6_1.Mongocfgconfigset36.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb3_6_1.Mongocfgconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb3_6_1.Mongocfgconfigset36.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb36_Mongos = {};
exports.Mongodb36_Mongos = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongosconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongosconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb36_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb3_6_1.Mongosconfigset36.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb3_6_1.Mongosconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb3_6_1.Mongosconfigset36.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb36_MongoInfra = {};
exports.Mongodb36_MongoInfra = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb3_6_1.Mongosconfigset36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb3_6_1.Mongocfgconfigset36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb3_6_1.Mongosconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb3_6_1.Mongocfgconfigset36.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb36_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb3_6_1.Mongosconfigset36.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb3_6_1.Mongocfgconfigset36.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb3_6_1.Mongosconfigset36.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb3_6_1.Mongocfgconfigset36.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb3_6_1.Mongosconfigset36.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb3_6_1.Mongocfgconfigset36.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40 = {};
exports.Mongodb40 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb40_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb40_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb40_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb40_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb40 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb40_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb40_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb40_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb40_MongoInfra.fromJSON(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb40_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb40_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb40_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb40_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb40_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb40_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb40_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb40_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb40_Mongod = {};
exports.Mongodb40_Mongod = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongodconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongodconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb40_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_0_1.Mongodconfigset40.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_0_1.Mongodconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_0_1.Mongodconfigset40.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40_MongoCfg = {};
exports.Mongodb40_MongoCfg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongocfgconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongocfgconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb40_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_0_1.Mongocfgconfigset40.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_0_1.Mongocfgconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_0_1.Mongocfgconfigset40.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40_Mongos = {};
exports.Mongodb40_Mongos = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongosconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongosconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb40_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_0_1.Mongosconfigset40.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_0_1.Mongosconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_0_1.Mongosconfigset40.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40_MongoInfra = {};
exports.Mongodb40_MongoInfra = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_0_1.Mongosconfigset40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_0_1.Mongocfgconfigset40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_0_1.Mongosconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_0_1.Mongocfgconfigset40.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb40_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb4_0_1.Mongosconfigset40.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb4_0_1.Mongocfgconfigset40.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_0_1.Mongosconfigset40.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_0_1.Mongocfgconfigset40.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb4_0_1.Mongosconfigset40.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb4_0_1.Mongocfgconfigset40.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42 = {};
exports.Mongodb42 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb42_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb42_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb42_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb42_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb42 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb42_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb42_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb42_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb42_MongoInfra.fromJSON(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb42_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb42_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb42_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb42_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb42_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb42_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb42_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb42_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb42_Mongod = {};
exports.Mongodb42_Mongod = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongodconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongodconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb42_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_2_1.Mongodconfigset42.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_2_1.Mongodconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_2_1.Mongodconfigset42.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42_MongoCfg = {};
exports.Mongodb42_MongoCfg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongocfgconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongocfgconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb42_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_2_1.Mongocfgconfigset42.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_2_1.Mongocfgconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_2_1.Mongocfgconfigset42.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42_Mongos = {};
exports.Mongodb42_Mongos = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongosconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongosconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb42_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_2_1.Mongosconfigset42.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_2_1.Mongosconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_2_1.Mongosconfigset42.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42_MongoInfra = {};
exports.Mongodb42_MongoInfra = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_2_1.Mongosconfigset42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_2_1.Mongocfgconfigset42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_2_1.Mongosconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_2_1.Mongocfgconfigset42.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb42_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb4_2_1.Mongosconfigset42.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb4_2_1.Mongocfgconfigset42.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_2_1.Mongosconfigset42.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_2_1.Mongocfgconfigset42.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb4_2_1.Mongosconfigset42.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb4_2_1.Mongocfgconfigset42.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44 = {};
exports.Mongodb44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb44_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb44_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb44_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb44_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb44 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb44_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb44_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb44_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb44_MongoInfra.fromJSON(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb44_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb44_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb44_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb44_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb44_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb44_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb44_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb44_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb44_Mongod = {};
exports.Mongodb44_Mongod = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongodconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongodconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb44_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_4_1.Mongodconfigset44.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_4_1.Mongodconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_4_1.Mongodconfigset44.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44_MongoCfg = {};
exports.Mongodb44_MongoCfg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongocfgconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongocfgconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb44_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_4_1.Mongocfgconfigset44.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_4_1.Mongocfgconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_4_1.Mongocfgconfigset44.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44_Mongos = {};
exports.Mongodb44_Mongos = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongosconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongosconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb44_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_4_1.Mongosconfigset44.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb4_4_1.Mongosconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb4_4_1.Mongosconfigset44.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44_MongoInfra = {};
exports.Mongodb44_MongoInfra = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_4_1.Mongosconfigset44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_4_1.Mongocfgconfigset44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_4_1.Mongosconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_4_1.Mongocfgconfigset44.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb44_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb4_4_1.Mongosconfigset44.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb4_4_1.Mongocfgconfigset44.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_4_1.Mongosconfigset44.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_4_1.Mongocfgconfigset44.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb4_4_1.Mongosconfigset44.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb4_4_1.Mongocfgconfigset44.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb50 = {};
exports.Mongodb50 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb50_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb50_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb50_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb50_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb50_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb50_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb50_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb50_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb50 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb50_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb50_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb50_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb50_MongoInfra.fromJSON(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb50_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb50_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb50_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb50_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb50 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = exports.Mongodb50_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = exports.Mongodb50_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = exports.Mongodb50_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = exports.Mongodb50_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb50_Mongod = {};
exports.Mongodb50_Mongod = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongodconfigset50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb50_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongodconfigset50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb50_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb5_0_1.Mongodconfigset50.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb5_0_1.Mongodconfigset50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb50_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb5_0_1.Mongodconfigset50.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb50_MongoCfg = {};
exports.Mongodb50_MongoCfg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongocfgconfigset50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb50_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongocfgconfigset50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb50_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb5_0_1.Mongocfgconfigset50.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb5_0_1.Mongocfgconfigset50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb50_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb5_0_1.Mongocfgconfigset50.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb50_Mongos = {};
exports.Mongodb50_Mongos = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongosconfigset50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb50_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongosconfigset50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb50_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb5_0_1.Mongosconfigset50.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? mongodb5_0_1.Mongosconfigset50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb50_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = mongodb5_0_1.Mongosconfigset50.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb50_MongoInfra = {};
exports.Mongodb50_MongoInfra = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb5_0_1.Mongosconfigset50.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb5_0_1.Mongocfgconfigset50.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb50_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb5_0_1.Mongosconfigset50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb5_0_1.Mongocfgconfigset50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodb50_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb5_0_1.Mongosconfigset50.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb5_0_1.Mongocfgconfigset50.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb5_0_1.Mongosconfigset50.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb5_0_1.Mongocfgconfigset50.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb50_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = mongodb5_0_1.Mongosconfigset50.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = mongodb5_0_1.Mongocfgconfigset50.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseShard = { name: '', clusterId: '' };
exports.Shard = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseShard };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseShard };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseShard };
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
    shardName: '',
    type: 0,
};
exports.Host = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.zoneId !== '') {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
        }
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        for (const v of message.services) {
            exports.Service.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(66).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        if (message.shardName !== '') {
            writer.uint32(82).string(message.shardName);
        }
        if (message.type !== 0) {
            writer.uint32(88).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost };
        message.services = [];
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
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.role = reader.int32();
                    break;
                case 6:
                    message.health = reader.int32();
                    break;
                case 7:
                    message.services.push(exports.Service.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.subnetId = reader.string();
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                case 10:
                    message.shardName = reader.string();
                    break;
                case 11:
                    message.type = reader.int32();
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
        message.services = [];
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
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = host_RoleFromJSON(object.role);
        }
        else {
            message.role = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = host_HealthFromJSON(object.health);
        }
        else {
            message.health = 0;
        }
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(exports.Service.fromJSON(e));
            }
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
        if (object.shardName !== undefined && object.shardName !== null) {
            message.shardName = String(object.shardName);
        }
        else {
            message.shardName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = host_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.role !== undefined &&
            (obj.role = host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        if (message.services) {
            obj.services = message.services.map((e) => e ? exports.Service.toJSON(e) : undefined);
        }
        else {
            obj.services = [];
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.type !== undefined &&
            (obj.type = host_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHost };
        message.services = [];
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
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        }
        else {
            message.role = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        }
        else {
            message.health = 0;
        }
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(exports.Service.fromPartial(e));
            }
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
        if (object.shardName !== undefined && object.shardName !== null) {
            message.shardName = object.shardName;
        }
        else {
            message.shardName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
const baseService = { type: 0, health: 0 };
exports.Service = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.health !== 0) {
            writer.uint32(16).int32(message.health);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.health = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseService };
        if (object.type !== undefined && object.type !== null) {
            message.type = service_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = service_HealthFromJSON(object.health);
        }
        else {
            message.health = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = service_TypeToJSON(message.type));
        message.health !== undefined &&
            (obj.health = service_HealthToJSON(message.health));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseService };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        }
        else {
            message.health = 0;
        }
        return message;
    },
};
const baseResources = {
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};
exports.Resources = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
const baseAccess = { dataLens: false };
exports.Access = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccess };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataLens = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAccess };
        if (object.dataLens !== undefined && object.dataLens !== null) {
            message.dataLens = Boolean(object.dataLens);
        }
        else {
            message.dataLens = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAccess };
        if (object.dataLens !== undefined && object.dataLens !== null) {
            message.dataLens = object.dataLens;
        }
        else {
            message.dataLens = false;
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
