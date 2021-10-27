"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseServiceClient = exports.DatabaseServiceService = exports.RestoreDatabaseRequest = exports.DeleteDatabaseMetadata = exports.DeleteDatabaseRequest = exports.RestoreDatabaseMetadata = exports.CreateDatabaseMetadata = exports.CreateDatabaseRequest = exports.ListDatabasesResponse = exports.ListDatabasesRequest = exports.GetDatabaseRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const database_1 = require("../../../../../yandex/cloud/mdb/sqlserver/v1/database");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';
const baseGetDatabaseRequest = { clusterId: '', databaseName: '' };
exports.GetDatabaseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDatabaseRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetDatabaseRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetDatabaseRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseListDatabasesRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListDatabasesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
        const message = { ...baseListDatabasesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
        const message = { ...baseListDatabasesRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListDatabasesRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
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
const baseListDatabasesResponse = { nextPageToken: '' };
exports.ListDatabasesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.databases) {
            database_1.Database.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDatabasesResponse,
        };
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databases.push(database_1.Database.decode(reader, reader.uint32()));
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
            ...baseListDatabasesResponse,
        };
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(database_1.Database.fromJSON(e));
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
        if (message.databases) {
            obj.databases = message.databases.map((e) => e ? database_1.Database.toJSON(e) : undefined);
        }
        else {
            obj.databases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDatabasesResponse,
        };
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(database_1.Database.fromPartial(e));
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
const baseCreateDatabaseRequest = { clusterId: '' };
exports.CreateDatabaseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseSpec !== undefined) {
            database_1.DatabaseSpec.encode(message.databaseSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseSpec = database_1.DatabaseSpec.decode(reader, reader.uint32());
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
            ...baseCreateDatabaseRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseSpec !== undefined && object.databaseSpec !== null) {
            message.databaseSpec = database_1.DatabaseSpec.fromJSON(object.databaseSpec);
        }
        else {
            message.databaseSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseSpec !== undefined &&
            (obj.databaseSpec = message.databaseSpec
                ? database_1.DatabaseSpec.toJSON(message.databaseSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDatabaseRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseSpec !== undefined && object.databaseSpec !== null) {
            message.databaseSpec = database_1.DatabaseSpec.fromPartial(object.databaseSpec);
        }
        else {
            message.databaseSpec = undefined;
        }
        return message;
    },
};
const baseCreateDatabaseMetadata = { clusterId: '', databaseName: '' };
exports.CreateDatabaseMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
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
            ...baseCreateDatabaseMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDatabaseMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseRestoreDatabaseMetadata = {
    clusterId: '',
    databaseName: '',
    fromDatabase: '',
    backupId: '',
};
exports.RestoreDatabaseMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.fromDatabase !== '') {
            writer.uint32(26).string(message.fromDatabase);
        }
        if (message.backupId !== '') {
            writer.uint32(34).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreDatabaseMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.fromDatabase = reader.string();
                    break;
                case 4:
                    message.backupId = reader.string();
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
            ...baseRestoreDatabaseMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = String(object.fromDatabase);
        }
        else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        }
        else {
            message.backupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.fromDatabase !== undefined &&
            (obj.fromDatabase = message.fromDatabase);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestoreDatabaseMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = object.fromDatabase;
        }
        else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        }
        else {
            message.backupId = '';
        }
        return message;
    },
};
const baseDeleteDatabaseRequest = { clusterId: '', databaseName: '' };
exports.DeleteDatabaseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
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
            ...baseDeleteDatabaseRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDatabaseRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseDeleteDatabaseMetadata = { clusterId: '', databaseName: '' };
exports.DeleteDatabaseMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
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
            ...baseDeleteDatabaseMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDatabaseMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseRestoreDatabaseRequest = {
    clusterId: '',
    databaseName: '',
    fromDatabase: '',
    backupId: '',
};
exports.RestoreDatabaseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.fromDatabase !== '') {
            writer.uint32(26).string(message.fromDatabase);
        }
        if (message.backupId !== '') {
            writer.uint32(34).string(message.backupId);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreDatabaseRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.fromDatabase = reader.string();
                    break;
                case 4:
                    message.backupId = reader.string();
                    break;
                case 6:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            ...baseRestoreDatabaseRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = String(object.fromDatabase);
        }
        else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        }
        else {
            message.backupId = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        }
        else {
            message.time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.fromDatabase !== undefined &&
            (obj.fromDatabase = message.fromDatabase);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestoreDatabaseRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = object.fromDatabase;
        }
        else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        }
        else {
            message.backupId = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        }
        else {
            message.time = undefined;
        }
        return message;
    },
};
/** A set of methods for managing SQL Server databases. */
exports.DatabaseServiceService = {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(database_1.Database.encode(value).finish()),
        responseDeserialize: (value) => database_1.Database.decode(value),
    },
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDatabasesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDatabasesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDatabasesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDatabasesResponse.decode(value),
    },
    /** Creates a new SQL Server database in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a new SQL Server database in the specified cluster from a backup */
    restore: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Restore',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified SQL Server database. */
    delete: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.DatabaseServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DatabaseServiceService, 'yandex.cloud.mdb.sqlserver.v1.DatabaseService');
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
