/* eslint-disable */
import { Status } from '../../../../../google/rpc/status';
import { ClassAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/classification';
import { FaceAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/face_detection';
import { ImageCopySearchAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/image_copy_search';
import { TextAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/text_detection';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ai.vision.v1';
export var Feature_Type;
(function (Feature_Type) {
    Feature_Type[Feature_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** TEXT_DETECTION - Text detection (OCR) feature. */
    Feature_Type[Feature_Type["TEXT_DETECTION"] = 1] = "TEXT_DETECTION";
    /** CLASSIFICATION - Classification feature. */
    Feature_Type[Feature_Type["CLASSIFICATION"] = 2] = "CLASSIFICATION";
    /** FACE_DETECTION - Face detection feature. */
    Feature_Type[Feature_Type["FACE_DETECTION"] = 3] = "FACE_DETECTION";
    /** IMAGE_COPY_SEARCH - Image copy search. */
    Feature_Type[Feature_Type["IMAGE_COPY_SEARCH"] = 4] = "IMAGE_COPY_SEARCH";
    Feature_Type[Feature_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Feature_Type || (Feature_Type = {}));
export function feature_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Feature_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'TEXT_DETECTION':
            return Feature_Type.TEXT_DETECTION;
        case 2:
        case 'CLASSIFICATION':
            return Feature_Type.CLASSIFICATION;
        case 3:
        case 'FACE_DETECTION':
            return Feature_Type.FACE_DETECTION;
        case 4:
        case 'IMAGE_COPY_SEARCH':
            return Feature_Type.IMAGE_COPY_SEARCH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Feature_Type.UNRECOGNIZED;
    }
}
export function feature_TypeToJSON(object) {
    switch (object) {
        case Feature_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Feature_Type.TEXT_DETECTION:
            return 'TEXT_DETECTION';
        case Feature_Type.CLASSIFICATION:
            return 'CLASSIFICATION';
        case Feature_Type.FACE_DETECTION:
            return 'FACE_DETECTION';
        case Feature_Type.IMAGE_COPY_SEARCH:
            return 'IMAGE_COPY_SEARCH';
        default:
            return 'UNKNOWN';
    }
}
const baseBatchAnalyzeRequest = { folderId: '' };
export const BatchAnalyzeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.analyzeSpecs) {
            AnalyzeSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchAnalyzeRequest };
        message.analyzeSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.analyzeSpecs.push(AnalyzeSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBatchAnalyzeRequest };
        message.analyzeSpecs = [];
        if (object.analyzeSpecs !== undefined && object.analyzeSpecs !== null) {
            for (const e of object.analyzeSpecs) {
                message.analyzeSpecs.push(AnalyzeSpec.fromJSON(e));
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.analyzeSpecs) {
            obj.analyzeSpecs = message.analyzeSpecs.map((e) => e ? AnalyzeSpec.toJSON(e) : undefined);
        }
        else {
            obj.analyzeSpecs = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBatchAnalyzeRequest };
        message.analyzeSpecs = [];
        if (object.analyzeSpecs !== undefined && object.analyzeSpecs !== null) {
            for (const e of object.analyzeSpecs) {
                message.analyzeSpecs.push(AnalyzeSpec.fromPartial(e));
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseAnalyzeSpec = { mimeType: '' };
export const AnalyzeSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.signature !== undefined) {
            writer.uint32(42).string(message.signature);
        }
        for (const v of message.features) {
            Feature.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.mimeType !== '') {
            writer.uint32(34).string(message.mimeType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAnalyzeSpec };
        message.features = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                case 3:
                    message.features.push(Feature.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.mimeType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAnalyzeSpec };
        message.features = [];
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = undefined;
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(Feature.fromJSON(e));
            }
        }
        if (object.mimeType !== undefined && object.mimeType !== null) {
            message.mimeType = String(object.mimeType);
        }
        else {
            message.mimeType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.signature !== undefined && (obj.signature = message.signature);
        if (message.features) {
            obj.features = message.features.map((e) => e ? Feature.toJSON(e) : undefined);
        }
        else {
            obj.features = [];
        }
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAnalyzeSpec };
        message.features = [];
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = undefined;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = undefined;
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(Feature.fromPartial(e));
            }
        }
        if (object.mimeType !== undefined && object.mimeType !== null) {
            message.mimeType = object.mimeType;
        }
        else {
            message.mimeType = '';
        }
        return message;
    },
};
const baseFeature = { type: 0 };
export const Feature = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.classificationConfig !== undefined) {
            FeatureClassificationConfig.encode(message.classificationConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.textDetectionConfig !== undefined) {
            FeatureTextDetectionConfig.encode(message.textDetectionConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFeature };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.classificationConfig =
                        FeatureClassificationConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.textDetectionConfig =
                        FeatureTextDetectionConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFeature };
        if (object.type !== undefined && object.type !== null) {
            message.type = feature_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.classificationConfig !== undefined &&
            object.classificationConfig !== null) {
            message.classificationConfig = FeatureClassificationConfig.fromJSON(object.classificationConfig);
        }
        else {
            message.classificationConfig = undefined;
        }
        if (object.textDetectionConfig !== undefined &&
            object.textDetectionConfig !== null) {
            message.textDetectionConfig = FeatureTextDetectionConfig.fromJSON(object.textDetectionConfig);
        }
        else {
            message.textDetectionConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = feature_TypeToJSON(message.type));
        message.classificationConfig !== undefined &&
            (obj.classificationConfig = message.classificationConfig
                ? FeatureClassificationConfig.toJSON(message.classificationConfig)
                : undefined);
        message.textDetectionConfig !== undefined &&
            (obj.textDetectionConfig = message.textDetectionConfig
                ? FeatureTextDetectionConfig.toJSON(message.textDetectionConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFeature };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.classificationConfig !== undefined &&
            object.classificationConfig !== null) {
            message.classificationConfig =
                FeatureClassificationConfig.fromPartial(object.classificationConfig);
        }
        else {
            message.classificationConfig = undefined;
        }
        if (object.textDetectionConfig !== undefined &&
            object.textDetectionConfig !== null) {
            message.textDetectionConfig =
                FeatureTextDetectionConfig.fromPartial(object.textDetectionConfig);
        }
        else {
            message.textDetectionConfig = undefined;
        }
        return message;
    },
};
const baseFeatureClassificationConfig = { model: '' };
export const FeatureClassificationConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.model !== '') {
            writer.uint32(10).string(message.model);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFeatureClassificationConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
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
            ...baseFeatureClassificationConfig,
        };
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        }
        else {
            message.model = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFeatureClassificationConfig,
        };
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        }
        else {
            message.model = '';
        }
        return message;
    },
};
const baseFeatureTextDetectionConfig = { languageCodes: '', model: '' };
export const FeatureTextDetectionConfig = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.languageCodes) {
            writer.uint32(10).string(v);
        }
        if (message.model !== '') {
            writer.uint32(18).string(message.model);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFeatureTextDetectionConfig,
        };
        message.languageCodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languageCodes.push(reader.string());
                    break;
                case 2:
                    message.model = reader.string();
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
            ...baseFeatureTextDetectionConfig,
        };
        message.languageCodes = [];
        if (object.languageCodes !== undefined &&
            object.languageCodes !== null) {
            for (const e of object.languageCodes) {
                message.languageCodes.push(String(e));
            }
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        }
        else {
            message.model = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.languageCodes) {
            obj.languageCodes = message.languageCodes.map((e) => e);
        }
        else {
            obj.languageCodes = [];
        }
        message.model !== undefined && (obj.model = message.model);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFeatureTextDetectionConfig,
        };
        message.languageCodes = [];
        if (object.languageCodes !== undefined &&
            object.languageCodes !== null) {
            for (const e of object.languageCodes) {
                message.languageCodes.push(e);
            }
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        }
        else {
            message.model = '';
        }
        return message;
    },
};
const baseBatchAnalyzeResponse = {};
export const BatchAnalyzeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.results) {
            AnalyzeResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchAnalyzeResponse };
        message.results = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(AnalyzeResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBatchAnalyzeResponse };
        message.results = [];
        if (object.results !== undefined && object.results !== null) {
            for (const e of object.results) {
                message.results.push(AnalyzeResult.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map((e) => e ? AnalyzeResult.toJSON(e) : undefined);
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBatchAnalyzeResponse };
        message.results = [];
        if (object.results !== undefined && object.results !== null) {
            for (const e of object.results) {
                message.results.push(AnalyzeResult.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAnalyzeResult = {};
export const AnalyzeResult = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.results) {
            FeatureResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.error !== undefined) {
            Status.encode(message.error, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAnalyzeResult };
        message.results = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.results.push(FeatureResult.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.error = Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAnalyzeResult };
        message.results = [];
        if (object.results !== undefined && object.results !== null) {
            for (const e of object.results) {
                message.results.push(FeatureResult.fromJSON(e));
            }
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = Status.fromJSON(object.error);
        }
        else {
            message.error = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map((e) => e ? FeatureResult.toJSON(e) : undefined);
        }
        else {
            obj.results = [];
        }
        message.error !== undefined &&
            (obj.error = message.error
                ? Status.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAnalyzeResult };
        message.results = [];
        if (object.results !== undefined && object.results !== null) {
            for (const e of object.results) {
                message.results.push(FeatureResult.fromPartial(e));
            }
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = Status.fromPartial(object.error);
        }
        else {
            message.error = undefined;
        }
        return message;
    },
};
const baseFeatureResult = {};
export const FeatureResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.textDetection !== undefined) {
            TextAnnotation.encode(message.textDetection, writer.uint32(18).fork()).ldelim();
        }
        if (message.classification !== undefined) {
            ClassAnnotation.encode(message.classification, writer.uint32(26).fork()).ldelim();
        }
        if (message.faceDetection !== undefined) {
            FaceAnnotation.encode(message.faceDetection, writer.uint32(34).fork()).ldelim();
        }
        if (message.imageCopySearch !== undefined) {
            ImageCopySearchAnnotation.encode(message.imageCopySearch, writer.uint32(42).fork()).ldelim();
        }
        if (message.error !== undefined) {
            Status.encode(message.error, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFeatureResult };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.textDetection = TextAnnotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.classification = ClassAnnotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.faceDetection = FaceAnnotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.imageCopySearch = ImageCopySearchAnnotation.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.error = Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFeatureResult };
        if (object.textDetection !== undefined &&
            object.textDetection !== null) {
            message.textDetection = TextAnnotation.fromJSON(object.textDetection);
        }
        else {
            message.textDetection = undefined;
        }
        if (object.classification !== undefined &&
            object.classification !== null) {
            message.classification = ClassAnnotation.fromJSON(object.classification);
        }
        else {
            message.classification = undefined;
        }
        if (object.faceDetection !== undefined &&
            object.faceDetection !== null) {
            message.faceDetection = FaceAnnotation.fromJSON(object.faceDetection);
        }
        else {
            message.faceDetection = undefined;
        }
        if (object.imageCopySearch !== undefined &&
            object.imageCopySearch !== null) {
            message.imageCopySearch = ImageCopySearchAnnotation.fromJSON(object.imageCopySearch);
        }
        else {
            message.imageCopySearch = undefined;
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = Status.fromJSON(object.error);
        }
        else {
            message.error = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.textDetection !== undefined &&
            (obj.textDetection = message.textDetection
                ? TextAnnotation.toJSON(message.textDetection)
                : undefined);
        message.classification !== undefined &&
            (obj.classification = message.classification
                ? ClassAnnotation.toJSON(message.classification)
                : undefined);
        message.faceDetection !== undefined &&
            (obj.faceDetection = message.faceDetection
                ? FaceAnnotation.toJSON(message.faceDetection)
                : undefined);
        message.imageCopySearch !== undefined &&
            (obj.imageCopySearch = message.imageCopySearch
                ? ImageCopySearchAnnotation.toJSON(message.imageCopySearch)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? Status.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFeatureResult };
        if (object.textDetection !== undefined &&
            object.textDetection !== null) {
            message.textDetection = TextAnnotation.fromPartial(object.textDetection);
        }
        else {
            message.textDetection = undefined;
        }
        if (object.classification !== undefined &&
            object.classification !== null) {
            message.classification = ClassAnnotation.fromPartial(object.classification);
        }
        else {
            message.classification = undefined;
        }
        if (object.faceDetection !== undefined &&
            object.faceDetection !== null) {
            message.faceDetection = FaceAnnotation.fromPartial(object.faceDetection);
        }
        else {
            message.faceDetection = undefined;
        }
        if (object.imageCopySearch !== undefined &&
            object.imageCopySearch !== null) {
            message.imageCopySearch = ImageCopySearchAnnotation.fromPartial(object.imageCopySearch);
        }
        else {
            message.imageCopySearch = undefined;
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = Status.fromPartial(object.error);
        }
        else {
            message.error = undefined;
        }
        return message;
    },
};
/** A set of methods for the Yandex Vision service. */
export const VisionServiceService = {
    /** Analyzes a batch of images and returns results with annotations. */
    batchAnalyze: {
        path: '/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(BatchAnalyzeRequest.encode(value).finish()),
        requestDeserialize: (value) => BatchAnalyzeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(BatchAnalyzeResponse.encode(value).finish()),
        responseDeserialize: (value) => BatchAnalyzeResponse.decode(value),
    },
};
export const VisionServiceClient = makeGenericClientConstructor(VisionServiceService, 'yandex.cloud.ai.vision.v1.VisionService');
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
