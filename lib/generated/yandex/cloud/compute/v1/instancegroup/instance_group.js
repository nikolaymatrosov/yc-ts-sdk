"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesSpec = exports.PlacementPolicy_HostAffinityRule = exports.PlacementPolicy = exports.InstanceTemplate_MetadataEntry = exports.InstanceTemplate_LabelsEntry = exports.InstanceTemplate = exports.AllocationPolicy_Zone = exports.AllocationPolicy = exports.DeployPolicy = exports.ScalePolicy_FixedScale = exports.ScalePolicy_CustomRule_LabelsEntry = exports.ScalePolicy_CustomRule = exports.ScalePolicy_CpuUtilizationRule = exports.ScalePolicy_AutoScale = exports.ScalePolicy = exports.ManagedInstancesState_Statuses = exports.ManagedInstancesState = exports.LoadBalancerState = exports.Variable = exports.ApplicationLoadBalancerState = exports.InstanceGroup_LabelsEntry = exports.InstanceGroup = exports.managedInstance_StatusToJSON = exports.managedInstance_StatusFromJSON = exports.ManagedInstance_Status = exports.networkSettings_TypeToJSON = exports.networkSettings_TypeFromJSON = exports.NetworkSettings_Type = exports.attachedDiskSpec_ModeToJSON = exports.attachedDiskSpec_ModeFromJSON = exports.AttachedDiskSpec_Mode = exports.placementPolicy_HostAffinityRule_OperatorToJSON = exports.placementPolicy_HostAffinityRule_OperatorFromJSON = exports.PlacementPolicy_HostAffinityRule_Operator = exports.deployPolicy_StrategyToJSON = exports.deployPolicy_StrategyFromJSON = exports.DeployPolicy_Strategy = exports.scalePolicy_CustomRule_MetricTypeToJSON = exports.scalePolicy_CustomRule_MetricTypeFromJSON = exports.ScalePolicy_CustomRule_MetricType = exports.scalePolicy_CustomRule_RuleTypeToJSON = exports.scalePolicy_CustomRule_RuleTypeFromJSON = exports.ScalePolicy_CustomRule_RuleType = exports.instanceGroup_StatusToJSON = exports.instanceGroup_StatusFromJSON = exports.InstanceGroup_Status = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
exports.LogRecord = exports.DnsRecord = exports.OneToOneNat = exports.PrimaryAddress = exports.NetworkInterface = exports.ManagedInstance = exports.HealthCheckSpec_HttpOptions = exports.HealthCheckSpec_TcpOptions = exports.HealthCheckSpec = exports.HealthChecksSpec = exports.ApplicationTargetGroupSpec_LabelsEntry = exports.ApplicationTargetGroupSpec = exports.ApplicationLoadBalancerSpec = exports.TargetGroupSpec_LabelsEntry = exports.TargetGroupSpec = exports.LoadBalancerSpec = exports.NetworkSettings = exports.SchedulingPolicy = exports.DnsRecordSpec = exports.OneToOneNatSpec = exports.PrimaryAddressSpec = exports.NetworkInterfaceSpec = exports.AttachedDiskSpec_DiskSpec = exports.AttachedDiskSpec = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1.instancegroup';
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address, not available yet. */
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
var InstanceGroup_Status;
(function (InstanceGroup_Status) {
    InstanceGroup_Status[InstanceGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STARTING - Instance group is being started and will become active soon. */
    InstanceGroup_Status[InstanceGroup_Status["STARTING"] = 1] = "STARTING";
    /**
     * ACTIVE - Instance group is active.
     * In this state the group manages its instances and monitors their health,
     * creating, deleting, stopping, updating and starting instances as needed.
     *
     * To stop the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Stop].
     * To pause the processes in the instance group, i.e. scaling, checking instances' health,
     * auto-healing and updating them, without stopping the instances,
     * call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.PauseProcesses].
     */
    InstanceGroup_Status[InstanceGroup_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * STOPPING - Instance group is being stopped.
     * Group's instances stop receiving traffic from the load balancer (if any) and are then stopped.
     */
    InstanceGroup_Status[InstanceGroup_Status["STOPPING"] = 3] = "STOPPING";
    /**
     * STOPPED - Instance group is stopped.
     * In this state the group cannot be updated and does not react to any changes made to its instances.
     * To start the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Start].
     */
    InstanceGroup_Status[InstanceGroup_Status["STOPPED"] = 4] = "STOPPED";
    /** DELETING - Instance group is being deleted. */
    InstanceGroup_Status[InstanceGroup_Status["DELETING"] = 5] = "DELETING";
    /**
     * PAUSED - Instance group is paused.
     * In this state all the processes regarding the group management, i.e. scaling, checking instances' health,
     * auto-healing and updating them, are paused. The instances that were running prior to pausing the group, however,
     * may still be running.
     *
     * To resume the processes in the instance group,
     * call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.ResumeProcesses].
     * The group status will change to `ACTIVE`.
     */
    InstanceGroup_Status[InstanceGroup_Status["PAUSED"] = 6] = "PAUSED";
    InstanceGroup_Status[InstanceGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceGroup_Status = exports.InstanceGroup_Status || (exports.InstanceGroup_Status = {}));
function instanceGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return InstanceGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'STARTING':
            return InstanceGroup_Status.STARTING;
        case 2:
        case 'ACTIVE':
            return InstanceGroup_Status.ACTIVE;
        case 3:
        case 'STOPPING':
            return InstanceGroup_Status.STOPPING;
        case 4:
        case 'STOPPED':
            return InstanceGroup_Status.STOPPED;
        case 5:
        case 'DELETING':
            return InstanceGroup_Status.DELETING;
        case 6:
        case 'PAUSED':
            return InstanceGroup_Status.PAUSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InstanceGroup_Status.UNRECOGNIZED;
    }
}
exports.instanceGroup_StatusFromJSON = instanceGroup_StatusFromJSON;
function instanceGroup_StatusToJSON(object) {
    switch (object) {
        case InstanceGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case InstanceGroup_Status.STARTING:
            return 'STARTING';
        case InstanceGroup_Status.ACTIVE:
            return 'ACTIVE';
        case InstanceGroup_Status.STOPPING:
            return 'STOPPING';
        case InstanceGroup_Status.STOPPED:
            return 'STOPPED';
        case InstanceGroup_Status.DELETING:
            return 'DELETING';
        case InstanceGroup_Status.PAUSED:
            return 'PAUSED';
        default:
            return 'UNKNOWN';
    }
}
exports.instanceGroup_StatusToJSON = instanceGroup_StatusToJSON;
var ScalePolicy_CustomRule_RuleType;
(function (ScalePolicy_CustomRule_RuleType) {
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["RULE_TYPE_UNSPECIFIED"] = 0] = "RULE_TYPE_UNSPECIFIED";
    /**
     * UTILIZATION - This type means that the metric applies to one instance.
     * First, Instance Groups calculates the average metric value for each instance,
     * then averages the values for instances in one availability zone.
     * This type of metric must have the `instance_id` label.
     */
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["UTILIZATION"] = 1] = "UTILIZATION";
    /**
     * WORKLOAD - This type means that the metric applies to instances in one availability zone.
     * This type of metric must have the `zone_id` label.
     */
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["WORKLOAD"] = 2] = "WORKLOAD";
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalePolicy_CustomRule_RuleType = exports.ScalePolicy_CustomRule_RuleType || (exports.ScalePolicy_CustomRule_RuleType = {}));
function scalePolicy_CustomRule_RuleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'RULE_TYPE_UNSPECIFIED':
            return ScalePolicy_CustomRule_RuleType.RULE_TYPE_UNSPECIFIED;
        case 1:
        case 'UTILIZATION':
            return ScalePolicy_CustomRule_RuleType.UTILIZATION;
        case 2:
        case 'WORKLOAD':
            return ScalePolicy_CustomRule_RuleType.WORKLOAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ScalePolicy_CustomRule_RuleType.UNRECOGNIZED;
    }
}
exports.scalePolicy_CustomRule_RuleTypeFromJSON = scalePolicy_CustomRule_RuleTypeFromJSON;
function scalePolicy_CustomRule_RuleTypeToJSON(object) {
    switch (object) {
        case ScalePolicy_CustomRule_RuleType.RULE_TYPE_UNSPECIFIED:
            return 'RULE_TYPE_UNSPECIFIED';
        case ScalePolicy_CustomRule_RuleType.UTILIZATION:
            return 'UTILIZATION';
        case ScalePolicy_CustomRule_RuleType.WORKLOAD:
            return 'WORKLOAD';
        default:
            return 'UNKNOWN';
    }
}
exports.scalePolicy_CustomRule_RuleTypeToJSON = scalePolicy_CustomRule_RuleTypeToJSON;
var ScalePolicy_CustomRule_MetricType;
(function (ScalePolicy_CustomRule_MetricType) {
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["METRIC_TYPE_UNSPECIFIED"] = 0] = "METRIC_TYPE_UNSPECIFIED";
    /**
     * GAUGE - This type is used for metrics that show the metric value at a certain point in time,
     * such as requests per second to the server on an instance.
     *
     * Instance Groups calculates the average metric value for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["GAUGE"] = 1] = "GAUGE";
    /**
     * COUNTER - This type is used for metrics that monotonically increase over time,
     * such as the total number of requests to the server on an instance.
     *
     * Instance Groups calculates the average value increase for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["COUNTER"] = 2] = "COUNTER";
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalePolicy_CustomRule_MetricType = exports.ScalePolicy_CustomRule_MetricType || (exports.ScalePolicy_CustomRule_MetricType = {}));
function scalePolicy_CustomRule_MetricTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'METRIC_TYPE_UNSPECIFIED':
            return ScalePolicy_CustomRule_MetricType.METRIC_TYPE_UNSPECIFIED;
        case 1:
        case 'GAUGE':
            return ScalePolicy_CustomRule_MetricType.GAUGE;
        case 2:
        case 'COUNTER':
            return ScalePolicy_CustomRule_MetricType.COUNTER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ScalePolicy_CustomRule_MetricType.UNRECOGNIZED;
    }
}
exports.scalePolicy_CustomRule_MetricTypeFromJSON = scalePolicy_CustomRule_MetricTypeFromJSON;
function scalePolicy_CustomRule_MetricTypeToJSON(object) {
    switch (object) {
        case ScalePolicy_CustomRule_MetricType.METRIC_TYPE_UNSPECIFIED:
            return 'METRIC_TYPE_UNSPECIFIED';
        case ScalePolicy_CustomRule_MetricType.GAUGE:
            return 'GAUGE';
        case ScalePolicy_CustomRule_MetricType.COUNTER:
            return 'COUNTER';
        default:
            return 'UNKNOWN';
    }
}
exports.scalePolicy_CustomRule_MetricTypeToJSON = scalePolicy_CustomRule_MetricTypeToJSON;
var DeployPolicy_Strategy;
(function (DeployPolicy_Strategy) {
    DeployPolicy_Strategy[DeployPolicy_Strategy["STRATEGY_UNSPECIFIED"] = 0] = "STRATEGY_UNSPECIFIED";
    /** PROACTIVE - Instance Groups can forcefully stop a running instance. This is the default. */
    DeployPolicy_Strategy[DeployPolicy_Strategy["PROACTIVE"] = 1] = "PROACTIVE";
    /**
     * OPPORTUNISTIC - Instance Groups does not stop a running instance.
     * Instead, it will wait until the instance stops itself or becomes unhealthy.
     */
    DeployPolicy_Strategy[DeployPolicy_Strategy["OPPORTUNISTIC"] = 2] = "OPPORTUNISTIC";
    DeployPolicy_Strategy[DeployPolicy_Strategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DeployPolicy_Strategy = exports.DeployPolicy_Strategy || (exports.DeployPolicy_Strategy = {}));
function deployPolicy_StrategyFromJSON(object) {
    switch (object) {
        case 0:
        case 'STRATEGY_UNSPECIFIED':
            return DeployPolicy_Strategy.STRATEGY_UNSPECIFIED;
        case 1:
        case 'PROACTIVE':
            return DeployPolicy_Strategy.PROACTIVE;
        case 2:
        case 'OPPORTUNISTIC':
            return DeployPolicy_Strategy.OPPORTUNISTIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DeployPolicy_Strategy.UNRECOGNIZED;
    }
}
exports.deployPolicy_StrategyFromJSON = deployPolicy_StrategyFromJSON;
function deployPolicy_StrategyToJSON(object) {
    switch (object) {
        case DeployPolicy_Strategy.STRATEGY_UNSPECIFIED:
            return 'STRATEGY_UNSPECIFIED';
        case DeployPolicy_Strategy.PROACTIVE:
            return 'PROACTIVE';
        case DeployPolicy_Strategy.OPPORTUNISTIC:
            return 'OPPORTUNISTIC';
        default:
            return 'UNKNOWN';
    }
}
exports.deployPolicy_StrategyToJSON = deployPolicy_StrategyToJSON;
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
var AttachedDiskSpec_Mode;
(function (AttachedDiskSpec_Mode) {
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. */
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
var NetworkSettings_Type;
(function (NetworkSettings_Type) {
    NetworkSettings_Type[NetworkSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    NetworkSettings_Type[NetworkSettings_Type["STANDARD"] = 1] = "STANDARD";
    NetworkSettings_Type[NetworkSettings_Type["SOFTWARE_ACCELERATED"] = 2] = "SOFTWARE_ACCELERATED";
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
var ManagedInstance_Status;
(function (ManagedInstance_Status) {
    ManagedInstance_Status[ManagedInstance_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING_INSTANCE - Instance is being created. */
    ManagedInstance_Status[ManagedInstance_Status["CREATING_INSTANCE"] = 11] = "CREATING_INSTANCE";
    /** UPDATING_INSTANCE - Instance is being updated. */
    ManagedInstance_Status[ManagedInstance_Status["UPDATING_INSTANCE"] = 12] = "UPDATING_INSTANCE";
    /** DELETING_INSTANCE - Instance is being deleted. */
    ManagedInstance_Status[ManagedInstance_Status["DELETING_INSTANCE"] = 13] = "DELETING_INSTANCE";
    /** STARTING_INSTANCE - Instance is being started. */
    ManagedInstance_Status[ManagedInstance_Status["STARTING_INSTANCE"] = 14] = "STARTING_INSTANCE";
    /** STOPPING_INSTANCE - Instance is being stopped. */
    ManagedInstance_Status[ManagedInstance_Status["STOPPING_INSTANCE"] = 15] = "STOPPING_INSTANCE";
    /** AWAITING_STARTUP_DURATION - Instance has been created successfully, but startup duration has not elapsed yet. */
    ManagedInstance_Status[ManagedInstance_Status["AWAITING_STARTUP_DURATION"] = 16] = "AWAITING_STARTUP_DURATION";
    /** CHECKING_HEALTH - Instance has been created successfully and startup duration has elapsed, but health checks have not passed yet and the managed instance is not ready to receive traffic. */
    ManagedInstance_Status[ManagedInstance_Status["CHECKING_HEALTH"] = 17] = "CHECKING_HEALTH";
    /** OPENING_TRAFFIC - Instance Groups is initiating health checks and routing traffic to the instances. */
    ManagedInstance_Status[ManagedInstance_Status["OPENING_TRAFFIC"] = 18] = "OPENING_TRAFFIC";
    /** AWAITING_WARMUP_DURATION - Instance is now receiving traffic, but warmup duration has not elapsed yet. */
    ManagedInstance_Status[ManagedInstance_Status["AWAITING_WARMUP_DURATION"] = 19] = "AWAITING_WARMUP_DURATION";
    /** CLOSING_TRAFFIC - Instance Groups has initiated the process of stopping routing traffic to the instances. */
    ManagedInstance_Status[ManagedInstance_Status["CLOSING_TRAFFIC"] = 20] = "CLOSING_TRAFFIC";
    /** RUNNING_ACTUAL - Instance is running normally and its attributes match the current InstanceTemplate. */
    ManagedInstance_Status[ManagedInstance_Status["RUNNING_ACTUAL"] = 21] = "RUNNING_ACTUAL";
    /**
     * RUNNING_OUTDATED - Instance is running normally, but its attributes do not match the current InstanceTemplate.
     * It will be updated, recreated or deleted shortly.
     */
    ManagedInstance_Status[ManagedInstance_Status["RUNNING_OUTDATED"] = 22] = "RUNNING_OUTDATED";
    /** STOPPED - Instance was stopped. */
    ManagedInstance_Status[ManagedInstance_Status["STOPPED"] = 23] = "STOPPED";
    /** DELETED - Instance was deleted. */
    ManagedInstance_Status[ManagedInstance_Status["DELETED"] = 24] = "DELETED";
    ManagedInstance_Status[ManagedInstance_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ManagedInstance_Status = exports.ManagedInstance_Status || (exports.ManagedInstance_Status = {}));
function managedInstance_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return ManagedInstance_Status.STATUS_UNSPECIFIED;
        case 11:
        case 'CREATING_INSTANCE':
            return ManagedInstance_Status.CREATING_INSTANCE;
        case 12:
        case 'UPDATING_INSTANCE':
            return ManagedInstance_Status.UPDATING_INSTANCE;
        case 13:
        case 'DELETING_INSTANCE':
            return ManagedInstance_Status.DELETING_INSTANCE;
        case 14:
        case 'STARTING_INSTANCE':
            return ManagedInstance_Status.STARTING_INSTANCE;
        case 15:
        case 'STOPPING_INSTANCE':
            return ManagedInstance_Status.STOPPING_INSTANCE;
        case 16:
        case 'AWAITING_STARTUP_DURATION':
            return ManagedInstance_Status.AWAITING_STARTUP_DURATION;
        case 17:
        case 'CHECKING_HEALTH':
            return ManagedInstance_Status.CHECKING_HEALTH;
        case 18:
        case 'OPENING_TRAFFIC':
            return ManagedInstance_Status.OPENING_TRAFFIC;
        case 19:
        case 'AWAITING_WARMUP_DURATION':
            return ManagedInstance_Status.AWAITING_WARMUP_DURATION;
        case 20:
        case 'CLOSING_TRAFFIC':
            return ManagedInstance_Status.CLOSING_TRAFFIC;
        case 21:
        case 'RUNNING_ACTUAL':
            return ManagedInstance_Status.RUNNING_ACTUAL;
        case 22:
        case 'RUNNING_OUTDATED':
            return ManagedInstance_Status.RUNNING_OUTDATED;
        case 23:
        case 'STOPPED':
            return ManagedInstance_Status.STOPPED;
        case 24:
        case 'DELETED':
            return ManagedInstance_Status.DELETED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ManagedInstance_Status.UNRECOGNIZED;
    }
}
exports.managedInstance_StatusFromJSON = managedInstance_StatusFromJSON;
function managedInstance_StatusToJSON(object) {
    switch (object) {
        case ManagedInstance_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case ManagedInstance_Status.CREATING_INSTANCE:
            return 'CREATING_INSTANCE';
        case ManagedInstance_Status.UPDATING_INSTANCE:
            return 'UPDATING_INSTANCE';
        case ManagedInstance_Status.DELETING_INSTANCE:
            return 'DELETING_INSTANCE';
        case ManagedInstance_Status.STARTING_INSTANCE:
            return 'STARTING_INSTANCE';
        case ManagedInstance_Status.STOPPING_INSTANCE:
            return 'STOPPING_INSTANCE';
        case ManagedInstance_Status.AWAITING_STARTUP_DURATION:
            return 'AWAITING_STARTUP_DURATION';
        case ManagedInstance_Status.CHECKING_HEALTH:
            return 'CHECKING_HEALTH';
        case ManagedInstance_Status.OPENING_TRAFFIC:
            return 'OPENING_TRAFFIC';
        case ManagedInstance_Status.AWAITING_WARMUP_DURATION:
            return 'AWAITING_WARMUP_DURATION';
        case ManagedInstance_Status.CLOSING_TRAFFIC:
            return 'CLOSING_TRAFFIC';
        case ManagedInstance_Status.RUNNING_ACTUAL:
            return 'RUNNING_ACTUAL';
        case ManagedInstance_Status.RUNNING_OUTDATED:
            return 'RUNNING_OUTDATED';
        case ManagedInstance_Status.STOPPED:
            return 'STOPPED';
        case ManagedInstance_Status.DELETED:
            return 'DELETED';
        default:
            return 'UNKNOWN';
    }
}
exports.managedInstance_StatusToJSON = managedInstance_StatusToJSON;
const baseInstanceGroup = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceGroup',
    id: '',
    folderId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    status: 0,
    deletionProtection: false,
};
exports.InstanceGroup = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceGroup',
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
            exports.InstanceGroup_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            exports.InstanceTemplate.encode(message.instanceTemplate, writer.uint32(58).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            exports.DeployPolicy.encode(message.deployPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            exports.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.loadBalancerState !== undefined) {
            exports.LoadBalancerState.encode(message.loadBalancerState, writer.uint32(90).fork()).ldelim();
        }
        if (message.managedInstancesState !== undefined) {
            exports.ManagedInstancesState.encode(message.managedInstancesState, writer.uint32(98).fork()).ldelim();
        }
        if (message.loadBalancerSpec !== undefined) {
            exports.LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(114).fork()).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            exports.HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(122).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(130).string(message.serviceAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(136).int32(message.status);
        }
        for (const v of message.variables) {
            exports.Variable.encode(v, writer.uint32(146).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(152).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            exports.ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(162).fork()).ldelim();
        }
        if (message.applicationLoadBalancerState !== undefined) {
            exports.ApplicationLoadBalancerState.encode(message.applicationLoadBalancerState, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstanceGroup };
        message.labels = {};
        message.variables = [];
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
                    const entry6 = exports.InstanceGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.instanceTemplate = exports.InstanceTemplate.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deployPolicy = exports.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allocationPolicy = exports.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.loadBalancerState = exports.LoadBalancerState.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.managedInstancesState =
                        exports.ManagedInstancesState.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadBalancerSpec = exports.LoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.healthChecksSpec = exports.HealthChecksSpec.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.serviceAccountId = reader.string();
                    break;
                case 17:
                    message.status = reader.int32();
                    break;
                case 18:
                    message.variables.push(exports.Variable.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.deletionProtection = reader.bool();
                    break;
                case 20:
                    message.applicationLoadBalancerSpec =
                        exports.ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.applicationLoadBalancerState =
                        exports.ApplicationLoadBalancerState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInstanceGroup };
        message.labels = {};
        message.variables = [];
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
        if (object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null) {
            message.instanceTemplate = exports.InstanceTemplate.fromJSON(object.instanceTemplate);
        }
        else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = exports.DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = exports.AllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.loadBalancerState !== undefined &&
            object.loadBalancerState !== null) {
            message.loadBalancerState = exports.LoadBalancerState.fromJSON(object.loadBalancerState);
        }
        else {
            message.loadBalancerState = undefined;
        }
        if (object.managedInstancesState !== undefined &&
            object.managedInstancesState !== null) {
            message.managedInstancesState = exports.ManagedInstancesState.fromJSON(object.managedInstancesState);
        }
        else {
            message.managedInstancesState = undefined;
        }
        if (object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null) {
            message.loadBalancerSpec = exports.LoadBalancerSpec.fromJSON(object.loadBalancerSpec);
        }
        else {
            message.loadBalancerSpec = undefined;
        }
        if (object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null) {
            message.healthChecksSpec = exports.HealthChecksSpec.fromJSON(object.healthChecksSpec);
        }
        else {
            message.healthChecksSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = instanceGroup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(exports.Variable.fromJSON(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        if (object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null) {
            message.applicationLoadBalancerSpec =
                exports.ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec);
        }
        else {
            message.applicationLoadBalancerSpec = undefined;
        }
        if (object.applicationLoadBalancerState !== undefined &&
            object.applicationLoadBalancerState !== null) {
            message.applicationLoadBalancerState =
                exports.ApplicationLoadBalancerState.fromJSON(object.applicationLoadBalancerState);
        }
        else {
            message.applicationLoadBalancerState = undefined;
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? exports.InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? exports.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? exports.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.loadBalancerState !== undefined &&
            (obj.loadBalancerState = message.loadBalancerState
                ? exports.LoadBalancerState.toJSON(message.loadBalancerState)
                : undefined);
        message.managedInstancesState !== undefined &&
            (obj.managedInstancesState = message.managedInstancesState
                ? exports.ManagedInstancesState.toJSON(message.managedInstancesState)
                : undefined);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? exports.LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? exports.HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.status !== undefined &&
            (obj.status = instanceGroup_StatusToJSON(message.status));
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? exports.Variable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec =
                message.applicationLoadBalancerSpec
                    ? exports.ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec)
                    : undefined);
        message.applicationLoadBalancerState !== undefined &&
            (obj.applicationLoadBalancerState =
                message.applicationLoadBalancerState
                    ? exports.ApplicationLoadBalancerState.toJSON(message.applicationLoadBalancerState)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInstanceGroup };
        message.labels = {};
        message.variables = [];
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
        if (object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null) {
            message.instanceTemplate = exports.InstanceTemplate.fromPartial(object.instanceTemplate);
        }
        else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = exports.DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = exports.AllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.loadBalancerState !== undefined &&
            object.loadBalancerState !== null) {
            message.loadBalancerState = exports.LoadBalancerState.fromPartial(object.loadBalancerState);
        }
        else {
            message.loadBalancerState = undefined;
        }
        if (object.managedInstancesState !== undefined &&
            object.managedInstancesState !== null) {
            message.managedInstancesState = exports.ManagedInstancesState.fromPartial(object.managedInstancesState);
        }
        else {
            message.managedInstancesState = undefined;
        }
        if (object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null) {
            message.loadBalancerSpec = exports.LoadBalancerSpec.fromPartial(object.loadBalancerSpec);
        }
        else {
            message.loadBalancerSpec = undefined;
        }
        if (object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null) {
            message.healthChecksSpec = exports.HealthChecksSpec.fromPartial(object.healthChecksSpec);
        }
        else {
            message.healthChecksSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(exports.Variable.fromPartial(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        if (object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null) {
            message.applicationLoadBalancerSpec =
                exports.ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec);
        }
        else {
            message.applicationLoadBalancerSpec = undefined;
        }
        if (object.applicationLoadBalancerState !== undefined &&
            object.applicationLoadBalancerState !== null) {
            message.applicationLoadBalancerState =
                exports.ApplicationLoadBalancerState.fromPartial(object.applicationLoadBalancerState);
        }
        else {
            message.applicationLoadBalancerState = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstanceGroup.$type, exports.InstanceGroup);
const baseInstanceGroup_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry',
    key: '',
    value: '',
};
exports.InstanceGroup_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry',
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
            ...baseInstanceGroup_LabelsEntry,
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
            ...baseInstanceGroup_LabelsEntry,
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
            ...baseInstanceGroup_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.InstanceGroup_LabelsEntry.$type, exports.InstanceGroup_LabelsEntry);
const baseApplicationLoadBalancerState = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState',
    targetGroupId: '',
    statusMessage: '',
};
exports.ApplicationLoadBalancerState = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        if (message.statusMessage !== '') {
            writer.uint32(18).string(message.statusMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationLoadBalancerState,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.statusMessage = reader.string();
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
            ...baseApplicationLoadBalancerState,
        };
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = String(object.targetGroupId);
        }
        else {
            message.targetGroupId = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = String(object.statusMessage);
        }
        else {
            message.statusMessage = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseApplicationLoadBalancerState,
        };
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = object.targetGroupId;
        }
        else {
            message.targetGroupId = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = object.statusMessage;
        }
        else {
            message.statusMessage = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationLoadBalancerState.$type, exports.ApplicationLoadBalancerState);
const baseVariable = {
    $type: 'yandex.cloud.compute.v1.instancegroup.Variable',
    key: '',
    value: '',
};
exports.Variable = {
    $type: 'yandex.cloud.compute.v1.instancegroup.Variable',
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
        const message = { ...baseVariable };
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
        const message = { ...baseVariable };
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
        const message = { ...baseVariable };
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
typeRegistry_1.messageTypeRegistry.set(exports.Variable.$type, exports.Variable);
const baseLoadBalancerState = {
    $type: 'yandex.cloud.compute.v1.instancegroup.LoadBalancerState',
    targetGroupId: '',
    statusMessage: '',
};
exports.LoadBalancerState = {
    $type: 'yandex.cloud.compute.v1.instancegroup.LoadBalancerState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        if (message.statusMessage !== '') {
            writer.uint32(18).string(message.statusMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancerState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.statusMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLoadBalancerState };
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = String(object.targetGroupId);
        }
        else {
            message.targetGroupId = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = String(object.statusMessage);
        }
        else {
            message.statusMessage = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLoadBalancerState };
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = object.targetGroupId;
        }
        else {
            message.targetGroupId = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = object.statusMessage;
        }
        else {
            message.statusMessage = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancerState.$type, exports.LoadBalancerState);
const baseManagedInstancesState = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ManagedInstancesState',
    targetSize: 0,
    runningActualCount: 0,
    runningOutdatedCount: 0,
    processingCount: 0,
};
exports.ManagedInstancesState = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ManagedInstancesState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetSize !== 0) {
            writer.uint32(8).int64(message.targetSize);
        }
        if (message.runningActualCount !== 0) {
            writer.uint32(32).int64(message.runningActualCount);
        }
        if (message.runningOutdatedCount !== 0) {
            writer.uint32(40).int64(message.runningOutdatedCount);
        }
        if (message.processingCount !== 0) {
            writer.uint32(48).int64(message.processingCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseManagedInstancesState,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.runningActualCount = longToNumber(reader.int64());
                    break;
                case 5:
                    message.runningOutdatedCount = longToNumber(reader.int64());
                    break;
                case 6:
                    message.processingCount = longToNumber(reader.int64());
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
            ...baseManagedInstancesState,
        };
        if (object.targetSize !== undefined && object.targetSize !== null) {
            message.targetSize = Number(object.targetSize);
        }
        else {
            message.targetSize = 0;
        }
        if (object.runningActualCount !== undefined &&
            object.runningActualCount !== null) {
            message.runningActualCount = Number(object.runningActualCount);
        }
        else {
            message.runningActualCount = 0;
        }
        if (object.runningOutdatedCount !== undefined &&
            object.runningOutdatedCount !== null) {
            message.runningOutdatedCount = Number(object.runningOutdatedCount);
        }
        else {
            message.runningOutdatedCount = 0;
        }
        if (object.processingCount !== undefined &&
            object.processingCount !== null) {
            message.processingCount = Number(object.processingCount);
        }
        else {
            message.processingCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetSize !== undefined &&
            (obj.targetSize = message.targetSize);
        message.runningActualCount !== undefined &&
            (obj.runningActualCount = message.runningActualCount);
        message.runningOutdatedCount !== undefined &&
            (obj.runningOutdatedCount = message.runningOutdatedCount);
        message.processingCount !== undefined &&
            (obj.processingCount = message.processingCount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseManagedInstancesState,
        };
        if (object.targetSize !== undefined && object.targetSize !== null) {
            message.targetSize = object.targetSize;
        }
        else {
            message.targetSize = 0;
        }
        if (object.runningActualCount !== undefined &&
            object.runningActualCount !== null) {
            message.runningActualCount = object.runningActualCount;
        }
        else {
            message.runningActualCount = 0;
        }
        if (object.runningOutdatedCount !== undefined &&
            object.runningOutdatedCount !== null) {
            message.runningOutdatedCount = object.runningOutdatedCount;
        }
        else {
            message.runningOutdatedCount = 0;
        }
        if (object.processingCount !== undefined &&
            object.processingCount !== null) {
            message.processingCount = object.processingCount;
        }
        else {
            message.processingCount = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManagedInstancesState.$type, exports.ManagedInstancesState);
const baseManagedInstancesState_Statuses = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses',
    creating: 0,
    starting: 0,
    opening: 0,
    warming: 0,
    running: 0,
    closing: 0,
    stopping: 0,
    updating: 0,
    deleting: 0,
    failed: 0,
};
exports.ManagedInstancesState_Statuses = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creating !== 0) {
            writer.uint32(8).int64(message.creating);
        }
        if (message.starting !== 0) {
            writer.uint32(16).int64(message.starting);
        }
        if (message.opening !== 0) {
            writer.uint32(24).int64(message.opening);
        }
        if (message.warming !== 0) {
            writer.uint32(32).int64(message.warming);
        }
        if (message.running !== 0) {
            writer.uint32(40).int64(message.running);
        }
        if (message.closing !== 0) {
            writer.uint32(48).int64(message.closing);
        }
        if (message.stopping !== 0) {
            writer.uint32(56).int64(message.stopping);
        }
        if (message.updating !== 0) {
            writer.uint32(64).int64(message.updating);
        }
        if (message.deleting !== 0) {
            writer.uint32(72).int64(message.deleting);
        }
        if (message.failed !== 0) {
            writer.uint32(80).int64(message.failed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseManagedInstancesState_Statuses,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creating = longToNumber(reader.int64());
                    break;
                case 2:
                    message.starting = longToNumber(reader.int64());
                    break;
                case 3:
                    message.opening = longToNumber(reader.int64());
                    break;
                case 4:
                    message.warming = longToNumber(reader.int64());
                    break;
                case 5:
                    message.running = longToNumber(reader.int64());
                    break;
                case 6:
                    message.closing = longToNumber(reader.int64());
                    break;
                case 7:
                    message.stopping = longToNumber(reader.int64());
                    break;
                case 8:
                    message.updating = longToNumber(reader.int64());
                    break;
                case 9:
                    message.deleting = longToNumber(reader.int64());
                    break;
                case 10:
                    message.failed = longToNumber(reader.int64());
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
            ...baseManagedInstancesState_Statuses,
        };
        if (object.creating !== undefined && object.creating !== null) {
            message.creating = Number(object.creating);
        }
        else {
            message.creating = 0;
        }
        if (object.starting !== undefined && object.starting !== null) {
            message.starting = Number(object.starting);
        }
        else {
            message.starting = 0;
        }
        if (object.opening !== undefined && object.opening !== null) {
            message.opening = Number(object.opening);
        }
        else {
            message.opening = 0;
        }
        if (object.warming !== undefined && object.warming !== null) {
            message.warming = Number(object.warming);
        }
        else {
            message.warming = 0;
        }
        if (object.running !== undefined && object.running !== null) {
            message.running = Number(object.running);
        }
        else {
            message.running = 0;
        }
        if (object.closing !== undefined && object.closing !== null) {
            message.closing = Number(object.closing);
        }
        else {
            message.closing = 0;
        }
        if (object.stopping !== undefined && object.stopping !== null) {
            message.stopping = Number(object.stopping);
        }
        else {
            message.stopping = 0;
        }
        if (object.updating !== undefined && object.updating !== null) {
            message.updating = Number(object.updating);
        }
        else {
            message.updating = 0;
        }
        if (object.deleting !== undefined && object.deleting !== null) {
            message.deleting = Number(object.deleting);
        }
        else {
            message.deleting = 0;
        }
        if (object.failed !== undefined && object.failed !== null) {
            message.failed = Number(object.failed);
        }
        else {
            message.failed = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creating !== undefined && (obj.creating = message.creating);
        message.starting !== undefined && (obj.starting = message.starting);
        message.opening !== undefined && (obj.opening = message.opening);
        message.warming !== undefined && (obj.warming = message.warming);
        message.running !== undefined && (obj.running = message.running);
        message.closing !== undefined && (obj.closing = message.closing);
        message.stopping !== undefined && (obj.stopping = message.stopping);
        message.updating !== undefined && (obj.updating = message.updating);
        message.deleting !== undefined && (obj.deleting = message.deleting);
        message.failed !== undefined && (obj.failed = message.failed);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseManagedInstancesState_Statuses,
        };
        if (object.creating !== undefined && object.creating !== null) {
            message.creating = object.creating;
        }
        else {
            message.creating = 0;
        }
        if (object.starting !== undefined && object.starting !== null) {
            message.starting = object.starting;
        }
        else {
            message.starting = 0;
        }
        if (object.opening !== undefined && object.opening !== null) {
            message.opening = object.opening;
        }
        else {
            message.opening = 0;
        }
        if (object.warming !== undefined && object.warming !== null) {
            message.warming = object.warming;
        }
        else {
            message.warming = 0;
        }
        if (object.running !== undefined && object.running !== null) {
            message.running = object.running;
        }
        else {
            message.running = 0;
        }
        if (object.closing !== undefined && object.closing !== null) {
            message.closing = object.closing;
        }
        else {
            message.closing = 0;
        }
        if (object.stopping !== undefined && object.stopping !== null) {
            message.stopping = object.stopping;
        }
        else {
            message.stopping = 0;
        }
        if (object.updating !== undefined && object.updating !== null) {
            message.updating = object.updating;
        }
        else {
            message.updating = 0;
        }
        if (object.deleting !== undefined && object.deleting !== null) {
            message.deleting = object.deleting;
        }
        else {
            message.deleting = 0;
        }
        if (object.failed !== undefined && object.failed !== null) {
            message.failed = object.failed;
        }
        else {
            message.failed = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManagedInstancesState_Statuses.$type, exports.ManagedInstancesState_Statuses);
const baseScalePolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy',
};
exports.ScalePolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        if (message.autoScale !== undefined) {
            exports.ScalePolicy_AutoScale.encode(message.autoScale, writer.uint32(18).fork()).ldelim();
        }
        if (message.testAutoScale !== undefined) {
            exports.ScalePolicy_AutoScale.encode(message.testAutoScale, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.autoScale = exports.ScalePolicy_AutoScale.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.testAutoScale = exports.ScalePolicy_AutoScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        if (object.autoScale !== undefined && object.autoScale !== null) {
            message.autoScale = exports.ScalePolicy_AutoScale.fromJSON(object.autoScale);
        }
        else {
            message.autoScale = undefined;
        }
        if (object.testAutoScale !== undefined &&
            object.testAutoScale !== null) {
            message.testAutoScale = exports.ScalePolicy_AutoScale.fromJSON(object.testAutoScale);
        }
        else {
            message.testAutoScale = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        message.autoScale !== undefined &&
            (obj.autoScale = message.autoScale
                ? exports.ScalePolicy_AutoScale.toJSON(message.autoScale)
                : undefined);
        message.testAutoScale !== undefined &&
            (obj.testAutoScale = message.testAutoScale
                ? exports.ScalePolicy_AutoScale.toJSON(message.testAutoScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        if (object.autoScale !== undefined && object.autoScale !== null) {
            message.autoScale = exports.ScalePolicy_AutoScale.fromPartial(object.autoScale);
        }
        else {
            message.autoScale = undefined;
        }
        if (object.testAutoScale !== undefined &&
            object.testAutoScale !== null) {
            message.testAutoScale = exports.ScalePolicy_AutoScale.fromPartial(object.testAutoScale);
        }
        else {
            message.testAutoScale = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy.$type, exports.ScalePolicy);
const baseScalePolicy_AutoScale = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale',
    minZoneSize: 0,
    maxSize: 0,
    initialSize: 0,
};
exports.ScalePolicy_AutoScale = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minZoneSize !== 0) {
            writer.uint32(8).int64(message.minZoneSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        if (message.measurementDuration !== undefined) {
            duration_1.Duration.encode(message.measurementDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupDuration !== undefined) {
            duration_1.Duration.encode(message.warmupDuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.stabilizationDuration !== undefined) {
            duration_1.Duration.encode(message.stabilizationDuration, writer.uint32(42).fork()).ldelim();
        }
        if (message.initialSize !== 0) {
            writer.uint32(48).int64(message.initialSize);
        }
        if (message.cpuUtilizationRule !== undefined) {
            exports.ScalePolicy_CpuUtilizationRule.encode(message.cpuUtilizationRule, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.customRules) {
            exports.ScalePolicy_CustomRule.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_AutoScale,
        };
        message.customRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minZoneSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.measurementDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.warmupDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stabilizationDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initialSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.cpuUtilizationRule =
                        exports.ScalePolicy_CpuUtilizationRule.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.customRules.push(exports.ScalePolicy_CustomRule.decode(reader, reader.uint32()));
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
            ...baseScalePolicy_AutoScale,
        };
        message.customRules = [];
        if (object.minZoneSize !== undefined && object.minZoneSize !== null) {
            message.minZoneSize = Number(object.minZoneSize);
        }
        else {
            message.minZoneSize = 0;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = Number(object.maxSize);
        }
        else {
            message.maxSize = 0;
        }
        if (object.measurementDuration !== undefined &&
            object.measurementDuration !== null) {
            message.measurementDuration = duration_1.Duration.fromJSON(object.measurementDuration);
        }
        else {
            message.measurementDuration = undefined;
        }
        if (object.warmupDuration !== undefined &&
            object.warmupDuration !== null) {
            message.warmupDuration = duration_1.Duration.fromJSON(object.warmupDuration);
        }
        else {
            message.warmupDuration = undefined;
        }
        if (object.stabilizationDuration !== undefined &&
            object.stabilizationDuration !== null) {
            message.stabilizationDuration = duration_1.Duration.fromJSON(object.stabilizationDuration);
        }
        else {
            message.stabilizationDuration = undefined;
        }
        if (object.initialSize !== undefined && object.initialSize !== null) {
            message.initialSize = Number(object.initialSize);
        }
        else {
            message.initialSize = 0;
        }
        if (object.cpuUtilizationRule !== undefined &&
            object.cpuUtilizationRule !== null) {
            message.cpuUtilizationRule =
                exports.ScalePolicy_CpuUtilizationRule.fromJSON(object.cpuUtilizationRule);
        }
        else {
            message.cpuUtilizationRule = undefined;
        }
        if (object.customRules !== undefined && object.customRules !== null) {
            for (const e of object.customRules) {
                message.customRules.push(exports.ScalePolicy_CustomRule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minZoneSize !== undefined &&
            (obj.minZoneSize = message.minZoneSize);
        message.maxSize !== undefined && (obj.maxSize = message.maxSize);
        message.measurementDuration !== undefined &&
            (obj.measurementDuration = message.measurementDuration
                ? duration_1.Duration.toJSON(message.measurementDuration)
                : undefined);
        message.warmupDuration !== undefined &&
            (obj.warmupDuration = message.warmupDuration
                ? duration_1.Duration.toJSON(message.warmupDuration)
                : undefined);
        message.stabilizationDuration !== undefined &&
            (obj.stabilizationDuration = message.stabilizationDuration
                ? duration_1.Duration.toJSON(message.stabilizationDuration)
                : undefined);
        message.initialSize !== undefined &&
            (obj.initialSize = message.initialSize);
        message.cpuUtilizationRule !== undefined &&
            (obj.cpuUtilizationRule = message.cpuUtilizationRule
                ? exports.ScalePolicy_CpuUtilizationRule.toJSON(message.cpuUtilizationRule)
                : undefined);
        if (message.customRules) {
            obj.customRules = message.customRules.map((e) => e ? exports.ScalePolicy_CustomRule.toJSON(e) : undefined);
        }
        else {
            obj.customRules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_AutoScale,
        };
        message.customRules = [];
        if (object.minZoneSize !== undefined && object.minZoneSize !== null) {
            message.minZoneSize = object.minZoneSize;
        }
        else {
            message.minZoneSize = 0;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = object.maxSize;
        }
        else {
            message.maxSize = 0;
        }
        if (object.measurementDuration !== undefined &&
            object.measurementDuration !== null) {
            message.measurementDuration = duration_1.Duration.fromPartial(object.measurementDuration);
        }
        else {
            message.measurementDuration = undefined;
        }
        if (object.warmupDuration !== undefined &&
            object.warmupDuration !== null) {
            message.warmupDuration = duration_1.Duration.fromPartial(object.warmupDuration);
        }
        else {
            message.warmupDuration = undefined;
        }
        if (object.stabilizationDuration !== undefined &&
            object.stabilizationDuration !== null) {
            message.stabilizationDuration = duration_1.Duration.fromPartial(object.stabilizationDuration);
        }
        else {
            message.stabilizationDuration = undefined;
        }
        if (object.initialSize !== undefined && object.initialSize !== null) {
            message.initialSize = object.initialSize;
        }
        else {
            message.initialSize = 0;
        }
        if (object.cpuUtilizationRule !== undefined &&
            object.cpuUtilizationRule !== null) {
            message.cpuUtilizationRule =
                exports.ScalePolicy_CpuUtilizationRule.fromPartial(object.cpuUtilizationRule);
        }
        else {
            message.cpuUtilizationRule = undefined;
        }
        if (object.customRules !== undefined && object.customRules !== null) {
            for (const e of object.customRules) {
                message.customRules.push(exports.ScalePolicy_CustomRule.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_AutoScale.$type, exports.ScalePolicy_AutoScale);
const baseScalePolicy_CpuUtilizationRule = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule',
    utilizationTarget: 0,
};
exports.ScalePolicy_CpuUtilizationRule = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.utilizationTarget !== 0) {
            writer.uint32(9).double(message.utilizationTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_CpuUtilizationRule,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.utilizationTarget = reader.double();
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
            ...baseScalePolicy_CpuUtilizationRule,
        };
        if (object.utilizationTarget !== undefined &&
            object.utilizationTarget !== null) {
            message.utilizationTarget = Number(object.utilizationTarget);
        }
        else {
            message.utilizationTarget = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.utilizationTarget !== undefined &&
            (obj.utilizationTarget = message.utilizationTarget);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_CpuUtilizationRule,
        };
        if (object.utilizationTarget !== undefined &&
            object.utilizationTarget !== null) {
            message.utilizationTarget = object.utilizationTarget;
        }
        else {
            message.utilizationTarget = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_CpuUtilizationRule.$type, exports.ScalePolicy_CpuUtilizationRule);
const baseScalePolicy_CustomRule = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule',
    ruleType: 0,
    metricType: 0,
    metricName: '',
    target: 0,
    folderId: '',
    service: '',
};
exports.ScalePolicy_CustomRule = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ruleType !== 0) {
            writer.uint32(8).int32(message.ruleType);
        }
        if (message.metricType !== 0) {
            writer.uint32(16).int32(message.metricType);
        }
        if (message.metricName !== '') {
            writer.uint32(26).string(message.metricName);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.ScalePolicy_CustomRule_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.target !== 0) {
            writer.uint32(33).double(message.target);
        }
        if (message.folderId !== '') {
            writer.uint32(50).string(message.folderId);
        }
        if (message.service !== '') {
            writer.uint32(58).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_CustomRule,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleType = reader.int32();
                    break;
                case 2:
                    message.metricType = reader.int32();
                    break;
                case 3:
                    message.metricName = reader.string();
                    break;
                case 5:
                    const entry5 = exports.ScalePolicy_CustomRule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 4:
                    message.target = reader.double();
                    break;
                case 6:
                    message.folderId = reader.string();
                    break;
                case 7:
                    message.service = reader.string();
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
            ...baseScalePolicy_CustomRule,
        };
        message.labels = {};
        if (object.ruleType !== undefined && object.ruleType !== null) {
            message.ruleType = scalePolicy_CustomRule_RuleTypeFromJSON(object.ruleType);
        }
        else {
            message.ruleType = 0;
        }
        if (object.metricType !== undefined && object.metricType !== null) {
            message.metricType = scalePolicy_CustomRule_MetricTypeFromJSON(object.metricType);
        }
        else {
            message.metricType = 0;
        }
        if (object.metricName !== undefined && object.metricName !== null) {
            message.metricName = String(object.metricName);
        }
        else {
            message.metricName = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = Number(object.target);
        }
        else {
            message.target = 0;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.service !== undefined && object.service !== null) {
            message.service = String(object.service);
        }
        else {
            message.service = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ruleType !== undefined &&
            (obj.ruleType = scalePolicy_CustomRule_RuleTypeToJSON(message.ruleType));
        message.metricType !== undefined &&
            (obj.metricType = scalePolicy_CustomRule_MetricTypeToJSON(message.metricType));
        message.metricName !== undefined &&
            (obj.metricName = message.metricName);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.target !== undefined && (obj.target = message.target);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_CustomRule,
        };
        message.labels = {};
        if (object.ruleType !== undefined && object.ruleType !== null) {
            message.ruleType = object.ruleType;
        }
        else {
            message.ruleType = 0;
        }
        if (object.metricType !== undefined && object.metricType !== null) {
            message.metricType = object.metricType;
        }
        else {
            message.metricType = 0;
        }
        if (object.metricName !== undefined && object.metricName !== null) {
            message.metricName = object.metricName;
        }
        else {
            message.metricName = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = object.target;
        }
        else {
            message.target = 0;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.service !== undefined && object.service !== null) {
            message.service = object.service;
        }
        else {
            message.service = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_CustomRule.$type, exports.ScalePolicy_CustomRule);
const baseScalePolicy_CustomRule_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry',
    key: '',
    value: '',
};
exports.ScalePolicy_CustomRule_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry',
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
            ...baseScalePolicy_CustomRule_LabelsEntry,
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
            ...baseScalePolicy_CustomRule_LabelsEntry,
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
            ...baseScalePolicy_CustomRule_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_CustomRule_LabelsEntry.$type, exports.ScalePolicy_CustomRule_LabelsEntry);
const baseScalePolicy_FixedScale = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale',
    size: 0,
};
exports.ScalePolicy_FixedScale = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
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
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = message.size);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_FixedScale.$type, exports.ScalePolicy_FixedScale);
const baseDeployPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.DeployPolicy',
    maxUnavailable: 0,
    maxDeleting: 0,
    maxCreating: 0,
    maxExpansion: 0,
    strategy: 0,
};
exports.DeployPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.DeployPolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxUnavailable !== 0) {
            writer.uint32(8).int64(message.maxUnavailable);
        }
        if (message.maxDeleting !== 0) {
            writer.uint32(16).int64(message.maxDeleting);
        }
        if (message.maxCreating !== 0) {
            writer.uint32(24).int64(message.maxCreating);
        }
        if (message.maxExpansion !== 0) {
            writer.uint32(48).int64(message.maxExpansion);
        }
        if (message.startupDuration !== undefined) {
            duration_1.Duration.encode(message.startupDuration, writer.uint32(58).fork()).ldelim();
        }
        if (message.strategy !== 0) {
            writer.uint32(64).int32(message.strategy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeployPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxUnavailable = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxDeleting = longToNumber(reader.int64());
                    break;
                case 3:
                    message.maxCreating = longToNumber(reader.int64());
                    break;
                case 6:
                    message.maxExpansion = longToNumber(reader.int64());
                    break;
                case 7:
                    message.startupDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.strategy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeployPolicy };
        if (object.maxUnavailable !== undefined &&
            object.maxUnavailable !== null) {
            message.maxUnavailable = Number(object.maxUnavailable);
        }
        else {
            message.maxUnavailable = 0;
        }
        if (object.maxDeleting !== undefined && object.maxDeleting !== null) {
            message.maxDeleting = Number(object.maxDeleting);
        }
        else {
            message.maxDeleting = 0;
        }
        if (object.maxCreating !== undefined && object.maxCreating !== null) {
            message.maxCreating = Number(object.maxCreating);
        }
        else {
            message.maxCreating = 0;
        }
        if (object.maxExpansion !== undefined && object.maxExpansion !== null) {
            message.maxExpansion = Number(object.maxExpansion);
        }
        else {
            message.maxExpansion = 0;
        }
        if (object.startupDuration !== undefined &&
            object.startupDuration !== null) {
            message.startupDuration = duration_1.Duration.fromJSON(object.startupDuration);
        }
        else {
            message.startupDuration = undefined;
        }
        if (object.strategy !== undefined && object.strategy !== null) {
            message.strategy = deployPolicy_StrategyFromJSON(object.strategy);
        }
        else {
            message.strategy = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxUnavailable !== undefined &&
            (obj.maxUnavailable = message.maxUnavailable);
        message.maxDeleting !== undefined &&
            (obj.maxDeleting = message.maxDeleting);
        message.maxCreating !== undefined &&
            (obj.maxCreating = message.maxCreating);
        message.maxExpansion !== undefined &&
            (obj.maxExpansion = message.maxExpansion);
        message.startupDuration !== undefined &&
            (obj.startupDuration = message.startupDuration
                ? duration_1.Duration.toJSON(message.startupDuration)
                : undefined);
        message.strategy !== undefined &&
            (obj.strategy = deployPolicy_StrategyToJSON(message.strategy));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeployPolicy };
        if (object.maxUnavailable !== undefined &&
            object.maxUnavailable !== null) {
            message.maxUnavailable = object.maxUnavailable;
        }
        else {
            message.maxUnavailable = 0;
        }
        if (object.maxDeleting !== undefined && object.maxDeleting !== null) {
            message.maxDeleting = object.maxDeleting;
        }
        else {
            message.maxDeleting = 0;
        }
        if (object.maxCreating !== undefined && object.maxCreating !== null) {
            message.maxCreating = object.maxCreating;
        }
        else {
            message.maxCreating = 0;
        }
        if (object.maxExpansion !== undefined && object.maxExpansion !== null) {
            message.maxExpansion = object.maxExpansion;
        }
        else {
            message.maxExpansion = 0;
        }
        if (object.startupDuration !== undefined &&
            object.startupDuration !== null) {
            message.startupDuration = duration_1.Duration.fromPartial(object.startupDuration);
        }
        else {
            message.startupDuration = undefined;
        }
        if (object.strategy !== undefined && object.strategy !== null) {
            message.strategy = object.strategy;
        }
        else {
            message.strategy = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeployPolicy.$type, exports.DeployPolicy);
const baseAllocationPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AllocationPolicy',
};
exports.AllocationPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AllocationPolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.zones) {
            exports.AllocationPolicy_Zone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAllocationPolicy };
        message.zones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zones.push(exports.AllocationPolicy_Zone.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAllocationPolicy };
        message.zones = [];
        if (object.zones !== undefined && object.zones !== null) {
            for (const e of object.zones) {
                message.zones.push(exports.AllocationPolicy_Zone.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.zones) {
            obj.zones = message.zones.map((e) => e ? exports.AllocationPolicy_Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAllocationPolicy };
        message.zones = [];
        if (object.zones !== undefined && object.zones !== null) {
            for (const e of object.zones) {
                message.zones.push(exports.AllocationPolicy_Zone.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AllocationPolicy.$type, exports.AllocationPolicy);
const baseAllocationPolicy_Zone = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone',
    zoneId: '',
};
exports.AllocationPolicy_Zone = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAllocationPolicy_Zone,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
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
            ...baseAllocationPolicy_Zone,
        };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAllocationPolicy_Zone,
        };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AllocationPolicy_Zone.$type, exports.AllocationPolicy_Zone);
const baseInstanceTemplate = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate',
    description: '',
    platformId: '',
    serviceAccountId: '',
    name: '',
    hostname: '',
};
exports.InstanceTemplate = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.InstanceTemplate_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        if (message.platformId !== '') {
            writer.uint32(26).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.InstanceTemplate_MetadataEntry.encode({
                $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            exports.AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            exports.AttachedDiskSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            exports.NetworkInterfaceSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            exports.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            exports.NetworkSettings.encode(message.networkSettings, writer.uint32(90).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(98).string(message.name);
        }
        if (message.hostname !== '') {
            writer.uint32(106).string(message.hostname);
        }
        if (message.placementPolicy !== undefined) {
            exports.PlacementPolicy.encode(message.placementPolicy, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstanceTemplate };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.networkInterfaceSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    const entry2 = exports.InstanceTemplate_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.platformId = reader.string();
                    break;
                case 4:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    const entry5 = exports.InstanceTemplate_MetadataEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.metadata[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.bootDiskSpec = exports.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.secondaryDiskSpecs.push(exports.AttachedDiskSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.schedulingPolicy = exports.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 11:
                    message.networkSettings = exports.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.name = reader.string();
                    break;
                case 13:
                    message.hostname = reader.string();
                    break;
                case 14:
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
        const message = { ...baseInstanceTemplate };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.networkInterfaceSpecs = [];
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
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.fromJSON(e));
            }
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = String(object.hostname);
        }
        else {
            message.hostname = '';
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
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? exports.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
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
        message.name !== undefined && (obj.name = message.name);
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? exports.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInstanceTemplate };
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.networkInterfaceSpecs = [];
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
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.fromPartial(e));
            }
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = object.hostname;
        }
        else {
            message.hostname = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.InstanceTemplate.$type, exports.InstanceTemplate);
const baseInstanceTemplate_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry',
    key: '',
    value: '',
};
exports.InstanceTemplate_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry',
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
            ...baseInstanceTemplate_LabelsEntry,
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
            ...baseInstanceTemplate_LabelsEntry,
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
            ...baseInstanceTemplate_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.InstanceTemplate_LabelsEntry.$type, exports.InstanceTemplate_LabelsEntry);
const baseInstanceTemplate_MetadataEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry',
    key: '',
    value: '',
};
exports.InstanceTemplate_MetadataEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry',
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
            ...baseInstanceTemplate_MetadataEntry,
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
            ...baseInstanceTemplate_MetadataEntry,
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
            ...baseInstanceTemplate_MetadataEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.InstanceTemplate_MetadataEntry.$type, exports.InstanceTemplate_MetadataEntry);
const basePlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PlacementPolicy',
    placementGroupId: '',
};
exports.PlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PlacementPolicy',
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
    $type: 'yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule',
    key: '',
    op: 0,
    values: '',
};
exports.PlacementPolicy_HostAffinityRule = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule',
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
const baseResourcesSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ResourcesSpec',
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.ResourcesSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ResourcesSpec',
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
typeRegistry_1.messageTypeRegistry.set(exports.ResourcesSpec.$type, exports.ResourcesSpec);
const baseAttachedDiskSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec',
    mode: 0,
    deviceName: '',
    diskId: '',
};
exports.AttachedDiskSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.diskSpec !== undefined) {
            exports.AttachedDiskSpec_DiskSpec.encode(message.diskSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskId !== '') {
            writer.uint32(34).string(message.diskId);
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
                    message.diskSpec = exports.AttachedDiskSpec_DiskSpec.decode(reader, reader.uint32());
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
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
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
            message.diskId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDiskSpec.$type, exports.AttachedDiskSpec);
const baseAttachedDiskSpec_DiskSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec',
    description: '',
    typeId: '',
    size: 0,
    preserveAfterInstanceDelete: false,
};
exports.AttachedDiskSpec_DiskSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        if (message.typeId !== '') {
            writer.uint32(18).string(message.typeId);
        }
        if (message.size !== 0) {
            writer.uint32(24).int64(message.size);
        }
        if (message.imageId !== undefined) {
            writer.uint32(34).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(42).string(message.snapshotId);
        }
        if (message.preserveAfterInstanceDelete === true) {
            writer.uint32(48).bool(message.preserveAfterInstanceDelete);
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
                    message.description = reader.string();
                    break;
                case 2:
                    message.typeId = reader.string();
                    break;
                case 3:
                    message.size = longToNumber(reader.int64());
                    break;
                case 4:
                    message.imageId = reader.string();
                    break;
                case 5:
                    message.snapshotId = reader.string();
                    break;
                case 6:
                    message.preserveAfterInstanceDelete = reader.bool();
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
        if (object.preserveAfterInstanceDelete !== undefined &&
            object.preserveAfterInstanceDelete !== null) {
            message.preserveAfterInstanceDelete = Boolean(object.preserveAfterInstanceDelete);
        }
        else {
            message.preserveAfterInstanceDelete = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.size !== undefined && (obj.size = message.size);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.preserveAfterInstanceDelete !== undefined &&
            (obj.preserveAfterInstanceDelete =
                message.preserveAfterInstanceDelete);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        };
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
        if (object.preserveAfterInstanceDelete !== undefined &&
            object.preserveAfterInstanceDelete !== null) {
            message.preserveAfterInstanceDelete =
                object.preserveAfterInstanceDelete;
        }
        else {
            message.preserveAfterInstanceDelete = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDiskSpec_DiskSpec.$type, exports.AttachedDiskSpec_DiskSpec);
const baseNetworkInterfaceSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec',
    networkId: '',
    subnetIds: '',
    securityGroupIds: '',
};
exports.NetworkInterfaceSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec };
        message.subnetIds = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetIds.push(reader.string());
                    break;
                case 3:
                    message.primaryV4AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.primaryV6AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 5:
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
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
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
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
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
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterfaceSpec.$type, exports.NetworkInterfaceSpec);
const basePrimaryAddressSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec',
    address: '',
};
exports.PrimaryAddressSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
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
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.address = reader.string();
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
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePrimaryAddressSpec };
        message.dnsRecordSpecs = [];
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
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryAddressSpec.$type, exports.PrimaryAddressSpec);
const baseOneToOneNatSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec',
    ipVersion: 0,
    address: '',
};
exports.OneToOneNatSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec',
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
                message.dnsRecordSpecs.push(exports.DnsRecordSpec.fromJSON(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNatSpec.$type, exports.OneToOneNatSpec);
const baseDnsRecordSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.DnsRecordSpec',
    fqdn: '',
    dnsZoneId: '',
    ttl: 0,
    ptr: false,
};
exports.DnsRecordSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.DnsRecordSpec',
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
typeRegistry_1.messageTypeRegistry.set(exports.DnsRecordSpec.$type, exports.DnsRecordSpec);
const baseSchedulingPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.SchedulingPolicy',
    preemptible: false,
};
exports.SchedulingPolicy = {
    $type: 'yandex.cloud.compute.v1.instancegroup.SchedulingPolicy',
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
    $type: 'yandex.cloud.compute.v1.instancegroup.NetworkSettings',
    type: 0,
};
exports.NetworkSettings = {
    $type: 'yandex.cloud.compute.v1.instancegroup.NetworkSettings',
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
const baseLoadBalancerSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec',
};
exports.LoadBalancerSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupSpec !== undefined) {
            exports.TargetGroupSpec.encode(message.targetGroupSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxOpeningTrafficDuration !== undefined) {
            duration_1.Duration.encode(message.maxOpeningTrafficDuration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancerSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupSpec = exports.TargetGroupSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxOpeningTrafficDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLoadBalancerSpec };
        if (object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null) {
            message.targetGroupSpec = exports.TargetGroupSpec.fromJSON(object.targetGroupSpec);
        }
        else {
            message.targetGroupSpec = undefined;
        }
        if (object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null) {
            message.maxOpeningTrafficDuration = duration_1.Duration.fromJSON(object.maxOpeningTrafficDuration);
        }
        else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupSpec !== undefined &&
            (obj.targetGroupSpec = message.targetGroupSpec
                ? exports.TargetGroupSpec.toJSON(message.targetGroupSpec)
                : undefined);
        message.maxOpeningTrafficDuration !== undefined &&
            (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
                ? duration_1.Duration.toJSON(message.maxOpeningTrafficDuration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLoadBalancerSpec };
        if (object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null) {
            message.targetGroupSpec = exports.TargetGroupSpec.fromPartial(object.targetGroupSpec);
        }
        else {
            message.targetGroupSpec = undefined;
        }
        if (object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null) {
            message.maxOpeningTrafficDuration = duration_1.Duration.fromPartial(object.maxOpeningTrafficDuration);
        }
        else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancerSpec.$type, exports.LoadBalancerSpec);
const baseTargetGroupSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.TargetGroupSpec',
    name: '',
    description: '',
};
exports.TargetGroupSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.TargetGroupSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.TargetGroupSpec_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetGroupSpec };
        message.labels = {};
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
                    const entry3 = exports.TargetGroupSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
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
        const message = { ...baseTargetGroupSpec };
        message.labels = {};
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTargetGroupSpec };
        message.labels = {};
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroupSpec.$type, exports.TargetGroupSpec);
const baseTargetGroupSpec_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry',
    key: '',
    value: '',
};
exports.TargetGroupSpec_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry',
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
            ...baseTargetGroupSpec_LabelsEntry,
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
            ...baseTargetGroupSpec_LabelsEntry,
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
            ...baseTargetGroupSpec_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroupSpec_LabelsEntry.$type, exports.TargetGroupSpec_LabelsEntry);
const baseApplicationLoadBalancerSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec',
};
exports.ApplicationLoadBalancerSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupSpec !== undefined) {
            exports.ApplicationTargetGroupSpec.encode(message.targetGroupSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxOpeningTrafficDuration !== undefined) {
            duration_1.Duration.encode(message.maxOpeningTrafficDuration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationLoadBalancerSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupSpec = exports.ApplicationTargetGroupSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxOpeningTrafficDuration = duration_1.Duration.decode(reader, reader.uint32());
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
            ...baseApplicationLoadBalancerSpec,
        };
        if (object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null) {
            message.targetGroupSpec = exports.ApplicationTargetGroupSpec.fromJSON(object.targetGroupSpec);
        }
        else {
            message.targetGroupSpec = undefined;
        }
        if (object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null) {
            message.maxOpeningTrafficDuration = duration_1.Duration.fromJSON(object.maxOpeningTrafficDuration);
        }
        else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupSpec !== undefined &&
            (obj.targetGroupSpec = message.targetGroupSpec
                ? exports.ApplicationTargetGroupSpec.toJSON(message.targetGroupSpec)
                : undefined);
        message.maxOpeningTrafficDuration !== undefined &&
            (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
                ? duration_1.Duration.toJSON(message.maxOpeningTrafficDuration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseApplicationLoadBalancerSpec,
        };
        if (object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null) {
            message.targetGroupSpec = exports.ApplicationTargetGroupSpec.fromPartial(object.targetGroupSpec);
        }
        else {
            message.targetGroupSpec = undefined;
        }
        if (object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null) {
            message.maxOpeningTrafficDuration = duration_1.Duration.fromPartial(object.maxOpeningTrafficDuration);
        }
        else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationLoadBalancerSpec.$type, exports.ApplicationLoadBalancerSpec);
const baseApplicationTargetGroupSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec',
    name: '',
    description: '',
};
exports.ApplicationTargetGroupSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.ApplicationTargetGroupSpec_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationTargetGroupSpec,
        };
        message.labels = {};
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
                    const entry3 = exports.ApplicationTargetGroupSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
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
            ...baseApplicationTargetGroupSpec,
        };
        message.labels = {};
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseApplicationTargetGroupSpec,
        };
        message.labels = {};
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationTargetGroupSpec.$type, exports.ApplicationTargetGroupSpec);
const baseApplicationTargetGroupSpec_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry',
    key: '',
    value: '',
};
exports.ApplicationTargetGroupSpec_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry',
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
            ...baseApplicationTargetGroupSpec_LabelsEntry,
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
            ...baseApplicationTargetGroupSpec_LabelsEntry,
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
            ...baseApplicationTargetGroupSpec_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationTargetGroupSpec_LabelsEntry.$type, exports.ApplicationTargetGroupSpec_LabelsEntry);
const baseHealthChecksSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthChecksSpec',
};
exports.HealthChecksSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthChecksSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.healthCheckSpecs) {
            exports.HealthCheckSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxCheckingHealthDuration !== undefined) {
            duration_1.Duration.encode(message.maxCheckingHealthDuration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthChecksSpec };
        message.healthCheckSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.healthCheckSpecs.push(exports.HealthCheckSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxCheckingHealthDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHealthChecksSpec };
        message.healthCheckSpecs = [];
        if (object.healthCheckSpecs !== undefined &&
            object.healthCheckSpecs !== null) {
            for (const e of object.healthCheckSpecs) {
                message.healthCheckSpecs.push(exports.HealthCheckSpec.fromJSON(e));
            }
        }
        if (object.maxCheckingHealthDuration !== undefined &&
            object.maxCheckingHealthDuration !== null) {
            message.maxCheckingHealthDuration = duration_1.Duration.fromJSON(object.maxCheckingHealthDuration);
        }
        else {
            message.maxCheckingHealthDuration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.healthCheckSpecs) {
            obj.healthCheckSpecs = message.healthCheckSpecs.map((e) => e ? exports.HealthCheckSpec.toJSON(e) : undefined);
        }
        else {
            obj.healthCheckSpecs = [];
        }
        message.maxCheckingHealthDuration !== undefined &&
            (obj.maxCheckingHealthDuration = message.maxCheckingHealthDuration
                ? duration_1.Duration.toJSON(message.maxCheckingHealthDuration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHealthChecksSpec };
        message.healthCheckSpecs = [];
        if (object.healthCheckSpecs !== undefined &&
            object.healthCheckSpecs !== null) {
            for (const e of object.healthCheckSpecs) {
                message.healthCheckSpecs.push(exports.HealthCheckSpec.fromPartial(e));
            }
        }
        if (object.maxCheckingHealthDuration !== undefined &&
            object.maxCheckingHealthDuration !== null) {
            message.maxCheckingHealthDuration = duration_1.Duration.fromPartial(object.maxCheckingHealthDuration);
        }
        else {
            message.maxCheckingHealthDuration = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthChecksSpec.$type, exports.HealthChecksSpec);
const baseHealthCheckSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthCheckSpec',
    unhealthyThreshold: 0,
    healthyThreshold: 0,
};
exports.HealthCheckSpec = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthCheckSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(24).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(32).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            exports.HealthCheckSpec_TcpOptions.encode(message.tcpOptions, writer.uint32(42).fork()).ldelim();
        }
        if (message.httpOptions !== undefined) {
            exports.HealthCheckSpec_HttpOptions.encode(message.httpOptions, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheckSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unhealthyThreshold = longToNumber(reader.int64());
                    break;
                case 4:
                    message.healthyThreshold = longToNumber(reader.int64());
                    break;
                case 5:
                    message.tcpOptions = exports.HealthCheckSpec_TcpOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.httpOptions = exports.HealthCheckSpec_HttpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHealthCheckSpec };
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = duration_1.Duration.fromJSON(object.interval);
        }
        else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromJSON(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null) {
            message.unhealthyThreshold = Number(object.unhealthyThreshold);
        }
        else {
            message.unhealthyThreshold = 0;
        }
        if (object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null) {
            message.healthyThreshold = Number(object.healthyThreshold);
        }
        else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = exports.HealthCheckSpec_TcpOptions.fromJSON(object.tcpOptions);
        }
        else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = exports.HealthCheckSpec_HttpOptions.fromJSON(object.httpOptions);
        }
        else {
            message.httpOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = message.unhealthyThreshold);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = message.healthyThreshold);
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? exports.HealthCheckSpec_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? exports.HealthCheckSpec_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHealthCheckSpec };
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = duration_1.Duration.fromPartial(object.interval);
        }
        else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromPartial(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null) {
            message.unhealthyThreshold = object.unhealthyThreshold;
        }
        else {
            message.unhealthyThreshold = 0;
        }
        if (object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null) {
            message.healthyThreshold = object.healthyThreshold;
        }
        else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = exports.HealthCheckSpec_TcpOptions.fromPartial(object.tcpOptions);
        }
        else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = exports.HealthCheckSpec_HttpOptions.fromPartial(object.httpOptions);
        }
        else {
            message.httpOptions = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheckSpec.$type, exports.HealthCheckSpec);
