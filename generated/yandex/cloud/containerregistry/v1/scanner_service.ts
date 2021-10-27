/* eslint-disable */
import {
    ScanResult,
    Vulnerability,
} from '../../../../yandex/cloud/containerregistry/v1/scanner';
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

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export interface ScanRequest {
    /** ID of the Image to be scanned for vulnerabilities. */
    imageId: string;
}

export interface ScanMetadata {
    /** ID of the ScanResult that is being created. */
    scanResultId: string;
}

export interface GetScanResultRequest {
    /** ID of the ScanResult to return. */
    scanResultId: string;
}

export interface GetLastScanResultRequest {
    /** ID of the Image to get last finished ScanResult. */
    imageId: string;
}

export interface ListScanResultsRequest {
    imageId: string | undefined;
    repositoryId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    /**
     * An order expression that orders resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
     * 2. Order selector. Currently you can use ordering only on `ScanResult.status` field (critical first).
     */
    orderBy: string;
}

export interface ListScanResultsResponse {
    /** List of ScanResult resources. */
    scanResults: ScanResult[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListVulnerabilitiesRequest {
    /** ID of the ScanResult to get list of vulnerabilities for. */
    scanResultId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    /**
     * An order expression that orders resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
     * 2. Order selector. Currently you can use ordering only on `Vulnerability.severity` field (recent first).
     */
    orderBy: string;
}

export interface ListVulnerabilitiesResponse {
    /** List of Vulnerability resources. */
    vulnerabilities: Vulnerability[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseScanRequest: object = { imageId: '' };

export const ScanRequest = {
    encode(
        message: ScanRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanRequest } as ScanRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanRequest {
        const message = { ...baseScanRequest } as ScanRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = '';
        }
        return message;
    },

    toJSON(message: ScanRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial(object: DeepPartial<ScanRequest>): ScanRequest {
        const message = { ...baseScanRequest } as ScanRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = '';
        }
        return message;
    },
};

const baseScanMetadata: object = { scanResultId: '' };

export const ScanMetadata = {
    encode(
        message: ScanMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.scanResultId !== '') {
            writer.uint32(10).string(message.scanResultId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanMetadata } as ScanMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanMetadata {
        const message = { ...baseScanMetadata } as ScanMetadata;
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = String(object.scanResultId);
        } else {
            message.scanResultId = '';
        }
        return message;
    },

    toJSON(message: ScanMetadata): unknown {
        const obj: any = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        return obj;
    },

    fromPartial(object: DeepPartial<ScanMetadata>): ScanMetadata {
        const message = { ...baseScanMetadata } as ScanMetadata;
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = object.scanResultId;
        } else {
            message.scanResultId = '';
        }
        return message;
    },
};

const baseGetScanResultRequest: object = { scanResultId: '' };

export const GetScanResultRequest = {
    encode(
        message: GetScanResultRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.scanResultId !== '') {
            writer.uint32(10).string(message.scanResultId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetScanResultRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetScanResultRequest } as GetScanResultRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetScanResultRequest {
        const message = { ...baseGetScanResultRequest } as GetScanResultRequest;
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = String(object.scanResultId);
        } else {
            message.scanResultId = '';
        }
        return message;
    },

    toJSON(message: GetScanResultRequest): unknown {
        const obj: any = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetScanResultRequest>
    ): GetScanResultRequest {
        const message = { ...baseGetScanResultRequest } as GetScanResultRequest;
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = object.scanResultId;
        } else {
            message.scanResultId = '';
        }
        return message;
    },
};

const baseGetLastScanResultRequest: object = { imageId: '' };

export const GetLastScanResultRequest = {
    encode(
        message: GetLastScanResultRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetLastScanResultRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLastScanResultRequest,
        } as GetLastScanResultRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLastScanResultRequest {
        const message = {
            ...baseGetLastScanResultRequest,
        } as GetLastScanResultRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = '';
        }
        return message;
    },

    toJSON(message: GetLastScanResultRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetLastScanResultRequest>
    ): GetLastScanResultRequest {
        const message = {
            ...baseGetLastScanResultRequest,
        } as GetLastScanResultRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = '';
        }
        return message;
    },
};

