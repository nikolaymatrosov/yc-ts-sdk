import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
/** A Project resource. */
export interface Project {
    /** ID of the project. */
    id: string;
    /** ID of the folder that the project belongs to. */
    folderId: string;
    createdAt: Date | undefined;
    /** Name of the project. 1-63 characters long. */
    name: string;
    /** Description of the project. 0-256 characters long. */
    description: string;
    /** Settings of the project. */
    settings: Project_Settings | undefined;
}
export interface Project_Settings {
    /** ID of the service account, on whose behalf all operations with clusters will be performed. */
    serviceAccountId: string;
    /**
     * ID of the subnet where the DataProc cluster resides.
     * Currently only subnets created in the availability zone ru-central1-a are supported.
     */
    subnetId: string;
    /** ID of the DataProc cluster. */
    dataProcClusterId: string;
    /** Commit mode that is assigned to the project. */
    commitMode: Project_Settings_CommitMode;
}
export declare enum Project_Settings_CommitMode {
    COMMIT_MODE_UNSPECIFIED = 0,
    /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
    STANDARD = 1,
    /**
     * AUTO - Commit happens periodically.
     * Also, automatic saving of state occurs when switching to another type of computing resource.
     */
    AUTO = 2,
    UNRECOGNIZED = -1
}
export declare function project_Settings_CommitModeFromJSON(object: any): Project_Settings_CommitMode;
export declare function project_Settings_CommitModeToJSON(object: Project_Settings_CommitMode): string;
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const Project_Settings: {
    encode(message: Project_Settings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project_Settings;
    fromJSON(object: any): Project_Settings;
    toJSON(message: Project_Settings): unknown;
    fromPartial(object: DeepPartial<Project_Settings>): Project_Settings;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
