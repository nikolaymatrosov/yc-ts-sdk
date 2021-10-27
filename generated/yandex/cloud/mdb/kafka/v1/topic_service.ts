/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import {
    Topic,
    TopicSpec,
} from '../../../../../yandex/cloud/mdb/kafka/v1/topic';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';

export interface GetTopicRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.GetTopicRequest';
    /**
     * ID of the Apache Kafka® cluster that the topic belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Kafka topic resource to return.
     *
     * To get the name of the topic, make a [TopicService.List] request.
     */
    topicName: string;
}

export interface ListTopicsRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.ListTopicsRequest';
    /**
     * ID of the Apache Kafka® cluster to list topics in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListTopicsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListTopicsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListTopicsResponse {
    $type: 'yandex.cloud.mdb.kafka.v1.ListTopicsResponse';
    /** List of Kafka topics. */
    topics: Topic[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListTopicsRequest.page_size], use the [next_page_token] as the value for the [ListTopicsRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateTopicRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateTopicRequest';
    /**
     * ID of the Apache Kafka® cluster to create a topic in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the topic to create. */
    topicSpec: TopicSpec | undefined;
}

export interface CreateTopicMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateTopicMetadata';
    /** ID of the Apache Kafka® cluster where a topic is being created. */
    clusterId: string;
    /** Name of the Kafka topic that is being created. */
    topicName: string;
}

export interface UpdateTopicRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateTopicRequest';
    /**
     * ID of the Apache Kafka® cluster to update a topic in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the topic to update.
     *
     * To get the name of the topic, make a [TopicService.List] request.
     */
    topicName: string;
    updateMask: FieldMask | undefined;
    /**
     * New configuration of the topic.
     *
     * Use [update_mask] to prevent reverting all topic settings that are not listed in [topic_spec] to their default values.
     */
    topicSpec: TopicSpec | undefined;
}

export interface UpdateTopicMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata';
    /** ID of the Apache Kafka® cluster where a topic is being updated. */
    clusterId: string;
    /** Name of the Kafka topic that is being updated. */
    topicName: string;
}

export interface DeleteTopicRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteTopicRequest';
    /**
     * ID of the Apache Kafka® cluster to delete a topic in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the topic to delete.
     *
     * To get the name of the topic, make a [TopicService.List] request.
     */
    topicName: string;
}

export interface DeleteTopicMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata';
    /** ID of the Apache Kafka® cluster where a topic is being deleted. */
    clusterId: string;
    /** Name of the Kafka topic that is being deleted. */
    topicName: string;
}

const baseGetTopicRequest: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.GetTopicRequest',
    clusterId: '',
    topicName: '',
};

export const GetTopicRequest = {
    $type: 'yandex.cloud.mdb.kafka.v1.GetTopicRequest' as const,

    encode(
        message: GetTopicRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopicRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTopicRequest } as GetTopicRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTopicRequest {
        const message = { ...baseGetTopicRequest } as GetTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        return message;
    },

    toJSON(message: GetTopicRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },

    fromPartial(object: DeepPartial<GetTopicRequest>): GetTopicRequest {
        const message = { ...baseGetTopicRequest } as GetTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetTopicRequest.$type, GetTopicRequest);

const baseListTopicsRequest: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ListTopicsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListTopicsRequest = {
    $type: 'yandex.cloud.mdb.kafka.v1.ListTopicsRequest' as const,

    encode(
        message: ListTopicsRequest,
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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTopicsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTopicsRequest } as ListTopicsRequest;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListTopicsRequest {
        const message = { ...baseListTopicsRequest } as ListTopicsRequest;
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
        return message;
    },

    toJSON(message: ListTopicsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListTopicsRequest>): ListTopicsRequest {
        const message = { ...baseListTopicsRequest } as ListTopicsRequest;
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
        return message;
    },
};

messageTypeRegistry.set(ListTopicsRequest.$type, ListTopicsRequest);

const baseListTopicsResponse: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ListTopicsResponse',
    nextPageToken: '',
};

