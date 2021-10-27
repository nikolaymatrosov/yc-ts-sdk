"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInstanceOperationsResponse = exports.ListInstanceOperationsRequest = exports.UpdateInstanceNetworkInterfaceMetadata = exports.UpdateInstanceNetworkInterfaceRequest = exports.RemoveInstanceOneToOneNatMetadata = exports.RemoveInstanceOneToOneNatRequest = exports.AddInstanceOneToOneNatMetadata = exports.AddInstanceOneToOneNatRequest = exports.DetachInstanceFilesystemMetadata = exports.DetachInstanceFilesystemRequest = exports.AttachInstanceFilesystemMetadata = exports.AttachInstanceFilesystemRequest = exports.DetachInstanceDiskMetadata = exports.DetachInstanceDiskRequest = exports.AttachInstanceDiskMetadata = exports.AttachInstanceDiskRequest = exports.RestartInstanceMetadata = exports.RestartInstanceRequest = exports.StartInstanceMetadata = exports.StartInstanceRequest = exports.StopInstanceMetadata = exports.StopInstanceRequest = exports.GetInstanceSerialPortOutputResponse = exports.GetInstanceSerialPortOutputRequest = exports.UpdateInstanceMetadataMetadata = exports.UpdateInstanceMetadataRequest_UpsertEntry = exports.UpdateInstanceMetadataRequest = exports.DeleteInstanceMetadata = exports.DeleteInstanceRequest = exports.UpdateInstanceMetadata = exports.UpdateInstanceRequest_MetadataEntry = exports.UpdateInstanceRequest_LabelsEntry = exports.UpdateInstanceRequest = exports.CreateInstanceMetadata = exports.CreateInstanceRequest_MetadataEntry = exports.CreateInstanceRequest_LabelsEntry = exports.CreateInstanceRequest = exports.ListInstancesResponse = exports.ListInstancesRequest = exports.GetInstanceRequest = exports.attachedFilesystemSpec_ModeToJSON = exports.attachedFilesystemSpec_ModeFromJSON = exports.AttachedFilesystemSpec_Mode = exports.attachedDiskSpec_ModeToJSON = exports.attachedDiskSpec_ModeFromJSON = exports.AttachedDiskSpec_Mode = exports.instanceViewToJSON = exports.instanceViewFromJSON = exports.InstanceView = exports.protobufPackage = void 0;
exports.InstanceServiceClient = exports.InstanceServiceService = exports.DnsRecordSpec = exports.OneToOneNatSpec = exports.PrimaryAddressSpec = exports.NetworkInterfaceSpec = exports.AttachedFilesystemSpec = exports.AttachedDiskSpec_DiskSpec = exports.AttachedDiskSpec = exports.ResourcesSpec = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
const instance_1 = require("../../../../yandex/cloud/compute/v1/instance");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var InstanceView;
(function (InstanceView) {
    /** BASIC - Doesn't include the metadata of the instance in the server response. */
    InstanceView[InstanceView["BASIC"] = 0] = "BASIC";
    /** FULL - Returns the metadata of the instance in the server response. */
    InstanceView[InstanceView["FULL"] = 1] = "FULL";
    InstanceView[InstanceView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceView = exports.InstanceView || (exports.InstanceView = {}));
function instanceViewFromJSON(object) {
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
exports.instanceViewFromJSON = instanceViewFromJSON;
function instanceViewToJSON(object) {
    switch (object) {
        case InstanceView.BASIC:
            return 'BASIC';
        case InstanceView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}
exports.instanceViewToJSON = instanceViewToJSON;
var AttachedDiskSpec_Mode;
(function (AttachedDiskSpec_Mode) {
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. Default value. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedDiskSpec_Mode = exports.AttachedDiskSpec_Mode || (exports.AttachedDiskSpec_Mode = {}));
function attachedDiskSpec_ModeFromJSON(object) {
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
exports.attachedDiskSpec_ModeFromJSON = attachedDiskSpec_ModeFromJSON;
function attachedDiskSpec_ModeToJSON(object) {
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
exports.attachedDiskSpec_ModeToJSON = attachedDiskSpec_ModeToJSON;
var AttachedFilesystemSpec_Mode;
(function (AttachedFilesystemSpec_Mode) {
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. Default value. */
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedFilesystemSpec_Mode = exports.AttachedFilesystemSpec_Mode || (exports.AttachedFilesystemSpec_Mode = {}));
function attachedFilesystemSpec_ModeFromJSON(object) {
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
exports.attachedFilesystemSpec_ModeFromJSON = attachedFilesystemSpec_ModeFromJSON;
function attachedFilesystemSpec_ModeToJSON(object) {
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
exports.attachedFilesystemSpec_ModeToJSON = attachedFilesystemSpec_ModeToJSON;
const baseGetInstanceRequest = { instanceId: '', view: 0 };
exports.GetInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetInstanceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetInstanceRequest };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = instanceViewFromJSON(object.view);
        }
        else {
            message.view = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.view !== undefined &&
            (obj.view = instanceViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetInstanceRequest };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        }
        else {
            message.view = 0;
        }
        return message;
    },
};
const baseListInstancesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListInstancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListInstancesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = { ...baseListInstancesRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListInstancesRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
const baseListInstancesResponse = { nextPageToken: '' };
exports.ListInstancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.instances) {
            instance_1.Instance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstancesResponse,
        };
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(instance_1.Instance.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseListInstancesResponse,
        };
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(instance_1.Instance.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) => e ? instance_1.Instance.toJSON(e) : undefined);
        }
        else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstancesResponse,
        };
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(instance_1.Instance.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseCreateInstanceRequest = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    platformId: '',
    hostname: '',
    serviceAccountId: '',
};
exports.CreateInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.CreateInstanceRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.CreateInstanceRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(66).fork()).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            exports.AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            exports.AttachedDiskSpec.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.filesystemSpecs) {
            exports.AttachedFilesystemSpec.encode(v, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            exports.NetworkInterfaceSpec.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.hostname !== '') {
            writer.uint32(98).string(message.hostname);
        }
        if (message.schedulingPolicy !== undefined) {
            instance_1.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            instance_1.NetworkSettings.encode(message.networkSettings, writer.uint32(122).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            instance_1.PlacementPolicy.encode(message.placementPolicy, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest,
        };
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
                    const entry4 = exports.CreateInstanceRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.CreateInstanceRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.bootDiskSpec = exports.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.secondaryDiskSpecs.push(exports.AttachedDiskSpec.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.filesystemSpecs.push(exports.AttachedFilesystemSpec.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.hostname = reader.string();
                    break;
                case 13:
                    message.schedulingPolicy = instance_1.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.networkSettings = instance_1.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.placementPolicy = instance_1.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseCreateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.filesystemSpecs = [];
        message.networkInterfaceSpecs = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        }
        else {
            message.platformId = '';
        }
        if (object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null) {
            message.resourcesSpec = exports.ResourcesSpec.fromJSON(object.resourcesSpec);
        }
        else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = exports.AttachedDiskSpec.fromJSON(object.bootDiskSpec);
        }
        else {
            message.bootDiskSpec = undefined;
        }
        if (object.secondaryDiskSpecs !== undefined &&
            object.secondaryDiskSpecs !== null) {
            for (const e of object.secondaryDiskSpecs) {
                message.secondaryDiskSpecs.push(exports.AttachedDiskSpec.fromJSON(e));
            }
        }
        if (object.filesystemSpecs !== undefined &&
            object.filesystemSpecs !== null) {
            for (const e of object.filesystemSpecs) {
                message.filesystemSpecs.push(exports.AttachedFilesystemSpec.fromJSON(e));
            }
        }
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.fromJSON(e));
            }
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = String(object.hostname);
        }
        else {
            message.hostname = '';
        }
        if (object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null) {
            message.schedulingPolicy = instance_1.SchedulingPolicy.fromJSON(object.schedulingPolicy);
        }
        else {
            message.schedulingPolicy = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.networkSettings !== undefined &&
            object.networkSettings !== null) {
            message.networkSettings = instance_1.NetworkSettings.fromJSON(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = instance_1.PlacementPolicy.fromJSON(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
                ? exports.ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? exports.AttachedDiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        if (message.secondaryDiskSpecs) {
            obj.secondaryDiskSpecs = message.secondaryDiskSpecs.map((e) => e ? exports.AttachedDiskSpec.toJSON(e) : undefined);
        }
        else {
            obj.secondaryDiskSpecs = [];
        }
        if (message.filesystemSpecs) {
            obj.filesystemSpecs = message.filesystemSpecs.map((e) => e ? exports.AttachedFilesystemSpec.toJSON(e) : undefined);
        }
        else {
            obj.filesystemSpecs = [];
        }
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? exports.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? instance_1.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? instance_1.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? instance_1.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.filesystemSpecs = [];
        message.networkInterfaceSpecs = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
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
        }
        else {
            message.zoneId = '';
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = object.platformId;
        }
        else {
            message.platformId = '';
        }
        if (object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null) {
            message.resourcesSpec = exports.ResourcesSpec.fromPartial(object.resourcesSpec);
        }
        else {
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
            message.bootDiskSpec = exports.AttachedDiskSpec.fromPartial(object.bootDiskSpec);
        }
        else {
            message.bootDiskSpec = undefined;
        }
        if (object.secondaryDiskSpecs !== undefined &&
            object.secondaryDiskSpecs !== null) {
            for (const e of object.secondaryDiskSpecs) {
                message.secondaryDiskSpecs.push(exports.AttachedDiskSpec.fromPartial(e));
            }
        }
        if (object.filesystemSpecs !== undefined &&
            object.filesystemSpecs !== null) {
            for (const e of object.filesystemSpecs) {
                message.filesystemSpecs.push(exports.AttachedFilesystemSpec.fromPartial(e));
            }
        }
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.fromPartial(e));
            }
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = object.hostname;
        }
        else {
            message.hostname = '';
        }
        if (object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null) {
            message.schedulingPolicy = instance_1.SchedulingPolicy.fromPartial(object.schedulingPolicy);
        }
        else {
            message.schedulingPolicy = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.networkSettings !== undefined &&
            object.networkSettings !== null) {
            message.networkSettings = instance_1.NetworkSettings.fromPartial(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = instance_1.PlacementPolicy.fromPartial(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};
const baseCreateInstanceRequest_LabelsEntry = { key: '', value: '' };
exports.CreateInstanceRequest_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseCreateInstanceRequest_MetadataEntry = { key: '', value: '' };
exports.CreateInstanceRequest_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest_MetadataEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseCreateInstanceRequest_MetadataEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceRequest_MetadataEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseCreateInstanceMetadata = { instanceId: '' };
exports.CreateInstanceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseCreateInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseUpdateInstanceRequest = {
    instanceId: '',
    name: '',
    description: '',
    platformId: '',
    serviceAccountId: '',
};
exports.UpdateInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateInstanceRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.UpdateInstanceRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(66).fork()).ldelim();
        });
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            instance_1.NetworkSettings.encode(message.networkSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            instance_1.PlacementPolicy.encode(message.placementPolicy, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateInstanceRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.UpdateInstanceRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.networkSettings = instance_1.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.placementPolicy = instance_1.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        }
        else {
            message.platformId = '';
        }
        if (object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null) {
            message.resourcesSpec = exports.ResourcesSpec.fromJSON(object.resourcesSpec);
        }
        else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.networkSettings !== undefined &&
            object.networkSettings !== null) {
            message.networkSettings = instance_1.NetworkSettings.fromJSON(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = instance_1.PlacementPolicy.fromJSON(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
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
                ? exports.ResourcesSpec.toJSON(message.resourcesSpec)
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
                ? instance_1.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? instance_1.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
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
        }
        else {
            message.platformId = '';
        }
        if (object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null) {
            message.resourcesSpec = exports.ResourcesSpec.fromPartial(object.resourcesSpec);
        }
        else {
            message.resourcesSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.networkSettings !== undefined &&
            object.networkSettings !== null) {
            message.networkSettings = instance_1.NetworkSettings.fromPartial(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = instance_1.PlacementPolicy.fromPartial(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};
const baseUpdateInstanceRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateInstanceRequest_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseUpdateInstanceRequest_MetadataEntry = { key: '', value: '' };
exports.UpdateInstanceRequest_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest_MetadataEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceRequest_MetadataEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceRequest_MetadataEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseUpdateInstanceMetadata = { instanceId: '' };
exports.UpdateInstanceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseDeleteInstanceRequest = { instanceId: '' };
exports.DeleteInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDeleteInstanceRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteInstanceRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseDeleteInstanceMetadata = { instanceId: '' };
exports.DeleteInstanceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDeleteInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseUpdateInstanceMetadataRequest = {
    instanceId: '',
    delete: '',
};
exports.UpdateInstanceMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        for (const v of message.delete) {
            writer.uint32(18).string(v);
        }
        Object.entries(message.upsert).forEach(([key, value]) => {
            exports.UpdateInstanceMetadataRequest_UpsertEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadataRequest,
        };
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
                    const entry3 = exports.UpdateInstanceMetadataRequest_UpsertEntry.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceMetadataRequest,
        };
        message.delete = [];
        message.upsert = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
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
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        if (message.delete) {
            obj.delete = message.delete.map((e) => e);
        }
        else {
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
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceMetadataRequest,
        };
        message.delete = [];
        message.upsert = {};
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
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
const baseUpdateInstanceMetadataRequest_UpsertEntry = {
    key: '',
    value: '',
};
exports.UpdateInstanceMetadataRequest_UpsertEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadataRequest_UpsertEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceMetadataRequest_UpsertEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceMetadataRequest_UpsertEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseUpdateInstanceMetadataMetadata = { instanceId: '' };
exports.UpdateInstanceMetadataMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceMetadataMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceMetadataMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceMetadataMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseGetInstanceSerialPortOutputRequest = {
    instanceId: '',
    port: 0,
};
exports.GetInstanceSerialPortOutputRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetInstanceSerialPortOutputRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGetInstanceSerialPortOutputRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetInstanceSerialPortOutputRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        return message;
    },
};
const baseGetInstanceSerialPortOutputResponse = { contents: '' };
exports.GetInstanceSerialPortOutputResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contents !== '') {
            writer.uint32(10).string(message.contents);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetInstanceSerialPortOutputResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseGetInstanceSerialPortOutputResponse,
        };
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = String(object.contents);
        }
        else {
            message.contents = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contents !== undefined && (obj.contents = message.contents);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetInstanceSerialPortOutputResponse,
        };
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        }
        else {
            message.contents = '';
        }
        return message;
    },
};
const baseStopInstanceRequest = { instanceId: '' };
exports.StopInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstanceRequest };
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
    fromJSON(object) {
        const message = { ...baseStopInstanceRequest };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopInstanceRequest };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseStopInstanceMetadata = { instanceId: '' };
