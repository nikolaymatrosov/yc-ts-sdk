import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface SecurityGroup {
    $type: 'yandex.cloud.vpc.v1.SecurityGroup';
    id: string;
    folderId: string;
    createdAt: Date | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    networkId: string;
    status: SecurityGroup_Status;
    rules: SecurityGroupRule[];
    defaultForNetwork: boolean;
}
export declare enum SecurityGroup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    /** UPDATING - updating is a long operation because we must update all instances in SG */
    UPDATING = 3,
    DELETING = 4,
    UNRECOGNIZED = -1
}
export declare function securityGroup_StatusFromJSON(object: any): SecurityGroup_Status;
export declare function securityGroup_StatusToJSON(object: SecurityGroup_Status): string;
export interface SecurityGroup_LabelsEntry {
    $type: 'yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry';
    key: string;
    value: string;
}
export interface SecurityGroupRule {
    $type: 'yandex.cloud.vpc.v1.SecurityGroupRule';
    /** generated by api server after rule creation */
    id: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    direction: SecurityGroupRule_Direction;
    /** null value means any */
    ports: PortRange | undefined;
    /**
     * null value means any protocol
     * values from https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml
     */
    protocolName: string;
    protocolNumber: number;
    cidrBlocks: CidrBlocks | undefined;
    securityGroupId: string | undefined;
    predefinedTarget: string | undefined;
}
export declare enum SecurityGroupRule_Direction {
    DIRECTION_UNSPECIFIED = 0,
    INGRESS = 1,
    EGRESS = 2,
    UNRECOGNIZED = -1
}
export declare function securityGroupRule_DirectionFromJSON(object: any): SecurityGroupRule_Direction;
export declare function securityGroupRule_DirectionToJSON(object: SecurityGroupRule_Direction): string;
export interface SecurityGroupRule_LabelsEntry {
    $type: 'yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry';
    key: string;
    value: string;
}
export interface PortRange {
    $type: 'yandex.cloud.vpc.v1.PortRange';
    fromPort: number;
    toPort: number;
}
export interface CidrBlocks {
    $type: 'yandex.cloud.vpc.v1.CidrBlocks';
    v4CidrBlocks: string[];
    v6CidrBlocks: string[];
}
export declare const SecurityGroup: {
    $type: "yandex.cloud.vpc.v1.SecurityGroup";
    encode(message: SecurityGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroup;
    fromJSON(object: any): SecurityGroup;
    toJSON(message: SecurityGroup): unknown;
    fromPartial(object: DeepPartial<SecurityGroup>): SecurityGroup;
};
export declare const SecurityGroup_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry";
    encode(message: SecurityGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroup_LabelsEntry;
    fromJSON(object: any): SecurityGroup_LabelsEntry;
    toJSON(message: SecurityGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<SecurityGroup_LabelsEntry>): SecurityGroup_LabelsEntry;
};
export declare const SecurityGroupRule: {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRule";
    encode(message: SecurityGroupRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroupRule;
    fromJSON(object: any): SecurityGroupRule;
    toJSON(message: SecurityGroupRule): unknown;
    fromPartial(object: DeepPartial<SecurityGroupRule>): SecurityGroupRule;
};
export declare const SecurityGroupRule_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry";
    encode(message: SecurityGroupRule_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroupRule_LabelsEntry;
    fromJSON(object: any): SecurityGroupRule_LabelsEntry;
    toJSON(message: SecurityGroupRule_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<SecurityGroupRule_LabelsEntry>): SecurityGroupRule_LabelsEntry;
};
export declare const PortRange: {
    $type: "yandex.cloud.vpc.v1.PortRange";
    encode(message: PortRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortRange;
    fromJSON(object: any): PortRange;
    toJSON(message: PortRange): unknown;
    fromPartial(object: DeepPartial<PortRange>): PortRange;
};
export declare const CidrBlocks: {
    $type: "yandex.cloud.vpc.v1.CidrBlocks";
    encode(message: CidrBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CidrBlocks;
    fromJSON(object: any): CidrBlocks;
    toJSON(message: CidrBlocks): unknown;
    fromPartial(object: DeepPartial<CidrBlocks>): CidrBlocks;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
