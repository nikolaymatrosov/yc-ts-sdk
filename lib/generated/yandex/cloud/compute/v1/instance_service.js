/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { DiskPlacementPolicy } from '../../../../yandex/cloud/compute/v1/disk';
import { Instance, SchedulingPolicy, NetworkSettings, PlacementPolicy, ipVersionFromJSON, ipVersionToJSON, } from '../../../../yandex/cloud/compute/v1/instance';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.compute.v1';
export var InstanceView;
(function (InstanceView) {
    /** BASIC - Doesn't include the metadata of the instance in the server response. */
    InstanceView[InstanceView["BASIC"] = 0] = "BASIC";
    /** FULL - Returns the metadata of the instance in the server response. */
    InstanceView[InstanceView["FULL"] = 1] = "FULL";
    InstanceView[InstanceView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceView || (InstanceView = {}));
export function instanceViewFromJSON(object) {
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
export function instanceViewToJSON(object) {
    switch (object) {
        case InstanceView.BASIC:
            return 'BASIC';
        case InstanceView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}
export var AttachedDiskSpec_Mode;
(function (AttachedDiskSpec_Mode) {
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. Default value. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedDiskSpec_Mode || (AttachedDiskSpec_Mode = {}));
export function attachedDiskSpec_ModeFromJSON(object) {
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
export function attachedDiskSpec_ModeToJSON(object) {
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
const baseGetInstanceRequest = { instanceId: '', view: 0 };
export const GetInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListInstancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListInstancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instances) {
            Instance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstancesResponse,
        };
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(Instance.decode(reader, reader.uint32()));
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
                message.instances.push(Instance.fromJSON(e));
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
            obj.instances = message.instances.map((e) => e ? Instance.toJSON(e) : undefined);
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
                message.instances.push(Instance.fromPartial(e));
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
export const CreateInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            CreateInstanceRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            CreateInstanceRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(66).fork()).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            AttachedDiskSpec.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            NetworkInterfaceSpec.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.hostname !== '') {
            writer.uint32(98).string(message.hostname);
        }
        if (message.schedulingPolicy !== undefined) {
            SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(message.networkSettings, writer.uint32(122).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(message.placementPolicy, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
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
                    const entry4 = CreateInstanceRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = CreateInstanceRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.bootDiskSpec = AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.secondaryDiskSpecs.push(AttachedDiskSpec.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.networkInterfaceSpecs.push(NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.hostname = reader.string();
                    break;
                case 13:
                    message.schedulingPolicy = SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.networkSettings = NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.placementPolicy = PlacementPolicy.decode(reader, reader.uint32());
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
            message.resourcesSpec = ResourcesSpec.fromJSON(object.resourcesSpec);
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
            message.bootDiskSpec = AttachedDiskSpec.fromJSON(object.bootDiskSpec);
        }
        else {
            message.bootDiskSpec = undefined;
        }
        if (object.secondaryDiskSpecs !== undefined &&
            object.secondaryDiskSpecs !== null) {
            for (const e of object.secondaryDiskSpecs) {
                message.secondaryDiskSpecs.push(AttachedDiskSpec.fromJSON(e));
            }
        }
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(NetworkInterfaceSpec.fromJSON(e));
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
            message.schedulingPolicy = SchedulingPolicy.fromJSON(object.schedulingPolicy);
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
            message.networkSettings = NetworkSettings.fromJSON(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = PlacementPolicy.fromJSON(object.placementPolicy);
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
            obj.secondaryDiskSpecs = message.secondaryDiskSpecs.map((e) => e ? AttachedDiskSpec.toJSON(e) : undefined);
        }
        else {
            obj.secondaryDiskSpecs = [];
        }
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
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
    fromPartial(object) {
        const message = {
            ...baseCreateInstanceRequest,
        };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
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
            message.resourcesSpec = ResourcesSpec.fromPartial(object.resourcesSpec);
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
            message.bootDiskSpec = AttachedDiskSpec.fromPartial(object.bootDiskSpec);
        }
        else {
            message.bootDiskSpec = undefined;
        }
        if (object.secondaryDiskSpecs !== undefined &&
            object.secondaryDiskSpecs !== null) {
            for (const e of object.secondaryDiskSpecs) {
                message.secondaryDiskSpecs.push(AttachedDiskSpec.fromPartial(e));
            }
        }
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(NetworkInterfaceSpec.fromPartial(e));
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
            message.schedulingPolicy = SchedulingPolicy.fromPartial(object.schedulingPolicy);
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
            message.networkSettings = NetworkSettings.fromPartial(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = PlacementPolicy.fromPartial(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};
const baseCreateInstanceRequest_LabelsEntry = { key: '', value: '' };
export const CreateInstanceRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const CreateInstanceRequest_MetadataEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const CreateInstanceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateInstanceRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            UpdateInstanceRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(66).fork()).ldelim();
        });
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(message.networkSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(message.placementPolicy, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateInstanceRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = UpdateInstanceRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.networkSettings = NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.placementPolicy = PlacementPolicy.decode(reader, reader.uint32());
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
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
            message.resourcesSpec = ResourcesSpec.fromJSON(object.resourcesSpec);
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
            message.networkSettings = NetworkSettings.fromJSON(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = PlacementPolicy.fromJSON(object.placementPolicy);
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
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
            message.resourcesSpec = ResourcesSpec.fromPartial(object.resourcesSpec);
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
            message.networkSettings = NetworkSettings.fromPartial(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = PlacementPolicy.fromPartial(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};
const baseUpdateInstanceRequest_LabelsEntry = { key: '', value: '' };
export const UpdateInstanceRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateInstanceRequest_MetadataEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateInstanceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteInstanceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateInstanceMetadataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        for (const v of message.delete) {
            writer.uint32(18).string(v);
        }
        Object.entries(message.upsert).forEach(([key, value]) => {
            UpdateInstanceMetadataRequest_UpsertEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    const entry3 = UpdateInstanceMetadataRequest_UpsertEntry.decode(reader, reader.uint32());
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
export const UpdateInstanceMetadataRequest_UpsertEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateInstanceMetadataMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const GetInstanceSerialPortOutputRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const GetInstanceSerialPortOutputResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contents !== '') {
            writer.uint32(10).string(message.contents);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const StopInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const StopInstanceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const StartInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const StartInstanceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const RestartInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const RestartInstanceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const AttachInstanceDiskRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedDiskSpec !== undefined) {
            AttachedDiskSpec.encode(message.attachedDiskSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.attachedDiskSpec = AttachedDiskSpec.decode(reader, reader.uint32());
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
            message.attachedDiskSpec = AttachedDiskSpec.fromJSON(object.attachedDiskSpec);
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
                ? AttachedDiskSpec.toJSON(message.attachedDiskSpec)
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
            message.attachedDiskSpec = AttachedDiskSpec.fromPartial(object.attachedDiskSpec);
        }
        else {
            message.attachedDiskSpec = undefined;
        }
        return message;
    },
};
const baseAttachInstanceDiskMetadata = { instanceId: '', diskId: '' };
export const AttachInstanceDiskMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DetachInstanceDiskRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DetachInstanceDiskMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseAddInstanceOneToOneNatRequest = {
    instanceId: '',
    networkInterfaceIndex: '',
    internalAddress: '',
};
export const AddInstanceOneToOneNatRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.oneToOneNatSpec = OneToOneNatSpec.decode(reader, reader.uint32());
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
            message.oneToOneNatSpec = OneToOneNatSpec.fromJSON(object.oneToOneNatSpec);
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
                ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
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
            message.oneToOneNatSpec = OneToOneNatSpec.fromPartial(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
};
const baseAddInstanceOneToOneNatMetadata = { instanceId: '' };
export const AddInstanceOneToOneNatMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const RemoveInstanceOneToOneNatRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const RemoveInstanceOneToOneNatMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateInstanceNetworkInterfaceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.primaryV4AddressSpec = PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.primaryV6AddressSpec = PrimaryAddressSpec.decode(reader, reader.uint32());
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
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec);
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
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec);
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
export const UpdateInstanceNetworkInterfaceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== '') {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListInstanceOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListInstanceOperationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operations) {
            Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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
                message.operations.push(Operation.fromJSON(e));
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
            obj.operations = message.operations.map((e) => e ? Operation.toJSON(e) : undefined);
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
                message.operations.push(Operation.fromPartial(e));
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
export const ResourcesSpec = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const AttachedDiskSpec = {
    encode(message, writer = _m0.Writer.create()) {
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
            AttachedDiskSpec_DiskSpec.encode(message.diskSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.diskId !== undefined) {
            writer.uint32(42).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.diskSpec = AttachedDiskSpec_DiskSpec.decode(reader, reader.uint32());
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
            message.diskSpec = AttachedDiskSpec_DiskSpec.fromJSON(object.diskSpec);
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
                ? AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
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
            message.diskSpec = AttachedDiskSpec_DiskSpec.fromPartial(object.diskSpec);
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
export const AttachedDiskSpec_DiskSpec = {
    encode(message, writer = _m0.Writer.create()) {
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
            DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(58).fork()).ldelim();
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.diskPlacementPolicy = DiskPlacementPolicy.decode(reader, reader.uint32());
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
            message.diskPlacementPolicy = DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy);
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
                ? DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
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
            message.diskPlacementPolicy = DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy);
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
const baseNetworkInterfaceSpec = { subnetId: '', securityGroupIds: '' };
export const NetworkInterfaceSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.primaryV4AddressSpec = PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.primaryV6AddressSpec = PrimaryAddressSpec.decode(reader, reader.uint32());
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
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec);
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
                ? PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
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
            message.primaryV4AddressSpec = PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec);
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
export const PrimaryAddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNatSpec !== undefined) {
            OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.oneToOneNatSpec = OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dnsRecordSpecs.push(DnsRecordSpec.decode(reader, reader.uint32()));
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
            message.oneToOneNatSpec = OneToOneNatSpec.fromJSON(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        if (object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(DnsRecordSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? DnsRecordSpec.toJSON(e) : undefined);
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
            message.oneToOneNatSpec = OneToOneNatSpec.fromPartial(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        if (object.dnsRecordSpecs !== undefined &&
            object.dnsRecordSpecs !== null) {
            for (const e of object.dnsRecordSpecs) {
                message.dnsRecordSpecs.push(DnsRecordSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseOneToOneNatSpec = { ipVersion: 0, address: '' };
export const OneToOneNatSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.dnsRecordSpecs) {
            DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.dnsRecordSpecs.push(DnsRecordSpec.decode(reader, reader.uint32()));
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
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
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
                message.dnsRecordSpecs.push(DnsRecordSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        message.address !== undefined && (obj.address = message.address);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? DnsRecordSpec.toJSON(e) : undefined);
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
                message.dnsRecordSpecs.push(DnsRecordSpec.fromPartial(e));
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
export const DnsRecordSpec = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        requestSerialize: (value) => Buffer.from(GetInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => GetInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Instance.encode(value).finish()),
        responseDeserialize: (value) => Instance.decode(value),
    },
    /** Retrieves the list of Instance resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.InstanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListInstancesResponse.decode(value),
    },
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.InstanceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified instance. */
    update: {
        path: '/yandex.cloud.compute.v1.InstanceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified instance. */
    delete: {
        path: '/yandex.cloud.compute.v1.InstanceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the metadata of the specified instance. */
    updateMetadata: {
        path: '/yandex.cloud.compute.v1.InstanceService/UpdateMetadata',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateInstanceMetadataRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateInstanceMetadataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput: {
        path: '/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetInstanceSerialPortOutputRequest.encode(value).finish()),
        requestDeserialize: (value) => GetInstanceSerialPortOutputRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetInstanceSerialPortOutputResponse.encode(value).finish()),
        responseDeserialize: (value) => GetInstanceSerialPortOutputResponse.decode(value),
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
        requestSerialize: (value) => Buffer.from(StopInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => StopInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Starts the stopped instance. */
    start: {
        path: '/yandex.cloud.compute.v1.InstanceService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => StartInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Restarts the running instance. */
    restart: {
        path: '/yandex.cloud.compute.v1.InstanceService/Restart',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RestartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => RestartInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Attaches the disk to the instance. */
    attachDisk: {
        path: '/yandex.cloud.compute.v1.InstanceService/AttachDisk',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AttachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => AttachInstanceDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Detaches the disk from the instance. */
    detachDisk: {
        path: '/yandex.cloud.compute.v1.InstanceService/DetachDisk',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DetachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => DetachInstanceDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    addOneToOneNat: {
        path: '/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value) => AddInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    removeOneToOneNat: {
        path: '/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RemoveInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value) => RemoveInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    updateNetworkInterface: {
        path: '/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateInstanceNetworkInterfaceRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateInstanceNetworkInterfaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified instance. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.InstanceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListInstanceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListInstanceOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListInstanceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListInstanceOperationsResponse.decode(value),
    },
};
export const InstanceServiceClient = makeGenericClientConstructor(InstanceServiceService, 'yandex.cloud.compute.v1.InstanceService');
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
