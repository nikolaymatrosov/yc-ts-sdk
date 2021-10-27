/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import { Secret, Version } from '../../../../yandex/cloud/lockbox/v1/secret';
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

export const protobufPackage = 'yandex.cloud.lockbox.v1';

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
    labels: { [key: string]: string };
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
    labels: { [key: string]: string };
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

const basePayloadEntryChange: object = { key: '' };

export const PayloadEntryChange = {
    encode(
        message: PayloadEntryChange,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.textValue !== undefined) {
            writer.uint32(18).string(message.textValue);
        }
        if (message.binaryValue !== undefined) {
            writer.uint32(26).bytes(message.binaryValue);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PayloadEntryChange {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayloadEntryChange } as PayloadEntryChange;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.textValue = reader.string();
                    break;
                case 3:
                    message.binaryValue = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PayloadEntryChange {
        const message = { ...basePayloadEntryChange } as PayloadEntryChange;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = String(object.textValue);
        } else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = bytesFromBase64(object.binaryValue);
        }
        return message;
    },

    toJSON(message: PayloadEntryChange): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.textValue !== undefined && (obj.textValue = message.textValue);
        message.binaryValue !== undefined &&
            (obj.binaryValue =
                message.binaryValue !== undefined
                    ? base64FromBytes(message.binaryValue)
                    : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<PayloadEntryChange>): PayloadEntryChange {
        const message = { ...basePayloadEntryChange } as PayloadEntryChange;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = object.textValue;
        } else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = object.binaryValue;
        } else {
            message.binaryValue = undefined;
        }
        return message;
    },
};

const baseGetSecretRequest: object = { secretId: '' };