const baseHealthCheckSpec_TcpOptions = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions',
    port: 0,
};
exports.HealthCheckSpec_TcpOptions = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheckSpec_TcpOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseHealthCheckSpec_TcpOptions,
        };
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
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheckSpec_TcpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheckSpec_TcpOptions.$type, exports.HealthCheckSpec_TcpOptions);
const baseHealthCheckSpec_HttpOptions = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions',
    port: 0,
    path: '',
};
exports.HealthCheckSpec_HttpOptions = {
    $type: 'yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheckSpec_HttpOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
                    break;
                case 2:
                    message.path = reader.string();
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
            ...baseHealthCheckSpec_HttpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = message.port);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseHealthCheckSpec_HttpOptions,
        };
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheckSpec_HttpOptions.$type, exports.HealthCheckSpec_HttpOptions);
const baseManagedInstance = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ManagedInstance',
    id: '',
    status: 0,
    instanceId: '',
    fqdn: '',
    name: '',
    statusMessage: '',
    zoneId: '',
};
exports.ManagedInstance = {
    $type: 'yandex.cloud.compute.v1.instancegroup.ManagedInstance',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.instanceId !== '') {
            writer.uint32(26).string(message.instanceId);
        }
        if (message.fqdn !== '') {
            writer.uint32(34).string(message.fqdn);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.statusMessage !== '') {
            writer.uint32(50).string(message.statusMessage);
        }
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        for (const v of message.networkInterfaces) {
            exports.NetworkInterface.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.statusChangedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.statusChangedAt), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseManagedInstance };
        message.networkInterfaces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.instanceId = reader.string();
                    break;
                case 4:
                    message.fqdn = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.statusMessage = reader.string();
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.networkInterfaces.push(exports.NetworkInterface.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.statusChangedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseManagedInstance };
        message.networkInterfaces = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = managedInstance_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        }
        else {
            message.instanceId = '';
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        }
        else {
            message.fqdn = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = String(object.statusMessage);
        }
        else {
            message.statusMessage = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(exports.NetworkInterface.fromJSON(e));
            }
        }
        if (object.statusChangedAt !== undefined &&
            object.statusChangedAt !== null) {
            message.statusChangedAt = fromJsonTimestamp(object.statusChangedAt);
        }
        else {
            message.statusChangedAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined &&
            (obj.status = managedInstance_StatusToJSON(message.status));
        message.instanceId !== undefined &&
            (obj.instanceId = message.instanceId);
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.name !== undefined && (obj.name = message.name);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) => e ? exports.NetworkInterface.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaces = [];
        }
        message.statusChangedAt !== undefined &&
            (obj.statusChangedAt = message.statusChangedAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseManagedInstance };
        message.networkInterfaces = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        }
        else {
            message.instanceId = '';
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        }
        else {
            message.fqdn = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = object.statusMessage;
        }
        else {
            message.statusMessage = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(exports.NetworkInterface.fromPartial(e));
            }
        }
        if (object.statusChangedAt !== undefined &&
            object.statusChangedAt !== null) {
            message.statusChangedAt = object.statusChangedAt;
        }
        else {
            message.statusChangedAt = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManagedInstance.$type, exports.ManagedInstance);
