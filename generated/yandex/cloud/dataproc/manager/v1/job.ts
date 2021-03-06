/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.dataproc.manager.v1';

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

export enum Job_Status {
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
    UNRECOGNIZED = -1,
}

export function job_StatusFromJSON(object: any): Job_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Job_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Job_Status.PROVISIONING;
        case 2:
        case 'PENDING':
            return Job_Status.PENDING;
        case 3:
        case 'RUNNING':
            return Job_Status.RUNNING;
        case 4:
        case 'ERROR':
            return Job_Status.ERROR;
        case 5:
        case 'DONE':
            return Job_Status.DONE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Job_Status.UNRECOGNIZED;
    }
}

export function job_StatusToJSON(object: Job_Status): string {
    switch (object) {
        case Job_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Job_Status.PROVISIONING:
            return 'PROVISIONING';
        case Job_Status.PENDING:
            return 'PENDING';
        case Job_Status.RUNNING:
            return 'RUNNING';
        case Job_Status.ERROR:
            return 'ERROR';
        case Job_Status.DONE:
            return 'DONE';
        default:
            return 'UNKNOWN';
    }
}

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
    properties: { [key: string]: string };
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
    properties: { [key: string]: string };
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
    properties: { [key: string]: string };
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
    properties: { [key: string]: string };
    /** Whether to continue executing queries if a query fails. */
    continueOnFailure: boolean;
    /** Mapping of query variable names to values. */
    scriptVariables: { [key: string]: string };
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

const baseJob: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.Job',
    id: '',
    clusterId: '',
    name: '',
    createdBy: '',
    status: 0,
};

