"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannerServiceClient = exports.ScannerServiceService = exports.ListVulnerabilitiesResponse = exports.ListVulnerabilitiesRequest = exports.ListScanResultsResponse = exports.ListScanResultsRequest = exports.GetLastScanResultRequest = exports.GetScanResultRequest = exports.ScanMetadata = exports.ScanRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const scanner_1 = require("../../../../yandex/cloud/containerregistry/v1/scanner");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseScanRequest = { imageId: '' };
exports.ScanRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScanRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScanRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseScanMetadata = { scanResultId: '' };
exports.ScanMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanResultId !== '') {
            writer.uint32(10).string(message.scanResultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScanMetadata };
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = String(object.scanResultId);
        }
        else {
            message.scanResultId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScanMetadata };
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = object.scanResultId;
        }
        else {
            message.scanResultId = '';
        }
        return message;
    },
};
const baseGetScanResultRequest = { scanResultId: '' };
exports.GetScanResultRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanResultId !== '') {
            writer.uint32(10).string(message.scanResultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetScanResultRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetScanResultRequest };
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = String(object.scanResultId);
        }
        else {
            message.scanResultId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetScanResultRequest };
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = object.scanResultId;
        }
        else {
            message.scanResultId = '';
        }
        return message;
    },
};
const baseGetLastScanResultRequest = { imageId: '' };
exports.GetLastScanResultRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLastScanResultRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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
            ...baseGetLastScanResultRequest,
        };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetLastScanResultRequest,
        };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseListScanResultsRequest = {
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListScanResultsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== undefined) {
            writer.uint32(10).string(message.imageId);
        }
        if (message.repositoryId !== undefined) {
            writer.uint32(18).string(message.repositoryId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListScanResultsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                case 2:
                    message.repositoryId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
                    message.orderBy = reader.string();
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
            ...baseListScanResultsRequest,
        };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = undefined;
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        }
        else {
            message.orderBy = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListScanResultsRequest,
        };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = undefined;
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        }
        else {
            message.orderBy = '';
        }
        return message;
    },
};
const baseListScanResultsResponse = { nextPageToken: '' };
exports.ListScanResultsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scanResults) {
            scanner_1.ScanResult.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListScanResultsResponse,
        };
        message.scanResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResults.push(scanner_1.ScanResult.decode(reader, reader.uint32()));
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
            ...baseListScanResultsResponse,
        };
        message.scanResults = [];
        if (object.scanResults !== undefined && object.scanResults !== null) {
            for (const e of object.scanResults) {
                message.scanResults.push(scanner_1.ScanResult.fromJSON(e));
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
        if (message.scanResults) {
            obj.scanResults = message.scanResults.map((e) => e ? scanner_1.ScanResult.toJSON(e) : undefined);
        }
        else {
            obj.scanResults = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListScanResultsResponse,
        };
        message.scanResults = [];
        if (object.scanResults !== undefined && object.scanResults !== null) {
            for (const e of object.scanResults) {
                message.scanResults.push(scanner_1.ScanResult.fromPartial(e));
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
const baseListVulnerabilitiesRequest = {
    scanResultId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};
exports.ListVulnerabilitiesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanResultId !== '') {
            writer.uint32(10).string(message.scanResultId);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListVulnerabilitiesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = {
            ...baseListVulnerabilitiesRequest,
        };
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = String(object.scanResultId);
        }
        else {
            message.scanResultId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        }
        else {
            message.orderBy = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListVulnerabilitiesRequest,
        };
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = object.scanResultId;
        }
        else {
            message.scanResultId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        }
        else {
            message.orderBy = '';
        }
        return message;
    },
};
const baseListVulnerabilitiesResponse = { nextPageToken: '' };
exports.ListVulnerabilitiesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vulnerabilities) {
            scanner_1.Vulnerability.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListVulnerabilitiesResponse,
        };
        message.vulnerabilities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vulnerabilities.push(scanner_1.Vulnerability.decode(reader, reader.uint32()));
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
            ...baseListVulnerabilitiesResponse,
        };
        message.vulnerabilities = [];
        if (object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null) {
            for (const e of object.vulnerabilities) {
                message.vulnerabilities.push(scanner_1.Vulnerability.fromJSON(e));
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
        if (message.vulnerabilities) {
            obj.vulnerabilities = message.vulnerabilities.map((e) => e ? scanner_1.Vulnerability.toJSON(e) : undefined);
        }
        else {
            obj.vulnerabilities = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListVulnerabilitiesResponse,
        };
        message.vulnerabilities = [];
        if (object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null) {
            for (const e of object.vulnerabilities) {
                message.vulnerabilities.push(scanner_1.Vulnerability.fromPartial(e));
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
/** A set of methods for scanning Docker images. */
exports.ScannerServiceService = {
    /** Executes scanning of specified image. */
    scan: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/Scan',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ScanRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ScanRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetScanResultRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetScanResultRequest.decode(value),
        responseSerialize: (value) => Buffer.from(scanner_1.ScanResult.encode(value).finish()),
        responseDeserialize: (value) => scanner_1.ScanResult.decode(value),
    },
    /** Returns the last finished ScanResult for the specified Image. */
    getLast: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/GetLast',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLastScanResultRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLastScanResultRequest.decode(value),
        responseSerialize: (value) => Buffer.from(scanner_1.ScanResult.encode(value).finish()),
        responseDeserialize: (value) => scanner_1.ScanResult.decode(value),
    },
    /** Retrieves the list of ScanResults for specified Image. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListScanResultsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListScanResultsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListScanResultsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListScanResultsResponse.decode(value),
    },
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVulnerabilitiesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVulnerabilitiesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVulnerabilitiesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVulnerabilitiesResponse.decode(value),
    },
};
exports.ScannerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ScannerServiceService, 'yandex.cloud.containerregistry.v1.ScannerService');
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