const baseListScanResultsRequest: object = {
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListScanResultsRequest = {
    encode(
        message: ListScanResultsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageId !== undefined) {
            writer.uint32(10).string(message.imageId);
        }
        if (message.repositoryId !== undefined) {
            writer.uint32(18).string(message.repositoryId);
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
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListScanResultsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListScanResultsRequest,
        } as ListScanResultsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                case 2:
                    message.repositoryId = reader.string();
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
                case 6:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListScanResultsRequest {
        const message = {
            ...baseListScanResultsRequest,
        } as ListScanResultsRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = undefined;
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
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        } else {
            message.orderBy = '';
        }
        return message;
    },

    toJSON(message: ListScanResultsRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListScanResultsRequest>
    ): ListScanResultsRequest {
        const message = {
            ...baseListScanResultsRequest,
        } as ListScanResultsRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = undefined;
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = undefined;
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
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        } else {
            message.orderBy = '';
        }
        return message;
    },
};

const baseListScanResultsResponse: object = { nextPageToken: '' };

export const ListScanResultsResponse = {
    encode(
        message: ListScanResultsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.scanResults) {
            ScanResult.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListScanResultsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListScanResultsResponse,
        } as ListScanResultsResponse;
        message.scanResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResults.push(
                        ScanResult.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListScanResultsResponse {
        const message = {
            ...baseListScanResultsResponse,
        } as ListScanResultsResponse;
        message.scanResults = [];
        if (object.scanResults !== undefined && object.scanResults !== null) {
            for (const e of object.scanResults) {
                message.scanResults.push(ScanResult.fromJSON(e));
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

    toJSON(message: ListScanResultsResponse): unknown {
        const obj: any = {};
        if (message.scanResults) {
            obj.scanResults = message.scanResults.map((e) =>
                e ? ScanResult.toJSON(e) : undefined
            );
        } else {
            obj.scanResults = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListScanResultsResponse>
    ): ListScanResultsResponse {
        const message = {
            ...baseListScanResultsResponse,
        } as ListScanResultsResponse;
        message.scanResults = [];
        if (object.scanResults !== undefined && object.scanResults !== null) {
            for (const e of object.scanResults) {
                message.scanResults.push(ScanResult.fromPartial(e));
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

const baseListVulnerabilitiesRequest: object = {
    scanResultId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListVulnerabilitiesRequest = {
    encode(
        message: ListVulnerabilitiesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.scanResultId !== '') {
            writer.uint32(10).string(message.scanResultId);
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
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListVulnerabilitiesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListVulnerabilitiesRequest,
        } as ListVulnerabilitiesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
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
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListVulnerabilitiesRequest {
        const message = {
            ...baseListVulnerabilitiesRequest,
        } as ListVulnerabilitiesRequest;
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = String(object.scanResultId);
        } else {
            message.scanResultId = '';
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
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        } else {
            message.orderBy = '';
        }
        return message;
    },

    toJSON(message: ListVulnerabilitiesRequest): unknown {
        const obj: any = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVulnerabilitiesRequest>
    ): ListVulnerabilitiesRequest {
        const message = {
            ...baseListVulnerabilitiesRequest,
        } as ListVulnerabilitiesRequest;
        if (object.scanResultId !== undefined && object.scanResultId !== null) {
            message.scanResultId = object.scanResultId;
        } else {
            message.scanResultId = '';
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
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        } else {
            message.orderBy = '';
        }
        return message;
    },
};

const baseListVulnerabilitiesResponse: object = { nextPageToken: '' };

export const ListVulnerabilitiesResponse = {
    encode(
        message: ListVulnerabilitiesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.vulnerabilities) {
            Vulnerability.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListVulnerabilitiesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListVulnerabilitiesResponse,
        } as ListVulnerabilitiesResponse;
        message.vulnerabilities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vulnerabilities.push(
                        Vulnerability.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListVulnerabilitiesResponse {
        const message = {
            ...baseListVulnerabilitiesResponse,
        } as ListVulnerabilitiesResponse;
        message.vulnerabilities = [];
        if (
            object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null
        ) {
            for (const e of object.vulnerabilities) {
                message.vulnerabilities.push(Vulnerability.fromJSON(e));
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

    toJSON(message: ListVulnerabilitiesResponse): unknown {
        const obj: any = {};
        if (message.vulnerabilities) {
            obj.vulnerabilities = message.vulnerabilities.map((e) =>
                e ? Vulnerability.toJSON(e) : undefined
            );
        } else {
            obj.vulnerabilities = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVulnerabilitiesResponse>
    ): ListVulnerabilitiesResponse {
        const message = {
            ...baseListVulnerabilitiesResponse,
        } as ListVulnerabilitiesResponse;
        message.vulnerabilities = [];
        if (
            object.vulnerabilities !== undefined &&
            object.vulnerabilities !== null
        ) {
            for (const e of object.vulnerabilities) {
                message.vulnerabilities.push(Vulnerability.fromPartial(e));
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

/** A set of methods for scanning Docker images. */
export const ScannerServiceService = {
    /** Executes scanning of specified image. */
    scan: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/Scan',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ScanRequest) =>
            Buffer.from(ScanRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetScanResultRequest) =>
            Buffer.from(GetScanResultRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetScanResultRequest.decode(value),
        responseSerialize: (value: ScanResult) =>
            Buffer.from(ScanResult.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ScanResult.decode(value),
    },
    /** Returns the last finished ScanResult for the specified Image. */
    getLast: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/GetLast',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLastScanResultRequest) =>
            Buffer.from(GetLastScanResultRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetLastScanResultRequest.decode(value),
        responseSerialize: (value: ScanResult) =>
            Buffer.from(ScanResult.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ScanResult.decode(value),
    },
    /** Retrieves the list of ScanResults for specified Image. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListScanResultsRequest) =>
            Buffer.from(ListScanResultsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListScanResultsRequest.decode(value),
        responseSerialize: (value: ListScanResultsResponse) =>
            Buffer.from(ListScanResultsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListScanResultsResponse.decode(value),
    },
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities: {
        path: '/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVulnerabilitiesRequest) =>
            Buffer.from(ListVulnerabilitiesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListVulnerabilitiesRequest.decode(value),
        responseSerialize: (value: ListVulnerabilitiesResponse) =>
            Buffer.from(ListVulnerabilitiesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListVulnerabilitiesResponse.decode(value),
    },
} as const;

export interface ScannerServiceServer extends UntypedServiceImplementation {
    /** Executes scanning of specified image. */
    scan: handleUnaryCall<ScanRequest, Operation>;
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get: handleUnaryCall<GetScanResultRequest, ScanResult>;
    /** Returns the last finished ScanResult for the specified Image. */
    getLast: handleUnaryCall<GetLastScanResultRequest, ScanResult>;
    /** Retrieves the list of ScanResults for specified Image. */
    list: handleUnaryCall<ListScanResultsRequest, ListScanResultsResponse>;
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities: handleUnaryCall<
        ListVulnerabilitiesRequest,
        ListVulnerabilitiesResponse
    >;
}

export interface ScannerServiceClient extends Client {
    /** Executes scanning of specified image. */
    scan(
        request: ScanRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    scan(
        request: ScanRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    scan(
        request: ScanRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get(
        request: GetScanResultRequest,
        callback: (error: ServiceError | null, response: ScanResult) => void
    ): ClientUnaryCall;
    get(
        request: GetScanResultRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ScanResult) => void
    ): ClientUnaryCall;
    get(
        request: GetScanResultRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ScanResult) => void
    ): ClientUnaryCall;
    /** Returns the last finished ScanResult for the specified Image. */
    getLast(
        request: GetLastScanResultRequest,
        callback: (error: ServiceError | null, response: ScanResult) => void
    ): ClientUnaryCall;
    getLast(
        request: GetLastScanResultRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ScanResult) => void
    ): ClientUnaryCall;
    getLast(
        request: GetLastScanResultRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ScanResult) => void
    ): ClientUnaryCall;
    /** Retrieves the list of ScanResults for specified Image. */
    list(
        request: ListScanResultsRequest,
        callback: (
            error: ServiceError | null,
            response: ListScanResultsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListScanResultsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListScanResultsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListScanResultsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListScanResultsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities(
        request: ListVulnerabilitiesRequest,
        callback: (
            error: ServiceError | null,
            response: ListVulnerabilitiesResponse
        ) => void
    ): ClientUnaryCall;
    listVulnerabilities(
        request: ListVulnerabilitiesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListVulnerabilitiesResponse
        ) => void
    ): ClientUnaryCall;
    listVulnerabilities(
        request: ListVulnerabilitiesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListVulnerabilitiesResponse
        ) => void
    ): ClientUnaryCall;
}

export const ScannerServiceClient = makeGenericClientConstructor(
    ScannerServiceService,
    'yandex.cloud.containerregistry.v1.ScannerService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ScannerServiceClient;
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
