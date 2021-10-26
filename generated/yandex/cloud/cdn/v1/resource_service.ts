/* eslint-disable */
import { BoolValue, Int64Value } from '../../../../google/protobuf/wrappers';
import { OriginMeta } from '../../../../yandex/cloud/cdn/v1/origin';
import {
    OriginProtocol,
    Resource,
    SecondaryHostnames,
    ResourceOptions,
    SSLTargetCertificate,
    originProtocolFromJSON,
    originProtocolToJSON,
} from '../../../../yandex/cloud/cdn/v1/resource';
import { Operation } from '../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.cdn.v1';

/** A request to get a resource. */
export interface GetResourceRequest {
    /** ID of the requested resource. */
    resourceId: string;
}

export interface ListResourcesRequest {
    /** ID of the folder to request listing for. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListResourcesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListResourcesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListResourcesResponse {
    /** List of the resources */
    resources: Resource[];
    /**
     * [next_page_token] token allows you to get the next page of results for list requests.
     * If the number of results is larger than [ListResourcesRequest.page_size], use
     * the [next_page_token] as the value for the [ListResourcesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateResourceRequest {
    /** ID of the to bind with new resource. */
    folderId: string;
    /** CDN endpoint CNAME, must be unique among clients's resources. */
    cname: string;
    /** Specify the origins to be used for CDN resources requests. */
    origin: CreateResourceRequest_Origin | undefined;
    /** List of additional CNAMEs. */
    secondaryHostnames: SecondaryHostnames | undefined;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /**
     * Flag to create Resource either in active or disabled state.
     * In active state Origins payload could be transmitted from CDN CNAME requests.
     * Default value: true
     */
    active: boolean | undefined;
    /** Resource settings and options to tune CDN edge behavior. Most is unset. */
    options: ResourceOptions | undefined;
    /** SSL Certificate options. */
    sslCertificate: SSLTargetCertificate | undefined;
}

export interface CreateResourceRequest_Origin {
    /** ID of pre-created origin group. */
    originGroupId: number | undefined;
    /**
     * Create new Origins group with single source, it's id will be
     * returned in result.
     */
    originSource: string | undefined;
    /** Set up resourse origin parameters. */
    originSourceParams: ResourceOriginParams | undefined;
}

/** A set of resourse origin parameters. */
export interface ResourceOriginParams {
    /** Sourse of the content. */
    source: string;
    /** Set up type of the origin. */
    meta: OriginMeta | undefined;
}

export interface CreateResourceMetadata {
    /** ID of created resource. */
    resourceId: string;
}

export interface UpdateResourceRequest {
    /** ID of updated resource. */
    resourceId: string;
    /** ID of updated origin group. */
    originGroupId: number | undefined;
    /** List of additional CNAMEs. */
    secondaryHostnames: SecondaryHostnames | undefined;
    /** Resource settings and options to tune CDN edge behavior. */
    options: ResourceOptions | undefined;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /**
     * Flag to create Resource either in active or disabled state.
     * In active state Origins payload could be transmitted from CDN CNAME requests.
     * Default value: true
     */
    active: boolean | undefined;
    /** SSL Certificate options. */
    sslCertificate: SSLTargetCertificate | undefined;
}

export interface UpdateResourceMetadata {
    /** ID of updated resource. */
    resourceId: string;
}

export interface DeleteResourceRequest {
    /** ID of resource to delete. */
    resourceId: string;
}

export interface DeleteResourceMetadata {
    /** ID of deleted resource. */
    resourceId: string;
}

export interface GetProviderCNameRequest {
    /** Folder ID to get provider's CNAME. */
    folderId: string;
}

export interface GetProviderCNameResponse {
    /** Provider's CNAME. */
    cname: string;
    /** ID of the folder that the provider belongs to. */
    folderId: string;
}

const baseGetResourceRequest: object = { resourceId: '' };

