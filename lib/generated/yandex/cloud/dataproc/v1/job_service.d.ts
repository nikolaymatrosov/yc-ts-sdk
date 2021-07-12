/// <reference types="node" />
import { Job, MapreduceJob, SparkJob, PysparkJob, HiveJob } from '../../../../yandex/cloud/dataproc/v1/job';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export interface GetJobRequest {
    /** ID of the cluster to request a job from. */
    clusterId: string;
    /**
     * ID of the job to return.
     *
     * To get a job ID make a [JobService.List] request.
     */
    jobId: string;
}
export interface ListJobsRequest {
    /** ID of the cluster to list jobs for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListJobsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListJobsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters jobs listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Job.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9].
     * Example of a filter: `name=my-job`.
     */
    filter: string;
}
export interface ListJobsResponse {
    /** List of jobs for the specified cluster. */
    jobs: Job[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListJobsRequest.page_size], use `next_page_token` as the value
     * for the [ListJobsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateJobRequest {
    /** ID of the cluster to create a job for. */
    clusterId: string;
    /** Name of the job. */
    name: string;
    /** Specification for a MapReduce job. */
    mapreduceJob: MapreduceJob | undefined;
    /** Specification for a Spark job. */
    sparkJob: SparkJob | undefined;
    /** Specification for a PySpark job. */
    pysparkJob: PysparkJob | undefined;
    /** Specification for a Hive job. */
    hiveJob: HiveJob | undefined;
}
export interface CreateJobMetadata {
    /** ID of the cluster that the job is being created for. */
    clusterId: string;
    /** ID of the job being created. */
    jobId: string;
}
export interface ListJobLogRequest {
    /** ID of the cluster that the job is being created for. */
    clusterId: string;
    /** ID of the job being created. */
    jobId: string;
    /**
     * The maximum bytes of job log per response to return. If the number of available
     * bytes is larger than [page_size], the service returns a [ListJobLogResponse.next_page_token]
     * that can be used to get the next page of output in subsequent list requests.
     * Default value: 1048576.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListJobLogResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListJobLogResponse {
    /** Requested part of Data Proc Job log. */
    content: string;
    /**
     * This token allows you to get the next page of results for ListLog requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListLog request. Subsequent ListLog
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetJobRequest: {
    encode(message: GetJobRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetJobRequest;
    fromJSON(object: any): GetJobRequest;
    toJSON(message: GetJobRequest): unknown;
    fromPartial(object: DeepPartial<GetJobRequest>): GetJobRequest;
};
export declare const ListJobsRequest: {
    encode(message: ListJobsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobsRequest;
    fromJSON(object: any): ListJobsRequest;
    toJSON(message: ListJobsRequest): unknown;
    fromPartial(object: DeepPartial<ListJobsRequest>): ListJobsRequest;
};
export declare const ListJobsResponse: {
    encode(message: ListJobsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobsResponse;
    fromJSON(object: any): ListJobsResponse;
    toJSON(message: ListJobsResponse): unknown;
    fromPartial(object: DeepPartial<ListJobsResponse>): ListJobsResponse;
};
export declare const CreateJobRequest: {
    encode(message: CreateJobRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateJobRequest;
    fromJSON(object: any): CreateJobRequest;
    toJSON(message: CreateJobRequest): unknown;
    fromPartial(object: DeepPartial<CreateJobRequest>): CreateJobRequest;
};
export declare const CreateJobMetadata: {
    encode(message: CreateJobMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateJobMetadata;
    fromJSON(object: any): CreateJobMetadata;
    toJSON(message: CreateJobMetadata): unknown;
    fromPartial(object: DeepPartial<CreateJobMetadata>): CreateJobMetadata;
};
export declare const ListJobLogRequest: {
    encode(message: ListJobLogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobLogRequest;
    fromJSON(object: any): ListJobLogRequest;
    toJSON(message: ListJobLogRequest): unknown;
    fromPartial(object: DeepPartial<ListJobLogRequest>): ListJobLogRequest;
};
export declare const ListJobLogResponse: {
    encode(message: ListJobLogResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobLogResponse;
    fromJSON(object: any): ListJobLogResponse;
    toJSON(message: ListJobLogResponse): unknown;
    fromPartial(object: DeepPartial<ListJobLogResponse>): ListJobLogResponse;
};
/** A set of methods for managing Data Proc jobs. */
export declare const JobServiceService: {
    /** Retrieves a list of jobs for a cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListJobsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListJobsRequest;
        readonly responseSerialize: (value: ListJobsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListJobsResponse;
    };
    /** Creates a job for a cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateJobRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateJobRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified job. */
    readonly get: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetJobRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetJobRequest;
        readonly responseSerialize: (value: Job) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Job;
    };
    /** Returns a log for specified job. */
    readonly listLog: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/ListLog";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListJobLogRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListJobLogRequest;
        readonly responseSerialize: (value: ListJobLogResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListJobLogResponse;
    };
};
export interface JobServiceServer extends UntypedServiceImplementation {
    /** Retrieves a list of jobs for a cluster. */
    list: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
    /** Creates a job for a cluster. */
    create: handleUnaryCall<CreateJobRequest, Operation>;
    /** Returns the specified job. */
    get: handleUnaryCall<GetJobRequest, Job>;
    /** Returns a log for specified job. */
    listLog: handleUnaryCall<ListJobLogRequest, ListJobLogResponse>;
}
export interface JobServiceClient extends Client {
    /** Retrieves a list of jobs for a cluster. */
    list(request: ListJobsRequest, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    list(request: ListJobsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    list(request: ListJobsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    /** Creates a job for a cluster. */
    create(request: CreateJobRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateJobRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateJobRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified job. */
    get(request: GetJobRequest, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    get(request: GetJobRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    get(request: GetJobRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    /** Returns a log for specified job. */
    listLog(request: ListJobLogRequest, callback: (error: ServiceError | null, response: ListJobLogResponse) => void): ClientUnaryCall;
    listLog(request: ListJobLogRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListJobLogResponse) => void): ClientUnaryCall;
    listLog(request: ListJobLogRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListJobLogResponse) => void): ClientUnaryCall;
}
export declare const JobServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => JobServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
