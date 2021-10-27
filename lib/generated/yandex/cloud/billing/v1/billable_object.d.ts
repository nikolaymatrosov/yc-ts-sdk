import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.billing.v1";
/**
 * Represents a link to an object in other service.
 * This object is being billed in the scope of a billing account.
 */
export interface BillableObject {
    $type: 'yandex.cloud.billing.v1.BillableObject';
    /** ID of the object in other service. */
    id: string;
    /**
     * Billable object type. Can be one of the following:
     * * `cloud`
     */
    type: string;
}
/** Represents a binding of the BillableObject to a BillingAccount. */
export interface BillableObjectBinding {
    $type: 'yandex.cloud.billing.v1.BillableObjectBinding';
    /** Timestamp when binding was created. */
    effectiveTime: Date | undefined;
    /** Object that is bound to billing account. */
    billableObject: BillableObject | undefined;
}
export declare const BillableObject: {
    $type: "yandex.cloud.billing.v1.BillableObject";
    encode(message: BillableObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BillableObject;
    fromJSON(object: any): BillableObject;
    toJSON(message: BillableObject): unknown;
    fromPartial(object: DeepPartial<BillableObject>): BillableObject;
};
export declare const BillableObjectBinding: {
    $type: "yandex.cloud.billing.v1.BillableObjectBinding";
    encode(message: BillableObjectBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BillableObjectBinding;
    fromJSON(object: any): BillableObjectBinding;
    toJSON(message: BillableObjectBinding): unknown;
    fromPartial(object: DeepPartial<BillableObjectBinding>): BillableObjectBinding;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
