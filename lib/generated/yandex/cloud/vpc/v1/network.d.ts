import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** A Network resource. For more information, see [Networks](/docs/vpc/concepts/network). */
export interface Network {
    $type: 'yandex.cloud.vpc.v1.Network';
    /** ID of the network. */
    id: string;
    /** ID of the folder that the network belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the network.
     * The name is unique within the folder. 3-63 characters long.
     */
    name: string;
    /** Optional description of the network. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of default security group for network. */
    defaultSecurityGroupId: string;
}
export interface Network_LabelsEntry {
    $type: 'yandex.cloud.vpc.v1.Network.LabelsEntry';
    key: string;
    value: string;
}
export declare const Network: {
    $type: "yandex.cloud.vpc.v1.Network";
    encode(message: Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Network;
    fromJSON(object: any): Network;
    toJSON(message: Network): unknown;
    fromPartial(object: DeepPartial<Network>): Network;
};
export declare const Network_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.Network.LabelsEntry";
    encode(message: Network_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Network_LabelsEntry;
    fromJSON(object: any): Network_LabelsEntry;
    toJSON(message: Network_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Network_LabelsEntry>): Network_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
