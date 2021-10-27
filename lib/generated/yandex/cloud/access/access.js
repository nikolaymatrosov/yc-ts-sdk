"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessBindingDelta = exports.UpdateAccessBindingsMetadata = exports.UpdateAccessBindingsRequest = exports.SetAccessBindingsMetadata = exports.SetAccessBindingsRequest = exports.ListAccessBindingsResponse = exports.ListAccessBindingsRequest = exports.AccessBinding = exports.Subject = exports.accessBindingActionToJSON = exports.accessBindingActionFromJSON = exports.AccessBindingAction = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.access';
var AccessBindingAction;
(function (AccessBindingAction) {
    AccessBindingAction[AccessBindingAction["ACCESS_BINDING_ACTION_UNSPECIFIED"] = 0] = "ACCESS_BINDING_ACTION_UNSPECIFIED";
    /** ADD - Addition of an access binding. */
    AccessBindingAction[AccessBindingAction["ADD"] = 1] = "ADD";
    /** REMOVE - Removal of an access binding. */
    AccessBindingAction[AccessBindingAction["REMOVE"] = 2] = "REMOVE";
    AccessBindingAction[AccessBindingAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessBindingAction = exports.AccessBindingAction || (exports.AccessBindingAction = {}));
function accessBindingActionFromJSON(object) {
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
exports.accessBindingActionFromJSON = accessBindingActionFromJSON;
function accessBindingActionToJSON(object) {
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
exports.accessBindingActionToJSON = accessBindingActionToJSON;
const baseSubject = {
    $type: 'yandex.cloud.access.Subject',
    id: '',
    type: '',
};
exports.Subject = {
    $type: 'yandex.cloud.access.Subject',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.Subject.$type, exports.Subject);
const baseAccessBinding = {
    $type: 'yandex.cloud.access.AccessBinding',
    roleId: '',
};
exports.AccessBinding = {
    $type: 'yandex.cloud.access.AccessBinding',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        if (message.subject !== undefined) {
            exports.Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBinding };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.subject = exports.Subject.decode(reader, reader.uint32());
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
            message.subject = exports.Subject.fromJSON(object.subject);
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
                ? exports.Subject.toJSON(message.subject)
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
            message.subject = exports.Subject.fromPartial(object.subject);
        }
        else {
            message.subject = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AccessBinding.$type, exports.AccessBinding);
const baseListAccessBindingsRequest = {
    $type: 'yandex.cloud.access.ListAccessBindingsRequest',
    resourceId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListAccessBindingsRequest = {
    $type: 'yandex.cloud.access.ListAccessBindingsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessBindingsRequest.$type, exports.ListAccessBindingsRequest);
const baseListAccessBindingsResponse = {
    $type: 'yandex.cloud.access.ListAccessBindingsResponse',
    nextPageToken: '',
};
exports.ListAccessBindingsResponse = {
    $type: 'yandex.cloud.access.ListAccessBindingsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accessBindings) {
            exports.AccessBinding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessBindingsResponse,
        };
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessBindings.push(exports.AccessBinding.decode(reader, reader.uint32()));
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
                message.accessBindings.push(exports.AccessBinding.fromJSON(e));
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
            obj.accessBindings = message.accessBindings.map((e) => e ? exports.AccessBinding.toJSON(e) : undefined);
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
                message.accessBindings.push(exports.AccessBinding.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessBindingsResponse.$type, exports.ListAccessBindingsResponse);
const baseSetAccessBindingsRequest = {
    $type: 'yandex.cloud.access.SetAccessBindingsRequest',
    resourceId: '',
};
exports.SetAccessBindingsRequest = {
    $type: 'yandex.cloud.access.SetAccessBindingsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindings) {
            exports.AccessBinding.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.accessBindings.push(exports.AccessBinding.decode(reader, reader.uint32()));
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
                message.accessBindings.push(exports.AccessBinding.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) => e ? exports.AccessBinding.toJSON(e) : undefined);
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
                message.accessBindings.push(exports.AccessBinding.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetAccessBindingsRequest.$type, exports.SetAccessBindingsRequest);
const baseSetAccessBindingsMetadata = {
    $type: 'yandex.cloud.access.SetAccessBindingsMetadata',
    resourceId: '',
};
exports.SetAccessBindingsMetadata = {
    $type: 'yandex.cloud.access.SetAccessBindingsMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.SetAccessBindingsMetadata.$type, exports.SetAccessBindingsMetadata);
const baseUpdateAccessBindingsRequest = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsRequest',
    resourceId: '',
};
exports.UpdateAccessBindingsRequest = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindingDeltas) {
            exports.AccessBindingDelta.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.accessBindingDeltas.push(exports.AccessBindingDelta.decode(reader, reader.uint32()));
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
                message.accessBindingDeltas.push(exports.AccessBindingDelta.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.accessBindingDeltas) {
            obj.accessBindingDeltas = message.accessBindingDeltas.map((e) => e ? exports.AccessBindingDelta.toJSON(e) : undefined);
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
                message.accessBindingDeltas.push(exports.AccessBindingDelta.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessBindingsRequest.$type, exports.UpdateAccessBindingsRequest);
const baseUpdateAccessBindingsMetadata = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsMetadata',
    resourceId: '',
};
exports.UpdateAccessBindingsMetadata = {
    $type: 'yandex.cloud.access.UpdateAccessBindingsMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessBindingsMetadata.$type, exports.UpdateAccessBindingsMetadata);
const baseAccessBindingDelta = {
    $type: 'yandex.cloud.access.AccessBindingDelta',
    action: 0,
};
exports.AccessBindingDelta = {
    $type: 'yandex.cloud.access.AccessBindingDelta',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.accessBinding !== undefined) {
            exports.AccessBinding.encode(message.accessBinding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBindingDelta };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.accessBinding = exports.AccessBinding.decode(reader, reader.uint32());
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
            message.accessBinding = exports.AccessBinding.fromJSON(object.accessBinding);
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
                ? exports.AccessBinding.toJSON(message.accessBinding)
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
            message.accessBinding = exports.AccessBinding.fromPartial(object.accessBinding);
        }
        else {
            message.accessBinding = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AccessBindingDelta.$type, exports.AccessBindingDelta);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
