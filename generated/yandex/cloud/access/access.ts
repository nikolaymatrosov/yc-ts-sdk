/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.access';

export enum AccessBindingAction {
    ACCESS_BINDING_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of an access binding. */
    ADD = 1,
    /** REMOVE - Removal of an access binding. */
    REMOVE = 2,
    UNRECOGNIZED = -1,
}

export function accessBindingActionFromJSON(object: any): AccessBindingAction {
    switch (object) {
        case 0:
        case 'ACCESS_BINDING_ACTION_UNSPECIFIED':
            return AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED;
        case 1:
        case 'ADD':
            return AccessBindingAction.ADD;
        case 2:
        case 'REMOVE':
            return AccessBindingAction.REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AccessBindingAction.UNRECOGNIZED;
    }
}

export function accessBindingActionToJSON(object: AccessBindingAction): string {
    switch (object) {
        case AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED:
            return 'ACCESS_BINDING_ACTION_UNSPECIFIED';
        case AccessBindingAction.ADD:
            return 'ADD';
        case AccessBindingAction.REMOVE:
            return 'REMOVE';
        default:
            return 'UNKNOWN';
    }
}

export interface Subject {
    $type: 'yandex.cloud.access.Subject';
    /**
     * ID of the subject.
     *
     * It can contain one of the following values:
     * * `allAuthenticatedUsers`: A special system identifier that represents anyone
     *    who is authenticated. It can be used only if the [type] is `system`.
     * * `allUsers`: A special system identifier that represents anyone. No authentication is required.
     *    For example, you don't need to specify the IAM token in an API query.
     * * `<cloud generated id>`: An identifier that represents a user account.
     *    It can be used only if the [type] is `userAccount`, `federatedUser` or `serviceAccount`.
     */
    id: string;
    /**
     * Type of the subject.
     *
     * It can contain one of the following values:
     * * `userAccount`: An account on Yandex or Yandex.Connect, added to Yandex.Cloud.
     * * `serviceAccount`: A service account. This type represents the [yandex.cloud.iam.v1.ServiceAccount] resource.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     * * `system`: System group. This type represents several accounts with a common system identifier.
     *
     * For more information, see [Subject to which the role is assigned](/docs/iam/concepts/access-control/#subject).
     */
    type: string;
}

export interface AccessBinding {
    $type: 'yandex.cloud.access.AccessBinding';
    /** ID of the [yandex.cloud.iam.v1.Role] that is assigned to the [subject]. */
    roleId: string;
    /**
     * Identity for which access binding is being created.
     * It can represent an account with a unique ID or several accounts with a system identifier.
     */
    subject: Subject | undefined;
}

