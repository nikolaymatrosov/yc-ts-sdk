/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    Container,
    Revision,
    Resources,
    Command,
    Args,
} from '../../../../../yandex/cloud/serverless/containers/v1/container';
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

export const protobufPackage = 'yandex.cloud.serverless.containers.v1';

export interface GetContainerRequest {
    containerId: string;
}

export interface ListContainersRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}

export interface ListContainersResponse {
    containers: Container[];
    nextPageToken: string;
}

export interface CreateContainerRequest {
    folderId: string;
    name: string;
    description: string;
    labels: { [key: string]: string };
}

export interface CreateContainerRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateContainerMetadata {
    containerId: string;
}

export interface UpdateContainerRequest {
    containerId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: { [key: string]: string };
}

export interface UpdateContainerRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateContainerMetadata {
    containerId: string;
}

export interface DeleteContainerRequest {
    containerId: string;
}

export interface DeleteContainerMetadata {
    containerId: string;
}

export interface GetContainerRevisionRequest {
    containerRevisionId: string;
}

export interface ListContainersRevisionsRequest {
    folderId: string | undefined;
    containerId: string | undefined;
    pageSize: number;
    pageToken: string;
    filter: string;
}

export interface ListContainersRevisionsResponse {
    revisions: Revision[];
    nextPageToken: string;
}

export interface DeployContainerRevisionRequest {
    containerId: string;
    description: string;
    resources: Resources | undefined;
    executionTimeout: Duration | undefined;
    serviceAccountId: string;
    imageSpec: ImageSpec | undefined;
    concurrency: number;
}

export interface ImageSpec {
    imageUrl: string;
    command: Command | undefined;
    args: Args | undefined;
    environment: { [key: string]: string };
    workingDir: string;
}

export interface ImageSpec_EnvironmentEntry {
    key: string;
    value: string;
}

export interface DeployContainerRevisionMetadata {
    containerRevisionId: string;
}

export interface ListContainerOperationsRequest {
    containerId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}

export interface ListContainerOperationsResponse {
    operations: Operation[];
    nextPageToken: string;
}

const baseGetContainerRequest: object = { containerId: '' };

export const GetContainerRequest = {
    encode(
        message: GetContainerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetContainerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetContainerRequest } as GetContainerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetContainerRequest {
        const message = { ...baseGetContainerRequest } as GetContainerRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
        }
        return message;
    },

    toJSON(message: GetContainerRequest): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetContainerRequest>): GetContainerRequest {
        const message = { ...baseGetContainerRequest } as GetContainerRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
        }
        return message;
    },
};

const baseListContainersRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListContainersRequest = {
    encode(
        message: ListContainersRequest,
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
    ): ListContainersRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainersRequest,
        } as ListContainersRequest;
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

    fromJSON(object: any): ListContainersRequest {
        const message = {
            ...baseListContainersRequest,
        } as ListContainersRequest;
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

    toJSON(message: ListContainersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListContainersRequest>
    ): ListContainersRequest {
        const message = {
            ...baseListContainersRequest,
        } as ListContainersRequest;
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

const baseListContainersResponse: object = { nextPageToken: '' };

export const ListContainersResponse = {
    encode(
        message: ListContainersResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.containers) {
            Container.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListContainersResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainersResponse,
        } as ListContainersResponse;
        message.containers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containers.push(
                        Container.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListContainersResponse {
        const message = {
            ...baseListContainersResponse,
        } as ListContainersResponse;
        message.containers = [];
        if (object.containers !== undefined && object.containers !== null) {
            for (const e of object.containers) {
                message.containers.push(Container.fromJSON(e));
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

    toJSON(message: ListContainersResponse): unknown {
        const obj: any = {};
        if (message.containers) {
            obj.containers = message.containers.map((e) =>
                e ? Container.toJSON(e) : undefined
            );
        } else {
            obj.containers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListContainersResponse>
    ): ListContainersResponse {
        const message = {
            ...baseListContainersResponse,
        } as ListContainersResponse;
        message.containers = [];
        if (object.containers !== undefined && object.containers !== null) {
            for (const e of object.containers) {
                message.containers.push(Container.fromPartial(e));
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

const baseCreateContainerRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateContainerRequest = {
    encode(
        message: CreateContainerRequest,
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
            CreateContainerRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateContainerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateContainerRequest,
        } as CreateContainerRequest;
        message.labels = {};
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
                    const entry4 = CreateContainerRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateContainerRequest {
        const message = {
            ...baseCreateContainerRequest,
        } as CreateContainerRequest;
        message.labels = {};
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
        return message;
    },

    toJSON(message: CreateContainerRequest): unknown {
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateContainerRequest>
    ): CreateContainerRequest {
        const message = {
            ...baseCreateContainerRequest,
        } as CreateContainerRequest;
        message.labels = {};
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
        return message;
    },
};

const baseCreateContainerRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateContainerRequest_LabelsEntry = {
    encode(
        message: CreateContainerRequest_LabelsEntry,
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
    ): CreateContainerRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateContainerRequest_LabelsEntry,
        } as CreateContainerRequest_LabelsEntry;
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

    fromJSON(object: any): CreateContainerRequest_LabelsEntry {
        const message = {
            ...baseCreateContainerRequest_LabelsEntry,
        } as CreateContainerRequest_LabelsEntry;
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

    toJSON(message: CreateContainerRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateContainerRequest_LabelsEntry>
    ): CreateContainerRequest_LabelsEntry {
        const message = {
            ...baseCreateContainerRequest_LabelsEntry,
        } as CreateContainerRequest_LabelsEntry;
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

const baseCreateContainerMetadata: object = { containerId: '' };

export const CreateContainerMetadata = {
    encode(
        message: CreateContainerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateContainerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateContainerMetadata,
        } as CreateContainerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateContainerMetadata {
        const message = {
            ...baseCreateContainerMetadata,
        } as CreateContainerMetadata;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
        }
        return message;
    },

    toJSON(message: CreateContainerMetadata): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateContainerMetadata>
    ): CreateContainerMetadata {
        const message = {
            ...baseCreateContainerMetadata,
        } as CreateContainerMetadata;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
        }
        return message;
    },
};

const baseUpdateContainerRequest: object = {
    containerId: '',
    name: '',
    description: '',
};

export const UpdateContainerRequest = {
    encode(
        message: UpdateContainerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
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
            UpdateContainerRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateContainerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateContainerRequest,
        } as UpdateContainerRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
                    const entry5 = UpdateContainerRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdateContainerRequest {
        const message = {
            ...baseUpdateContainerRequest,
        } as UpdateContainerRequest;
        message.labels = {};
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
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
        return message;
    },

    toJSON(message: UpdateContainerRequest): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateContainerRequest>
    ): UpdateContainerRequest {
        const message = {
            ...baseUpdateContainerRequest,
        } as UpdateContainerRequest;
        message.labels = {};
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
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
        return message;
    },
};

const baseUpdateContainerRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateContainerRequest_LabelsEntry = {
    encode(
        message: UpdateContainerRequest_LabelsEntry,
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
    ): UpdateContainerRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateContainerRequest_LabelsEntry,
        } as UpdateContainerRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateContainerRequest_LabelsEntry {
        const message = {
            ...baseUpdateContainerRequest_LabelsEntry,
        } as UpdateContainerRequest_LabelsEntry;
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

    toJSON(message: UpdateContainerRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateContainerRequest_LabelsEntry>
    ): UpdateContainerRequest_LabelsEntry {
        const message = {
            ...baseUpdateContainerRequest_LabelsEntry,
        } as UpdateContainerRequest_LabelsEntry;
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

const baseUpdateContainerMetadata: object = { containerId: '' };

export const UpdateContainerMetadata = {
    encode(
        message: UpdateContainerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateContainerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateContainerMetadata,
        } as UpdateContainerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateContainerMetadata {
        const message = {
            ...baseUpdateContainerMetadata,
        } as UpdateContainerMetadata;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
        }
        return message;
    },

    toJSON(message: UpdateContainerMetadata): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateContainerMetadata>
    ): UpdateContainerMetadata {
        const message = {
            ...baseUpdateContainerMetadata,
        } as UpdateContainerMetadata;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
        }
        return message;
    },
};

const baseDeleteContainerRequest: object = { containerId: '' };

export const DeleteContainerRequest = {
    encode(
        message: DeleteContainerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteContainerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteContainerRequest,
        } as DeleteContainerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteContainerRequest {
        const message = {
            ...baseDeleteContainerRequest,
        } as DeleteContainerRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
        }
        return message;
    },

    toJSON(message: DeleteContainerRequest): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteContainerRequest>
    ): DeleteContainerRequest {
        const message = {
            ...baseDeleteContainerRequest,
        } as DeleteContainerRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
        }
        return message;
    },
};

const baseDeleteContainerMetadata: object = { containerId: '' };

export const DeleteContainerMetadata = {
    encode(
        message: DeleteContainerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteContainerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteContainerMetadata,
        } as DeleteContainerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteContainerMetadata {
        const message = {
            ...baseDeleteContainerMetadata,
        } as DeleteContainerMetadata;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
        }
        return message;
    },

    toJSON(message: DeleteContainerMetadata): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteContainerMetadata>
    ): DeleteContainerMetadata {
        const message = {
            ...baseDeleteContainerMetadata,
        } as DeleteContainerMetadata;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
        }
        return message;
    },
};

const baseGetContainerRevisionRequest: object = { containerRevisionId: '' };

export const GetContainerRevisionRequest = {
    encode(
        message: GetContainerRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerRevisionId !== '') {
            writer.uint32(10).string(message.containerRevisionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetContainerRevisionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetContainerRevisionRequest,
        } as GetContainerRevisionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerRevisionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetContainerRevisionRequest {
        const message = {
            ...baseGetContainerRevisionRequest,
        } as GetContainerRevisionRequest;
        if (
            object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null
        ) {
            message.containerRevisionId = String(object.containerRevisionId);
        } else {
            message.containerRevisionId = '';
        }
        return message;
    },

    toJSON(message: GetContainerRevisionRequest): unknown {
        const obj: any = {};
        message.containerRevisionId !== undefined &&
            (obj.containerRevisionId = message.containerRevisionId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetContainerRevisionRequest>
    ): GetContainerRevisionRequest {
        const message = {
            ...baseGetContainerRevisionRequest,
        } as GetContainerRevisionRequest;
        if (
            object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null
        ) {
            message.containerRevisionId = object.containerRevisionId;
        } else {
            message.containerRevisionId = '';
        }
        return message;
    },
};

const baseListContainersRevisionsRequest: object = {
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListContainersRevisionsRequest = {
    encode(
        message: ListContainersRevisionsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== undefined) {
            writer.uint32(10).string(message.folderId);
        }
        if (message.containerId !== undefined) {
            writer.uint32(18).string(message.containerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListContainersRevisionsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainersRevisionsRequest,
        } as ListContainersRevisionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListContainersRevisionsRequest {
        const message = {
            ...baseListContainersRevisionsRequest,
        } as ListContainersRevisionsRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = undefined;
        }
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = undefined;
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

    toJSON(message: ListContainersRevisionsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListContainersRevisionsRequest>
    ): ListContainersRevisionsRequest {
        const message = {
            ...baseListContainersRevisionsRequest,
        } as ListContainersRevisionsRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = undefined;
        }
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = undefined;
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

const baseListContainersRevisionsResponse: object = { nextPageToken: '' };

export const ListContainersRevisionsResponse = {
    encode(
        message: ListContainersRevisionsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.revisions) {
            Revision.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListContainersRevisionsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainersRevisionsResponse,
        } as ListContainersRevisionsResponse;
        message.revisions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revisions.push(
                        Revision.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListContainersRevisionsResponse {
        const message = {
            ...baseListContainersRevisionsResponse,
        } as ListContainersRevisionsResponse;
        message.revisions = [];
        if (object.revisions !== undefined && object.revisions !== null) {
            for (const e of object.revisions) {
                message.revisions.push(Revision.fromJSON(e));
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

    toJSON(message: ListContainersRevisionsResponse): unknown {
        const obj: any = {};
        if (message.revisions) {
            obj.revisions = message.revisions.map((e) =>
                e ? Revision.toJSON(e) : undefined
            );
        } else {
            obj.revisions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListContainersRevisionsResponse>
    ): ListContainersRevisionsResponse {
        const message = {
            ...baseListContainersRevisionsResponse,
        } as ListContainersRevisionsResponse;
        message.revisions = [];
        if (object.revisions !== undefined && object.revisions !== null) {
            for (const e of object.revisions) {
                message.revisions.push(Revision.fromPartial(e));
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

const baseDeployContainerRevisionRequest: object = {
    containerId: '',
    description: '',
    serviceAccountId: '',
    concurrency: 0,
};

export const DeployContainerRevisionRequest = {
    encode(
        message: DeployContainerRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            Duration.encode(
                message.executionTimeout,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.imageSpec !== undefined) {
            ImageSpec.encode(
                message.imageSpec,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.concurrency !== 0) {
            writer.uint32(72).int64(message.concurrency);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeployContainerRevisionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeployContainerRevisionRequest,
        } as DeployContainerRevisionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 5:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.executionTimeout = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.imageSpec = ImageSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.concurrency = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeployContainerRevisionRequest {
        const message = {
            ...baseDeployContainerRevisionRequest,
        } as DeployContainerRevisionRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (
            object.executionTimeout !== undefined &&
            object.executionTimeout !== null
        ) {
            message.executionTimeout = Duration.fromJSON(
                object.executionTimeout
            );
        } else {
            message.executionTimeout = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.imageSpec !== undefined && object.imageSpec !== null) {
            message.imageSpec = ImageSpec.fromJSON(object.imageSpec);
        } else {
            message.imageSpec = undefined;
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = Number(object.concurrency);
        } else {
            message.concurrency = 0;
        }
        return message;
    },

    toJSON(message: DeployContainerRevisionRequest): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.imageSpec !== undefined &&
            (obj.imageSpec = message.imageSpec
                ? ImageSpec.toJSON(message.imageSpec)
                : undefined);
        message.concurrency !== undefined &&
            (obj.concurrency = message.concurrency);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeployContainerRevisionRequest>
    ): DeployContainerRevisionRequest {
        const message = {
            ...baseDeployContainerRevisionRequest,
        } as DeployContainerRevisionRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (
            object.executionTimeout !== undefined &&
            object.executionTimeout !== null
        ) {
            message.executionTimeout = Duration.fromPartial(
                object.executionTimeout
            );
        } else {
            message.executionTimeout = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.imageSpec !== undefined && object.imageSpec !== null) {
            message.imageSpec = ImageSpec.fromPartial(object.imageSpec);
        } else {
            message.imageSpec = undefined;
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = object.concurrency;
        } else {
            message.concurrency = 0;
        }
        return message;
    },
};

const baseImageSpec: object = { imageUrl: '', workingDir: '' };

export const ImageSpec = {
    encode(
        message: ImageSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageUrl !== '') {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.command !== undefined) {
            Command.encode(message.command, writer.uint32(18).fork()).ldelim();
        }
        if (message.args !== undefined) {
            Args.encode(message.args, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            ImageSpec_EnvironmentEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.workingDir !== '') {
            writer.uint32(42).string(message.workingDir);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageSpec } as ImageSpec;
        message.environment = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                case 2:
                    message.command = Command.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.args = Args.decode(reader, reader.uint32());
                    break;
                case 4:
                    const entry4 = ImageSpec_EnvironmentEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.environment[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.workingDir = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageSpec {
        const message = { ...baseImageSpec } as ImageSpec;
        message.environment = {};
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = String(object.imageUrl);
        } else {
            message.imageUrl = '';
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = Command.fromJSON(object.command);
        } else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = Args.fromJSON(object.args);
        } else {
            message.args = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                message.environment[key] = String(value);
            });
        }
        if (object.workingDir !== undefined && object.workingDir !== null) {
            message.workingDir = String(object.workingDir);
        } else {
            message.workingDir = '';
        }
        return message;
    },

    toJSON(message: ImageSpec): unknown {
        const obj: any = {};
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        message.command !== undefined &&
            (obj.command = message.command
                ? Command.toJSON(message.command)
                : undefined);
        message.args !== undefined &&
            (obj.args = message.args ? Args.toJSON(message.args) : undefined);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.workingDir !== undefined &&
            (obj.workingDir = message.workingDir);
        return obj;
    },

    fromPartial(object: DeepPartial<ImageSpec>): ImageSpec {
        const message = { ...baseImageSpec } as ImageSpec;
        message.environment = {};
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = object.imageUrl;
        } else {
            message.imageUrl = '';
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = Command.fromPartial(object.command);
        } else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = Args.fromPartial(object.args);
        } else {
            message.args = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.environment[key] = String(value);
                }
            });
        }
        if (object.workingDir !== undefined && object.workingDir !== null) {
            message.workingDir = object.workingDir;
        } else {
            message.workingDir = '';
        }
        return message;
    },
};

const baseImageSpec_EnvironmentEntry: object = { key: '', value: '' };

export const ImageSpec_EnvironmentEntry = {
    encode(
        message: ImageSpec_EnvironmentEntry,
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
    ): ImageSpec_EnvironmentEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseImageSpec_EnvironmentEntry,
        } as ImageSpec_EnvironmentEntry;
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

    fromJSON(object: any): ImageSpec_EnvironmentEntry {
        const message = {
            ...baseImageSpec_EnvironmentEntry,
        } as ImageSpec_EnvironmentEntry;
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

    toJSON(message: ImageSpec_EnvironmentEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ImageSpec_EnvironmentEntry>
    ): ImageSpec_EnvironmentEntry {
        const message = {
            ...baseImageSpec_EnvironmentEntry,
        } as ImageSpec_EnvironmentEntry;
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

const baseDeployContainerRevisionMetadata: object = { containerRevisionId: '' };

export const DeployContainerRevisionMetadata = {
    encode(
        message: DeployContainerRevisionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerRevisionId !== '') {
            writer.uint32(10).string(message.containerRevisionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeployContainerRevisionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeployContainerRevisionMetadata,
        } as DeployContainerRevisionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerRevisionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeployContainerRevisionMetadata {
        const message = {
            ...baseDeployContainerRevisionMetadata,
        } as DeployContainerRevisionMetadata;
        if (
            object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null
        ) {
            message.containerRevisionId = String(object.containerRevisionId);
        } else {
            message.containerRevisionId = '';
        }
        return message;
    },

    toJSON(message: DeployContainerRevisionMetadata): unknown {
        const obj: any = {};
        message.containerRevisionId !== undefined &&
            (obj.containerRevisionId = message.containerRevisionId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeployContainerRevisionMetadata>
    ): DeployContainerRevisionMetadata {
        const message = {
            ...baseDeployContainerRevisionMetadata,
        } as DeployContainerRevisionMetadata;
        if (
            object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null
        ) {
            message.containerRevisionId = object.containerRevisionId;
        } else {
            message.containerRevisionId = '';
        }
        return message;
    },
};

const baseListContainerOperationsRequest: object = {
    containerId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListContainerOperationsRequest = {
    encode(
        message: ListContainerOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
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
    ): ListContainerOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainerOperationsRequest,
        } as ListContainerOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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

    fromJSON(object: any): ListContainerOperationsRequest {
        const message = {
            ...baseListContainerOperationsRequest,
        } as ListContainerOperationsRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        } else {
            message.containerId = '';
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

    toJSON(message: ListContainerOperationsRequest): unknown {
        const obj: any = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListContainerOperationsRequest>
    ): ListContainerOperationsRequest {
        const message = {
            ...baseListContainerOperationsRequest,
        } as ListContainerOperationsRequest;
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        } else {
            message.containerId = '';
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

const baseListContainerOperationsResponse: object = { nextPageToken: '' };

export const ListContainerOperationsResponse = {
    encode(
        message: ListContainerOperationsResponse,
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
    ): ListContainerOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainerOperationsResponse,
        } as ListContainerOperationsResponse;
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

    fromJSON(object: any): ListContainerOperationsResponse {
        const message = {
            ...baseListContainerOperationsResponse,
        } as ListContainerOperationsResponse;
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

    toJSON(message: ListContainerOperationsResponse): unknown {
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
        object: DeepPartial<ListContainerOperationsResponse>
    ): ListContainerOperationsResponse {
        const message = {
            ...baseListContainerOperationsResponse,
        } as ListContainerOperationsResponse;
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

export const ContainerServiceService = {
    get: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetContainerRequest) =>
            Buffer.from(GetContainerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetContainerRequest.decode(value),
        responseSerialize: (value: Container) =>
            Buffer.from(Container.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Container.decode(value),
    },
    list: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListContainersRequest) =>
            Buffer.from(ListContainersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListContainersRequest.decode(value),
        responseSerialize: (value: ListContainersResponse) =>
            Buffer.from(ListContainersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListContainersResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateContainerRequest) =>
            Buffer.from(CreateContainerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateContainerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateContainerRequest) =>
            Buffer.from(UpdateContainerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateContainerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteContainerRequest) =>
            Buffer.from(DeleteContainerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteContainerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    deployRevision: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeployContainerRevisionRequest) =>
            Buffer.from(DeployContainerRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeployContainerRevisionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    getRevision: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetContainerRevisionRequest) =>
            Buffer.from(GetContainerRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetContainerRevisionRequest.decode(value),
        responseSerialize: (value: Revision) =>
            Buffer.from(Revision.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Revision.decode(value),
    },
    listRevisions: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListContainersRevisionsRequest) =>
            Buffer.from(ListContainersRevisionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListContainersRevisionsRequest.decode(value),
        responseSerialize: (value: ListContainersRevisionsResponse) =>
            Buffer.from(ListContainersRevisionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListContainersRevisionsResponse.decode(value),
    },
    listOperations: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListContainerOperationsRequest) =>
            Buffer.from(ListContainerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListContainerOperationsRequest.decode(value),
        responseSerialize: (value: ListContainerOperationsResponse) =>
            Buffer.from(ListContainerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListContainerOperationsResponse.decode(value),
    },
    listAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAccessBindingsResponse.decode(value),
    },
    setAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ContainerServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetContainerRequest, Container>;
    list: handleUnaryCall<ListContainersRequest, ListContainersResponse>;
    create: handleUnaryCall<CreateContainerRequest, Operation>;
    update: handleUnaryCall<UpdateContainerRequest, Operation>;
    delete: handleUnaryCall<DeleteContainerRequest, Operation>;
    deployRevision: handleUnaryCall<DeployContainerRevisionRequest, Operation>;
    getRevision: handleUnaryCall<GetContainerRevisionRequest, Revision>;
    listRevisions: handleUnaryCall<
        ListContainersRevisionsRequest,
        ListContainersRevisionsResponse
    >;
    listOperations: handleUnaryCall<
        ListContainerOperationsRequest,
        ListContainerOperationsResponse
    >;
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface ContainerServiceClient extends Client {
    get(
        request: GetContainerRequest,
        callback: (error: ServiceError | null, response: Container) => void
    ): ClientUnaryCall;
    get(
        request: GetContainerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Container) => void
    ): ClientUnaryCall;
    get(
        request: GetContainerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Container) => void
    ): ClientUnaryCall;
    list(
        request: ListContainersRequest,
        callback: (
            error: ServiceError | null,
            response: ListContainersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListContainersRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListContainersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListContainersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListContainersResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateContainerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateContainerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateContainerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateContainerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateContainerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateContainerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteContainerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteContainerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteContainerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deployRevision(
        request: DeployContainerRevisionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deployRevision(
        request: DeployContainerRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deployRevision(
        request: DeployContainerRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    getRevision(
        request: GetContainerRevisionRequest,
        callback: (error: ServiceError | null, response: Revision) => void
    ): ClientUnaryCall;
    getRevision(
        request: GetContainerRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Revision) => void
    ): ClientUnaryCall;
    getRevision(
        request: GetContainerRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Revision) => void
    ): ClientUnaryCall;
    listRevisions(
        request: ListContainersRevisionsRequest,
        callback: (
            error: ServiceError | null,
            response: ListContainersRevisionsResponse
        ) => void
    ): ClientUnaryCall;
    listRevisions(
        request: ListContainersRevisionsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListContainersRevisionsResponse
        ) => void
    ): ClientUnaryCall;
    listRevisions(
        request: ListContainersRevisionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListContainersRevisionsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListContainerOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListContainerOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListContainerOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListContainerOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListContainerOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListContainerOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const ContainerServiceClient = makeGenericClientConstructor(
    ContainerServiceService,
    'yandex.cloud.serverless.containers.v1.ContainerService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ContainerServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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
