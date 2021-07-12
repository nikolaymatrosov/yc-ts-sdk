/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.serverless.triggers.v1';

export enum TriggerType {
    TRIGGER_TYPE_UNSPECIFIED = 0,
    /** TIMER - The trigger is activated on a timer. */
    TIMER = 2,
    /**
     * MESSAGE_QUEUE - The trigger is activated by messages from a message queue.
     *
     * Only Yandex Message Queue is currently supported.
     */
    MESSAGE_QUEUE = 3,
    /** IOT_MESSAGE - The trigger is activated by messages from Yandex IoT Core. */
    IOT_MESSAGE = 4,
    OBJECT_STORAGE = 5,
    CONTAINER_REGISTRY = 6,
    /** CLOUD_LOGS - The trigger is activated by cloud log group events */
    CLOUD_LOGS = 7,
    UNRECOGNIZED = -1,
}

export function triggerTypeFromJSON(object: any): TriggerType {
    switch (object) {
        case 0:
        case 'TRIGGER_TYPE_UNSPECIFIED':
            return TriggerType.TRIGGER_TYPE_UNSPECIFIED;
        case 2:
        case 'TIMER':
            return TriggerType.TIMER;
        case 3:
        case 'MESSAGE_QUEUE':
            return TriggerType.MESSAGE_QUEUE;
        case 4:
        case 'IOT_MESSAGE':
            return TriggerType.IOT_MESSAGE;
        case 5:
        case 'OBJECT_STORAGE':
            return TriggerType.OBJECT_STORAGE;
        case 6:
        case 'CONTAINER_REGISTRY':
            return TriggerType.CONTAINER_REGISTRY;
        case 7:
        case 'CLOUD_LOGS':
            return TriggerType.CLOUD_LOGS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TriggerType.UNRECOGNIZED;
    }
}

export function triggerTypeToJSON(object: TriggerType): string {
    switch (object) {
        case TriggerType.TRIGGER_TYPE_UNSPECIFIED:
            return 'TRIGGER_TYPE_UNSPECIFIED';
        case TriggerType.TIMER:
            return 'TIMER';
        case TriggerType.MESSAGE_QUEUE:
            return 'MESSAGE_QUEUE';
        case TriggerType.IOT_MESSAGE:
            return 'IOT_MESSAGE';
        case TriggerType.OBJECT_STORAGE:
            return 'OBJECT_STORAGE';
        case TriggerType.CONTAINER_REGISTRY:
            return 'CONTAINER_REGISTRY';
        case TriggerType.CLOUD_LOGS:
            return 'CLOUD_LOGS';
        default:
            return 'UNKNOWN';
    }
}

/** A trigger to invoke a serverless function. For more information, see [Triggers](/docs/functions/concepts/trigger). */
export interface Trigger {
    /** ID of the trigger. Generated at creation time. */
    id: string;
    /** ID of the folder that the trigger belongs to. */
    folderId: string;
    /** Creation timestamp for the trigger. */
    createdAt: Date | undefined;
    /** Name of the trigger. */
    name: string;
    /** Description of the trigger. */
    description: string;
    /** Trigger labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Rule for trigger activation (always consistent with the trigger type). */
    rule: Trigger_Rule | undefined;
    /** Trigger status. */
    status: Trigger_Status;
}

export enum Trigger_ObjectStorageEventType {
    OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,
    OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,
    OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,
    OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
    UNRECOGNIZED = -1,
}

export function trigger_ObjectStorageEventTypeFromJSON(
    object: any
): Trigger_ObjectStorageEventType {
    switch (object) {
        case 0:
        case 'OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED':
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED;
        case 1:
        case 'OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT':
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT;
        case 2:
        case 'OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT':
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT;
        case 3:
        case 'OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT':
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Trigger_ObjectStorageEventType.UNRECOGNIZED;
    }
}

export function trigger_ObjectStorageEventTypeToJSON(
    object: Trigger_ObjectStorageEventType
): string {
    switch (object) {
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED:
            return 'OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED';
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT:
            return 'OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT';
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT:
            return 'OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT';
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT:
            return 'OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT';
        default:
            return 'UNKNOWN';
    }
}

export enum Trigger_ContainerRegistryEventType {
    CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
    UNRECOGNIZED = -1,
}

export function trigger_ContainerRegistryEventTypeFromJSON(
    object: any
): Trigger_ContainerRegistryEventType {
    switch (object) {
        case 0:
        case 'CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED':
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED;
        case 1:
        case 'CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE':
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE;
        case 2:
        case 'CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE':
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE;
        case 3:
        case 'CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG':
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG;
        case 4:
        case 'CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG':
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Trigger_ContainerRegistryEventType.UNRECOGNIZED;
    }
}

export function trigger_ContainerRegistryEventTypeToJSON(
    object: Trigger_ContainerRegistryEventType
): string {
    switch (object) {
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED:
            return 'CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED';
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE:
            return 'CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE';
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE:
            return 'CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE';
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG:
            return 'CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG';
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG:
            return 'CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG';
        default:
            return 'UNKNOWN';
    }
}

export enum Trigger_Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    PAUSED = 2,
    UNRECOGNIZED = -1,
}

