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
    $type: 'yandex.cloud.logging.v1.GetLogGroupRequest';
    /**
     * ID of the log group to return.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
}
export interface GetLogGroupStatsRequest {
    $type: 'yandex.cloud.logging.v1.GetLogGroupStatsRequest';
    /**
     * ID of the log group to return stats for.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
}
export interface ListLogGroupsRequest {
    $type: 'yandex.cloud.logging.v1.ListLogGroupsRequest';
    /**
     * Folder ID of the log groups to return.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListLogGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLogGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters log groups listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [LogGroup.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-log-group`.
     */
    filter: string;
}
export interface ListLogGroupsResponse {
    $type: 'yandex.cloud.logging.v1.ListLogGroupsResponse';
    /** List of log groups in the specified folder. */
    groups: LogGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLogGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListLogGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateLogGroupRequest {
    $type: 'yandex.cloud.logging.v1.CreateLogGroupRequest';
    /**
     * ID of the folder to create a log group in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the log group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the log group. */
    description: string;
    /** Log group labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * Log group entry retention period.
     *
     * Entries will be present in group during this period.
     * If specified, must be non-negative.
     * Empty or zero value is treated as no limit.
     */
    retentionPeriod: Duration | undefined;
}
export interface CreateLogGroupRequest_LabelsEntry {
    $type: 'yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateLogGroupMetadata {
    $type: 'yandex.cloud.logging.v1.CreateLogGroupMetadata';
    /** ID of the log group being created. */
    logGroupId: string;
}
export interface UpdateLogGroupRequest {
    $type: 'yandex.cloud.logging.v1.UpdateLogGroupRequest';
    /**
     * ID of the log group to update.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /** Field mask that specifies which attributes of the function should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name of the log group.
     * The name must be unique within the folder.
     */
    name: string;
    /** New Description of the log group. */
    description: string;
    /** New log group labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * New log group entry retention period.
     *
     * Entries will be present in group during this period.
     * If specified, must be non-negative.
     * Empty or zero value is treated as no limit.
     */
    retentionPeriod: Duration | undefined;
}
export interface UpdateLogGroupRequest_LabelsEntry {
    $type: 'yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateLogGroupMetadata {
    $type: 'yandex.cloud.logging.v1.UpdateLogGroupMetadata';
    /** ID of the log group being updated. */
    logGroupId: string;
}
export interface DeleteLogGroupRequest {
    $type: 'yandex.cloud.logging.v1.DeleteLogGroupRequest';
    /**
     * ID of the log group to delete.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
}
export interface DeleteLogGroupMetadata {
    $type: 'yandex.cloud.logging.v1.DeleteLogGroupMetadata';
    /** ID of the log group being deleted. */
    logGroupId: string;
}
export interface ListResourcesRequest {
    $type: 'yandex.cloud.logging.v1.ListResourcesRequest';
    /**
     * ID of the log group to list resources for.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /**
     * Resource type to return resources for.
     *
     * If not specified, [ListResourcesResponse] will contain information about all resource types.
     */
    type: string;
}
export interface ListResourcesResponse {
    $type: 'yandex.cloud.logging.v1.ListResourcesResponse';
    /** List of resources present in log group. */
    resources: LogGroupResource[];
}
export interface ListOperationsRequest {
    $type: 'yandex.cloud.logging.v1.ListOperationsRequest';
    /**
     * ID of the log group to list operations for.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.description], [operation.Operation.created_at], [operation.Operation.modified_at], [operation.Operation.created_by], [operation.Operation.done] fields.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListOperationsResponse {
    $type: 'yandex.cloud.logging.v1.ListOperationsResponse';
    /** List of operations for the specified log group. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GetLogGroupStatsResponse {
    $type: 'yandex.cloud.logging.v1.GetLogGroupStatsResponse';
    /** Log group ID the stats are returned for. */
    logGroupId: string;
    /** Size of data in log group in bytes. */
    bytes: number;
    /** Amount of records in log group. */
    records: number;
}
export declare const GetLogGroupRequest: {
    $type: "yandex.cloud.logging.v1.GetLogGroupRequest";
    encode(message: GetLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLogGroupRequest;
    fromJSON(object: any): GetLogGroupRequest;
    toJSON(message: GetLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetLogGroupRequest>): GetLogGroupRequest;
};
export declare const GetLogGroupStatsRequest: {
    $type: "yandex.cloud.logging.v1.GetLogGroupStatsRequest";
    encode(message: GetLogGroupStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLogGroupStatsRequest;
    fromJSON(object: any): GetLogGroupStatsRequest;
    toJSON(message: GetLogGroupStatsRequest): unknown;
    fromPartial(object: DeepPartial<GetLogGroupStatsRequest>): GetLogGroupStatsRequest;
};
export declare const ListLogGroupsRequest: {
    $type: "yandex.cloud.logging.v1.ListLogGroupsRequest";
    encode(message: ListLogGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLogGroupsRequest;
    fromJSON(object: any): ListLogGroupsRequest;
    toJSON(message: ListLogGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListLogGroupsRequest>): ListLogGroupsRequest;
};
export declare const ListLogGroupsResponse: {
    $type: "yandex.cloud.logging.v1.ListLogGroupsResponse";
    encode(message: ListLogGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLogGroupsResponse;
    fromJSON(object: any): ListLogGroupsResponse;
    toJSON(message: ListLogGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListLogGroupsResponse>): ListLogGroupsResponse;
};
export declare const CreateLogGroupRequest: {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest";
    encode(message: CreateLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLogGroupRequest;
    fromJSON(object: any): CreateLogGroupRequest;
    toJSON(message: CreateLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateLogGroupRequest>): CreateLogGroupRequest;
};
export declare const CreateLogGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry";
    encode(message: CreateLogGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLogGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateLogGroupRequest_LabelsEntry;
    toJSON(message: CreateLogGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateLogGroupRequest_LabelsEntry>): CreateLogGroupRequest_LabelsEntry;
};
export declare const CreateLogGroupMetadata: {
    $type: "yandex.cloud.logging.v1.CreateLogGroupMetadata";
    encode(message: CreateLogGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLogGroupMetadata;
    fromJSON(object: any): CreateLogGroupMetadata;
    toJSON(message: CreateLogGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateLogGroupMetadata>): CreateLogGroupMetadata;
};
export declare const UpdateLogGroupRequest: {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest";
    encode(message: UpdateLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLogGroupRequest;
    fromJSON(object: any): UpdateLogGroupRequest;
    toJSON(message: UpdateLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateLogGroupRequest>): UpdateLogGroupRequest;
};
export declare const UpdateLogGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry";
    encode(message: UpdateLogGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLogGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateLogGroupRequest_LabelsEntry;
    toJSON(message: UpdateLogGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateLogGroupRequest_LabelsEntry>): UpdateLogGroupRequest_LabelsEntry;
};
export declare const UpdateLogGroupMetadata: {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupMetadata";
    encode(message: UpdateLogGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLogGroupMetadata;
    fromJSON(object: any): UpdateLogGroupMetadata;
    toJSON(message: UpdateLogGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateLogGroupMetadata>): UpdateLogGroupMetadata;
};
export declare const DeleteLogGroupRequest: {
    $type: "yandex.cloud.logging.v1.DeleteLogGroupRequest";
    encode(message: DeleteLogGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLogGroupRequest;
    fromJSON(object: any): DeleteLogGroupRequest;
    toJSON(message: DeleteLogGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteLogGroupRequest>): DeleteLogGroupRequest;
};
export declare const DeleteLogGroupMetadata: {
    $type: "yandex.cloud.logging.v1.DeleteLogGroupMetadata";
    encode(message: DeleteLogGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLogGroupMetadata;
    fromJSON(object: any): DeleteLogGroupMetadata;
    toJSON(message: DeleteLogGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteLogGroupMetadata>): DeleteLogGroupMetadata;
};
export declare const ListResourcesRequest: {
    $type: "yandex.cloud.logging.v1.ListResourcesRequest";
    encode(message: ListResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesRequest;
    fromJSON(object: any): ListResourcesRequest;
    toJSON(message: ListResourcesRequest): unknown;
    fromPartial(object: DeepPartial<ListResourcesRequest>): ListResourcesRequest;
};
export declare const ListResourcesResponse: {
    $type: "yandex.cloud.logging.v1.ListResourcesResponse";
    encode(message: ListResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesResponse;
    fromJSON(object: any): ListResourcesResponse;
    toJSON(message: ListResourcesResponse): unknown;
    fromPartial(object: DeepPartial<ListResourcesResponse>): ListResourcesResponse;
};
export declare const ListOperationsRequest: {
    $type: "yandex.cloud.logging.v1.ListOperationsRequest";
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListOperationsRequest>): ListOperationsRequest;
};
export declare const ListOperationsResponse: {
    $type: "yandex.cloud.logging.v1.ListOperationsResponse";
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListOperationsResponse>): ListOperationsResponse;
};
export declare const GetLogGroupStatsResponse: {
    $type: "yandex.cloud.logging.v1.GetLogGroupStatsResponse";
    encode(message: GetLogGroupStatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLogGroupStatsResponse;
    fromJSON(object: any): GetLogGroupStatsResponse;
    toJSON(message: GetLogGroupStatsResponse): unknown;
    fromPartial(object: DeepPartial<GetLogGroupStatsResponse>): GetLogGroupStatsResponse;
};
/** A set of methods for managing log groups. */
export declare const LogGroupServiceService: {
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLogGroupRequest;
        readonly responseSerialize: (value: LogGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogGroup;
    };
    /** Returns stats for the specified log group. */
    readonly stats: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Stats";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLogGroupStatsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLogGroupStatsRequest;
        readonly responseSerialize: (value: GetLogGroupStatsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetLogGroupStatsResponse;
    };
    /** Retrieves the list of log groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLogGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLogGroupsRequest;
        readonly responseSerialize: (value: ListLogGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLogGroupsResponse;
    };
    /** Creates a log group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLogGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified log group. */
    readonly update: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLogGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified log group. */
    readonly delete: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLogGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLogGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the resources (type and IDs) in the specified log group. */
    readonly listResources: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListResources";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcesRequest;
        readonly responseSerialize: (value: ListResourcesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcesResponse;
    };
    /** Lists operations for the specified log group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOperationsRequest;
        readonly responseSerialize: (value: ListOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOperationsResponse;
    };
    /** Lists existing access bindings for the specified log group. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified log group. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified log group. */
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
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    get: handleUnaryCall<GetLogGroupRequest, LogGroup>;
    /** Returns stats for the specified log group. */
    stats: handleUnaryCall<GetLogGroupStatsRequest, GetLogGroupStatsResponse>;
    /** Retrieves the list of log groups in the specified folder. */
    list: handleUnaryCall<ListLogGroupsRequest, ListLogGroupsResponse>;
    /** Creates a log group in the specified folder. */
    create: handleUnaryCall<CreateLogGroupRequest, Operation>;
    /** Updates the specified log group. */
    update: handleUnaryCall<UpdateLogGroupRequest, Operation>;
    /** Deletes the specified log group. */
    delete: handleUnaryCall<DeleteLogGroupRequest, Operation>;
    /** Retrieves the resources (type and IDs) in the specified log group. */
    listResources: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    /** Lists operations for the specified log group. */
    listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /** Lists existing access bindings for the specified log group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified log group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified log group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface LogGroupServiceClient extends Client {
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    get(request: GetLogGroupRequest, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    get(request: GetLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    get(request: GetLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
    /** Returns stats for the specified log group. */
    stats(request: GetLogGroupStatsRequest, callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void): ClientUnaryCall;
    stats(request: GetLogGroupStatsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void): ClientUnaryCall;
    stats(request: GetLogGroupStatsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of log groups in the specified folder. */
    list(request: ListLogGroupsRequest, callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void): ClientUnaryCall;
    list(request: ListLogGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void): ClientUnaryCall;
    list(request: ListLogGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void): ClientUnaryCall;
    /** Creates a log group in the specified folder. */
    create(request: CreateLogGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified log group. */
    update(request: UpdateLogGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified log group. */
    delete(request: DeleteLogGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLogGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLogGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the resources (type and IDs) in the specified log group. */
    listResources(request: ListResourcesRequest, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    listResources(request: ListResourcesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    listResources(request: ListResourcesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified log group. */
    listOperations(request: ListOperationsRequest, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified log group. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified log group. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified log group. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const LogGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LogGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
