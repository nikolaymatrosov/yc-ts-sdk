import { VirtualHost } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface HttpRouter {
    /** Output only. ID of the router. */
    id: string;
    /** The name is unique within the folder. 3-63 characters long. */
    name: string;
    /** Description of the router. 0-256 characters long. */
    description: string;
    /** ID of the folder that the router belongs to. */
    folderId: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Only one virtual host with no authority (default match) can be specified. */
    virtualHosts: VirtualHost[];
    /** Creation timestamp for the http router. */
    createdAt: Date | undefined;
}
export interface HttpRouter_LabelsEntry {
    key: string;
    value: string;
}
export declare const HttpRouter: {
    encode(message: HttpRouter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouter;
    fromJSON(object: any): HttpRouter;
    toJSON(message: HttpRouter): unknown;
    fromPartial(object: DeepPartial<HttpRouter>): HttpRouter;
};
export declare const HttpRouter_LabelsEntry: {
    encode(message: HttpRouter_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouter_LabelsEntry;
    fromJSON(object: any): HttpRouter_LabelsEntry;
    toJSON(message: HttpRouter_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<HttpRouter_LabelsEntry>): HttpRouter_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