export function trigger_StatusFromJSON(object: any): Trigger_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Trigger_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return Trigger_Status.ACTIVE;
        case 2:
        case 'PAUSED':
            return Trigger_Status.PAUSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Trigger_Status.UNRECOGNIZED;
    }
}

export function trigger_StatusToJSON(object: Trigger_Status): string {
    switch (object) {
        case Trigger_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Trigger_Status.ACTIVE:
            return 'ACTIVE';
        case Trigger_Status.PAUSED:
            return 'PAUSED';
        default:
            return 'UNKNOWN';
    }
}

export interface Trigger_LabelsEntry {
    key: string;
    value: string;
}

/** Description of a rule for trigger activation. */
export interface Trigger_Rule {
    /** Rule for a timed trigger. */
    timer: Trigger_Timer | undefined;
    /** Rule for a message queue trigger. */
    messageQueue: Trigger_MessageQueue | undefined;
    /** Rule for a Yandex IoT Core trigger. */
    iotMessage: Trigger_IoTMessage | undefined;
    objectStorage: Trigger_ObjectStorage | undefined;
    containerRegistry: Trigger_ContainerRegistry | undefined;
    cloudLogs: Trigger_CloudLogs | undefined;
}

/** Rule for activating a timed trigger. */
export interface Trigger_Timer {
    /** Description of a schedule as a [cron expression](/docs/functions/concepts/trigger/timer). */
    cronExpression: string;
    /** Instructions for invoking a function once. */
    invokeFunction: InvokeFunctionOnce | undefined;
    invokeFunctionWithRetry: InvokeFunctionWithRetry | undefined;
}

/** Rule for activating a message queue trigger. */
export interface Trigger_MessageQueue {
    /** ID of the message queue in Yandex Message Queue. */
    queueId: string;
    /** ID of the service account which has read access to the message queue. */
    serviceAccountId: string;
    /** Batch settings for processing messages in the queue. */
    batchSettings: BatchSettings | undefined;
    /** Queue visibility timeout override. */
    visibilityTimeout: Duration | undefined;
    /** Instructions for invoking a function once. */
    invokeFunction: InvokeFunctionOnce | undefined;
}

/** Rule for activating a Yandex IoT Core trigger. */
export interface Trigger_IoTMessage {
    /** ID of the Yandex IoT Core registry. */
    registryId: string;
    /** ID of the Yandex IoT Core device in the registry. */
    deviceId: string;
    /** MQTT topic whose messages activate the trigger. */
    mqttTopic: string;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction: InvokeFunctionWithRetry | undefined;
}

export interface Trigger_ObjectStorage {
    /** Type (name) of events, at least one value is required. */
    eventType: Trigger_ObjectStorageEventType[];
    /** ID of the bucket. */
    bucketId: string;
    /** Prefix of the object key. Filter, optional. */
    prefix: string;
    /** Suffix of the object key. Filter, optional. */
    suffix: string;
    invokeFunction: InvokeFunctionWithRetry | undefined;
}

export interface Trigger_ContainerRegistry {
    /** Type (name) of events, at least one value is required. */
    eventType: Trigger_ContainerRegistryEventType[];
    /** ID of the registry. */
    registryId: string;
    /** Docker-image name. Filter, optional. */
    imageName: string;
    /** Docker-image tag. Filter, optional. */
    tag: string;
    invokeFunction: InvokeFunctionWithRetry | undefined;
}

export interface Trigger_CloudLogs {
    /** Log group identifiers, at least one value is required. */
    logGroupId: string[];
    /** Batch settings for processing log events. */
    batchSettings: CloudLogsBatchSettings | undefined;
    invokeFunction: InvokeFunctionWithRetry | undefined;
}

/** A single function invocation. */
export interface InvokeFunctionOnce {
    /** ID of the function to invoke. */
    functionId: string;
    /** Version tag of the function to execute. */
    functionTag: string;
    /** ID of the service account that should be used to invoke the function. */
    serviceAccountId: string;
}

/** A function invocation with retries. */
export interface InvokeFunctionWithRetry {
    /** ID of the function to invoke. */
    functionId: string;
    /** Version tag of the function to execute. */
    functionTag: string;
    /** ID of the service account which has permission to invoke the function. */
    serviceAccountId: string;
    /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
    retrySettings: RetrySettings | undefined;
    /** DLQ policy (no value means discarding a message). */
    deadLetterQueue: PutQueueMessage | undefined;
}

export interface PutQueueMessage {
    /** ID of the queue. */
    queueId: string;
    /** Service account which has write permission on the queue. */
    serviceAccountId: string;
}

/** Settings for batch processing of messages in a queue. */
export interface BatchSettings {
    /**
     * Batch size. Trigger will send the batch of messages to the function
     * when the number of messages in the queue reaches [size], or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages to the function when
     * the number of messages in the queue reaches [size], or the [cutoff] time has passed.
     */
    cutoff: Duration | undefined;
}

export interface CloudLogsBatchSettings {
    /**
     * Batch size. Trigger will send the batch of messages to the function
     * when the number of messages in the log group reaches [size], or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages to the function when
     * the number of messages in the log group reaches [size], or the [cutoff] time has passed.
     */
    cutoff: Duration | undefined;
}

