/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { dayOfWeekFromJSON, dayOfWeekToJSON, } from '../../../../google/type/dayofweek';
import { TimeOfDay } from '../../../../google/type/timeofday';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ydb.v1';
export var BackupSettings_Type;
(function (BackupSettings_Type) {
    BackupSettings_Type[BackupSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    BackupSettings_Type[BackupSettings_Type["SYSTEM"] = 1] = "SYSTEM";
    BackupSettings_Type[BackupSettings_Type["USER"] = 2] = "USER";
    BackupSettings_Type[BackupSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackupSettings_Type || (BackupSettings_Type = {}));
export function backupSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return BackupSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'SYSTEM':
            return BackupSettings_Type.SYSTEM;
        case 2:
        case 'USER':
            return BackupSettings_Type.USER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BackupSettings_Type.UNRECOGNIZED;
    }
}
export function backupSettings_TypeToJSON(object) {
    switch (object) {
        case BackupSettings_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case BackupSettings_Type.SYSTEM:
            return 'SYSTEM';
        case BackupSettings_Type.USER:
            return 'USER';
        default:
            return 'UNKNOWN';
    }
}
/** id of backup */
export var Backup_Status;
(function (Backup_Status) {
    Backup_Status[Backup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Backup_Status[Backup_Status["CREATING"] = 1] = "CREATING";
    Backup_Status[Backup_Status["READY"] = 2] = "READY";
    Backup_Status[Backup_Status["ERROR"] = 3] = "ERROR";
    Backup_Status[Backup_Status["CANCELLED"] = 4] = "CANCELLED";
    Backup_Status[Backup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Status || (Backup_Status = {}));
export function backup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Backup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Backup_Status.CREATING;
        case 2:
        case 'READY':
            return Backup_Status.READY;
        case 3:
        case 'ERROR':
            return Backup_Status.ERROR;
        case 4:
        case 'CANCELLED':
            return Backup_Status.CANCELLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Backup_Status.UNRECOGNIZED;
    }
}
export function backup_StatusToJSON(object) {
    switch (object) {
        case Backup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Backup_Status.CREATING:
            return 'CREATING';
        case Backup_Status.READY:
            return 'READY';
        case Backup_Status.ERROR:
            return 'ERROR';
        case Backup_Status.CANCELLED:
            return 'CANCELLED';
        default:
            return 'UNKNOWN';
    }
}
export var Backup_Type;
(function (Backup_Type) {
    Backup_Type[Backup_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** SYSTEM - indicates that backup started by the system. */
    Backup_Type[Backup_Type["SYSTEM"] = 1] = "SYSTEM";
    Backup_Type[Backup_Type["USER"] = 2] = "USER";
    Backup_Type[Backup_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Type || (Backup_Type = {}));
export function backup_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Backup_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'SYSTEM':
            return Backup_Type.SYSTEM;
        case 2:
        case 'USER':
            return Backup_Type.USER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Backup_Type.UNRECOGNIZED;
    }
}
export function backup_TypeToJSON(object) {
    switch (object) {
        case Backup_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Backup_Type.SYSTEM:
            return 'SYSTEM';
        case Backup_Type.USER:
            return 'USER';
        default:
            return 'UNKNOWN';
    }
}
const baseBackupSchedule = {};
export const BackupSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dailyBackupSchedule !== undefined) {
            DailyBackupSchedule.encode(message.dailyBackupSchedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.weeklyBackupSchedule !== undefined) {
            WeeklyBackupSchedule.encode(message.weeklyBackupSchedule, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextExecuteTime !== undefined) {
            Timestamp.encode(toTimestamp(message.nextExecuteTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupSchedule };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dailyBackupSchedule = DailyBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weeklyBackupSchedule = WeeklyBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextExecuteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBackupSchedule };
        if (object.dailyBackupSchedule !== undefined &&
            object.dailyBackupSchedule !== null) {
            message.dailyBackupSchedule = DailyBackupSchedule.fromJSON(object.dailyBackupSchedule);
        }
        else {
            message.dailyBackupSchedule = undefined;
        }
        if (object.weeklyBackupSchedule !== undefined &&
            object.weeklyBackupSchedule !== null) {
            message.weeklyBackupSchedule = WeeklyBackupSchedule.fromJSON(object.weeklyBackupSchedule);
        }
        else {
            message.weeklyBackupSchedule = undefined;
        }
        if (object.nextExecuteTime !== undefined &&
            object.nextExecuteTime !== null) {
            message.nextExecuteTime = fromJsonTimestamp(object.nextExecuteTime);
        }
        else {
            message.nextExecuteTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dailyBackupSchedule !== undefined &&
            (obj.dailyBackupSchedule = message.dailyBackupSchedule
                ? DailyBackupSchedule.toJSON(message.dailyBackupSchedule)
                : undefined);
        message.weeklyBackupSchedule !== undefined &&
            (obj.weeklyBackupSchedule = message.weeklyBackupSchedule
                ? WeeklyBackupSchedule.toJSON(message.weeklyBackupSchedule)
                : undefined);
        message.nextExecuteTime !== undefined &&
            (obj.nextExecuteTime = message.nextExecuteTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackupSchedule };
        if (object.dailyBackupSchedule !== undefined &&
            object.dailyBackupSchedule !== null) {
            message.dailyBackupSchedule = DailyBackupSchedule.fromPartial(object.dailyBackupSchedule);
        }
        else {
            message.dailyBackupSchedule = undefined;
        }
        if (object.weeklyBackupSchedule !== undefined &&
            object.weeklyBackupSchedule !== null) {
            message.weeklyBackupSchedule = WeeklyBackupSchedule.fromPartial(object.weeklyBackupSchedule);
        }
        else {
            message.weeklyBackupSchedule = undefined;
        }
        if (object.nextExecuteTime !== undefined &&
            object.nextExecuteTime !== null) {
            message.nextExecuteTime = object.nextExecuteTime;
        }
        else {
            message.nextExecuteTime = undefined;
        }
        return message;
    },
};
const baseDaysOfWeekBackupSchedule = { days: 0 };
export const DaysOfWeekBackupSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.executeTime !== undefined) {
            TimeOfDay.encode(message.executeTime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDaysOfWeekBackupSchedule,
        };
        message.days = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.days.push(reader.int32());
                        }
                    }
                    else {
                        message.days.push(reader.int32());
                    }
                    break;
                case 2:
                    message.executeTime = TimeOfDay.decode(reader, reader.uint32());
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
            ...baseDaysOfWeekBackupSchedule,
        };
        message.days = [];
        if (object.days !== undefined && object.days !== null) {
            for (const e of object.days) {
                message.days.push(dayOfWeekFromJSON(e));
            }
        }
        if (object.executeTime !== undefined && object.executeTime !== null) {
            message.executeTime = TimeOfDay.fromJSON(object.executeTime);
        }
        else {
            message.executeTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.days) {
            obj.days = message.days.map((e) => dayOfWeekToJSON(e));
        }
        else {
            obj.days = [];
        }
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDaysOfWeekBackupSchedule,
        };
        message.days = [];
        if (object.days !== undefined && object.days !== null) {
            for (const e of object.days) {
                message.days.push(e);
            }
        }
        if (object.executeTime !== undefined && object.executeTime !== null) {
            message.executeTime = TimeOfDay.fromPartial(object.executeTime);
        }
        else {
            message.executeTime = undefined;
        }
        return message;
    },
};
const baseWeeklyBackupSchedule = {};
export const WeeklyBackupSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.daysOfWeek) {
            DaysOfWeekBackupSchedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWeeklyBackupSchedule };
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(DaysOfWeekBackupSchedule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWeeklyBackupSchedule };
        message.daysOfWeek = [];
        if (object.daysOfWeek !== undefined && object.daysOfWeek !== null) {
            for (const e of object.daysOfWeek) {
                message.daysOfWeek.push(DaysOfWeekBackupSchedule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) => e ? DaysOfWeekBackupSchedule.toJSON(e) : undefined);
        }
        else {
            obj.daysOfWeek = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWeeklyBackupSchedule };
        message.daysOfWeek = [];
        if (object.daysOfWeek !== undefined && object.daysOfWeek !== null) {
            for (const e of object.daysOfWeek) {
                message.daysOfWeek.push(DaysOfWeekBackupSchedule.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDailyBackupSchedule = {};
export const DailyBackupSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.executeTime !== undefined) {
            TimeOfDay.encode(message.executeTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDailyBackupSchedule };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executeTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDailyBackupSchedule };
        if (object.executeTime !== undefined && object.executeTime !== null) {
            message.executeTime = TimeOfDay.fromJSON(object.executeTime);
        }
        else {
            message.executeTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDailyBackupSchedule };
        if (object.executeTime !== undefined && object.executeTime !== null) {
            message.executeTime = TimeOfDay.fromPartial(object.executeTime);
        }
        else {
            message.executeTime = undefined;
        }
        return message;
    },
};
const baseBackupSettings = {
    name: '',
    description: '',
    sourcePaths: '',
    sourcePathsToExclude: '',
    type: 0,
};
export const BackupSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.backupSchedule !== undefined) {
            BackupSchedule.encode(message.backupSchedule, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupTimeToLive !== undefined) {
            Duration.encode(message.backupTimeToLive, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sourcePaths) {
            writer.uint32(42).string(v);
        }
        for (const v of message.sourcePathsToExclude) {
            writer.uint32(50).string(v);
        }
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupSettings };
        message.sourcePaths = [];
        message.sourcePathsToExclude = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.backupSchedule = BackupSchedule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupTimeToLive = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sourcePaths.push(reader.string());
                    break;
                case 6:
                    message.sourcePathsToExclude.push(reader.string());
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBackupSettings };
        message.sourcePaths = [];
        message.sourcePathsToExclude = [];
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
        if (object.backupSchedule !== undefined &&
            object.backupSchedule !== null) {
            message.backupSchedule = BackupSchedule.fromJSON(object.backupSchedule);
        }
        else {
            message.backupSchedule = undefined;
        }
        if (object.backupTimeToLive !== undefined &&
            object.backupTimeToLive !== null) {
            message.backupTimeToLive = Duration.fromJSON(object.backupTimeToLive);
        }
        else {
            message.backupTimeToLive = undefined;
        }
        if (object.sourcePaths !== undefined && object.sourcePaths !== null) {
            for (const e of object.sourcePaths) {
                message.sourcePaths.push(String(e));
            }
        }
        if (object.sourcePathsToExclude !== undefined &&
            object.sourcePathsToExclude !== null) {
            for (const e of object.sourcePathsToExclude) {
                message.sourcePathsToExclude.push(String(e));
            }
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = backupSettings_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.backupSchedule !== undefined &&
            (obj.backupSchedule = message.backupSchedule
                ? BackupSchedule.toJSON(message.backupSchedule)
                : undefined);
        message.backupTimeToLive !== undefined &&
            (obj.backupTimeToLive = message.backupTimeToLive
                ? Duration.toJSON(message.backupTimeToLive)
                : undefined);
        if (message.sourcePaths) {
            obj.sourcePaths = message.sourcePaths.map((e) => e);
        }
        else {
            obj.sourcePaths = [];
        }
        if (message.sourcePathsToExclude) {
            obj.sourcePathsToExclude = message.sourcePathsToExclude.map((e) => e);
        }
        else {
            obj.sourcePathsToExclude = [];
        }
        message.type !== undefined &&
            (obj.type = backupSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackupSettings };
        message.sourcePaths = [];
        message.sourcePathsToExclude = [];
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
        if (object.backupSchedule !== undefined &&
            object.backupSchedule !== null) {
            message.backupSchedule = BackupSchedule.fromPartial(object.backupSchedule);
        }
        else {
            message.backupSchedule = undefined;
        }
        if (object.backupTimeToLive !== undefined &&
            object.backupTimeToLive !== null) {
            message.backupTimeToLive = Duration.fromPartial(object.backupTimeToLive);
        }
        else {
            message.backupTimeToLive = undefined;
        }
        if (object.sourcePaths !== undefined && object.sourcePaths !== null) {
            for (const e of object.sourcePaths) {
                message.sourcePaths.push(e);
            }
        }
        if (object.sourcePathsToExclude !== undefined &&
            object.sourcePathsToExclude !== null) {
            for (const e of object.sourcePathsToExclude) {
                message.sourcePathsToExclude.push(e);
            }
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
const baseBackupConfig = {};
export const BackupConfig = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.backupSettings) {
            BackupSettings.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupConfig };
        message.backupSettings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupSettings.push(BackupSettings.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBackupConfig };
        message.backupSettings = [];
        if (object.backupSettings !== undefined &&
            object.backupSettings !== null) {
            for (const e of object.backupSettings) {
                message.backupSettings.push(BackupSettings.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backupSettings) {
            obj.backupSettings = message.backupSettings.map((e) => e ? BackupSettings.toJSON(e) : undefined);
        }
        else {
            obj.backupSettings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackupConfig };
        message.backupSettings = [];
        if (object.backupSettings !== undefined &&
            object.backupSettings !== null) {
            for (const e of object.backupSettings) {
                message.backupSettings.push(BackupSettings.fromPartial(e));
            }
        }
        return message;
    },
};
const baseBackup = {
    id: '',
    name: '',
    folderId: '',
    databaseId: '',
    description: '',
    status: 0,
    type: 0,
    size: 0,
};
export const Backup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.databaseId !== '') {
            writer.uint32(34).string(message.databaseId);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.completedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.completedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.backupSettings !== undefined) {
            BackupSettings.encode(message.backupSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(88).int32(message.type);
        }
        if (message.size !== 0) {
            writer.uint32(96).int64(message.size);
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
                    message.name = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.databaseId = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.completedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.backupSettings = BackupSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.type = reader.int32();
                    break;
                case 12:
                    message.size = longToNumber(reader.int64());
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        }
        else {
            message.databaseId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = fromJsonTimestamp(object.startedAt);
        }
        else {
            message.startedAt = undefined;
        }
        if (object.completedAt !== undefined && object.completedAt !== null) {
            message.completedAt = fromJsonTimestamp(object.completedAt);
        }
        else {
            message.completedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = backup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.backupSettings !== undefined &&
            object.backupSettings !== null) {
            message.backupSettings = BackupSettings.fromJSON(object.backupSettings);
        }
        else {
            message.backupSettings = undefined;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = backup_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.completedAt !== undefined &&
            (obj.completedAt = message.completedAt.toISOString());
        message.status !== undefined &&
            (obj.status = backup_StatusToJSON(message.status));
        message.backupSettings !== undefined &&
            (obj.backupSettings = message.backupSettings
                ? BackupSettings.toJSON(message.backupSettings)
                : undefined);
        message.type !== undefined &&
            (obj.type = backup_TypeToJSON(message.type));
        message.size !== undefined && (obj.size = message.size);
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        }
        else {
            message.databaseId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = object.startedAt;
        }
        else {
            message.startedAt = undefined;
        }
        if (object.completedAt !== undefined && object.completedAt !== null) {
            message.completedAt = object.completedAt;
        }
        else {
            message.completedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.backupSettings !== undefined &&
            object.backupSettings !== null) {
            message.backupSettings = BackupSettings.fromPartial(object.backupSettings);
        }
        else {
            message.backupSettings = undefined;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
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
