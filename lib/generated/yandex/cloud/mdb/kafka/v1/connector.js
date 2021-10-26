/* eslint-disable */
import { Int64Value } from '../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';
export var Connector_Health;
(function (Connector_Health) {
    /** HEALTH_UNKNOWN - State of the connector is unknown. */
    Connector_Health[Connector_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Connector is running. */
    Connector_Health[Connector_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Connector is failed to start. */
    Connector_Health[Connector_Health["DEAD"] = 2] = "DEAD";
    Connector_Health[Connector_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Connector_Health || (Connector_Health = {}));
export function connector_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Connector_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Connector_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Connector_Health.DEAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Health.UNRECOGNIZED;
    }
}
export function connector_HealthToJSON(object) {
    switch (object) {
        case Connector_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Connector_Health.ALIVE:
            return 'ALIVE';
        case Connector_Health.DEAD:
            return 'DEAD';
        default:
            return 'UNKNOWN';
    }
}
export var Connector_Status;
(function (Connector_Status) {
    /** STATUS_UNKNOWN - Connector state is unknown. */
    Connector_Status[Connector_Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    /** RUNNING - Connector is running normally. */
    Connector_Status[Connector_Status["RUNNING"] = 1] = "RUNNING";
    /** ERROR - Connector encountered a problem and cannot operate. */
    Connector_Status[Connector_Status["ERROR"] = 2] = "ERROR";
    /** PAUSED - Connector paused. */
    Connector_Status[Connector_Status["PAUSED"] = 3] = "PAUSED";
    Connector_Status[Connector_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Connector_Status || (Connector_Status = {}));
export function connector_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNKNOWN':
            return Connector_Status.STATUS_UNKNOWN;
        case 1:
        case 'RUNNING':
            return Connector_Status.RUNNING;
        case 2:
        case 'ERROR':
            return Connector_Status.ERROR;
        case 3:
        case 'PAUSED':
            return Connector_Status.PAUSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Status.UNRECOGNIZED;
    }
}
export function connector_StatusToJSON(object) {
    switch (object) {
        case Connector_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Connector_Status.RUNNING:
            return 'RUNNING';
        case Connector_Status.ERROR:
            return 'ERROR';
        case Connector_Status.PAUSED:
            return 'PAUSED';
        default:
            return 'UNKNOWN';
    }
}
const baseConnectorSpec = { name: '' };
export const ConnectorSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            Int64Value.encode({ value: message.tasksMax }, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            ConnectorSpec_PropertiesEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMakerSpec.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorSpec };
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    const entry3 = ConnectorSpec_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConnectorSpec };
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = Number(object.tasksMax);
        }
        else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker);
        }
        else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConnectorSpec };
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = object.tasksMax;
        }
        else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker);
        }
        else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },
};
const baseConnectorSpec_PropertiesEntry = { key: '', value: '' };
export const ConnectorSpec_PropertiesEntry = {
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
            ...baseConnectorSpec_PropertiesEntry,
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
            ...baseConnectorSpec_PropertiesEntry,
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
            ...baseConnectorSpec_PropertiesEntry,
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
const baseConnectorConfigMirrorMakerSpec = { topics: '' };
export const ConnectorConfigMirrorMakerSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceCluster !== undefined) {
            ClusterConnectionSpec.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.targetCluster !== undefined) {
            ClusterConnectionSpec.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.topics !== '') {
            writer.uint32(26).string(message.topics);
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode({ value: message.replicationFactor }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectorConfigMirrorMakerSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = ClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.targetCluster = ClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseConnectorConfigMirrorMakerSpec,
        };
        if (object.sourceCluster !== undefined &&
            object.sourceCluster !== null) {
            message.sourceCluster = ClusterConnectionSpec.fromJSON(object.sourceCluster);
        }
        else {
            message.sourceCluster = undefined;
        }
        if (object.targetCluster !== undefined &&
            object.targetCluster !== null) {
            message.targetCluster = ClusterConnectionSpec.fromJSON(object.targetCluster);
        }
        else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = String(object.topics);
        }
        else {
            message.topics = '';
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = Number(object.replicationFactor);
        }
        else {
            message.replicationFactor = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceCluster !== undefined &&
            (obj.sourceCluster = message.sourceCluster
                ? ClusterConnectionSpec.toJSON(message.sourceCluster)
                : undefined);
        message.targetCluster !== undefined &&
            (obj.targetCluster = message.targetCluster
                ? ClusterConnectionSpec.toJSON(message.targetCluster)
                : undefined);
        message.topics !== undefined && (obj.topics = message.topics);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseConnectorConfigMirrorMakerSpec,
        };
        if (object.sourceCluster !== undefined &&
            object.sourceCluster !== null) {
            message.sourceCluster = ClusterConnectionSpec.fromPartial(object.sourceCluster);
        }
        else {
            message.sourceCluster = undefined;
        }
        if (object.targetCluster !== undefined &&
            object.targetCluster !== null) {
            message.targetCluster = ClusterConnectionSpec.fromPartial(object.targetCluster);
        }
        else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = object.topics;
        }
        else {
            message.topics = '';
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = object.replicationFactor;
        }
        else {
            message.replicationFactor = undefined;
        }
        return message;
    },
};
const baseClusterConnectionSpec = { alias: '' };
export const ClusterConnectionSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.alias !== '') {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            ThisClusterSpec.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalCluster !== undefined) {
            ExternalClusterConnectionSpec.encode(message.externalCluster, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClusterConnectionSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    message.thisCluster = ThisClusterSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalCluster =
                        ExternalClusterConnectionSpec.decode(reader, reader.uint32());
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
            ...baseClusterConnectionSpec,
        };
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = String(object.alias);
        }
        else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisClusterSpec.fromJSON(object.thisCluster);
        }
        else {
            message.thisCluster = undefined;
        }
        if (object.externalCluster !== undefined &&
            object.externalCluster !== null) {
            message.externalCluster = ExternalClusterConnectionSpec.fromJSON(object.externalCluster);
        }
        else {
            message.externalCluster = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alias !== undefined && (obj.alias = message.alias);
        message.thisCluster !== undefined &&
            (obj.thisCluster = message.thisCluster
                ? ThisClusterSpec.toJSON(message.thisCluster)
                : undefined);
        message.externalCluster !== undefined &&
            (obj.externalCluster = message.externalCluster
                ? ExternalClusterConnectionSpec.toJSON(message.externalCluster)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseClusterConnectionSpec,
        };
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = object.alias;
        }
        else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisClusterSpec.fromPartial(object.thisCluster);
        }
        else {
            message.thisCluster = undefined;
        }
        if (object.externalCluster !== undefined &&
            object.externalCluster !== null) {
            message.externalCluster = ExternalClusterConnectionSpec.fromPartial(object.externalCluster);
        }
        else {
            message.externalCluster = undefined;
        }
        return message;
    },
};
const baseThisClusterSpec = {};
export const ThisClusterSpec = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThisClusterSpec };
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
    fromJSON(_) {
        const message = { ...baseThisClusterSpec };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseThisClusterSpec };
        return message;
    },
};
const baseExternalClusterConnectionSpec = {
    bootstrapServers: '',
    saslUsername: '',
    saslPassword: '',
    saslMechanism: '',
    securityProtocol: '',
};
export const ExternalClusterConnectionSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bootstrapServers !== '') {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== '') {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslPassword !== '') {
            writer.uint32(26).string(message.saslPassword);
        }
        if (message.saslMechanism !== '') {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== '') {
            writer.uint32(42).string(message.securityProtocol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalClusterConnectionSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bootstrapServers = reader.string();
                    break;
                case 2:
                    message.saslUsername = reader.string();
                    break;
                case 3:
                    message.saslPassword = reader.string();
                    break;
                case 4:
                    message.saslMechanism = reader.string();
                    break;
                case 5:
                    message.securityProtocol = reader.string();
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
            ...baseExternalClusterConnectionSpec,
        };
        if (object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null) {
            message.bootstrapServers = String(object.bootstrapServers);
        }
        else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = String(object.saslUsername);
        }
        else {
            message.saslUsername = '';
        }
        if (object.saslPassword !== undefined && object.saslPassword !== null) {
            message.saslPassword = String(object.saslPassword);
        }
        else {
            message.saslPassword = '';
        }
        if (object.saslMechanism !== undefined &&
            object.saslMechanism !== null) {
            message.saslMechanism = String(object.saslMechanism);
        }
        else {
            message.saslMechanism = '';
        }
        if (object.securityProtocol !== undefined &&
            object.securityProtocol !== null) {
            message.securityProtocol = String(object.securityProtocol);
        }
        else {
            message.securityProtocol = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bootstrapServers !== undefined &&
            (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslPassword !== undefined &&
            (obj.saslPassword = message.saslPassword);
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = message.securityProtocol);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseExternalClusterConnectionSpec,
        };
        if (object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null) {
            message.bootstrapServers = object.bootstrapServers;
        }
        else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = object.saslUsername;
        }
        else {
            message.saslUsername = '';
        }
        if (object.saslPassword !== undefined && object.saslPassword !== null) {
            message.saslPassword = object.saslPassword;
        }
        else {
            message.saslPassword = '';
        }
        if (object.saslMechanism !== undefined &&
            object.saslMechanism !== null) {
            message.saslMechanism = object.saslMechanism;
        }
        else {
            message.saslMechanism = '';
        }
        if (object.securityProtocol !== undefined &&
            object.securityProtocol !== null) {
            message.securityProtocol = object.securityProtocol;
        }
        else {
            message.securityProtocol = '';
        }
        return message;
    },
};
const baseConnector = { name: '', health: 0, status: 0, clusterId: '' };
export const Connector = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            Int64Value.encode({ value: message.tasksMax }, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            Connector_PropertiesEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.health !== 0) {
            writer.uint32(32).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.clusterId !== '') {
            writer.uint32(50).string(message.clusterId);
        }
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMaker.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnector };
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    const entry3 = Connector_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.health = reader.int32();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.clusterId = reader.string();
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        ConnectorConfigMirrorMaker.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConnector };
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = Number(object.tasksMax);
        }
        else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = connector_HealthFromJSON(object.health);
        }
        else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = connector_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMaker.fromJSON(object.connectorConfigMirrormaker);
        }
        else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.health !== undefined &&
            (obj.health = connector_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = connector_StatusToJSON(message.status));
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? ConnectorConfigMirrorMaker.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConnector };
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = object.tasksMax;
        }
        else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
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
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMaker.fromPartial(object.connectorConfigMirrormaker);
        }
        else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },
};
const baseConnector_PropertiesEntry = { key: '', value: '' };
export const Connector_PropertiesEntry = {
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
            ...baseConnector_PropertiesEntry,
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
            ...baseConnector_PropertiesEntry,
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
            ...baseConnector_PropertiesEntry,
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
const baseConnectorConfigMirrorMaker = { topics: '' };
export const ConnectorConfigMirrorMaker = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceCluster !== undefined) {
            ClusterConnection.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.targetCluster !== undefined) {
            ClusterConnection.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.topics !== '') {
            writer.uint32(26).string(message.topics);
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode({ value: message.replicationFactor }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectorConfigMirrorMaker,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = ClusterConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.targetCluster = ClusterConnection.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseConnectorConfigMirrorMaker,
        };
        if (object.sourceCluster !== undefined &&
            object.sourceCluster !== null) {
            message.sourceCluster = ClusterConnection.fromJSON(object.sourceCluster);
        }
        else {
            message.sourceCluster = undefined;
        }
        if (object.targetCluster !== undefined &&
            object.targetCluster !== null) {
            message.targetCluster = ClusterConnection.fromJSON(object.targetCluster);
        }
        else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = String(object.topics);
        }
        else {
            message.topics = '';
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = Number(object.replicationFactor);
        }
        else {
            message.replicationFactor = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceCluster !== undefined &&
            (obj.sourceCluster = message.sourceCluster
                ? ClusterConnection.toJSON(message.sourceCluster)
                : undefined);
        message.targetCluster !== undefined &&
            (obj.targetCluster = message.targetCluster
                ? ClusterConnection.toJSON(message.targetCluster)
                : undefined);
        message.topics !== undefined && (obj.topics = message.topics);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseConnectorConfigMirrorMaker,
        };
        if (object.sourceCluster !== undefined &&
            object.sourceCluster !== null) {
            message.sourceCluster = ClusterConnection.fromPartial(object.sourceCluster);
        }
        else {
            message.sourceCluster = undefined;
        }
        if (object.targetCluster !== undefined &&
            object.targetCluster !== null) {
            message.targetCluster = ClusterConnection.fromPartial(object.targetCluster);
        }
        else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = object.topics;
        }
        else {
            message.topics = '';
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = object.replicationFactor;
        }
        else {
            message.replicationFactor = undefined;
        }
        return message;
    },
};
const baseClusterConnection = { alias: '' };
export const ClusterConnection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.alias !== '') {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            ThisCluster.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalCluster !== undefined) {
            ExternalClusterConnection.encode(message.externalCluster, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterConnection };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    message.thisCluster = ThisCluster.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalCluster = ExternalClusterConnection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseClusterConnection };
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = String(object.alias);
        }
        else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisCluster.fromJSON(object.thisCluster);
        }
        else {
            message.thisCluster = undefined;
        }
        if (object.externalCluster !== undefined &&
            object.externalCluster !== null) {
            message.externalCluster = ExternalClusterConnection.fromJSON(object.externalCluster);
        }
        else {
            message.externalCluster = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alias !== undefined && (obj.alias = message.alias);
        message.thisCluster !== undefined &&
            (obj.thisCluster = message.thisCluster
                ? ThisCluster.toJSON(message.thisCluster)
                : undefined);
        message.externalCluster !== undefined &&
            (obj.externalCluster = message.externalCluster
                ? ExternalClusterConnection.toJSON(message.externalCluster)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClusterConnection };
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = object.alias;
        }
        else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisCluster.fromPartial(object.thisCluster);
        }
        else {
            message.thisCluster = undefined;
        }
        if (object.externalCluster !== undefined &&
            object.externalCluster !== null) {
            message.externalCluster = ExternalClusterConnection.fromPartial(object.externalCluster);
        }
        else {
            message.externalCluster = undefined;
        }
        return message;
    },
};
const baseThisCluster = {};
export const ThisCluster = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThisCluster };
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
    fromJSON(_) {
        const message = { ...baseThisCluster };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseThisCluster };
        return message;
    },
};
const baseExternalClusterConnection = {
    bootstrapServers: '',
    saslUsername: '',
    saslMechanism: '',
    securityProtocol: '',
};
export const ExternalClusterConnection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bootstrapServers !== '') {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== '') {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslMechanism !== '') {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== '') {
            writer.uint32(42).string(message.securityProtocol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalClusterConnection,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bootstrapServers = reader.string();
                    break;
                case 2:
                    message.saslUsername = reader.string();
                    break;
                case 4:
                    message.saslMechanism = reader.string();
                    break;
                case 5:
                    message.securityProtocol = reader.string();
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
            ...baseExternalClusterConnection,
        };
        if (object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null) {
            message.bootstrapServers = String(object.bootstrapServers);
        }
        else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = String(object.saslUsername);
        }
        else {
            message.saslUsername = '';
        }
        if (object.saslMechanism !== undefined &&
            object.saslMechanism !== null) {
            message.saslMechanism = String(object.saslMechanism);
        }
        else {
            message.saslMechanism = '';
        }
        if (object.securityProtocol !== undefined &&
            object.securityProtocol !== null) {
            message.securityProtocol = String(object.securityProtocol);
        }
        else {
            message.securityProtocol = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bootstrapServers !== undefined &&
            (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = message.securityProtocol);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseExternalClusterConnection,
        };
        if (object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null) {
            message.bootstrapServers = object.bootstrapServers;
        }
        else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = object.saslUsername;
        }
        else {
            message.saslUsername = '';
        }
        if (object.saslMechanism !== undefined &&
            object.saslMechanism !== null) {
            message.saslMechanism = object.saslMechanism;
        }
        else {
            message.saslMechanism = '';
        }
        if (object.securityProtocol !== undefined &&
            object.securityProtocol !== null) {
            message.securityProtocol = object.securityProtocol;
        }
        else {
            message.securityProtocol = '';
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
