/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Certificate } from '../../../../../yandex/cloud/organizationmanager/v1/saml/certificate';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";
export interface GetCertificateRequest {
    $type: 'yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest';
    /**
     * ID of the certificate to return.
     * To get the certificate ID, make a [CertificateService.List] request.
     */
    certificateId: string;
}
export interface ListCertificatesRequest {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest';
    /**
     * ID of the federation to list certificates in.
     * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
     */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCertificatesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListCertificatesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Certificate.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}
export interface ListCertificatesResponse {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse';
    /** List of certificates. */
    certificates: Certificate[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCertificatesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListCertificatesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateCertificateRequest {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest';
    /**
     * ID of the federation to add new certificate.
     * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
     */
    federationId: string;
    /**
     * Name of the certificate.
     * The name must be unique within the federation.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Certificate data in PEM format. */
    data: string;
}
export interface CreateCertificateMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata';
    /** ID of the certificate that is being created. */
    certificateId: string;
}
export interface UpdateCertificateRequest {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest';
    /**
     * ID of the certificate to update.
     * To get the certificate ID, make a [CertificateService.List] request.
     */
    certificateId: string;
    /** Field mask that specifies which fields of the certificate are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the certificate.
     * The name must be unique within the federation.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Certificate data in PEM format. */
    data: string;
}
export interface UpdateCertificateMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata';
    /** ID of the certificate that is being updated. */
    certificateId: string;
}
export interface DeleteCertificateRequest {
    $type: 'yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest';
    /**
     * ID of the certificate to delete.
     * To get the certificate ID, make a [CertificateService.List] request.
     */
    certificateId: string;
}
export interface DeleteCertificateMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata';
    /** ID of the certificate that is being deleted. */
    certificateId: string;
}
export interface ListCertificateOperationsRequest {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest';
    /** ID of the certificate to list operations for. */
    certificateId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCertificateOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListCertificateOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListCertificateOperationsResponse {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse';
    /** List of operations for the specified certificate. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCertificateOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetCertificateRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest";
    encode(message: GetCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCertificateRequest;
    fromJSON(object: any): GetCertificateRequest;
    toJSON(message: GetCertificateRequest): unknown;
    fromPartial(object: DeepPartial<GetCertificateRequest>): GetCertificateRequest;
};
export declare const ListCertificatesRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest";
    encode(message: ListCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificatesRequest;
    fromJSON(object: any): ListCertificatesRequest;
    toJSON(message: ListCertificatesRequest): unknown;
    fromPartial(object: DeepPartial<ListCertificatesRequest>): ListCertificatesRequest;
};
export declare const ListCertificatesResponse: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse";
    encode(message: ListCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificatesResponse;
    fromJSON(object: any): ListCertificatesResponse;
    toJSON(message: ListCertificatesResponse): unknown;
    fromPartial(object: DeepPartial<ListCertificatesResponse>): ListCertificatesResponse;
};
export declare const CreateCertificateRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest";
    encode(message: CreateCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCertificateRequest;
    fromJSON(object: any): CreateCertificateRequest;
    toJSON(message: CreateCertificateRequest): unknown;
    fromPartial(object: DeepPartial<CreateCertificateRequest>): CreateCertificateRequest;
};
export declare const CreateCertificateMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata";
    encode(message: CreateCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCertificateMetadata;
    fromJSON(object: any): CreateCertificateMetadata;
    toJSON(message: CreateCertificateMetadata): unknown;
    fromPartial(object: DeepPartial<CreateCertificateMetadata>): CreateCertificateMetadata;
};
export declare const UpdateCertificateRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest";
    encode(message: UpdateCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCertificateRequest;
    fromJSON(object: any): UpdateCertificateRequest;
    toJSON(message: UpdateCertificateRequest): unknown;
    fromPartial(object: DeepPartial<UpdateCertificateRequest>): UpdateCertificateRequest;
};
export declare const UpdateCertificateMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata";
    encode(message: UpdateCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCertificateMetadata;
    fromJSON(object: any): UpdateCertificateMetadata;
    toJSON(message: UpdateCertificateMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateCertificateMetadata>): UpdateCertificateMetadata;
};
export declare const DeleteCertificateRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest";
    encode(message: DeleteCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCertificateRequest;
    fromJSON(object: any): DeleteCertificateRequest;
    toJSON(message: DeleteCertificateRequest): unknown;
    fromPartial(object: DeepPartial<DeleteCertificateRequest>): DeleteCertificateRequest;
};
export declare const DeleteCertificateMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata";
    encode(message: DeleteCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCertificateMetadata;
    fromJSON(object: any): DeleteCertificateMetadata;
    toJSON(message: DeleteCertificateMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteCertificateMetadata>): DeleteCertificateMetadata;
};
export declare const ListCertificateOperationsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest";
    encode(message: ListCertificateOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificateOperationsRequest;
    fromJSON(object: any): ListCertificateOperationsRequest;
    toJSON(message: ListCertificateOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListCertificateOperationsRequest>): ListCertificateOperationsRequest;
};
export declare const ListCertificateOperationsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse";
    encode(message: ListCertificateOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificateOperationsResponse;
    fromJSON(object: any): ListCertificateOperationsResponse;
    toJSON(message: ListCertificateOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListCertificateOperationsResponse>): ListCertificateOperationsResponse;
};
/** A set of methods for managing certificates. */
export declare const CertificateServiceService: {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetCertificateRequest;
        readonly responseSerialize: (value: Certificate) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Certificate;
    };
    /** Retrieves the list of certificates in the specified federation. */
    readonly list: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCertificatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCertificatesRequest;
        readonly responseSerialize: (value: ListCertificatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCertificatesResponse;
    };
    /** Creates a certificate in the specified federation. */
    readonly create: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified certificate. */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified certificate. */
    readonly delete: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified certificate. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCertificateOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCertificateOperationsRequest;
        readonly responseSerialize: (value: ListCertificateOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCertificateOperationsResponse;
    };
};
export interface CertificateServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: handleUnaryCall<GetCertificateRequest, Certificate>;
    /** Retrieves the list of certificates in the specified federation. */
    list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
    /** Creates a certificate in the specified federation. */
    create: handleUnaryCall<CreateCertificateRequest, Operation>;
    /** Updates the specified certificate. */
    update: handleUnaryCall<UpdateCertificateRequest, Operation>;
    /** Deletes the specified certificate. */
    delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
    /** Lists operations for the specified certificate. */
    listOperations: handleUnaryCall<ListCertificateOperationsRequest, ListCertificateOperationsResponse>;
}
export interface CertificateServiceClient extends Client {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get(request: GetCertificateRequest, callback: (error: ServiceError | null, response: Certificate) => void): ClientUnaryCall;
    get(request: GetCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Certificate) => void): ClientUnaryCall;
    get(request: GetCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Certificate) => void): ClientUnaryCall;
    /** Retrieves the list of certificates in the specified federation. */
    list(request: ListCertificatesRequest, callback: (error: ServiceError | null, response: ListCertificatesResponse) => void): ClientUnaryCall;
    list(request: ListCertificatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCertificatesResponse) => void): ClientUnaryCall;
    list(request: ListCertificatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCertificatesResponse) => void): ClientUnaryCall;
    /** Creates a certificate in the specified federation. */
    create(request: CreateCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified certificate. */
    update(request: UpdateCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified certificate. */
    delete(request: DeleteCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified certificate. */
    listOperations(request: ListCertificateOperationsRequest, callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListCertificateOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListCertificateOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void): ClientUnaryCall;
}
export declare const CertificateServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => CertificateServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
