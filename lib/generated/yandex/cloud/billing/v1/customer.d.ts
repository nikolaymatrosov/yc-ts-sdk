import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.billing.v1";
/** A Customer resource. */
export interface Customer {
    $type: 'yandex.cloud.billing.v1.Customer';
    /** ID of the customer. */
    id: string;
    /** ID of the [yandex.cloud.billing.v1.BillingAccount] assigned to the customer. */
    billingAccountId: string;
}
/** Person of the customer. Contains legal information. */
export interface CustomerPerson {
    $type: 'yandex.cloud.billing.v1.CustomerPerson';
    /** Name of the person. */
    name: string;
    /** Long name of the person. */
    longname: string;
    /** Phone of the person. */
    phone: string;
    /** Email of the person. */
    email: string;
    /** Post code of the person. */
    postCode: string;
    /** Post address of the person. */
    postAddress: string;
    /** Legal address of the person. */
    legalAddress: string;
    /** Tax identification number of the person. */
    tin: string;
}
export declare const Customer: {
    $type: "yandex.cloud.billing.v1.Customer";
    encode(message: Customer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Customer;
    fromJSON(object: any): Customer;
    toJSON(message: Customer): unknown;
    fromPartial(object: DeepPartial<Customer>): Customer;
};
export declare const CustomerPerson: {
    $type: "yandex.cloud.billing.v1.CustomerPerson";
    encode(message: CustomerPerson, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerPerson;
    fromJSON(object: any): CustomerPerson;
    toJSON(message: CustomerPerson): unknown;
    fromPartial(object: DeepPartial<CustomerPerson>): CustomerPerson;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
