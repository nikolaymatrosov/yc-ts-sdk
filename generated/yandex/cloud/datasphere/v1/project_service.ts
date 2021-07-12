/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    Project_Settings,
    Project,
} from '../../../../yandex/cloud/datasphere/v1/project';
import { Operation } from '../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.datasphere.v1';

export interface CreateProjectRequest {
    /**
     * ID of the folder to create a project in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the project. */
    name: string;
    /** Description of the project. */
    description: string;
    /** Settings of the project. */
    settings: Project_Settings | undefined;
}

export interface CreateProjectMetadata {
    /** ID of the project that is being created. */
    projectId: string;
}

export interface UpdateProjectRequest {
    /**
     * ID of the Project resource to update.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
    /** Field mask that specifies which fields of the Project resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the project. */
    name: string;
    /** Description of the project. */
    description: string;
    /** Settings of the project. */
    settings: Project_Settings | undefined;
}

export interface UpdateProjectMetadata {
    /** ID of the project that is being updated. */
    projectId: string;
}

export interface DeleteProjectRequest {
    /**
     * ID of the Project resource to delete.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}

export interface DeleteProjectMetadata {
    /** ID of the project that is being deleted. */
    projectId: string;
}

export interface OpenProjectRequest {
    /**
     * ID of the Project resource to open.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}

export interface OpenProjectMetadata {
    /** ID of the project that is being opened. */
    projectId: string;
}

export interface OpenProjectResponse {
    /**
     * URL of the project that is being opened.
     * Make GET request to [project_url] with sessionToken query parameter equals to [session_token]
     * or POST request to [project_url] with sessionToken body parameter equals to [session_token]
     * to fetch Datasphere web interface.
     */
    projectUrl: string;
    /** Session token of the project that is being opened. */
    sessionToken: string;
}

