"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Referrer = exports.Reference = exports.reference_TypeToJSON = exports.reference_TypeFromJSON = exports.Reference_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.reference';
var Reference_Type;
(function (Reference_Type) {
    Reference_Type[Reference_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Reference_Type[Reference_Type["MANAGED_BY"] = 1] = "MANAGED_BY";
    Reference_Type[Reference_Type["USED_BY"] = 2] = "USED_BY";
    Reference_Type[Reference_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Reference_Type = exports.Reference_Type || (exports.Reference_Type = {}));
function reference_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Reference_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'MANAGED_BY':
            return Reference_Type.MANAGED_BY;
        case 2:
        case 'USED_BY':
            return Reference_Type.USED_BY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Reference_Type.UNRECOGNIZED;
    }
}
exports.reference_TypeFromJSON = reference_TypeFromJSON;
function reference_TypeToJSON(object) {
    switch (object) {
        case Reference_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Reference_Type.MANAGED_BY:
            return 'MANAGED_BY';
        case Reference_Type.USED_BY:
            return 'USED_BY';
        default:
            return 'UNKNOWN';
    }
}
exports.reference_TypeToJSON = reference_TypeToJSON;
const baseReference = {
    $type: 'yandex.cloud.reference.Reference',
    type: 0,
};
exports.Reference = {
    $type: 'yandex.cloud.reference.Reference',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.referrer !== undefined) {
            exports.Referrer.encode(message.referrer, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReference };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referrer = exports.Referrer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReference };
        if (object.referrer !== undefined && object.referrer !== null) {
            message.referrer = exports.Referrer.fromJSON(object.referrer);
        }
        else {
            message.referrer = undefined;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = reference_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.referrer !== undefined &&
            (obj.referrer = message.referrer
                ? exports.Referrer.toJSON(message.referrer)
                : undefined);
        message.type !== undefined &&
            (obj.type = reference_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReference };
        if (object.referrer !== undefined && object.referrer !== null) {
            message.referrer = exports.Referrer.fromPartial(object.referrer);
        }
        else {
            message.referrer = undefined;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Reference.$type, exports.Reference);
const baseReferrer = {
    $type: 'yandex.cloud.reference.Referrer',
    type: '',
    id: '',
};
exports.Referrer = {
    $type: 'yandex.cloud.reference.Referrer',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReferrer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReferrer };
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReferrer };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Referrer.$type, exports.Referrer);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
