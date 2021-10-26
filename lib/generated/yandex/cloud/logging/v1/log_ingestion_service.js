/* eslint-disable */
import { Status } from '../../../../google/rpc/status';
import { Destination, IncomingLogEntry, LogEntryDefaults, } from '../../../../yandex/cloud/logging/v1/log_entry';
import { LogEntryResource } from '../../../../yandex/cloud/logging/v1/log_resource';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.logging.v1';
const baseWriteRequest = {};
export const WriteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.destination !== undefined) {
            Destination.encode(message.destination, writer.uint32(10).fork()).ldelim();
        }
        if (message.resource !== undefined) {
            LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.entries) {
            IncomingLogEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaults !== undefined) {
            LogEntryDefaults.encode(message.defaults, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWriteRequest };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.destination = Destination.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resource = LogEntryResource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.entries.push(IncomingLogEntry.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.defaults = LogEntryDefaults.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWriteRequest };
        message.entries = [];
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = Destination.fromJSON(object.destination);
        }
        else {
            message.destination = undefined;
        }
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = LogEntryResource.fromJSON(object.resource);
        }
        else {
            message.resource = undefined;
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(IncomingLogEntry.fromJSON(e));
            }
        }
        if (object.defaults !== undefined && object.defaults !== null) {
            message.defaults = LogEntryDefaults.fromJSON(object.defaults);
        }
        else {
            message.defaults = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? Destination.toJSON(message.destination)
                : undefined);
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? LogEntryResource.toJSON(message.resource)
                : undefined);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? IncomingLogEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.defaults !== undefined &&
            (obj.defaults = message.defaults
                ? LogEntryDefaults.toJSON(message.defaults)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWriteRequest };
        message.entries = [];
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = Destination.fromPartial(object.destination);
        }
        else {
            message.destination = undefined;
        }
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = LogEntryResource.fromPartial(object.resource);
        }
        else {
            message.resource = undefined;
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(IncomingLogEntry.fromPartial(e));
            }
        }
        if (object.defaults !== undefined && object.defaults !== null) {
            message.defaults = LogEntryDefaults.fromPartial(object.defaults);
        }
        else {
            message.defaults = undefined;
        }
        return message;
    },
};
const baseWriteResponse = {};
export const WriteResponse = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.errors).forEach(([key, value]) => {
            WriteResponse_ErrorsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWriteResponse };
        message.errors = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = WriteResponse_ErrorsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.errors[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWriteResponse };
        message.errors = {};
        if (object.errors !== undefined && object.errors !== null) {
            Object.entries(object.errors).forEach(([key, value]) => {
                message.errors[Number(key)] = Status.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.errors = {};
        if (message.errors) {
            Object.entries(message.errors).forEach(([k, v]) => {
                obj.errors[k] = Status.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWriteResponse };
        message.errors = {};
        if (object.errors !== undefined && object.errors !== null) {
            Object.entries(object.errors).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.errors[Number(key)] = Status.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseWriteResponse_ErrorsEntry = { key: 0 };
export const WriteResponse_ErrorsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).int64(message.key);
        }
        if (message.value !== undefined) {
            Status.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWriteResponse_ErrorsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = longToNumber(reader.int64());
                    break;
                case 2:
                    message.value = Status.decode(reader, reader.uint32());
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
            ...baseWriteResponse_ErrorsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = Number(object.key);
        }
        else {
            message.key = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Status.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? Status.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWriteResponse_ErrorsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Status.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
/** A set of methods for writing to log groups. To make a request use `ingester.logging.yandexcloud.net`. */
export const LogIngestionServiceService = {
    /** Write log entries to specified destination. */
    write: {
        path: '/yandex.cloud.logging.v1.LogIngestionService/Write',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(WriteRequest.encode(value).finish()),
        requestDeserialize: (value) => WriteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(WriteResponse.encode(value).finish()),
        responseDeserialize: (value) => WriteResponse.decode(value),
    },
};
export const LogIngestionServiceClient = makeGenericClientConstructor(LogIngestionServiceService, 'yandex.cloud.logging.v1.LogIngestionService');
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
