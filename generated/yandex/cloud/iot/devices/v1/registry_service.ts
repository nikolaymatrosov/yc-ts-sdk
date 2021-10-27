/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    Registry,
    RegistryCertificate,
    RegistryPassword,
    DeviceAlias,
} from '../../../../../yandex/cloud/iot/devices/v1/registry';
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

export const protobufPackage = 'yandex.cloud.iot.devices.v1';

export interface GetRegistryRequest {
    /**
     * ID of the registry to return.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface GetByNameRegistryRequest {
    /**
     * ID of the folder to list registries in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the registry to return.
     *
     * To get a registry Name make a [RegistryService.List] request.
     */
    registryName: string;
}

export interface ListRegistriesRequest {
    /**
     * ID of the folder to list registries in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListRegistriesResponse {
    /** List of registries. */
    registries: Registry[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListRegistriesRequest.page_size], use `next_page_token` as the value
     * for the [ListRegistriesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateRegistryRequest {
    /**
     * ID of the folder to create a registry in.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the registry. The name must be unique within the folder. */
    name: string;
    /** Description of the registry. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Registry certificates. */
    certificates: CreateRegistryRequest_Certificate[];
    /**
     * Registry passwords.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}

export interface CreateRegistryRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Specification of a registry certificate. */
export interface CreateRegistryRequest_Certificate {
    /** Public part of the registry certificate. */
    certificateData: string;
}

export interface CreateRegistryMetadata {
    /** ID of the registry that is being created. */
    registryId: string;
}

export interface UpdateRegistryRequest {
    /**
     * ID of the registry to update.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** Field mask that specifies which fields of the registry are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the registry. The name must be unique within the folder. */
    name: string;
    /** Description of the registry. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdateRegistryRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateRegistryMetadata {
    /** ID of the registry that is being updated. */
    registryId: string;
}

export interface DeleteRegistryRequest {
    /**
     * ID of the registry to delete.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface DeleteRegistryMetadata {
    /** ID of the registry that is being deleted. */
    registryId: string;
}

export interface ListRegistryCertificatesRequest {
    /** ID of the registry to list certificates for. */
    registryId: string;
}

export interface ListRegistryCertificatesResponse {
    /** List of certificates for the specified registry. */
    certificates: RegistryCertificate[];
}

export interface AddRegistryCertificateRequest {
    /**
     * ID of the registry for which the certificate is being added.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** Public part of the certificate that is being added. */
    certificateData: string;
}

export interface AddRegistryCertificateMetadata {
    /** ID of the registry certificate that is being added. */
    registryId: string;
    /** Fingerprint of the certificate that is being added. */
    fingerprint: string;
}

export interface DeleteRegistryCertificateRequest {
    /**
     * ID of the registry to delete a certificate for.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** Fingerprint of the certificate that is being deleted. */
    fingerprint: string;
}

export interface DeleteRegistryCertificateMetadata {
    /** ID of a registry for which the certificate is being delete. */
    registryId: string;
    /** Fingerprint of the certificate to deleted. */
    fingerprint: string;
}

export interface ListRegistryPasswordsRequest {
    /**
     * ID of the registry to list passwords in.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface ListRegistryPasswordsResponse {
    /** List of passwords for the specified registry. */
    passwords: RegistryPassword[];
}

export interface AddRegistryPasswordRequest {
    /**
     * ID of the registry to add a password for.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * Passwords for the registry.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}

export interface AddRegistryPasswordMetadata {
    /** ID of the registry for which the password is being added. */
    registryId: string;
    /** ID of a password that is being added. */
    passwordId: string;
}

export interface DeleteRegistryPasswordRequest {
    /**
     * ID of the registry to delete a password for.
     *
     * To get a registry ID make a [DeviceService.List] request.
     */
    registryId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [RegistryService.ListPasswords] request.
     */
    passwordId: string;
}

export interface DeleteRegistryPasswordMetadata {
    /** ID of a registry for which the password is being delete. */
    registryId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [RegistryService.ListPasswords] request.
     */
    passwordId: string;
}

export interface ListDeviceTopicAliasesRequest {
    /**
     * ID of the registry to list aliases for device topic.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListDeviceTopicAliasesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDeviceTopicAliasesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDeviceTopicAliasesResponse {
    /** List of device aliases for the specified registry. */
    aliases: DeviceAlias[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDeviceTopicAliasesRequest.page_size], use `next_page_token` as the value
     * for the [ListDeviceTopicAliasesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListRegistryOperationsRequest {
    /** ID of the registry to list operations for. */
    registryId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListRegistryOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListRegistryOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Registry.name] field.
     */
    filter: string;
}

export interface ListRegistryOperationsResponse {
    /** List of operations for the specified registry. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListRegistryOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListRegistryOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetRegistryRequest: object = { registryId: '' };

export const GetRegistryRequest = {
    encode(
        message: GetRegistryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetRegistryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegistryRequest {
        const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: GetRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetRegistryRequest>): GetRegistryRequest {
        const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseGetByNameRegistryRequest: object = { folderId: '', registryName: '' };

export const GetByNameRegistryRequest = {
    encode(
        message: GetByNameRegistryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.registryName !== '') {
            writer.uint32(18).string(message.registryName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetByNameRegistryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetByNameRegistryRequest,
        } as GetByNameRegistryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.registryName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetByNameRegistryRequest {
        const message = {
            ...baseGetByNameRegistryRequest,
        } as GetByNameRegistryRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.registryName !== undefined && object.registryName !== null) {
            message.registryName = String(object.registryName);
        } else {
            message.registryName = '';
        }
        return message;
    },

    toJSON(message: GetByNameRegistryRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.registryName !== undefined &&
            (obj.registryName = message.registryName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetByNameRegistryRequest>
    ): GetByNameRegistryRequest {
        const message = {
            ...baseGetByNameRegistryRequest,
        } as GetByNameRegistryRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.registryName !== undefined && object.registryName !== null) {
            message.registryName = object.registryName;
        } else {
            message.registryName = '';
        }
        return message;
    },
};

const baseListRegistriesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListRegistriesRequest = {
    encode(
        message: ListRegistriesRequest,
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
    ): ListRegistriesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistriesRequest,
        } as ListRegistriesRequest;
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

    fromJSON(object: any): ListRegistriesRequest {
        const message = {
            ...baseListRegistriesRequest,
        } as ListRegistriesRequest;
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

    toJSON(message: ListRegistriesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistriesRequest>
    ): ListRegistriesRequest {
        const message = {
            ...baseListRegistriesRequest,
        } as ListRegistriesRequest;
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

const baseListRegistriesResponse: object = { nextPageToken: '' };

export const ListRegistriesResponse = {
    encode(
        message: ListRegistriesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.registries) {
            Registry.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRegistriesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistriesResponse,
        } as ListRegistriesResponse;
        message.registries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registries.push(
                        Registry.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListRegistriesResponse {
        const message = {
            ...baseListRegistriesResponse,
        } as ListRegistriesResponse;
        message.registries = [];
        if (object.registries !== undefined && object.registries !== null) {
            for (const e of object.registries) {
                message.registries.push(Registry.fromJSON(e));
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

    toJSON(message: ListRegistriesResponse): unknown {
        const obj: any = {};
        if (message.registries) {
            obj.registries = message.registries.map((e) =>
                e ? Registry.toJSON(e) : undefined
            );
        } else {
            obj.registries = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistriesResponse>
    ): ListRegistriesResponse {
        const message = {
            ...baseListRegistriesResponse,
        } as ListRegistriesResponse;
        message.registries = [];
        if (object.registries !== undefined && object.registries !== null) {
            for (const e of object.registries) {
                message.registries.push(Registry.fromPartial(e));
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

const baseCreateRegistryRequest: object = {
    folderId: '',
    name: '',
    description: '',
    password: '',
};

export const CreateRegistryRequest = {
    encode(
        message: CreateRegistryRequest,
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
            CreateRegistryRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        for (const v of message.certificates) {
            CreateRegistryRequest_Certificate.encode(
                v!,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateRegistryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest,
        } as CreateRegistryRequest;
        message.labels = {};
        message.certificates = [];
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
                    const entry4 = CreateRegistryRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.certificates.push(
                        CreateRegistryRequest_Certificate.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegistryRequest {
        const message = {
            ...baseCreateRegistryRequest,
        } as CreateRegistryRequest;
        message.labels = {};
        message.certificates = [];
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(
                    CreateRegistryRequest_Certificate.fromJSON(e)
                );
            }
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(message: CreateRegistryRequest): unknown {
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
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? CreateRegistryRequest_Certificate.toJSON(e) : undefined
            );
        } else {
            obj.certificates = [];
        }
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRegistryRequest>
    ): CreateRegistryRequest {
        const message = {
            ...baseCreateRegistryRequest,
        } as CreateRegistryRequest;
        message.labels = {};
        message.certificates = [];
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(
                    CreateRegistryRequest_Certificate.fromPartial(e)
                );
            }
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

const baseCreateRegistryRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateRegistryRequest_LabelsEntry = {
    encode(
        message: CreateRegistryRequest_LabelsEntry,
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
    ): CreateRegistryRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest_LabelsEntry,
        } as CreateRegistryRequest_LabelsEntry;
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

    fromJSON(object: any): CreateRegistryRequest_LabelsEntry {
        const message = {
            ...baseCreateRegistryRequest_LabelsEntry,
        } as CreateRegistryRequest_LabelsEntry;
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

    toJSON(message: CreateRegistryRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRegistryRequest_LabelsEntry>
    ): CreateRegistryRequest_LabelsEntry {
        const message = {
            ...baseCreateRegistryRequest_LabelsEntry,
        } as CreateRegistryRequest_LabelsEntry;
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

const baseCreateRegistryRequest_Certificate: object = { certificateData: '' };

export const CreateRegistryRequest_Certificate = {
    encode(
        message: CreateRegistryRequest_Certificate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateData !== '') {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateRegistryRequest_Certificate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest_Certificate,
        } as CreateRegistryRequest_Certificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegistryRequest_Certificate {
        const message = {
            ...baseCreateRegistryRequest_Certificate,
        } as CreateRegistryRequest_Certificate;
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = String(object.certificateData);
        } else {
            message.certificateData = '';
        }
        return message;
    },

    toJSON(message: CreateRegistryRequest_Certificate): unknown {
        const obj: any = {};
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRegistryRequest_Certificate>
    ): CreateRegistryRequest_Certificate {
        const message = {
            ...baseCreateRegistryRequest_Certificate,
        } as CreateRegistryRequest_Certificate;
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = object.certificateData;
        } else {
            message.certificateData = '';
        }
        return message;
    },
};

const baseCreateRegistryMetadata: object = { registryId: '' };

export const CreateRegistryMetadata = {
    encode(
        message: CreateRegistryMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateRegistryMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryMetadata,
        } as CreateRegistryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegistryMetadata {
        const message = {
            ...baseCreateRegistryMetadata,
        } as CreateRegistryMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: CreateRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRegistryMetadata>
    ): CreateRegistryMetadata {
        const message = {
            ...baseCreateRegistryMetadata,
        } as CreateRegistryMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseUpdateRegistryRequest: object = {
    registryId: '',
    name: '',
    description: '',
};

export const UpdateRegistryRequest = {
    encode(
        message: UpdateRegistryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            UpdateRegistryRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRegistryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryRequest,
        } as UpdateRegistryRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
                    const entry5 = UpdateRegistryRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRegistryRequest {
        const message = {
            ...baseUpdateRegistryRequest,
        } as UpdateRegistryRequest;
        message.labels = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
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
        return message;
    },

    toJSON(message: UpdateRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRegistryRequest>
    ): UpdateRegistryRequest {
        const message = {
            ...baseUpdateRegistryRequest,
        } as UpdateRegistryRequest;
        message.labels = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
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
        return message;
    },
};

const baseUpdateRegistryRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateRegistryRequest_LabelsEntry = {
    encode(
        message: UpdateRegistryRequest_LabelsEntry,
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
    ): UpdateRegistryRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryRequest_LabelsEntry,
        } as UpdateRegistryRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateRegistryRequest_LabelsEntry {
        const message = {
            ...baseUpdateRegistryRequest_LabelsEntry,
        } as UpdateRegistryRequest_LabelsEntry;
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

    toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRegistryRequest_LabelsEntry>
    ): UpdateRegistryRequest_LabelsEntry {
        const message = {
            ...baseUpdateRegistryRequest_LabelsEntry,
        } as UpdateRegistryRequest_LabelsEntry;
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

const baseUpdateRegistryMetadata: object = { registryId: '' };

export const UpdateRegistryMetadata = {
    encode(
        message: UpdateRegistryMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRegistryMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryMetadata,
        } as UpdateRegistryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRegistryMetadata {
        const message = {
            ...baseUpdateRegistryMetadata,
        } as UpdateRegistryMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: UpdateRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRegistryMetadata>
    ): UpdateRegistryMetadata {
        const message = {
            ...baseUpdateRegistryMetadata,
        } as UpdateRegistryMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseDeleteRegistryRequest: object = { registryId: '' };

export const DeleteRegistryRequest = {
    encode(
        message: DeleteRegistryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRegistryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryRequest,
        } as DeleteRegistryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryRequest {
        const message = {
            ...baseDeleteRegistryRequest,
        } as DeleteRegistryRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: DeleteRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRegistryRequest>
    ): DeleteRegistryRequest {
        const message = {
            ...baseDeleteRegistryRequest,
        } as DeleteRegistryRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseDeleteRegistryMetadata: object = { registryId: '' };

export const DeleteRegistryMetadata = {
    encode(
        message: DeleteRegistryMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRegistryMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryMetadata,
        } as DeleteRegistryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryMetadata {
        const message = {
            ...baseDeleteRegistryMetadata,
        } as DeleteRegistryMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: DeleteRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRegistryMetadata>
    ): DeleteRegistryMetadata {
        const message = {
            ...baseDeleteRegistryMetadata,
        } as DeleteRegistryMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseListRegistryCertificatesRequest: object = { registryId: '' };

export const ListRegistryCertificatesRequest = {
    encode(
        message: ListRegistryCertificatesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRegistryCertificatesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryCertificatesRequest,
        } as ListRegistryCertificatesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegistryCertificatesRequest {
        const message = {
            ...baseListRegistryCertificatesRequest,
        } as ListRegistryCertificatesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: ListRegistryCertificatesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistryCertificatesRequest>
    ): ListRegistryCertificatesRequest {
        const message = {
            ...baseListRegistryCertificatesRequest,
        } as ListRegistryCertificatesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseListRegistryCertificatesResponse: object = {};

export const ListRegistryCertificatesResponse = {
    encode(
        message: ListRegistryCertificatesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.certificates) {
            RegistryCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRegistryCertificatesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryCertificatesResponse,
        } as ListRegistryCertificatesResponse;
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(
                        RegistryCertificate.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegistryCertificatesResponse {
        const message = {
            ...baseListRegistryCertificatesResponse,
        } as ListRegistryCertificatesResponse;
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(RegistryCertificate.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListRegistryCertificatesResponse): unknown {
        const obj: any = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? RegistryCertificate.toJSON(e) : undefined
            );
        } else {
            obj.certificates = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistryCertificatesResponse>
    ): ListRegistryCertificatesResponse {
        const message = {
            ...baseListRegistryCertificatesResponse,
        } as ListRegistryCertificatesResponse;
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(RegistryCertificate.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddRegistryCertificateRequest: object = {
    registryId: '',
    certificateData: '',
};

export const AddRegistryCertificateRequest = {
    encode(
        message: AddRegistryCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddRegistryCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddRegistryCertificateRequest,
        } as AddRegistryCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryCertificateRequest {
        const message = {
            ...baseAddRegistryCertificateRequest,
        } as AddRegistryCertificateRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = String(object.certificateData);
        } else {
            message.certificateData = '';
        }
        return message;
    },

    toJSON(message: AddRegistryCertificateRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddRegistryCertificateRequest>
    ): AddRegistryCertificateRequest {
        const message = {
            ...baseAddRegistryCertificateRequest,
        } as AddRegistryCertificateRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = object.certificateData;
        } else {
            message.certificateData = '';
        }
        return message;
    },
};

const baseAddRegistryCertificateMetadata: object = {
    registryId: '',
    fingerprint: '',
};

export const AddRegistryCertificateMetadata = {
    encode(
        message: AddRegistryCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddRegistryCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddRegistryCertificateMetadata,
        } as AddRegistryCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryCertificateMetadata {
        const message = {
            ...baseAddRegistryCertificateMetadata,
        } as AddRegistryCertificateMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        return message;
    },

    toJSON(message: AddRegistryCertificateMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddRegistryCertificateMetadata>
    ): AddRegistryCertificateMetadata {
        const message = {
            ...baseAddRegistryCertificateMetadata,
        } as AddRegistryCertificateMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        return message;
    },
};

const baseDeleteRegistryCertificateRequest: object = {
    registryId: '',
    fingerprint: '',
};

export const DeleteRegistryCertificateRequest = {
    encode(
        message: DeleteRegistryCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRegistryCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        } as DeleteRegistryCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryCertificateRequest {
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        } as DeleteRegistryCertificateRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        return message;
    },

    toJSON(message: DeleteRegistryCertificateRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRegistryCertificateRequest>
    ): DeleteRegistryCertificateRequest {
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        } as DeleteRegistryCertificateRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        return message;
    },
};

const baseDeleteRegistryCertificateMetadata: object = {
    registryId: '',
    fingerprint: '',
};

export const DeleteRegistryCertificateMetadata = {
    encode(
        message: DeleteRegistryCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRegistryCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        } as DeleteRegistryCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryCertificateMetadata {
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        } as DeleteRegistryCertificateMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        return message;
    },

    toJSON(message: DeleteRegistryCertificateMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRegistryCertificateMetadata>
    ): DeleteRegistryCertificateMetadata {
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        } as DeleteRegistryCertificateMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        return message;
    },
};

const baseListRegistryPasswordsRequest: object = { registryId: '' };

export const ListRegistryPasswordsRequest = {
    encode(
        message: ListRegistryPasswordsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRegistryPasswordsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryPasswordsRequest,
        } as ListRegistryPasswordsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegistryPasswordsRequest {
        const message = {
            ...baseListRegistryPasswordsRequest,
        } as ListRegistryPasswordsRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        return message;
    },

    toJSON(message: ListRegistryPasswordsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistryPasswordsRequest>
    ): ListRegistryPasswordsRequest {
        const message = {
            ...baseListRegistryPasswordsRequest,
        } as ListRegistryPasswordsRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        return message;
    },
};

const baseListRegistryPasswordsResponse: object = {};

export const ListRegistryPasswordsResponse = {
    encode(
        message: ListRegistryPasswordsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.passwords) {
            RegistryPassword.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRegistryPasswordsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryPasswordsResponse,
        } as ListRegistryPasswordsResponse;
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(
                        RegistryPassword.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegistryPasswordsResponse {
        const message = {
            ...baseListRegistryPasswordsResponse,
        } as ListRegistryPasswordsResponse;
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(RegistryPassword.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListRegistryPasswordsResponse): unknown {
        const obj: any = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) =>
                e ? RegistryPassword.toJSON(e) : undefined
            );
        } else {
            obj.passwords = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistryPasswordsResponse>
    ): ListRegistryPasswordsResponse {
        const message = {
            ...baseListRegistryPasswordsResponse,
        } as ListRegistryPasswordsResponse;
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(RegistryPassword.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddRegistryPasswordRequest: object = { registryId: '', password: '' };

export const AddRegistryPasswordRequest = {
    encode(
        message: AddRegistryPasswordRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddRegistryPasswordRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddRegistryPasswordRequest,
        } as AddRegistryPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryPasswordRequest {
        const message = {
            ...baseAddRegistryPasswordRequest,
        } as AddRegistryPasswordRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(message: AddRegistryPasswordRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddRegistryPasswordRequest>
    ): AddRegistryPasswordRequest {
        const message = {
            ...baseAddRegistryPasswordRequest,
        } as AddRegistryPasswordRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

const baseAddRegistryPasswordMetadata: object = {
    registryId: '',
    passwordId: '',
};

export const AddRegistryPasswordMetadata = {
    encode(
        message: AddRegistryPasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddRegistryPasswordMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddRegistryPasswordMetadata,
        } as AddRegistryPasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryPasswordMetadata {
        const message = {
            ...baseAddRegistryPasswordMetadata,
        } as AddRegistryPasswordMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        } else {
            message.passwordId = '';
        }
        return message;
    },

    toJSON(message: AddRegistryPasswordMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddRegistryPasswordMetadata>
    ): AddRegistryPasswordMetadata {
        const message = {
            ...baseAddRegistryPasswordMetadata,
        } as AddRegistryPasswordMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        } else {
            message.passwordId = '';
        }
        return message;
    },
};

const baseDeleteRegistryPasswordRequest: object = {
    registryId: '',
    passwordId: '',
};

export const DeleteRegistryPasswordRequest = {
    encode(
        message: DeleteRegistryPasswordRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRegistryPasswordRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryPasswordRequest,
        } as DeleteRegistryPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryPasswordRequest {
        const message = {
            ...baseDeleteRegistryPasswordRequest,
        } as DeleteRegistryPasswordRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        } else {
            message.passwordId = '';
        }
        return message;
    },

    toJSON(message: DeleteRegistryPasswordRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRegistryPasswordRequest>
    ): DeleteRegistryPasswordRequest {
        const message = {
            ...baseDeleteRegistryPasswordRequest,
        } as DeleteRegistryPasswordRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        } else {
            message.passwordId = '';
        }
        return message;
    },
};

const baseDeleteRegistryPasswordMetadata: object = {
    registryId: '',
    passwordId: '',
};

export const DeleteRegistryPasswordMetadata = {
    encode(
        message: DeleteRegistryPasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRegistryPasswordMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryPasswordMetadata,
        } as DeleteRegistryPasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryPasswordMetadata {
        const message = {
            ...baseDeleteRegistryPasswordMetadata,
        } as DeleteRegistryPasswordMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        } else {
            message.passwordId = '';
        }
        return message;
    },

    toJSON(message: DeleteRegistryPasswordMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRegistryPasswordMetadata>
    ): DeleteRegistryPasswordMetadata {
        const message = {
            ...baseDeleteRegistryPasswordMetadata,
        } as DeleteRegistryPasswordMetadata;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        } else {
            message.passwordId = '';
        }
        return message;
    },
};

const baseListDeviceTopicAliasesRequest: object = {
    registryId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListDeviceTopicAliasesRequest = {
    encode(
        message: ListDeviceTopicAliasesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
    ): ListDeviceTopicAliasesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceTopicAliasesRequest,
        } as ListDeviceTopicAliasesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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

    fromJSON(object: any): ListDeviceTopicAliasesRequest {
        const message = {
            ...baseListDeviceTopicAliasesRequest,
        } as ListDeviceTopicAliasesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
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

    toJSON(message: ListDeviceTopicAliasesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDeviceTopicAliasesRequest>
    ): ListDeviceTopicAliasesRequest {
        const message = {
            ...baseListDeviceTopicAliasesRequest,
        } as ListDeviceTopicAliasesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
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

const baseListDeviceTopicAliasesResponse: object = { nextPageToken: '' };

export const ListDeviceTopicAliasesResponse = {
    encode(
        message: ListDeviceTopicAliasesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.aliases) {
            DeviceAlias.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDeviceTopicAliasesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceTopicAliasesResponse,
        } as ListDeviceTopicAliasesResponse;
        message.aliases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aliases.push(
                        DeviceAlias.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListDeviceTopicAliasesResponse {
        const message = {
            ...baseListDeviceTopicAliasesResponse,
        } as ListDeviceTopicAliasesResponse;
        message.aliases = [];
        if (object.aliases !== undefined && object.aliases !== null) {
            for (const e of object.aliases) {
                message.aliases.push(DeviceAlias.fromJSON(e));
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

    toJSON(message: ListDeviceTopicAliasesResponse): unknown {
        const obj: any = {};
        if (message.aliases) {
            obj.aliases = message.aliases.map((e) =>
                e ? DeviceAlias.toJSON(e) : undefined
            );
        } else {
            obj.aliases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDeviceTopicAliasesResponse>
    ): ListDeviceTopicAliasesResponse {
        const message = {
            ...baseListDeviceTopicAliasesResponse,
        } as ListDeviceTopicAliasesResponse;
        message.aliases = [];
        if (object.aliases !== undefined && object.aliases !== null) {
            for (const e of object.aliases) {
                message.aliases.push(DeviceAlias.fromPartial(e));
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

const baseListRegistryOperationsRequest: object = {
    registryId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRegistryOperationsRequest = {
    encode(
        message: ListRegistryOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRegistryOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryOperationsRequest,
        } as ListRegistryOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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

    fromJSON(object: any): ListRegistryOperationsRequest {
        const message = {
            ...baseListRegistryOperationsRequest,
        } as ListRegistryOperationsRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
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

    toJSON(message: ListRegistryOperationsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRegistryOperationsRequest>
    ): ListRegistryOperationsRequest {
        const message = {
            ...baseListRegistryOperationsRequest,
        } as ListRegistryOperationsRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
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

const baseListRegistryOperationsResponse: object = { nextPageToken: '' };

export const ListRegistryOperationsResponse = {
    encode(
        message: ListRegistryOperationsResponse,
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
    ): ListRegistryOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryOperationsResponse,
        } as ListRegistryOperationsResponse;
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

    fromJSON(object: any): ListRegistryOperationsResponse {
        const message = {
            ...baseListRegistryOperationsResponse,
        } as ListRegistryOperationsResponse;
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

    toJSON(message: ListRegistryOperationsResponse): unknown {
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
        object: DeepPartial<ListRegistryOperationsResponse>
    ): ListRegistryOperationsResponse {
        const message = {
            ...baseListRegistryOperationsResponse,
        } as ListRegistryOperationsResponse;
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

/** A set of methods for managing registry. */
export const RegistryServiceService = {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRegistryRequest) =>
            Buffer.from(GetRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRegistryRequest.decode(value),
        responseSerialize: (value: Registry) =>
            Buffer.from(Registry.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Registry.decode(value),
    },
    getByName: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetByNameRegistryRequest) =>
            Buffer.from(GetByNameRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetByNameRegistryRequest.decode(value),
        responseSerialize: (value: Registry) =>
            Buffer.from(Registry.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Registry.decode(value),
    },
    /** Retrieves the list of registries in the specified folder. */
    list: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistriesRequest) =>
            Buffer.from(ListRegistriesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRegistriesRequest.decode(value),
        responseSerialize: (value: ListRegistriesResponse) =>
            Buffer.from(ListRegistriesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListRegistriesResponse.decode(value),
    },
    /** Creates a registry in the specified folder. */
    create: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRegistryRequest) =>
            Buffer.from(CreateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateRegistryRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified registry. */
    update: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRegistryRequest) =>
            Buffer.from(UpdateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateRegistryRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified registry. */
    delete: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryRequest) =>
            Buffer.from(DeleteRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteRegistryRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistryCertificatesRequest) =>
            Buffer.from(ListRegistryCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRegistryCertificatesRequest.decode(value),
        responseSerialize: (value: ListRegistryCertificatesResponse) =>
            Buffer.from(
                ListRegistryCertificatesResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListRegistryCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddRegistryCertificateRequest) =>
            Buffer.from(AddRegistryCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AddRegistryCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified registry certificate. */
    deleteCertificate: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryCertificateRequest) =>
            Buffer.from(
                DeleteRegistryCertificateRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            DeleteRegistryCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistryPasswordsRequest) =>
            Buffer.from(ListRegistryPasswordsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRegistryPasswordsRequest.decode(value),
        responseSerialize: (value: ListRegistryPasswordsResponse) =>
            Buffer.from(ListRegistryPasswordsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListRegistryPasswordsResponse.decode(value),
    },
    /** Adds password for the specified registry. */
    addPassword: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddRegistryPasswordRequest) =>
            Buffer.from(AddRegistryPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AddRegistryPasswordRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryPasswordRequest) =>
            Buffer.from(DeleteRegistryPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteRegistryPasswordRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDeviceTopicAliasesRequest) =>
            Buffer.from(ListDeviceTopicAliasesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDeviceTopicAliasesRequest.decode(value),
        responseSerialize: (value: ListDeviceTopicAliasesResponse) =>
            Buffer.from(ListDeviceTopicAliasesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDeviceTopicAliasesResponse.decode(value),
    },
    /** Lists operations for the specified registry. */
    listOperations: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistryOperationsRequest) =>
            Buffer.from(ListRegistryOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRegistryOperationsRequest.decode(value),
        responseSerialize: (value: ListRegistryOperationsResponse) =>
            Buffer.from(ListRegistryOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListRegistryOperationsResponse.decode(value),
    },
} as const;

export interface RegistryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get: handleUnaryCall<GetRegistryRequest, Registry>;
    getByName: handleUnaryCall<GetByNameRegistryRequest, Registry>;
    /** Retrieves the list of registries in the specified folder. */
    list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
    /** Creates a registry in the specified folder. */
    create: handleUnaryCall<CreateRegistryRequest, Operation>;
    /** Updates the specified registry. */
    update: handleUnaryCall<UpdateRegistryRequest, Operation>;
    /** Deletes the specified registry. */
    delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates: handleUnaryCall<
        ListRegistryCertificatesRequest,
        ListRegistryCertificatesResponse
    >;
    /** Adds a certificate. */
    addCertificate: handleUnaryCall<AddRegistryCertificateRequest, Operation>;
    /** Deletes the specified registry certificate. */
    deleteCertificate: handleUnaryCall<
        DeleteRegistryCertificateRequest,
        Operation
    >;
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords: handleUnaryCall<
        ListRegistryPasswordsRequest,
        ListRegistryPasswordsResponse
    >;
    /** Adds password for the specified registry. */
    addPassword: handleUnaryCall<AddRegistryPasswordRequest, Operation>;
    /** Deletes the specified password. */
    deletePassword: handleUnaryCall<DeleteRegistryPasswordRequest, Operation>;
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases: handleUnaryCall<
        ListDeviceTopicAliasesRequest,
        ListDeviceTopicAliasesResponse
    >;
    /** Lists operations for the specified registry. */
    listOperations: handleUnaryCall<
        ListRegistryOperationsRequest,
        ListRegistryOperationsResponse
    >;
}

export interface RegistryServiceClient extends Client {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get(
        request: GetRegistryRequest,
        callback: (error: ServiceError | null, response: Registry) => void
    ): ClientUnaryCall;
    get(
        request: GetRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Registry) => void
    ): ClientUnaryCall;
    get(
        request: GetRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Registry) => void
    ): ClientUnaryCall;
    getByName(
        request: GetByNameRegistryRequest,
        callback: (error: ServiceError | null, response: Registry) => void
    ): ClientUnaryCall;
    getByName(
        request: GetByNameRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Registry) => void
    ): ClientUnaryCall;
    getByName(
        request: GetByNameRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Registry) => void
    ): ClientUnaryCall;
    /** Retrieves the list of registries in the specified folder. */
    list(
        request: ListRegistriesRequest,
        callback: (
            error: ServiceError | null,
            response: ListRegistriesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRegistriesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRegistriesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRegistriesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRegistriesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a registry in the specified folder. */
    create(
        request: CreateRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified registry. */
    update(
        request: UpdateRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified registry. */
    delete(
        request: DeleteRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates(
        request: ListRegistryCertificatesRequest,
        callback: (
            error: ServiceError | null,
            response: ListRegistryCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    listCertificates(
        request: ListRegistryCertificatesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRegistryCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    listCertificates(
        request: ListRegistryCertificatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRegistryCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    /** Adds a certificate. */
    addCertificate(
        request: AddRegistryCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addCertificate(
        request: AddRegistryCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addCertificate(
        request: AddRegistryCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified registry certificate. */
    deleteCertificate(
        request: DeleteRegistryCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteCertificate(
        request: DeleteRegistryCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteCertificate(
        request: DeleteRegistryCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords(
        request: ListRegistryPasswordsRequest,
        callback: (
            error: ServiceError | null,
            response: ListRegistryPasswordsResponse
        ) => void
    ): ClientUnaryCall;
    listPasswords(
        request: ListRegistryPasswordsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRegistryPasswordsResponse
        ) => void
    ): ClientUnaryCall;
    listPasswords(
        request: ListRegistryPasswordsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRegistryPasswordsResponse
        ) => void
    ): ClientUnaryCall;
    /** Adds password for the specified registry. */
    addPassword(
        request: AddRegistryPasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addPassword(
        request: AddRegistryPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addPassword(
        request: AddRegistryPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified password. */
    deletePassword(
        request: DeleteRegistryPasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deletePassword(
        request: DeleteRegistryPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deletePassword(
        request: DeleteRegistryPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases(
        request: ListDeviceTopicAliasesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDeviceTopicAliasesResponse
        ) => void
    ): ClientUnaryCall;
    listDeviceTopicAliases(
        request: ListDeviceTopicAliasesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDeviceTopicAliasesResponse
        ) => void
    ): ClientUnaryCall;
    listDeviceTopicAliases(
        request: ListDeviceTopicAliasesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDeviceTopicAliasesResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified registry. */
    listOperations(
        request: ListRegistryOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListRegistryOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListRegistryOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRegistryOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListRegistryOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRegistryOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const RegistryServiceClient = makeGenericClientConstructor(
    RegistryServiceService,
    'yandex.cloud.iot.devices.v1.RegistryService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): RegistryServiceClient;
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
