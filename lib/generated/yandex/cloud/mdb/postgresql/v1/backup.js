/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1';
export var Backup_BackupMethod;
(function (Backup_BackupMethod) {
    Backup_BackupMethod[Backup_BackupMethod["BACKUP_METHOD_UNSPECIFIED"] = 0] = "BACKUP_METHOD_UNSPECIFIED";
    /** BASE - Base backup */
    Backup_BackupMethod[Backup_BackupMethod["BASE"] = 1] = "BASE";
    /** INCREMENTAL - Delta (incremental) PostgreSQL backup */
    Backup_BackupMethod[Backup_BackupMethod["INCREMENTAL"] = 2] = "INCREMENTAL";
    Backup_BackupMethod[Backup_BackupMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_BackupMethod || (Backup_BackupMethod = {}));
export function backup_BackupMethodFromJSON(object) {
    switch (object) {
        case 0:
        case 'BACKUP_METHOD_UNSPECIFIED':
            return Backup_BackupMethod.BACKUP_METHOD_UNSPECIFIED;
        case 1:
        case 'BASE':
            return Backup_BackupMethod.BASE;
        case 2:
        case 'INCREMENTAL':
            return Backup_BackupMethod.INCREMENTAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Backup_BackupMethod.UNRECOGNIZED;
    }
}
export function backup_BackupMethodToJSON(object) {
    switch (object) {
        case Backup_BackupMethod.BACKUP_METHOD_UNSPECIFIED:
            return 'BACKUP_METHOD_UNSPECIFIED';
        case Backup_BackupMethod.BASE:
            return 'BASE';
        case Backup_BackupMethod.INCREMENTAL:
            return 'INCREMENTAL';
        default:
            return 'UNKNOWN';
    }
}
export var Backup_BackupCreationType;
(function (Backup_BackupCreationType) {
    Backup_BackupCreationType[Backup_BackupCreationType["BACKUP_CREATION_TYPE_UNSPECIFIED"] = 0] = "BACKUP_CREATION_TYPE_UNSPECIFIED";
    /** AUTOMATED - Backup created by automated daily schedule */
    Backup_BackupCreationType[Backup_BackupCreationType["AUTOMATED"] = 1] = "AUTOMATED";
    /** MANUAL - Backup created by user request */
    Backup_BackupCreationType[Backup_BackupCreationType["MANUAL"] = 2] = "MANUAL";
    Backup_BackupCreationType[Backup_BackupCreationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_BackupCreationType || (Backup_BackupCreationType = {}));
export function backup_BackupCreationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'BACKUP_CREATION_TYPE_UNSPECIFIED':
            return Backup_BackupCreationType.BACKUP_CREATION_TYPE_UNSPECIFIED;
        case 1:
        case 'AUTOMATED':
            return Backup_BackupCreationType.AUTOMATED;
        case 2:
        case 'MANUAL':
            return Backup_BackupCreationType.MANUAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Backup_BackupCreationType.UNRECOGNIZED;
    }
}
export function backup_BackupCreationTypeToJSON(object) {
    switch (object) {
        case Backup_BackupCreationType.BACKUP_CREATION_TYPE_UNSPECIFIED:
            return 'BACKUP_CREATION_TYPE_UNSPECIFIED';
        case Backup_BackupCreationType.AUTOMATED:
            return 'AUTOMATED';
        case Backup_BackupCreationType.MANUAL:
            return 'MANUAL';
        default:
            return 'UNKNOWN';
    }
}
const baseBackup = {
    id: '',
    folderId: '',
    sourceClusterId: '',
    size: 0,
    type: 0,
    method: 0,
};
export const Backup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.sourceClusterId !== '') {
            writer.uint32(34).string(message.sourceClusterId);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        if (message.method !== 0) {
            writer.uint32(64).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackup };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sourceClusterId = reader.string();
                    break;
                case 5:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.size = longToNumber(reader.int64());
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.method = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBackup };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.sourceClusterId !== undefined &&
            object.sourceClusterId !== null) {
            message.sourceClusterId = String(object.sourceClusterId);
        }
        else {
            message.sourceClusterId = '';
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = fromJsonTimestamp(object.startedAt);
        }
        else {
            message.startedAt = undefined;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = backup_BackupCreationTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.method !== undefined && object.method !== null) {
            message.method = backup_BackupMethodFromJSON(object.method);
        }
        else {
            message.method = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.sourceClusterId !== undefined &&
            (obj.sourceClusterId = message.sourceClusterId);
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.size !== undefined && (obj.size = message.size);
        message.type !== undefined &&
            (obj.type = backup_BackupCreationTypeToJSON(message.type));
        message.method !== undefined &&
            (obj.method = backup_BackupMethodToJSON(message.method));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackup };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.sourceClusterId !== undefined &&
            object.sourceClusterId !== null) {
            message.sourceClusterId = object.sourceClusterId;
        }
        else {
            message.sourceClusterId = '';
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = object.startedAt;
        }
        else {
            message.startedAt = undefined;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.method !== undefined && object.method !== null) {
            message.method = object.method;
        }
        else {
            message.method = 0;
        }
        return message;
    },
};
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
