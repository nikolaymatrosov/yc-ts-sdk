import { DiskPlacementGroupServiceService } from 'cloud/compute/v1/disk_placement_group_service';
import { DiskServiceService } from 'cloud/compute/v1/disk_service';
import { DiskTypeServiceService } from 'cloud/compute/v1/disk_type_service';
import { FilesystemServiceService } from 'cloud/compute/v1/filesystem_service';
import { HostGroupServiceService } from 'cloud/compute/v1/host_group_service';
import { HostTypeServiceService } from 'cloud/compute/v1/host_type_service';
import { ImageServiceService } from 'cloud/compute/v1/image_service';
import { InstanceServiceService } from 'cloud/compute/v1/instance_service';
import { PlacementGroupServiceService } from 'cloud/compute/v1/placement_group_service';
import { SnapshotServiceService } from 'cloud/compute/v1/snapshot_service';
import { ZoneServiceService } from 'cloud/compute/v1/zone_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const DiskPlacementGroupServiceDef: SdkServiceDefinition<
    typeof DiskPlacementGroupServiceService
> = {
    ...DiskPlacementGroupServiceService,
    __endpointId: 'compute',
};

export function DiskPlacementGroupService(
    session?: Session
): Client<typeof DiskPlacementGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DiskPlacementGroupServiceDef);
}

export const DiskServiceDef: SdkServiceDefinition<typeof DiskServiceService> = {
    ...DiskServiceService,
    __endpointId: 'compute',
};

export function DiskService(
    session?: Session
): Client<typeof DiskServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DiskServiceDef);
}

export const DiskTypeServiceDef: SdkServiceDefinition<
    typeof DiskTypeServiceService
> = {
    ...DiskTypeServiceService,
    __endpointId: 'compute',
};

export function DiskTypeService(
    session?: Session
): Client<typeof DiskTypeServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DiskTypeServiceDef);
}

export const FilesystemServiceDef: SdkServiceDefinition<
    typeof FilesystemServiceService
> = {
    ...FilesystemServiceService,
    __endpointId: 'compute',
};

export function FilesystemService(
    session?: Session
): Client<typeof FilesystemServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FilesystemServiceDef);
}

export const HostGroupServiceDef: SdkServiceDefinition<
    typeof HostGroupServiceService
> = {
    ...HostGroupServiceService,
    __endpointId: 'compute',
};

export function HostGroupService(
    session?: Session
): Client<typeof HostGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(HostGroupServiceDef);
}

export const HostTypeServiceDef: SdkServiceDefinition<
    typeof HostTypeServiceService
> = {
    ...HostTypeServiceService,
    __endpointId: 'compute',
};

export function HostTypeService(
    session?: Session
): Client<typeof HostTypeServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(HostTypeServiceDef);
}

export const ImageServiceDef: SdkServiceDefinition<typeof ImageServiceService> =
    {
        ...ImageServiceService,
        __endpointId: 'compute',
    };

export function ImageService(
    session?: Session
): Client<typeof ImageServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ImageServiceDef);
}

export const InstanceServiceDef: SdkServiceDefinition<
    typeof InstanceServiceService
> = {
    ...InstanceServiceService,
    __endpointId: 'compute',
};

export function InstanceService(
    session?: Session
): Client<typeof InstanceServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(InstanceServiceDef);
}

export const PlacementGroupServiceDef: SdkServiceDefinition<
    typeof PlacementGroupServiceService
> = {
    ...PlacementGroupServiceService,
    __endpointId: 'compute',
};

export function PlacementGroupService(
    session?: Session
): Client<typeof PlacementGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(PlacementGroupServiceDef);
}

export const SnapshotServiceDef: SdkServiceDefinition<
    typeof SnapshotServiceService
> = {
    ...SnapshotServiceService,
    __endpointId: 'compute',
};

export function SnapshotService(
    session?: Session
): Client<typeof SnapshotServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SnapshotServiceDef);
}

export const ZoneServiceDef: SdkServiceDefinition<typeof ZoneServiceService> = {
    ...ZoneServiceService,
    __endpointId: 'compute',
};

export function ZoneService(
    session?: Session
): Client<typeof ZoneServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ZoneServiceDef);
}
