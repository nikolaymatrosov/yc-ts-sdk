import { VirtualHost, RouteOptions } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * An HTTP router resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router).
 */
export interface HttpRouter {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter';
    /** ID of the router. Generated at creation time. */
    id: string;
    /** Name of the router. The name is unique within the folder. */
    name: string;
    /** Description of the router. */
    description: string;
    /** ID of the folder that the router belongs to. */
    folderId: string;
    /**
     * Router labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     */
    virtualHosts: VirtualHost[];
    /** Creation timestamp. */
    createdAt: Date | undefined;
    routeOptions: RouteOptions | undefined;
}
export interface HttpRouter_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry';
    key: string;
    value: string;
}
export declare const HttpRouter: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter";
    encode(message: HttpRouter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouter;
    fromJSON(object: any): HttpRouter;
    toJSON(message: HttpRouter): unknown;
    fromPartial(object: DeepPartial<HttpRouter>): HttpRouter;
};
export declare const HttpRouter_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry";
    encode(message: HttpRouter_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouter_LabelsEntry;
    fromJSON(object: any): HttpRouter_LabelsEntry;
    toJSON(message: HttpRouter_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<HttpRouter_LabelsEntry>): HttpRouter_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
