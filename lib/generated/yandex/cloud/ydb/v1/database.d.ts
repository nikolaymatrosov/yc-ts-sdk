import { BackupConfig } from '../../../../yandex/cloud/ydb/v1/backup';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
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
export interface DedicatedDatabase {
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    assignPublicIps: boolean;
}
export interface ServerlessDatabase {
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
export declare const DedicatedDatabase: {
    encode(message: DedicatedDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DedicatedDatabase;
    fromJSON(object: any): DedicatedDatabase;
    toJSON(message: DedicatedDatabase): unknown;
    fromPartial(object: DeepPartial<DedicatedDatabase>): DedicatedDatabase;
};
export declare const ServerlessDatabase: {
    encode(_: ServerlessDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerlessDatabase;
    fromJSON(_: any): ServerlessDatabase;
    toJSON(_: ServerlessDatabase): unknown;
    fromPartial(_: DeepPartial<ServerlessDatabase>): ServerlessDatabase;
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
