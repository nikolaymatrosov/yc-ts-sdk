"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateServiceClient = exports.CertificateServiceService = exports.ListCertificateOperationsResponse = exports.ListCertificateOperationsRequest = exports.RequestNewCertificateMetadata = exports.RequestNewCertificateRequest_LabelsEntry = exports.RequestNewCertificateRequest = exports.DeleteCertificateMetadata = exports.DeleteCertificateRequest = exports.UpdateCertificateMetadata = exports.UpdateCertificateRequest_LabelsEntry = exports.UpdateCertificateRequest = exports.CreateCertificateMetadata = exports.CreateCertificateRequest_LabelsEntry = exports.CreateCertificateRequest = exports.ListCertificatesResponse = exports.ListCertificatesRequest = exports.GetCertificateRequest = exports.certificateViewToJSON = exports.certificateViewFromJSON = exports.CertificateView = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const access_1 = require("../../../../yandex/cloud/access/access");
const certificate_1 = require("../../../../yandex/cloud/certificatemanager/v1/certificate");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.certificatemanager.v1';
var CertificateView;
(function (CertificateView) {
    /** BASIC - Output basic information about the certificate. */
    CertificateView[CertificateView["BASIC"] = 0] = "BASIC";
    /** FULL - Output full information about the certificate including domain challenges. */
    CertificateView[CertificateView["FULL"] = 1] = "FULL";
    CertificateView[CertificateView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CertificateView = exports.CertificateView || (exports.CertificateView = {}));
function certificateViewFromJSON(object) {
    switch (object) {
        case 0:
        case 'BASIC':
            return CertificateView.BASIC;
        case 1:
        case 'FULL':
            return CertificateView.FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CertificateView.UNRECOGNIZED;
    }
}
exports.certificateViewFromJSON = certificateViewFromJSON;
function certificateViewToJSON(object) {
    switch (object) {
        case CertificateView.BASIC:
            return 'BASIC';
        case CertificateView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}
exports.certificateViewToJSON = certificateViewToJSON;
const baseGetCertificateRequest = { certificateId: '', view: 0 };
exports.GetCertificateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32();
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
            ...baseGetCertificateRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = certificateViewFromJSON(object.view);
        }
        else {
            message.view = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.view !== undefined &&
            (obj.view = certificateViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetCertificateRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        }
        else {
            message.view = 0;
        }
        return message;
    },
};
const baseListCertificatesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    view: 0,
};
exports.ListCertificatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.view !== 0) {
            writer.uint32(48).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificatesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 6:
                    message.view = reader.int32();
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
            ...baseListCertificatesRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.view !== undefined && object.view !== null) {
            message.view = certificateViewFromJSON(object.view);
        }
        else {
            message.view = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.view !== undefined &&
            (obj.view = certificateViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCertificatesRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        }
        else {
            message.view = 0;
        }
        return message;
    },
};
const baseListCertificatesResponse = { nextPageToken: '' };
exports.ListCertificatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            certificate_1.Certificate.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListCertificatesResponse,
        };
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(certificate_1.Certificate.decode(reader, reader.uint32()));
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
            ...baseListCertificatesResponse,
        };
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(certificate_1.Certificate.fromJSON(e));
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
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? certificate_1.Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCertificatesResponse,
        };
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(certificate_1.Certificate.fromPartial(e));
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
const baseCreateCertificateRequest = {
    folderId: '',
    name: '',
    description: '',
    certificate: '',
    chain: '',
    privateKey: '',
};
exports.CreateCertificateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateCertificateRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.certificate !== '') {
            writer.uint32(42).string(message.certificate);
        }
        if (message.chain !== '') {
            writer.uint32(50).string(message.chain);
        }
        if (message.privateKey !== '') {
            writer.uint32(58).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateCertificateRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.certificate = reader.string();
                    break;
                case 6:
                    message.chain = reader.string();
                    break;
                case 7:
                    message.privateKey = reader.string();
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
            ...baseCreateCertificateRequest,
        };
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = String(object.certificate);
        }
        else {
            message.certificate = '';
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = '';
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.certificate !== undefined &&
            (obj.certificate = message.certificate);
        message.chain !== undefined && (obj.chain = message.chain);
        message.privateKey !== undefined &&
            (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateCertificateRequest,
        };
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = object.certificate;
        }
        else {
            message.certificate = '';
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = '';
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
};
const baseCreateCertificateRequest_LabelsEntry = { key: '', value: '' };
exports.CreateCertificateRequest_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateCertificateRequest_LabelsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseCreateCertificateRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateCertificateRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseCreateCertificateMetadata = { certificateId: '' };
exports.CreateCertificateMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseCreateCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
const baseUpdateCertificateRequest = {
    certificateId: '',
    name: '',
    description: '',
    certificate: '',
    chain: '',
    privateKey: '',
};
exports.UpdateCertificateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateCertificateRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.certificate !== '') {
            writer.uint32(50).string(message.certificate);
        }
        if (message.chain !== '') {
            writer.uint32(58).string(message.chain);
        }
        if (message.privateKey !== '') {
            writer.uint32(66).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateCertificateRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.certificate = reader.string();
                    break;
                case 7:
                    message.chain = reader.string();
                    break;
                case 8:
                    message.privateKey = reader.string();
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
            ...baseUpdateCertificateRequest,
        };
        message.labels = {};
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = String(object.certificate);
        }
        else {
            message.certificate = '';
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = '';
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.certificate !== undefined &&
            (obj.certificate = message.certificate);
        message.chain !== undefined && (obj.chain = message.chain);
        message.privateKey !== undefined &&
            (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateCertificateRequest,
        };
        message.labels = {};
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = object.certificate;
        }
        else {
            message.certificate = '';
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = '';
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
};
const baseUpdateCertificateRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateCertificateRequest_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateCertificateRequest_LabelsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseUpdateCertificateRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateCertificateRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseUpdateCertificateMetadata = { certificateId: '' };
exports.UpdateCertificateMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseUpdateCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
const baseDeleteCertificateRequest = { certificateId: '' };
exports.DeleteCertificateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseDeleteCertificateRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteCertificateRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
const baseDeleteCertificateMetadata = { certificateId: '' };
exports.DeleteCertificateMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseDeleteCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
const baseRequestNewCertificateRequest = {
    folderId: '',
    name: '',
    description: '',
    domains: '',
    challengeType: 0,
};
exports.RequestNewCertificateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RequestNewCertificateRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        for (const v of message.domains) {
            writer.uint32(42).string(v);
        }
        if (message.challengeType !== 0) {
            writer.uint32(48).int32(message.challengeType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRequestNewCertificateRequest,
        };
        message.labels = {};
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.RequestNewCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.domains.push(reader.string());
                    break;
                case 6:
                    message.challengeType = reader.int32();
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
            ...baseRequestNewCertificateRequest,
        };
        message.labels = {};
        message.domains = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.domains !== undefined && object.domains !== null) {
            for (const e of object.domains) {
                message.domains.push(String(e));
            }
        }
        if (object.challengeType !== undefined &&
            object.challengeType !== null) {
            message.challengeType = (0, certificate_1.challengeTypeFromJSON)(object.challengeType);
        }
        else {
            message.challengeType = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        message.challengeType !== undefined &&
            (obj.challengeType = (0, certificate_1.challengeTypeToJSON)(message.challengeType));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRequestNewCertificateRequest,
        };
        message.labels = {};
        message.domains = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.domains !== undefined && object.domains !== null) {
            for (const e of object.domains) {
                message.domains.push(e);
            }
        }
        if (object.challengeType !== undefined &&
            object.challengeType !== null) {
            message.challengeType = object.challengeType;
        }
        else {
            message.challengeType = 0;
        }
        return message;
    },
};
const baseRequestNewCertificateRequest_LabelsEntry = {
    key: '',
    value: '',
};
exports.RequestNewCertificateRequest_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRequestNewCertificateRequest_LabelsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseRequestNewCertificateRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRequestNewCertificateRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseRequestNewCertificateMetadata = { certificateId: '' };
exports.RequestNewCertificateMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRequestNewCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseRequestNewCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRequestNewCertificateMetadata,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
const baseListCertificateOperationsRequest = {
    certificateId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListCertificateOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificateOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
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
            ...baseListCertificateOperationsRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCertificateOperationsRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
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
        return message;
    },
};
const baseListCertificateOperationsResponse = { nextPageToken: '' };
exports.ListCertificateOperationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListCertificateOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
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
            ...baseListCertificateOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromJSON(e));
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
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCertificateOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromPartial(e));
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
/** A set of methods for managing certificates. */
exports.CertificateServiceService = {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(certificate_1.Certificate.encode(value).finish()),
        responseDeserialize: (value) => certificate_1.Certificate.decode(value),
    },
    /** Returns the list of certificates in the specified folder. */
    list: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCertificatesResponse.decode(value),
    },
    /** Creates a certificate in the specified folder. */
    create: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified certificate. */
    update: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified certificate. */
    delete: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Request a certificate in the specified folder. */
    requestNew: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RequestNewCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RequestNewCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified certificate. */
    listOperations: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCertificateOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCertificateOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCertificateOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCertificateOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified certificate. */
    listAccessBindings: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the certificate. */
    setAccessBindings: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified certificate. */
    updateAccessBindings: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.CertificateServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CertificateServiceService, 'yandex.cloud.certificatemanager.v1.CertificateService');
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
