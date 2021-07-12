import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** An Address resource. For more information, see [Address](/docs/vpc/concepts/address). */
export interface Address {
    /** ID of the address. Generated at creation time. */
    id: string;
    /** ID of the folder that the address belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the address.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the address. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    externalIpv4Address: ExternalIpv4Address | undefined;
    /** Specifies if address is reserved or not. */
    reserved: boolean;
    /** Specifies if address is used or not. */
    used: boolean;
    /** Type of the IP address. */
    type: Address_Type;
    /** Vervion of the IP address. */
    ipVersion: Address_IpVersion;
}
export declare enum Address_Type {
    TYPE_UNSPECIFIED = 0,
    /** INTERNAL - Internal IP address. */
    INTERNAL = 1,
    /** EXTERNAL - Public IP address. */
    EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function address_TypeFromJSON(object: any): Address_Type;
export declare function address_TypeToJSON(object: Address_Type): string;
export declare enum Address_IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address. */
    IPV4 = 1,
    /** IPV6 - IPv6 address. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function address_IpVersionFromJSON(object: any): Address_IpVersion;
export declare function address_IpVersionToJSON(object: Address_IpVersion): string;
export interface Address_LabelsEntry {
    key: string;
    value: string;
}
export interface ExternalIpv4Address {
    /** Value of address. */
    address: string;
    /** Availability zone from which the address will be allocated. */
    zoneId: string;
    /** Parameters of the allocated address, for example DDoS Protection. */
    requirements: AddressRequirements | undefined;
}
export interface AddressRequirements {
    /** DDoS protection provider ID. */
    ddosProtectionProvider: string;
    /** Capability to send SMTP traffic. */
    outgoingSmtpCapability: string;
}
export declare const Address: {
    encode(message: Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Address;
    fromJSON(object: any): Address;
    toJSON(message: Address): unknown;
    fromPartial(object: DeepPartial<Address>): Address;
};
export declare const Address_LabelsEntry: {
    encode(message: Address_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Address_LabelsEntry;
    fromJSON(object: any): Address_LabelsEntry;
    toJSON(message: Address_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Address_LabelsEntry>): Address_LabelsEntry;
};
export declare const ExternalIpv4Address: {
    encode(message: ExternalIpv4Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4Address;
    fromJSON(object: any): ExternalIpv4Address;
    toJSON(message: ExternalIpv4Address): unknown;
    fromPartial(object: DeepPartial<ExternalIpv4Address>): ExternalIpv4Address;
};
export declare const AddressRequirements: {
    encode(message: AddressRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddressRequirements;
    fromJSON(object: any): AddressRequirements;
    toJSON(message: AddressRequirements): unknown;
    fromPartial(object: DeepPartial<AddressRequirements>): AddressRequirements;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
