/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Project_Settings, Project } from '../../../../yandex/cloud/datasphere/v1/project';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
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
export declare const CreateProjectRequest: {
    encode(message: CreateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProjectRequest;
    fromJSON(object: any): CreateProjectRequest;
    toJSON(message: CreateProjectRequest): unknown;
    fromPartial(object: DeepPartial<CreateProjectRequest>): CreateProjectRequest;
};
export declare const CreateProjectMetadata: {
    encode(message: CreateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProjectMetadata;
    fromJSON(object: any): CreateProjectMetadata;
    toJSON(message: CreateProjectMetadata): unknown;
    fromPartial(object: DeepPartial<CreateProjectMetadata>): CreateProjectMetadata;
};
export declare const UpdateProjectRequest: {
    encode(message: UpdateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProjectRequest;
    fromJSON(object: any): UpdateProjectRequest;
    toJSON(message: UpdateProjectRequest): unknown;
    fromPartial(object: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
};
export declare const UpdateProjectMetadata: {
    encode(message: UpdateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProjectMetadata;
    fromJSON(object: any): UpdateProjectMetadata;
    toJSON(message: UpdateProjectMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateProjectMetadata>): UpdateProjectMetadata;
};
export declare const DeleteProjectRequest: {
    encode(message: DeleteProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProjectRequest;
    fromJSON(object: any): DeleteProjectRequest;
    toJSON(message: DeleteProjectRequest): unknown;
    fromPartial(object: DeepPartial<DeleteProjectRequest>): DeleteProjectRequest;
};
export declare const DeleteProjectMetadata: {
    encode(message: DeleteProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProjectMetadata;
    fromJSON(object: any): DeleteProjectMetadata;
    toJSON(message: DeleteProjectMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteProjectMetadata>): DeleteProjectMetadata;
};
export declare const OpenProjectRequest: {
    encode(message: OpenProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenProjectRequest;
    fromJSON(object: any): OpenProjectRequest;
    toJSON(message: OpenProjectRequest): unknown;
    fromPartial(object: DeepPartial<OpenProjectRequest>): OpenProjectRequest;
};
export declare const OpenProjectMetadata: {
    encode(message: OpenProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenProjectMetadata;
    fromJSON(object: any): OpenProjectMetadata;
    toJSON(message: OpenProjectMetadata): unknown;
    fromPartial(object: DeepPartial<OpenProjectMetadata>): OpenProjectMetadata;
};
export declare const OpenProjectResponse: {
    encode(message: OpenProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenProjectResponse;
    fromJSON(object: any): OpenProjectResponse;
    toJSON(message: OpenProjectResponse): unknown;
    fromPartial(object: DeepPartial<OpenProjectResponse>): OpenProjectResponse;
};
export declare const GetProjectRequest: {
    encode(message: GetProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProjectRequest;
    fromJSON(object: any): GetProjectRequest;
    toJSON(message: GetProjectRequest): unknown;
    fromPartial(object: DeepPartial<GetProjectRequest>): GetProjectRequest;
};
export declare const ListProjectsRequest: {
    encode(message: ListProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProjectsRequest;
    fromJSON(object: any): ListProjectsRequest;
    toJSON(message: ListProjectsRequest): unknown;
    fromPartial(object: DeepPartial<ListProjectsRequest>): ListProjectsRequest;
};
export declare const ListProjectsResponse: {
    encode(message: ListProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProjectsResponse;
    fromJSON(object: any): ListProjectsResponse;
    toJSON(message: ListProjectsResponse): unknown;
    fromPartial(object: DeepPartial<ListProjectsResponse>): ListProjectsResponse;
};
/** A set of methods for managing Project resources. */
export declare const ProjectServiceService: {
    /** Creates a project in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified project. */
    readonly update: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified project. */
    readonly delete: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Opens the specified project. */
    readonly open: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Open";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OpenProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => OpenProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified project. */
    readonly get: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProjectRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
    /** Lists projects for the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProjectsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProjectsRequest;
        readonly responseSerialize: (value: ListProjectsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProjectsResponse;
    };
};
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
    create(request: CreateProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified project. */
    update(request: UpdateProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified project. */
    delete(request: DeleteProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Opens the specified project. */
    open(request: OpenProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    open(request: OpenProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    open(request: OpenProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified project. */
    get(request: GetProjectRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    get(request: GetProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    get(request: GetProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    /** Lists projects for the specified folder. */
    list(request: ListProjectsRequest, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    list(request: ListProjectsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    list(request: ListProjectsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
}
export declare const ProjectServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ProjectServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
