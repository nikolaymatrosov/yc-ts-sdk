/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import {
    Job,
    MapreduceJob,
    SparkJob,
    PysparkJob,
    HiveJob,
} from '../../../../yandex/cloud/dataproc/v1/job';
import { Operation } from '../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.dataproc.v1';

export interface GetJobRequest {
    $type: 'yandex.cloud.dataproc.v1.GetJobRequest';
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
    $type: 'yandex.cloud.dataproc.v1.ListJobsRequest';
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
    $type: 'yandex.cloud.dataproc.v1.ListJobsResponse';
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
    $type: 'yandex.cloud.dataproc.v1.CreateJobRequest';
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
    $type: 'yandex.cloud.dataproc.v1.CreateJobMetadata';
    /** ID of the cluster that the job is being created for. */
    clusterId: string;
    /** ID of the job being created. */
    jobId: string;
}

export interface ListJobLogRequest {
    $type: 'yandex.cloud.dataproc.v1.ListJobLogRequest';
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
    $type: 'yandex.cloud.dataproc.v1.ListJobLogResponse';
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

const baseGetJobRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.GetJobRequest',
    clusterId: '',
    jobId: '',
};

export const GetJobRequest = {
    $type: 'yandex.cloud.dataproc.v1.GetJobRequest' as const,

    encode(
        message: GetJobRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== '') {
            writer.uint32(18).string(message.jobId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetJobRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetJobRequest } as GetJobRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.jobId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetJobRequest {
        const message = { ...baseGetJobRequest } as GetJobRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.jobId !== undefined && object.jobId !== null) {
            message.jobId = String(object.jobId);
        } else {
            message.jobId = '';
        }
        return message;
    },

    toJSON(message: GetJobRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetJobRequest>): GetJobRequest {
        const message = { ...baseGetJobRequest } as GetJobRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.jobId !== undefined && object.jobId !== null) {
            message.jobId = object.jobId;
        } else {
            message.jobId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetJobRequest.$type, GetJobRequest);

const baseListJobsRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.ListJobsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListJobsRequest = {
    $type: 'yandex.cloud.dataproc.v1.ListJobsRequest' as const,

    encode(
        message: ListJobsRequest,
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
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListJobsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListJobsRequest } as ListJobsRequest;
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
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListJobsRequest {
        const message = { ...baseListJobsRequest } as ListJobsRequest;
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        return message;
    },

    toJSON(message: ListJobsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListJobsRequest>): ListJobsRequest {
        const message = { ...baseListJobsRequest } as ListJobsRequest;
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        return message;
    },
};

messageTypeRegistry.set(ListJobsRequest.$type, ListJobsRequest);

const baseListJobsResponse: object = {
    $type: 'yandex.cloud.dataproc.v1.ListJobsResponse',
    nextPageToken: '',
};

export const ListJobsResponse = {
    $type: 'yandex.cloud.dataproc.v1.ListJobsResponse' as const,

    encode(
        message: ListJobsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.jobs) {
            Job.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListJobsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListJobsResponse } as ListJobsResponse;
        message.jobs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobs.push(Job.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListJobsResponse {
        const message = { ...baseListJobsResponse } as ListJobsResponse;
        message.jobs = [];
        if (object.jobs !== undefined && object.jobs !== null) {
            for (const e of object.jobs) {
                message.jobs.push(Job.fromJSON(e));
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

    toJSON(message: ListJobsResponse): unknown {
        const obj: any = {};
        if (message.jobs) {
            obj.jobs = message.jobs.map((e) => (e ? Job.toJSON(e) : undefined));
        } else {
            obj.jobs = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListJobsResponse>): ListJobsResponse {
        const message = { ...baseListJobsResponse } as ListJobsResponse;
        message.jobs = [];
        if (object.jobs !== undefined && object.jobs !== null) {
            for (const e of object.jobs) {
                message.jobs.push(Job.fromPartial(e));
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

messageTypeRegistry.set(ListJobsResponse.$type, ListJobsResponse);

const baseCreateJobRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateJobRequest',
    clusterId: '',
    name: '',
};

export const CreateJobRequest = {
    $type: 'yandex.cloud.dataproc.v1.CreateJobRequest' as const,

    encode(
        message: CreateJobRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.mapreduceJob !== undefined) {
            MapreduceJob.encode(
                message.mapreduceJob,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.sparkJob !== undefined) {
            SparkJob.encode(
                message.sparkJob,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.pysparkJob !== undefined) {
            PysparkJob.encode(
                message.pysparkJob,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.hiveJob !== undefined) {
            HiveJob.encode(message.hiveJob, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateJobRequest } as CreateJobRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.mapreduceJob = MapreduceJob.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.sparkJob = SparkJob.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pysparkJob = PysparkJob.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.hiveJob = HiveJob.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateJobRequest {
        const message = { ...baseCreateJobRequest } as CreateJobRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.mapreduceJob !== undefined && object.mapreduceJob !== null) {
            message.mapreduceJob = MapreduceJob.fromJSON(object.mapreduceJob);
        } else {
            message.mapreduceJob = undefined;
        }
        if (object.sparkJob !== undefined && object.sparkJob !== null) {
            message.sparkJob = SparkJob.fromJSON(object.sparkJob);
        } else {
            message.sparkJob = undefined;
        }
        if (object.pysparkJob !== undefined && object.pysparkJob !== null) {
            message.pysparkJob = PysparkJob.fromJSON(object.pysparkJob);
        } else {
            message.pysparkJob = undefined;
        }
        if (object.hiveJob !== undefined && object.hiveJob !== null) {
            message.hiveJob = HiveJob.fromJSON(object.hiveJob);
        } else {
            message.hiveJob = undefined;
        }
        return message;
    },

    toJSON(message: CreateJobRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.mapreduceJob !== undefined &&
            (obj.mapreduceJob = message.mapreduceJob
                ? MapreduceJob.toJSON(message.mapreduceJob)
                : undefined);
        message.sparkJob !== undefined &&
            (obj.sparkJob = message.sparkJob
                ? SparkJob.toJSON(message.sparkJob)
                : undefined);
        message.pysparkJob !== undefined &&
            (obj.pysparkJob = message.pysparkJob
                ? PysparkJob.toJSON(message.pysparkJob)
                : undefined);
        message.hiveJob !== undefined &&
            (obj.hiveJob = message.hiveJob
                ? HiveJob.toJSON(message.hiveJob)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateJobRequest>): CreateJobRequest {
        const message = { ...baseCreateJobRequest } as CreateJobRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.mapreduceJob !== undefined && object.mapreduceJob !== null) {
            message.mapreduceJob = MapreduceJob.fromPartial(
                object.mapreduceJob
            );
        } else {
            message.mapreduceJob = undefined;
        }
        if (object.sparkJob !== undefined && object.sparkJob !== null) {
            message.sparkJob = SparkJob.fromPartial(object.sparkJob);
        } else {
            message.sparkJob = undefined;
        }
        if (object.pysparkJob !== undefined && object.pysparkJob !== null) {
            message.pysparkJob = PysparkJob.fromPartial(object.pysparkJob);
        } else {
            message.pysparkJob = undefined;
        }
        if (object.hiveJob !== undefined && object.hiveJob !== null) {
            message.hiveJob = HiveJob.fromPartial(object.hiveJob);
        } else {
            message.hiveJob = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(CreateJobRequest.$type, CreateJobRequest);

const baseCreateJobMetadata: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateJobMetadata',
    clusterId: '',
    jobId: '',
};

export const CreateJobMetadata = {
    $type: 'yandex.cloud.dataproc.v1.CreateJobMetadata' as const,

    encode(
        message: CreateJobMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== '') {
            writer.uint32(18).string(message.jobId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateJobMetadata } as CreateJobMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.jobId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateJobMetadata {
        const message = { ...baseCreateJobMetadata } as CreateJobMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.jobId !== undefined && object.jobId !== null) {
            message.jobId = String(object.jobId);
        } else {
            message.jobId = '';
        }
        return message;
    },

    toJSON(message: CreateJobMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateJobMetadata>): CreateJobMetadata {
        const message = { ...baseCreateJobMetadata } as CreateJobMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.jobId !== undefined && object.jobId !== null) {
            message.jobId = object.jobId;
        } else {
            message.jobId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(CreateJobMetadata.$type, CreateJobMetadata);

const baseListJobLogRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.ListJobLogRequest',
    clusterId: '',
    jobId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListJobLogRequest = {
    $type: 'yandex.cloud.dataproc.v1.ListJobLogRequest' as const,

    encode(
        message: ListJobLogRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== '') {
            writer.uint32(18).string(message.jobId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListJobLogRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListJobLogRequest } as ListJobLogRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.jobId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListJobLogRequest {
        const message = { ...baseListJobLogRequest } as ListJobLogRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.jobId !== undefined && object.jobId !== null) {
            message.jobId = String(object.jobId);
        } else {
            message.jobId = '';
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

    toJSON(message: ListJobLogRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListJobLogRequest>): ListJobLogRequest {
        const message = { ...baseListJobLogRequest } as ListJobLogRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.jobId !== undefined && object.jobId !== null) {
            message.jobId = object.jobId;
        } else {
            message.jobId = '';
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

messageTypeRegistry.set(ListJobLogRequest.$type, ListJobLogRequest);

const baseListJobLogResponse: object = {
    $type: 'yandex.cloud.dataproc.v1.ListJobLogResponse',
    content: '',
    nextPageToken: '',
};

export const ListJobLogResponse = {
    $type: 'yandex.cloud.dataproc.v1.ListJobLogResponse' as const,

    encode(
        message: ListJobLogResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.content !== '') {
            writer.uint32(10).string(message.content);
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListJobLogResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListJobLogResponse } as ListJobLogResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
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

    fromJSON(object: any): ListJobLogResponse {
        const message = { ...baseListJobLogResponse } as ListJobLogResponse;
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        } else {
            message.content = '';
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

    toJSON(message: ListJobLogResponse): unknown {
        const obj: any = {};
        message.content !== undefined && (obj.content = message.content);
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListJobLogResponse>): ListJobLogResponse {
        const message = { ...baseListJobLogResponse } as ListJobLogResponse;
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        } else {
            message.content = '';
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

messageTypeRegistry.set(ListJobLogResponse.$type, ListJobLogResponse);

/** A set of methods for managing Data Proc jobs. */
export const JobServiceService = {
    /** Retrieves a list of jobs for a cluster. */
    list: {
        path: '/yandex.cloud.dataproc.v1.JobService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListJobsRequest) =>
            Buffer.from(ListJobsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListJobsRequest.decode(value),
        responseSerialize: (value: ListJobsResponse) =>
            Buffer.from(ListJobsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListJobsResponse.decode(value),
    },
    /** Creates a job for a cluster. */
    create: {
        path: '/yandex.cloud.dataproc.v1.JobService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateJobRequest) =>
            Buffer.from(CreateJobRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateJobRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified job. */
    get: {
        path: '/yandex.cloud.dataproc.v1.JobService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetJobRequest) =>
            Buffer.from(GetJobRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetJobRequest.decode(value),
        responseSerialize: (value: Job) =>
            Buffer.from(Job.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Job.decode(value),
    },
    /** Returns a log for specified job. */
    listLog: {
        path: '/yandex.cloud.dataproc.v1.JobService/ListLog',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListJobLogRequest) =>
            Buffer.from(ListJobLogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListJobLogRequest.decode(value),
        responseSerialize: (value: ListJobLogResponse) =>
            Buffer.from(ListJobLogResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListJobLogResponse.decode(value),
    },
} as const;

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
    list(
        request: ListJobsRequest,
        callback: (
            error: ServiceError | null,
            response: ListJobsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListJobsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListJobsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListJobsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListJobsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a job for a cluster. */
    create(
        request: CreateJobRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateJobRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateJobRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns the specified job. */
    get(
        request: GetJobRequest,
        callback: (error: ServiceError | null, response: Job) => void
    ): ClientUnaryCall;
    get(
        request: GetJobRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Job) => void
    ): ClientUnaryCall;
    get(
        request: GetJobRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Job) => void
    ): ClientUnaryCall;
    /** Returns a log for specified job. */
    listLog(
        request: ListJobLogRequest,
        callback: (
            error: ServiceError | null,
            response: ListJobLogResponse
        ) => void
    ): ClientUnaryCall;
    listLog(
        request: ListJobLogRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListJobLogResponse
        ) => void
    ): ClientUnaryCall;
    listLog(
        request: ListJobLogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListJobLogResponse
        ) => void
    ): ClientUnaryCall;
}

export const JobServiceClient = makeGenericClientConstructor(
    JobServiceService,
    'yandex.cloud.dataproc.v1.JobService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): JobServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
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
