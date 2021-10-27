/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.vpc.v1';

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
    UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
    switch (object) {
        case 0:
        case 'IP_VERSION_UNSPECIFIED':
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case 'IPV4':
            return IpVersion.IPV4;
        case 2:
        case 'IPV6':
            return IpVersion.IPV6;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpVersion.UNRECOGNIZED;
    }
}

export function ipVersionToJSON(object: IpVersion): string {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return 'IP_VERSION_UNSPECIFIED';
        case IpVersion.IPV4:
            return 'IPV4';
        case IpVersion.IPV6:
            return 'IPV6';
        default:
            return 'UNKNOWN';
    }
}

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
    labels: { [key: string]: string };
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

const baseSubnet: object = {
    $type: 'yandex.cloud.vpc.v1.Subnet',
    id: '',
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    zoneId: '',
    v4CidrBlocks: '',
    v6CidrBlocks: '',
    routeTableId: '',
};

export const Subnet = {
    $type: 'yandex.cloud.vpc.v1.Subnet' as const,

    encode(
        message: Subnet,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Subnet_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.vpc.v1.Subnet.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        if (message.zoneId !== '') {
            writer.uint32(66).string(message.zoneId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(82).string(v!);
        }
        for (const v of message.v6CidrBlocks) {
            writer.uint32(90).string(v!);
        }
        if (message.routeTableId !== '') {
            writer.uint32(98).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            DhcpOptions.encode(
                message.dhcpOptions,
                writer.uint32(106).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Subnet {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubnet } as Subnet;
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Subnet_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 10:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 11:
                    message.v6CidrBlocks.push(reader.string());
                    break;
                case 12:
                    message.routeTableId = reader.string();
                    break;
                case 13:
                    message.dhcpOptions = DhcpOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Subnet {
        const message = { ...baseSubnet } as Subnet;
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(String(e));
            }
        }
        if (object.v6CidrBlocks !== undefined && object.v6CidrBlocks !== null) {
            for (const e of object.v6CidrBlocks) {
                message.v6CidrBlocks.push(String(e));
            }
        }
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = DhcpOptions.fromJSON(object.dhcpOptions);
        } else {
            message.dhcpOptions = undefined;
        }
        return message;
    },

    toJSON(message: Subnet): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        } else {
            obj.v4CidrBlocks = [];
        }
        if (message.v6CidrBlocks) {
            obj.v6CidrBlocks = message.v6CidrBlocks.map((e) => e);
        } else {
            obj.v6CidrBlocks = [];
        }
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Subnet>): Subnet {
        const message = { ...baseSubnet } as Subnet;
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(e);
            }
        }
        if (object.v6CidrBlocks !== undefined && object.v6CidrBlocks !== null) {
            for (const e of object.v6CidrBlocks) {
                message.v6CidrBlocks.push(e);
            }
        }
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = DhcpOptions.fromPartial(object.dhcpOptions);
        } else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Subnet.$type, Subnet);

const baseSubnet_LabelsEntry: object = {
    $type: 'yandex.cloud.vpc.v1.Subnet.LabelsEntry',
    key: '',
    value: '',
};

export const Subnet_LabelsEntry = {
    $type: 'yandex.cloud.vpc.v1.Subnet.LabelsEntry' as const,

    encode(
        message: Subnet_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Subnet_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubnet_LabelsEntry } as Subnet_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Subnet_LabelsEntry {
        const message = { ...baseSubnet_LabelsEntry } as Subnet_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Subnet_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Subnet_LabelsEntry>): Subnet_LabelsEntry {
        const message = { ...baseSubnet_LabelsEntry } as Subnet_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(Subnet_LabelsEntry.$type, Subnet_LabelsEntry);

const baseDhcpOptions: object = {
    $type: 'yandex.cloud.vpc.v1.DhcpOptions',
    domainNameServers: '',
    domainName: '',
    ntpServers: '',
};

export const DhcpOptions = {
    $type: 'yandex.cloud.vpc.v1.DhcpOptions' as const,

    encode(
        message: DhcpOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.domainNameServers) {
            writer.uint32(10).string(v!);
        }
        if (message.domainName !== '') {
            writer.uint32(18).string(message.domainName);
        }
        for (const v of message.ntpServers) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DhcpOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDhcpOptions } as DhcpOptions;
        message.domainNameServers = [];
        message.ntpServers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domainNameServers.push(reader.string());
                    break;
                case 2:
                    message.domainName = reader.string();
                    break;
                case 3:
                    message.ntpServers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DhcpOptions {
        const message = { ...baseDhcpOptions } as DhcpOptions;
        message.domainNameServers = [];
        message.ntpServers = [];
        if (
            object.domainNameServers !== undefined &&
            object.domainNameServers !== null
        ) {
            for (const e of object.domainNameServers) {
                message.domainNameServers.push(String(e));
            }
        }
        if (object.domainName !== undefined && object.domainName !== null) {
            message.domainName = String(object.domainName);
        } else {
            message.domainName = '';
        }
        if (object.ntpServers !== undefined && object.ntpServers !== null) {
            for (const e of object.ntpServers) {
                message.ntpServers.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: DhcpOptions): unknown {
        const obj: any = {};
        if (message.domainNameServers) {
            obj.domainNameServers = message.domainNameServers.map((e) => e);
        } else {
            obj.domainNameServers = [];
        }
        message.domainName !== undefined &&
            (obj.domainName = message.domainName);
        if (message.ntpServers) {
            obj.ntpServers = message.ntpServers.map((e) => e);
        } else {
            obj.ntpServers = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<DhcpOptions>): DhcpOptions {
        const message = { ...baseDhcpOptions } as DhcpOptions;
        message.domainNameServers = [];
        message.ntpServers = [];
        if (
            object.domainNameServers !== undefined &&
            object.domainNameServers !== null
        ) {
            for (const e of object.domainNameServers) {
                message.domainNameServers.push(e);
            }
        }
        if (object.domainName !== undefined && object.domainName !== null) {
            message.domainName = object.domainName;
        } else {
            message.domainName = '';
        }
        if (object.ntpServers !== undefined && object.ntpServers !== null) {
            for (const e of object.ntpServers) {
                message.ntpServers.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(DhcpOptions.$type, DhcpOptions);

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
