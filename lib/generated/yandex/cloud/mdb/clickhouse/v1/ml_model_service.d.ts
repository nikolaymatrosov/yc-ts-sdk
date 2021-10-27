/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { MlModelType, MlModel } from '../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export interface GetMlModelRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata';
    /** ID of the cluster that a model is being added to. */
    clusterId: string;
    /** Name of the the model that is being created. */
    mlModelName: string;
}
export interface UpdateMlModelRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata';
    /** ID of the cluster that contains the model being updated. */
    clusterId: string;
    /** Name of the the model that is being updated. */
    mlModelName: string;
}
export interface DeleteMlModelRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata';
    /** ID of the cluster that contains the model being deleted. */
    clusterId: string;
    /** Name of the the model that is being deleted. */
    mlModelName: string;
}
export declare const GetMlModelRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest";
    encode(message: GetMlModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMlModelRequest;
    fromJSON(object: any): GetMlModelRequest;
    toJSON(message: GetMlModelRequest): unknown;
    fromPartial(object: DeepPartial<GetMlModelRequest>): GetMlModelRequest;
};
export declare const ListMlModelsRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest";
    encode(message: ListMlModelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMlModelsRequest;
    fromJSON(object: any): ListMlModelsRequest;
    toJSON(message: ListMlModelsRequest): unknown;
    fromPartial(object: DeepPartial<ListMlModelsRequest>): ListMlModelsRequest;
};
export declare const ListMlModelsResponse: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse";
    encode(message: ListMlModelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMlModelsResponse;
    fromJSON(object: any): ListMlModelsResponse;
    toJSON(message: ListMlModelsResponse): unknown;
    fromPartial(object: DeepPartial<ListMlModelsResponse>): ListMlModelsResponse;
};
export declare const CreateMlModelRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest";
    encode(message: CreateMlModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMlModelRequest;
    fromJSON(object: any): CreateMlModelRequest;
    toJSON(message: CreateMlModelRequest): unknown;
    fromPartial(object: DeepPartial<CreateMlModelRequest>): CreateMlModelRequest;
};
export declare const CreateMlModelMetadata: {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata";
    encode(message: CreateMlModelMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMlModelMetadata;
    fromJSON(object: any): CreateMlModelMetadata;
    toJSON(message: CreateMlModelMetadata): unknown;
    fromPartial(object: DeepPartial<CreateMlModelMetadata>): CreateMlModelMetadata;
};
export declare const UpdateMlModelRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest";
    encode(message: UpdateMlModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateMlModelRequest;
    fromJSON(object: any): UpdateMlModelRequest;
    toJSON(message: UpdateMlModelRequest): unknown;
    fromPartial(object: DeepPartial<UpdateMlModelRequest>): UpdateMlModelRequest;
};
export declare const UpdateMlModelMetadata: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata";
    encode(message: UpdateMlModelMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateMlModelMetadata;
    fromJSON(object: any): UpdateMlModelMetadata;
    toJSON(message: UpdateMlModelMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateMlModelMetadata>): UpdateMlModelMetadata;
};
export declare const DeleteMlModelRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest";
    encode(message: DeleteMlModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMlModelRequest;
    fromJSON(object: any): DeleteMlModelRequest;
    toJSON(message: DeleteMlModelRequest): unknown;
    fromPartial(object: DeepPartial<DeleteMlModelRequest>): DeleteMlModelRequest;
};
export declare const DeleteMlModelMetadata: {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata";
    encode(message: DeleteMlModelMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMlModelMetadata;
    fromJSON(object: any): DeleteMlModelMetadata;
    toJSON(message: DeleteMlModelMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteMlModelMetadata>): DeleteMlModelMetadata;
};
/** A set of methods for managing machine learning models. */
export declare const MlModelServiceService: {
    /**
     * Returns the specified machine learning model.
     *
     * To get the list of all available models, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMlModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMlModelRequest;
        readonly responseSerialize: (value: MlModel) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MlModel;
    };
    /** Retrieves the list of machine learning models in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListMlModelsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListMlModelsRequest;
        readonly responseSerialize: (value: ListMlModelsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListMlModelsResponse;
    };
    /** Creates a machine learning model in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMlModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMlModelRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified machine learning model. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMlModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMlModelRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified machine learning model. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMlModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMlModelRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    get(request: GetMlModelRequest, callback: (error: ServiceError | null, response: MlModel) => void): ClientUnaryCall;
    get(request: GetMlModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MlModel) => void): ClientUnaryCall;
    get(request: GetMlModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MlModel) => void): ClientUnaryCall;
    /** Retrieves the list of machine learning models in the specified cluster. */
    list(request: ListMlModelsRequest, callback: (error: ServiceError | null, response: ListMlModelsResponse) => void): ClientUnaryCall;
    list(request: ListMlModelsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListMlModelsResponse) => void): ClientUnaryCall;
    list(request: ListMlModelsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListMlModelsResponse) => void): ClientUnaryCall;
    /** Creates a machine learning model in the specified cluster. */
    create(request: CreateMlModelRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateMlModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateMlModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified machine learning model. */
    update(request: UpdateMlModelRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateMlModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateMlModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified machine learning model. */
    delete(request: DeleteMlModelRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteMlModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteMlModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const MlModelServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => MlModelServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
