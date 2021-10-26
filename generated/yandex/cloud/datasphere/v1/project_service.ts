/* eslint-disable */
import { Empty } from '../../../../google/protobuf/empty';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Struct } from '../../../../google/protobuf/struct';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../google/protobuf/wrappers';
import {
    Project_Settings,
    Project_Limits,
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
    /** Limits of the project. */
    limits: Project_Limits | undefined;
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
    /** Limits of the project. */
    limits: Project_Limits | undefined;
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

export interface GetUnitBalanceRequest {
    /** ID of the project to return the unit balance for. */
    projectId: string;
}

export interface GetUnitBalanceResponse {
    /** The number of units available to the project. */
    unitBalance: number | undefined;
}

export interface SetUnitBalanceRequest {
    /** ID of the project to set the unit balance for. */
    projectId: string;
    /** The number of units available to the project. */
    unitBalance: number | undefined;
}

export interface ProjectExecutionRequest {
    /** ID of the project to execute notebook/cell in. */
    projectId: string;
    /** ID of the notebook to execute. */
    notebookId: string | undefined;
    /** ID of the cell to execute. */
    cellId: string | undefined;
    /** Values of input variables. */
    inputVariables: Struct | undefined;
    /** Names of output variables. */
    outputVariableNames: string[];
}

export interface ProjectExecutionMetadata {
    /** ID of the project in which notebook is being executed. */
    projectId: string;
    /** ID of the notebook that is being executed */
    notebookId: string | undefined;
    /** ID of the cell that is being executed */
    cellId: string | undefined;
}

export interface ProjectExecutionResponse {
    /** ID of the checkpoint resulting from the execution. */
    checkpointId: string;
    /** Values of output variables resulting from the execution. */
    outputVariables: Struct | undefined;
}

export interface CellOutputsRequest {
    /** ID of the project to return cell outputs for. */
    projectId: string;
    /** ID of the cell to return outputs for. */
    cellId: string;
    /** ID of the checkpoint to return cell outputs for. */
    checkpointId: string;
    /** Timestamp from which to return outputs. */
    startAt: Date | undefined;
}

export interface CellOutputsResponse {
    /** List of outputs. */
    outputs: string[];
}

export interface GetStateVariablesRequest {
    /** ID of the project, for which to return state variables. */
    projectId: string;
    /** ID of the notebook, for which to return state variables. */
    notebookId: string;
    /** Names of variables to return. */
    variableNames: string[];
    /** ID of the checkpoint, for which to return state variables. */
    checkpointId: string;
}

export interface GetStateVariablesResponse {
    /** Values of the specified variables. */
    variables: Struct | undefined;
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
        if (message.limits !== undefined) {
            Project_Limits.encode(
                message.limits,
                writer.uint32(42).fork()
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
                case 5:
                    message.limits = Project_Limits.decode(
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
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = Project_Limits.fromJSON(object.limits);
        } else {
            message.limits = undefined;
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
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? Project_Limits.toJSON(message.limits)
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
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = Project_Limits.fromPartial(object.limits);
        } else {
            message.limits = undefined;
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
        if (message.limits !== undefined) {
            Project_Limits.encode(
                message.limits,
                writer.uint32(50).fork()
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
                case 6:
                    message.limits = Project_Limits.decode(
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
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = Project_Limits.fromJSON(object.limits);
        } else {
            message.limits = undefined;
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
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? Project_Limits.toJSON(message.limits)
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
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = Project_Limits.fromPartial(object.limits);
        } else {
            message.limits = undefined;
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

const baseGetUnitBalanceRequest: object = { projectId: '' };

export const GetUnitBalanceRequest = {
    encode(
        message: GetUnitBalanceRequest,
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
    ): GetUnitBalanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUnitBalanceRequest,
        } as GetUnitBalanceRequest;
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

    fromJSON(object: any): GetUnitBalanceRequest {
        const message = {
            ...baseGetUnitBalanceRequest,
        } as GetUnitBalanceRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        return message;
    },

    toJSON(message: GetUnitBalanceRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetUnitBalanceRequest>
    ): GetUnitBalanceRequest {
        const message = {
            ...baseGetUnitBalanceRequest,
        } as GetUnitBalanceRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        return message;
    },
};

const baseGetUnitBalanceResponse: object = {};

export const GetUnitBalanceResponse = {
    encode(
        message: GetUnitBalanceResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.unitBalance !== undefined) {
            Int64Value.encode(
                { value: message.unitBalance! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetUnitBalanceResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUnitBalanceResponse,
        } as GetUnitBalanceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unitBalance = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUnitBalanceResponse {
        const message = {
            ...baseGetUnitBalanceResponse,
        } as GetUnitBalanceResponse;
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = Number(object.unitBalance);
        } else {
            message.unitBalance = undefined;
        }
        return message;
    },

    toJSON(message: GetUnitBalanceResponse): unknown {
        const obj: any = {};
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetUnitBalanceResponse>
    ): GetUnitBalanceResponse {
        const message = {
            ...baseGetUnitBalanceResponse,
        } as GetUnitBalanceResponse;
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = object.unitBalance;
        } else {
            message.unitBalance = undefined;
        }
        return message;
    },
};

const baseSetUnitBalanceRequest: object = { projectId: '' };

export const SetUnitBalanceRequest = {
    encode(
        message: SetUnitBalanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.unitBalance !== undefined) {
            Int64Value.encode(
                { value: message.unitBalance! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SetUnitBalanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetUnitBalanceRequest,
        } as SetUnitBalanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.unitBalance = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetUnitBalanceRequest {
        const message = {
            ...baseSetUnitBalanceRequest,
        } as SetUnitBalanceRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = Number(object.unitBalance);
        } else {
            message.unitBalance = undefined;
        }
        return message;
    },

    toJSON(message: SetUnitBalanceRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SetUnitBalanceRequest>
    ): SetUnitBalanceRequest {
        const message = {
            ...baseSetUnitBalanceRequest,
        } as SetUnitBalanceRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = object.unitBalance;
        } else {
            message.unitBalance = undefined;
        }
        return message;
    },
};

const baseProjectExecutionRequest: object = {
    projectId: '',
    outputVariableNames: '',
};

export const ProjectExecutionRequest = {
    encode(
        message: ProjectExecutionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        if (message.inputVariables !== undefined) {
            Struct.encode(
                message.inputVariables,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.outputVariableNames) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ProjectExecutionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProjectExecutionRequest,
        } as ProjectExecutionRequest;
        message.outputVariableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                case 4:
                    message.inputVariables = Struct.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.outputVariableNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProjectExecutionRequest {
        const message = {
            ...baseProjectExecutionRequest,
        } as ProjectExecutionRequest;
        message.outputVariableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = String(object.notebookId);
        } else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = String(object.cellId);
        } else {
            message.cellId = undefined;
        }
        if (
            object.inputVariables !== undefined &&
            object.inputVariables !== null
        ) {
            message.inputVariables = Struct.fromJSON(object.inputVariables);
        } else {
            message.inputVariables = undefined;
        }
        if (
            object.outputVariableNames !== undefined &&
            object.outputVariableNames !== null
        ) {
            for (const e of object.outputVariableNames) {
                message.outputVariableNames.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: ProjectExecutionRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined &&
            (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.inputVariables !== undefined &&
            (obj.inputVariables = message.inputVariables
                ? Struct.toJSON(message.inputVariables)
                : undefined);
        if (message.outputVariableNames) {
            obj.outputVariableNames = message.outputVariableNames.map((e) => e);
        } else {
            obj.outputVariableNames = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ProjectExecutionRequest>
    ): ProjectExecutionRequest {
        const message = {
            ...baseProjectExecutionRequest,
        } as ProjectExecutionRequest;
        message.outputVariableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = object.notebookId;
        } else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = object.cellId;
        } else {
            message.cellId = undefined;
        }
        if (
            object.inputVariables !== undefined &&
            object.inputVariables !== null
        ) {
            message.inputVariables = Struct.fromPartial(object.inputVariables);
        } else {
            message.inputVariables = undefined;
        }
        if (
            object.outputVariableNames !== undefined &&
            object.outputVariableNames !== null
        ) {
            for (const e of object.outputVariableNames) {
                message.outputVariableNames.push(e);
            }
        }
        return message;
    },
};

const baseProjectExecutionMetadata: object = { projectId: '' };

export const ProjectExecutionMetadata = {
    encode(
        message: ProjectExecutionMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ProjectExecutionMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProjectExecutionMetadata,
        } as ProjectExecutionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProjectExecutionMetadata {
        const message = {
            ...baseProjectExecutionMetadata,
        } as ProjectExecutionMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = String(object.notebookId);
        } else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = String(object.cellId);
        } else {
            message.cellId = undefined;
        }
        return message;
    },

    toJSON(message: ProjectExecutionMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined &&
            (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ProjectExecutionMetadata>
    ): ProjectExecutionMetadata {
        const message = {
            ...baseProjectExecutionMetadata,
        } as ProjectExecutionMetadata;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = object.notebookId;
        } else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = object.cellId;
        } else {
            message.cellId = undefined;
        }
        return message;
    },
};

const baseProjectExecutionResponse: object = { checkpointId: '' };

export const ProjectExecutionResponse = {
    encode(
        message: ProjectExecutionResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.checkpointId !== '') {
            writer.uint32(10).string(message.checkpointId);
        }
        if (message.outputVariables !== undefined) {
            Struct.encode(
                message.outputVariables,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ProjectExecutionResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProjectExecutionResponse,
        } as ProjectExecutionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checkpointId = reader.string();
                    break;
                case 2:
                    message.outputVariables = Struct.decode(
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

    fromJSON(object: any): ProjectExecutionResponse {
        const message = {
            ...baseProjectExecutionResponse,
        } as ProjectExecutionResponse;
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = String(object.checkpointId);
        } else {
            message.checkpointId = '';
        }
        if (
            object.outputVariables !== undefined &&
            object.outputVariables !== null
        ) {
            message.outputVariables = Struct.fromJSON(object.outputVariables);
        } else {
            message.outputVariables = undefined;
        }
        return message;
    },

    toJSON(message: ProjectExecutionResponse): unknown {
        const obj: any = {};
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.outputVariables !== undefined &&
            (obj.outputVariables = message.outputVariables
                ? Struct.toJSON(message.outputVariables)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ProjectExecutionResponse>
    ): ProjectExecutionResponse {
        const message = {
            ...baseProjectExecutionResponse,
        } as ProjectExecutionResponse;
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = object.checkpointId;
        } else {
            message.checkpointId = '';
        }
        if (
            object.outputVariables !== undefined &&
            object.outputVariables !== null
        ) {
            message.outputVariables = Struct.fromPartial(
                object.outputVariables
            );
        } else {
            message.outputVariables = undefined;
        }
        return message;
    },
};

const baseCellOutputsRequest: object = {
    projectId: '',
    cellId: '',
    checkpointId: '',
};

export const CellOutputsRequest = {
    encode(
        message: CellOutputsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.cellId !== '') {
            writer.uint32(18).string(message.cellId);
        }
        if (message.checkpointId !== '') {
            writer.uint32(26).string(message.checkpointId);
        }
        if (message.startAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.startAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CellOutputsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCellOutputsRequest } as CellOutputsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.cellId = reader.string();
                    break;
                case 3:
                    message.checkpointId = reader.string();
                    break;
                case 4:
                    message.startAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CellOutputsRequest {
        const message = { ...baseCellOutputsRequest } as CellOutputsRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = String(object.cellId);
        } else {
            message.cellId = '';
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = String(object.checkpointId);
        } else {
            message.checkpointId = '';
        }
        if (object.startAt !== undefined && object.startAt !== null) {
            message.startAt = fromJsonTimestamp(object.startAt);
        } else {
            message.startAt = undefined;
        }
        return message;
    },

    toJSON(message: CellOutputsRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.startAt !== undefined &&
            (obj.startAt = message.startAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<CellOutputsRequest>): CellOutputsRequest {
        const message = { ...baseCellOutputsRequest } as CellOutputsRequest;
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = object.cellId;
        } else {
            message.cellId = '';
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = object.checkpointId;
        } else {
            message.checkpointId = '';
        }
        if (object.startAt !== undefined && object.startAt !== null) {
            message.startAt = object.startAt;
        } else {
            message.startAt = undefined;
        }
        return message;
    },
};

const baseCellOutputsResponse: object = { outputs: '' };

export const CellOutputsResponse = {
    encode(
        message: CellOutputsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.outputs) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CellOutputsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCellOutputsResponse } as CellOutputsResponse;
        message.outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outputs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CellOutputsResponse {
        const message = { ...baseCellOutputsResponse } as CellOutputsResponse;
        message.outputs = [];
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: CellOutputsResponse): unknown {
        const obj: any = {};
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => e);
        } else {
            obj.outputs = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<CellOutputsResponse>): CellOutputsResponse {
        const message = { ...baseCellOutputsResponse } as CellOutputsResponse;
        message.outputs = [];
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(e);
            }
        }
        return message;
    },
};

const baseGetStateVariablesRequest: object = {
    projectId: '',
    notebookId: '',
    variableNames: '',
    checkpointId: '',
};

export const GetStateVariablesRequest = {
    encode(
        message: GetStateVariablesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== '') {
            writer.uint32(18).string(message.notebookId);
        }
        for (const v of message.variableNames) {
            writer.uint32(26).string(v!);
        }
        if (message.checkpointId !== '') {
            writer.uint32(34).string(message.checkpointId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetStateVariablesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetStateVariablesRequest,
        } as GetStateVariablesRequest;
        message.variableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.variableNames.push(reader.string());
                    break;
                case 4:
                    message.checkpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStateVariablesRequest {
        const message = {
            ...baseGetStateVariablesRequest,
        } as GetStateVariablesRequest;
        message.variableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        } else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = String(object.notebookId);
        } else {
            message.notebookId = '';
        }
        if (
            object.variableNames !== undefined &&
            object.variableNames !== null
        ) {
            for (const e of object.variableNames) {
                message.variableNames.push(String(e));
            }
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = String(object.checkpointId);
        } else {
            message.checkpointId = '';
        }
        return message;
    },

    toJSON(message: GetStateVariablesRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined &&
            (obj.notebookId = message.notebookId);
        if (message.variableNames) {
            obj.variableNames = message.variableNames.map((e) => e);
        } else {
            obj.variableNames = [];
        }
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetStateVariablesRequest>
    ): GetStateVariablesRequest {
        const message = {
            ...baseGetStateVariablesRequest,
        } as GetStateVariablesRequest;
        message.variableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        } else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = object.notebookId;
        } else {
            message.notebookId = '';
        }
        if (
            object.variableNames !== undefined &&
            object.variableNames !== null
        ) {
            for (const e of object.variableNames) {
                message.variableNames.push(e);
            }
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = object.checkpointId;
        } else {
            message.checkpointId = '';
        }
        return message;
    },
};

