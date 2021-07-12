/// <reference types="node" />
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { Secret, Version } from '../../../../yandex/cloud/lockbox/v1/secret';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.lockbox.v1";
export interface PayloadEntryChange {
    /** Non-confidential key of the entry. */
    key: string;
    /** Use the field to set a text value. */
    textValue: string | undefined;
    /** Use the field to set a binary value. */
    binaryValue: Uint8Array | undefined;
}
export interface GetSecretRequest {
    /**
     * ID of the secret to return.
     *
     * To get a secret ID make a [List] request.
     */
    secretId: string;
}
export interface ListSecretsRequest {
    /** ID of the folder to list secrets in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListSecretsRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSecretsRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSecretsResponse {
    /** List of secrets in the specified folder. */
    secrets: Secret[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListSecretsRequest.page_size], use
     * the `next_page_token` as the value for the [ListSecretsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSecretRequest {
    /** ID of the folder to create a secret in. */
    folderId: string;
    /** Name of the secret. */
    name: string;
    /** Description of the secret. */
    description: string;
    /**
     * Custom labels for the secret as `key:value` pairs. Maximum 64 per key.
     * For example, `"project": "mvp"` or `"source": "dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
    kmsKeyId: string;
    /** Description of the first version. */
    versionDescription: string;
    /** Payload entries added to the first version. */
    versionPayloadEntries: PayloadEntryChange[];
    /** Flag that inhibits deletion of the secret. */
    deletionProtection: boolean;
}
export interface CreateSecretRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateSecretMetadata {
    /** ID of the secret being created. */
    secretId: string;
    /** ID of the current version of the secret being created. */
    versionId: string;
}
export interface UpdateSecretRequest {
    /** ID of the secret to update. */
    secretId: string;
    /** Field mask that specifies which attributes of the secret are going to be updated. */
    updateMask: FieldMask | undefined;
    /** New name of the secret. */
    name: string;
    /** New description of the secret. */
    description: string;
    /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Flag that inhibits deletion of the secret. */
    deletionProtection: boolean;
}
export interface UpdateSecretRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateSecretMetadata {
    /** ID of the secret being updated. */
    secretId: string;
}
export interface DeleteSecretRequest {
    /** ID of the secret to be deleted. */
    secretId: string;
}
export interface DeleteSecretMetadata {
    /** ID of the secret being deleted. */
    secretId: string;
}
export interface ActivateSecretRequest {
    /** ID of the secret to be activated. */
    secretId: string;
}
export interface ActivateSecretMetadata {
    /** ID of the secret being activated. */
    secretId: string;
}
export interface DeactivateSecretRequest {
    /** ID of the secret to be deactivated. */
    secretId: string;
}
export interface DeactivateSecretMetadata {
    /** ID of the secret being deactivated. */
    secretId: string;
}
export interface AddVersionRequest {
    /** ID of the secret. */
    secretId: string;
    /** Description of the version. */
    description: string;
    /** Describe how payload entries of the base version change in the added version. */
    payloadEntries: PayloadEntryChange[];
    /** Optional base version id. Defaults to the current version if not specified */
    baseVersionId: string;
}
export interface AddVersionMetadata {
    /** ID of the secret. */
    secretId: string;
    /** ID of the added version. */
    versionId: string;
}
export interface ListVersionsRequest {
    /** ID of the secret to list versions for. */
    secretId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListVersionsRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListVersionsRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListVersionsResponse {
    /** List of versions for the specified secret. */
    versions: Version[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListVersionsRequest.page_size], use
     * the `next_page_token` as the value for the [ListVersionsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ScheduleVersionDestructionRequest {
    /** ID of the secret whose version should be scheduled for destruction. */
    secretId: string;
    /** ID of the version to be destroyed. */
    versionId: string;
    /**
     * Time interval between the version destruction request and actual destruction.
     * Default value: 7 days.
     */
    pendingPeriod: Duration | undefined;
}
export interface ScheduleVersionDestructionMetadata {
    /** ID of the secret whose version is being scheduled for destruction. */
    secretId: string;
    /** ID of the version that is being scheduled for destruction. */
    versionId: string;
    /** Destruction timestamp. */
    destroyAt: Date | undefined;
}
export interface CancelVersionDestructionRequest {
    /** ID of the secret to cancel a version's destruction for. */
    secretId: string;
    /** ID of the secret whose scheduled destruction should be cancelled. */
    versionId: string;
}
export interface CancelVersionDestructionMetadata {
    /** ID of the secret whose version's destruction is being cancelled. */
    secretId: string;
    /** ID of the version whose scheduled destruction is being cancelled. */
    versionId: string;
}
export interface ListSecretOperationsRequest {
    /** ID of the secret to get operations for. */
    secretId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListSecretOperationsRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSecretOperationsRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSecretOperationsResponse {
    /** List of operations for the specified secret. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSecretOperationsResponse.page_size], use the `next_page_token` as the value
     * for the [ListSecretOperationsResponse.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const PayloadEntryChange: {
    encode(message: PayloadEntryChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PayloadEntryChange;
    fromJSON(object: any): PayloadEntryChange;
    toJSON(message: PayloadEntryChange): unknown;
    fromPartial(object: DeepPartial<PayloadEntryChange>): PayloadEntryChange;
};
export declare const GetSecretRequest: {
    encode(message: GetSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSecretRequest;
    fromJSON(object: any): GetSecretRequest;
    toJSON(message: GetSecretRequest): unknown;
    fromPartial(object: DeepPartial<GetSecretRequest>): GetSecretRequest;
};
export declare const ListSecretsRequest: {
    encode(message: ListSecretsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretsRequest;
    fromJSON(object: any): ListSecretsRequest;
    toJSON(message: ListSecretsRequest): unknown;
    fromPartial(object: DeepPartial<ListSecretsRequest>): ListSecretsRequest;
};
export declare const ListSecretsResponse: {
    encode(message: ListSecretsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretsResponse;
    fromJSON(object: any): ListSecretsResponse;
    toJSON(message: ListSecretsResponse): unknown;
    fromPartial(object: DeepPartial<ListSecretsResponse>): ListSecretsResponse;
};
export declare const CreateSecretRequest: {
    encode(message: CreateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecretRequest;
    fromJSON(object: any): CreateSecretRequest;
    toJSON(message: CreateSecretRequest): unknown;
    fromPartial(object: DeepPartial<CreateSecretRequest>): CreateSecretRequest;
};
export declare const CreateSecretRequest_LabelsEntry: {
    encode(message: CreateSecretRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecretRequest_LabelsEntry;
    fromJSON(object: any): CreateSecretRequest_LabelsEntry;
    toJSON(message: CreateSecretRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateSecretRequest_LabelsEntry>): CreateSecretRequest_LabelsEntry;
};
export declare const CreateSecretMetadata: {
    encode(message: CreateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecretMetadata;
    fromJSON(object: any): CreateSecretMetadata;
    toJSON(message: CreateSecretMetadata): unknown;
    fromPartial(object: DeepPartial<CreateSecretMetadata>): CreateSecretMetadata;
};
export declare const UpdateSecretRequest: {
    encode(message: UpdateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecretRequest;
    fromJSON(object: any): UpdateSecretRequest;
    toJSON(message: UpdateSecretRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSecretRequest>): UpdateSecretRequest;
};
export declare const UpdateSecretRequest_LabelsEntry: {
    encode(message: UpdateSecretRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecretRequest_LabelsEntry;
    fromJSON(object: any): UpdateSecretRequest_LabelsEntry;
    toJSON(message: UpdateSecretRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateSecretRequest_LabelsEntry>): UpdateSecretRequest_LabelsEntry;
};
export declare const UpdateSecretMetadata: {
    encode(message: UpdateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecretMetadata;
    fromJSON(object: any): UpdateSecretMetadata;
    toJSON(message: UpdateSecretMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSecretMetadata>): UpdateSecretMetadata;
};
export declare const DeleteSecretRequest: {
    encode(message: DeleteSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecretRequest;
    fromJSON(object: any): DeleteSecretRequest;
    toJSON(message: DeleteSecretRequest): unknown;
    fromPartial(object: DeepPartial<DeleteSecretRequest>): DeleteSecretRequest;
};
export declare const DeleteSecretMetadata: {
    encode(message: DeleteSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecretMetadata;
    fromJSON(object: any): DeleteSecretMetadata;
    toJSON(message: DeleteSecretMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteSecretMetadata>): DeleteSecretMetadata;
};
export declare const ActivateSecretRequest: {
    encode(message: ActivateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateSecretRequest;
    fromJSON(object: any): ActivateSecretRequest;
    toJSON(message: ActivateSecretRequest): unknown;
    fromPartial(object: DeepPartial<ActivateSecretRequest>): ActivateSecretRequest;
};
export declare const ActivateSecretMetadata: {
    encode(message: ActivateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateSecretMetadata;
    fromJSON(object: any): ActivateSecretMetadata;
    toJSON(message: ActivateSecretMetadata): unknown;
    fromPartial(object: DeepPartial<ActivateSecretMetadata>): ActivateSecretMetadata;
};
export declare const DeactivateSecretRequest: {
    encode(message: DeactivateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateSecretRequest;
    fromJSON(object: any): DeactivateSecretRequest;
    toJSON(message: DeactivateSecretRequest): unknown;
    fromPartial(object: DeepPartial<DeactivateSecretRequest>): DeactivateSecretRequest;
};
export declare const DeactivateSecretMetadata: {
    encode(message: DeactivateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateSecretMetadata;
    fromJSON(object: any): DeactivateSecretMetadata;
    toJSON(message: DeactivateSecretMetadata): unknown;
    fromPartial(object: DeepPartial<DeactivateSecretMetadata>): DeactivateSecretMetadata;
};
export declare const AddVersionRequest: {
    encode(message: AddVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddVersionRequest;
    fromJSON(object: any): AddVersionRequest;
    toJSON(message: AddVersionRequest): unknown;
    fromPartial(object: DeepPartial<AddVersionRequest>): AddVersionRequest;
};
export declare const AddVersionMetadata: {
    encode(message: AddVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddVersionMetadata;
    fromJSON(object: any): AddVersionMetadata;
    toJSON(message: AddVersionMetadata): unknown;
    fromPartial(object: DeepPartial<AddVersionMetadata>): AddVersionMetadata;
};
export declare const ListVersionsRequest: {
    encode(message: ListVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsRequest;
    fromJSON(object: any): ListVersionsRequest;
    toJSON(message: ListVersionsRequest): unknown;
    fromPartial(object: DeepPartial<ListVersionsRequest>): ListVersionsRequest;
};
export declare const ListVersionsResponse: {
    encode(message: ListVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsResponse;
    fromJSON(object: any): ListVersionsResponse;
    toJSON(message: ListVersionsResponse): unknown;
    fromPartial(object: DeepPartial<ListVersionsResponse>): ListVersionsResponse;
};
export declare const ScheduleVersionDestructionRequest: {
    encode(message: ScheduleVersionDestructionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduleVersionDestructionRequest;
    fromJSON(object: any): ScheduleVersionDestructionRequest;
    toJSON(message: ScheduleVersionDestructionRequest): unknown;
    fromPartial(object: DeepPartial<ScheduleVersionDestructionRequest>): ScheduleVersionDestructionRequest;
};
export declare const ScheduleVersionDestructionMetadata: {
    encode(message: ScheduleVersionDestructionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduleVersionDestructionMetadata;
    fromJSON(object: any): ScheduleVersionDestructionMetadata;
    toJSON(message: ScheduleVersionDestructionMetadata): unknown;
    fromPartial(object: DeepPartial<ScheduleVersionDestructionMetadata>): ScheduleVersionDestructionMetadata;
};
export declare const CancelVersionDestructionRequest: {
    encode(message: CancelVersionDestructionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelVersionDestructionRequest;
    fromJSON(object: any): CancelVersionDestructionRequest;
    toJSON(message: CancelVersionDestructionRequest): unknown;
    fromPartial(object: DeepPartial<CancelVersionDestructionRequest>): CancelVersionDestructionRequest;
};
export declare const CancelVersionDestructionMetadata: {
    encode(message: CancelVersionDestructionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelVersionDestructionMetadata;
    fromJSON(object: any): CancelVersionDestructionMetadata;
    toJSON(message: CancelVersionDestructionMetadata): unknown;
    fromPartial(object: DeepPartial<CancelVersionDestructionMetadata>): CancelVersionDestructionMetadata;
};
export declare const ListSecretOperationsRequest: {
    encode(message: ListSecretOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretOperationsRequest;
    fromJSON(object: any): ListSecretOperationsRequest;
    toJSON(message: ListSecretOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListSecretOperationsRequest>): ListSecretOperationsRequest;
};
export declare const ListSecretOperationsResponse: {
    encode(message: ListSecretOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretOperationsResponse;
    fromJSON(object: any): ListSecretOperationsResponse;
    toJSON(message: ListSecretOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListSecretOperationsResponse>): ListSecretOperationsResponse;
};
/** A set of methods for managing secrets. */
export declare const SecretServiceService: {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    readonly get: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSecretRequest;
        readonly responseSerialize: (value: Secret) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Secret;
    };
    /** Retrieves the list of secrets in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecretsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecretsRequest;
        readonly responseSerialize: (value: ListSecretsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecretsResponse;
    };
    /** Creates a secret in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified secret. */
    readonly update: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified secret. */
    readonly delete: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Activates the specified secret. */
    readonly activate: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deactivates the specified secret. */
    readonly deactivate: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeactivateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeactivateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of versions of the specified secret. */
    readonly listVersions: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVersionsRequest;
        readonly responseSerialize: (value: ListVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVersionsResponse;
    };
    /** Adds new version based on a previous one. */
    readonly addVersion: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddVersionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    readonly scheduleVersionDestruction: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ScheduleVersionDestructionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ScheduleVersionDestructionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    readonly cancelVersionDestruction: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelVersionDestructionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelVersionDestructionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified secret. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecretOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecretOperationsRequest;
        readonly responseSerialize: (value: ListSecretOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecretOperationsResponse;
    };
    /** Lists existing access bindings for the specified secret. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the secret. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the secret. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface SecretServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get: handleUnaryCall<GetSecretRequest, Secret>;
    /** Retrieves the list of secrets in the specified folder. */
    list: handleUnaryCall<ListSecretsRequest, ListSecretsResponse>;
    /** Creates a secret in the specified folder. */
    create: handleUnaryCall<CreateSecretRequest, Operation>;
    /** Updates the specified secret. */
    update: handleUnaryCall<UpdateSecretRequest, Operation>;
    /** Deletes the specified secret. */
    delete: handleUnaryCall<DeleteSecretRequest, Operation>;
    /** Activates the specified secret. */
    activate: handleUnaryCall<ActivateSecretRequest, Operation>;
    /** Deactivates the specified secret. */
    deactivate: handleUnaryCall<DeactivateSecretRequest, Operation>;
    /** Retrieves the list of versions of the specified secret. */
    listVersions: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
    /** Adds new version based on a previous one. */
    addVersion: handleUnaryCall<AddVersionRequest, Operation>;
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: handleUnaryCall<ScheduleVersionDestructionRequest, Operation>;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: handleUnaryCall<CancelVersionDestructionRequest, Operation>;
    /** Lists operations for the specified secret. */
    listOperations: handleUnaryCall<ListSecretOperationsRequest, ListSecretOperationsResponse>;
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the secret. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the secret. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface SecretServiceClient extends Client {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get(request: GetSecretRequest, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    get(request: GetSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    get(request: GetSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    /** Retrieves the list of secrets in the specified folder. */
    list(request: ListSecretsRequest, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    list(request: ListSecretsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    list(request: ListSecretsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    /** Creates a secret in the specified folder. */
    create(request: CreateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified secret. */
    update(request: UpdateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified secret. */
    delete(request: DeleteSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Activates the specified secret. */
    activate(request: ActivateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deactivates the specified secret. */
    deactivate(request: DeactivateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of versions of the specified secret. */
    listVersions(request: ListVersionsRequest, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    /** Adds new version based on a previous one. */
    addVersion(request: AddVersionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addVersion(request: AddVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addVersion(request: AddVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction(request: ScheduleVersionDestructionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scheduleVersionDestruction(request: ScheduleVersionDestructionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scheduleVersionDestruction(request: ScheduleVersionDestructionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction(request: CancelVersionDestructionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancelVersionDestruction(request: CancelVersionDestructionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancelVersionDestruction(request: CancelVersionDestructionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified secret. */
    listOperations(request: ListSecretOperationsRequest, callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecretOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecretOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the secret. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the secret. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const SecretServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SecretServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
