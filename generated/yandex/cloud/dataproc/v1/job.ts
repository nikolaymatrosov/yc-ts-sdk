/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.dataproc.v1';

/** A Data Proc job. For details about the concept, see [documentation](/docs/dataproc/concepts/jobs). */
export interface Job {
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
}

export enum Job_Status {
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

export interface MapreduceJob {
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
    properties: { [key: string]: string };
    /** HCFS URI of the .jar file containing the driver class. */
    mainJarFileUri: string | undefined;
    /** The name of the driver class. */
    mainClass: string | undefined;
}

export interface MapreduceJob_PropertiesEntry {
    key: string;
    value: string;
}

export interface SparkJob {
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
    properties: { [key: string]: string };
    /** The HCFS URI of the JAR file containing the `main` class for the job. */
    mainJarFileUri: string;
    /** The name of the driver class. */
    mainClass: string;
}

export interface SparkJob_PropertiesEntry {
    key: string;
    value: string;
}

export interface PysparkJob {
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
    properties: { [key: string]: string };
    /** URI of the file with the driver code. Must be a .py file. */
    mainPythonFileUri: string;
    /** URIs of Python files to pass to the PySpark framework. */
    pythonFileUris: string[];
}

export interface PysparkJob_PropertiesEntry {
    key: string;
    value: string;
}

export interface QueryList {
    /** List of Hive queries. */
    queries: string[];
}

export interface HiveJob {
    /** Property names and values, used to configure Data Proc and Hive. */
    properties: { [key: string]: string };
    /** Flag indicating whether a job should continue to run if a query fails. */
    continueOnFailure: boolean;
    /** Query variables and their values. */
    scriptVariables: { [key: string]: string };
    /** JAR file URIs to add to CLASSPATH of the Hive driver and each task. */
    jarFileUris: string[];
    /** URI of the script with all the necessary Hive queries. */
    queryFileUri: string | undefined;
    /** List of Hive queries to be used in the job. */
    queryList: QueryList | undefined;
}

export interface HiveJob_PropertiesEntry {
    key: string;
    value: string;
}

export interface HiveJob_ScriptVariablesEntry {
    key: string;
    value: string;
}

const baseJob: object = {
    id: '',
    clusterId: '',
    name: '',
    createdBy: '',
    status: 0,
};

export const Job = {
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
        return message;
    },
};

const baseMapreduceJob: object = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
};

export const MapreduceJob = {
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
                { key: key as any, value },
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

const baseMapreduceJob_PropertiesEntry: object = { key: '', value: '' };

export const MapreduceJob_PropertiesEntry = {
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

const baseSparkJob: object = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainJarFileUri: '',
    mainClass: '',
};

export const SparkJob = {
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
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.mainJarFileUri !== '') {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== '') {
            writer.uint32(58).string(message.mainClass);
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
        return obj;
    },

    fromPartial(object: DeepPartial<SparkJob>): SparkJob {
        const message = { ...baseSparkJob } as SparkJob;
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
            message.mainJarFileUri = '';
        }
        if (object.mainClass !== undefined && object.mainClass !== null) {
            message.mainClass = object.mainClass;
        } else {
            message.mainClass = '';
        }
        return message;
    },
};

const baseSparkJob_PropertiesEntry: object = { key: '', value: '' };

export const SparkJob_PropertiesEntry = {
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

const basePysparkJob: object = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainPythonFileUri: '',
    pythonFileUris: '',
};

export const PysparkJob = {
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
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.mainPythonFileUri !== '') {
            writer.uint32(50).string(message.mainPythonFileUri);
        }
        for (const v of message.pythonFileUris) {
            writer.uint32(58).string(v!);
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
        return message;
    },
};

const basePysparkJob_PropertiesEntry: object = { key: '', value: '' };

export const PysparkJob_PropertiesEntry = {
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

const baseQueryList: object = { queries: '' };

export const QueryList = {
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

const baseHiveJob: object = { continueOnFailure: false, jarFileUris: '' };

export const HiveJob = {
    encode(
        message: HiveJob,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        Object.entries(message.properties).forEach(([key, value]) => {
            HiveJob_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork()
            ).ldelim();
        });
        if (message.continueOnFailure === true) {
            writer.uint32(16).bool(message.continueOnFailure);
        }
        Object.entries(message.scriptVariables).forEach(([key, value]) => {
            HiveJob_ScriptVariablesEntry.encode(
                { key: key as any, value },
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

const baseHiveJob_PropertiesEntry: object = { key: '', value: '' };

export const HiveJob_PropertiesEntry = {
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

const baseHiveJob_ScriptVariablesEntry: object = { key: '', value: '' };

export const HiveJob_ScriptVariablesEntry = {
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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
