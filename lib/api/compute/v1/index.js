"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneService = exports.ZoneServiceDef = exports.SnapshotService = exports.SnapshotServiceDef = exports.PlacementGroupService = exports.PlacementGroupServiceDef = exports.InstanceService = exports.InstanceServiceDef = exports.ImageService = exports.ImageServiceDef = exports.HostTypeService = exports.HostTypeServiceDef = exports.HostGroupService = exports.HostGroupServiceDef = exports.FilesystemService = exports.FilesystemServiceDef = exports.DiskTypeService = exports.DiskTypeServiceDef = exports.DiskService = exports.DiskServiceDef = exports.DiskPlacementGroupService = exports.DiskPlacementGroupServiceDef = void 0;
const disk_placement_group_service_1 = require("../../../generated/yandex/cloud/compute/v1/disk_placement_group_service");
const disk_service_1 = require("../../../generated/yandex/cloud/compute/v1/disk_service");
const disk_type_service_1 = require("../../../generated/yandex/cloud/compute/v1/disk_type_service");
const filesystem_service_1 = require("../../../generated/yandex/cloud/compute/v1/filesystem_service");
const host_group_service_1 = require("../../../generated/yandex/cloud/compute/v1/host_group_service");
const host_type_service_1 = require("../../../generated/yandex/cloud/compute/v1/host_type_service");
const image_service_1 = require("../../../generated/yandex/cloud/compute/v1/image_service");
const instance_service_1 = require("../../../generated/yandex/cloud/compute/v1/instance_service");
const placement_group_service_1 = require("../../../generated/yandex/cloud/compute/v1/placement_group_service");
const snapshot_service_1 = require("../../../generated/yandex/cloud/compute/v1/snapshot_service");
const zone_service_1 = require("../../../generated/yandex/cloud/compute/v1/zone_service");
const index_1 = require("../../../src/index");
exports.DiskPlacementGroupServiceDef = {
    ...disk_placement_group_service_1.DiskPlacementGroupServiceService,
    __endpointId: 'compute',
};
function DiskPlacementGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DiskPlacementGroupServiceDef);
}
exports.DiskPlacementGroupService = DiskPlacementGroupService;
exports.DiskServiceDef = {
    ...disk_service_1.DiskServiceService,
    __endpointId: 'compute',
};
function DiskService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DiskServiceDef);
}
exports.DiskService = DiskService;
exports.DiskTypeServiceDef = {
    ...disk_type_service_1.DiskTypeServiceService,
    __endpointId: 'compute',
};
function DiskTypeService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DiskTypeServiceDef);
}
exports.DiskTypeService = DiskTypeService;
exports.FilesystemServiceDef = {
    ...filesystem_service_1.FilesystemServiceService,
    __endpointId: 'compute',
};
function FilesystemService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.FilesystemServiceDef);
}
exports.FilesystemService = FilesystemService;
exports.HostGroupServiceDef = {
    ...host_group_service_1.HostGroupServiceService,
    __endpointId: 'compute',
};
function HostGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.HostGroupServiceDef);
}
exports.HostGroupService = HostGroupService;
exports.HostTypeServiceDef = {
    ...host_type_service_1.HostTypeServiceService,
    __endpointId: 'compute',
};
function HostTypeService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.HostTypeServiceDef);
}
exports.HostTypeService = HostTypeService;
exports.ImageServiceDef = {
    ...image_service_1.ImageServiceService,
    __endpointId: 'compute',
};
function ImageService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ImageServiceDef);
}
exports.ImageService = ImageService;
exports.InstanceServiceDef = {
    ...instance_service_1.InstanceServiceService,
    __endpointId: 'compute',
};
function InstanceService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.InstanceServiceDef);
}
exports.InstanceService = InstanceService;
exports.PlacementGroupServiceDef = {
    ...placement_group_service_1.PlacementGroupServiceService,
    __endpointId: 'compute',
};
function PlacementGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.PlacementGroupServiceDef);
}
exports.PlacementGroupService = PlacementGroupService;
exports.SnapshotServiceDef = {
    ...snapshot_service_1.SnapshotServiceService,
    __endpointId: 'compute',
};
function SnapshotService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SnapshotServiceDef);
}
exports.SnapshotService = SnapshotService;
exports.ZoneServiceDef = {
    ...zone_service_1.ZoneServiceService,
    __endpointId: 'compute',
};
function ZoneService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ZoneServiceDef);
}
exports.ZoneService = ZoneService;
