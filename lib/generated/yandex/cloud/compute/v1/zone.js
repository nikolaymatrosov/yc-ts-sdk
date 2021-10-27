"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = exports.zone_StatusToJSON = exports.zone_StatusFromJSON = exports.Zone_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var Zone_Status;
(function (Zone_Status) {
    Zone_Status[Zone_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** UP - Zone is available. You can access the resources allocated in this zone. */
    Zone_Status[Zone_Status["UP"] = 1] = "UP";
    /** DOWN - Zone is not available. */
    Zone_Status[Zone_Status["DOWN"] = 2] = "DOWN";
    Zone_Status[Zone_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Zone_Status = exports.Zone_Status || (exports.Zone_Status = {}));
function zone_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Zone_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'UP':
            return Zone_Status.UP;
        case 2:
        case 'DOWN':
            return Zone_Status.DOWN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Zone_Status.UNRECOGNIZED;
    }
}
exports.zone_StatusFromJSON = zone_StatusFromJSON;
function zone_StatusToJSON(object) {
    switch (object) {
        case Zone_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Zone_Status.UP:
            return 'UP';
        case Zone_Status.DOWN:
            return 'DOWN';
        default:
            return 'UNKNOWN';
    }
}
exports.zone_StatusToJSON = zone_StatusToJSON;
const baseZone = { id: '', regionId: '', status: 0 };
exports.Zone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.regionId !== '') {
            writer.uint32(18).string(message.regionId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZone };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.regionId = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseZone };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        }
        else {
            message.regionId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = zone_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.status !== undefined &&
            (obj.status = zone_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseZone };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        }
        else {
            message.regionId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
