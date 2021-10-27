/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1.instancegroup';

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IPV4 = 1,
    /** IPV6 - IPv6 address, not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
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

export function ipVersionToJSON(object: IpVersion): string {
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

export interface InstanceGroup {
    /** ID of the instance group. */
    id: string;
    /** ID of the folder that the instance group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the instance group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the instance group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * Instance template for creating the instance group.
     * For more information, see [Instance Templates](/docs/compute/concepts/instance-groups/instance-template).
     */
    instanceTemplate: InstanceTemplate | undefined;
    /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
    scalePolicy: ScalePolicy | undefined;
    /** Deployment policy of the instance group. */
    deployPolicy: DeployPolicy | undefined;
    /** Allocation policy of the instance group by zones and regions. */
    allocationPolicy: AllocationPolicy | undefined;
    /** Information that indicates which entities can be related to this load balancer. */
    loadBalancerState: LoadBalancerState | undefined;
    /** States of instances for this instance group. */
    managedInstancesState: ManagedInstancesState | undefined;
    /** Load balancing specification. */
    loadBalancerSpec: LoadBalancerSpec | undefined;
    /** Health checking specification. For more information, see [Health check](/docs/load-balancer/concepts/health-check). */
    healthChecksSpec: HealthChecksSpec | undefined;
    /**
     * ID of the service account. The service account will be used for all API calls
     * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Status of the instance group. */
    status: InstanceGroup_Status;
    variables: Variable[];
    /**
     * Flag prohibiting deletion of the instance group.
     *
     * Allowed values:</br>- `false`: The instance group can be deleted.</br>- `true`: The instance group cannot be deleted.
     *
     * The default is `false`.
     */
    deletionProtection: boolean;
    /** Application load balancer spec */
    applicationLoadBalancerSpec: ApplicationLoadBalancerSpec | undefined;
    /** Application load balancer state */
    applicationLoadBalancerState: ApplicationLoadBalancerState | undefined;
}

export enum InstanceGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** STARTING - Instance group is being started and will become active soon. */
    STARTING = 1,
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
    ACTIVE = 2,
    /**
     * STOPPING - Instance group is being stopped.
     * Group's instances stop receiving traffic from the load balancer (if any) and are then stopped.
     */
    STOPPING = 3,
    /**
     * STOPPED - Instance group is stopped.
     * In this state the group cannot be updated and does not react to any changes made to its instances.
     * To start the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Start].
     */
    STOPPED = 4,
    /** DELETING - Instance group is being deleted. */
    DELETING = 5,
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
    PAUSED = 6,
    UNRECOGNIZED = -1,
}

