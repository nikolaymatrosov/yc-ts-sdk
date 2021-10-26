/// <reference types="node" />
import { Duration } from '../../../../../google/protobuf/duration';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Function, Version, Resources, Package, Connectivity, ScalingPolicy } from '../../../../../yandex/cloud/serverless/functions/v1/function';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.functions.v1";
export interface GetFunctionRequest {
    /**
     * ID of the function to return.
     *
     * To get a function ID make a [FunctionService.List] request.
     */
    functionId: string;
}
export interface GetFunctionVersionRequest {
    /**
     * ID of the version to return.
     *
     * To get a version ID make a [FunctionService.ListVersions] request.
     */
    functionVersionId: string;
}
export interface GetFunctionVersionByTagRequest {
    /**
     * ID of the function whose versions should be listed.
     *
     * To get a function ID use a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * Version tag.
     *
     * To get the history of version tags make a [FunctionService.ListTagHistory] request.
     */
    tag: string;
}
export interface ListFunctionsRequest {
    /**
     * ID of the folder to list functions in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListFunctionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters functions listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Function.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-function`.
     */
    filter: string;
}
export interface ListFunctionsResponse {
    /** List of functions in the specified folder. */
    functions: Function[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionsRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFunctionRequest {
    /**
     * ID of the folder to create a function in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the function.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the function. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateFunctionRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateFunctionMetadata {
    /** ID of the function that is being created. */
    functionId: string;
}
export interface UpdateFunctionRequest {
    /**
     * ID of the function to update.
     *
     * To get a function ID make a [FunctionService.List] request.
     */
    functionId: string;
    /** Field mask that specifies which attributes of the function should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the function.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the function. */
    description: string;
    /**
     * Function labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [FunctionService.Get] request.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateFunctionRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateFunctionMetadata {
    /** ID of the function that is being updated. */
    functionId: string;
}
export interface DeleteFunctionRequest {
    /**
     * ID of the function to delete.
     * To get a function ID make a [FunctionService.List] request.
     */
    functionId: string;
}
export interface DeleteFunctionMetadata {
    /** ID of the function that is being deleted. */
    functionId: string;
}
export interface ListRuntimesRequest {
}
export interface ListRuntimesResponse {
    /** Runtime environments available for the specified function. */
    runtimes: string[];
}
export interface ListFunctionsVersionsRequest {
    /**
     * ID of the folder to list function versions for.
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string | undefined;
    /**
     * ID of the function to list versions for.
     * To get a function ID use a [FunctionService.List] request.
     */
    functionId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available results
     * is larger than `pageSize`, the service returns a [ListFunctionsVersionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionsVersionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Function.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-function`.
     */
    filter: string;
}
export interface ListFunctionsVersionsResponse {
    /** List of versions for the specified folder or function. */
    versions: Version[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionsVersionsRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionsVersionsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListFunctionOperationsRequest {
    /** ID of the function to list operations for. */
    functionId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListFunctionOperationsResponse {
    /** List of operations for the specified function. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFunctionVersionRequest {
    /**
     * ID of the function to create a version for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /** Runtime environment for the version. */
    runtime: string;
    /** Description of the version */
    description: string;
    /** Entrypoint of the version. */
    entrypoint: string;
    /** Resources allocated to the version. */
    resources: Resources | undefined;
    /**
     * Timeout for the execution of the version.
     *
     * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
     */
    executionTimeout: Duration | undefined;
    /** ID of the service account to associate with the version. */
    serviceAccountId: string;
    /** Functions deployment package. */
    package: Package | undefined;
    /** Content of the deployment package. */
    content: Uint8Array | undefined;
    /**
     * ID of the version to be copied from. Source version must belong to the same folder as the created version
     * and the user must have read permissions to the source version.
     */
    versionId: string | undefined;
    /** Environment settings for the version. */
    environment: {
        [key: string]: string;
    };
    /** Function version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
    tag: string[];
    /** Function version connectivity. If specified the version will be attached to specified network/subnet(s). */
    connectivity: Connectivity | undefined;
    /** Additional service accounts to be used by the version. */
    namedServiceAccounts: {
        [key: string]: string;
    };
}
export interface CreateFunctionVersionRequest_EnvironmentEntry {
    key: string;
    value: string;
}
export interface CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    key: string;
    value: string;
}
export interface CreateFunctionVersionMetadata {
    /** ID of the version that is being created. */
    functionVersionId: string;
}
export interface SetFunctionTagRequest {
    /**
     * ID of the version to set the tag for.
     *
     * To get a version ID make a [FunctionService.ListVersions] request.
     */
    functionVersionId: string;
    /** Tag to set for the version. */
    tag: string;
}
export interface RemoveFunctionTagRequest {
    /**
     * ID of the version to remove a tag from.
     *
     * To get the a version ID make a [FunctionService.ListVersions] request.
     */
    functionVersionId: string;
    /** Tag to remove from the specified version. */
    tag: string;
}
export interface SetFunctionTagMetadata {
    /** ID of the function versions that is being tagged. */
    functionVersionId: string;
}
export interface RemoveFunctionTagMetadata {
    /** ID of the function versions that is being untagged. */
    functionVersionId: string;
}
export interface ListFunctionTagHistoryRequest {
    /**
     * ID of the function to retrieve tag history for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /** Specific tag that history should be limited to. */
    tag: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Function.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * For example, `name=my-function`.
     */
    filter: string;
}
export interface ListFunctionTagHistoryResponse {
    /** Set of relevant tag history records. */
    functionTagHistoryRecord: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionTagHistoryRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionTagHistoryRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
/** A record in the tag history. */
export interface ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    /** ID of the function that the record is about. */
    functionId: string;
    /** ID of the function version that the record is about. */
    functionVersionId: string;
    /** Tag that was set for the version at some point. */
    tag: string;
    /** Timestamp when the tag started being active for the function. */
    effectiveFrom: Date | undefined;
    /** Timestamp when the tag stopped being active for the function. */
    effectiveTo: Date | undefined;
}
export interface ListScalingPoliciesRequest {
    /**
     * ID of the function to retrieve scaling policies for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListScalingPoliciesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListScalingPoliciesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListScalingPoliciesResponse {
    /** Set of relevant scaling policies. */
    scalingPolicies: ScalingPolicy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListScalingPoliciesRequest.page_size], use `nextPageToken` as the value
     * for the [ListScalingPoliciesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface SetScalingPolicyRequest {
    /**
     * ID of the function to retrieve scaling policies for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * Version tag.
     *
     * To get the history of version tags make a [FunctionService.ListTagHistory] request.
     */
    tag: string;
    /**
     * Minimum guaranteed provisioned instances count for all zones in total.
     * Billed separately.
     */
    provisionedInstancesCount: number;
    /**
     * Upper limit for instance count in each zone.
     * 0 means no limit.
     */
    zoneInstancesLimit: number;
    /**
     * Upper limit of requests count in each zone.
     * 0 means no limit.
     */
    zoneRequestsLimit: number;
}
export interface SetScalingPolicyMetadata {
    /** ID of the function for which scaling policy was set. */
    functionId: string;
}
export interface RemoveScalingPolicyRequest {
    /**
     * ID of the function to remove scaling policies for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * Version tag.
     *
     * To get the history of version tags make a [FunctionService.ListTagHistory] request.
     */
    tag: string;
}
export interface RemoveScalingPolicyMetadata {
    /** ID of the function for which scaling policy was removed. */
    functionId: string;
}
export declare const GetFunctionRequest: {
    encode(message: GetFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFunctionRequest;
    fromJSON(object: any): GetFunctionRequest;
    toJSON(message: GetFunctionRequest): unknown;
    fromPartial(object: DeepPartial<GetFunctionRequest>): GetFunctionRequest;
};
export declare const GetFunctionVersionRequest: {
    encode(message: GetFunctionVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFunctionVersionRequest;
    fromJSON(object: any): GetFunctionVersionRequest;
    toJSON(message: GetFunctionVersionRequest): unknown;
    fromPartial(object: DeepPartial<GetFunctionVersionRequest>): GetFunctionVersionRequest;
};
export declare const GetFunctionVersionByTagRequest: {
    encode(message: GetFunctionVersionByTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFunctionVersionByTagRequest;
    fromJSON(object: any): GetFunctionVersionByTagRequest;
    toJSON(message: GetFunctionVersionByTagRequest): unknown;
    fromPartial(object: DeepPartial<GetFunctionVersionByTagRequest>): GetFunctionVersionByTagRequest;
};
export declare const ListFunctionsRequest: {
    encode(message: ListFunctionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsRequest;
    fromJSON(object: any): ListFunctionsRequest;
    toJSON(message: ListFunctionsRequest): unknown;
    fromPartial(object: DeepPartial<ListFunctionsRequest>): ListFunctionsRequest;
};
export declare const ListFunctionsResponse: {
    encode(message: ListFunctionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsResponse;
    fromJSON(object: any): ListFunctionsResponse;
    toJSON(message: ListFunctionsResponse): unknown;
    fromPartial(object: DeepPartial<ListFunctionsResponse>): ListFunctionsResponse;
};
export declare const CreateFunctionRequest: {
    encode(message: CreateFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionRequest;
    fromJSON(object: any): CreateFunctionRequest;
    toJSON(message: CreateFunctionRequest): unknown;
    fromPartial(object: DeepPartial<CreateFunctionRequest>): CreateFunctionRequest;
};
export declare const CreateFunctionRequest_LabelsEntry: {
    encode(message: CreateFunctionRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionRequest_LabelsEntry;
    fromJSON(object: any): CreateFunctionRequest_LabelsEntry;
    toJSON(message: CreateFunctionRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateFunctionRequest_LabelsEntry>): CreateFunctionRequest_LabelsEntry;
};
export declare const CreateFunctionMetadata: {
    encode(message: CreateFunctionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionMetadata;
    fromJSON(object: any): CreateFunctionMetadata;
    toJSON(message: CreateFunctionMetadata): unknown;
    fromPartial(object: DeepPartial<CreateFunctionMetadata>): CreateFunctionMetadata;
};
export declare const UpdateFunctionRequest: {
    encode(message: UpdateFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFunctionRequest;
    fromJSON(object: any): UpdateFunctionRequest;
    toJSON(message: UpdateFunctionRequest): unknown;
    fromPartial(object: DeepPartial<UpdateFunctionRequest>): UpdateFunctionRequest;
};
export declare const UpdateFunctionRequest_LabelsEntry: {
    encode(message: UpdateFunctionRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFunctionRequest_LabelsEntry;
    fromJSON(object: any): UpdateFunctionRequest_LabelsEntry;
    toJSON(message: UpdateFunctionRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateFunctionRequest_LabelsEntry>): UpdateFunctionRequest_LabelsEntry;
};
export declare const UpdateFunctionMetadata: {
    encode(message: UpdateFunctionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFunctionMetadata;
    fromJSON(object: any): UpdateFunctionMetadata;
    toJSON(message: UpdateFunctionMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateFunctionMetadata>): UpdateFunctionMetadata;
};
export declare const DeleteFunctionRequest: {
    encode(message: DeleteFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFunctionRequest;
    fromJSON(object: any): DeleteFunctionRequest;
    toJSON(message: DeleteFunctionRequest): unknown;
    fromPartial(object: DeepPartial<DeleteFunctionRequest>): DeleteFunctionRequest;
};
export declare const DeleteFunctionMetadata: {
    encode(message: DeleteFunctionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFunctionMetadata;
    fromJSON(object: any): DeleteFunctionMetadata;
    toJSON(message: DeleteFunctionMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteFunctionMetadata>): DeleteFunctionMetadata;
};
export declare const ListRuntimesRequest: {
    encode(_: ListRuntimesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRuntimesRequest;
    fromJSON(_: any): ListRuntimesRequest;
    toJSON(_: ListRuntimesRequest): unknown;
    fromPartial(_: DeepPartial<ListRuntimesRequest>): ListRuntimesRequest;
};
export declare const ListRuntimesResponse: {
    encode(message: ListRuntimesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRuntimesResponse;
    fromJSON(object: any): ListRuntimesResponse;
    toJSON(message: ListRuntimesResponse): unknown;
    fromPartial(object: DeepPartial<ListRuntimesResponse>): ListRuntimesResponse;
};
export declare const ListFunctionsVersionsRequest: {
    encode(message: ListFunctionsVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsVersionsRequest;
    fromJSON(object: any): ListFunctionsVersionsRequest;
    toJSON(message: ListFunctionsVersionsRequest): unknown;
    fromPartial(object: DeepPartial<ListFunctionsVersionsRequest>): ListFunctionsVersionsRequest;
};
export declare const ListFunctionsVersionsResponse: {
    encode(message: ListFunctionsVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsVersionsResponse;
    fromJSON(object: any): ListFunctionsVersionsResponse;
    toJSON(message: ListFunctionsVersionsResponse): unknown;
    fromPartial(object: DeepPartial<ListFunctionsVersionsResponse>): ListFunctionsVersionsResponse;
};
export declare const ListFunctionOperationsRequest: {
    encode(message: ListFunctionOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionOperationsRequest;
    fromJSON(object: any): ListFunctionOperationsRequest;
    toJSON(message: ListFunctionOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListFunctionOperationsRequest>): ListFunctionOperationsRequest;
};
export declare const ListFunctionOperationsResponse: {
    encode(message: ListFunctionOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionOperationsResponse;
    fromJSON(object: any): ListFunctionOperationsResponse;
    toJSON(message: ListFunctionOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListFunctionOperationsResponse>): ListFunctionOperationsResponse;
};
export declare const CreateFunctionVersionRequest: {
    encode(message: CreateFunctionVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionRequest;
    fromJSON(object: any): CreateFunctionVersionRequest;
    toJSON(message: CreateFunctionVersionRequest): unknown;
    fromPartial(object: DeepPartial<CreateFunctionVersionRequest>): CreateFunctionVersionRequest;
};
export declare const CreateFunctionVersionRequest_EnvironmentEntry: {
    encode(message: CreateFunctionVersionRequest_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionRequest_EnvironmentEntry;
    fromJSON(object: any): CreateFunctionVersionRequest_EnvironmentEntry;
    toJSON(message: CreateFunctionVersionRequest_EnvironmentEntry): unknown;
    fromPartial(object: DeepPartial<CreateFunctionVersionRequest_EnvironmentEntry>): CreateFunctionVersionRequest_EnvironmentEntry;
};
export declare const CreateFunctionVersionRequest_NamedServiceAccountsEntry: {
    encode(message: CreateFunctionVersionRequest_NamedServiceAccountsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionRequest_NamedServiceAccountsEntry;
    fromJSON(object: any): CreateFunctionVersionRequest_NamedServiceAccountsEntry;
    toJSON(message: CreateFunctionVersionRequest_NamedServiceAccountsEntry): unknown;
    fromPartial(object: DeepPartial<CreateFunctionVersionRequest_NamedServiceAccountsEntry>): CreateFunctionVersionRequest_NamedServiceAccountsEntry;
};
export declare const CreateFunctionVersionMetadata: {
    encode(message: CreateFunctionVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionMetadata;
    fromJSON(object: any): CreateFunctionVersionMetadata;
    toJSON(message: CreateFunctionVersionMetadata): unknown;
    fromPartial(object: DeepPartial<CreateFunctionVersionMetadata>): CreateFunctionVersionMetadata;
};
export declare const SetFunctionTagRequest: {
    encode(message: SetFunctionTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetFunctionTagRequest;
    fromJSON(object: any): SetFunctionTagRequest;
    toJSON(message: SetFunctionTagRequest): unknown;
    fromPartial(object: DeepPartial<SetFunctionTagRequest>): SetFunctionTagRequest;
};
export declare const RemoveFunctionTagRequest: {
    encode(message: RemoveFunctionTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveFunctionTagRequest;
    fromJSON(object: any): RemoveFunctionTagRequest;
    toJSON(message: RemoveFunctionTagRequest): unknown;
    fromPartial(object: DeepPartial<RemoveFunctionTagRequest>): RemoveFunctionTagRequest;
};
export declare const SetFunctionTagMetadata: {
    encode(message: SetFunctionTagMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetFunctionTagMetadata;
    fromJSON(object: any): SetFunctionTagMetadata;
    toJSON(message: SetFunctionTagMetadata): unknown;
    fromPartial(object: DeepPartial<SetFunctionTagMetadata>): SetFunctionTagMetadata;
};
export declare const RemoveFunctionTagMetadata: {
    encode(message: RemoveFunctionTagMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveFunctionTagMetadata;
    fromJSON(object: any): RemoveFunctionTagMetadata;
    toJSON(message: RemoveFunctionTagMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveFunctionTagMetadata>): RemoveFunctionTagMetadata;
};
export declare const ListFunctionTagHistoryRequest: {
    encode(message: ListFunctionTagHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionTagHistoryRequest;
    fromJSON(object: any): ListFunctionTagHistoryRequest;
    toJSON(message: ListFunctionTagHistoryRequest): unknown;
    fromPartial(object: DeepPartial<ListFunctionTagHistoryRequest>): ListFunctionTagHistoryRequest;
};
export declare const ListFunctionTagHistoryResponse: {
    encode(message: ListFunctionTagHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionTagHistoryResponse;
    fromJSON(object: any): ListFunctionTagHistoryResponse;
    toJSON(message: ListFunctionTagHistoryResponse): unknown;
    fromPartial(object: DeepPartial<ListFunctionTagHistoryResponse>): ListFunctionTagHistoryResponse;
};
export declare const ListFunctionTagHistoryResponse_FunctionTagHistoryRecord: {
    encode(message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    fromJSON(object: any): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    toJSON(message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord): unknown;
    fromPartial(object: DeepPartial<ListFunctionTagHistoryResponse_FunctionTagHistoryRecord>): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
};
export declare const ListScalingPoliciesRequest: {
    encode(message: ListScalingPoliciesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListScalingPoliciesRequest;
    fromJSON(object: any): ListScalingPoliciesRequest;
    toJSON(message: ListScalingPoliciesRequest): unknown;
    fromPartial(object: DeepPartial<ListScalingPoliciesRequest>): ListScalingPoliciesRequest;
};
export declare const ListScalingPoliciesResponse: {
    encode(message: ListScalingPoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListScalingPoliciesResponse;
    fromJSON(object: any): ListScalingPoliciesResponse;
    toJSON(message: ListScalingPoliciesResponse): unknown;
    fromPartial(object: DeepPartial<ListScalingPoliciesResponse>): ListScalingPoliciesResponse;
};
export declare const SetScalingPolicyRequest: {
    encode(message: SetScalingPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetScalingPolicyRequest;
    fromJSON(object: any): SetScalingPolicyRequest;
    toJSON(message: SetScalingPolicyRequest): unknown;
    fromPartial(object: DeepPartial<SetScalingPolicyRequest>): SetScalingPolicyRequest;
};
export declare const SetScalingPolicyMetadata: {
    encode(message: SetScalingPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetScalingPolicyMetadata;
    fromJSON(object: any): SetScalingPolicyMetadata;
    toJSON(message: SetScalingPolicyMetadata): unknown;
    fromPartial(object: DeepPartial<SetScalingPolicyMetadata>): SetScalingPolicyMetadata;
};
export declare const RemoveScalingPolicyRequest: {
    encode(message: RemoveScalingPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveScalingPolicyRequest;
    fromJSON(object: any): RemoveScalingPolicyRequest;
    toJSON(message: RemoveScalingPolicyRequest): unknown;
    fromPartial(object: DeepPartial<RemoveScalingPolicyRequest>): RemoveScalingPolicyRequest;
};
export declare const RemoveScalingPolicyMetadata: {
    encode(message: RemoveScalingPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveScalingPolicyMetadata;
    fromJSON(object: any): RemoveScalingPolicyMetadata;
    toJSON(message: RemoveScalingPolicyMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveScalingPolicyMetadata>): RemoveScalingPolicyMetadata;
};
/** A set of methods for managing serverless functions. */
export declare const FunctionServiceService: {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFunctionRequest;
        readonly responseSerialize: (value: Function) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Function;
    };
    /** Retrieves the list of functions in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionsRequest;
        readonly responseSerialize: (value: ListFunctionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionsResponse;
    };
    /** Creates a function in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFunctionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified function. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFunctionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified function. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFunctionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    readonly getVersion: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFunctionVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFunctionVersionRequest;
        readonly responseSerialize: (value: Version) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Version;
    };
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    readonly getVersionByTag: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFunctionVersionByTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFunctionVersionByTagRequest;
        readonly responseSerialize: (value: Version) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Version;
    };
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    readonly listVersions: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionsVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionsVersionsRequest;
        readonly responseSerialize: (value: ListFunctionsVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionsVersionsResponse;
    };
    /** Set a tag for the specified version of a function. */
    readonly setTag: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetFunctionTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetFunctionTagRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Remove a tag from the specified version of a function. */
    readonly removeTag: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveFunctionTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveFunctionTagRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the log of tags assigned to versions of the specified function. */
    readonly listTagHistory: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionTagHistoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionTagHistoryRequest;
        readonly responseSerialize: (value: ListFunctionTagHistoryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionTagHistoryResponse;
    };
    /** Creates a version for the specified function. */
    readonly createVersion: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFunctionVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFunctionVersionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists available runtime environments for the specified function. */
    readonly listRuntimes: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRuntimesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRuntimesRequest;
        readonly responseSerialize: (value: ListRuntimesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRuntimesResponse;
    };
    /** Lists operations for the specified function. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionOperationsRequest;
        readonly responseSerialize: (value: ListFunctionOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionOperationsResponse;
    };
    /** Lists existing access bindings for the specified function. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the function. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified function. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists existing scaling policies for specified function */
    readonly listScalingPolicies: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListScalingPoliciesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListScalingPoliciesRequest;
        readonly responseSerialize: (value: ListScalingPoliciesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListScalingPoliciesResponse;
    };
    /** Set scaling policy for specified function and tag */
    readonly setScalingPolicy: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetScalingPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetScalingPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Remove scaling policy for specified function and tag */
    readonly removeScalingPolicy: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveScalingPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveScalingPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface FunctionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    get: handleUnaryCall<GetFunctionRequest, Function>;
    /** Retrieves the list of functions in the specified folder. */
    list: handleUnaryCall<ListFunctionsRequest, ListFunctionsResponse>;
    /** Creates a function in the specified folder. */
    create: handleUnaryCall<CreateFunctionRequest, Operation>;
    /** Updates the specified function. */
    update: handleUnaryCall<UpdateFunctionRequest, Operation>;
    /** Deletes the specified function. */
    delete: handleUnaryCall<DeleteFunctionRequest, Operation>;
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    getVersion: handleUnaryCall<GetFunctionVersionRequest, Version>;
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    getVersionByTag: handleUnaryCall<GetFunctionVersionByTagRequest, Version>;
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    listVersions: handleUnaryCall<ListFunctionsVersionsRequest, ListFunctionsVersionsResponse>;
    /** Set a tag for the specified version of a function. */
    setTag: handleUnaryCall<SetFunctionTagRequest, Operation>;
    /** Remove a tag from the specified version of a function. */
    removeTag: handleUnaryCall<RemoveFunctionTagRequest, Operation>;
    /** Returns the log of tags assigned to versions of the specified function. */
    listTagHistory: handleUnaryCall<ListFunctionTagHistoryRequest, ListFunctionTagHistoryResponse>;
    /** Creates a version for the specified function. */
    createVersion: handleUnaryCall<CreateFunctionVersionRequest, Operation>;
    /** Lists available runtime environments for the specified function. */
    listRuntimes: handleUnaryCall<ListRuntimesRequest, ListRuntimesResponse>;
    /** Lists operations for the specified function. */
    listOperations: handleUnaryCall<ListFunctionOperationsRequest, ListFunctionOperationsResponse>;
    /** Lists existing access bindings for the specified function. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the function. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified function. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists existing scaling policies for specified function */
    listScalingPolicies: handleUnaryCall<ListScalingPoliciesRequest, ListScalingPoliciesResponse>;
    /** Set scaling policy for specified function and tag */
    setScalingPolicy: handleUnaryCall<SetScalingPolicyRequest, Operation>;
    /** Remove scaling policy for specified function and tag */
    removeScalingPolicy: handleUnaryCall<RemoveScalingPolicyRequest, Operation>;
}
export interface FunctionServiceClient extends Client {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    get(request: GetFunctionRequest, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
    get(request: GetFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
    get(request: GetFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
    /** Retrieves the list of functions in the specified folder. */
    list(request: ListFunctionsRequest, callback: (error: ServiceError | null, response: ListFunctionsResponse) => void): ClientUnaryCall;
    list(request: ListFunctionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionsResponse) => void): ClientUnaryCall;
    list(request: ListFunctionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionsResponse) => void): ClientUnaryCall;
    /** Creates a function in the specified folder. */
    create(request: CreateFunctionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified function. */
    update(request: UpdateFunctionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified function. */
    delete(request: DeleteFunctionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    getVersion(request: GetFunctionVersionRequest, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersion(request: GetFunctionVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersion(request: GetFunctionVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    getVersionByTag(request: GetFunctionVersionByTagRequest, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersionByTag(request: GetFunctionVersionByTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersionByTag(request: GetFunctionVersionByTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    listVersions(request: ListFunctionsVersionsRequest, callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListFunctionsVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListFunctionsVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void): ClientUnaryCall;
    /** Set a tag for the specified version of a function. */
    setTag(request: SetFunctionTagRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setTag(request: SetFunctionTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setTag(request: SetFunctionTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Remove a tag from the specified version of a function. */
    removeTag(request: RemoveFunctionTagRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTag(request: RemoveFunctionTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTag(request: RemoveFunctionTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the log of tags assigned to versions of the specified function. */
    listTagHistory(request: ListFunctionTagHistoryRequest, callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void): ClientUnaryCall;
    listTagHistory(request: ListFunctionTagHistoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void): ClientUnaryCall;
    listTagHistory(request: ListFunctionTagHistoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void): ClientUnaryCall;
    /** Creates a version for the specified function. */
    createVersion(request: CreateFunctionVersionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createVersion(request: CreateFunctionVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createVersion(request: CreateFunctionVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists available runtime environments for the specified function. */
    listRuntimes(request: ListRuntimesRequest, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    listRuntimes(request: ListRuntimesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    listRuntimes(request: ListRuntimesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified function. */
    listOperations(request: ListFunctionOperationsRequest, callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFunctionOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFunctionOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified function. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the function. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified function. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists existing scaling policies for specified function */
    listScalingPolicies(request: ListScalingPoliciesRequest, callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void): ClientUnaryCall;
    listScalingPolicies(request: ListScalingPoliciesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void): ClientUnaryCall;
    listScalingPolicies(request: ListScalingPoliciesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void): ClientUnaryCall;
    /** Set scaling policy for specified function and tag */
    setScalingPolicy(request: SetScalingPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setScalingPolicy(request: SetScalingPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setScalingPolicy(request: SetScalingPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Remove scaling policy for specified function and tag */
    removeScalingPolicy(request: RemoveScalingPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeScalingPolicy(request: RemoveScalingPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeScalingPolicy(request: RemoveScalingPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const FunctionServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => FunctionServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