export const ListTopicsResponse = {
    $type: 'yandex.cloud.mdb.kafka.v1.ListTopicsResponse' as const,

    encode(
        message: ListTopicsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.topics) {
            Topic.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListTopicsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTopicsResponse } as ListTopicsResponse;
        message.topics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics.push(Topic.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListTopicsResponse {
        const message = { ...baseListTopicsResponse } as ListTopicsResponse;
        message.topics = [];
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(Topic.fromJSON(e));
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

    toJSON(message: ListTopicsResponse): unknown {
        const obj: any = {};
        if (message.topics) {
            obj.topics = message.topics.map((e) =>
                e ? Topic.toJSON(e) : undefined
            );
        } else {
            obj.topics = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListTopicsResponse>): ListTopicsResponse {
        const message = { ...baseListTopicsResponse } as ListTopicsResponse;
        message.topics = [];
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(Topic.fromPartial(e));
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

messageTypeRegistry.set(ListTopicsResponse.$type, ListTopicsResponse);

const baseCreateTopicRequest: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateTopicRequest',
    clusterId: '',
};

export const CreateTopicRequest = {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateTopicRequest' as const,

    encode(
        message: CreateTopicRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicSpec !== undefined) {
            TopicSpec.encode(
                message.topicSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateTopicRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTopicRequest } as CreateTopicRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicSpec = TopicSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTopicRequest {
        const message = { ...baseCreateTopicRequest } as CreateTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = TopicSpec.fromJSON(object.topicSpec);
        } else {
            message.topicSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateTopicRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicSpec !== undefined &&
            (obj.topicSpec = message.topicSpec
                ? TopicSpec.toJSON(message.topicSpec)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateTopicRequest>): CreateTopicRequest {
        const message = { ...baseCreateTopicRequest } as CreateTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = TopicSpec.fromPartial(object.topicSpec);
        } else {
            message.topicSpec = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(CreateTopicRequest.$type, CreateTopicRequest);

const baseCreateTopicMetadata: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateTopicMetadata',
    clusterId: '',
    topicName: '',
};

export const CreateTopicMetadata = {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateTopicMetadata' as const,

    encode(
        message: CreateTopicMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateTopicMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTopicMetadata } as CreateTopicMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTopicMetadata {
        const message = { ...baseCreateTopicMetadata } as CreateTopicMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        return message;
    },

    toJSON(message: CreateTopicMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateTopicMetadata>): CreateTopicMetadata {
        const message = { ...baseCreateTopicMetadata } as CreateTopicMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(CreateTopicMetadata.$type, CreateTopicMetadata);

const baseUpdateTopicRequest: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateTopicRequest',
    clusterId: '',
    topicName: '',
};

export const UpdateTopicRequest = {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateTopicRequest' as const,

    encode(
        message: UpdateTopicRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.topicSpec !== undefined) {
            TopicSpec.encode(
                message.topicSpec,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateTopicRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTopicRequest } as UpdateTopicRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.topicSpec = TopicSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTopicRequest {
        const message = { ...baseUpdateTopicRequest } as UpdateTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = TopicSpec.fromJSON(object.topicSpec);
        } else {
            message.topicSpec = undefined;
        }
        return message;
    },

    toJSON(message: UpdateTopicRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.topicSpec !== undefined &&
            (obj.topicSpec = message.topicSpec
                ? TopicSpec.toJSON(message.topicSpec)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateTopicRequest>): UpdateTopicRequest {
        const message = { ...baseUpdateTopicRequest } as UpdateTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = TopicSpec.fromPartial(object.topicSpec);
        } else {
            message.topicSpec = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateTopicRequest.$type, UpdateTopicRequest);

const baseUpdateTopicMetadata: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata',
    clusterId: '',
    topicName: '',
};

export const UpdateTopicMetadata = {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata' as const,

    encode(
        message: UpdateTopicMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateTopicMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTopicMetadata } as UpdateTopicMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTopicMetadata {
        const message = { ...baseUpdateTopicMetadata } as UpdateTopicMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        return message;
    },

    toJSON(message: UpdateTopicMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateTopicMetadata>): UpdateTopicMetadata {
        const message = { ...baseUpdateTopicMetadata } as UpdateTopicMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateTopicMetadata.$type, UpdateTopicMetadata);

const baseDeleteTopicRequest: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteTopicRequest',
    clusterId: '',
    topicName: '',
};

export const DeleteTopicRequest = {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteTopicRequest' as const,

    encode(
        message: DeleteTopicRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteTopicRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTopicRequest } as DeleteTopicRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTopicRequest {
        const message = { ...baseDeleteTopicRequest } as DeleteTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        return message;
    },

    toJSON(message: DeleteTopicRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteTopicRequest>): DeleteTopicRequest {
        const message = { ...baseDeleteTopicRequest } as DeleteTopicRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteTopicRequest.$type, DeleteTopicRequest);

const baseDeleteTopicMetadata: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata',
    clusterId: '',
    topicName: '',
};

export const DeleteTopicMetadata = {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata' as const,

    encode(
        message: DeleteTopicMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteTopicMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTopicMetadata } as DeleteTopicMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTopicMetadata {
        const message = { ...baseDeleteTopicMetadata } as DeleteTopicMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        return message;
    },

    toJSON(message: DeleteTopicMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteTopicMetadata>): DeleteTopicMetadata {
        const message = { ...baseDeleteTopicMetadata } as DeleteTopicMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteTopicMetadata.$type, DeleteTopicMetadata);

/** A set of methods for managing Kafka topics. */
export const TopicServiceService = {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTopicRequest) =>
            Buffer.from(GetTopicRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTopicRequest.decode(value),
        responseSerialize: (value: Topic) =>
            Buffer.from(Topic.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Topic.decode(value),
    },
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTopicsRequest) =>
            Buffer.from(ListTopicsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTopicsRequest.decode(value),
        responseSerialize: (value: ListTopicsResponse) =>
            Buffer.from(ListTopicsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListTopicsResponse.decode(value),
    },
    /** Creates a new Kafka topic in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateTopicRequest) =>
            Buffer.from(CreateTopicRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateTopicRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified Kafka topic. */
    update: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateTopicRequest) =>
            Buffer.from(UpdateTopicRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateTopicRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified Kafka topic. */
    delete: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteTopicRequest) =>
            Buffer.from(DeleteTopicRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteTopicRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface TopicServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get: handleUnaryCall<GetTopicRequest, Topic>;
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list: handleUnaryCall<ListTopicsRequest, ListTopicsResponse>;
    /** Creates a new Kafka topic in the specified cluster. */
    create: handleUnaryCall<CreateTopicRequest, Operation>;
    /** Updates the specified Kafka topic. */
    update: handleUnaryCall<UpdateTopicRequest, Operation>;
    /** Deletes the specified Kafka topic. */
    delete: handleUnaryCall<DeleteTopicRequest, Operation>;
}

export interface TopicServiceClient extends Client {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get(
        request: GetTopicRequest,
        callback: (error: ServiceError | null, response: Topic) => void
    ): ClientUnaryCall;
    get(
        request: GetTopicRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Topic) => void
    ): ClientUnaryCall;
    get(
        request: GetTopicRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Topic) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list(
        request: ListTopicsRequest,
        callback: (
            error: ServiceError | null,
            response: ListTopicsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListTopicsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListTopicsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListTopicsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListTopicsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a new Kafka topic in the specified cluster. */
    create(
        request: CreateTopicRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateTopicRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateTopicRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified Kafka topic. */
    update(
        request: UpdateTopicRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateTopicRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateTopicRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified Kafka topic. */
    delete(
        request: DeleteTopicRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteTopicRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteTopicRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const TopicServiceClient = makeGenericClientConstructor(
    TopicServiceService,
    'yandex.cloud.mdb.kafka.v1.TopicService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): TopicServiceClient;
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
