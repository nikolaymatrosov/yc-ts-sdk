/// <reference types="node" />
import { Role } from '../../../../yandex/cloud/iam/v1/role';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface GetRoleRequest {
    $type: 'yandex.cloud.iam.v1.GetRoleRequest';
    /**
     * ID of the Role resource to return.
     * To get the role ID, use a [RoleService.List] request.
     */
    roleId: string;
}
export interface ListRolesRequest {
    $type: 'yandex.cloud.iam.v1.ListRolesRequest';
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRolesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListRolesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}
export interface ListRolesResponse {
    $type: 'yandex.cloud.iam.v1.ListRolesResponse';
    /** List of Role resources. */
    roles: Role[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRolesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRolesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetRoleRequest: {
    $type: "yandex.cloud.iam.v1.GetRoleRequest";
    encode(message: GetRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRoleRequest;
    fromJSON(object: any): GetRoleRequest;
    toJSON(message: GetRoleRequest): unknown;
    fromPartial(object: DeepPartial<GetRoleRequest>): GetRoleRequest;
};
export declare const ListRolesRequest: {
    $type: "yandex.cloud.iam.v1.ListRolesRequest";
    encode(message: ListRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRolesRequest;
    fromJSON(object: any): ListRolesRequest;
    toJSON(message: ListRolesRequest): unknown;
    fromPartial(object: DeepPartial<ListRolesRequest>): ListRolesRequest;
};
export declare const ListRolesResponse: {
    $type: "yandex.cloud.iam.v1.ListRolesResponse";
    encode(message: ListRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRolesResponse;
    fromJSON(object: any): ListRolesResponse;
    toJSON(message: ListRolesResponse): unknown;
    fromPartial(object: DeepPartial<ListRolesResponse>): ListRolesResponse;
};
/** A set of methods for managing Role resources. */
export declare const RoleServiceService: {
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.RoleService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRoleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRoleRequest;
        readonly responseSerialize: (value: Role) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Role;
    };
    /** Retrieves the list of Role resources. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.RoleService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRolesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRolesRequest;
        readonly responseSerialize: (value: ListRolesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRolesResponse;
    };
};
export interface RoleServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    get: handleUnaryCall<GetRoleRequest, Role>;
    /** Retrieves the list of Role resources. */
    list: handleUnaryCall<ListRolesRequest, ListRolesResponse>;
}
export interface RoleServiceClient extends Client {
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    get(request: GetRoleRequest, callback: (error: ServiceError | null, response: Role) => void): ClientUnaryCall;
    get(request: GetRoleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Role) => void): ClientUnaryCall;
    get(request: GetRoleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Role) => void): ClientUnaryCall;
    /** Retrieves the list of Role resources. */
    list(request: ListRolesRequest, callback: (error: ServiceError | null, response: ListRolesResponse) => void): ClientUnaryCall;
    list(request: ListRolesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRolesResponse) => void): ClientUnaryCall;
    list(request: ListRolesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRolesResponse) => void): ClientUnaryCall;
}
export declare const RoleServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => RoleServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