export const GetSecretRequest = {
    encode(
        message: GetSecretRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSecretRequest } as GetSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSecretRequest {
        const message = { ...baseGetSecretRequest } as GetSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: GetSecretRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetSecretRequest>): GetSecretRequest {
        const message = { ...baseGetSecretRequest } as GetSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseListSecretsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSecretsRequest = {
    encode(
        message: ListSecretsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
    ): ListSecretsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSecretsRequest } as ListSecretsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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

    fromJSON(object: any): ListSecretsRequest {
        const message = { ...baseListSecretsRequest } as ListSecretsRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
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

    toJSON(message: ListSecretsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListSecretsRequest>): ListSecretsRequest {
        const message = { ...baseListSecretsRequest } as ListSecretsRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
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

const baseListSecretsResponse: object = { nextPageToken: '' };

export const ListSecretsResponse = {
    encode(
        message: ListSecretsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.secrets) {
            Secret.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSecretsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSecretsResponse } as ListSecretsResponse;
        message.secrets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secrets.push(
                        Secret.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListSecretsResponse {
        const message = { ...baseListSecretsResponse } as ListSecretsResponse;
        message.secrets = [];
        if (object.secrets !== undefined && object.secrets !== null) {
            for (const e of object.secrets) {
                message.secrets.push(Secret.fromJSON(e));
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

    toJSON(message: ListSecretsResponse): unknown {
        const obj: any = {};
        if (message.secrets) {
            obj.secrets = message.secrets.map((e) =>
                e ? Secret.toJSON(e) : undefined
            );
        } else {
            obj.secrets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListSecretsResponse>): ListSecretsResponse {
        const message = { ...baseListSecretsResponse } as ListSecretsResponse;
        message.secrets = [];
        if (object.secrets !== undefined && object.secrets !== null) {
            for (const e of object.secrets) {
                message.secrets.push(Secret.fromPartial(e));
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

const baseCreateSecretRequest: object = {
    folderId: '',
    name: '',
    description: '',
    kmsKeyId: '',
    versionDescription: '',
    deletionProtection: false,
};

export const CreateSecretRequest = {
    encode(
        message: CreateSecretRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateSecretRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.kmsKeyId !== '') {
            writer.uint32(42).string(message.kmsKeyId);
        }
        if (message.versionDescription !== '') {
            writer.uint32(50).string(message.versionDescription);
        }
        for (const v of message.versionPayloadEntries) {
            PayloadEntryChange.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSecretRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSecretRequest } as CreateSecretRequest;
        message.labels = {};
        message.versionPayloadEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateSecretRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.kmsKeyId = reader.string();
                    break;
                case 6:
                    message.versionDescription = reader.string();
                    break;
                case 7:
                    message.versionPayloadEntries.push(
                        PayloadEntryChange.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSecretRequest {
        const message = { ...baseCreateSecretRequest } as CreateSecretRequest;
        message.labels = {};
        message.versionPayloadEntries = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.kmsKeyId !== undefined && object.kmsKeyId !== null) {
            message.kmsKeyId = String(object.kmsKeyId);
        } else {
            message.kmsKeyId = '';
        }
        if (
            object.versionDescription !== undefined &&
            object.versionDescription !== null
        ) {
            message.versionDescription = String(object.versionDescription);
        } else {
            message.versionDescription = '';
        }
        if (
            object.versionPayloadEntries !== undefined &&
            object.versionPayloadEntries !== null
        ) {
            for (const e of object.versionPayloadEntries) {
                message.versionPayloadEntries.push(
                    PayloadEntryChange.fromJSON(e)
                );
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
        }
        return message;
    },

    toJSON(message: CreateSecretRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.kmsKeyId !== undefined && (obj.kmsKeyId = message.kmsKeyId);
        message.versionDescription !== undefined &&
            (obj.versionDescription = message.versionDescription);
        if (message.versionPayloadEntries) {
            obj.versionPayloadEntries = message.versionPayloadEntries.map((e) =>
                e ? PayloadEntryChange.toJSON(e) : undefined
            );
        } else {
            obj.versionPayloadEntries = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateSecretRequest>): CreateSecretRequest {
        const message = { ...baseCreateSecretRequest } as CreateSecretRequest;
        message.labels = {};
        message.versionPayloadEntries = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.kmsKeyId !== undefined && object.kmsKeyId !== null) {
            message.kmsKeyId = object.kmsKeyId;
        } else {
            message.kmsKeyId = '';
        }
        if (
            object.versionDescription !== undefined &&
            object.versionDescription !== null
        ) {
            message.versionDescription = object.versionDescription;
        } else {
            message.versionDescription = '';
        }
        if (
            object.versionPayloadEntries !== undefined &&
            object.versionPayloadEntries !== null
        ) {
            for (const e of object.versionPayloadEntries) {
                message.versionPayloadEntries.push(
                    PayloadEntryChange.fromPartial(e)
                );
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        return message;
    },
};

const baseCreateSecretRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateSecretRequest_LabelsEntry = {
    encode(
        message: CreateSecretRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSecretRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecretRequest_LabelsEntry,
        } as CreateSecretRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSecretRequest_LabelsEntry {
        const message = {
            ...baseCreateSecretRequest_LabelsEntry,
        } as CreateSecretRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: CreateSecretRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSecretRequest_LabelsEntry>
    ): CreateSecretRequest_LabelsEntry {
        const message = {
            ...baseCreateSecretRequest_LabelsEntry,
        } as CreateSecretRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseCreateSecretMetadata: object = { secretId: '', versionId: '' };

export const CreateSecretMetadata = {
    encode(
        message: CreateSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSecretMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSecretMetadata } as CreateSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSecretMetadata {
        const message = { ...baseCreateSecretMetadata } as CreateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        return message;
    },

    toJSON(message: CreateSecretMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSecretMetadata>
    ): CreateSecretMetadata {
        const message = { ...baseCreateSecretMetadata } as CreateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        return message;
    },
};

const baseUpdateSecretRequest: object = {
    secretId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const UpdateSecretRequest = {
    encode(
        message: UpdateSecretRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateSecretRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecretRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSecretRequest } as UpdateSecretRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateSecretRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecretRequest {
        const message = { ...baseUpdateSecretRequest } as UpdateSecretRequest;
        message.labels = {};
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
        }
        return message;
    },

    toJSON(message: UpdateSecretRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateSecretRequest>): UpdateSecretRequest {
        const message = { ...baseUpdateSecretRequest } as UpdateSecretRequest;
        message.labels = {};
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        return message;
    },
};

const baseUpdateSecretRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateSecretRequest_LabelsEntry = {
    encode(
        message: UpdateSecretRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecretRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecretRequest_LabelsEntry,
        } as UpdateSecretRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecretRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecretRequest_LabelsEntry,
        } as UpdateSecretRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: UpdateSecretRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecretRequest_LabelsEntry>
    ): UpdateSecretRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecretRequest_LabelsEntry,
        } as UpdateSecretRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseUpdateSecretMetadata: object = { secretId: '' };

export const UpdateSecretMetadata = {
    encode(
        message: UpdateSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecretMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSecretMetadata } as UpdateSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecretMetadata {
        const message = { ...baseUpdateSecretMetadata } as UpdateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: UpdateSecretMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecretMetadata>
    ): UpdateSecretMetadata {
        const message = { ...baseUpdateSecretMetadata } as UpdateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseDeleteSecretRequest: object = { secretId: '' };

export const DeleteSecretRequest = {
    encode(
        message: DeleteSecretRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSecretRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSecretRequest } as DeleteSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSecretRequest {
        const message = { ...baseDeleteSecretRequest } as DeleteSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: DeleteSecretRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteSecretRequest>): DeleteSecretRequest {
        const message = { ...baseDeleteSecretRequest } as DeleteSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseDeleteSecretMetadata: object = { secretId: '' };

export const DeleteSecretMetadata = {
    encode(
        message: DeleteSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSecretMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSecretMetadata } as DeleteSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSecretMetadata {
        const message = { ...baseDeleteSecretMetadata } as DeleteSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: DeleteSecretMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteSecretMetadata>
    ): DeleteSecretMetadata {
        const message = { ...baseDeleteSecretMetadata } as DeleteSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseActivateSecretRequest: object = { secretId: '' };

export const ActivateSecretRequest = {
    encode(
        message: ActivateSecretRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ActivateSecretRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateSecretRequest,
        } as ActivateSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateSecretRequest {
        const message = {
            ...baseActivateSecretRequest,
        } as ActivateSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: ActivateSecretRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ActivateSecretRequest>
    ): ActivateSecretRequest {
        const message = {
            ...baseActivateSecretRequest,
        } as ActivateSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseActivateSecretMetadata: object = { secretId: '' };

export const ActivateSecretMetadata = {
    encode(
        message: ActivateSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ActivateSecretMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateSecretMetadata,
        } as ActivateSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateSecretMetadata {
        const message = {
            ...baseActivateSecretMetadata,
        } as ActivateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: ActivateSecretMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ActivateSecretMetadata>
    ): ActivateSecretMetadata {
        const message = {
            ...baseActivateSecretMetadata,
        } as ActivateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseDeactivateSecretRequest: object = { secretId: '' };

export const DeactivateSecretRequest = {
    encode(
        message: DeactivateSecretRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeactivateSecretRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeactivateSecretRequest,
        } as DeactivateSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateSecretRequest {
        const message = {
            ...baseDeactivateSecretRequest,
        } as DeactivateSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: DeactivateSecretRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeactivateSecretRequest>
    ): DeactivateSecretRequest {
        const message = {
            ...baseDeactivateSecretRequest,
        } as DeactivateSecretRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseDeactivateSecretMetadata: object = { secretId: '' };

export const DeactivateSecretMetadata = {
    encode(
        message: DeactivateSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeactivateSecretMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeactivateSecretMetadata,
        } as DeactivateSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateSecretMetadata {
        const message = {
            ...baseDeactivateSecretMetadata,
        } as DeactivateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        return message;
    },

    toJSON(message: DeactivateSecretMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeactivateSecretMetadata>
    ): DeactivateSecretMetadata {
        const message = {
            ...baseDeactivateSecretMetadata,
        } as DeactivateSecretMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        return message;
    },
};

const baseAddVersionRequest: object = {
    secretId: '',
    description: '',
    baseVersionId: '',
};

export const AddVersionRequest = {
    encode(
        message: AddVersionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.payloadEntries) {
            PayloadEntryChange.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.baseVersionId !== '') {
            writer.uint32(34).string(message.baseVersionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddVersionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddVersionRequest } as AddVersionRequest;
        message.payloadEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.payloadEntries.push(
                        PayloadEntryChange.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.baseVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddVersionRequest {
        const message = { ...baseAddVersionRequest } as AddVersionRequest;
        message.payloadEntries = [];
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (
            object.payloadEntries !== undefined &&
            object.payloadEntries !== null
        ) {
            for (const e of object.payloadEntries) {
                message.payloadEntries.push(PayloadEntryChange.fromJSON(e));
            }
        }
        if (
            object.baseVersionId !== undefined &&
            object.baseVersionId !== null
        ) {
            message.baseVersionId = String(object.baseVersionId);
        } else {
            message.baseVersionId = '';
        }
        return message;
    },

    toJSON(message: AddVersionRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.payloadEntries) {
            obj.payloadEntries = message.payloadEntries.map((e) =>
                e ? PayloadEntryChange.toJSON(e) : undefined
            );
        } else {
            obj.payloadEntries = [];
        }
        message.baseVersionId !== undefined &&
            (obj.baseVersionId = message.baseVersionId);
        return obj;
    },

    fromPartial(object: DeepPartial<AddVersionRequest>): AddVersionRequest {
        const message = { ...baseAddVersionRequest } as AddVersionRequest;
        message.payloadEntries = [];
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (
            object.payloadEntries !== undefined &&
            object.payloadEntries !== null
        ) {
            for (const e of object.payloadEntries) {
                message.payloadEntries.push(PayloadEntryChange.fromPartial(e));
            }
        }
        if (
            object.baseVersionId !== undefined &&
            object.baseVersionId !== null
        ) {
            message.baseVersionId = object.baseVersionId;
        } else {
            message.baseVersionId = '';
        }
        return message;
    },
};

const baseAddVersionMetadata: object = { secretId: '', versionId: '' };

export const AddVersionMetadata = {
    encode(
        message: AddVersionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddVersionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddVersionMetadata } as AddVersionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddVersionMetadata {
        const message = { ...baseAddVersionMetadata } as AddVersionMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        return message;
    },

    toJSON(message: AddVersionMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial(object: DeepPartial<AddVersionMetadata>): AddVersionMetadata {
        const message = { ...baseAddVersionMetadata } as AddVersionMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        return message;
    },
};

const baseListVersionsRequest: object = {
    secretId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListVersionsRequest = {
    encode(
        message: ListVersionsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
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
    ): ListVersionsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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

    fromJSON(object: any): ListVersionsRequest {
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
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

    toJSON(message: ListVersionsRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
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

const baseListVersionsResponse: object = { nextPageToken: '' };

export const ListVersionsResponse = {
    encode(
        message: ListVersionsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.versions) {
            Version.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListVersionsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(
                        Version.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListVersionsResponse {
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.versions = [];
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(Version.fromJSON(e));
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

    toJSON(message: ListVersionsResponse): unknown {
        const obj: any = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) =>
                e ? Version.toJSON(e) : undefined
            );
        } else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVersionsResponse>
    ): ListVersionsResponse {
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.versions = [];
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(Version.fromPartial(e));
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

const baseScheduleVersionDestructionRequest: object = {
    secretId: '',
    versionId: '',
};

export const ScheduleVersionDestructionRequest = {
    encode(
        message: ScheduleVersionDestructionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.pendingPeriod !== undefined) {
            Duration.encode(
                message.pendingPeriod,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScheduleVersionDestructionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScheduleVersionDestructionRequest,
        } as ScheduleVersionDestructionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.pendingPeriod = Duration.decode(
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

    fromJSON(object: any): ScheduleVersionDestructionRequest {
        const message = {
            ...baseScheduleVersionDestructionRequest,
        } as ScheduleVersionDestructionRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (
            object.pendingPeriod !== undefined &&
            object.pendingPeriod !== null
        ) {
            message.pendingPeriod = Duration.fromJSON(object.pendingPeriod);
        } else {
            message.pendingPeriod = undefined;
        }
        return message;
    },

    toJSON(message: ScheduleVersionDestructionRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.pendingPeriod !== undefined &&
            (obj.pendingPeriod = message.pendingPeriod
                ? Duration.toJSON(message.pendingPeriod)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScheduleVersionDestructionRequest>
    ): ScheduleVersionDestructionRequest {
        const message = {
            ...baseScheduleVersionDestructionRequest,
        } as ScheduleVersionDestructionRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (
            object.pendingPeriod !== undefined &&
            object.pendingPeriod !== null
        ) {
            message.pendingPeriod = Duration.fromPartial(object.pendingPeriod);
        } else {
            message.pendingPeriod = undefined;
        }
        return message;
    },
};

const baseScheduleVersionDestructionMetadata: object = {
    secretId: '',
    versionId: '',
};

export const ScheduleVersionDestructionMetadata = {
    encode(
        message: ScheduleVersionDestructionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.destroyAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.destroyAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScheduleVersionDestructionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScheduleVersionDestructionMetadata,
        } as ScheduleVersionDestructionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.destroyAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScheduleVersionDestructionMetadata {
        const message = {
            ...baseScheduleVersionDestructionMetadata,
        } as ScheduleVersionDestructionMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = fromJsonTimestamp(object.destroyAt);
        } else {
            message.destroyAt = undefined;
        }
        return message;
    },

    toJSON(message: ScheduleVersionDestructionMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScheduleVersionDestructionMetadata>
    ): ScheduleVersionDestructionMetadata {
        const message = {
            ...baseScheduleVersionDestructionMetadata,
        } as ScheduleVersionDestructionMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = object.destroyAt;
        } else {
            message.destroyAt = undefined;
        }
        return message;
    },
};

const baseCancelVersionDestructionRequest: object = {
    secretId: '',
    versionId: '',
};

export const CancelVersionDestructionRequest = {
    encode(
        message: CancelVersionDestructionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CancelVersionDestructionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelVersionDestructionRequest,
        } as CancelVersionDestructionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelVersionDestructionRequest {
        const message = {
            ...baseCancelVersionDestructionRequest,
        } as CancelVersionDestructionRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        return message;
    },

    toJSON(message: CancelVersionDestructionRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CancelVersionDestructionRequest>
    ): CancelVersionDestructionRequest {
        const message = {
            ...baseCancelVersionDestructionRequest,
        } as CancelVersionDestructionRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        return message;
    },
};

const baseCancelVersionDestructionMetadata: object = {
    secretId: '',
    versionId: '',
};

export const CancelVersionDestructionMetadata = {
    encode(
        message: CancelVersionDestructionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CancelVersionDestructionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelVersionDestructionMetadata,
        } as CancelVersionDestructionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelVersionDestructionMetadata {
        const message = {
            ...baseCancelVersionDestructionMetadata,
        } as CancelVersionDestructionMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        return message;
    },

    toJSON(message: CancelVersionDestructionMetadata): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CancelVersionDestructionMetadata>
    ): CancelVersionDestructionMetadata {
        const message = {
            ...baseCancelVersionDestructionMetadata,
        } as CancelVersionDestructionMetadata;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        return message;
    },
};

const baseListSecretOperationsRequest: object = {
    secretId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSecretOperationsRequest = {
    encode(
        message: ListSecretOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
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
    ): ListSecretOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSecretOperationsRequest,
        } as ListSecretOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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

    fromJSON(object: any): ListSecretOperationsRequest {
        const message = {
            ...baseListSecretOperationsRequest,
        } as ListSecretOperationsRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
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

    toJSON(message: ListSecretOperationsRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSecretOperationsRequest>
    ): ListSecretOperationsRequest {
        const message = {
            ...baseListSecretOperationsRequest,
        } as ListSecretOperationsRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
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

const baseListSecretOperationsResponse: object = { nextPageToken: '' };

export const ListSecretOperationsResponse = {
    encode(
        message: ListSecretOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSecretOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSecretOperationsResponse,
        } as ListSecretOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(
                        Operation.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListSecretOperationsResponse {
        const message = {
            ...baseListSecretOperationsResponse,
        } as ListSecretOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromJSON(e));
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

    toJSON(message: ListSecretOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) =>
                e ? Operation.toJSON(e) : undefined
            );
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSecretOperationsResponse>
    ): ListSecretOperationsResponse {
        const message = {
            ...baseListSecretOperationsResponse,
        } as ListSecretOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromPartial(e));
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

/** A set of methods for managing secrets. */
export const SecretServiceService = {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSecretRequest) =>
            Buffer.from(GetSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSecretRequest.decode(value),
        responseSerialize: (value: Secret) =>
            Buffer.from(Secret.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Secret.decode(value),
    },
    /** Retrieves the list of secrets in the specified folder. */
    list: {
        path: '/yandex.cloud.lockbox.v1.SecretService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSecretsRequest) =>
            Buffer.from(ListSecretsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSecretsRequest.decode(value),
        responseSerialize: (value: ListSecretsResponse) =>
            Buffer.from(ListSecretsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSecretsResponse.decode(value),
    },
    /** Creates a secret in the specified folder. */
    create: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSecretRequest) =>
            Buffer.from(CreateSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateSecretRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified secret. */
    update: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSecretRequest) =>
            Buffer.from(UpdateSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSecretRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified secret. */
    delete: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSecretRequest) =>
            Buffer.from(DeleteSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteSecretRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Activates the specified secret. */
    activate: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateSecretRequest) =>
            Buffer.from(ActivateSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ActivateSecretRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deactivates the specified secret. */
    deactivate: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Deactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeactivateSecretRequest) =>
            Buffer.from(DeactivateSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeactivateSecretRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of versions of the specified secret. */
    listVersions: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ListVersions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVersionsRequest) =>
            Buffer.from(ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListVersionsRequest.decode(value),
        responseSerialize: (value: ListVersionsResponse) =>
            Buffer.from(ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListVersionsResponse.decode(value),
    },
    /** Adds new version based on a previous one. */
    addVersion: {
        path: '/yandex.cloud.lockbox.v1.SecretService/AddVersion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddVersionRequest) =>
            Buffer.from(AddVersionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddVersionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ScheduleVersionDestructionRequest) =>
            Buffer.from(
                ScheduleVersionDestructionRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ScheduleVersionDestructionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: {
        path: '/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CancelVersionDestructionRequest) =>
            Buffer.from(CancelVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CancelVersionDestructionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified secret. */
    listOperations: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSecretOperationsRequest) =>
            Buffer.from(ListSecretOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListSecretOperationsRequest.decode(value),
        responseSerialize: (value: ListSecretOperationsResponse) =>
            Buffer.from(ListSecretOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSecretOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the secret. */
    setAccessBindings: {
        path: '/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the secret. */
    updateAccessBindings: {
        path: '/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

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
    scheduleVersionDestruction: handleUnaryCall<
        ScheduleVersionDestructionRequest,
        Operation
    >;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: handleUnaryCall<
        CancelVersionDestructionRequest,
        Operation
    >;
    /** Lists operations for the specified secret. */
    listOperations: handleUnaryCall<
        ListSecretOperationsRequest,
        ListSecretOperationsResponse
    >;
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the secret. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the secret. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface SecretServiceClient extends Client {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get(
        request: GetSecretRequest,
        callback: (error: ServiceError | null, response: Secret) => void
    ): ClientUnaryCall;
    get(
        request: GetSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Secret) => void
    ): ClientUnaryCall;
    get(
        request: GetSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Secret) => void
    ): ClientUnaryCall;
    /** Retrieves the list of secrets in the specified folder. */
    list(
        request: ListSecretsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSecretsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSecretsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSecretsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSecretsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSecretsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a secret in the specified folder. */
    create(
        request: CreateSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified secret. */
    update(
        request: UpdateSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified secret. */
    delete(
        request: DeleteSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Activates the specified secret. */
    activate(
        request: ActivateSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    activate(
        request: ActivateSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    activate(
        request: ActivateSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deactivates the specified secret. */
    deactivate(
        request: DeactivateSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of versions of the specified secret. */
    listVersions(
        request: ListVersionsRequest,
        callback: (
            error: ServiceError | null,
            response: ListVersionsResponse
        ) => void
    ): ClientUnaryCall;
    listVersions(
        request: ListVersionsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListVersionsResponse
        ) => void
    ): ClientUnaryCall;
    listVersions(
        request: ListVersionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListVersionsResponse
        ) => void
    ): ClientUnaryCall;
    /** Adds new version based on a previous one. */
    addVersion(
        request: AddVersionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addVersion(
        request: AddVersionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addVersion(
        request: AddVersionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction(
        request: ScheduleVersionDestructionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    scheduleVersionDestruction(
        request: ScheduleVersionDestructionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    scheduleVersionDestruction(
        request: ScheduleVersionDestructionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction(
        request: CancelVersionDestructionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    cancelVersionDestruction(
        request: CancelVersionDestructionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    cancelVersionDestruction(
        request: CancelVersionDestructionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified secret. */
    listOperations(
        request: ListSecretOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSecretOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSecretOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSecretOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSecretOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSecretOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    /** Sets access bindings for the secret. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates access bindings for the secret. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const SecretServiceClient = makeGenericClientConstructor(
    SecretServiceService,
    'yandex.cloud.lockbox.v1.SecretService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): SecretServiceClient;
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

const atob: (b64: string) => string =
    globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
