"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementPolicy_HostAffinityRule = exports.PlacementPolicy = exports.NetworkSettings = exports.SchedulingPolicy = exports.DnsRecord = exports.OneToOneNat = exports.PrimaryAddress = exports.NetworkInterface = exports.AttachedFilesystem = exports.AttachedDisk = exports.Resources = exports.Instance_MetadataEntry = exports.Instance_LabelsEntry = exports.Instance = exports.placementPolicy_HostAffinityRule_OperatorToJSON = exports.placementPolicy_HostAffinityRule_OperatorFromJSON = exports.PlacementPolicy_HostAffinityRule_Operator = exports.networkSettings_TypeToJSON = exports.networkSettings_TypeFromJSON = exports.NetworkSettings_Type = exports.attachedFilesystem_ModeToJSON = exports.attachedFilesystem_ModeFromJSON = exports.AttachedFilesystem_Mode = exports.attachedDisk_ModeToJSON = exports.attachedDisk_ModeFromJSON = exports.AttachedDisk_Mode = exports.instance_StatusToJSON = exports.instance_StatusFromJSON = exports.Instance_Status = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address, for example 192.0.2.235. */
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address. Not available yet. */
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion = exports.IpVersion || (exports.IpVersion = {}));
function ipVersionFromJSON(object) {
    switch (object) {
        case 0:
        case 'IP_VERSION_UNSPECIFIED':
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case 'IPV4':
            return IpVersion.IPV4;
        case 2:
        case 'IPV6':
            return IpVersion.IPV6;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpVersion.UNRECOGNIZED;
    }
}
exports.ipVersionFromJSON = ipVersionFromJSON;
function ipVersionToJSON(object) {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return 'IP_VERSION_UNSPECIFIED';
        case IpVersion.IPV4:
            return 'IPV4';
        case IpVersion.IPV6:
            return 'IPV6';
        default:
            return 'UNKNOWN';
    }
}
exports.ipVersionToJSON = ipVersionToJSON;
var Instance_Status;
(function (Instance_Status) {
    Instance_Status[Instance_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Instance is waiting for resources to be allocated. */
    Instance_Status[Instance_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** RUNNING - Instance is running normally. */
    Instance_Status[Instance_Status["RUNNING"] = 2] = "RUNNING";
    /** STOPPING - Instance is being stopped. */
    Instance_Status[Instance_Status["STOPPING"] = 3] = "STOPPING";
    /** STOPPED - Instance stopped. */
    Instance_Status[Instance_Status["STOPPED"] = 4] = "STOPPED";
    /** STARTING - Instance is being started. */
    Instance_Status[Instance_Status["STARTING"] = 5] = "STARTING";
    /** RESTARTING - Instance is being restarted. */
    Instance_Status[Instance_Status["RESTARTING"] = 6] = "RESTARTING";
    /** UPDATING - Instance is being updated. */
    Instance_Status[Instance_Status["UPDATING"] = 7] = "UPDATING";
    /** ERROR - Instance encountered a problem and cannot operate. */
    Instance_Status[Instance_Status["ERROR"] = 8] = "ERROR";
    /** CRASHED - Instance crashed and will be restarted automatically. */
    Instance_Status[Instance_Status["CRASHED"] = 9] = "CRASHED";
    /** DELETING - Instance is being deleted. */
    Instance_Status[Instance_Status["DELETING"] = 10] = "DELETING";
    Instance_Status[Instance_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Instance_Status = exports.Instance_Status || (exports.Instance_Status = {}));
function instance_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Instance_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Instance_Status.PROVISIONING;
        case 2:
        case 'RUNNING':
            return Instance_Status.RUNNING;
        case 3:
        case 'STOPPING':
            return Instance_Status.STOPPING;
        case 4:
        case 'STOPPED':
            return Instance_Status.STOPPED;
        case 5:
        case 'STARTING':
            return Instance_Status.STARTING;
        case 6:
        case 'RESTARTING':
            return Instance_Status.RESTARTING;
        case 7:
        case 'UPDATING':
            return Instance_Status.UPDATING;
        case 8:
        case 'ERROR':
            return Instance_Status.ERROR;
        case 9:
        case 'CRASHED':
            return Instance_Status.CRASHED;
        case 10:
        case 'DELETING':
            return Instance_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Instance_Status.UNRECOGNIZED;
    }
}
exports.instance_StatusFromJSON = instance_StatusFromJSON;
function instance_StatusToJSON(object) {
    switch (object) {
        case Instance_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Instance_Status.PROVISIONING:
            return 'PROVISIONING';
        case Instance_Status.RUNNING:
            return 'RUNNING';
        case Instance_Status.STOPPING:
            return 'STOPPING';
        case Instance_Status.STOPPED:
            return 'STOPPED';
        case Instance_Status.STARTING:
            return 'STARTING';
        case Instance_Status.RESTARTING:
            return 'RESTARTING';
        case Instance_Status.UPDATING:
            return 'UPDATING';
        case Instance_Status.ERROR:
            return 'ERROR';
        case Instance_Status.CRASHED:
            return 'CRASHED';
        case Instance_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.instance_StatusToJSON = instance_StatusToJSON;
var AttachedDisk_Mode;
(function (AttachedDisk_Mode) {
    AttachedDisk_Mode[AttachedDisk_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDisk_Mode[AttachedDisk_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. */
    AttachedDisk_Mode[AttachedDisk_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedDisk_Mode[AttachedDisk_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedDisk_Mode = exports.AttachedDisk_Mode || (exports.AttachedDisk_Mode = {}));
function attachedDisk_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return AttachedDisk_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'READ_ONLY':
            return AttachedDisk_Mode.READ_ONLY;
        case 2:
        case 'READ_WRITE':
            return AttachedDisk_Mode.READ_WRITE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttachedDisk_Mode.UNRECOGNIZED;
    }
}
exports.attachedDisk_ModeFromJSON = attachedDisk_ModeFromJSON;
function attachedDisk_ModeToJSON(object) {
    switch (object) {
        case AttachedDisk_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case AttachedDisk_Mode.READ_ONLY:
            return 'READ_ONLY';
        case AttachedDisk_Mode.READ_WRITE:
            return 'READ_WRITE';
        default:
            return 'UNKNOWN';
    }
}
exports.attachedDisk_ModeToJSON = attachedDisk_ModeToJSON;
var AttachedFilesystem_Mode;
(function (AttachedFilesystem_Mode) {
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. */
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedFilesystem_Mode = exports.AttachedFilesystem_Mode || (exports.AttachedFilesystem_Mode = {}));
function attachedFilesystem_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return AttachedFilesystem_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'READ_ONLY':
            return AttachedFilesystem_Mode.READ_ONLY;
        case 2:
        case 'READ_WRITE':
            return AttachedFilesystem_Mode.READ_WRITE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttachedFilesystem_Mode.UNRECOGNIZED;
    }
}
exports.attachedFilesystem_ModeFromJSON = attachedFilesystem_ModeFromJSON;
function attachedFilesystem_ModeToJSON(object) {
    switch (object) {
        case AttachedFilesystem_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case AttachedFilesystem_Mode.READ_ONLY:
            return 'READ_ONLY';
        case AttachedFilesystem_Mode.READ_WRITE:
            return 'READ_WRITE';
        default:
            return 'UNKNOWN';
    }
}
exports.attachedFilesystem_ModeToJSON = attachedFilesystem_ModeToJSON;
var NetworkSettings_Type;
(function (NetworkSettings_Type) {
    NetworkSettings_Type[NetworkSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** STANDARD - Standard network. */
    NetworkSettings_Type[NetworkSettings_Type["STANDARD"] = 1] = "STANDARD";
    /** SOFTWARE_ACCELERATED - Software accelerated network. */
    NetworkSettings_Type[NetworkSettings_Type["SOFTWARE_ACCELERATED"] = 2] = "SOFTWARE_ACCELERATED";
    /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
    NetworkSettings_Type[NetworkSettings_Type["HARDWARE_ACCELERATED"] = 3] = "HARDWARE_ACCELERATED";
    NetworkSettings_Type[NetworkSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkSettings_Type = exports.NetworkSettings_Type || (exports.NetworkSettings_Type = {}));
function networkSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return NetworkSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return NetworkSettings_Type.STANDARD;
        case 2:
        case 'SOFTWARE_ACCELERATED':
            return NetworkSettings_Type.SOFTWARE_ACCELERATED;
        case 3:
        case 'HARDWARE_ACCELERATED':
            return NetworkSettings_Type.HARDWARE_ACCELERATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NetworkSettings_Type.UNRECOGNIZED;
    }
}
exports.networkSettings_TypeFromJSON = networkSettings_TypeFromJSON;
function networkSettings_TypeToJSON(object) {
    switch (object) {
        case NetworkSettings_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case NetworkSettings_Type.STANDARD:
            return 'STANDARD';
        case NetworkSettings_Type.SOFTWARE_ACCELERATED:
            return 'SOFTWARE_ACCELERATED';
        case NetworkSettings_Type.HARDWARE_ACCELERATED:
            return 'HARDWARE_ACCELERATED';
        default:
            return 'UNKNOWN';
    }
}
exports.networkSettings_TypeToJSON = networkSettings_TypeToJSON;
var PlacementPolicy_HostAffinityRule_Operator;
(function (PlacementPolicy_HostAffinityRule_Operator) {
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["OPERATOR_UNSPECIFIED"] = 0] = "OPERATOR_UNSPECIFIED";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["IN"] = 1] = "IN";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["NOT_IN"] = 2] = "NOT_IN";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PlacementPolicy_HostAffinityRule_Operator = exports.PlacementPolicy_HostAffinityRule_Operator || (exports.PlacementPolicy_HostAffinityRule_Operator = {}));
function placementPolicy_HostAffinityRule_OperatorFromJSON(object) {
    switch (object) {
        case 0:
        case 'OPERATOR_UNSPECIFIED':
            return PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED;
        case 1:
        case 'IN':
            return PlacementPolicy_HostAffinityRule_Operator.IN;
        case 2:
        case 'NOT_IN':
            return PlacementPolicy_HostAffinityRule_Operator.NOT_IN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED;
    }
}
exports.placementPolicy_HostAffinityRule_OperatorFromJSON = placementPolicy_HostAffinityRule_OperatorFromJSON;
function placementPolicy_HostAffinityRule_OperatorToJSON(object) {
    switch (object) {
        case PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED:
            return 'OPERATOR_UNSPECIFIED';
        case PlacementPolicy_HostAffinityRule_Operator.IN:
            return 'IN';
        case PlacementPolicy_HostAffinityRule_Operator.NOT_IN:
            return 'NOT_IN';
        default:
            return 'UNKNOWN';
    }
}
exports.placementPolicy_HostAffinityRule_OperatorToJSON = placementPolicy_HostAffinityRule_OperatorToJSON;
const baseInstance = {
    $type: 'yandex.cloud.compute.v1.Instance',
    id: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    platformId: '',
    status: 0,
    fqdn: '',
    serviceAccountId: '',
};
exports.Instance = {
    $type: 'yandex.cloud.compute.v1.Instance',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Instance_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.platformId !== '') {
            writer.uint32(66).string(message.platformId);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(74).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.Instance_MetadataEntry.encode({
                $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry',
                key: key,
                value,
            }, writer.uint32(90).fork()).ldelim();
        });
        if (message.bootDisk !== undefined) {
            exports.AttachedDisk.encode(message.bootDisk, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.secondaryDisks) {
            exports.AttachedDisk.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.filesystems) {
            exports.AttachedFilesystem.encode(v, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.networkInterfaces) {
            exports.NetworkInterface.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.fqdn !== '') {
            writer.uint32(130).string(message.fqdn);
        }
        if (message.schedulingPolicy !== undefined) {
            exports.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(138).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(146).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            exports.NetworkSettings.encode(message.networkSettings, writer.uint32(154).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            exports.PlacementPolicy.encode(message.placementPolicy, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstance };
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Instance_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.platformId = reader.string();
                    break;
                case 9:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    const entry11 = exports.Instance_MetadataEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.metadata[entry11.key] = entry11.value;
                    }
                    break;
                case 12:
                    message.bootDisk = exports.AttachedDisk.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.secondaryDisks.push(exports.AttachedDisk.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.filesystems.push(exports.AttachedFilesystem.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.networkInterfaces.push(exports.NetworkInterface.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.fqdn = reader.string();
                    break;
                case 17:
                    message.schedulingPolicy = exports.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.serviceAccountId = reader.string();
                    break;
                case 19:
                    message.networkSettings = exports.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.placementPolicy = exports.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInstance };
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
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
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = instance_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (object.bootDisk !== undefined && object.bootDisk !== null) {
            message.bootDisk = exports.AttachedDisk.fromJSON(object.bootDisk);
        }
        else {
            message.bootDisk = undefined;
        }
        if (object.secondaryDisks !== undefined &&
            object.secondaryDisks !== null) {
            for (const e of object.secondaryDisks) {
                message.secondaryDisks.push(exports.AttachedDisk.fromJSON(e));
            }
        }
        if (object.filesystems !== undefined && object.filesystems !== null) {
            for (const e of object.filesystems) {
                message.filesystems.push(exports.AttachedFilesystem.fromJSON(e));
            }
        }
        if (object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(exports.NetworkInterface.fromJSON(e));
            }
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        }
        else {
            message.fqdn = '';
        }
        if (object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null) {
            message.schedulingPolicy = exports.SchedulingPolicy.fromJSON(object.schedulingPolicy);
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
            message.networkSettings = exports.NetworkSettings.fromJSON(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = exports.PlacementPolicy.fromJSON(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
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
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.status !== undefined &&
            (obj.status = instance_StatusToJSON(message.status));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.bootDisk !== undefined &&
            (obj.bootDisk = message.bootDisk
                ? exports.AttachedDisk.toJSON(message.bootDisk)
                : undefined);
        if (message.secondaryDisks) {
            obj.secondaryDisks = message.secondaryDisks.map((e) => e ? exports.AttachedDisk.toJSON(e) : undefined);
        }
        else {
            obj.secondaryDisks = [];
        }
        if (message.filesystems) {
            obj.filesystems = message.filesystems.map((e) => e ? exports.AttachedFilesystem.toJSON(e) : undefined);
        }
        else {
            obj.filesystems = [];
        }
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) => e ? exports.NetworkInterface.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaces = [];
        }
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? exports.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? exports.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? exports.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInstance };
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
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
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.bootDisk !== undefined && object.bootDisk !== null) {
            message.bootDisk = exports.AttachedDisk.fromPartial(object.bootDisk);
        }
        else {
            message.bootDisk = undefined;
        }
        if (object.secondaryDisks !== undefined &&
            object.secondaryDisks !== null) {
            for (const e of object.secondaryDisks) {
                message.secondaryDisks.push(exports.AttachedDisk.fromPartial(e));
            }
        }
        if (object.filesystems !== undefined && object.filesystems !== null) {
            for (const e of object.filesystems) {
                message.filesystems.push(exports.AttachedFilesystem.fromPartial(e));
            }
        }
        if (object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(exports.NetworkInterface.fromPartial(e));
            }
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        }
        else {
            message.fqdn = '';
        }
        if (object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null) {
            message.schedulingPolicy = exports.SchedulingPolicy.fromPartial(object.schedulingPolicy);
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
            message.networkSettings = exports.NetworkSettings.fromPartial(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = exports.PlacementPolicy.fromPartial(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Instance.$type, exports.Instance);
const baseInstance_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry',
    key: '',
    value: '',
};
exports.Instance_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry',
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
        const message = { ...baseInstance_LabelsEntry };
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
        const message = { ...baseInstance_LabelsEntry };
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
        const message = { ...baseInstance_LabelsEntry };
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
typeRegistry_1.messageTypeRegistry.set(exports.Instance_LabelsEntry.$type, exports.Instance_LabelsEntry);
const baseInstance_MetadataEntry = {
    $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry',
    key: '',
    value: '',
};
exports.Instance_MetadataEntry = {
    $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry',
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
            ...baseInstance_MetadataEntry,
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
            ...baseInstance_MetadataEntry,
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
            ...baseInstance_MetadataEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.Instance_MetadataEntry.$type, exports.Instance_MetadataEntry);
const baseResources = {
    $type: 'yandex.cloud.compute.v1.Resources',
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.Resources = {
    $type: 'yandex.cloud.compute.v1.Resources',
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
        const message = { ...baseResources };
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
        const message = { ...baseResources };
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
        const message = { ...baseResources };
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
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseAttachedDisk = {
    $type: 'yandex.cloud.compute.v1.AttachedDisk',
    mode: 0,
    deviceName: '',
    autoDelete: false,
    diskId: '',
};
exports.AttachedDisk = {
    $type: 'yandex.cloud.compute.v1.AttachedDisk',
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
        if (message.diskId !== '') {
            writer.uint32(34).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedDisk };
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
        const message = { ...baseAttachedDisk };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedDisk_ModeFromJSON(object.mode);
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
        message.mode !== undefined &&
            (obj.mode = attachedDisk_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.autoDelete !== undefined &&
            (obj.autoDelete = message.autoDelete);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttachedDisk };
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
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDisk.$type, exports.AttachedDisk);
const baseAttachedFilesystem = {
    $type: 'yandex.cloud.compute.v1.AttachedFilesystem',
    mode: 0,
    deviceName: '',
    filesystemId: '',
};
exports.AttachedFilesystem = {
    $type: 'yandex.cloud.compute.v1.AttachedFilesystem',
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
        const message = { ...baseAttachedFilesystem };
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
        const message = { ...baseAttachedFilesystem };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedFilesystem_ModeFromJSON(object.mode);
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
            (obj.mode = attachedFilesystem_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttachedFilesystem };
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
typeRegistry_1.messageTypeRegistry.set(exports.AttachedFilesystem.$type, exports.AttachedFilesystem);
const baseNetworkInterface = {
    $type: 'yandex.cloud.compute.v1.NetworkInterface',
    index: '',
    macAddress: '',
    subnetId: '',
    securityGroupIds: '',
};
exports.NetworkInterface = {
    $type: 'yandex.cloud.compute.v1.NetworkInterface',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.macAddress !== '') {
            writer.uint32(18).string(message.macAddress);
        }
        if (message.subnetId !== '') {
            writer.uint32(26).string(message.subnetId);
        }
        if (message.primaryV4Address !== undefined) {
            exports.PrimaryAddress.encode(message.primaryV4Address, writer.uint32(34).fork()).ldelim();
        }
        if (message.primaryV6Address !== undefined) {
            exports.PrimaryAddress.encode(message.primaryV6Address, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterface };
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.macAddress = reader.string();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                case 4:
                    message.primaryV4Address = exports.PrimaryAddress.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.primaryV6Address = exports.PrimaryAddress.decode(reader, reader.uint32());
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
        const message = { ...baseNetworkInterface };
        message.securityGroupIds = [];
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.macAddress !== undefined && object.macAddress !== null) {
            message.macAddress = String(object.macAddress);
        }
        else {
            message.macAddress = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.primaryV4Address !== undefined &&
            object.primaryV4Address !== null) {
            message.primaryV4Address = exports.PrimaryAddress.fromJSON(object.primaryV4Address);
        }
        else {
            message.primaryV4Address = undefined;
        }
        if (object.primaryV6Address !== undefined &&
            object.primaryV6Address !== null) {
            message.primaryV6Address = exports.PrimaryAddress.fromJSON(object.primaryV6Address);
        }
        else {
            message.primaryV6Address = undefined;
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
        message.index !== undefined && (obj.index = message.index);
        message.macAddress !== undefined &&
            (obj.macAddress = message.macAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4Address !== undefined &&
            (obj.primaryV4Address = message.primaryV4Address
                ? exports.PrimaryAddress.toJSON(message.primaryV4Address)
                : undefined);
        message.primaryV6Address !== undefined &&
            (obj.primaryV6Address = message.primaryV6Address
                ? exports.PrimaryAddress.toJSON(message.primaryV6Address)
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
        const message = { ...baseNetworkInterface };
        message.securityGroupIds = [];
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.macAddress !== undefined && object.macAddress !== null) {
            message.macAddress = object.macAddress;
        }
        else {
            message.macAddress = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.primaryV4Address !== undefined &&
            object.primaryV4Address !== null) {
            message.primaryV4Address = exports.PrimaryAddress.fromPartial(object.primaryV4Address);
        }
        else {
            message.primaryV4Address = undefined;
        }
        if (object.primaryV6Address !== undefined &&
            object.primaryV6Address !== null) {
            message.primaryV6Address = exports.PrimaryAddress.fromPartial(object.primaryV6Address);
        }
        else {
            message.primaryV6Address = undefined;
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
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterface.$type, exports.NetworkInterface);
const basePrimaryAddress = {
    $type: 'yandex.cloud.compute.v1.PrimaryAddress',
    address: '',
};
exports.PrimaryAddress = {
    $type: 'yandex.cloud.compute.v1.PrimaryAddress',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNat !== undefined) {
            exports.OneToOneNat.encode(message.oneToOneNat, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dnsRecords) {
            exports.DnsRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrimaryAddress };
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNat = exports.OneToOneNat.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dnsRecords.push(exports.DnsRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePrimaryAddress };
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.oneToOneNat !== undefined && object.oneToOneNat !== null) {
            message.oneToOneNat = exports.OneToOneNat.fromJSON(object.oneToOneNat);
        }
        else {
            message.oneToOneNat = undefined;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(exports.DnsRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNat !== undefined &&
            (obj.oneToOneNat = message.oneToOneNat
                ? exports.OneToOneNat.toJSON(message.oneToOneNat)
                : undefined);
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => e ? exports.DnsRecord.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePrimaryAddress };
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.oneToOneNat !== undefined && object.oneToOneNat !== null) {
            message.oneToOneNat = exports.OneToOneNat.fromPartial(object.oneToOneNat);
        }
        else {
            message.oneToOneNat = undefined;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(exports.DnsRecord.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryAddress.$type, exports.PrimaryAddress);
const baseOneToOneNat = {
    $type: 'yandex.cloud.compute.v1.OneToOneNat',
    address: '',
    ipVersion: 0,
};
exports.OneToOneNat = {
    $type: 'yandex.cloud.compute.v1.OneToOneNat',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.dnsRecords) {
            exports.DnsRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNat };
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                case 3:
                    message.dnsRecords.push(exports.DnsRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOneToOneNat };
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(exports.DnsRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => e ? exports.DnsRecord.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOneToOneNat };
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(exports.DnsRecord.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNat.$type, exports.OneToOneNat);
const baseDnsRecord = {
    $type: 'yandex.cloud.compute.v1.DnsRecord',
    fqdn: '',
    dnsZoneId: '',
    ttl: 0,
    ptr: false,
};
exports.DnsRecord = {
    $type: 'yandex.cloud.compute.v1.DnsRecord',
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
        const message = { ...baseDnsRecord };
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
        const message = { ...baseDnsRecord };
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
        const message = { ...baseDnsRecord };
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
typeRegistry_1.messageTypeRegistry.set(exports.DnsRecord.$type, exports.DnsRecord);
const baseSchedulingPolicy = {
    $type: 'yandex.cloud.compute.v1.SchedulingPolicy',
    preemptible: false,
};
exports.SchedulingPolicy = {
    $type: 'yandex.cloud.compute.v1.SchedulingPolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.preemptible === true) {
            writer.uint32(8).bool(message.preemptible);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulingPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preemptible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSchedulingPolicy };
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = Boolean(object.preemptible);
        }
        else {
            message.preemptible = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSchedulingPolicy };
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = object.preemptible;
        }
        else {
            message.preemptible = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SchedulingPolicy.$type, exports.SchedulingPolicy);
const baseNetworkSettings = {
    $type: 'yandex.cloud.compute.v1.NetworkSettings',
    type: 0,
};
exports.NetworkSettings = {
    $type: 'yandex.cloud.compute.v1.NetworkSettings',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkSettings };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNetworkSettings };
        if (object.type !== undefined && object.type !== null) {
            message.type = networkSettings_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = networkSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNetworkSettings };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkSettings.$type, exports.NetworkSettings);
const basePlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy',
    placementGroupId: '',
};
exports.PlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        for (const v of message.hostAffinityRules) {
            exports.PlacementPolicy_HostAffinityRule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlacementPolicy };
        message.hostAffinityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                case 2:
                    message.hostAffinityRules.push(exports.PlacementPolicy_HostAffinityRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePlacementPolicy };
        message.hostAffinityRules = [];
        if (object.placementGroupId !== undefined &&
            object.placementGroupId !== null) {
            message.placementGroupId = String(object.placementGroupId);
        }
        else {
            message.placementGroupId = '';
        }
        if (object.hostAffinityRules !== undefined &&
            object.hostAffinityRules !== null) {
            for (const e of object.hostAffinityRules) {
                message.hostAffinityRules.push(exports.PlacementPolicy_HostAffinityRule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        if (message.hostAffinityRules) {
            obj.hostAffinityRules = message.hostAffinityRules.map((e) => e ? exports.PlacementPolicy_HostAffinityRule.toJSON(e) : undefined);
        }
        else {
            obj.hostAffinityRules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePlacementPolicy };
        message.hostAffinityRules = [];
        if (object.placementGroupId !== undefined &&
            object.placementGroupId !== null) {
            message.placementGroupId = object.placementGroupId;
        }
        else {
            message.placementGroupId = '';
        }
        if (object.hostAffinityRules !== undefined &&
            object.hostAffinityRules !== null) {
            for (const e of object.hostAffinityRules) {
                message.hostAffinityRules.push(exports.PlacementPolicy_HostAffinityRule.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy.$type, exports.PlacementPolicy);
const basePlacementPolicy_HostAffinityRule = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule',
    key: '',
    op: 0,
    values: '',
};
exports.PlacementPolicy_HostAffinityRule = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.op !== 0) {
            writer.uint32(16).int32(message.op);
        }
        for (const v of message.values) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.op = reader.int32();
                    break;
                case 3:
                    message.values.push(reader.string());
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
            ...basePlacementPolicy_HostAffinityRule,
        };
        message.values = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.op !== undefined && object.op !== null) {
            message.op = placementPolicy_HostAffinityRule_OperatorFromJSON(object.op);
        }
        else {
            message.op = 0;
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.op !== undefined &&
            (obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(message.op));
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        };
        message.values = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.op !== undefined && object.op !== null) {
            message.op = object.op;
        }
        else {
            message.op = 0;
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy_HostAffinityRule.$type, exports.PlacementPolicy_HostAffinityRule);
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
