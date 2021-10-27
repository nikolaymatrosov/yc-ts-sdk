/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Registry, RegistryCertificate, RegistryPassword, DeviceAlias } from '../../../../../yandex/cloud/iot/devices/v1/registry';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
export interface GetRegistryRequest {
    $type: 'yandex.cloud.iot.devices.v1.GetRegistryRequest';
    /**
     * ID of the registry to return.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}
export interface GetByNameRegistryRequest {
    $type: 'yandex.cloud.iot.devices.v1.GetByNameRegistryRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.ListRegistriesRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.ListRegistriesResponse';
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
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest';
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
    labels: {
        [key: string]: string;
    };
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
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.LabelsEntry';
    key: string;
    value: string;
}
/** Specification of a registry certificate. */
export interface CreateRegistryRequest_Certificate {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.Certificate';
    /** Public part of the registry certificate. */
    certificateData: string;
}
export interface CreateRegistryMetadata {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryMetadata';
    /** ID of the registry that is being created. */
    registryId: string;
}
export interface UpdateRegistryRequest {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest';
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
    labels: {
        [key: string]: string;
    };
}
export interface UpdateRegistryRequest_LabelsEntry {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateRegistryMetadata {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryMetadata';
    /** ID of the registry that is being updated. */
    registryId: string;
}
export interface DeleteRegistryRequest {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryRequest';
    /**
     * ID of the registry to delete.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}
export interface DeleteRegistryMetadata {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryMetadata';
    /** ID of the registry that is being deleted. */
    registryId: string;
}
export interface ListRegistryCertificatesRequest {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryCertificatesRequest';
    /** ID of the registry to list certificates for. */
    registryId: string;
}
export interface ListRegistryCertificatesResponse {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryCertificatesResponse';
    /** List of certificates for the specified registry. */
    certificates: RegistryCertificate[];
}
export interface AddRegistryCertificateRequest {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryCertificateRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryCertificateMetadata';
    /** ID of the registry certificate that is being added. */
    registryId: string;
    /** Fingerprint of the certificate that is being added. */
    fingerprint: string;
}
export interface DeleteRegistryCertificateRequest {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryCertificateRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryCertificateMetadata';
    /** ID of a registry for which the certificate is being delete. */
    registryId: string;
    /** Fingerprint of the certificate to deleted. */
    fingerprint: string;
}
export interface ListRegistryPasswordsRequest {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryPasswordsRequest';
    /**
     * ID of the registry to list passwords in.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}
export interface ListRegistryPasswordsResponse {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryPasswordsResponse';
    /** List of passwords for the specified registry. */
    passwords: RegistryPassword[];
}
export interface AddRegistryPasswordRequest {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryPasswordRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryPasswordMetadata';
    /** ID of the registry for which the password is being added. */
    registryId: string;
    /** ID of a password that is being added. */
    passwordId: string;
}
export interface DeleteRegistryPasswordRequest {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryPasswordRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryPasswordMetadata';
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
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesResponse';
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
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryOperationsRequest';
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
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryOperationsResponse';
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
export declare const GetRegistryRequest: {
    $type: "yandex.cloud.iot.devices.v1.GetRegistryRequest";
    encode(message: GetRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRegistryRequest;
    fromJSON(object: any): GetRegistryRequest;
    toJSON(message: GetRegistryRequest): unknown;
    fromPartial(object: DeepPartial<GetRegistryRequest>): GetRegistryRequest;
};
export declare const GetByNameRegistryRequest: {
    $type: "yandex.cloud.iot.devices.v1.GetByNameRegistryRequest";
    encode(message: GetByNameRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetByNameRegistryRequest;
    fromJSON(object: any): GetByNameRegistryRequest;
    toJSON(message: GetByNameRegistryRequest): unknown;
    fromPartial(object: DeepPartial<GetByNameRegistryRequest>): GetByNameRegistryRequest;
};
export declare const ListRegistriesRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistriesRequest";
    encode(message: ListRegistriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistriesRequest;
    fromJSON(object: any): ListRegistriesRequest;
    toJSON(message: ListRegistriesRequest): unknown;
    fromPartial(object: DeepPartial<ListRegistriesRequest>): ListRegistriesRequest;
};
export declare const ListRegistriesResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistriesResponse";
    encode(message: ListRegistriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistriesResponse;
    fromJSON(object: any): ListRegistriesResponse;
    toJSON(message: ListRegistriesResponse): unknown;
    fromPartial(object: DeepPartial<ListRegistriesResponse>): ListRegistriesResponse;
};
export declare const CreateRegistryRequest: {
    $type: "yandex.cloud.iot.devices.v1.CreateRegistryRequest";
    encode(message: CreateRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest;
    fromJSON(object: any): CreateRegistryRequest;
    toJSON(message: CreateRegistryRequest): unknown;
    fromPartial(object: DeepPartial<CreateRegistryRequest>): CreateRegistryRequest;
};
export declare const CreateRegistryRequest_LabelsEntry: {
    $type: "yandex.cloud.iot.devices.v1.CreateRegistryRequest.LabelsEntry";
    encode(message: CreateRegistryRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest_LabelsEntry;
    fromJSON(object: any): CreateRegistryRequest_LabelsEntry;
    toJSON(message: CreateRegistryRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateRegistryRequest_LabelsEntry>): CreateRegistryRequest_LabelsEntry;
};
export declare const CreateRegistryRequest_Certificate: {
    $type: "yandex.cloud.iot.devices.v1.CreateRegistryRequest.Certificate";
    encode(message: CreateRegistryRequest_Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest_Certificate;
    fromJSON(object: any): CreateRegistryRequest_Certificate;
    toJSON(message: CreateRegistryRequest_Certificate): unknown;
    fromPartial(object: DeepPartial<CreateRegistryRequest_Certificate>): CreateRegistryRequest_Certificate;
};
export declare const CreateRegistryMetadata: {
    $type: "yandex.cloud.iot.devices.v1.CreateRegistryMetadata";
    encode(message: CreateRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryMetadata;
    fromJSON(object: any): CreateRegistryMetadata;
    toJSON(message: CreateRegistryMetadata): unknown;
    fromPartial(object: DeepPartial<CreateRegistryMetadata>): CreateRegistryMetadata;
};
export declare const UpdateRegistryRequest: {
    $type: "yandex.cloud.iot.devices.v1.UpdateRegistryRequest";
    encode(message: UpdateRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryRequest;
    fromJSON(object: any): UpdateRegistryRequest;
    toJSON(message: UpdateRegistryRequest): unknown;
    fromPartial(object: DeepPartial<UpdateRegistryRequest>): UpdateRegistryRequest;
};
export declare const UpdateRegistryRequest_LabelsEntry: {
    $type: "yandex.cloud.iot.devices.v1.UpdateRegistryRequest.LabelsEntry";
    encode(message: UpdateRegistryRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryRequest_LabelsEntry;
    fromJSON(object: any): UpdateRegistryRequest_LabelsEntry;
    toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateRegistryRequest_LabelsEntry>): UpdateRegistryRequest_LabelsEntry;
};
export declare const UpdateRegistryMetadata: {
    $type: "yandex.cloud.iot.devices.v1.UpdateRegistryMetadata";
    encode(message: UpdateRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryMetadata;
    fromJSON(object: any): UpdateRegistryMetadata;
    toJSON(message: UpdateRegistryMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateRegistryMetadata>): UpdateRegistryMetadata;
};
export declare const DeleteRegistryRequest: {
    $type: "yandex.cloud.iot.devices.v1.DeleteRegistryRequest";
    encode(message: DeleteRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryRequest;
    fromJSON(object: any): DeleteRegistryRequest;
    toJSON(message: DeleteRegistryRequest): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryRequest>): DeleteRegistryRequest;
};
export declare const DeleteRegistryMetadata: {
    $type: "yandex.cloud.iot.devices.v1.DeleteRegistryMetadata";
    encode(message: DeleteRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryMetadata;
    fromJSON(object: any): DeleteRegistryMetadata;
    toJSON(message: DeleteRegistryMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryMetadata>): DeleteRegistryMetadata;
};
export declare const ListRegistryCertificatesRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistryCertificatesRequest";
    encode(message: ListRegistryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistryCertificatesRequest;
    fromJSON(object: any): ListRegistryCertificatesRequest;
    toJSON(message: ListRegistryCertificatesRequest): unknown;
    fromPartial(object: DeepPartial<ListRegistryCertificatesRequest>): ListRegistryCertificatesRequest;
};
export declare const ListRegistryCertificatesResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistryCertificatesResponse";
    encode(message: ListRegistryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistryCertificatesResponse;
    fromJSON(object: any): ListRegistryCertificatesResponse;
    toJSON(message: ListRegistryCertificatesResponse): unknown;
    fromPartial(object: DeepPartial<ListRegistryCertificatesResponse>): ListRegistryCertificatesResponse;
};
export declare const AddRegistryCertificateRequest: {
    $type: "yandex.cloud.iot.devices.v1.AddRegistryCertificateRequest";
    encode(message: AddRegistryCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddRegistryCertificateRequest;
    fromJSON(object: any): AddRegistryCertificateRequest;
    toJSON(message: AddRegistryCertificateRequest): unknown;
    fromPartial(object: DeepPartial<AddRegistryCertificateRequest>): AddRegistryCertificateRequest;
};
export declare const AddRegistryCertificateMetadata: {
    $type: "yandex.cloud.iot.devices.v1.AddRegistryCertificateMetadata";
    encode(message: AddRegistryCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddRegistryCertificateMetadata;
    fromJSON(object: any): AddRegistryCertificateMetadata;
    toJSON(message: AddRegistryCertificateMetadata): unknown;
    fromPartial(object: DeepPartial<AddRegistryCertificateMetadata>): AddRegistryCertificateMetadata;
};
export declare const DeleteRegistryCertificateRequest: {
    $type: "yandex.cloud.iot.devices.v1.DeleteRegistryCertificateRequest";
    encode(message: DeleteRegistryCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryCertificateRequest;
    fromJSON(object: any): DeleteRegistryCertificateRequest;
    toJSON(message: DeleteRegistryCertificateRequest): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryCertificateRequest>): DeleteRegistryCertificateRequest;
};
export declare const DeleteRegistryCertificateMetadata: {
    $type: "yandex.cloud.iot.devices.v1.DeleteRegistryCertificateMetadata";
    encode(message: DeleteRegistryCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryCertificateMetadata;
    fromJSON(object: any): DeleteRegistryCertificateMetadata;
    toJSON(message: DeleteRegistryCertificateMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryCertificateMetadata>): DeleteRegistryCertificateMetadata;
};
export declare const ListRegistryPasswordsRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistryPasswordsRequest";
    encode(message: ListRegistryPasswordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistryPasswordsRequest;
    fromJSON(object: any): ListRegistryPasswordsRequest;
    toJSON(message: ListRegistryPasswordsRequest): unknown;
    fromPartial(object: DeepPartial<ListRegistryPasswordsRequest>): ListRegistryPasswordsRequest;
};
export declare const ListRegistryPasswordsResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistryPasswordsResponse";
    encode(message: ListRegistryPasswordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistryPasswordsResponse;
    fromJSON(object: any): ListRegistryPasswordsResponse;
    toJSON(message: ListRegistryPasswordsResponse): unknown;
    fromPartial(object: DeepPartial<ListRegistryPasswordsResponse>): ListRegistryPasswordsResponse;
};
export declare const AddRegistryPasswordRequest: {
    $type: "yandex.cloud.iot.devices.v1.AddRegistryPasswordRequest";
    encode(message: AddRegistryPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddRegistryPasswordRequest;
    fromJSON(object: any): AddRegistryPasswordRequest;
    toJSON(message: AddRegistryPasswordRequest): unknown;
    fromPartial(object: DeepPartial<AddRegistryPasswordRequest>): AddRegistryPasswordRequest;
};
export declare const AddRegistryPasswordMetadata: {
    $type: "yandex.cloud.iot.devices.v1.AddRegistryPasswordMetadata";
    encode(message: AddRegistryPasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddRegistryPasswordMetadata;
    fromJSON(object: any): AddRegistryPasswordMetadata;
    toJSON(message: AddRegistryPasswordMetadata): unknown;
    fromPartial(object: DeepPartial<AddRegistryPasswordMetadata>): AddRegistryPasswordMetadata;
};
export declare const DeleteRegistryPasswordRequest: {
    $type: "yandex.cloud.iot.devices.v1.DeleteRegistryPasswordRequest";
    encode(message: DeleteRegistryPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryPasswordRequest;
    fromJSON(object: any): DeleteRegistryPasswordRequest;
    toJSON(message: DeleteRegistryPasswordRequest): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryPasswordRequest>): DeleteRegistryPasswordRequest;
};
export declare const DeleteRegistryPasswordMetadata: {
    $type: "yandex.cloud.iot.devices.v1.DeleteRegistryPasswordMetadata";
    encode(message: DeleteRegistryPasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryPasswordMetadata;
    fromJSON(object: any): DeleteRegistryPasswordMetadata;
    toJSON(message: DeleteRegistryPasswordMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryPasswordMetadata>): DeleteRegistryPasswordMetadata;
};
export declare const ListDeviceTopicAliasesRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesRequest";
    encode(message: ListDeviceTopicAliasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDeviceTopicAliasesRequest;
    fromJSON(object: any): ListDeviceTopicAliasesRequest;
    toJSON(message: ListDeviceTopicAliasesRequest): unknown;
    fromPartial(object: DeepPartial<ListDeviceTopicAliasesRequest>): ListDeviceTopicAliasesRequest;
};
export declare const ListDeviceTopicAliasesResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesResponse";
    encode(message: ListDeviceTopicAliasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDeviceTopicAliasesResponse;
    fromJSON(object: any): ListDeviceTopicAliasesResponse;
    toJSON(message: ListDeviceTopicAliasesResponse): unknown;
    fromPartial(object: DeepPartial<ListDeviceTopicAliasesResponse>): ListDeviceTopicAliasesResponse;
};
export declare const ListRegistryOperationsRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistryOperationsRequest";
    encode(message: ListRegistryOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistryOperationsRequest;
    fromJSON(object: any): ListRegistryOperationsRequest;
    toJSON(message: ListRegistryOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListRegistryOperationsRequest>): ListRegistryOperationsRequest;
};
export declare const ListRegistryOperationsResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListRegistryOperationsResponse";
    encode(message: ListRegistryOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistryOperationsResponse;
    fromJSON(object: any): ListRegistryOperationsResponse;
    toJSON(message: ListRegistryOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListRegistryOperationsResponse>): ListRegistryOperationsResponse;
};
/** A set of methods for managing registry. */
export declare const RegistryServiceService: {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRegistryRequest;
        readonly responseSerialize: (value: Registry) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Registry;
    };
    readonly getByName: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/GetByName";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetByNameRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetByNameRegistryRequest;
        readonly responseSerialize: (value: Registry) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Registry;
    };
    /** Retrieves the list of registries in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRegistriesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRegistriesRequest;
        readonly responseSerialize: (value: ListRegistriesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRegistriesResponse;
    };
    /** Creates a registry in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified registry. */
    readonly update: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified registry. */
    readonly delete: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of registry certificates for the specified registry. */
    readonly listCertificates: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRegistryCertificatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRegistryCertificatesRequest;
        readonly responseSerialize: (value: ListRegistryCertificatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRegistryCertificatesResponse;
    };
    /** Adds a certificate. */
    readonly addCertificate: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddRegistryCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddRegistryCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified registry certificate. */
    readonly deleteCertificate: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRegistryCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRegistryCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of passwords for the specified registry. */
    readonly listPasswords: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRegistryPasswordsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRegistryPasswordsRequest;
        readonly responseSerialize: (value: ListRegistryPasswordsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRegistryPasswordsResponse;
    };
    /** Adds password for the specified registry. */
    readonly addPassword: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/AddPassword";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddRegistryPasswordRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddRegistryPasswordRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified password. */
    readonly deletePassword: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRegistryPasswordRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRegistryPasswordRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of device topic aliases for the specified registry. */
    readonly listDeviceTopicAliases: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDeviceTopicAliasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDeviceTopicAliasesRequest;
        readonly responseSerialize: (value: ListDeviceTopicAliasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDeviceTopicAliasesResponse;
    };
    /** Lists operations for the specified registry. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRegistryOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRegistryOperationsRequest;
        readonly responseSerialize: (value: ListRegistryOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRegistryOperationsResponse;
    };
};
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
    listCertificates: handleUnaryCall<ListRegistryCertificatesRequest, ListRegistryCertificatesResponse>;
    /** Adds a certificate. */
    addCertificate: handleUnaryCall<AddRegistryCertificateRequest, Operation>;
    /** Deletes the specified registry certificate. */
    deleteCertificate: handleUnaryCall<DeleteRegistryCertificateRequest, Operation>;
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords: handleUnaryCall<ListRegistryPasswordsRequest, ListRegistryPasswordsResponse>;
    /** Adds password for the specified registry. */
    addPassword: handleUnaryCall<AddRegistryPasswordRequest, Operation>;
    /** Deletes the specified password. */
    deletePassword: handleUnaryCall<DeleteRegistryPasswordRequest, Operation>;
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases: handleUnaryCall<ListDeviceTopicAliasesRequest, ListDeviceTopicAliasesResponse>;
    /** Lists operations for the specified registry. */
    listOperations: handleUnaryCall<ListRegistryOperationsRequest, ListRegistryOperationsResponse>;
}
export interface RegistryServiceClient extends Client {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get(request: GetRegistryRequest, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    get(request: GetRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    get(request: GetRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    getByName(request: GetByNameRegistryRequest, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    getByName(request: GetByNameRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    getByName(request: GetByNameRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    /** Retrieves the list of registries in the specified folder. */
    list(request: ListRegistriesRequest, callback: (error: ServiceError | null, response: ListRegistriesResponse) => void): ClientUnaryCall;
    list(request: ListRegistriesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRegistriesResponse) => void): ClientUnaryCall;
    list(request: ListRegistriesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRegistriesResponse) => void): ClientUnaryCall;
    /** Creates a registry in the specified folder. */
    create(request: CreateRegistryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified registry. */
    update(request: UpdateRegistryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified registry. */
    delete(request: DeleteRegistryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates(request: ListRegistryCertificatesRequest, callback: (error: ServiceError | null, response: ListRegistryCertificatesResponse) => void): ClientUnaryCall;
    listCertificates(request: ListRegistryCertificatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRegistryCertificatesResponse) => void): ClientUnaryCall;
    listCertificates(request: ListRegistryCertificatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRegistryCertificatesResponse) => void): ClientUnaryCall;
    /** Adds a certificate. */
    addCertificate(request: AddRegistryCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCertificate(request: AddRegistryCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCertificate(request: AddRegistryCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified registry certificate. */
    deleteCertificate(request: DeleteRegistryCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteCertificate(request: DeleteRegistryCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteCertificate(request: DeleteRegistryCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords(request: ListRegistryPasswordsRequest, callback: (error: ServiceError | null, response: ListRegistryPasswordsResponse) => void): ClientUnaryCall;
    listPasswords(request: ListRegistryPasswordsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRegistryPasswordsResponse) => void): ClientUnaryCall;
    listPasswords(request: ListRegistryPasswordsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRegistryPasswordsResponse) => void): ClientUnaryCall;
    /** Adds password for the specified registry. */
    addPassword(request: AddRegistryPasswordRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addPassword(request: AddRegistryPasswordRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addPassword(request: AddRegistryPasswordRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified password. */
    deletePassword(request: DeleteRegistryPasswordRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deletePassword(request: DeleteRegistryPasswordRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deletePassword(request: DeleteRegistryPasswordRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases(request: ListDeviceTopicAliasesRequest, callback: (error: ServiceError | null, response: ListDeviceTopicAliasesResponse) => void): ClientUnaryCall;
    listDeviceTopicAliases(request: ListDeviceTopicAliasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDeviceTopicAliasesResponse) => void): ClientUnaryCall;
    listDeviceTopicAliases(request: ListDeviceTopicAliasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDeviceTopicAliasesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified registry. */
    listOperations(request: ListRegistryOperationsRequest, callback: (error: ServiceError | null, response: ListRegistryOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListRegistryOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRegistryOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListRegistryOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRegistryOperationsResponse) => void): ClientUnaryCall;
}
export declare const RegistryServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => RegistryServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
