/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { User, UserSpec, Permission } from '../../../../../yandex/cloud/mdb/sqlserver/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
export interface GetUserRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.GetUserRequest';
    /**
     * ID of the SQL Server cluster the user belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the SQL Server user to return.
     *
     * To get the name of the user use a [DatabaseService.List] request.
     */
    userName: string;
}
export interface ListUsersRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.ListUsersRequest';
    /**
     * ID of the cluster to list SQL Server users in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListUsersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the [ListUsersResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListUsersResponse {
    $type: 'yandex.cloud.mdb.sqlserver.v1.ListUsersResponse';
    /** Requested list of SQL Server users. */
    users: User[];
    /**
     * Token that allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListUsersRequest.page_size], use the `next_page_token` as the value
     * for the [ListUsersRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateUserRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.CreateUserRequest';
    /**
     * ID of the SQL Server cluster to create a user for.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Properties of the user to be created. */
    userSpec: UserSpec | undefined;
}
export interface CreateUserMetadata {
    $type: 'yandex.cloud.mdb.sqlserver.v1.CreateUserMetadata';
    /** ID of the SQL Server cluster the user is being created for. */
    clusterId: string;
    /** Name of the user being created. */
    userName: string;
}
export interface UpdateUserRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.UpdateUserRequest';
    /**
     * ID of the SQL Server cluster the user belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to be updated.
     *
     * To get the name of the user use a [UserService.List] request.
     */
    userName: string;
    /** Field mask that specifies which fields of the SQL Server user should be updated. */
    updateMask: FieldMask | undefined;
    /** New password for the user. */
    password: string;
    /** New set of permissions for the user. */
    permissions: Permission[];
}
export interface UpdateUserMetadata {
    $type: 'yandex.cloud.mdb.sqlserver.v1.UpdateUserMetadata';
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Name of the user being updated. */
    userName: string;
}
export interface DeleteUserRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.DeleteUserRequest';
    /**
     * ID of the SQL Server cluster the user belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to delete.
     *
     * To get the name of the user, use a [UserService.List] request.
     */
    userName: string;
}
export interface DeleteUserMetadata {
    $type: 'yandex.cloud.mdb.sqlserver.v1.DeleteUserMetadata';
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Name of the user being deleted. */
    userName: string;
}
export interface GrantUserPermissionRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.GrantUserPermissionRequest';
    /**
     * ID of the SQL Server cluster the user belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to grant the permission to.
     * To get the name of the user, use a [UserService.List] request.
     */
    userName: string;
    /** Permission that should be granted to the specified user. */
    permission: Permission | undefined;
}
export interface GrantUserPermissionMetadata {
    $type: 'yandex.cloud.mdb.sqlserver.v1.GrantUserPermissionMetadata';
    /**
     * ID of the SQL Server cluster the user belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the user being granted a permission. */
    userName: string;
}
export interface RevokeUserPermissionRequest {
    $type: 'yandex.cloud.mdb.sqlserver.v1.RevokeUserPermissionRequest';
    /**
     * ID of the SQL Server cluster the user belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to revoke a permission from.
     *
     * To get the name of the user, use a [UserService.List] request.
     */
    userName: string;
    /** Permission that should be revoked from the specified user. */
    permission: Permission | undefined;
}
export interface RevokeUserPermissionMetadata {
    $type: 'yandex.cloud.mdb.sqlserver.v1.RevokeUserPermissionMetadata';
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Name of the user whose permission is being revoked. */
    userName: string;
}
export declare const GetUserRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetUserRequest";
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest;
};
export declare const ListUsersRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListUsersRequest";
    encode(message: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersRequest;
    fromJSON(object: any): ListUsersRequest;
    toJSON(message: ListUsersRequest): unknown;
    fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest;
};
export declare const ListUsersResponse: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListUsersResponse";
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse;
};
export declare const CreateUserRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateUserRequest";
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest;
};
export declare const CreateUserMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateUserMetadata";
    encode(message: CreateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserMetadata;
    fromJSON(object: any): CreateUserMetadata;
    toJSON(message: CreateUserMetadata): unknown;
    fromPartial(object: DeepPartial<CreateUserMetadata>): CreateUserMetadata;
};
export declare const UpdateUserRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateUserRequest";
    encode(message: UpdateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserRequest;
    fromJSON(object: any): UpdateUserRequest;
    toJSON(message: UpdateUserRequest): unknown;
    fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest;
};
export declare const UpdateUserMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateUserMetadata";
    encode(message: UpdateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserMetadata;
    fromJSON(object: any): UpdateUserMetadata;
    toJSON(message: UpdateUserMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateUserMetadata>): UpdateUserMetadata;
};
export declare const DeleteUserRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteUserRequest";
    encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserRequest;
    fromJSON(object: any): DeleteUserRequest;
    toJSON(message: DeleteUserRequest): unknown;
    fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest;
};
export declare const DeleteUserMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteUserMetadata";
    encode(message: DeleteUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserMetadata;
    fromJSON(object: any): DeleteUserMetadata;
    toJSON(message: DeleteUserMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteUserMetadata>): DeleteUserMetadata;
};
export declare const GrantUserPermissionRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.GrantUserPermissionRequest";
    encode(message: GrantUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionRequest;
    fromJSON(object: any): GrantUserPermissionRequest;
    toJSON(message: GrantUserPermissionRequest): unknown;
    fromPartial(object: DeepPartial<GrantUserPermissionRequest>): GrantUserPermissionRequest;
};
export declare const GrantUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.GrantUserPermissionMetadata";
    encode(message: GrantUserPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionMetadata;
    fromJSON(object: any): GrantUserPermissionMetadata;
    toJSON(message: GrantUserPermissionMetadata): unknown;
    fromPartial(object: DeepPartial<GrantUserPermissionMetadata>): GrantUserPermissionMetadata;
};
export declare const RevokeUserPermissionRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.RevokeUserPermissionRequest";
    encode(message: RevokeUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionRequest;
    fromJSON(object: any): RevokeUserPermissionRequest;
    toJSON(message: RevokeUserPermissionRequest): unknown;
    fromPartial(object: DeepPartial<RevokeUserPermissionRequest>): RevokeUserPermissionRequest;
};
export declare const RevokeUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.RevokeUserPermissionMetadata";
    encode(message: RevokeUserPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionMetadata;
    fromJSON(object: any): RevokeUserPermissionMetadata;
    toJSON(message: RevokeUserPermissionMetadata): unknown;
    fromPartial(object: DeepPartial<RevokeUserPermissionMetadata>): RevokeUserPermissionMetadata;
};
/** A set of methods for managing SQL Server users. */
export declare const UserServiceService: {
    /**
     * Returns the specified SQL Server user.
     *
     * To get the list of available SQL Server users, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    /** Retrieves a list of SQL Server users in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUsersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUsersRequest;
        readonly responseSerialize: (value: ListUsersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUsersResponse;
    };
    /** Creates an SQL Server user in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified SQL Server user. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified SQL Server user. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Grants a permission to the specified SQL Server user. */
    readonly grantPermission: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/GrantPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GrantUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GrantUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Revokes a permission from the specified SQL Server user. */
    readonly revokePermission: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/RevokePermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RevokeUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RevokeUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified SQL Server user.
     *
     * To get the list of available SQL Server users, make a [List] request.
     */
    get: handleUnaryCall<GetUserRequest, User>;
    /** Retrieves a list of SQL Server users in the specified cluster. */
    list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
    /** Creates an SQL Server user in the specified cluster. */
    create: handleUnaryCall<CreateUserRequest, Operation>;
    /** Modifies the specified SQL Server user. */
    update: handleUnaryCall<UpdateUserRequest, Operation>;
    /** Deletes the specified SQL Server user. */
    delete: handleUnaryCall<DeleteUserRequest, Operation>;
    /** Grants a permission to the specified SQL Server user. */
    grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
    /** Revokes a permission from the specified SQL Server user. */
    revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}
export interface UserServiceClient extends Client {
    /**
     * Returns the specified SQL Server user.
     *
     * To get the list of available SQL Server users, make a [List] request.
     */
    get(request: GetUserRequest, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    /** Retrieves a list of SQL Server users in the specified cluster. */
    list(request: ListUsersRequest, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    /** Creates an SQL Server user in the specified cluster. */
    create(request: CreateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified SQL Server user. */
    update(request: UpdateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified SQL Server user. */
    delete(request: DeleteUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Grants a permission to the specified SQL Server user. */
    grantPermission(request: GrantUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Revokes a permission from the specified SQL Server user. */
    revokePermission(request: RevokeUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revokePermission(request: RevokeUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revokePermission(request: RevokeUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const UserServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => UserServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
