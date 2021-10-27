/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { DiskPlacementPolicy } from '../../../../yandex/cloud/compute/v1/disk';
import {
    IpVersion,
    Instance,
    SchedulingPolicy,
    NetworkSettings,
    PlacementPolicy,
    ipVersionFromJSON,
    ipVersionToJSON,
} from '../../../../yandex/cloud/compute/v1/instance';
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

export const protobufPackage = 'yandex.cloud.compute.v1';

export enum InstanceView {
    /** BASIC - Doesn't include the metadata of the instance in the server response. */
    BASIC = 0,
    /** FULL - Returns the metadata of the instance in the server response. */
    FULL = 1,
    UNRECOGNIZED = -1,
}

export function instanceViewFromJSON(object: any): InstanceView {
    switch (object) {
        case 0:
        case 'BASIC':
            return InstanceView.BASIC;
        case 1:
        case 'FULL':
            return InstanceView.FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InstanceView.UNRECOGNIZED;
    }
}

export function instanceViewToJSON(object: InstanceView): string {
    switch (object) {
        case InstanceView.BASIC:
            return 'BASIC';
        case InstanceView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}

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
    labels: { [key: string]: string };
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
    metadata: { [key: string]: string };
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
    labels: { [key: string]: string };
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
    metadata: { [key: string]: string };
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
    upsert: { [key: string]: string };
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

export enum AttachedDiskSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1,
}

export function attachedDiskSpec_ModeFromJSON(
    object: any
): AttachedDiskSpec_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return AttachedDiskSpec_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'READ_ONLY':
            return AttachedDiskSpec_Mode.READ_ONLY;
        case 2:
        case 'READ_WRITE':
            return AttachedDiskSpec_Mode.READ_WRITE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttachedDiskSpec_Mode.UNRECOGNIZED;
    }
}

export function attachedDiskSpec_ModeToJSON(
    object: AttachedDiskSpec_Mode
): string {
    switch (object) {
        case AttachedDiskSpec_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case AttachedDiskSpec_Mode.READ_ONLY:
            return 'READ_ONLY';
        case AttachedDiskSpec_Mode.READ_WRITE:
            return 'READ_WRITE';
        default:
            return 'UNKNOWN';
    }
}

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

export enum AttachedFilesystemSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1,
}

export function attachedFilesystemSpec_ModeFromJSON(
    object: any
): AttachedFilesystemSpec_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'READ_ONLY':
            return AttachedFilesystemSpec_Mode.READ_ONLY;
        case 2:
        case 'READ_WRITE':
            return AttachedFilesystemSpec_Mode.READ_WRITE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttachedFilesystemSpec_Mode.UNRECOGNIZED;
    }
}

export function attachedFilesystemSpec_ModeToJSON(
    object: AttachedFilesystemSpec_Mode
): string {
    switch (object) {
        case AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case AttachedFilesystemSpec_Mode.READ_ONLY:
            return 'READ_ONLY';
        case AttachedFilesystemSpec_Mode.READ_WRITE:
            return 'READ_WRITE';
        default:
            return 'UNKNOWN';
    }
}

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

const baseGetInstanceRequest: object = { instanceId: '', view: 0 };

export const GetInstanceRequest = {
    encode(
        message: GetInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetInstanceRequest {
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = instanceViewFromJSON(object.view);
        } else {
            message.view = 0;
        }
        return message;
    },

    toJSON(message: GetInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.view !== undefined &&
            (obj.view = instanceViewToJSON(message.view));
        return obj;
    },

    fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        } else {
            message.view = 0;
        }
        return message;
    },
};

const baseListInstancesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListInstancesRequest = {
    encode(
        message: ListInstancesRequest,
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
    ): ListInstancesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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

    fromJSON(object: any): ListInstancesRequest {
        const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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

    toJSON(message: ListInstancesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstancesRequest>
    ): ListInstancesRequest {
        const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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

const baseListInstancesResponse: object = { nextPageToken: '' };

export const ListInstancesResponse = {
    encode(
        message: ListInstancesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.instances) {
            Instance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListInstancesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstancesResponse,
        } as ListInstancesResponse;
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(
                        Instance.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListInstancesResponse {
        const message = {
            ...baseListInstancesResponse,
        } as ListInstancesResponse;
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(Instance.fromJSON(e));
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

    toJSON(message: ListInstancesResponse): unknown {
        const obj: any = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) =>
                e ? Instance.toJSON(e) : undefined
            );
        } else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstancesResponse>
    ): ListInstancesResponse {
        const message = {
            ...baseListInstancesResponse,
        } as ListInstancesResponse;
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(Instance.fromPartial(e));
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

const baseCreateInstanceRequest: object = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    platformId: '',
    hostname: '',
    serviceAccountId: '',
};

export const CreateInstanceRequest = {
    encode(
        message: CreateInstanceRequest,
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
            CreateInstanceRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(
                message.resourcesSpec,
                writer.uint32(58).fork()
            ).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            CreateInstanceRequest_MetadataEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork()
            ).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            AttachedDiskSpec.encode(
                message.bootDiskSpec,
                writer.uint32(74).fork()
            ).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            AttachedDiskSpec.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.filesystemSpecs) {
            AttachedFilesystemSpec.encode(
                v!,
                writer.uint32(138).fork()
            ).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            NetworkInterfaceSpec.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        if (message.hostname !== '') {
            writer.uint32(98).string(message.hostname);
        }
        if (message.schedulingPolicy !== undefined) {
            SchedulingPolicy.encode(
                message.schedulingPolicy,
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(
                message.networkSettings,
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(
                message.placementPolicy,
                writer.uint32(130).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest,
        } as CreateInstanceRequest;
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.filesystemSpecs = [];
        message.networkInterfaceSpecs = [];
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
                    const entry4 = CreateInstanceRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = ResourcesSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    const entry8 = CreateInstanceRequest_MetadataEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.bootDiskSpec = AttachedDiskSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.secondaryDiskSpecs.push(
                        AttachedDiskSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 17:
                    message.filesystemSpecs.push(
                        AttachedFilesystemSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 11:
                    message.networkInterfaceSpecs.push(
                        NetworkInterfaceSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 12:
                    message.hostname = reader.string();
                    break;
                case 13:
                    message.schedulingPolicy = SchedulingPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.networkSettings = NetworkSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 16:
                    message.placementPolicy = PlacementPolicy.decode(
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

    fromJSON(object: any): CreateInstanceRequest {
        const message = {
            ...baseCreateInstanceRequest,
        } as CreateInstanceRequest;
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.filesystemSpecs = [];
        message.networkInterfaceSpecs = [];
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        } else {
            message.platformId = '';
        }
        if (
            object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null
        ) {
            message.resourcesSpec = ResourcesSpec.fromJSON(
                object.resourcesSpec
            );
        } else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = AttachedDiskSpec.fromJSON(
                object.bootDiskSpec
            );
        } else {
            message.bootDiskSpec = undefined;
        }
        if (
            object.secondaryDiskSpecs !== undefined &&
            object.secondaryDiskSpecs !== null
        ) {
            for (const e of object.secondaryDiskSpecs) {
                message.secondaryDiskSpecs.push(AttachedDiskSpec.fromJSON(e));
            }
        }
        if (
            object.filesystemSpecs !== undefined &&
            object.filesystemSpecs !== null
        ) {
            for (const e of object.filesystemSpecs) {
                message.filesystemSpecs.push(
                    AttachedFilesystemSpec.fromJSON(e)
                );
            }
        }
        if (
            object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null
        ) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(
                    NetworkInterfaceSpec.fromJSON(e)
                );
            }
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = String(object.hostname);
        } else {
            message.hostname = '';
        }
        if (
            object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null
        ) {
            message.schedulingPolicy = SchedulingPolicy.fromJSON(
                object.schedulingPolicy
            );
        } else {
            message.schedulingPolicy = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NetworkSettings.fromJSON(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
        }
        if (
            object.placementPolicy !== undefined &&
            object.placementPolicy !== null
        ) {
            message.placementPolicy = PlacementPolicy.fromJSON(
                object.placementPolicy
            );
        } else {
            message.placementPolicy = undefined;
        }
        return message;
    },

    toJSON(message: CreateInstanceRequest): unknown {
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.platformId !== undefined &&
            (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? AttachedDiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        if (message.secondaryDiskSpecs) {
            obj.secondaryDiskSpecs = message.secondaryDiskSpecs.map((e) =>
                e ? AttachedDiskSpec.toJSON(e) : undefined
            );
        } else {
            obj.secondaryDiskSpecs = [];
        }
        if (message.filesystemSpecs) {
            obj.filesystemSpecs = message.filesystemSpecs.map((e) =>
                e ? AttachedFilesystemSpec.toJSON(e) : undefined
            );
        } else {
            obj.filesystemSpecs = [];
        }
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) =>
                e ? NetworkInterfaceSpec.toJSON(e) : undefined
            );
        } else {
            obj.networkInterfaceSpecs = [];
        }
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceRequest>
    ): CreateInstanceRequest {
        const message = {
            ...baseCreateInstanceRequest,
        } as CreateInstanceRequest;
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.filesystemSpecs = [];
        message.networkInterfaceSpecs = [];
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = object.platformId;
        } else {
            message.platformId = '';
        }
        if (
            object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null
        ) {
            message.resourcesSpec = ResourcesSpec.fromPartial(
                object.resourcesSpec
            );
        } else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = AttachedDiskSpec.fromPartial(
                object.bootDiskSpec
            );
        } else {
            message.bootDiskSpec = undefined;
        }
        if (
            object.secondaryDiskSpecs !== undefined &&
            object.secondaryDiskSpecs !== null
        ) {
            for (const e of object.secondaryDiskSpecs) {
                message.secondaryDiskSpecs.push(
                    AttachedDiskSpec.fromPartial(e)
                );
            }
        }
        if (
            object.filesystemSpecs !== undefined &&
            object.filesystemSpecs !== null
        ) {
            for (const e of object.filesystemSpecs) {
                message.filesystemSpecs.push(
                    AttachedFilesystemSpec.fromPartial(e)
                );
            }
        }
        if (
            object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null
        ) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(
                    NetworkInterfaceSpec.fromPartial(e)
                );
            }
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = object.hostname;
        } else {
            message.hostname = '';
        }
        if (
            object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null
        ) {
            message.schedulingPolicy = SchedulingPolicy.fromPartial(
                object.schedulingPolicy
            );
        } else {
            message.schedulingPolicy = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NetworkSettings.fromPartial(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
        }
        if (
            object.placementPolicy !== undefined &&
            object.placementPolicy !== null
        ) {
            message.placementPolicy = PlacementPolicy.fromPartial(
                object.placementPolicy
            );
        } else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};

const baseCreateInstanceRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateInstanceRequest_LabelsEntry = {
    encode(
        message: CreateInstanceRequest_LabelsEntry,
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
    ): CreateInstanceRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        } as CreateInstanceRequest_LabelsEntry;
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

    fromJSON(object: any): CreateInstanceRequest_LabelsEntry {
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        } as CreateInstanceRequest_LabelsEntry;
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

    toJSON(message: CreateInstanceRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceRequest_LabelsEntry>
    ): CreateInstanceRequest_LabelsEntry {
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        } as CreateInstanceRequest_LabelsEntry;
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

const baseCreateInstanceRequest_MetadataEntry: object = { key: '', value: '' };

export const CreateInstanceRequest_MetadataEntry = {
    encode(
        message: CreateInstanceRequest_MetadataEntry,
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
    ): CreateInstanceRequest_MetadataEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest_MetadataEntry,
        } as CreateInstanceRequest_MetadataEntry;
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

    fromJSON(object: any): CreateInstanceRequest_MetadataEntry {
        const message = {
            ...baseCreateInstanceRequest_MetadataEntry,
        } as CreateInstanceRequest_MetadataEntry;
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

    toJSON(message: CreateInstanceRequest_MetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceRequest_MetadataEntry>
    ): CreateInstanceRequest_MetadataEntry {
        const message = {
            ...baseCreateInstanceRequest_MetadataEntry,
        } as CreateInstanceRequest_MetadataEntry;
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

const baseCreateInstanceMetadata: object = { instanceId: '' };

export const CreateInstanceMetadata = {
    encode(
        message: CreateInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateInstanceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceMetadata,
        } as CreateInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateInstanceMetadata {
        const message = {
            ...baseCreateInstanceMetadata,
        } as CreateInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: CreateInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceMetadata>
    ): CreateInstanceMetadata {
        const message = {
            ...baseCreateInstanceMetadata,
        } as CreateInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseUpdateInstanceRequest: object = {
    instanceId: '',
    name: '',
    description: '',
    platformId: '',
    serviceAccountId: '',
};

export const UpdateInstanceRequest = {
    encode(
        message: UpdateInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
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
            UpdateInstanceRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(
                message.resourcesSpec,
                writer.uint32(58).fork()
            ).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            UpdateInstanceRequest_MetadataEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork()
            ).ldelim();
        });
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(
                message.networkSettings,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(
                message.placementPolicy,
                writer.uint32(90).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest,
        } as UpdateInstanceRequest;
        message.labels = {};
        message.metadata = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
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
                    const entry5 = UpdateInstanceRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = ResourcesSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    const entry8 = UpdateInstanceRequest_MetadataEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.networkSettings = NetworkSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.placementPolicy = PlacementPolicy.decode(
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

    fromJSON(object: any): UpdateInstanceRequest {
        const message = {
            ...baseUpdateInstanceRequest,
        } as UpdateInstanceRequest;
        message.labels = {};
        message.metadata = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
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
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        } else {
            message.platformId = '';
        }
        if (
            object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null
        ) {
            message.resourcesSpec = ResourcesSpec.fromJSON(
                object.resourcesSpec
            );
        } else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NetworkSettings.fromJSON(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
        }
        if (
            object.placementPolicy !== undefined &&
            object.placementPolicy !== null
        ) {
            message.placementPolicy = PlacementPolicy.fromJSON(
                object.placementPolicy
            );
        } else {
            message.placementPolicy = undefined;
        }
        return message;
    },

    toJSON(message: UpdateInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
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
        message.platformId !== undefined &&
            (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceRequest>
    ): UpdateInstanceRequest {
        const message = {
            ...baseUpdateInstanceRequest,
        } as UpdateInstanceRequest;
        message.labels = {};
        message.metadata = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
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
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = object.platformId;
        } else {
            message.platformId = '';
        }
        if (
            object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null
        ) {
            message.resourcesSpec = ResourcesSpec.fromPartial(
                object.resourcesSpec
            );
        } else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NetworkSettings.fromPartial(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
        }
        if (
            object.placementPolicy !== undefined &&
            object.placementPolicy !== null
        ) {
            message.placementPolicy = PlacementPolicy.fromPartial(
                object.placementPolicy
            );
        } else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};

const baseUpdateInstanceRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateInstanceRequest_LabelsEntry = {
    encode(
        message: UpdateInstanceRequest_LabelsEntry,
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
    ): UpdateInstanceRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        } as UpdateInstanceRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateInstanceRequest_LabelsEntry {
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        } as UpdateInstanceRequest_LabelsEntry;
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

    toJSON(message: UpdateInstanceRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceRequest_LabelsEntry>
    ): UpdateInstanceRequest_LabelsEntry {
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        } as UpdateInstanceRequest_LabelsEntry;
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

const baseUpdateInstanceRequest_MetadataEntry: object = { key: '', value: '' };

export const UpdateInstanceRequest_MetadataEntry = {
    encode(
        message: UpdateInstanceRequest_MetadataEntry,
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
    ): UpdateInstanceRequest_MetadataEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest_MetadataEntry,
        } as UpdateInstanceRequest_MetadataEntry;
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

    fromJSON(object: any): UpdateInstanceRequest_MetadataEntry {
        const message = {
            ...baseUpdateInstanceRequest_MetadataEntry,
        } as UpdateInstanceRequest_MetadataEntry;
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

    toJSON(message: UpdateInstanceRequest_MetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceRequest_MetadataEntry>
    ): UpdateInstanceRequest_MetadataEntry {
        const message = {
            ...baseUpdateInstanceRequest_MetadataEntry,
        } as UpdateInstanceRequest_MetadataEntry;
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

const baseUpdateInstanceMetadata: object = { instanceId: '' };

export const UpdateInstanceMetadata = {
    encode(
        message: UpdateInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadata,
        } as UpdateInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceMetadata {
        const message = {
            ...baseUpdateInstanceMetadata,
        } as UpdateInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: UpdateInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceMetadata>
    ): UpdateInstanceMetadata {
        const message = {
            ...baseUpdateInstanceMetadata,
        } as UpdateInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseDeleteInstanceRequest: object = { instanceId: '' };

export const DeleteInstanceRequest = {
    encode(
        message: DeleteInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceRequest,
        } as DeleteInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstanceRequest {
        const message = {
            ...baseDeleteInstanceRequest,
        } as DeleteInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: DeleteInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteInstanceRequest>
    ): DeleteInstanceRequest {
        const message = {
            ...baseDeleteInstanceRequest,
        } as DeleteInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseDeleteInstanceMetadata: object = { instanceId: '' };

export const DeleteInstanceMetadata = {
    encode(
        message: DeleteInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteInstanceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceMetadata,
        } as DeleteInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstanceMetadata {
        const message = {
            ...baseDeleteInstanceMetadata,
        } as DeleteInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: DeleteInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteInstanceMetadata>
    ): DeleteInstanceMetadata {
        const message = {
            ...baseDeleteInstanceMetadata,
        } as DeleteInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseUpdateInstanceMetadataRequest: object = {
    instanceId: '',
    delete: '',
};

export const UpdateInstanceMetadataRequest = {
    encode(
        message: UpdateInstanceMetadataRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        for (const v of message.delete) {
            writer.uint32(18).string(v!);
        }
        Object.entries(message.upsert).forEach(([key, value]) => {
            UpdateInstanceMetadataRequest_UpsertEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceMetadataRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadataRequest,
        } as UpdateInstanceMetadataRequest;
        message.delete = [];
        message.upsert = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.delete.push(reader.string());
                    break;
                case 3:
                    const entry3 =
                        UpdateInstanceMetadataRequest_UpsertEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry3.value !== undefined) {
                        message.upsert[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceMetadataRequest {
        const message = {
            ...baseUpdateInstanceMetadataRequest,
        } as UpdateInstanceMetadataRequest;
        message.delete = [];
        message.upsert = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.delete !== undefined && object.delete !== null) {
            for (const e of object.delete) {
                message.delete.push(String(e));
            }
        }
        if (object.upsert !== undefined && object.upsert !== null) {
            Object.entries(object.upsert).forEach(([key, value]) => {
                message.upsert[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: UpdateInstanceMetadataRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        if (message.delete) {
            obj.delete = message.delete.map((e) => e);
        } else {
            obj.delete = [];
        }
        obj.upsert = {};
        if (message.upsert) {
            Object.entries(message.upsert).forEach(([k, v]) => {
                obj.upsert[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceMetadataRequest>
    ): UpdateInstanceMetadataRequest {
        const message = {
            ...baseUpdateInstanceMetadataRequest,
        } as UpdateInstanceMetadataRequest;
        message.delete = [];
        message.upsert = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.delete !== undefined && object.delete !== null) {
            for (const e of object.delete) {
                message.delete.push(e);
            }
        }
        if (object.upsert !== undefined && object.upsert !== null) {
            Object.entries(object.upsert).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.upsert[key] = String(value);
                }
            });
        }
        return message;
    },
};

const baseUpdateInstanceMetadataRequest_UpsertEntry: object = {
    key: '',
    value: '',
};

export const UpdateInstanceMetadataRequest_UpsertEntry = {
    encode(
        message: UpdateInstanceMetadataRequest_UpsertEntry,
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
    ): UpdateInstanceMetadataRequest_UpsertEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadataRequest_UpsertEntry,
        } as UpdateInstanceMetadataRequest_UpsertEntry;
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

    fromJSON(object: any): UpdateInstanceMetadataRequest_UpsertEntry {
        const message = {
            ...baseUpdateInstanceMetadataRequest_UpsertEntry,
        } as UpdateInstanceMetadataRequest_UpsertEntry;
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

    toJSON(message: UpdateInstanceMetadataRequest_UpsertEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceMetadataRequest_UpsertEntry>
    ): UpdateInstanceMetadataRequest_UpsertEntry {
        const message = {
            ...baseUpdateInstanceMetadataRequest_UpsertEntry,
        } as UpdateInstanceMetadataRequest_UpsertEntry;
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

const baseUpdateInstanceMetadataMetadata: object = { instanceId: '' };

export const UpdateInstanceMetadataMetadata = {
    encode(
        message: UpdateInstanceMetadataMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceMetadataMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadataMetadata,
        } as UpdateInstanceMetadataMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceMetadataMetadata {
        const message = {
            ...baseUpdateInstanceMetadataMetadata,
        } as UpdateInstanceMetadataMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: UpdateInstanceMetadataMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceMetadataMetadata>
    ): UpdateInstanceMetadataMetadata {
        const message = {
            ...baseUpdateInstanceMetadataMetadata,
        } as UpdateInstanceMetadataMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseGetInstanceSerialPortOutputRequest: object = {
    instanceId: '',
    port: 0,
};

export const GetInstanceSerialPortOutputRequest = {
    encode(
        message: GetInstanceSerialPortOutputRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetInstanceSerialPortOutputRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetInstanceSerialPortOutputRequest,
        } as GetInstanceSerialPortOutputRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetInstanceSerialPortOutputRequest {
        const message = {
            ...baseGetInstanceSerialPortOutputRequest,
        } as GetInstanceSerialPortOutputRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        return message;
    },

    toJSON(message: GetInstanceSerialPortOutputRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetInstanceSerialPortOutputRequest>
    ): GetInstanceSerialPortOutputRequest {
        const message = {
            ...baseGetInstanceSerialPortOutputRequest,
        } as GetInstanceSerialPortOutputRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        return message;
    },
};

const baseGetInstanceSerialPortOutputResponse: object = { contents: '' };

export const GetInstanceSerialPortOutputResponse = {
    encode(
        message: GetInstanceSerialPortOutputResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.contents !== '') {
            writer.uint32(10).string(message.contents);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetInstanceSerialPortOutputResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetInstanceSerialPortOutputResponse,
        } as GetInstanceSerialPortOutputResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetInstanceSerialPortOutputResponse {
        const message = {
            ...baseGetInstanceSerialPortOutputResponse,
        } as GetInstanceSerialPortOutputResponse;
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = String(object.contents);
        } else {
            message.contents = '';
        }
        return message;
    },

    toJSON(message: GetInstanceSerialPortOutputResponse): unknown {
        const obj: any = {};
        message.contents !== undefined && (obj.contents = message.contents);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetInstanceSerialPortOutputResponse>
    ): GetInstanceSerialPortOutputResponse {
        const message = {
            ...baseGetInstanceSerialPortOutputResponse,
        } as GetInstanceSerialPortOutputResponse;
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        } else {
            message.contents = '';
        }
        return message;
    },
};

const baseStopInstanceRequest: object = { instanceId: '' };

export const StopInstanceRequest = {
    encode(
        message: StopInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstanceRequest {
        const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: StopInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(object: DeepPartial<StopInstanceRequest>): StopInstanceRequest {
        const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseStopInstanceMetadata: object = { instanceId: '' };

export const StopInstanceMetadata = {
    encode(
        message: StopInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopInstanceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstanceMetadata {
        const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: StopInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopInstanceMetadata>
    ): StopInstanceMetadata {
        const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseStartInstanceRequest: object = { instanceId: '' };

export const StartInstanceRequest = {
    encode(
        message: StartInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartInstanceRequest {
        const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: StartInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartInstanceRequest>
    ): StartInstanceRequest {
        const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseStartInstanceMetadata: object = { instanceId: '' };

export const StartInstanceMetadata = {
    encode(
        message: StartInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartInstanceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartInstanceMetadata,
        } as StartInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartInstanceMetadata {
        const message = {
            ...baseStartInstanceMetadata,
        } as StartInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: StartInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartInstanceMetadata>
    ): StartInstanceMetadata {
        const message = {
            ...baseStartInstanceMetadata,
        } as StartInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseRestartInstanceRequest: object = { instanceId: '' };

export const RestartInstanceRequest = {
    encode(
        message: RestartInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestartInstanceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestartInstanceRequest,
        } as RestartInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestartInstanceRequest {
        const message = {
            ...baseRestartInstanceRequest,
        } as RestartInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: RestartInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestartInstanceRequest>
    ): RestartInstanceRequest {
        const message = {
            ...baseRestartInstanceRequest,
        } as RestartInstanceRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseRestartInstanceMetadata: object = { instanceId: '' };

export const RestartInstanceMetadata = {
    encode(
        message: RestartInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestartInstanceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestartInstanceMetadata,
        } as RestartInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestartInstanceMetadata {
        const message = {
            ...baseRestartInstanceMetadata,
        } as RestartInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: RestartInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestartInstanceMetadata>
    ): RestartInstanceMetadata {
        const message = {
            ...baseRestartInstanceMetadata,
        } as RestartInstanceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseAttachInstanceDiskRequest: object = { instanceId: '' };

export const AttachInstanceDiskRequest = {
    encode(
        message: AttachInstanceDiskRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedDiskSpec !== undefined) {
            AttachedDiskSpec.encode(
                message.attachedDiskSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachInstanceDiskRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceDiskRequest,
        } as AttachInstanceDiskRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.attachedDiskSpec = AttachedDiskSpec.decode(
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

    fromJSON(object: any): AttachInstanceDiskRequest {
        const message = {
            ...baseAttachInstanceDiskRequest,
        } as AttachInstanceDiskRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (
            object.attachedDiskSpec !== undefined &&
            object.attachedDiskSpec !== null
        ) {
            message.attachedDiskSpec = AttachedDiskSpec.fromJSON(
                object.attachedDiskSpec
            );
        } else {
            message.attachedDiskSpec = undefined;
        }
        return message;
    },

    toJSON(message: AttachInstanceDiskRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.attachedDiskSpec !== undefined &&
            (obj.attachedDiskSpec = message.attachedDiskSpec
                ? AttachedDiskSpec.toJSON(message.attachedDiskSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AttachInstanceDiskRequest>
    ): AttachInstanceDiskRequest {
        const message = {
            ...baseAttachInstanceDiskRequest,
        } as AttachInstanceDiskRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (
            object.attachedDiskSpec !== undefined &&
            object.attachedDiskSpec !== null
        ) {
            message.attachedDiskSpec = AttachedDiskSpec.fromPartial(
                object.attachedDiskSpec
            );
        } else {
            message.attachedDiskSpec = undefined;
        }
        return message;
    },
};

const baseAttachInstanceDiskMetadata: object = { instanceId: '', diskId: '' };

export const AttachInstanceDiskMetadata = {
    encode(
        message: AttachInstanceDiskMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachInstanceDiskMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceDiskMetadata,
        } as AttachInstanceDiskMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachInstanceDiskMetadata {
        const message = {
            ...baseAttachInstanceDiskMetadata,
        } as AttachInstanceDiskMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = '';
        }
        return message;
    },

    toJSON(message: AttachInstanceDiskMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AttachInstanceDiskMetadata>
    ): AttachInstanceDiskMetadata {
        const message = {
            ...baseAttachInstanceDiskMetadata,
        } as AttachInstanceDiskMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = '';
        }
        return message;
    },
};

const baseDetachInstanceDiskRequest: object = { instanceId: '' };

export const DetachInstanceDiskRequest = {
    encode(
        message: DetachInstanceDiskRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== undefined) {
            writer.uint32(18).string(message.diskId);
        }
        if (message.deviceName !== undefined) {
            writer.uint32(26).string(message.deviceName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DetachInstanceDiskRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceDiskRequest,
        } as DetachInstanceDiskRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                case 3:
                    message.deviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetachInstanceDiskRequest {
        const message = {
            ...baseDetachInstanceDiskRequest,
        } as DetachInstanceDiskRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = undefined;
        }
        return message;
    },

    toJSON(message: DetachInstanceDiskRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DetachInstanceDiskRequest>
    ): DetachInstanceDiskRequest {
        const message = {
            ...baseDetachInstanceDiskRequest,
        } as DetachInstanceDiskRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = undefined;
        }
        return message;
    },
};

const baseDetachInstanceDiskMetadata: object = { instanceId: '', diskId: '' };

export const DetachInstanceDiskMetadata = {
    encode(
        message: DetachInstanceDiskMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DetachInstanceDiskMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceDiskMetadata,
        } as DetachInstanceDiskMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetachInstanceDiskMetadata {
        const message = {
            ...baseDetachInstanceDiskMetadata,
        } as DetachInstanceDiskMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = '';
        }
        return message;
    },

    toJSON(message: DetachInstanceDiskMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DetachInstanceDiskMetadata>
    ): DetachInstanceDiskMetadata {
        const message = {
            ...baseDetachInstanceDiskMetadata,
        } as DetachInstanceDiskMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = '';
        }
        return message;
    },
};

const baseAttachInstanceFilesystemRequest: object = { instanceId: '' };

export const AttachInstanceFilesystemRequest = {
    encode(
        message: AttachInstanceFilesystemRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedFilesystemSpec !== undefined) {
            AttachedFilesystemSpec.encode(
                message.attachedFilesystemSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachInstanceFilesystemRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceFilesystemRequest,
        } as AttachInstanceFilesystemRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.attachedFilesystemSpec =
                        AttachedFilesystemSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachInstanceFilesystemRequest {
        const message = {
            ...baseAttachInstanceFilesystemRequest,
        } as AttachInstanceFilesystemRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (
            object.attachedFilesystemSpec !== undefined &&
            object.attachedFilesystemSpec !== null
        ) {
            message.attachedFilesystemSpec = AttachedFilesystemSpec.fromJSON(
                object.attachedFilesystemSpec
            );
        } else {
            message.attachedFilesystemSpec = undefined;
        }
        return message;
    },

    toJSON(message: AttachInstanceFilesystemRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.attachedFilesystemSpec !== undefined &&
            (obj.attachedFilesystemSpec = message.attachedFilesystemSpec
                ? AttachedFilesystemSpec.toJSON(message.attachedFilesystemSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AttachInstanceFilesystemRequest>
    ): AttachInstanceFilesystemRequest {
        const message = {
            ...baseAttachInstanceFilesystemRequest,
        } as AttachInstanceFilesystemRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (
            object.attachedFilesystemSpec !== undefined &&
            object.attachedFilesystemSpec !== null
        ) {
            message.attachedFilesystemSpec = AttachedFilesystemSpec.fromPartial(
                object.attachedFilesystemSpec
            );
        } else {
            message.attachedFilesystemSpec = undefined;
        }
        return message;
    },
};

const baseAttachInstanceFilesystemMetadata: object = {
    instanceId: '',
    filesystemId: '',
};

export const AttachInstanceFilesystemMetadata = {
    encode(
        message: AttachInstanceFilesystemMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== '') {
            writer.uint32(18).string(message.filesystemId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachInstanceFilesystemMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceFilesystemMetadata,
        } as AttachInstanceFilesystemMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachInstanceFilesystemMetadata {
        const message = {
            ...baseAttachInstanceFilesystemMetadata,
        } as AttachInstanceFilesystemMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        } else {
            message.filesystemId = '';
        }
        return message;
    },

    toJSON(message: AttachInstanceFilesystemMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AttachInstanceFilesystemMetadata>
    ): AttachInstanceFilesystemMetadata {
        const message = {
            ...baseAttachInstanceFilesystemMetadata,
        } as AttachInstanceFilesystemMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        } else {
            message.filesystemId = '';
        }
        return message;
    },
};

const baseDetachInstanceFilesystemRequest: object = { instanceId: '' };

export const DetachInstanceFilesystemRequest = {
    encode(
        message: DetachInstanceFilesystemRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== undefined) {
            writer.uint32(18).string(message.filesystemId);
        }
        if (message.deviceName !== undefined) {
            writer.uint32(26).string(message.deviceName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DetachInstanceFilesystemRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceFilesystemRequest,
        } as DetachInstanceFilesystemRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.filesystemId = reader.string();
                    break;
                case 3:
                    message.deviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetachInstanceFilesystemRequest {
        const message = {
            ...baseDetachInstanceFilesystemRequest,
        } as DetachInstanceFilesystemRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        } else {
            message.filesystemId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = undefined;
        }
        return message;
    },

    toJSON(message: DetachInstanceFilesystemRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DetachInstanceFilesystemRequest>
    ): DetachInstanceFilesystemRequest {
        const message = {
            ...baseDetachInstanceFilesystemRequest,
        } as DetachInstanceFilesystemRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        } else {
            message.filesystemId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = undefined;
        }
        return message;
    },
};

const baseDetachInstanceFilesystemMetadata: object = {
    instanceId: '',
    filesystemId: '',
};

export const DetachInstanceFilesystemMetadata = {
    encode(
        message: DetachInstanceFilesystemMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== '') {
            writer.uint32(18).string(message.filesystemId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DetachInstanceFilesystemMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceFilesystemMetadata,
        } as DetachInstanceFilesystemMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetachInstanceFilesystemMetadata {
        const message = {
            ...baseDetachInstanceFilesystemMetadata,
        } as DetachInstanceFilesystemMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        } else {
            message.filesystemId = '';
        }
        return message;
    },

    toJSON(message: DetachInstanceFilesystemMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DetachInstanceFilesystemMetadata>
    ): DetachInstanceFilesystemMetadata {
        const message = {
            ...baseDetachInstanceFilesystemMetadata,
        } as DetachInstanceFilesystemMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        } else {
            message.filesystemId = '';
        }
        return message;
    },
};

const baseAddInstanceOneToOneNatRequest: object = {
    instanceId: '',
    networkInterfaceIndex: '',
    internalAddress: '',
};

export const AddInstanceOneToOneNatRequest = {
    encode(
        message: AddInstanceOneToOneNatRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.internalAddress !== '') {
            writer.uint32(26).string(message.internalAddress);
        }
        if (message.oneToOneNatSpec !== undefined) {
            OneToOneNatSpec.encode(
                message.oneToOneNatSpec,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddInstanceOneToOneNatRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddInstanceOneToOneNatRequest,
        } as AddInstanceOneToOneNatRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                case 3:
                    message.internalAddress = reader.string();
                    break;
                case 4:
                    message.oneToOneNatSpec = OneToOneNatSpec.decode(
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

    fromJSON(object: any): AddInstanceOneToOneNatRequest {
        const message = {
            ...baseAddInstanceOneToOneNatRequest,
        } as AddInstanceOneToOneNatRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = String(
                object.networkInterfaceIndex
            );
        } else {
            message.networkInterfaceIndex = '';
        }
        if (
            object.internalAddress !== undefined &&
            object.internalAddress !== null
        ) {
            message.internalAddress = String(object.internalAddress);
        } else {
            message.internalAddress = '';
        }
        if (
            object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null
        ) {
            message.oneToOneNatSpec = OneToOneNatSpec.fromJSON(
                object.oneToOneNatSpec
            );
        } else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },

    toJSON(message: AddInstanceOneToOneNatRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.internalAddress !== undefined &&
            (obj.internalAddress = message.internalAddress);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddInstanceOneToOneNatRequest>
    ): AddInstanceOneToOneNatRequest {
        const message = {
            ...baseAddInstanceOneToOneNatRequest,
        } as AddInstanceOneToOneNatRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        } else {
            message.networkInterfaceIndex = '';
        }
        if (
            object.internalAddress !== undefined &&
            object.internalAddress !== null
        ) {
            message.internalAddress = object.internalAddress;
        } else {
            message.internalAddress = '';
        }
        if (
            object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null
        ) {
            message.oneToOneNatSpec = OneToOneNatSpec.fromPartial(
                object.oneToOneNatSpec
            );
        } else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
};

const baseAddInstanceOneToOneNatMetadata: object = { instanceId: '' };

export const AddInstanceOneToOneNatMetadata = {
    encode(
        message: AddInstanceOneToOneNatMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddInstanceOneToOneNatMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddInstanceOneToOneNatMetadata,
        } as AddInstanceOneToOneNatMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddInstanceOneToOneNatMetadata {
        const message = {
            ...baseAddInstanceOneToOneNatMetadata,
        } as AddInstanceOneToOneNatMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: AddInstanceOneToOneNatMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddInstanceOneToOneNatMetadata>
    ): AddInstanceOneToOneNatMetadata {
        const message = {
            ...baseAddInstanceOneToOneNatMetadata,
        } as AddInstanceOneToOneNatMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseRemoveInstanceOneToOneNatRequest: object = {
    instanceId: '',
    networkInterfaceIndex: '',
    internalAddress: '',
};

export const RemoveInstanceOneToOneNatRequest = {
    encode(
        message: RemoveInstanceOneToOneNatRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.internalAddress !== '') {
            writer.uint32(26).string(message.internalAddress);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveInstanceOneToOneNatRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveInstanceOneToOneNatRequest,
        } as RemoveInstanceOneToOneNatRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                case 3:
                    message.internalAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveInstanceOneToOneNatRequest {
        const message = {
            ...baseRemoveInstanceOneToOneNatRequest,
        } as RemoveInstanceOneToOneNatRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = String(
                object.networkInterfaceIndex
            );
        } else {
            message.networkInterfaceIndex = '';
        }
        if (
            object.internalAddress !== undefined &&
            object.internalAddress !== null
        ) {
            message.internalAddress = String(object.internalAddress);
        } else {
            message.internalAddress = '';
        }
        return message;
    },

    toJSON(message: RemoveInstanceOneToOneNatRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.internalAddress !== undefined &&
            (obj.internalAddress = message.internalAddress);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveInstanceOneToOneNatRequest>
    ): RemoveInstanceOneToOneNatRequest {
        const message = {
            ...baseRemoveInstanceOneToOneNatRequest,
        } as RemoveInstanceOneToOneNatRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        } else {
            message.networkInterfaceIndex = '';
        }
        if (
            object.internalAddress !== undefined &&
            object.internalAddress !== null
        ) {
            message.internalAddress = object.internalAddress;
        } else {
            message.internalAddress = '';
        }
        return message;
    },
};

const baseRemoveInstanceOneToOneNatMetadata: object = { instanceId: '' };

export const RemoveInstanceOneToOneNatMetadata = {
    encode(
        message: RemoveInstanceOneToOneNatMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveInstanceOneToOneNatMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveInstanceOneToOneNatMetadata,
        } as RemoveInstanceOneToOneNatMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveInstanceOneToOneNatMetadata {
        const message = {
            ...baseRemoveInstanceOneToOneNatMetadata,
        } as RemoveInstanceOneToOneNatMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        return message;
    },

    toJSON(message: RemoveInstanceOneToOneNatMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveInstanceOneToOneNatMetadata>
    ): RemoveInstanceOneToOneNatMetadata {
        const message = {
            ...baseRemoveInstanceOneToOneNatMetadata,
        } as RemoveInstanceOneToOneNatMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        return message;
    },
};

const baseUpdateInstanceNetworkInterfaceRequest: object = {
    instanceId: '',
    networkInterfaceIndex: '',
    subnetId: '',
    securityGroupIds: '',
};

export const UpdateInstanceNetworkInterfaceRequest = {
    encode(
        message: UpdateInstanceNetworkInterfaceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(
                message.primaryV4AddressSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(
                message.primaryV6AddressSpec,
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceNetworkInterfaceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceNetworkInterfaceRequest,
        } as UpdateInstanceNetworkInterfaceRequest;
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.primaryV4AddressSpec = PrimaryAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.primaryV6AddressSpec = PrimaryAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceNetworkInterfaceRequest {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceRequest,
        } as UpdateInstanceNetworkInterfaceRequest;
        message.securityGroupIds = [];
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = String(
                object.networkInterfaceIndex
            );
        } else {
            message.networkInterfaceIndex = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null
        ) {
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromJSON(
                object.primaryV4AddressSpec
            );
        } else {
            message.primaryV4AddressSpec = undefined;
        }
        if (
            object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null
        ) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromJSON(
                object.primaryV6AddressSpec
            );
        } else {
            message.primaryV6AddressSpec = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateInstanceNetworkInterfaceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceNetworkInterfaceRequest>
    ): UpdateInstanceNetworkInterfaceRequest {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceRequest,
        } as UpdateInstanceNetworkInterfaceRequest;
        message.securityGroupIds = [];
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        } else {
            message.networkInterfaceIndex = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null
        ) {
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromPartial(
                object.primaryV4AddressSpec
            );
        } else {
            message.primaryV4AddressSpec = undefined;
        }
        if (
            object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null
        ) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromPartial(
                object.primaryV6AddressSpec
            );
        } else {
            message.primaryV6AddressSpec = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};

const baseUpdateInstanceNetworkInterfaceMetadata: object = {
    instanceId: '',
    networkInterfaceIndex: '',
};

export const UpdateInstanceNetworkInterfaceMetadata = {
    encode(
        message: UpdateInstanceNetworkInterfaceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceNetworkInterfaceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceNetworkInterfaceMetadata,
        } as UpdateInstanceNetworkInterfaceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceNetworkInterfaceMetadata {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceMetadata,
        } as UpdateInstanceNetworkInterfaceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = String(
                object.networkInterfaceIndex
            );
        } else {
            message.networkInterfaceIndex = '';
        }
        return message;
    },

    toJSON(message: UpdateInstanceNetworkInterfaceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceNetworkInterfaceMetadata>
    ): UpdateInstanceNetworkInterfaceMetadata {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceMetadata,
        } as UpdateInstanceNetworkInterfaceMetadata;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (
            object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null
        ) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        } else {
            message.networkInterfaceIndex = '';
        }
        return message;
    },
};

const baseListInstanceOperationsRequest: object = {
    instanceId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListInstanceOperationsRequest = {
    encode(
        message: ListInstanceOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
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
    ): ListInstanceOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceOperationsRequest,
        } as ListInstanceOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
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

    fromJSON(object: any): ListInstanceOperationsRequest {
        const message = {
            ...baseListInstanceOperationsRequest,
        } as ListInstanceOperationsRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
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

    toJSON(message: ListInstanceOperationsRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceOperationsRequest>
    ): ListInstanceOperationsRequest {
        const message = {
            ...baseListInstanceOperationsRequest,
        } as ListInstanceOperationsRequest;
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
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

const baseListInstanceOperationsResponse: object = { nextPageToken: '' };

export const ListInstanceOperationsResponse = {
    encode(
        message: ListInstanceOperationsResponse,
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
    ): ListInstanceOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceOperationsResponse,
        } as ListInstanceOperationsResponse;
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

    fromJSON(object: any): ListInstanceOperationsResponse {
        const message = {
            ...baseListInstanceOperationsResponse,
        } as ListInstanceOperationsResponse;
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

    toJSON(message: ListInstanceOperationsResponse): unknown {
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
        object: DeepPartial<ListInstanceOperationsResponse>
    ): ListInstanceOperationsResponse {
        const message = {
            ...baseListInstanceOperationsResponse,
        } as ListInstanceOperationsResponse;
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

const baseResourcesSpec: object = {
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};

export const ResourcesSpec = {
    encode(
        message: ResourcesSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        if (message.gpus !== 0) {
            writer.uint32(32).int64(message.gpus);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.gpus = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourcesSpec {
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        } else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = Number(object.cores);
        } else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = Number(object.coreFraction);
        } else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = Number(object.gpus);
        } else {
            message.gpus = 0;
        }
        return message;
    },

    toJSON(message: ResourcesSpec): unknown {
        const obj: any = {};
        message.memory !== undefined && (obj.memory = message.memory);
        message.cores !== undefined && (obj.cores = message.cores);
        message.coreFraction !== undefined &&
            (obj.coreFraction = message.coreFraction);
        message.gpus !== undefined && (obj.gpus = message.gpus);
        return obj;
    },

    fromPartial(object: DeepPartial<ResourcesSpec>): ResourcesSpec {
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        } else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = object.cores;
        } else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = object.coreFraction;
        } else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = object.gpus;
        } else {
            message.gpus = 0;
        }
        return message;
    },
};

const baseAttachedDiskSpec: object = {
    mode: 0,
    deviceName: '',
    autoDelete: false,
};

export const AttachedDiskSpec = {
    encode(
        message: AttachedDiskSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.autoDelete === true) {
            writer.uint32(24).bool(message.autoDelete);
        }
        if (message.diskSpec !== undefined) {
            AttachedDiskSpec_DiskSpec.encode(
                message.diskSpec,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.diskId !== undefined) {
            writer.uint32(42).string(message.diskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDiskSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.autoDelete = reader.bool();
                    break;
                case 4:
                    message.diskSpec = AttachedDiskSpec_DiskSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachedDiskSpec {
        const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedDiskSpec_ModeFromJSON(object.mode);
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = '';
        }
        if (object.autoDelete !== undefined && object.autoDelete !== null) {
            message.autoDelete = Boolean(object.autoDelete);
        } else {
            message.autoDelete = false;
        }
        if (object.diskSpec !== undefined && object.diskSpec !== null) {
            message.diskSpec = AttachedDiskSpec_DiskSpec.fromJSON(
                object.diskSpec
            );
        } else {
            message.diskSpec = undefined;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = undefined;
        }
        return message;
    },

    toJSON(message: AttachedDiskSpec): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.autoDelete !== undefined &&
            (obj.autoDelete = message.autoDelete);
        message.diskSpec !== undefined &&
            (obj.diskSpec = message.diskSpec
                ? AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
                : undefined);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },

    fromPartial(object: DeepPartial<AttachedDiskSpec>): AttachedDiskSpec {
        const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = '';
        }
        if (object.autoDelete !== undefined && object.autoDelete !== null) {
            message.autoDelete = object.autoDelete;
        } else {
            message.autoDelete = false;
        }
        if (object.diskSpec !== undefined && object.diskSpec !== null) {
            message.diskSpec = AttachedDiskSpec_DiskSpec.fromPartial(
                object.diskSpec
            );
        } else {
            message.diskSpec = undefined;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = undefined;
        }
        return message;
    },
};

const baseAttachedDiskSpec_DiskSpec: object = {
    name: '',
    description: '',
    typeId: '',
    size: 0,
    blockSize: 0,
};

export const AttachedDiskSpec_DiskSpec = {
    encode(
        message: AttachedDiskSpec_DiskSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.typeId !== '') {
            writer.uint32(26).string(message.typeId);
        }
        if (message.size !== 0) {
            writer.uint32(32).int64(message.size);
        }
        if (message.blockSize !== 0) {
            writer.uint32(64).int64(message.blockSize);
        }
        if (message.diskPlacementPolicy !== undefined) {
            DiskPlacementPolicy.encode(
                message.diskPlacementPolicy,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.imageId !== undefined) {
            writer.uint32(42).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(50).string(message.snapshotId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachedDiskSpec_DiskSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        } as AttachedDiskSpec_DiskSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.typeId = reader.string();
                    break;
                case 4:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.blockSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.diskPlacementPolicy = DiskPlacementPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.imageId = reader.string();
                    break;
                case 6:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachedDiskSpec_DiskSpec {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        } as AttachedDiskSpec_DiskSpec;
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        } else {
            message.typeId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        } else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = Number(object.blockSize);
        } else {
            message.blockSize = 0;
        }
        if (
            object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null
        ) {
            message.diskPlacementPolicy = DiskPlacementPolicy.fromJSON(
                object.diskPlacementPolicy
            );
        } else {
            message.diskPlacementPolicy = undefined;
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = undefined;
        }
        return message;
    },

    toJSON(message: AttachedDiskSpec_DiskSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.size !== undefined && (obj.size = message.size);
        message.blockSize !== undefined && (obj.blockSize = message.blockSize);
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AttachedDiskSpec_DiskSpec>
    ): AttachedDiskSpec_DiskSpec {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        } as AttachedDiskSpec_DiskSpec;
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        } else {
            message.typeId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = object.blockSize;
        } else {
            message.blockSize = 0;
        }
        if (
            object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null
        ) {
            message.diskPlacementPolicy = DiskPlacementPolicy.fromPartial(
                object.diskPlacementPolicy
            );
        } else {
            message.diskPlacementPolicy = undefined;
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = undefined;
        }
        return message;
    },
};

const baseAttachedFilesystemSpec: object = {
    mode: 0,
    deviceName: '',
    filesystemId: '',
};

export const AttachedFilesystemSpec = {
    encode(
        message: AttachedFilesystemSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.filesystemId !== '') {
            writer.uint32(26).string(message.filesystemId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachedFilesystemSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachedFilesystemSpec,
        } as AttachedFilesystemSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachedFilesystemSpec {
        const message = {
            ...baseAttachedFilesystemSpec,
        } as AttachedFilesystemSpec;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedFilesystemSpec_ModeFromJSON(object.mode);
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        } else {
            message.filesystemId = '';
        }
        return message;
    },

    toJSON(message: AttachedFilesystemSpec): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = attachedFilesystemSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AttachedFilesystemSpec>
    ): AttachedFilesystemSpec {
        const message = {
            ...baseAttachedFilesystemSpec,
        } as AttachedFilesystemSpec;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        } else {
            message.filesystemId = '';
        }
        return message;
    },
};

const baseNetworkInterfaceSpec: object = { subnetId: '', securityGroupIds: '' };

export const NetworkInterfaceSpec = {
    encode(
        message: NetworkInterfaceSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(
                message.primaryV4AddressSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(
                message.primaryV6AddressSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): NetworkInterfaceSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.primaryV4AddressSpec = PrimaryAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.primaryV6AddressSpec = PrimaryAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.securityGroupIds = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null
        ) {
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromJSON(
                object.primaryV4AddressSpec
            );
        } else {
            message.primaryV4AddressSpec = undefined;
        }
        if (
            object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null
        ) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromJSON(
                object.primaryV6AddressSpec
            );
        } else {
            message.primaryV6AddressSpec = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: NetworkInterfaceSpec): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<NetworkInterfaceSpec>
    ): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.securityGroupIds = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null
        ) {
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromPartial(
                object.primaryV4AddressSpec
            );
        } else {
            message.primaryV4AddressSpec = undefined;
        }
        if (
            object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null
        ) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromPartial(
                object.primaryV6AddressSpec
            );
        } else {
            message.primaryV6AddressSpec = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};

const basePrimaryAddressSpec: object = { address: '' };

export const PrimaryAddressSpec = {
    encode(
        message: PrimaryAddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNatSpec !== undefined) {
            OneToOneNatSpec.encode(
                message.oneToOneNatSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            DnsRecordSpec.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PrimaryAddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNatSpec = OneToOneNatSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.dnsRecordSpecs.push(
                        DnsRecordSpec.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrimaryAddressSpec {
        const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
        message.dnsRecordSpecs = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (
            object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null
        ) {
            message.oneToOneNatSpec = OneToOneNatSpec.fromJSON(
                object.oneToOneNatSpec
            );
        } else {
            message.oneToOneNatSpec = undefined;
        }
        if (
            object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null
        ) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(DnsRecordSpec.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PrimaryAddressSpec): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) =>
                e ? DnsRecordSpec.toJSON(e) : undefined
            );
        } else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PrimaryAddressSpec>): PrimaryAddressSpec {
        const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
        message.dnsRecordSpecs = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (
            object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null
        ) {
            message.oneToOneNatSpec = OneToOneNatSpec.fromPartial(
                object.oneToOneNatSpec
            );
        } else {
            message.oneToOneNatSpec = undefined;
        }
        if (
            object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null
        ) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(DnsRecordSpec.fromPartial(e));
            }
        }
        return message;
    },
};

const baseOneToOneNatSpec: object = { ipVersion: 0, address: '' };

export const OneToOneNatSpec = {
    encode(
        message: OneToOneNatSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.dnsRecordSpecs) {
            DnsRecordSpec.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNatSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32() as any;
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.dnsRecordSpecs.push(
                        DnsRecordSpec.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OneToOneNatSpec {
        const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
        message.dnsRecordSpecs = [];
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        } else {
            message.ipVersion = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (
            object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null
        ) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(DnsRecordSpec.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: OneToOneNatSpec): unknown {
        const obj: any = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        message.address !== undefined && (obj.address = message.address);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) =>
                e ? DnsRecordSpec.toJSON(e) : undefined
            );
        } else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<OneToOneNatSpec>): OneToOneNatSpec {
        const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
        message.dnsRecordSpecs = [];
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        } else {
            message.ipVersion = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (
            object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null
        ) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(DnsRecordSpec.fromPartial(e));
            }
        }
        return message;
    },
};

const baseDnsRecordSpec: object = {
    fqdn: '',
    dnsZoneId: '',
    ttl: 0,
    ptr: false,
};

export const DnsRecordSpec = {
    encode(
        message: DnsRecordSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.fqdn !== '') {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.dnsZoneId !== '') {
            writer.uint32(18).string(message.dnsZoneId);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        if (message.ptr === true) {
            writer.uint32(32).bool(message.ptr);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecordSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsRecordSpec } as DnsRecordSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.dnsZoneId = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.ptr = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DnsRecordSpec {
        const message = { ...baseDnsRecordSpec } as DnsRecordSpec;
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        } else {
            message.fqdn = '';
        }
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = Number(object.ttl);
        } else {
            message.ttl = 0;
        }
        if (object.ptr !== undefined && object.ptr !== null) {
            message.ptr = Boolean(object.ptr);
        } else {
            message.ptr = false;
        }
        return message;
    },

    toJSON(message: DnsRecordSpec): unknown {
        const obj: any = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = message.ttl);
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },

    fromPartial(object: DeepPartial<DnsRecordSpec>): DnsRecordSpec {
        const message = { ...baseDnsRecordSpec } as DnsRecordSpec;
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        } else {
            message.fqdn = '';
        }
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = object.ttl;
        } else {
            message.ttl = 0;
        }
        if (object.ptr !== undefined && object.ptr !== null) {
            message.ptr = object.ptr;
        } else {
            message.ptr = false;
        }
        return message;
    },
};

/** A set of methods for managing Instance resources. */
export const InstanceServiceService = {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.InstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetInstanceRequest) =>
            Buffer.from(GetInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetInstanceRequest.decode(value),
        responseSerialize: (value: Instance) =>
            Buffer.from(Instance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Instance.decode(value),
    },
    /** Retrieves the list of Instance resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.InstanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstancesRequest) =>
            Buffer.from(ListInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListInstancesRequest.decode(value),
        responseSerialize: (value: ListInstancesResponse) =>
            Buffer.from(ListInstancesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListInstancesResponse.decode(value),
    },
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.InstanceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateInstanceRequest) =>
            Buffer.from(CreateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateInstanceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified instance. */
    update: {
        path: '/yandex.cloud.compute.v1.InstanceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateInstanceRequest) =>
            Buffer.from(UpdateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateInstanceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified instance. */
    delete: {
        path: '/yandex.cloud.compute.v1.InstanceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteInstanceRequest) =>
            Buffer.from(DeleteInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteInstanceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the metadata of the specified instance. */
    updateMetadata: {
        path: '/yandex.cloud.compute.v1.InstanceService/UpdateMetadata',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateInstanceMetadataRequest) =>
            Buffer.from(UpdateInstanceMetadataRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateInstanceMetadataRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput: {
        path: '/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetInstanceSerialPortOutputRequest) =>
            Buffer.from(
                GetInstanceSerialPortOutputRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            GetInstanceSerialPortOutputRequest.decode(value),
        responseSerialize: (value: GetInstanceSerialPortOutputResponse) =>
            Buffer.from(
                GetInstanceSerialPortOutputResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            GetInstanceSerialPortOutputResponse.decode(value),
    },
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop: {
        path: '/yandex.cloud.compute.v1.InstanceService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopInstanceRequest) =>
            Buffer.from(StopInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StopInstanceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the stopped instance. */
    start: {
        path: '/yandex.cloud.compute.v1.InstanceService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartInstanceRequest) =>
            Buffer.from(StartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StartInstanceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Restarts the running instance. */
    restart: {
        path: '/yandex.cloud.compute.v1.InstanceService/Restart',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestartInstanceRequest) =>
            Buffer.from(RestartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RestartInstanceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Attaches the disk to the instance. */
    attachDisk: {
        path: '/yandex.cloud.compute.v1.InstanceService/AttachDisk',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AttachInstanceDiskRequest) =>
            Buffer.from(AttachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AttachInstanceDiskRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Detaches the disk from the instance. */
    detachDisk: {
        path: '/yandex.cloud.compute.v1.InstanceService/DetachDisk',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DetachInstanceDiskRequest) =>
            Buffer.from(DetachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DetachInstanceDiskRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
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
    attachFilesystem: {
        path: '/yandex.cloud.compute.v1.InstanceService/AttachFilesystem',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AttachInstanceFilesystemRequest) =>
            Buffer.from(AttachInstanceFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AttachInstanceFilesystemRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem: {
        path: '/yandex.cloud.compute.v1.InstanceService/DetachFilesystem',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DetachInstanceFilesystemRequest) =>
            Buffer.from(DetachInstanceFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DetachInstanceFilesystemRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat: {
        path: '/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddInstanceOneToOneNatRequest) =>
            Buffer.from(AddInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AddInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat: {
        path: '/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveInstanceOneToOneNatRequest) =>
            Buffer.from(
                RemoveInstanceOneToOneNatRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            RemoveInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified instance network interface. */
    updateNetworkInterface: {
        path: '/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateInstanceNetworkInterfaceRequest) =>
            Buffer.from(
                UpdateInstanceNetworkInterfaceRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            UpdateInstanceNetworkInterfaceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified instance. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.InstanceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstanceOperationsRequest) =>
            Buffer.from(ListInstanceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListInstanceOperationsRequest.decode(value),
        responseSerialize: (value: ListInstanceOperationsResponse) =>
            Buffer.from(ListInstanceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListInstanceOperationsResponse.decode(value),
    },
} as const;

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
    getSerialPortOutput: handleUnaryCall<
        GetInstanceSerialPortOutputRequest,
        GetInstanceSerialPortOutputResponse
    >;
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
    attachFilesystem: handleUnaryCall<
        AttachInstanceFilesystemRequest,
        Operation
    >;
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem: handleUnaryCall<
        DetachInstanceFilesystemRequest,
        Operation
    >;
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat: handleUnaryCall<AddInstanceOneToOneNatRequest, Operation>;
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat: handleUnaryCall<
        RemoveInstanceOneToOneNatRequest,
        Operation
    >;
    /** Updates the specified instance network interface. */
    updateNetworkInterface: handleUnaryCall<
        UpdateInstanceNetworkInterfaceRequest,
        Operation
    >;
    /** Lists operations for the specified instance. */
    listOperations: handleUnaryCall<
        ListInstanceOperationsRequest,
        ListInstanceOperationsResponse
    >;
}

export interface InstanceServiceClient extends Client {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get(
        request: GetInstanceRequest,
        callback: (error: ServiceError | null, response: Instance) => void
    ): ClientUnaryCall;
    get(
        request: GetInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Instance) => void
    ): ClientUnaryCall;
    get(
        request: GetInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Instance) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Instance resources in the specified folder. */
    list(
        request: ListInstancesRequest,
        callback: (
            error: ServiceError | null,
            response: ListInstancesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListInstancesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListInstancesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListInstancesResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified instance. */
    update(
        request: UpdateInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified instance. */
    delete(
        request: DeleteInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the metadata of the specified instance. */
    updateMetadata(
        request: UpdateInstanceMetadataRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateMetadata(
        request: UpdateInstanceMetadataRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateMetadata(
        request: UpdateInstanceMetadataRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput(
        request: GetInstanceSerialPortOutputRequest,
        callback: (
            error: ServiceError | null,
            response: GetInstanceSerialPortOutputResponse
        ) => void
    ): ClientUnaryCall;
    getSerialPortOutput(
        request: GetInstanceSerialPortOutputRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetInstanceSerialPortOutputResponse
        ) => void
    ): ClientUnaryCall;
    getSerialPortOutput(
        request: GetInstanceSerialPortOutputRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetInstanceSerialPortOutputResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop(
        request: StopInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Starts the stopped instance. */
    start(
        request: StartInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Restarts the running instance. */
    restart(
        request: RestartInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restart(
        request: RestartInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restart(
        request: RestartInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Attaches the disk to the instance. */
    attachDisk(
        request: AttachInstanceDiskRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    attachDisk(
        request: AttachInstanceDiskRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    attachDisk(
        request: AttachInstanceDiskRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Detaches the disk from the instance. */
    detachDisk(
        request: DetachInstanceDiskRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    detachDisk(
        request: DetachInstanceDiskRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    detachDisk(
        request: DetachInstanceDiskRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
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
    attachFilesystem(
        request: AttachInstanceFilesystemRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    attachFilesystem(
        request: AttachInstanceFilesystemRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    attachFilesystem(
        request: AttachInstanceFilesystemRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem(
        request: DetachInstanceFilesystemRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    detachFilesystem(
        request: DetachInstanceFilesystemRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    detachFilesystem(
        request: DetachInstanceFilesystemRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat(
        request: AddInstanceOneToOneNatRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addOneToOneNat(
        request: AddInstanceOneToOneNatRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addOneToOneNat(
        request: AddInstanceOneToOneNatRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat(
        request: RemoveInstanceOneToOneNatRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeOneToOneNat(
        request: RemoveInstanceOneToOneNatRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeOneToOneNat(
        request: RemoveInstanceOneToOneNatRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified instance network interface. */
    updateNetworkInterface(
        request: UpdateInstanceNetworkInterfaceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateNetworkInterface(
        request: UpdateInstanceNetworkInterfaceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateNetworkInterface(
        request: UpdateInstanceNetworkInterfaceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified instance. */
    listOperations(
        request: ListInstanceOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListInstanceOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListInstanceOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListInstanceOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListInstanceOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListInstanceOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const InstanceServiceClient = makeGenericClientConstructor(
    InstanceServiceService,
    'yandex.cloud.compute.v1.InstanceService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): InstanceServiceClient;
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
