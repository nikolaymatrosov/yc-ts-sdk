"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProductUsageServiceClient = exports.ImageProductUsageServiceService = exports.WriteImageProductUsageResponse = exports.WriteImageProductUsageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const usage_record_1 = require("../../../../../yandex/cloud/marketplace/v1/metering/usage_record");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.marketplace.v1.metering';
const baseWriteImageProductUsageRequest = {
    validateOnly: false,
    productId: '',
};
exports.WriteImageProductUsageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validateOnly === true) {
            writer.uint32(8).bool(message.validateOnly);
        }
        if (message.productId !== '') {
            writer.uint32(18).string(message.productId);
        }
        for (const v of message.usageRecords) {
            usage_record_1.UsageRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWriteImageProductUsageRequest,
        };
        message.usageRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validateOnly = reader.bool();
                    break;
                case 2:
                    message.productId = reader.string();
                    break;
                case 3:
                    message.usageRecords.push(usage_record_1.UsageRecord.decode(reader, reader.uint32()));
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
            ...baseWriteImageProductUsageRequest,
        };
        message.usageRecords = [];
        if (object.validateOnly !== undefined && object.validateOnly !== null) {
            message.validateOnly = Boolean(object.validateOnly);
        }
        else {
            message.validateOnly = false;
        }
        if (object.productId !== undefined && object.productId !== null) {
            message.productId = String(object.productId);
        }
        else {
            message.productId = '';
        }
        if (object.usageRecords !== undefined && object.usageRecords !== null) {
            for (const e of object.usageRecords) {
                message.usageRecords.push(usage_record_1.UsageRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validateOnly !== undefined &&
            (obj.validateOnly = message.validateOnly);
        message.productId !== undefined && (obj.productId = message.productId);
        if (message.usageRecords) {
            obj.usageRecords = message.usageRecords.map((e) => e ? usage_record_1.UsageRecord.toJSON(e) : undefined);
        }
        else {
            obj.usageRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWriteImageProductUsageRequest,
        };
        message.usageRecords = [];
        if (object.validateOnly !== undefined && object.validateOnly !== null) {
            message.validateOnly = object.validateOnly;
        }
        else {
            message.validateOnly = false;
        }
        if (object.productId !== undefined && object.productId !== null) {
            message.productId = object.productId;
        }
        else {
            message.productId = '';
        }
        if (object.usageRecords !== undefined && object.usageRecords !== null) {
            for (const e of object.usageRecords) {
                message.usageRecords.push(usage_record_1.UsageRecord.fromPartial(e));
            }
        }
        return message;
    },
};
const baseWriteImageProductUsageResponse = {};
exports.WriteImageProductUsageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accepted) {
            usage_record_1.AcceptedUsageRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.rejected) {
            usage_record_1.RejectedUsageRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWriteImageProductUsageResponse,
        };
        message.accepted = [];
        message.rejected = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accepted.push(usage_record_1.AcceptedUsageRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.rejected.push(usage_record_1.RejectedUsageRecord.decode(reader, reader.uint32()));
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
            ...baseWriteImageProductUsageResponse,
        };
        message.accepted = [];
        message.rejected = [];
        if (object.accepted !== undefined && object.accepted !== null) {
            for (const e of object.accepted) {
                message.accepted.push(usage_record_1.AcceptedUsageRecord.fromJSON(e));
            }
        }
        if (object.rejected !== undefined && object.rejected !== null) {
            for (const e of object.rejected) {
                message.rejected.push(usage_record_1.RejectedUsageRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.accepted) {
            obj.accepted = message.accepted.map((e) => e ? usage_record_1.AcceptedUsageRecord.toJSON(e) : undefined);
        }
        else {
            obj.accepted = [];
        }
        if (message.rejected) {
            obj.rejected = message.rejected.map((e) => e ? usage_record_1.RejectedUsageRecord.toJSON(e) : undefined);
        }
        else {
            obj.rejected = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWriteImageProductUsageResponse,
        };
        message.accepted = [];
        message.rejected = [];
        if (object.accepted !== undefined && object.accepted !== null) {
            for (const e of object.accepted) {
                message.accepted.push(usage_record_1.AcceptedUsageRecord.fromPartial(e));
            }
        }
        if (object.rejected !== undefined && object.rejected !== null) {
            for (const e of object.rejected) {
                message.rejected.push(usage_record_1.RejectedUsageRecord.fromPartial(e));
            }
        }
        return message;
    },
};
exports.ImageProductUsageServiceService = {
    /** Writes image product's usage (authenticated by user's service account) */
    write: {
        path: '/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.WriteImageProductUsageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.WriteImageProductUsageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.WriteImageProductUsageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.WriteImageProductUsageResponse.decode(value),
    },
};
exports.ImageProductUsageServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageProductUsageServiceService, 'yandex.cloud.marketplace.v1.metering.ImageProductUsageService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
