/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import {
    DnsZone,
    PrivateVisibility,
    PublicVisibility,
    RecordSet,
} from '../../../../yandex/cloud/dns/v1/dns_zone';
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

export const protobufPackage = 'yandex.cloud.dns.v1';

export interface GetDnsZoneRequest {
    /**
     * ID of the DNS zone to return.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
}

export interface ListDnsZonesRequest {
    /**
     * ID of the folder to list DNS zones in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDnsZonesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDnsZonesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters DNS zones listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [DnsZone.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value or lists of values. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-dns-zone`.
     */
    filter: string;
}

export interface ListDnsZonesResponse {
    /** List of DNS zones in the specified folder. */
    dnsZones: DnsZone[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsZonesRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsZonesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDnsZoneRequest {
    /**
     * ID of the folder to create DNS zones in.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the DNS zone.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the DNS zone. */
    description: string;
    /** DNS zone labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** DNS zone suffix. */
    zone: string;
    /**
     * Privately visible zone settings.
     * At least one of two visibility fields must be set.
     */
    privateVisibility: PrivateVisibility | undefined;
    /**
     * Publicly visible zone settings.
     * At least one of two visibility fields must be set.
     */
    publicVisibility: PublicVisibility | undefined;
}

export interface CreateDnsZoneRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateDnsZoneMetadata {
    /** ID of the DNS zone that is being created. */
    dnsZoneId: string;
}

export interface UpdateDnsZoneRequest {
    /**
     * ID of the DNS zone to update.
     *
     * To get the DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** Field mask specifying which fields of the DNS zone resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the DNS zone.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the DNS zone. */
    description: string;
    /**
     * DNS zone labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [DnsZoneService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: { [key: string]: string };
    /** Change network IDs for private visibility. */
    privateVisibility: PrivateVisibility | undefined;
    /** Public visibility configuration. */
    publicVisibility: PublicVisibility | undefined;
}

export interface UpdateDnsZoneRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateDnsZoneMetadata {
    /** ID of the DNS zone that is being updated. */
    dnsZoneId: string;
}

export interface DeleteDnsZoneRequest {
    /**
     * ID of the DNS zone to delete.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
}

export interface DeleteDnsZoneMetadata {
    /** ID of the DNS zone that is being deleted. */
    dnsZoneId: string;
}

export interface GetDnsZoneRecordSetRequest {
    /**
     * ID of the DNS zone to get record set from.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** Name of the record set. */
    name: string;
    /** Type of the record set. */
    type: string;
}

export interface ListDnsZoneRecordSetsRequest {
    /**
     * ID of the DNS zone to list record sets in.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDnsZoneRecordSetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDnsZoneRecordSetsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters record sets listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [RecordSet.name] and [RecordSet.type] fields.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value or lists of values. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-record-set`.
     */
    filter: string;
}

export interface ListDnsZoneRecordSetsResponse {
    /** List of record sets in the specified DNS zone. */
    recordSets: RecordSet[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsZoneRecordSetsRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsZoneRecordSetsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateRecordSetsRequest {
    /**
     * ID of the DNS zone to update record sets in.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** List of record sets to delete. */
    deletions: RecordSet[];
    /** List of record sets to add. */
    additions: RecordSet[];
}

export interface UpdateRecordSetsMetadata {}

export interface UpsertRecordSetsRequest {
    /**
     * ID of the DNS zone to upsert record sets to.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** Delete only specified records from corresponding record sets. */
    deletions: RecordSet[];
    /** Entirely replace specified record sets. */
    replacements: RecordSet[];
    /** Replace specified records or add new ones if no such record sets exists. */
    merges: RecordSet[];
}

export interface UpsertRecordSetsMetadata {}

export interface ListDnsZoneOperationsRequest {
    /**
     * ID of the DNS zone to list operations for.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDnsZoneOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDnsZoneOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters DNS zones listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [DnsZone.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value or lists of values. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-dns-zone`.
     */
    filter: string;
}

export interface ListDnsZoneOperationsResponse {
    /** List of operations for the specified DNS zone. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsZoneOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsZoneOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetDnsZoneRequest: object = { dnsZoneId: '' };

export const GetDnsZoneRequest = {
    encode(
        message: GetDnsZoneRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDnsZoneRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDnsZoneRequest } as GetDnsZoneRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDnsZoneRequest {
        const message = { ...baseGetDnsZoneRequest } as GetDnsZoneRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },

    toJSON(message: GetDnsZoneRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetDnsZoneRequest>): GetDnsZoneRequest {
        const message = { ...baseGetDnsZoneRequest } as GetDnsZoneRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },
};

const baseListDnsZonesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDnsZonesRequest = {
    encode(
        message: ListDnsZonesRequest,
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
    ): ListDnsZonesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDnsZonesRequest } as ListDnsZonesRequest;
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

    fromJSON(object: any): ListDnsZonesRequest {
        const message = { ...baseListDnsZonesRequest } as ListDnsZonesRequest;
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

    toJSON(message: ListDnsZonesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListDnsZonesRequest>): ListDnsZonesRequest {
        const message = { ...baseListDnsZonesRequest } as ListDnsZonesRequest;
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

const baseListDnsZonesResponse: object = { nextPageToken: '' };

export const ListDnsZonesResponse = {
    encode(
        message: ListDnsZonesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.dnsZones) {
            DnsZone.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDnsZonesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDnsZonesResponse } as ListDnsZonesResponse;
        message.dnsZones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZones.push(
                        DnsZone.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListDnsZonesResponse {
        const message = { ...baseListDnsZonesResponse } as ListDnsZonesResponse;
        message.dnsZones = [];
        if (object.dnsZones !== undefined && object.dnsZones !== null) {
            for (const e of object.dnsZones) {
                message.dnsZones.push(DnsZone.fromJSON(e));
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

    toJSON(message: ListDnsZonesResponse): unknown {
        const obj: any = {};
        if (message.dnsZones) {
            obj.dnsZones = message.dnsZones.map((e) =>
                e ? DnsZone.toJSON(e) : undefined
            );
        } else {
            obj.dnsZones = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDnsZonesResponse>
    ): ListDnsZonesResponse {
        const message = { ...baseListDnsZonesResponse } as ListDnsZonesResponse;
        message.dnsZones = [];
        if (object.dnsZones !== undefined && object.dnsZones !== null) {
            for (const e of object.dnsZones) {
                message.dnsZones.push(DnsZone.fromPartial(e));
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

const baseCreateDnsZoneRequest: object = {
    folderId: '',
    name: '',
    description: '',
    zone: '',
};

export const CreateDnsZoneRequest = {
    encode(
        message: CreateDnsZoneRequest,
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
            CreateDnsZoneRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.zone !== '') {
            writer.uint32(42).string(message.zone);
        }
        if (message.privateVisibility !== undefined) {
            PrivateVisibility.encode(
                message.privateVisibility,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            PublicVisibility.encode(
                message.publicVisibility,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDnsZoneRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDnsZoneRequest } as CreateDnsZoneRequest;
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
                    const entry4 = CreateDnsZoneRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zone = reader.string();
                    break;
                case 6:
                    message.privateVisibility = PrivateVisibility.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.publicVisibility = PublicVisibility.decode(
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

    fromJSON(object: any): CreateDnsZoneRequest {
        const message = { ...baseCreateDnsZoneRequest } as CreateDnsZoneRequest;
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
        if (object.zone !== undefined && object.zone !== null) {
            message.zone = String(object.zone);
        } else {
            message.zone = '';
        }
        if (
            object.privateVisibility !== undefined &&
            object.privateVisibility !== null
        ) {
            message.privateVisibility = PrivateVisibility.fromJSON(
                object.privateVisibility
            );
        } else {
            message.privateVisibility = undefined;
        }
        if (
            object.publicVisibility !== undefined &&
            object.publicVisibility !== null
        ) {
            message.publicVisibility = PublicVisibility.fromJSON(
                object.publicVisibility
            );
        } else {
            message.publicVisibility = undefined;
        }
        return message;
    },

    toJSON(message: CreateDnsZoneRequest): unknown {
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
        message.zone !== undefined && (obj.zone = message.zone);
        message.privateVisibility !== undefined &&
            (obj.privateVisibility = message.privateVisibility
                ? PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? PublicVisibility.toJSON(message.publicVisibility)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDnsZoneRequest>
    ): CreateDnsZoneRequest {
        const message = { ...baseCreateDnsZoneRequest } as CreateDnsZoneRequest;
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
        if (object.zone !== undefined && object.zone !== null) {
            message.zone = object.zone;
        } else {
            message.zone = '';
        }
        if (
            object.privateVisibility !== undefined &&
            object.privateVisibility !== null
        ) {
            message.privateVisibility = PrivateVisibility.fromPartial(
                object.privateVisibility
            );
        } else {
            message.privateVisibility = undefined;
        }
        if (
            object.publicVisibility !== undefined &&
            object.publicVisibility !== null
        ) {
            message.publicVisibility = PublicVisibility.fromPartial(
                object.publicVisibility
            );
        } else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};

const baseCreateDnsZoneRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateDnsZoneRequest_LabelsEntry = {
    encode(
        message: CreateDnsZoneRequest_LabelsEntry,
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
    ): CreateDnsZoneRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDnsZoneRequest_LabelsEntry,
        } as CreateDnsZoneRequest_LabelsEntry;
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

    fromJSON(object: any): CreateDnsZoneRequest_LabelsEntry {
        const message = {
            ...baseCreateDnsZoneRequest_LabelsEntry,
        } as CreateDnsZoneRequest_LabelsEntry;
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

    toJSON(message: CreateDnsZoneRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDnsZoneRequest_LabelsEntry>
    ): CreateDnsZoneRequest_LabelsEntry {
        const message = {
            ...baseCreateDnsZoneRequest_LabelsEntry,
        } as CreateDnsZoneRequest_LabelsEntry;
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

const baseCreateDnsZoneMetadata: object = { dnsZoneId: '' };

export const CreateDnsZoneMetadata = {
    encode(
        message: CreateDnsZoneMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDnsZoneMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDnsZoneMetadata,
        } as CreateDnsZoneMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDnsZoneMetadata {
        const message = {
            ...baseCreateDnsZoneMetadata,
        } as CreateDnsZoneMetadata;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },

    toJSON(message: CreateDnsZoneMetadata): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDnsZoneMetadata>
    ): CreateDnsZoneMetadata {
        const message = {
            ...baseCreateDnsZoneMetadata,
        } as CreateDnsZoneMetadata;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },
};

const baseUpdateDnsZoneRequest: object = {
    dnsZoneId: '',
    name: '',
    description: '',
};

export const UpdateDnsZoneRequest = {
    encode(
        message: UpdateDnsZoneRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
            UpdateDnsZoneRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.privateVisibility !== undefined) {
            PrivateVisibility.encode(
                message.privateVisibility,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            PublicVisibility.encode(
                message.publicVisibility,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDnsZoneRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDnsZoneRequest } as UpdateDnsZoneRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
                    const entry5 = UpdateDnsZoneRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.privateVisibility = PrivateVisibility.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.publicVisibility = PublicVisibility.decode(
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

    fromJSON(object: any): UpdateDnsZoneRequest {
        const message = { ...baseUpdateDnsZoneRequest } as UpdateDnsZoneRequest;
        message.labels = {};
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
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
        if (
            object.privateVisibility !== undefined &&
            object.privateVisibility !== null
        ) {
            message.privateVisibility = PrivateVisibility.fromJSON(
                object.privateVisibility
            );
        } else {
            message.privateVisibility = undefined;
        }
        if (
            object.publicVisibility !== undefined &&
            object.publicVisibility !== null
        ) {
            message.publicVisibility = PublicVisibility.fromJSON(
                object.publicVisibility
            );
        } else {
            message.publicVisibility = undefined;
        }
        return message;
    },

    toJSON(message: UpdateDnsZoneRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
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
        message.privateVisibility !== undefined &&
            (obj.privateVisibility = message.privateVisibility
                ? PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? PublicVisibility.toJSON(message.publicVisibility)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDnsZoneRequest>
    ): UpdateDnsZoneRequest {
        const message = { ...baseUpdateDnsZoneRequest } as UpdateDnsZoneRequest;
        message.labels = {};
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
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
        if (
            object.privateVisibility !== undefined &&
            object.privateVisibility !== null
        ) {
            message.privateVisibility = PrivateVisibility.fromPartial(
                object.privateVisibility
            );
        } else {
            message.privateVisibility = undefined;
        }
        if (
            object.publicVisibility !== undefined &&
            object.publicVisibility !== null
        ) {
            message.publicVisibility = PublicVisibility.fromPartial(
                object.publicVisibility
            );
        } else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};

const baseUpdateDnsZoneRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateDnsZoneRequest_LabelsEntry = {
    encode(
        message: UpdateDnsZoneRequest_LabelsEntry,
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
    ): UpdateDnsZoneRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDnsZoneRequest_LabelsEntry,
        } as UpdateDnsZoneRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDnsZoneRequest_LabelsEntry {
        const message = {
            ...baseUpdateDnsZoneRequest_LabelsEntry,
        } as UpdateDnsZoneRequest_LabelsEntry;
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

    toJSON(message: UpdateDnsZoneRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDnsZoneRequest_LabelsEntry>
    ): UpdateDnsZoneRequest_LabelsEntry {
        const message = {
            ...baseUpdateDnsZoneRequest_LabelsEntry,
        } as UpdateDnsZoneRequest_LabelsEntry;
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

const baseUpdateDnsZoneMetadata: object = { dnsZoneId: '' };

export const UpdateDnsZoneMetadata = {
    encode(
        message: UpdateDnsZoneMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDnsZoneMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDnsZoneMetadata,
        } as UpdateDnsZoneMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDnsZoneMetadata {
        const message = {
            ...baseUpdateDnsZoneMetadata,
        } as UpdateDnsZoneMetadata;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },

    toJSON(message: UpdateDnsZoneMetadata): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDnsZoneMetadata>
    ): UpdateDnsZoneMetadata {
        const message = {
            ...baseUpdateDnsZoneMetadata,
        } as UpdateDnsZoneMetadata;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },
};

const baseDeleteDnsZoneRequest: object = { dnsZoneId: '' };

export const DeleteDnsZoneRequest = {
    encode(
        message: DeleteDnsZoneRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDnsZoneRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDnsZoneRequest } as DeleteDnsZoneRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDnsZoneRequest {
        const message = { ...baseDeleteDnsZoneRequest } as DeleteDnsZoneRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },

    toJSON(message: DeleteDnsZoneRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDnsZoneRequest>
    ): DeleteDnsZoneRequest {
        const message = { ...baseDeleteDnsZoneRequest } as DeleteDnsZoneRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },
};

const baseDeleteDnsZoneMetadata: object = { dnsZoneId: '' };

export const DeleteDnsZoneMetadata = {
    encode(
        message: DeleteDnsZoneMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDnsZoneMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDnsZoneMetadata,
        } as DeleteDnsZoneMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDnsZoneMetadata {
        const message = {
            ...baseDeleteDnsZoneMetadata,
        } as DeleteDnsZoneMetadata;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },

    toJSON(message: DeleteDnsZoneMetadata): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDnsZoneMetadata>
    ): DeleteDnsZoneMetadata {
        const message = {
            ...baseDeleteDnsZoneMetadata,
        } as DeleteDnsZoneMetadata;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        return message;
    },
};

const baseGetDnsZoneRecordSetRequest: object = {
    dnsZoneId: '',
    name: '',
    type: '',
};

export const GetDnsZoneRecordSetRequest = {
    encode(
        message: GetDnsZoneRecordSetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.type !== '') {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDnsZoneRecordSetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDnsZoneRecordSetRequest,
        } as GetDnsZoneRecordSetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDnsZoneRecordSetRequest {
        const message = {
            ...baseGetDnsZoneRecordSetRequest,
        } as GetDnsZoneRecordSetRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        return message;
    },

    toJSON(message: GetDnsZoneRecordSetRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetDnsZoneRecordSetRequest>
    ): GetDnsZoneRecordSetRequest {
        const message = {
            ...baseGetDnsZoneRecordSetRequest,
        } as GetDnsZoneRecordSetRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        return message;
    },
};

const baseListDnsZoneRecordSetsRequest: object = {
    dnsZoneId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDnsZoneRecordSetsRequest = {
    encode(
        message: ListDnsZoneRecordSetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
    ): ListDnsZoneRecordSetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDnsZoneRecordSetsRequest,
        } as ListDnsZoneRecordSetsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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

    fromJSON(object: any): ListDnsZoneRecordSetsRequest {
        const message = {
            ...baseListDnsZoneRecordSetsRequest,
        } as ListDnsZoneRecordSetsRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
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

    toJSON(message: ListDnsZoneRecordSetsRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDnsZoneRecordSetsRequest>
    ): ListDnsZoneRecordSetsRequest {
        const message = {
            ...baseListDnsZoneRecordSetsRequest,
        } as ListDnsZoneRecordSetsRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
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

const baseListDnsZoneRecordSetsResponse: object = { nextPageToken: '' };

export const ListDnsZoneRecordSetsResponse = {
    encode(
        message: ListDnsZoneRecordSetsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.recordSets) {
            RecordSet.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDnsZoneRecordSetsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDnsZoneRecordSetsResponse,
        } as ListDnsZoneRecordSetsResponse;
        message.recordSets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recordSets.push(
                        RecordSet.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListDnsZoneRecordSetsResponse {
        const message = {
            ...baseListDnsZoneRecordSetsResponse,
        } as ListDnsZoneRecordSetsResponse;
        message.recordSets = [];
        if (object.recordSets !== undefined && object.recordSets !== null) {
            for (const e of object.recordSets) {
                message.recordSets.push(RecordSet.fromJSON(e));
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

    toJSON(message: ListDnsZoneRecordSetsResponse): unknown {
        const obj: any = {};
        if (message.recordSets) {
            obj.recordSets = message.recordSets.map((e) =>
                e ? RecordSet.toJSON(e) : undefined
            );
        } else {
            obj.recordSets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDnsZoneRecordSetsResponse>
    ): ListDnsZoneRecordSetsResponse {
        const message = {
            ...baseListDnsZoneRecordSetsResponse,
        } as ListDnsZoneRecordSetsResponse;
        message.recordSets = [];
        if (object.recordSets !== undefined && object.recordSets !== null) {
            for (const e of object.recordSets) {
                message.recordSets.push(RecordSet.fromPartial(e));
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

const baseUpdateRecordSetsRequest: object = { dnsZoneId: '' };

export const UpdateRecordSetsRequest = {
    encode(
        message: UpdateRecordSetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        for (const v of message.deletions) {
            RecordSet.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.additions) {
            RecordSet.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRecordSetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRecordSetsRequest,
        } as UpdateRecordSetsRequest;
        message.deletions = [];
        message.additions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                case 2:
                    message.deletions.push(
                        RecordSet.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.additions.push(
                        RecordSet.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRecordSetsRequest {
        const message = {
            ...baseUpdateRecordSetsRequest,
        } as UpdateRecordSetsRequest;
        message.deletions = [];
        message.additions = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromJSON(e));
            }
        }
        if (object.additions !== undefined && object.additions !== null) {
            for (const e of object.additions) {
                message.additions.push(RecordSet.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateRecordSetsRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        if (message.deletions) {
            obj.deletions = message.deletions.map((e) =>
                e ? RecordSet.toJSON(e) : undefined
            );
        } else {
            obj.deletions = [];
        }
        if (message.additions) {
            obj.additions = message.additions.map((e) =>
                e ? RecordSet.toJSON(e) : undefined
            );
        } else {
            obj.additions = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRecordSetsRequest>
    ): UpdateRecordSetsRequest {
        const message = {
            ...baseUpdateRecordSetsRequest,
        } as UpdateRecordSetsRequest;
        message.deletions = [];
        message.additions = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromPartial(e));
            }
        }
        if (object.additions !== undefined && object.additions !== null) {
            for (const e of object.additions) {
                message.additions.push(RecordSet.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpdateRecordSetsMetadata: object = {};

export const UpdateRecordSetsMetadata = {
    encode(
        _: UpdateRecordSetsMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRecordSetsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRecordSetsMetadata,
        } as UpdateRecordSetsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): UpdateRecordSetsMetadata {
        const message = {
            ...baseUpdateRecordSetsMetadata,
        } as UpdateRecordSetsMetadata;
        return message;
    },

    toJSON(_: UpdateRecordSetsMetadata): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(
        _: DeepPartial<UpdateRecordSetsMetadata>
    ): UpdateRecordSetsMetadata {
        const message = {
            ...baseUpdateRecordSetsMetadata,
        } as UpdateRecordSetsMetadata;
        return message;
    },
};

const baseUpsertRecordSetsRequest: object = { dnsZoneId: '' };

export const UpsertRecordSetsRequest = {
    encode(
        message: UpsertRecordSetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        for (const v of message.deletions) {
            RecordSet.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.replacements) {
            RecordSet.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.merges) {
            RecordSet.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpsertRecordSetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRecordSetsRequest,
        } as UpsertRecordSetsRequest;
        message.deletions = [];
        message.replacements = [];
        message.merges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                case 2:
                    message.deletions.push(
                        RecordSet.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.replacements.push(
                        RecordSet.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.merges.push(
                        RecordSet.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertRecordSetsRequest {
        const message = {
            ...baseUpsertRecordSetsRequest,
        } as UpsertRecordSetsRequest;
        message.deletions = [];
        message.replacements = [];
        message.merges = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromJSON(e));
            }
        }
        if (object.replacements !== undefined && object.replacements !== null) {
            for (const e of object.replacements) {
                message.replacements.push(RecordSet.fromJSON(e));
            }
        }
        if (object.merges !== undefined && object.merges !== null) {
            for (const e of object.merges) {
                message.merges.push(RecordSet.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpsertRecordSetsRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        if (message.deletions) {
            obj.deletions = message.deletions.map((e) =>
                e ? RecordSet.toJSON(e) : undefined
            );
        } else {
            obj.deletions = [];
        }
        if (message.replacements) {
            obj.replacements = message.replacements.map((e) =>
                e ? RecordSet.toJSON(e) : undefined
            );
        } else {
            obj.replacements = [];
        }
        if (message.merges) {
            obj.merges = message.merges.map((e) =>
                e ? RecordSet.toJSON(e) : undefined
            );
        } else {
            obj.merges = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpsertRecordSetsRequest>
    ): UpsertRecordSetsRequest {
        const message = {
            ...baseUpsertRecordSetsRequest,
        } as UpsertRecordSetsRequest;
        message.deletions = [];
        message.replacements = [];
        message.merges = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromPartial(e));
            }
        }
        if (object.replacements !== undefined && object.replacements !== null) {
            for (const e of object.replacements) {
                message.replacements.push(RecordSet.fromPartial(e));
            }
        }
        if (object.merges !== undefined && object.merges !== null) {
            for (const e of object.merges) {
                message.merges.push(RecordSet.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpsertRecordSetsMetadata: object = {};

export const UpsertRecordSetsMetadata = {
    encode(
        _: UpsertRecordSetsMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpsertRecordSetsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRecordSetsMetadata,
        } as UpsertRecordSetsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): UpsertRecordSetsMetadata {
        const message = {
            ...baseUpsertRecordSetsMetadata,
        } as UpsertRecordSetsMetadata;
        return message;
    },

    toJSON(_: UpsertRecordSetsMetadata): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(
        _: DeepPartial<UpsertRecordSetsMetadata>
    ): UpsertRecordSetsMetadata {
        const message = {
            ...baseUpsertRecordSetsMetadata,
        } as UpsertRecordSetsMetadata;
        return message;
    },
};

const baseListDnsZoneOperationsRequest: object = {
    dnsZoneId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDnsZoneOperationsRequest = {
    encode(
        message: ListDnsZoneOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
    ): ListDnsZoneOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDnsZoneOperationsRequest,
        } as ListDnsZoneOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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

    fromJSON(object: any): ListDnsZoneOperationsRequest {
        const message = {
            ...baseListDnsZoneOperationsRequest,
        } as ListDnsZoneOperationsRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
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

    toJSON(message: ListDnsZoneOperationsRequest): unknown {
        const obj: any = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDnsZoneOperationsRequest>
    ): ListDnsZoneOperationsRequest {
        const message = {
            ...baseListDnsZoneOperationsRequest,
        } as ListDnsZoneOperationsRequest;
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
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

const baseListDnsZoneOperationsResponse: object = { nextPageToken: '' };

export const ListDnsZoneOperationsResponse = {
    encode(
        message: ListDnsZoneOperationsResponse,
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
    ): ListDnsZoneOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDnsZoneOperationsResponse,
        } as ListDnsZoneOperationsResponse;
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

    fromJSON(object: any): ListDnsZoneOperationsResponse {
        const message = {
            ...baseListDnsZoneOperationsResponse,
        } as ListDnsZoneOperationsResponse;
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

    toJSON(message: ListDnsZoneOperationsResponse): unknown {
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
        object: DeepPartial<ListDnsZoneOperationsResponse>
    ): ListDnsZoneOperationsResponse {
        const message = {
            ...baseListDnsZoneOperationsResponse,
        } as ListDnsZoneOperationsResponse;
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

/** A set of methods for managing DNS zones. */
export const DnsZoneServiceService = {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDnsZoneRequest) =>
            Buffer.from(GetDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDnsZoneRequest.decode(value),
        responseSerialize: (value: DnsZone) =>
            Buffer.from(DnsZone.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DnsZone.decode(value),
    },
    /** Retrieves the list of DNS zones in the specified folder. */
    list: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDnsZonesRequest) =>
            Buffer.from(ListDnsZonesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDnsZonesRequest.decode(value),
        responseSerialize: (value: ListDnsZonesResponse) =>
            Buffer.from(ListDnsZonesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDnsZonesResponse.decode(value),
    },
    /** Creates a DNS zone in the specified folder. */
    create: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDnsZoneRequest) =>
            Buffer.from(CreateDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateDnsZoneRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified DNS zone. */
    update: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDnsZoneRequest) =>
            Buffer.from(UpdateDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateDnsZoneRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified DNS zone. */
    delete: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDnsZoneRequest) =>
            Buffer.from(DeleteDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDnsZoneRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified record set. */
    getRecordSet: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDnsZoneRecordSetRequest) =>
            Buffer.from(GetDnsZoneRecordSetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetDnsZoneRecordSetRequest.decode(value),
        responseSerialize: (value: RecordSet) =>
            Buffer.from(RecordSet.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RecordSet.decode(value),
    },
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDnsZoneRecordSetsRequest) =>
            Buffer.from(ListDnsZoneRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDnsZoneRecordSetsRequest.decode(value),
        responseSerialize: (value: ListDnsZoneRecordSetsResponse) =>
            Buffer.from(ListDnsZoneRecordSetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDnsZoneRecordSetsResponse.decode(value),
    },
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRecordSetsRequest) =>
            Buffer.from(UpdateRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateRecordSetsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpsertRecordSetsRequest) =>
            Buffer.from(UpsertRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpsertRecordSetsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified DNS zone. */
    listOperations: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDnsZoneOperationsRequest) =>
            Buffer.from(ListDnsZoneOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDnsZoneOperationsRequest.decode(value),
        responseSerialize: (value: ListDnsZoneOperationsResponse) =>
            Buffer.from(ListDnsZoneOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDnsZoneOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings',
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
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings',
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
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings',
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

export interface DnsZoneServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get: handleUnaryCall<GetDnsZoneRequest, DnsZone>;
    /** Retrieves the list of DNS zones in the specified folder. */
    list: handleUnaryCall<ListDnsZonesRequest, ListDnsZonesResponse>;
    /** Creates a DNS zone in the specified folder. */
    create: handleUnaryCall<CreateDnsZoneRequest, Operation>;
    /** Updates the specified DNS zone. */
    update: handleUnaryCall<UpdateDnsZoneRequest, Operation>;
    /** Deletes the specified DNS zone. */
    delete: handleUnaryCall<DeleteDnsZoneRequest, Operation>;
    /** Returns the specified record set. */
    getRecordSet: handleUnaryCall<GetDnsZoneRecordSetRequest, RecordSet>;
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets: handleUnaryCall<
        ListDnsZoneRecordSetsRequest,
        ListDnsZoneRecordSetsResponse
    >;
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets: handleUnaryCall<UpdateRecordSetsRequest, Operation>;
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets: handleUnaryCall<UpsertRecordSetsRequest, Operation>;
    /** Lists operations for the specified DNS zone. */
    listOperations: handleUnaryCall<
        ListDnsZoneOperationsRequest,
        ListDnsZoneOperationsResponse
    >;
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface DnsZoneServiceClient extends Client {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get(
        request: GetDnsZoneRequest,
        callback: (error: ServiceError | null, response: DnsZone) => void
    ): ClientUnaryCall;
    get(
        request: GetDnsZoneRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DnsZone) => void
    ): ClientUnaryCall;
    get(
        request: GetDnsZoneRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DnsZone) => void
    ): ClientUnaryCall;
    /** Retrieves the list of DNS zones in the specified folder. */
    list(
        request: ListDnsZonesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDnsZonesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDnsZonesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDnsZonesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDnsZonesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDnsZonesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a DNS zone in the specified folder. */
    create(
        request: CreateDnsZoneRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDnsZoneRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDnsZoneRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified DNS zone. */
    update(
        request: UpdateDnsZoneRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDnsZoneRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDnsZoneRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified DNS zone. */
    delete(
        request: DeleteDnsZoneRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDnsZoneRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDnsZoneRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns the specified record set. */
    getRecordSet(
        request: GetDnsZoneRecordSetRequest,
        callback: (error: ServiceError | null, response: RecordSet) => void
    ): ClientUnaryCall;
    getRecordSet(
        request: GetDnsZoneRecordSetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RecordSet) => void
    ): ClientUnaryCall;
    getRecordSet(
        request: GetDnsZoneRecordSetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RecordSet) => void
    ): ClientUnaryCall;
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets(
        request: ListDnsZoneRecordSetsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDnsZoneRecordSetsResponse
        ) => void
    ): ClientUnaryCall;
    listRecordSets(
        request: ListDnsZoneRecordSetsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDnsZoneRecordSetsResponse
        ) => void
    ): ClientUnaryCall;
    listRecordSets(
        request: ListDnsZoneRecordSetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDnsZoneRecordSetsResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets(
        request: UpdateRecordSetsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRecordSets(
        request: UpdateRecordSetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRecordSets(
        request: UpdateRecordSetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets(
        request: UpsertRecordSetsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    upsertRecordSets(
        request: UpsertRecordSetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    upsertRecordSets(
        request: UpsertRecordSetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified DNS zone. */
    listOperations(
        request: ListDnsZoneOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDnsZoneOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListDnsZoneOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDnsZoneOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListDnsZoneOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDnsZoneOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified DNS zone. */
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
    /** Sets access bindings for the specified DNS zone. */
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
    /** Updates access bindings for the specified DNS zone. */
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

export const DnsZoneServiceClient = makeGenericClientConstructor(
    DnsZoneServiceService,
    'yandex.cloud.dns.v1.DnsZoneService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DnsZoneServiceClient;
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