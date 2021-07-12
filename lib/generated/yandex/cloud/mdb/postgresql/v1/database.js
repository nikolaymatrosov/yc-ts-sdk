/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1';
const baseDatabase = {
    name: '',
    clusterId: '',
    owner: '',
    lcCollate: '',
    lcCtype: '',
};
export const Database = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        if (message.lcCollate !== '') {
            writer.uint32(34).string(message.lcCollate);
        }
        if (message.lcCtype !== '') {
            writer.uint32(42).string(message.lcCtype);
        }
        for (const v of message.extensions) {
            Extension.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatabase };
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.lcCollate = reader.string();
                    break;
                case 5:
                    message.lcCtype = reader.string();
                    break;
                case 6:
                    message.extensions.push(Extension.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDatabase };
        message.extensions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.lcCollate !== undefined && object.lcCollate !== null) {
            message.lcCollate = String(object.lcCollate);
        }
        else {
            message.lcCollate = '';
        }
        if (object.lcCtype !== undefined && object.lcCtype !== null) {
            message.lcCtype = String(object.lcCtype);
        }
        else {
            message.lcCtype = '';
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            for (const e of object.extensions) {
                message.extensions.push(Extension.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.lcCollate !== undefined && (obj.lcCollate = message.lcCollate);
        message.lcCtype !== undefined && (obj.lcCtype = message.lcCtype);
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => e ? Extension.toJSON(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDatabase };
        message.extensions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.lcCollate !== undefined && object.lcCollate !== null) {
            message.lcCollate = object.lcCollate;
        }
        else {
            message.lcCollate = '';
        }
        if (object.lcCtype !== undefined && object.lcCtype !== null) {
            message.lcCtype = object.lcCtype;
        }
        else {
            message.lcCtype = '';
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            for (const e of object.extensions) {
                message.extensions.push(Extension.fromPartial(e));
            }
        }
        return message;
    },
};
const baseExtension = { name: '', version: '' };
export const Extension = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtension };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseExtension };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseExtension };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        return message;
    },
};
const baseDatabaseSpec = {
    name: '',
    owner: '',
    lcCollate: '',
    lcCtype: '',
};
export const DatabaseSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.lcCollate !== '') {
            writer.uint32(26).string(message.lcCollate);
        }
        if (message.lcCtype !== '') {
            writer.uint32(34).string(message.lcCtype);
        }
        for (const v of message.extensions) {
            Extension.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatabaseSpec };
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.lcCollate = reader.string();
                    break;
                case 4:
                    message.lcCtype = reader.string();
                    break;
                case 5:
                    message.extensions.push(Extension.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDatabaseSpec };
        message.extensions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.lcCollate !== undefined && object.lcCollate !== null) {
            message.lcCollate = String(object.lcCollate);
        }
        else {
            message.lcCollate = '';
        }
        if (object.lcCtype !== undefined && object.lcCtype !== null) {
            message.lcCtype = String(object.lcCtype);
        }
        else {
            message.lcCtype = '';
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            for (const e of object.extensions) {
                message.extensions.push(Extension.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.owner !== undefined && (obj.owner = message.owner);
        message.lcCollate !== undefined && (obj.lcCollate = message.lcCollate);
        message.lcCtype !== undefined && (obj.lcCtype = message.lcCtype);
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => e ? Extension.toJSON(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDatabaseSpec };
        message.extensions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.lcCollate !== undefined && object.lcCollate !== null) {
            message.lcCollate = object.lcCollate;
        }
        else {
            message.lcCollate = '';
        }
        if (object.lcCtype !== undefined && object.lcCtype !== null) {
            message.lcCtype = object.lcCtype;
        }
        else {
            message.lcCtype = '';
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            for (const e of object.extensions) {
                message.extensions.push(Extension.fromPartial(e));
            }
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
