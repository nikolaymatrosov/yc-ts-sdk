import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
/**
 * An SQL Server backup resource.
 * For more information, see the [Backup](/docs/managed-sqlserver/concepts/backup) section in the documentation.
 */
export interface Backup {
    $type: 'yandex.cloud.mdb.sqlserver.v1.Backup';
    /** ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /** Creation timestamp (i.e. when the backup operation was completed). */
    createdAt: Date | undefined;
    /** ID of the SQL Server cluster that the backup was created for. */
    sourceClusterId: string;
    /** Time when the backup operation was started. */
    startedAt: Date | undefined;
    /** List databases included in the backup */
    databases: string[];
}
export declare const Backup: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Backup";
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