const baseGetStateVariablesResponse: object = {};

export const GetStateVariablesResponse = {
    encode(
        message: GetStateVariablesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.variables !== undefined) {
            Struct.encode(message.variables, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetStateVariablesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetStateVariablesResponse,
        } as GetStateVariablesResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variables = Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStateVariablesResponse {
        const message = {
            ...baseGetStateVariablesResponse,
        } as GetStateVariablesResponse;
        if (object.variables !== undefined && object.variables !== null) {
            message.variables = Struct.fromJSON(object.variables);
        } else {
            message.variables = undefined;
        }
        return message;
    },

    toJSON(message: GetStateVariablesResponse): unknown {
        const obj: any = {};
        message.variables !== undefined &&
            (obj.variables = message.variables
                ? Struct.toJSON(message.variables)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetStateVariablesResponse>
    ): GetStateVariablesResponse {
        const message = {
            ...baseGetStateVariablesResponse,
        } as GetStateVariablesResponse;
        if (object.variables !== undefined && object.variables !== null) {
            message.variables = Struct.fromPartial(object.variables);
        } else {
            message.variables = undefined;
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
    /** Returns the unit balance of the specified project. */
    getUnitBalance: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUnitBalanceRequest) =>
            Buffer.from(GetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetUnitBalanceRequest.decode(value),
        responseSerialize: (value: GetUnitBalanceResponse) =>
            Buffer.from(GetUnitBalanceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetUnitBalanceResponse.decode(value),
    },
    /** Sets the unit balance of the specified project. */
    setUnitBalance: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetUnitBalanceRequest) =>
            Buffer.from(SetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SetUnitBalanceRequest.decode(value),
        responseSerialize: (value: Empty) =>
            Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Empty.decode(value),
    },
    /** Executes code in the specified cell or notebook. */
    execute: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Execute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ProjectExecutionRequest) =>
            Buffer.from(ProjectExecutionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ProjectExecutionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns outputs of the specified cell. */
    getCellOutputs: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CellOutputsRequest) =>
            Buffer.from(CellOutputsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CellOutputsRequest.decode(value),
        responseSerialize: (value: CellOutputsResponse) =>
            Buffer.from(CellOutputsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            CellOutputsResponse.decode(value),
    },
    /** Returns state variables of the specified notebook. */
    getStateVariables: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStateVariablesRequest) =>
            Buffer.from(GetStateVariablesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetStateVariablesRequest.decode(value),
        responseSerialize: (value: GetStateVariablesResponse) =>
            Buffer.from(GetStateVariablesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetStateVariablesResponse.decode(value),
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
    /** Returns the unit balance of the specified project. */
    getUnitBalance: handleUnaryCall<
        GetUnitBalanceRequest,
        GetUnitBalanceResponse
    >;
    /** Sets the unit balance of the specified project. */
    setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Empty>;
    /** Executes code in the specified cell or notebook. */
    execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
    /** Returns outputs of the specified cell. */
    getCellOutputs: handleUnaryCall<CellOutputsRequest, CellOutputsResponse>;
    /** Returns state variables of the specified notebook. */
    getStateVariables: handleUnaryCall<
        GetStateVariablesRequest,
        GetStateVariablesResponse
    >;
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
    /** Returns the unit balance of the specified project. */
    getUnitBalance(
        request: GetUnitBalanceRequest,
        callback: (
            error: ServiceError | null,
            response: GetUnitBalanceResponse
        ) => void
    ): ClientUnaryCall;
    getUnitBalance(
        request: GetUnitBalanceRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetUnitBalanceResponse
        ) => void
    ): ClientUnaryCall;
    getUnitBalance(
        request: GetUnitBalanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetUnitBalanceResponse
        ) => void
    ): ClientUnaryCall;
    /** Sets the unit balance of the specified project. */
    setUnitBalance(
        request: SetUnitBalanceRequest,
        callback: (error: ServiceError | null, response: Empty) => void
    ): ClientUnaryCall;
    setUnitBalance(
        request: SetUnitBalanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Empty) => void
    ): ClientUnaryCall;
    setUnitBalance(
        request: SetUnitBalanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Empty) => void
    ): ClientUnaryCall;
    /** Executes code in the specified cell or notebook. */
    execute(
        request: ProjectExecutionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    execute(
        request: ProjectExecutionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    execute(
        request: ProjectExecutionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns outputs of the specified cell. */
    getCellOutputs(
        request: CellOutputsRequest,
        callback: (
            error: ServiceError | null,
            response: CellOutputsResponse
        ) => void
    ): ClientUnaryCall;
    getCellOutputs(
        request: CellOutputsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: CellOutputsResponse
        ) => void
    ): ClientUnaryCall;
    getCellOutputs(
        request: CellOutputsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: CellOutputsResponse
        ) => void
    ): ClientUnaryCall;
    /** Returns state variables of the specified notebook. */
    getStateVariables(
        request: GetStateVariablesRequest,
        callback: (
            error: ServiceError | null,
            response: GetStateVariablesResponse
        ) => void
    ): ClientUnaryCall;
    getStateVariables(
        request: GetStateVariablesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetStateVariablesResponse
        ) => void
    ): ClientUnaryCall;
    getStateVariables(
        request: GetStateVariablesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetStateVariablesResponse
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
