/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { DiskPlacementPolicy } from '../../../../yandex/cloud/compute/v1/disk';
import { IpVersion, Instance, SchedulingPolicy, NetworkSettings, PlacementPolicy } from '../../../../yandex/cloud/compute/v1/instance';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export declare enum InstanceView {
    /** BASIC - Doesn't include the metadata of the instance in the server response. */
    BASIC = 0,
    /** FULL - Returns the metadata of the instance in the server response. */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function instanceViewFromJSON(object: any): InstanceView;
export declare function instanceViewToJSON(object: InstanceView): string;
export interface GetInstanceRequest {
    /**
     * ID of the Instance resource to return.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** Defines which information about the Instance resource should be returned in the server response. */
    view: InstanceView;
}
export interface ListInstancesRequest {
    /**
     * ID of the Folder to list instances in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Instance.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{,61}[a-z0-9])?$`.
     */
    filter: string;
}
export interface ListInstancesResponse {
    /** List of Instance resources. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstancesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateInstanceRequest {
    /**
     * ID of the folder to create an instance in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the instance. */
    name: string;
    /** Description of the instance. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the availability zone where the instance resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
     */
    zoneId: string;
    /**
     * ID of the hardware platform configuration for the instance.
     * This field affects the available values in [resources_spec] field.
     *
     * Platforms allows you to create various types of instances: with a large amount of memory,
     * with a large number of cores, with a burstable performance.
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /**
     * Computing resources of the instance, such as the amount of memory and number of cores.
     * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    resourcesSpec: ResourcesSpec | undefined;
    /**
     * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
     * The total size of all keys and values must be less than 512 KB.
     *
     * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
     * The values must be 256 KB or less.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /** Boot disk to attach to the instance. */
    bootDiskSpec: AttachedDiskSpec | undefined;
    /** Array of secondary disks to attach to the instance. */
    secondaryDiskSpecs: AttachedDiskSpec[];
    /**
     * Array of filesystems to attach to the instance.
     *
     * The filesystems must reside in the same availability zone as the instance.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    filesystemSpecs: AttachedFilesystemSpec[];
    /**
     * Network configuration for the instance. Specifies how the network interface is configured
     * to interact with other services on the internal network and on the internet.
     * Currently only one network interface is supported per instance.
     */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    /**
     * Host name for the instance.
     * This field is used to generate the [yandex.cloud.compute.v1.Instance.fqdn] value.
     * The host name must be unique within the network and region.
     * If not specified, the host name will be equal to [yandex.cloud.compute.v1.Instance.id] of the instance
     * and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
     */
    hostname: string;
    /** Scheduling policy configuration. */
    schedulingPolicy: SchedulingPolicy | undefined;
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Network settings. */
    networkSettings: NetworkSettings | undefined;
    /** Placement policy configuration. */
    placementPolicy: PlacementPolicy | undefined;
}
export interface CreateInstanceRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateInstanceRequest_MetadataEntry {
    key: string;
    value: string;
}
export interface CreateInstanceMetadata {
    /** ID of the instance that is being created. */
    instanceId: string;
}
export interface UpdateInstanceRequest {
    /**
     * ID of the Instance resource to update.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** Field mask that specifies which fields of the Instance resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the instance. */
    name: string;
    /** Description of the instance. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the hardware platform configuration for the instance.
     * This field affects the available values in [resources_spec] field.
     *
     * Platforms allows you to create various types of instances: with a large amount of memory,
     * with a large number of cores, with a burstable performance.
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /**
     * Computing resources of the instance, such as the amount of memory and number of cores.
     * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    resourcesSpec: ResourcesSpec | undefined;
    /**
     * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
     * The total size of all keys and values must be less than 512 KB.
     *
     * Existing set of `metadata` is completely replaced by the provided set.
     *
     * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
     * The values must be 256 KB or less.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Network settings. */
    networkSettings: NetworkSettings | undefined;
    /** Placement policy configuration. */
    placementPolicy: PlacementPolicy | undefined;
}
export interface UpdateInstanceRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateInstanceRequest_MetadataEntry {
    key: string;
    value: string;
}
export interface UpdateInstanceMetadata {
    /** ID of the Instance resource that is being updated. */
    instanceId: string;
}
export interface DeleteInstanceRequest {
    /**
     * ID of the instance to delete.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface DeleteInstanceMetadata {
    /** ID of the instance that is being deleted. */
    instanceId: string;
}
export interface UpdateInstanceMetadataRequest {
    /** ID of the instance that is being updated. */
    instanceId: string;
    /** List of keys to be deleted. */
    delete: string[];
    /** The metadata `key:value` pairs that will be added or updated to this instance. */
    upsert: {
        [key: string]: string;
    };
}
export interface UpdateInstanceMetadataRequest_UpsertEntry {
    key: string;
    value: string;
}
export interface UpdateInstanceMetadataMetadata {
    /** ID of the instance that is being updated. */
    instanceId: string;
}
export interface GetInstanceSerialPortOutputRequest {
    /** ID of the instance to return the serial port output for. */
    instanceId: string;
    /** Serial port to retrieve data from. The default is 1. */
    port: number;
}
export interface GetInstanceSerialPortOutputResponse {
    /**
     * The contents of the serial port output, starting from the time when the instance
     * started to boot.
     */
    contents: string;
}
export interface StopInstanceRequest {
    /**
     * ID of the instance to stop.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface StopInstanceMetadata {
    /** ID of the instance that is being deleted. */
    instanceId: string;
}
export interface StartInstanceRequest {
    /**
     * ID of the instance to start.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface StartInstanceMetadata {
    /** ID of the instance. */
    instanceId: string;
}
export interface RestartInstanceRequest {
    /**
     * ID of the instance to restart.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface RestartInstanceMetadata {
    /** ID of the instance. */
    instanceId: string;
}
export interface AttachInstanceDiskRequest {
    /**
     * ID of the instance to attach the disk to.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** Disk that should be attached. */
    attachedDiskSpec: AttachedDiskSpec | undefined;
}
export interface AttachInstanceDiskMetadata {
    /** ID of the instance. */
    instanceId: string;
    /** ID of the disk. */
    diskId: string;
}
export interface DetachInstanceDiskRequest {
    /**
     * ID of the instance to detach the disk from.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** ID of the disk that should be detached. */
    diskId: string | undefined;
    /**
     * Serial number of the disk that should be detached. This value is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     */
    deviceName: string | undefined;
}
export interface DetachInstanceDiskMetadata {
    /** ID of the instance. */
    instanceId: string;
    /** ID of the disk. */
    diskId: string;
}
export interface AttachInstanceFilesystemRequest {
    /**
     * ID of the instance to attach the filesystem to.
     *
     * To get the instance ID, make a [InstanceService.List] request.
     */
    instanceId: string;
    /** Filesystem to attach to the instance. */
    attachedFilesystemSpec: AttachedFilesystemSpec | undefined;
}
export interface AttachInstanceFilesystemMetadata {
    /** ID of the instance that the filesystem is being attached to. */
    instanceId: string;
    /** ID of the filesystem that is being attached to the instance. */
    filesystemId: string;
}
export interface DetachInstanceFilesystemRequest {
    /**
     * ID of the instance to detach the filesystem from.
     *
     * To get the instance ID, make a [InstanceService.List] request.
     */
    instanceId: string;
    /** ID of the filesystem that should be detached. */
    filesystemId: string | undefined;
    /** Name of the device used for mounting the filesystem that should be detached. */
    deviceName: string | undefined;
}
export interface DetachInstanceFilesystemMetadata {
    /** ID of the instance that the filesystem is being detached from. */
    instanceId: string;
    /** ID of the filesystem that is being detached from the instance. */
    filesystemId: string;
}
/** Enables One-to-one NAT on the network interface. */
export interface AddInstanceOneToOneNatRequest {
    /** ID of the instance to enable One-to-One NAT on. */
    instanceId: string;
    /** The index of the network interface to enable One-to-One NAT on. */
    networkInterfaceIndex: string;
    /** The network address that is assigned to the instance for this network interface. */
    internalAddress: string;
    /**
     * An external IP address configuration.
     * If not specified, then this instance will have no external internet access.
     */
    oneToOneNatSpec: OneToOneNatSpec | undefined;
}
export interface AddInstanceOneToOneNatMetadata {
    /** ID of the instance. */
    instanceId: string;
}
export interface RemoveInstanceOneToOneNatRequest {
    /** ID of the instance to remove One-to-one NAT. */
    instanceId: string;
    /** The index of the network interface to remove One-to-One NAT from. */
    networkInterfaceIndex: string;
    /** The network address that is assigned to the instance for this network interface. */
    internalAddress: string;
}
export interface RemoveInstanceOneToOneNatMetadata {
    /** ID of the instance. */
    instanceId: string;
}
export interface UpdateInstanceNetworkInterfaceRequest {
    /** ID of the network interface that is being updated. */
    instanceId: string;
    /** The index of the network interface to be updated. */
    networkInterfaceIndex: string;
    /** Field mask that specifies which attributes of the instance should be updated. */
    updateMask: FieldMask | undefined;
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that will be assigned to the instance for this network interface. */
    primaryV4AddressSpec: PrimaryAddressSpec | undefined;
    /** Primary IPv6 address that will be assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6AddressSpec: PrimaryAddressSpec | undefined;
    /** ID's of security groups attached to the interface. */
    securityGroupIds: string[];
}
export interface UpdateInstanceNetworkInterfaceMetadata {
    /** ID of the instant network interface that is being updated. */
    instanceId: string;
    /** The index of the network interface. */
    networkInterfaceIndex: string;
}
export interface ListInstanceOperationsRequest {
    /** ID of the Instance resource to list operations for. */
    instanceId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListInstanceOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListInstanceOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListInstanceOperationsResponse {
    /** List of operations for the specified instance. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstanceOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListInstanceOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ResourcesSpec {
    /** The amount of memory available to the instance, specified in bytes. */
    memory: number;
    /** The number of cores available to the instance. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     *
     * For example, if you need only 5% of the CPU performance, you can set core_fraction=5.
     * For more information, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    coreFraction: number;
    /** The number of GPUs available to the instance. */
    gpus: number;
}
export interface AttachedDiskSpec {
    /** The mode in which to attach this disk. */
    mode: AttachedDiskSpec_Mode;
    /**
     * Specifies a unique serial number of your choice that is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     * If not specified, a random value will be generated.
     */
    deviceName: string;
    /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
    autoDelete: boolean;
    /** Disk specification. */
    diskSpec: AttachedDiskSpec_DiskSpec | undefined;
    /** ID of the disk that should be attached. */
    diskId: string | undefined;
}
export declare enum AttachedDiskSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedDiskSpec_ModeFromJSON(object: any): AttachedDiskSpec_Mode;
export declare function attachedDiskSpec_ModeToJSON(object: AttachedDiskSpec_Mode): string;
export interface AttachedDiskSpec_DiskSpec {
    /** Name of the disk. */
    name: string;
    /** Description of the disk. */
    description: string;
    /**
     * ID of the disk type.
     * To get a list of available disk types, use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
     */
    typeId: string;
    /** Size of the disk, specified in bytes. */
    size: number;
    /** Block size of the disk, specified in bytes. The default is 4096. */
    blockSize: number;
    /** Placement policy configuration. */
    diskPlacementPolicy: DiskPlacementPolicy | undefined;
    /** ID of the image to create the disk from. */
    imageId: string | undefined;
    /** ID of the snapshot to restore the disk from. */
    snapshotId: string | undefined;
}
export interface AttachedFilesystemSpec {
    /** Mode of access to the filesystem that should be attached. */
    mode: AttachedFilesystemSpec_Mode;
    /**
     * Name of the device representing the filesystem on the instance.
     *
     * The name should be used for referencing the filesystem from within the instance
     * when it's being mounted, resized etc.
     *
     * If not specified, a random value will be generated.
     */
    deviceName: string;
    /** ID of the filesystem that should be attached. */
    filesystemId: string;
}
export declare enum AttachedFilesystemSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedFilesystemSpec_ModeFromJSON(object: any): AttachedFilesystemSpec_Mode;
export declare function attachedFilesystemSpec_ModeToJSON(object: AttachedFilesystemSpec_Mode): string;
export interface NetworkInterfaceSpec {
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that will be assigned to the instance for this network interface. */
    primaryV4AddressSpec: PrimaryAddressSpec | undefined;
    /** Primary IPv6 address that will be assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6AddressSpec: PrimaryAddressSpec | undefined;
    /** ID's of security groups attached to the interface */
    securityGroupIds: string[];
}
export interface PrimaryAddressSpec {
    /**
     * An IPv4 internal network address that is assigned to the instance for this network interface.
     * If not specified by the user, an unused internal IP is assigned by the system.
     */
    address: string;
    /**
     * An external IP address configuration.
     * If not specified, then this instance will have no external internet access.
     */
    oneToOneNatSpec: OneToOneNatSpec | undefined;
    /** Internal DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
}
export interface OneToOneNatSpec {
    /** External IP address version. */
    ipVersion: IpVersion;
    /** set static IP by value */
    address: string;
    /** External DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
}
export interface DnsRecordSpec {
    /** FQDN (required) */
    fqdn: string;
    /** DNS zone id (optional, if not set, private zone used) */
    dnsZoneId: string;
    /** DNS record ttl, values in 0-86400 (optional) */
    ttl: number;
    /** When set to true, also create PTR DNS record (optional) */
    ptr: boolean;
}
export declare const GetInstanceRequest: {
    encode(message: GetInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceRequest;
    fromJSON(object: any): GetInstanceRequest;
    toJSON(message: GetInstanceRequest): unknown;
    fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest;
};
export declare const ListInstancesRequest: {
    encode(message: ListInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstancesRequest;
    fromJSON(object: any): ListInstancesRequest;
    toJSON(message: ListInstancesRequest): unknown;
    fromPartial(object: DeepPartial<ListInstancesRequest>): ListInstancesRequest;
};
export declare const ListInstancesResponse: {
    encode(message: ListInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstancesResponse;
    fromJSON(object: any): ListInstancesResponse;
    toJSON(message: ListInstancesResponse): unknown;
    fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse;
};
export declare const CreateInstanceRequest: {
    encode(message: CreateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceRequest;
    fromJSON(object: any): CreateInstanceRequest;
    toJSON(message: CreateInstanceRequest): unknown;
    fromPartial(object: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest;
};
export declare const CreateInstanceRequest_LabelsEntry: {
    encode(message: CreateInstanceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceRequest_LabelsEntry;
    fromJSON(object: any): CreateInstanceRequest_LabelsEntry;
    toJSON(message: CreateInstanceRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateInstanceRequest_LabelsEntry>): CreateInstanceRequest_LabelsEntry;
};
export declare const CreateInstanceRequest_MetadataEntry: {
    encode(message: CreateInstanceRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceRequest_MetadataEntry;
    fromJSON(object: any): CreateInstanceRequest_MetadataEntry;
    toJSON(message: CreateInstanceRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<CreateInstanceRequest_MetadataEntry>): CreateInstanceRequest_MetadataEntry;
};
export declare const CreateInstanceMetadata: {
    encode(message: CreateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceMetadata;
    fromJSON(object: any): CreateInstanceMetadata;
    toJSON(message: CreateInstanceMetadata): unknown;
    fromPartial(object: DeepPartial<CreateInstanceMetadata>): CreateInstanceMetadata;
};
export declare const UpdateInstanceRequest: {
    encode(message: UpdateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceRequest;
    fromJSON(object: any): UpdateInstanceRequest;
    toJSON(message: UpdateInstanceRequest): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest;
};
export declare const UpdateInstanceRequest_LabelsEntry: {
    encode(message: UpdateInstanceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceRequest_LabelsEntry;
    fromJSON(object: any): UpdateInstanceRequest_LabelsEntry;
    toJSON(message: UpdateInstanceRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceRequest_LabelsEntry>): UpdateInstanceRequest_LabelsEntry;
};
export declare const UpdateInstanceRequest_MetadataEntry: {
    encode(message: UpdateInstanceRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceRequest_MetadataEntry;
    fromJSON(object: any): UpdateInstanceRequest_MetadataEntry;
    toJSON(message: UpdateInstanceRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceRequest_MetadataEntry>): UpdateInstanceRequest_MetadataEntry;
};
export declare const UpdateInstanceMetadata: {
    encode(message: UpdateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadata;
    fromJSON(object: any): UpdateInstanceMetadata;
    toJSON(message: UpdateInstanceMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceMetadata>): UpdateInstanceMetadata;
};
export declare const DeleteInstanceRequest: {
    encode(message: DeleteInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceRequest;
    fromJSON(object: any): DeleteInstanceRequest;
    toJSON(message: DeleteInstanceRequest): unknown;
    fromPartial(object: DeepPartial<DeleteInstanceRequest>): DeleteInstanceRequest;
};
export declare const DeleteInstanceMetadata: {
    encode(message: DeleteInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceMetadata;
    fromJSON(object: any): DeleteInstanceMetadata;
    toJSON(message: DeleteInstanceMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteInstanceMetadata>): DeleteInstanceMetadata;
};
export declare const UpdateInstanceMetadataRequest: {
    encode(message: UpdateInstanceMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadataRequest;
    fromJSON(object: any): UpdateInstanceMetadataRequest;
    toJSON(message: UpdateInstanceMetadataRequest): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceMetadataRequest>): UpdateInstanceMetadataRequest;
};
export declare const UpdateInstanceMetadataRequest_UpsertEntry: {
    encode(message: UpdateInstanceMetadataRequest_UpsertEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadataRequest_UpsertEntry;
    fromJSON(object: any): UpdateInstanceMetadataRequest_UpsertEntry;
    toJSON(message: UpdateInstanceMetadataRequest_UpsertEntry): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceMetadataRequest_UpsertEntry>): UpdateInstanceMetadataRequest_UpsertEntry;
};
export declare const UpdateInstanceMetadataMetadata: {
    encode(message: UpdateInstanceMetadataMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadataMetadata;
    fromJSON(object: any): UpdateInstanceMetadataMetadata;
    toJSON(message: UpdateInstanceMetadataMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceMetadataMetadata>): UpdateInstanceMetadataMetadata;
};
export declare const GetInstanceSerialPortOutputRequest: {
    encode(message: GetInstanceSerialPortOutputRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceSerialPortOutputRequest;
    fromJSON(object: any): GetInstanceSerialPortOutputRequest;
    toJSON(message: GetInstanceSerialPortOutputRequest): unknown;
    fromPartial(object: DeepPartial<GetInstanceSerialPortOutputRequest>): GetInstanceSerialPortOutputRequest;
};
export declare const GetInstanceSerialPortOutputResponse: {
    encode(message: GetInstanceSerialPortOutputResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceSerialPortOutputResponse;
    fromJSON(object: any): GetInstanceSerialPortOutputResponse;
    toJSON(message: GetInstanceSerialPortOutputResponse): unknown;
    fromPartial(object: DeepPartial<GetInstanceSerialPortOutputResponse>): GetInstanceSerialPortOutputResponse;
};
export declare const StopInstanceRequest: {
    encode(message: StopInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceRequest;
    fromJSON(object: any): StopInstanceRequest;
    toJSON(message: StopInstanceRequest): unknown;
    fromPartial(object: DeepPartial<StopInstanceRequest>): StopInstanceRequest;
};
export declare const StopInstanceMetadata: {
    encode(message: StopInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceMetadata;
    fromJSON(object: any): StopInstanceMetadata;
    toJSON(message: StopInstanceMetadata): unknown;
    fromPartial(object: DeepPartial<StopInstanceMetadata>): StopInstanceMetadata;
};
export declare const StartInstanceRequest: {
    encode(message: StartInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceRequest;
    fromJSON(object: any): StartInstanceRequest;
    toJSON(message: StartInstanceRequest): unknown;
    fromPartial(object: DeepPartial<StartInstanceRequest>): StartInstanceRequest;
};
export declare const StartInstanceMetadata: {
    encode(message: StartInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceMetadata;
    fromJSON(object: any): StartInstanceMetadata;
    toJSON(message: StartInstanceMetadata): unknown;
    fromPartial(object: DeepPartial<StartInstanceMetadata>): StartInstanceMetadata;
};
export declare const RestartInstanceRequest: {
    encode(message: RestartInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestartInstanceRequest;
    fromJSON(object: any): RestartInstanceRequest;
    toJSON(message: RestartInstanceRequest): unknown;
    fromPartial(object: DeepPartial<RestartInstanceRequest>): RestartInstanceRequest;
};
export declare const RestartInstanceMetadata: {
    encode(message: RestartInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestartInstanceMetadata;
    fromJSON(object: any): RestartInstanceMetadata;
    toJSON(message: RestartInstanceMetadata): unknown;
    fromPartial(object: DeepPartial<RestartInstanceMetadata>): RestartInstanceMetadata;
};
export declare const AttachInstanceDiskRequest: {
    encode(message: AttachInstanceDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceDiskRequest;
    fromJSON(object: any): AttachInstanceDiskRequest;
    toJSON(message: AttachInstanceDiskRequest): unknown;
    fromPartial(object: DeepPartial<AttachInstanceDiskRequest>): AttachInstanceDiskRequest;
};
export declare const AttachInstanceDiskMetadata: {
    encode(message: AttachInstanceDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceDiskMetadata;
    fromJSON(object: any): AttachInstanceDiskMetadata;
    toJSON(message: AttachInstanceDiskMetadata): unknown;
    fromPartial(object: DeepPartial<AttachInstanceDiskMetadata>): AttachInstanceDiskMetadata;
};
export declare const DetachInstanceDiskRequest: {
    encode(message: DetachInstanceDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceDiskRequest;
    fromJSON(object: any): DetachInstanceDiskRequest;
    toJSON(message: DetachInstanceDiskRequest): unknown;
    fromPartial(object: DeepPartial<DetachInstanceDiskRequest>): DetachInstanceDiskRequest;
};
export declare const DetachInstanceDiskMetadata: {
    encode(message: DetachInstanceDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceDiskMetadata;
    fromJSON(object: any): DetachInstanceDiskMetadata;
    toJSON(message: DetachInstanceDiskMetadata): unknown;
    fromPartial(object: DeepPartial<DetachInstanceDiskMetadata>): DetachInstanceDiskMetadata;
};
export declare const AttachInstanceFilesystemRequest: {
    encode(message: AttachInstanceFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceFilesystemRequest;
    fromJSON(object: any): AttachInstanceFilesystemRequest;
    toJSON(message: AttachInstanceFilesystemRequest): unknown;
    fromPartial(object: DeepPartial<AttachInstanceFilesystemRequest>): AttachInstanceFilesystemRequest;
};
export declare const AttachInstanceFilesystemMetadata: {
    encode(message: AttachInstanceFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceFilesystemMetadata;
    fromJSON(object: any): AttachInstanceFilesystemMetadata;
    toJSON(message: AttachInstanceFilesystemMetadata): unknown;
    fromPartial(object: DeepPartial<AttachInstanceFilesystemMetadata>): AttachInstanceFilesystemMetadata;
};
export declare const DetachInstanceFilesystemRequest: {
    encode(message: DetachInstanceFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceFilesystemRequest;
    fromJSON(object: any): DetachInstanceFilesystemRequest;
    toJSON(message: DetachInstanceFilesystemRequest): unknown;
    fromPartial(object: DeepPartial<DetachInstanceFilesystemRequest>): DetachInstanceFilesystemRequest;
};
export declare const DetachInstanceFilesystemMetadata: {
    encode(message: DetachInstanceFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceFilesystemMetadata;
    fromJSON(object: any): DetachInstanceFilesystemMetadata;
    toJSON(message: DetachInstanceFilesystemMetadata): unknown;
    fromPartial(object: DeepPartial<DetachInstanceFilesystemMetadata>): DetachInstanceFilesystemMetadata;
};
export declare const AddInstanceOneToOneNatRequest: {
    encode(message: AddInstanceOneToOneNatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddInstanceOneToOneNatRequest;
    fromJSON(object: any): AddInstanceOneToOneNatRequest;
    toJSON(message: AddInstanceOneToOneNatRequest): unknown;
    fromPartial(object: DeepPartial<AddInstanceOneToOneNatRequest>): AddInstanceOneToOneNatRequest;
};
export declare const AddInstanceOneToOneNatMetadata: {
    encode(message: AddInstanceOneToOneNatMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddInstanceOneToOneNatMetadata;
    fromJSON(object: any): AddInstanceOneToOneNatMetadata;
    toJSON(message: AddInstanceOneToOneNatMetadata): unknown;
    fromPartial(object: DeepPartial<AddInstanceOneToOneNatMetadata>): AddInstanceOneToOneNatMetadata;
};
export declare const RemoveInstanceOneToOneNatRequest: {
    encode(message: RemoveInstanceOneToOneNatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveInstanceOneToOneNatRequest;
    fromJSON(object: any): RemoveInstanceOneToOneNatRequest;
    toJSON(message: RemoveInstanceOneToOneNatRequest): unknown;
    fromPartial(object: DeepPartial<RemoveInstanceOneToOneNatRequest>): RemoveInstanceOneToOneNatRequest;
};
export declare const RemoveInstanceOneToOneNatMetadata: {
    encode(message: RemoveInstanceOneToOneNatMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveInstanceOneToOneNatMetadata;
    fromJSON(object: any): RemoveInstanceOneToOneNatMetadata;
    toJSON(message: RemoveInstanceOneToOneNatMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveInstanceOneToOneNatMetadata>): RemoveInstanceOneToOneNatMetadata;
};
export declare const UpdateInstanceNetworkInterfaceRequest: {
    encode(message: UpdateInstanceNetworkInterfaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceNetworkInterfaceRequest;
    fromJSON(object: any): UpdateInstanceNetworkInterfaceRequest;
    toJSON(message: UpdateInstanceNetworkInterfaceRequest): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceNetworkInterfaceRequest>): UpdateInstanceNetworkInterfaceRequest;
};
export declare const UpdateInstanceNetworkInterfaceMetadata: {
    encode(message: UpdateInstanceNetworkInterfaceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceNetworkInterfaceMetadata;
    fromJSON(object: any): UpdateInstanceNetworkInterfaceMetadata;
    toJSON(message: UpdateInstanceNetworkInterfaceMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceNetworkInterfaceMetadata>): UpdateInstanceNetworkInterfaceMetadata;
};
export declare const ListInstanceOperationsRequest: {
    encode(message: ListInstanceOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceOperationsRequest;
    fromJSON(object: any): ListInstanceOperationsRequest;
    toJSON(message: ListInstanceOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListInstanceOperationsRequest>): ListInstanceOperationsRequest;
};
export declare const ListInstanceOperationsResponse: {
    encode(message: ListInstanceOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceOperationsResponse;
    fromJSON(object: any): ListInstanceOperationsResponse;
    toJSON(message: ListInstanceOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListInstanceOperationsResponse>): ListInstanceOperationsResponse;
};
export declare const ResourcesSpec: {
    encode(message: ResourcesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcesSpec;
    fromJSON(object: any): ResourcesSpec;
    toJSON(message: ResourcesSpec): unknown;
    fromPartial(object: DeepPartial<ResourcesSpec>): ResourcesSpec;
};
export declare const AttachedDiskSpec: {
    encode(message: AttachedDiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDiskSpec;
    fromJSON(object: any): AttachedDiskSpec;
    toJSON(message: AttachedDiskSpec): unknown;
    fromPartial(object: DeepPartial<AttachedDiskSpec>): AttachedDiskSpec;
};
export declare const AttachedDiskSpec_DiskSpec: {
    encode(message: AttachedDiskSpec_DiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDiskSpec_DiskSpec;
    fromJSON(object: any): AttachedDiskSpec_DiskSpec;
    toJSON(message: AttachedDiskSpec_DiskSpec): unknown;
    fromPartial(object: DeepPartial<AttachedDiskSpec_DiskSpec>): AttachedDiskSpec_DiskSpec;
};
export declare const AttachedFilesystemSpec: {
    encode(message: AttachedFilesystemSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedFilesystemSpec;
    fromJSON(object: any): AttachedFilesystemSpec;
    toJSON(message: AttachedFilesystemSpec): unknown;
    fromPartial(object: DeepPartial<AttachedFilesystemSpec>): AttachedFilesystemSpec;
};
export declare const NetworkInterfaceSpec: {
    encode(message: NetworkInterfaceSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterfaceSpec;
    fromJSON(object: any): NetworkInterfaceSpec;
    toJSON(message: NetworkInterfaceSpec): unknown;
    fromPartial(object: DeepPartial<NetworkInterfaceSpec>): NetworkInterfaceSpec;
};
export declare const PrimaryAddressSpec: {
    encode(message: PrimaryAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddressSpec;
    fromJSON(object: any): PrimaryAddressSpec;
    toJSON(message: PrimaryAddressSpec): unknown;
    fromPartial(object: DeepPartial<PrimaryAddressSpec>): PrimaryAddressSpec;
};
export declare const OneToOneNatSpec: {
    encode(message: OneToOneNatSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNatSpec;
    fromJSON(object: any): OneToOneNatSpec;
    toJSON(message: OneToOneNatSpec): unknown;
    fromPartial(object: DeepPartial<OneToOneNatSpec>): OneToOneNatSpec;
};
export declare const DnsRecordSpec: {
    encode(message: DnsRecordSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecordSpec;
    fromJSON(object: any): DnsRecordSpec;
    toJSON(message: DnsRecordSpec): unknown;
    fromPartial(object: DeepPartial<DnsRecordSpec>): DnsRecordSpec;
};
/** A set of methods for managing Instance resources. */
export declare const InstanceServiceService: {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceRequest;
        readonly responseSerialize: (value: Instance) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Instance;
    };
    /** Retrieves the list of Instance resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstancesRequest;
        readonly responseSerialize: (value: ListInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstancesResponse;
    };
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified instance. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified instance. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the metadata of the specified instance. */
    readonly updateMetadata: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateMetadata";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceMetadataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceMetadataRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the serial port output of the specified Instance resource. */
    readonly getSerialPortOutput: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceSerialPortOutputRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceSerialPortOutputRequest;
        readonly responseSerialize: (value: GetInstanceSerialPortOutputResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetInstanceSerialPortOutputResponse;
    };
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    readonly stop: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the stopped instance. */
    readonly start: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restarts the running instance. */
    readonly restart: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Restart";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestartInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestartInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Attaches the disk to the instance. */
    readonly attachDisk: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/AttachDisk";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttachInstanceDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttachInstanceDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Detaches the disk from the instance. */
    readonly detachDisk: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/DetachDisk";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetachInstanceDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetachInstanceDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    readonly attachFilesystem: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/AttachFilesystem";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttachInstanceFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttachInstanceFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    readonly detachFilesystem: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/DetachFilesystem";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetachInstanceFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetachInstanceFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Enables One-to-one NAT on the network interface. */
    readonly addOneToOneNat: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddInstanceOneToOneNatRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddInstanceOneToOneNatRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes One-to-one NAT from the network interface. */
    readonly removeOneToOneNat: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveInstanceOneToOneNatRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveInstanceOneToOneNatRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified instance network interface. */
    readonly updateNetworkInterface: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceNetworkInterfaceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceNetworkInterfaceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified instance. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceOperationsRequest;
        readonly responseSerialize: (value: ListInstanceOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceOperationsResponse;
    };
};
export interface InstanceServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get: handleUnaryCall<GetInstanceRequest, Instance>;
    /** Retrieves the list of Instance resources in the specified folder. */
    list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateInstanceRequest, Operation>;
    /** Updates the specified instance. */
    update: handleUnaryCall<UpdateInstanceRequest, Operation>;
    /** Deletes the specified instance. */
    delete: handleUnaryCall<DeleteInstanceRequest, Operation>;
    /** Updates the metadata of the specified instance. */
    updateMetadata: handleUnaryCall<UpdateInstanceMetadataRequest, Operation>;
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput: handleUnaryCall<GetInstanceSerialPortOutputRequest, GetInstanceSerialPortOutputResponse>;
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop: handleUnaryCall<StopInstanceRequest, Operation>;
    /** Starts the stopped instance. */
    start: handleUnaryCall<StartInstanceRequest, Operation>;
    /** Restarts the running instance. */
    restart: handleUnaryCall<RestartInstanceRequest, Operation>;
    /** Attaches the disk to the instance. */
    attachDisk: handleUnaryCall<AttachInstanceDiskRequest, Operation>;
    /** Detaches the disk from the instance. */
    detachDisk: handleUnaryCall<DetachInstanceDiskRequest, Operation>;
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    attachFilesystem: handleUnaryCall<AttachInstanceFilesystemRequest, Operation>;
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem: handleUnaryCall<DetachInstanceFilesystemRequest, Operation>;
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat: handleUnaryCall<AddInstanceOneToOneNatRequest, Operation>;
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat: handleUnaryCall<RemoveInstanceOneToOneNatRequest, Operation>;
    /** Updates the specified instance network interface. */
    updateNetworkInterface: handleUnaryCall<UpdateInstanceNetworkInterfaceRequest, Operation>;
    /** Lists operations for the specified instance. */
    listOperations: handleUnaryCall<ListInstanceOperationsRequest, ListInstanceOperationsResponse>;
}
export interface InstanceServiceClient extends Client {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get(request: GetInstanceRequest, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    get(request: GetInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    get(request: GetInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    /** Retrieves the list of Instance resources in the specified folder. */
    list(request: ListInstancesRequest, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified instance. */
    update(request: UpdateInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified instance. */
    delete(request: DeleteInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the metadata of the specified instance. */
    updateMetadata(request: UpdateInstanceMetadataRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateMetadata(request: UpdateInstanceMetadataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateMetadata(request: UpdateInstanceMetadataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput(request: GetInstanceSerialPortOutputRequest, callback: (error: ServiceError | null, response: GetInstanceSerialPortOutputResponse) => void): ClientUnaryCall;
    getSerialPortOutput(request: GetInstanceSerialPortOutputRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetInstanceSerialPortOutputResponse) => void): ClientUnaryCall;
    getSerialPortOutput(request: GetInstanceSerialPortOutputRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetInstanceSerialPortOutputResponse) => void): ClientUnaryCall;
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop(request: StopInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the stopped instance. */
    start(request: StartInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restarts the running instance. */
    restart(request: RestartInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restart(request: RestartInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restart(request: RestartInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Attaches the disk to the instance. */
    attachDisk(request: AttachInstanceDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachDisk(request: AttachInstanceDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachDisk(request: AttachInstanceDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Detaches the disk from the instance. */
    detachDisk(request: DetachInstanceDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachDisk(request: DetachInstanceDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachDisk(request: DetachInstanceDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    attachFilesystem(request: AttachInstanceFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachFilesystem(request: AttachInstanceFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachFilesystem(request: AttachInstanceFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem(request: DetachInstanceFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachFilesystem(request: DetachInstanceFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachFilesystem(request: DetachInstanceFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat(request: AddInstanceOneToOneNatRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addOneToOneNat(request: AddInstanceOneToOneNatRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addOneToOneNat(request: AddInstanceOneToOneNatRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat(request: RemoveInstanceOneToOneNatRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeOneToOneNat(request: RemoveInstanceOneToOneNatRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeOneToOneNat(request: RemoveInstanceOneToOneNatRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified instance network interface. */
    updateNetworkInterface(request: UpdateInstanceNetworkInterfaceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateNetworkInterface(request: UpdateInstanceNetworkInterfaceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateNetworkInterface(request: UpdateInstanceNetworkInterfaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified instance. */
    listOperations(request: ListInstanceOperationsRequest, callback: (error: ServiceError | null, response: ListInstanceOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceOperationsResponse) => void): ClientUnaryCall;
}
export declare const InstanceServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => InstanceServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
