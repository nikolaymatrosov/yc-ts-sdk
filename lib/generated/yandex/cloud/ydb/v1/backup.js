"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = exports.BackupConfig = exports.BackupSettings = exports.DailyBackupSchedule = exports.WeeklyBackupSchedule = exports.DaysOfWeekBackupSchedule = exports.RecurringBackupSchedule = exports.BackupSchedule = exports.backup_TypeToJSON = exports.backup_TypeFromJSON = exports.Backup_Type = exports.backup_StatusToJSON = exports.backup_StatusFromJSON = exports.Backup_Status = exports.backupSettings_StorageClassToJSON = exports.backupSettings_StorageClassFromJSON = exports.BackupSettings_StorageClass = exports.backupSettings_TypeToJSON = exports.backupSettings_TypeFromJSON = exports.BackupSettings_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const dayofweek_1 = require("../../../../google/type/dayofweek");
const timeofday_1 = require("../../../../google/type/timeofday");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ydb.v1';
var BackupSettings_Type;
(function (BackupSettings_Type) {
    BackupSettings_Type[BackupSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    BackupSettings_Type[BackupSettings_Type["SYSTEM"] = 1] = "SYSTEM";
    BackupSettings_Type[BackupSettings_Type["USER"] = 2] = "USER";
    BackupSettings_Type[BackupSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackupSettings_Type = exports.BackupSettings_Type || (exports.BackupSettings_Type = {}));
function backupSettings_TypeFromJSON(object) {
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
exports.backupSettings_TypeFromJSON = backupSettings_TypeFromJSON;
function backupSettings_TypeToJSON(object) {
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
exports.backupSettings_TypeToJSON = backupSettings_TypeToJSON;
var BackupSettings_StorageClass;
(function (BackupSettings_StorageClass) {
    BackupSettings_StorageClass[BackupSettings_StorageClass["STORAGE_CLASS_UNSPECIFIED"] = 0] = "STORAGE_CLASS_UNSPECIFIED";
    BackupSettings_StorageClass[BackupSettings_StorageClass["STANDARD"] = 1] = "STANDARD";
    BackupSettings_StorageClass[BackupSettings_StorageClass["REDUCED_REDUNDANCY"] = 2] = "REDUCED_REDUNDANCY";
    BackupSettings_StorageClass[BackupSettings_StorageClass["STANDARD_IA"] = 3] = "STANDARD_IA";
    BackupSettings_StorageClass[BackupSettings_StorageClass["ONEZONE_IA"] = 4] = "ONEZONE_IA";
    BackupSettings_StorageClass[BackupSettings_StorageClass["INTELLIGENT_TIERING"] = 5] = "INTELLIGENT_TIERING";
    BackupSettings_StorageClass[BackupSettings_StorageClass["GLACIER"] = 6] = "GLACIER";
    BackupSettings_StorageClass[BackupSettings_StorageClass["DEEP_ARCHIVE"] = 7] = "DEEP_ARCHIVE";
    BackupSettings_StorageClass[BackupSettings_StorageClass["OUTPOSTS"] = 8] = "OUTPOSTS";
    BackupSettings_StorageClass[BackupSettings_StorageClass["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackupSettings_StorageClass = exports.BackupSettings_StorageClass || (exports.BackupSettings_StorageClass = {}));
function backupSettings_StorageClassFromJSON(object) {
    switch (object) {
        case 0:
        case 'STORAGE_CLASS_UNSPECIFIED':
            return BackupSettings_StorageClass.STORAGE_CLASS_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return BackupSettings_StorageClass.STANDARD;
        case 2:
        case 'REDUCED_REDUNDANCY':
            return BackupSettings_StorageClass.REDUCED_REDUNDANCY;
        case 3:
        case 'STANDARD_IA':
            return BackupSettings_StorageClass.STANDARD_IA;
        case 4:
        case 'ONEZONE_IA':
            return BackupSettings_StorageClass.ONEZONE_IA;
        case 5:
        case 'INTELLIGENT_TIERING':
            return BackupSettings_StorageClass.INTELLIGENT_TIERING;
        case 6:
        case 'GLACIER':
            return BackupSettings_StorageClass.GLACIER;
        case 7:
        case 'DEEP_ARCHIVE':
            return BackupSettings_StorageClass.DEEP_ARCHIVE;
        case 8:
        case 'OUTPOSTS':
            return BackupSettings_StorageClass.OUTPOSTS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BackupSettings_StorageClass.UNRECOGNIZED;
    }
}
exports.backupSettings_StorageClassFromJSON = backupSettings_StorageClassFromJSON;
function backupSettings_StorageClassToJSON(object) {
    switch (object) {
        case BackupSettings_StorageClass.STORAGE_CLASS_UNSPECIFIED:
            return 'STORAGE_CLASS_UNSPECIFIED';
        case BackupSettings_StorageClass.STANDARD:
            return 'STANDARD';
        case BackupSettings_StorageClass.REDUCED_REDUNDANCY:
            return 'REDUCED_REDUNDANCY';
        case BackupSettings_StorageClass.STANDARD_IA:
            return 'STANDARD_IA';
        case BackupSettings_StorageClass.ONEZONE_IA:
            return 'ONEZONE_IA';
        case BackupSettings_StorageClass.INTELLIGENT_TIERING:
            return 'INTELLIGENT_TIERING';
        case BackupSettings_StorageClass.GLACIER:
            return 'GLACIER';
        case BackupSettings_StorageClass.DEEP_ARCHIVE:
            return 'DEEP_ARCHIVE';
        case BackupSettings_StorageClass.OUTPOSTS:
            return 'OUTPOSTS';
        default:
            return 'UNKNOWN';
    }
}
exports.backupSettings_StorageClassToJSON = backupSettings_StorageClassToJSON;
/** id of backup */
var Backup_Status;
(function (Backup_Status) {
    Backup_Status[Backup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Backup_Status[Backup_Status["CREATING"] = 1] = "CREATING";
    Backup_Status[Backup_Status["READY"] = 2] = "READY";
    Backup_Status[Backup_Status["ERROR"] = 3] = "ERROR";
    Backup_Status[Backup_Status["CANCELLED"] = 4] = "CANCELLED";
    Backup_Status[Backup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Status = exports.Backup_Status || (exports.Backup_Status = {}));
function backup_StatusFromJSON(object) {
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
exports.backup_StatusFromJSON = backup_StatusFromJSON;
function backup_StatusToJSON(object) {
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
exports.backup_StatusToJSON = backup_StatusToJSON;
var Backup_Type;
(function (Backup_Type) {
    Backup_Type[Backup_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** SYSTEM - indicates that backup started by the system. */
    Backup_Type[Backup_Type["SYSTEM"] = 1] = "SYSTEM";
    Backup_Type[Backup_Type["USER"] = 2] = "USER";
    Backup_Type[Backup_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Type = exports.Backup_Type || (exports.Backup_Type = {}));
function backup_TypeFromJSON(object) {
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
exports.backup_TypeFromJSON = backup_TypeFromJSON;
function backup_TypeToJSON(object) {
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
exports.backup_TypeToJSON = backup_TypeToJSON;
const baseBackupSchedule = {};
exports.BackupSchedule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dailyBackupSchedule !== undefined) {
            exports.DailyBackupSchedule.encode(message.dailyBackupSchedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.weeklyBackupSchedule !== undefined) {
            exports.WeeklyBackupSchedule.encode(message.weeklyBackupSchedule, writer.uint32(18).fork()).ldelim();
        }
        if (message.recurringBackupSchedule !== undefined) {
            exports.RecurringBackupSchedule.encode(message.recurringBackupSchedule, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextExecuteTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.nextExecuteTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupSchedule };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dailyBackupSchedule = exports.DailyBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weeklyBackupSchedule = exports.WeeklyBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.recurringBackupSchedule =
                        exports.RecurringBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextExecuteTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            message.dailyBackupSchedule = exports.DailyBackupSchedule.fromJSON(object.dailyBackupSchedule);
        }
        else {
            message.dailyBackupSchedule = undefined;
        }
        if (object.weeklyBackupSchedule !== undefined &&
            object.weeklyBackupSchedule !== null) {
            message.weeklyBackupSchedule = exports.WeeklyBackupSchedule.fromJSON(object.weeklyBackupSchedule);
        }
        else {
            message.weeklyBackupSchedule = undefined;
        }
        if (object.recurringBackupSchedule !== undefined &&
            object.recurringBackupSchedule !== null) {
            message.recurringBackupSchedule = exports.RecurringBackupSchedule.fromJSON(object.recurringBackupSchedule);
        }
        else {
            message.recurringBackupSchedule = undefined;
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
                ? exports.DailyBackupSchedule.toJSON(message.dailyBackupSchedule)
                : undefined);
        message.weeklyBackupSchedule !== undefined &&
            (obj.weeklyBackupSchedule = message.weeklyBackupSchedule
                ? exports.WeeklyBackupSchedule.toJSON(message.weeklyBackupSchedule)
                : undefined);
        message.recurringBackupSchedule !== undefined &&
            (obj.recurringBackupSchedule = message.recurringBackupSchedule
                ? exports.RecurringBackupSchedule.toJSON(message.recurringBackupSchedule)
                : undefined);
        message.nextExecuteTime !== undefined &&
            (obj.nextExecuteTime = message.nextExecuteTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBackupSchedule };
        if (object.dailyBackupSchedule !== undefined &&
            object.dailyBackupSchedule !== null) {
            message.dailyBackupSchedule = exports.DailyBackupSchedule.fromPartial(object.dailyBackupSchedule);
        }
        else {
            message.dailyBackupSchedule = undefined;
        }
        if (object.weeklyBackupSchedule !== undefined &&
            object.weeklyBackupSchedule !== null) {
            message.weeklyBackupSchedule = exports.WeeklyBackupSchedule.fromPartial(object.weeklyBackupSchedule);
        }
        else {
            message.weeklyBackupSchedule = undefined;
        }
        if (object.recurringBackupSchedule !== undefined &&
            object.recurringBackupSchedule !== null) {
            message.recurringBackupSchedule =
                exports.RecurringBackupSchedule.fromPartial(object.recurringBackupSchedule);
        }
        else {
            message.recurringBackupSchedule = undefined;
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
const baseRecurringBackupSchedule = { recurrence: '' };
exports.RecurringBackupSchedule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.recurrence !== '') {
            writer.uint32(18).string(message.recurrence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRecurringBackupSchedule,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.recurrence = reader.string();
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
            ...baseRecurringBackupSchedule,
        };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = fromJsonTimestamp(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.recurrence !== undefined && object.recurrence !== null) {
            message.recurrence = String(object.recurrence);
        }
        else {
            message.recurrence = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.recurrence !== undefined &&
            (obj.recurrence = message.recurrence);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRecurringBackupSchedule,
        };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = undefined;
        }
        if (object.recurrence !== undefined && object.recurrence !== null) {
            message.recurrence = object.recurrence;
        }
        else {
            message.recurrence = '';
        }
        return message;
    },
};
const baseDaysOfWeekBackupSchedule = { days: 0 };
exports.DaysOfWeekBackupSchedule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.executeTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.executeTime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.executeTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
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
                message.days.push((0, dayofweek_1.dayOfWeekFromJSON)(e));
            }
        }
        if (object.executeTime !== undefined && object.executeTime !== null) {
            message.executeTime = timeofday_1.TimeOfDay.fromJSON(object.executeTime);
        }
        else {
            message.executeTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.days) {
            obj.days = message.days.map((e) => (0, dayofweek_1.dayOfWeekToJSON)(e));
        }
        else {
            obj.days = [];
        }
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? timeofday_1.TimeOfDay.toJSON(message.executeTime)
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
            message.executeTime = timeofday_1.TimeOfDay.fromPartial(object.executeTime);
        }
        else {
            message.executeTime = undefined;
        }
        return message;
    },
};
const baseWeeklyBackupSchedule = {};
exports.WeeklyBackupSchedule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.daysOfWeek) {
            exports.DaysOfWeekBackupSchedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWeeklyBackupSchedule };
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(exports.DaysOfWeekBackupSchedule.decode(reader, reader.uint32()));
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
                message.daysOfWeek.push(exports.DaysOfWeekBackupSchedule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) => e ? exports.DaysOfWeekBackupSchedule.toJSON(e) : undefined);
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
                message.daysOfWeek.push(exports.DaysOfWeekBackupSchedule.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDailyBackupSchedule = {};
exports.DailyBackupSchedule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.executeTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.executeTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDailyBackupSchedule };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executeTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
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
            message.executeTime = timeofday_1.TimeOfDay.fromJSON(object.executeTime);
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
                ? timeofday_1.TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDailyBackupSchedule };
        if (object.executeTime !== undefined && object.executeTime !== null) {
            message.executeTime = timeofday_1.TimeOfDay.fromPartial(object.executeTime);
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
    storageClass: 0,
};
exports.BackupSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.backupSchedule !== undefined) {
            exports.BackupSchedule.encode(message.backupSchedule, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupTimeToLive !== undefined) {
            duration_1.Duration.encode(message.backupTimeToLive, writer.uint32(34).fork()).ldelim();
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
        if (message.storageClass !== 0) {
            writer.uint32(64).int32(message.storageClass);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.backupSchedule = exports.BackupSchedule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupTimeToLive = duration_1.Duration.decode(reader, reader.uint32());
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
                case 8:
                    message.storageClass = reader.int32();
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
            message.backupSchedule = exports.BackupSchedule.fromJSON(object.backupSchedule);
        }
        else {
            message.backupSchedule = undefined;
        }
        if (object.backupTimeToLive !== undefined &&
            object.backupTimeToLive !== null) {
            message.backupTimeToLive = duration_1.Duration.fromJSON(object.backupTimeToLive);
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
        if (object.storageClass !== undefined && object.storageClass !== null) {
            message.storageClass = backupSettings_StorageClassFromJSON(object.storageClass);
        }
        else {
            message.storageClass = 0;
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
                ? exports.BackupSchedule.toJSON(message.backupSchedule)
                : undefined);
        message.backupTimeToLive !== undefined &&
            (obj.backupTimeToLive = message.backupTimeToLive
                ? duration_1.Duration.toJSON(message.backupTimeToLive)
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
        message.storageClass !== undefined &&
            (obj.storageClass = backupSettings_StorageClassToJSON(message.storageClass));
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
            message.backupSchedule = exports.BackupSchedule.fromPartial(object.backupSchedule);
        }
        else {
            message.backupSchedule = undefined;
        }
        if (object.backupTimeToLive !== undefined &&
            object.backupTimeToLive !== null) {
            message.backupTimeToLive = duration_1.Duration.fromPartial(object.backupTimeToLive);
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
        if (object.storageClass !== undefined && object.storageClass !== null) {
            message.storageClass = object.storageClass;
        }
        else {
            message.storageClass = 0;
        }
        return message;
    },
};
const baseBackupConfig = {};
exports.BackupConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backupSettings) {
            exports.BackupSettings.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupConfig };
        message.backupSettings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupSettings.push(exports.BackupSettings.decode(reader, reader.uint32()));
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
                message.backupSettings.push(exports.BackupSettings.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backupSettings) {
            obj.backupSettings = message.backupSettings.map((e) => e ? exports.BackupSettings.toJSON(e) : undefined);
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
                message.backupSettings.push(exports.BackupSettings.fromPartial(e));
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
exports.Backup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.completedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.backupSettings !== undefined) {
            exports.BackupSettings.encode(message.backupSettings, writer.uint32(82).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.completedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.backupSettings = exports.BackupSettings.decode(reader, reader.uint32());
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
            message.backupSettings = exports.BackupSettings.fromJSON(object.backupSettings);
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
                ? exports.BackupSettings.toJSON(message.backupSettings)
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
            message.backupSettings = exports.BackupSettings.fromPartial(object.backupSettings);
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
