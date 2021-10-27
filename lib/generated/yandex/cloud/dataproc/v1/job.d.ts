import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
/** A Data Proc job. For details about the concept, see [documentation](/docs/dataproc/concepts/jobs). */
export interface Job {
    $type: 'yandex.cloud.dataproc.v1.Job';
    /** ID of the job. Generated at creation time. */
    id: string;
    /** ID of the Data Proc cluster that the job belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** The time when the job was started. */
    startedAt: Date | undefined;
    /** The time when the job was finished. */
    finishedAt: Date | undefined;
    /** Name of the job, specified in the [JobService.Create] request. */
    name: string;
    /** The id of the user who created the job */
    createdBy: string;
    /** Job status. */
    status: Job_Status;
    /** Specification for a MapReduce job. */
    mapreduceJob: MapreduceJob | undefined;
    /** Specification for a Spark job. */
    sparkJob: SparkJob | undefined;
    /** Specification for a PySpark job. */
    pysparkJob: PysparkJob | undefined;
    /** Specification for a Hive job. */
    hiveJob: HiveJob | undefined;
    /** Attributes of YARN application. */
    applicationInfo: ApplicationInfo | undefined;
}
export declare enum Job_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Job is logged in the database and is waiting for the agent to run it. */
    PROVISIONING = 1,
    /** PENDING - Job is acquired by the agent and is in the queue for execution. */
    PENDING = 2,
    /** RUNNING - Job is being run in the cluster. */
    RUNNING = 3,
    /** ERROR - Job failed to finish the run properly. */
    ERROR = 4,
    /** DONE - Job is finished. */
    DONE = 5,
    UNRECOGNIZED = -1
}
export declare function job_StatusFromJSON(object: any): Job_Status;
export declare function job_StatusToJSON(object: Job_Status): string;
export interface ApplicationAttempt {
    $type: 'yandex.cloud.dataproc.v1.ApplicationAttempt';
    /** ID of YARN application attempt */
    id: string;
    /** ID of YARN Application Master container */
    amContainerId: string;
}
export interface ApplicationInfo {
    $type: 'yandex.cloud.dataproc.v1.ApplicationInfo';
    /** ID of YARN application */
    id: string;
    /** YARN application attempts */
    applicationAttempts: ApplicationAttempt[];
}
export interface MapreduceJob {
    $type: 'yandex.cloud.dataproc.v1.MapreduceJob';
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
    jarFileUris: string[];
    /**
     * URIs of resource files to be copied to the working directory of Data Proc drivers
     * and distributed Hadoop tasks.
     */
    fileUris: string[];
    /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** Property names and values, used to configure Data Proc and MapReduce. */
    properties: {
        [key: string]: string;
    };
    /** HCFS URI of the .jar file containing the driver class. */
    mainJarFileUri: string | undefined;
    /** The name of the driver class. */
    mainClass: string | undefined;
}
export interface MapreduceJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface SparkJob {
    $type: 'yandex.cloud.dataproc.v1.SparkJob';
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
    jarFileUris: string[];
    /**
     * URIs of resource files to be copied to the working directory of Data Proc drivers
     * and distributed Hadoop tasks.
     */
    fileUris: string[];
    /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** Property names and values, used to configure Data Proc and Spark. */
    properties: {
        [key: string]: string;
    };
    /** The HCFS URI of the JAR file containing the `main` class for the job. */
    mainJarFileUri: string;
    /** The name of the driver class. */
    mainClass: string;
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}
export interface SparkJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface PysparkJob {
    $type: 'yandex.cloud.dataproc.v1.PysparkJob';
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
    jarFileUris: string[];
    /**
     * URIs of resource files to be copied to the working directory of Data Proc drivers
     * and distributed Hadoop tasks.
     */
    fileUris: string[];
    /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** Property names and values, used to configure Data Proc and PySpark. */
    properties: {
        [key: string]: string;
    };
    /** URI of the file with the driver code. Must be a .py file. */
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
    $type: 'yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface QueryList {
    $type: 'yandex.cloud.dataproc.v1.QueryList';
    /** List of Hive queries. */
    queries: string[];
}
export interface HiveJob {
    $type: 'yandex.cloud.dataproc.v1.HiveJob';
    /** Property names and values, used to configure Data Proc and Hive. */
    properties: {
        [key: string]: string;
    };
    /** Flag indicating whether a job should continue to run if a query fails. */
    continueOnFailure: boolean;
    /** Query variables and their values. */
    scriptVariables: {
        [key: string]: string;
    };
    /** JAR file URIs to add to CLASSPATH of the Hive driver and each task. */
    jarFileUris: string[];
    /** URI of the script with all the necessary Hive queries. */
    queryFileUri: string | undefined;
    /** List of Hive queries to be used in the job. */
    queryList: QueryList | undefined;
}
export interface HiveJob_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry';
    key: string;
    value: string;
}
export interface HiveJob_ScriptVariablesEntry {
    $type: 'yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry';
    key: string;
    value: string;
}
export declare const Job: {
    $type: "yandex.cloud.dataproc.v1.Job";
    encode(message: Job, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Job;
    fromJSON(object: any): Job;
    toJSON(message: Job): unknown;
    fromPartial(object: DeepPartial<Job>): Job;
};
export declare const ApplicationAttempt: {
    $type: "yandex.cloud.dataproc.v1.ApplicationAttempt";
    encode(message: ApplicationAttempt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationAttempt;
    fromJSON(object: any): ApplicationAttempt;
    toJSON(message: ApplicationAttempt): unknown;
    fromPartial(object: DeepPartial<ApplicationAttempt>): ApplicationAttempt;
};
export declare const ApplicationInfo: {
    $type: "yandex.cloud.dataproc.v1.ApplicationInfo";
    encode(message: ApplicationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationInfo;
    fromJSON(object: any): ApplicationInfo;
    toJSON(message: ApplicationInfo): unknown;
    fromPartial(object: DeepPartial<ApplicationInfo>): ApplicationInfo;
};
export declare const MapreduceJob: {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob";
    encode(message: MapreduceJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapreduceJob;
    fromJSON(object: any): MapreduceJob;
    toJSON(message: MapreduceJob): unknown;
    fromPartial(object: DeepPartial<MapreduceJob>): MapreduceJob;
};
export declare const MapreduceJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry";
    encode(message: MapreduceJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapreduceJob_PropertiesEntry;
    fromJSON(object: any): MapreduceJob_PropertiesEntry;
    toJSON(message: MapreduceJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<MapreduceJob_PropertiesEntry>): MapreduceJob_PropertiesEntry;
};
export declare const SparkJob: {
    $type: "yandex.cloud.dataproc.v1.SparkJob";
    encode(message: SparkJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SparkJob;
    fromJSON(object: any): SparkJob;
    toJSON(message: SparkJob): unknown;
    fromPartial(object: DeepPartial<SparkJob>): SparkJob;
};
export declare const SparkJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry";
    encode(message: SparkJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SparkJob_PropertiesEntry;
    fromJSON(object: any): SparkJob_PropertiesEntry;
    toJSON(message: SparkJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<SparkJob_PropertiesEntry>): SparkJob_PropertiesEntry;
};
export declare const PysparkJob: {
    $type: "yandex.cloud.dataproc.v1.PysparkJob";
    encode(message: PysparkJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PysparkJob;
    fromJSON(object: any): PysparkJob;
    toJSON(message: PysparkJob): unknown;
    fromPartial(object: DeepPartial<PysparkJob>): PysparkJob;
};
export declare const PysparkJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry";
    encode(message: PysparkJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PysparkJob_PropertiesEntry;
    fromJSON(object: any): PysparkJob_PropertiesEntry;
    toJSON(message: PysparkJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<PysparkJob_PropertiesEntry>): PysparkJob_PropertiesEntry;
};
export declare const QueryList: {
    $type: "yandex.cloud.dataproc.v1.QueryList";
    encode(message: QueryList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryList;
    fromJSON(object: any): QueryList;
    toJSON(message: QueryList): unknown;
    fromPartial(object: DeepPartial<QueryList>): QueryList;
};
export declare const HiveJob: {
    $type: "yandex.cloud.dataproc.v1.HiveJob";
    encode(message: HiveJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob;
    fromJSON(object: any): HiveJob;
    toJSON(message: HiveJob): unknown;
    fromPartial(object: DeepPartial<HiveJob>): HiveJob;
};
export declare const HiveJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry";
    encode(message: HiveJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob_PropertiesEntry;
    fromJSON(object: any): HiveJob_PropertiesEntry;
    toJSON(message: HiveJob_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<HiveJob_PropertiesEntry>): HiveJob_PropertiesEntry;
};
export declare const HiveJob_ScriptVariablesEntry: {
    $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry";
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