exports.StopInstanceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstanceMetadata };
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
    fromJSON(object) {
        const message = { ...baseStopInstanceMetadata };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopInstanceMetadata };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseStartInstanceRequest = { instanceId: '' };
exports.StartInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartInstanceRequest };
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
    fromJSON(object) {
        const message = { ...baseStartInstanceRequest };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStartInstanceRequest };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseStartInstanceMetadata = { instanceId: '' };
exports.StartInstanceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartInstanceMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseStartInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStartInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseRestartInstanceRequest = { instanceId: '' };
exports.RestartInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestartInstanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseRestartInstanceRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestartInstanceRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseRestartInstanceMetadata = { instanceId: '' };
exports.RestartInstanceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestartInstanceMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseRestartInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestartInstanceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseAttachInstanceDiskRequest = { instanceId: '' };
exports.AttachInstanceDiskRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedDiskSpec !== undefined) {
            exports.AttachedDiskSpec.encode(message.attachedDiskSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceDiskRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.attachedDiskSpec = exports.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseAttachInstanceDiskRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.attachedDiskSpec !== undefined &&
            object.attachedDiskSpec !== null) {
            message.attachedDiskSpec = exports.AttachedDiskSpec.fromJSON(object.attachedDiskSpec);
        }
        else {
            message.attachedDiskSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.attachedDiskSpec !== undefined &&
            (obj.attachedDiskSpec = message.attachedDiskSpec
                ? exports.AttachedDiskSpec.toJSON(message.attachedDiskSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachInstanceDiskRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.attachedDiskSpec !== undefined &&
            object.attachedDiskSpec !== null) {
            message.attachedDiskSpec = exports.AttachedDiskSpec.fromPartial(object.attachedDiskSpec);
        }
        else {
            message.attachedDiskSpec = undefined;
        }
        return message;
    },
};
const baseAttachInstanceDiskMetadata = { instanceId: '', diskId: '' };
exports.AttachInstanceDiskMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceDiskMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseAttachInstanceDiskMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachInstanceDiskMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseDetachInstanceDiskRequest = { instanceId: '' };
exports.DetachInstanceDiskRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceDiskRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDetachInstanceDiskRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        }
        else {
            message.deviceName = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetachInstanceDiskRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        }
        else {
            message.deviceName = undefined;
        }
        return message;
    },
};
const baseDetachInstanceDiskMetadata = { instanceId: '', diskId: '' };
exports.DetachInstanceDiskMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceDiskMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDetachInstanceDiskMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetachInstanceDiskMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseAttachInstanceFilesystemRequest = { instanceId: '' };
exports.AttachInstanceFilesystemRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedFilesystemSpec !== undefined) {
            exports.AttachedFilesystemSpec.encode(message.attachedFilesystemSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceFilesystemRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.attachedFilesystemSpec =
                        exports.AttachedFilesystemSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseAttachInstanceFilesystemRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.attachedFilesystemSpec !== undefined &&
            object.attachedFilesystemSpec !== null) {
            message.attachedFilesystemSpec = exports.AttachedFilesystemSpec.fromJSON(object.attachedFilesystemSpec);
        }
        else {
            message.attachedFilesystemSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.attachedFilesystemSpec !== undefined &&
            (obj.attachedFilesystemSpec = message.attachedFilesystemSpec
                ? exports.AttachedFilesystemSpec.toJSON(message.attachedFilesystemSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachInstanceFilesystemRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.attachedFilesystemSpec !== undefined &&
            object.attachedFilesystemSpec !== null) {
            message.attachedFilesystemSpec = exports.AttachedFilesystemSpec.fromPartial(object.attachedFilesystemSpec);
        }
        else {
            message.attachedFilesystemSpec = undefined;
        }
        return message;
    },
};
const baseAttachInstanceFilesystemMetadata = {
    instanceId: '',
    filesystemId: '',
};
exports.AttachInstanceFilesystemMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== '') {
            writer.uint32(18).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachInstanceFilesystemMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseAttachInstanceFilesystemMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        }
        else {
            message.filesystemId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachInstanceFilesystemMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        }
        else {
            message.filesystemId = '';
        }
        return message;
    },
};
const baseDetachInstanceFilesystemRequest = { instanceId: '' };
exports.DetachInstanceFilesystemRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceFilesystemRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDetachInstanceFilesystemRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        }
        else {
            message.filesystemId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        }
        else {
            message.deviceName = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetachInstanceFilesystemRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        }
        else {
            message.filesystemId = undefined;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        }
        else {
            message.deviceName = undefined;
        }
        return message;
    },
};
const baseDetachInstanceFilesystemMetadata = {
    instanceId: '',
    filesystemId: '',
};
exports.DetachInstanceFilesystemMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== '') {
            writer.uint32(18).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetachInstanceFilesystemMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseDetachInstanceFilesystemMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        }
        else {
            message.filesystemId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetachInstanceFilesystemMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        }
        else {
            message.filesystemId = '';
        }
        return message;
    },
};
const baseAddInstanceOneToOneNatRequest = {
    instanceId: '',
    networkInterfaceIndex: '',
    internalAddress: '',
};
exports.AddInstanceOneToOneNatRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddInstanceOneToOneNatRequest,
        };
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
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseAddInstanceOneToOneNatRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = String(object.networkInterfaceIndex);
        }
        else {
            message.networkInterfaceIndex = '';
        }
        if (object.internalAddress !== undefined &&
            object.internalAddress !== null) {
            message.internalAddress = String(object.internalAddress);
        }
        else {
            message.internalAddress = '';
        }
        if (object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null) {
            message.oneToOneNatSpec = exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.internalAddress !== undefined &&
            (obj.internalAddress = message.internalAddress);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? exports.OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddInstanceOneToOneNatRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        }
        else {
            message.networkInterfaceIndex = '';
        }
        if (object.internalAddress !== undefined &&
            object.internalAddress !== null) {
            message.internalAddress = object.internalAddress;
        }
        else {
            message.internalAddress = '';
        }
        if (object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null) {
            message.oneToOneNatSpec = exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
};
const baseAddInstanceOneToOneNatMetadata = { instanceId: '' };
exports.AddInstanceOneToOneNatMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddInstanceOneToOneNatMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseAddInstanceOneToOneNatMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddInstanceOneToOneNatMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseRemoveInstanceOneToOneNatRequest = {
    instanceId: '',
    networkInterfaceIndex: '',
    internalAddress: '',
};
exports.RemoveInstanceOneToOneNatRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveInstanceOneToOneNatRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseRemoveInstanceOneToOneNatRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = String(object.networkInterfaceIndex);
        }
        else {
            message.networkInterfaceIndex = '';
        }
        if (object.internalAddress !== undefined &&
            object.internalAddress !== null) {
            message.internalAddress = String(object.internalAddress);
        }
        else {
            message.internalAddress = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.internalAddress !== undefined &&
            (obj.internalAddress = message.internalAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveInstanceOneToOneNatRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        }
        else {
            message.networkInterfaceIndex = '';
        }
        if (object.internalAddress !== undefined &&
            object.internalAddress !== null) {
            message.internalAddress = object.internalAddress;
        }
        else {
            message.internalAddress = '';
        }
        return message;
    },
};
const baseRemoveInstanceOneToOneNatMetadata = { instanceId: '' };
exports.RemoveInstanceOneToOneNatMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveInstanceOneToOneNatMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseRemoveInstanceOneToOneNatMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveInstanceOneToOneNatMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        return message;
    },
};
const baseUpdateInstanceNetworkInterfaceRequest = {
    instanceId: '',
    networkInterfaceIndex: '',
    subnetId: '',
    securityGroupIds: '',
};
exports.UpdateInstanceNetworkInterfaceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceNetworkInterfaceRequest,
        };
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.primaryV4AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.primaryV6AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceRequest,
        };
        message.securityGroupIds = [];
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = String(object.networkInterfaceIndex);
        }
        else {
            message.networkInterfaceIndex = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null) {
            message.primaryV4AddressSpec = exports.PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = exports.PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec);
        }
        else {
            message.primaryV6AddressSpec = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceRequest,
        };
        message.securityGroupIds = [];
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        }
        else {
            message.networkInterfaceIndex = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null) {
            message.primaryV4AddressSpec = exports.PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = exports.PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec);
        }
        else {
            message.primaryV6AddressSpec = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};
