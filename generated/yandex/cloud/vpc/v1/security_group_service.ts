/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    SecurityGroupRule_Direction,
    SecurityGroup,
    PortRange,
    CidrBlocks,
    securityGroupRule_DirectionFromJSON,
    securityGroupRule_DirectionToJSON,
} from '../../../../yandex/cloud/vpc/v1/security_group';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.vpc.v1';

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
    labels: { [key: string]: string };
    networkId: string;
    ruleSpecs: SecurityGroupRuleSpec[];
}

export interface CreateSecurityGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface SecurityGroupRuleSpec {
    description: string;
    labels: { [key: string]: string };
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
    labels: { [key: string]: string };
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
    labels: { [key: string]: string };
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

const baseGetSecurityGroupRequest: object = { securityGroupId: '' };

export const GetSecurityGroupRequest = {
    encode(
        message: GetSecurityGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetSecurityGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetSecurityGroupRequest,
        } as GetSecurityGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSecurityGroupRequest {
        const message = {
            ...baseGetSecurityGroupRequest,
        } as GetSecurityGroupRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        return message;
    },

    toJSON(message: GetSecurityGroupRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetSecurityGroupRequest>
    ): GetSecurityGroupRequest {
        const message = {
            ...baseGetSecurityGroupRequest,
        } as GetSecurityGroupRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        return message;
    },
};

const baseListSecurityGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListSecurityGroupsRequest = {
    encode(
        message: ListSecurityGroupsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSecurityGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSecurityGroupsRequest,
        } as ListSecurityGroupsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSecurityGroupsRequest {
        const message = {
            ...baseListSecurityGroupsRequest,
        } as ListSecurityGroupsRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        return message;
    },

    toJSON(message: ListSecurityGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSecurityGroupsRequest>
    ): ListSecurityGroupsRequest {
        const message = {
            ...baseListSecurityGroupsRequest,
        } as ListSecurityGroupsRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        return message;
    },
};

const baseListSecurityGroupsResponse: object = { nextPageToken: '' };

export const ListSecurityGroupsResponse = {
    encode(
        message: ListSecurityGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.securityGroups) {
            SecurityGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSecurityGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSecurityGroupsResponse,
        } as ListSecurityGroupsResponse;
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroups.push(
                        SecurityGroup.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSecurityGroupsResponse {
        const message = {
            ...baseListSecurityGroupsResponse,
        } as ListSecurityGroupsResponse;
        message.securityGroups = [];
        if (
            object.securityGroups !== undefined &&
            object.securityGroups !== null
        ) {
            for (const e of object.securityGroups) {
                message.securityGroups.push(SecurityGroup.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListSecurityGroupsResponse): unknown {
        const obj: any = {};
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) =>
                e ? SecurityGroup.toJSON(e) : undefined
            );
        } else {
            obj.securityGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSecurityGroupsResponse>
    ): ListSecurityGroupsResponse {
        const message = {
            ...baseListSecurityGroupsResponse,
        } as ListSecurityGroupsResponse;
        message.securityGroups = [];
        if (
            object.securityGroups !== undefined &&
            object.securityGroups !== null
        ) {
            for (const e of object.securityGroups) {
                message.securityGroups.push(SecurityGroup.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseCreateSecurityGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
};

export const CreateSecurityGroupRequest = {
    encode(
        message: CreateSecurityGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateSecurityGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        for (const v of message.ruleSpecs) {
            SecurityGroupRuleSpec.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSecurityGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecurityGroupRequest,
        } as CreateSecurityGroupRequest;
        message.labels = {};
        message.ruleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 =
                        CreateSecurityGroupRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.ruleSpecs.push(
                        SecurityGroupRuleSpec.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSecurityGroupRequest {
        const message = {
            ...baseCreateSecurityGroupRequest,
        } as CreateSecurityGroupRequest;
        message.labels = {};
        message.ruleSpecs = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(SecurityGroupRuleSpec.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: CreateSecurityGroupRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.ruleSpecs) {
            obj.ruleSpecs = message.ruleSpecs.map((e) =>
                e ? SecurityGroupRuleSpec.toJSON(e) : undefined
            );
        } else {
            obj.ruleSpecs = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSecurityGroupRequest>
    ): CreateSecurityGroupRequest {
        const message = {
            ...baseCreateSecurityGroupRequest,
        } as CreateSecurityGroupRequest;
        message.labels = {};
        message.ruleSpecs = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(SecurityGroupRuleSpec.fromPartial(e));
            }
        }
        return message;
    },
};

const baseCreateSecurityGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const CreateSecurityGroupRequest_LabelsEntry = {
    encode(
        message: CreateSecurityGroupRequest_LabelsEntry,
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
    ): CreateSecurityGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecurityGroupRequest_LabelsEntry,
        } as CreateSecurityGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateSecurityGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateSecurityGroupRequest_LabelsEntry,
        } as CreateSecurityGroupRequest_LabelsEntry;
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

    toJSON(message: CreateSecurityGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSecurityGroupRequest_LabelsEntry>
    ): CreateSecurityGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateSecurityGroupRequest_LabelsEntry,
        } as CreateSecurityGroupRequest_LabelsEntry;
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

const baseSecurityGroupRuleSpec: object = { description: '', direction: 0 };

export const SecurityGroupRuleSpec = {
    encode(
        message: SecurityGroupRuleSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            SecurityGroupRuleSpec_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork()
            ).ldelim();
        });
        if (message.direction !== 0) {
            writer.uint32(24).int32(message.direction);
        }
        if (message.ports !== undefined) {
            PortRange.encode(message.ports, writer.uint32(34).fork()).ldelim();
        }
        if (message.protocolName !== undefined) {
            writer.uint32(42).string(message.protocolName);
        }
        if (message.protocolNumber !== undefined) {
            writer.uint32(48).int64(message.protocolNumber);
        }
        if (message.cidrBlocks !== undefined) {
            CidrBlocks.encode(
                message.cidrBlocks,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.securityGroupId !== undefined) {
            writer.uint32(66).string(message.securityGroupId);
        }
        if (message.predefinedTarget !== undefined) {
            writer.uint32(74).string(message.predefinedTarget);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SecurityGroupRuleSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityGroupRuleSpec,
        } as SecurityGroupRuleSpec;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    const entry2 = SecurityGroupRuleSpec_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.direction = reader.int32() as any;
                    break;
                case 4:
                    message.ports = PortRange.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.protocolName = reader.string();
                    break;
                case 6:
                    message.protocolNumber = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 7:
                    message.cidrBlocks = CidrBlocks.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.securityGroupId = reader.string();
                    break;
                case 9:
                    message.predefinedTarget = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityGroupRuleSpec {
        const message = {
            ...baseSecurityGroupRuleSpec,
        } as SecurityGroupRuleSpec;
        message.labels = {};
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
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = securityGroupRule_DirectionFromJSON(
                object.direction
            );
        } else {
            message.direction = 0;
        }
        if (object.ports !== undefined && object.ports !== null) {
            message.ports = PortRange.fromJSON(object.ports);
        } else {
            message.ports = undefined;
        }
        if (object.protocolName !== undefined && object.protocolName !== null) {
            message.protocolName = String(object.protocolName);
        } else {
            message.protocolName = undefined;
        }
        if (
            object.protocolNumber !== undefined &&
            object.protocolNumber !== null
        ) {
            message.protocolNumber = Number(object.protocolNumber);
        } else {
            message.protocolNumber = undefined;
        }
        if (object.cidrBlocks !== undefined && object.cidrBlocks !== null) {
            message.cidrBlocks = CidrBlocks.fromJSON(object.cidrBlocks);
        } else {
            message.cidrBlocks = undefined;
        }
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = undefined;
        }
        if (
            object.predefinedTarget !== undefined &&
            object.predefinedTarget !== null
        ) {
            message.predefinedTarget = String(object.predefinedTarget);
        } else {
            message.predefinedTarget = undefined;
        }
        return message;
    },

    toJSON(message: SecurityGroupRuleSpec): unknown {
        const obj: any = {};
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.direction !== undefined &&
            (obj.direction = securityGroupRule_DirectionToJSON(
                message.direction
            ));
        message.ports !== undefined &&
            (obj.ports = message.ports
                ? PortRange.toJSON(message.ports)
                : undefined);
        message.protocolName !== undefined &&
            (obj.protocolName = message.protocolName);
        message.protocolNumber !== undefined &&
            (obj.protocolNumber = message.protocolNumber);
        message.cidrBlocks !== undefined &&
            (obj.cidrBlocks = message.cidrBlocks
                ? CidrBlocks.toJSON(message.cidrBlocks)
                : undefined);
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.predefinedTarget !== undefined &&
            (obj.predefinedTarget = message.predefinedTarget);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SecurityGroupRuleSpec>
    ): SecurityGroupRuleSpec {
        const message = {
            ...baseSecurityGroupRuleSpec,
        } as SecurityGroupRuleSpec;
        message.labels = {};
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
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = object.direction;
        } else {
            message.direction = 0;
        }
        if (object.ports !== undefined && object.ports !== null) {
            message.ports = PortRange.fromPartial(object.ports);
        } else {
            message.ports = undefined;
        }
        if (object.protocolName !== undefined && object.protocolName !== null) {
            message.protocolName = object.protocolName;
        } else {
            message.protocolName = undefined;
        }
        if (
            object.protocolNumber !== undefined &&
            object.protocolNumber !== null
        ) {
            message.protocolNumber = object.protocolNumber;
        } else {
            message.protocolNumber = undefined;
        }
        if (object.cidrBlocks !== undefined && object.cidrBlocks !== null) {
            message.cidrBlocks = CidrBlocks.fromPartial(object.cidrBlocks);
        } else {
            message.cidrBlocks = undefined;
        }
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = undefined;
        }
        if (
            object.predefinedTarget !== undefined &&
            object.predefinedTarget !== null
        ) {
            message.predefinedTarget = object.predefinedTarget;
        } else {
            message.predefinedTarget = undefined;
        }
        return message;
    },
};

const baseSecurityGroupRuleSpec_LabelsEntry: object = { key: '', value: '' };

export const SecurityGroupRuleSpec_LabelsEntry = {
    encode(
        message: SecurityGroupRuleSpec_LabelsEntry,
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
    ): SecurityGroupRuleSpec_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityGroupRuleSpec_LabelsEntry,
        } as SecurityGroupRuleSpec_LabelsEntry;
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