/** Settings for retrying to invoke a function. */
export interface RetrySettings {
    /** Maximum number of retries (extra invokes) before the action is considered failed. */
    retryAttempts: number;
    /** Time in seconds to wait between individual retries. */
    interval: Duration | undefined;
}

const baseTrigger: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
};

export const Trigger = {
    encode(
        message: Trigger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Trigger_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.rule !== undefined) {
            Trigger_Rule.encode(
                message.rule,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trigger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger } as Trigger;
        message.labels = {};
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
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Trigger_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 8:
                    message.rule = Trigger_Rule.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trigger {
        const message = { ...baseTrigger } as Trigger;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = Trigger_Rule.fromJSON(object.rule);
        } else {
            message.rule = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = trigger_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        return message;
    },

    toJSON(message: Trigger): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.rule !== undefined &&
            (obj.rule = message.rule
                ? Trigger_Rule.toJSON(message.rule)
                : undefined);
        message.status !== undefined &&
            (obj.status = trigger_StatusToJSON(message.status));
        return obj;
    },

    fromPartial(object: DeepPartial<Trigger>): Trigger {
        const message = { ...baseTrigger } as Trigger;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = Trigger_Rule.fromPartial(object.rule);
        } else {
            message.rule = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        return message;
    },
};

const baseTrigger_LabelsEntry: object = { key: '', value: '' };

