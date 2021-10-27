"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheck_GrpcHealthCheck = exports.HealthCheck_HttpHealthCheck = exports.HealthCheck_StreamHealthCheck = exports.HealthCheck = exports.StorageBucketBackend = exports.BackendTls = exports.TargetGroupsBackend = exports.GrpcBackend = exports.HttpBackend = exports.StreamBackend = exports.LoadBalancingConfig = exports.ConnectionSessionAffinity = exports.CookieSessionAffinity = exports.HeaderSessionAffinity = exports.GrpcBackendGroup = exports.HttpBackendGroup = exports.StreamBackendGroup = exports.BackendGroup_LabelsEntry = exports.BackendGroup = exports.loadBalancingModeToJSON = exports.loadBalancingModeFromJSON = exports.LoadBalancingMode = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const payload_1 = require("../../../../yandex/cloud/apploadbalancer/v1/payload");
const tls_1 = require("../../../../yandex/cloud/apploadbalancer/v1/tls");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.apploadbalancer.v1';
/**
 * A load balancing mode resource.
 * For details about the concept, see
 * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
 */
var LoadBalancingMode;
(function (LoadBalancingMode) {
    /**
     * ROUND_ROBIN - Round robin load balancing mode.
     *
     * All endpoints of the backend take their turns to receive requests attributed to the backend.
     */
    LoadBalancingMode[LoadBalancingMode["ROUND_ROBIN"] = 0] = "ROUND_ROBIN";
    /**
     * RANDOM - Random load balancing mode. Default value.
     *
     * For a request attributed to the backend, an endpoint that receives it is picked at random.
     */
    LoadBalancingMode[LoadBalancingMode["RANDOM"] = 1] = "RANDOM";
    /**
     * LEAST_REQUEST - Least request load balancing mode.
     *
     * To pick an endpoint that receives a request attributed to the backend, the power of two choices algorithm is used;
     * that is, two endpoints are picked at random, and the request is sent to the one which has the fewest active
     * requests.
     */
    LoadBalancingMode[LoadBalancingMode["LEAST_REQUEST"] = 2] = "LEAST_REQUEST";
    /**
     * MAGLEV_HASH - Maglev hashing load balancing mode, used only if session affinity is working for the backend group.
     *
     * Each endpoint is hashed, and a hash table with 65537 rows is filled accordingly, so that every endpoint occupies
     * the same amount of rows. An attribute of each request, specified in session affinity configuration of the backend
     * group, is also hashed by the same function. The row with the same number as the resulting value is looked up in the
     * table to determine the endpoint that receives the request.
     *
     * If session affinity is not working for the backend group (i.e. it is not configured or the group contains more
     * than one backend with positive weight), endpoints for backends with `MAGLEV_HASH` load balancing mode are picked at
     * `RANDOM` instead.
     */
    LoadBalancingMode[LoadBalancingMode["MAGLEV_HASH"] = 3] = "MAGLEV_HASH";
    LoadBalancingMode[LoadBalancingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LoadBalancingMode = exports.LoadBalancingMode || (exports.LoadBalancingMode = {}));
function loadBalancingModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'ROUND_ROBIN':
            return LoadBalancingMode.ROUND_ROBIN;
        case 1:
        case 'RANDOM':
            return LoadBalancingMode.RANDOM;
        case 2:
        case 'LEAST_REQUEST':
            return LoadBalancingMode.LEAST_REQUEST;
        case 3:
        case 'MAGLEV_HASH':
            return LoadBalancingMode.MAGLEV_HASH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LoadBalancingMode.UNRECOGNIZED;
    }
}
exports.loadBalancingModeFromJSON = loadBalancingModeFromJSON;
function loadBalancingModeToJSON(object) {
    switch (object) {
        case LoadBalancingMode.ROUND_ROBIN:
            return 'ROUND_ROBIN';
        case LoadBalancingMode.RANDOM:
            return 'RANDOM';
        case LoadBalancingMode.LEAST_REQUEST:
            return 'LEAST_REQUEST';
        case LoadBalancingMode.MAGLEV_HASH:
            return 'MAGLEV_HASH';
        default:
            return 'UNKNOWN';
    }
}
exports.loadBalancingModeToJSON = loadBalancingModeToJSON;
const baseBackendGroup = {
    id: '',
    name: '',
    description: '',
    folderId: '',
};
exports.BackendGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.BackendGroup_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.http !== undefined) {
            exports.HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            exports.GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamBackendGroup.encode(message.stream, writer.uint32(82).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackendGroup };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    const entry5 = exports.BackendGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.http = exports.HttpBackendGroup.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.grpc = exports.GrpcBackendGroup.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.stream = exports.StreamBackendGroup.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBackendGroup };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
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
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = exports.HttpBackendGroup.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = exports.GrpcBackendGroup.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = exports.StreamBackendGroup.fromJSON(object.stream);
        }
        else {
            message.stream = undefined;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.http !== undefined &&
            (obj.http = message.http
                ? exports.HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? exports.GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? exports.StreamBackendGroup.toJSON(message.stream)
                : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackendGroup };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
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
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = exports.HttpBackendGroup.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = exports.GrpcBackendGroup.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = exports.StreamBackendGroup.fromPartial(object.stream);
        }
        else {
            message.stream = undefined;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
};
const baseBackendGroup_LabelsEntry = { key: '', value: '' };
exports.BackendGroup_LabelsEntry = {
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
            ...baseBackendGroup_LabelsEntry,
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
            ...baseBackendGroup_LabelsEntry,
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
            ...baseBackendGroup_LabelsEntry,
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
const baseStreamBackendGroup = {};
exports.StreamBackendGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backends) {
            exports.StreamBackend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            exports.ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamBackendGroup };
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(exports.StreamBackend.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.connection = exports.ConnectionSessionAffinity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStreamBackendGroup };
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(exports.StreamBackend.fromJSON(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = exports.ConnectionSessionAffinity.fromJSON(object.connection);
        }
        else {
            message.connection = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) => e ? exports.StreamBackend.toJSON(e) : undefined);
        }
        else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStreamBackendGroup };
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(exports.StreamBackend.fromPartial(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = exports.ConnectionSessionAffinity.fromPartial(object.connection);
        }
        else {
            message.connection = undefined;
        }
        return message;
    },
};
const baseHttpBackendGroup = {};
exports.HttpBackendGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backends) {
            exports.HttpBackend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            exports.ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        if (message.header !== undefined) {
            exports.HeaderSessionAffinity.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.cookie !== undefined) {
            exports.CookieSessionAffinity.encode(message.cookie, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpBackendGroup };
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(exports.HttpBackend.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.connection = exports.ConnectionSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header = exports.HeaderSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cookie = exports.CookieSessionAffinity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttpBackendGroup };
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(exports.HttpBackend.fromJSON(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = exports.ConnectionSessionAffinity.fromJSON(object.connection);
        }
        else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.HeaderSessionAffinity.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = exports.CookieSessionAffinity.fromJSON(object.cookie);
        }
        else {
            message.cookie = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) => e ? exports.HttpBackend.toJSON(e) : undefined);
        }
        else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? exports.HeaderSessionAffinity.toJSON(message.header)
                : undefined);
        message.cookie !== undefined &&
            (obj.cookie = message.cookie
                ? exports.CookieSessionAffinity.toJSON(message.cookie)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttpBackendGroup };
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(exports.HttpBackend.fromPartial(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = exports.ConnectionSessionAffinity.fromPartial(object.connection);
        }
        else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.HeaderSessionAffinity.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = exports.CookieSessionAffinity.fromPartial(object.cookie);
        }
        else {
            message.cookie = undefined;
        }
        return message;
    },
};
const baseGrpcBackendGroup = {};
exports.GrpcBackendGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backends) {
            exports.GrpcBackend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            exports.ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        if (message.header !== undefined) {
            exports.HeaderSessionAffinity.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.cookie !== undefined) {
            exports.CookieSessionAffinity.encode(message.cookie, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcBackendGroup };
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(exports.GrpcBackend.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.connection = exports.ConnectionSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header = exports.HeaderSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cookie = exports.CookieSessionAffinity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrpcBackendGroup };
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(exports.GrpcBackend.fromJSON(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = exports.ConnectionSessionAffinity.fromJSON(object.connection);
        }
        else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.HeaderSessionAffinity.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = exports.CookieSessionAffinity.fromJSON(object.cookie);
        }
        else {
            message.cookie = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) => e ? exports.GrpcBackend.toJSON(e) : undefined);
        }
        else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? exports.HeaderSessionAffinity.toJSON(message.header)
                : undefined);
        message.cookie !== undefined &&
            (obj.cookie = message.cookie
                ? exports.CookieSessionAffinity.toJSON(message.cookie)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrpcBackendGroup };
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(exports.GrpcBackend.fromPartial(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = exports.ConnectionSessionAffinity.fromPartial(object.connection);
        }
        else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.HeaderSessionAffinity.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = exports.CookieSessionAffinity.fromPartial(object.cookie);
        }
        else {
            message.cookie = undefined;
        }
        return message;
    },
};
const baseHeaderSessionAffinity = { headerName: '' };
exports.HeaderSessionAffinity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.headerName !== '') {
            writer.uint32(10).string(message.headerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHeaderSessionAffinity,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.headerName = reader.string();
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
            ...baseHeaderSessionAffinity,
        };
        if (object.headerName !== undefined && object.headerName !== null) {
            message.headerName = String(object.headerName);
        }
        else {
            message.headerName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.headerName !== undefined &&
            (obj.headerName = message.headerName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHeaderSessionAffinity,
        };
        if (object.headerName !== undefined && object.headerName !== null) {
            message.headerName = object.headerName;
        }
        else {
            message.headerName = '';
        }
        return message;
    },
};
const baseCookieSessionAffinity = { name: '' };
exports.CookieSessionAffinity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.ttl !== undefined) {
            duration_1.Duration.encode(message.ttl, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCookieSessionAffinity,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.ttl = duration_1.Duration.decode(reader, reader.uint32());
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
            ...baseCookieSessionAffinity,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = duration_1.Duration.fromJSON(object.ttl);
        }
        else {
            message.ttl = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.ttl !== undefined &&
            (obj.ttl = message.ttl ? duration_1.Duration.toJSON(message.ttl) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCookieSessionAffinity,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = duration_1.Duration.fromPartial(object.ttl);
        }
        else {
            message.ttl = undefined;
        }
        return message;
    },
};
const baseConnectionSessionAffinity = { sourceIp: false };
exports.ConnectionSessionAffinity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceIp === true) {
            writer.uint32(8).bool(message.sourceIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectionSessionAffinity,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceIp = reader.bool();
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
            ...baseConnectionSessionAffinity,
        };
        if (object.sourceIp !== undefined && object.sourceIp !== null) {
            message.sourceIp = Boolean(object.sourceIp);
        }
        else {
            message.sourceIp = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceIp !== undefined && (obj.sourceIp = message.sourceIp);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseConnectionSessionAffinity,
        };
        if (object.sourceIp !== undefined && object.sourceIp !== null) {
            message.sourceIp = object.sourceIp;
        }
        else {
            message.sourceIp = false;
        }
        return message;
    },
};
const baseLoadBalancingConfig = {
    panicThreshold: 0,
    localityAwareRoutingPercent: 0,
    strictLocality: false,
    mode: 0,
};
exports.LoadBalancingConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.panicThreshold !== 0) {
            writer.uint32(8).int64(message.panicThreshold);
        }
        if (message.localityAwareRoutingPercent !== 0) {
            writer.uint32(16).int64(message.localityAwareRoutingPercent);
        }
        if (message.strictLocality === true) {
            writer.uint32(24).bool(message.strictLocality);
        }
        if (message.mode !== 0) {
            writer.uint32(32).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancingConfig };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.panicThreshold = longToNumber(reader.int64());
                    break;
                case 2:
                    message.localityAwareRoutingPercent = longToNumber(reader.int64());
                    break;
                case 3:
                    message.strictLocality = reader.bool();
                    break;
                case 4:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLoadBalancingConfig };
        if (object.panicThreshold !== undefined &&
            object.panicThreshold !== null) {
            message.panicThreshold = Number(object.panicThreshold);
        }
        else {
            message.panicThreshold = 0;
        }
        if (object.localityAwareRoutingPercent !== undefined &&
            object.localityAwareRoutingPercent !== null) {
            message.localityAwareRoutingPercent = Number(object.localityAwareRoutingPercent);
        }
        else {
            message.localityAwareRoutingPercent = 0;
        }
        if (object.strictLocality !== undefined &&
            object.strictLocality !== null) {
            message.strictLocality = Boolean(object.strictLocality);
        }
        else {
            message.strictLocality = false;
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = loadBalancingModeFromJSON(object.mode);
        }
        else {
            message.mode = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.panicThreshold !== undefined &&
            (obj.panicThreshold = message.panicThreshold);
        message.localityAwareRoutingPercent !== undefined &&
            (obj.localityAwareRoutingPercent =
                message.localityAwareRoutingPercent);
        message.strictLocality !== undefined &&
            (obj.strictLocality = message.strictLocality);
        message.mode !== undefined &&
            (obj.mode = loadBalancingModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLoadBalancingConfig };
        if (object.panicThreshold !== undefined &&
            object.panicThreshold !== null) {
            message.panicThreshold = object.panicThreshold;
        }
        else {
            message.panicThreshold = 0;
        }
        if (object.localityAwareRoutingPercent !== undefined &&
            object.localityAwareRoutingPercent !== null) {
            message.localityAwareRoutingPercent =
                object.localityAwareRoutingPercent;
        }
        else {
            message.localityAwareRoutingPercent = 0;
        }
        if (object.strictLocality !== undefined &&
            object.strictLocality !== null) {
            message.strictLocality = object.strictLocality;
        }
        else {
            message.strictLocality = false;
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = 0;
        }
        return message;
    },
};
const baseStreamBackend = { name: '', port: 0 };
exports.StreamBackend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.backendWeight }, writer.uint32(18).fork()).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            exports.LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            exports.TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.healthchecks) {
            exports.HealthCheck.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamBackend };
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.loadBalancingConfig = exports.LoadBalancingConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.targetGroups = exports.TargetGroupsBackend.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.healthchecks.push(exports.HealthCheck.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.tls = exports.BackendTls.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStreamBackend };
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.backendWeight !== undefined &&
            object.backendWeight !== null) {
            message.backendWeight = Number(object.backendWeight);
        }
        else {
            message.backendWeight = undefined;
        }
        if (object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null) {
            message.loadBalancingConfig = exports.LoadBalancingConfig.fromJSON(object.loadBalancingConfig);
        }
        else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = exports.TargetGroupsBackend.fromJSON(object.targetGroups);
        }
        else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(exports.HealthCheck.fromJSON(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = exports.BackendTls.fromJSON(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? exports.LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = message.port);
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? exports.TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) => e ? exports.HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? exports.BackendTls.toJSON(message.tls)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStreamBackend };
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.backendWeight !== undefined &&
            object.backendWeight !== null) {
            message.backendWeight = object.backendWeight;
        }
        else {
            message.backendWeight = undefined;
        }
        if (object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null) {
            message.loadBalancingConfig = exports.LoadBalancingConfig.fromPartial(object.loadBalancingConfig);
        }
        else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = exports.TargetGroupsBackend.fromPartial(object.targetGroups);
        }
        else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(exports.HealthCheck.fromPartial(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = exports.BackendTls.fromPartial(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
};
const baseHttpBackend = { name: '', port: 0, useHttp2: false };
exports.HttpBackend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.backendWeight }, writer.uint32(18).fork()).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            exports.LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            exports.TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
        }
        if (message.storageBucket !== undefined) {
            exports.StorageBucketBackend.encode(message.storageBucket, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.healthchecks) {
            exports.HealthCheck.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
        }
        if (message.useHttp2 === true) {
            writer.uint32(64).bool(message.useHttp2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpBackend };
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.loadBalancingConfig = exports.LoadBalancingConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.targetGroups = exports.TargetGroupsBackend.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.storageBucket = exports.StorageBucketBackend.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.healthchecks.push(exports.HealthCheck.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.tls = exports.BackendTls.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.useHttp2 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttpBackend };
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.backendWeight !== undefined &&
            object.backendWeight !== null) {
            message.backendWeight = Number(object.backendWeight);
        }
        else {
            message.backendWeight = undefined;
        }
        if (object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null) {
            message.loadBalancingConfig = exports.LoadBalancingConfig.fromJSON(object.loadBalancingConfig);
        }
        else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = exports.TargetGroupsBackend.fromJSON(object.targetGroups);
        }
        else {
            message.targetGroups = undefined;
        }
        if (object.storageBucket !== undefined &&
            object.storageBucket !== null) {
            message.storageBucket = exports.StorageBucketBackend.fromJSON(object.storageBucket);
        }
        else {
            message.storageBucket = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(exports.HealthCheck.fromJSON(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = exports.BackendTls.fromJSON(object.tls);
        }
        else {
            message.tls = undefined;
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = Boolean(object.useHttp2);
        }
        else {
            message.useHttp2 = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? exports.LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = message.port);
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? exports.TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        message.storageBucket !== undefined &&
            (obj.storageBucket = message.storageBucket
                ? exports.StorageBucketBackend.toJSON(message.storageBucket)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) => e ? exports.HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? exports.BackendTls.toJSON(message.tls)
                : undefined);
        message.useHttp2 !== undefined && (obj.useHttp2 = message.useHttp2);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttpBackend };
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.backendWeight !== undefined &&
            object.backendWeight !== null) {
            message.backendWeight = object.backendWeight;
        }
        else {
            message.backendWeight = undefined;
        }
        if (object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null) {
            message.loadBalancingConfig = exports.LoadBalancingConfig.fromPartial(object.loadBalancingConfig);
        }
        else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = exports.TargetGroupsBackend.fromPartial(object.targetGroups);
        }
        else {
            message.targetGroups = undefined;
        }
        if (object.storageBucket !== undefined &&
            object.storageBucket !== null) {
            message.storageBucket = exports.StorageBucketBackend.fromPartial(object.storageBucket);
        }
        else {
            message.storageBucket = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(exports.HealthCheck.fromPartial(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = exports.BackendTls.fromPartial(object.tls);
        }
        else {
            message.tls = undefined;
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = object.useHttp2;
        }
        else {
            message.useHttp2 = false;
        }
        return message;
    },
};
const baseGrpcBackend = { name: '', port: 0 };
exports.GrpcBackend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.backendWeight }, writer.uint32(18).fork()).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            exports.LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            exports.TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.healthchecks) {
            exports.HealthCheck.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.BackendTls.encode(message.tls, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcBackend };
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.loadBalancingConfig = exports.LoadBalancingConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.targetGroups = exports.TargetGroupsBackend.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.healthchecks.push(exports.HealthCheck.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.tls = exports.BackendTls.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrpcBackend };
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.backendWeight !== undefined &&
            object.backendWeight !== null) {
            message.backendWeight = Number(object.backendWeight);
        }
        else {
            message.backendWeight = undefined;
        }
        if (object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null) {
            message.loadBalancingConfig = exports.LoadBalancingConfig.fromJSON(object.loadBalancingConfig);
        }
        else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = exports.TargetGroupsBackend.fromJSON(object.targetGroups);
        }
        else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(exports.HealthCheck.fromJSON(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = exports.BackendTls.fromJSON(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? exports.LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = message.port);
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? exports.TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) => e ? exports.HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? exports.BackendTls.toJSON(message.tls)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrpcBackend };
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.backendWeight !== undefined &&
            object.backendWeight !== null) {
            message.backendWeight = object.backendWeight;
        }
        else {
            message.backendWeight = undefined;
        }
        if (object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null) {
            message.loadBalancingConfig = exports.LoadBalancingConfig.fromPartial(object.loadBalancingConfig);
        }
        else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = exports.TargetGroupsBackend.fromPartial(object.targetGroups);
        }
        else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(exports.HealthCheck.fromPartial(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = exports.BackendTls.fromPartial(object.tls);
        }
        else {
            message.tls = undefined;
        }
        return message;
    },
};
const baseTargetGroupsBackend = { targetGroupIds: '' };
exports.TargetGroupsBackend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetGroupIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetGroupsBackend };
        message.targetGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTargetGroupsBackend };
        message.targetGroupIds = [];
        if (object.targetGroupIds !== undefined &&
            object.targetGroupIds !== null) {
            for (const e of object.targetGroupIds) {
                message.targetGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetGroupIds) {
            obj.targetGroupIds = message.targetGroupIds.map((e) => e);
        }
        else {
            obj.targetGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTargetGroupsBackend };
        message.targetGroupIds = [];
        if (object.targetGroupIds !== undefined &&
            object.targetGroupIds !== null) {
            for (const e of object.targetGroupIds) {
                message.targetGroupIds.push(e);
            }
        }
        return message;
    },
};
const baseBackendTls = { sni: '' };
exports.BackendTls = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sni !== '') {
            writer.uint32(10).string(message.sni);
        }
        if (message.validationContext !== undefined) {
            tls_1.ValidationContext.encode(message.validationContext, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackendTls };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sni = reader.string();
                    break;
                case 3:
                    message.validationContext = tls_1.ValidationContext.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBackendTls };
        if (object.sni !== undefined && object.sni !== null) {
            message.sni = String(object.sni);
        }
        else {
            message.sni = '';
        }
        if (object.validationContext !== undefined &&
            object.validationContext !== null) {
            message.validationContext = tls_1.ValidationContext.fromJSON(object.validationContext);
        }
        else {
            message.validationContext = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sni !== undefined && (obj.sni = message.sni);
        message.validationContext !== undefined &&
            (obj.validationContext = message.validationContext
                ? tls_1.ValidationContext.toJSON(message.validationContext)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackendTls };
        if (object.sni !== undefined && object.sni !== null) {
            message.sni = object.sni;
        }
        else {
            message.sni = '';
        }
        if (object.validationContext !== undefined &&
            object.validationContext !== null) {
            message.validationContext = tls_1.ValidationContext.fromPartial(object.validationContext);
        }
        else {
            message.validationContext = undefined;
        }
        return message;
    },
};
const baseStorageBucketBackend = { bucket: '' };
exports.StorageBucketBackend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageBucketBackend };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStorageBucketBackend };
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        }
        else {
            message.bucket = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStorageBucketBackend };
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        }
        else {
            message.bucket = '';
        }
        return message;
    },
};
const baseHealthCheck = {
    intervalJitterPercent: 0,
    healthyThreshold: 0,
    unhealthyThreshold: 0,
    healthcheckPort: 0,
};
exports.HealthCheck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
        }
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.intervalJitterPercent !== 0) {
            writer.uint32(25).double(message.intervalJitterPercent);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(32).int64(message.healthyThreshold);
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(40).int64(message.unhealthyThreshold);
        }
        if (message.healthcheckPort !== 0) {
            writer.uint32(48).int64(message.healthcheckPort);
        }
        if (message.stream !== undefined) {
            exports.HealthCheck_StreamHealthCheck.encode(message.stream, writer.uint32(58).fork()).ldelim();
        }
        if (message.http !== undefined) {
            exports.HealthCheck_HttpHealthCheck.encode(message.http, writer.uint32(66).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            exports.HealthCheck_GrpcHealthCheck.encode(message.grpc, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.intervalJitterPercent = reader.double();
                    break;
                case 4:
                    message.healthyThreshold = longToNumber(reader.int64());
                    break;
                case 5:
                    message.unhealthyThreshold = longToNumber(reader.int64());
                    break;
                case 6:
                    message.healthcheckPort = longToNumber(reader.int64());
                    break;
                case 7:
                    message.stream = exports.HealthCheck_StreamHealthCheck.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.http = exports.HealthCheck_HttpHealthCheck.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.grpc = exports.HealthCheck_GrpcHealthCheck.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHealthCheck };
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromJSON(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = duration_1.Duration.fromJSON(object.interval);
        }
        else {
            message.interval = undefined;
        }
        if (object.intervalJitterPercent !== undefined &&
            object.intervalJitterPercent !== null) {
            message.intervalJitterPercent = Number(object.intervalJitterPercent);
        }
        else {
            message.intervalJitterPercent = 0;
        }
        if (object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null) {
            message.healthyThreshold = Number(object.healthyThreshold);
        }
        else {
            message.healthyThreshold = 0;
        }
        if (object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null) {
            message.unhealthyThreshold = Number(object.unhealthyThreshold);
        }
        else {
            message.unhealthyThreshold = 0;
        }
        if (object.healthcheckPort !== undefined &&
            object.healthcheckPort !== null) {
            message.healthcheckPort = Number(object.healthcheckPort);
        }
        else {
            message.healthcheckPort = 0;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = exports.HealthCheck_StreamHealthCheck.fromJSON(object.stream);
        }
        else {
            message.stream = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = exports.HealthCheck_HttpHealthCheck.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = exports.HealthCheck_GrpcHealthCheck.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        message.intervalJitterPercent !== undefined &&
            (obj.intervalJitterPercent = message.intervalJitterPercent);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = message.healthyThreshold);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = message.unhealthyThreshold);
        message.healthcheckPort !== undefined &&
            (obj.healthcheckPort = message.healthcheckPort);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? exports.HealthCheck_StreamHealthCheck.toJSON(message.stream)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? exports.HealthCheck_HttpHealthCheck.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? exports.HealthCheck_GrpcHealthCheck.toJSON(message.grpc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHealthCheck };
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromPartial(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = duration_1.Duration.fromPartial(object.interval);
        }
        else {
            message.interval = undefined;
        }
        if (object.intervalJitterPercent !== undefined &&
            object.intervalJitterPercent !== null) {
            message.intervalJitterPercent = object.intervalJitterPercent;
        }
        else {
            message.intervalJitterPercent = 0;
        }
        if (object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null) {
            message.healthyThreshold = object.healthyThreshold;
        }
        else {
            message.healthyThreshold = 0;
        }
        if (object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null) {
            message.unhealthyThreshold = object.unhealthyThreshold;
        }
        else {
            message.unhealthyThreshold = 0;
        }
        if (object.healthcheckPort !== undefined &&
            object.healthcheckPort !== null) {
            message.healthcheckPort = object.healthcheckPort;
        }
        else {
            message.healthcheckPort = 0;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = exports.HealthCheck_StreamHealthCheck.fromPartial(object.stream);
        }
        else {
            message.stream = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = exports.HealthCheck_HttpHealthCheck.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = exports.HealthCheck_GrpcHealthCheck.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
};
const baseHealthCheck_StreamHealthCheck = {};
exports.HealthCheck_StreamHealthCheck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.send !== undefined) {
            payload_1.Payload.encode(message.send, writer.uint32(10).fork()).ldelim();
        }
        if (message.receive !== undefined) {
            payload_1.Payload.encode(message.receive, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_StreamHealthCheck,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.send = payload_1.Payload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receive = payload_1.Payload.decode(reader, reader.uint32());
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
            ...baseHealthCheck_StreamHealthCheck,
        };
        if (object.send !== undefined && object.send !== null) {
            message.send = payload_1.Payload.fromJSON(object.send);
        }
        else {
            message.send = undefined;
        }
        if (object.receive !== undefined && object.receive !== null) {
            message.receive = payload_1.Payload.fromJSON(object.receive);
        }
        else {
            message.receive = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.send !== undefined &&
            (obj.send = message.send
                ? payload_1.Payload.toJSON(message.send)
                : undefined);
        message.receive !== undefined &&
            (obj.receive = message.receive
                ? payload_1.Payload.toJSON(message.receive)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheck_StreamHealthCheck,
        };
        if (object.send !== undefined && object.send !== null) {
            message.send = payload_1.Payload.fromPartial(object.send);
        }
        else {
            message.send = undefined;
        }
        if (object.receive !== undefined && object.receive !== null) {
            message.receive = payload_1.Payload.fromPartial(object.receive);
        }
        else {
            message.receive = undefined;
        }
        return message;
    },
};
const baseHealthCheck_HttpHealthCheck = {
    host: '',
    path: '',
    useHttp2: false,
};
exports.HealthCheck_HttpHealthCheck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.useHttp2 === true) {
            writer.uint32(24).bool(message.useHttp2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_HttpHealthCheck,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.useHttp2 = reader.bool();
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
            ...baseHealthCheck_HttpHealthCheck,
        };
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        }
        else {
            message.host = '';
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = '';
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = Boolean(object.useHttp2);
        }
        else {
            message.useHttp2 = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.path !== undefined && (obj.path = message.path);
        message.useHttp2 !== undefined && (obj.useHttp2 = message.useHttp2);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheck_HttpHealthCheck,
        };
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        }
        else {
            message.host = '';
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = '';
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = object.useHttp2;
        }
        else {
            message.useHttp2 = false;
        }
        return message;
    },
};
const baseHealthCheck_GrpcHealthCheck = { serviceName: '' };
exports.HealthCheck_GrpcHealthCheck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceName !== '') {
            writer.uint32(10).string(message.serviceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_GrpcHealthCheck,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceName = reader.string();
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
            ...baseHealthCheck_GrpcHealthCheck,
        };
        if (object.serviceName !== undefined && object.serviceName !== null) {
            message.serviceName = String(object.serviceName);
        }
        else {
            message.serviceName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceName !== undefined &&
            (obj.serviceName = message.serviceName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheck_GrpcHealthCheck,
        };
        if (object.serviceName !== undefined && object.serviceName !== null) {
            message.serviceName = object.serviceName;
        }
        else {
            message.serviceName = '';
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
