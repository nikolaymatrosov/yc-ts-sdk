import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.manager.v1";
/** Data Proc job. */
export interface Job {
    $type: 'yandex.cloud.dataproc.manager.v1.Job';
    /**
     * Unique ID of the Data Proc job.
     * This ID is assigned by MDB in the process of creating Data Proc job.
     */
    id: string;
    /** ID of the Data Proc cluster. */
    clusterId: string;
    /** The time when the Data Proc job was created. */
    createdAt: Date | undefined;
    /** The time when the Data Proc job was started. */
    startedAt: Date | undefined;
    /** The time when the Data Proc job was finished. */
    finishedAt: Date | undefined;
    /** Name of the Data Proc job. */
    name: string;
    /** The id of the user who created the job */
    createdBy: string;
    /** Status. */
    status: Job_Status;
    mapreduceJob: MapreduceJob | undefined;
    sparkJob: SparkJob | undefined;
    pysparkJob: PysparkJob | undefined;
    hiveJob: HiveJob | undefined;
    /** Attributes of YARN application. */
    applicationInfo: ApplicationInfo | undefined;
}
export declare enum Job_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Job created in metadb and is waiting agent to acquire. */
    PROVISIONING = 1,
    /** PENDING - Job acquired by agent and is waiting for execution. */
    PENDING = 2,
    /** RUNNING - Job is running. */
    RUNNING = 3,
    /** ERROR - Job failed. */
    ERROR = 4,
    /** DONE - Job finished. */
    DONE = 5,
    UNRECOGNIZED = -1
}
export declare function job_StatusFromJSON(object: any): Job_Status;
export declare function job_StatusToJSON(object: Job_Status): string;
export interface ApplicationAttempt {
    $type: 'yandex.cloud.dataproc.manager.v1.ApplicationAttempt';
    /** ID of YARN application attempt */
    id: string;
    /** ID of YARN Application Master container */
    amContainerId: string;
}
export interface ApplicationInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.ApplicationInfo';
    /** ID of YARN application */
    id: string;
    /** YARN application attempts */
    applicationAttempts: ApplicationAttempt[];
}
export interface MapreduceJob {
    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob';
    /** Optional arguments to the driver. */
    args: string[];
    /** URIs of file to run. */
    jarFileUris: string[];
    /** URIs of files to be copied to the working directory of Data Proc drivers and distributed tasks. */
    fileUris: string[];
    /** URIs of archives to be extracted in the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** A mapping of property names to values, used to configure Data Proc. */
    properties: {
        [key: string]: string;
    };
    /** The HCFS URI of the jar file containing the main class. */
    mainJarFileUri: string | undefined;
    /** The name of the driver's main class. */
    mainClass: string | undefined;
}
export interface MapreduceJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface SparkJob {
    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob';
    /** Optional arguments to the driver. */
    args: string[];
    /** Jar file URIs to add to the CLASSPATHs of the Data Proc driver and tasks. */
    jarFileUris: string[];
    /** URIs of files to be copied to the working directory of Data Proc drivers and distributed tasks. */
    fileUris: string[];
    /** URIs of archives to be extracted in the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** A mapping of property names to values, used to configure Data Proc. */
    properties: {
        [key: string]: string;
    };
    /** The HCFS URI of the jar file containing the main class. */
    mainJarFileUri: string;
    /** The name of the driver's main class. */
    mainClass: string;
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}
export interface SparkJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface PysparkJob {
    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob';
    /** Optional arguments to the driver. */
    args: string[];
    /** Jar file URIs to add to the CLASSPATHs of the Data Proc driver and tasks. */
    jarFileUris: string[];
    /** URIs of files to be copied to the working directory of Data Proc drivers and distributed tasks. */
    fileUris: string[];
    /** URIs of archives to be extracted in the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** A mapping of property names to values, used to configure Data Proc. */
    properties: {
        [key: string]: string;
    };
    /** URI of the main Python file to use as the driver. Must be a .py file. */
    mainPythonFileUri: string;
    /** URIs of Python files to pass to the PySpark framework. */
    pythonFileUris: string[];
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}
export interface PysparkJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface QueryList {
    $type: 'yandex.cloud.dataproc.manager.v1.QueryList';
    queries: string[];
}
export interface HiveJob {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob';
    /** A mapping of property names to values, used to configure Hive. */
    properties: {
        [key: string]: string;
    };
    /** Whether to continue executing queries if a query fails. */
    continueOnFailure: boolean;
    /** Mapping of query variable names to values. */
    scriptVariables: {
        [key: string]: string;
    };
    /** Jar file URIs to add to the CLASSPATHs of the Hive driver and tasks. */
    jarFileUris: string[];
    /** URI of the script that contains Hive queries. */
    queryFileUri: string | undefined;
    queryList: QueryList | undefined;
}
export interface HiveJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface HiveJob_ScriptVariablesEntry {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.ScriptVariablesEntry';
    key: string;
    value: string;
}
export declare const Job: {
    $type: "yandex.cloud.dataproc.manager.v1.Job";
    encode(message: Job, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Job;
    fromJSON(object: any): Job;
    toJSON(message: Job): unknown;
    fromPartial(object: DeepPartial<Job>): Job;
};
export declare const ApplicationAttempt: {
    $type: "yandex.cloud.dataproc.manager.v1.ApplicationAttempt";
    encode(message: ApplicationAttempt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationAttempt;
    fromJSON(object: any): ApplicationAttempt;
    toJSON(message: ApplicationAttempt): unknown;
    fromPartial(object: DeepPartial<ApplicationAttempt>): ApplicationAttempt;
};
export declare const ApplicationInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.ApplicationInfo";
    encode(message: ApplicationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationInfo;
    fromJSON(object: any): ApplicationInfo;
    toJSON(message: ApplicationInfo): unknown;
    fromPartial(object: DeepPartial<ApplicationInfo>): ApplicationInfo;
};
export declare const MapreduceJob: {
    $type: "yandex.cloud.dataproc.manager.v1.MapreduceJob";
    encode(message: MapreduceJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapreduceJob;
    fromJSON(object: any): MapreduceJob;
    toJSON(message: MapreduceJob): unknown;
    fromPartial(object: DeepPartial<MapreduceJob>): MapreduceJob;
};
export declare const MapreduceJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.manager.v1.MapreduceJob.PropertiesEntry";
    encode(message: MapreduceJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapreduceJob_PropertiesEntry;
    fromJSON(object: any): MapreduceJob_PropertiesEntry;
    toJSON(message: MapreduceJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<MapreduceJob_PropertiesEntry>): MapreduceJob_PropertiesEntry;
};
export declare const SparkJob: {
    $type: "yandex.cloud.dataproc.manager.v1.SparkJob";
    encode(message: SparkJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SparkJob;
    fromJSON(object: any): SparkJob;
    toJSON(message: SparkJob): unknown;
    fromPartial(object: DeepPartial<SparkJob>): SparkJob;
};
export declare const SparkJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.manager.v1.SparkJob.PropertiesEntry";
    encode(message: SparkJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SparkJob_PropertiesEntry;
    fromJSON(object: any): SparkJob_PropertiesEntry;
    toJSON(message: SparkJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<SparkJob_PropertiesEntry>): SparkJob_PropertiesEntry;
};
export declare const PysparkJob: {
    $type: "yandex.cloud.dataproc.manager.v1.PysparkJob";
    encode(message: PysparkJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PysparkJob;
    fromJSON(object: any): PysparkJob;
    toJSON(message: PysparkJob): unknown;
    fromPartial(object: DeepPartial<PysparkJob>): PysparkJob;
};
export declare const PysparkJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.manager.v1.PysparkJob.PropertiesEntry";
    encode(message: PysparkJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PysparkJob_PropertiesEntry;
    fromJSON(object: any): PysparkJob_PropertiesEntry;
    toJSON(message: PysparkJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<PysparkJob_PropertiesEntry>): PysparkJob_PropertiesEntry;
};
export declare const QueryList: {
    $type: "yandex.cloud.dataproc.manager.v1.QueryList";
    encode(message: QueryList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryList;
    fromJSON(object: any): QueryList;
    toJSON(message: QueryList): unknown;
    fromPartial(object: DeepPartial<QueryList>): QueryList;
};
export declare const HiveJob: {
    $type: "yandex.cloud.dataproc.manager.v1.HiveJob";
    encode(message: HiveJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob;
    fromJSON(object: any): HiveJob;
    toJSON(message: HiveJob): unknown;
    fromPartial(object: DeepPartial<HiveJob>): HiveJob;
};
export declare const HiveJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.manager.v1.HiveJob.PropertiesEntry";
    encode(message: HiveJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob_PropertiesEntry;
    fromJSON(object: any): HiveJob_PropertiesEntry;
    toJSON(message: HiveJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<HiveJob_PropertiesEntry>): HiveJob_PropertiesEntry;
};
export declare const HiveJob_ScriptVariablesEntry: {
    $type: "yandex.cloud.dataproc.manager.v1.HiveJob.ScriptVariablesEntry";
    encode(message: HiveJob_ScriptVariablesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob_ScriptVariablesEntry;
    fromJSON(object: any): HiveJob_ScriptVariablesEntry;
    toJSON(message: HiveJob_ScriptVariablesEntry): unknown;
    fromPartial(object: DeepPartial<HiveJob_ScriptVariablesEntry>): HiveJob_ScriptVariablesEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
