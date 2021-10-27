/* eslint-disable */
import {
    Connector,
    ConnectorSpec,
} from '../../../../../yandex/cloud/mdb/kafka/v1/connector';
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

export interface GetConnectorRequest {
    /**
     * ID of the Apache Kafka Cluster resource to return.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka Connector resource to return.
     * To get the name of the connector use a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface ListConnectorsRequest {
    /**
     * ID of the Apache Kafka cluster to list connectors in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    pageSize: number;
    /**
     * Page token. To get the next page of results, Set [page_token] to the [ListConnectorsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListConnectorsResponse {
    /** List of Apache Kafka Connector resources. */
    connectors: Connector[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListConnectorsRequest.page_size], use the [next_page_token] as the value
     * for the [ListConnectorsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateConnectorRequest {
    /**
     * Required. ID of the Apache Kafka cluster to create a connector in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Required. Configuration of the connector to create. */
    connectorSpec: ConnectorSpec | undefined;
}

export interface CreateConnectorMetadata {
    /** ID of the Apache Kafka cluster where a connector is being created. */
    clusterId: string;
    /** Name of the Apache Kafka connector that is being created. */
    connectorName: string;
}

export interface DeleteConnectorRequest {
    /**
     * Required. ID of the Apache Kafka cluster to delete a connector in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Required. Name of the connector to delete.
     * To get the name of the connector, use a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface DeleteConnectorMetadata {
    /** ID of the Apache Kafka cluster where a connector is being deleted. */
    clusterId: string;
    /** Name of the Apache Kafka connector that is being deleted. */
    connectorName: string;
}

export interface ResumeConnectorRequest {
    /** Required. ID of the Apache Kafka cluster to resume connector in. */
    clusterId: string;
    /**
     * Name of the Apache Kafka Connector resource to resume.
     * To get the name of the connector use a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface ResumeConnectorMetadata {
    /** Required. ID of the Apache Kafka cluster. */
    clusterId: string;
    /** Name of the Apache Kafka Connector resource that is beign resumed. */
    connectorName: string;
}

export interface PauseConnectorRequest {
    /** Required. ID of the Apache Kafka cluster to pause connector in. */
    clusterId: string;
    /**
     * Name of the Apache Kafka Connector resource to pause.
     * To get the name of the connector use a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface PauseConnectorMetadata {
    /** Required. ID of the Apache Kafka cluster. */
    clusterId: string;
    /** Name of the Apache Kafka Connector resource that is being paused. */
    connectorName: string;
}

const baseGetConnectorRequest: object = { clusterId: '', connectorName: '' };

export const GetConnectorRequest = {
    encode(
        message: GetConnectorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetConnectorRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetConnectorRequest {
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: GetConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(object: DeepPartial<GetConnectorRequest>): GetConnectorRequest {
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const baseListConnectorsRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListConnectorsRequest = {
    encode(
        message: ListConnectorsRequest,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListConnectorsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListConnectorsRequest,
        } as ListConnectorsRequest;
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

    fromJSON(object: any): ListConnectorsRequest {
        const message = {
            ...baseListConnectorsRequest,
        } as ListConnectorsRequest;
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

    toJSON(message: ListConnectorsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListConnectorsRequest>
    ): ListConnectorsRequest {
        const message = {
            ...baseListConnectorsRequest,
        } as ListConnectorsRequest;
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

const baseListConnectorsResponse: object = { nextPageToken: '' };

export const ListConnectorsResponse = {
    encode(
        message: ListConnectorsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.connectors) {
            Connector.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListConnectorsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListConnectorsResponse,
        } as ListConnectorsResponse;
        message.connectors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectors.push(
                        Connector.decode(reader, reader.uint32())
                    );
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

    fromJSON(object: any): ListConnectorsResponse {
        const message = {
            ...baseListConnectorsResponse,
        } as ListConnectorsResponse;
        message.connectors = [];
        if (object.connectors !== undefined && object.connectors !== null) {
            for (const e of object.connectors) {
                message.connectors.push(Connector.fromJSON(e));
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

    toJSON(message: ListConnectorsResponse): unknown {
        const obj: any = {};
        if (message.connectors) {
            obj.connectors = message.connectors.map((e) =>
                e ? Connector.toJSON(e) : undefined
            );
        } else {
            obj.connectors = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListConnectorsResponse>
    ): ListConnectorsResponse {
        const message = {
            ...baseListConnectorsResponse,
        } as ListConnectorsResponse;
        message.connectors = [];
        if (object.connectors !== undefined && object.connectors !== null) {
            for (const e of object.connectors) {
                message.connectors.push(Connector.fromPartial(e));
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

const baseCreateConnectorRequest: object = { clusterId: '' };

export const CreateConnectorRequest = {
    encode(
        message: CreateConnectorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorSpec !== undefined) {
            ConnectorSpec.encode(
                message.connectorSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateConnectorRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateConnectorRequest,
        } as CreateConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorSpec = ConnectorSpec.decode(
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

    fromJSON(object: any): CreateConnectorRequest {
        const message = {
            ...baseCreateConnectorRequest,
        } as CreateConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorSpec !== undefined &&
            object.connectorSpec !== null
        ) {
            message.connectorSpec = ConnectorSpec.fromJSON(
                object.connectorSpec
            );
        } else {
            message.connectorSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorSpec !== undefined &&
            (obj.connectorSpec = message.connectorSpec
                ? ConnectorSpec.toJSON(message.connectorSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateConnectorRequest>
    ): CreateConnectorRequest {
        const message = {
            ...baseCreateConnectorRequest,
        } as CreateConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorSpec !== undefined &&
            object.connectorSpec !== null
        ) {
            message.connectorSpec = ConnectorSpec.fromPartial(
                object.connectorSpec
            );
        } else {
            message.connectorSpec = undefined;
        }
        return message;
    },
};

const baseCreateConnectorMetadata: object = {
    clusterId: '',
    connectorName: '',
};

export const CreateConnectorMetadata = {
    encode(
        message: CreateConnectorMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateConnectorMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateConnectorMetadata,
        } as CreateConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConnectorMetadata {
        const message = {
            ...baseCreateConnectorMetadata,
        } as CreateConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: CreateConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateConnectorMetadata>
    ): CreateConnectorMetadata {
        const message = {
            ...baseCreateConnectorMetadata,
        } as CreateConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const baseDeleteConnectorRequest: object = { clusterId: '', connectorName: '' };

export const DeleteConnectorRequest = {
    encode(
        message: DeleteConnectorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteConnectorRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteConnectorRequest,
        } as DeleteConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteConnectorRequest {
        const message = {
            ...baseDeleteConnectorRequest,
        } as DeleteConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: DeleteConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteConnectorRequest>
    ): DeleteConnectorRequest {
        const message = {
            ...baseDeleteConnectorRequest,
        } as DeleteConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const baseDeleteConnectorMetadata: object = {
    clusterId: '',
    connectorName: '',
};

export const DeleteConnectorMetadata = {
    encode(
        message: DeleteConnectorMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteConnectorMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteConnectorMetadata,
        } as DeleteConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteConnectorMetadata {
        const message = {
            ...baseDeleteConnectorMetadata,
        } as DeleteConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: DeleteConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteConnectorMetadata>
    ): DeleteConnectorMetadata {
        const message = {
            ...baseDeleteConnectorMetadata,
        } as DeleteConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const baseResumeConnectorRequest: object = { clusterId: '', connectorName: '' };

export const ResumeConnectorRequest = {
    encode(
        message: ResumeConnectorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResumeConnectorRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeConnectorRequest,
        } as ResumeConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResumeConnectorRequest {
        const message = {
            ...baseResumeConnectorRequest,
        } as ResumeConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: ResumeConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResumeConnectorRequest>
    ): ResumeConnectorRequest {
        const message = {
            ...baseResumeConnectorRequest,
        } as ResumeConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const baseResumeConnectorMetadata: object = {
    clusterId: '',
    connectorName: '',
};

export const ResumeConnectorMetadata = {
    encode(
        message: ResumeConnectorMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResumeConnectorMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeConnectorMetadata,
        } as ResumeConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResumeConnectorMetadata {
        const message = {
            ...baseResumeConnectorMetadata,
        } as ResumeConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: ResumeConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResumeConnectorMetadata>
    ): ResumeConnectorMetadata {
        const message = {
            ...baseResumeConnectorMetadata,
        } as ResumeConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const basePauseConnectorRequest: object = { clusterId: '', connectorName: '' };

export const PauseConnectorRequest = {
    encode(
        message: PauseConnectorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PauseConnectorRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseConnectorRequest,
        } as PauseConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PauseConnectorRequest {
        const message = {
            ...basePauseConnectorRequest,
        } as PauseConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: PauseConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PauseConnectorRequest>
    ): PauseConnectorRequest {
        const message = {
            ...basePauseConnectorRequest,
        } as PauseConnectorRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

const basePauseConnectorMetadata: object = { clusterId: '', connectorName: '' };

export const PauseConnectorMetadata = {
    encode(
        message: PauseConnectorMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PauseConnectorMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseConnectorMetadata,
        } as PauseConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PauseConnectorMetadata {
        const message = {
            ...basePauseConnectorMetadata,
        } as PauseConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = String(object.connectorName);
        } else {
            message.connectorName = '';
        }
        return message;
    },

    toJSON(message: PauseConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PauseConnectorMetadata>
    ): PauseConnectorMetadata {
        const message = {
            ...basePauseConnectorMetadata,
        } as PauseConnectorMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorName !== undefined &&
            object.connectorName !== null
        ) {
            message.connectorName = object.connectorName;
        } else {
            message.connectorName = '';
        }
        return message;
    },
};

/** A set of methods for managing Apache Kafka Connectors resources. */
export const ConnectorServiceService = {
    /**
     * Returns the specified Apache Kafka Connector resource.
     *
     * To get the list of available Apache Kafka Connector resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConnectorRequest) =>
            Buffer.from(GetConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetConnectorRequest.decode(value),
        responseSerialize: (value: Connector) =>
            Buffer.from(Connector.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Connector.decode(value),
    },
    /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConnectorsRequest) =>
            Buffer.from(ListConnectorsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListConnectorsRequest.decode(value),
        responseSerialize: (value: ListConnectorsResponse) =>
            Buffer.from(ListConnectorsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListConnectorsResponse.decode(value),
    },
    /** Creates a new Apache Kafka connector in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateConnectorRequest) =>
            Buffer.from(CreateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateConnectorRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified Apache Kafka connector. */
    delete: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteConnectorRequest) =>
            Buffer.from(DeleteConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteConnectorRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resume the specified Apache Kafka connector. */
    resume: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResumeConnectorRequest) =>
            Buffer.from(ResumeConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ResumeConnectorRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Pause the specified Apache Kafka connector. */
    pause: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PauseConnectorRequest) =>
            Buffer.from(PauseConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            PauseConnectorRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ConnectorServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Apache Kafka Connector resource.
     *
     * To get the list of available Apache Kafka Connector resources, make a [List] request.
     */
    get: handleUnaryCall<GetConnectorRequest, Connector>;
    /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
    list: handleUnaryCall<ListConnectorsRequest, ListConnectorsResponse>;
    /** Creates a new Apache Kafka connector in the specified cluster. */
    create: handleUnaryCall<CreateConnectorRequest, Operation>;
    /** Deletes the specified Apache Kafka connector. */
    delete: handleUnaryCall<DeleteConnectorRequest, Operation>;
    /** Resume the specified Apache Kafka connector. */
    resume: handleUnaryCall<ResumeConnectorRequest, Operation>;
    /** Pause the specified Apache Kafka connector. */
    pause: handleUnaryCall<PauseConnectorRequest, Operation>;
}

export interface ConnectorServiceClient extends Client {
    /**
     * Returns the specified Apache Kafka Connector resource.
     *
     * To get the list of available Apache Kafka Connector resources, make a [List] request.
     */
    get(
        request: GetConnectorRequest,
        callback: (error: ServiceError | null, response: Connector) => void
    ): ClientUnaryCall;
    get(
        request: GetConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Connector) => void
    ): ClientUnaryCall;
    get(
        request: GetConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Connector) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
    list(
        request: ListConnectorsRequest,
        callback: (
            error: ServiceError | null,
            response: ListConnectorsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListConnectorsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListConnectorsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListConnectorsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListConnectorsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a new Apache Kafka connector in the specified cluster. */
    create(
        request: CreateConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified Apache Kafka connector. */
    delete(
        request: DeleteConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Resume the specified Apache Kafka connector. */
    resume(
        request: ResumeConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    resume(
        request: ResumeConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    resume(
        request: ResumeConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Pause the specified Apache Kafka connector. */
    pause(
        request: PauseConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    pause(
        request: PauseConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    pause(
        request: PauseConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const ConnectorServiceClient = makeGenericClientConstructor(
    ConnectorServiceService,
    'yandex.cloud.mdb.kafka.v1.ConnectorService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ConnectorServiceClient;
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
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
