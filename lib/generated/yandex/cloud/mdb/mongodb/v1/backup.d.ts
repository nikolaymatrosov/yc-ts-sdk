import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1";
/**
 * A MongoDB Backup resource. For more information, see the
 * [Developer's Guide](/docs/managed-mongodb/concepts).
 */
export interface Backup {
    $type: 'yandex.cloud.mdb.mongodb.v1.Backup';
    /** ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
     * (i.e. when the backup operation was completed).
     */
    createdAt: Date | undefined;
    /** ID of the MongoDB cluster that the backup was created for. */
    sourceClusterId: string;
    /** Time when the backup operation was started. */
    startedAt: Date | undefined;
    /** Shard names used as a source for backup. */
    sourceShardNames: string[];
    /** Size of backup in bytes */
    size: number;
    /** How this backup was created (manual/automatic/etc...) */
    type: Backup_BackupType;
}
export declare enum Backup_BackupType {
    BACKUP_TYPE_UNSPECIFIED = 0,
    /** AUTOMATED - Backup created by automated daily schedule */
    AUTOMATED = 1,
    /** MANUAL - Backup created by user request */
    MANUAL = 2,
    UNRECOGNIZED = -1
}
export declare function backup_BackupTypeFromJSON(object: any): Backup_BackupType;
export declare function backup_BackupTypeToJSON(object: Backup_BackupType): string;
export declare const Backup: {
    $type: "yandex.cloud.mdb.mongodb.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial(object: DeepPartial<Backup>): Backup;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