const baseUpdateInstanceNetworkInterfaceMetadata = {
    instanceId: '',
    networkInterfaceIndex: '',
};
exports.UpdateInstanceNetworkInterfaceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceNetworkInterfaceMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = String(object.networkInterfaceIndex);
        }
        else {
            message.networkInterfaceIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateInstanceNetworkInterfaceMetadata,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.networkInterfaceIndex !== undefined &&
            object.networkInterfaceIndex !== null) {
            message.networkInterfaceIndex = object.networkInterfaceIndex;
        }
        else {
            message.networkInterfaceIndex = '';
        }
        return message;
    },
};
const baseListInstanceOperationsRequest = {
    instanceId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListInstanceOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = {
            ...baseListInstanceOperationsRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceOperationsRequest,
        };
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListInstanceOperationsResponse = { nextPageToken: '' };
exports.ListInstanceOperationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseListInstanceOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListInstanceOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseResourcesSpec = {
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.ResourcesSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcesSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64());
                    break;
                case 4:
                    message.gpus = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResourcesSpec };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        }
        else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = Number(object.cores);
        }
        else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = Number(object.coreFraction);
        }
        else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = Number(object.gpus);
        }
        else {
            message.gpus = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = message.memory);
        message.cores !== undefined && (obj.cores = message.cores);
        message.coreFraction !== undefined &&
            (obj.coreFraction = message.coreFraction);
        message.gpus !== undefined && (obj.gpus = message.gpus);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResourcesSpec };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        }
        else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = object.cores;
        }
        else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = object.coreFraction;
        }
        else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = object.gpus;
        }
        else {
            message.gpus = 0;
        }
        return message;
    },
};
const baseAttachedDiskSpec = {
    mode: 0,
    deviceName: '',
    autoDelete: false,
};
exports.AttachedDiskSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.AttachedDiskSpec_DiskSpec.encode(message.diskSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.diskId !== undefined) {
            writer.uint32(42).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedDiskSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.autoDelete = reader.bool();
                    break;
                case 4:
                    message.diskSpec = exports.AttachedDiskSpec_DiskSpec.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = { ...baseAttachedDiskSpec };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedDiskSpec_ModeFromJSON(object.mode);
        }
        else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        }
        else {
            message.deviceName = '';
        }
        if (object.autoDelete !== undefined && object.autoDelete !== null) {
            message.autoDelete = Boolean(object.autoDelete);
        }
        else {
            message.autoDelete = false;
        }
        if (object.diskSpec !== undefined && object.diskSpec !== null) {
            message.diskSpec = exports.AttachedDiskSpec_DiskSpec.fromJSON(object.diskSpec);
        }
        else {
            message.diskSpec = undefined;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.autoDelete !== undefined &&
            (obj.autoDelete = message.autoDelete);
        message.diskSpec !== undefined &&
            (obj.diskSpec = message.diskSpec
                ? exports.AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
                : undefined);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttachedDiskSpec };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        }
        else {
            message.deviceName = '';
        }
        if (object.autoDelete !== undefined && object.autoDelete !== null) {
            message.autoDelete = object.autoDelete;
        }
        else {
            message.autoDelete = false;
        }
        if (object.diskSpec !== undefined && object.diskSpec !== null) {
            message.diskSpec = exports.AttachedDiskSpec_DiskSpec.fromPartial(object.diskSpec);
        }
        else {
            message.diskSpec = undefined;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = undefined;
        }
        return message;
    },
};
const baseAttachedDiskSpec_DiskSpec = {
    name: '',
    description: '',
    typeId: '',
    size: 0,
    blockSize: 0,
};
exports.AttachedDiskSpec_DiskSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            disk_1.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.imageId !== undefined) {
            writer.uint32(42).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(50).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        };
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
                    message.size = longToNumber(reader.int64());
                    break;
                case 8:
                    message.blockSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        }
        else {
            message.typeId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = Number(object.blockSize);
        }
        else {
            message.blockSize = 0;
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.size !== undefined && (obj.size = message.size);
        message.blockSize !== undefined && (obj.blockSize = message.blockSize);
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? disk_1.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        }
        else {
            message.typeId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = object.blockSize;
        }
        else {
            message.blockSize = 0;
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = undefined;
        }
        return message;
    },
};
const baseAttachedFilesystemSpec = {
    mode: 0,
    deviceName: '',
    filesystemId: '',
};
exports.AttachedFilesystemSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAttachedFilesystemSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
    fromJSON(object) {
        const message = {
            ...baseAttachedFilesystemSpec,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedFilesystemSpec_ModeFromJSON(object.mode);
        }
        else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        }
        else {
            message.deviceName = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        }
        else {
            message.filesystemId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedFilesystemSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachedFilesystemSpec,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        }
        else {
            message.deviceName = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        }
        else {
            message.filesystemId = '';
        }
        return message;
    },
};
const baseNetworkInterfaceSpec = { subnetId: '', securityGroupIds: '' };
exports.NetworkInterfaceSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec };
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.primaryV4AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.primaryV6AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = { ...baseNetworkInterfaceSpec };
        message.securityGroupIds = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null) {
            message.primaryV4AddressSpec = exports.PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = exports.PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec);
        }
        else {
            message.primaryV6AddressSpec = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNetworkInterfaceSpec };
        message.securityGroupIds = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null) {
            message.primaryV4AddressSpec = exports.PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = exports.PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec);
        }
        else {
            message.primaryV6AddressSpec = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};
