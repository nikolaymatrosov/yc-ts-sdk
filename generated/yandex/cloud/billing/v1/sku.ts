/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.billing.v1';

/** Type of the pricing version. */
export enum PricingVersionType {
    PRICING_VERSION_TYPE_UNSPECIFIED = 0,
    /** STREET_PRICE - Regular price. */
    STREET_PRICE = 1,
    /** CONTRACT_PRICE - Price is overridden by a contract. Defined in the scope of a billing account. */
    CONTRACT_PRICE = 2,
    UNRECOGNIZED = -1,
}

export function pricingVersionTypeFromJSON(object: any): PricingVersionType {
    switch (object) {
        case 0:
        case 'PRICING_VERSION_TYPE_UNSPECIFIED':
            return PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED;
        case 1:
        case 'STREET_PRICE':
            return PricingVersionType.STREET_PRICE;
        case 2:
        case 'CONTRACT_PRICE':
            return PricingVersionType.CONTRACT_PRICE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PricingVersionType.UNRECOGNIZED;
    }
}

export function pricingVersionTypeToJSON(object: PricingVersionType): string {
    switch (object) {
        case PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED:
            return 'PRICING_VERSION_TYPE_UNSPECIFIED';
        case PricingVersionType.STREET_PRICE:
            return 'STREET_PRICE';
        case PricingVersionType.CONTRACT_PRICE:
            return 'CONTRACT_PRICE';
        default:
            return 'UNKNOWN';
    }
}

/** A Stock keeping unit resource. */
export interface Sku {
    /** ID of the SKU. */
    id: string;
    /** Name of the SKU. */
    name: string;
    /** Description of the sku. */
    description: string;
    /** ID of the service that sku belongs to. */
    serviceId: string;
    /** Pricing unit of the SKU, e.g. `core*hour`, `gbyte*hour`. */
    pricingUnit: string;
    /** List of pricing versions. */
    pricingVersions: PricingVersion[];
}

/**
 * Pricing version of the SKU.
 * Defines current and past prices for the sku.
 */
export interface PricingVersion {
    /** Type of the pricing version. */
    type: PricingVersionType;
    /**
     * Timestamp pricing version is active since inclusive.
     * The pricing version is active until next pricing version effective time exclusive.
     */
    effectiveTime: Date | undefined;
    /** List of pricing expressions. */
    pricingExpressions: PricingExpression[];
}

/**
 * Pricing expression of the pricing version.
 * Defines price for the sku.
 */
export interface PricingExpression {
    /** List of rates. */
    rates: Rate[];
}

/**
 * Rate of the pricing expression.
 * Define unit price for pricing quantity interval.
 */
