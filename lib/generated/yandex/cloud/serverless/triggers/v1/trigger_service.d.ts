/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Trigger, Trigger_Rule } from '../../../../../yandex/cloud/serverless/triggers/v1/trigger';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.triggers.v1";
export interface GetTriggerRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.GetTriggerRequest';
    /**
     * ID of the trigger to return.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface ListTriggersRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.ListTriggersRequest';
    /**
     * ID of the folder to list triggers in.
     *
     * To get a folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListTriggersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListTriggersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters triggers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-trigger`.
     */
    filter: string;
}
export interface ListTriggersResponse {
    $type: 'yandex.cloud.serverless.triggers.v1.ListTriggersResponse';
    /** List of triggers in the specified folder. */
    triggers: Trigger[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTriggersRequest.page_size], use `nextPageToken` as the value
     * for the [ListTriggersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateTriggerRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.CreateTriggerRequest';
    /**
     * ID of the folder to create a trigger in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the trigger.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the trigger. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Trigger type. */
    rule: Trigger_Rule | undefined;
}
export interface CreateTriggerRequest_LabelsEntry {
    $type: 'yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateTriggerMetadata {
    $type: 'yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata';
    /** ID of the trigger that is being created. */
    triggerId: string;
}
export interface UpdateTriggerRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest';
    /**
     * ID of the trigger to update.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
    /** Field mask that specifies which attributes of the trigger should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the trigger.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the trigger. */
    description: string;
    /**
     * Trigger labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [TriggerService.Get] request.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateTriggerRequest_LabelsEntry {
    $type: 'yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateTriggerMetadata {
    $type: 'yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata';
    /** ID of the trigger that is being updated. */
    triggerId: string;
}
export interface DeleteTriggerRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest';
    /**
     * ID of the trigger to delete.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface DeleteTriggerMetadata {
    $type: 'yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata';
    /** ID of the trigger that is being deleted. */
    triggerId: string;
}
export interface PauseTriggerRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.PauseTriggerRequest';
    /**
     * ID of the trigger to pause
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface PauseTriggerMetadata {
    $type: 'yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata';
    /** ID of the trigger that is being paused. */
    triggerId: string;
}
export interface ResumeTriggerRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest';
    /**
     * ID of the trigger to pause
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface ResumeTriggerMetadata {
    $type: 'yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata';
    /** ID of the trigger that is being paused. */
    triggerId: string;
}
export interface ListTriggerOperationsRequest {
    $type: 'yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest';
    /** ID of the trigger to list operations for. */
    triggerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListTriggerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListTriggerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-function`.
     */
    filter: string;
}
export interface ListTriggerOperationsResponse {
    $type: 'yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse';
    /** List of operations for the specified trigger. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTriggerOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListTriggerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest";
    encode(message: GetTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTriggerRequest;
    fromJSON(object: any): GetTriggerRequest;
    toJSON(message: GetTriggerRequest): unknown;
    fromPartial(object: DeepPartial<GetTriggerRequest>): GetTriggerRequest;
};
export declare const ListTriggersRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest";
    encode(message: ListTriggersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggersRequest;
    fromJSON(object: any): ListTriggersRequest;
    toJSON(message: ListTriggersRequest): unknown;
    fromPartial(object: DeepPartial<ListTriggersRequest>): ListTriggersRequest;
};
export declare const ListTriggersResponse: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse";
    encode(message: ListTriggersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggersResponse;
    fromJSON(object: any): ListTriggersResponse;
    toJSON(message: ListTriggersResponse): unknown;
    fromPartial(object: DeepPartial<ListTriggersResponse>): ListTriggersResponse;
};
export declare const CreateTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest";
    encode(message: CreateTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTriggerRequest;
    fromJSON(object: any): CreateTriggerRequest;
    toJSON(message: CreateTriggerRequest): unknown;
    fromPartial(object: DeepPartial<CreateTriggerRequest>): CreateTriggerRequest;
};
export declare const CreateTriggerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry";
    encode(message: CreateTriggerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTriggerRequest_LabelsEntry;
    fromJSON(object: any): CreateTriggerRequest_LabelsEntry;
    toJSON(message: CreateTriggerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateTriggerRequest_LabelsEntry>): CreateTriggerRequest_LabelsEntry;
};
export declare const CreateTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata";
    encode(message: CreateTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTriggerMetadata;
    fromJSON(object: any): CreateTriggerMetadata;
    toJSON(message: CreateTriggerMetadata): unknown;
    fromPartial(object: DeepPartial<CreateTriggerMetadata>): CreateTriggerMetadata;
};
export declare const UpdateTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest";
    encode(message: UpdateTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTriggerRequest;
    fromJSON(object: any): UpdateTriggerRequest;
    toJSON(message: UpdateTriggerRequest): unknown;
    fromPartial(object: DeepPartial<UpdateTriggerRequest>): UpdateTriggerRequest;
};
export declare const UpdateTriggerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry";
    encode(message: UpdateTriggerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTriggerRequest_LabelsEntry;
    fromJSON(object: any): UpdateTriggerRequest_LabelsEntry;
    toJSON(message: UpdateTriggerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateTriggerRequest_LabelsEntry>): UpdateTriggerRequest_LabelsEntry;
};
export declare const UpdateTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata";
    encode(message: UpdateTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTriggerMetadata;
    fromJSON(object: any): UpdateTriggerMetadata;
    toJSON(message: UpdateTriggerMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateTriggerMetadata>): UpdateTriggerMetadata;
};
export declare const DeleteTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest";
    encode(message: DeleteTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTriggerRequest;
    fromJSON(object: any): DeleteTriggerRequest;
    toJSON(message: DeleteTriggerRequest): unknown;
    fromPartial(object: DeepPartial<DeleteTriggerRequest>): DeleteTriggerRequest;
};
export declare const DeleteTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata";
    encode(message: DeleteTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTriggerMetadata;
    fromJSON(object: any): DeleteTriggerMetadata;
    toJSON(message: DeleteTriggerMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteTriggerMetadata>): DeleteTriggerMetadata;
};
export declare const PauseTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest";
    encode(message: PauseTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseTriggerRequest;
    fromJSON(object: any): PauseTriggerRequest;
    toJSON(message: PauseTriggerRequest): unknown;
    fromPartial(object: DeepPartial<PauseTriggerRequest>): PauseTriggerRequest;
};
export declare const PauseTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata";
    encode(message: PauseTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseTriggerMetadata;
    fromJSON(object: any): PauseTriggerMetadata;
    toJSON(message: PauseTriggerMetadata): unknown;
    fromPartial(object: DeepPartial<PauseTriggerMetadata>): PauseTriggerMetadata;
};
export declare const ResumeTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest";
    encode(message: ResumeTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeTriggerRequest;
    fromJSON(object: any): ResumeTriggerRequest;
    toJSON(message: ResumeTriggerRequest): unknown;
    fromPartial(object: DeepPartial<ResumeTriggerRequest>): ResumeTriggerRequest;
};
export declare const ResumeTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata";
    encode(message: ResumeTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeTriggerMetadata;
    fromJSON(object: any): ResumeTriggerMetadata;
    toJSON(message: ResumeTriggerMetadata): unknown;
    fromPartial(object: DeepPartial<ResumeTriggerMetadata>): ResumeTriggerMetadata;
};
export declare const ListTriggerOperationsRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest";
    encode(message: ListTriggerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggerOperationsRequest;
    fromJSON(object: any): ListTriggerOperationsRequest;
    toJSON(message: ListTriggerOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListTriggerOperationsRequest>): ListTriggerOperationsRequest;
};
export declare const ListTriggerOperationsResponse: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse";
    encode(message: ListTriggerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggerOperationsResponse;
    fromJSON(object: any): ListTriggerOperationsResponse;
    toJSON(message: ListTriggerOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListTriggerOperationsResponse>): ListTriggerOperationsResponse;
};
/** A set of methods for managing triggers for serverless functions. */
export declare const TriggerServiceService: {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTriggerRequest;
        readonly responseSerialize: (value: Trigger) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Trigger;
    };
    /** Retrieves the list of triggers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTriggersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTriggersRequest;
        readonly responseSerialize: (value: ListTriggersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTriggersResponse;
    };
    /** Creates a trigger in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified trigger. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified trigger. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Pauses the specified trigger. */
    readonly pause: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PauseTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PauseTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restarts the specified trigger. */
    readonly resume: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResumeTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResumeTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified trigger. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTriggerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTriggerOperationsRequest;
        readonly responseSerialize: (value: ListTriggerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTriggerOperationsResponse;
    };
};
export interface TriggerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get: handleUnaryCall<GetTriggerRequest, Trigger>;
    /** Retrieves the list of triggers in the specified folder. */
    list: handleUnaryCall<ListTriggersRequest, ListTriggersResponse>;
    /** Creates a trigger in the specified folder. */
    create: handleUnaryCall<CreateTriggerRequest, Operation>;
    /** Updates the specified trigger. */
    update: handleUnaryCall<UpdateTriggerRequest, Operation>;
    /** Deletes the specified trigger. */
    delete: handleUnaryCall<DeleteTriggerRequest, Operation>;
    /** Pauses the specified trigger. */
    pause: handleUnaryCall<PauseTriggerRequest, Operation>;
    /** Restarts the specified trigger. */
    resume: handleUnaryCall<ResumeTriggerRequest, Operation>;
    /** Lists operations for the specified trigger. */
    listOperations: handleUnaryCall<ListTriggerOperationsRequest, ListTriggerOperationsResponse>;
}
export interface TriggerServiceClient extends Client {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get(request: GetTriggerRequest, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
    get(request: GetTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
    get(request: GetTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
    /** Retrieves the list of triggers in the specified folder. */
    list(request: ListTriggersRequest, callback: (error: ServiceError | null, response: ListTriggersResponse) => void): ClientUnaryCall;
    list(request: ListTriggersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTriggersResponse) => void): ClientUnaryCall;
    list(request: ListTriggersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTriggersResponse) => void): ClientUnaryCall;
    /** Creates a trigger in the specified folder. */
    create(request: CreateTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified trigger. */
    update(request: UpdateTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified trigger. */
    delete(request: DeleteTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Pauses the specified trigger. */
    pause(request: PauseTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restarts the specified trigger. */
    resume(request: ResumeTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified trigger. */
    listOperations(request: ListTriggerOperationsRequest, callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTriggerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTriggerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void): ClientUnaryCall;
}
export declare const TriggerServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => TriggerServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
