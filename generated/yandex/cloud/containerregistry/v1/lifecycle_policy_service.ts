/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import {
    LifecyclePolicy_Status,
    LifecyclePolicy,
    LifecycleRule,
    lifecyclePolicy_StatusFromJSON,
    lifecyclePolicy_StatusToJSON,
} from '../../../../yandex/cloud/containerregistry/v1/lifecycle_policy';
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

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export interface GetLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}

export interface ListLifecyclePoliciesRequest {
    /** ID of the lifecycle policy. */
    registryId: string | undefined;
    /** Repository of the lifecycle policy. */
    repositoryId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns
     * a [ListLifecyclePoliciesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLifecyclePoliciesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters lifecycle policy resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [LifecyclePolicy.name], [LifecyclePolicy.created_at] and [LifecyclePolicy.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListLifecyclePoliciesResponse {
    /** List of lifecycle policies. */
    lifecyclePolicies: LifecyclePolicy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLifecyclePoliciesRequest.page_size], use `next_page_token` as the value
     * for the [ListLifecyclePoliciesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateLifecyclePolicyRequest {
    /** ID of the lifecycle policy repository. */
    repositoryId: string;
    /** Name of lifecycle policy. */
    name: string;
    /** Description of lifecycle policy. */
    description: string;
    /** Status of the lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** The rules of the lifecycle policy. */
    rules: LifecycleRule[];
}

export interface UpdateLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /** Field mask that specifies which fields of the lifecycle policy resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of lifecycle policy. */
    name: string;
    /** Description of lifecycle policy. */
    description: string;
    /** Status of the lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** The rules of the lifecycle policy. */
    rules: LifecycleRule[];
}

export interface DeleteLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}

export interface CreateLifecyclePolicyMetadata {
    /** ID of the lifecycle policy resource that is being created. */
    lifecyclePolicyId: string;
}

export interface UpdateLifecyclePolicyMetadata {
    /** ID of the lifecycle policy resource that is being updated. */
    lifecyclePolicyId: string;
}

export interface DeleteLifecyclePolicyMetadata {
    /** ID of the lifecycle policy resource that is being deleted. */
    lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyMetadata {
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyResult {
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /** Time of the getting result. */
    runAt: Date | undefined;
    /** Count of affected images. */
    affectedImagesCount: number;
}

export interface GetDryRunLifecyclePolicyResultRequest {
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
}

export interface ListDryRunLifecyclePolicyResultsRequest {
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns
     * a [ListDryRunLifecyclePolicyResultsResponse.next_page_token] that can be used to get
     * the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDryRunLifecyclePolicyResultsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters dry run results listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [DryRunLifecyclePolicyResult.run_at] and [DryRunLifecyclePolicyResult.affected_images_count] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListDryRunLifecyclePolicyResultsResponse {
    /** List of results of dry runs of a lifecycle policy. */
    dryRunLifecyclePolicyResults: DryRunLifecyclePolicyResult[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDryRunLifecyclePolicyResultsRequest.page_size] use `next_page_token` as the value
     * for the [ListDryRunLifecyclePolicyResultsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    /** ID of the dry run result of the lifecycle policy */
    dryRunLifecyclePolicyResultId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters affected images listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [LifecyclePolicy.name] and [LifecyclePolicy.created_at] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    /** List of affected images. */
    affectedImages: Image[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_size], use `next_page_token` as the value
     * for the [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetLifecyclePolicyRequest: object = { lifecyclePolicyId: '' };

export const GetLifecyclePolicyRequest = {
    encode(
        message: GetLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetLifecyclePolicyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLifecyclePolicyRequest,
        } as GetLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLifecyclePolicyRequest {
        const message = {
            ...baseGetLifecyclePolicyRequest,
        } as GetLifecyclePolicyRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: GetLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetLifecyclePolicyRequest>
    ): GetLifecyclePolicyRequest {
        const message = {
            ...baseGetLifecyclePolicyRequest,
        } as GetLifecyclePolicyRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseListLifecyclePoliciesRequest: object = {
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListLifecyclePoliciesRequest = {
    encode(
        message: ListLifecyclePoliciesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== undefined) {
            writer.uint32(10).string(message.registryId);
        }
        if (message.repositoryId !== undefined) {
            writer.uint32(50).string(message.repositoryId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLifecyclePoliciesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLifecyclePoliciesRequest,
        } as ListLifecyclePoliciesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 6:
                    message.repositoryId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLifecyclePoliciesRequest {
        const message = {
            ...baseListLifecyclePoliciesRequest,
        } as ListLifecyclePoliciesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = undefined;
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        } else {
            message.orderBy = '';
        }
        return message;
    },

    toJSON(message: ListLifecyclePoliciesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLifecyclePoliciesRequest>
    ): ListLifecyclePoliciesRequest {
        const message = {
            ...baseListLifecyclePoliciesRequest,
        } as ListLifecyclePoliciesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = undefined;
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        } else {
            message.orderBy = '';
        }
        return message;
    },
};

const baseListLifecyclePoliciesResponse: object = { nextPageToken: '' };

export const ListLifecyclePoliciesResponse = {
    encode(
        message: ListLifecyclePoliciesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.lifecyclePolicies) {
            LifecyclePolicy.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLifecyclePoliciesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLifecyclePoliciesResponse,
        } as ListLifecyclePoliciesResponse;
        message.lifecyclePolicies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicies.push(
                        LifecyclePolicy.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListLifecyclePoliciesResponse {
        const message = {
            ...baseListLifecyclePoliciesResponse,
        } as ListLifecyclePoliciesResponse;
        message.lifecyclePolicies = [];
        if (
            object.lifecyclePolicies !== undefined &&
            object.lifecyclePolicies !== null
        ) {
            for (const e of object.lifecyclePolicies) {
                message.lifecyclePolicies.push(LifecyclePolicy.fromJSON(e));
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

    toJSON(message: ListLifecyclePoliciesResponse): unknown {
        const obj: any = {};
        if (message.lifecyclePolicies) {
            obj.lifecyclePolicies = message.lifecyclePolicies.map((e) =>
                e ? LifecyclePolicy.toJSON(e) : undefined
            );
        } else {
            obj.lifecyclePolicies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLifecyclePoliciesResponse>
    ): ListLifecyclePoliciesResponse {
        const message = {
            ...baseListLifecyclePoliciesResponse,
        } as ListLifecyclePoliciesResponse;
        message.lifecyclePolicies = [];
        if (
            object.lifecyclePolicies !== undefined &&
            object.lifecyclePolicies !== null
        ) {
            for (const e of object.lifecyclePolicies) {
                message.lifecyclePolicies.push(LifecyclePolicy.fromPartial(e));
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

const baseCreateLifecyclePolicyRequest: object = {
    repositoryId: '',
    name: '',
    description: '',
    status: 0,
};

export const CreateLifecyclePolicyRequest = {
    encode(
        message: CreateLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLifecyclePolicyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLifecyclePolicyRequest,
        } as CreateLifecyclePolicyRequest;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.rules.push(
                        LifecycleRule.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLifecyclePolicyRequest {
        const message = {
            ...baseCreateLifecyclePolicyRequest,
        } as CreateLifecyclePolicyRequest;
        message.rules = [];
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = lifecyclePolicy_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: CreateLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) =>
                e ? LifecycleRule.toJSON(e) : undefined
            );
        } else {
            obj.rules = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLifecyclePolicyRequest>
    ): CreateLifecyclePolicyRequest {
        const message = {
            ...baseCreateLifecyclePolicyRequest,
        } as CreateLifecyclePolicyRequest;
        message.rules = [];
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpdateLifecyclePolicyRequest: object = {
    lifecyclePolicyId: '',
    name: '',
    description: '',
    status: 0,
};

export const UpdateLifecyclePolicyRequest = {
    encode(
        message: UpdateLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLifecyclePolicyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLifecyclePolicyRequest,
        } as UpdateLifecyclePolicyRequest;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.rules.push(
                        LifecycleRule.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLifecyclePolicyRequest {
        const message = {
            ...baseUpdateLifecyclePolicyRequest,
        } as UpdateLifecyclePolicyRequest;
        message.rules = [];
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = lifecyclePolicy_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) =>
                e ? LifecycleRule.toJSON(e) : undefined
            );
        } else {
            obj.rules = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLifecyclePolicyRequest>
    ): UpdateLifecyclePolicyRequest {
        const message = {
            ...baseUpdateLifecyclePolicyRequest,
        } as UpdateLifecyclePolicyRequest;
        message.rules = [];
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};

const baseDeleteLifecyclePolicyRequest: object = { lifecyclePolicyId: '' };

export const DeleteLifecyclePolicyRequest = {
    encode(
        message: DeleteLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteLifecyclePolicyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLifecyclePolicyRequest,
        } as DeleteLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLifecyclePolicyRequest {
        const message = {
            ...baseDeleteLifecyclePolicyRequest,
        } as DeleteLifecyclePolicyRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: DeleteLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteLifecyclePolicyRequest>
    ): DeleteLifecyclePolicyRequest {
        const message = {
            ...baseDeleteLifecyclePolicyRequest,
        } as DeleteLifecyclePolicyRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseCreateLifecyclePolicyMetadata: object = { lifecyclePolicyId: '' };

export const CreateLifecyclePolicyMetadata = {
    encode(
        message: CreateLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLifecyclePolicyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLifecyclePolicyMetadata,
        } as CreateLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLifecyclePolicyMetadata {
        const message = {
            ...baseCreateLifecyclePolicyMetadata,
        } as CreateLifecyclePolicyMetadata;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: CreateLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLifecyclePolicyMetadata>
    ): CreateLifecyclePolicyMetadata {
        const message = {
            ...baseCreateLifecyclePolicyMetadata,
        } as CreateLifecyclePolicyMetadata;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseUpdateLifecyclePolicyMetadata: object = { lifecyclePolicyId: '' };

export const UpdateLifecyclePolicyMetadata = {
    encode(
        message: UpdateLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLifecyclePolicyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLifecyclePolicyMetadata,
        } as UpdateLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLifecyclePolicyMetadata {
        const message = {
            ...baseUpdateLifecyclePolicyMetadata,
        } as UpdateLifecyclePolicyMetadata;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: UpdateLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLifecyclePolicyMetadata>
    ): UpdateLifecyclePolicyMetadata {
        const message = {
            ...baseUpdateLifecyclePolicyMetadata,
        } as UpdateLifecyclePolicyMetadata;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseDeleteLifecyclePolicyMetadata: object = { lifecyclePolicyId: '' };

export const DeleteLifecyclePolicyMetadata = {
    encode(
        message: DeleteLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteLifecyclePolicyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLifecyclePolicyMetadata,
        } as DeleteLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLifecyclePolicyMetadata {
        const message = {
            ...baseDeleteLifecyclePolicyMetadata,
        } as DeleteLifecyclePolicyMetadata;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: DeleteLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteLifecyclePolicyMetadata>
    ): DeleteLifecyclePolicyMetadata {
        const message = {
            ...baseDeleteLifecyclePolicyMetadata,
        } as DeleteLifecyclePolicyMetadata;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseDryRunLifecyclePolicyRequest: object = { lifecyclePolicyId: '' };

export const DryRunLifecyclePolicyRequest = {
    encode(
        message: DryRunLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DryRunLifecyclePolicyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDryRunLifecyclePolicyRequest,
        } as DryRunLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DryRunLifecyclePolicyRequest {
        const message = {
            ...baseDryRunLifecyclePolicyRequest,
        } as DryRunLifecyclePolicyRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: DryRunLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DryRunLifecyclePolicyRequest>
    ): DryRunLifecyclePolicyRequest {
        const message = {
            ...baseDryRunLifecyclePolicyRequest,
        } as DryRunLifecyclePolicyRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseDryRunLifecyclePolicyMetadata: object = {
    dryRunLifecyclePolicyResultId: '',
    lifecyclePolicyId: '',
};

export const DryRunLifecyclePolicyMetadata = {
    encode(
        message: DryRunLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(18).string(message.lifecyclePolicyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DryRunLifecyclePolicyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDryRunLifecyclePolicyMetadata,
        } as DryRunLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
                    break;
                case 2:
                    message.lifecyclePolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DryRunLifecyclePolicyMetadata {
        const message = {
            ...baseDryRunLifecyclePolicyMetadata,
        } as DryRunLifecyclePolicyMetadata;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId = String(
                object.dryRunLifecyclePolicyResultId
            );
        } else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },

    toJSON(message: DryRunLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DryRunLifecyclePolicyMetadata>
    ): DryRunLifecyclePolicyMetadata {
        const message = {
            ...baseDryRunLifecyclePolicyMetadata,
        } as DryRunLifecyclePolicyMetadata;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        } else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        return message;
    },
};

const baseDryRunLifecyclePolicyResult: object = {
    dryRunLifecyclePolicyResultId: '',
    lifecyclePolicyId: '',
    affectedImagesCount: 0,
};

export const DryRunLifecyclePolicyResult = {
    encode(
        message: DryRunLifecyclePolicyResult,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(18).string(message.lifecyclePolicyId);
        }
        if (message.runAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.runAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.affectedImagesCount !== 0) {
            writer.uint32(32).int64(message.affectedImagesCount);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DryRunLifecyclePolicyResult {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDryRunLifecyclePolicyResult,
        } as DryRunLifecyclePolicyResult;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
                    break;
                case 2:
                    message.lifecyclePolicyId = reader.string();
                    break;
                case 3:
                    message.runAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.affectedImagesCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DryRunLifecyclePolicyResult {
        const message = {
            ...baseDryRunLifecyclePolicyResult,
        } as DryRunLifecyclePolicyResult;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId = String(
                object.dryRunLifecyclePolicyResultId
            );
        } else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
        }
        if (object.runAt !== undefined && object.runAt !== null) {
            message.runAt = fromJsonTimestamp(object.runAt);
        } else {
            message.runAt = undefined;
        }
        if (
            object.affectedImagesCount !== undefined &&
            object.affectedImagesCount !== null
        ) {
            message.affectedImagesCount = Number(object.affectedImagesCount);
        } else {
            message.affectedImagesCount = 0;
        }
        return message;
    },

    toJSON(message: DryRunLifecyclePolicyResult): unknown {
        const obj: any = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        message.runAt !== undefined &&
            (obj.runAt = message.runAt.toISOString());
        message.affectedImagesCount !== undefined &&
            (obj.affectedImagesCount = message.affectedImagesCount);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DryRunLifecyclePolicyResult>
    ): DryRunLifecyclePolicyResult {
        const message = {
            ...baseDryRunLifecyclePolicyResult,
        } as DryRunLifecyclePolicyResult;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        } else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
        }
        if (object.runAt !== undefined && object.runAt !== null) {
            message.runAt = object.runAt;
        } else {
            message.runAt = undefined;
        }
        if (
            object.affectedImagesCount !== undefined &&
            object.affectedImagesCount !== null
        ) {
            message.affectedImagesCount = object.affectedImagesCount;
        } else {
            message.affectedImagesCount = 0;
        }
        return message;
    },
};

const baseGetDryRunLifecyclePolicyResultRequest: object = {
    dryRunLifecyclePolicyResultId: '',
};

export const GetDryRunLifecyclePolicyResultRequest = {
    encode(
        message: GetDryRunLifecyclePolicyResultRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDryRunLifecyclePolicyResultRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDryRunLifecyclePolicyResultRequest,
        } as GetDryRunLifecyclePolicyResultRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDryRunLifecyclePolicyResultRequest {
        const message = {
            ...baseGetDryRunLifecyclePolicyResultRequest,
        } as GetDryRunLifecyclePolicyResultRequest;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId = String(
                object.dryRunLifecyclePolicyResultId
            );
        } else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        return message;
    },

    toJSON(message: GetDryRunLifecyclePolicyResultRequest): unknown {
        const obj: any = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetDryRunLifecyclePolicyResultRequest>
    ): GetDryRunLifecyclePolicyResultRequest {
        const message = {
            ...baseGetDryRunLifecyclePolicyResultRequest,
        } as GetDryRunLifecyclePolicyResultRequest;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        } else {
            message.dryRunLifecyclePolicyResultId = '';
        }
        return message;
    },
};

const baseListDryRunLifecyclePolicyResultsRequest: object = {
    lifecyclePolicyId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListDryRunLifecyclePolicyResultsRequest = {
    encode(
        message: ListDryRunLifecyclePolicyResultsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.lifecyclePolicyId !== '') {
            writer.uint32(10).string(message.lifecyclePolicyId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDryRunLifecyclePolicyResultsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDryRunLifecyclePolicyResultsRequest,
        } as ListDryRunLifecyclePolicyResultsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecyclePolicyId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDryRunLifecyclePolicyResultsRequest {
        const message = {
            ...baseListDryRunLifecyclePolicyResultsRequest,
        } as ListDryRunLifecyclePolicyResultsRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = String(object.lifecyclePolicyId);
        } else {
            message.lifecyclePolicyId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        } else {
            message.orderBy = '';
        }
        return message;
    },

    toJSON(message: ListDryRunLifecyclePolicyResultsRequest): unknown {
        const obj: any = {};
        message.lifecyclePolicyId !== undefined &&
            (obj.lifecyclePolicyId = message.lifecyclePolicyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDryRunLifecyclePolicyResultsRequest>
    ): ListDryRunLifecyclePolicyResultsRequest {
        const message = {
            ...baseListDryRunLifecyclePolicyResultsRequest,
        } as ListDryRunLifecyclePolicyResultsRequest;
        if (
            object.lifecyclePolicyId !== undefined &&
            object.lifecyclePolicyId !== null
        ) {
            message.lifecyclePolicyId = object.lifecyclePolicyId;
        } else {
            message.lifecyclePolicyId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        } else {
            message.orderBy = '';
        }
        return message;
    },
};

const baseListDryRunLifecyclePolicyResultsResponse: object = {
    nextPageToken: '',
};

export const ListDryRunLifecyclePolicyResultsResponse = {
    encode(
        message: ListDryRunLifecyclePolicyResultsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.dryRunLifecyclePolicyResults) {
            DryRunLifecyclePolicyResult.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDryRunLifecyclePolicyResultsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDryRunLifecyclePolicyResultsResponse,
        } as ListDryRunLifecyclePolicyResultsResponse;
        message.dryRunLifecyclePolicyResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResults.push(
                        DryRunLifecyclePolicyResult.decode(
                            reader,
                            reader.uint32()
                        )
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

    fromJSON(object: any): ListDryRunLifecyclePolicyResultsResponse {
        const message = {
            ...baseListDryRunLifecyclePolicyResultsResponse,
        } as ListDryRunLifecyclePolicyResultsResponse;
        message.dryRunLifecyclePolicyResults = [];
        if (
            object.dryRunLifecyclePolicyResults !== undefined &&
            object.dryRunLifecyclePolicyResults !== null
        ) {
            for (const e of object.dryRunLifecyclePolicyResults) {
                message.dryRunLifecyclePolicyResults.push(
                    DryRunLifecyclePolicyResult.fromJSON(e)
                );
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

    toJSON(message: ListDryRunLifecyclePolicyResultsResponse): unknown {
        const obj: any = {};
        if (message.dryRunLifecyclePolicyResults) {
            obj.dryRunLifecyclePolicyResults =
                message.dryRunLifecyclePolicyResults.map((e) =>
                    e ? DryRunLifecyclePolicyResult.toJSON(e) : undefined
                );
        } else {
            obj.dryRunLifecyclePolicyResults = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDryRunLifecyclePolicyResultsResponse>
    ): ListDryRunLifecyclePolicyResultsResponse {
        const message = {
            ...baseListDryRunLifecyclePolicyResultsResponse,
        } as ListDryRunLifecyclePolicyResultsResponse;
        message.dryRunLifecyclePolicyResults = [];
        if (
            object.dryRunLifecyclePolicyResults !== undefined &&
            object.dryRunLifecyclePolicyResults !== null
        ) {
            for (const e of object.dryRunLifecyclePolicyResults) {
                message.dryRunLifecyclePolicyResults.push(
                    DryRunLifecyclePolicyResult.fromPartial(e)
                );
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

const baseListDryRunLifecyclePolicyResultAffectedImagesRequest: object = {
    dryRunLifecyclePolicyResultId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListDryRunLifecyclePolicyResultAffectedImagesRequest = {
    encode(
        message: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dryRunLifecyclePolicyResultId !== '') {
            writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
        } as ListDryRunLifecyclePolicyResultAffectedImagesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRunLifecyclePolicyResultId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(
        object: any
    ): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
        } as ListDryRunLifecyclePolicyResultAffectedImagesRequest;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId = String(
                object.dryRunLifecyclePolicyResultId
            );
        } else {
            message.dryRunLifecyclePolicyResultId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        } else {
            message.orderBy = '';
        }
        return message;
    },

    toJSON(
        message: ListDryRunLifecyclePolicyResultAffectedImagesRequest
    ): unknown {
        const obj: any = {};
        message.dryRunLifecyclePolicyResultId !== undefined &&
            (obj.dryRunLifecyclePolicyResultId =
                message.dryRunLifecyclePolicyResultId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesRequest>
    ): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
        } as ListDryRunLifecyclePolicyResultAffectedImagesRequest;
        if (
            object.dryRunLifecyclePolicyResultId !== undefined &&
            object.dryRunLifecyclePolicyResultId !== null
        ) {
            message.dryRunLifecyclePolicyResultId =
                object.dryRunLifecyclePolicyResultId;
        } else {
            message.dryRunLifecyclePolicyResultId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        } else {
            message.orderBy = '';
        }
        return message;
    },
};

const baseListDryRunLifecyclePolicyResultAffectedImagesResponse: object = {
    nextPageToken: '',
};

export const ListDryRunLifecyclePolicyResultAffectedImagesResponse = {
    encode(
        message: ListDryRunLifecyclePolicyResultAffectedImagesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.affectedImages) {
            Image.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        } as ListDryRunLifecyclePolicyResultAffectedImagesResponse;
        message.affectedImages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.affectedImages.push(
                        Image.decode(reader, reader.uint32())
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

    fromJSON(
        object: any
    ): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        } as ListDryRunLifecyclePolicyResultAffectedImagesResponse;
        message.affectedImages = [];
        if (
            object.affectedImages !== undefined &&
            object.affectedImages !== null
        ) {
            for (const e of object.affectedImages) {
                message.affectedImages.push(Image.fromJSON(e));
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

    toJSON(
        message: ListDryRunLifecyclePolicyResultAffectedImagesResponse
    ): unknown {
        const obj: any = {};
        if (message.affectedImages) {
            obj.affectedImages = message.affectedImages.map((e) =>
                e ? Image.toJSON(e) : undefined
            );
        } else {
            obj.affectedImages = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesResponse>
    ): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
        const message = {
            ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
        } as ListDryRunLifecyclePolicyResultAffectedImagesResponse;
        message.affectedImages = [];
        if (
            object.affectedImages !== undefined &&
            object.affectedImages !== null
        ) {
            for (const e of object.affectedImages) {
                message.affectedImages.push(Image.fromPartial(e));
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

/** A set of methods for managing Lifecycle policy resources. */
export const LifecyclePolicyServiceService = {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLifecyclePolicyRequest) =>
            Buffer.from(GetLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: LifecyclePolicy) =>
            Buffer.from(LifecyclePolicy.encode(value).finish()),
        responseDeserialize: (value: Buffer) => LifecyclePolicy.decode(value),
    },
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLifecyclePoliciesRequest) =>
            Buffer.from(ListLifecyclePoliciesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListLifecyclePoliciesRequest.decode(value),
        responseSerialize: (value: ListLifecyclePoliciesResponse) =>
            Buffer.from(ListLifecyclePoliciesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListLifecyclePoliciesResponse.decode(value),
    },
    /** Creates a lifecycle policy in the specified repository. */
    create: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateLifecyclePolicyRequest) =>
            Buffer.from(CreateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified lifecycle policy. */
    update: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateLifecyclePolicyRequest) =>
            Buffer.from(UpdateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified lifecycle policy. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteLifecyclePolicyRequest) =>
            Buffer.from(DeleteLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DryRunLifecyclePolicyRequest) =>
            Buffer.from(DryRunLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DryRunLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDryRunLifecyclePolicyResultRequest) =>
            Buffer.from(
                GetDryRunLifecyclePolicyResultRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            GetDryRunLifecyclePolicyResultRequest.decode(value),
        responseSerialize: (value: DryRunLifecyclePolicyResult) =>
            Buffer.from(DryRunLifecyclePolicyResult.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            DryRunLifecyclePolicyResult.decode(value),
    },
    /** Retrieves the list of the dry run results. */
    listDryRunResults: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDryRunLifecyclePolicyResultsRequest) =>
            Buffer.from(
                ListDryRunLifecyclePolicyResultsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListDryRunLifecyclePolicyResultsRequest.decode(value),
        responseSerialize: (value: ListDryRunLifecyclePolicyResultsResponse) =>
            Buffer.from(
                ListDryRunLifecyclePolicyResultsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListDryRunLifecyclePolicyResultsResponse.decode(value),
    },
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages: {
        path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages',
        requestStream: false,
        responseStream: false,
        requestSerialize: (
            value: ListDryRunLifecyclePolicyResultAffectedImagesRequest
        ) =>
            Buffer.from(
                ListDryRunLifecyclePolicyResultAffectedImagesRequest.encode(
                    value
                ).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListDryRunLifecyclePolicyResultAffectedImagesRequest.decode(value),
        responseSerialize: (
            value: ListDryRunLifecyclePolicyResultAffectedImagesResponse
        ) =>
            Buffer.from(
                ListDryRunLifecyclePolicyResultAffectedImagesResponse.encode(
                    value
                ).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListDryRunLifecyclePolicyResultAffectedImagesResponse.decode(value),
    },
} as const;

export interface LifecyclePolicyServiceServer
    extends UntypedServiceImplementation {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list: handleUnaryCall<
        ListLifecyclePoliciesRequest,
        ListLifecyclePoliciesResponse
    >;
    /** Creates a lifecycle policy in the specified repository. */
    create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
    /** Updates the specified lifecycle policy. */
    update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
    /** Deletes the specified lifecycle policy. */
    delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult: handleUnaryCall<
        GetDryRunLifecyclePolicyResultRequest,
        DryRunLifecyclePolicyResult
    >;
    /** Retrieves the list of the dry run results. */
    listDryRunResults: handleUnaryCall<
        ListDryRunLifecyclePolicyResultsRequest,
        ListDryRunLifecyclePolicyResultsResponse
    >;
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages: handleUnaryCall<
        ListDryRunLifecyclePolicyResultAffectedImagesRequest,
        ListDryRunLifecyclePolicyResultAffectedImagesResponse
    >;
}

export interface LifecyclePolicyServiceClient extends Client {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get(
        request: GetLifecyclePolicyRequest,
        callback: (
            error: ServiceError | null,
            response: LifecyclePolicy
        ) => void
    ): ClientUnaryCall;
    get(
        request: GetLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: LifecyclePolicy
        ) => void
    ): ClientUnaryCall;
    get(
        request: GetLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: LifecyclePolicy
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list(
        request: ListLifecyclePoliciesRequest,
        callback: (
            error: ServiceError | null,
            response: ListLifecyclePoliciesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListLifecyclePoliciesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListLifecyclePoliciesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListLifecyclePoliciesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListLifecyclePoliciesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a lifecycle policy in the specified repository. */
    create(
        request: CreateLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified lifecycle policy. */
    update(
        request: UpdateLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified lifecycle policy. */
    delete(
        request: DeleteLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun(
        request: DryRunLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    dryRun(
        request: DryRunLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    dryRun(
        request: DryRunLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult(
        request: GetDryRunLifecyclePolicyResultRequest,
        callback: (
            error: ServiceError | null,
            response: DryRunLifecyclePolicyResult
        ) => void
    ): ClientUnaryCall;
    getDryRunResult(
        request: GetDryRunLifecyclePolicyResultRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: DryRunLifecyclePolicyResult
        ) => void
    ): ClientUnaryCall;
    getDryRunResult(
        request: GetDryRunLifecyclePolicyResultRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: DryRunLifecyclePolicyResult
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of the dry run results. */
    listDryRunResults(
        request: ListDryRunLifecyclePolicyResultsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDryRunLifecyclePolicyResultsResponse
        ) => void
    ): ClientUnaryCall;
    listDryRunResults(
        request: ListDryRunLifecyclePolicyResultsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDryRunLifecyclePolicyResultsResponse
        ) => void
    ): ClientUnaryCall;
    listDryRunResults(
        request: ListDryRunLifecyclePolicyResultsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDryRunLifecyclePolicyResultsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages(
        request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDryRunLifecyclePolicyResultAffectedImagesResponse
        ) => void
    ): ClientUnaryCall;
    listDryRunResultAffectedImages(
        request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDryRunLifecyclePolicyResultAffectedImagesResponse
        ) => void
    ): ClientUnaryCall;
    listDryRunResultAffectedImages(
        request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDryRunLifecyclePolicyResultAffectedImagesResponse
        ) => void
    ): ClientUnaryCall;
}

export const LifecyclePolicyServiceClient = makeGenericClientConstructor(
    LifecyclePolicyServiceService,
    'yandex.cloud.containerregistry.v1.LifecyclePolicyService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): LifecyclePolicyServiceClient;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
