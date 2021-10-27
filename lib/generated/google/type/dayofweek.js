"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeekToJSON = exports.dayOfWeekFromJSON = exports.DayOfWeek = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'google.type';
/** Represents a day of week. */
var DayOfWeek;
(function (DayOfWeek) {
    /** DAY_OF_WEEK_UNSPECIFIED - The unspecified day-of-week. */
    DayOfWeek[DayOfWeek["DAY_OF_WEEK_UNSPECIFIED"] = 0] = "DAY_OF_WEEK_UNSPECIFIED";
    /** MONDAY - The day-of-week of Monday. */
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    /** TUESDAY - The day-of-week of Tuesday. */
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    /** WEDNESDAY - The day-of-week of Wednesday. */
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    /** THURSDAY - The day-of-week of Thursday. */
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    /** FRIDAY - The day-of-week of Friday. */
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    /** SATURDAY - The day-of-week of Saturday. */
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY";
    /** SUNDAY - The day-of-week of Sunday. */
    DayOfWeek[DayOfWeek["SUNDAY"] = 7] = "SUNDAY";
    DayOfWeek[DayOfWeek["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
function dayOfWeekFromJSON(object) {
    switch (object) {
        case 0:
        case 'DAY_OF_WEEK_UNSPECIFIED':
            return DayOfWeek.DAY_OF_WEEK_UNSPECIFIED;
        case 1:
        case 'MONDAY':
            return DayOfWeek.MONDAY;
        case 2:
        case 'TUESDAY':
            return DayOfWeek.TUESDAY;
        case 3:
        case 'WEDNESDAY':
            return DayOfWeek.WEDNESDAY;
        case 4:
        case 'THURSDAY':
            return DayOfWeek.THURSDAY;
        case 5:
        case 'FRIDAY':
            return DayOfWeek.FRIDAY;
        case 6:
        case 'SATURDAY':
            return DayOfWeek.SATURDAY;
        case 7:
        case 'SUNDAY':
            return DayOfWeek.SUNDAY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DayOfWeek.UNRECOGNIZED;
    }
}
exports.dayOfWeekFromJSON = dayOfWeekFromJSON;
function dayOfWeekToJSON(object) {
    switch (object) {
        case DayOfWeek.DAY_OF_WEEK_UNSPECIFIED:
            return 'DAY_OF_WEEK_UNSPECIFIED';
        case DayOfWeek.MONDAY:
            return 'MONDAY';
        case DayOfWeek.TUESDAY:
            return 'TUESDAY';
        case DayOfWeek.WEDNESDAY:
            return 'WEDNESDAY';
        case DayOfWeek.THURSDAY:
            return 'THURSDAY';
        case DayOfWeek.FRIDAY:
            return 'FRIDAY';
        case DayOfWeek.SATURDAY:
            return 'SATURDAY';
        case DayOfWeek.SUNDAY:
            return 'SUNDAY';
        default:
            return 'UNKNOWN';
    }
}
exports.dayOfWeekToJSON = dayOfWeekToJSON;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
