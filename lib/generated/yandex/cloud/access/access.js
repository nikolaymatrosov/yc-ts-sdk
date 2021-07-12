/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.access';
export var AccessBindingAction;
(function (AccessBindingAction) {
    AccessBindingAction[AccessBindingAction["ACCESS_BINDING_ACTION_UNSPECIFIED"] = 0] = "ACCESS_BINDING_ACTION_UNSPECIFIED";
    /** ADD - Addition of an access binding. */
    AccessBindingAction[AccessBindingAction["ADD"] = 1] = "ADD";
    /** REMOVE - Removal of an access binding. */
    AccessBindingAction[AccessBindingAction["REMOVE"] = 2] = "REMOVE";
    AccessBindingAction[AccessBindingAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessBindingAction || (AccessBindingAction = {}));
export function accessBindingActionFromJSON(object) {
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
export function accessBindingActionToJSON(object) {
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
const baseSubject = { id: '', type: '' };
export const Subject = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubject };
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
    fromJSON(object) {
        const message = { ...baseSubject };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSubject };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        return message;
    },
};
const baseAccessBinding = { roleId: '' };
export const AccessBinding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        if (message.subject !== undefined) {
            Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBinding };
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
    fromJSON(object) {
        const message = { ...baseAccessBinding };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        else {
            message.roleId = '';
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = Subject.fromJSON(object.subject);
        }
        else {
            message.subject = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.subject !== undefined &&
            (obj.subject = message.subject
                ? Subject.toJSON(message.subject)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAccessBinding };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        else {
            message.roleId = '';
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = Subject.fromPartial(object.subject);
        }
        else {
            message.subject = undefined;
        }
        return message;
    },
};
const baseListAccessBindingsRequest = {
    resourceId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListAccessBindingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessBindingsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = {
            ...baseListAccessBindingsRequest,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAccessBindingsRequest,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListAccessBindingsResponse = { nextPageToken: '' };
export const ListAccessBindingsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accessBindings) {
            AccessBinding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessBindingsResponse,
        };
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessBindings.push(AccessBinding.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseListAccessBindingsResponse,
        };
        message.accessBindings = [];
        if (object.accessBindings !== undefined &&
            object.accessBindings !== null) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) => e ? AccessBinding.toJSON(e) : undefined);
        }
        else {
            obj.accessBindings = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAccessBindingsResponse,
        };
        message.accessBindings = [];
        if (object.accessBindings !== undefined &&
            object.accessBindings !== null) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseSetAccessBindingsRequest = { resourceId: '' };
export const SetAccessBindingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindings) {
            AccessBinding.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetAccessBindingsRequest,
        };
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindings.push(AccessBinding.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSetAccessBindingsRequest,
        };
        message.accessBindings = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        if (object.accessBindings !== undefined &&
            object.accessBindings !== null) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) => e ? AccessBinding.toJSON(e) : undefined);
        }
        else {
            obj.accessBindings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetAccessBindingsRequest,
        };
        message.accessBindings = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        if (object.accessBindings !== undefined &&
            object.accessBindings !== null) {
            for (const e of object.accessBindings) {
                message.accessBindings.push(AccessBinding.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSetAccessBindingsMetadata = { resourceId: '' };
export const SetAccessBindingsMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetAccessBindingsMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseSetAccessBindingsMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetAccessBindingsMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseUpdateAccessBindingsRequest = { resourceId: '' };
export const UpdateAccessBindingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindingDeltas) {
            AccessBindingDelta.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessBindingsRequest,
        };
        message.accessBindingDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindingDeltas.push(AccessBindingDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseUpdateAccessBindingsRequest,
        };
        message.accessBindingDeltas = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        if (object.accessBindingDeltas !== undefined &&
            object.accessBindingDeltas !== null) {
            for (const e of object.accessBindingDeltas) {
                message.accessBindingDeltas.push(AccessBindingDelta.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.accessBindingDeltas) {
            obj.accessBindingDeltas = message.accessBindingDeltas.map((e) => e ? AccessBindingDelta.toJSON(e) : undefined);
        }
        else {
            obj.accessBindingDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAccessBindingsRequest,
        };
        message.accessBindingDeltas = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        if (object.accessBindingDeltas !== undefined &&
            object.accessBindingDeltas !== null) {
            for (const e of object.accessBindingDeltas) {
                message.accessBindingDeltas.push(AccessBindingDelta.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateAccessBindingsMetadata = { resourceId: '' };
export const UpdateAccessBindingsMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessBindingsMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateAccessBindingsMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAccessBindingsMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseAccessBindingDelta = { action: 0 };
export const AccessBindingDelta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.accessBinding !== undefined) {
            AccessBinding.encode(message.accessBinding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBindingDelta };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.accessBinding = AccessBinding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAccessBindingDelta };
        if (object.action !== undefined && object.action !== null) {
            message.action = accessBindingActionFromJSON(object.action);
        }
        else {
            message.action = 0;
        }
        if (object.accessBinding !== undefined &&
            object.accessBinding !== null) {
            message.accessBinding = AccessBinding.fromJSON(object.accessBinding);
        }
        else {
            message.accessBinding = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined &&
            (obj.action = accessBindingActionToJSON(message.action));
        message.accessBinding !== undefined &&
            (obj.accessBinding = message.accessBinding
                ? AccessBinding.toJSON(message.accessBinding)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAccessBindingDelta };
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        else {
            message.action = 0;
        }
        if (object.accessBinding !== undefined &&
            object.accessBinding !== null) {
            message.accessBinding = AccessBinding.fromPartial(object.accessBinding);
        }
        else {
            message.accessBinding = undefined;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
