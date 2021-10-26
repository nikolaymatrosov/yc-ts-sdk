/// <reference types="node" />
import { Duration } from '../../../../../google/protobuf/duration';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { BindingType, Federation, FederationSecuritySettings } from '../../../../../yandex/cloud/organizationmanager/v1/saml/federation';
import { UserAccount } from '../../../../../yandex/cloud/organizationmanager/v1/user_account';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";
export interface GetFederationRequest {
    /**
     * ID of the federation to return.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}
export interface ListFederationsRequest {
    /**
     * ID of the organization to list federations in.
     * To get the organization ID, make a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListFederationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Federation.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}
export interface ListFederationsResponse {
    /** List of federations. */
    federations: Federation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListFederationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFederationRequest {
    /**
     * ID of the organization to create a federation in.
     * To get the organization ID, make a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * Name of the federation.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the federation. */
    description: string;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     * The default value is `8h`.
     */
    cookieMaxAge: Duration | undefined;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings: FederationSecuritySettings | undefined;
    /** Use case insensitive Name IDs. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateFederationRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateFederationMetadata {
    /** ID of the federation that is being created. */
    federationId: string;
}
export interface UpdateFederationRequest {
    /**
     * ID of the federation to update.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /** Field mask that specifies which fields of the federation are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the federation.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the federation. */
    description: string;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     * The default value is `8h`.
     */
    cookieMaxAge: Duration | undefined;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings: FederationSecuritySettings | undefined;
    /** Use case insensitive name ids. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateFederationRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateFederationMetadata {
    /** ID of the federation that is being updated. */
    federationId: string;
}
export interface DeleteFederationRequest {
    /**
     * ID of the federation to delete.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}
export interface DeleteFederationMetadata {
    /** ID of the federation that is being deleted. */
    federationId: string;
}
export interface AddFederatedUserAccountsRequest {
    /** ID of the federation to add users. */
    federationId: string;
    /**
     * Name IDs returned by the Identity Provider (IdP) on successful authentication.
     * These may be UPNs or user email addresses.
     */
    nameIds: string[];
}
export interface AddFederatedUserAccountsMetadata {
    /** ID of the federation that is being altered. */
    federationId: string;
}
export interface AddFederatedUserAccountsResponse {
    /** List of users created by [FederationService.AddUserAccounts] request. */
    userAccounts: UserAccount[];
}
export interface ListFederatedUserAccountsRequest {
    /** ID of the federation to list user accounts for. */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederatedUserAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederatedUserAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListFederatedUserAccountsResponse {
    /** List of user accounts for the specified federation. */
    userAccounts: UserAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederatedUserAccountsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederatedUserAccountsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListFederationOperationsRequest {
    /** ID of the federation to list operations for. */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederationOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListFederationOperationsResponse {
    /** List of operations for the specified federation. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederationOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetFederationRequest: {
    encode(message: GetFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFederationRequest;
    fromJSON(object: any): GetFederationRequest;
    toJSON(message: GetFederationRequest): unknown;
    fromPartial(object: DeepPartial<GetFederationRequest>): GetFederationRequest;
};
export declare const ListFederationsRequest: {
    encode(message: ListFederationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationsRequest;
    fromJSON(object: any): ListFederationsRequest;
    toJSON(message: ListFederationsRequest): unknown;
    fromPartial(object: DeepPartial<ListFederationsRequest>): ListFederationsRequest;
};
export declare const ListFederationsResponse: {
    encode(message: ListFederationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationsResponse;
    fromJSON(object: any): ListFederationsResponse;
    toJSON(message: ListFederationsResponse): unknown;
    fromPartial(object: DeepPartial<ListFederationsResponse>): ListFederationsResponse;
};
export declare const CreateFederationRequest: {
    encode(message: CreateFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFederationRequest;
    fromJSON(object: any): CreateFederationRequest;
    toJSON(message: CreateFederationRequest): unknown;
    fromPartial(object: DeepPartial<CreateFederationRequest>): CreateFederationRequest;
};
export declare const CreateFederationRequest_LabelsEntry: {
    encode(message: CreateFederationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFederationRequest_LabelsEntry;
    fromJSON(object: any): CreateFederationRequest_LabelsEntry;
    toJSON(message: CreateFederationRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateFederationRequest_LabelsEntry>): CreateFederationRequest_LabelsEntry;
};
export declare const CreateFederationMetadata: {
    encode(message: CreateFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFederationMetadata;
    fromJSON(object: any): CreateFederationMetadata;
    toJSON(message: CreateFederationMetadata): unknown;
    fromPartial(object: DeepPartial<CreateFederationMetadata>): CreateFederationMetadata;
};
export declare const UpdateFederationRequest: {
    encode(message: UpdateFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFederationRequest;
    fromJSON(object: any): UpdateFederationRequest;
    toJSON(message: UpdateFederationRequest): unknown;
    fromPartial(object: DeepPartial<UpdateFederationRequest>): UpdateFederationRequest;
};
export declare const UpdateFederationRequest_LabelsEntry: {
    encode(message: UpdateFederationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFederationRequest_LabelsEntry;
    fromJSON(object: any): UpdateFederationRequest_LabelsEntry;
    toJSON(message: UpdateFederationRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateFederationRequest_LabelsEntry>): UpdateFederationRequest_LabelsEntry;
};
export declare const UpdateFederationMetadata: {
    encode(message: UpdateFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFederationMetadata;
    fromJSON(object: any): UpdateFederationMetadata;
    toJSON(message: UpdateFederationMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateFederationMetadata>): UpdateFederationMetadata;
};
export declare const DeleteFederationRequest: {
    encode(message: DeleteFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFederationRequest;
    fromJSON(object: any): DeleteFederationRequest;
    toJSON(message: DeleteFederationRequest): unknown;
    fromPartial(object: DeepPartial<DeleteFederationRequest>): DeleteFederationRequest;
};
export declare const DeleteFederationMetadata: {
    encode(message: DeleteFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFederationMetadata;
    fromJSON(object: any): DeleteFederationMetadata;
    toJSON(message: DeleteFederationMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteFederationMetadata>): DeleteFederationMetadata;
};
export declare const AddFederatedUserAccountsRequest: {
    encode(message: AddFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddFederatedUserAccountsRequest;
    fromJSON(object: any): AddFederatedUserAccountsRequest;
    toJSON(message: AddFederatedUserAccountsRequest): unknown;
    fromPartial(object: DeepPartial<AddFederatedUserAccountsRequest>): AddFederatedUserAccountsRequest;
};
export declare const AddFederatedUserAccountsMetadata: {
    encode(message: AddFederatedUserAccountsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddFederatedUserAccountsMetadata;
    fromJSON(object: any): AddFederatedUserAccountsMetadata;
    toJSON(message: AddFederatedUserAccountsMetadata): unknown;
    fromPartial(object: DeepPartial<AddFederatedUserAccountsMetadata>): AddFederatedUserAccountsMetadata;
};
export declare const AddFederatedUserAccountsResponse: {
    encode(message: AddFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddFederatedUserAccountsResponse;
    fromJSON(object: any): AddFederatedUserAccountsResponse;
    toJSON(message: AddFederatedUserAccountsResponse): unknown;
    fromPartial(object: DeepPartial<AddFederatedUserAccountsResponse>): AddFederatedUserAccountsResponse;
};
export declare const ListFederatedUserAccountsRequest: {
    encode(message: ListFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederatedUserAccountsRequest;
    fromJSON(object: any): ListFederatedUserAccountsRequest;
    toJSON(message: ListFederatedUserAccountsRequest): unknown;
    fromPartial(object: DeepPartial<ListFederatedUserAccountsRequest>): ListFederatedUserAccountsRequest;
};
export declare const ListFederatedUserAccountsResponse: {
    encode(message: ListFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederatedUserAccountsResponse;
    fromJSON(object: any): ListFederatedUserAccountsResponse;
    toJSON(message: ListFederatedUserAccountsResponse): unknown;
    fromPartial(object: DeepPartial<ListFederatedUserAccountsResponse>): ListFederatedUserAccountsResponse;
};
export declare const ListFederationOperationsRequest: {
    encode(message: ListFederationOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationOperationsRequest;
    fromJSON(object: any): ListFederationOperationsRequest;
    toJSON(message: ListFederationOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListFederationOperationsRequest>): ListFederationOperationsRequest;
};
export declare const ListFederationOperationsResponse: {
    encode(message: ListFederationOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationOperationsResponse;
    fromJSON(object: any): ListFederationOperationsResponse;
    toJSON(message: ListFederationOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListFederationOperationsResponse>): ListFederationOperationsResponse;
};
/** A set of methods for managing federations. */
export declare const FederationServiceService: {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFederationRequest;
        readonly responseSerialize: (value: Federation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Federation;
    };
    /** Retrieves the list of federations in the specified organization. */
    readonly list: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFederationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFederationsRequest;
        readonly responseSerialize: (value: ListFederationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFederationsResponse;
    };
    /** Creates a federation in the specified organization. */
    readonly create: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFederationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified federation. */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFederationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified federation. */
    readonly delete: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFederationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds users to the specified federation. */
    readonly addUserAccounts: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddFederatedUserAccountsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddFederatedUserAccountsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists users for the specified federation. */
    readonly listUserAccounts: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFederatedUserAccountsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFederatedUserAccountsRequest;
        readonly responseSerialize: (value: ListFederatedUserAccountsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFederatedUserAccountsResponse;
    };
    /** Lists operations for the specified federation. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFederationOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFederationOperationsRequest;
        readonly responseSerialize: (value: ListFederationOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFederationOperationsResponse;
    };
};
export interface FederationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get: handleUnaryCall<GetFederationRequest, Federation>;
    /** Retrieves the list of federations in the specified organization. */
    list: handleUnaryCall<ListFederationsRequest, ListFederationsResponse>;
    /** Creates a federation in the specified organization. */
    create: handleUnaryCall<CreateFederationRequest, Operation>;
    /** Updates the specified federation. */
    update: handleUnaryCall<UpdateFederationRequest, Operation>;
    /** Deletes the specified federation. */
    delete: handleUnaryCall<DeleteFederationRequest, Operation>;
    /** Adds users to the specified federation. */
    addUserAccounts: handleUnaryCall<AddFederatedUserAccountsRequest, Operation>;
    /** Lists users for the specified federation. */
    listUserAccounts: handleUnaryCall<ListFederatedUserAccountsRequest, ListFederatedUserAccountsResponse>;
    /** Lists operations for the specified federation. */
    listOperations: handleUnaryCall<ListFederationOperationsRequest, ListFederationOperationsResponse>;
}
export interface FederationServiceClient extends Client {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get(request: GetFederationRequest, callback: (error: ServiceError | null, response: Federation) => void): ClientUnaryCall;
    get(request: GetFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Federation) => void): ClientUnaryCall;
    get(request: GetFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Federation) => void): ClientUnaryCall;
    /** Retrieves the list of federations in the specified organization. */
    list(request: ListFederationsRequest, callback: (error: ServiceError | null, response: ListFederationsResponse) => void): ClientUnaryCall;
    list(request: ListFederationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFederationsResponse) => void): ClientUnaryCall;
    list(request: ListFederationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFederationsResponse) => void): ClientUnaryCall;
    /** Creates a federation in the specified organization. */
    create(request: CreateFederationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified federation. */
    update(request: UpdateFederationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified federation. */
    delete(request: DeleteFederationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds users to the specified federation. */
    addUserAccounts(request: AddFederatedUserAccountsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addUserAccounts(request: AddFederatedUserAccountsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addUserAccounts(request: AddFederatedUserAccountsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists users for the specified federation. */
    listUserAccounts(request: ListFederatedUserAccountsRequest, callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void): ClientUnaryCall;
    listUserAccounts(request: ListFederatedUserAccountsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void): ClientUnaryCall;
    listUserAccounts(request: ListFederatedUserAccountsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified federation. */
    listOperations(request: ListFederationOperationsRequest, callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFederationOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFederationOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void): ClientUnaryCall;
}
export declare const FederationServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => FederationServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
