/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../yandex/cloud/access/access';
import { SymmetricKey, SymmetricKeyVersion, symmetricAlgorithmFromJSON, symmetricAlgorithmToJSON, symmetricKey_StatusFromJSON, symmetricKey_StatusToJSON, } from '../../../../yandex/cloud/kms/v1/symmetric_key';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.kms.v1';
const baseCreateSymmetricKeyRequest = {
    folderId: '',
    name: '',
    description: '',
    defaultAlgorithm: 0,
    deletionProtection: false,
};
export const CreateSymmetricKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            CreateSymmetricKeyRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(40).int32(message.defaultAlgorithm);
        }
        if (message.rotationPeriod !== undefined) {
            Duration.encode(message.rotationPeriod, writer.uint32(50).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSymmetricKeyRequest,
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
                    const entry4 = CreateSymmetricKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 6:
                    message.rotationPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.deletionProtection = reader.bool();
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
            ...baseCreateSymmetricKeyRequest,
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
        if (object.defaultAlgorithm !== undefined &&
            object.defaultAlgorithm !== null) {
            message.defaultAlgorithm = symmetricAlgorithmFromJSON(object.defaultAlgorithm);
        }
        else {
            message.defaultAlgorithm = 0;
        }
        if (object.rotationPeriod !== undefined &&
            object.rotationPeriod !== null) {
            message.rotationPeriod = Duration.fromJSON(object.rotationPeriod);
        }
        else {
            message.rotationPeriod = undefined;
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
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
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm));
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? Duration.toJSON(message.rotationPeriod)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSymmetricKeyRequest,
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
        if (object.defaultAlgorithm !== undefined &&
            object.defaultAlgorithm !== null) {
            message.defaultAlgorithm = object.defaultAlgorithm;
        }
        else {
            message.defaultAlgorithm = 0;
        }
        if (object.rotationPeriod !== undefined &&
            object.rotationPeriod !== null) {
            message.rotationPeriod = Duration.fromPartial(object.rotationPeriod);
        }
        else {
            message.rotationPeriod = undefined;
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
};
const baseCreateSymmetricKeyRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const CreateSymmetricKeyRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSymmetricKeyRequest_LabelsEntry,
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
            ...baseCreateSymmetricKeyRequest_LabelsEntry,
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
            ...baseCreateSymmetricKeyRequest_LabelsEntry,
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
const baseCreateSymmetricKeyMetadata = {
    keyId: '',
    primaryVersionId: '',
};
export const CreateSymmetricKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.primaryVersionId !== '') {
            writer.uint32(18).string(message.primaryVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSymmetricKeyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.primaryVersionId = reader.string();
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
            ...baseCreateSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.primaryVersionId !== undefined &&
            object.primaryVersionId !== null) {
            message.primaryVersionId = String(object.primaryVersionId);
        }
        else {
            message.primaryVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.primaryVersionId !== undefined &&
            (obj.primaryVersionId = message.primaryVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.primaryVersionId !== undefined &&
            object.primaryVersionId !== null) {
            message.primaryVersionId = object.primaryVersionId;
        }
        else {
            message.primaryVersionId = '';
        }
        return message;
    },
};
const baseGetSymmetricKeyRequest = { keyId: '' };
export const GetSymmetricKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetSymmetricKeyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseGetSymmetricKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetSymmetricKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseListSymmetricKeysRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListSymmetricKeysRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
            ...baseListSymmetricKeysRequest,
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseListSymmetricKeysRequest,
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSymmetricKeysRequest,
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
        return message;
    },
};
const baseListSymmetricKeysResponse = { nextPageToken: '' };
export const ListSymmetricKeysResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            SymmetricKey.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListSymmetricKeysResponse,
        };
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(SymmetricKey.decode(reader, reader.uint32()));
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
            ...baseListSymmetricKeysResponse,
        };
        message.keys = [];
        if (object.keys !== undefined && object.keys !== null) {
            for (const e of object.keys) {
                message.keys.push(SymmetricKey.fromJSON(e));
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
        if (message.keys) {
            obj.keys = message.keys.map((e) => e ? SymmetricKey.toJSON(e) : undefined);
        }
        else {
            obj.keys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSymmetricKeysResponse,
        };
        message.keys = [];
        if (object.keys !== undefined && object.keys !== null) {
            for (const e of object.keys) {
                message.keys.push(SymmetricKey.fromPartial(e));
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
const baseListSymmetricKeyVersionsRequest = {
    keyId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListSymmetricKeyVersionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
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
            ...baseListSymmetricKeyVersionsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseListSymmetricKeyVersionsRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSymmetricKeyVersionsRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
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
const baseListSymmetricKeyVersionsResponse = { nextPageToken: '' };
export const ListSymmetricKeyVersionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keyVersions) {
            SymmetricKeyVersion.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListSymmetricKeyVersionsResponse,
        };
        message.keyVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyVersions.push(SymmetricKeyVersion.decode(reader, reader.uint32()));
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
            ...baseListSymmetricKeyVersionsResponse,
        };
        message.keyVersions = [];
        if (object.keyVersions !== undefined && object.keyVersions !== null) {
            for (const e of object.keyVersions) {
                message.keyVersions.push(SymmetricKeyVersion.fromJSON(e));
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
        if (message.keyVersions) {
            obj.keyVersions = message.keyVersions.map((e) => e ? SymmetricKeyVersion.toJSON(e) : undefined);
        }
        else {
            obj.keyVersions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSymmetricKeyVersionsResponse,
        };
        message.keyVersions = [];
        if (object.keyVersions !== undefined && object.keyVersions !== null) {
            for (const e of object.keyVersions) {
                message.keyVersions.push(SymmetricKeyVersion.fromPartial(e));
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
const baseUpdateSymmetricKeyRequest = {
    keyId: '',
    name: '',
    description: '',
    status: 0,
    defaultAlgorithm: 0,
    deletionProtection: false,
};
export const UpdateSymmetricKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
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
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateSymmetricKeyRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(56).int32(message.defaultAlgorithm);
        }
        if (message.rotationPeriod !== undefined) {
            Duration.encode(message.rotationPeriod, writer.uint32(66).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSymmetricKeyRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
                    message.status = reader.int32();
                    break;
                case 6:
                    const entry6 = UpdateSymmetricKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 8:
                    message.rotationPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
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
            ...baseUpdateSymmetricKeyRequest,
        };
        message.labels = {};
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = symmetricKey_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.defaultAlgorithm !== undefined &&
            object.defaultAlgorithm !== null) {
            message.defaultAlgorithm = symmetricAlgorithmFromJSON(object.defaultAlgorithm);
        }
        else {
            message.defaultAlgorithm = 0;
        }
        if (object.rotationPeriod !== undefined &&
            object.rotationPeriod !== null) {
            message.rotationPeriod = Duration.fromJSON(object.rotationPeriod);
        }
        else {
            message.rotationPeriod = undefined;
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = symmetricKey_StatusToJSON(message.status));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm));
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? Duration.toJSON(message.rotationPeriod)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSymmetricKeyRequest,
        };
        message.labels = {};
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.defaultAlgorithm !== undefined &&
            object.defaultAlgorithm !== null) {
            message.defaultAlgorithm = object.defaultAlgorithm;
        }
        else {
            message.defaultAlgorithm = 0;
        }
        if (object.rotationPeriod !== undefined &&
            object.rotationPeriod !== null) {
            message.rotationPeriod = Duration.fromPartial(object.rotationPeriod);
        }
        else {
            message.rotationPeriod = undefined;
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
};
const baseUpdateSymmetricKeyRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const UpdateSymmetricKeyRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSymmetricKeyRequest_LabelsEntry,
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
            ...baseUpdateSymmetricKeyRequest_LabelsEntry,
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
            ...baseUpdateSymmetricKeyRequest_LabelsEntry,
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
const baseUpdateSymmetricKeyMetadata = { keyId: '' };
export const UpdateSymmetricKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSymmetricKeyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseUpdateSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseDeleteSymmetricKeyRequest = { keyId: '' };
export const DeleteSymmetricKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSymmetricKeyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseDeleteSymmetricKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSymmetricKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseDeleteSymmetricKeyMetadata = { keyId: '' };
export const DeleteSymmetricKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSymmetricKeyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseDeleteSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseSetPrimarySymmetricKeyVersionRequest = {
    keyId: '',
    versionId: '',
};
export const SetPrimarySymmetricKeyVersionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetPrimarySymmetricKeyVersionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            ...baseSetPrimarySymmetricKeyVersionRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetPrimarySymmetricKeyVersionRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseSetPrimarySymmetricKeyVersionMetadata = {
    keyId: '',
    versionId: '',
};
export const SetPrimarySymmetricKeyVersionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetPrimarySymmetricKeyVersionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            ...baseSetPrimarySymmetricKeyVersionMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetPrimarySymmetricKeyVersionMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseRotateSymmetricKeyRequest = { keyId: '' };
export const RotateSymmetricKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRotateSymmetricKeyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseRotateSymmetricKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRotateSymmetricKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseRotateSymmetricKeyMetadata = {
    keyId: '',
    newPrimaryVersionId: '',
};
export const RotateSymmetricKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.newPrimaryVersionId !== '') {
            writer.uint32(18).string(message.newPrimaryVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRotateSymmetricKeyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.newPrimaryVersionId = reader.string();
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
            ...baseRotateSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.newPrimaryVersionId !== undefined &&
            object.newPrimaryVersionId !== null) {
            message.newPrimaryVersionId = String(object.newPrimaryVersionId);
        }
        else {
            message.newPrimaryVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.newPrimaryVersionId !== undefined &&
            (obj.newPrimaryVersionId = message.newPrimaryVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRotateSymmetricKeyMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.newPrimaryVersionId !== undefined &&
            object.newPrimaryVersionId !== null) {
            message.newPrimaryVersionId = object.newPrimaryVersionId;
        }
        else {
            message.newPrimaryVersionId = '';
        }
        return message;
    },
};
const baseScheduleSymmetricKeyVersionDestructionRequest = {
    keyId: '',
    versionId: '',
};
export const ScheduleSymmetricKeyVersionDestructionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.pendingPeriod !== undefined) {
            Duration.encode(message.pendingPeriod, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScheduleSymmetricKeyVersionDestructionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.pendingPeriod = Duration.decode(reader, reader.uint32());
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
            ...baseScheduleSymmetricKeyVersionDestructionRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.pendingPeriod !== undefined &&
            object.pendingPeriod !== null) {
            message.pendingPeriod = Duration.fromJSON(object.pendingPeriod);
        }
        else {
            message.pendingPeriod = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.pendingPeriod !== undefined &&
            (obj.pendingPeriod = message.pendingPeriod
                ? Duration.toJSON(message.pendingPeriod)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScheduleSymmetricKeyVersionDestructionRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.pendingPeriod !== undefined &&
            object.pendingPeriod !== null) {
            message.pendingPeriod = Duration.fromPartial(object.pendingPeriod);
        }
        else {
            message.pendingPeriod = undefined;
        }
        return message;
    },
};
const baseScheduleSymmetricKeyVersionDestructionMetadata = {
    keyId: '',
    versionId: '',
};
export const ScheduleSymmetricKeyVersionDestructionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.destroyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScheduleSymmetricKeyVersionDestructionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            ...baseScheduleSymmetricKeyVersionDestructionMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = fromJsonTimestamp(object.destroyAt);
        }
        else {
            message.destroyAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScheduleSymmetricKeyVersionDestructionMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = object.destroyAt;
        }
        else {
            message.destroyAt = undefined;
        }
        return message;
    },
};
const baseCancelSymmetricKeyVersionDestructionRequest = {
    keyId: '',
    versionId: '',
};
export const CancelSymmetricKeyVersionDestructionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelSymmetricKeyVersionDestructionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            ...baseCancelSymmetricKeyVersionDestructionRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCancelSymmetricKeyVersionDestructionRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseCancelSymmetricKeyVersionDestructionMetadata = {
    keyId: '',
    versionId: '',
};
export const CancelSymmetricKeyVersionDestructionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelSymmetricKeyVersionDestructionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            ...baseCancelSymmetricKeyVersionDestructionMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCancelSymmetricKeyVersionDestructionMetadata,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseListSymmetricKeyOperationsRequest = {
    keyId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListSymmetricKeyOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
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
            ...baseListSymmetricKeyOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
            ...baseListSymmetricKeyOperationsRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSymmetricKeyOperationsRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
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
const baseListSymmetricKeyOperationsResponse = { nextPageToken: '' };
export const ListSymmetricKeyOperationsResponse = {
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
            ...baseListSymmetricKeyOperationsResponse,
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
            ...baseListSymmetricKeyOperationsResponse,
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
            ...baseListSymmetricKeyOperationsResponse,
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
/** Set of methods for managing symmetric KMS keys. */
export const SymmetricKeyServiceService = {
    /** Creates a symmetric KMS key in the specified folder. */
    create: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Returns the specified symmetric KMS key.
     *
     *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => GetSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SymmetricKey.encode(value).finish()),
        responseDeserialize: (value) => SymmetricKey.decode(value),
    },
    /** Returns the list of symmetric KMS keys in the specified folder. */
    list: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListSymmetricKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => ListSymmetricKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListSymmetricKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => ListSymmetricKeysResponse.decode(value),
    },
    /** Returns the list of versions of the specified symmetric KMS key. */
    listVersions: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListSymmetricKeyVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListSymmetricKeyVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListSymmetricKeyVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListSymmetricKeyVersionsResponse.decode(value),
    },
    /** Updates the specified symmetric KMS key. */
    update: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Deletes the specified symmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Sets the primary version for the specified key. The primary version is used
     * by default for all encrypt/decrypt operations where no version ID is specified.
     */
    setPrimaryVersion: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetPrimarySymmetricKeyVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => SetPrimarySymmetricKeyVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Schedules the specified key version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ScheduleSymmetricKeyVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => ScheduleSymmetricKeyVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CancelSymmetricKeyVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => CancelSymmetricKeyVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Rotates the specified key: creates a new key version and makes it the primary version.
     * The old version remains available for decryption of ciphertext encrypted with it.
     */
    rotate: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/Rotate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RotateSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => RotateSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified symmetric KMS key. */
    listOperations: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListSymmetricKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListSymmetricKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListSymmetricKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListSymmetricKeyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the key. */
    setAccessBindings: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates access bindings for the specified key. */
    updateAccessBindings: {
        path: '/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const SymmetricKeyServiceClient = makeGenericClientConstructor(SymmetricKeyServiceService, 'yandex.cloud.kms.v1.SymmetricKeyService');
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
    return { seconds, nanos };
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
