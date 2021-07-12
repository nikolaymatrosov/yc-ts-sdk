/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import { LifecyclePolicy_Status, LifecyclePolicy, LifecycleRule } from '../../../../yandex/cloud/containerregistry/v1/lifecycle_policy';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetLifecyclePolicyRequest {
    lifecyclePolicyId: string;
}
export interface ListLifecyclePoliciesRequest {
    registryId: string | undefined;
    repositoryId: string | undefined;
    pageSize: number;
    pageToken: string;
    filter: string;
    orderBy: string;
}
export interface ListLifecyclePoliciesResponse {
    lifecyclePolicies: LifecyclePolicy[];
    nextPageToken: string;
}
export interface CreateLifecyclePolicyRequest {
    repositoryId: string;
    name: string;
    description: string;
    status: LifecyclePolicy_Status;
    rules: LifecycleRule[];
}
export interface UpdateLifecyclePolicyRequest {
    lifecyclePolicyId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    status: LifecyclePolicy_Status;
    rules: LifecycleRule[];
}
export interface DeleteLifecyclePolicyRequest {
    lifecyclePolicyId: string;
}
export interface CreateLifecyclePolicyMetadata {
    lifecyclePolicyId: string;
}
export interface UpdateLifecyclePolicyMetadata {
    lifecyclePolicyId: string;
}
export interface DeleteLifecyclePolicyMetadata {
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyRequest {
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyMetadata {
    dryRunLifecyclePolicyResultId: string;
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyResult {
    dryRunLifecyclePolicyResultId: string;
    lifecyclePolicyId: string;
    runAt: Date | undefined;
    affectedImagesCount: number;
}
export interface GetDryRunLifecyclePolicyResultRequest {
    dryRunLifecyclePolicyResultId: string;
}
export interface ListDryRunLifecyclePolicyResultsRequest {
    lifecyclePolicyId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
    orderBy: string;
}
export interface ListDryRunLifecyclePolicyResultsResponse {
    dryRunLifecyclePolicyResults: DryRunLifecyclePolicyResult[];
    nextPageToken: string;
}
export interface ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    dryRunLifecyclePolicyResultId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
    orderBy: string;
}
export interface ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    affectedImages: Image[];
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
export declare const LifecyclePolicyServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLifecyclePolicyRequest;
        readonly responseSerialize: (value: LifecyclePolicy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LifecyclePolicy;
    };
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLifecyclePoliciesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLifecyclePoliciesRequest;
        readonly responseSerialize: (value: ListLifecyclePoliciesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLifecyclePoliciesResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly dryRun: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DryRunLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DryRunLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly getDryRunResult: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDryRunLifecyclePolicyResultRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDryRunLifecyclePolicyResultRequest;
        readonly responseSerialize: (value: DryRunLifecyclePolicyResult) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DryRunLifecyclePolicyResult;
    };
    readonly listDryRunResults: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDryRunLifecyclePolicyResultsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsRequest;
        readonly responseSerialize: (value: ListDryRunLifecyclePolicyResultsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsResponse;
    };
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
    get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
    list: handleUnaryCall<ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse>;
    create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
    update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
    delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
    dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
    getDryRunResult: handleUnaryCall<GetDryRunLifecyclePolicyResultRequest, DryRunLifecyclePolicyResult>;
    listDryRunResults: handleUnaryCall<ListDryRunLifecyclePolicyResultsRequest, ListDryRunLifecyclePolicyResultsResponse>;
    listDryRunResultAffectedImages: handleUnaryCall<ListDryRunLifecyclePolicyResultAffectedImagesRequest, ListDryRunLifecyclePolicyResultAffectedImagesResponse>;
}
export interface LifecyclePolicyServiceClient extends Client {
    get(request: GetLifecyclePolicyRequest, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    get(request: GetLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    get(request: GetLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
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
