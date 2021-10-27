/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface PlacementGroup {
    $type: 'yandex.cloud.compute.v1.PlacementGroup';
    /** ID of the placement group. Generated at creation time. */
    id: string;
    /** ID of the folder that the placement group belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the placement group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the placement group. 0-256 characters long. */
    description: string;
    /** Placement group labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * Anti-affinity placement strategy (`spread`). Instances are distributed
     * over distinct failure domains.
     */
    spreadPlacementStrategy: SpreadPlacementStrategy | undefined;
}

export interface PlacementGroup_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.PlacementGroup.LabelsEntry';
    key: string;
    value: string;
}

/**
 * This is an empty structure that must be passed to explicitly
 * specify the required placement strategy.
 */
export interface SpreadPlacementStrategy {
    $type: 'yandex.cloud.compute.v1.SpreadPlacementStrategy';
}

const basePlacementGroup: object = {
    $type: 'yandex.cloud.compute.v1.PlacementGroup',
    id: '',
    folderId: '',
    name: '',
    description: '',
};

export const PlacementGroup = {
    $type: 'yandex.cloud.compute.v1.PlacementGroup' as const,

    encode(
        message: PlacementGroup,
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
            PlacementGroup_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.compute.v1.PlacementGroup.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.spreadPlacementStrategy !== undefined) {
            SpreadPlacementStrategy.encode(
                message.spreadPlacementStrategy,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlacementGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlacementGroup } as PlacementGroup;
        message.labels = {};
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
                    const entry6 = PlacementGroup_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.spreadPlacementStrategy =
                        SpreadPlacementStrategy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PlacementGroup {
        const message = { ...basePlacementGroup } as PlacementGroup;
        message.labels = {};
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
        if (
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy = SpreadPlacementStrategy.fromJSON(
                object.spreadPlacementStrategy
            );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },

    toJSON(message: PlacementGroup): unknown {
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
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? SpreadPlacementStrategy.toJSON(
                      message.spreadPlacementStrategy
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<PlacementGroup>): PlacementGroup {
        const message = { ...basePlacementGroup } as PlacementGroup;
        message.labels = {};
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
        if (
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy =
                SpreadPlacementStrategy.fromPartial(
                    object.spreadPlacementStrategy
                );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(PlacementGroup.$type, PlacementGroup);

const basePlacementGroup_LabelsEntry: object = {
    $type: 'yandex.cloud.compute.v1.PlacementGroup.LabelsEntry',
    key: '',
    value: '',
};

export const PlacementGroup_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.PlacementGroup.LabelsEntry' as const,

    encode(
        message: PlacementGroup_LabelsEntry,
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
    ): PlacementGroup_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePlacementGroup_LabelsEntry,
        } as PlacementGroup_LabelsEntry;
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

    fromJSON(object: any): PlacementGroup_LabelsEntry {
        const message = {
            ...basePlacementGroup_LabelsEntry,
        } as PlacementGroup_LabelsEntry;
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

    toJSON(message: PlacementGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PlacementGroup_LabelsEntry>
    ): PlacementGroup_LabelsEntry {
        const message = {
            ...basePlacementGroup_LabelsEntry,
        } as PlacementGroup_LabelsEntry;
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

messageTypeRegistry.set(
    PlacementGroup_LabelsEntry.$type,
    PlacementGroup_LabelsEntry
);

const baseSpreadPlacementStrategy: object = {
    $type: 'yandex.cloud.compute.v1.SpreadPlacementStrategy',
};

export const SpreadPlacementStrategy = {
    $type: 'yandex.cloud.compute.v1.SpreadPlacementStrategy' as const,

    encode(
        _: SpreadPlacementStrategy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SpreadPlacementStrategy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpreadPlacementStrategy,
        } as SpreadPlacementStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): SpreadPlacementStrategy {
        const message = {
            ...baseSpreadPlacementStrategy,
        } as SpreadPlacementStrategy;
        return message;
    },

    toJSON(_: SpreadPlacementStrategy): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(
        _: DeepPartial<SpreadPlacementStrategy>
    ): SpreadPlacementStrategy {
        const message = {
            ...baseSpreadPlacementStrategy,
        } as SpreadPlacementStrategy;
        return message;
    },
};

messageTypeRegistry.set(SpreadPlacementStrategy.$type, SpreadPlacementStrategy);

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
