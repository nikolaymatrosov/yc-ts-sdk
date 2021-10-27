import { Duration } from '../../../../../google/protobuf/duration';
import { LogLevel_Level } from '../../../../../yandex/cloud/logging/v1/log_entry';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.triggers.v1";
export declare enum TriggerType {
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
    /** LOGGING - The trigger is activated by logging group events */
    LOGGING = 8,
    /** BILLING_BUDGET - The trigger is activated by billing events */
    BILLING_BUDGET = 9,
    /** YDS - The trigger is activated by YDS events */
    YDS = 10,
    UNRECOGNIZED = -1
}
export declare function triggerTypeFromJSON(object: any): TriggerType;
export declare function triggerTypeToJSON(object: TriggerType): string;
/** A trigger to invoke a serverless function. For more information, see [Triggers](/docs/functions/concepts/trigger). */
export interface Trigger {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger';
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
    labels: {
        [key: string]: string;
    };
    /** Rule for trigger activation (always consistent with the trigger type). */
    rule: Trigger_Rule | undefined;
    /** Trigger status. */
    status: Trigger_Status;
}
export declare enum Trigger_ObjectStorageEventType {
    OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,
    OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,
    OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,
    OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
    UNRECOGNIZED = -1
}
export declare function trigger_ObjectStorageEventTypeFromJSON(object: any): Trigger_ObjectStorageEventType;
export declare function trigger_ObjectStorageEventTypeToJSON(object: Trigger_ObjectStorageEventType): string;
export declare enum Trigger_ContainerRegistryEventType {
    CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
    UNRECOGNIZED = -1
}
export declare function trigger_ContainerRegistryEventTypeFromJSON(object: any): Trigger_ContainerRegistryEventType;
export declare function trigger_ContainerRegistryEventTypeToJSON(object: Trigger_ContainerRegistryEventType): string;
export declare enum Trigger_Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    PAUSED = 2,
    UNRECOGNIZED = -1
}
export declare function trigger_StatusFromJSON(object: any): Trigger_Status;
export declare function trigger_StatusToJSON(object: Trigger_Status): string;
export interface Trigger_LabelsEntry {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry';
    key: string;
    value: string;
}
/** Description of a rule for trigger activation. */
export interface Trigger_Rule {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.Rule';
    /** Rule for a timed trigger. */
    timer: Trigger_Timer | undefined;
    /** Rule for a message queue trigger. */
    messageQueue: Trigger_MessageQueue | undefined;
    /** Rule for a Yandex IoT Core trigger. */
    iotMessage: Trigger_IoTMessage | undefined;
    objectStorage: Trigger_ObjectStorage | undefined;
    containerRegistry: Trigger_ContainerRegistry | undefined;
    cloudLogs: Trigger_CloudLogs | undefined;
    logging: Trigger_Logging | undefined;
    billingBudget: BillingBudget | undefined;
    dataStream: DataStream | undefined;
}
/** Rule for activating a timed trigger. */
export interface Trigger_Timer {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.Timer';
    /** Description of a schedule as a [cron expression](/docs/functions/concepts/trigger/timer). */
    cronExpression: string;
    /** Instructions for invoking a function once. */
    invokeFunction: InvokeFunctionOnce | undefined;
    /** Instructions for invoking a function with retry. */
    invokeFunctionWithRetry: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retry. */
    invokeContainerWithRetry: InvokeContainerWithRetry | undefined;
}
/** Rule for activating a message queue trigger. */
export interface Trigger_MessageQueue {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue';
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
    /** Instructions for invoking a container once. */
    invokeContainer: InvokeContainerOnce | undefined;
}
/** Rule for activating a Yandex IoT Core trigger. */
export interface Trigger_IoTMessage {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage';
    /** ID of the Yandex IoT Core registry. */
    registryId: string;
    /** ID of the Yandex IoT Core device in the registry. */
    deviceId: string;
    /** MQTT topic whose messages activate the trigger. */
    mqttTopic: string;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer: InvokeContainerWithRetry | undefined;
}
export interface Trigger_ObjectStorage {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage';
    /** Type (name) of events, at least one value is required. */
    eventType: Trigger_ObjectStorageEventType[];
    /** ID of the bucket. */
    bucketId: string;
    /** Prefix of the object key. Filter, optional. */
    prefix: string;
    /** Suffix of the object key. Filter, optional. */
    suffix: string;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer: InvokeContainerWithRetry | undefined;
}
export interface Trigger_ContainerRegistry {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry';
    /** Type (name) of events, at least one value is required. */
    eventType: Trigger_ContainerRegistryEventType[];
    /** ID of the registry. */
    registryId: string;
    /** Docker-image name. Filter, optional. */
    imageName: string;
    /** Docker-image tag. Filter, optional. */
    tag: string;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer: InvokeContainerWithRetry | undefined;
}
export interface Trigger_CloudLogs {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs';
    /** Log group identifiers, at least one value is required. */
    logGroupId: string[];
    /** Batch settings for processing log events. */
    batchSettings: CloudLogsBatchSettings | undefined;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer: InvokeContainerWithRetry | undefined;
}
export interface Trigger_Logging {
    $type: 'yandex.cloud.serverless.triggers.v1.Trigger.Logging';
    /** Log events filter settings. */
    logGroupId: string;
    resourceType: string[];
    resourceId: string[];
    levels: LogLevel_Level[];
    /** Batch settings for processing log events. */
    batchSettings: LoggingBatchSettings | undefined;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer: InvokeContainerWithRetry | undefined;
}
/** A single function invocation. */
export interface InvokeFunctionOnce {
    $type: 'yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce';
    /** ID of the function to invoke. */
    functionId: string;
    /** Version tag of the function to execute. */
    functionTag: string;
    /** ID of the service account that should be used to invoke the function. */
    serviceAccountId: string;
}
/** A function invocation with retries. */
export interface InvokeFunctionWithRetry {
    $type: 'yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry';
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
/** A single container invocation. */
export interface InvokeContainerOnce {
    $type: 'yandex.cloud.serverless.triggers.v1.InvokeContainerOnce';
    /** ID of the container to invoke. */
    containerId: string;
    /** Endpoint HTTP path to invoke. */
    path: string;
    /** ID of the service account which has permission to invoke the container. */
    serviceAccountId: string;
}
/** A container invocation with retries. */
export interface InvokeContainerWithRetry {
    $type: 'yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry';
    /** ID of the container to invoke. */
    containerId: string;
    /** Endpoint HTTP path to invoke. */
    path: string;
    /** ID of the service account which has permission to invoke the container. */
    serviceAccountId: string;
    /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
    retrySettings: RetrySettings | undefined;
    /** DLQ policy (no value means discarding a message). */
    deadLetterQueue: PutQueueMessage | undefined;
}
export interface PutQueueMessage {
    $type: 'yandex.cloud.serverless.triggers.v1.PutQueueMessage';
    /** ID of the queue. */
    queueId: string;
    /** Service account which has write permission on the queue. */
    serviceAccountId: string;
}
/** Settings for batch processing of messages in a queue. */
export interface BatchSettings {
    $type: 'yandex.cloud.serverless.triggers.v1.BatchSettings';
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
    $type: 'yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings';
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
export interface LoggingBatchSettings {
    $type: 'yandex.cloud.serverless.triggers.v1.LoggingBatchSettings';
    /**
     * Batch size. Trigger will send the batch of messages to the associated function
     * when the number of log events reaches this value, or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages the time since the last batch
     * exceeds the `cutoff` value, regardless of the amount of log events.
     */
    cutoff: Duration | undefined;
}
/** Settings for retrying to invoke a function. */
export interface RetrySettings {
    $type: 'yandex.cloud.serverless.triggers.v1.RetrySettings';
    /** Maximum number of retries (extra invokes) before the action is considered failed. */
    retryAttempts: number;
    /** Time in seconds to wait between individual retries. */
    interval: Duration | undefined;
}
export interface BillingBudget {
    $type: 'yandex.cloud.serverless.triggers.v1.BillingBudget';
    billingAccountId: string;
    budgetId: string;
    invokeFunction: InvokeFunctionWithRetry | undefined;
    invokeContainer: InvokeContainerWithRetry | undefined;
}
export interface DataStreamBatchSettings {
    $type: 'yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings';
    /**
     * Batch size in bytes. Trigger will send the batch of messages to the associated function
     * when size of log events reaches this value, or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages the time since the last batch
     * exceeds the `cutoff` value, regardless of the amount of log events.
     */
    cutoff: Duration | undefined;
}
export interface DataStream {
    $type: 'yandex.cloud.serverless.triggers.v1.DataStream';
    /** Data stream endpoint. */
    endpoint: string;
    /** Data stream database. */
    database: string;
    /** Stream name. */
    stream: string;
    /** ID of the service account which has permission to read data stream. */
    serviceAccountId: string;
    /** Batch settings for processing events. */
    batchSettings: DataStreamBatchSettings | undefined;
    invokeFunction: InvokeFunctionWithRetry | undefined;
    invokeContainer: InvokeContainerWithRetry | undefined;
}
export declare const Trigger: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger";
    encode(message: Trigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger;
    fromJSON(object: any): Trigger;
    toJSON(message: Trigger): unknown;
    fromPartial(object: DeepPartial<Trigger>): Trigger;
};
export declare const Trigger_LabelsEntry: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry";
    encode(message: Trigger_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_LabelsEntry;
    fromJSON(object: any): Trigger_LabelsEntry;
    toJSON(message: Trigger_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Trigger_LabelsEntry>): Trigger_LabelsEntry;
};
export declare const Trigger_Rule: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule";
    encode(message: Trigger_Rule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_Rule;
    fromJSON(object: any): Trigger_Rule;
    toJSON(message: Trigger_Rule): unknown;
    fromPartial(object: DeepPartial<Trigger_Rule>): Trigger_Rule;
};
export declare const Trigger_Timer: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer";
    encode(message: Trigger_Timer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_Timer;
    fromJSON(object: any): Trigger_Timer;
    toJSON(message: Trigger_Timer): unknown;
    fromPartial(object: DeepPartial<Trigger_Timer>): Trigger_Timer;
};
export declare const Trigger_MessageQueue: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue";
    encode(message: Trigger_MessageQueue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_MessageQueue;
    fromJSON(object: any): Trigger_MessageQueue;
    toJSON(message: Trigger_MessageQueue): unknown;
    fromPartial(object: DeepPartial<Trigger_MessageQueue>): Trigger_MessageQueue;
};
export declare const Trigger_IoTMessage: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage";
    encode(message: Trigger_IoTMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_IoTMessage;
    fromJSON(object: any): Trigger_IoTMessage;
    toJSON(message: Trigger_IoTMessage): unknown;
    fromPartial(object: DeepPartial<Trigger_IoTMessage>): Trigger_IoTMessage;
};
export declare const Trigger_ObjectStorage: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage";
    encode(message: Trigger_ObjectStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_ObjectStorage;
    fromJSON(object: any): Trigger_ObjectStorage;
    toJSON(message: Trigger_ObjectStorage): unknown;
    fromPartial(object: DeepPartial<Trigger_ObjectStorage>): Trigger_ObjectStorage;
};
export declare const Trigger_ContainerRegistry: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry";
    encode(message: Trigger_ContainerRegistry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_ContainerRegistry;
    fromJSON(object: any): Trigger_ContainerRegistry;
    toJSON(message: Trigger_ContainerRegistry): unknown;
    fromPartial(object: DeepPartial<Trigger_ContainerRegistry>): Trigger_ContainerRegistry;
};
export declare const Trigger_CloudLogs: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs";
    encode(message: Trigger_CloudLogs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_CloudLogs;
    fromJSON(object: any): Trigger_CloudLogs;
    toJSON(message: Trigger_CloudLogs): unknown;
    fromPartial(object: DeepPartial<Trigger_CloudLogs>): Trigger_CloudLogs;
};
export declare const Trigger_Logging: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging";
    encode(message: Trigger_Logging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_Logging;
    fromJSON(object: any): Trigger_Logging;
    toJSON(message: Trigger_Logging): unknown;
    fromPartial(object: DeepPartial<Trigger_Logging>): Trigger_Logging;
};
export declare const InvokeFunctionOnce: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce";
    encode(message: InvokeFunctionOnce, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeFunctionOnce;
    fromJSON(object: any): InvokeFunctionOnce;
    toJSON(message: InvokeFunctionOnce): unknown;
    fromPartial(object: DeepPartial<InvokeFunctionOnce>): InvokeFunctionOnce;
};
export declare const InvokeFunctionWithRetry: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry";
    encode(message: InvokeFunctionWithRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeFunctionWithRetry;
    fromJSON(object: any): InvokeFunctionWithRetry;
    toJSON(message: InvokeFunctionWithRetry): unknown;
    fromPartial(object: DeepPartial<InvokeFunctionWithRetry>): InvokeFunctionWithRetry;
};
export declare const InvokeContainerOnce: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce";
    encode(message: InvokeContainerOnce, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeContainerOnce;
    fromJSON(object: any): InvokeContainerOnce;
    toJSON(message: InvokeContainerOnce): unknown;
    fromPartial(object: DeepPartial<InvokeContainerOnce>): InvokeContainerOnce;
};
export declare const InvokeContainerWithRetry: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry";
    encode(message: InvokeContainerWithRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeContainerWithRetry;
    fromJSON(object: any): InvokeContainerWithRetry;
    toJSON(message: InvokeContainerWithRetry): unknown;
    fromPartial(object: DeepPartial<InvokeContainerWithRetry>): InvokeContainerWithRetry;
};
export declare const PutQueueMessage: {
    $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage";
    encode(message: PutQueueMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PutQueueMessage;
    fromJSON(object: any): PutQueueMessage;
    toJSON(message: PutQueueMessage): unknown;
    fromPartial(object: DeepPartial<PutQueueMessage>): PutQueueMessage;
};
export declare const BatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.BatchSettings";
    encode(message: BatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchSettings;
    fromJSON(object: any): BatchSettings;
    toJSON(message: BatchSettings): unknown;
    fromPartial(object: DeepPartial<BatchSettings>): BatchSettings;
};
export declare const CloudLogsBatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings";
    encode(message: CloudLogsBatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudLogsBatchSettings;
    fromJSON(object: any): CloudLogsBatchSettings;
    toJSON(message: CloudLogsBatchSettings): unknown;
    fromPartial(object: DeepPartial<CloudLogsBatchSettings>): CloudLogsBatchSettings;
};
export declare const LoggingBatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings";
    encode(message: LoggingBatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoggingBatchSettings;
    fromJSON(object: any): LoggingBatchSettings;
    toJSON(message: LoggingBatchSettings): unknown;
    fromPartial(object: DeepPartial<LoggingBatchSettings>): LoggingBatchSettings;
};
export declare const RetrySettings: {
    $type: "yandex.cloud.serverless.triggers.v1.RetrySettings";
    encode(message: RetrySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetrySettings;
    fromJSON(object: any): RetrySettings;
    toJSON(message: RetrySettings): unknown;
    fromPartial(object: DeepPartial<RetrySettings>): RetrySettings;
};
export declare const BillingBudget: {
    $type: "yandex.cloud.serverless.triggers.v1.BillingBudget";
    encode(message: BillingBudget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BillingBudget;
    fromJSON(object: any): BillingBudget;
    toJSON(message: BillingBudget): unknown;
    fromPartial(object: DeepPartial<BillingBudget>): BillingBudget;
};
export declare const DataStreamBatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings";
    encode(message: DataStreamBatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataStreamBatchSettings;
    fromJSON(object: any): DataStreamBatchSettings;
    toJSON(message: DataStreamBatchSettings): unknown;
    fromPartial(object: DeepPartial<DataStreamBatchSettings>): DataStreamBatchSettings;
};
export declare const DataStream: {
    $type: "yandex.cloud.serverless.triggers.v1.DataStream";
    encode(message: DataStream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataStream;
    fromJSON(object: any): DataStream;
    toJSON(message: DataStream): unknown;
    fromPartial(object: DeepPartial<DataStream>): DataStream;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
