/// <reference types="node" />
import { Connector, ConnectorSpec } from '../../../../../yandex/cloud/mdb/kafka/v1/connector';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
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
export declare const GetConnectorRequest: {
    encode(message: GetConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetConnectorRequest;
    fromJSON(object: any): GetConnectorRequest;
    toJSON(message: GetConnectorRequest): unknown;
    fromPartial(object: DeepPartial<GetConnectorRequest>): GetConnectorRequest;
};
export declare const ListConnectorsRequest: {
    encode(message: ListConnectorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListConnectorsRequest;
    fromJSON(object: any): ListConnectorsRequest;
    toJSON(message: ListConnectorsRequest): unknown;
    fromPartial(object: DeepPartial<ListConnectorsRequest>): ListConnectorsRequest;
};
export declare const ListConnectorsResponse: {
    encode(message: ListConnectorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListConnectorsResponse;
    fromJSON(object: any): ListConnectorsResponse;
    toJSON(message: ListConnectorsResponse): unknown;
    fromPartial(object: DeepPartial<ListConnectorsResponse>): ListConnectorsResponse;
};
export declare const CreateConnectorRequest: {
    encode(message: CreateConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateConnectorRequest;
    fromJSON(object: any): CreateConnectorRequest;
    toJSON(message: CreateConnectorRequest): unknown;
    fromPartial(object: DeepPartial<CreateConnectorRequest>): CreateConnectorRequest;
};
export declare const CreateConnectorMetadata: {
    encode(message: CreateConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateConnectorMetadata;
    fromJSON(object: any): CreateConnectorMetadata;
    toJSON(message: CreateConnectorMetadata): unknown;
    fromPartial(object: DeepPartial<CreateConnectorMetadata>): CreateConnectorMetadata;
};
export declare const DeleteConnectorRequest: {
    encode(message: DeleteConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteConnectorRequest;
    fromJSON(object: any): DeleteConnectorRequest;
    toJSON(message: DeleteConnectorRequest): unknown;
    fromPartial(object: DeepPartial<DeleteConnectorRequest>): DeleteConnectorRequest;
};
export declare const DeleteConnectorMetadata: {
    encode(message: DeleteConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteConnectorMetadata;
    fromJSON(object: any): DeleteConnectorMetadata;
    toJSON(message: DeleteConnectorMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteConnectorMetadata>): DeleteConnectorMetadata;
};
export declare const ResumeConnectorRequest: {
    encode(message: ResumeConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeConnectorRequest;
    fromJSON(object: any): ResumeConnectorRequest;
    toJSON(message: ResumeConnectorRequest): unknown;
    fromPartial(object: DeepPartial<ResumeConnectorRequest>): ResumeConnectorRequest;
};
export declare const ResumeConnectorMetadata: {
    encode(message: ResumeConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeConnectorMetadata;
    fromJSON(object: any): ResumeConnectorMetadata;
    toJSON(message: ResumeConnectorMetadata): unknown;
    fromPartial(object: DeepPartial<ResumeConnectorMetadata>): ResumeConnectorMetadata;
};
export declare const PauseConnectorRequest: {
    encode(message: PauseConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseConnectorRequest;
    fromJSON(object: any): PauseConnectorRequest;
    toJSON(message: PauseConnectorRequest): unknown;
    fromPartial(object: DeepPartial<PauseConnectorRequest>): PauseConnectorRequest;
};
export declare const PauseConnectorMetadata: {
    encode(message: PauseConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseConnectorMetadata;
    fromJSON(object: any): PauseConnectorMetadata;
    toJSON(message: PauseConnectorMetadata): unknown;
    fromPartial(object: DeepPartial<PauseConnectorMetadata>): PauseConnectorMetadata;
};
/** A set of methods for managing Apache Kafka Connectors resources. */
export declare const ConnectorServiceService: {
    /**
     * Returns the specified Apache Kafka Connector resource.
     *
     * To get the list of available Apache Kafka Connector resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetConnectorRequest;
        readonly responseSerialize: (value: Connector) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Connector;
    };
    /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListConnectorsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListConnectorsRequest;
        readonly responseSerialize: (value: ListConnectorsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListConnectorsResponse;
    };
    /** Creates a new Apache Kafka connector in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Apache Kafka connector. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Resume the specified Apache Kafka connector. */
    readonly resume: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResumeConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResumeConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Pause the specified Apache Kafka connector. */
    readonly pause: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PauseConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PauseConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    get(request: GetConnectorRequest, callback: (error: ServiceError | null, response: Connector) => void): ClientUnaryCall;
    get(request: GetConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Connector) => void): ClientUnaryCall;
    get(request: GetConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Connector) => void): ClientUnaryCall;
    /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
    list(request: ListConnectorsRequest, callback: (error: ServiceError | null, response: ListConnectorsResponse) => void): ClientUnaryCall;
    list(request: ListConnectorsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListConnectorsResponse) => void): ClientUnaryCall;
    list(request: ListConnectorsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListConnectorsResponse) => void): ClientUnaryCall;
    /** Creates a new Apache Kafka connector in the specified cluster. */
    create(request: CreateConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Apache Kafka connector. */
    delete(request: DeleteConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Resume the specified Apache Kafka connector. */
    resume(request: ResumeConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Pause the specified Apache Kafka connector. */
    pause(request: PauseConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ConnectorServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ConnectorServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
