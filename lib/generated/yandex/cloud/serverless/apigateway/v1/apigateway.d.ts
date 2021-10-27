import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.apigateway.v1";
export interface ApiGateway {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway';
    /** ID of the API gateway. Generated at creation time. */
    id: string;
    /** ID of the folder that the API gateway belongs to. */
    folderId: string;
    /** Creation timestamp for the API-gateway. */
    createdAt: Date | undefined;
    /** Name of the API gateway. The name is unique within the folder. */
    name: string;
    /** Description of the API gateway. */
    description: string;
    /** API gateway labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Status of the API gateway. */
    status: ApiGateway_Status;
    /** Default domain for the API gateway. Generated at creation time. */
    domain: string;
    /** ID of the log group for the API gateway. */
    logGroupId: string;
    /** List of domains attached to API gateway. */
    attachedDomains: AttachedDomain[];
}
export declare enum ApiGateway_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - API gateway is being created. */
    CREATING = 1,
    /** ACTIVE - API gateway is ready for use. */
    ACTIVE = 2,
    /** DELETING - API gateway is being deleted. */
    DELETING = 3,
    /** ERROR - API gateway failed. The only allowed action is delete. */
    ERROR = 4,
    /** UPDATING - API gateway is being updated. */
    UPDATING = 5,
    UNRECOGNIZED = -1
}
export declare function apiGateway_StatusFromJSON(object: any): ApiGateway_Status;
export declare function apiGateway_StatusToJSON(object: ApiGateway_Status): string;
export interface ApiGateway_LabelsEntry {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry';
    key: string;
    value: string;
}
export interface AttachedDomain {
    $type: 'yandex.cloud.serverless.apigateway.v1.AttachedDomain';
    /** ID of the domain. */
    domainId: string;
    /** ID of the domain certificate. */
    certificateId: string;
    /** Enabling flag. */
    enabled: boolean;
    /** Name of the domain. */
    domain: string;
}
export declare const ApiGateway: {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway";
    encode(message: ApiGateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiGateway;
    fromJSON(object: any): ApiGateway;
    toJSON(message: ApiGateway): unknown;
    fromPartial(object: DeepPartial<ApiGateway>): ApiGateway;
};
export declare const ApiGateway_LabelsEntry: {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry";
    encode(message: ApiGateway_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiGateway_LabelsEntry;
    fromJSON(object: any): ApiGateway_LabelsEntry;
    toJSON(message: ApiGateway_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<ApiGateway_LabelsEntry>): ApiGateway_LabelsEntry;
};
export declare const AttachedDomain: {
    $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain";
    encode(message: AttachedDomain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDomain;
    fromJSON(object: any): AttachedDomain;
    toJSON(message: AttachedDomain): unknown;
    fromPartial(object: DeepPartial<AttachedDomain>): AttachedDomain;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
