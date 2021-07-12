/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'google.type';
/** Represents a day of week. */
export var DayOfWeek;
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
})(DayOfWeek || (DayOfWeek = {}));
export function dayOfWeekFromJSON(object) {
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
export function dayOfWeekToJSON(object) {
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
