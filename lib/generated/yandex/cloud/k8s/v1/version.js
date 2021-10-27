"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVersionSpec = exports.VersionInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.k8s.v1';
const baseVersionInfo = {
    $type: 'yandex.cloud.k8s.v1.VersionInfo',
    currentVersion: '',
    newRevisionAvailable: false,
    newRevisionSummary: '',
    versionDeprecated: false,
};
exports.VersionInfo = {
    $type: 'yandex.cloud.k8s.v1.VersionInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currentVersion !== '') {
            writer.uint32(10).string(message.currentVersion);
        }
        if (message.newRevisionAvailable === true) {
            writer.uint32(16).bool(message.newRevisionAvailable);
        }
        if (message.newRevisionSummary !== '') {
            writer.uint32(26).string(message.newRevisionSummary);
        }
        if (message.versionDeprecated === true) {
            writer.uint32(32).bool(message.versionDeprecated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersionInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentVersion = reader.string();
                    break;
                case 2:
                    message.newRevisionAvailable = reader.bool();
                    break;
                case 3:
                    message.newRevisionSummary = reader.string();
                    break;
                case 4:
                    message.versionDeprecated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVersionInfo };
        if (object.currentVersion !== undefined &&
            object.currentVersion !== null) {
            message.currentVersion = String(object.currentVersion);
        }
        else {
            message.currentVersion = '';
        }
        if (object.newRevisionAvailable !== undefined &&
            object.newRevisionAvailable !== null) {
            message.newRevisionAvailable = Boolean(object.newRevisionAvailable);
        }
        else {
            message.newRevisionAvailable = false;
        }
        if (object.newRevisionSummary !== undefined &&
            object.newRevisionSummary !== null) {
            message.newRevisionSummary = String(object.newRevisionSummary);
        }
        else {
            message.newRevisionSummary = '';
        }
        if (object.versionDeprecated !== undefined &&
            object.versionDeprecated !== null) {
            message.versionDeprecated = Boolean(object.versionDeprecated);
        }
        else {
            message.versionDeprecated = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.currentVersion !== undefined &&
            (obj.currentVersion = message.currentVersion);
        message.newRevisionAvailable !== undefined &&
            (obj.newRevisionAvailable = message.newRevisionAvailable);
        message.newRevisionSummary !== undefined &&
            (obj.newRevisionSummary = message.newRevisionSummary);
        message.versionDeprecated !== undefined &&
            (obj.versionDeprecated = message.versionDeprecated);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVersionInfo };
        if (object.currentVersion !== undefined &&
            object.currentVersion !== null) {
            message.currentVersion = object.currentVersion;
        }
        else {
            message.currentVersion = '';
        }
        if (object.newRevisionAvailable !== undefined &&
            object.newRevisionAvailable !== null) {
            message.newRevisionAvailable = object.newRevisionAvailable;
        }
        else {
            message.newRevisionAvailable = false;
        }
        if (object.newRevisionSummary !== undefined &&
            object.newRevisionSummary !== null) {
            message.newRevisionSummary = object.newRevisionSummary;
        }
        else {
            message.newRevisionSummary = '';
        }
        if (object.versionDeprecated !== undefined &&
            object.versionDeprecated !== null) {
            message.versionDeprecated = object.versionDeprecated;
        }
        else {
            message.versionDeprecated = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.VersionInfo.$type, exports.VersionInfo);
const baseUpdateVersionSpec = {
    $type: 'yandex.cloud.k8s.v1.UpdateVersionSpec',
};
exports.UpdateVersionSpec = {
    $type: 'yandex.cloud.k8s.v1.UpdateVersionSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined) {
            writer.uint32(10).string(message.version);
        }
        if (message.latestRevision !== undefined) {
            writer.uint32(16).bool(message.latestRevision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVersionSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.latestRevision = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateVersionSpec };
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.latestRevision !== undefined &&
            object.latestRevision !== null) {
            message.latestRevision = Boolean(object.latestRevision);
        }
        else {
            message.latestRevision = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.latestRevision !== undefined &&
            (obj.latestRevision = message.latestRevision);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateVersionSpec };
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = undefined;
        }
        if (object.latestRevision !== undefined &&
            object.latestRevision !== null) {
            message.latestRevision = object.latestRevision;
        }
        else {
            message.latestRevision = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateVersionSpec.$type, exports.UpdateVersionSpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
