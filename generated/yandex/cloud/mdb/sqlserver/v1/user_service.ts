/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    User,
    UserSpec,
    Permission,
} from '../../../../../yandex/cloud/mdb/sqlserver/v1/user';
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

export const protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';

export interface GetUserRequest {
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
    /** ID of the SQL Server cluster the user is being created for. */
    clusterId: string;
    /** Name of the user being created. */
    userName: string;
}

export interface UpdateUserRequest {
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
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Name of the user being updated. */
    userName: string;
}

export interface DeleteUserRequest {
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
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Name of the user being deleted. */
    userName: string;
}

export interface GrantUserPermissionRequest {
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
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Name of the user whose permission is being revoked. */
    userName: string;
}

const baseGetUserRequest: object = { clusterId: '', userName: '' };

export const GetUserRequest = {
    encode(
        message: GetUserRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserRequest } as GetUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserRequest {
        const message = { ...baseGetUserRequest } as GetUserRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: GetUserRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
        const message = { ...baseGetUserRequest } as GetUserRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

const baseListUsersRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListUsersRequest = {
    encode(
        message: ListUsersRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUsersRequest } as ListUsersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListUsersRequest {
        const message = { ...baseListUsersRequest } as ListUsersRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
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

    toJSON(message: ListUsersRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest {
        const message = { ...baseListUsersRequest } as ListUsersRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
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

const baseListUsersResponse: object = { nextPageToken: '' };

export const ListUsersResponse = {
    encode(
        message: ListUsersResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.users) {
            User.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUsersResponse } as ListUsersResponse;
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(User.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListUsersResponse {
        const message = { ...baseListUsersResponse } as ListUsersResponse;
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(User.fromJSON(e));
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

    toJSON(message: ListUsersResponse): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) =>
                e ? User.toJSON(e) : undefined
            );
        } else {
            obj.users = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse {
        const message = { ...baseListUsersResponse } as ListUsersResponse;
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(User.fromPartial(e));
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

const baseCreateUserRequest: object = { clusterId: '' };

export const CreateUserRequest = {
    encode(
        message: CreateUserRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userSpec !== undefined) {
            UserSpec.encode(
                message.userSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserRequest } as CreateUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userSpec = UserSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserRequest {
        const message = { ...baseCreateUserRequest } as CreateUserRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userSpec !== undefined && object.userSpec !== null) {
            message.userSpec = UserSpec.fromJSON(object.userSpec);
        } else {
            message.userSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateUserRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userSpec !== undefined &&
            (obj.userSpec = message.userSpec
                ? UserSpec.toJSON(message.userSpec)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
        const message = { ...baseCreateUserRequest } as CreateUserRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userSpec !== undefined && object.userSpec !== null) {
            message.userSpec = UserSpec.fromPartial(object.userSpec);
        } else {
            message.userSpec = undefined;
        }
        return message;
    },
};

const baseCreateUserMetadata: object = { clusterId: '', userName: '' };

export const CreateUserMetadata = {
    encode(
        message: CreateUserMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateUserMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserMetadata {
        const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: CreateUserMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateUserMetadata>): CreateUserMetadata {
        const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

const baseUpdateUserRequest: object = {
    clusterId: '',
    userName: '',
    password: '',
};

export const UpdateUserRequest = {
    encode(
        message: UpdateUserRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.password !== '') {
            writer.uint32(34).string(message.password);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.permissions.push(
                        Permission.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateUserRequest {
        const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
        message.permissions = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateUserRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined
            );
        } else {
            obj.permissions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
        const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
        message.permissions = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpdateUserMetadata: object = { clusterId: '', userName: '' };

export const UpdateUserMetadata = {
    encode(
        message: UpdateUserMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateUserMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateUserMetadata {
        const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: UpdateUserMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateUserMetadata>): UpdateUserMetadata {
        const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

const baseDeleteUserRequest: object = { clusterId: '', userName: '' };

export const DeleteUserRequest = {
    encode(
        message: DeleteUserRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserRequest {
        const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: DeleteUserRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
        const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

const baseDeleteUserMetadata: object = { clusterId: '', userName: '' };

export const DeleteUserMetadata = {
    encode(
        message: DeleteUserMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteUserMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserMetadata {
        const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: DeleteUserMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteUserMetadata>): DeleteUserMetadata {
        const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

const baseGrantUserPermissionRequest: object = { clusterId: '', userName: '' };

export const GrantUserPermissionRequest = {
    encode(
        message: GrantUserPermissionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.permission !== undefined) {
            Permission.encode(
                message.permission,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GrantUserPermissionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGrantUserPermissionRequest,
        } as GrantUserPermissionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.permission = Permission.decode(
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

    fromJSON(object: any): GrantUserPermissionRequest {
        const message = {
            ...baseGrantUserPermissionRequest,
        } as GrantUserPermissionRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromJSON(object.permission);
        } else {
            message.permission = undefined;
        }
        return message;
    },

    toJSON(message: GrantUserPermissionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.permission !== undefined &&
            (obj.permission = message.permission
                ? Permission.toJSON(message.permission)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GrantUserPermissionRequest>
    ): GrantUserPermissionRequest {
        const message = {
            ...baseGrantUserPermissionRequest,
        } as GrantUserPermissionRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromPartial(object.permission);
        } else {
            message.permission = undefined;
        }
        return message;
    },
};

const baseGrantUserPermissionMetadata: object = { clusterId: '', userName: '' };

export const GrantUserPermissionMetadata = {
    encode(
        message: GrantUserPermissionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GrantUserPermissionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGrantUserPermissionMetadata,
        } as GrantUserPermissionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrantUserPermissionMetadata {
        const message = {
            ...baseGrantUserPermissionMetadata,
        } as GrantUserPermissionMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: GrantUserPermissionMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GrantUserPermissionMetadata>
    ): GrantUserPermissionMetadata {
        const message = {
            ...baseGrantUserPermissionMetadata,
        } as GrantUserPermissionMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

const baseRevokeUserPermissionRequest: object = { clusterId: '', userName: '' };

export const RevokeUserPermissionRequest = {
    encode(
        message: RevokeUserPermissionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.permission !== undefined) {
            Permission.encode(
                message.permission,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RevokeUserPermissionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRevokeUserPermissionRequest,
        } as RevokeUserPermissionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.permission = Permission.decode(
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

    fromJSON(object: any): RevokeUserPermissionRequest {
        const message = {
            ...baseRevokeUserPermissionRequest,
        } as RevokeUserPermissionRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromJSON(object.permission);
        } else {
            message.permission = undefined;
        }
        return message;
    },

    toJSON(message: RevokeUserPermissionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.permission !== undefined &&
            (obj.permission = message.permission
                ? Permission.toJSON(message.permission)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RevokeUserPermissionRequest>
    ): RevokeUserPermissionRequest {
        const message = {
            ...baseRevokeUserPermissionRequest,
        } as RevokeUserPermissionRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromPartial(object.permission);
        } else {
            message.permission = undefined;
        }
        return message;
    },
};

const baseRevokeUserPermissionMetadata: object = {
    clusterId: '',
    userName: '',
};

export const RevokeUserPermissionMetadata = {
    encode(
        message: RevokeUserPermissionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RevokeUserPermissionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRevokeUserPermissionMetadata,
        } as RevokeUserPermissionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RevokeUserPermissionMetadata {
        const message = {
            ...baseRevokeUserPermissionMetadata,
        } as RevokeUserPermissionMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        return message;
    },

    toJSON(message: RevokeUserPermissionMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RevokeUserPermissionMetadata>
    ): RevokeUserPermissionMetadata {
        const message = {
            ...baseRevokeUserPermissionMetadata,
        } as RevokeUserPermissionMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        return message;
    },
};

/** A set of methods for managing SQL Server users. */
export const UserServiceService = {
    /**
     * Returns the specified SQL Server user.
     *
     * To get the list of available SQL Server users, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserRequest) =>
            Buffer.from(GetUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
        responseSerialize: (value: User) =>
            Buffer.from(User.encode(value).finish()),
        responseDeserialize: (value: Buffer) => User.decode(value),
    },
    /** Retrieves a list of SQL Server users in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUsersRequest) =>
            Buffer.from(ListUsersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUsersRequest.decode(value),
        responseSerialize: (value: ListUsersResponse) =>
            Buffer.from(ListUsersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUsersResponse.decode(value),
    },
    /** Creates an SQL Server user in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateUserRequest) =>
            Buffer.from(CreateUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Modifies the specified SQL Server user. */
    update: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateUserRequest) =>
            Buffer.from(UpdateUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified SQL Server user. */
    delete: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteUserRequest) =>
            Buffer.from(DeleteUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Grants a permission to the specified SQL Server user. */
    grantPermission: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/GrantPermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GrantUserPermissionRequest) =>
            Buffer.from(GrantUserPermissionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GrantUserPermissionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Revokes a permission from the specified SQL Server user. */
    revokePermission: {
        path: '/yandex.cloud.mdb.sqlserver.v1.UserService/RevokePermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RevokeUserPermissionRequest) =>
            Buffer.from(RevokeUserPermissionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RevokeUserPermissionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

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
    get(
        request: GetUserRequest,
        callback: (error: ServiceError | null, response: User) => void
    ): ClientUnaryCall;
    get(
        request: GetUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: User) => void
    ): ClientUnaryCall;
    get(
        request: GetUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: User) => void
    ): ClientUnaryCall;
    /** Retrieves a list of SQL Server users in the specified cluster. */
    list(
        request: ListUsersRequest,
        callback: (
            error: ServiceError | null,
            response: ListUsersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListUsersRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListUsersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListUsersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListUsersResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates an SQL Server user in the specified cluster. */
    create(
        request: CreateUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Modifies the specified SQL Server user. */
    update(
        request: UpdateUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified SQL Server user. */
    delete(
        request: DeleteUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Grants a permission to the specified SQL Server user. */
    grantPermission(
        request: GrantUserPermissionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    grantPermission(
        request: GrantUserPermissionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    grantPermission(
        request: GrantUserPermissionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Revokes a permission from the specified SQL Server user. */
    revokePermission(
        request: RevokeUserPermissionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    revokePermission(
        request: RevokeUserPermissionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    revokePermission(
        request: RevokeUserPermissionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
    UserServiceService,
    'yandex.cloud.mdb.sqlserver.v1.UserService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): UserServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
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