export interface Rate {
    /** Start of the pricing quantity interval. The end of the interval is the start pricing quantity of the next rate. */
    startPricingQuantity: string;
    /** Unit price for the pricing quantity interval. */
    unitPrice: string;
    /**
     * Currency of the unit price.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
}

const baseSku: object = {
    id: '',
    name: '',
    description: '',
    serviceId: '',
    pricingUnit: '',
};

export const Sku = {
    encode(message: Sku, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.serviceId !== '') {
            writer.uint32(34).string(message.serviceId);
        }
        if (message.pricingUnit !== '') {
            writer.uint32(42).string(message.pricingUnit);
        }
        for (const v of message.pricingVersions) {
            PricingVersion.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Sku {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSku } as Sku;
        message.pricingVersions = [];
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
                    message.serviceId = reader.string();
                    break;
                case 5:
                    message.pricingUnit = reader.string();
                    break;
                case 6:
                    message.pricingVersions.push(
                        PricingVersion.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Sku {
        const message = { ...baseSku } as Sku;
        message.pricingVersions = [];
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
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = String(object.serviceId);
        } else {
            message.serviceId = '';
        }
        if (object.pricingUnit !== undefined && object.pricingUnit !== null) {
            message.pricingUnit = String(object.pricingUnit);
        } else {
            message.pricingUnit = '';
        }
        if (
            object.pricingVersions !== undefined &&
            object.pricingVersions !== null
        ) {
            for (const e of object.pricingVersions) {
                message.pricingVersions.push(PricingVersion.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: Sku): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.pricingUnit !== undefined &&
            (obj.pricingUnit = message.pricingUnit);
        if (message.pricingVersions) {
            obj.pricingVersions = message.pricingVersions.map((e) =>
                e ? PricingVersion.toJSON(e) : undefined
            );
        } else {
            obj.pricingVersions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Sku>): Sku {
        const message = { ...baseSku } as Sku;
        message.pricingVersions = [];
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
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = object.serviceId;
        } else {
            message.serviceId = '';
        }
        if (object.pricingUnit !== undefined && object.pricingUnit !== null) {
            message.pricingUnit = object.pricingUnit;
        } else {
            message.pricingUnit = '';
        }
        if (
            object.pricingVersions !== undefined &&
            object.pricingVersions !== null
        ) {
            for (const e of object.pricingVersions) {
                message.pricingVersions.push(PricingVersion.fromPartial(e));
            }
        }
        return message;
    },
};

const basePricingVersion: object = { type: 0 };

export const PricingVersion = {
    encode(
        message: PricingVersion,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.effectiveTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.effectiveTime),
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.pricingExpressions) {
            PricingExpression.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PricingVersion {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePricingVersion } as PricingVersion;
        message.pricingExpressions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.effectiveTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.pricingExpressions.push(
                        PricingExpression.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PricingVersion {
        const message = { ...basePricingVersion } as PricingVersion;
        message.pricingExpressions = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = pricingVersionTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (
            object.effectiveTime !== undefined &&
            object.effectiveTime !== null
        ) {
            message.effectiveTime = fromJsonTimestamp(object.effectiveTime);
        } else {
            message.effectiveTime = undefined;
        }
        if (
            object.pricingExpressions !== undefined &&
            object.pricingExpressions !== null
        ) {
            for (const e of object.pricingExpressions) {
                message.pricingExpressions.push(PricingExpression.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PricingVersion): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = pricingVersionTypeToJSON(message.type));
        message.effectiveTime !== undefined &&
            (obj.effectiveTime = message.effectiveTime.toISOString());
        if (message.pricingExpressions) {
            obj.pricingExpressions = message.pricingExpressions.map((e) =>
                e ? PricingExpression.toJSON(e) : undefined
            );
        } else {
            obj.pricingExpressions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PricingVersion>): PricingVersion {
        const message = { ...basePricingVersion } as PricingVersion;
        message.pricingExpressions = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (
            object.effectiveTime !== undefined &&
            object.effectiveTime !== null
        ) {
            message.effectiveTime = object.effectiveTime;
        } else {
            message.effectiveTime = undefined;
        }
        if (
            object.pricingExpressions !== undefined &&
            object.pricingExpressions !== null
        ) {
            for (const e of object.pricingExpressions) {
                message.pricingExpressions.push(
                    PricingExpression.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const basePricingExpression: object = {};

export const PricingExpression = {
    encode(
        message: PricingExpression,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.rates) {
            Rate.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PricingExpression {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePricingExpression } as PricingExpression;
        message.rates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.rates.push(Rate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PricingExpression {
        const message = { ...basePricingExpression } as PricingExpression;
        message.rates = [];
        if (object.rates !== undefined && object.rates !== null) {
            for (const e of object.rates) {
                message.rates.push(Rate.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PricingExpression): unknown {
        const obj: any = {};
        if (message.rates) {
            obj.rates = message.rates.map((e) =>
                e ? Rate.toJSON(e) : undefined
            );
        } else {
            obj.rates = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PricingExpression>): PricingExpression {
        const message = { ...basePricingExpression } as PricingExpression;
        message.rates = [];
        if (object.rates !== undefined && object.rates !== null) {
            for (const e of object.rates) {
                message.rates.push(Rate.fromPartial(e));
            }
        }
        return message;
    },
};

const baseRate: object = {
    startPricingQuantity: '',
    unitPrice: '',
    currency: '',
};

export const Rate = {
    encode(
        message: Rate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.startPricingQuantity !== '') {
            writer.uint32(10).string(message.startPricingQuantity);
        }
        if (message.unitPrice !== '') {
            writer.uint32(18).string(message.unitPrice);
        }
        if (message.currency !== '') {
            writer.uint32(26).string(message.currency);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Rate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRate } as Rate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startPricingQuantity = reader.string();
                    break;
                case 2:
                    message.unitPrice = reader.string();
                    break;
                case 3:
                    message.currency = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Rate {
        const message = { ...baseRate } as Rate;
        if (
            object.startPricingQuantity !== undefined &&
            object.startPricingQuantity !== null
        ) {
            message.startPricingQuantity = String(object.startPricingQuantity);
        } else {
            message.startPricingQuantity = '';
        }
        if (object.unitPrice !== undefined && object.unitPrice !== null) {
            message.unitPrice = String(object.unitPrice);
        } else {
            message.unitPrice = '';
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = String(object.currency);
        } else {
            message.currency = '';
        }
        return message;
    },

    toJSON(message: Rate): unknown {
        const obj: any = {};
        message.startPricingQuantity !== undefined &&
            (obj.startPricingQuantity = message.startPricingQuantity);
        message.unitPrice !== undefined && (obj.unitPrice = message.unitPrice);
        message.currency !== undefined && (obj.currency = message.currency);
        return obj;
    },

    fromPartial(object: DeepPartial<Rate>): Rate {
        const message = { ...baseRate } as Rate;
        if (
            object.startPricingQuantity !== undefined &&
            object.startPricingQuantity !== null
        ) {
            message.startPricingQuantity = object.startPricingQuantity;
        } else {
            message.startPricingQuantity = '';
        }
        if (object.unitPrice !== undefined && object.unitPrice !== null) {
            message.unitPrice = object.unitPrice;
        } else {
            message.unitPrice = '';
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = object.currency;
        } else {
            message.currency = '';
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
