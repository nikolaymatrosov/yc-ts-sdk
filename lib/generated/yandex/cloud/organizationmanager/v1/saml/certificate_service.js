/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Certificate } from '../../../../../yandex/cloud/organizationmanager/v1/saml/certificate';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';
const baseGetCertificateRequest = { certificateId: '' };
export const GetCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            ...baseGetCertificateRequest,
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
const baseListCertificatesRequest = {
    federationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListCertificatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificatesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCertificatesRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
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
        return message;
    },
};
const baseListCertificatesResponse = { nextPageToken: '' };
export const ListCertificatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.certificates) {
            Certificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificatesResponse,
        };
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(Certificate.decode(reader, reader.uint32()));
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
                message.certificates.push(Certificate.fromJSON(e));
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
            obj.certificates = message.certificates.map((e) => e ? Certificate.toJSON(e) : undefined);
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
                message.certificates.push(Certificate.fromPartial(e));
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
    federationId: '',
    name: '',
    description: '',
    data: '',
};
export const CreateCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.data !== '') {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.data = reader.string();
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
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
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
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateCertificateRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
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
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = '';
        }
        return message;
    },
};
const baseCreateCertificateMetadata = { certificateId: '' };
export const CreateCertificateMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    data: '',
};
export const UpdateCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.data !== '') {
            writer.uint32(42).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
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
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateCertificateRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = '';
        }
        return message;
    },
};
const baseUpdateCertificateMetadata = { certificateId: '' };
export const UpdateCertificateMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteCertificateMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListCertificateOperationsRequest = {
    certificateId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListCertificateOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListCertificateOperationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operations) {
            Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificateOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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
                message.operations.push(Operation.fromJSON(e));
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
            obj.operations = message.operations.map((e) => e ? Operation.toJSON(e) : undefined);
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
                message.operations.push(Operation.fromPartial(e));
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
export const CertificateServiceService = {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => GetCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Certificate.encode(value).finish()),
        responseDeserialize: (value) => Certificate.decode(value),
    },
    /** Retrieves the list of certificates in the specified federation. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListCertificatesResponse.decode(value),
    },
    /** Creates a certificate in the specified federation. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified certificate. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified certificate. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified certificate. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListCertificateOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListCertificateOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListCertificateOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListCertificateOperationsResponse.decode(value),
    },
};
export const CertificateServiceClient = makeGenericClientConstructor(CertificateServiceService, 'yandex.cloud.organizationmanager.v1.saml.CertificateService');
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
