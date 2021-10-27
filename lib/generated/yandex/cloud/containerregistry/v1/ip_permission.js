"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpPermissionDelta = exports.IpPermission = exports.ipPermission_ActionToJSON = exports.ipPermission_ActionFromJSON = exports.IpPermission_Action = exports.ipPermissionActionToJSON = exports.ipPermissionActionFromJSON = exports.IpPermissionAction = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
var IpPermissionAction;
(function (IpPermissionAction) {
    IpPermissionAction[IpPermissionAction["IP_PERMISSION_ACTION_UNSPECIFIED"] = 0] = "IP_PERMISSION_ACTION_UNSPECIFIED";
    /** ADD - Addition of an ip permission. */
    IpPermissionAction[IpPermissionAction["ADD"] = 1] = "ADD";
    /** REMOVE - Removal of an ip permission. */
    IpPermissionAction[IpPermissionAction["REMOVE"] = 2] = "REMOVE";
    IpPermissionAction[IpPermissionAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpPermissionAction = exports.IpPermissionAction || (exports.IpPermissionAction = {}));
function ipPermissionActionFromJSON(object) {
    switch (object) {
        case 0:
        case 'IP_PERMISSION_ACTION_UNSPECIFIED':
            return IpPermissionAction.IP_PERMISSION_ACTION_UNSPECIFIED;
        case 1:
        case 'ADD':
            return IpPermissionAction.ADD;
        case 2:
        case 'REMOVE':
            return IpPermissionAction.REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpPermissionAction.UNRECOGNIZED;
    }
}
exports.ipPermissionActionFromJSON = ipPermissionActionFromJSON;
function ipPermissionActionToJSON(object) {
    switch (object) {
        case IpPermissionAction.IP_PERMISSION_ACTION_UNSPECIFIED:
            return 'IP_PERMISSION_ACTION_UNSPECIFIED';
        case IpPermissionAction.ADD:
            return 'ADD';
        case IpPermissionAction.REMOVE:
            return 'REMOVE';
        default:
            return 'UNKNOWN';
    }
}
exports.ipPermissionActionToJSON = ipPermissionActionToJSON;
var IpPermission_Action;
(function (IpPermission_Action) {
    IpPermission_Action[IpPermission_Action["ACTION_UNSPECIFIED"] = 0] = "ACTION_UNSPECIFIED";
    IpPermission_Action[IpPermission_Action["PULL"] = 1] = "PULL";
    IpPermission_Action[IpPermission_Action["PUSH"] = 2] = "PUSH";
    IpPermission_Action[IpPermission_Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpPermission_Action = exports.IpPermission_Action || (exports.IpPermission_Action = {}));
function ipPermission_ActionFromJSON(object) {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return IpPermission_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'PULL':
            return IpPermission_Action.PULL;
        case 2:
        case 'PUSH':
            return IpPermission_Action.PUSH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpPermission_Action.UNRECOGNIZED;
    }
}
exports.ipPermission_ActionFromJSON = ipPermission_ActionFromJSON;
function ipPermission_ActionToJSON(object) {
    switch (object) {
        case IpPermission_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case IpPermission_Action.PULL:
            return 'PULL';
        case IpPermission_Action.PUSH:
            return 'PUSH';
        default:
            return 'UNKNOWN';
    }
}
exports.ipPermission_ActionToJSON = ipPermission_ActionToJSON;
const baseIpPermission = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermission',
    action: 0,
    ip: '',
};
exports.IpPermission = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermission',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.ip !== '') {
            writer.uint32(18).string(message.ip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIpPermission };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIpPermission };
        if (object.action !== undefined && object.action !== null) {
            message.action = ipPermission_ActionFromJSON(object.action);
        }
        else {
            message.action = 0;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = String(object.ip);
        }
        else {
            message.ip = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined &&
            (obj.action = ipPermission_ActionToJSON(message.action));
        message.ip !== undefined && (obj.ip = message.ip);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIpPermission };
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        else {
            message.action = 0;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        else {
            message.ip = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.IpPermission.$type, exports.IpPermission);
const baseIpPermissionDelta = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermissionDelta',
    action: 0,
};
exports.IpPermissionDelta = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermissionDelta',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.ipPermission !== undefined) {
            exports.IpPermission.encode(message.ipPermission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIpPermissionDelta };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.ipPermission = exports.IpPermission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIpPermissionDelta };
        if (object.action !== undefined && object.action !== null) {
            message.action = ipPermissionActionFromJSON(object.action);
        }
        else {
            message.action = 0;
        }
        if (object.ipPermission !== undefined && object.ipPermission !== null) {
            message.ipPermission = exports.IpPermission.fromJSON(object.ipPermission);
        }
        else {
            message.ipPermission = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined &&
            (obj.action = ipPermissionActionToJSON(message.action));
        message.ipPermission !== undefined &&
            (obj.ipPermission = message.ipPermission
                ? exports.IpPermission.toJSON(message.ipPermission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIpPermissionDelta };
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        else {
            message.action = 0;
        }
        if (object.ipPermission !== undefined && object.ipPermission !== null) {
            message.ipPermission = exports.IpPermission.fromPartial(object.ipPermission);
        }
        else {
            message.ipPermission = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.IpPermissionDelta.$type, exports.IpPermissionDelta);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
