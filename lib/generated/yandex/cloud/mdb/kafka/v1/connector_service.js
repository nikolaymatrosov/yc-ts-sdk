"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorServiceClient = exports.ConnectorServiceService = exports.PauseConnectorMetadata = exports.PauseConnectorRequest = exports.ResumeConnectorMetadata = exports.ResumeConnectorRequest = exports.DeleteConnectorMetadata = exports.DeleteConnectorRequest = exports.CreateConnectorMetadata = exports.CreateConnectorRequest = exports.ListConnectorsResponse = exports.ListConnectorsRequest = exports.GetConnectorRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const connector_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/connector");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.kafka.v1';
const baseGetConnectorRequest = { clusterId: '', connectorName: '' };
exports.GetConnectorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetConnectorRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetConnectorRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetConnectorRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const baseListConnectorsRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListConnectorsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListConnectorsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
        const message = {
            ...baseListConnectorsRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListConnectorsRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
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
const baseListConnectorsResponse = { nextPageToken: '' };
exports.ListConnectorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.connectors) {
            connector_1.Connector.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListConnectorsResponse,
        };
        message.connectors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectors.push(connector_1.Connector.decode(reader, reader.uint32()));
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
            ...baseListConnectorsResponse,
        };
        message.connectors = [];
        if (object.connectors !== undefined && object.connectors !== null) {
            for (const e of object.connectors) {
                message.connectors.push(connector_1.Connector.fromJSON(e));
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
        if (message.connectors) {
            obj.connectors = message.connectors.map((e) => e ? connector_1.Connector.toJSON(e) : undefined);
        }
        else {
            obj.connectors = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListConnectorsResponse,
        };
        message.connectors = [];
        if (object.connectors !== undefined && object.connectors !== null) {
            for (const e of object.connectors) {
                message.connectors.push(connector_1.Connector.fromPartial(e));
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
const baseCreateConnectorRequest = { clusterId: '' };
exports.CreateConnectorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorSpec !== undefined) {
            connector_1.ConnectorSpec.encode(message.connectorSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateConnectorRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorSpec = connector_1.ConnectorSpec.decode(reader, reader.uint32());
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
            ...baseCreateConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorSpec !== undefined &&
            object.connectorSpec !== null) {
            message.connectorSpec = connector_1.ConnectorSpec.fromJSON(object.connectorSpec);
        }
        else {
            message.connectorSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorSpec !== undefined &&
            (obj.connectorSpec = message.connectorSpec
                ? connector_1.ConnectorSpec.toJSON(message.connectorSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorSpec !== undefined &&
            object.connectorSpec !== null) {
            message.connectorSpec = connector_1.ConnectorSpec.fromPartial(object.connectorSpec);
        }
        else {
            message.connectorSpec = undefined;
        }
        return message;
    },
};
const baseCreateConnectorMetadata = {
    clusterId: '',
    connectorName: '',
};
exports.CreateConnectorMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateConnectorMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...baseCreateConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const baseDeleteConnectorRequest = { clusterId: '', connectorName: '' };
exports.DeleteConnectorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteConnectorRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...baseDeleteConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const baseDeleteConnectorMetadata = {
    clusterId: '',
    connectorName: '',
};
exports.DeleteConnectorMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteConnectorMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...baseDeleteConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const baseResumeConnectorRequest = { clusterId: '', connectorName: '' };
exports.ResumeConnectorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeConnectorRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...baseResumeConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResumeConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const baseResumeConnectorMetadata = {
    clusterId: '',
    connectorName: '',
};
exports.ResumeConnectorMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeConnectorMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...baseResumeConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResumeConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const basePauseConnectorRequest = { clusterId: '', connectorName: '' };
exports.PauseConnectorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseConnectorRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...basePauseConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePauseConnectorRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
const basePauseConnectorMetadata = { clusterId: '', connectorName: '' };
exports.PauseConnectorMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseConnectorMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
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
            ...basePauseConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = String(object.connectorName);
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePauseConnectorMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.connectorName !== undefined &&
            object.connectorName !== null) {
            message.connectorName = object.connectorName;
        }
        else {
            message.connectorName = '';
        }
        return message;
    },
};
/** A set of methods for managing Apache Kafka Connectors resources. */
exports.ConnectorServiceService = {
    /**
     * Returns the specified Apache Kafka Connector resource.
     *
     * To get the list of available Apache Kafka Connector resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(connector_1.Connector.encode(value).finish()),
        responseDeserialize: (value) => connector_1.Connector.decode(value),
    },
    /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListConnectorsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListConnectorsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListConnectorsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListConnectorsResponse.decode(value),
    },
    /** Creates a new Apache Kafka connector in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Apache Kafka connector. */
    delete: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Resume the specified Apache Kafka connector. */
    resume: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ResumeConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ResumeConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Pause the specified Apache Kafka connector. */
    pause: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PauseConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PauseConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ConnectorServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ConnectorServiceService, 'yandex.cloud.mdb.kafka.v1.ConnectorService');
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