export const Job = {
    $type: 'yandex.cloud.dataproc.manager.v1.Job' as const,

    encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.startedAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.finishedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.finishedAt),
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.createdBy !== '') {
            writer.uint32(98).string(message.createdBy);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.mapreduceJob !== undefined) {
            MapreduceJob.encode(
                message.mapreduceJob,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.sparkJob !== undefined) {
            SparkJob.encode(
                message.sparkJob,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.pysparkJob !== undefined) {
            PysparkJob.encode(
                message.pysparkJob,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.hiveJob !== undefined) {
            HiveJob.encode(message.hiveJob, writer.uint32(90).fork()).ldelim();
        }
        if (message.applicationInfo !== undefined) {
            ApplicationInfo.encode(
                message.applicationInfo,
                writer.uint32(106).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Job {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJob } as Job;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.startedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.finishedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 12:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.mapreduceJob = MapreduceJob.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.sparkJob = SparkJob.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.pysparkJob = PysparkJob.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.hiveJob = HiveJob.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.applicationInfo = ApplicationInfo.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Job {
        const message = { ...baseJob } as Job;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = fromJsonTimestamp(object.startedAt);
        } else {
            message.startedAt = undefined;
        }
        if (object.finishedAt !== undefined && object.finishedAt !== null) {
            message.finishedAt = fromJsonTimestamp(object.finishedAt);
        } else {
            message.finishedAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.createdBy !== undefined && object.createdBy !== null) {
            message.createdBy = String(object.createdBy);
        } else {
            message.createdBy = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = job_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.mapreduceJob !== undefined && object.mapreduceJob !== null) {
            message.mapreduceJob = MapreduceJob.fromJSON(object.mapreduceJob);
        } else {
            message.mapreduceJob = undefined;
        }
        if (object.sparkJob !== undefined && object.sparkJob !== null) {
            message.sparkJob = SparkJob.fromJSON(object.sparkJob);
        } else {
            message.sparkJob = undefined;
        }
        if (object.pysparkJob !== undefined && object.pysparkJob !== null) {
            message.pysparkJob = PysparkJob.fromJSON(object.pysparkJob);
        } else {
            message.pysparkJob = undefined;
        }
        if (object.hiveJob !== undefined && object.hiveJob !== null) {
            message.hiveJob = HiveJob.fromJSON(object.hiveJob);
        } else {
            message.hiveJob = undefined;
        }
        if (
            object.applicationInfo !== undefined &&
            object.applicationInfo !== null
        ) {
            message.applicationInfo = ApplicationInfo.fromJSON(
                object.applicationInfo
            );
        } else {
            message.applicationInfo = undefined;
        }
        return message;
    },

    toJSON(message: Job): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined &&
            (obj.finishedAt = message.finishedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.status !== undefined &&
            (obj.status = job_StatusToJSON(message.status));
        message.mapreduceJob !== undefined &&
            (obj.mapreduceJob = message.mapreduceJob
                ? MapreduceJob.toJSON(message.mapreduceJob)
                : undefined);
        message.sparkJob !== undefined &&
            (obj.sparkJob = message.sparkJob
                ? SparkJob.toJSON(message.sparkJob)
                : undefined);
        message.pysparkJob !== undefined &&
            (obj.pysparkJob = message.pysparkJob
                ? PysparkJob.toJSON(message.pysparkJob)
                : undefined);
        message.hiveJob !== undefined &&
            (obj.hiveJob = message.hiveJob
                ? HiveJob.toJSON(message.hiveJob)
                : undefined);
        message.applicationInfo !== undefined &&
            (obj.applicationInfo = message.applicationInfo
                ? ApplicationInfo.toJSON(message.applicationInfo)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Job>): Job {
        const message = { ...baseJob } as Job;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = object.startedAt;
        } else {
            message.startedAt = undefined;
        }
        if (object.finishedAt !== undefined && object.finishedAt !== null) {
            message.finishedAt = object.finishedAt;
        } else {
            message.finishedAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.createdBy !== undefined && object.createdBy !== null) {
            message.createdBy = object.createdBy;
        } else {
            message.createdBy = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.mapreduceJob !== undefined && object.mapreduceJob !== null) {
            message.mapreduceJob = MapreduceJob.fromPartial(
                object.mapreduceJob
            );
        } else {
            message.mapreduceJob = undefined;
        }
        if (object.sparkJob !== undefined && object.sparkJob !== null) {
            message.sparkJob = SparkJob.fromPartial(object.sparkJob);
        } else {
            message.sparkJob = undefined;
        }
        if (object.pysparkJob !== undefined && object.pysparkJob !== null) {
            message.pysparkJob = PysparkJob.fromPartial(object.pysparkJob);
        } else {
            message.pysparkJob = undefined;
        }
        if (object.hiveJob !== undefined && object.hiveJob !== null) {
            message.hiveJob = HiveJob.fromPartial(object.hiveJob);
        } else {
            message.hiveJob = undefined;
        }
        if (
            object.applicationInfo !== undefined &&
            object.applicationInfo !== null
        ) {
            message.applicationInfo = ApplicationInfo.fromPartial(
                object.applicationInfo
            );
        } else {
            message.applicationInfo = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Job.$type, Job);

const baseApplicationAttempt: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.ApplicationAttempt',
    id: '',
    amContainerId: '',
};

export const ApplicationAttempt = {
    $type: 'yandex.cloud.dataproc.manager.v1.ApplicationAttempt' as const,

    encode(
        message: ApplicationAttempt,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.amContainerId !== '') {
            writer.uint32(18).string(message.amContainerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ApplicationAttempt {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplicationAttempt } as ApplicationAttempt;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.amContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ApplicationAttempt {
        const message = { ...baseApplicationAttempt } as ApplicationAttempt;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (
            object.amContainerId !== undefined &&
            object.amContainerId !== null
        ) {
            message.amContainerId = String(object.amContainerId);
        } else {
            message.amContainerId = '';
        }
        return message;
    },

    toJSON(message: ApplicationAttempt): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.amContainerId !== undefined &&
            (obj.amContainerId = message.amContainerId);
        return obj;
    },

    fromPartial(object: DeepPartial<ApplicationAttempt>): ApplicationAttempt {
        const message = { ...baseApplicationAttempt } as ApplicationAttempt;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (
            object.amContainerId !== undefined &&
            object.amContainerId !== null
        ) {
            message.amContainerId = object.amContainerId;
        } else {
            message.amContainerId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(ApplicationAttempt.$type, ApplicationAttempt);

const baseApplicationInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.ApplicationInfo',
    id: '',
};

export const ApplicationInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.ApplicationInfo' as const,

    encode(
        message: ApplicationInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.applicationAttempts) {
            ApplicationAttempt.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplicationInfo } as ApplicationInfo;
        message.applicationAttempts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.applicationAttempts.push(
                        ApplicationAttempt.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ApplicationInfo {
        const message = { ...baseApplicationInfo } as ApplicationInfo;
        message.applicationAttempts = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (
            object.applicationAttempts !== undefined &&
            object.applicationAttempts !== null
        ) {
            for (const e of object.applicationAttempts) {
                message.applicationAttempts.push(
                    ApplicationAttempt.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: ApplicationInfo): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.applicationAttempts) {
            obj.applicationAttempts = message.applicationAttempts.map((e) =>
                e ? ApplicationAttempt.toJSON(e) : undefined
            );
        } else {
            obj.applicationAttempts = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ApplicationInfo>): ApplicationInfo {
        const message = { ...baseApplicationInfo } as ApplicationInfo;
        message.applicationAttempts = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (
            object.applicationAttempts !== undefined &&
            object.applicationAttempts !== null
        ) {
            for (const e of object.applicationAttempts) {
                message.applicationAttempts.push(
                    ApplicationAttempt.fromPartial(e)
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(ApplicationInfo.$type, ApplicationInfo);

const baseMapreduceJob: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob',
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
};

export const MapreduceJob = {
    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob' as const,

    encode(
        message: MapreduceJob,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.args) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v!);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            MapreduceJob_PropertiesEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob.PropertiesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.mainJarFileUri !== undefined) {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== undefined) {
            writer.uint32(58).string(message.mainClass);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MapreduceJob {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMapreduceJob } as MapreduceJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = MapreduceJob_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MapreduceJob {
        const message = { ...baseMapreduceJob } as MapreduceJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(String(e));
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(String(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (
            object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null
        ) {
            message.mainJarFileUri = String(object.mainJarFileUri);
        } else {
            message.mainJarFileUri = undefined;
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = String(object.mainClass);
        } else {
            message.mainClass = undefined;
        }
        return message;
    },

    toJSON(message: MapreduceJob): unknown {
        const obj: any = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        } else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        } else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        } else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        } else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined &&
            (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        return obj;
    },

    fromPartial(object: DeepPartial<MapreduceJob>): MapreduceJob {
        const message = { ...baseMapreduceJob } as MapreduceJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(e);
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (
            object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null
        ) {
            message.mainJarFileUri = object.mainJarFileUri;
        } else {
            message.mainJarFileUri = undefined;
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = object.mainClass;
        } else {
            message.mainClass = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(MapreduceJob.$type, MapreduceJob);

const baseMapreduceJob_PropertiesEntry: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob.PropertiesEntry',
    key: '',
    value: '',
};

export const MapreduceJob_PropertiesEntry = {
    $type: 'yandex.cloud.dataproc.manager.v1.MapreduceJob.PropertiesEntry' as const,

    encode(
        message: MapreduceJob_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MapreduceJob_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMapreduceJob_PropertiesEntry,
        } as MapreduceJob_PropertiesEntry;
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

    fromJSON(object: any): MapreduceJob_PropertiesEntry {
        const message = {
            ...baseMapreduceJob_PropertiesEntry,
        } as MapreduceJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: MapreduceJob_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MapreduceJob_PropertiesEntry>
    ): MapreduceJob_PropertiesEntry {
        const message = {
            ...baseMapreduceJob_PropertiesEntry,
        } as MapreduceJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    MapreduceJob_PropertiesEntry.$type,
    MapreduceJob_PropertiesEntry
);

const baseSparkJob: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob',
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainJarFileUri: '',
    mainClass: '',
    packages: '',
    repositories: '',
    excludePackages: '',
};

export const SparkJob = {
    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob' as const,

    encode(
        message: SparkJob,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.args) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v!);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            SparkJob_PropertiesEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob.PropertiesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.mainJarFileUri !== '') {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== '') {
            writer.uint32(58).string(message.mainClass);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v!);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v!);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SparkJob {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSparkJob } as SparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = SparkJob_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SparkJob {
        const message = { ...baseSparkJob } as SparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(String(e));
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(String(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (
            object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null
        ) {
            message.mainJarFileUri = String(object.mainJarFileUri);
        } else {
            message.mainJarFileUri = '';
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = String(object.mainClass);
        } else {
            message.mainClass = '';
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(String(e));
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(String(e));
            }
        }
        if (
            object.excludePackages !== undefined &&
            object.excludePackages !== null
        ) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: SparkJob): unknown {
        const obj: any = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        } else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        } else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        } else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        } else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined &&
            (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        } else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        } else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        } else {
            obj.excludePackages = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<SparkJob>): SparkJob {
        const message = { ...baseSparkJob } as SparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(e);
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (
            object.mainJarFileUri !== undefined &&
            object.mainJarFileUri !== null
        ) {
            message.mainJarFileUri = object.mainJarFileUri;
        } else {
            message.mainJarFileUri = '';
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = object.mainClass;
        } else {
            message.mainClass = '';
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(e);
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(e);
            }
        }
        if (
            object.excludePackages !== undefined &&
            object.excludePackages !== null
        ) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(SparkJob.$type, SparkJob);

const baseSparkJob_PropertiesEntry: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob.PropertiesEntry',
    key: '',
    value: '',
};

export const SparkJob_PropertiesEntry = {
    $type: 'yandex.cloud.dataproc.manager.v1.SparkJob.PropertiesEntry' as const,

    encode(
        message: SparkJob_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SparkJob_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSparkJob_PropertiesEntry,
        } as SparkJob_PropertiesEntry;
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

    fromJSON(object: any): SparkJob_PropertiesEntry {
        const message = {
            ...baseSparkJob_PropertiesEntry,
        } as SparkJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: SparkJob_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SparkJob_PropertiesEntry>
    ): SparkJob_PropertiesEntry {
        const message = {
            ...baseSparkJob_PropertiesEntry,
        } as SparkJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    SparkJob_PropertiesEntry.$type,
    SparkJob_PropertiesEntry
);

const basePysparkJob: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob',
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainPythonFileUri: '',
    pythonFileUris: '',
    packages: '',
    repositories: '',
    excludePackages: '',
};

export const PysparkJob = {
    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob' as const,

    encode(
        message: PysparkJob,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.args) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v!);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            PysparkJob_PropertiesEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob.PropertiesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.mainPythonFileUri !== '') {
            writer.uint32(50).string(message.mainPythonFileUri);
        }
        for (const v of message.pythonFileUris) {
            writer.uint32(58).string(v!);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v!);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v!);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PysparkJob {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePysparkJob } as PysparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = PysparkJob_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainPythonFileUri = reader.string();
                    break;
                case 7:
                    message.pythonFileUris.push(reader.string());
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PysparkJob {
        const message = { ...basePysparkJob } as PysparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(String(e));
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(String(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (
            object.mainPythonFileUri !== undefined &&
            object.mainPythonFileUri !== null
        ) {
            message.mainPythonFileUri = String(object.mainPythonFileUri);
        } else {
            message.mainPythonFileUri = '';
        }
        if (
            object.pythonFileUris !== undefined &&
            object.pythonFileUris !== null
        ) {
            for (const e of object.pythonFileUris) {
                message.pythonFileUris.push(String(e));
            }
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(String(e));
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(String(e));
            }
        }
        if (
            object.excludePackages !== undefined &&
            object.excludePackages !== null
        ) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: PysparkJob): unknown {
        const obj: any = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        } else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        } else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        } else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        } else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainPythonFileUri !== undefined &&
            (obj.mainPythonFileUri = message.mainPythonFileUri);
        if (message.pythonFileUris) {
            obj.pythonFileUris = message.pythonFileUris.map((e) => e);
        } else {
            obj.pythonFileUris = [];
        }
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        } else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        } else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        } else {
            obj.excludePackages = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PysparkJob>): PysparkJob {
        const message = { ...basePysparkJob } as PysparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.fileUris !== undefined && object.fileUris !== null) {
            for (const e of object.fileUris) {
                message.fileUris.push(e);
            }
        }
        if (object.archiveUris !== undefined && object.archiveUris !== null) {
            for (const e of object.archiveUris) {
                message.archiveUris.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (
            object.mainPythonFileUri !== undefined &&
            object.mainPythonFileUri !== null
        ) {
            message.mainPythonFileUri = object.mainPythonFileUri;
        } else {
            message.mainPythonFileUri = '';
        }
        if (
            object.pythonFileUris !== undefined &&
            object.pythonFileUris !== null
        ) {
            for (const e of object.pythonFileUris) {
                message.pythonFileUris.push(e);
            }
        }
        if (object.packages !== undefined && object.packages !== null) {
            for (const e of object.packages) {
                message.packages.push(e);
            }
        }
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(e);
            }
        }
        if (
            object.excludePackages !== undefined &&
            object.excludePackages !== null
        ) {
            for (const e of object.excludePackages) {
                message.excludePackages.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(PysparkJob.$type, PysparkJob);

const basePysparkJob_PropertiesEntry: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob.PropertiesEntry',
    key: '',
    value: '',
};

export const PysparkJob_PropertiesEntry = {
    $type: 'yandex.cloud.dataproc.manager.v1.PysparkJob.PropertiesEntry' as const,

    encode(
        message: PysparkJob_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PysparkJob_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePysparkJob_PropertiesEntry,
        } as PysparkJob_PropertiesEntry;
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

    fromJSON(object: any): PysparkJob_PropertiesEntry {
        const message = {
            ...basePysparkJob_PropertiesEntry,
        } as PysparkJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: PysparkJob_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PysparkJob_PropertiesEntry>
    ): PysparkJob_PropertiesEntry {
        const message = {
            ...basePysparkJob_PropertiesEntry,
        } as PysparkJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    PysparkJob_PropertiesEntry.$type,
    PysparkJob_PropertiesEntry
);

const baseQueryList: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.QueryList',
    queries: '',
};

export const QueryList = {
    $type: 'yandex.cloud.dataproc.manager.v1.QueryList' as const,

    encode(
        message: QueryList,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.queries) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryList {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryList } as QueryList;
        message.queries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryList {
        const message = { ...baseQueryList } as QueryList;
        message.queries = [];
        if (object.queries !== undefined && object.queries !== null) {
            for (const e of object.queries) {
                message.queries.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: QueryList): unknown {
        const obj: any = {};
        if (message.queries) {
            obj.queries = message.queries.map((e) => e);
        } else {
            obj.queries = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<QueryList>): QueryList {
        const message = { ...baseQueryList } as QueryList;
        message.queries = [];
        if (object.queries !== undefined && object.queries !== null) {
            for (const e of object.queries) {
                message.queries.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(QueryList.$type, QueryList);

const baseHiveJob: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob',
    continueOnFailure: false,
    jarFileUris: '',
};

export const HiveJob = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob' as const,

    encode(
        message: HiveJob,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        Object.entries(message.properties).forEach(([key, value]) => {
            HiveJob_PropertiesEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.PropertiesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(10).fork()
            ).ldelim();
        });
        if (message.continueOnFailure === true) {
            writer.uint32(16).bool(message.continueOnFailure);
        }
        Object.entries(message.scriptVariables).forEach(([key, value]) => {
            HiveJob_ScriptVariablesEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.ScriptVariablesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork()
            ).ldelim();
        });
        for (const v of message.jarFileUris) {
            writer.uint32(34).string(v!);
        }
        if (message.queryFileUri !== undefined) {
            writer.uint32(42).string(message.queryFileUri);
        }
        if (message.queryList !== undefined) {
            QueryList.encode(
                message.queryList,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HiveJob {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHiveJob } as HiveJob;
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = HiveJob_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry1.value !== undefined) {
                        message.properties[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.continueOnFailure = reader.bool();
                    break;
                case 3:
                    const entry3 = HiveJob_ScriptVariablesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry3.value !== undefined) {
                        message.scriptVariables[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.jarFileUris.push(reader.string());
                    break;
                case 5:
                    message.queryFileUri = reader.string();
                    break;
                case 6:
                    message.queryList = QueryList.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HiveJob {
        const message = { ...baseHiveJob } as HiveJob;
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (
            object.continueOnFailure !== undefined &&
            object.continueOnFailure !== null
        ) {
            message.continueOnFailure = Boolean(object.continueOnFailure);
        } else {
            message.continueOnFailure = false;
        }
        if (
            object.scriptVariables !== undefined &&
            object.scriptVariables !== null
        ) {
            Object.entries(object.scriptVariables).forEach(([key, value]) => {
                message.scriptVariables[key] = String(value);
            });
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(String(e));
            }
        }
        if (object.queryFileUri !== undefined && object.queryFileUri !== null) {
            message.queryFileUri = String(object.queryFileUri);
        } else {
            message.queryFileUri = undefined;
        }
        if (object.queryList !== undefined && object.queryList !== null) {
            message.queryList = QueryList.fromJSON(object.queryList);
        } else {
            message.queryList = undefined;
        }
        return message;
    },

    toJSON(message: HiveJob): unknown {
        const obj: any = {};
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.continueOnFailure !== undefined &&
            (obj.continueOnFailure = message.continueOnFailure);
        obj.scriptVariables = {};
        if (message.scriptVariables) {
            Object.entries(message.scriptVariables).forEach(([k, v]) => {
                obj.scriptVariables[k] = v;
            });
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        } else {
            obj.jarFileUris = [];
        }
        message.queryFileUri !== undefined &&
            (obj.queryFileUri = message.queryFileUri);
        message.queryList !== undefined &&
            (obj.queryList = message.queryList
                ? QueryList.toJSON(message.queryList)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HiveJob>): HiveJob {
        const message = { ...baseHiveJob } as HiveJob;
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (
            object.continueOnFailure !== undefined &&
            object.continueOnFailure !== null
        ) {
            message.continueOnFailure = object.continueOnFailure;
        } else {
            message.continueOnFailure = false;
        }
        if (
            object.scriptVariables !== undefined &&
            object.scriptVariables !== null
        ) {
            Object.entries(object.scriptVariables).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.scriptVariables[key] = String(value);
                }
            });
        }
        if (object.jarFileUris !== undefined && object.jarFileUris !== null) {
            for (const e of object.jarFileUris) {
                message.jarFileUris.push(e);
            }
        }
        if (object.queryFileUri !== undefined && object.queryFileUri !== null) {
            message.queryFileUri = object.queryFileUri;
        } else {
            message.queryFileUri = undefined;
        }
        if (object.queryList !== undefined && object.queryList !== null) {
            message.queryList = QueryList.fromPartial(object.queryList);
        } else {
            message.queryList = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(HiveJob.$type, HiveJob);

const baseHiveJob_PropertiesEntry: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.PropertiesEntry',
    key: '',
    value: '',
};

export const HiveJob_PropertiesEntry = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.PropertiesEntry' as const,

    encode(
        message: HiveJob_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HiveJob_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHiveJob_PropertiesEntry,
        } as HiveJob_PropertiesEntry;
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

    fromJSON(object: any): HiveJob_PropertiesEntry {
        const message = {
            ...baseHiveJob_PropertiesEntry,
        } as HiveJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: HiveJob_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HiveJob_PropertiesEntry>
    ): HiveJob_PropertiesEntry {
        const message = {
            ...baseHiveJob_PropertiesEntry,
        } as HiveJob_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(HiveJob_PropertiesEntry.$type, HiveJob_PropertiesEntry);

const baseHiveJob_ScriptVariablesEntry: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.ScriptVariablesEntry',
    key: '',
    value: '',
};

export const HiveJob_ScriptVariablesEntry = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveJob.ScriptVariablesEntry' as const,

    encode(
        message: HiveJob_ScriptVariablesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HiveJob_ScriptVariablesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHiveJob_ScriptVariablesEntry,
        } as HiveJob_ScriptVariablesEntry;
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

    fromJSON(object: any): HiveJob_ScriptVariablesEntry {
        const message = {
            ...baseHiveJob_ScriptVariablesEntry,
        } as HiveJob_ScriptVariablesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: HiveJob_ScriptVariablesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HiveJob_ScriptVariablesEntry>
    ): HiveJob_ScriptVariablesEntry {
        const message = {
            ...baseHiveJob_ScriptVariablesEntry,
        } as HiveJob_ScriptVariablesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    HiveJob_ScriptVariablesEntry.$type,
    HiveJob_ScriptVariablesEntry
);

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