export function instanceGroup_StatusFromJSON(
    object: any
): InstanceGroup_Status {
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

export function instanceGroup_StatusToJSON(
    object: InstanceGroup_Status
): string {
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

export interface InstanceGroup_LabelsEntry {
    key: string;
    value: string;
}

export interface ApplicationLoadBalancerState {
    targetGroupId: string;
    statusMessage: string;
}

export interface Variable {
    key: string;
    value: string;
}

export interface LoadBalancerState {
    /** ID of the target group used for load balancing. */
    targetGroupId: string;
    /** Status message of the target group. */
    statusMessage: string;
}

export interface ManagedInstancesState {
    /** Target number of instances for this instance group. */
    targetSize: number;
    /** The number of running instances that match the current instance template. For more information, see [ManagedInstance.Status.RUNNING_ACTUAL]. */
    runningActualCount: number;
    /** The number of running instances that does not match the current instance template. For more information, see [ManagedInstance.Status.RUNNING_OUTDATED]. */
    runningOutdatedCount: number;
    /** The number of instances in flight (for example, updating, starting, deleting). For more information, see [ManagedInstance.Status]. */
    processingCount: number;
}

export interface ManagedInstancesState_Statuses {
    /** Instance is being created. */
    creating: number;
    /** Instance is being started. */
    starting: number;
    /** Instance is being opened to receive traffic. */
    opening: number;
    /** Instance is being warmed. */
    warming: number;
    /** Instance is running normally. */
    running: number;
    /** Instance is being closed to traffic. */
    closing: number;
    /** Instance is being stopped. */
    stopping: number;
    /** Instance is being updated. */
    updating: number;
    /** Instance is being deleted. */
    deleting: number;
    /** Instance failed and needs to be recreated. */
    failed: number;
}

export interface ScalePolicy {
    /** [Manual scaling policy](/docs/compute/concepts/instance-groups/scale#fixed-policy) of the instance group. */
    fixedScale: ScalePolicy_FixedScale | undefined;
    /** [Automatic scaling policy](/docs/compute/concepts/instance-groups/scale#auto-scale) of the instance group. */
    autoScale: ScalePolicy_AutoScale | undefined;
    /** Test spec for [automatic scaling policy](/docs/compute/concepts/instance-groups/scale#auto-scale) of the instance group. */
    testAutoScale: ScalePolicy_AutoScale | undefined;
}

export interface ScalePolicy_AutoScale {
    /** Lower limit for instance count in each zone. */
    minZoneSize: number;
    /**
     * Upper limit for total instance count (across all zones).
     * 0 means maximum limit = 100.
     */
    maxSize: number;
    /**
     * Time in seconds allotted for averaging metrics.
     * 1 minute by default.
     */
    measurementDuration: Duration | undefined;
    /**
     * The warmup time of the instance in seconds. During this time,
     * traffic is sent to the instance, but instance metrics are not collected.
     */
    warmupDuration: Duration | undefined;
    /**
     * Minimum amount of time in seconds allotted for monitoring before
     * Instance Groups can reduce the number of instances in the group.
     * During this time, the group size doesn't decrease, even if the new metric values
     * indicate that it should.
     */
    stabilizationDuration: Duration | undefined;
    /** Target group size. */
    initialSize: number;
    /** Defines an autoscaling rule based on the average CPU utilization of the instance group. */
    cpuUtilizationRule: ScalePolicy_CpuUtilizationRule | undefined;
    /** Defines an autoscaling rule based on a [custom metric](/docs/monitoring/operations/metric/add) from Yandex Monitoring. */
    customRules: ScalePolicy_CustomRule[];
}

export interface ScalePolicy_CpuUtilizationRule {
    /** Target CPU utilization level. Instance Groups maintains this level for each availability zone. */
    utilizationTarget: number;
}

export interface ScalePolicy_CustomRule {
    /**
     * Custom metric rule type. This field affects which label from
     * the custom metric should be used: `zone_id` or `instance_id`.
     */
    ruleType: ScalePolicy_CustomRule_RuleType;
    /** Type of custom metric. This field affects how Instance Groups calculates the average metric value. */
    metricType: ScalePolicy_CustomRule_MetricType;
    /** Name of custom metric in Yandex Monitoring that should be used for scaling. */
    metricName: string;
    /** Labels of custom metric in Yandex Monitoring that should be used for scaling. */
    labels: { [key: string]: string };
    /** Target value for the custom metric. Instance Groups maintains this level for each availability zone. */
    target: number;
    /** Folder id of custom metric in Yandex Monitoring that should be used for scaling. */
    folderId: string;
    /** Service of custom metric in Yandex Monitoring that should be used for scaling. */
    service: string;
}

export enum ScalePolicy_CustomRule_RuleType {
    RULE_TYPE_UNSPECIFIED = 0,
    /**
     * UTILIZATION - This type means that the metric applies to one instance.
     * First, Instance Groups calculates the average metric value for each instance,
     * then averages the values for instances in one availability zone.
     * This type of metric must have the `instance_id` label.
     */
    UTILIZATION = 1,
    /**
     * WORKLOAD - This type means that the metric applies to instances in one availability zone.
     * This type of metric must have the `zone_id` label.
     */
    WORKLOAD = 2,
    UNRECOGNIZED = -1,
}

export function scalePolicy_CustomRule_RuleTypeFromJSON(
    object: any
): ScalePolicy_CustomRule_RuleType {
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

export function scalePolicy_CustomRule_RuleTypeToJSON(
    object: ScalePolicy_CustomRule_RuleType
): string {
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

export enum ScalePolicy_CustomRule_MetricType {
    METRIC_TYPE_UNSPECIFIED = 0,
    /**
     * GAUGE - This type is used for metrics that show the metric value at a certain point in time,
     * such as requests per second to the server on an instance.
     *
     * Instance Groups calculates the average metric value for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    GAUGE = 1,
    /**
     * COUNTER - This type is used for metrics that monotonically increase over time,
     * such as the total number of requests to the server on an instance.
     *
     * Instance Groups calculates the average value increase for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    COUNTER = 2,
    UNRECOGNIZED = -1,
}

export function scalePolicy_CustomRule_MetricTypeFromJSON(
    object: any
): ScalePolicy_CustomRule_MetricType {
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

export function scalePolicy_CustomRule_MetricTypeToJSON(
    object: ScalePolicy_CustomRule_MetricType
): string {
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

export interface ScalePolicy_CustomRule_LabelsEntry {
    key: string;
    value: string;
}

export interface ScalePolicy_FixedScale {
    /** Number of instances in the instance group. */
    size: number;
}

export interface DeployPolicy {
    /**
     * The maximum number of running instances that can be taken offline (i.e., stopped or deleted) at the same time
     * during the update process.
     * If [max_expansion] is not specified or set to zero, [max_unavailable] must be set to a non-zero value.
     */
    maxUnavailable: number;
    /**
     * The maximum number of instances that can be deleted at the same time.
     *
     * The value 0 is any number of virtual machines within the allowed values.
     */
    maxDeleting: number;
    /**
     * The maximum number of instances that can be created at the same time.
     *
     * The value 0 is any number of virtual machines within the allowed values.
     */
    maxCreating: number;
    /**
     * The maximum number of instances that can be temporarily allocated above the group's target size
     * during the update process.
     * If [max_unavailable] is not specified or set to zero, [max_expansion] must be set to a non-zero value.
     */
    maxExpansion: number;
    /**
     * Instance startup duration.
     * Instance will be considered up and running (and start receiving traffic) only after startup_duration
     * has elapsed and all health checks are passed.
     * See [yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status] for more information.
     */
    startupDuration: Duration | undefined;
    /** Affects the lifecycle of the instance during deployment. */
    strategy: DeployPolicy_Strategy;
}

export enum DeployPolicy_Strategy {
    STRATEGY_UNSPECIFIED = 0,
    /** PROACTIVE - Instance Groups can forcefully stop a running instance. This is the default. */
    PROACTIVE = 1,
    /**
     * OPPORTUNISTIC - Instance Groups does not stop a running instance.
     * Instead, it will wait until the instance stops itself or becomes unhealthy.
     */
    OPPORTUNISTIC = 2,
    UNRECOGNIZED = -1,
}

export function deployPolicy_StrategyFromJSON(
    object: any
): DeployPolicy_Strategy {
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

export function deployPolicy_StrategyToJSON(
    object: DeployPolicy_Strategy
): string {
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

export interface AllocationPolicy {
    /** List of availability zones. */
    zones: AllocationPolicy_Zone[];
}

export interface AllocationPolicy_Zone {
    /** ID of the availability zone where the instance resides. */
    zoneId: string;
}

export interface InstanceTemplate {
    /** Description of the instance template. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * ID of the hardware platform configuration for the instance.
     * Platforms allows you to create various types of instances: with a large amount of memory,
     * with a large number of cores, with a burstable performance.
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /** Computing resources of the instance such as the amount of memory and number of cores. */
    resourcesSpec: ResourcesSpec | undefined;
    /**
     * The metadata `key:value` pairs assigned to this instance template. This includes custom metadata and predefined keys.
     *
     * Metadata values may contain one of the supported placeholders:
     *   {instance_group.id}
     *   {instance.short_id}
     *   {instance.index}
     *   {instance.index_in_zone}
     *   {instance.zone_id}
     * InstanceGroup and Instance labels may be copied to metadata following way:
     *   {instance_group.labels.some_label_key}
     *   {instance.labels.another_label_key}
     * These placeholders will be substituted for each created instance anywhere in the value text.
     * In the rare case the value requires to contain this placeholder explicitly,
     * it must be escaped with double brackets, in example {instance.index}.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: { [key: string]: string };
    /** Boot disk specification that will be attached to the instance. */
    bootDiskSpec: AttachedDiskSpec | undefined;
    /** Array of secondary disks that will be attached to the instance. */
    secondaryDiskSpecs: AttachedDiskSpec[];
    /** Array of network interfaces that will be attached to the instance. */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    /** Scheduling policy for the instance. */
    schedulingPolicy: SchedulingPolicy | undefined;
    /** Service account ID for the instance. */
    serviceAccountId: string;
    /** Network settings for the instance. */
    networkSettings: NetworkSettings | undefined;
    /**
     * Name of the instance.
     * In order to be unique it must contain at least on of instance unique placeholders:
     *   {instance.short_id}
     *   {instance.index}
     *   combination of {instance.zone_id} and {instance.index_in_zone}
     * Example: my-instance-{instance.index}
     * If not set, default is used: {instance_group.id}-{instance.short_id}
     * It may also contain another placeholders, see metadata doc for full list.
     */
    name: string;
    /**
     * Host name for the instance.
     * This field is used to generate the [yandex.cloud.compute.v1.Instance.fqdn] value.
     * The host name must be unique within the network and region.
     * If not specified, the host name will be equal to [yandex.cloud.compute.v1.Instance.id] of the instance
     * and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
     *
     * In order to be unique it must contain at least on of instance unique placeholders:
     *   {instance.short_id}
     *   {instance.index}
     *   combination of {instance.zone_id} and {instance.index_in_zone}
     * Example: my-instance-{instance.index}
     * If not set, `name` value will be used
     * It may also contain another placeholders, see metadata doc for full list.
     */
    hostname: string;
    /** Placement Group */
    placementPolicy: PlacementPolicy | undefined;
}

export interface InstanceTemplate_LabelsEntry {
    key: string;
    value: string;
}

export interface InstanceTemplate_MetadataEntry {
    key: string;
    value: string;
}

export interface PlacementPolicy {
    /** Identifier of placement group */
    placementGroupId: string;
    /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
    hostAffinityRules: PlacementPolicy_HostAffinityRule[];
}

/** Affinitity definition */
export interface PlacementPolicy_HostAffinityRule {
    /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
    key: string;
    /** Include or exclude action */
    op: PlacementPolicy_HostAffinityRule_Operator;
    /** Affinity value or host ID or host group ID */
    values: string[];
}

export enum PlacementPolicy_HostAffinityRule_Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
    UNRECOGNIZED = -1,
}

export function placementPolicy_HostAffinityRule_OperatorFromJSON(
    object: any
): PlacementPolicy_HostAffinityRule_Operator {
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

export function placementPolicy_HostAffinityRule_OperatorToJSON(
    object: PlacementPolicy_HostAffinityRule_Operator
): string {
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

export interface ResourcesSpec {
    /** The amount of memory available to the instance, specified in bytes. */
    memory: number;
    /** The number of cores available to the instance. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
    /** The number of GPUs available to the instance. */
    gpus: number;
}

export interface AttachedDiskSpec {
    /** Access mode to the Disk resource. */
    mode: AttachedDiskSpec_Mode;
    /**
     * Serial number that is reflected in the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     */
    deviceName: string;
    /**
     * oneof disk_spec or disk_id
     * Disk specification that is attached to the instance. For more information, see [Disks](/docs/compute/concepts/disk).
     */
    diskSpec: AttachedDiskSpec_DiskSpec | undefined;
    /** Set to use an existing disk. To set use variables. */
    diskId: string;
}

export enum AttachedDiskSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
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
    /** Description of the disk. */
    description: string;
    /** ID of the disk type. */
    typeId: string;
    /** Size of the disk, specified in bytes. */
    size: number;
    /** ID of the image that will be used for disk creation. */
    imageId: string | undefined;
    /** ID of the snapshot that will be used for disk creation. */
    snapshotId: string | undefined;
    /**
     * When set to true, disk will not be deleted even after managed instance is deleted.
     * It will be a user's responsibility to delete such disks.
     */
    preserveAfterInstanceDelete: boolean;
}

export interface NetworkInterfaceSpec {
    /** ID of the network. */
    networkId: string;
    /** IDs of the subnets. */
    subnetIds: string[];
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4AddressSpec: PrimaryAddressSpec | undefined;
    /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6AddressSpec: PrimaryAddressSpec | undefined;
    /** IDs of security groups. */
    securityGroupIds: string[];
}

export interface PrimaryAddressSpec {
    /**
     * An external IP address configuration.
     * If not specified, then this managed instance will have no external internet access.
     */
    oneToOneNatSpec: OneToOneNatSpec | undefined;
    /** Internal DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
    /** Optional. Manual set static internal IP. To set use variables. */
    address: string;
}

export interface OneToOneNatSpec {
    /** IP version for the public IP address. */
    ipVersion: IpVersion;
    /** Manual set static public IP. To set use variables. (optional) */
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

export interface SchedulingPolicy {
    /**
     * Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
}

export interface NetworkSettings {
    /** Type of instance network. */
    type: NetworkSettings_Type;
}

export enum NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    SOFTWARE_ACCELERATED = 2,
    HARDWARE_ACCELERATED = 3,
    UNRECOGNIZED = -1,
}

export function networkSettings_TypeFromJSON(
    object: any
): NetworkSettings_Type {
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

export function networkSettings_TypeToJSON(
    object: NetworkSettings_Type
): string {
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

export interface LoadBalancerSpec {
    /** Specification of the target group that the instance group will be added to. For more information, see [Target groups and resources](/docs/load-balancer/concepts/target-resources). */
    targetGroupSpec: TargetGroupSpec | undefined;
    /**
     * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded,
     * the VM will be turned off based on the deployment policy. Specified in seconds.
     */
    maxOpeningTrafficDuration: Duration | undefined;
}

export interface TargetGroupSpec {
    /** Name of the target group. */
    name: string;
    /** Description of the target group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface TargetGroupSpec_LabelsEntry {
    key: string;
    value: string;
}

export interface ApplicationLoadBalancerSpec {
    /** Specification of the alb's target group that the instance group will be added to. */
    targetGroupSpec: ApplicationTargetGroupSpec | undefined;
    /**
     * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded,
     * the VM will be turned off based on the deployment policy. Specified in seconds.
     */
    maxOpeningTrafficDuration: Duration | undefined;
}

export interface ApplicationTargetGroupSpec {
    /** Name of the target group. */
    name: string;
    /** Description of the target group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface ApplicationTargetGroupSpec_LabelsEntry {
    key: string;
    value: string;
}

export interface HealthChecksSpec {
    /** Health checking specification. For more information, see [Health check](/docs/load-balancer/concepts/health-check). */
    healthCheckSpecs: HealthCheckSpec[];
    /**
     * Timeout for waiting for the VM to become healthy. If the timeout is exceeded,
     * the VM will be turned off based on the deployment policy. Specified in seconds.
     */
    maxCheckingHealthDuration: Duration | undefined;
}

export interface HealthCheckSpec {
    /** The interval between health checks. The default is 2 seconds. */
    interval: Duration | undefined;
    /** Timeout for the managed instance to return a response for the health check. The default is 1 second. */
    timeout: Duration | undefined;
    /** The number of failed health checks for the managed instance to be considered unhealthy. The default (0) is 2. */
    unhealthyThreshold: number;
    /** The number of successful health checks required in order for the managed instance to be considered healthy. The default (0) is 2. */
    healthyThreshold: number;
    /** Configuration options for a TCP health check. */
    tcpOptions: HealthCheckSpec_TcpOptions | undefined;
    /** Configuration options for an HTTP health check. */
    httpOptions: HealthCheckSpec_HttpOptions | undefined;
}

export interface HealthCheckSpec_TcpOptions {
    /** Port to use for TCP health checks. */
    port: number;
}

export interface HealthCheckSpec_HttpOptions {
    /** Port to use for HTTP health checks. */
    port: number;
    /** URL path to set for health checking requests. */
    path: string;
}

/** A ManagedInstance resource. For more information, see [Instance Groups Concepts](/docs/compute/concepts/instance-groups/). */
export interface ManagedInstance {
    /** ID of the managed instance. */
    id: string;
    /** Status of the managed instance. */
    status: ManagedInstance_Status;
    /** ID of the instance. */
    instanceId: string;
    /** Fully Qualified Domain Name. */
    fqdn: string;
    /** The name of the managed instance. */
    name: string;
    /** Status message for the managed instance. */
    statusMessage: string;
    /** ID of the availability zone where the instance resides. */
    zoneId: string;
    /** Array of network interfaces that are attached to the managed instance. */
    networkInterfaces: NetworkInterface[];
    /** The timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format when the status of the managed instance was last changed. */
    statusChangedAt: Date | undefined;
}

export enum ManagedInstance_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING_INSTANCE - Instance is being created. */
    CREATING_INSTANCE = 11,
    /** UPDATING_INSTANCE - Instance is being updated. */
    UPDATING_INSTANCE = 12,
    /** DELETING_INSTANCE - Instance is being deleted. */
    DELETING_INSTANCE = 13,
    /** STARTING_INSTANCE - Instance is being started. */
    STARTING_INSTANCE = 14,
    /** STOPPING_INSTANCE - Instance is being stopped. */
    STOPPING_INSTANCE = 15,
    /** AWAITING_STARTUP_DURATION - Instance has been created successfully, but startup duration has not elapsed yet. */
    AWAITING_STARTUP_DURATION = 16,
    /** CHECKING_HEALTH - Instance has been created successfully and startup duration has elapsed, but health checks have not passed yet and the managed instance is not ready to receive traffic. */
    CHECKING_HEALTH = 17,
    /** OPENING_TRAFFIC - Instance Groups is initiating health checks and routing traffic to the instances. */
    OPENING_TRAFFIC = 18,
    /** AWAITING_WARMUP_DURATION - Instance is now receiving traffic, but warmup duration has not elapsed yet. */
    AWAITING_WARMUP_DURATION = 19,
    /** CLOSING_TRAFFIC - Instance Groups has initiated the process of stopping routing traffic to the instances. */
    CLOSING_TRAFFIC = 20,
    /** RUNNING_ACTUAL - Instance is running normally and its attributes match the current InstanceTemplate. */
    RUNNING_ACTUAL = 21,
    /**
     * RUNNING_OUTDATED - Instance is running normally, but its attributes do not match the current InstanceTemplate.
     * It will be updated, recreated or deleted shortly.
     */
    RUNNING_OUTDATED = 22,
    /** STOPPED - Instance was stopped. */
    STOPPED = 23,
    /** DELETED - Instance was deleted. */
    DELETED = 24,
    UNRECOGNIZED = -1,
}

export function managedInstance_StatusFromJSON(
    object: any
): ManagedInstance_Status {
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

export function managedInstance_StatusToJSON(
    object: ManagedInstance_Status
): string {
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

export interface NetworkInterface {
    /**
     * The index of the network interface, generated by the server, 0,1,2... etc.
     * Currently only one network interface is supported per instance.
     */
    index: string;
    /** MAC address that is assigned to the network interface. */
    macAddress: string;
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4Address: PrimaryAddress | undefined;
    /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 is not available yet. */
    primaryV6Address: PrimaryAddress | undefined;
}

export interface PrimaryAddress {
    /**
     * An IPv4 internal network address that is assigned to the managed instance for this network interface.
     * If not specified by the user, an unused internal IP is assigned by the system.
     */
    address: string;
    /** One-to-one NAT configuration. If missing, NAT has not been set up. */
    oneToOneNat: OneToOneNat | undefined;
    /** Internal DNS configuration. */
    dnsRecords: DnsRecord[];
}

export interface OneToOneNat {
    /** An IPv4 external network address that is assigned to the managed instance for this network interface. */
    address: string;
    /** External IP address version. */
    ipVersion: IpVersion;
    /** External DNS configuration. */
    dnsRecords: DnsRecord[];
}

export interface DnsRecord {
    /**
     * Name of the A/AAAA record as specified when creating the instance.
     * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
     */
    fqdn: string;
    /** DNS zone id (optional, if not set, some private zone is used). */
    dnsZoneId: string;
    /** DNS record ttl (optional, if 0, a reasonable default is used). */
    ttl: number;
    /** When true, indicates there is a corresponding auto-created PTR DNS record. */
    ptr: boolean;
}

export interface LogRecord {
    /** Log timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp: Date | undefined;
    /** The log message. */
    message: string;
}

const baseInstanceGroup: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    status: 0,
    deletionProtection: false,
};

export const InstanceGroup = {
    encode(
        message: InstanceGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            InstanceGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            InstanceTemplate.encode(
                message.instanceTemplate,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(
                message.deployPolicy,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.loadBalancerState !== undefined) {
            LoadBalancerState.encode(
                message.loadBalancerState,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.managedInstancesState !== undefined) {
            ManagedInstancesState.encode(
                message.managedInstancesState,
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.loadBalancerSpec !== undefined) {
            LoadBalancerSpec.encode(
                message.loadBalancerSpec,
                writer.uint32(114).fork()
            ).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            HealthChecksSpec.encode(
                message.healthChecksSpec,
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(130).string(message.serviceAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(136).int32(message.status);
        }
        for (const v of message.variables) {
            Variable.encode(v!, writer.uint32(146).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(152).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            ApplicationLoadBalancerSpec.encode(
                message.applicationLoadBalancerSpec,
                writer.uint32(162).fork()
            ).ldelim();
        }
        if (message.applicationLoadBalancerState !== undefined) {
            ApplicationLoadBalancerState.encode(
                message.applicationLoadBalancerState,
                writer.uint32(170).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InstanceGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstanceGroup } as InstanceGroup;
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
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = InstanceGroup_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.instanceTemplate = InstanceTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.deployPolicy = DeployPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.allocationPolicy = AllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.loadBalancerState = LoadBalancerState.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.managedInstancesState =
                        ManagedInstancesState.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadBalancerSpec = LoadBalancerSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 15:
                    message.healthChecksSpec = HealthChecksSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 16:
                    message.serviceAccountId = reader.string();
                    break;
                case 17:
                    message.status = reader.int32() as any;
                    break;
                case 18:
                    message.variables.push(
                        Variable.decode(reader, reader.uint32())
                    );
                    break;
                case 19:
                    message.deletionProtection = reader.bool();
                    break;
                case 20:
                    message.applicationLoadBalancerSpec =
                        ApplicationLoadBalancerSpec.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 21:
                    message.applicationLoadBalancerState =
                        ApplicationLoadBalancerState.decode(
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

    fromJSON(object: any): InstanceGroup {
        const message = { ...baseInstanceGroup } as InstanceGroup;
        message.labels = {};
        message.variables = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
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
        if (
            object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null
        ) {
            message.instanceTemplate = InstanceTemplate.fromJSON(
                object.instanceTemplate
            );
        } else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        } else {
            message.deployPolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.loadBalancerState !== undefined &&
            object.loadBalancerState !== null
        ) {
            message.loadBalancerState = LoadBalancerState.fromJSON(
                object.loadBalancerState
            );
        } else {
            message.loadBalancerState = undefined;
        }
        if (
            object.managedInstancesState !== undefined &&
            object.managedInstancesState !== null
        ) {
            message.managedInstancesState = ManagedInstancesState.fromJSON(
                object.managedInstancesState
            );
        } else {
            message.managedInstancesState = undefined;
        }
        if (
            object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null
        ) {
            message.loadBalancerSpec = LoadBalancerSpec.fromJSON(
                object.loadBalancerSpec
            );
        } else {
            message.loadBalancerSpec = undefined;
        }
        if (
            object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null
        ) {
            message.healthChecksSpec = HealthChecksSpec.fromJSON(
                object.healthChecksSpec
            );
        } else {
            message.healthChecksSpec = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = instanceGroup_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromJSON(e));
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
        }
        if (
            object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null
        ) {
            message.applicationLoadBalancerSpec =
                ApplicationLoadBalancerSpec.fromJSON(
                    object.applicationLoadBalancerSpec
                );
        } else {
            message.applicationLoadBalancerSpec = undefined;
        }
        if (
            object.applicationLoadBalancerState !== undefined &&
            object.applicationLoadBalancerState !== null
        ) {
            message.applicationLoadBalancerState =
                ApplicationLoadBalancerState.fromJSON(
                    object.applicationLoadBalancerState
                );
        } else {
            message.applicationLoadBalancerState = undefined;
        }
        return message;
    },

    toJSON(message: InstanceGroup): unknown {
        const obj: any = {};
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
                ? InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.loadBalancerState !== undefined &&
            (obj.loadBalancerState = message.loadBalancerState
                ? LoadBalancerState.toJSON(message.loadBalancerState)
                : undefined);
        message.managedInstancesState !== undefined &&
            (obj.managedInstancesState = message.managedInstancesState
                ? ManagedInstancesState.toJSON(message.managedInstancesState)
                : undefined);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.status !== undefined &&
            (obj.status = instanceGroup_StatusToJSON(message.status));
        if (message.variables) {
            obj.variables = message.variables.map((e) =>
                e ? Variable.toJSON(e) : undefined
            );
        } else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec =
                message.applicationLoadBalancerSpec
                    ? ApplicationLoadBalancerSpec.toJSON(
                          message.applicationLoadBalancerSpec
                      )
                    : undefined);
        message.applicationLoadBalancerState !== undefined &&
            (obj.applicationLoadBalancerState =
                message.applicationLoadBalancerState
                    ? ApplicationLoadBalancerState.toJSON(
                          message.applicationLoadBalancerState
                      )
                    : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<InstanceGroup>): InstanceGroup {
        const message = { ...baseInstanceGroup } as InstanceGroup;
        message.labels = {};
        message.variables = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
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
        if (
            object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null
        ) {
            message.instanceTemplate = InstanceTemplate.fromPartial(
                object.instanceTemplate
            );
        } else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(
                object.deployPolicy
            );
        } else {
            message.deployPolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.loadBalancerState !== undefined &&
            object.loadBalancerState !== null
        ) {
            message.loadBalancerState = LoadBalancerState.fromPartial(
                object.loadBalancerState
            );
        } else {
            message.loadBalancerState = undefined;
        }
        if (
            object.managedInstancesState !== undefined &&
            object.managedInstancesState !== null
        ) {
            message.managedInstancesState = ManagedInstancesState.fromPartial(
                object.managedInstancesState
            );
        } else {
            message.managedInstancesState = undefined;
        }
        if (
            object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null
        ) {
            message.loadBalancerSpec = LoadBalancerSpec.fromPartial(
                object.loadBalancerSpec
            );
        } else {
            message.loadBalancerSpec = undefined;
        }
        if (
            object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null
        ) {
            message.healthChecksSpec = HealthChecksSpec.fromPartial(
                object.healthChecksSpec
            );
        } else {
            message.healthChecksSpec = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromPartial(e));
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        if (
            object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null
        ) {
            message.applicationLoadBalancerSpec =
                ApplicationLoadBalancerSpec.fromPartial(
                    object.applicationLoadBalancerSpec
                );
        } else {
            message.applicationLoadBalancerSpec = undefined;
        }
        if (
            object.applicationLoadBalancerState !== undefined &&
            object.applicationLoadBalancerState !== null
        ) {
            message.applicationLoadBalancerState =
                ApplicationLoadBalancerState.fromPartial(
                    object.applicationLoadBalancerState
                );
        } else {
            message.applicationLoadBalancerState = undefined;
        }
        return message;
    },
};

const baseInstanceGroup_LabelsEntry: object = { key: '', value: '' };

export const InstanceGroup_LabelsEntry = {
    encode(
        message: InstanceGroup_LabelsEntry,
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
    ): InstanceGroup_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInstanceGroup_LabelsEntry,
        } as InstanceGroup_LabelsEntry;
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

    fromJSON(object: any): InstanceGroup_LabelsEntry {
        const message = {
            ...baseInstanceGroup_LabelsEntry,
        } as InstanceGroup_LabelsEntry;
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

    toJSON(message: InstanceGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<InstanceGroup_LabelsEntry>
    ): InstanceGroup_LabelsEntry {
        const message = {
            ...baseInstanceGroup_LabelsEntry,
        } as InstanceGroup_LabelsEntry;
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

const baseApplicationLoadBalancerState: object = {
    targetGroupId: '',
    statusMessage: '',
};

export const ApplicationLoadBalancerState = {
    encode(
        message: ApplicationLoadBalancerState,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        if (message.statusMessage !== '') {
            writer.uint32(18).string(message.statusMessage);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ApplicationLoadBalancerState {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationLoadBalancerState,
        } as ApplicationLoadBalancerState;
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

    fromJSON(object: any): ApplicationLoadBalancerState {
        const message = {
            ...baseApplicationLoadBalancerState,
        } as ApplicationLoadBalancerState;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = String(object.statusMessage);
        } else {
            message.statusMessage = '';
        }
        return message;
    },

    toJSON(message: ApplicationLoadBalancerState): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ApplicationLoadBalancerState>
    ): ApplicationLoadBalancerState {
        const message = {
            ...baseApplicationLoadBalancerState,
        } as ApplicationLoadBalancerState;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = object.statusMessage;
        } else {
            message.statusMessage = '';
        }
        return message;
    },
};

const baseVariable: object = { key: '', value: '' };

export const Variable = {
    encode(
        message: Variable,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Variable {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVariable } as Variable;
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

    fromJSON(object: any): Variable {
        const message = { ...baseVariable } as Variable;
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

    toJSON(message: Variable): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Variable>): Variable {
        const message = { ...baseVariable } as Variable;
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

const baseLoadBalancerState: object = { targetGroupId: '', statusMessage: '' };

export const LoadBalancerState = {
    encode(
        message: LoadBalancerState,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        if (message.statusMessage !== '') {
            writer.uint32(18).string(message.statusMessage);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancerState {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancerState } as LoadBalancerState;
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

    fromJSON(object: any): LoadBalancerState {
        const message = { ...baseLoadBalancerState } as LoadBalancerState;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = String(object.statusMessage);
        } else {
            message.statusMessage = '';
        }
        return message;
    },

    toJSON(message: LoadBalancerState): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },

    fromPartial(object: DeepPartial<LoadBalancerState>): LoadBalancerState {
        const message = { ...baseLoadBalancerState } as LoadBalancerState;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = object.statusMessage;
        } else {
            message.statusMessage = '';
        }
        return message;
    },
};

const baseManagedInstancesState: object = {
    targetSize: 0,
    runningActualCount: 0,
    runningOutdatedCount: 0,
    processingCount: 0,
};

export const ManagedInstancesState = {
    encode(
        message: ManagedInstancesState,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ManagedInstancesState {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseManagedInstancesState,
        } as ManagedInstancesState;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.runningActualCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 5:
                    message.runningOutdatedCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 6:
                    message.processingCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ManagedInstancesState {
        const message = {
            ...baseManagedInstancesState,
        } as ManagedInstancesState;
        if (object.targetSize !== undefined && object.targetSize !== null) {
            message.targetSize = Number(object.targetSize);
        } else {
            message.targetSize = 0;
        }
        if (
            object.runningActualCount !== undefined &&
            object.runningActualCount !== null
        ) {
            message.runningActualCount = Number(object.runningActualCount);
        } else {
            message.runningActualCount = 0;
        }
        if (
            object.runningOutdatedCount !== undefined &&
            object.runningOutdatedCount !== null
        ) {
            message.runningOutdatedCount = Number(object.runningOutdatedCount);
        } else {
            message.runningOutdatedCount = 0;
        }
        if (
            object.processingCount !== undefined &&
            object.processingCount !== null
        ) {
            message.processingCount = Number(object.processingCount);
        } else {
            message.processingCount = 0;
        }
        return message;
    },

    toJSON(message: ManagedInstancesState): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<ManagedInstancesState>
    ): ManagedInstancesState {
        const message = {
            ...baseManagedInstancesState,
        } as ManagedInstancesState;
        if (object.targetSize !== undefined && object.targetSize !== null) {
            message.targetSize = object.targetSize;
        } else {
            message.targetSize = 0;
        }
        if (
            object.runningActualCount !== undefined &&
            object.runningActualCount !== null
        ) {
            message.runningActualCount = object.runningActualCount;
        } else {
            message.runningActualCount = 0;
        }
        if (
            object.runningOutdatedCount !== undefined &&
            object.runningOutdatedCount !== null
        ) {
            message.runningOutdatedCount = object.runningOutdatedCount;
        } else {
            message.runningOutdatedCount = 0;
        }
        if (
            object.processingCount !== undefined &&
            object.processingCount !== null
        ) {
            message.processingCount = object.processingCount;
        } else {
            message.processingCount = 0;
        }
        return message;
    },
};

const baseManagedInstancesState_Statuses: object = {
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

export const ManagedInstancesState_Statuses = {
    encode(
        message: ManagedInstancesState_Statuses,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ManagedInstancesState_Statuses {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseManagedInstancesState_Statuses,
        } as ManagedInstancesState_Statuses;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creating = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.starting = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.opening = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.warming = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.running = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.closing = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.stopping = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.updating = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.deleting = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.failed = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ManagedInstancesState_Statuses {
        const message = {
            ...baseManagedInstancesState_Statuses,
        } as ManagedInstancesState_Statuses;
        if (object.creating !== undefined && object.creating !== null) {
            message.creating = Number(object.creating);
        } else {
            message.creating = 0;
        }
        if (object.starting !== undefined && object.starting !== null) {
            message.starting = Number(object.starting);
        } else {
            message.starting = 0;
        }
        if (object.opening !== undefined && object.opening !== null) {
            message.opening = Number(object.opening);
        } else {
            message.opening = 0;
        }
        if (object.warming !== undefined && object.warming !== null) {
            message.warming = Number(object.warming);
        } else {
            message.warming = 0;
        }
        if (object.running !== undefined && object.running !== null) {
            message.running = Number(object.running);
        } else {
            message.running = 0;
        }
        if (object.closing !== undefined && object.closing !== null) {
            message.closing = Number(object.closing);
        } else {
            message.closing = 0;
        }
        if (object.stopping !== undefined && object.stopping !== null) {
            message.stopping = Number(object.stopping);
        } else {
            message.stopping = 0;
        }
        if (object.updating !== undefined && object.updating !== null) {
            message.updating = Number(object.updating);
        } else {
            message.updating = 0;
        }
        if (object.deleting !== undefined && object.deleting !== null) {
            message.deleting = Number(object.deleting);
        } else {
            message.deleting = 0;
        }
        if (object.failed !== undefined && object.failed !== null) {
            message.failed = Number(object.failed);
        } else {
            message.failed = 0;
        }
        return message;
    },

    toJSON(message: ManagedInstancesState_Statuses): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<ManagedInstancesState_Statuses>
    ): ManagedInstancesState_Statuses {
        const message = {
            ...baseManagedInstancesState_Statuses,
        } as ManagedInstancesState_Statuses;
        if (object.creating !== undefined && object.creating !== null) {
            message.creating = object.creating;
        } else {
            message.creating = 0;
        }
        if (object.starting !== undefined && object.starting !== null) {
            message.starting = object.starting;
        } else {
            message.starting = 0;
        }
        if (object.opening !== undefined && object.opening !== null) {
            message.opening = object.opening;
        } else {
            message.opening = 0;
        }
        if (object.warming !== undefined && object.warming !== null) {
            message.warming = object.warming;
        } else {
            message.warming = 0;
        }
        if (object.running !== undefined && object.running !== null) {
            message.running = object.running;
        } else {
            message.running = 0;
        }
        if (object.closing !== undefined && object.closing !== null) {
            message.closing = object.closing;
        } else {
            message.closing = 0;
        }
        if (object.stopping !== undefined && object.stopping !== null) {
            message.stopping = object.stopping;
        } else {
            message.stopping = 0;
        }
        if (object.updating !== undefined && object.updating !== null) {
            message.updating = object.updating;
        } else {
            message.updating = 0;
        }
        if (object.deleting !== undefined && object.deleting !== null) {
            message.deleting = object.deleting;
        } else {
            message.deleting = 0;
        }
        if (object.failed !== undefined && object.failed !== null) {
            message.failed = object.failed;
        } else {
            message.failed = 0;
        }
        return message;
    },
};

const baseScalePolicy: object = {};

export const ScalePolicy = {
    encode(
        message: ScalePolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.fixedScale !== undefined) {
            ScalePolicy_FixedScale.encode(
                message.fixedScale,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.autoScale !== undefined) {
            ScalePolicy_AutoScale.encode(
                message.autoScale,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.testAutoScale !== undefined) {
            ScalePolicy_AutoScale.encode(
                message.testAutoScale,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy } as ScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = ScalePolicy_FixedScale.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.autoScale = ScalePolicy_AutoScale.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.testAutoScale = ScalePolicy_AutoScale.decode(
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

    fromJSON(object: any): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = ScalePolicy_FixedScale.fromJSON(
                object.fixedScale
            );
        } else {
            message.fixedScale = undefined;
        }
        if (object.autoScale !== undefined && object.autoScale !== null) {
            message.autoScale = ScalePolicy_AutoScale.fromJSON(
                object.autoScale
            );
        } else {
            message.autoScale = undefined;
        }
        if (
            object.testAutoScale !== undefined &&
            object.testAutoScale !== null
        ) {
            message.testAutoScale = ScalePolicy_AutoScale.fromJSON(
                object.testAutoScale
            );
        } else {
            message.testAutoScale = undefined;
        }
        return message;
    },

    toJSON(message: ScalePolicy): unknown {
        const obj: any = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        message.autoScale !== undefined &&
            (obj.autoScale = message.autoScale
                ? ScalePolicy_AutoScale.toJSON(message.autoScale)
                : undefined);
        message.testAutoScale !== undefined &&
            (obj.testAutoScale = message.testAutoScale
                ? ScalePolicy_AutoScale.toJSON(message.testAutoScale)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ScalePolicy>): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = ScalePolicy_FixedScale.fromPartial(
                object.fixedScale
            );
        } else {
            message.fixedScale = undefined;
        }
        if (object.autoScale !== undefined && object.autoScale !== null) {
            message.autoScale = ScalePolicy_AutoScale.fromPartial(
                object.autoScale
            );
        } else {
            message.autoScale = undefined;
        }
        if (
            object.testAutoScale !== undefined &&
            object.testAutoScale !== null
        ) {
            message.testAutoScale = ScalePolicy_AutoScale.fromPartial(
                object.testAutoScale
            );
        } else {
            message.testAutoScale = undefined;
        }
        return message;
    },
};

const baseScalePolicy_AutoScale: object = {
    minZoneSize: 0,
    maxSize: 0,
    initialSize: 0,
};

export const ScalePolicy_AutoScale = {
    encode(
        message: ScalePolicy_AutoScale,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.minZoneSize !== 0) {
            writer.uint32(8).int64(message.minZoneSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        if (message.measurementDuration !== undefined) {
            Duration.encode(
                message.measurementDuration,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.warmupDuration !== undefined) {
            Duration.encode(
                message.warmupDuration,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.stabilizationDuration !== undefined) {
            Duration.encode(
                message.stabilizationDuration,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.initialSize !== 0) {
            writer.uint32(48).int64(message.initialSize);
        }
        if (message.cpuUtilizationRule !== undefined) {
            ScalePolicy_CpuUtilizationRule.encode(
                message.cpuUtilizationRule,
                writer.uint32(58).fork()
            ).ldelim();
        }
        for (const v of message.customRules) {
            ScalePolicy_CustomRule.encode(
                v!,
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScalePolicy_AutoScale {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_AutoScale,
        } as ScalePolicy_AutoScale;
        message.customRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minZoneSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.measurementDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.warmupDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.stabilizationDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.initialSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.cpuUtilizationRule =
                        ScalePolicy_CpuUtilizationRule.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 8:
                    message.customRules.push(
                        ScalePolicy_CustomRule.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalePolicy_AutoScale {
        const message = {
            ...baseScalePolicy_AutoScale,
        } as ScalePolicy_AutoScale;
        message.customRules = [];
        if (object.minZoneSize !== undefined && object.minZoneSize !== null) {
            message.minZoneSize = Number(object.minZoneSize);
        } else {
            message.minZoneSize = 0;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = Number(object.maxSize);
        } else {
            message.maxSize = 0;
        }
        if (
            object.measurementDuration !== undefined &&
            object.measurementDuration !== null
        ) {
            message.measurementDuration = Duration.fromJSON(
                object.measurementDuration
            );
        } else {
            message.measurementDuration = undefined;
        }
        if (
            object.warmupDuration !== undefined &&
            object.warmupDuration !== null
        ) {
            message.warmupDuration = Duration.fromJSON(object.warmupDuration);
        } else {
            message.warmupDuration = undefined;
        }
        if (
            object.stabilizationDuration !== undefined &&
            object.stabilizationDuration !== null
        ) {
            message.stabilizationDuration = Duration.fromJSON(
                object.stabilizationDuration
            );
        } else {
            message.stabilizationDuration = undefined;
        }
        if (object.initialSize !== undefined && object.initialSize !== null) {
            message.initialSize = Number(object.initialSize);
        } else {
            message.initialSize = 0;
        }
        if (
            object.cpuUtilizationRule !== undefined &&
            object.cpuUtilizationRule !== null
        ) {
            message.cpuUtilizationRule =
                ScalePolicy_CpuUtilizationRule.fromJSON(
                    object.cpuUtilizationRule
                );
        } else {
            message.cpuUtilizationRule = undefined;
        }
        if (object.customRules !== undefined && object.customRules !== null) {
            for (const e of object.customRules) {
                message.customRules.push(ScalePolicy_CustomRule.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ScalePolicy_AutoScale): unknown {
        const obj: any = {};
        message.minZoneSize !== undefined &&
            (obj.minZoneSize = message.minZoneSize);
        message.maxSize !== undefined && (obj.maxSize = message.maxSize);
        message.measurementDuration !== undefined &&
            (obj.measurementDuration = message.measurementDuration
                ? Duration.toJSON(message.measurementDuration)
                : undefined);
        message.warmupDuration !== undefined &&
            (obj.warmupDuration = message.warmupDuration
                ? Duration.toJSON(message.warmupDuration)
                : undefined);
        message.stabilizationDuration !== undefined &&
            (obj.stabilizationDuration = message.stabilizationDuration
                ? Duration.toJSON(message.stabilizationDuration)
                : undefined);
        message.initialSize !== undefined &&
            (obj.initialSize = message.initialSize);
        message.cpuUtilizationRule !== undefined &&
            (obj.cpuUtilizationRule = message.cpuUtilizationRule
                ? ScalePolicy_CpuUtilizationRule.toJSON(
                      message.cpuUtilizationRule
                  )
                : undefined);
        if (message.customRules) {
            obj.customRules = message.customRules.map((e) =>
                e ? ScalePolicy_CustomRule.toJSON(e) : undefined
            );
        } else {
            obj.customRules = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScalePolicy_AutoScale>
    ): ScalePolicy_AutoScale {
        const message = {
            ...baseScalePolicy_AutoScale,
        } as ScalePolicy_AutoScale;
        message.customRules = [];
        if (object.minZoneSize !== undefined && object.minZoneSize !== null) {
            message.minZoneSize = object.minZoneSize;
        } else {
            message.minZoneSize = 0;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = object.maxSize;
        } else {
            message.maxSize = 0;
        }
        if (
            object.measurementDuration !== undefined &&
            object.measurementDuration !== null
        ) {
            message.measurementDuration = Duration.fromPartial(
                object.measurementDuration
            );
        } else {
            message.measurementDuration = undefined;
        }
        if (
            object.warmupDuration !== undefined &&
            object.warmupDuration !== null
        ) {
            message.warmupDuration = Duration.fromPartial(
                object.warmupDuration
            );
        } else {
            message.warmupDuration = undefined;
        }
        if (
            object.stabilizationDuration !== undefined &&
            object.stabilizationDuration !== null
        ) {
            message.stabilizationDuration = Duration.fromPartial(
                object.stabilizationDuration
            );
        } else {
            message.stabilizationDuration = undefined;
        }
        if (object.initialSize !== undefined && object.initialSize !== null) {
            message.initialSize = object.initialSize;
        } else {
            message.initialSize = 0;
        }
        if (
            object.cpuUtilizationRule !== undefined &&
            object.cpuUtilizationRule !== null
        ) {
            message.cpuUtilizationRule =
                ScalePolicy_CpuUtilizationRule.fromPartial(
                    object.cpuUtilizationRule
                );
        } else {
            message.cpuUtilizationRule = undefined;
        }
        if (object.customRules !== undefined && object.customRules !== null) {
            for (const e of object.customRules) {
                message.customRules.push(ScalePolicy_CustomRule.fromPartial(e));
            }
        }
        return message;
    },
};

const baseScalePolicy_CpuUtilizationRule: object = { utilizationTarget: 0 };

export const ScalePolicy_CpuUtilizationRule = {
    encode(
        message: ScalePolicy_CpuUtilizationRule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.utilizationTarget !== 0) {
            writer.uint32(9).double(message.utilizationTarget);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScalePolicy_CpuUtilizationRule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_CpuUtilizationRule,
        } as ScalePolicy_CpuUtilizationRule;
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

    fromJSON(object: any): ScalePolicy_CpuUtilizationRule {
        const message = {
            ...baseScalePolicy_CpuUtilizationRule,
        } as ScalePolicy_CpuUtilizationRule;
        if (
            object.utilizationTarget !== undefined &&
            object.utilizationTarget !== null
        ) {
            message.utilizationTarget = Number(object.utilizationTarget);
        } else {
            message.utilizationTarget = 0;
        }
        return message;
    },

    toJSON(message: ScalePolicy_CpuUtilizationRule): unknown {
        const obj: any = {};
        message.utilizationTarget !== undefined &&
            (obj.utilizationTarget = message.utilizationTarget);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScalePolicy_CpuUtilizationRule>
    ): ScalePolicy_CpuUtilizationRule {
        const message = {
            ...baseScalePolicy_CpuUtilizationRule,
        } as ScalePolicy_CpuUtilizationRule;
        if (
            object.utilizationTarget !== undefined &&
            object.utilizationTarget !== null
        ) {
            message.utilizationTarget = object.utilizationTarget;
        } else {
            message.utilizationTarget = 0;
        }
        return message;
    },
};

const baseScalePolicy_CustomRule: object = {
    ruleType: 0,
    metricType: 0,
    metricName: '',
    target: 0,
    folderId: '',
    service: '',
};

export const ScalePolicy_CustomRule = {
    encode(
        message: ScalePolicy_CustomRule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
            ScalePolicy_CustomRule_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScalePolicy_CustomRule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_CustomRule,
        } as ScalePolicy_CustomRule;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleType = reader.int32() as any;
                    break;
                case 2:
                    message.metricType = reader.int32() as any;
                    break;
                case 3:
                    message.metricName = reader.string();
                    break;
                case 5:
                    const entry5 = ScalePolicy_CustomRule_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): ScalePolicy_CustomRule {
        const message = {
            ...baseScalePolicy_CustomRule,
        } as ScalePolicy_CustomRule;
        message.labels = {};
        if (object.ruleType !== undefined && object.ruleType !== null) {
            message.ruleType = scalePolicy_CustomRule_RuleTypeFromJSON(
                object.ruleType
            );
        } else {
            message.ruleType = 0;
        }
        if (object.metricType !== undefined && object.metricType !== null) {
            message.metricType = scalePolicy_CustomRule_MetricTypeFromJSON(
                object.metricType
            );
        } else {
            message.metricType = 0;
        }
        if (object.metricName !== undefined && object.metricName !== null) {
            message.metricName = String(object.metricName);
        } else {
            message.metricName = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = Number(object.target);
        } else {
            message.target = 0;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.service !== undefined && object.service !== null) {
            message.service = String(object.service);
        } else {
            message.service = '';
        }
        return message;
    },

    toJSON(message: ScalePolicy_CustomRule): unknown {
        const obj: any = {};
        message.ruleType !== undefined &&
            (obj.ruleType = scalePolicy_CustomRule_RuleTypeToJSON(
                message.ruleType
            ));
        message.metricType !== undefined &&
            (obj.metricType = scalePolicy_CustomRule_MetricTypeToJSON(
                message.metricType
            ));
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

    fromPartial(
        object: DeepPartial<ScalePolicy_CustomRule>
    ): ScalePolicy_CustomRule {
        const message = {
            ...baseScalePolicy_CustomRule,
        } as ScalePolicy_CustomRule;
        message.labels = {};
        if (object.ruleType !== undefined && object.ruleType !== null) {
            message.ruleType = object.ruleType;
        } else {
            message.ruleType = 0;
        }
        if (object.metricType !== undefined && object.metricType !== null) {
            message.metricType = object.metricType;
        } else {
            message.metricType = 0;
        }
        if (object.metricName !== undefined && object.metricName !== null) {
            message.metricName = object.metricName;
        } else {
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
        } else {
            message.target = 0;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.service !== undefined && object.service !== null) {
            message.service = object.service;
        } else {
            message.service = '';
        }
        return message;
    },
};

const baseScalePolicy_CustomRule_LabelsEntry: object = { key: '', value: '' };

export const ScalePolicy_CustomRule_LabelsEntry = {
    encode(
        message: ScalePolicy_CustomRule_LabelsEntry,
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
    ): ScalePolicy_CustomRule_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_CustomRule_LabelsEntry,
        } as ScalePolicy_CustomRule_LabelsEntry;
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

    fromJSON(object: any): ScalePolicy_CustomRule_LabelsEntry {
        const message = {
            ...baseScalePolicy_CustomRule_LabelsEntry,
        } as ScalePolicy_CustomRule_LabelsEntry;
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

    toJSON(message: ScalePolicy_CustomRule_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScalePolicy_CustomRule_LabelsEntry>
    ): ScalePolicy_CustomRule_LabelsEntry {
        const message = {
            ...baseScalePolicy_CustomRule_LabelsEntry,
        } as ScalePolicy_CustomRule_LabelsEntry;
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

const baseScalePolicy_FixedScale: object = { size: 0 };

export const ScalePolicy_FixedScale = {
    encode(
        message: ScalePolicy_FixedScale,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ScalePolicy_FixedScale {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_FixedScale,
        } as ScalePolicy_FixedScale;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalePolicy_FixedScale {
        const message = {
            ...baseScalePolicy_FixedScale,
        } as ScalePolicy_FixedScale;
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        } else {
            message.size = 0;
        }
        return message;
    },

    toJSON(message: ScalePolicy_FixedScale): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = message.size);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ScalePolicy_FixedScale>
    ): ScalePolicy_FixedScale {
        const message = {
            ...baseScalePolicy_FixedScale,
        } as ScalePolicy_FixedScale;
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            message.size = 0;
        }
        return message;
    },
};

const baseDeployPolicy: object = {
    maxUnavailable: 0,
    maxDeleting: 0,
    maxCreating: 0,
    maxExpansion: 0,
    strategy: 0,
};

export const DeployPolicy = {
    encode(
        message: DeployPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
            Duration.encode(
                message.startupDuration,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.strategy !== 0) {
            writer.uint32(64).int32(message.strategy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeployPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeployPolicy } as DeployPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxUnavailable = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.maxDeleting = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.maxCreating = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.maxExpansion = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.startupDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.strategy = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeployPolicy {
        const message = { ...baseDeployPolicy } as DeployPolicy;
        if (
            object.maxUnavailable !== undefined &&
            object.maxUnavailable !== null
        ) {
            message.maxUnavailable = Number(object.maxUnavailable);
        } else {
            message.maxUnavailable = 0;
        }
        if (object.maxDeleting !== undefined && object.maxDeleting !== null) {
            message.maxDeleting = Number(object.maxDeleting);
        } else {
            message.maxDeleting = 0;
        }
        if (object.maxCreating !== undefined && object.maxCreating !== null) {
            message.maxCreating = Number(object.maxCreating);
        } else {
            message.maxCreating = 0;
        }
        if (object.maxExpansion !== undefined && object.maxExpansion !== null) {
            message.maxExpansion = Number(object.maxExpansion);
        } else {
            message.maxExpansion = 0;
        }
        if (
            object.startupDuration !== undefined &&
            object.startupDuration !== null
        ) {
            message.startupDuration = Duration.fromJSON(object.startupDuration);
        } else {
            message.startupDuration = undefined;
        }
        if (object.strategy !== undefined && object.strategy !== null) {
            message.strategy = deployPolicy_StrategyFromJSON(object.strategy);
        } else {
            message.strategy = 0;
        }
        return message;
    },

    toJSON(message: DeployPolicy): unknown {
        const obj: any = {};
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
                ? Duration.toJSON(message.startupDuration)
                : undefined);
        message.strategy !== undefined &&
            (obj.strategy = deployPolicy_StrategyToJSON(message.strategy));
        return obj;
    },

    fromPartial(object: DeepPartial<DeployPolicy>): DeployPolicy {
        const message = { ...baseDeployPolicy } as DeployPolicy;
        if (
            object.maxUnavailable !== undefined &&
            object.maxUnavailable !== null
        ) {
            message.maxUnavailable = object.maxUnavailable;
        } else {
            message.maxUnavailable = 0;
        }
        if (object.maxDeleting !== undefined && object.maxDeleting !== null) {
            message.maxDeleting = object.maxDeleting;
        } else {
            message.maxDeleting = 0;
        }
        if (object.maxCreating !== undefined && object.maxCreating !== null) {
            message.maxCreating = object.maxCreating;
        } else {
            message.maxCreating = 0;
        }
        if (object.maxExpansion !== undefined && object.maxExpansion !== null) {
            message.maxExpansion = object.maxExpansion;
        } else {
            message.maxExpansion = 0;
        }
        if (
            object.startupDuration !== undefined &&
            object.startupDuration !== null
        ) {
            message.startupDuration = Duration.fromPartial(
                object.startupDuration
            );
        } else {
            message.startupDuration = undefined;
        }
        if (object.strategy !== undefined && object.strategy !== null) {
            message.strategy = object.strategy;
        } else {
            message.strategy = 0;
        }
        return message;
    },
};

const baseAllocationPolicy: object = {};

export const AllocationPolicy = {
    encode(
        message: AllocationPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.zones) {
            AllocationPolicy_Zone.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AllocationPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAllocationPolicy } as AllocationPolicy;
        message.zones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zones.push(
                        AllocationPolicy_Zone.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AllocationPolicy {
        const message = { ...baseAllocationPolicy } as AllocationPolicy;
        message.zones = [];
        if (object.zones !== undefined && object.zones !== null) {
            for (const e of object.zones) {
                message.zones.push(AllocationPolicy_Zone.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: AllocationPolicy): unknown {
        const obj: any = {};
        if (message.zones) {
            obj.zones = message.zones.map((e) =>
                e ? AllocationPolicy_Zone.toJSON(e) : undefined
            );
        } else {
            obj.zones = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<AllocationPolicy>): AllocationPolicy {
        const message = { ...baseAllocationPolicy } as AllocationPolicy;
        message.zones = [];
        if (object.zones !== undefined && object.zones !== null) {
            for (const e of object.zones) {
                message.zones.push(AllocationPolicy_Zone.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAllocationPolicy_Zone: object = { zoneId: '' };

export const AllocationPolicy_Zone = {
    encode(
        message: AllocationPolicy_Zone,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AllocationPolicy_Zone {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAllocationPolicy_Zone,
        } as AllocationPolicy_Zone;
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

    fromJSON(object: any): AllocationPolicy_Zone {
        const message = {
            ...baseAllocationPolicy_Zone,
        } as AllocationPolicy_Zone;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        return message;
    },

    toJSON(message: AllocationPolicy_Zone): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AllocationPolicy_Zone>
    ): AllocationPolicy_Zone {
        const message = {
            ...baseAllocationPolicy_Zone,
        } as AllocationPolicy_Zone;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        return message;
    },
};

const baseInstanceTemplate: object = {
    description: '',
    platformId: '',
    serviceAccountId: '',
    name: '',
    hostname: '',
};

export const InstanceTemplate = {
    encode(
        message: InstanceTemplate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            InstanceTemplate_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork()
            ).ldelim();
        });
        if (message.platformId !== '') {
            writer.uint32(26).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(
                message.resourcesSpec,
                writer.uint32(34).fork()
            ).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            InstanceTemplate_MetadataEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            AttachedDiskSpec.encode(
                message.bootDiskSpec,
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            AttachedDiskSpec.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            NetworkInterfaceSpec.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            SchedulingPolicy.encode(
                message.schedulingPolicy,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(
                message.networkSettings,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(98).string(message.name);
        }
        if (message.hostname !== '') {
            writer.uint32(106).string(message.hostname);
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(
                message.placementPolicy,
                writer.uint32(114).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InstanceTemplate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstanceTemplate } as InstanceTemplate;
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
                    const entry2 = InstanceTemplate_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.platformId = reader.string();
                    break;
                case 4:
                    message.resourcesSpec = ResourcesSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    const entry5 = InstanceTemplate_MetadataEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.metadata[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.bootDiskSpec = AttachedDiskSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.secondaryDiskSpecs.push(
                        AttachedDiskSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.networkInterfaceSpecs.push(
                        NetworkInterfaceSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 9:
                    message.schedulingPolicy = SchedulingPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 11:
                    message.networkSettings = NetworkSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.name = reader.string();
                    break;
                case 13:
                    message.hostname = reader.string();
                    break;
                case 14:
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

    fromJSON(object: any): InstanceTemplate {
        const message = { ...baseInstanceTemplate } as InstanceTemplate;
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.networkInterfaceSpecs = [];
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
            object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null
        ) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(
                    NetworkInterfaceSpec.fromJSON(e)
                );
            }
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = String(object.hostname);
        } else {
            message.hostname = '';
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

    toJSON(message: InstanceTemplate): unknown {
        const obj: any = {};
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
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) =>
                e ? NetworkInterfaceSpec.toJSON(e) : undefined
            );
        } else {
            obj.networkInterfaceSpecs = [];
        }
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
        message.name !== undefined && (obj.name = message.name);
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<InstanceTemplate>): InstanceTemplate {
        const message = { ...baseInstanceTemplate } as InstanceTemplate;
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.networkInterfaceSpecs = [];
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
            object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null
        ) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(
                    NetworkInterfaceSpec.fromPartial(e)
                );
            }
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.hostname !== undefined && object.hostname !== null) {
            message.hostname = object.hostname;
        } else {
            message.hostname = '';
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

const baseInstanceTemplate_LabelsEntry: object = { key: '', value: '' };

export const InstanceTemplate_LabelsEntry = {
    encode(
        message: InstanceTemplate_LabelsEntry,
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
    ): InstanceTemplate_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInstanceTemplate_LabelsEntry,
        } as InstanceTemplate_LabelsEntry;
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

    fromJSON(object: any): InstanceTemplate_LabelsEntry {
        const message = {
            ...baseInstanceTemplate_LabelsEntry,
        } as InstanceTemplate_LabelsEntry;
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

    toJSON(message: InstanceTemplate_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<InstanceTemplate_LabelsEntry>
    ): InstanceTemplate_LabelsEntry {
        const message = {
            ...baseInstanceTemplate_LabelsEntry,
        } as InstanceTemplate_LabelsEntry;
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

const baseInstanceTemplate_MetadataEntry: object = { key: '', value: '' };

export const InstanceTemplate_MetadataEntry = {
    encode(
        message: InstanceTemplate_MetadataEntry,
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
    ): InstanceTemplate_MetadataEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInstanceTemplate_MetadataEntry,
        } as InstanceTemplate_MetadataEntry;
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

    fromJSON(object: any): InstanceTemplate_MetadataEntry {
        const message = {
            ...baseInstanceTemplate_MetadataEntry,
        } as InstanceTemplate_MetadataEntry;
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

    toJSON(message: InstanceTemplate_MetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<InstanceTemplate_MetadataEntry>
    ): InstanceTemplate_MetadataEntry {
        const message = {
            ...baseInstanceTemplate_MetadataEntry,
        } as InstanceTemplate_MetadataEntry;
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

const basePlacementPolicy: object = { placementGroupId: '' };

export const PlacementPolicy = {
    encode(
        message: PlacementPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        for (const v of message.hostAffinityRules) {
            PlacementPolicy_HostAffinityRule.encode(
                v!,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        message.hostAffinityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                case 2:
                    message.hostAffinityRules.push(
                        PlacementPolicy_HostAffinityRule.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PlacementPolicy {
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        message.hostAffinityRules = [];
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        if (
            object.hostAffinityRules !== undefined &&
            object.hostAffinityRules !== null
        ) {
            for (const e of object.hostAffinityRules) {
                message.hostAffinityRules.push(
                    PlacementPolicy_HostAffinityRule.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: PlacementPolicy): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        if (message.hostAffinityRules) {
            obj.hostAffinityRules = message.hostAffinityRules.map((e) =>
                e ? PlacementPolicy_HostAffinityRule.toJSON(e) : undefined
            );
        } else {
            obj.hostAffinityRules = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PlacementPolicy>): PlacementPolicy {
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        message.hostAffinityRules = [];
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        if (
            object.hostAffinityRules !== undefined &&
            object.hostAffinityRules !== null
        ) {
            for (const e of object.hostAffinityRules) {
                message.hostAffinityRules.push(
                    PlacementPolicy_HostAffinityRule.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const basePlacementPolicy_HostAffinityRule: object = {
    key: '',
    op: 0,
    values: '',
};

export const PlacementPolicy_HostAffinityRule = {
    encode(
        message: PlacementPolicy_HostAffinityRule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.op !== 0) {
            writer.uint32(16).int32(message.op);
        }
        for (const v of message.values) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlacementPolicy_HostAffinityRule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        } as PlacementPolicy_HostAffinityRule;
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.op = reader.int32() as any;
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

    fromJSON(object: any): PlacementPolicy_HostAffinityRule {
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        } as PlacementPolicy_HostAffinityRule;
        message.values = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.op !== undefined && object.op !== null) {
            message.op = placementPolicy_HostAffinityRule_OperatorFromJSON(
                object.op
            );
        } else {
            message.op = 0;
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: PlacementPolicy_HostAffinityRule): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.op !== undefined &&
            (obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(
                message.op
            ));
        if (message.values) {
            obj.values = message.values.map((e) => e);
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<PlacementPolicy_HostAffinityRule>
    ): PlacementPolicy_HostAffinityRule {
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        } as PlacementPolicy_HostAffinityRule;
        message.values = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.op !== undefined && object.op !== null) {
            message.op = object.op;
        } else {
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

const baseAttachedDiskSpec: object = { mode: 0, deviceName: '', diskId: '' };

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
        if (message.diskSpec !== undefined) {
            AttachedDiskSpec_DiskSpec.encode(
                message.diskSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.diskId !== '') {
            writer.uint32(34).string(message.diskId);
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
                    message.diskSpec = AttachedDiskSpec_DiskSpec.decode(
                        reader,
                        reader.uint32()
                    );
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
            message.diskId = '';
        }
        return message;
    },

    toJSON(message: AttachedDiskSpec): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
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
            message.diskId = '';
        }
        return message;
    },
};

const baseAttachedDiskSpec_DiskSpec: object = {
    description: '',
    typeId: '',
    size: 0,
    preserveAfterInstanceDelete: false,
};

export const AttachedDiskSpec_DiskSpec = {
    encode(
        message: AttachedDiskSpec_DiskSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
                    message.description = reader.string();
                    break;
                case 2:
                    message.typeId = reader.string();
                    break;
                case 3:
                    message.size = longToNumber(reader.int64() as Long);
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

    fromJSON(object: any): AttachedDiskSpec_DiskSpec {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        } as AttachedDiskSpec_DiskSpec;
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
        if (
            object.preserveAfterInstanceDelete !== undefined &&
            object.preserveAfterInstanceDelete !== null
        ) {
            message.preserveAfterInstanceDelete = Boolean(
                object.preserveAfterInstanceDelete
            );
        } else {
            message.preserveAfterInstanceDelete = false;
        }
        return message;
    },

    toJSON(message: AttachedDiskSpec_DiskSpec): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<AttachedDiskSpec_DiskSpec>
    ): AttachedDiskSpec_DiskSpec {
        const message = {
            ...baseAttachedDiskSpec_DiskSpec,
        } as AttachedDiskSpec_DiskSpec;
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
        if (
            object.preserveAfterInstanceDelete !== undefined &&
            object.preserveAfterInstanceDelete !== null
        ) {
            message.preserveAfterInstanceDelete =
                object.preserveAfterInstanceDelete;
        } else {
            message.preserveAfterInstanceDelete = false;
        }
        return message;
    },
};

const baseNetworkInterfaceSpec: object = {
    networkId: '',
    subnetIds: '',
    securityGroupIds: '',
};

export const NetworkInterfaceSpec = {
    encode(
        message: NetworkInterfaceSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v!);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(
                message.primaryV4AddressSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            PrimaryAddressSpec.encode(
                message.primaryV6AddressSpec,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v!);
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
                    message.primaryV4AddressSpec = PrimaryAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.primaryV6AddressSpec = PrimaryAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
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
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
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
        if (message.oneToOneNatSpec !== undefined) {
            OneToOneNatSpec.encode(
                message.oneToOneNatSpec,
                writer.uint32(10).fork()
            ).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            DnsRecordSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
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
                    message.oneToOneNatSpec = OneToOneNatSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.dnsRecordSpecs.push(
                        DnsRecordSpec.decode(reader, reader.uint32())
                    );
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

    fromJSON(object: any): PrimaryAddressSpec {
        const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
        message.dnsRecordSpecs = [];
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
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: PrimaryAddressSpec): unknown {
        const obj: any = {};
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
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<PrimaryAddressSpec>): PrimaryAddressSpec {
        const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
        message.dnsRecordSpecs = [];
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
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
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

const baseSchedulingPolicy: object = { preemptible: false };

export const SchedulingPolicy = {
    encode(
        message: SchedulingPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.preemptible === true) {
            writer.uint32(8).bool(message.preemptible);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchedulingPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
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

    fromJSON(object: any): SchedulingPolicy {
        const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = Boolean(object.preemptible);
        } else {
            message.preemptible = false;
        }
        return message;
    },

    toJSON(message: SchedulingPolicy): unknown {
        const obj: any = {};
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        return obj;
    },

    fromPartial(object: DeepPartial<SchedulingPolicy>): SchedulingPolicy {
        const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = object.preemptible;
        } else {
            message.preemptible = false;
        }
        return message;
    },
};

const baseNetworkSettings: object = { type: 0 };

export const NetworkSettings = {
    encode(
        message: NetworkSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkSettings } as NetworkSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkSettings {
        const message = { ...baseNetworkSettings } as NetworkSettings;
        if (object.type !== undefined && object.type !== null) {
            message.type = networkSettings_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        return message;
    },

    toJSON(message: NetworkSettings): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = networkSettings_TypeToJSON(message.type));
        return obj;
    },

    fromPartial(object: DeepPartial<NetworkSettings>): NetworkSettings {
        const message = { ...baseNetworkSettings } as NetworkSettings;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        return message;
    },
};

const baseLoadBalancerSpec: object = {};

export const LoadBalancerSpec = {
    encode(
        message: LoadBalancerSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupSpec !== undefined) {
            TargetGroupSpec.encode(
                message.targetGroupSpec,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.maxOpeningTrafficDuration !== undefined) {
            Duration.encode(
                message.maxOpeningTrafficDuration,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancerSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancerSpec } as LoadBalancerSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupSpec = TargetGroupSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.maxOpeningTrafficDuration = Duration.decode(
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

    fromJSON(object: any): LoadBalancerSpec {
        const message = { ...baseLoadBalancerSpec } as LoadBalancerSpec;
        if (
            object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null
        ) {
            message.targetGroupSpec = TargetGroupSpec.fromJSON(
                object.targetGroupSpec
            );
        } else {
            message.targetGroupSpec = undefined;
        }
        if (
            object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null
        ) {
            message.maxOpeningTrafficDuration = Duration.fromJSON(
                object.maxOpeningTrafficDuration
            );
        } else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },

    toJSON(message: LoadBalancerSpec): unknown {
        const obj: any = {};
        message.targetGroupSpec !== undefined &&
            (obj.targetGroupSpec = message.targetGroupSpec
                ? TargetGroupSpec.toJSON(message.targetGroupSpec)
                : undefined);
        message.maxOpeningTrafficDuration !== undefined &&
            (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
                ? Duration.toJSON(message.maxOpeningTrafficDuration)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<LoadBalancerSpec>): LoadBalancerSpec {
        const message = { ...baseLoadBalancerSpec } as LoadBalancerSpec;
        if (
            object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null
        ) {
            message.targetGroupSpec = TargetGroupSpec.fromPartial(
                object.targetGroupSpec
            );
        } else {
            message.targetGroupSpec = undefined;
        }
        if (
            object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null
        ) {
            message.maxOpeningTrafficDuration = Duration.fromPartial(
                object.maxOpeningTrafficDuration
            );
        } else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },
};

const baseTargetGroupSpec: object = { name: '', description: '' };

export const TargetGroupSpec = {
    encode(
        message: TargetGroupSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            TargetGroupSpec_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroupSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetGroupSpec } as TargetGroupSpec;
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
                    const entry3 = TargetGroupSpec_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): TargetGroupSpec {
        const message = { ...baseTargetGroupSpec } as TargetGroupSpec;
        message.labels = {};
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
        return message;
    },

    toJSON(message: TargetGroupSpec): unknown {
        const obj: any = {};
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

    fromPartial(object: DeepPartial<TargetGroupSpec>): TargetGroupSpec {
        const message = { ...baseTargetGroupSpec } as TargetGroupSpec;
        message.labels = {};
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
        return message;
    },
};

const baseTargetGroupSpec_LabelsEntry: object = { key: '', value: '' };

export const TargetGroupSpec_LabelsEntry = {
    encode(
        message: TargetGroupSpec_LabelsEntry,
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
    ): TargetGroupSpec_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTargetGroupSpec_LabelsEntry,
        } as TargetGroupSpec_LabelsEntry;
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

    fromJSON(object: any): TargetGroupSpec_LabelsEntry {
        const message = {
            ...baseTargetGroupSpec_LabelsEntry,
        } as TargetGroupSpec_LabelsEntry;
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

    toJSON(message: TargetGroupSpec_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<TargetGroupSpec_LabelsEntry>
    ): TargetGroupSpec_LabelsEntry {
        const message = {
            ...baseTargetGroupSpec_LabelsEntry,
        } as TargetGroupSpec_LabelsEntry;
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

const baseApplicationLoadBalancerSpec: object = {};

export const ApplicationLoadBalancerSpec = {
    encode(
        message: ApplicationLoadBalancerSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupSpec !== undefined) {
            ApplicationTargetGroupSpec.encode(
                message.targetGroupSpec,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.maxOpeningTrafficDuration !== undefined) {
            Duration.encode(
                message.maxOpeningTrafficDuration,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ApplicationLoadBalancerSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationLoadBalancerSpec,
        } as ApplicationLoadBalancerSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupSpec = ApplicationTargetGroupSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.maxOpeningTrafficDuration = Duration.decode(
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

    fromJSON(object: any): ApplicationLoadBalancerSpec {
        const message = {
            ...baseApplicationLoadBalancerSpec,
        } as ApplicationLoadBalancerSpec;
        if (
            object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null
        ) {
            message.targetGroupSpec = ApplicationTargetGroupSpec.fromJSON(
                object.targetGroupSpec
            );
        } else {
            message.targetGroupSpec = undefined;
        }
        if (
            object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null
        ) {
            message.maxOpeningTrafficDuration = Duration.fromJSON(
                object.maxOpeningTrafficDuration
            );
        } else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },

    toJSON(message: ApplicationLoadBalancerSpec): unknown {
        const obj: any = {};
        message.targetGroupSpec !== undefined &&
            (obj.targetGroupSpec = message.targetGroupSpec
                ? ApplicationTargetGroupSpec.toJSON(message.targetGroupSpec)
                : undefined);
        message.maxOpeningTrafficDuration !== undefined &&
            (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
                ? Duration.toJSON(message.maxOpeningTrafficDuration)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ApplicationLoadBalancerSpec>
    ): ApplicationLoadBalancerSpec {
        const message = {
            ...baseApplicationLoadBalancerSpec,
        } as ApplicationLoadBalancerSpec;
        if (
            object.targetGroupSpec !== undefined &&
            object.targetGroupSpec !== null
        ) {
            message.targetGroupSpec = ApplicationTargetGroupSpec.fromPartial(
                object.targetGroupSpec
            );
        } else {
            message.targetGroupSpec = undefined;
        }
        if (
            object.maxOpeningTrafficDuration !== undefined &&
            object.maxOpeningTrafficDuration !== null
        ) {
            message.maxOpeningTrafficDuration = Duration.fromPartial(
                object.maxOpeningTrafficDuration
            );
        } else {
            message.maxOpeningTrafficDuration = undefined;
        }
        return message;
    },
};

const baseApplicationTargetGroupSpec: object = { name: '', description: '' };

export const ApplicationTargetGroupSpec = {
    encode(
        message: ApplicationTargetGroupSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            ApplicationTargetGroupSpec_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ApplicationTargetGroupSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationTargetGroupSpec,
        } as ApplicationTargetGroupSpec;
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
                    const entry3 =
                        ApplicationTargetGroupSpec_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
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

    fromJSON(object: any): ApplicationTargetGroupSpec {
        const message = {
            ...baseApplicationTargetGroupSpec,
        } as ApplicationTargetGroupSpec;
        message.labels = {};
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
        return message;
    },

    toJSON(message: ApplicationTargetGroupSpec): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<ApplicationTargetGroupSpec>
    ): ApplicationTargetGroupSpec {
        const message = {
            ...baseApplicationTargetGroupSpec,
        } as ApplicationTargetGroupSpec;
        message.labels = {};
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
        return message;
    },
};

const baseApplicationTargetGroupSpec_LabelsEntry: object = {
    key: '',
    value: '',
};

export const ApplicationTargetGroupSpec_LabelsEntry = {
    encode(
        message: ApplicationTargetGroupSpec_LabelsEntry,
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
    ): ApplicationTargetGroupSpec_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApplicationTargetGroupSpec_LabelsEntry,
        } as ApplicationTargetGroupSpec_LabelsEntry;
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

    fromJSON(object: any): ApplicationTargetGroupSpec_LabelsEntry {
        const message = {
            ...baseApplicationTargetGroupSpec_LabelsEntry,
        } as ApplicationTargetGroupSpec_LabelsEntry;
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

    toJSON(message: ApplicationTargetGroupSpec_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ApplicationTargetGroupSpec_LabelsEntry>
    ): ApplicationTargetGroupSpec_LabelsEntry {
        const message = {
            ...baseApplicationTargetGroupSpec_LabelsEntry,
        } as ApplicationTargetGroupSpec_LabelsEntry;
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

const baseHealthChecksSpec: object = {};

export const HealthChecksSpec = {
    encode(
        message: HealthChecksSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.healthCheckSpecs) {
            HealthCheckSpec.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxCheckingHealthDuration !== undefined) {
            Duration.encode(
                message.maxCheckingHealthDuration,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HealthChecksSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthChecksSpec } as HealthChecksSpec;
        message.healthCheckSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.healthCheckSpecs.push(
                        HealthCheckSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.maxCheckingHealthDuration = Duration.decode(
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

    fromJSON(object: any): HealthChecksSpec {
        const message = { ...baseHealthChecksSpec } as HealthChecksSpec;
        message.healthCheckSpecs = [];
        if (
            object.healthCheckSpecs !== undefined &&
            object.healthCheckSpecs !== null
        ) {
            for (const e of object.healthCheckSpecs) {
                message.healthCheckSpecs.push(HealthCheckSpec.fromJSON(e));
            }
        }
        if (
            object.maxCheckingHealthDuration !== undefined &&
            object.maxCheckingHealthDuration !== null
        ) {
            message.maxCheckingHealthDuration = Duration.fromJSON(
                object.maxCheckingHealthDuration
            );
        } else {
            message.maxCheckingHealthDuration = undefined;
        }
        return message;
    },

    toJSON(message: HealthChecksSpec): unknown {
        const obj: any = {};
        if (message.healthCheckSpecs) {
            obj.healthCheckSpecs = message.healthCheckSpecs.map((e) =>
                e ? HealthCheckSpec.toJSON(e) : undefined
            );
        } else {
            obj.healthCheckSpecs = [];
        }
        message.maxCheckingHealthDuration !== undefined &&
            (obj.maxCheckingHealthDuration = message.maxCheckingHealthDuration
                ? Duration.toJSON(message.maxCheckingHealthDuration)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HealthChecksSpec>): HealthChecksSpec {
        const message = { ...baseHealthChecksSpec } as HealthChecksSpec;
        message.healthCheckSpecs = [];
        if (
            object.healthCheckSpecs !== undefined &&
            object.healthCheckSpecs !== null
        ) {
            for (const e of object.healthCheckSpecs) {
                message.healthCheckSpecs.push(HealthCheckSpec.fromPartial(e));
            }
        }
        if (
            object.maxCheckingHealthDuration !== undefined &&
            object.maxCheckingHealthDuration !== null
        ) {
            message.maxCheckingHealthDuration = Duration.fromPartial(
                object.maxCheckingHealthDuration
            );
        } else {
            message.maxCheckingHealthDuration = undefined;
        }
        return message;
    },
};

const baseHealthCheckSpec: object = {
    unhealthyThreshold: 0,
    healthyThreshold: 0,
};

export const HealthCheckSpec = {
    encode(
        message: HealthCheckSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.interval !== undefined) {
            Duration.encode(
                message.interval,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.timeout !== undefined) {
            Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(24).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(32).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            HealthCheckSpec_TcpOptions.encode(
                message.tcpOptions,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.httpOptions !== undefined) {
            HealthCheckSpec_HttpOptions.encode(
                message.httpOptions,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheckSpec } as HealthCheckSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interval = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeout = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unhealthyThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 4:
                    message.healthyThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 5:
                    message.tcpOptions = HealthCheckSpec_TcpOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.httpOptions = HealthCheckSpec_HttpOptions.decode(
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

    fromJSON(object: any): HealthCheckSpec {
        const message = { ...baseHealthCheckSpec } as HealthCheckSpec;
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromJSON(object.interval);
        } else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromJSON(object.timeout);
        } else {
            message.timeout = undefined;
        }
        if (
            object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null
        ) {
            message.unhealthyThreshold = Number(object.unhealthyThreshold);
        } else {
            message.unhealthyThreshold = 0;
        }
        if (
            object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null
        ) {
            message.healthyThreshold = Number(object.healthyThreshold);
        } else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = HealthCheckSpec_TcpOptions.fromJSON(
                object.tcpOptions
            );
        } else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = HealthCheckSpec_HttpOptions.fromJSON(
                object.httpOptions
            );
        } else {
            message.httpOptions = undefined;
        }
        return message;
    },

    toJSON(message: HealthCheckSpec): unknown {
        const obj: any = {};
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? Duration.toJSON(message.interval)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? Duration.toJSON(message.timeout)
                : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = message.unhealthyThreshold);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = message.healthyThreshold);
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? HealthCheckSpec_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? HealthCheckSpec_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HealthCheckSpec>): HealthCheckSpec {
        const message = { ...baseHealthCheckSpec } as HealthCheckSpec;
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromPartial(object.interval);
        } else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromPartial(object.timeout);
        } else {
            message.timeout = undefined;
        }
        if (
            object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null
        ) {
            message.unhealthyThreshold = object.unhealthyThreshold;
        } else {
            message.unhealthyThreshold = 0;
        }
        if (
            object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null
        ) {
            message.healthyThreshold = object.healthyThreshold;
        } else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = HealthCheckSpec_TcpOptions.fromPartial(
                object.tcpOptions
            );
        } else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = HealthCheckSpec_HttpOptions.fromPartial(
                object.httpOptions
            );
        } else {
            message.httpOptions = undefined;
        }
        return message;
    },
};

const baseHealthCheckSpec_TcpOptions: object = { port: 0 };

export const HealthCheckSpec_TcpOptions = {
    encode(
        message: HealthCheckSpec_TcpOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheckSpec_TcpOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheckSpec_TcpOptions,
        } as HealthCheckSpec_TcpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheckSpec_TcpOptions {
        const message = {
            ...baseHealthCheckSpec_TcpOptions,
        } as HealthCheckSpec_TcpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        return message;
    },

    toJSON(message: HealthCheckSpec_TcpOptions): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheckSpec_TcpOptions>
    ): HealthCheckSpec_TcpOptions {
        const message = {
            ...baseHealthCheckSpec_TcpOptions,
        } as HealthCheckSpec_TcpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        return message;
    },
};

const baseHealthCheckSpec_HttpOptions: object = { port: 0, path: '' };

export const HealthCheckSpec_HttpOptions = {
    encode(
        message: HealthCheckSpec_HttpOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheckSpec_HttpOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheckSpec_HttpOptions,
        } as HealthCheckSpec_HttpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64() as Long);
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

    fromJSON(object: any): HealthCheckSpec_HttpOptions {
        const message = {
            ...baseHealthCheckSpec_HttpOptions,
        } as HealthCheckSpec_HttpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        } else {
            message.path = '';
        }
        return message;
    },

    toJSON(message: HealthCheckSpec_HttpOptions): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = message.port);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheckSpec_HttpOptions>
    ): HealthCheckSpec_HttpOptions {
        const message = {
            ...baseHealthCheckSpec_HttpOptions,
        } as HealthCheckSpec_HttpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        } else {
            message.path = '';
        }
        return message;
    },
};

const baseManagedInstance: object = {
    id: '',
    status: 0,
    instanceId: '',
    fqdn: '',
    name: '',
    statusMessage: '',
    zoneId: '',
};

export const ManagedInstance = {
    encode(
        message: ManagedInstance,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
            NetworkInterface.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.statusChangedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.statusChangedAt),
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ManagedInstance {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseManagedInstance } as ManagedInstance;
        message.networkInterfaces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32() as any;
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
                    message.networkInterfaces.push(
                        NetworkInterface.decode(reader, reader.uint32())
                    );
                    break;
                case 9:
                    message.statusChangedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ManagedInstance {
        const message = { ...baseManagedInstance } as ManagedInstance;
        message.networkInterfaces = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = managedInstance_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = String(object.instanceId);
        } else {
            message.instanceId = '';
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        } else {
            message.fqdn = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = String(object.statusMessage);
        } else {
            message.statusMessage = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (
            object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null
        ) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(NetworkInterface.fromJSON(e));
            }
        }
        if (
            object.statusChangedAt !== undefined &&
            object.statusChangedAt !== null
        ) {
            message.statusChangedAt = fromJsonTimestamp(object.statusChangedAt);
        } else {
            message.statusChangedAt = undefined;
        }
        return message;
    },

    toJSON(message: ManagedInstance): unknown {
        const obj: any = {};
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
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterface.toJSON(e) : undefined
            );
        } else {
            obj.networkInterfaces = [];
        }
        message.statusChangedAt !== undefined &&
            (obj.statusChangedAt = message.statusChangedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<ManagedInstance>): ManagedInstance {
        const message = { ...baseManagedInstance } as ManagedInstance;
        message.networkInterfaces = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.instanceId !== undefined && object.instanceId !== null) {
            message.instanceId = object.instanceId;
        } else {
            message.instanceId = '';
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        } else {
            message.fqdn = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = object.statusMessage;
        } else {
            message.statusMessage = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (
            object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null
        ) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(NetworkInterface.fromPartial(e));
            }
        }
        if (
            object.statusChangedAt !== undefined &&
            object.statusChangedAt !== null
        ) {
            message.statusChangedAt = object.statusChangedAt;
        } else {
            message.statusChangedAt = undefined;
        }
        return message;
    },
};

const baseNetworkInterface: object = {
    index: '',
    macAddress: '',
    subnetId: '',
};

export const NetworkInterface = {
    encode(
        message: NetworkInterface,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
            PrimaryAddress.encode(
                message.primaryV4Address,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.primaryV6Address !== undefined) {
            PrimaryAddress.encode(
                message.primaryV6Address,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterface } as NetworkInterface;
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
                    message.primaryV4Address = PrimaryAddress.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.primaryV6Address = PrimaryAddress.decode(
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

    fromJSON(object: any): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        } else {
            message.index = '';
        }
        if (object.macAddress !== undefined && object.macAddress !== null) {
            message.macAddress = String(object.macAddress);
        } else {
            message.macAddress = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4Address !== undefined &&
            object.primaryV4Address !== null
        ) {
            message.primaryV4Address = PrimaryAddress.fromJSON(
                object.primaryV4Address
            );
        } else {
            message.primaryV4Address = undefined;
        }
        if (
            object.primaryV6Address !== undefined &&
            object.primaryV6Address !== null
        ) {
            message.primaryV6Address = PrimaryAddress.fromJSON(
                object.primaryV6Address
            );
        } else {
            message.primaryV6Address = undefined;
        }
        return message;
    },

    toJSON(message: NetworkInterface): unknown {
        const obj: any = {};
        message.index !== undefined && (obj.index = message.index);
        message.macAddress !== undefined &&
            (obj.macAddress = message.macAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4Address !== undefined &&
            (obj.primaryV4Address = message.primaryV4Address
                ? PrimaryAddress.toJSON(message.primaryV4Address)
                : undefined);
        message.primaryV6Address !== undefined &&
            (obj.primaryV6Address = message.primaryV6Address
                ? PrimaryAddress.toJSON(message.primaryV6Address)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<NetworkInterface>): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        } else {
            message.index = '';
        }
        if (object.macAddress !== undefined && object.macAddress !== null) {
            message.macAddress = object.macAddress;
        } else {
            message.macAddress = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4Address !== undefined &&
            object.primaryV4Address !== null
        ) {
            message.primaryV4Address = PrimaryAddress.fromPartial(
                object.primaryV4Address
            );
        } else {
            message.primaryV4Address = undefined;
        }
        if (
            object.primaryV6Address !== undefined &&
            object.primaryV6Address !== null
        ) {
            message.primaryV6Address = PrimaryAddress.fromPartial(
                object.primaryV6Address
            );
        } else {
            message.primaryV6Address = undefined;
        }
        return message;
    },
};

const basePrimaryAddress: object = { address: '' };

export const PrimaryAddress = {
    encode(
        message: PrimaryAddress,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNat !== undefined) {
            OneToOneNat.encode(
                message.oneToOneNat,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.dnsRecords) {
            DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryAddress {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrimaryAddress } as PrimaryAddress;
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNat = OneToOneNat.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.dnsRecords.push(
                        DnsRecord.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrimaryAddress {
        const message = { ...basePrimaryAddress } as PrimaryAddress;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.oneToOneNat !== undefined && object.oneToOneNat !== null) {
            message.oneToOneNat = OneToOneNat.fromJSON(object.oneToOneNat);
        } else {
            message.oneToOneNat = undefined;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PrimaryAddress): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNat !== undefined &&
            (obj.oneToOneNat = message.oneToOneNat
                ? OneToOneNat.toJSON(message.oneToOneNat)
                : undefined);
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) =>
                e ? DnsRecord.toJSON(e) : undefined
            );
        } else {
            obj.dnsRecords = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PrimaryAddress>): PrimaryAddress {
        const message = { ...basePrimaryAddress } as PrimaryAddress;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.oneToOneNat !== undefined && object.oneToOneNat !== null) {
            message.oneToOneNat = OneToOneNat.fromPartial(object.oneToOneNat);
        } else {
            message.oneToOneNat = undefined;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromPartial(e));
            }
        }
        return message;
    },
};

const baseOneToOneNat: object = { address: '', ipVersion: 0 };

export const OneToOneNat = {
    encode(
        message: OneToOneNat,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.dnsRecords) {
            DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNat {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNat } as OneToOneNat;
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32() as any;
                    break;
                case 3:
                    message.dnsRecords.push(
                        DnsRecord.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OneToOneNat {
        const message = { ...baseOneToOneNat } as OneToOneNat;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        } else {
            message.ipVersion = 0;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: OneToOneNat): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) =>
                e ? DnsRecord.toJSON(e) : undefined
            );
        } else {
            obj.dnsRecords = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<OneToOneNat>): OneToOneNat {
        const message = { ...baseOneToOneNat } as OneToOneNat;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        } else {
            message.ipVersion = 0;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromPartial(e));
            }
        }
        return message;
    },
};

const baseDnsRecord: object = { fqdn: '', dnsZoneId: '', ttl: 0, ptr: false };

export const DnsRecord = {
    encode(
        message: DnsRecord,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecord {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsRecord } as DnsRecord;
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

    fromJSON(object: any): DnsRecord {
        const message = { ...baseDnsRecord } as DnsRecord;
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

    toJSON(message: DnsRecord): unknown {
        const obj: any = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = message.ttl);
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },

    fromPartial(object: DeepPartial<DnsRecord>): DnsRecord {
        const message = { ...baseDnsRecord } as DnsRecord;
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

const baseLogRecord: object = { message: '' };

export const LogRecord = {
    encode(
        message: LogRecord,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.timestamp !== undefined) {
            Timestamp.encode(
                toTimestamp(message.timestamp),
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogRecord } as LogRecord;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
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

    fromJSON(object: any): LogRecord {
        const message = { ...baseLogRecord } as LogRecord;
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        } else {
            message.timestamp = undefined;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        } else {
            message.message = '';
        }
        return message;
    },

    toJSON(message: LogRecord): unknown {
        const obj: any = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    fromPartial(object: DeepPartial<LogRecord>): LogRecord {
        const message = { ...baseLogRecord } as LogRecord;
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        } else {
            message.timestamp = undefined;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        } else {
            message.message = '';
        }
        return message;
    },
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
