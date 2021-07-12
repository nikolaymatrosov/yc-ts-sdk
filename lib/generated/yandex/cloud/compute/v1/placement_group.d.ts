import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface PlacementGroup {
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
    labels: {
        [key: string]: string;
    };
    /**
     * Anti-affinity placement strategy (`spread`). Instances are distributed
     * over distinct failure domains.
     */
    spreadPlacementStrategy: SpreadPlacementStrategy | undefined;
}
export interface PlacementGroup_LabelsEntry {
    key: string;
    value: string;
}
/**
 * This is an empty structure that must be passed to explicitly
 * specify the required placement strategy.
 */
export interface SpreadPlacementStrategy {
}
export declare const PlacementGroup: {
    encode(message: PlacementGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementGroup;
    fromJSON(object: any): PlacementGroup;
    toJSON(message: PlacementGroup): unknown;
    fromPartial(object: DeepPartial<PlacementGroup>): PlacementGroup;
};
export declare const PlacementGroup_LabelsEntry: {
    encode(message: PlacementGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementGroup_LabelsEntry;
    fromJSON(object: any): PlacementGroup_LabelsEntry;
    toJSON(message: PlacementGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<PlacementGroup_LabelsEntry>): PlacementGroup_LabelsEntry;
};
export declare const SpreadPlacementStrategy: {
    encode(_: SpreadPlacementStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpreadPlacementStrategy;
    fromJSON(_: any): SpreadPlacementStrategy;
    toJSON(_: SpreadPlacementStrategy): unknown;
    fromPartial(_: DeepPartial<SpreadPlacementStrategy>): SpreadPlacementStrategy;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
