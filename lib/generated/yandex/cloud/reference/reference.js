/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.reference';
export var Reference_Type;
(function (Reference_Type) {
    Reference_Type[Reference_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Reference_Type[Reference_Type["MANAGED_BY"] = 1] = "MANAGED_BY";
    Reference_Type[Reference_Type["USED_BY"] = 2] = "USED_BY";
    Reference_Type[Reference_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Reference_Type || (Reference_Type = {}));
export function reference_TypeFromJSON(object) {
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
export function reference_TypeToJSON(object) {
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
const baseReference = { type: 0 };
export const Reference = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.referrer !== undefined) {
            Referrer.encode(message.referrer, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReference };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referrer = Referrer.decode(reader, reader.uint32());
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
            message.referrer = Referrer.fromJSON(object.referrer);
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
                ? Referrer.toJSON(message.referrer)
                : undefined);
        message.type !== undefined &&
            (obj.type = reference_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReference };
        if (object.referrer !== undefined && object.referrer !== null) {
            message.referrer = Referrer.fromPartial(object.referrer);
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
const baseReferrer = { type: '', id: '' };
export const Referrer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}