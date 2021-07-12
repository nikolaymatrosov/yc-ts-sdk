export declare const protobufPackage = "google.type";
/** Represents a day of week. */
export declare enum DayOfWeek {
    /** DAY_OF_WEEK_UNSPECIFIED - The unspecified day-of-week. */
    DAY_OF_WEEK_UNSPECIFIED = 0,
    /** MONDAY - The day-of-week of Monday. */
    MONDAY = 1,
    /** TUESDAY - The day-of-week of Tuesday. */
    TUESDAY = 2,
    /** WEDNESDAY - The day-of-week of Wednesday. */
    WEDNESDAY = 3,
    /** THURSDAY - The day-of-week of Thursday. */
    THURSDAY = 4,
    /** FRIDAY - The day-of-week of Friday. */
    FRIDAY = 5,
    /** SATURDAY - The day-of-week of Saturday. */
    SATURDAY = 6,
    /** SUNDAY - The day-of-week of Sunday. */
    SUNDAY = 7,
    UNRECOGNIZED = -1
}
export declare function dayOfWeekFromJSON(object: any): DayOfWeek;
export declare function dayOfWeekToJSON(object: DayOfWeek): string;
