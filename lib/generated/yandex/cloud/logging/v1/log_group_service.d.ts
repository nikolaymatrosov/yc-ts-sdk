/// <reference types="node" />
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { LogGroup } from '../../../../yandex/cloud/logging/v1/log_group';
import { LogGroupResource } from '../../../../yandex/cloud/logging/v1/log_resource';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface GetLogGroupRequest {
    logGroupId: string;
}
export interface GetLogGroupStatsRequest {
    logGroupId: string;
}
export interface GetDefaultLogGroupRequest {
    folderId: string;
}
export interface ListLogGroupsRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    /**
     * supported fields for filter:
     * name
     */
    filter: string;
}
export interface ListLogGroupsResponse {
    groups: LogGroup[];
    nextPageToken: string;
}
export interface CreateLogGroupRequest {
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    retentionPeriod: Duration | undefined;
}
export interface CreateLogGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateLogGroupMetadata {
    logGroupId: string;
}
export interface UpdateLogGroupRequest {
    logGroupId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    retentionPeriod: Duration | undefined;
}
export interface UpdateLogGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateLogGroupMetadata {
    logGroupId: string;
}
export interface DeleteLogGroupRequest {
    logGroupId: string;
}
export interface DeleteLogGroupMetadata {
    logGroupId: string;
}
export interface ListResourcesRequest {
    logGroupId: string;
    type: string;
}
export interface ListResourcesResponse {
    resources: LogGroupResource[];
}
export interface ListOperationsRequest {
    logGroupId: string;
    pageSize: number;
    pageToken: string;
    /**
     * supported attributes:
     * description
     * created_at
     * modified_at
     * created_by
     * done
     */
    filter: string;
}
export interface ListOperationsResponse {
    operations: Operation[];
    nextPageToken: string;
}
export interface GetLogGroupStatsResponse {
    logGroupId: string;
    bytes: number;
    records: number;
}
export declare const GetLogGroupRequest: {
    encode(message: GetLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLogGroupRequest;
    fromJSON(object: any): GetLogGroupRequest;
    toJSON(message: GetLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetLogGroupRequest>): GetLogGroupRequest;
};
export declare const GetLogGroupStatsRequest: {
    encode(message: GetLogGroupStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLogGroupStatsRequest;
    fromJSON(object: any): GetLogGroupStatsRequest;
    toJSON(message: GetLogGroupStatsRequest): unknown;
    fromPartial(object: DeepPartial<GetLogGroupStatsRequest>): GetLogGroupStatsRequest;
};
export declare const GetDefaultLogGroupRequest: {
    encode(message: GetDefaultLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDefaultLogGroupRequest;
    fromJSON(object: any): GetDefaultLogGroupRequest;
    toJSON(message: GetDefaultLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetDefaultLogGroupRequest>): GetDefaultLogGroupRequest;
};
export declare const ListLogGroupsRequest: {
    encode(message: ListLogGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLogGroupsRequest;
    fromJSON(object: any): ListLogGroupsRequest;
    toJSON(message: ListLogGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListLogGroupsRequest>): ListLogGroupsRequest;
};
export declare const ListLogGroupsResponse: {
    encode(message: ListLogGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLogGroupsResponse;
    fromJSON(object: any): ListLogGroupsResponse;
    toJSON(message: ListLogGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListLogGroupsResponse>): ListLogGroupsResponse;
};
export declare const CreateLogGroupRequest: {
    encode(message: CreateLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLogGroupRequest;
    fromJSON(object: any): CreateLogGroupRequest;
    toJSON(message: CreateLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateLogGroupRequest>): CreateLogGroupRequest;
};
export declare const CreateLogGroupRequest_LabelsEntry: {
    encode(message: CreateLogGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLogGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateLogGroupRequest_LabelsEntry;
    toJSON(message: CreateLogGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateLogGroupRequest_LabelsEntry>): CreateLogGroupRequest_LabelsEntry;
};
export declare const CreateLogGroupMetadata: {
    encode(message: CreateLogGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLogGroupMetadata;
    fromJSON(object: any): CreateLogGroupMetadata;
    toJSON(message: CreateLogGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateLogGroupMetadata>): CreateLogGroupMetadata;
};
export declare const UpdateLogGroupRequest: {
    encode(message: UpdateLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLogGroupRequest;
    fromJSON(object: any): UpdateLogGroupRequest;
    toJSON(message: UpdateLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateLogGroupRequest>): UpdateLogGroupRequest;
};
export declare const UpdateLogGroupRequest_LabelsEntry: {
    encode(message: UpdateLogGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLogGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateLogGroupRequest_LabelsEntry;
    toJSON(message: UpdateLogGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateLogGroupRequest_LabelsEntry>): UpdateLogGroupRequest_LabelsEntry;
};
export declare const UpdateLogGroupMetadata: {
    encode(message: UpdateLogGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLogGroupMetadata;
    fromJSON(object: any): UpdateLogGroupMetadata;
    toJSON(message: UpdateLogGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateLogGroupMetadata>): UpdateLogGroupMetadata;
};
export declare const DeleteLogGroupRequest: {
    encode(message: DeleteLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLogGroupRequest;
    fromJSON(object: any): DeleteLogGroupRequest;
    toJSON(message: DeleteLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteLogGroupRequest>): DeleteLogGroupRequest;
};
export declare const DeleteLogGroupMetadata: {
    encode(message: DeleteLogGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLogGroupMetadata;
    fromJSON(object: any): DeleteLogGroupMetadata;
    toJSON(message: DeleteLogGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteLogGroupMetadata>): DeleteLogGroupMetadata;
};
export declare const ListResourcesRequest: {
    encode(message: ListResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesRequest;
    fromJSON(object: any): ListResourcesRequest;
    toJSON(message: ListResourcesRequest): unknown;
    fromPartial(object: DeepPartial<ListResourcesRequest>): ListResourcesRequest;
};
export declare const ListResourcesResponse: {
    encode(message: ListResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesResponse;
    fromJSON(object: any): ListResourcesResponse;
    toJSON(message: ListResourcesResponse): unknown;
    fromPartial(object: DeepPartial<ListResourcesResponse>): ListResourcesResponse;
};
export declare const ListOperationsRequest: {
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListOperationsRequest>): ListOperationsRequest;
};
export declare const ListOperationsResponse: {
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListOperationsResponse>): ListOperationsResponse;
};
export declare const GetLogGroupStatsResponse: {
    encode(message: GetLogGroupStatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLogGroupStatsResponse;
    fromJSON(object: any): GetLogGroupStatsResponse;
    toJSON(message: GetLogGroupStatsResponse): unknown;
    fromPartial(object: DeepPartial<GetLogGroupStatsResponse>): GetLogGroupStatsResponse;
};
export declare const LogGroupServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLogGroupRequest;
        readonly responseSerialize: (value: LogGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogGroup;
    };
    readonly getDefault: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/GetDefault";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDefaultLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDefaultLogGroupRequest;
        readonly responseSerialize: (value: LogGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogGroup;
    };
    readonly stats: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Stats";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLogGroupStatsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLogGroupStatsRequest;
        readonly responseSerialize: (value: GetLogGroupStatsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetLogGroupStatsResponse;
    };
    readonly list: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLogGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLogGroupsRequest;
        readonly responseSerialize: (value: ListLogGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLogGroupsResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLogGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLogGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLogGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly listResources: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListResources";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcesRequest;
        readonly responseSerialize: (value: ListResourcesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcesResponse;
    };
    readonly listOperations: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOperationsRequest;
        readonly responseSerialize: (value: ListOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOperationsResponse;
    };
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface LogGroupServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetLogGroupRequest, LogGroup>;
    getDefault: handleUnaryCall<GetDefaultLogGroupRequest, LogGroup>;
    stats: handleUnaryCall<GetLogGroupStatsRequest, GetLogGroupStatsResponse>;
    list: handleUnaryCall<ListLogGroupsRequest, ListLogGroupsResponse>;
    create: handleUnaryCall<CreateLogGroupRequest, Operation>;
    update: handleUnaryCall<UpdateLogGroupRequest, Operation>;
    delete: handleUnaryCall<DeleteLogGroupRequest, Operation>;
    listResources: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface LogGroupServiceClient extends Client {
    get(request: GetLogGroupRequest, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    get(request: GetLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    get(request: GetLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    getDefault(request: GetDefaultLogGroupRequest, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    getDefault(request: GetDefaultLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    getDefault(request: GetDefaultLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    stats(request: GetLogGroupStatsRequest, callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void): ClientUnaryCall;
    stats(request: GetLogGroupStatsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void): ClientUnaryCall;
    stats(request: GetLogGroupStatsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void): ClientUnaryCall;
    list(request: ListLogGroupsRequest, callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void): ClientUnaryCall;
    list(request: ListLogGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void): ClientUnaryCall;
    list(request: ListLogGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void): ClientUnaryCall;
    create(request: CreateLogGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLogGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLogGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    listResources(request: ListResourcesRequest, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    listResources(request: ListResourcesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    listResources(request: ListResourcesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const LogGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LogGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
