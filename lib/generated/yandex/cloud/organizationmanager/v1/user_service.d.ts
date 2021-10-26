/// <reference types="node" />
import { SubjectClaims } from '../../../../yandex/cloud/oauth/claims';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface ListMembersRequest {
    /** ID of the Organization resource to list members for. */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListMembersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListMembersResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListMembersResponse {
    /** List of users for the specified organization. */
    users: ListMembersResponse_OrganizationUser[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListMembersRequest.page_size], use the [next_page_token] as the value
     * for the [ListMembersRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListMembersResponse_OrganizationUser {
    /** OpenID standard claims with additional Yandex.Organization claims. */
    subjectClaims: SubjectClaims | undefined;
}
export interface DeleteMembershipRequest {
    /** ID of the organization to delete membership. */
    organizationId: string;
    /**
     * ID of the subject that is being deleted from organization.
     * By default equals to authenticated subject.
     */
    subjectId: string;
}
export interface DeleteMembershipMetadata {
    /** ID of the organization to delete membership. */
    organizationId: string;
    /** ID of the subject that is being deleted from organization. */
    subjectId: string;
}
export interface DeleteMembershipResponse {
    /** ID of the organization to delete membership. */
    organizationId: string;
    /** ID of the subject that is being deleted from organization. */
    subjectId: string;
}
export declare const ListMembersRequest: {
    encode(message: ListMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMembersRequest;
    fromJSON(object: any): ListMembersRequest;
    toJSON(message: ListMembersRequest): unknown;
    fromPartial(object: DeepPartial<ListMembersRequest>): ListMembersRequest;
};
export declare const ListMembersResponse: {
    encode(message: ListMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMembersResponse;
    fromJSON(object: any): ListMembersResponse;
    toJSON(message: ListMembersResponse): unknown;
    fromPartial(object: DeepPartial<ListMembersResponse>): ListMembersResponse;
};
export declare const ListMembersResponse_OrganizationUser: {
    encode(message: ListMembersResponse_OrganizationUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMembersResponse_OrganizationUser;
    fromJSON(object: any): ListMembersResponse_OrganizationUser;
    toJSON(message: ListMembersResponse_OrganizationUser): unknown;
    fromPartial(object: DeepPartial<ListMembersResponse_OrganizationUser>): ListMembersResponse_OrganizationUser;
};
export declare const DeleteMembershipRequest: {
    encode(message: DeleteMembershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMembershipRequest;
    fromJSON(object: any): DeleteMembershipRequest;
    toJSON(message: DeleteMembershipRequest): unknown;
    fromPartial(object: DeepPartial<DeleteMembershipRequest>): DeleteMembershipRequest;
};
export declare const DeleteMembershipMetadata: {
    encode(message: DeleteMembershipMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMembershipMetadata;
    fromJSON(object: any): DeleteMembershipMetadata;
    toJSON(message: DeleteMembershipMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteMembershipMetadata>): DeleteMembershipMetadata;
};
export declare const DeleteMembershipResponse: {
    encode(message: DeleteMembershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMembershipResponse;
    fromJSON(object: any): DeleteMembershipResponse;
    toJSON(message: DeleteMembershipResponse): unknown;
    fromPartial(object: DeepPartial<DeleteMembershipResponse>): DeleteMembershipResponse;
};
/** A set of methods for managing Organization users. */
export declare const UserServiceService: {
    /** List organization active members. */
    readonly listMembers: {
        readonly path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListMembersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListMembersRequest;
        readonly responseSerialize: (value: ListMembersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListMembersResponse;
    };
    /** Delete user membership. */
    readonly deleteMembership: {
        readonly path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMembershipRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMembershipRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    /** List organization active members. */
    listMembers: handleUnaryCall<ListMembersRequest, ListMembersResponse>;
    /** Delete user membership. */
    deleteMembership: handleUnaryCall<DeleteMembershipRequest, Operation>;
}
export interface UserServiceClient extends Client {
    /** List organization active members. */
    listMembers(request: ListMembersRequest, callback: (error: ServiceError | null, response: ListMembersResponse) => void): ClientUnaryCall;
    listMembers(request: ListMembersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListMembersResponse) => void): ClientUnaryCall;
    listMembers(request: ListMembersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListMembersResponse) => void): ClientUnaryCall;
    /** Delete user membership. */
    deleteMembership(request: DeleteMembershipRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteMembership(request: DeleteMembershipRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteMembership(request: DeleteMembershipRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const UserServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => UserServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
