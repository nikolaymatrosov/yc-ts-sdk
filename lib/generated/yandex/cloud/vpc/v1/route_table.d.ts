import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** A RouteTable resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes). */
export interface RouteTable {
    /** ID of the route table. */
    id: string;
    /** ID of the folder that the route table belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /** Name of the route table. The name is unique within the project. 3-63 characters long. */
    name: string;
    /** Optional description of the route table. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network the route table belongs to. */
    networkId: string;
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}
export interface RouteTable_LabelsEntry {
    key: string;
    value: string;
}
/** A StaticRoute resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes). */
export interface StaticRoute {
    /** Destination subnet in CIDR notation */
    destinationPrefix: string | undefined;
    /** Next hop IP address */
    nextHopAddress: string | undefined;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export interface StaticRoute_LabelsEntry {
    key: string;
    value: string;
}
export declare const RouteTable: {
    encode(message: RouteTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteTable;
    fromJSON(object: any): RouteTable;
    toJSON(message: RouteTable): unknown;
    fromPartial(object: DeepPartial<RouteTable>): RouteTable;
};
export declare const RouteTable_LabelsEntry: {
    encode(message: RouteTable_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteTable_LabelsEntry;
    fromJSON(object: any): RouteTable_LabelsEntry;
    toJSON(message: RouteTable_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<RouteTable_LabelsEntry>): RouteTable_LabelsEntry;
};
export declare const StaticRoute: {
    encode(message: StaticRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StaticRoute;
    fromJSON(object: any): StaticRoute;
    toJSON(message: StaticRoute): unknown;
    fromPartial(object: DeepPartial<StaticRoute>): StaticRoute;
};
export declare const StaticRoute_LabelsEntry: {
    encode(message: StaticRoute_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StaticRoute_LabelsEntry;
    fromJSON(object: any): StaticRoute_LabelsEntry;
    toJSON(message: StaticRoute_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<StaticRoute_LabelsEntry>): StaticRoute_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
