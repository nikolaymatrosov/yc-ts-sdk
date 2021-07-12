/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { SecurityGroupRule_Direction, SecurityGroup, PortRange, CidrBlocks } from '../../../../yandex/cloud/vpc/v1/security_group';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetSecurityGroupRequest {
    securityGroupId: string;
}
export interface ListSecurityGroupsRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    /** filter by network_id is here */
    filter: string;
}
export interface ListSecurityGroupsResponse {
    securityGroups: SecurityGroup[];
    nextPageToken: string;
}
export interface CreateSecurityGroupRequest {
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    networkId: string;
    ruleSpecs: SecurityGroupRuleSpec[];
}
export interface CreateSecurityGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface SecurityGroupRuleSpec {
    description: string;
    labels: {
        [key: string]: string;
    };
    direction: SecurityGroupRule_Direction;
    /** null value means any port */
    ports: PortRange | undefined;
    protocolName: string | undefined;
    protocolNumber: number | undefined;
    cidrBlocks: CidrBlocks | undefined;
    securityGroupId: string | undefined;
    /** string subnet_id = .. ; */
    predefinedTarget: string | undefined;
}
export interface SecurityGroupRuleSpec_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateSecurityGroupMetadata {
    securityGroupId: string;
}
export interface UpdateSecurityGroupRequest {
    securityGroupId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    /** all existing rules will be replaced with given list */
    ruleSpecs: SecurityGroupRuleSpec[];
}
export interface UpdateSecurityGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateSecurityGroupMetadata {
    securityGroupId: string;
    addedRuleIds: string[];
}
export interface UpdateSecurityGroupRulesRequest {
    securityGroupId: string;
    /** list of rules ids to delete */
    deletionRuleIds: string[];
    additionRuleSpecs: SecurityGroupRuleSpec[];
}
export interface UpdateSecurityGroupRuleRequest {
    securityGroupId: string;
    ruleId: string;
    updateMask: FieldMask | undefined;
    description: string;
    labels: {
        [key: string]: string;
    };
}
export interface UpdateSecurityGroupRuleRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateSecurityGroupRuleMetadata {
    securityGroupId: string;
    ruleId: string;
}
export interface DeleteSecurityGroupRequest {
    securityGroupId: string;
}
export interface DeleteSecurityGroupMetadata {
    securityGroupId: string;
}
export interface ListSecurityGroupOperationsRequest {
    securityGroupId: string;
    pageSize: number;
    pageToken: string;
}
export interface ListSecurityGroupOperationsResponse {
    operations: Operation[];
    nextPageToken: string;
}
export interface MoveSecurityGroupRequest {
    securityGroupId: string;
    destinationFolderId: string;
}
export interface MoveSecurityGroupMetadata {
    securityGroupId: string;
}
export declare const GetSecurityGroupRequest: {
    encode(message: GetSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSecurityGroupRequest;
    fromJSON(object: any): GetSecurityGroupRequest;
    toJSON(message: GetSecurityGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetSecurityGroupRequest>): GetSecurityGroupRequest;
};
export declare const ListSecurityGroupsRequest: {
    encode(message: ListSecurityGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupsRequest;
    fromJSON(object: any): ListSecurityGroupsRequest;
    toJSON(message: ListSecurityGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListSecurityGroupsRequest>): ListSecurityGroupsRequest;
};
export declare const ListSecurityGroupsResponse: {
    encode(message: ListSecurityGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupsResponse;
    fromJSON(object: any): ListSecurityGroupsResponse;
    toJSON(message: ListSecurityGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListSecurityGroupsResponse>): ListSecurityGroupsResponse;
};
export declare const CreateSecurityGroupRequest: {
    encode(message: CreateSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecurityGroupRequest;
    fromJSON(object: any): CreateSecurityGroupRequest;
    toJSON(message: CreateSecurityGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateSecurityGroupRequest>): CreateSecurityGroupRequest;
};
export declare const CreateSecurityGroupRequest_LabelsEntry: {
    encode(message: CreateSecurityGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecurityGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateSecurityGroupRequest_LabelsEntry;
    toJSON(message: CreateSecurityGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateSecurityGroupRequest_LabelsEntry>): CreateSecurityGroupRequest_LabelsEntry;
};
export declare const SecurityGroupRuleSpec: {
    encode(message: SecurityGroupRuleSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroupRuleSpec;
    fromJSON(object: any): SecurityGroupRuleSpec;
    toJSON(message: SecurityGroupRuleSpec): unknown;
    fromPartial(object: DeepPartial<SecurityGroupRuleSpec>): SecurityGroupRuleSpec;
};
export declare const SecurityGroupRuleSpec_LabelsEntry: {
    encode(message: SecurityGroupRuleSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroupRuleSpec_LabelsEntry;
    fromJSON(object: any): SecurityGroupRuleSpec_LabelsEntry;
    toJSON(message: SecurityGroupRuleSpec_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<SecurityGroupRuleSpec_LabelsEntry>): SecurityGroupRuleSpec_LabelsEntry;
};
export declare const CreateSecurityGroupMetadata: {
    encode(message: CreateSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecurityGroupMetadata;
    fromJSON(object: any): CreateSecurityGroupMetadata;
    toJSON(message: CreateSecurityGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateSecurityGroupMetadata>): CreateSecurityGroupMetadata;
};
export declare const UpdateSecurityGroupRequest: {
    encode(message: UpdateSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRequest;
    fromJSON(object: any): UpdateSecurityGroupRequest;
    toJSON(message: UpdateSecurityGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupRequest>): UpdateSecurityGroupRequest;
};
export declare const UpdateSecurityGroupRequest_LabelsEntry: {
    encode(message: UpdateSecurityGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateSecurityGroupRequest_LabelsEntry;
    toJSON(message: UpdateSecurityGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupRequest_LabelsEntry>): UpdateSecurityGroupRequest_LabelsEntry;
};
export declare const UpdateSecurityGroupMetadata: {
    encode(message: UpdateSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupMetadata;
    fromJSON(object: any): UpdateSecurityGroupMetadata;
    toJSON(message: UpdateSecurityGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupMetadata>): UpdateSecurityGroupMetadata;
};
export declare const UpdateSecurityGroupRulesRequest: {
    encode(message: UpdateSecurityGroupRulesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRulesRequest;
    fromJSON(object: any): UpdateSecurityGroupRulesRequest;
    toJSON(message: UpdateSecurityGroupRulesRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupRulesRequest>): UpdateSecurityGroupRulesRequest;
};
export declare const UpdateSecurityGroupRuleRequest: {
    encode(message: UpdateSecurityGroupRuleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRuleRequest;
    fromJSON(object: any): UpdateSecurityGroupRuleRequest;
    toJSON(message: UpdateSecurityGroupRuleRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupRuleRequest>): UpdateSecurityGroupRuleRequest;
};
export declare const UpdateSecurityGroupRuleRequest_LabelsEntry: {
    encode(message: UpdateSecurityGroupRuleRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRuleRequest_LabelsEntry;
    fromJSON(object: any): UpdateSecurityGroupRuleRequest_LabelsEntry;
    toJSON(message: UpdateSecurityGroupRuleRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupRuleRequest_LabelsEntry>): UpdateSecurityGroupRuleRequest_LabelsEntry;
};
export declare const UpdateSecurityGroupRuleMetadata: {
    encode(message: UpdateSecurityGroupRuleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRuleMetadata;
    fromJSON(object: any): UpdateSecurityGroupRuleMetadata;
    toJSON(message: UpdateSecurityGroupRuleMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSecurityGroupRuleMetadata>): UpdateSecurityGroupRuleMetadata;
};
export declare const DeleteSecurityGroupRequest: {
    encode(message: DeleteSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecurityGroupRequest;
    fromJSON(object: any): DeleteSecurityGroupRequest;
    toJSON(message: DeleteSecurityGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteSecurityGroupRequest>): DeleteSecurityGroupRequest;
};
export declare const DeleteSecurityGroupMetadata: {
    encode(message: DeleteSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecurityGroupMetadata;
    fromJSON(object: any): DeleteSecurityGroupMetadata;
    toJSON(message: DeleteSecurityGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteSecurityGroupMetadata>): DeleteSecurityGroupMetadata;
};
export declare const ListSecurityGroupOperationsRequest: {
    encode(message: ListSecurityGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupOperationsRequest;
    fromJSON(object: any): ListSecurityGroupOperationsRequest;
    toJSON(message: ListSecurityGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListSecurityGroupOperationsRequest>): ListSecurityGroupOperationsRequest;
};
export declare const ListSecurityGroupOperationsResponse: {
    encode(message: ListSecurityGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupOperationsResponse;
    fromJSON(object: any): ListSecurityGroupOperationsResponse;
    toJSON(message: ListSecurityGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListSecurityGroupOperationsResponse>): ListSecurityGroupOperationsResponse;
};
export declare const MoveSecurityGroupRequest: {
    encode(message: MoveSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveSecurityGroupRequest;
    fromJSON(object: any): MoveSecurityGroupRequest;
    toJSON(message: MoveSecurityGroupRequest): unknown;
    fromPartial(object: DeepPartial<MoveSecurityGroupRequest>): MoveSecurityGroupRequest;
};
export declare const MoveSecurityGroupMetadata: {
    encode(message: MoveSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveSecurityGroupMetadata;
    fromJSON(object: any): MoveSecurityGroupMetadata;
    toJSON(message: MoveSecurityGroupMetadata): unknown;
    fromPartial(object: DeepPartial<MoveSecurityGroupMetadata>): MoveSecurityGroupMetadata;
};
export declare const SecurityGroupServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSecurityGroupRequest;
        readonly responseSerialize: (value: SecurityGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SecurityGroup;
    };
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecurityGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecurityGroupsRequest;
        readonly responseSerialize: (value: ListSecurityGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecurityGroupsResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateRules: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecurityGroupRulesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecurityGroupRulesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** update rule description or labels */
    readonly updateRule: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecurityGroupRuleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecurityGroupRuleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecurityGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecurityGroupOperationsRequest;
        readonly responseSerialize: (value: ListSecurityGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecurityGroupOperationsResponse;
    };
};
export interface SecurityGroupServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetSecurityGroupRequest, SecurityGroup>;
    list: handleUnaryCall<ListSecurityGroupsRequest, ListSecurityGroupsResponse>;
    create: handleUnaryCall<CreateSecurityGroupRequest, Operation>;
    update: handleUnaryCall<UpdateSecurityGroupRequest, Operation>;
    updateRules: handleUnaryCall<UpdateSecurityGroupRulesRequest, Operation>;
    /** update rule description or labels */
    updateRule: handleUnaryCall<UpdateSecurityGroupRuleRequest, Operation>;
    delete: handleUnaryCall<DeleteSecurityGroupRequest, Operation>;
    move: handleUnaryCall<MoveSecurityGroupRequest, Operation>;
    listOperations: handleUnaryCall<ListSecurityGroupOperationsRequest, ListSecurityGroupOperationsResponse>;
}
export interface SecurityGroupServiceClient extends Client {
    get(request: GetSecurityGroupRequest, callback: (error: ServiceError | null, response: SecurityGroup) => void): ClientUnaryCall;
    get(request: GetSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SecurityGroup) => void): ClientUnaryCall;
    get(request: GetSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SecurityGroup) => void): ClientUnaryCall;
    list(request: ListSecurityGroupsRequest, callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void): ClientUnaryCall;
    list(request: ListSecurityGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void): ClientUnaryCall;
    list(request: ListSecurityGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void): ClientUnaryCall;
    create(request: CreateSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRules(request: UpdateSecurityGroupRulesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRules(request: UpdateSecurityGroupRulesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRules(request: UpdateSecurityGroupRulesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** update rule description or labels */
    updateRule(request: UpdateSecurityGroupRuleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRule(request: UpdateSecurityGroupRuleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRule(request: UpdateSecurityGroupRuleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    listOperations(request: ListSecurityGroupOperationsRequest, callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecurityGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecurityGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const SecurityGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SecurityGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
