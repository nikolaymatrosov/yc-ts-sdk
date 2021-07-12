/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { TargetGroup, Target } from '../../../../yandex/cloud/apploadbalancer/v1/target_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetTargetGroupRequest {
    targetGroupId: string;
}
export interface ListTargetGroupsRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListTargetGroupsResponse {
    targetGroups: TargetGroup[];
    nextPageToken: string;
}
export interface DeleteTargetGroupRequest {
    targetGroupId: string;
}
export interface DeleteTargetGroupMetadata {
    targetGroupId: string;
}
export interface UpdateTargetGroupRequest {
    targetGroupId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    targets: Target[];
}
export interface UpdateTargetGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateTargetGroupMetadata {
    targetGroupId: string;
}
export interface CreateTargetGroupRequest {
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    targets: Target[];
}
export interface CreateTargetGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateTargetGroupMetadata {
    targetGroupId: string;
}
export interface AddTargetsRequest {
    targetGroupId: string;
    targets: Target[];
}
export interface AddTargetsMetadata {
    targetGroupId: string;
}
export interface RemoveTargetsRequest {
    targetGroupId: string;
    targets: Target[];
}
export interface RemoveTargetsMetadata {
    targetGroupId: string;
}
export interface ListTargetGroupOperationsRequest {
    /**
     * ID of the target group to get operations for.
     *
     * To get the target group ID, use a [TargetGroupService.List] request.
     */
    targetGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListTargetGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListTargetGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListTargetGroupOperationsResponse {
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListTargetGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListTargetGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetTargetGroupRequest: {
    encode(message: GetTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetGroupRequest;
    fromJSON(object: any): GetTargetGroupRequest;
    toJSON(message: GetTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetTargetGroupRequest>): GetTargetGroupRequest;
};
export declare const ListTargetGroupsRequest: {
    encode(message: ListTargetGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupsRequest;
    fromJSON(object: any): ListTargetGroupsRequest;
    toJSON(message: ListTargetGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupsRequest>): ListTargetGroupsRequest;
};
export declare const ListTargetGroupsResponse: {
    encode(message: ListTargetGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupsResponse;
    fromJSON(object: any): ListTargetGroupsResponse;
    toJSON(message: ListTargetGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupsResponse>): ListTargetGroupsResponse;
};
export declare const DeleteTargetGroupRequest: {
    encode(message: DeleteTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTargetGroupRequest;
    fromJSON(object: any): DeleteTargetGroupRequest;
    toJSON(message: DeleteTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteTargetGroupRequest>): DeleteTargetGroupRequest;
};
export declare const DeleteTargetGroupMetadata: {
    encode(message: DeleteTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTargetGroupMetadata;
    fromJSON(object: any): DeleteTargetGroupMetadata;
    toJSON(message: DeleteTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteTargetGroupMetadata>): DeleteTargetGroupMetadata;
};
export declare const UpdateTargetGroupRequest: {
    encode(message: UpdateTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTargetGroupRequest;
    fromJSON(object: any): UpdateTargetGroupRequest;
    toJSON(message: UpdateTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateTargetGroupRequest>): UpdateTargetGroupRequest;
};
export declare const UpdateTargetGroupRequest_LabelsEntry: {
    encode(message: UpdateTargetGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTargetGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateTargetGroupRequest_LabelsEntry;
    toJSON(message: UpdateTargetGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateTargetGroupRequest_LabelsEntry>): UpdateTargetGroupRequest_LabelsEntry;
};
export declare const UpdateTargetGroupMetadata: {
    encode(message: UpdateTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTargetGroupMetadata;
    fromJSON(object: any): UpdateTargetGroupMetadata;
    toJSON(message: UpdateTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateTargetGroupMetadata>): UpdateTargetGroupMetadata;
};
export declare const CreateTargetGroupRequest: {
    encode(message: CreateTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTargetGroupRequest;
    fromJSON(object: any): CreateTargetGroupRequest;
    toJSON(message: CreateTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateTargetGroupRequest>): CreateTargetGroupRequest;
};
export declare const CreateTargetGroupRequest_LabelsEntry: {
    encode(message: CreateTargetGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTargetGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateTargetGroupRequest_LabelsEntry;
    toJSON(message: CreateTargetGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateTargetGroupRequest_LabelsEntry>): CreateTargetGroupRequest_LabelsEntry;
};
export declare const CreateTargetGroupMetadata: {
    encode(message: CreateTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTargetGroupMetadata;
    fromJSON(object: any): CreateTargetGroupMetadata;
    toJSON(message: CreateTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateTargetGroupMetadata>): CreateTargetGroupMetadata;
};
export declare const AddTargetsRequest: {
    encode(message: AddTargetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddTargetsRequest;
    fromJSON(object: any): AddTargetsRequest;
    toJSON(message: AddTargetsRequest): unknown;
    fromPartial(object: DeepPartial<AddTargetsRequest>): AddTargetsRequest;
};
export declare const AddTargetsMetadata: {
    encode(message: AddTargetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddTargetsMetadata;
    fromJSON(object: any): AddTargetsMetadata;
    toJSON(message: AddTargetsMetadata): unknown;
    fromPartial(object: DeepPartial<AddTargetsMetadata>): AddTargetsMetadata;
};
export declare const RemoveTargetsRequest: {
    encode(message: RemoveTargetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveTargetsRequest;
    fromJSON(object: any): RemoveTargetsRequest;
    toJSON(message: RemoveTargetsRequest): unknown;
    fromPartial(object: DeepPartial<RemoveTargetsRequest>): RemoveTargetsRequest;
};
export declare const RemoveTargetsMetadata: {
    encode(message: RemoveTargetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveTargetsMetadata;
    fromJSON(object: any): RemoveTargetsMetadata;
    toJSON(message: RemoveTargetsMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveTargetsMetadata>): RemoveTargetsMetadata;
};
export declare const ListTargetGroupOperationsRequest: {
    encode(message: ListTargetGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupOperationsRequest;
    fromJSON(object: any): ListTargetGroupOperationsRequest;
    toJSON(message: ListTargetGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupOperationsRequest>): ListTargetGroupOperationsRequest;
};
export declare const ListTargetGroupOperationsResponse: {
    encode(message: ListTargetGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupOperationsResponse;
    fromJSON(object: any): ListTargetGroupOperationsResponse;
    toJSON(message: ListTargetGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupOperationsResponse>): ListTargetGroupOperationsResponse;
};
export declare const TargetGroupServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTargetGroupRequest;
        readonly responseSerialize: (value: TargetGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TargetGroup;
    };
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTargetGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTargetGroupsRequest;
        readonly responseSerialize: (value: ListTargetGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTargetGroupsResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly addTargets: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/AddTargets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddTargetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddTargetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly removeTargets: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/RemoveTargets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveTargetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveTargetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified target group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTargetGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTargetGroupOperationsRequest;
        readonly responseSerialize: (value: ListTargetGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTargetGroupOperationsResponse;
    };
};
export interface TargetGroupServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetTargetGroupRequest, TargetGroup>;
    list: handleUnaryCall<ListTargetGroupsRequest, ListTargetGroupsResponse>;
    create: handleUnaryCall<CreateTargetGroupRequest, Operation>;
    update: handleUnaryCall<UpdateTargetGroupRequest, Operation>;
    delete: handleUnaryCall<DeleteTargetGroupRequest, Operation>;
    addTargets: handleUnaryCall<AddTargetsRequest, Operation>;
    removeTargets: handleUnaryCall<RemoveTargetsRequest, Operation>;
    /** Lists operations for the specified target group. */
    listOperations: handleUnaryCall<ListTargetGroupOperationsRequest, ListTargetGroupOperationsResponse>;
}
export interface TargetGroupServiceClient extends Client {
    get(request: GetTargetGroupRequest, callback: (error: ServiceError | null, response: TargetGroup) => void): ClientUnaryCall;
    get(request: GetTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: TargetGroup) => void): ClientUnaryCall;
    get(request: GetTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TargetGroup) => void): ClientUnaryCall;
    list(request: ListTargetGroupsRequest, callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void): ClientUnaryCall;
    list(request: ListTargetGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void): ClientUnaryCall;
    list(request: ListTargetGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void): ClientUnaryCall;
    create(request: CreateTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addTargets(request: AddTargetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addTargets(request: AddTargetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addTargets(request: AddTargetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTargets(request: RemoveTargetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTargets(request: RemoveTargetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTargets(request: RemoveTargetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified target group. */
    listOperations(request: ListTargetGroupOperationsRequest, callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTargetGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTargetGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const TargetGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => TargetGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