export const GetResourceRequest = {
    encode(
        message: GetResourceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetResourceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetResourceRequest } as GetResourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourceRequest {
        const message = { ...baseGetResourceRequest } as GetResourceRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: GetResourceRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetResourceRequest>): GetResourceRequest {
        const message = { ...baseGetResourceRequest } as GetResourceRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

const baseListResourcesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListResourcesRequest = {
    encode(
        message: ListResourcesRequest,
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
    ): ListResourcesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

    fromJSON(object: any): ListResourcesRequest {
        const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

    toJSON(message: ListResourcesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListResourcesRequest>
    ): ListResourcesRequest {
        const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

const baseListResourcesResponse: object = { nextPageToken: '' };

export const ListResourcesResponse = {
    encode(
        message: ListResourcesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.resources) {
            Resource.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListResourcesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcesResponse,
        } as ListResourcesResponse;
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(
                        Resource.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListResourcesResponse {
        const message = {
            ...baseListResourcesResponse,
        } as ListResourcesResponse;
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(Resource.fromJSON(e));
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

    toJSON(message: ListResourcesResponse): unknown {
        const obj: any = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) =>
                e ? Resource.toJSON(e) : undefined
            );
        } else {
            obj.resources = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListResourcesResponse>
    ): ListResourcesResponse {
        const message = {
            ...baseListResourcesResponse,
        } as ListResourcesResponse;
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(Resource.fromPartial(e));
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

const baseCreateResourceRequest: object = {
    folderId: '',
    cname: '',
    originProtocol: 0,
};

export const CreateResourceRequest = {
    encode(
        message: CreateResourceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.cname !== '') {
            writer.uint32(18).string(message.cname);
        }
        if (message.origin !== undefined) {
            CreateResourceRequest_Origin.encode(
                message.origin,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            SecondaryHostnames.encode(
                message.secondaryHostnames,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            BoolValue.encode(
                { value: message.active! },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(
                message.options,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            SSLTargetCertificate.encode(
                message.sslCertificate,
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateResourceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResourceRequest,
        } as CreateResourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.cname = reader.string();
                    break;
                case 3:
                    message.origin = CreateResourceRequest_Origin.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.secondaryHostnames = SecondaryHostnames.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.originProtocol = reader.int32() as any;
                    break;
                case 6:
                    message.active = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.options = ResourceOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.sslCertificate = SSLTargetCertificate.decode(
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

    fromJSON(object: any): CreateResourceRequest {
        const message = {
            ...baseCreateResourceRequest,
        } as CreateResourceRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = String(object.cname);
        } else {
            message.cname = '';
        }
        if (object.origin !== undefined && object.origin !== null) {
            message.origin = CreateResourceRequest_Origin.fromJSON(
                object.origin
            );
        } else {
            message.origin = undefined;
        }
        if (
            object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null
        ) {
            message.secondaryHostnames = SecondaryHostnames.fromJSON(
                object.secondaryHostnames
            );
        } else {
            message.secondaryHostnames = undefined;
        }
        if (
            object.originProtocol !== undefined &&
            object.originProtocol !== null
        ) {
            message.originProtocol = originProtocolFromJSON(
                object.originProtocol
            );
        } else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        } else {
            message.active = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromJSON(object.options);
        } else {
            message.options = undefined;
        }
        if (
            object.sslCertificate !== undefined &&
            object.sslCertificate !== null
        ) {
            message.sslCertificate = SSLTargetCertificate.fromJSON(
                object.sslCertificate
            );
        } else {
            message.sslCertificate = undefined;
        }
        return message;
    },

    toJSON(message: CreateResourceRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cname !== undefined && (obj.cname = message.cname);
        message.origin !== undefined &&
            (obj.origin = message.origin
                ? CreateResourceRequest_Origin.toJSON(message.origin)
                : undefined);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options
                ? ResourceOptions.toJSON(message.options)
                : undefined);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? SSLTargetCertificate.toJSON(message.sslCertificate)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateResourceRequest>
    ): CreateResourceRequest {
        const message = {
            ...baseCreateResourceRequest,
        } as CreateResourceRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = object.cname;
        } else {
            message.cname = '';
        }
        if (object.origin !== undefined && object.origin !== null) {
            message.origin = CreateResourceRequest_Origin.fromPartial(
                object.origin
            );
        } else {
            message.origin = undefined;
        }
        if (
            object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null
        ) {
            message.secondaryHostnames = SecondaryHostnames.fromPartial(
                object.secondaryHostnames
            );
        } else {
            message.secondaryHostnames = undefined;
        }
        if (
            object.originProtocol !== undefined &&
            object.originProtocol !== null
        ) {
            message.originProtocol = object.originProtocol;
        } else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        } else {
            message.active = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromPartial(object.options);
        } else {
            message.options = undefined;
        }
        if (
            object.sslCertificate !== undefined &&
            object.sslCertificate !== null
        ) {
            message.sslCertificate = SSLTargetCertificate.fromPartial(
                object.sslCertificate
            );
        } else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};

const baseCreateResourceRequest_Origin: object = {};

export const CreateResourceRequest_Origin = {
    encode(
        message: CreateResourceRequest_Origin,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.originGroupId !== undefined) {
            writer.uint32(8).int64(message.originGroupId);
        }
        if (message.originSource !== undefined) {
            writer.uint32(18).string(message.originSource);
        }
        if (message.originSourceParams !== undefined) {
            ResourceOriginParams.encode(
                message.originSourceParams,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateResourceRequest_Origin {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResourceRequest_Origin,
        } as CreateResourceRequest_Origin;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.originSource = reader.string();
                    break;
                case 3:
                    message.originSourceParams = ResourceOriginParams.decode(
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

    fromJSON(object: any): CreateResourceRequest_Origin {
        const message = {
            ...baseCreateResourceRequest_Origin,
        } as CreateResourceRequest_Origin;
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = Number(object.originGroupId);
        } else {
            message.originGroupId = undefined;
        }
        if (object.originSource !== undefined && object.originSource !== null) {
            message.originSource = String(object.originSource);
        } else {
            message.originSource = undefined;
        }
        if (
            object.originSourceParams !== undefined &&
            object.originSourceParams !== null
        ) {
            message.originSourceParams = ResourceOriginParams.fromJSON(
                object.originSourceParams
            );
        } else {
            message.originSourceParams = undefined;
        }
        return message;
    },

    toJSON(message: CreateResourceRequest_Origin): unknown {
        const obj: any = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.originSource !== undefined &&
            (obj.originSource = message.originSource);
        message.originSourceParams !== undefined &&
            (obj.originSourceParams = message.originSourceParams
                ? ResourceOriginParams.toJSON(message.originSourceParams)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateResourceRequest_Origin>
    ): CreateResourceRequest_Origin {
        const message = {
            ...baseCreateResourceRequest_Origin,
        } as CreateResourceRequest_Origin;
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = object.originGroupId;
        } else {
            message.originGroupId = undefined;
        }
        if (object.originSource !== undefined && object.originSource !== null) {
            message.originSource = object.originSource;
        } else {
            message.originSource = undefined;
        }
        if (
            object.originSourceParams !== undefined &&
            object.originSourceParams !== null
        ) {
            message.originSourceParams = ResourceOriginParams.fromPartial(
                object.originSourceParams
            );
        } else {
            message.originSourceParams = undefined;
        }
        return message;
    },
};

const baseResourceOriginParams: object = { source: '' };

export const ResourceOriginParams = {
    encode(
        message: ResourceOriginParams,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.meta !== undefined) {
            OriginMeta.encode(message.meta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOriginParams {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOriginParams } as ResourceOriginParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.meta = OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOriginParams {
        const message = { ...baseResourceOriginParams } as ResourceOriginParams;
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        } else {
            message.source = '';
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromJSON(object.meta);
        } else {
            message.meta = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOriginParams): unknown {
        const obj: any = {};
        message.source !== undefined && (obj.source = message.source);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOriginParams>
    ): ResourceOriginParams {
        const message = { ...baseResourceOriginParams } as ResourceOriginParams;
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        } else {
            message.source = '';
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromPartial(object.meta);
        } else {
            message.meta = undefined;
        }
        return message;
    },
};

const baseCreateResourceMetadata: object = { resourceId: '' };

export const CreateResourceMetadata = {
    encode(
        message: CreateResourceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateResourceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResourceMetadata,
        } as CreateResourceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResourceMetadata {
        const message = {
            ...baseCreateResourceMetadata,
        } as CreateResourceMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: CreateResourceMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateResourceMetadata>
    ): CreateResourceMetadata {
        const message = {
            ...baseCreateResourceMetadata,
        } as CreateResourceMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

const baseUpdateResourceRequest: object = { resourceId: '', originProtocol: 0 };

export const UpdateResourceRequest = {
    encode(
        message: UpdateResourceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.originGroupId !== undefined) {
            Int64Value.encode(
                { value: message.originGroupId! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            SecondaryHostnames.encode(
                message.secondaryHostnames,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(
                message.options,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            BoolValue.encode(
                { value: message.active! },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            SSLTargetCertificate.encode(
                message.sslCertificate,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateResourceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateResourceRequest,
        } as UpdateResourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.originGroupId = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.secondaryHostnames = SecondaryHostnames.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.options = ResourceOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.originProtocol = reader.int32() as any;
                    break;
                case 6:
                    message.active = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.sslCertificate = SSLTargetCertificate.decode(
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

    fromJSON(object: any): UpdateResourceRequest {
        const message = {
            ...baseUpdateResourceRequest,
        } as UpdateResourceRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = Number(object.originGroupId);
        } else {
            message.originGroupId = undefined;
        }
        if (
            object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null
        ) {
            message.secondaryHostnames = SecondaryHostnames.fromJSON(
                object.secondaryHostnames
            );
        } else {
            message.secondaryHostnames = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromJSON(object.options);
        } else {
            message.options = undefined;
        }
        if (
            object.originProtocol !== undefined &&
            object.originProtocol !== null
        ) {
            message.originProtocol = originProtocolFromJSON(
                object.originProtocol
            );
        } else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        } else {
            message.active = undefined;
        }
        if (
            object.sslCertificate !== undefined &&
            object.sslCertificate !== null
        ) {
            message.sslCertificate = SSLTargetCertificate.fromJSON(
                object.sslCertificate
            );
        } else {
            message.sslCertificate = undefined;
        }
        return message;
    },

    toJSON(message: UpdateResourceRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.options !== undefined &&
            (obj.options = message.options
                ? ResourceOptions.toJSON(message.options)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? SSLTargetCertificate.toJSON(message.sslCertificate)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateResourceRequest>
    ): UpdateResourceRequest {
        const message = {
            ...baseUpdateResourceRequest,
        } as UpdateResourceRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = object.originGroupId;
        } else {
            message.originGroupId = undefined;
        }
        if (
            object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null
        ) {
            message.secondaryHostnames = SecondaryHostnames.fromPartial(
                object.secondaryHostnames
            );
        } else {
            message.secondaryHostnames = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromPartial(object.options);
        } else {
            message.options = undefined;
        }
        if (
            object.originProtocol !== undefined &&
            object.originProtocol !== null
        ) {
            message.originProtocol = object.originProtocol;
        } else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        } else {
            message.active = undefined;
        }
        if (
            object.sslCertificate !== undefined &&
            object.sslCertificate !== null
        ) {
            message.sslCertificate = SSLTargetCertificate.fromPartial(
                object.sslCertificate
            );
        } else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};

const baseUpdateResourceMetadata: object = { resourceId: '' };

export const UpdateResourceMetadata = {
    encode(
        message: UpdateResourceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateResourceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateResourceMetadata,
        } as UpdateResourceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateResourceMetadata {
        const message = {
            ...baseUpdateResourceMetadata,
        } as UpdateResourceMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: UpdateResourceMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateResourceMetadata>
    ): UpdateResourceMetadata {
        const message = {
            ...baseUpdateResourceMetadata,
        } as UpdateResourceMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

const baseDeleteResourceRequest: object = { resourceId: '' };

export const DeleteResourceRequest = {
    encode(
        message: DeleteResourceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteResourceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteResourceRequest,
        } as DeleteResourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteResourceRequest {
        const message = {
            ...baseDeleteResourceRequest,
        } as DeleteResourceRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: DeleteResourceRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteResourceRequest>
    ): DeleteResourceRequest {
        const message = {
            ...baseDeleteResourceRequest,
        } as DeleteResourceRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

const baseDeleteResourceMetadata: object = { resourceId: '' };

export const DeleteResourceMetadata = {
    encode(
        message: DeleteResourceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteResourceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteResourceMetadata,
        } as DeleteResourceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteResourceMetadata {
        const message = {
            ...baseDeleteResourceMetadata,
        } as DeleteResourceMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: DeleteResourceMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteResourceMetadata>
    ): DeleteResourceMetadata {
        const message = {
            ...baseDeleteResourceMetadata,
        } as DeleteResourceMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

const baseGetProviderCNameRequest: object = { folderId: '' };

export const GetProviderCNameRequest = {
    encode(
        message: GetProviderCNameRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetProviderCNameRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetProviderCNameRequest,
        } as GetProviderCNameRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetProviderCNameRequest {
        const message = {
            ...baseGetProviderCNameRequest,
        } as GetProviderCNameRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: GetProviderCNameRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetProviderCNameRequest>
    ): GetProviderCNameRequest {
        const message = {
            ...baseGetProviderCNameRequest,
        } as GetProviderCNameRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

const baseGetProviderCNameResponse: object = { cname: '', folderId: '' };

export const GetProviderCNameResponse = {
    encode(
        message: GetProviderCNameResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cname !== '') {
            writer.uint32(10).string(message.cname);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetProviderCNameResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetProviderCNameResponse,
        } as GetProviderCNameResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cname = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetProviderCNameResponse {
        const message = {
            ...baseGetProviderCNameResponse,
        } as GetProviderCNameResponse;
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = String(object.cname);
        } else {
            message.cname = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: GetProviderCNameResponse): unknown {
        const obj: any = {};
        message.cname !== undefined && (obj.cname = message.cname);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetProviderCNameResponse>
    ): GetProviderCNameResponse {
        const message = {
            ...baseGetProviderCNameResponse,
        } as GetProviderCNameResponse;
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = object.cname;
        } else {
            message.cname = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

/** Provider's resources management service. */
export const ResourceServiceService = {
    /** Get client's CDN resource by resource id. */
    get: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetResourceRequest) =>
            Buffer.from(GetResourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetResourceRequest.decode(value),
        responseSerialize: (value: Resource) =>
            Buffer.from(Resource.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Resource.decode(value),
    },
    /** Lists CDN resources. */
    list: {
        path: '/yandex.cloud.cdn.v1.ResourceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListResourcesRequest) =>
            Buffer.from(ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListResourcesRequest.decode(value),
        responseSerialize: (value: ListResourcesResponse) =>
            Buffer.from(ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListResourcesResponse.decode(value),
    },
    /** Creates client's CDN resource. */
    create: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateResourceRequest) =>
            Buffer.from(CreateResourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateResourceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates of client's CDN resource. (PATCH behavior) */
    update: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateResourceRequest) =>
            Buffer.from(UpdateResourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateResourceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes client's CDN resource. */
    delete: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteResourceRequest) =>
            Buffer.from(DeleteResourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteResourceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: {
        path: '/yandex.cloud.cdn.v1.ResourceService/GetProviderCName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetProviderCNameRequest) =>
            Buffer.from(GetProviderCNameRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetProviderCNameRequest.decode(value),
        responseSerialize: (value: GetProviderCNameResponse) =>
            Buffer.from(GetProviderCNameResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetProviderCNameResponse.decode(value),
    },
} as const;

export interface ResourceServiceServer extends UntypedServiceImplementation {
    /** Get client's CDN resource by resource id. */
    get: handleUnaryCall<GetResourceRequest, Resource>;
    /** Lists CDN resources. */
    list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    /** Creates client's CDN resource. */
    create: handleUnaryCall<CreateResourceRequest, Operation>;
    /** Updates of client's CDN resource. (PATCH behavior) */
    update: handleUnaryCall<UpdateResourceRequest, Operation>;
    /** Deletes client's CDN resource. */
    delete: handleUnaryCall<DeleteResourceRequest, Operation>;
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: handleUnaryCall<
        GetProviderCNameRequest,
        GetProviderCNameResponse
    >;
}

export interface ResourceServiceClient extends Client {
    /** Get client's CDN resource by resource id. */
    get(
        request: GetResourceRequest,
        callback: (error: ServiceError | null, response: Resource) => void
    ): ClientUnaryCall;
    get(
        request: GetResourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Resource) => void
    ): ClientUnaryCall;
    get(
        request: GetResourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Resource) => void
    ): ClientUnaryCall;
    /** Lists CDN resources. */
    list(
        request: ListResourcesRequest,
        callback: (
            error: ServiceError | null,
            response: ListResourcesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListResourcesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListResourcesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListResourcesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListResourcesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates client's CDN resource. */
    create(
        request: CreateResourceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateResourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateResourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates of client's CDN resource. (PATCH behavior) */
    update(
        request: UpdateResourceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateResourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateResourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes client's CDN resource. */
    delete(
        request: DeleteResourceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteResourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteResourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName(
        request: GetProviderCNameRequest,
        callback: (
            error: ServiceError | null,
            response: GetProviderCNameResponse
        ) => void
    ): ClientUnaryCall;
    getProviderCName(
        request: GetProviderCNameRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetProviderCNameResponse
        ) => void
    ): ClientUnaryCall;
    getProviderCName(
        request: GetProviderCNameRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetProviderCNameResponse
        ) => void
    ): ClientUnaryCall;
}

export const ResourceServiceClient = makeGenericClientConstructor(
    ResourceServiceService,
    'yandex.cloud.cdn.v1.ResourceService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ResourceServiceClient;
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
