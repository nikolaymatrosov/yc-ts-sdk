/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import { LifecyclePolicy_Status, LifecyclePolicy, LifecycleRule } from '../../../../yandex/cloud/containerregistry/v1/lifecycle_policy';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface ListLifecyclePoliciesRequest {
    /** ID of the lifecycle policy. */
    registryId: string | undefined;
    /** Repository of the lifecycle policy. */
    repositoryId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns
     * a [ListLifecyclePoliciesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLifecyclePoliciesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters lifecycle policy resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [LifecyclePolicy.name], [LifecyclePolicy.created_at] and [LifecyclePolicy.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}
export interface ListLifecyclePoliciesResponse {
    /** List of lifecycle policies. */
    lifecyclePolicies: LifecyclePolicy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLifecyclePoliciesRequest.page_size], use `next_page_token` as the value
     * for the [ListLifecyclePoliciesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateLifecyclePolicyRequest {
    /** ID of the lifecycle policy repository. */
    repositoryId: string;
    /** Name of lifecycle policy. */
    name: string;
    /** Description of lifecycle policy. */
    description: string;
    /** Status of the lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** The rules of the lifecycle policy. */
    rules: LifecycleRule[];
}
export interface UpdateLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /** Field mask that specifies which fields of the lifecycle policy resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of lifecycle policy. */
    name: string;
    /** Description of lifecycle policy. */
    description: string;
    /** Status of the lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** The rules of the lifecycle policy. */
    rules: LifecycleRule[];
}
export interface DeleteLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface CreateLifecyclePolicyMetadata {
    /** ID of the lifecycle policy resource that is being created. */
    lifecyclePolicyId: string;
}
export interface UpdateLifecyclePolicyMetadata {
    /** ID of the lifecycle policy resource that is being updated. */
    lifecyclePolicyId: string;
}
export interface DeleteLifecyclePolicyMetadata {
    /** ID of the lifecycle policy resource that is being deleted. */
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyMetadata {
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyResult {
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /** Time of the getting result. */
    runAt: Date | undefined;
    /** Count of affected images. */
    affectedImagesCount: number;
}
export interface GetDryRunLifecyclePolicyResultRequest {
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
}
export interface ListDryRunLifecyclePolicyResultsRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns
     * a [ListDryRunLifecyclePolicyResultsResponse.next_page_token] that can be used to get
     * the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDryRunLifecyclePolicyResultsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters dry run results listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [DryRunLifecyclePolicyResult.run_at] and [DryRunLifecyclePolicyResult.affected_images_count] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}
export interface ListDryRunLifecyclePolicyResultsResponse {
    /** List of results of dry runs of a lifecycle policy. */
    dryRunLifecyclePolicyResults: DryRunLifecyclePolicyResult[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDryRunLifecyclePolicyResultsRequest.page_size] use `next_page_token` as the value
     * for the [ListDryRunLifecyclePolicyResultsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    /** ID of the dry run result of the lifecycle policy */
    dryRunLifecyclePolicyResultId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters affected images listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [LifecyclePolicy.name] and [LifecyclePolicy.created_at] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}
export interface ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    /** List of affected images. */
    affectedImages: Image[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_size], use `next_page_token` as the value
     * for the [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetLifecyclePolicyRequest: {
    encode(message: GetLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLifecyclePolicyRequest;
    fromJSON(object: any): GetLifecyclePolicyRequest;
    toJSON(message: GetLifecyclePolicyRequest): unknown;
    fromPartial(object: DeepPartial<GetLifecyclePolicyRequest>): GetLifecyclePolicyRequest;
};
export declare const ListLifecyclePoliciesRequest: {
    encode(message: ListLifecyclePoliciesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLifecyclePoliciesRequest;
    fromJSON(object: any): ListLifecyclePoliciesRequest;
    toJSON(message: ListLifecyclePoliciesRequest): unknown;
    fromPartial(object: DeepPartial<ListLifecyclePoliciesRequest>): ListLifecyclePoliciesRequest;
};
export declare const ListLifecyclePoliciesResponse: {
    encode(message: ListLifecyclePoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLifecyclePoliciesResponse;
    fromJSON(object: any): ListLifecyclePoliciesResponse;
    toJSON(message: ListLifecyclePoliciesResponse): unknown;
    fromPartial(object: DeepPartial<ListLifecyclePoliciesResponse>): ListLifecyclePoliciesResponse;
};
export declare const CreateLifecyclePolicyRequest: {
    encode(message: CreateLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLifecyclePolicyRequest;
    fromJSON(object: any): CreateLifecyclePolicyRequest;
    toJSON(message: CreateLifecyclePolicyRequest): unknown;
    fromPartial(object: DeepPartial<CreateLifecyclePolicyRequest>): CreateLifecyclePolicyRequest;
};
export declare const UpdateLifecyclePolicyRequest: {
    encode(message: UpdateLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLifecyclePolicyRequest;
    fromJSON(object: any): UpdateLifecyclePolicyRequest;
    toJSON(message: UpdateLifecyclePolicyRequest): unknown;
    fromPartial(object: DeepPartial<UpdateLifecyclePolicyRequest>): UpdateLifecyclePolicyRequest;
};
export declare const DeleteLifecyclePolicyRequest: {
    encode(message: DeleteLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLifecyclePolicyRequest;
    fromJSON(object: any): DeleteLifecyclePolicyRequest;
    toJSON(message: DeleteLifecyclePolicyRequest): unknown;
    fromPartial(object: DeepPartial<DeleteLifecyclePolicyRequest>): DeleteLifecyclePolicyRequest;
};
export declare const CreateLifecyclePolicyMetadata: {
    encode(message: CreateLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLifecyclePolicyMetadata;
    fromJSON(object: any): CreateLifecyclePolicyMetadata;
    toJSON(message: CreateLifecyclePolicyMetadata): unknown;
    fromPartial(object: DeepPartial<CreateLifecyclePolicyMetadata>): CreateLifecyclePolicyMetadata;
};
export declare const UpdateLifecyclePolicyMetadata: {
    encode(message: UpdateLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLifecyclePolicyMetadata;
    fromJSON(object: any): UpdateLifecyclePolicyMetadata;
    toJSON(message: UpdateLifecyclePolicyMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateLifecyclePolicyMetadata>): UpdateLifecyclePolicyMetadata;
};
export declare const DeleteLifecyclePolicyMetadata: {
    encode(message: DeleteLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLifecyclePolicyMetadata;
    fromJSON(object: any): DeleteLifecyclePolicyMetadata;
    toJSON(message: DeleteLifecyclePolicyMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteLifecyclePolicyMetadata>): DeleteLifecyclePolicyMetadata;
};
export declare const DryRunLifecyclePolicyRequest: {
    encode(message: DryRunLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DryRunLifecyclePolicyRequest;
    fromJSON(object: any): DryRunLifecyclePolicyRequest;
    toJSON(message: DryRunLifecyclePolicyRequest): unknown;
    fromPartial(object: DeepPartial<DryRunLifecyclePolicyRequest>): DryRunLifecyclePolicyRequest;
};
export declare const DryRunLifecyclePolicyMetadata: {
    encode(message: DryRunLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DryRunLifecyclePolicyMetadata;
    fromJSON(object: any): DryRunLifecyclePolicyMetadata;
    toJSON(message: DryRunLifecyclePolicyMetadata): unknown;
    fromPartial(object: DeepPartial<DryRunLifecyclePolicyMetadata>): DryRunLifecyclePolicyMetadata;
};
export declare const DryRunLifecyclePolicyResult: {
    encode(message: DryRunLifecyclePolicyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DryRunLifecyclePolicyResult;
    fromJSON(object: any): DryRunLifecyclePolicyResult;
    toJSON(message: DryRunLifecyclePolicyResult): unknown;
    fromPartial(object: DeepPartial<DryRunLifecyclePolicyResult>): DryRunLifecyclePolicyResult;
};
export declare const GetDryRunLifecyclePolicyResultRequest: {
    encode(message: GetDryRunLifecyclePolicyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDryRunLifecyclePolicyResultRequest;
    fromJSON(object: any): GetDryRunLifecyclePolicyResultRequest;
    toJSON(message: GetDryRunLifecyclePolicyResultRequest): unknown;
    fromPartial(object: DeepPartial<GetDryRunLifecyclePolicyResultRequest>): GetDryRunLifecyclePolicyResultRequest;
};
export declare const ListDryRunLifecyclePolicyResultsRequest: {
    encode(message: ListDryRunLifecyclePolicyResultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultsRequest;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultsRequest;
    toJSON(message: ListDryRunLifecyclePolicyResultsRequest): unknown;
    fromPartial(object: DeepPartial<ListDryRunLifecyclePolicyResultsRequest>): ListDryRunLifecyclePolicyResultsRequest;
};
export declare const ListDryRunLifecyclePolicyResultsResponse: {
    encode(message: ListDryRunLifecyclePolicyResultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultsResponse;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultsResponse;
    toJSON(message: ListDryRunLifecyclePolicyResultsResponse): unknown;
    fromPartial(object: DeepPartial<ListDryRunLifecyclePolicyResultsResponse>): ListDryRunLifecyclePolicyResultsResponse;
};
export declare const ListDryRunLifecyclePolicyResultAffectedImagesRequest: {
    encode(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    toJSON(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest): unknown;
    fromPartial(object: DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesRequest>): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
};
export declare const ListDryRunLifecyclePolicyResultAffectedImagesResponse: {
    encode(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    toJSON(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse): unknown;
    fromPartial(object: DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesResponse>): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
};
/** A set of methods for managing Lifecycle policy resources. */
export declare const LifecyclePolicyServiceService: {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLifecyclePolicyRequest;
        readonly responseSerialize: (value: LifecyclePolicy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LifecyclePolicy;
    };
    /** Retrieves the list of lifecycle policies in the specified repository. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLifecyclePoliciesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLifecyclePoliciesRequest;
        readonly responseSerialize: (value: ListLifecyclePoliciesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLifecyclePoliciesResponse;
    };
    /** Creates a lifecycle policy in the specified repository. */
    readonly create: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified lifecycle policy. */
    readonly update: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified lifecycle policy. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a request of a dry run of the lifecycle policy. */
    readonly dryRun: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DryRunLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DryRunLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the dry run result of the specified lifecycle policy. */
    readonly getDryRunResult: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDryRunLifecyclePolicyResultRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDryRunLifecyclePolicyResultRequest;
        readonly responseSerialize: (value: DryRunLifecyclePolicyResult) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DryRunLifecyclePolicyResult;
    };
    /** Retrieves the list of the dry run results. */
    readonly listDryRunResults: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDryRunLifecyclePolicyResultsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsRequest;
        readonly responseSerialize: (value: ListDryRunLifecyclePolicyResultsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsResponse;
    };
    /** Retrieves the list of the affected images. */
    readonly listDryRunResultAffectedImages: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDryRunLifecyclePolicyResultAffectedImagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultAffectedImagesRequest;
        readonly responseSerialize: (value: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    };
};
export interface LifecyclePolicyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list: handleUnaryCall<ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse>;
    /** Creates a lifecycle policy in the specified repository. */
    create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
    /** Updates the specified lifecycle policy. */
    update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
    /** Deletes the specified lifecycle policy. */
    delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult: handleUnaryCall<GetDryRunLifecyclePolicyResultRequest, DryRunLifecyclePolicyResult>;
    /** Retrieves the list of the dry run results. */
    listDryRunResults: handleUnaryCall<ListDryRunLifecyclePolicyResultsRequest, ListDryRunLifecyclePolicyResultsResponse>;
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages: handleUnaryCall<ListDryRunLifecyclePolicyResultAffectedImagesRequest, ListDryRunLifecyclePolicyResultAffectedImagesResponse>;
}
export interface LifecyclePolicyServiceClient extends Client {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get(request: GetLifecyclePolicyRequest, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    get(request: GetLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    get(request: GetLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list(request: ListLifecyclePoliciesRequest, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    /** Creates a lifecycle policy in the specified repository. */
    create(request: CreateLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified lifecycle policy. */
    update(request: UpdateLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified lifecycle policy. */
    delete(request: DeleteLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun(request: DryRunLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    /** Retrieves the list of the dry run results. */
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages(request: ListDryRunLifecyclePolicyResultAffectedImagesRequest, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): ClientUnaryCall;
    listDryRunResultAffectedImages(request: ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): ClientUnaryCall;
    listDryRunResultAffectedImages(request: ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): ClientUnaryCall;
}
export declare const LifecyclePolicyServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LifecyclePolicyServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
