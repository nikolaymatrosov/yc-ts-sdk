/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    MlModelType,
    MlModel,
    mlModelTypeFromJSON,
    mlModelTypeToJSON,
} from '../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface GetMlModelRequest {
    /** ID of the cluster that the model belongs to. */
    clusterId: string;
    /**
     * Name of the model to return.
     *
     * To get a model name make a [MlModelService.List] request.
     */
    mlModelName: string;
}

export interface ListMlModelsRequest {
    /** ID of the cluster that models belongs to. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListMlModelsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListMlModelsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListMlModelsResponse {
    /** List of models in the specified cluster. */
    mlModels: MlModel[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListMlModelsRequest.page_size], use `next_page_token` as the value
     * for the [ListMlModelsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateMlModelRequest {
    /**
     * ID of the cluster to create a model in.
     *
     * To get a cluster ID make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Model name. The model name is one of the arguments of the modelEvaluate() function, which is used to call the model in ClickHouse. */
    mlModelName: string;
    /** Type of the model. */
    type: MlModelType;
    /** Model file URL. You can only use models stored in Yandex Object Storage. */
    uri: string;
}

export interface CreateMlModelMetadata {
    /** ID of the cluster that a model is being added to. */
    clusterId: string;
    /** Name of the the model that is being created. */
    mlModelName: string;
}

export interface UpdateMlModelRequest {
    /**
     * ID of the cluster to update the model in.
     *
     * To get a cluster ID make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the the model to update. */
    mlModelName: string;
    updateMask: FieldMask | undefined;
    /** The new model file URL. You can only use models stored in Yandex Object Storage. */
    uri: string;
}

export interface UpdateMlModelMetadata {
    /** ID of the cluster that contains the model being updated. */
    clusterId: string;
    /** Name of the the model that is being updated. */
    mlModelName: string;
}

export interface DeleteMlModelRequest {
    /**
     * ID of the cluster to delete the model in.
     *
     * To get a cluster ID make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the the model to delete. */
    mlModelName: string;
}

export interface DeleteMlModelMetadata {
    /** ID of the cluster that contains the model being deleted. */
    clusterId: string;
    /** Name of the the model that is being deleted. */
    mlModelName: string;
}

const baseGetMlModelRequest: object = { clusterId: '', mlModelName: '' };

export const GetMlModelRequest = {
    encode(
        message: GetMlModelRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMlModelRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMlModelRequest } as GetMlModelRequest;
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

    fromJSON(object: any): GetMlModelRequest {
        const message = { ...baseGetMlModelRequest } as GetMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        return message;
    },

    toJSON(message: GetMlModelRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },

    fromPartial(object: DeepPartial<GetMlModelRequest>): GetMlModelRequest {
        const message = { ...baseGetMlModelRequest } as GetMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
            message.mlModelName = '';
        }
        return message;
    },
};

const baseListMlModelsRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListMlModelsRequest = {
    encode(
        message: ListMlModelsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListMlModelsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMlModelsRequest } as ListMlModelsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
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

    fromJSON(object: any): ListMlModelsRequest {
        const message = { ...baseListMlModelsRequest } as ListMlModelsRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        return message;
    },

    toJSON(message: ListMlModelsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListMlModelsRequest>): ListMlModelsRequest {
        const message = { ...baseListMlModelsRequest } as ListMlModelsRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        return message;
    },
};

const baseListMlModelsResponse: object = { nextPageToken: '' };

export const ListMlModelsResponse = {
    encode(
        message: ListMlModelsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.mlModels) {
            MlModel.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListMlModelsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMlModelsResponse } as ListMlModelsResponse;
        message.mlModels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mlModels.push(
                        MlModel.decode(reader, reader.uint32())
                    );
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

    fromJSON(object: any): ListMlModelsResponse {
        const message = { ...baseListMlModelsResponse } as ListMlModelsResponse;
        message.mlModels = [];
        if (object.mlModels !== undefined && object.mlModels !== null) {
            for (const e of object.mlModels) {
                message.mlModels.push(MlModel.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListMlModelsResponse): unknown {
        const obj: any = {};
        if (message.mlModels) {
            obj.mlModels = message.mlModels.map((e) =>
                e ? MlModel.toJSON(e) : undefined
            );
        } else {
            obj.mlModels = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListMlModelsResponse>
    ): ListMlModelsResponse {
        const message = { ...baseListMlModelsResponse } as ListMlModelsResponse;
        message.mlModels = [];
        if (object.mlModels !== undefined && object.mlModels !== null) {
            for (const e of object.mlModels) {
                message.mlModels.push(MlModel.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseCreateMlModelRequest: object = {
    clusterId: '',
    mlModelName: '',
    type: 0,
    uri: '',
};

export const CreateMlModelRequest = {
    encode(
        message: CreateMlModelRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateMlModelRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMlModelRequest } as CreateMlModelRequest;
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
                    message.type = reader.int32() as any;
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

    fromJSON(object: any): CreateMlModelRequest {
        const message = { ...baseCreateMlModelRequest } as CreateMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = mlModelTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        } else {
            message.uri = '';
        }
        return message;
    },

    toJSON(message: CreateMlModelRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        message.type !== undefined &&
            (obj.type = mlModelTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateMlModelRequest>
    ): CreateMlModelRequest {
        const message = { ...baseCreateMlModelRequest } as CreateMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
            message.mlModelName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        } else {
            message.uri = '';
        }
        return message;
    },
};

const baseCreateMlModelMetadata: object = { clusterId: '', mlModelName: '' };

export const CreateMlModelMetadata = {
    encode(
        message: CreateMlModelMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateMlModelMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMlModelMetadata,
        } as CreateMlModelMetadata;
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

    fromJSON(object: any): CreateMlModelMetadata {
        const message = {
            ...baseCreateMlModelMetadata,
        } as CreateMlModelMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        return message;
    },

    toJSON(message: CreateMlModelMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateMlModelMetadata>
    ): CreateMlModelMetadata {
        const message = {
            ...baseCreateMlModelMetadata,
        } as CreateMlModelMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
            message.mlModelName = '';
        }
        return message;
    },
};

const baseUpdateMlModelRequest: object = {
    clusterId: '',
    mlModelName: '',
    uri: '',
};

export const UpdateMlModelRequest = {
    encode(
        message: UpdateMlModelRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateMlModelRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateMlModelRequest } as UpdateMlModelRequest;
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
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): UpdateMlModelRequest {
        const message = { ...baseUpdateMlModelRequest } as UpdateMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        } else {
            message.uri = '';
        }
        return message;
    },

    toJSON(message: UpdateMlModelRequest): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<UpdateMlModelRequest>
    ): UpdateMlModelRequest {
        const message = { ...baseUpdateMlModelRequest } as UpdateMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
            message.mlModelName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        } else {
            message.uri = '';
        }
        return message;
    },
};

const baseUpdateMlModelMetadata: object = { clusterId: '', mlModelName: '' };

export const UpdateMlModelMetadata = {
    encode(
        message: UpdateMlModelMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateMlModelMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateMlModelMetadata,
        } as UpdateMlModelMetadata;
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

    fromJSON(object: any): UpdateMlModelMetadata {
        const message = {
            ...baseUpdateMlModelMetadata,
        } as UpdateMlModelMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        return message;
    },

    toJSON(message: UpdateMlModelMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateMlModelMetadata>
    ): UpdateMlModelMetadata {
        const message = {
            ...baseUpdateMlModelMetadata,
        } as UpdateMlModelMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
            message.mlModelName = '';
        }
        return message;
    },
};

const baseDeleteMlModelRequest: object = { clusterId: '', mlModelName: '' };

export const DeleteMlModelRequest = {
    encode(
        message: DeleteMlModelRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteMlModelRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMlModelRequest } as DeleteMlModelRequest;
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

    fromJSON(object: any): DeleteMlModelRequest {
        const message = { ...baseDeleteMlModelRequest } as DeleteMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        return message;
    },

    toJSON(message: DeleteMlModelRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteMlModelRequest>
    ): DeleteMlModelRequest {
        const message = { ...baseDeleteMlModelRequest } as DeleteMlModelRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
            message.mlModelName = '';
        }
        return message;
    },
};

const baseDeleteMlModelMetadata: object = { clusterId: '', mlModelName: '' };

export const DeleteMlModelMetadata = {
    encode(
        message: DeleteMlModelMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== '') {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteMlModelMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteMlModelMetadata,
        } as DeleteMlModelMetadata;
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

    fromJSON(object: any): DeleteMlModelMetadata {
        const message = {
            ...baseDeleteMlModelMetadata,
        } as DeleteMlModelMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = String(object.mlModelName);
        } else {
            message.mlModelName = '';
        }
        return message;
    },

    toJSON(message: DeleteMlModelMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteMlModelMetadata>
    ): DeleteMlModelMetadata {
        const message = {
            ...baseDeleteMlModelMetadata,
        } as DeleteMlModelMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.mlModelName !== undefined && object.mlModelName !== null) {
            message.mlModelName = object.mlModelName;
        } else {
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
        requestSerialize: (value: GetMlModelRequest) =>
            Buffer.from(GetMlModelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetMlModelRequest.decode(value),
        responseSerialize: (value: MlModel) =>
            Buffer.from(MlModel.encode(value).finish()),
        responseDeserialize: (value: Buffer) => MlModel.decode(value),
    },
    /** Retrieves the list of machine learning models in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListMlModelsRequest) =>
            Buffer.from(ListMlModelsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListMlModelsRequest.decode(value),
        responseSerialize: (value: ListMlModelsResponse) =>
            Buffer.from(ListMlModelsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListMlModelsResponse.decode(value),
    },
    /** Creates a machine learning model in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateMlModelRequest) =>
            Buffer.from(CreateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateMlModelRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified machine learning model. */
    update: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateMlModelRequest) =>
            Buffer.from(UpdateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateMlModelRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified machine learning model. */
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteMlModelRequest) =>
            Buffer.from(DeleteMlModelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteMlModelRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface MlModelServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified machine learning model.
     *
     * To get the list of all available models, make a [List] request.
     */
    get: handleUnaryCall<GetMlModelRequest, MlModel>;
    /** Retrieves the list of machine learning models in the specified cluster. */
    list: handleUnaryCall<ListMlModelsRequest, ListMlModelsResponse>;
    /** Creates a machine learning model in the specified cluster. */
    create: handleUnaryCall<CreateMlModelRequest, Operation>;
    /** Updates the specified machine learning model. */
    update: handleUnaryCall<UpdateMlModelRequest, Operation>;
    /** Deletes the specified machine learning model. */
    delete: handleUnaryCall<DeleteMlModelRequest, Operation>;
}

export interface MlModelServiceClient extends Client {
    /**
     * Returns the specified machine learning model.
     *
     * To get the list of all available models, make a [List] request.
     */
    get(
        request: GetMlModelRequest,
        callback: (error: ServiceError | null, response: MlModel) => void
    ): ClientUnaryCall;
    get(
        request: GetMlModelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: MlModel) => void
    ): ClientUnaryCall;
    get(
        request: GetMlModelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: MlModel) => void
    ): ClientUnaryCall;
    /** Retrieves the list of machine learning models in the specified cluster. */
    list(
        request: ListMlModelsRequest,
        callback: (
            error: ServiceError | null,
            response: ListMlModelsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListMlModelsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListMlModelsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListMlModelsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListMlModelsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a machine learning model in the specified cluster. */
    create(
        request: CreateMlModelRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateMlModelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateMlModelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified machine learning model. */
    update(
        request: UpdateMlModelRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateMlModelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateMlModelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified machine learning model. */
    delete(
        request: DeleteMlModelRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteMlModelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteMlModelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const MlModelServiceClient = makeGenericClientConstructor(
    MlModelServiceService,
    'yandex.cloud.mdb.clickhouse.v1.MlModelService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): MlModelServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
