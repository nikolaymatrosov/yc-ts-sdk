/// <reference types="node" />
import { Job_Status, Job, ApplicationInfo } from '../../../../../yandex/cloud/dataproc/manager/v1/job';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.manager.v1";
export interface ListJobsRequest {
    /** Required. ID of the cluster to list Data Proc jobs of. */
    clusterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListJobs requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListJobs
     * request to get the next page of results.
     */
    pageToken: string;
    /** String that describes a display filter. */
    filter: string;
}
export interface ListJobsResponse {
    /** Requested list of Data Proc jobs. */
    jobs: Job[];
    /**
     * This token allows you to get the next page of results for ListJobs requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListClusters request. Subsequent ListClusters
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateJobStatusRequest {
    /** Required. ID of the Data Proc cluster. */
    clusterId: string;
    /** Required. ID of the Data Proc job to update. */
    jobId: string;
    /** Required. New status of the job. */
    status: Job_Status;
    /** Attributes of YARN application. */
    applicationInfo: ApplicationInfo | undefined;
}
export interface UpdateJobStatusResponse {
}
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
export declare const UpdateJobStatusRequest: {
    encode(message: UpdateJobStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateJobStatusRequest;
    fromJSON(object: any): UpdateJobStatusRequest;
    toJSON(message: UpdateJobStatusRequest): unknown;
    fromPartial(object: DeepPartial<UpdateJobStatusRequest>): UpdateJobStatusRequest;
};
export declare const UpdateJobStatusResponse: {
    encode(_: UpdateJobStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateJobStatusResponse;
    fromJSON(_: any): UpdateJobStatusResponse;
    toJSON(_: UpdateJobStatusResponse): unknown;
    fromPartial(_: DeepPartial<UpdateJobStatusResponse>): UpdateJobStatusResponse;
};
export declare const JobServiceService: {
    /** Retrieves a list of jobs for Data Proc cluster. */
    readonly listActive: {
        readonly path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListJobsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListJobsRequest;
        readonly responseSerialize: (value: ListJobsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListJobsResponse;
    };
    /** Currently used to update Job status. */
    readonly updateStatus: {
        readonly path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateJobStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateJobStatusRequest;
        readonly responseSerialize: (value: UpdateJobStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateJobStatusResponse;
    };
};
export interface JobServiceServer extends UntypedServiceImplementation {
    /** Retrieves a list of jobs for Data Proc cluster. */
    listActive: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
    /** Currently used to update Job status. */
    updateStatus: handleUnaryCall<UpdateJobStatusRequest, UpdateJobStatusResponse>;
}
export interface JobServiceClient extends Client {
    /** Retrieves a list of jobs for Data Proc cluster. */
    listActive(request: ListJobsRequest, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    listActive(request: ListJobsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    listActive(request: ListJobsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    /** Currently used to update Job status. */
    updateStatus(request: UpdateJobStatusRequest, callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateJobStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateJobStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void): ClientUnaryCall;
}
export declare const JobServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => JobServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
