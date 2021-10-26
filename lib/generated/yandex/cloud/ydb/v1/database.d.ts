import { BackupConfig } from '../../../../yandex/cloud/ydb/v1/backup';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export declare enum AlertEvaluationStatus {
    ALERT_EVALUATION_STATUS_UNSPECIFIED = 0,
    ALERT_EVALUATION_STATUS_OK = 1,
    ALERT_EVALUATION_STATUS_NO_DATA = 2,
    ALERT_EVALUATION_STATUS_ERROR = 3,
    ALERT_EVALUATION_STATUS_ALARM = 4,
    ALERT_EVALUATION_STATUS_WARN = 5,
    UNRECOGNIZED = -1
}
export declare function alertEvaluationStatusFromJSON(object: any): AlertEvaluationStatus;
export declare function alertEvaluationStatusToJSON(object: AlertEvaluationStatus): string;
/** YDB database. */
export interface Database {
    id: string;
    folderId: string;
    createdAt: Date | undefined;
    name: string;
    description: string;
    status: Database_Status;
    endpoint: string;
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    /** deprecated field */
    zonalDatabase: ZonalDatabase | undefined;
    /** deprecated field */
    regionalDatabase: RegionalDatabase | undefined;
    dedicatedDatabase: DedicatedDatabase | undefined;
    serverlessDatabase: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: {
        [key: string]: string;
    };
    backupConfig: BackupConfig | undefined;
    documentApiEndpoint: string;
    kinesisApiEndpoint: string;
    monitoringConfig: MonitoringConfig | undefined;
}
export declare enum Database_Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    UPDATING = 4,
    ERROR = 5,
    DELETING = 6,
    STARTING = 7,
    STOPPED = 8,
    UNRECOGNIZED = -1
}
export declare function database_StatusFromJSON(object: any): Database_Status;
export declare function database_StatusToJSON(object: Database_Status): string;
export interface Database_LabelsEntry {
    key: string;
    value: string;
}
export interface AlertParameter {
    doubleParameterValue: AlertParameter_DoubleParameterValue | undefined;
    integerParameterValue: AlertParameter_IntegerParameterValue | undefined;
    textParameterValue: AlertParameter_TextParameterValue | undefined;
    textListParameterValue: AlertParameter_TextListParameterValue | undefined;
    labelListParameterValue: AlertParameter_LabelListParameterValue | undefined;
}
export interface AlertParameter_DoubleParameterValue {
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    value: number;
}
export interface AlertParameter_IntegerParameterValue {
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    value: number;
}
export interface AlertParameter_TextParameterValue {
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    value: string;
}
export interface AlertParameter_TextListParameterValue {
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    values: string[];
}
export interface AlertParameter_LabelListParameterValue {
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    values: string[];
}
export interface NotificationChannel {
    notificationChannelId: string;
    notifyAboutStatuses: AlertEvaluationStatus[];
    repeateNotifyDelayMs: number;
}
export interface Alert {
    /** output only field. */
    alertId: string;
    /** template of the alert. */
    alertTemplateId: string;
    /** name of the alert. */
    name: string;
    /** human readable description of the alert. */
    description: string;
    /** the notification channels of the alert. */
    notificationChannels: NotificationChannel[];
    /** alert parameters to override. */
    alertParameters: AlertParameter[];
    /** alert paratemers to override. */
    alertThresholds: AlertParameter[];
}
export interface MonitoringConfig {
    alerts: Alert[];
}
export interface DedicatedDatabase {
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    assignPublicIps: boolean;
}
export interface ServerlessDatabase {
    /**
     * Let's define 1 RU  - 1 request unit
     * Let's define 1 RCU - 1 request capacity unit, which is 1 RU per second.
     * If `enable_throttling_rcu_limit` flag is true, the database will be throttled using `throttling_rcu_limit` value.
     * Otherwise, the database is throttled using the cloud quotas.
     * If zero, all requests will be blocked until non zero value is set.
     */
    throttlingRcuLimit: number;
    /** Specify serverless database storage size limit. If zero, default value is applied. */
    storageSizeLimit: number;
    /** If false, the database is throttled by cloud value. */
    enableThrottlingRcuLimit: boolean;
    /**
     * Specify the number of provisioned RCUs to pay less if the database has predictable load.
     * You will be charged for the provisioned capacity regularly even if this capacity is not fully consumed.
     * You will be charged for the on-demand consumption only if provisioned capacity is consumed.
     */
    provisionedRcuLimit: number;
}
export interface ZonalDatabase {
    zoneId: string;
}
export interface RegionalDatabase {
    regionId: string;
}
export interface ScalePolicy {
    fixedScale: ScalePolicy_FixedScale | undefined;
}
export interface ScalePolicy_FixedScale {
    size: number;
}
export interface StorageConfig {
    storageOptions: StorageOption[];
    /** output only field: storage size limit of dedicated database. */
    storageSizeLimit: number;
}
export interface StorageOption {
    storageTypeId: string;
    groupCount: number;
}
export declare const Database: {
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial(object: DeepPartial<Database>): Database;
};
export declare const Database_LabelsEntry: {
    encode(message: Database_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database_LabelsEntry;
    fromJSON(object: any): Database_LabelsEntry;
    toJSON(message: Database_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Database_LabelsEntry>): Database_LabelsEntry;
};
export declare const AlertParameter: {
    encode(message: AlertParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter;
    fromJSON(object: any): AlertParameter;
    toJSON(message: AlertParameter): unknown;
    fromPartial(object: DeepPartial<AlertParameter>): AlertParameter;
};
export declare const AlertParameter_DoubleParameterValue: {
    encode(message: AlertParameter_DoubleParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_DoubleParameterValue;
    fromJSON(object: any): AlertParameter_DoubleParameterValue;
    toJSON(message: AlertParameter_DoubleParameterValue): unknown;
    fromPartial(object: DeepPartial<AlertParameter_DoubleParameterValue>): AlertParameter_DoubleParameterValue;
};
export declare const AlertParameter_IntegerParameterValue: {
    encode(message: AlertParameter_IntegerParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_IntegerParameterValue;
    fromJSON(object: any): AlertParameter_IntegerParameterValue;
    toJSON(message: AlertParameter_IntegerParameterValue): unknown;
    fromPartial(object: DeepPartial<AlertParameter_IntegerParameterValue>): AlertParameter_IntegerParameterValue;
};
export declare const AlertParameter_TextParameterValue: {
    encode(message: AlertParameter_TextParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_TextParameterValue;
    fromJSON(object: any): AlertParameter_TextParameterValue;
    toJSON(message: AlertParameter_TextParameterValue): unknown;
    fromPartial(object: DeepPartial<AlertParameter_TextParameterValue>): AlertParameter_TextParameterValue;
};
export declare const AlertParameter_TextListParameterValue: {
    encode(message: AlertParameter_TextListParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_TextListParameterValue;
    fromJSON(object: any): AlertParameter_TextListParameterValue;
    toJSON(message: AlertParameter_TextListParameterValue): unknown;
    fromPartial(object: DeepPartial<AlertParameter_TextListParameterValue>): AlertParameter_TextListParameterValue;
};
export declare const AlertParameter_LabelListParameterValue: {
    encode(message: AlertParameter_LabelListParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_LabelListParameterValue;
    fromJSON(object: any): AlertParameter_LabelListParameterValue;
    toJSON(message: AlertParameter_LabelListParameterValue): unknown;
    fromPartial(object: DeepPartial<AlertParameter_LabelListParameterValue>): AlertParameter_LabelListParameterValue;
};
export declare const NotificationChannel: {
    encode(message: NotificationChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NotificationChannel;
    fromJSON(object: any): NotificationChannel;
    toJSON(message: NotificationChannel): unknown;
    fromPartial(object: DeepPartial<NotificationChannel>): NotificationChannel;
};
export declare const Alert: {
    encode(message: Alert, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Alert;
    fromJSON(object: any): Alert;
    toJSON(message: Alert): unknown;
    fromPartial(object: DeepPartial<Alert>): Alert;
};
export declare const MonitoringConfig: {
    encode(message: MonitoringConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MonitoringConfig;
    fromJSON(object: any): MonitoringConfig;
    toJSON(message: MonitoringConfig): unknown;
    fromPartial(object: DeepPartial<MonitoringConfig>): MonitoringConfig;
};
export declare const DedicatedDatabase: {
    encode(message: DedicatedDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DedicatedDatabase;
    fromJSON(object: any): DedicatedDatabase;
    toJSON(message: DedicatedDatabase): unknown;
    fromPartial(object: DeepPartial<DedicatedDatabase>): DedicatedDatabase;
};
export declare const ServerlessDatabase: {
    encode(message: ServerlessDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerlessDatabase;
    fromJSON(object: any): ServerlessDatabase;
    toJSON(message: ServerlessDatabase): unknown;
    fromPartial(object: DeepPartial<ServerlessDatabase>): ServerlessDatabase;
};
export declare const ZonalDatabase: {
    encode(message: ZonalDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZonalDatabase;
    fromJSON(object: any): ZonalDatabase;
    toJSON(message: ZonalDatabase): unknown;
    fromPartial(object: DeepPartial<ZonalDatabase>): ZonalDatabase;
};
export declare const RegionalDatabase: {
    encode(message: RegionalDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegionalDatabase;
    fromJSON(object: any): RegionalDatabase;
    toJSON(message: RegionalDatabase): unknown;
    fromPartial(object: DeepPartial<RegionalDatabase>): RegionalDatabase;
};
export declare const ScalePolicy: {
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial(object: DeepPartial<ScalePolicy>): ScalePolicy;
};
export declare const ScalePolicy_FixedScale: {
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_FixedScale>): ScalePolicy_FixedScale;
};
export declare const StorageConfig: {
    encode(message: StorageConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageConfig;
    fromJSON(object: any): StorageConfig;
    toJSON(message: StorageConfig): unknown;
    fromPartial(object: DeepPartial<StorageConfig>): StorageConfig;
};
export declare const StorageOption: {
    encode(message: StorageOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageOption;
    fromJSON(object: any): StorageOption;
    toJSON(message: StorageOption): unknown;
    fromPartial(object: DeepPartial<StorageOption>): StorageOption;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
