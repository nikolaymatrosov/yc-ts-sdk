"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataprocManagerServiceClient = exports.DataprocManagerServiceService = exports.ReportReply = exports.ReportRequest = exports.Info = exports.LivyInfo = exports.OozieInfo = exports.ZookeeperInfo = exports.YarnInfo = exports.YarnNodeInfo = exports.HiveInfo = exports.HDFSInfo = exports.HDFSNodeInfo = exports.HbaseInfo = exports.HbaseNodeInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../../typeRegistry");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.dataproc.manager.v1';
const baseHbaseNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseNodeInfo',
    name: '',
    requests: 0,
    heapSizeMb: 0,
    maxHeapSizeMb: 0,
};
exports.HbaseNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseNodeInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.requests !== 0) {
            writer.uint32(16).int64(message.requests);
        }
        if (message.heapSizeMb !== 0) {
            writer.uint32(24).int64(message.heapSizeMb);
        }
        if (message.maxHeapSizeMb !== 0) {
            writer.uint32(32).int64(message.maxHeapSizeMb);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHbaseNodeInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requests = longToNumber(reader.int64());
                    break;
                case 3:
                    message.heapSizeMb = longToNumber(reader.int64());
                    break;
                case 4:
                    message.maxHeapSizeMb = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHbaseNodeInfo };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = Number(object.requests);
        }
        else {
            message.requests = 0;
        }
        if (object.heapSizeMb !== undefined && object.heapSizeMb !== null) {
            message.heapSizeMb = Number(object.heapSizeMb);
        }
        else {
            message.heapSizeMb = 0;
        }
        if (object.maxHeapSizeMb !== undefined &&
            object.maxHeapSizeMb !== null) {
            message.maxHeapSizeMb = Number(object.maxHeapSizeMb);
        }
        else {
            message.maxHeapSizeMb = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.requests !== undefined && (obj.requests = message.requests);
        message.heapSizeMb !== undefined &&
            (obj.heapSizeMb = message.heapSizeMb);
        message.maxHeapSizeMb !== undefined &&
            (obj.maxHeapSizeMb = message.maxHeapSizeMb);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHbaseNodeInfo };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = object.requests;
        }
        else {
            message.requests = 0;
        }
        if (object.heapSizeMb !== undefined && object.heapSizeMb !== null) {
            message.heapSizeMb = object.heapSizeMb;
        }
        else {
            message.heapSizeMb = 0;
        }
        if (object.maxHeapSizeMb !== undefined &&
            object.maxHeapSizeMb !== null) {
            message.maxHeapSizeMb = object.maxHeapSizeMb;
        }
        else {
            message.maxHeapSizeMb = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HbaseNodeInfo.$type, exports.HbaseNodeInfo);
const baseHbaseInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseInfo',
    available: false,
    regions: 0,
    requests: 0,
    averageLoad: 0,
};
exports.HbaseInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.regions !== 0) {
            writer.uint32(16).int64(message.regions);
        }
        if (message.requests !== 0) {
            writer.uint32(24).int64(message.requests);
        }
        if (message.averageLoad !== 0) {
            writer.uint32(33).double(message.averageLoad);
        }
        for (const v of message.liveNodes) {
            exports.HbaseNodeInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            exports.HbaseNodeInfo.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHbaseInfo };
        message.liveNodes = [];
        message.deadNodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.regions = longToNumber(reader.int64());
                    break;
                case 3:
                    message.requests = longToNumber(reader.int64());
                    break;
                case 4:
                    message.averageLoad = reader.double();
                    break;
                case 5:
                    message.liveNodes.push(exports.HbaseNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deadNodes.push(exports.HbaseNodeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHbaseInfo };
        message.liveNodes = [];
        message.deadNodes = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        }
        else {
            message.available = false;
        }
        if (object.regions !== undefined && object.regions !== null) {
            message.regions = Number(object.regions);
        }
        else {
            message.regions = 0;
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = Number(object.requests);
        }
        else {
            message.requests = 0;
        }
        if (object.averageLoad !== undefined && object.averageLoad !== null) {
            message.averageLoad = Number(object.averageLoad);
        }
        else {
            message.averageLoad = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(exports.HbaseNodeInfo.fromJSON(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(exports.HbaseNodeInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        message.regions !== undefined && (obj.regions = message.regions);
        message.requests !== undefined && (obj.requests = message.requests);
        message.averageLoad !== undefined &&
            (obj.averageLoad = message.averageLoad);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => e ? exports.HbaseNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) => e ? exports.HbaseNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.deadNodes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHbaseInfo };
        message.liveNodes = [];
        message.deadNodes = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        else {
            message.available = false;
        }
        if (object.regions !== undefined && object.regions !== null) {
            message.regions = object.regions;
        }
        else {
            message.regions = 0;
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = object.requests;
        }
        else {
            message.requests = 0;
        }
        if (object.averageLoad !== undefined && object.averageLoad !== null) {
            message.averageLoad = object.averageLoad;
        }
        else {
            message.averageLoad = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(exports.HbaseNodeInfo.fromPartial(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(exports.HbaseNodeInfo.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HbaseInfo.$type, exports.HbaseInfo);
const baseHDFSNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSNodeInfo',
    name: '',
    used: 0,
    remaining: 0,
    capacity: 0,
    numBlocks: 0,
    state: '',
};
exports.HDFSNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSNodeInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.remaining !== 0) {
            writer.uint32(24).int64(message.remaining);
        }
        if (message.capacity !== 0) {
            writer.uint32(32).int64(message.capacity);
        }
        if (message.numBlocks !== 0) {
            writer.uint32(40).int64(message.numBlocks);
        }
        if (message.state !== '') {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHDFSNodeInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.used = longToNumber(reader.int64());
                    break;
                case 3:
                    message.remaining = longToNumber(reader.int64());
                    break;
                case 4:
                    message.capacity = longToNumber(reader.int64());
                    break;
                case 5:
                    message.numBlocks = longToNumber(reader.int64());
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHDFSNodeInfo };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = Number(object.used);
        }
        else {
            message.used = 0;
        }
        if (object.remaining !== undefined && object.remaining !== null) {
            message.remaining = Number(object.remaining);
        }
        else {
            message.remaining = 0;
        }
        if (object.capacity !== undefined && object.capacity !== null) {
            message.capacity = Number(object.capacity);
        }
        else {
            message.capacity = 0;
        }
        if (object.numBlocks !== undefined && object.numBlocks !== null) {
            message.numBlocks = Number(object.numBlocks);
        }
        else {
            message.numBlocks = 0;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        else {
            message.state = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.used !== undefined && (obj.used = message.used);
        message.remaining !== undefined && (obj.remaining = message.remaining);
        message.capacity !== undefined && (obj.capacity = message.capacity);
        message.numBlocks !== undefined && (obj.numBlocks = message.numBlocks);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHDFSNodeInfo };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = object.used;
        }
        else {
            message.used = 0;
        }
        if (object.remaining !== undefined && object.remaining !== null) {
            message.remaining = object.remaining;
        }
        else {
            message.remaining = 0;
        }
        if (object.capacity !== undefined && object.capacity !== null) {
            message.capacity = object.capacity;
        }
        else {
            message.capacity = 0;
        }
        if (object.numBlocks !== undefined && object.numBlocks !== null) {
            message.numBlocks = object.numBlocks;
        }
        else {
            message.numBlocks = 0;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HDFSNodeInfo.$type, exports.HDFSNodeInfo);
const baseHDFSInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSInfo',
    available: false,
    percentRemaining: 0,
    used: 0,
    free: 0,
    totalBlocks: 0,
    missingBlocks: 0,
    missingBlocksReplicaOne: 0,
    safemode: '',
    requestedDecommissionHosts: '',
};
exports.HDFSInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.percentRemaining !== 0) {
            writer.uint32(17).double(message.percentRemaining);
        }
        if (message.used !== 0) {
            writer.uint32(24).int64(message.used);
        }
        if (message.free !== 0) {
            writer.uint32(32).int64(message.free);
        }
        if (message.totalBlocks !== 0) {
            writer.uint32(40).int64(message.totalBlocks);
        }
        if (message.missingBlocks !== 0) {
            writer.uint32(48).int64(message.missingBlocks);
        }
        if (message.missingBlocksReplicaOne !== 0) {
            writer.uint32(56).int64(message.missingBlocksReplicaOne);
        }
        for (const v of message.liveNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.safemode !== '') {
            writer.uint32(90).string(message.safemode);
        }
        for (const v of message.decommissioningNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.decommissionedNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(114).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHDFSInfo };
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.percentRemaining = reader.double();
                    break;
                case 3:
                    message.used = longToNumber(reader.int64());
                    break;
                case 4:
                    message.free = longToNumber(reader.int64());
                    break;
                case 5:
                    message.totalBlocks = longToNumber(reader.int64());
                    break;
                case 6:
                    message.missingBlocks = longToNumber(reader.int64());
                    break;
                case 7:
                    message.missingBlocksReplicaOne = longToNumber(reader.int64());
                    break;
                case 8:
                    message.liveNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.deadNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.safemode = reader.string();
                    break;
                case 12:
                    message.decommissioningNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.decommissionedNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHDFSInfo };
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        }
        else {
            message.available = false;
        }
        if (object.percentRemaining !== undefined &&
            object.percentRemaining !== null) {
            message.percentRemaining = Number(object.percentRemaining);
        }
        else {
            message.percentRemaining = 0;
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = Number(object.used);
        }
        else {
            message.used = 0;
        }
        if (object.free !== undefined && object.free !== null) {
            message.free = Number(object.free);
        }
        else {
            message.free = 0;
        }
        if (object.totalBlocks !== undefined && object.totalBlocks !== null) {
            message.totalBlocks = Number(object.totalBlocks);
        }
        else {
            message.totalBlocks = 0;
        }
        if (object.missingBlocks !== undefined &&
            object.missingBlocks !== null) {
            message.missingBlocks = Number(object.missingBlocks);
        }
        else {
            message.missingBlocks = 0;
        }
        if (object.missingBlocksReplicaOne !== undefined &&
            object.missingBlocksReplicaOne !== null) {
            message.missingBlocksReplicaOne = Number(object.missingBlocksReplicaOne);
        }
        else {
            message.missingBlocksReplicaOne = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(exports.HDFSNodeInfo.fromJSON(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(exports.HDFSNodeInfo.fromJSON(e));
            }
        }
        if (object.safemode !== undefined && object.safemode !== null) {
            message.safemode = String(object.safemode);
        }
        else {
            message.safemode = '';
        }
        if (object.decommissioningNodes !== undefined &&
            object.decommissioningNodes !== null) {
            for (const e of object.decommissioningNodes) {
                message.decommissioningNodes.push(exports.HDFSNodeInfo.fromJSON(e));
            }
        }
        if (object.decommissionedNodes !== undefined &&
            object.decommissionedNodes !== null) {
            for (const e of object.decommissionedNodes) {
                message.decommissionedNodes.push(exports.HDFSNodeInfo.fromJSON(e));
            }
        }
        if (object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        message.percentRemaining !== undefined &&
            (obj.percentRemaining = message.percentRemaining);
        message.used !== undefined && (obj.used = message.used);
        message.free !== undefined && (obj.free = message.free);
        message.totalBlocks !== undefined &&
            (obj.totalBlocks = message.totalBlocks);
        message.missingBlocks !== undefined &&
            (obj.missingBlocks = message.missingBlocks);
        message.missingBlocksReplicaOne !== undefined &&
            (obj.missingBlocksReplicaOne = message.missingBlocksReplicaOne);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.deadNodes = [];
        }
        message.safemode !== undefined && (obj.safemode = message.safemode);
        if (message.decommissioningNodes) {
            obj.decommissioningNodes = message.decommissioningNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.decommissioningNodes = [];
        }
        if (message.decommissionedNodes) {
            obj.decommissionedNodes = message.decommissionedNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.decommissionedNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts =
                message.requestedDecommissionHosts.map((e) => e);
        }
        else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHDFSInfo };
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        else {
            message.available = false;
        }
        if (object.percentRemaining !== undefined &&
            object.percentRemaining !== null) {
            message.percentRemaining = object.percentRemaining;
        }
        else {
            message.percentRemaining = 0;
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = object.used;
        }
        else {
            message.used = 0;
        }
        if (object.free !== undefined && object.free !== null) {
            message.free = object.free;
        }
        else {
            message.free = 0;
        }
        if (object.totalBlocks !== undefined && object.totalBlocks !== null) {
            message.totalBlocks = object.totalBlocks;
        }
        else {
            message.totalBlocks = 0;
        }
        if (object.missingBlocks !== undefined &&
            object.missingBlocks !== null) {
            message.missingBlocks = object.missingBlocks;
        }
        else {
            message.missingBlocks = 0;
        }
        if (object.missingBlocksReplicaOne !== undefined &&
            object.missingBlocksReplicaOne !== null) {
            message.missingBlocksReplicaOne = object.missingBlocksReplicaOne;
        }
        else {
            message.missingBlocksReplicaOne = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(exports.HDFSNodeInfo.fromPartial(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(exports.HDFSNodeInfo.fromPartial(e));
            }
        }
        if (object.safemode !== undefined && object.safemode !== null) {
            message.safemode = object.safemode;
        }
        else {
            message.safemode = '';
        }
        if (object.decommissioningNodes !== undefined &&
            object.decommissioningNodes !== null) {
            for (const e of object.decommissioningNodes) {
                message.decommissioningNodes.push(exports.HDFSNodeInfo.fromPartial(e));
            }
        }
        if (object.decommissionedNodes !== undefined &&
            object.decommissionedNodes !== null) {
            for (const e of object.decommissionedNodes) {
                message.decommissionedNodes.push(exports.HDFSNodeInfo.fromPartial(e));
            }
        }
        if (object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HDFSInfo.$type, exports.HDFSInfo);
const baseHiveInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveInfo',
    available: false,
    queriesSucceeded: 0,
    queriesFailed: 0,
    queriesExecuting: 0,
    sessionsOpen: 0,
    sessionsActive: 0,
};
exports.HiveInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.queriesSucceeded !== 0) {
            writer.uint32(16).int64(message.queriesSucceeded);
        }
        if (message.queriesFailed !== 0) {
            writer.uint32(24).int64(message.queriesFailed);
        }
        if (message.queriesExecuting !== 0) {
            writer.uint32(32).int64(message.queriesExecuting);
        }
        if (message.sessionsOpen !== 0) {
            writer.uint32(40).int64(message.sessionsOpen);
        }
        if (message.sessionsActive !== 0) {
            writer.uint32(48).int64(message.sessionsActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHiveInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.queriesSucceeded = longToNumber(reader.int64());
                    break;
                case 3:
                    message.queriesFailed = longToNumber(reader.int64());
                    break;
                case 4:
                    message.queriesExecuting = longToNumber(reader.int64());
                    break;
                case 5:
                    message.sessionsOpen = longToNumber(reader.int64());
                    break;
                case 6:
                    message.sessionsActive = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHiveInfo };
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        }
        else {
            message.available = false;
        }
        if (object.queriesSucceeded !== undefined &&
            object.queriesSucceeded !== null) {
            message.queriesSucceeded = Number(object.queriesSucceeded);
        }
        else {
            message.queriesSucceeded = 0;
        }
        if (object.queriesFailed !== undefined &&
            object.queriesFailed !== null) {
            message.queriesFailed = Number(object.queriesFailed);
        }
        else {
            message.queriesFailed = 0;
        }
        if (object.queriesExecuting !== undefined &&
            object.queriesExecuting !== null) {
            message.queriesExecuting = Number(object.queriesExecuting);
        }
        else {
            message.queriesExecuting = 0;
        }
        if (object.sessionsOpen !== undefined && object.sessionsOpen !== null) {
            message.sessionsOpen = Number(object.sessionsOpen);
        }
        else {
            message.sessionsOpen = 0;
        }
        if (object.sessionsActive !== undefined &&
            object.sessionsActive !== null) {
            message.sessionsActive = Number(object.sessionsActive);
        }
        else {
            message.sessionsActive = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        message.queriesSucceeded !== undefined &&
            (obj.queriesSucceeded = message.queriesSucceeded);
        message.queriesFailed !== undefined &&
            (obj.queriesFailed = message.queriesFailed);
        message.queriesExecuting !== undefined &&
            (obj.queriesExecuting = message.queriesExecuting);
        message.sessionsOpen !== undefined &&
            (obj.sessionsOpen = message.sessionsOpen);
        message.sessionsActive !== undefined &&
            (obj.sessionsActive = message.sessionsActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHiveInfo };
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        else {
            message.available = false;
        }
        if (object.queriesSucceeded !== undefined &&
            object.queriesSucceeded !== null) {
            message.queriesSucceeded = object.queriesSucceeded;
        }
        else {
            message.queriesSucceeded = 0;
        }
        if (object.queriesFailed !== undefined &&
            object.queriesFailed !== null) {
            message.queriesFailed = object.queriesFailed;
        }
        else {
            message.queriesFailed = 0;
        }
        if (object.queriesExecuting !== undefined &&
            object.queriesExecuting !== null) {
            message.queriesExecuting = object.queriesExecuting;
        }
        else {
            message.queriesExecuting = 0;
        }
        if (object.sessionsOpen !== undefined && object.sessionsOpen !== null) {
            message.sessionsOpen = object.sessionsOpen;
        }
        else {
            message.sessionsOpen = 0;
        }
        if (object.sessionsActive !== undefined &&
            object.sessionsActive !== null) {
            message.sessionsActive = object.sessionsActive;
        }
        else {
            message.sessionsActive = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HiveInfo.$type, exports.HiveInfo);
const baseYarnNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnNodeInfo',
    name: '',
    state: '',
    numContainers: 0,
    usedMemoryMb: 0,
    availableMemoryMb: 0,
    updateTime: 0,
};
exports.YarnNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnNodeInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.state !== '') {
            writer.uint32(18).string(message.state);
        }
        if (message.numContainers !== 0) {
            writer.uint32(24).int64(message.numContainers);
        }
        if (message.usedMemoryMb !== 0) {
            writer.uint32(32).int64(message.usedMemoryMb);
        }
        if (message.availableMemoryMb !== 0) {
            writer.uint32(40).int64(message.availableMemoryMb);
        }
        if (message.updateTime !== 0) {
            writer.uint32(48).int64(message.updateTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYarnNodeInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
                case 3:
                    message.numContainers = longToNumber(reader.int64());
                    break;
                case 4:
                    message.usedMemoryMb = longToNumber(reader.int64());
                    break;
                case 5:
                    message.availableMemoryMb = longToNumber(reader.int64());
                    break;
                case 6:
                    message.updateTime = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseYarnNodeInfo };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        else {
            message.state = '';
        }
        if (object.numContainers !== undefined &&
            object.numContainers !== null) {
            message.numContainers = Number(object.numContainers);
        }
        else {
            message.numContainers = 0;
        }
        if (object.usedMemoryMb !== undefined && object.usedMemoryMb !== null) {
            message.usedMemoryMb = Number(object.usedMemoryMb);
        }
        else {
            message.usedMemoryMb = 0;
        }
        if (object.availableMemoryMb !== undefined &&
            object.availableMemoryMb !== null) {
            message.availableMemoryMb = Number(object.availableMemoryMb);
        }
        else {
            message.availableMemoryMb = 0;
        }
        if (object.updateTime !== undefined && object.updateTime !== null) {
            message.updateTime = Number(object.updateTime);
        }
        else {
            message.updateTime = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.state !== undefined && (obj.state = message.state);
        message.numContainers !== undefined &&
            (obj.numContainers = message.numContainers);
        message.usedMemoryMb !== undefined &&
            (obj.usedMemoryMb = message.usedMemoryMb);
        message.availableMemoryMb !== undefined &&
            (obj.availableMemoryMb = message.availableMemoryMb);
        message.updateTime !== undefined &&
            (obj.updateTime = message.updateTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseYarnNodeInfo };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = '';
        }
        if (object.numContainers !== undefined &&
            object.numContainers !== null) {
            message.numContainers = object.numContainers;
        }
        else {
            message.numContainers = 0;
        }
        if (object.usedMemoryMb !== undefined && object.usedMemoryMb !== null) {
            message.usedMemoryMb = object.usedMemoryMb;
        }
        else {
            message.usedMemoryMb = 0;
        }
        if (object.availableMemoryMb !== undefined &&
            object.availableMemoryMb !== null) {
            message.availableMemoryMb = object.availableMemoryMb;
        }
        else {
            message.availableMemoryMb = 0;
        }
        if (object.updateTime !== undefined && object.updateTime !== null) {
            message.updateTime = object.updateTime;
        }
        else {
            message.updateTime = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YarnNodeInfo.$type, exports.YarnNodeInfo);
const baseYarnInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnInfo',
    available: false,
    requestedDecommissionHosts: '',
};
exports.YarnInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        for (const v of message.liveNodes) {
            exports.YarnNodeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYarnInfo };
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.liveNodes.push(exports.YarnNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseYarnInfo };
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        }
        else {
            message.available = false;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(exports.YarnNodeInfo.fromJSON(e));
            }
        }
        if (object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => e ? exports.YarnNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.liveNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts =
                message.requestedDecommissionHosts.map((e) => e);
        }
        else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseYarnInfo };
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        else {
            message.available = false;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(exports.YarnNodeInfo.fromPartial(e));
            }
        }
        if (object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YarnInfo.$type, exports.YarnInfo);
const baseZookeeperInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.ZookeeperInfo',
    alive: false,
};
exports.ZookeeperInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.ZookeeperInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZookeeperInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseZookeeperInfo };
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = Boolean(object.alive);
        }
        else {
            message.alive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseZookeeperInfo };
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = object.alive;
        }
        else {
            message.alive = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ZookeeperInfo.$type, exports.ZookeeperInfo);
const baseOozieInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.OozieInfo',
    alive: false,
};
exports.OozieInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.OozieInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOozieInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOozieInfo };
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = Boolean(object.alive);
        }
        else {
            message.alive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOozieInfo };
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = object.alive;
        }
        else {
            message.alive = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OozieInfo.$type, exports.OozieInfo);
const baseLivyInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.LivyInfo',
    alive: false,
};
exports.LivyInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.LivyInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLivyInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLivyInfo };
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = Boolean(object.alive);
        }
        else {
            message.alive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLivyInfo };
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = object.alive;
        }
        else {
            message.alive = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LivyInfo.$type, exports.LivyInfo);
const baseInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.Info',
    reportCount: 0,
};
exports.Info = {
    $type: 'yandex.cloud.dataproc.manager.v1.Info',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hdfs !== undefined) {
            exports.HDFSInfo.encode(message.hdfs, writer.uint32(10).fork()).ldelim();
        }
        if (message.yarn !== undefined) {
            exports.YarnInfo.encode(message.yarn, writer.uint32(18).fork()).ldelim();
        }
        if (message.hive !== undefined) {
            exports.HiveInfo.encode(message.hive, writer.uint32(26).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            exports.ZookeeperInfo.encode(message.zookeeper, writer.uint32(34).fork()).ldelim();
        }
        if (message.hbase !== undefined) {
            exports.HbaseInfo.encode(message.hbase, writer.uint32(42).fork()).ldelim();
        }
        if (message.oozie !== undefined) {
            exports.OozieInfo.encode(message.oozie, writer.uint32(50).fork()).ldelim();
        }
        if (message.reportCount !== 0) {
            writer.uint32(56).int64(message.reportCount);
        }
        if (message.livy !== undefined) {
            exports.LivyInfo.encode(message.livy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hdfs = exports.HDFSInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.yarn = exports.YarnInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hive = exports.HiveInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zookeeper = exports.ZookeeperInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.hbase = exports.HbaseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.oozie = exports.OozieInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.reportCount = longToNumber(reader.int64());
                    break;
                case 8:
                    message.livy = exports.LivyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInfo };
        if (object.hdfs !== undefined && object.hdfs !== null) {
            message.hdfs = exports.HDFSInfo.fromJSON(object.hdfs);
        }
        else {
            message.hdfs = undefined;
        }
        if (object.yarn !== undefined && object.yarn !== null) {
            message.yarn = exports.YarnInfo.fromJSON(object.yarn);
        }
        else {
            message.yarn = undefined;
        }
        if (object.hive !== undefined && object.hive !== null) {
            message.hive = exports.HiveInfo.fromJSON(object.hive);
        }
        else {
            message.hive = undefined;
        }
        if (object.zookeeper !== undefined && object.zookeeper !== null) {
            message.zookeeper = exports.ZookeeperInfo.fromJSON(object.zookeeper);
        }
        else {
            message.zookeeper = undefined;
        }
        if (object.hbase !== undefined && object.hbase !== null) {
            message.hbase = exports.HbaseInfo.fromJSON(object.hbase);
        }
        else {
            message.hbase = undefined;
        }
        if (object.oozie !== undefined && object.oozie !== null) {
            message.oozie = exports.OozieInfo.fromJSON(object.oozie);
        }
        else {
            message.oozie = undefined;
        }
        if (object.reportCount !== undefined && object.reportCount !== null) {
            message.reportCount = Number(object.reportCount);
        }
        else {
            message.reportCount = 0;
        }
        if (object.livy !== undefined && object.livy !== null) {
            message.livy = exports.LivyInfo.fromJSON(object.livy);
        }
        else {
            message.livy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hdfs !== undefined &&
            (obj.hdfs = message.hdfs
                ? exports.HDFSInfo.toJSON(message.hdfs)
                : undefined);
        message.yarn !== undefined &&
            (obj.yarn = message.yarn
                ? exports.YarnInfo.toJSON(message.yarn)
                : undefined);
        message.hive !== undefined &&
            (obj.hive = message.hive
                ? exports.HiveInfo.toJSON(message.hive)
                : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? exports.ZookeeperInfo.toJSON(message.zookeeper)
                : undefined);
        message.hbase !== undefined &&
            (obj.hbase = message.hbase
                ? exports.HbaseInfo.toJSON(message.hbase)
                : undefined);
        message.oozie !== undefined &&
            (obj.oozie = message.oozie
                ? exports.OozieInfo.toJSON(message.oozie)
                : undefined);
        message.reportCount !== undefined &&
            (obj.reportCount = message.reportCount);
        message.livy !== undefined &&
            (obj.livy = message.livy
                ? exports.LivyInfo.toJSON(message.livy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInfo };
        if (object.hdfs !== undefined && object.hdfs !== null) {
            message.hdfs = exports.HDFSInfo.fromPartial(object.hdfs);
        }
        else {
            message.hdfs = undefined;
        }
        if (object.yarn !== undefined && object.yarn !== null) {
            message.yarn = exports.YarnInfo.fromPartial(object.yarn);
        }
        else {
            message.yarn = undefined;
        }
        if (object.hive !== undefined && object.hive !== null) {
            message.hive = exports.HiveInfo.fromPartial(object.hive);
        }
        else {
            message.hive = undefined;
        }
        if (object.zookeeper !== undefined && object.zookeeper !== null) {
            message.zookeeper = exports.ZookeeperInfo.fromPartial(object.zookeeper);
        }
        else {
            message.zookeeper = undefined;
        }
        if (object.hbase !== undefined && object.hbase !== null) {
            message.hbase = exports.HbaseInfo.fromPartial(object.hbase);
        }
        else {
            message.hbase = undefined;
        }
        if (object.oozie !== undefined && object.oozie !== null) {
            message.oozie = exports.OozieInfo.fromPartial(object.oozie);
        }
        else {
            message.oozie = undefined;
        }
        if (object.reportCount !== undefined && object.reportCount !== null) {
            message.reportCount = object.reportCount;
        }
        else {
            message.reportCount = 0;
        }
        if (object.livy !== undefined && object.livy !== null) {
            message.livy = exports.LivyInfo.fromPartial(object.livy);
        }
        else {
            message.livy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Info.$type, exports.Info);
const baseReportRequest = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportRequest',
    cid: '',
    topologyRevision: 0,
};
exports.ReportRequest = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        if (message.topologyRevision !== 0) {
            writer.uint32(16).int64(message.topologyRevision);
        }
        if (message.info !== undefined) {
            exports.Info.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.collectedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.collectedAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.topologyRevision = longToNumber(reader.int64());
                    break;
                case 3:
                    message.info = exports.Info.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.collectedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReportRequest };
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        if (object.topologyRevision !== undefined &&
            object.topologyRevision !== null) {
            message.topologyRevision = Number(object.topologyRevision);
        }
        else {
            message.topologyRevision = 0;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.Info.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.collectedAt !== undefined && object.collectedAt !== null) {
            message.collectedAt = fromJsonTimestamp(object.collectedAt);
        }
        else {
            message.collectedAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cid !== undefined && (obj.cid = message.cid);
        message.topologyRevision !== undefined &&
            (obj.topologyRevision = message.topologyRevision);
        message.info !== undefined &&
            (obj.info = message.info ? exports.Info.toJSON(message.info) : undefined);
        message.collectedAt !== undefined &&
            (obj.collectedAt = message.collectedAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReportRequest };
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        if (object.topologyRevision !== undefined &&
            object.topologyRevision !== null) {
            message.topologyRevision = object.topologyRevision;
        }
        else {
            message.topologyRevision = 0;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.Info.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.collectedAt !== undefined && object.collectedAt !== null) {
            message.collectedAt = object.collectedAt;
        }
        else {
            message.collectedAt = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReportRequest.$type, exports.ReportRequest);
const baseReportReply = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportReply',
    decommissionTimeout: 0,
    yarnHostsToDecommission: '',
    hdfsHostsToDecommission: '',
};
exports.ReportReply = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportReply',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.decommissionTimeout !== 0) {
            writer.uint32(8).int64(message.decommissionTimeout);
        }
        for (const v of message.yarnHostsToDecommission) {
            writer.uint32(18).string(v);
        }
        for (const v of message.hdfsHostsToDecommission) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportReply };
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.decommissionTimeout = longToNumber(reader.int64());
                    break;
                case 2:
                    message.yarnHostsToDecommission.push(reader.string());
                    break;
                case 3:
                    message.hdfsHostsToDecommission.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReportReply };
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        }
        else {
            message.decommissionTimeout = 0;
        }
        if (object.yarnHostsToDecommission !== undefined &&
            object.yarnHostsToDecommission !== null) {
            for (const e of object.yarnHostsToDecommission) {
                message.yarnHostsToDecommission.push(String(e));
            }
        }
        if (object.hdfsHostsToDecommission !== undefined &&
            object.hdfsHostsToDecommission !== null) {
            for (const e of object.hdfsHostsToDecommission) {
                message.hdfsHostsToDecommission.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        if (message.yarnHostsToDecommission) {
            obj.yarnHostsToDecommission = message.yarnHostsToDecommission.map((e) => e);
        }
        else {
            obj.yarnHostsToDecommission = [];
        }
        if (message.hdfsHostsToDecommission) {
            obj.hdfsHostsToDecommission = message.hdfsHostsToDecommission.map((e) => e);
        }
        else {
            obj.hdfsHostsToDecommission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReportReply };
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = object.decommissionTimeout;
        }
        else {
            message.decommissionTimeout = 0;
        }
        if (object.yarnHostsToDecommission !== undefined &&
            object.yarnHostsToDecommission !== null) {
            for (const e of object.yarnHostsToDecommission) {
                message.yarnHostsToDecommission.push(e);
            }
        }
        if (object.hdfsHostsToDecommission !== undefined &&
            object.hdfsHostsToDecommission !== null) {
            for (const e of object.hdfsHostsToDecommission) {
                message.hdfsHostsToDecommission.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReportReply.$type, exports.ReportReply);
/** Data Proc manager service defifnition */
exports.DataprocManagerServiceService = {
    /** Sends a status report from a host */
    report: {
        path: '/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ReportRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ReportRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ReportReply.encode(value).finish()),
        responseDeserialize: (value) => exports.ReportReply.decode(value),
    },
};
exports.DataprocManagerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DataprocManagerServiceService, 'yandex.cloud.dataproc.manager.v1.DataprocManagerService');
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
