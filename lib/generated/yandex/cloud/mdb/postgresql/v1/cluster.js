"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceDiagnostics = exports.Access = exports.Resources = exports.Service = exports.HostConfig = exports.Host = exports.ConnectionPoolerConfig = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.service_HealthToJSON = exports.service_HealthFromJSON = exports.Service_Health = exports.service_TypeToJSON = exports.service_TypeFromJSON = exports.Service_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_ReplicaTypeToJSON = exports.host_ReplicaTypeFromJSON = exports.Host_ReplicaType = exports.host_RoleToJSON = exports.host_RoleFromJSON = exports.Host_Role = exports.connectionPoolerConfig_PoolingModeToJSON = exports.connectionPoolerConfig_PoolingModeFromJSON = exports.ConnectionPoolerConfig_PoolingMode = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
const timeofday_1 = require("../../../../../google/type/timeofday");
const typeRegistry_1 = require("../../../../../typeRegistry");
const host9_6_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6");
const host10_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host10");
const host10_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c");
const host11_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host11");
const host11_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c");
const host12_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host12");
const host12_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c");
const host13_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host13");
const postgresql9_6_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6");
const postgresql10_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10");
const postgresql10_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c");
const postgresql11_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11");
const postgresql11_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c");
const postgresql12_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12");
const postgresql12_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c");
const postgresql13_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/maintenance");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.postgresql.v1';
var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /**
     * PRODUCTION - Stable environment with a conservative update policy:
     * only hotfixes are applied during regular maintenance.
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
var ConnectionPoolerConfig_PoolingMode;
(function (ConnectionPoolerConfig_PoolingMode) {
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["POOLING_MODE_UNSPECIFIED"] = 0] = "POOLING_MODE_UNSPECIFIED";
    /** SESSION - Session pooling mode. */
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["SESSION"] = 1] = "SESSION";
    /** TRANSACTION - Transaction pooling mode. */
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["TRANSACTION"] = 2] = "TRANSACTION";
    /** STATEMENT - Statement pooling mode. */
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["STATEMENT"] = 3] = "STATEMENT";
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ConnectionPoolerConfig_PoolingMode = exports.ConnectionPoolerConfig_PoolingMode || (exports.ConnectionPoolerConfig_PoolingMode = {}));
function connectionPoolerConfig_PoolingModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'POOLING_MODE_UNSPECIFIED':
            return ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED;
        case 1:
        case 'SESSION':
            return ConnectionPoolerConfig_PoolingMode.SESSION;
        case 2:
        case 'TRANSACTION':
            return ConnectionPoolerConfig_PoolingMode.TRANSACTION;
        case 3:
        case 'STATEMENT':
            return ConnectionPoolerConfig_PoolingMode.STATEMENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ConnectionPoolerConfig_PoolingMode.UNRECOGNIZED;
    }
}
exports.connectionPoolerConfig_PoolingModeFromJSON = connectionPoolerConfig_PoolingModeFromJSON;
function connectionPoolerConfig_PoolingModeToJSON(object) {
    switch (object) {
        case ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED:
            return 'POOLING_MODE_UNSPECIFIED';
        case ConnectionPoolerConfig_PoolingMode.SESSION:
            return 'SESSION';
        case ConnectionPoolerConfig_PoolingMode.TRANSACTION:
            return 'TRANSACTION';
        case ConnectionPoolerConfig_PoolingMode.STATEMENT:
            return 'STATEMENT';
        default:
            return 'UNKNOWN';
    }
}
exports.connectionPoolerConfig_PoolingModeToJSON = connectionPoolerConfig_PoolingModeToJSON;
var Host_Role;
(function (Host_Role) {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    Host_Role[Host_Role["ROLE_UNKNOWN"] = 0] = "ROLE_UNKNOWN";
    /** MASTER - Host is the master PostgreSQL server in the cluster. */
    Host_Role[Host_Role["MASTER"] = 1] = "MASTER";
    /** REPLICA - Host is a replica (standby) PostgreSQL server in the cluster. */
    Host_Role[Host_Role["REPLICA"] = 2] = "REPLICA";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role = exports.Host_Role || (exports.Host_Role = {}));
function host_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case 'ROLE_UNKNOWN':
            return Host_Role.ROLE_UNKNOWN;
        case 1:
        case 'MASTER':
            return Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return Host_Role.REPLICA;
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
        case Host_Role.MASTER:
            return 'MASTER';
        case Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}
