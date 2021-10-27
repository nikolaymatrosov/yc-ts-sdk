import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
/** A Subnet resource. For more information, see [Subnets](/docs/vpc/concepts/subnets). */
export interface Subnet {
    $type: 'yandex.cloud.vpc.v1.Subnet';
    /** ID of the subnet. */
    id: string;
    /** ID of the folder that the subnet belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /** Name of the subnet. The name is unique within the project. 3-63 characters long. */
    name: string;
    /** Optional description of the subnet. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network the subnet belongs to. */
    networkId: string;
    /** ID of the availability zone where the subnet resides. */
    zoneId: string;
    /**
     * CIDR block.
     * The range of internal addresses that are defined for this subnet.
     * This field can be set only at Subnet resource creation time and cannot be changed.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks: string[];
    /** IPv6 not available yet. */
    v6CidrBlocks: string[];
    /** ID of route table the subnet is linked to. */
    routeTableId: string;
    dhcpOptions: DhcpOptions | undefined;
}
export interface Subnet_LabelsEntry {
    $type: 'yandex.cloud.vpc.v1.Subnet.LabelsEntry';
    key: string;
    value: string;
}
export interface DhcpOptions {
    $type: 'yandex.cloud.vpc.v1.DhcpOptions';
    domainNameServers: string[];
    domainName: string;
    ntpServers: string[];
}
export declare const Subnet: {
    $type: "yandex.cloud.vpc.v1.Subnet";
    encode(message: Subnet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Subnet;
    fromJSON(object: any): Subnet;
    toJSON(message: Subnet): unknown;
    fromPartial(object: DeepPartial<Subnet>): Subnet;
};
export declare const Subnet_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry";
    encode(message: Subnet_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Subnet_LabelsEntry;
    fromJSON(object: any): Subnet_LabelsEntry;
    toJSON(message: Subnet_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Subnet_LabelsEntry>): Subnet_LabelsEntry;
};
export declare const DhcpOptions: {
    $type: "yandex.cloud.vpc.v1.DhcpOptions";
    encode(message: DhcpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DhcpOptions;
    fromJSON(object: any): DhcpOptions;
    toJSON(message: DhcpOptions): unknown;
    fromPartial(object: DeepPartial<DhcpOptions>): DhcpOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