export interface ListAccessBindingsRequest {
    $type: 'yandex.cloud.access.ListAccessBindingsRequest';
    /**
     * ID of the resource to list access bindings for.
     *
     * To get the resource ID, use a corresponding List request.
     * For example, use the [yandex.cloud.resourcemanager.v1.CloudService.List] request to get the Cloud resource ID.
     */
    resourceId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessBindingsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListAccessBindingsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListAccessBindingsResponse {
    $type: 'yandex.cloud.access.ListAccessBindingsResponse';
    /** List of access bindings for the specified resource. */
    accessBindings: AccessBinding[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessBindingsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessBindingsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface SetAccessBindingsRequest {
    $type: 'yandex.cloud.access.SetAccessBindingsRequest';
    /**
     * ID of the resource for which access bindings are being set.
     *
     * To get the resource ID, use a corresponding List request.
     */
    resourceId: string;
    /** Access bindings to be set. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
    accessBindings: AccessBinding[];
}

export interface SetAccessBindingsMetadata {
    $type: 'yandex.cloud.access.SetAccessBindingsMetadata';
    /** ID of the resource for which access bindings are being set. */
    resourceId: string;
}

export interface UpdateAccessBindingsRequest {
    $type: 'yandex.cloud.access.UpdateAccessBindingsRequest';
    /** ID of the resource for which access bindings are being updated. */
    resourceId: string;
    /** Updates to access bindings. */
    accessBindingDeltas: AccessBindingDelta[];
}

export interface UpdateAccessBindingsMetadata {
    $type: 'yandex.cloud.access.UpdateAccessBindingsMetadata';
    /** ID of the resource for which access bindings are being updated. */
    resourceId: string;
}

export interface AccessBindingDelta {
    $type: 'yandex.cloud.access.AccessBindingDelta';
    /** The action that is being performed on an access binding. */
    action: AccessBindingAction;
    /** Access binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
    accessBinding: AccessBinding | undefined;
}

const baseSubject: object = {
    $type: 'yandex.cloud.access.Subject',
    id: '',
    type: '',
};

export const Subject = {
    $type: 'yandex.cloud.access.Subject' as const,

    encode(
        message: Subject,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Subject {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubject } as Subject;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Subject {
        const message = { ...baseSubject } as Subject;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        return message;
    },

    toJSON(message: Subject): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial(object: DeepPartial<Subject>): Subject {
        const message = { ...baseSubject } as Subject;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        return message;
    },
};

messageTypeRegistry.set(Subject.$type, Subject);

const baseAccessBinding: object = {
    $type: 'yandex.cloud.access.AccessBinding',
    roleId: '',
};

export const AccessBinding = {
    $type: 'yandex.cloud.access.AccessBinding' as const,

    encode(
        message: AccessBinding,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        if (message.subject !== undefined) {
            Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBinding {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBinding } as AccessBinding;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.subject = Subject.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessBinding {
        const message = { ...baseAccessBinding } as AccessBinding;
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        } else {
            message.roleId = '';
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = Subject.fromJSON(object.subject);
        } else {
            message.subject = undefined;
        }
        return message;
    },

    toJSON(message: AccessBinding): unknown {
        const obj: any = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.subject !== undefined &&
            (obj.subject = message.subject
                ? Subject.toJSON(message.subject)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AccessBinding>): AccessBinding {
        const message = { ...baseAccessBinding } as AccessBinding;
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        } else {
            message.roleId = '';
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = Subject.fromPartial(object.subject);
        } else {
            message.subject = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(AccessBinding.$type, AccessBinding);

const baseListAccessBindingsRequest: object = {
    $type: 'yandex.cloud.access.ListAccessBindingsRequest',
    resourceId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListAccessBindingsRequest = {
    $type: 'yandex.cloud.access.ListAccessBindingsRequest' as const,

    encode(
        message: ListAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
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
    ): ListAccessBindingsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessBindingsRequest,
        } as ListAccessBindingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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

    fromJSON(object: any): ListAccessBindingsRequest {
        const message = {
            ...baseListAccessBindingsRequest,
        } as ListAccessBindingsRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
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

    toJSON(message: ListAccessBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListAccessBindingsRequest>
    ): ListAccessBindingsRequest {
        const message = {
            ...baseListAccessBindingsRequest,
        } as ListAccessBindingsRequest;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
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

messageTypeRegistry.set(
    ListAccessBindingsRequest.$type,
    ListAccessBindingsRequest
);

const baseListAccessBindingsResponse: object = {
    $type: 'yandex.cloud.access.ListAccessBindingsResponse',
    nextPageToken: '',
};

export const ListAccessBindingsResponse = {
    $type: 'yandex.cloud.access.ListAccessBindingsResponse' as const,

    encode(
        message: ListAccessBindingsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.accessBindings) {
            AccessBinding.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListAccessBindingsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessBindingsResponse,
        } as ListAccessBindingsResponse;
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessBindings.push(
                        AccessBinding.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListAccessBindingsResponse {
        const message = {
            ...baseListAccessBindingsResponse,
        } as ListAccessBindingsResponse;
        message.accessBindings = [];
        if (
            object.accessBindings !== undefined &&
            object.accessBindings !== null
        ) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromJSON(e));
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

    toJSON(message: ListAccessBindingsResponse): unknown {
        const obj: any = {};
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) =>
                e ? AccessBinding.toJSON(e) : undefined
            );
        } else {
            obj.accessBindings = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListAccessBindingsResponse>
    ): ListAccessBindingsResponse {
        const message = {
            ...baseListAccessBindingsResponse,
        } as ListAccessBindingsResponse;
        message.accessBindings = [];
        if (
            object.accessBindings !== undefined &&
            object.accessBindings !== null
        ) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromPartial(e));
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

messageTypeRegistry.set(
    ListAccessBindingsResponse.$type,
    ListAccessBindingsResponse
);

const baseSetAccessBindingsRequest: object = {
    $type: 'yandex.cloud.access.SetAccessBindingsRequest',
    resourceId: '',
};

export const SetAccessBindingsRequest = {
    $type: 'yandex.cloud.access.SetAccessBindingsRequest' as const,

    encode(
        message: SetAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindings) {
            AccessBinding.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SetAccessBindingsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetAccessBindingsRequest,
        } as SetAccessBindingsRequest;
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindings.push(
                        AccessBinding.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetAccessBindingsRequest {
        const message = {
            ...baseSetAccessBindingsRequest,
        } as SetAccessBindingsRequest;
        message.accessBindings = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        if (
            object.accessBindings !== undefined &&
            object.accessBindings !== null
        ) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: SetAccessBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) =>
                e ? AccessBinding.toJSON(e) : undefined
            );
        } else {
            obj.accessBindings = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<SetAccessBindingsRequest>
    ): SetAccessBindingsRequest {
        const message = {
            ...baseSetAccessBindingsRequest,
        } as SetAccessBindingsRequest;
        message.accessBindings = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        if (
            object.accessBindings !== undefined &&
            object.accessBindings !== null
        ) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    SetAccessBindingsRequest.$type,
    SetAccessBindingsRequest
);

const baseSetAccessBindingsMetadata: object = {
    $type: 'yandex.cloud.access.SetAccessBindingsMetadata',
    resourceId: '',
};

export const SetAccessBindingsMetadata = {
    $type: 'yandex.cloud.access.SetAccessBindingsMetadata' as const,

    encode(
        message: SetAccessBindingsMetadata,
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
    ): SetAccessBindingsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetAccessBindingsMetadata,
        } as SetAccessBindingsMetadata;
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

    fromJSON(object: any): SetAccessBindingsMetadata {
        const message = {
            ...baseSetAccessBindingsMetadata,
        } as SetAccessBindingsMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: SetAccessBindingsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SetAccessBindingsMetadata>
    ): SetAccessBindingsMetadata {
        const message = {
            ...baseSetAccessBindingsMetadata,
        } as SetAccessBindingsMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    SetAccessBindingsMetadata.$type,
    SetAccessBindingsMetadata
);

const baseUpdateAccessBindingsRequest: object = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsRequest',
    resourceId: '',
};

export const UpdateAccessBindingsRequest = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsRequest' as const,

    encode(
        message: UpdateAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindingDeltas) {
            AccessBindingDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateAccessBindingsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessBindingsRequest,
        } as UpdateAccessBindingsRequest;
        message.accessBindingDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindingDeltas.push(
                        AccessBindingDelta.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessBindingsRequest {
        const message = {
            ...baseUpdateAccessBindingsRequest,
        } as UpdateAccessBindingsRequest;
        message.accessBindingDeltas = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        if (
            object.accessBindingDeltas !== undefined &&
            object.accessBindingDeltas !== null
        ) {
            for (const e of object.accessBindingDeltas) {
                message.accessBindingDeltas.push(
                    AccessBindingDelta.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: UpdateAccessBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.accessBindingDeltas) {
            obj.accessBindingDeltas = message.accessBindingDeltas.map((e) =>
                e ? AccessBindingDelta.toJSON(e) : undefined
            );
        } else {
            obj.accessBindingDeltas = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateAccessBindingsRequest>
    ): UpdateAccessBindingsRequest {
        const message = {
            ...baseUpdateAccessBindingsRequest,
        } as UpdateAccessBindingsRequest;
        message.accessBindingDeltas = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        if (
            object.accessBindingDeltas !== undefined &&
            object.accessBindingDeltas !== null
        ) {
            for (const e of object.accessBindingDeltas) {
                message.accessBindingDeltas.push(
                    AccessBindingDelta.fromPartial(e)
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    UpdateAccessBindingsRequest.$type,
    UpdateAccessBindingsRequest
);

const baseUpdateAccessBindingsMetadata: object = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsMetadata',
    resourceId: '',
};

export const UpdateAccessBindingsMetadata = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsMetadata' as const,

    encode(
        message: UpdateAccessBindingsMetadata,
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
    ): UpdateAccessBindingsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessBindingsMetadata,
        } as UpdateAccessBindingsMetadata;
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

    fromJSON(object: any): UpdateAccessBindingsMetadata {
        const message = {
            ...baseUpdateAccessBindingsMetadata,
        } as UpdateAccessBindingsMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: UpdateAccessBindingsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateAccessBindingsMetadata>
    ): UpdateAccessBindingsMetadata {
        const message = {
            ...baseUpdateAccessBindingsMetadata,
        } as UpdateAccessBindingsMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    UpdateAccessBindingsMetadata.$type,
    UpdateAccessBindingsMetadata
);

const baseAccessBindingDelta: object = {
    $type: 'yandex.cloud.access.AccessBindingDelta',
    action: 0,
};

export const AccessBindingDelta = {
    $type: 'yandex.cloud.access.AccessBindingDelta' as const,

    encode(
        message: AccessBindingDelta,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.accessBinding !== undefined) {
            AccessBinding.encode(
                message.accessBinding,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AccessBindingDelta {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBindingDelta } as AccessBindingDelta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.accessBinding = AccessBinding.decode(
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

    fromJSON(object: any): AccessBindingDelta {
        const message = { ...baseAccessBindingDelta } as AccessBindingDelta;
        if (object.action !== undefined && object.action !== null) {
            message.action = accessBindingActionFromJSON(object.action);
        } else {
            message.action = 0;
        }
        if (
            object.accessBinding !== undefined &&
            object.accessBinding !== null
        ) {
            message.accessBinding = AccessBinding.fromJSON(
                object.accessBinding
            );
        } else {
            message.accessBinding = undefined;
        }
        return message;
    },

    toJSON(message: AccessBindingDelta): unknown {
        const obj: any = {};
        message.action !== undefined &&
            (obj.action = accessBindingActionToJSON(message.action));
        message.accessBinding !== undefined &&
            (obj.accessBinding = message.accessBinding
                ? AccessBinding.toJSON(message.accessBinding)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AccessBindingDelta>): AccessBindingDelta {
        const message = { ...baseAccessBindingDelta } as AccessBindingDelta;
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        } else {
            message.action = 0;
        }
        if (
            object.accessBinding !== undefined &&
            object.accessBinding !== null
        ) {
            message.accessBinding = AccessBinding.fromPartial(
                object.accessBinding
            );
        } else {
            message.accessBinding = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(AccessBindingDelta.$type, AccessBindingDelta);

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
