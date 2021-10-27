"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlModel = exports.mlModelTypeToJSON = exports.mlModelTypeFromJSON = exports.MlModelType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
var MlModelType;
(function (MlModelType) {
    MlModelType[MlModelType["ML_MODEL_TYPE_UNSPECIFIED"] = 0] = "ML_MODEL_TYPE_UNSPECIFIED";
    /** ML_MODEL_TYPE_CATBOOST - CatBoost model. */
    MlModelType[MlModelType["ML_MODEL_TYPE_CATBOOST"] = 1] = "ML_MODEL_TYPE_CATBOOST";
    MlModelType[MlModelType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MlModelType = exports.MlModelType || (exports.MlModelType = {}));
function mlModelTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'ML_MODEL_TYPE_UNSPECIFIED':
            return MlModelType.ML_MODEL_TYPE_UNSPECIFIED;
        case 1:
        case 'ML_MODEL_TYPE_CATBOOST':
            return MlModelType.ML_MODEL_TYPE_CATBOOST;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MlModelType.UNRECOGNIZED;
    }
}
exports.mlModelTypeFromJSON = mlModelTypeFromJSON;
function mlModelTypeToJSON(object) {
    switch (object) {
        case MlModelType.ML_MODEL_TYPE_UNSPECIFIED:
            return 'ML_MODEL_TYPE_UNSPECIFIED';
        case MlModelType.ML_MODEL_TYPE_CATBOOST:
            return 'ML_MODEL_TYPE_CATBOOST';
        default:
            return 'UNKNOWN';
    }
}
exports.mlModelTypeToJSON = mlModelTypeToJSON;
const baseMlModel = { name: '', clusterId: '', type: 0, uri: '' };
exports.MlModel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMlModel };
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
                    message.type = reader.int32();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMlModel };
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
        if (object.type !== undefined && object.type !== null) {
            message.type = mlModelTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.type !== undefined &&
            (obj.type = mlModelTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMlModel };
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
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