    fromJSON(object: any): SecurityGroupRuleSpec_LabelsEntry {
        const message = {
            ...baseSecurityGroupRuleSpec_LabelsEntry,
        } as SecurityGroupRuleSpec_LabelsEntry;
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

    toJSON(message: SecurityGroupRuleSpec_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SecurityGroupRuleSpec_LabelsEntry>
    ): SecurityGroupRuleSpec_LabelsEntry {
        const message = {
            ...baseSecurityGroupRuleSpec_LabelsEntry,
        } as SecurityGroupRuleSpec_LabelsEntry;
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

const baseCreateSecurityGroupMetadata: object = { securityGroupId: '' };

export const CreateSecurityGroupMetadata = {
    encode(
        message: CreateSecurityGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSecurityGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecurityGroupMetadata,
        } as CreateSecurityGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSecurityGroupMetadata {
        const message = {
            ...baseCreateSecurityGroupMetadata,
        } as CreateSecurityGroupMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateSecurityGroupMetadata): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSecurityGroupMetadata>
    ): CreateSecurityGroupMetadata {
        const message = {
            ...baseCreateSecurityGroupMetadata,
        } as CreateSecurityGroupMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        return message;
    },
};

const baseUpdateSecurityGroupRequest: object = {
    securityGroupId: '',
    name: '',
    description: '',
};

export const UpdateSecurityGroupRequest = {
    encode(
        message: UpdateSecurityGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateSecurityGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        for (const v of message.ruleSpecs) {
            SecurityGroupRuleSpec.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecurityGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRequest,
        } as UpdateSecurityGroupRequest;
        message.labels = {};
        message.ruleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 =
                        UpdateSecurityGroupRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.ruleSpecs.push(
                        SecurityGroupRuleSpec.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecurityGroupRequest {
        const message = {
            ...baseUpdateSecurityGroupRequest,
        } as UpdateSecurityGroupRequest;
        message.labels = {};
        message.ruleSpecs = [];
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(SecurityGroupRuleSpec.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateSecurityGroupRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.ruleSpecs) {
            obj.ruleSpecs = message.ruleSpecs.map((e) =>
                e ? SecurityGroupRuleSpec.toJSON(e) : undefined
            );
        } else {
            obj.ruleSpecs = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupRequest>
    ): UpdateSecurityGroupRequest {
        const message = {
            ...baseUpdateSecurityGroupRequest,
        } as UpdateSecurityGroupRequest;
        message.labels = {};
        message.ruleSpecs = [];
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        if (object.ruleSpecs !== undefined && object.ruleSpecs !== null) {
            for (const e of object.ruleSpecs) {
                message.ruleSpecs.push(SecurityGroupRuleSpec.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpdateSecurityGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateSecurityGroupRequest_LabelsEntry = {
    encode(
        message: UpdateSecurityGroupRequest_LabelsEntry,
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
    ): UpdateSecurityGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRequest_LabelsEntry,
        } as UpdateSecurityGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateSecurityGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecurityGroupRequest_LabelsEntry,
        } as UpdateSecurityGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateSecurityGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupRequest_LabelsEntry>
    ): UpdateSecurityGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecurityGroupRequest_LabelsEntry,
        } as UpdateSecurityGroupRequest_LabelsEntry;
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

const baseUpdateSecurityGroupMetadata: object = {
    securityGroupId: '',
    addedRuleIds: '',
};

export const UpdateSecurityGroupMetadata = {
    encode(
        message: UpdateSecurityGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        for (const v of message.addedRuleIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecurityGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupMetadata,
        } as UpdateSecurityGroupMetadata;
        message.addedRuleIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.addedRuleIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecurityGroupMetadata {
        const message = {
            ...baseUpdateSecurityGroupMetadata,
        } as UpdateSecurityGroupMetadata;
        message.addedRuleIds = [];
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (object.addedRuleIds !== undefined && object.addedRuleIds !== null) {
            for (const e of object.addedRuleIds) {
                message.addedRuleIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateSecurityGroupMetadata): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        if (message.addedRuleIds) {
            obj.addedRuleIds = message.addedRuleIds.map((e) => e);
        } else {
            obj.addedRuleIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupMetadata>
    ): UpdateSecurityGroupMetadata {
        const message = {
            ...baseUpdateSecurityGroupMetadata,
        } as UpdateSecurityGroupMetadata;
        message.addedRuleIds = [];
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (object.addedRuleIds !== undefined && object.addedRuleIds !== null) {
            for (const e of object.addedRuleIds) {
                message.addedRuleIds.push(e);
            }
        }
        return message;
    },
};

const baseUpdateSecurityGroupRulesRequest: object = {
    securityGroupId: '',
    deletionRuleIds: '',
};

export const UpdateSecurityGroupRulesRequest = {
    encode(
        message: UpdateSecurityGroupRulesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        for (const v of message.deletionRuleIds) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.additionRuleSpecs) {
            SecurityGroupRuleSpec.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecurityGroupRulesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRulesRequest,
        } as UpdateSecurityGroupRulesRequest;
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.deletionRuleIds.push(reader.string());
                    break;
                case 3:
                    message.additionRuleSpecs.push(
                        SecurityGroupRuleSpec.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecurityGroupRulesRequest {
        const message = {
            ...baseUpdateSecurityGroupRulesRequest,
        } as UpdateSecurityGroupRulesRequest;
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (
            object.deletionRuleIds !== undefined &&
            object.deletionRuleIds !== null
        ) {
            for (const e of object.deletionRuleIds) {
                message.deletionRuleIds.push(String(e));
            }
        }
        if (
            object.additionRuleSpecs !== undefined &&
            object.additionRuleSpecs !== null
        ) {
            for (const e of object.additionRuleSpecs) {
                message.additionRuleSpecs.push(
                    SecurityGroupRuleSpec.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: UpdateSecurityGroupRulesRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        if (message.deletionRuleIds) {
            obj.deletionRuleIds = message.deletionRuleIds.map((e) => e);
        } else {
            obj.deletionRuleIds = [];
        }
        if (message.additionRuleSpecs) {
            obj.additionRuleSpecs = message.additionRuleSpecs.map((e) =>
                e ? SecurityGroupRuleSpec.toJSON(e) : undefined
            );
        } else {
            obj.additionRuleSpecs = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupRulesRequest>
    ): UpdateSecurityGroupRulesRequest {
        const message = {
            ...baseUpdateSecurityGroupRulesRequest,
        } as UpdateSecurityGroupRulesRequest;
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (
            object.deletionRuleIds !== undefined &&
            object.deletionRuleIds !== null
        ) {
            for (const e of object.deletionRuleIds) {
                message.deletionRuleIds.push(e);
            }
        }
        if (
            object.additionRuleSpecs !== undefined &&
            object.additionRuleSpecs !== null
        ) {
            for (const e of object.additionRuleSpecs) {
                message.additionRuleSpecs.push(
                    SecurityGroupRuleSpec.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const baseUpdateSecurityGroupRuleRequest: object = {
    securityGroupId: '',
    ruleId: '',
    description: '',
};

export const UpdateSecurityGroupRuleRequest = {
    encode(
        message: UpdateSecurityGroupRuleRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.ruleId !== '') {
            writer.uint32(18).string(message.ruleId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateSecurityGroupRuleRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecurityGroupRuleRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRuleRequest,
        } as UpdateSecurityGroupRuleRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 =
                        UpdateSecurityGroupRuleRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecurityGroupRuleRequest {
        const message = {
            ...baseUpdateSecurityGroupRuleRequest,
        } as UpdateSecurityGroupRuleRequest;
        message.labels = {};
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = String(object.ruleId);
        } else {
            message.ruleId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        return message;
    },

    toJSON(message: UpdateSecurityGroupRuleRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupRuleRequest>
    ): UpdateSecurityGroupRuleRequest {
        const message = {
            ...baseUpdateSecurityGroupRuleRequest,
        } as UpdateSecurityGroupRuleRequest;
        message.labels = {};
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = object.ruleId;
        } else {
            message.ruleId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        return message;
    },
};

const baseUpdateSecurityGroupRuleRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateSecurityGroupRuleRequest_LabelsEntry = {
    encode(
        message: UpdateSecurityGroupRuleRequest_LabelsEntry,
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
    ): UpdateSecurityGroupRuleRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
        } as UpdateSecurityGroupRuleRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateSecurityGroupRuleRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
        } as UpdateSecurityGroupRuleRequest_LabelsEntry;
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

    toJSON(message: UpdateSecurityGroupRuleRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupRuleRequest_LabelsEntry>
    ): UpdateSecurityGroupRuleRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
        } as UpdateSecurityGroupRuleRequest_LabelsEntry;
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

const baseUpdateSecurityGroupRuleMetadata: object = {
    securityGroupId: '',
    ruleId: '',
};

export const UpdateSecurityGroupRuleMetadata = {
    encode(
        message: UpdateSecurityGroupRuleMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.ruleId !== '') {
            writer.uint32(18).string(message.ruleId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSecurityGroupRuleMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityGroupRuleMetadata,
        } as UpdateSecurityGroupRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecurityGroupRuleMetadata {
        const message = {
            ...baseUpdateSecurityGroupRuleMetadata,
        } as UpdateSecurityGroupRuleMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = String(object.ruleId);
        } else {
            message.ruleId = '';
        }
        return message;
    },

    toJSON(message: UpdateSecurityGroupRuleMetadata): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSecurityGroupRuleMetadata>
    ): UpdateSecurityGroupRuleMetadata {
        const message = {
            ...baseUpdateSecurityGroupRuleMetadata,
        } as UpdateSecurityGroupRuleMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (object.ruleId !== undefined && object.ruleId !== null) {
            message.ruleId = object.ruleId;
        } else {
            message.ruleId = '';
        }
        return message;
    },
};

const baseDeleteSecurityGroupRequest: object = { securityGroupId: '' };

export const DeleteSecurityGroupRequest = {
    encode(
        message: DeleteSecurityGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSecurityGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSecurityGroupRequest,
        } as DeleteSecurityGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSecurityGroupRequest {
        const message = {
            ...baseDeleteSecurityGroupRequest,
        } as DeleteSecurityGroupRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteSecurityGroupRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteSecurityGroupRequest>
    ): DeleteSecurityGroupRequest {
        const message = {
            ...baseDeleteSecurityGroupRequest,
        } as DeleteSecurityGroupRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        return message;
    },
};

const baseDeleteSecurityGroupMetadata: object = { securityGroupId: '' };

export const DeleteSecurityGroupMetadata = {
    encode(
        message: DeleteSecurityGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSecurityGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSecurityGroupMetadata,
        } as DeleteSecurityGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSecurityGroupMetadata {
        const message = {
            ...baseDeleteSecurityGroupMetadata,
        } as DeleteSecurityGroupMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteSecurityGroupMetadata): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteSecurityGroupMetadata>
    ): DeleteSecurityGroupMetadata {
        const message = {
            ...baseDeleteSecurityGroupMetadata,
        } as DeleteSecurityGroupMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        return message;
    },
};

const baseListSecurityGroupOperationsRequest: object = {
    securityGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSecurityGroupOperationsRequest = {
    encode(
        message: ListSecurityGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSecurityGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSecurityGroupOperationsRequest,
        } as ListSecurityGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSecurityGroupOperationsRequest {
        const message = {
            ...baseListSecurityGroupOperationsRequest,
        } as ListSecurityGroupOperationsRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        return message;
    },

    toJSON(message: ListSecurityGroupOperationsRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSecurityGroupOperationsRequest>
    ): ListSecurityGroupOperationsRequest {
        const message = {
            ...baseListSecurityGroupOperationsRequest,
        } as ListSecurityGroupOperationsRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        return message;
    },
};

const baseListSecurityGroupOperationsResponse: object = { nextPageToken: '' };

export const ListSecurityGroupOperationsResponse = {
    encode(
        message: ListSecurityGroupOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSecurityGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSecurityGroupOperationsResponse,
        } as ListSecurityGroupOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(
                        Operation.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSecurityGroupOperationsResponse {
        const message = {
            ...baseListSecurityGroupOperationsResponse,
        } as ListSecurityGroupOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListSecurityGroupOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) =>
                e ? Operation.toJSON(e) : undefined
            );
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSecurityGroupOperationsResponse>
    ): ListSecurityGroupOperationsResponse {
        const message = {
            ...baseListSecurityGroupOperationsResponse,
        } as ListSecurityGroupOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseMoveSecurityGroupRequest: object = {
    securityGroupId: '',
    destinationFolderId: '',
};

export const MoveSecurityGroupRequest = {
    encode(
        message: MoveSecurityGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveSecurityGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveSecurityGroupRequest,
        } as MoveSecurityGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveSecurityGroupRequest {
        const message = {
            ...baseMoveSecurityGroupRequest,
        } as MoveSecurityGroupRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = String(object.destinationFolderId);
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },

    toJSON(message: MoveSecurityGroupRequest): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MoveSecurityGroupRequest>
    ): MoveSecurityGroupRequest {
        const message = {
            ...baseMoveSecurityGroupRequest,
        } as MoveSecurityGroupRequest;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = object.destinationFolderId;
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },
};

const baseMoveSecurityGroupMetadata: object = { securityGroupId: '' };

export const MoveSecurityGroupMetadata = {
    encode(
        message: MoveSecurityGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityGroupId !== '') {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveSecurityGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveSecurityGroupMetadata,
        } as MoveSecurityGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveSecurityGroupMetadata {
        const message = {
            ...baseMoveSecurityGroupMetadata,
        } as MoveSecurityGroupMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = String(object.securityGroupId);
        } else {
            message.securityGroupId = '';
        }
        return message;
    },

    toJSON(message: MoveSecurityGroupMetadata): unknown {
        const obj: any = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MoveSecurityGroupMetadata>
    ): MoveSecurityGroupMetadata {
        const message = {
            ...baseMoveSecurityGroupMetadata,
        } as MoveSecurityGroupMetadata;
        if (
            object.securityGroupId !== undefined &&
            object.securityGroupId !== null
        ) {
            message.securityGroupId = object.securityGroupId;
        } else {
            message.securityGroupId = '';
        }
        return message;
    },
};

export const SecurityGroupServiceService = {
    get: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSecurityGroupRequest) =>
            Buffer.from(GetSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetSecurityGroupRequest.decode(value),
        responseSerialize: (value: SecurityGroup) =>
            Buffer.from(SecurityGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SecurityGroup.decode(value),
    },
    list: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSecurityGroupsRequest) =>
            Buffer.from(ListSecurityGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListSecurityGroupsRequest.decode(value),
        responseSerialize: (value: ListSecurityGroupsResponse) =>
            Buffer.from(ListSecurityGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSecurityGroupsResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSecurityGroupRequest) =>
            Buffer.from(CreateSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateSecurityGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSecurityGroupRequest) =>
            Buffer.from(UpdateSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSecurityGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateRules: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSecurityGroupRulesRequest) =>
            Buffer.from(UpdateSecurityGroupRulesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSecurityGroupRulesRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** update rule description or labels */
    updateRule: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSecurityGroupRuleRequest) =>
            Buffer.from(UpdateSecurityGroupRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSecurityGroupRuleRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSecurityGroupRequest) =>
            Buffer.from(DeleteSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteSecurityGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    move: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveSecurityGroupRequest) =>
            Buffer.from(MoveSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            MoveSecurityGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    listOperations: {
        path: '/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSecurityGroupOperationsRequest) =>
            Buffer.from(
                ListSecurityGroupOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListSecurityGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListSecurityGroupOperationsResponse) =>
            Buffer.from(
                ListSecurityGroupOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListSecurityGroupOperationsResponse.decode(value),
    },
} as const;

export interface SecurityGroupServiceServer
    extends UntypedServiceImplementation {
    get: handleUnaryCall<GetSecurityGroupRequest, SecurityGroup>;
    list: handleUnaryCall<
        ListSecurityGroupsRequest,
        ListSecurityGroupsResponse
    >;
    create: handleUnaryCall<CreateSecurityGroupRequest, Operation>;
    update: handleUnaryCall<UpdateSecurityGroupRequest, Operation>;
    updateRules: handleUnaryCall<UpdateSecurityGroupRulesRequest, Operation>;
    /** update rule description or labels */
    updateRule: handleUnaryCall<UpdateSecurityGroupRuleRequest, Operation>;
    delete: handleUnaryCall<DeleteSecurityGroupRequest, Operation>;
    move: handleUnaryCall<MoveSecurityGroupRequest, Operation>;
    listOperations: handleUnaryCall<
        ListSecurityGroupOperationsRequest,
        ListSecurityGroupOperationsResponse
    >;
}

export interface SecurityGroupServiceClient extends Client {
    get(
        request: GetSecurityGroupRequest,
        callback: (error: ServiceError | null, response: SecurityGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetSecurityGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SecurityGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetSecurityGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SecurityGroup) => void
    ): ClientUnaryCall;
    list(
        request: ListSecurityGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSecurityGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSecurityGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSecurityGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSecurityGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSecurityGroupsResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateSecurityGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSecurityGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSecurityGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSecurityGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSecurityGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSecurityGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRules(
        request: UpdateSecurityGroupRulesRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRules(
        request: UpdateSecurityGroupRulesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRules(
        request: UpdateSecurityGroupRulesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** update rule description or labels */
    updateRule(
        request: UpdateSecurityGroupRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRule(
        request: UpdateSecurityGroupRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRule(
        request: UpdateSecurityGroupRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSecurityGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSecurityGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSecurityGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveSecurityGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveSecurityGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveSecurityGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSecurityGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSecurityGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSecurityGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSecurityGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSecurityGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSecurityGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const SecurityGroupServiceClient = makeGenericClientConstructor(
    SecurityGroupServiceService,
    'yandex.cloud.vpc.v1.SecurityGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): SecurityGroupServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
