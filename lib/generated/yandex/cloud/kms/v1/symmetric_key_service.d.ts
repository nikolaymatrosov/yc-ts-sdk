/// <reference types="node" />
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { SymmetricAlgorithm, SymmetricKey_Status, SymmetricKey, SymmetricKeyVersion } from '../../../../yandex/cloud/kms/v1/symmetric_key';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.kms.v1";
export interface CreateSymmetricKeyRequest {
    $type: 'yandex.cloud.kms.v1.CreateSymmetricKeyRequest';
    /** ID of the folder to create a symmetric KMS key in. */
    folderId: string;
    /** Name of the key. */
    name: string;
    /** Description of the key. */
    description: string;
    /**
     * Custom labels for the symmetric KMS key as `key:value` pairs. Maximum 64 per key.
     * For example, `"project": "mvp"` or `"source": "dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Encryption algorithm to be used with a new key version, generated with the next rotation. */
    defaultAlgorithm: SymmetricAlgorithm;
    /**
     * Interval between automatic rotations. To disable automatic rotation, don't include
     * this field in the creation request.
     */
    rotationPeriod: Duration | undefined;
    /** Flag that inhibits deletion of the symmetric KMS key */
    deletionProtection: boolean;
}
export interface CreateSymmetricKeyRequest_LabelsEntry {
    $type: 'yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateSymmetricKeyMetadata {
    $type: 'yandex.cloud.kms.v1.CreateSymmetricKeyMetadata';
    /** ID of the key being created. */
    keyId: string;
    /** ID of the primary version of the key being created. */
    primaryVersionId: string;
}
export interface GetSymmetricKeyRequest {
    $type: 'yandex.cloud.kms.v1.GetSymmetricKeyRequest';
    /**
     * ID of the symmetric KMS key to return.
     * To get the ID of a symmetric KMS key use a [SymmetricKeyService.List] request.
     */
    keyId: string;
}
export interface ListSymmetricKeysRequest {
    $type: 'yandex.cloud.kms.v1.ListSymmetricKeysRequest';
    /** ID of the folder to list symmetric KMS keys in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSymmetricKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSymmetricKeysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSymmetricKeysResponse {
    $type: 'yandex.cloud.kms.v1.ListSymmetricKeysResponse';
    /** List of symmetric KMS keys in the specified folder. */
    keys: SymmetricKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListSymmetricKeysRequest.page_size], use
     * the [next_page_token] as the value for the [ListSymmetricKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListSymmetricKeyVersionsRequest {
    $type: 'yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest';
    /** ID of the symmetric KMS key to list versions for. */
    keyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSymmetricKeyVersionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSymmetricKeyVersionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSymmetricKeyVersionsResponse {
    $type: 'yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse';
    /** List of versions for the specified symmetric KMS key. */
    keyVersions: SymmetricKeyVersion[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListSymmetricKeyVersionsRequest.page_size], use
     * the [next_page_token] as the value for the [ListSymmetricKeyVersionsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateSymmetricKeyRequest {
    $type: 'yandex.cloud.kms.v1.UpdateSymmetricKeyRequest';
    /**
     * ID of the symmetric KMS key to update.
     * To get the ID of a symmetric KMS key use a [SymmetricKeyService.List] request.
     */
    keyId: string;
    /** Field mask that specifies which attributes of the symmetric KMS key are going to be updated. */
    updateMask: FieldMask | undefined;
    /** New name for the symmetric KMS key. */
    name: string;
    /** New description for the symmetric KMS key. */
    description: string;
    /**
     * New status for the symmetric KMS key.
     * Using the [SymmetricKeyService.Update] method you can only set ACTIVE or INACTIVE status.
     */
    status: SymmetricKey_Status;
    /** Custom labels for the symmetric KMS key as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Default encryption algorithm to be used with new versions of the symmetric KMS key. */
    defaultAlgorithm: SymmetricAlgorithm;
    /** Time period between automatic symmetric KMS key rotations. */
    rotationPeriod: Duration | undefined;
    /** Flag that inhibits deletion of the symmetric KMS key */
    deletionProtection: boolean;
}
export interface UpdateSymmetricKeyRequest_LabelsEntry {
    $type: 'yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateSymmetricKeyMetadata {
    $type: 'yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata';
    /** ID of the key being updated. */
    keyId: string;
}
export interface DeleteSymmetricKeyRequest {
    $type: 'yandex.cloud.kms.v1.DeleteSymmetricKeyRequest';
    /** ID of the key to be deleted. */
    keyId: string;
}
export interface DeleteSymmetricKeyMetadata {
    $type: 'yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata';
    /** ID of the key being deleted. */
    keyId: string;
}
export interface SetPrimarySymmetricKeyVersionRequest {
    $type: 'yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest';
    /** ID of the key to set a primary version for. */
    keyId: string;
    /** ID of the version that should become primary for the specified key. */
    versionId: string;
}
export interface SetPrimarySymmetricKeyVersionMetadata {
    $type: 'yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata';
    /** ID of the key that the primary version if being changed for. */
    keyId: string;
    /** ID of the version that is being made primary for the key. */
    versionId: string;
}
export interface RotateSymmetricKeyRequest {
    $type: 'yandex.cloud.kms.v1.RotateSymmetricKeyRequest';
    /** ID of the key to be rotated. */
    keyId: string;
}
export interface RotateSymmetricKeyMetadata {
    $type: 'yandex.cloud.kms.v1.RotateSymmetricKeyMetadata';
    /** ID of the key being rotated. */
    keyId: string;
    /** ID of the version generated as a result of key rotation. */
    newPrimaryVersionId: string;
}
export interface ScheduleSymmetricKeyVersionDestructionRequest {
    $type: 'yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest';
    /** ID of the key whose version should be scheduled for destruction. */
    keyId: string;
    /** ID of the version to be destroyed. */
    versionId: string;
    /**
     * Time interval between the version destruction request and actual destruction.
     * Default value: 7 days.
     */
    pendingPeriod: Duration | undefined;
}
export interface ScheduleSymmetricKeyVersionDestructionMetadata {
    $type: 'yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata';
    /** ID of the key whose version is being scheduled for destruction. */
    keyId: string;
    /** ID of the version that is being scheduled for destruction. */
    versionId: string;
    /** Time when the version is scheduled to be destroyed. */
    destroyAt: Date | undefined;
}
export interface CancelSymmetricKeyVersionDestructionRequest {
    $type: 'yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest';
    /** ID of the key to cancel a version's destruction for. */
    keyId: string;
    /** ID of the version whose scheduled destruction should be cancelled. */
    versionId: string;
}
export interface CancelSymmetricKeyVersionDestructionMetadata {
    $type: 'yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata';
    /** ID of the key whose version's destruction is being cancelled. */
    keyId: string;
    /** ID of the version whose scheduled destruction is being cancelled. */
    versionId: string;
}
export interface ListSymmetricKeyOperationsRequest {
    $type: 'yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest';
    /**
     * ID of the symmetric KMS key to get operations for.
     *
     * To get the key ID, use a [SymmetricKeyService.List] request.
     */
    keyId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListSymmetricKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSymmetricKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSymmetricKeyOperationsResponse {
    $type: 'yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse';
    /** List of operations for the specified key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSymmetricKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSymmetricKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const CreateSymmetricKeyRequest: {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest";
    encode(message: CreateSymmetricKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSymmetricKeyRequest;
    fromJSON(object: any): CreateSymmetricKeyRequest;
    toJSON(message: CreateSymmetricKeyRequest): unknown;
    fromPartial(object: DeepPartial<CreateSymmetricKeyRequest>): CreateSymmetricKeyRequest;
};
export declare const CreateSymmetricKeyRequest_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry";
    encode(message: CreateSymmetricKeyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSymmetricKeyRequest_LabelsEntry;
    fromJSON(object: any): CreateSymmetricKeyRequest_LabelsEntry;
    toJSON(message: CreateSymmetricKeyRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateSymmetricKeyRequest_LabelsEntry>): CreateSymmetricKeyRequest_LabelsEntry;
};
export declare const CreateSymmetricKeyMetadata: {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata";
    encode(message: CreateSymmetricKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSymmetricKeyMetadata;
    fromJSON(object: any): CreateSymmetricKeyMetadata;
    toJSON(message: CreateSymmetricKeyMetadata): unknown;
    fromPartial(object: DeepPartial<CreateSymmetricKeyMetadata>): CreateSymmetricKeyMetadata;
};
export declare const GetSymmetricKeyRequest: {
    $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest";
    encode(message: GetSymmetricKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSymmetricKeyRequest;
    fromJSON(object: any): GetSymmetricKeyRequest;
    toJSON(message: GetSymmetricKeyRequest): unknown;
    fromPartial(object: DeepPartial<GetSymmetricKeyRequest>): GetSymmetricKeyRequest;
};
export declare const ListSymmetricKeysRequest: {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest";
    encode(message: ListSymmetricKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSymmetricKeysRequest;
    fromJSON(object: any): ListSymmetricKeysRequest;
    toJSON(message: ListSymmetricKeysRequest): unknown;
    fromPartial(object: DeepPartial<ListSymmetricKeysRequest>): ListSymmetricKeysRequest;
};
export declare const ListSymmetricKeysResponse: {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse";
    encode(message: ListSymmetricKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSymmetricKeysResponse;
    fromJSON(object: any): ListSymmetricKeysResponse;
    toJSON(message: ListSymmetricKeysResponse): unknown;
    fromPartial(object: DeepPartial<ListSymmetricKeysResponse>): ListSymmetricKeysResponse;
};
export declare const ListSymmetricKeyVersionsRequest: {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest";
    encode(message: ListSymmetricKeyVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSymmetricKeyVersionsRequest;
    fromJSON(object: any): ListSymmetricKeyVersionsRequest;
    toJSON(message: ListSymmetricKeyVersionsRequest): unknown;
    fromPartial(object: DeepPartial<ListSymmetricKeyVersionsRequest>): ListSymmetricKeyVersionsRequest;
};
export declare const ListSymmetricKeyVersionsResponse: {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse";
    encode(message: ListSymmetricKeyVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSymmetricKeyVersionsResponse;
    fromJSON(object: any): ListSymmetricKeyVersionsResponse;
    toJSON(message: ListSymmetricKeyVersionsResponse): unknown;
    fromPartial(object: DeepPartial<ListSymmetricKeyVersionsResponse>): ListSymmetricKeyVersionsResponse;
};
export declare const UpdateSymmetricKeyRequest: {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest";
    encode(message: UpdateSymmetricKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSymmetricKeyRequest;
    fromJSON(object: any): UpdateSymmetricKeyRequest;
    toJSON(message: UpdateSymmetricKeyRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSymmetricKeyRequest>): UpdateSymmetricKeyRequest;
};
export declare const UpdateSymmetricKeyRequest_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry";
    encode(message: UpdateSymmetricKeyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSymmetricKeyRequest_LabelsEntry;
    fromJSON(object: any): UpdateSymmetricKeyRequest_LabelsEntry;
    toJSON(message: UpdateSymmetricKeyRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateSymmetricKeyRequest_LabelsEntry>): UpdateSymmetricKeyRequest_LabelsEntry;
};
export declare const UpdateSymmetricKeyMetadata: {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata";
    encode(message: UpdateSymmetricKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSymmetricKeyMetadata;
    fromJSON(object: any): UpdateSymmetricKeyMetadata;
    toJSON(message: UpdateSymmetricKeyMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSymmetricKeyMetadata>): UpdateSymmetricKeyMetadata;
};
export declare const DeleteSymmetricKeyRequest: {
    $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest";
    encode(message: DeleteSymmetricKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSymmetricKeyRequest;
    fromJSON(object: any): DeleteSymmetricKeyRequest;
    toJSON(message: DeleteSymmetricKeyRequest): unknown;
    fromPartial(object: DeepPartial<DeleteSymmetricKeyRequest>): DeleteSymmetricKeyRequest;
};
export declare const DeleteSymmetricKeyMetadata: {
    $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata";
    encode(message: DeleteSymmetricKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSymmetricKeyMetadata;
    fromJSON(object: any): DeleteSymmetricKeyMetadata;
    toJSON(message: DeleteSymmetricKeyMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteSymmetricKeyMetadata>): DeleteSymmetricKeyMetadata;
};
export declare const SetPrimarySymmetricKeyVersionRequest: {
    $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest";
    encode(message: SetPrimarySymmetricKeyVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetPrimarySymmetricKeyVersionRequest;
    fromJSON(object: any): SetPrimarySymmetricKeyVersionRequest;
    toJSON(message: SetPrimarySymmetricKeyVersionRequest): unknown;
    fromPartial(object: DeepPartial<SetPrimarySymmetricKeyVersionRequest>): SetPrimarySymmetricKeyVersionRequest;
};
export declare const SetPrimarySymmetricKeyVersionMetadata: {
    $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata";
    encode(message: SetPrimarySymmetricKeyVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetPrimarySymmetricKeyVersionMetadata;
    fromJSON(object: any): SetPrimarySymmetricKeyVersionMetadata;
    toJSON(message: SetPrimarySymmetricKeyVersionMetadata): unknown;
    fromPartial(object: DeepPartial<SetPrimarySymmetricKeyVersionMetadata>): SetPrimarySymmetricKeyVersionMetadata;
};
export declare const RotateSymmetricKeyRequest: {
    $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest";
    encode(message: RotateSymmetricKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateSymmetricKeyRequest;
    fromJSON(object: any): RotateSymmetricKeyRequest;
    toJSON(message: RotateSymmetricKeyRequest): unknown;
    fromPartial(object: DeepPartial<RotateSymmetricKeyRequest>): RotateSymmetricKeyRequest;
};
export declare const RotateSymmetricKeyMetadata: {
    $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata";
    encode(message: RotateSymmetricKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateSymmetricKeyMetadata;
    fromJSON(object: any): RotateSymmetricKeyMetadata;
    toJSON(message: RotateSymmetricKeyMetadata): unknown;
    fromPartial(object: DeepPartial<RotateSymmetricKeyMetadata>): RotateSymmetricKeyMetadata;
};
export declare const ScheduleSymmetricKeyVersionDestructionRequest: {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest";
    encode(message: ScheduleSymmetricKeyVersionDestructionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduleSymmetricKeyVersionDestructionRequest;
    fromJSON(object: any): ScheduleSymmetricKeyVersionDestructionRequest;
    toJSON(message: ScheduleSymmetricKeyVersionDestructionRequest): unknown;
    fromPartial(object: DeepPartial<ScheduleSymmetricKeyVersionDestructionRequest>): ScheduleSymmetricKeyVersionDestructionRequest;
};
export declare const ScheduleSymmetricKeyVersionDestructionMetadata: {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata";
    encode(message: ScheduleSymmetricKeyVersionDestructionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduleSymmetricKeyVersionDestructionMetadata;
    fromJSON(object: any): ScheduleSymmetricKeyVersionDestructionMetadata;
    toJSON(message: ScheduleSymmetricKeyVersionDestructionMetadata): unknown;
    fromPartial(object: DeepPartial<ScheduleSymmetricKeyVersionDestructionMetadata>): ScheduleSymmetricKeyVersionDestructionMetadata;
};
export declare const CancelSymmetricKeyVersionDestructionRequest: {
    $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest";
    encode(message: CancelSymmetricKeyVersionDestructionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelSymmetricKeyVersionDestructionRequest;
    fromJSON(object: any): CancelSymmetricKeyVersionDestructionRequest;
    toJSON(message: CancelSymmetricKeyVersionDestructionRequest): unknown;
    fromPartial(object: DeepPartial<CancelSymmetricKeyVersionDestructionRequest>): CancelSymmetricKeyVersionDestructionRequest;
};
export declare const CancelSymmetricKeyVersionDestructionMetadata: {
    $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata";
    encode(message: CancelSymmetricKeyVersionDestructionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelSymmetricKeyVersionDestructionMetadata;
    fromJSON(object: any): CancelSymmetricKeyVersionDestructionMetadata;
    toJSON(message: CancelSymmetricKeyVersionDestructionMetadata): unknown;
    fromPartial(object: DeepPartial<CancelSymmetricKeyVersionDestructionMetadata>): CancelSymmetricKeyVersionDestructionMetadata;
};
export declare const ListSymmetricKeyOperationsRequest: {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest";
    encode(message: ListSymmetricKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSymmetricKeyOperationsRequest;
    fromJSON(object: any): ListSymmetricKeyOperationsRequest;
    toJSON(message: ListSymmetricKeyOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListSymmetricKeyOperationsRequest>): ListSymmetricKeyOperationsRequest;
};
export declare const ListSymmetricKeyOperationsResponse: {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse";
    encode(message: ListSymmetricKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSymmetricKeyOperationsResponse;
    fromJSON(object: any): ListSymmetricKeyOperationsResponse;
    toJSON(message: ListSymmetricKeyOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListSymmetricKeyOperationsResponse>): ListSymmetricKeyOperationsResponse;
};
/** Set of methods for managing symmetric KMS keys. */
export declare const SymmetricKeyServiceService: {
    /** Creates a symmetric KMS key in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSymmetricKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSymmetricKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified symmetric KMS key.
     *
     *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSymmetricKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSymmetricKeyRequest;
        readonly responseSerialize: (value: SymmetricKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SymmetricKey;
    };
    /** Returns the list of symmetric KMS keys in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSymmetricKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSymmetricKeysRequest;
        readonly responseSerialize: (value: ListSymmetricKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSymmetricKeysResponse;
    };
    /** Returns the list of versions of the specified symmetric KMS key. */
    readonly listVersions: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSymmetricKeyVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSymmetricKeyVersionsRequest;
        readonly responseSerialize: (value: ListSymmetricKeyVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSymmetricKeyVersionsResponse;
    };
    /** Updates the specified symmetric KMS key. */
    readonly update: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSymmetricKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSymmetricKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified symmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSymmetricKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSymmetricKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Sets the primary version for the specified key. The primary version is used
     * by default for all encrypt/decrypt operations where no version ID is specified.
     */
    readonly setPrimaryVersion: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetPrimarySymmetricKeyVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetPrimarySymmetricKeyVersionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Schedules the specified key version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
     */
    readonly scheduleVersionDestruction: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ScheduleSymmetricKeyVersionDestructionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ScheduleSymmetricKeyVersionDestructionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    readonly cancelVersionDestruction: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelSymmetricKeyVersionDestructionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelSymmetricKeyVersionDestructionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Rotates the specified key: creates a new key version and makes it the primary version.
     * The old version remains available for decryption of ciphertext encrypted with it.
     */
    readonly rotate: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Rotate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RotateSymmetricKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RotateSymmetricKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified symmetric KMS key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSymmetricKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSymmetricKeyOperationsRequest;
        readonly responseSerialize: (value: ListSymmetricKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSymmetricKeyOperationsResponse;
    };
    /** Lists existing access bindings for the specified key. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the key. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified key. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface SymmetricKeyServiceServer extends UntypedServiceImplementation {
    /** Creates a symmetric KMS key in the specified folder. */
    create: handleUnaryCall<CreateSymmetricKeyRequest, Operation>;
    /**
     * Returns the specified symmetric KMS key.
     *
     *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: handleUnaryCall<GetSymmetricKeyRequest, SymmetricKey>;
    /** Returns the list of symmetric KMS keys in the specified folder. */
    list: handleUnaryCall<ListSymmetricKeysRequest, ListSymmetricKeysResponse>;
    /** Returns the list of versions of the specified symmetric KMS key. */
    listVersions: handleUnaryCall<ListSymmetricKeyVersionsRequest, ListSymmetricKeyVersionsResponse>;
    /** Updates the specified symmetric KMS key. */
    update: handleUnaryCall<UpdateSymmetricKeyRequest, Operation>;
    /**
     * Deletes the specified symmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: handleUnaryCall<DeleteSymmetricKeyRequest, Operation>;
    /**
     * Sets the primary version for the specified key. The primary version is used
     * by default for all encrypt/decrypt operations where no version ID is specified.
     */
    setPrimaryVersion: handleUnaryCall<SetPrimarySymmetricKeyVersionRequest, Operation>;
    /**
     * Schedules the specified key version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: handleUnaryCall<ScheduleSymmetricKeyVersionDestructionRequest, Operation>;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: handleUnaryCall<CancelSymmetricKeyVersionDestructionRequest, Operation>;
    /**
     * Rotates the specified key: creates a new key version and makes it the primary version.
     * The old version remains available for decryption of ciphertext encrypted with it.
     */
    rotate: handleUnaryCall<RotateSymmetricKeyRequest, Operation>;
    /** Lists operations for the specified symmetric KMS key. */
    listOperations: handleUnaryCall<ListSymmetricKeyOperationsRequest, ListSymmetricKeyOperationsResponse>;
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the key. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified key. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface SymmetricKeyServiceClient extends Client {
    /** Creates a symmetric KMS key in the specified folder. */
    create(request: CreateSymmetricKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSymmetricKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSymmetricKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified symmetric KMS key.
     *
     *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get(request: GetSymmetricKeyRequest, callback: (error: ServiceError | null, response: SymmetricKey) => void): ClientUnaryCall;
    get(request: GetSymmetricKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SymmetricKey) => void): ClientUnaryCall;
    get(request: GetSymmetricKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SymmetricKey) => void): ClientUnaryCall;
    /** Returns the list of symmetric KMS keys in the specified folder. */
    list(request: ListSymmetricKeysRequest, callback: (error: ServiceError | null, response: ListSymmetricKeysResponse) => void): ClientUnaryCall;
    list(request: ListSymmetricKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSymmetricKeysResponse) => void): ClientUnaryCall;
    list(request: ListSymmetricKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSymmetricKeysResponse) => void): ClientUnaryCall;
    /** Returns the list of versions of the specified symmetric KMS key. */
    listVersions(request: ListSymmetricKeyVersionsRequest, callback: (error: ServiceError | null, response: ListSymmetricKeyVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListSymmetricKeyVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSymmetricKeyVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListSymmetricKeyVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSymmetricKeyVersionsResponse) => void): ClientUnaryCall;
    /** Updates the specified symmetric KMS key. */
    update(request: UpdateSymmetricKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSymmetricKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSymmetricKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified symmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete(request: DeleteSymmetricKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSymmetricKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSymmetricKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Sets the primary version for the specified key. The primary version is used
     * by default for all encrypt/decrypt operations where no version ID is specified.
     */
    setPrimaryVersion(request: SetPrimarySymmetricKeyVersionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setPrimaryVersion(request: SetPrimarySymmetricKeyVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setPrimaryVersion(request: SetPrimarySymmetricKeyVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Schedules the specified key version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction(request: ScheduleSymmetricKeyVersionDestructionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scheduleVersionDestruction(request: ScheduleSymmetricKeyVersionDestructionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scheduleVersionDestruction(request: ScheduleSymmetricKeyVersionDestructionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction(request: CancelSymmetricKeyVersionDestructionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancelVersionDestruction(request: CancelSymmetricKeyVersionDestructionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancelVersionDestruction(request: CancelSymmetricKeyVersionDestructionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Rotates the specified key: creates a new key version and makes it the primary version.
     * The old version remains available for decryption of ciphertext encrypted with it.
     */
    rotate(request: RotateSymmetricKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rotate(request: RotateSymmetricKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rotate(request: RotateSymmetricKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified symmetric KMS key. */
    listOperations(request: ListSymmetricKeyOperationsRequest, callback: (error: ServiceError | null, response: ListSymmetricKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSymmetricKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSymmetricKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSymmetricKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSymmetricKeyOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified key. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the key. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified key. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const SymmetricKeyServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SymmetricKeyServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
