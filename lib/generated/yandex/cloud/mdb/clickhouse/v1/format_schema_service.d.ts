/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { FormatSchemaType, FormatSchema } from '../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export interface GetFormatSchemaRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest';
    clusterId: string;
    formatSchemaName: string;
}
export interface ListFormatSchemasRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest';
    clusterId: string;
    pageSize: number;
    pageToken: string;
}
export interface ListFormatSchemasResponse {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse';
    formatSchemas: FormatSchema[];
    nextPageToken: string;
}
export interface CreateFormatSchemaRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest';
    clusterId: string;
    formatSchemaName: string;
    type: FormatSchemaType;
    uri: string;
}
export interface CreateFormatSchemaMetadata {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata';
    clusterId: string;
    formatSchemaName: string;
}
export interface UpdateFormatSchemaRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest';
    clusterId: string;
    formatSchemaName: string;
    updateMask: FieldMask | undefined;
    uri: string;
}
export interface UpdateFormatSchemaMetadata {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata';
    clusterId: string;
    formatSchemaName: string;
}
export interface DeleteFormatSchemaRequest {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest';
    clusterId: string;
    formatSchemaName: string;
}
export interface DeleteFormatSchemaMetadata {
    $type: 'yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata';
    clusterId: string;
    formatSchemaName: string;
}
export declare const GetFormatSchemaRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest";
    encode(message: GetFormatSchemaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFormatSchemaRequest;
    fromJSON(object: any): GetFormatSchemaRequest;
    toJSON(message: GetFormatSchemaRequest): unknown;
    fromPartial(object: DeepPartial<GetFormatSchemaRequest>): GetFormatSchemaRequest;
};
export declare const ListFormatSchemasRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest";
    encode(message: ListFormatSchemasRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFormatSchemasRequest;
    fromJSON(object: any): ListFormatSchemasRequest;
    toJSON(message: ListFormatSchemasRequest): unknown;
    fromPartial(object: DeepPartial<ListFormatSchemasRequest>): ListFormatSchemasRequest;
};
export declare const ListFormatSchemasResponse: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse";
    encode(message: ListFormatSchemasResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFormatSchemasResponse;
    fromJSON(object: any): ListFormatSchemasResponse;
    toJSON(message: ListFormatSchemasResponse): unknown;
    fromPartial(object: DeepPartial<ListFormatSchemasResponse>): ListFormatSchemasResponse;
};
export declare const CreateFormatSchemaRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest";
    encode(message: CreateFormatSchemaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFormatSchemaRequest;
    fromJSON(object: any): CreateFormatSchemaRequest;
    toJSON(message: CreateFormatSchemaRequest): unknown;
    fromPartial(object: DeepPartial<CreateFormatSchemaRequest>): CreateFormatSchemaRequest;
};
export declare const CreateFormatSchemaMetadata: {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata";
    encode(message: CreateFormatSchemaMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFormatSchemaMetadata;
    fromJSON(object: any): CreateFormatSchemaMetadata;
    toJSON(message: CreateFormatSchemaMetadata): unknown;
    fromPartial(object: DeepPartial<CreateFormatSchemaMetadata>): CreateFormatSchemaMetadata;
};
export declare const UpdateFormatSchemaRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest";
    encode(message: UpdateFormatSchemaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFormatSchemaRequest;
    fromJSON(object: any): UpdateFormatSchemaRequest;
    toJSON(message: UpdateFormatSchemaRequest): unknown;
    fromPartial(object: DeepPartial<UpdateFormatSchemaRequest>): UpdateFormatSchemaRequest;
};
export declare const UpdateFormatSchemaMetadata: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata";
    encode(message: UpdateFormatSchemaMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFormatSchemaMetadata;
    fromJSON(object: any): UpdateFormatSchemaMetadata;
    toJSON(message: UpdateFormatSchemaMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateFormatSchemaMetadata>): UpdateFormatSchemaMetadata;
};
export declare const DeleteFormatSchemaRequest: {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest";
    encode(message: DeleteFormatSchemaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFormatSchemaRequest;
    fromJSON(object: any): DeleteFormatSchemaRequest;
    toJSON(message: DeleteFormatSchemaRequest): unknown;
    fromPartial(object: DeepPartial<DeleteFormatSchemaRequest>): DeleteFormatSchemaRequest;
};
export declare const DeleteFormatSchemaMetadata: {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata";
    encode(message: DeleteFormatSchemaMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFormatSchemaMetadata;
    fromJSON(object: any): DeleteFormatSchemaMetadata;
    toJSON(message: DeleteFormatSchemaMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteFormatSchemaMetadata>): DeleteFormatSchemaMetadata;
};
export declare const FormatSchemaServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFormatSchemaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFormatSchemaRequest;
        readonly responseSerialize: (value: FormatSchema) => Buffer;
        readonly responseDeserialize: (value: Buffer) => FormatSchema;
    };
    readonly list: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFormatSchemasRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFormatSchemasRequest;
        readonly responseSerialize: (value: ListFormatSchemasResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFormatSchemasResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFormatSchemaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFormatSchemaRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFormatSchemaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFormatSchemaRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFormatSchemaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFormatSchemaRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface FormatSchemaServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetFormatSchemaRequest, FormatSchema>;
    list: handleUnaryCall<ListFormatSchemasRequest, ListFormatSchemasResponse>;
    create: handleUnaryCall<CreateFormatSchemaRequest, Operation>;
    update: handleUnaryCall<UpdateFormatSchemaRequest, Operation>;
    delete: handleUnaryCall<DeleteFormatSchemaRequest, Operation>;
}
export interface FormatSchemaServiceClient extends Client {
    get(request: GetFormatSchemaRequest, callback: (error: ServiceError | null, response: FormatSchema) => void): ClientUnaryCall;
    get(request: GetFormatSchemaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FormatSchema) => void): ClientUnaryCall;
    get(request: GetFormatSchemaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FormatSchema) => void): ClientUnaryCall;
    list(request: ListFormatSchemasRequest, callback: (error: ServiceError | null, response: ListFormatSchemasResponse) => void): ClientUnaryCall;
    list(request: ListFormatSchemasRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFormatSchemasResponse) => void): ClientUnaryCall;
    list(request: ListFormatSchemasRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFormatSchemasResponse) => void): ClientUnaryCall;
    create(request: CreateFormatSchemaRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFormatSchemaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFormatSchemaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFormatSchemaRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFormatSchemaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFormatSchemaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFormatSchemaRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFormatSchemaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFormatSchemaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const FormatSchemaServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => FormatSchemaServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