export interface GetProjectRequest {
    /**
     * ID of the Project resource to return.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}

export interface ListProjectsRequest {
    /**
     * ID of the folder to list projects in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListProjectsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListProjectsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListProjectsResponse {
    /** List of Project resources. */
    projects: Project[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListProjectsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListProjectsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseCreateProjectRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateProjectRequest = {
    encode(
        message: CreateProjectRequest,
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
        if (message.settings !== undefined) {
            Project_Settings.encode(
                message.settings,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateProjectRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
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
                    message.settings = Project_Settings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProjectRequest {
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromJSON(object.settings);
        } else {
            message.settings = undefined;
        }
        return message;
    },

    toJSON(message: CreateProjectRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateProjectRequest>
    ): CreateProjectRequest {
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromPartial(object.settings);
        } else {
            message.settings = undefined;
        }
        return message;
    },
};

const baseCreateProjectMetadata: object = { projectId: '' };

export const CreateProjectMetadata = {
    encode(
        message: CreateProjectMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateProjectMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateProjectMetadata,
        } as CreateProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProjectMetadata {
        const message = {
            ...baseCreateProjectMetadata,
        } as CreateProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: CreateProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateProjectMetadata>
    ): CreateProjectMetadata {
        const message = {
            ...baseCreateProjectMetadata,
        } as CreateProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseUpdateProjectRequest: object = {
    projectId: '',
    name: '',
    description: '',
};

export const UpdateProjectRequest = {
    encode(
        message: UpdateProjectRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
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
        if (message.settings !== undefined) {
            Project_Settings.encode(
                message.settings,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateProjectRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
                    message.settings = Project_Settings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateProjectRequest {
        const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromJSON(object.settings);
        } else {
            message.settings = undefined;
        }
        return message;
    },

    toJSON(message: UpdateProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateProjectRequest>
    ): UpdateProjectRequest {
        const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromPartial(object.settings);
        } else {
            message.settings = undefined;
        }
        return message;
    },
};

const baseUpdateProjectMetadata: object = { projectId: '' };

export const UpdateProjectMetadata = {
    encode(
        message: UpdateProjectMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateProjectMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateProjectMetadata,
        } as UpdateProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateProjectMetadata {
        const message = {
            ...baseUpdateProjectMetadata,
        } as UpdateProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: UpdateProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateProjectMetadata>
    ): UpdateProjectMetadata {
        const message = {
            ...baseUpdateProjectMetadata,
        } as UpdateProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseDeleteProjectRequest: object = { projectId: '' };

export const DeleteProjectRequest = {
    encode(
        message: DeleteProjectRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteProjectRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteProjectRequest {
        const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: DeleteProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteProjectRequest>
    ): DeleteProjectRequest {
        const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseDeleteProjectMetadata: object = { projectId: '' };

export const DeleteProjectMetadata = {
    encode(
        message: DeleteProjectMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteProjectMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteProjectMetadata,
        } as DeleteProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteProjectMetadata {
        const message = {
            ...baseDeleteProjectMetadata,
        } as DeleteProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: DeleteProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteProjectMetadata>
    ): DeleteProjectMetadata {
        const message = {
            ...baseDeleteProjectMetadata,
        } as DeleteProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseOpenProjectRequest: object = { projectId: '' };

export const OpenProjectRequest = {
    encode(
        message: OpenProjectRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): OpenProjectRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenProjectRequest {
        const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: OpenProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(object: DeepPartial<OpenProjectRequest>): OpenProjectRequest {
        const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseOpenProjectMetadata: object = { projectId: '' };

export const OpenProjectMetadata = {
    encode(
        message: OpenProjectMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): OpenProjectMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenProjectMetadata {
        const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: OpenProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(object: DeepPartial<OpenProjectMetadata>): OpenProjectMetadata {
        const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseOpenProjectResponse: object = { projectUrl: '', sessionToken: '' };

export const OpenProjectResponse = {
    encode(
        message: OpenProjectResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectUrl !== '') {
            writer.uint32(10).string(message.projectUrl);
        }
        if (message.sessionToken !== '') {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): OpenProjectResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectUrl = reader.string();
                    break;
                case 2:
                    message.sessionToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenProjectResponse {
        const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
        if (object.projectUrl !== undefined && object.projectUrl !== null) {
            message.projectUrl = String(object.projectUrl);
        } else {
            message.projectUrl = '';
        }
        if (object.sessionToken !== undefined && object.sessionToken !== null) {
            message.sessionToken = String(object.sessionToken);
        } else {
            message.sessionToken = '';
        }
        return message;
    },

    toJSON(message: OpenProjectResponse): unknown {
        const obj: any = {};
        message.projectUrl !== undefined &&
            (obj.projectUrl = message.projectUrl);
        message.sessionToken !== undefined &&
            (obj.sessionToken = message.sessionToken);
        return obj;
    },

    fromPartial(object: DeepPartial<OpenProjectResponse>): OpenProjectResponse {
        const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
        if (object.projectUrl !== undefined && object.projectUrl !== null) {
            message.projectUrl = object.projectUrl;
        } else {
            message.projectUrl = '';
        }
        if (object.sessionToken !== undefined && object.sessionToken !== null) {
            message.sessionToken = object.sessionToken;
        } else {
            message.sessionToken = '';
        }
        return message;
    },
};

const baseGetProjectRequest: object = { projectId: '' };

export const GetProjectRequest = {
    encode(
        message: GetProjectRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProjectRequest } as GetProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetProjectRequest {
        const message = { ...baseGetProjectRequest } as GetProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: GetProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetProjectRequest>): GetProjectRequest {
        const message = { ...baseGetProjectRequest } as GetProjectRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseListProjectsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListProjectsRequest = {
    encode(
        message: ListProjectsRequest,
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
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListProjectsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProjectsRequest } as ListProjectsRequest;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListProjectsRequest {
        const message = { ...baseListProjectsRequest } as ListProjectsRequest;
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
        return message;
    },

    toJSON(message: ListProjectsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListProjectsRequest>): ListProjectsRequest {
        const message = { ...baseListProjectsRequest } as ListProjectsRequest;
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
        return message;
    },
};

const baseListProjectsResponse: object = { nextPageToken: '' };

export const ListProjectsResponse = {
    encode(
        message: ListProjectsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.projects) {
            Project.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListProjectsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProjectsResponse } as ListProjectsResponse;
        message.projects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(
                        Project.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListProjectsResponse {
        const message = { ...baseListProjectsResponse } as ListProjectsResponse;
        message.projects = [];
        if (object.projects !== undefined && object.projects !== null) {
            for (const e of object.projects) {
                message.projects.push(Project.fromJSON(e));
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

    toJSON(message: ListProjectsResponse): unknown {
        const obj: any = {};
        if (message.projects) {
            obj.projects = message.projects.map((e) =>
                e ? Project.toJSON(e) : undefined
            );
        } else {
            obj.projects = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListProjectsResponse>
    ): ListProjectsResponse {
        const message = { ...baseListProjectsResponse } as ListProjectsResponse;
        message.projects = [];
        if (object.projects !== undefined && object.projects !== null) {
            for (const e of object.projects) {
                message.projects.push(Project.fromPartial(e));
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

/** A set of methods for managing Project resources. */
export const ProjectServiceService = {
    /** Creates a project in the specified folder. */
    create: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateProjectRequest) =>
            Buffer.from(CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateProjectRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified project. */
    update: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateProjectRequest) =>
            Buffer.from(UpdateProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateProjectRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified project. */
    delete: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteProjectRequest) =>
            Buffer.from(DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteProjectRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Opens the specified project. */
    open: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Open',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: OpenProjectRequest) =>
            Buffer.from(OpenProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => OpenProjectRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified project. */
    get: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetProjectRequest) =>
            Buffer.from(GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetProjectRequest.decode(value),
        responseSerialize: (value: Project) =>
            Buffer.from(Project.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Project.decode(value),
    },
    /** Lists projects for the specified folder. */
    list: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListProjectsRequest) =>
            Buffer.from(ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListProjectsRequest.decode(value),
        responseSerialize: (value: ListProjectsResponse) =>
            Buffer.from(ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListProjectsResponse.decode(value),
    },
} as const;

export interface ProjectServiceServer extends UntypedServiceImplementation {
    /** Creates a project in the specified folder. */
    create: handleUnaryCall<CreateProjectRequest, Operation>;
    /** Updates the specified project. */
    update: handleUnaryCall<UpdateProjectRequest, Operation>;
    /** Deletes the specified project. */
    delete: handleUnaryCall<DeleteProjectRequest, Operation>;
    /** Opens the specified project. */
    open: handleUnaryCall<OpenProjectRequest, Operation>;
    /** Returns the specified project. */
    get: handleUnaryCall<GetProjectRequest, Project>;
    /** Lists projects for the specified folder. */
    list: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
}

export interface ProjectServiceClient extends Client {
    /** Creates a project in the specified folder. */
    create(
        request: CreateProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified project. */
    update(
        request: UpdateProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified project. */
    delete(
        request: DeleteProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Opens the specified project. */
    open(
        request: OpenProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    open(
        request: OpenProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    open(
        request: OpenProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns the specified project. */
    get(
        request: GetProjectRequest,
        callback: (error: ServiceError | null, response: Project) => void
    ): ClientUnaryCall;
    get(
        request: GetProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Project) => void
    ): ClientUnaryCall;
    get(
        request: GetProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Project) => void
    ): ClientUnaryCall;
    /** Lists projects for the specified folder. */
    list(
        request: ListProjectsRequest,
        callback: (
            error: ServiceError | null,
            response: ListProjectsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListProjectsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListProjectsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListProjectsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListProjectsResponse
        ) => void
    ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
    ProjectServiceService,
    'yandex.cloud.datasphere.v1.ProjectService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ProjectServiceClient;
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