const baseNetworkInterface = {
    $type: 'yandex.cloud.compute.v1.instancegroup.NetworkInterface',
    index: '',
    macAddress: '',
    subnetId: '',
};
exports.NetworkInterface = {
    $type: 'yandex.cloud.compute.v1.instancegroup.NetworkInterface',
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterface };
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNetworkInterface };
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNetworkInterface };
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterface.$type, exports.NetworkInterface);
const basePrimaryAddress = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PrimaryAddress',
    address: '',
};
exports.PrimaryAddress = {
    $type: 'yandex.cloud.compute.v1.instancegroup.PrimaryAddress',
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
    $type: 'yandex.cloud.compute.v1.instancegroup.OneToOneNat',
    address: '',
    ipVersion: 0,
};
exports.OneToOneNat = {
    $type: 'yandex.cloud.compute.v1.instancegroup.OneToOneNat',
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
    $type: 'yandex.cloud.compute.v1.instancegroup.DnsRecord',
    fqdn: '',
    dnsZoneId: '',
    ttl: 0,
    ptr: false,
};
exports.DnsRecord = {
    $type: 'yandex.cloud.compute.v1.instancegroup.DnsRecord',
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
const baseLogRecord = {
    $type: 'yandex.cloud.compute.v1.instancegroup.LogRecord',
    message: '',
};
exports.LogRecord = {
    $type: 'yandex.cloud.compute.v1.instancegroup.LogRecord',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogRecord };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogRecord };
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        else {
            message.timestamp = undefined;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogRecord };
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = undefined;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogRecord.$type, exports.LogRecord);
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
