import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
/** An Organization resource. For more information, see [Organization](/docs/organization/enable-org). */
export interface Organization {
    $type: 'yandex.cloud.organizationmanager.v1.Organization';
    /** ID of the organization. */
    id: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the organization. 3-63 characters long. */
    name: string;
    /** Description of the organization. 0-256 characters long. */
    description: string;
    /** Display name of the organization. 0-256 characters long. */
    title: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export interface Organization_LabelsEntry {
    $type: 'yandex.cloud.organizationmanager.v1.Organization.LabelsEntry';
    key: string;
    value: string;
}
export declare const Organization: {
    $type: "yandex.cloud.organizationmanager.v1.Organization";
    encode(message: Organization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Organization;
    fromJSON(object: any): Organization;
    toJSON(message: Organization): unknown;
    fromPartial(object: DeepPartial<Organization>): Organization;
};
export declare const Organization_LabelsEntry: {
    $type: "yandex.cloud.organizationmanager.v1.Organization.LabelsEntry";
    encode(message: Organization_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Organization_LabelsEntry;
    fromJSON(object: any): Organization_LabelsEntry;
    toJSON(message: Organization_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Organization_LabelsEntry>): Organization_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
