/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../../google/protobuf/wrappers';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Mongodconfigset36, Mongocfgconfigset36, Mongosconfigset36, } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6';
import { Mongodconfigset40, Mongocfgconfigset40, Mongosconfigset40, } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0';
import { Mongodconfigset42, Mongocfgconfigset42, Mongosconfigset42, } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2';
import { Mongodconfigset44, Mongocfgconfigset44, Mongosconfigset44, } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4';
import { MaintenanceWindow, MaintenanceOperation, } from '../../../../../yandex/cloud/mdb/mongodb/v1/maintenance';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1';
/** Deployment environment. */
export var Cluster_Environment;
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
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
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
export var Host_Type;
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
})(Host_Type || (Host_Type = {}));
export function host_TypeFromJSON(object) {
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
export function host_TypeToJSON(object) {
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
export var Host_Role;
(function (Host_Role) {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    Host_Role[Host_Role["ROLE_UNKNOWN"] = 0] = "ROLE_UNKNOWN";
    /** PRIMARY - Host is the primary MongoDB server in the cluster. */
    Host_Role[Host_Role["PRIMARY"] = 1] = "PRIMARY";
    /** SECONDARY - Host is a secondary MongoDB server in the cluster. */
    Host_Role[Host_Role["SECONDARY"] = 2] = "SECONDARY";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role || (Host_Role = {}));
export function host_RoleFromJSON(object) {
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
export function host_RoleToJSON(object) {
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
export var Host_Health;
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
})(Host_Health || (Host_Health = {}));
export function host_HealthFromJSON(object) {
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
export function host_HealthToJSON(object) {
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
export var Service_Type;
(function (Service_Type) {
    Service_Type[Service_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** MONGOD - The host is running a mongod daemon. */
    Service_Type[Service_Type["MONGOD"] = 1] = "MONGOD";
    /** MONGOS - The host is running a mongos daemon. */
    Service_Type[Service_Type["MONGOS"] = 2] = "MONGOS";
    /** MONGOCFG - The host is running a MongoDB config server. */
    Service_Type[Service_Type["MONGOCFG"] = 3] = "MONGOCFG";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type || (Service_Type = {}));
export function service_TypeFromJSON(object) {
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
export function service_TypeToJSON(object) {
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
export var Service_Health;
(function (Service_Health) {
    /** HEALTH_UNKNOWN - Health of the server is unknown. */
    Service_Health[Service_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - The server is working normally. */
    Service_Health[Service_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The server is dead or unresponsive. */
    Service_Health[Service_Health["DEAD"] = 2] = "DEAD";
    Service_Health[Service_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Health || (Service_Health = {}));
export function service_HealthFromJSON(object) {
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
export function service_HealthToJSON(object) {
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
            ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
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
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(114).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(message.plannedOperation, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(130).string(v);
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
                    message.config = ClusterConfig.decode(reader, reader.uint32());
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
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.securityGroupIds.push(reader.string());
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
                message.monitoring.push(Monitoring.fromJSON(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = ClusterConfig.fromJSON(object.config);
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
            message.maintenanceWindow = MaintenanceWindow.fromJSON(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        if (object.plannedOperation !== undefined &&
            object.plannedOperation !== null) {
            message.plannedOperation = MaintenanceOperation.fromJSON(object.plannedOperation);
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
                ? ClusterConfig.toJSON(message.config)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.sharded !== undefined && (obj.sharded = message.sharded);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
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
                message.monitoring.push(Monitoring.fromPartial(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = ClusterConfig.fromPartial(object.config);
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
            message.maintenanceWindow = MaintenanceWindow.fromPartial(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        if (object.plannedOperation !== undefined &&
            object.plannedOperation !== null) {
            message.plannedOperation = MaintenanceOperation.fromPartial(object.plannedOperation);
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
const baseClusterConfig = {
    version: '',
    featureCompatibilityVersion: '',
};
export const ClusterConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.featureCompatibilityVersion !== '') {
            writer.uint32(42).string(message.featureCompatibilityVersion);
        }
        if (message.mongodb36 !== undefined) {
            Mongodb36.encode(message.mongodb36, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongodb40 !== undefined) {
            Mongodb40.encode(message.mongodb40, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongodb42 !== undefined) {
            Mongodb42.encode(message.mongodb42, writer.uint32(58).fork()).ldelim();
        }
        if (message.mongodb44 !== undefined) {
            Mongodb44.encode(message.mongodb44, writer.uint32(66).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(message.backupWindowStart, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            Int64Value.encode({ value: message.backupRetainPeriodDays }, writer.uint32(74).fork()).ldelim();
        }
        if (message.access !== undefined) {
            Access.encode(message.access, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.mongodb36 = Mongodb36.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongodb40 = Mongodb40.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mongodb42 = Mongodb42.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.mongodb44 = Mongodb44.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.backupRetainPeriodDays = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.access = Access.decode(reader, reader.uint32());
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
            message.mongodb36 = Mongodb36.fromJSON(object.mongodb36);
        }
        else {
            message.mongodb36 = undefined;
        }
        if (object.mongodb40 !== undefined && object.mongodb40 !== null) {
            message.mongodb40 = Mongodb40.fromJSON(object.mongodb40);
        }
        else {
            message.mongodb40 = undefined;
        }
        if (object.mongodb42 !== undefined && object.mongodb42 !== null) {
            message.mongodb42 = Mongodb42.fromJSON(object.mongodb42);
        }
        else {
            message.mongodb42 = undefined;
        }
        if (object.mongodb44 !== undefined && object.mongodb44 !== null) {
            message.mongodb44 = Mongodb44.fromJSON(object.mongodb44);
        }
        else {
            message.mongodb44 = undefined;
        }
        if (object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null) {
            message.backupWindowStart = TimeOfDay.fromJSON(object.backupWindowStart);
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
            message.access = Access.fromJSON(object.access);
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
                ? Mongodb36.toJSON(message.mongodb36)
                : undefined);
        message.mongodb40 !== undefined &&
            (obj.mongodb40 = message.mongodb40
                ? Mongodb40.toJSON(message.mongodb40)
                : undefined);
        message.mongodb42 !== undefined &&
            (obj.mongodb42 = message.mongodb42
                ? Mongodb42.toJSON(message.mongodb42)
                : undefined);
        message.mongodb44 !== undefined &&
            (obj.mongodb44 = message.mongodb44
                ? Mongodb44.toJSON(message.mongodb44)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.access !== undefined &&
            (obj.access = message.access
                ? Access.toJSON(message.access)
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
            message.mongodb36 = Mongodb36.fromPartial(object.mongodb36);
        }
        else {
            message.mongodb36 = undefined;
        }
        if (object.mongodb40 !== undefined && object.mongodb40 !== null) {
            message.mongodb40 = Mongodb40.fromPartial(object.mongodb40);
        }
        else {
            message.mongodb40 = undefined;
        }
        if (object.mongodb42 !== undefined && object.mongodb42 !== null) {
            message.mongodb42 = Mongodb42.fromPartial(object.mongodb42);
        }
        else {
            message.mongodb42 = undefined;
        }
        if (object.mongodb44 !== undefined && object.mongodb44 !== null) {
            message.mongodb44 = Mongodb44.fromPartial(object.mongodb44);
        }
        else {
            message.mongodb44 = undefined;
        }
        if (object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null) {
            message.backupWindowStart = TimeOfDay.fromPartial(object.backupWindowStart);
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
            message.access = Access.fromPartial(object.access);
        }
        else {
            message.access = undefined;
        }
        return message;
    },
};
const baseMongodb36 = {};
export const Mongodb36 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mongod !== undefined) {
            Mongodb36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodb36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodb36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodb36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodb36_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodb36_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodb36_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodb36_MongoInfra.decode(reader, reader.uint32());
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
            message.mongod = Mongodb36_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb36_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb36_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb36_MongoInfra.fromJSON(object.mongoinfra);
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
                ? Mongodb36_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodb36_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodb36_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodb36_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = Mongodb36_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb36_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb36_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb36_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb36_Mongod = {};
export const Mongodb36_Mongod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongodconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb36_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset36.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset36.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb36_MongoCfg = {};
export const Mongodb36_MongoCfg = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongocfgconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb36_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset36.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset36.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb36_Mongos = {};
export const Mongodb36_Mongos = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongosconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb36_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset36.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset36.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb36_MongoInfra = {};
export const Mongodb36_MongoInfra = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configMongos !== undefined) {
            Mongosconfigset36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfigset36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb36_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfigset36.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = { ...baseMongodb36_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset36.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset36.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
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
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfigset36.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfigset36.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb36_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset36.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset36.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40 = {};
export const Mongodb40 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mongod !== undefined) {
            Mongodb40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodb40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodb40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodb40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodb40_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodb40_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodb40_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodb40_MongoInfra.decode(reader, reader.uint32());
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
            message.mongod = Mongodb40_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb40_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb40_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb40_MongoInfra.fromJSON(object.mongoinfra);
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
                ? Mongodb40_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodb40_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodb40_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodb40_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = Mongodb40_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb40_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb40_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb40_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb40_Mongod = {};
export const Mongodb40_Mongod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongodconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb40_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset40.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset40.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40_MongoCfg = {};
export const Mongodb40_MongoCfg = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongocfgconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb40_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset40.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset40.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40_Mongos = {};
export const Mongodb40_Mongos = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongosconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb40_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset40.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset40.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb40_MongoInfra = {};
export const Mongodb40_MongoInfra = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configMongos !== undefined) {
            Mongosconfigset40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfigset40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb40_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfigset40.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = { ...baseMongodb40_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset40.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset40.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
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
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfigset40.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfigset40.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb40_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset40.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset40.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42 = {};
export const Mongodb42 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mongod !== undefined) {
            Mongodb42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodb42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodb42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodb42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodb42_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodb42_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodb42_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodb42_MongoInfra.decode(reader, reader.uint32());
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
            message.mongod = Mongodb42_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb42_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb42_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb42_MongoInfra.fromJSON(object.mongoinfra);
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
                ? Mongodb42_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodb42_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodb42_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodb42_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = Mongodb42_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb42_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb42_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb42_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb42_Mongod = {};
export const Mongodb42_Mongod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongodconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb42_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset42.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset42.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42_MongoCfg = {};
export const Mongodb42_MongoCfg = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongocfgconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb42_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset42.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset42.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42_Mongos = {};
export const Mongodb42_Mongos = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongosconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb42_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset42.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset42.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb42_MongoInfra = {};
export const Mongodb42_MongoInfra = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configMongos !== undefined) {
            Mongosconfigset42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfigset42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb42_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfigset42.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = { ...baseMongodb42_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset42.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset42.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
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
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfigset42.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfigset42.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb42_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset42.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset42.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44 = {};
export const Mongodb44 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mongod !== undefined) {
            Mongodb44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodb44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodb44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodb44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodb44_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodb44_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodb44_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodb44_MongoInfra.decode(reader, reader.uint32());
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
            message.mongod = Mongodb44_Mongod.fromJSON(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb44_MongoCfg.fromJSON(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb44_Mongos.fromJSON(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb44_MongoInfra.fromJSON(object.mongoinfra);
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
                ? Mongodb44_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodb44_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodb44_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodb44_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44 };
        if (object.mongod !== undefined && object.mongod !== null) {
            message.mongod = Mongodb44_Mongod.fromPartial(object.mongod);
        }
        else {
            message.mongod = undefined;
        }
        if (object.mongocfg !== undefined && object.mongocfg !== null) {
            message.mongocfg = Mongodb44_MongoCfg.fromPartial(object.mongocfg);
        }
        else {
            message.mongocfg = undefined;
        }
        if (object.mongos !== undefined && object.mongos !== null) {
            message.mongos = Mongodb44_Mongos.fromPartial(object.mongos);
        }
        else {
            message.mongos = undefined;
        }
        if (object.mongoinfra !== undefined && object.mongoinfra !== null) {
            message.mongoinfra = Mongodb44_MongoInfra.fromPartial(object.mongoinfra);
        }
        else {
            message.mongoinfra = undefined;
        }
        return message;
    },
};
const baseMongodb44_Mongod = {};
export const Mongodb44_Mongod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongodconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_Mongod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb44_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset44.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_Mongod };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongodconfigset44.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44_MongoCfg = {};
export const Mongodb44_MongoCfg = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongocfgconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_MongoCfg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb44_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset44.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_MongoCfg };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongocfgconfigset44.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44_Mongos = {};
export const Mongodb44_Mongos = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Mongosconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_Mongos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseMongodb44_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset44.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
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
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_Mongos };
        if (object.config !== undefined && object.config !== null) {
            message.config = Mongosconfigset44.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseMongodb44_MongoInfra = {};
export const Mongodb44_MongoInfra = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configMongos !== undefined) {
            Mongosconfigset44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfigset44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodb44_MongoInfra };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfigset44.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = { ...baseMongodb44_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset44.fromJSON(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset44.fromJSON(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
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
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfigset44.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfigset44.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodb44_MongoInfra };
        if (object.configMongos !== undefined && object.configMongos !== null) {
            message.configMongos = Mongosconfigset44.fromPartial(object.configMongos);
        }
        else {
            message.configMongos = undefined;
        }
        if (object.configMongocfg !== undefined &&
            object.configMongocfg !== null) {
            message.configMongocfg = Mongocfgconfigset44.fromPartial(object.configMongocfg);
        }
        else {
            message.configMongocfg = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        return message;
    },
};
const baseShard = { name: '', clusterId: '' };
export const Shard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
        }
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        for (const v of message.services) {
            Service.encode(v, writer.uint32(58).fork()).ldelim();
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.role = reader.int32();
                    break;
                case 6:
                    message.health = reader.int32();
                    break;
                case 7:
                    message.services.push(Service.decode(reader, reader.uint32()));
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
            message.resources = Resources.fromJSON(object.resources);
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
                message.services.push(Service.fromJSON(e));
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
                ? Resources.toJSON(message.resources)
                : undefined);
        message.role !== undefined &&
            (obj.role = host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        if (message.services) {
            obj.services = message.services.map((e) => e ? Service.toJSON(e) : undefined);
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
            message.resources = Resources.fromPartial(object.resources);
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
                message.services.push(Service.fromPartial(e));
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
export const Service = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.health !== 0) {
            writer.uint32(16).int32(message.health);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseAccess = { dataLens: false };
export const Access = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