exports.host_RoleToJSON = host_RoleToJSON;
var Host_ReplicaType;
(function (Host_ReplicaType) {
    /** REPLICA_TYPE_UNKNOWN - Replica type is unknown (we have no data) or it's master */
    Host_ReplicaType[Host_ReplicaType["REPLICA_TYPE_UNKNOWN"] = 0] = "REPLICA_TYPE_UNKNOWN";
    Host_ReplicaType[Host_ReplicaType["ASYNC"] = 1] = "ASYNC";
    Host_ReplicaType[Host_ReplicaType["SYNC"] = 2] = "SYNC";
    Host_ReplicaType[Host_ReplicaType["QUORUM"] = 3] = "QUORUM";
    Host_ReplicaType[Host_ReplicaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_ReplicaType = exports.Host_ReplicaType || (exports.Host_ReplicaType = {}));
function host_ReplicaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'REPLICA_TYPE_UNKNOWN':
            return Host_ReplicaType.REPLICA_TYPE_UNKNOWN;
        case 1:
        case 'ASYNC':
            return Host_ReplicaType.ASYNC;
        case 2:
        case 'SYNC':
            return Host_ReplicaType.SYNC;
        case 3:
        case 'QUORUM':
            return Host_ReplicaType.QUORUM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_ReplicaType.UNRECOGNIZED;
    }
}
exports.host_ReplicaTypeFromJSON = host_ReplicaTypeFromJSON;
function host_ReplicaTypeToJSON(object) {
    switch (object) {
        case Host_ReplicaType.REPLICA_TYPE_UNKNOWN:
            return 'REPLICA_TYPE_UNKNOWN';
        case Host_ReplicaType.ASYNC:
            return 'ASYNC';
        case Host_ReplicaType.SYNC:
            return 'SYNC';
        case Host_ReplicaType.QUORUM:
            return 'QUORUM';
        default:
            return 'UNKNOWN';
    }
}
exports.host_ReplicaTypeToJSON = host_ReplicaTypeToJSON;
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
    /** POSTGRESQL - The host is a PostgreSQL server. */
    Service_Type[Service_Type["POSTGRESQL"] = 1] = "POSTGRESQL";
    /** POOLER - The host is a PgBouncer server. */
    Service_Type[Service_Type["POOLER"] = 2] = "POOLER";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type = exports.Service_Type || (exports.Service_Type = {}));
