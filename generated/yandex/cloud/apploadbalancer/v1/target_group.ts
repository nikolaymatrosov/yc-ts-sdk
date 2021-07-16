/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/**
 * A target group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface TargetGroup {
    /** ID of the target group. Generated at creation time. */
    id: string;
    /** Name of the target group. The name is unique within the folder. */
    name: string;
    /** Description of the target group. */
    description: string;
    /** ID of the folder that the target group belongs to. */
    folderId: string;
    /**
     * Target group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: { [key: string]: string };
    /** List of targets in the target group. */
    targets: Target[];
    /** Creation timestamp. */
    createdAt: Date | undefined;
}

export interface TargetGroup_LabelsEntry {
    key: string;
    value: string;
}

/**
 * A target resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface Target {
    /** IP address of the target. */
    ipAddress: string | undefined;
    /** ID of the subnet that the target is connected to. */
    subnetId: string;
}

const baseTargetGroup: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
};

export const TargetGroup = {
    encode(
        message: TargetGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            TargetGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetGroup } as TargetGroup;
        message.labels = {};
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    const entry5 = TargetGroup_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.targets.push(
                        Target.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TargetGroup {
        const message = { ...baseTargetGroup } as TargetGroup;
        message.labels = {};
        message.targets = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
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
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromJSON(e));
            }
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        return message;
    },

    toJSON(message: TargetGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.targets) {
            obj.targets = message.targets.map((e) =>
                e ? Target.toJSON(e) : undefined
            );
        } else {
            obj.targets = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<TargetGroup>): TargetGroup {
        const message = { ...baseTargetGroup } as TargetGroup;
        message.labels = {};
        message.targets = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
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
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromPartial(e));
            }
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        return message;
    },
};

const baseTargetGroup_LabelsEntry: object = { key: '', value: '' };

export const TargetGroup_LabelsEntry = {
    encode(
        message: TargetGroup_LabelsEntry,
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
    ): TargetGroup_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTargetGroup_LabelsEntry,
        } as TargetGroup_LabelsEntry;
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

    fromJSON(object: any): TargetGroup_LabelsEntry {
        const message = {
            ...baseTargetGroup_LabelsEntry,
        } as TargetGroup_LabelsEntry;
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

    toJSON(message: TargetGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<TargetGroup_LabelsEntry>
    ): TargetGroup_LabelsEntry {
        const message = {
            ...baseTargetGroup_LabelsEntry,
        } as TargetGroup_LabelsEntry;
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

const baseTarget: object = { subnetId: '' };

export const Target = {
    encode(
        message: Target,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.ipAddress !== undefined) {
            writer.uint32(10).string(message.ipAddress);
        }
        if (message.subnetId !== '') {
            writer.uint32(26).string(message.subnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Target {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget } as Target;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipAddress = reader.string();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Target {
        const message = { ...baseTarget } as Target;
        if (object.ipAddress !== undefined && object.ipAddress !== null) {
            message.ipAddress = String(object.ipAddress);
        } else {
            message.ipAddress = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: Target): unknown {
        const obj: any = {};
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(object: DeepPartial<Target>): Target {
        const message = { ...baseTarget } as Target;
        if (object.ipAddress !== undefined && object.ipAddress !== null) {
            message.ipAddress = object.ipAddress;
        } else {
            message.ipAddress = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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
