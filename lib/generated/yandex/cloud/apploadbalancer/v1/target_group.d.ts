import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface TargetGroup {
    /** Output only. ID of the target group. */
    id: string;
    /** The name is unique within the folder. 3-63 characters long. */
    name: string;
    /** Description of the target group. 0-256 characters long. */
    description: string;
    /** ID of the folder that the target group belongs to. */
    folderId: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** NOTE: all endpoints must use the same address_type - either ip or hostname. */
    targets: Target[];
    /** Creation timestamp for the target group. */
    createdAt: Date | undefined;
}
export interface TargetGroup_LabelsEntry {
    key: string;
    value: string;
}
export interface Target {
    ipAddress: string | undefined;
    /** ID of the subnet that target connected to. */
    subnetId: string;
}
export declare const TargetGroup: {
    encode(message: TargetGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroup;
    fromJSON(object: any): TargetGroup;
    toJSON(message: TargetGroup): unknown;
    fromPartial(object: DeepPartial<TargetGroup>): TargetGroup;
};
export declare const TargetGroup_LabelsEntry: {
    encode(message: TargetGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroup_LabelsEntry;
    fromJSON(object: any): TargetGroup_LabelsEntry;
    toJSON(message: TargetGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<TargetGroup_LabelsEntry>): TargetGroup_LabelsEntry;
};
export declare const Target: {
    encode(message: Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial(object: DeepPartial<Target>): Target;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