function service_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'POSTGRESQL':
            return Service_Type.POSTGRESQL;
        case 2:
        case 'POOLER':
            return Service_Type.POOLER;
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
        case Service_Type.POSTGRESQL:
            return 'POSTGRESQL';
        case Service_Type.POOLER:
            return 'POOLER';
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
    $type: 'yandex.cloud.mdb.postgresql.v1.Cluster',
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    health: 0,
    status: 0,
    securityGroupIds: '',
    deletionProtection: false,
};
exports.Cluster = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Cluster',
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
                $type: 'yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
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
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(106).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            maintenance_1.MaintenanceOperation.encode(message.plannedOperation, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(122).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
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
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.plannedOperation = maintenance_1.MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 16:
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
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry',
    key: '',
    value: '',
};
exports.Cluster_LabelsEntry = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry',
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
    $type: 'yandex.cloud.mdb.postgresql.v1.Monitoring',
    name: '',
    description: '',
    link: '',
};
exports.Monitoring = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Monitoring',
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
const baseClusterConfig = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ClusterConfig',
    version: '',
};
exports.ClusterConfig = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ClusterConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.postgresqlConfig96 !== undefined) {
            postgresql9_6_1.Postgresqlconfigset96.encode(message.postgresqlConfig96, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresqlConfig101c !== undefined) {
            postgresql10_1c_1.Postgresqlconfigset101c.encode(message.postgresqlConfig101c, writer.uint32(82).fork()).ldelim();
        }
        if (message.postgresqlConfig10 !== undefined) {
            postgresql10_1.PostgresqlConfigSet10.encode(message.postgresqlConfig10, writer.uint32(26).fork()).ldelim();
        }
        if (message.postgresqlConfig11 !== undefined) {
            postgresql11_1.PostgresqlConfigSet11.encode(message.postgresqlConfig11, writer.uint32(66).fork()).ldelim();
        }
        if (message.postgresqlConfig111c !== undefined) {
            postgresql11_1c_1.Postgresqlconfigset111c.encode(message.postgresqlConfig111c, writer.uint32(106).fork()).ldelim();
        }
        if (message.postgresqlConfig12 !== undefined) {
            postgresql12_1.PostgresqlConfigSet12.encode(message.postgresqlConfig12, writer.uint32(90).fork()).ldelim();
        }
        if (message.postgresqlConfig121c !== undefined) {
            postgresql12_1c_1.Postgresqlconfigset121c.encode(message.postgresqlConfig121c, writer.uint32(114).fork()).ldelim();
        }
        if (message.postgresqlConfig13 !== undefined) {
            postgresql13_1.PostgresqlConfigSet13.encode(message.postgresqlConfig13, writer.uint32(122).fork()).ldelim();
        }
        if (message.poolerConfig !== undefined) {
            exports.ConnectionPoolerConfig.encode(message.poolerConfig, writer.uint32(34).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.autofailover !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.autofailover,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(58).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.backupRetainPeriodDays,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(74).fork()).ldelim();
        }
        if (message.performanceDiagnostics !== undefined) {
            exports.PerformanceDiagnostics.encode(message.performanceDiagnostics, writer.uint32(98).fork()).ldelim();
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
                case 2:
                    message.postgresqlConfig96 = postgresql9_6_1.Postgresqlconfigset96.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.postgresqlConfig101c =
                        postgresql10_1c_1.Postgresqlconfigset101c.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresqlConfig10 = postgresql10_1.PostgresqlConfigSet10.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.postgresqlConfig11 = postgresql11_1.PostgresqlConfigSet11.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.postgresqlConfig111c =
                        postgresql11_1c_1.Postgresqlconfigset111c.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.postgresqlConfig12 = postgresql12_1.PostgresqlConfigSet12.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.postgresqlConfig121c =
                        postgresql12_1c_1.Postgresqlconfigset121c.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.postgresqlConfig13 = postgresql13_1.PostgresqlConfigSet13.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.poolerConfig = exports.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.autofailover = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.backupRetainPeriodDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.performanceDiagnostics =
                        exports.PerformanceDiagnostics.decode(reader, reader.uint32());
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
        if (object.postgresqlConfig96 !== undefined &&
            object.postgresqlConfig96 !== null) {
            message.postgresqlConfig96 = postgresql9_6_1.Postgresqlconfigset96.fromJSON(object.postgresqlConfig96);
        }
        else {
            message.postgresqlConfig96 = undefined;
        }
        if (object.postgresqlConfig101c !== undefined &&
            object.postgresqlConfig101c !== null) {
            message.postgresqlConfig101c = postgresql10_1c_1.Postgresqlconfigset101c.fromJSON(object.postgresqlConfig101c);
        }
        else {
            message.postgresqlConfig101c = undefined;
        }
        if (object.postgresqlConfig10 !== undefined &&
            object.postgresqlConfig10 !== null) {
            message.postgresqlConfig10 = postgresql10_1.PostgresqlConfigSet10.fromJSON(object.postgresqlConfig10);
        }
        else {
            message.postgresqlConfig10 = undefined;
        }
        if (object.postgresqlConfig11 !== undefined &&
            object.postgresqlConfig11 !== null) {
            message.postgresqlConfig11 = postgresql11_1.PostgresqlConfigSet11.fromJSON(object.postgresqlConfig11);
        }
        else {
            message.postgresqlConfig11 = undefined;
        }
        if (object.postgresqlConfig111c !== undefined &&
            object.postgresqlConfig111c !== null) {
            message.postgresqlConfig111c = postgresql11_1c_1.Postgresqlconfigset111c.fromJSON(object.postgresqlConfig111c);
        }
        else {
            message.postgresqlConfig111c = undefined;
        }
        if (object.postgresqlConfig12 !== undefined &&
            object.postgresqlConfig12 !== null) {
            message.postgresqlConfig12 = postgresql12_1.PostgresqlConfigSet12.fromJSON(object.postgresqlConfig12);
        }
        else {
            message.postgresqlConfig12 = undefined;
        }
        if (object.postgresqlConfig121c !== undefined &&
            object.postgresqlConfig121c !== null) {
            message.postgresqlConfig121c = postgresql12_1c_1.Postgresqlconfigset121c.fromJSON(object.postgresqlConfig121c);
        }
        else {
            message.postgresqlConfig121c = undefined;
        }
        if (object.postgresqlConfig13 !== undefined &&
            object.postgresqlConfig13 !== null) {
            message.postgresqlConfig13 = postgresql13_1.PostgresqlConfigSet13.fromJSON(object.postgresqlConfig13);
        }
        else {
            message.postgresqlConfig13 = undefined;
        }
        if (object.poolerConfig !== undefined && object.poolerConfig !== null) {
            message.poolerConfig = exports.ConnectionPoolerConfig.fromJSON(object.poolerConfig);
        }
        else {
            message.poolerConfig = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.autofailover !== undefined && object.autofailover !== null) {
            message.autofailover = Boolean(object.autofailover);
        }
        else {
            message.autofailover = undefined;
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
        if (object.performanceDiagnostics !== undefined &&
            object.performanceDiagnostics !== null) {
            message.performanceDiagnostics = exports.PerformanceDiagnostics.fromJSON(object.performanceDiagnostics);
        }
        else {
            message.performanceDiagnostics = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.postgresqlConfig96 !== undefined &&
            (obj.postgresqlConfig96 = message.postgresqlConfig96
                ? postgresql9_6_1.Postgresqlconfigset96.toJSON(message.postgresqlConfig96)
                : undefined);
        message.postgresqlConfig101c !== undefined &&
            (obj.postgresqlConfig101c = message.postgresqlConfig101c
                ? postgresql10_1c_1.Postgresqlconfigset101c.toJSON(message.postgresqlConfig101c)
                : undefined);
        message.postgresqlConfig10 !== undefined &&
            (obj.postgresqlConfig10 = message.postgresqlConfig10
                ? postgresql10_1.PostgresqlConfigSet10.toJSON(message.postgresqlConfig10)
                : undefined);
        message.postgresqlConfig11 !== undefined &&
            (obj.postgresqlConfig11 = message.postgresqlConfig11
                ? postgresql11_1.PostgresqlConfigSet11.toJSON(message.postgresqlConfig11)
                : undefined);
        message.postgresqlConfig111c !== undefined &&
            (obj.postgresqlConfig111c = message.postgresqlConfig111c
                ? postgresql11_1c_1.Postgresqlconfigset111c.toJSON(message.postgresqlConfig111c)
                : undefined);
        message.postgresqlConfig12 !== undefined &&
            (obj.postgresqlConfig12 = message.postgresqlConfig12
                ? postgresql12_1.PostgresqlConfigSet12.toJSON(message.postgresqlConfig12)
                : undefined);
        message.postgresqlConfig121c !== undefined &&
            (obj.postgresqlConfig121c = message.postgresqlConfig121c
                ? postgresql12_1c_1.Postgresqlconfigset121c.toJSON(message.postgresqlConfig121c)
                : undefined);
        message.postgresqlConfig13 !== undefined &&
            (obj.postgresqlConfig13 = message.postgresqlConfig13
                ? postgresql13_1.PostgresqlConfigSet13.toJSON(message.postgresqlConfig13)
                : undefined);
        message.poolerConfig !== undefined &&
            (obj.poolerConfig = message.poolerConfig
                ? exports.ConnectionPoolerConfig.toJSON(message.poolerConfig)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.autofailover !== undefined &&
            (obj.autofailover = message.autofailover);
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
        message.performanceDiagnostics !== undefined &&
            (obj.performanceDiagnostics = message.performanceDiagnostics
                ? exports.PerformanceDiagnostics.toJSON(message.performanceDiagnostics)
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
        if (object.postgresqlConfig96 !== undefined &&
            object.postgresqlConfig96 !== null) {
            message.postgresqlConfig96 = postgresql9_6_1.Postgresqlconfigset96.fromPartial(object.postgresqlConfig96);
        }
        else {
            message.postgresqlConfig96 = undefined;
        }
        if (object.postgresqlConfig101c !== undefined &&
            object.postgresqlConfig101c !== null) {
            message.postgresqlConfig101c = postgresql10_1c_1.Postgresqlconfigset101c.fromPartial(object.postgresqlConfig101c);
        }
        else {
            message.postgresqlConfig101c = undefined;
        }
        if (object.postgresqlConfig10 !== undefined &&
            object.postgresqlConfig10 !== null) {
            message.postgresqlConfig10 = postgresql10_1.PostgresqlConfigSet10.fromPartial(object.postgresqlConfig10);
        }
        else {
            message.postgresqlConfig10 = undefined;
        }
        if (object.postgresqlConfig11 !== undefined &&
            object.postgresqlConfig11 !== null) {
            message.postgresqlConfig11 = postgresql11_1.PostgresqlConfigSet11.fromPartial(object.postgresqlConfig11);
        }
        else {
            message.postgresqlConfig11 = undefined;
        }
        if (object.postgresqlConfig111c !== undefined &&
            object.postgresqlConfig111c !== null) {
            message.postgresqlConfig111c = postgresql11_1c_1.Postgresqlconfigset111c.fromPartial(object.postgresqlConfig111c);
        }
        else {
            message.postgresqlConfig111c = undefined;
        }
        if (object.postgresqlConfig12 !== undefined &&
            object.postgresqlConfig12 !== null) {
            message.postgresqlConfig12 = postgresql12_1.PostgresqlConfigSet12.fromPartial(object.postgresqlConfig12);
        }
        else {
            message.postgresqlConfig12 = undefined;
        }
        if (object.postgresqlConfig121c !== undefined &&
            object.postgresqlConfig121c !== null) {
            message.postgresqlConfig121c = postgresql12_1c_1.Postgresqlconfigset121c.fromPartial(object.postgresqlConfig121c);
        }
        else {
            message.postgresqlConfig121c = undefined;
        }
        if (object.postgresqlConfig13 !== undefined &&
            object.postgresqlConfig13 !== null) {
            message.postgresqlConfig13 = postgresql13_1.PostgresqlConfigSet13.fromPartial(object.postgresqlConfig13);
        }
        else {
            message.postgresqlConfig13 = undefined;
        }
        if (object.poolerConfig !== undefined && object.poolerConfig !== null) {
            message.poolerConfig = exports.ConnectionPoolerConfig.fromPartial(object.poolerConfig);
        }
        else {
            message.poolerConfig = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.autofailover !== undefined && object.autofailover !== null) {
            message.autofailover = object.autofailover;
        }
        else {
            message.autofailover = undefined;
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
        if (object.performanceDiagnostics !== undefined &&
            object.performanceDiagnostics !== null) {
            message.performanceDiagnostics = exports.PerformanceDiagnostics.fromPartial(object.performanceDiagnostics);
        }
        else {
            message.performanceDiagnostics = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
const baseConnectionPoolerConfig = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig',
    poolingMode: 0,
};
exports.ConnectionPoolerConfig = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.poolingMode !== 0) {
            writer.uint32(8).int32(message.poolingMode);
        }
        if (message.poolDiscard !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.poolDiscard,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectionPoolerConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolingMode = reader.int32();
                    break;
                case 2:
                    message.poolDiscard = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
            ...baseConnectionPoolerConfig,
        };
        if (object.poolingMode !== undefined && object.poolingMode !== null) {
            message.poolingMode = connectionPoolerConfig_PoolingModeFromJSON(object.poolingMode);
        }
        else {
            message.poolingMode = 0;
        }
        if (object.poolDiscard !== undefined && object.poolDiscard !== null) {
            message.poolDiscard = Boolean(object.poolDiscard);
        }
        else {
            message.poolDiscard = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolingMode !== undefined &&
            (obj.poolingMode = connectionPoolerConfig_PoolingModeToJSON(message.poolingMode));
        message.poolDiscard !== undefined &&
            (obj.poolDiscard = message.poolDiscard);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseConnectionPoolerConfig,
        };
        if (object.poolingMode !== undefined && object.poolingMode !== null) {
            message.poolingMode = object.poolingMode;
        }
        else {
            message.poolingMode = 0;
        }
        if (object.poolDiscard !== undefined && object.poolDiscard !== null) {
            message.poolDiscard = object.poolDiscard;
        }
        else {
            message.poolDiscard = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectionPoolerConfig.$type, exports.ConnectionPoolerConfig);
const baseHost = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Host',
    name: '',
    clusterId: '',
    zoneId: '',
    role: 0,
    health: 0,
    subnetId: '',
    replicationSource: '',
    assignPublicIp: false,
    replicaType: 0,
};
exports.Host = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Host',
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
        if (message.replicationSource !== '') {
            writer.uint32(74).string(message.replicationSource);
        }
        if (message.priority !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.priority,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.HostConfig.encode(message.config, writer.uint32(90).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(96).bool(message.assignPublicIp);
        }
        if (message.replicaType !== 0) {
            writer.uint32(104).int32(message.replicaType);
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
                    message.replicationSource = reader.string();
                    break;
                case 10:
                    message.priority = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.config = exports.HostConfig.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.assignPublicIp = reader.bool();
                    break;
                case 13:
                    message.replicaType = reader.int32();
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
        if (object.replicationSource !== undefined &&
            object.replicationSource !== null) {
            message.replicationSource = String(object.replicationSource);
        }
        else {
            message.replicationSource = '';
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = Number(object.priority);
        }
        else {
            message.priority = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.HostConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null) {
            message.assignPublicIp = Boolean(object.assignPublicIp);
        }
        else {
            message.assignPublicIp = false;
        }
        if (object.replicaType !== undefined && object.replicaType !== null) {
            message.replicaType = host_ReplicaTypeFromJSON(object.replicaType);
        }
        else {
            message.replicaType = 0;
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
        message.replicationSource !== undefined &&
            (obj.replicationSource = message.replicationSource);
        message.priority !== undefined && (obj.priority = message.priority);
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.HostConfig.toJSON(message.config)
                : undefined);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.replicaType !== undefined &&
            (obj.replicaType = host_ReplicaTypeToJSON(message.replicaType));
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
        if (object.replicationSource !== undefined &&
            object.replicationSource !== null) {
            message.replicationSource = object.replicationSource;
        }
        else {
            message.replicationSource = '';
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = object.priority;
        }
        else {
            message.priority = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.HostConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null) {
            message.assignPublicIp = object.assignPublicIp;
        }
        else {
            message.assignPublicIp = false;
        }
        if (object.replicaType !== undefined && object.replicaType !== null) {
            message.replicaType = object.replicaType;
        }
        else {
            message.replicaType = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseHostConfig = {
    $type: 'yandex.cloud.mdb.postgresql.v1.HostConfig',
};
exports.HostConfig = {
    $type: 'yandex.cloud.mdb.postgresql.v1.HostConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.postgresqlConfig96 !== undefined) {
            host9_6_1.Postgresqlhostconfig96.encode(message.postgresqlConfig96, writer.uint32(10).fork()).ldelim();
        }
        if (message.postgresqlConfig101c !== undefined) {
            host10_1c_1.Postgresqlhostconfig101c.encode(message.postgresqlConfig101c, writer.uint32(34).fork()).ldelim();
        }
        if (message.postgresqlConfig10 !== undefined) {
            host10_1.PostgresqlHostConfig10.encode(message.postgresqlConfig10, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresqlConfig11 !== undefined) {
            host11_1.PostgresqlHostConfig11.encode(message.postgresqlConfig11, writer.uint32(26).fork()).ldelim();
        }
        if (message.postgresqlConfig111c !== undefined) {
            host11_1c_1.Postgresqlhostconfig111c.encode(message.postgresqlConfig111c, writer.uint32(50).fork()).ldelim();
        }
        if (message.postgresqlConfig12 !== undefined) {
            host12_1.PostgresqlHostConfig12.encode(message.postgresqlConfig12, writer.uint32(42).fork()).ldelim();
        }
        if (message.postgresqlConfig121c !== undefined) {
            host12_1c_1.Postgresqlhostconfig121c.encode(message.postgresqlConfig121c, writer.uint32(58).fork()).ldelim();
        }
        if (message.postgresqlConfig13 !== undefined) {
            host13_1.PostgresqlHostConfig13.encode(message.postgresqlConfig13, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostConfig };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.postgresqlConfig96 = host9_6_1.Postgresqlhostconfig96.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.postgresqlConfig101c =
                        host10_1c_1.Postgresqlhostconfig101c.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.postgresqlConfig10 = host10_1.PostgresqlHostConfig10.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresqlConfig11 = host11_1.PostgresqlHostConfig11.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.postgresqlConfig111c =
                        host11_1c_1.Postgresqlhostconfig111c.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.postgresqlConfig12 = host12_1.PostgresqlHostConfig12.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.postgresqlConfig121c =
                        host12_1c_1.Postgresqlhostconfig121c.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.postgresqlConfig13 = host13_1.PostgresqlHostConfig13.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHostConfig };
        if (object.postgresqlConfig96 !== undefined &&
            object.postgresqlConfig96 !== null) {
            message.postgresqlConfig96 = host9_6_1.Postgresqlhostconfig96.fromJSON(object.postgresqlConfig96);
        }
        else {
            message.postgresqlConfig96 = undefined;
        }
        if (object.postgresqlConfig101c !== undefined &&
            object.postgresqlConfig101c !== null) {
            message.postgresqlConfig101c = host10_1c_1.Postgresqlhostconfig101c.fromJSON(object.postgresqlConfig101c);
        }
        else {
            message.postgresqlConfig101c = undefined;
        }
        if (object.postgresqlConfig10 !== undefined &&
            object.postgresqlConfig10 !== null) {
            message.postgresqlConfig10 = host10_1.PostgresqlHostConfig10.fromJSON(object.postgresqlConfig10);
        }
        else {
            message.postgresqlConfig10 = undefined;
        }
        if (object.postgresqlConfig11 !== undefined &&
            object.postgresqlConfig11 !== null) {
            message.postgresqlConfig11 = host11_1.PostgresqlHostConfig11.fromJSON(object.postgresqlConfig11);
        }
        else {
            message.postgresqlConfig11 = undefined;
        }
        if (object.postgresqlConfig111c !== undefined &&
            object.postgresqlConfig111c !== null) {
            message.postgresqlConfig111c = host11_1c_1.Postgresqlhostconfig111c.fromJSON(object.postgresqlConfig111c);
        }
        else {
            message.postgresqlConfig111c = undefined;
        }
        if (object.postgresqlConfig12 !== undefined &&
            object.postgresqlConfig12 !== null) {
            message.postgresqlConfig12 = host12_1.PostgresqlHostConfig12.fromJSON(object.postgresqlConfig12);
        }
        else {
            message.postgresqlConfig12 = undefined;
        }
        if (object.postgresqlConfig121c !== undefined &&
            object.postgresqlConfig121c !== null) {
            message.postgresqlConfig121c = host12_1c_1.Postgresqlhostconfig121c.fromJSON(object.postgresqlConfig121c);
        }
        else {
            message.postgresqlConfig121c = undefined;
        }
        if (object.postgresqlConfig13 !== undefined &&
            object.postgresqlConfig13 !== null) {
            message.postgresqlConfig13 = host13_1.PostgresqlHostConfig13.fromJSON(object.postgresqlConfig13);
        }
        else {
            message.postgresqlConfig13 = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.postgresqlConfig96 !== undefined &&
            (obj.postgresqlConfig96 = message.postgresqlConfig96
                ? host9_6_1.Postgresqlhostconfig96.toJSON(message.postgresqlConfig96)
                : undefined);
        message.postgresqlConfig101c !== undefined &&
            (obj.postgresqlConfig101c = message.postgresqlConfig101c
                ? host10_1c_1.Postgresqlhostconfig101c.toJSON(message.postgresqlConfig101c)
                : undefined);
        message.postgresqlConfig10 !== undefined &&
            (obj.postgresqlConfig10 = message.postgresqlConfig10
                ? host10_1.PostgresqlHostConfig10.toJSON(message.postgresqlConfig10)
                : undefined);
        message.postgresqlConfig11 !== undefined &&
            (obj.postgresqlConfig11 = message.postgresqlConfig11
                ? host11_1.PostgresqlHostConfig11.toJSON(message.postgresqlConfig11)
                : undefined);
        message.postgresqlConfig111c !== undefined &&
            (obj.postgresqlConfig111c = message.postgresqlConfig111c
                ? host11_1c_1.Postgresqlhostconfig111c.toJSON(message.postgresqlConfig111c)
                : undefined);
        message.postgresqlConfig12 !== undefined &&
            (obj.postgresqlConfig12 = message.postgresqlConfig12
                ? host12_1.PostgresqlHostConfig12.toJSON(message.postgresqlConfig12)
                : undefined);
        message.postgresqlConfig121c !== undefined &&
            (obj.postgresqlConfig121c = message.postgresqlConfig121c
                ? host12_1c_1.Postgresqlhostconfig121c.toJSON(message.postgresqlConfig121c)
                : undefined);
        message.postgresqlConfig13 !== undefined &&
            (obj.postgresqlConfig13 = message.postgresqlConfig13
                ? host13_1.PostgresqlHostConfig13.toJSON(message.postgresqlConfig13)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHostConfig };
        if (object.postgresqlConfig96 !== undefined &&
            object.postgresqlConfig96 !== null) {
            message.postgresqlConfig96 = host9_6_1.Postgresqlhostconfig96.fromPartial(object.postgresqlConfig96);
        }
        else {
            message.postgresqlConfig96 = undefined;
        }
        if (object.postgresqlConfig101c !== undefined &&
            object.postgresqlConfig101c !== null) {
            message.postgresqlConfig101c = host10_1c_1.Postgresqlhostconfig101c.fromPartial(object.postgresqlConfig101c);
        }
        else {
            message.postgresqlConfig101c = undefined;
        }
        if (object.postgresqlConfig10 !== undefined &&
            object.postgresqlConfig10 !== null) {
            message.postgresqlConfig10 = host10_1.PostgresqlHostConfig10.fromPartial(object.postgresqlConfig10);
        }
        else {
            message.postgresqlConfig10 = undefined;
        }
        if (object.postgresqlConfig11 !== undefined &&
            object.postgresqlConfig11 !== null) {
            message.postgresqlConfig11 = host11_1.PostgresqlHostConfig11.fromPartial(object.postgresqlConfig11);
        }
        else {
            message.postgresqlConfig11 = undefined;
        }
        if (object.postgresqlConfig111c !== undefined &&
            object.postgresqlConfig111c !== null) {
            message.postgresqlConfig111c = host11_1c_1.Postgresqlhostconfig111c.fromPartial(object.postgresqlConfig111c);
        }
        else {
            message.postgresqlConfig111c = undefined;
        }
        if (object.postgresqlConfig12 !== undefined &&
            object.postgresqlConfig12 !== null) {
            message.postgresqlConfig12 = host12_1.PostgresqlHostConfig12.fromPartial(object.postgresqlConfig12);
        }
        else {
            message.postgresqlConfig12 = undefined;
        }
        if (object.postgresqlConfig121c !== undefined &&
            object.postgresqlConfig121c !== null) {
            message.postgresqlConfig121c = host12_1c_1.Postgresqlhostconfig121c.fromPartial(object.postgresqlConfig121c);
        }
        else {
            message.postgresqlConfig121c = undefined;
        }
        if (object.postgresqlConfig13 !== undefined &&
            object.postgresqlConfig13 !== null) {
            message.postgresqlConfig13 = host13_1.PostgresqlHostConfig13.fromPartial(object.postgresqlConfig13);
        }
        else {
            message.postgresqlConfig13 = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostConfig.$type, exports.HostConfig);
const baseService = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Service',
    type: 0,
    health: 0,
};
exports.Service = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Service',
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
typeRegistry_1.messageTypeRegistry.set(exports.Service.$type, exports.Service);
const baseResources = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Resources',
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};
exports.Resources = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Resources',
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
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseAccess = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Access',
    dataLens: false,
    webSql: false,
    serverless: false,
};
exports.Access = {
    $type: 'yandex.cloud.mdb.postgresql.v1.Access',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        if (message.serverless === true) {
            writer.uint32(24).bool(message.serverless);
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
                case 2:
                    message.webSql = reader.bool();
                    break;
                case 3:
                    message.serverless = reader.bool();
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
        if (object.webSql !== undefined && object.webSql !== null) {
            message.webSql = Boolean(object.webSql);
        }
        else {
            message.webSql = false;
        }
        if (object.serverless !== undefined && object.serverless !== null) {
            message.serverless = Boolean(object.serverless);
        }
        else {
            message.serverless = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        message.serverless !== undefined &&
            (obj.serverless = message.serverless);
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
        if (object.webSql !== undefined && object.webSql !== null) {
            message.webSql = object.webSql;
        }
        else {
            message.webSql = false;
        }
        if (object.serverless !== undefined && object.serverless !== null) {
            message.serverless = object.serverless;
        }
        else {
            message.serverless = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Access.$type, exports.Access);
const basePerformanceDiagnostics = {
    $type: 'yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics',
    enabled: false,
    sessionsSamplingInterval: 0,
    statementsSamplingInterval: 0,
};
exports.PerformanceDiagnostics = {
    $type: 'yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.sessionsSamplingInterval !== 0) {
            writer.uint32(16).int64(message.sessionsSamplingInterval);
        }
        if (message.statementsSamplingInterval !== 0) {
            writer.uint32(24).int64(message.statementsSamplingInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePerformanceDiagnostics,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.sessionsSamplingInterval = longToNumber(reader.int64());
                    break;
                case 3:
                    message.statementsSamplingInterval = longToNumber(reader.int64());
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
            ...basePerformanceDiagnostics,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.sessionsSamplingInterval !== undefined &&
            object.sessionsSamplingInterval !== null) {
            message.sessionsSamplingInterval = Number(object.sessionsSamplingInterval);
        }
        else {
            message.sessionsSamplingInterval = 0;
        }
        if (object.statementsSamplingInterval !== undefined &&
            object.statementsSamplingInterval !== null) {
            message.statementsSamplingInterval = Number(object.statementsSamplingInterval);
        }
        else {
            message.statementsSamplingInterval = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.sessionsSamplingInterval !== undefined &&
            (obj.sessionsSamplingInterval = message.sessionsSamplingInterval);
        message.statementsSamplingInterval !== undefined &&
            (obj.statementsSamplingInterval =
                message.statementsSamplingInterval);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePerformanceDiagnostics,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.sessionsSamplingInterval !== undefined &&
            object.sessionsSamplingInterval !== null) {
            message.sessionsSamplingInterval = object.sessionsSamplingInterval;
        }
        else {
            message.sessionsSamplingInterval = 0;
        }
        if (object.statementsSamplingInterval !== undefined &&
            object.statementsSamplingInterval !== null) {
            message.statementsSamplingInterval =
                object.statementsSamplingInterval;
        }
        else {
            message.statementsSamplingInterval = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PerformanceDiagnostics.$type, exports.PerformanceDiagnostics);
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
