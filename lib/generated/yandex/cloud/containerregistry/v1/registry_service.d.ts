/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { IpPermission, IpPermissionDelta } from '../../../../yandex/cloud/containerregistry/v1/ip_permission';
import { Registry } from '../../../../yandex/cloud/containerregistry/v1/registry';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetRegistryRequest {
    $type: 'yandex.cloud.containerregistry.v1.GetRegistryRequest';
    /**
     * ID of the Registry resource to return.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
}
export interface ListRegistriesRequest {
    $type: 'yandex.cloud.containerregistry.v1.ListRegistriesRequest';
    /**
     * ID of the folder to list registries in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Registry.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
}
export interface ListRegistriesResponse {
    $type: 'yandex.cloud.containerregistry.v1.ListRegistriesResponse';
    /** List of Registry resources. */
    registries: Registry[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRegistriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRegistriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateRegistryRequest {
    $type: 'yandex.cloud.containerregistry.v1.CreateRegistryRequest';
    /**
     * ID of the folder to create a registry in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateRegistryRequest_LabelsEntry {
    $type: 'yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateRegistryMetadata {
    $type: 'yandex.cloud.containerregistry.v1.CreateRegistryMetadata';
    /** ID of the registry that is being created. */
    registryId: string;
}
export interface UpdateRegistryRequest {
    $type: 'yandex.cloud.containerregistry.v1.UpdateRegistryRequest';
    /**
     * ID of the Registry resource to update.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /** Field mask that specifies which fields of the Registry resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name: string;
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
    $type: 'yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateRegistryMetadata {
    $type: 'yandex.cloud.containerregistry.v1.UpdateRegistryMetadata';
    /** ID of the Registry resource that is being updated. */
    registryId: string;
}
export interface DeleteRegistryRequest {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRegistryRequest';
    /** ID of the registry to delete. */
    registryId: string;
}
export interface DeleteRegistryMetadata {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRegistryMetadata';
    /** ID of the registry that is being deleted. */
    registryId: string;
}
export interface SetIpPermissionRequest {
    $type: 'yandex.cloud.containerregistry.v1.SetIpPermissionRequest';
    /** ID of the registry for which ip permissions are being set. */
    registryId: string;
    /** IP permission to be set. */
    ipPermission: IpPermission[];
}
export interface UpdateIpPermissionRequest {
    $type: 'yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest';
    /** ID of the registry for which ip permissions are being updated. */
    registryId: string;
    /** Updates to IP permissions. */
    ipPermissionDeltas: IpPermissionDelta[];
}
export interface ListIpPermissionRequest {
    $type: 'yandex.cloud.containerregistry.v1.ListIpPermissionRequest';
    /** ID of the Registry to return ip permission list. */
    registryId: string;
}
export interface ListIpPermissionsResponse {
    $type: 'yandex.cloud.containerregistry.v1.ListIpPermissionsResponse';
    /** List of ip permissions for registry */
    permissions: IpPermission[];
}
export interface SetIpPermissionMetadata {
    $type: 'yandex.cloud.containerregistry.v1.SetIpPermissionMetadata';
    /** ID of the registry that ip permission is being set. */
    registryId: string;
}
export interface UpdateIpPermissionMetadata {
    $type: 'yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata';
    /** ID of the registry that ip permission is being updated. */
    registryId: string;
}
export declare const GetRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest";
    encode(message: GetRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRegistryRequest;
    fromJSON(object: any): GetRegistryRequest;
    toJSON(message: GetRegistryRequest): unknown;
    fromPartial(object: DeepPartial<GetRegistryRequest>): GetRegistryRequest;
};
export declare const ListRegistriesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest";
    encode(message: ListRegistriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistriesRequest;
    fromJSON(object: any): ListRegistriesRequest;
    toJSON(message: ListRegistriesRequest): unknown;
    fromPartial(object: DeepPartial<ListRegistriesRequest>): ListRegistriesRequest;
};
export declare const ListRegistriesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse";
    encode(message: ListRegistriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistriesResponse;
    fromJSON(object: any): ListRegistriesResponse;
    toJSON(message: ListRegistriesResponse): unknown;
    fromPartial(object: DeepPartial<ListRegistriesResponse>): ListRegistriesResponse;
};
export declare const CreateRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest";
    encode(message: CreateRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest;
    fromJSON(object: any): CreateRegistryRequest;
    toJSON(message: CreateRegistryRequest): unknown;
    fromPartial(object: DeepPartial<CreateRegistryRequest>): CreateRegistryRequest;
};
export declare const CreateRegistryRequest_LabelsEntry: {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry";
    encode(message: CreateRegistryRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest_LabelsEntry;
    fromJSON(object: any): CreateRegistryRequest_LabelsEntry;
    toJSON(message: CreateRegistryRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateRegistryRequest_LabelsEntry>): CreateRegistryRequest_LabelsEntry;
};
export declare const CreateRegistryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata";
    encode(message: CreateRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryMetadata;
    fromJSON(object: any): CreateRegistryMetadata;
    toJSON(message: CreateRegistryMetadata): unknown;
    fromPartial(object: DeepPartial<CreateRegistryMetadata>): CreateRegistryMetadata;
};
export declare const UpdateRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest";
    encode(message: UpdateRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryRequest;
    fromJSON(object: any): UpdateRegistryRequest;
    toJSON(message: UpdateRegistryRequest): unknown;
    fromPartial(object: DeepPartial<UpdateRegistryRequest>): UpdateRegistryRequest;
};
export declare const UpdateRegistryRequest_LabelsEntry: {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry";
    encode(message: UpdateRegistryRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryRequest_LabelsEntry;
    fromJSON(object: any): UpdateRegistryRequest_LabelsEntry;
    toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateRegistryRequest_LabelsEntry>): UpdateRegistryRequest_LabelsEntry;
};
export declare const UpdateRegistryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata";
    encode(message: UpdateRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryMetadata;
    fromJSON(object: any): UpdateRegistryMetadata;
    toJSON(message: UpdateRegistryMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateRegistryMetadata>): UpdateRegistryMetadata;
};
export declare const DeleteRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest";
    encode(message: DeleteRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryRequest;
    fromJSON(object: any): DeleteRegistryRequest;
    toJSON(message: DeleteRegistryRequest): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryRequest>): DeleteRegistryRequest;
};
export declare const DeleteRegistryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata";
    encode(message: DeleteRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryMetadata;
    fromJSON(object: any): DeleteRegistryMetadata;
    toJSON(message: DeleteRegistryMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteRegistryMetadata>): DeleteRegistryMetadata;
};
export declare const SetIpPermissionRequest: {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest";
    encode(message: SetIpPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetIpPermissionRequest;
    fromJSON(object: any): SetIpPermissionRequest;
    toJSON(message: SetIpPermissionRequest): unknown;
    fromPartial(object: DeepPartial<SetIpPermissionRequest>): SetIpPermissionRequest;
};
export declare const UpdateIpPermissionRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest";
    encode(message: UpdateIpPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateIpPermissionRequest;
    fromJSON(object: any): UpdateIpPermissionRequest;
    toJSON(message: UpdateIpPermissionRequest): unknown;
    fromPartial(object: DeepPartial<UpdateIpPermissionRequest>): UpdateIpPermissionRequest;
};
export declare const ListIpPermissionRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest";
    encode(message: ListIpPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListIpPermissionRequest;
    fromJSON(object: any): ListIpPermissionRequest;
    toJSON(message: ListIpPermissionRequest): unknown;
    fromPartial(object: DeepPartial<ListIpPermissionRequest>): ListIpPermissionRequest;
};
export declare const ListIpPermissionsResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse";
    encode(message: ListIpPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListIpPermissionsResponse;
    fromJSON(object: any): ListIpPermissionsResponse;
    toJSON(message: ListIpPermissionsResponse): unknown;
    fromPartial(object: DeepPartial<ListIpPermissionsResponse>): ListIpPermissionsResponse;
};
export declare const SetIpPermissionMetadata: {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata";
    encode(message: SetIpPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetIpPermissionMetadata;
    fromJSON(object: any): SetIpPermissionMetadata;
    toJSON(message: SetIpPermissionMetadata): unknown;
    fromPartial(object: DeepPartial<SetIpPermissionMetadata>): SetIpPermissionMetadata;
};
export declare const UpdateIpPermissionMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata";
    encode(message: UpdateIpPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateIpPermissionMetadata;
    fromJSON(object: any): UpdateIpPermissionMetadata;
    toJSON(message: UpdateIpPermissionMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateIpPermissionMetadata>): UpdateIpPermissionMetadata;
};
/** A set of methods for managing Registry resources. */
export declare const RegistryServiceService: {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRegistryRequest;
        readonly responseSerialize: (value: Registry) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Registry;
    };
    /** Retrieves the list of Registry resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRegistriesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRegistriesRequest;
        readonly responseSerialize: (value: ListRegistriesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRegistriesResponse;
    };
    /** Creates a registry in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified registry. */
    readonly update: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified registry. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists access bindings for the specified registry. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified registry. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified registry. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List ip permissions for the specified registry. */
    readonly listIpPermission: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListIpPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListIpPermissionRequest;
        readonly responseSerialize: (value: ListIpPermissionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListIpPermissionsResponse;
    };
    /** Set ip permissions for the specified registry. */
    readonly setIpPermission: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetIpPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetIpPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Update ip permissions for the specified registry. */
    readonly updateIpPermission: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateIpPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateIpPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface RegistryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get: handleUnaryCall<GetRegistryRequest, Registry>;
    /** Retrieves the list of Registry resources in the specified folder. */
    list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
    /** Creates a registry in the specified folder. */
    create: handleUnaryCall<CreateRegistryRequest, Operation>;
    /** Updates the specified registry. */
    update: handleUnaryCall<UpdateRegistryRequest, Operation>;
    /** Deletes the specified registry. */
    delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
    /** Lists access bindings for the specified registry. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified registry. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified registry. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** List ip permissions for the specified registry. */
    listIpPermission: handleUnaryCall<ListIpPermissionRequest, ListIpPermissionsResponse>;
    /** Set ip permissions for the specified registry. */
    setIpPermission: handleUnaryCall<SetIpPermissionRequest, Operation>;
    /** Update ip permissions for the specified registry. */
    updateIpPermission: handleUnaryCall<UpdateIpPermissionRequest, Operation>;
}
export interface RegistryServiceClient extends Client {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get(request: GetRegistryRequest, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    get(request: GetRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    get(request: GetRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    /** Retrieves the list of Registry resources in the specified folder. */
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
    /** Lists access bindings for the specified registry. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified registry. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified registry. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List ip permissions for the specified registry. */
    listIpPermission(request: ListIpPermissionRequest, callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void): ClientUnaryCall;
    listIpPermission(request: ListIpPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void): ClientUnaryCall;
    listIpPermission(request: ListIpPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void): ClientUnaryCall;
    /** Set ip permissions for the specified registry. */
    setIpPermission(request: SetIpPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setIpPermission(request: SetIpPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setIpPermission(request: SetIpPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Update ip permissions for the specified registry. */
    updateIpPermission(request: UpdateIpPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateIpPermission(request: UpdateIpPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateIpPermission(request: UpdateIpPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const RegistryServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => RegistryServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
