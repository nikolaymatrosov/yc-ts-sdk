import { DiskPlacementGroupServiceService } from '../../../generated/yandex/cloud/compute/v1/disk_placement_group_service';
import { DiskServiceService } from '../../../generated/yandex/cloud/compute/v1/disk_service';
import { DiskTypeServiceService } from '../../../generated/yandex/cloud/compute/v1/disk_type_service';
import { HostGroupServiceService } from '../../../generated/yandex/cloud/compute/v1/host_group_service';
import { HostTypeServiceService } from '../../../generated/yandex/cloud/compute/v1/host_type_service';
import { ImageServiceService } from '../../../generated/yandex/cloud/compute/v1/image_service';
import { InstanceServiceService } from '../../../generated/yandex/cloud/compute/v1/instance_service';
import { PlacementGroupServiceService } from '../../../generated/yandex/cloud/compute/v1/placement_group_service';
import { SnapshotServiceService } from '../../../generated/yandex/cloud/compute/v1/snapshot_service';
import { ZoneServiceService } from '../../../generated/yandex/cloud/compute/v1/zone_service';
import { Session } from '../../../src/index';
export const DiskPlacementGroupServiceDef = {
    ...DiskPlacementGroupServiceService,
    __endpointId: 'compute',
};
export function DiskPlacementGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DiskPlacementGroupServiceDef);
}
export const DiskServiceDef = {
    ...DiskServiceService,
    __endpointId: 'compute',
};
export function DiskService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DiskServiceDef);
}
export const DiskTypeServiceDef = {
    ...DiskTypeServiceService,
    __endpointId: 'compute',
};
export function DiskTypeService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DiskTypeServiceDef);
}
export const HostGroupServiceDef = {
    ...HostGroupServiceService,
    __endpointId: 'compute',
};
export function HostGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(HostGroupServiceDef);
}
export const HostTypeServiceDef = {
    ...HostTypeServiceService,
    __endpointId: 'compute',
};
export function HostTypeService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(HostTypeServiceDef);
}
export const ImageServiceDef = {
    ...ImageServiceService,
    __endpointId: 'compute',
};
export function ImageService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ImageServiceDef);
}
export const InstanceServiceDef = {
    ...InstanceServiceService,
    __endpointId: 'compute',
};
export function InstanceService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(InstanceServiceDef);
}
export const PlacementGroupServiceDef = {
    ...PlacementGroupServiceService,
    __endpointId: 'compute',
};
export function PlacementGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(PlacementGroupServiceDef);
}
export const SnapshotServiceDef = {
    ...SnapshotServiceService,
    __endpointId: 'compute',
};
export function SnapshotService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SnapshotServiceDef);
}
export const ZoneServiceDef = {
    ...ZoneServiceService,
    __endpointId: 'compute',
};
export function ZoneService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ZoneServiceDef);
}
