/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import { Role } from '../../../../yandex/cloud/iam/v1/role';
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

export const protobufPackage = 'yandex.cloud.iam.v1';

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

const baseGetRoleRequest: object = {
    $type: 'yandex.cloud.iam.v1.GetRoleRequest',
    roleId: '',
};

export const GetRoleRequest = {
    $type: 'yandex.cloud.iam.v1.GetRoleRequest' as const,

    encode(
        message: GetRoleRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRoleRequest } as GetRoleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoleRequest {
        const message = { ...baseGetRoleRequest } as GetRoleRequest;
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        } else {
            message.roleId = '';
        }
        return message;
    },

    toJSON(message: GetRoleRequest): unknown {
        const obj: any = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetRoleRequest>): GetRoleRequest {
        const message = { ...baseGetRoleRequest } as GetRoleRequest;
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        } else {
            message.roleId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetRoleRequest.$type, GetRoleRequest);

const baseListRolesRequest: object = {
    $type: 'yandex.cloud.iam.v1.ListRolesRequest',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRolesRequest = {
    $type: 'yandex.cloud.iam.v1.ListRolesRequest' as const,

    encode(
        message: ListRolesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRolesRequest } as ListRolesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRolesRequest {
        const message = { ...baseListRolesRequest } as ListRolesRequest;
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

    toJSON(message: ListRolesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListRolesRequest>): ListRolesRequest {
        const message = { ...baseListRolesRequest } as ListRolesRequest;
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

messageTypeRegistry.set(ListRolesRequest.$type, ListRolesRequest);

const baseListRolesResponse: object = {
    $type: 'yandex.cloud.iam.v1.ListRolesResponse',
    nextPageToken: '',
};

export const ListRolesResponse = {
    $type: 'yandex.cloud.iam.v1.ListRolesResponse' as const,

    encode(
        message: ListRolesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.roles) {
            Role.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRolesResponse } as ListRolesResponse;
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roles.push(Role.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRolesResponse {
        const message = { ...baseListRolesResponse } as ListRolesResponse;
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(Role.fromJSON(e));
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

    toJSON(message: ListRolesResponse): unknown {
        const obj: any = {};
        if (message.roles) {
            obj.roles = message.roles.map((e) =>
                e ? Role.toJSON(e) : undefined
            );
        } else {
            obj.roles = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListRolesResponse>): ListRolesResponse {
        const message = { ...baseListRolesResponse } as ListRolesResponse;
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(Role.fromPartial(e));
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

messageTypeRegistry.set(ListRolesResponse.$type, ListRolesResponse);

/** A set of methods for managing Role resources. */
export const RoleServiceService = {
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.RoleService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoleRequest) =>
            Buffer.from(GetRoleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRoleRequest.decode(value),
        responseSerialize: (value: Role) =>
            Buffer.from(Role.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Role.decode(value),
    },
    /** Retrieves the list of Role resources. */
    list: {
        path: '/yandex.cloud.iam.v1.RoleService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRolesRequest) =>
            Buffer.from(ListRolesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRolesRequest.decode(value),
        responseSerialize: (value: ListRolesResponse) =>
            Buffer.from(ListRolesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRolesResponse.decode(value),
    },
} as const;

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
    get(
        request: GetRoleRequest,
        callback: (error: ServiceError | null, response: Role) => void
    ): ClientUnaryCall;
    get(
        request: GetRoleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Role) => void
    ): ClientUnaryCall;
    get(
        request: GetRoleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Role) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Role resources. */
    list(
        request: ListRolesRequest,
        callback: (
            error: ServiceError | null,
            response: ListRolesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRolesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRolesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRolesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRolesResponse
        ) => void
    ): ClientUnaryCall;
}

export const RoleServiceClient = makeGenericClientConstructor(
    RoleServiceService,
    'yandex.cloud.iam.v1.RoleService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): RoleServiceClient;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
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