export const Trigger_LabelsEntry = {
    encode(
        message: Trigger_LabelsEntry,
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
    ): Trigger_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger_LabelsEntry } as Trigger_LabelsEntry;
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

    fromJSON(object: any): Trigger_LabelsEntry {
        const message = { ...baseTrigger_LabelsEntry } as Trigger_LabelsEntry;
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

    toJSON(message: Trigger_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Trigger_LabelsEntry>): Trigger_LabelsEntry {
        const message = { ...baseTrigger_LabelsEntry } as Trigger_LabelsEntry;
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

const baseTrigger_Rule: object = {};

export const Trigger_Rule = {
    encode(
        message: Trigger_Rule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.timer !== undefined) {
            Trigger_Timer.encode(
                message.timer,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.messageQueue !== undefined) {
            Trigger_MessageQueue.encode(
                message.messageQueue,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.iotMessage !== undefined) {
            Trigger_IoTMessage.encode(
                message.iotMessage,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.objectStorage !== undefined) {
            Trigger_ObjectStorage.encode(
                message.objectStorage,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.containerRegistry !== undefined) {
            Trigger_ContainerRegistry.encode(
                message.containerRegistry,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.cloudLogs !== undefined) {
            Trigger_CloudLogs.encode(
                message.cloudLogs,
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Rule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger_Rule } as Trigger_Rule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.timer = Trigger_Timer.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.messageQueue = Trigger_MessageQueue.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.iotMessage = Trigger_IoTMessage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.objectStorage = Trigger_ObjectStorage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.containerRegistry =
                        Trigger_ContainerRegistry.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 9:
                    message.cloudLogs = Trigger_CloudLogs.decode(
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

    fromJSON(object: any): Trigger_Rule {
        const message = { ...baseTrigger_Rule } as Trigger_Rule;
        if (object.timer !== undefined && object.timer !== null) {
            message.timer = Trigger_Timer.fromJSON(object.timer);
        } else {
            message.timer = undefined;
        }
        if (object.messageQueue !== undefined && object.messageQueue !== null) {
            message.messageQueue = Trigger_MessageQueue.fromJSON(
                object.messageQueue
            );
        } else {
            message.messageQueue = undefined;
        }
        if (object.iotMessage !== undefined && object.iotMessage !== null) {
            message.iotMessage = Trigger_IoTMessage.fromJSON(object.iotMessage);
        } else {
            message.iotMessage = undefined;
        }
        if (
            object.objectStorage !== undefined &&
            object.objectStorage !== null
        ) {
            message.objectStorage = Trigger_ObjectStorage.fromJSON(
                object.objectStorage
            );
        } else {
            message.objectStorage = undefined;
        }
        if (
            object.containerRegistry !== undefined &&
            object.containerRegistry !== null
        ) {
            message.containerRegistry = Trigger_ContainerRegistry.fromJSON(
                object.containerRegistry
            );
        } else {
            message.containerRegistry = undefined;
        }
        if (object.cloudLogs !== undefined && object.cloudLogs !== null) {
            message.cloudLogs = Trigger_CloudLogs.fromJSON(object.cloudLogs);
        } else {
            message.cloudLogs = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_Rule): unknown {
        const obj: any = {};
        message.timer !== undefined &&
            (obj.timer = message.timer
                ? Trigger_Timer.toJSON(message.timer)
                : undefined);
        message.messageQueue !== undefined &&
            (obj.messageQueue = message.messageQueue
                ? Trigger_MessageQueue.toJSON(message.messageQueue)
                : undefined);
        message.iotMessage !== undefined &&
            (obj.iotMessage = message.iotMessage
                ? Trigger_IoTMessage.toJSON(message.iotMessage)
                : undefined);
        message.objectStorage !== undefined &&
            (obj.objectStorage = message.objectStorage
                ? Trigger_ObjectStorage.toJSON(message.objectStorage)
                : undefined);
        message.containerRegistry !== undefined &&
            (obj.containerRegistry = message.containerRegistry
                ? Trigger_ContainerRegistry.toJSON(message.containerRegistry)
                : undefined);
        message.cloudLogs !== undefined &&
            (obj.cloudLogs = message.cloudLogs
                ? Trigger_CloudLogs.toJSON(message.cloudLogs)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Trigger_Rule>): Trigger_Rule {
        const message = { ...baseTrigger_Rule } as Trigger_Rule;
        if (object.timer !== undefined && object.timer !== null) {
            message.timer = Trigger_Timer.fromPartial(object.timer);
        } else {
            message.timer = undefined;
        }
        if (object.messageQueue !== undefined && object.messageQueue !== null) {
            message.messageQueue = Trigger_MessageQueue.fromPartial(
                object.messageQueue
            );
        } else {
            message.messageQueue = undefined;
        }
        if (object.iotMessage !== undefined && object.iotMessage !== null) {
            message.iotMessage = Trigger_IoTMessage.fromPartial(
                object.iotMessage
            );
        } else {
            message.iotMessage = undefined;
        }
        if (
            object.objectStorage !== undefined &&
            object.objectStorage !== null
        ) {
            message.objectStorage = Trigger_ObjectStorage.fromPartial(
                object.objectStorage
            );
        } else {
            message.objectStorage = undefined;
        }
        if (
            object.containerRegistry !== undefined &&
            object.containerRegistry !== null
        ) {
            message.containerRegistry = Trigger_ContainerRegistry.fromPartial(
                object.containerRegistry
            );
        } else {
            message.containerRegistry = undefined;
        }
        if (object.cloudLogs !== undefined && object.cloudLogs !== null) {
            message.cloudLogs = Trigger_CloudLogs.fromPartial(object.cloudLogs);
        } else {
            message.cloudLogs = undefined;
        }
        return message;
    },
};

const baseTrigger_Timer: object = { cronExpression: '' };

export const Trigger_Timer = {
    encode(
        message: Trigger_Timer,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cronExpression !== '') {
            writer.uint32(10).string(message.cronExpression);
        }
        if (message.invokeFunction !== undefined) {
            InvokeFunctionOnce.encode(
                message.invokeFunction,
                writer.uint32(810).fork()
            ).ldelim();
        }
        if (message.invokeFunctionWithRetry !== undefined) {
            InvokeFunctionWithRetry.encode(
                message.invokeFunctionWithRetry,
                writer.uint32(826).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Timer {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger_Timer } as Trigger_Timer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cronExpression = reader.string();
                    break;
                case 101:
                    message.invokeFunction = InvokeFunctionOnce.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 103:
                    message.invokeFunctionWithRetry =
                        InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trigger_Timer {
        const message = { ...baseTrigger_Timer } as Trigger_Timer;
        if (
            object.cronExpression !== undefined &&
            object.cronExpression !== null
        ) {
            message.cronExpression = String(object.cronExpression);
        } else {
            message.cronExpression = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionOnce.fromJSON(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        if (
            object.invokeFunctionWithRetry !== undefined &&
            object.invokeFunctionWithRetry !== null
        ) {
            message.invokeFunctionWithRetry = InvokeFunctionWithRetry.fromJSON(
                object.invokeFunctionWithRetry
            );
        } else {
            message.invokeFunctionWithRetry = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_Timer): unknown {
        const obj: any = {};
        message.cronExpression !== undefined &&
            (obj.cronExpression = message.cronExpression);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? InvokeFunctionOnce.toJSON(message.invokeFunction)
                : undefined);
        message.invokeFunctionWithRetry !== undefined &&
            (obj.invokeFunctionWithRetry = message.invokeFunctionWithRetry
                ? InvokeFunctionWithRetry.toJSON(
                      message.invokeFunctionWithRetry
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Trigger_Timer>): Trigger_Timer {
        const message = { ...baseTrigger_Timer } as Trigger_Timer;
        if (
            object.cronExpression !== undefined &&
            object.cronExpression !== null
        ) {
            message.cronExpression = object.cronExpression;
        } else {
            message.cronExpression = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionOnce.fromPartial(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        if (
            object.invokeFunctionWithRetry !== undefined &&
            object.invokeFunctionWithRetry !== null
        ) {
            message.invokeFunctionWithRetry =
                InvokeFunctionWithRetry.fromPartial(
                    object.invokeFunctionWithRetry
                );
        } else {
            message.invokeFunctionWithRetry = undefined;
        }
        return message;
    },
};

const baseTrigger_MessageQueue: object = { queueId: '', serviceAccountId: '' };

export const Trigger_MessageQueue = {
    encode(
        message: Trigger_MessageQueue,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.queueId !== '') {
            writer.uint32(90).string(message.queueId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            BatchSettings.encode(
                message.batchSettings,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.visibilityTimeout !== undefined) {
            Duration.encode(
                message.visibilityTimeout,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.invokeFunction !== undefined) {
            InvokeFunctionOnce.encode(
                message.invokeFunction,
                writer.uint32(810).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Trigger_MessageQueue {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger_MessageQueue } as Trigger_MessageQueue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 11:
                    message.queueId = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.batchSettings = BatchSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.visibilityTimeout = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 101:
                    message.invokeFunction = InvokeFunctionOnce.decode(
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

    fromJSON(object: any): Trigger_MessageQueue {
        const message = { ...baseTrigger_MessageQueue } as Trigger_MessageQueue;
        if (object.queueId !== undefined && object.queueId !== null) {
            message.queueId = String(object.queueId);
        } else {
            message.queueId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.batchSettings !== undefined &&
            object.batchSettings !== null
        ) {
            message.batchSettings = BatchSettings.fromJSON(
                object.batchSettings
            );
        } else {
            message.batchSettings = undefined;
        }
        if (
            object.visibilityTimeout !== undefined &&
            object.visibilityTimeout !== null
        ) {
            message.visibilityTimeout = Duration.fromJSON(
                object.visibilityTimeout
            );
        } else {
            message.visibilityTimeout = undefined;
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionOnce.fromJSON(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_MessageQueue): unknown {
        const obj: any = {};
        message.queueId !== undefined && (obj.queueId = message.queueId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? BatchSettings.toJSON(message.batchSettings)
                : undefined);
        message.visibilityTimeout !== undefined &&
            (obj.visibilityTimeout = message.visibilityTimeout
                ? Duration.toJSON(message.visibilityTimeout)
                : undefined);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? InvokeFunctionOnce.toJSON(message.invokeFunction)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Trigger_MessageQueue>
    ): Trigger_MessageQueue {
        const message = { ...baseTrigger_MessageQueue } as Trigger_MessageQueue;
        if (object.queueId !== undefined && object.queueId !== null) {
            message.queueId = object.queueId;
        } else {
            message.queueId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.batchSettings !== undefined &&
            object.batchSettings !== null
        ) {
            message.batchSettings = BatchSettings.fromPartial(
                object.batchSettings
            );
        } else {
            message.batchSettings = undefined;
        }
        if (
            object.visibilityTimeout !== undefined &&
            object.visibilityTimeout !== null
        ) {
            message.visibilityTimeout = Duration.fromPartial(
                object.visibilityTimeout
            );
        } else {
            message.visibilityTimeout = undefined;
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionOnce.fromPartial(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },
};

const baseTrigger_IoTMessage: object = {
    registryId: '',
    deviceId: '',
    mqttTopic: '',
};

export const Trigger_IoTMessage = {
    encode(
        message: Trigger_IoTMessage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.deviceId !== '') {
            writer.uint32(18).string(message.deviceId);
        }
        if (message.mqttTopic !== '') {
            writer.uint32(26).string(message.mqttTopic);
        }
        if (message.invokeFunction !== undefined) {
            InvokeFunctionWithRetry.encode(
                message.invokeFunction,
                writer.uint32(810).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Trigger_IoTMessage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger_IoTMessage } as Trigger_IoTMessage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.mqttTopic = reader.string();
                    break;
                case 101:
                    message.invokeFunction = InvokeFunctionWithRetry.decode(
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

    fromJSON(object: any): Trigger_IoTMessage {
        const message = { ...baseTrigger_IoTMessage } as Trigger_IoTMessage;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.mqttTopic !== undefined && object.mqttTopic !== null) {
            message.mqttTopic = String(object.mqttTopic);
        } else {
            message.mqttTopic = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromJSON(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_IoTMessage): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.mqttTopic !== undefined && (obj.mqttTopic = message.mqttTopic);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Trigger_IoTMessage>): Trigger_IoTMessage {
        const message = { ...baseTrigger_IoTMessage } as Trigger_IoTMessage;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.mqttTopic !== undefined && object.mqttTopic !== null) {
            message.mqttTopic = object.mqttTopic;
        } else {
            message.mqttTopic = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromPartial(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },
};

const baseTrigger_ObjectStorage: object = {
    eventType: 0,
    bucketId: '',
    prefix: '',
    suffix: '',
};

export const Trigger_ObjectStorage = {
    encode(
        message: Trigger_ObjectStorage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        writer.uint32(26).fork();
        for (const v of message.eventType) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.bucketId !== '') {
            writer.uint32(34).string(message.bucketId);
        }
        if (message.prefix !== '') {
            writer.uint32(50).string(message.prefix);
        }
        if (message.suffix !== '') {
            writer.uint32(58).string(message.suffix);
        }
        if (message.invokeFunction !== undefined) {
            InvokeFunctionWithRetry.encode(
                message.invokeFunction,
                writer.uint32(810).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Trigger_ObjectStorage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTrigger_ObjectStorage,
        } as Trigger_ObjectStorage;
        message.eventType = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.eventType.push(reader.int32() as any);
                        }
                    } else {
                        message.eventType.push(reader.int32() as any);
                    }
                    break;
                case 4:
                    message.bucketId = reader.string();
                    break;
                case 6:
                    message.prefix = reader.string();
                    break;
                case 7:
                    message.suffix = reader.string();
                    break;
                case 101:
                    message.invokeFunction = InvokeFunctionWithRetry.decode(
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

    fromJSON(object: any): Trigger_ObjectStorage {
        const message = {
            ...baseTrigger_ObjectStorage,
        } as Trigger_ObjectStorage;
        message.eventType = [];
        if (object.eventType !== undefined && object.eventType !== null) {
            for (const e of object.eventType) {
                message.eventType.push(
                    trigger_ObjectStorageEventTypeFromJSON(e)
                );
            }
        }
        if (object.bucketId !== undefined && object.bucketId !== null) {
            message.bucketId = String(object.bucketId);
        } else {
            message.bucketId = '';
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = String(object.prefix);
        } else {
            message.prefix = '';
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = String(object.suffix);
        } else {
            message.suffix = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromJSON(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_ObjectStorage): unknown {
        const obj: any = {};
        if (message.eventType) {
            obj.eventType = message.eventType.map((e) =>
                trigger_ObjectStorageEventTypeToJSON(e)
            );
        } else {
            obj.eventType = [];
        }
        message.bucketId !== undefined && (obj.bucketId = message.bucketId);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.suffix !== undefined && (obj.suffix = message.suffix);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Trigger_ObjectStorage>
    ): Trigger_ObjectStorage {
        const message = {
            ...baseTrigger_ObjectStorage,
        } as Trigger_ObjectStorage;
        message.eventType = [];
        if (object.eventType !== undefined && object.eventType !== null) {
            for (const e of object.eventType) {
                message.eventType.push(e);
            }
        }
        if (object.bucketId !== undefined && object.bucketId !== null) {
            message.bucketId = object.bucketId;
        } else {
            message.bucketId = '';
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        } else {
            message.prefix = '';
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = object.suffix;
        } else {
            message.suffix = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromPartial(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },
};

const baseTrigger_ContainerRegistry: object = {
    eventType: 0,
    registryId: '',
    imageName: '',
    tag: '',
};

export const Trigger_ContainerRegistry = {
    encode(
        message: Trigger_ContainerRegistry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        writer.uint32(26).fork();
        for (const v of message.eventType) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.registryId !== '') {
            writer.uint32(34).string(message.registryId);
        }
        if (message.imageName !== '') {
            writer.uint32(42).string(message.imageName);
        }
        if (message.tag !== '') {
            writer.uint32(50).string(message.tag);
        }
        if (message.invokeFunction !== undefined) {
            InvokeFunctionWithRetry.encode(
                message.invokeFunction,
                writer.uint32(810).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Trigger_ContainerRegistry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTrigger_ContainerRegistry,
        } as Trigger_ContainerRegistry;
        message.eventType = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.eventType.push(reader.int32() as any);
                        }
                    } else {
                        message.eventType.push(reader.int32() as any);
                    }
                    break;
                case 4:
                    message.registryId = reader.string();
                    break;
                case 5:
                    message.imageName = reader.string();
                    break;
                case 6:
                    message.tag = reader.string();
                    break;
                case 101:
                    message.invokeFunction = InvokeFunctionWithRetry.decode(
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

    fromJSON(object: any): Trigger_ContainerRegistry {
        const message = {
            ...baseTrigger_ContainerRegistry,
        } as Trigger_ContainerRegistry;
        message.eventType = [];
        if (object.eventType !== undefined && object.eventType !== null) {
            for (const e of object.eventType) {
                message.eventType.push(
                    trigger_ContainerRegistryEventTypeFromJSON(e)
                );
            }
        }
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.imageName !== undefined && object.imageName !== null) {
            message.imageName = String(object.imageName);
        } else {
            message.imageName = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        } else {
            message.tag = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromJSON(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_ContainerRegistry): unknown {
        const obj: any = {};
        if (message.eventType) {
            obj.eventType = message.eventType.map((e) =>
                trigger_ContainerRegistryEventTypeToJSON(e)
            );
        } else {
            obj.eventType = [];
        }
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.imageName !== undefined && (obj.imageName = message.imageName);
        message.tag !== undefined && (obj.tag = message.tag);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Trigger_ContainerRegistry>
    ): Trigger_ContainerRegistry {
        const message = {
            ...baseTrigger_ContainerRegistry,
        } as Trigger_ContainerRegistry;
        message.eventType = [];
        if (object.eventType !== undefined && object.eventType !== null) {
            for (const e of object.eventType) {
                message.eventType.push(e);
            }
        }
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.imageName !== undefined && object.imageName !== null) {
            message.imageName = object.imageName;
        } else {
            message.imageName = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        } else {
            message.tag = '';
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromPartial(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },
};

const baseTrigger_CloudLogs: object = { logGroupId: '' };

export const Trigger_CloudLogs = {
    encode(
        message: Trigger_CloudLogs,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.logGroupId) {
            writer.uint32(10).string(v!);
        }
        if (message.batchSettings !== undefined) {
            CloudLogsBatchSettings.encode(
                message.batchSettings,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.invokeFunction !== undefined) {
            InvokeFunctionWithRetry.encode(
                message.invokeFunction,
                writer.uint32(810).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_CloudLogs {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrigger_CloudLogs } as Trigger_CloudLogs;
        message.logGroupId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId.push(reader.string());
                    break;
                case 2:
                    message.batchSettings = CloudLogsBatchSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 101:
                    message.invokeFunction = InvokeFunctionWithRetry.decode(
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

    fromJSON(object: any): Trigger_CloudLogs {
        const message = { ...baseTrigger_CloudLogs } as Trigger_CloudLogs;
        message.logGroupId = [];
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            for (const e of object.logGroupId) {
                message.logGroupId.push(String(e));
            }
        }
        if (
            object.batchSettings !== undefined &&
            object.batchSettings !== null
        ) {
            message.batchSettings = CloudLogsBatchSettings.fromJSON(
                object.batchSettings
            );
        } else {
            message.batchSettings = undefined;
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromJSON(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },

    toJSON(message: Trigger_CloudLogs): unknown {
        const obj: any = {};
        if (message.logGroupId) {
            obj.logGroupId = message.logGroupId.map((e) => e);
        } else {
            obj.logGroupId = [];
        }
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? CloudLogsBatchSettings.toJSON(message.batchSettings)
                : undefined);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Trigger_CloudLogs>): Trigger_CloudLogs {
        const message = { ...baseTrigger_CloudLogs } as Trigger_CloudLogs;
        message.logGroupId = [];
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            for (const e of object.logGroupId) {
                message.logGroupId.push(e);
            }
        }
        if (
            object.batchSettings !== undefined &&
            object.batchSettings !== null
        ) {
            message.batchSettings = CloudLogsBatchSettings.fromPartial(
                object.batchSettings
            );
        } else {
            message.batchSettings = undefined;
        }
        if (
            object.invokeFunction !== undefined &&
            object.invokeFunction !== null
        ) {
            message.invokeFunction = InvokeFunctionWithRetry.fromPartial(
                object.invokeFunction
            );
        } else {
            message.invokeFunction = undefined;
        }
        return message;
    },
};

const baseInvokeFunctionOnce: object = {
    functionId: '',
    functionTag: '',
    serviceAccountId: '',
};

export const InvokeFunctionOnce = {
    encode(
        message: InvokeFunctionOnce,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionTag !== '') {
            writer.uint32(18).string(message.functionTag);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InvokeFunctionOnce {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInvokeFunctionOnce } as InvokeFunctionOnce;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.functionTag = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InvokeFunctionOnce {
        const message = { ...baseInvokeFunctionOnce } as InvokeFunctionOnce;
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        } else {
            message.functionId = '';
        }
        if (object.functionTag !== undefined && object.functionTag !== null) {
            message.functionTag = String(object.functionTag);
        } else {
            message.functionTag = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: InvokeFunctionOnce): unknown {
        const obj: any = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.functionTag !== undefined &&
            (obj.functionTag = message.functionTag);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(object: DeepPartial<InvokeFunctionOnce>): InvokeFunctionOnce {
        const message = { ...baseInvokeFunctionOnce } as InvokeFunctionOnce;
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        } else {
            message.functionId = '';
        }
        if (object.functionTag !== undefined && object.functionTag !== null) {
            message.functionTag = object.functionTag;
        } else {
            message.functionTag = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

const baseInvokeFunctionWithRetry: object = {
    functionId: '',
    functionTag: '',
    serviceAccountId: '',
};

export const InvokeFunctionWithRetry = {
    encode(
        message: InvokeFunctionWithRetry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionTag !== '') {
            writer.uint32(18).string(message.functionTag);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.retrySettings !== undefined) {
            RetrySettings.encode(
                message.retrySettings,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.deadLetterQueue !== undefined) {
            PutQueueMessage.encode(
                message.deadLetterQueue,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InvokeFunctionWithRetry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInvokeFunctionWithRetry,
        } as InvokeFunctionWithRetry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.functionTag = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.retrySettings = RetrySettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.deadLetterQueue = PutQueueMessage.decode(
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

    fromJSON(object: any): InvokeFunctionWithRetry {
        const message = {
            ...baseInvokeFunctionWithRetry,
        } as InvokeFunctionWithRetry;
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        } else {
            message.functionId = '';
        }
        if (object.functionTag !== undefined && object.functionTag !== null) {
            message.functionTag = String(object.functionTag);
        } else {
            message.functionTag = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.retrySettings !== undefined &&
            object.retrySettings !== null
        ) {
            message.retrySettings = RetrySettings.fromJSON(
                object.retrySettings
            );
        } else {
            message.retrySettings = undefined;
        }
        if (
            object.deadLetterQueue !== undefined &&
            object.deadLetterQueue !== null
        ) {
            message.deadLetterQueue = PutQueueMessage.fromJSON(
                object.deadLetterQueue
            );
        } else {
            message.deadLetterQueue = undefined;
        }
        return message;
    },

    toJSON(message: InvokeFunctionWithRetry): unknown {
        const obj: any = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.functionTag !== undefined &&
            (obj.functionTag = message.functionTag);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.retrySettings !== undefined &&
            (obj.retrySettings = message.retrySettings
                ? RetrySettings.toJSON(message.retrySettings)
                : undefined);
        message.deadLetterQueue !== undefined &&
            (obj.deadLetterQueue = message.deadLetterQueue
                ? PutQueueMessage.toJSON(message.deadLetterQueue)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<InvokeFunctionWithRetry>
    ): InvokeFunctionWithRetry {
        const message = {
            ...baseInvokeFunctionWithRetry,
        } as InvokeFunctionWithRetry;
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        } else {
            message.functionId = '';
        }
        if (object.functionTag !== undefined && object.functionTag !== null) {
            message.functionTag = object.functionTag;
        } else {
            message.functionTag = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.retrySettings !== undefined &&
            object.retrySettings !== null
        ) {
            message.retrySettings = RetrySettings.fromPartial(
                object.retrySettings
            );
        } else {
            message.retrySettings = undefined;
        }
        if (
            object.deadLetterQueue !== undefined &&
            object.deadLetterQueue !== null
        ) {
            message.deadLetterQueue = PutQueueMessage.fromPartial(
                object.deadLetterQueue
            );
        } else {
            message.deadLetterQueue = undefined;
        }
        return message;
    },
};

const basePutQueueMessage: object = { queueId: '', serviceAccountId: '' };

export const PutQueueMessage = {
    encode(
        message: PutQueueMessage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.queueId !== '') {
            writer.uint32(90).string(message.queueId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PutQueueMessage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePutQueueMessage } as PutQueueMessage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 11:
                    message.queueId = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PutQueueMessage {
        const message = { ...basePutQueueMessage } as PutQueueMessage;
        if (object.queueId !== undefined && object.queueId !== null) {
            message.queueId = String(object.queueId);
        } else {
            message.queueId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: PutQueueMessage): unknown {
        const obj: any = {};
        message.queueId !== undefined && (obj.queueId = message.queueId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(object: DeepPartial<PutQueueMessage>): PutQueueMessage {
        const message = { ...basePutQueueMessage } as PutQueueMessage;
        if (object.queueId !== undefined && object.queueId !== null) {
            message.queueId = object.queueId;
        } else {
            message.queueId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

const baseBatchSettings: object = { size: 0 };

export const BatchSettings = {
    encode(
        message: BatchSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.cutoff !== undefined) {
            Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchSettings } as BatchSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.cutoff = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchSettings {
        const message = { ...baseBatchSettings } as BatchSettings;
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        } else {
            message.size = 0;
        }
        if (object.cutoff !== undefined && object.cutoff !== null) {
            message.cutoff = Duration.fromJSON(object.cutoff);
        } else {
            message.cutoff = undefined;
        }
        return message;
    },

    toJSON(message: BatchSettings): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = message.size);
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff
                ? Duration.toJSON(message.cutoff)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BatchSettings>): BatchSettings {
        const message = { ...baseBatchSettings } as BatchSettings;
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            message.size = 0;
        }
        if (object.cutoff !== undefined && object.cutoff !== null) {
            message.cutoff = Duration.fromPartial(object.cutoff);
        } else {
            message.cutoff = undefined;
        }
        return message;
    },
};

const baseCloudLogsBatchSettings: object = { size: 0 };

export const CloudLogsBatchSettings = {
    encode(
        message: CloudLogsBatchSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.cutoff !== undefined) {
            Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CloudLogsBatchSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCloudLogsBatchSettings,
        } as CloudLogsBatchSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.cutoff = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudLogsBatchSettings {
        const message = {
            ...baseCloudLogsBatchSettings,
        } as CloudLogsBatchSettings;
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        } else {
            message.size = 0;
        }
        if (object.cutoff !== undefined && object.cutoff !== null) {
            message.cutoff = Duration.fromJSON(object.cutoff);
        } else {
            message.cutoff = undefined;
        }
        return message;
    },

    toJSON(message: CloudLogsBatchSettings): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = message.size);
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff
                ? Duration.toJSON(message.cutoff)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CloudLogsBatchSettings>
    ): CloudLogsBatchSettings {
        const message = {
            ...baseCloudLogsBatchSettings,
        } as CloudLogsBatchSettings;
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            message.size = 0;
        }
        if (object.cutoff !== undefined && object.cutoff !== null) {
            message.cutoff = Duration.fromPartial(object.cutoff);
        } else {
            message.cutoff = undefined;
        }
        return message;
    },
};

const baseRetrySettings: object = { retryAttempts: 0 };

export const RetrySettings = {
    encode(
        message: RetrySettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.retryAttempts !== 0) {
            writer.uint32(8).int64(message.retryAttempts);
        }
        if (message.interval !== undefined) {
            Duration.encode(
                message.interval,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RetrySettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRetrySettings } as RetrySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.retryAttempts = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.interval = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RetrySettings {
        const message = { ...baseRetrySettings } as RetrySettings;
        if (
            object.retryAttempts !== undefined &&
            object.retryAttempts !== null
        ) {
            message.retryAttempts = Number(object.retryAttempts);
        } else {
            message.retryAttempts = 0;
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromJSON(object.interval);
        } else {
            message.interval = undefined;
        }
        return message;
    },

    toJSON(message: RetrySettings): unknown {
        const obj: any = {};
        message.retryAttempts !== undefined &&
            (obj.retryAttempts = message.retryAttempts);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? Duration.toJSON(message.interval)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<RetrySettings>): RetrySettings {
        const message = { ...baseRetrySettings } as RetrySettings;
        if (
            object.retryAttempts !== undefined &&
            object.retryAttempts !== null
        ) {
            message.retryAttempts = object.retryAttempts;
        } else {
            message.retryAttempts = 0;
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromPartial(object.interval);
        } else {
            message.interval = undefined;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