const basePrimaryAddressSpec = { address: '' };
exports.PrimaryAddressSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrimaryAddressSpec };
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePrimaryAddressSpec };
        message.dnsRecordSpecs = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null) {
            message.oneToOneNatSpec = exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        if (object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(exports.DnsRecordSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? exports.OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? exports.DnsRecordSpec.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePrimaryAddressSpec };
        message.dnsRecordSpecs = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null) {
            message.oneToOneNatSpec = exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        if (object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(exports.DnsRecordSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseOneToOneNatSpec = { ipVersion: 0, address: '' };
exports.OneToOneNatSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNatSpec };
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOneToOneNatSpec };
        message.dnsRecordSpecs = [];
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = (0, instance_1.ipVersionFromJSON)(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(exports.DnsRecordSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = (0, instance_1.ipVersionToJSON)(message.ipVersion));
        message.address !== undefined && (obj.address = message.address);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? exports.DnsRecordSpec.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOneToOneNatSpec };
        message.dnsRecordSpecs = [];
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(exports.DnsRecordSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDnsRecordSpec = {
    fqdn: '',
    dnsZoneId: '',
    ttl: 0,
    ptr: false,
};
exports.DnsRecordSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsRecordSpec };
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
                    message.ttl = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = { ...baseDnsRecordSpec };
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        }
        else {
            message.fqdn = '';
        }
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = Number(object.ttl);
        }
        else {
            message.ttl = 0;
        }
        if (object.ptr !== undefined && object.ptr !== null) {
            message.ptr = Boolean(object.ptr);
        }
        else {
            message.ptr = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = message.ttl);
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDnsRecordSpec };
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        }
        else {
            message.fqdn = '';
        }
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = object.ttl;
        }
        else {
            message.ttl = 0;
        }
        if (object.ptr !== undefined && object.ptr !== null) {
            message.ptr = object.ptr;
        }
        else {
            message.ptr = false;
        }
        return message;
    },
};
/** A set of methods for managing Instance resources. */
exports.InstanceServiceService = {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.InstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(instance_1.Instance.encode(value).finish()),
        responseDeserialize: (value) => instance_1.Instance.decode(value),
    },
    /** Retrieves the list of Instance resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.InstanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstancesResponse.decode(value),
    },
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.InstanceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified instance. */
    update: {
        path: '/yandex.cloud.compute.v1.InstanceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified instance. */
    delete: {
        path: '/yandex.cloud.compute.v1.InstanceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the metadata of the specified instance. */
    updateMetadata: {
        path: '/yandex.cloud.compute.v1.InstanceService/UpdateMetadata',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceMetadataRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceMetadataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput: {
        path: '/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetInstanceSerialPortOutputRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetInstanceSerialPortOutputRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetInstanceSerialPortOutputResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetInstanceSerialPortOutputResponse.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.StopInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the stopped instance. */
    start: {
        path: '/yandex.cloud.compute.v1.InstanceService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Restarts the running instance. */
    restart: {
        path: '/yandex.cloud.compute.v1.InstanceService/Restart',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestartInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Attaches the disk to the instance. */
    attachDisk: {
        path: '/yandex.cloud.compute.v1.InstanceService/AttachDisk',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AttachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AttachInstanceDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Detaches the disk from the instance. */
    detachDisk: {
        path: '/yandex.cloud.compute.v1.InstanceService/DetachDisk',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetachInstanceDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.AttachInstanceFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AttachInstanceFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.DetachInstanceFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetachInstanceFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat: {
        path: '/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat: {
        path: '/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified instance network interface. */
    updateNetworkInterface: {
        path: '/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceNetworkInterfaceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceNetworkInterfaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified instance. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.InstanceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstanceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstanceOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstanceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstanceOperationsResponse.decode(value),
    },
};
exports.InstanceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.InstanceServiceService, 'yandex.cloud.compute.v1.InstanceService');
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
