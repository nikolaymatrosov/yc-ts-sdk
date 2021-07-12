/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { DnsZone, PrivateVisibility, PublicVisibility, RecordSet } from '../../../../yandex/cloud/dns/v1/dns_zone';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dns.v1";
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
    labels: {
        [key: string]: string;
    };
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
    labels: {
        [key: string]: string;
    };
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
export interface UpdateRecordSetsMetadata {
}
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
export interface UpsertRecordSetsMetadata {
}
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
export declare const GetDnsZoneRequest: {
    encode(message: GetDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDnsZoneRequest;
    fromJSON(object: any): GetDnsZoneRequest;
    toJSON(message: GetDnsZoneRequest): unknown;
    fromPartial(object: DeepPartial<GetDnsZoneRequest>): GetDnsZoneRequest;
};
export declare const ListDnsZonesRequest: {
    encode(message: ListDnsZonesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZonesRequest;
    fromJSON(object: any): ListDnsZonesRequest;
    toJSON(message: ListDnsZonesRequest): unknown;
    fromPartial(object: DeepPartial<ListDnsZonesRequest>): ListDnsZonesRequest;
};
export declare const ListDnsZonesResponse: {
    encode(message: ListDnsZonesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZonesResponse;
    fromJSON(object: any): ListDnsZonesResponse;
    toJSON(message: ListDnsZonesResponse): unknown;
    fromPartial(object: DeepPartial<ListDnsZonesResponse>): ListDnsZonesResponse;
};
export declare const CreateDnsZoneRequest: {
    encode(message: CreateDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDnsZoneRequest;
    fromJSON(object: any): CreateDnsZoneRequest;
    toJSON(message: CreateDnsZoneRequest): unknown;
    fromPartial(object: DeepPartial<CreateDnsZoneRequest>): CreateDnsZoneRequest;
};
export declare const CreateDnsZoneRequest_LabelsEntry: {
    encode(message: CreateDnsZoneRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDnsZoneRequest_LabelsEntry;
    fromJSON(object: any): CreateDnsZoneRequest_LabelsEntry;
    toJSON(message: CreateDnsZoneRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateDnsZoneRequest_LabelsEntry>): CreateDnsZoneRequest_LabelsEntry;
};
export declare const CreateDnsZoneMetadata: {
    encode(message: CreateDnsZoneMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDnsZoneMetadata;
    fromJSON(object: any): CreateDnsZoneMetadata;
    toJSON(message: CreateDnsZoneMetadata): unknown;
    fromPartial(object: DeepPartial<CreateDnsZoneMetadata>): CreateDnsZoneMetadata;
};
export declare const UpdateDnsZoneRequest: {
    encode(message: UpdateDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZoneRequest;
    fromJSON(object: any): UpdateDnsZoneRequest;
    toJSON(message: UpdateDnsZoneRequest): unknown;
    fromPartial(object: DeepPartial<UpdateDnsZoneRequest>): UpdateDnsZoneRequest;
};
export declare const UpdateDnsZoneRequest_LabelsEntry: {
    encode(message: UpdateDnsZoneRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZoneRequest_LabelsEntry;
    fromJSON(object: any): UpdateDnsZoneRequest_LabelsEntry;
    toJSON(message: UpdateDnsZoneRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateDnsZoneRequest_LabelsEntry>): UpdateDnsZoneRequest_LabelsEntry;
};
export declare const UpdateDnsZoneMetadata: {
    encode(message: UpdateDnsZoneMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZoneMetadata;
    fromJSON(object: any): UpdateDnsZoneMetadata;
    toJSON(message: UpdateDnsZoneMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateDnsZoneMetadata>): UpdateDnsZoneMetadata;
};
export declare const DeleteDnsZoneRequest: {
    encode(message: DeleteDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDnsZoneRequest;
    fromJSON(object: any): DeleteDnsZoneRequest;
    toJSON(message: DeleteDnsZoneRequest): unknown;
    fromPartial(object: DeepPartial<DeleteDnsZoneRequest>): DeleteDnsZoneRequest;
};
export declare const DeleteDnsZoneMetadata: {
    encode(message: DeleteDnsZoneMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDnsZoneMetadata;
    fromJSON(object: any): DeleteDnsZoneMetadata;
    toJSON(message: DeleteDnsZoneMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteDnsZoneMetadata>): DeleteDnsZoneMetadata;
};
export declare const GetDnsZoneRecordSetRequest: {
    encode(message: GetDnsZoneRecordSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDnsZoneRecordSetRequest;
    fromJSON(object: any): GetDnsZoneRecordSetRequest;
    toJSON(message: GetDnsZoneRecordSetRequest): unknown;
    fromPartial(object: DeepPartial<GetDnsZoneRecordSetRequest>): GetDnsZoneRecordSetRequest;
};
export declare const ListDnsZoneRecordSetsRequest: {
    encode(message: ListDnsZoneRecordSetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneRecordSetsRequest;
    fromJSON(object: any): ListDnsZoneRecordSetsRequest;
    toJSON(message: ListDnsZoneRecordSetsRequest): unknown;
    fromPartial(object: DeepPartial<ListDnsZoneRecordSetsRequest>): ListDnsZoneRecordSetsRequest;
};
export declare const ListDnsZoneRecordSetsResponse: {
    encode(message: ListDnsZoneRecordSetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneRecordSetsResponse;
    fromJSON(object: any): ListDnsZoneRecordSetsResponse;
    toJSON(message: ListDnsZoneRecordSetsResponse): unknown;
    fromPartial(object: DeepPartial<ListDnsZoneRecordSetsResponse>): ListDnsZoneRecordSetsResponse;
};
export declare const UpdateRecordSetsRequest: {
    encode(message: UpdateRecordSetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRecordSetsRequest;
    fromJSON(object: any): UpdateRecordSetsRequest;
    toJSON(message: UpdateRecordSetsRequest): unknown;
    fromPartial(object: DeepPartial<UpdateRecordSetsRequest>): UpdateRecordSetsRequest;
};
export declare const UpdateRecordSetsMetadata: {
    encode(_: UpdateRecordSetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRecordSetsMetadata;
    fromJSON(_: any): UpdateRecordSetsMetadata;
    toJSON(_: UpdateRecordSetsMetadata): unknown;
    fromPartial(_: DeepPartial<UpdateRecordSetsMetadata>): UpdateRecordSetsMetadata;
};
export declare const UpsertRecordSetsRequest: {
    encode(message: UpsertRecordSetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpsertRecordSetsRequest;
    fromJSON(object: any): UpsertRecordSetsRequest;
    toJSON(message: UpsertRecordSetsRequest): unknown;
    fromPartial(object: DeepPartial<UpsertRecordSetsRequest>): UpsertRecordSetsRequest;
};
export declare const UpsertRecordSetsMetadata: {
    encode(_: UpsertRecordSetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpsertRecordSetsMetadata;
    fromJSON(_: any): UpsertRecordSetsMetadata;
    toJSON(_: UpsertRecordSetsMetadata): unknown;
    fromPartial(_: DeepPartial<UpsertRecordSetsMetadata>): UpsertRecordSetsMetadata;
};
export declare const ListDnsZoneOperationsRequest: {
    encode(message: ListDnsZoneOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneOperationsRequest;
    fromJSON(object: any): ListDnsZoneOperationsRequest;
    toJSON(message: ListDnsZoneOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListDnsZoneOperationsRequest>): ListDnsZoneOperationsRequest;
};
export declare const ListDnsZoneOperationsResponse: {
    encode(message: ListDnsZoneOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneOperationsResponse;
    fromJSON(object: any): ListDnsZoneOperationsResponse;
    toJSON(message: ListDnsZoneOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListDnsZoneOperationsResponse>): ListDnsZoneOperationsResponse;
};
/** A set of methods for managing DNS zones. */
export declare const DnsZoneServiceService: {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDnsZoneRequest;
        readonly responseSerialize: (value: DnsZone) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DnsZone;
    };
    /** Retrieves the list of DNS zones in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDnsZonesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDnsZonesRequest;
        readonly responseSerialize: (value: ListDnsZonesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDnsZonesResponse;
    };
    /** Creates a DNS zone in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDnsZoneRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified DNS zone. */
    readonly update: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDnsZoneRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified DNS zone. */
    readonly delete: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDnsZoneRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified record set. */
    readonly getRecordSet: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDnsZoneRecordSetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDnsZoneRecordSetRequest;
        readonly responseSerialize: (value: RecordSet) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RecordSet;
    };
    /** Retrieves the list of record sets in the specified folder. */
    readonly listRecordSets: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDnsZoneRecordSetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDnsZoneRecordSetsRequest;
        readonly responseSerialize: (value: ListDnsZoneRecordSetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDnsZoneRecordSetsResponse;
    };
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    readonly updateRecordSets: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRecordSetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRecordSetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    readonly upsertRecordSets: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpsertRecordSetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpsertRecordSetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified DNS zone. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDnsZoneOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDnsZoneOperationsRequest;
        readonly responseSerialize: (value: ListDnsZoneOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDnsZoneOperationsResponse;
    };
    /** Lists existing access bindings for the specified DNS zone. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified DNS zone. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified DNS zone. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    listRecordSets: handleUnaryCall<ListDnsZoneRecordSetsRequest, ListDnsZoneRecordSetsResponse>;
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
    listOperations: handleUnaryCall<ListDnsZoneOperationsRequest, ListDnsZoneOperationsResponse>;
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface DnsZoneServiceClient extends Client {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get(request: GetDnsZoneRequest, callback: (error: ServiceError | null, response: DnsZone) => void): ClientUnaryCall;
    get(request: GetDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DnsZone) => void): ClientUnaryCall;
    get(request: GetDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DnsZone) => void): ClientUnaryCall;
    /** Retrieves the list of DNS zones in the specified folder. */
    list(request: ListDnsZonesRequest, callback: (error: ServiceError | null, response: ListDnsZonesResponse) => void): ClientUnaryCall;
    list(request: ListDnsZonesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDnsZonesResponse) => void): ClientUnaryCall;
    list(request: ListDnsZonesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDnsZonesResponse) => void): ClientUnaryCall;
    /** Creates a DNS zone in the specified folder. */
    create(request: CreateDnsZoneRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified DNS zone. */
    update(request: UpdateDnsZoneRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified DNS zone. */
    delete(request: DeleteDnsZoneRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified record set. */
    getRecordSet(request: GetDnsZoneRecordSetRequest, callback: (error: ServiceError | null, response: RecordSet) => void): ClientUnaryCall;
    getRecordSet(request: GetDnsZoneRecordSetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RecordSet) => void): ClientUnaryCall;
    getRecordSet(request: GetDnsZoneRecordSetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RecordSet) => void): ClientUnaryCall;
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets(request: ListDnsZoneRecordSetsRequest, callback: (error: ServiceError | null, response: ListDnsZoneRecordSetsResponse) => void): ClientUnaryCall;
    listRecordSets(request: ListDnsZoneRecordSetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDnsZoneRecordSetsResponse) => void): ClientUnaryCall;
    listRecordSets(request: ListDnsZoneRecordSetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDnsZoneRecordSetsResponse) => void): ClientUnaryCall;
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets(request: UpdateRecordSetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRecordSets(request: UpdateRecordSetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRecordSets(request: UpdateRecordSetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets(request: UpsertRecordSetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    upsertRecordSets(request: UpsertRecordSetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    upsertRecordSets(request: UpsertRecordSetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified DNS zone. */
    listOperations(request: ListDnsZoneOperationsRequest, callback: (error: ServiceError | null, response: ListDnsZoneOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDnsZoneOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDnsZoneOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDnsZoneOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDnsZoneOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const DnsZoneServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DnsZoneServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
