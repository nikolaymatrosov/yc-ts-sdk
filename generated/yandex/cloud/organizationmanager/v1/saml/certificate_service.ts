/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Certificate } from '../../../../../yandex/cloud/organizationmanager/v1/saml/certificate';
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

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';

export interface GetCertificateRequest {
    /**
     * ID of the certificate to return.
     * To get the certificate ID, make a [CertificateService.List] request.
     */
    certificateId: string;
}

export interface ListCertificatesRequest {
    /**
     * ID of the federation to list certificates in.
     * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
     */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCertificatesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListCertificatesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Certificate.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}

export interface ListCertificatesResponse {
    /** List of certificates. */
    certificates: Certificate[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCertificatesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListCertificatesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateCertificateRequest {
    /**
     * ID of the federation to add new certificate.
     * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
     */
    federationId: string;
    /**
     * Name of the certificate.
     * The name must be unique within the federation.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Certificate data in PEM format. */
    data: string;
}

export interface CreateCertificateMetadata {
    /** ID of the certificate that is being created. */
    certificateId: string;
}

export interface UpdateCertificateRequest {
    /**
     * ID of the certificate to update.
     * To get the certificate ID, make a [CertificateService.List] request.
     */
    certificateId: string;
    /** Field mask that specifies which fields of the certificate are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the certificate.
     * The name must be unique within the federation.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Certificate data in PEM format. */
    data: string;
}

export interface UpdateCertificateMetadata {
    /** ID of the certificate that is being updated. */
    certificateId: string;
}

export interface DeleteCertificateRequest {
    /**
     * ID of the certificate to delete.
     * To get the certificate ID, make a [CertificateService.List] request.
     */
    certificateId: string;
}

export interface DeleteCertificateMetadata {
    /** ID of the certificate that is being deleted. */
    certificateId: string;
}

export interface ListCertificateOperationsRequest {
    /** ID of the certificate to list operations for. */
    certificateId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCertificateOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListCertificateOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListCertificateOperationsResponse {
    /** List of operations for the specified certificate. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCertificateOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetCertificateRequest: object = { certificateId: '' };

export const GetCertificateRequest = {
    encode(
        message: GetCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateRequest,
        } as GetCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCertificateRequest {
        const message = {
            ...baseGetCertificateRequest,
        } as GetCertificateRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        return message;
    },

    toJSON(message: GetCertificateRequest): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetCertificateRequest>
    ): GetCertificateRequest {
        const message = {
            ...baseGetCertificateRequest,
        } as GetCertificateRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        return message;
    },
};

const baseListCertificatesRequest: object = {
    federationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListCertificatesRequest = {
    encode(
        message: ListCertificatesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
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
    ): ListCertificatesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificatesRequest,
        } as ListCertificatesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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

    fromJSON(object: any): ListCertificatesRequest {
        const message = {
            ...baseListCertificatesRequest,
        } as ListCertificatesRequest;
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        } else {
            message.federationId = '';
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

    toJSON(message: ListCertificatesRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListCertificatesRequest>
    ): ListCertificatesRequest {
        const message = {
            ...baseListCertificatesRequest,
        } as ListCertificatesRequest;
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        } else {
            message.federationId = '';
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

const baseListCertificatesResponse: object = { nextPageToken: '' };

export const ListCertificatesResponse = {
    encode(
        message: ListCertificatesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.certificates) {
            Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListCertificatesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificatesResponse,
        } as ListCertificatesResponse;
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(
                        Certificate.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListCertificatesResponse {
        const message = {
            ...baseListCertificatesResponse,
        } as ListCertificatesResponse;
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(Certificate.fromJSON(e));
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

    toJSON(message: ListCertificatesResponse): unknown {
        const obj: any = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? Certificate.toJSON(e) : undefined
            );
        } else {
            obj.certificates = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListCertificatesResponse>
    ): ListCertificatesResponse {
        const message = {
            ...baseListCertificatesResponse,
        } as ListCertificatesResponse;
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(Certificate.fromPartial(e));
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

const baseCreateCertificateRequest: object = {
    federationId: '',
    name: '',
    description: '',
    data: '',
};

export const CreateCertificateRequest = {
    encode(
        message: CreateCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.data !== '') {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateCertificateRequest,
        } as CreateCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCertificateRequest {
        const message = {
            ...baseCreateCertificateRequest,
        } as CreateCertificateRequest;
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        } else {
            message.federationId = '';
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
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        } else {
            message.data = '';
        }
        return message;
    },

    toJSON(message: CreateCertificateRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateCertificateRequest>
    ): CreateCertificateRequest {
        const message = {
            ...baseCreateCertificateRequest,
        } as CreateCertificateRequest;
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        } else {
            message.federationId = '';
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
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        } else {
            message.data = '';
        }
        return message;
    },
};

const baseCreateCertificateMetadata: object = { certificateId: '' };

export const CreateCertificateMetadata = {
    encode(
        message: CreateCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateCertificateMetadata,
        } as CreateCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCertificateMetadata {
        const message = {
            ...baseCreateCertificateMetadata,
        } as CreateCertificateMetadata;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        return message;
    },

    toJSON(message: CreateCertificateMetadata): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateCertificateMetadata>
    ): CreateCertificateMetadata {
        const message = {
            ...baseCreateCertificateMetadata,
        } as CreateCertificateMetadata;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        return message;
    },
};

const baseUpdateCertificateRequest: object = {
    certificateId: '',
    name: '',
    description: '',
    data: '',
};

export const UpdateCertificateRequest = {
    encode(
        message: UpdateCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
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
        if (message.data !== '') {
            writer.uint32(42).string(message.data);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateCertificateRequest,
        } as UpdateCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCertificateRequest {
        const message = {
            ...baseUpdateCertificateRequest,
        } as UpdateCertificateRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
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
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        } else {
            message.data = '';
        }
        return message;
    },

    toJSON(message: UpdateCertificateRequest): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateCertificateRequest>
    ): UpdateCertificateRequest {
        const message = {
            ...baseUpdateCertificateRequest,
        } as UpdateCertificateRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
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
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        } else {
            message.data = '';
        }
        return message;
    },
};

const baseUpdateCertificateMetadata: object = { certificateId: '' };

export const UpdateCertificateMetadata = {
    encode(
        message: UpdateCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateCertificateMetadata,
        } as UpdateCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCertificateMetadata {
        const message = {
            ...baseUpdateCertificateMetadata,
        } as UpdateCertificateMetadata;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        return message;
    },

    toJSON(message: UpdateCertificateMetadata): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateCertificateMetadata>
    ): UpdateCertificateMetadata {
        const message = {
            ...baseUpdateCertificateMetadata,
        } as UpdateCertificateMetadata;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        return message;
    },
};

const baseDeleteCertificateRequest: object = { certificateId: '' };

export const DeleteCertificateRequest = {
    encode(
        message: DeleteCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteCertificateRequest,
        } as DeleteCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCertificateRequest {
        const message = {
            ...baseDeleteCertificateRequest,
        } as DeleteCertificateRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        return message;
    },

    toJSON(message: DeleteCertificateRequest): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteCertificateRequest>
    ): DeleteCertificateRequest {
        const message = {
            ...baseDeleteCertificateRequest,
        } as DeleteCertificateRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        return message;
    },
};

const baseDeleteCertificateMetadata: object = { certificateId: '' };

export const DeleteCertificateMetadata = {
    encode(
        message: DeleteCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteCertificateMetadata,
        } as DeleteCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCertificateMetadata {
        const message = {
            ...baseDeleteCertificateMetadata,
        } as DeleteCertificateMetadata;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        return message;
    },

    toJSON(message: DeleteCertificateMetadata): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteCertificateMetadata>
    ): DeleteCertificateMetadata {
        const message = {
            ...baseDeleteCertificateMetadata,
        } as DeleteCertificateMetadata;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        return message;
    },
};

const baseListCertificateOperationsRequest: object = {
    certificateId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListCertificateOperationsRequest = {
    encode(
        message: ListCertificateOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
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
    ): ListCertificateOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificateOperationsRequest,
        } as ListCertificateOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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

    fromJSON(object: any): ListCertificateOperationsRequest {
        const message = {
            ...baseListCertificateOperationsRequest,
        } as ListCertificateOperationsRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
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

    toJSON(message: ListCertificateOperationsRequest): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListCertificateOperationsRequest>
    ): ListCertificateOperationsRequest {
        const message = {
            ...baseListCertificateOperationsRequest,
        } as ListCertificateOperationsRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
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

const baseListCertificateOperationsResponse: object = { nextPageToken: '' };

export const ListCertificateOperationsResponse = {
    encode(
        message: ListCertificateOperationsResponse,
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
    ): ListCertificateOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListCertificateOperationsResponse,
        } as ListCertificateOperationsResponse;
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

    fromJSON(object: any): ListCertificateOperationsResponse {
        const message = {
            ...baseListCertificateOperationsResponse,
        } as ListCertificateOperationsResponse;
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

    toJSON(message: ListCertificateOperationsResponse): unknown {
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
        object: DeepPartial<ListCertificateOperationsResponse>
    ): ListCertificateOperationsResponse {
        const message = {
            ...baseListCertificateOperationsResponse,
        } as ListCertificateOperationsResponse;
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

/** A set of methods for managing certificates. */
export const CertificateServiceService = {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCertificateRequest) =>
            Buffer.from(GetCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetCertificateRequest.decode(value),
        responseSerialize: (value: Certificate) =>
            Buffer.from(Certificate.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Certificate.decode(value),
    },
    /** Retrieves the list of certificates in the specified federation. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCertificatesRequest) =>
            Buffer.from(ListCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListCertificatesRequest.decode(value),
        responseSerialize: (value: ListCertificatesResponse) =>
            Buffer.from(ListCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListCertificatesResponse.decode(value),
    },
    /** Creates a certificate in the specified federation. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateCertificateRequest) =>
            Buffer.from(CreateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified certificate. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateCertificateRequest) =>
            Buffer.from(UpdateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified certificate. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteCertificateRequest) =>
            Buffer.from(DeleteCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified certificate. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCertificateOperationsRequest) =>
            Buffer.from(
                ListCertificateOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListCertificateOperationsRequest.decode(value),
        responseSerialize: (value: ListCertificateOperationsResponse) =>
            Buffer.from(
                ListCertificateOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListCertificateOperationsResponse.decode(value),
    },
} as const;

export interface CertificateServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: handleUnaryCall<GetCertificateRequest, Certificate>;
    /** Retrieves the list of certificates in the specified federation. */
    list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
    /** Creates a certificate in the specified federation. */
    create: handleUnaryCall<CreateCertificateRequest, Operation>;
    /** Updates the specified certificate. */
    update: handleUnaryCall<UpdateCertificateRequest, Operation>;
    /** Deletes the specified certificate. */
    delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
    /** Lists operations for the specified certificate. */
    listOperations: handleUnaryCall<
        ListCertificateOperationsRequest,
        ListCertificateOperationsResponse
    >;
}

export interface CertificateServiceClient extends Client {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get(
        request: GetCertificateRequest,
        callback: (error: ServiceError | null, response: Certificate) => void
    ): ClientUnaryCall;
    get(
        request: GetCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Certificate) => void
    ): ClientUnaryCall;
    get(
        request: GetCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Certificate) => void
    ): ClientUnaryCall;
    /** Retrieves the list of certificates in the specified federation. */
    list(
        request: ListCertificatesRequest,
        callback: (
            error: ServiceError | null,
            response: ListCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListCertificatesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListCertificatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a certificate in the specified federation. */
    create(
        request: CreateCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified certificate. */
    update(
        request: UpdateCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified certificate. */
    delete(
        request: DeleteCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified certificate. */
    listOperations(
        request: ListCertificateOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListCertificateOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListCertificateOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListCertificateOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListCertificateOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListCertificateOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const CertificateServiceClient = makeGenericClientConstructor(
    CertificateServiceService,
    'yandex.cloud.organizationmanager.v1.saml.CertificateService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): CertificateServiceClient;
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