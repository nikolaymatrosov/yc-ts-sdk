"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlModelServiceClient = exports.MlModelServiceService = exports.DeleteMlModelMetadata = exports.DeleteMlModelRequest = exports.UpdateMlModelMetadata = exports.UpdateMlModelRequest = exports.CreateMlModelMetadata = exports.CreateMlModelRequest = exports.ListMlModelsResponse = exports.ListMlModelsRequest = exports.GetMlModelRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const ml_model_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
const baseGetMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest',
    clusterId: '',
    mlModelName: '',
};
exports.GetMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMlModelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetMlModelRequest.$type, exports.GetMlModelRequest);
const baseListMlModelsRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListMlModelsRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest',
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
        const message = { ...baseListMlModelsRequest };
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
        const message = { ...baseListMlModelsRequest };
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
        const message = { ...baseListMlModelsRequest };
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
typeRegistry_1.messageTypeRegistry.set(exports.ListMlModelsRequest.$type, exports.ListMlModelsRequest);
const baseListMlModelsResponse = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse',
    nextPageToken: '',
};
exports.ListMlModelsResponse = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.mlModels) {
            ml_model_1.MlModel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMlModelsResponse };
        message.mlModels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mlModels.push(ml_model_1.MlModel.decode(reader, reader.uint32()));
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
        const message = { ...baseListMlModelsResponse };
        message.mlModels = [];
        if (object.mlModels !== undefined && object.mlModels !== null) {
            for (const e of object.mlModels) {
                message.mlModels.push(ml_model_1.MlModel.fromJSON(e));
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
        if (message.mlModels) {
            obj.mlModels = message.mlModels.map((e) => e ? ml_model_1.MlModel.toJSON(e) : undefined);
        }
        else {
            obj.mlModels = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListMlModelsResponse };
        message.mlModels = [];
        if (object.mlModels !== undefined && object.mlModels !== null) {
            for (const e of object.mlModels) {
                message.mlModels.push(ml_model_1.MlModel.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListMlModelsResponse.$type, exports.ListMlModelsResponse);
const baseCreateMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest',
    clusterId: '',
    mlModelName: '',
    type: 0,
    uri: '',
};
exports.CreateMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMlModelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = (0, ml_model_1.mlModelTypeFromJSON)(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        message.type !== undefined &&
            (obj.type = (0, ml_model_1.mlModelTypeToJSON)(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateMlModelRequest.$type, exports.CreateMlModelRequest);
const baseCreateMlModelMetadata = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata',
    clusterId: '',
    mlModelName: '',
};
exports.CreateMlModelMetadata = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMlModelMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
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
            ...baseCreateMlModelMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateMlModelMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateMlModelMetadata.$type, exports.CreateMlModelMetadata);
const baseUpdateMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest',
    clusterId: '',
    mlModelName: '',
    uri: '',
};
exports.UpdateMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateMlModelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateMlModelRequest.$type, exports.UpdateMlModelRequest);
const baseUpdateMlModelMetadata = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata',
    clusterId: '',
    mlModelName: '',
};
exports.UpdateMlModelMetadata = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateMlModelMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
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
            ...baseUpdateMlModelMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateMlModelMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateMlModelMetadata.$type, exports.UpdateMlModelMetadata);
const baseDeleteMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest',
    clusterId: '',
    mlModelName: '',
};
exports.DeleteMlModelRequest = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMlModelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteMlModelRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMlModelRequest.$type, exports.DeleteMlModelRequest);
const baseDeleteMlModelMetadata = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata',
    clusterId: '',
    mlModelName: '',
};
exports.DeleteMlModelMetadata = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteMlModelMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
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
            ...baseDeleteMlModelMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteMlModelMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        }
        else {
            message.mlModelName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMlModelMetadata.$type, exports.DeleteMlModelMetadata);
/** A set of methods for managing machine learning models. */
exports.MlModelServiceService = {
    /**
     * Returns the specified machine learning model.
     *
     * To get the list of all available models, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ml_model_1.MlModel.encode(value).finish()),
        responseDeserialize: (value) => ml_model_1.MlModel.decode(value),
    },
    /** Retrieves the list of machine learning models in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListMlModelsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListMlModelsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListMlModelsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListMlModelsResponse.decode(value),
    },
    /** Creates a machine learning model in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified machine learning model. */
    update: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified machine learning model. */
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.MlModelServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MlModelServiceService, 'yandex.cloud.mdb.clickhouse.v1.MlModelService');
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
