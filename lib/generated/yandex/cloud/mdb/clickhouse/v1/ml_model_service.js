/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { MlModel, mlModelTypeFromJSON, mlModelTypeToJSON, } from '../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
const baseGetMlModelRequest = { clusterId: '', mlModelName: '' };
export const GetMlModelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListMlModelsRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListMlModelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListMlModelsResponse = { nextPageToken: '' };
export const ListMlModelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.mlModels) {
            MlModel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMlModelsResponse };
        message.mlModels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mlModels.push(MlModel.decode(reader, reader.uint32()));
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
                message.mlModels.push(MlModel.fromJSON(e));
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
            obj.mlModels = message.mlModels.map((e) => e ? MlModel.toJSON(e) : undefined);
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
                message.mlModels.push(MlModel.fromPartial(e));
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
const baseCreateMlModelRequest = {
    clusterId: '',
    mlModelName: '',
    type: 0,
    uri: '',
};
export const CreateMlModelRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            message.type = mlModelTypeFromJSON(object.type);
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
            (obj.type = mlModelTypeToJSON(message.type));
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
const baseCreateMlModelMetadata = { clusterId: '', mlModelName: '' };
export const CreateMlModelMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateMlModelRequest = {
    clusterId: '',
    mlModelName: '',
    uri: '',
};
export const UpdateMlModelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
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
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
                ? FieldMask.toJSON(message.updateMask)
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
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
const baseUpdateMlModelMetadata = { clusterId: '', mlModelName: '' };
export const UpdateMlModelMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteMlModelRequest = { clusterId: '', mlModelName: '' };
export const DeleteMlModelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteMlModelMetadata = { clusterId: '', mlModelName: '' };
export const DeleteMlModelMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
/** A set of methods for managing machine learning models. */
export const MlModelServiceService = {
    /**
     * Returns the specified machine learning model.
     *
     * To get the list of all available models, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => GetMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(MlModel.encode(value).finish()),
        responseDeserialize: (value) => MlModel.decode(value),
    },
    /** Retrieves the list of machine learning models in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListMlModelsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListMlModelsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListMlModelsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListMlModelsResponse.decode(value),
    },
    /** Creates a machine learning model in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified machine learning model. */
    update: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified machine learning model. */
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const MlModelServiceClient = makeGenericClientConstructor(MlModelServiceService, 'yandex.cloud.mdb.clickhouse.v1.MlModelService');
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
