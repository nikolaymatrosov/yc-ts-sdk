import { Duration } from '../../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1.instancegroup";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IPV4 = 1,
    /** IPV6 - IPv6 address, not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
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
    labels: {
        [key: string]: string;
    };
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
export declare enum InstanceGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** STARTING - Instance group is being started and will become active soon. */
    STARTING = 1,
    /**
     * ACTIVE - Instance group is active.
     * In this state the group manages its instances and monitors their health,
     * creating, deleting, stopping, updating and starting instances as needed.
     * To stop the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Stop].
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
    /** PAUSED - Instance group is paused. */
    PAUSED = 6,
    UNRECOGNIZED = -1
}
export declare function instanceGroup_StatusFromJSON(object: any): InstanceGroup_Status;
export declare function instanceGroup_StatusToJSON(object: InstanceGroup_Status): string;
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
    /** Time in seconds allotted for averaging metrics. */
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
    labels: {
        [key: string]: string;
    };
    /** Target value for the custom metric. Instance Groups maintains this level for each availability zone. */
    target: number;
    /** Folder id of custom metric in Yandex Monitoring that should be used for scaling. */
    folderId: string;
    /** Service of custom metric in Yandex Monitoring that should be used for scaling. */
    service: string;
}
export declare enum ScalePolicy_CustomRule_RuleType {
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
    UNRECOGNIZED = -1
}
export declare function scalePolicy_CustomRule_RuleTypeFromJSON(object: any): ScalePolicy_CustomRule_RuleType;
export declare function scalePolicy_CustomRule_RuleTypeToJSON(object: ScalePolicy_CustomRule_RuleType): string;
export declare enum ScalePolicy_CustomRule_MetricType {
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
    UNRECOGNIZED = -1
}
export declare function scalePolicy_CustomRule_MetricTypeFromJSON(object: any): ScalePolicy_CustomRule_MetricType;
export declare function scalePolicy_CustomRule_MetricTypeToJSON(object: ScalePolicy_CustomRule_MetricType): string;
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
export declare enum DeployPolicy_Strategy {
    STRATEGY_UNSPECIFIED = 0,
    /** PROACTIVE - Instance Groups can forcefully stop a running instance. This is the default. */
    PROACTIVE = 1,
    /**
     * OPPORTUNISTIC - Instance Groups does not stop a running instance.
     * Instead, it will wait until the instance stops itself or becomes unhealthy.
     */
    OPPORTUNISTIC = 2,
    UNRECOGNIZED = -1
}
export declare function deployPolicy_StrategyFromJSON(object: any): DeployPolicy_Strategy;
export declare function deployPolicy_StrategyToJSON(object: DeployPolicy_Strategy): string;
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
    labels: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
export declare enum AttachedDiskSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedDiskSpec_ModeFromJSON(object: any): AttachedDiskSpec_Mode;
export declare function attachedDiskSpec_ModeToJSON(object: AttachedDiskSpec_Mode): string;
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
export declare enum NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    SOFTWARE_ACCELERATED = 2,
    HARDWARE_ACCELERATED = 3,
    UNRECOGNIZED = -1
}
export declare function networkSettings_TypeFromJSON(object: any): NetworkSettings_Type;
export declare function networkSettings_TypeToJSON(object: NetworkSettings_Type): string;
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
    labels: {
        [key: string]: string;
    };
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
    labels: {
        [key: string]: string;
    };
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
export declare enum ManagedInstance_Status {
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
    UNRECOGNIZED = -1
}
export declare function managedInstance_StatusFromJSON(object: any): ManagedInstance_Status;
export declare function managedInstance_StatusToJSON(object: ManagedInstance_Status): string;
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
export declare const InstanceGroup: {
    encode(message: InstanceGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceGroup;
    fromJSON(object: any): InstanceGroup;
    toJSON(message: InstanceGroup): unknown;
    fromPartial(object: DeepPartial<InstanceGroup>): InstanceGroup;
};
export declare const InstanceGroup_LabelsEntry: {
    encode(message: InstanceGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceGroup_LabelsEntry;
    fromJSON(object: any): InstanceGroup_LabelsEntry;
    toJSON(message: InstanceGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<InstanceGroup_LabelsEntry>): InstanceGroup_LabelsEntry;
};
export declare const ApplicationLoadBalancerState: {
    encode(message: ApplicationLoadBalancerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationLoadBalancerState;
    fromJSON(object: any): ApplicationLoadBalancerState;
    toJSON(message: ApplicationLoadBalancerState): unknown;
    fromPartial(object: DeepPartial<ApplicationLoadBalancerState>): ApplicationLoadBalancerState;
};
export declare const Variable: {
    encode(message: Variable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Variable;
    fromJSON(object: any): Variable;
    toJSON(message: Variable): unknown;
    fromPartial(object: DeepPartial<Variable>): Variable;
};
export declare const LoadBalancerState: {
    encode(message: LoadBalancerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancerState;
    fromJSON(object: any): LoadBalancerState;
    toJSON(message: LoadBalancerState): unknown;
    fromPartial(object: DeepPartial<LoadBalancerState>): LoadBalancerState;
};
export declare const ManagedInstancesState: {
    encode(message: ManagedInstancesState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ManagedInstancesState;
    fromJSON(object: any): ManagedInstancesState;
    toJSON(message: ManagedInstancesState): unknown;
    fromPartial(object: DeepPartial<ManagedInstancesState>): ManagedInstancesState;
};
export declare const ManagedInstancesState_Statuses: {
    encode(message: ManagedInstancesState_Statuses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ManagedInstancesState_Statuses;
    fromJSON(object: any): ManagedInstancesState_Statuses;
    toJSON(message: ManagedInstancesState_Statuses): unknown;
    fromPartial(object: DeepPartial<ManagedInstancesState_Statuses>): ManagedInstancesState_Statuses;
};
export declare const ScalePolicy: {
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial(object: DeepPartial<ScalePolicy>): ScalePolicy;
};
export declare const ScalePolicy_AutoScale: {
    encode(message: ScalePolicy_AutoScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_AutoScale;
    fromJSON(object: any): ScalePolicy_AutoScale;
    toJSON(message: ScalePolicy_AutoScale): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_AutoScale>): ScalePolicy_AutoScale;
};
export declare const ScalePolicy_CpuUtilizationRule: {
    encode(message: ScalePolicy_CpuUtilizationRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_CpuUtilizationRule;
    fromJSON(object: any): ScalePolicy_CpuUtilizationRule;
    toJSON(message: ScalePolicy_CpuUtilizationRule): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_CpuUtilizationRule>): ScalePolicy_CpuUtilizationRule;
};
export declare const ScalePolicy_CustomRule: {
    encode(message: ScalePolicy_CustomRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_CustomRule;
    fromJSON(object: any): ScalePolicy_CustomRule;
    toJSON(message: ScalePolicy_CustomRule): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_CustomRule>): ScalePolicy_CustomRule;
};
export declare const ScalePolicy_CustomRule_LabelsEntry: {
    encode(message: ScalePolicy_CustomRule_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_CustomRule_LabelsEntry;
    fromJSON(object: any): ScalePolicy_CustomRule_LabelsEntry;
    toJSON(message: ScalePolicy_CustomRule_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_CustomRule_LabelsEntry>): ScalePolicy_CustomRule_LabelsEntry;
};
export declare const ScalePolicy_FixedScale: {
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_FixedScale>): ScalePolicy_FixedScale;
};
export declare const DeployPolicy: {
    encode(message: DeployPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployPolicy;
    fromJSON(object: any): DeployPolicy;
    toJSON(message: DeployPolicy): unknown;
    fromPartial(object: DeepPartial<DeployPolicy>): DeployPolicy;
};
export declare const AllocationPolicy: {
    encode(message: AllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllocationPolicy;
    fromJSON(object: any): AllocationPolicy;
    toJSON(message: AllocationPolicy): unknown;
    fromPartial(object: DeepPartial<AllocationPolicy>): AllocationPolicy;
};
export declare const AllocationPolicy_Zone: {
    encode(message: AllocationPolicy_Zone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllocationPolicy_Zone;
    fromJSON(object: any): AllocationPolicy_Zone;
    toJSON(message: AllocationPolicy_Zone): unknown;
    fromPartial(object: DeepPartial<AllocationPolicy_Zone>): AllocationPolicy_Zone;
};
export declare const InstanceTemplate: {
    encode(message: InstanceTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceTemplate;
    fromJSON(object: any): InstanceTemplate;
    toJSON(message: InstanceTemplate): unknown;
    fromPartial(object: DeepPartial<InstanceTemplate>): InstanceTemplate;
};
export declare const InstanceTemplate_LabelsEntry: {
    encode(message: InstanceTemplate_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceTemplate_LabelsEntry;
    fromJSON(object: any): InstanceTemplate_LabelsEntry;
    toJSON(message: InstanceTemplate_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<InstanceTemplate_LabelsEntry>): InstanceTemplate_LabelsEntry;
};
export declare const InstanceTemplate_MetadataEntry: {
    encode(message: InstanceTemplate_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceTemplate_MetadataEntry;
    fromJSON(object: any): InstanceTemplate_MetadataEntry;
    toJSON(message: InstanceTemplate_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<InstanceTemplate_MetadataEntry>): InstanceTemplate_MetadataEntry;
};
export declare const PlacementPolicy: {
    encode(message: PlacementPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy;
    fromJSON(object: any): PlacementPolicy;
    toJSON(message: PlacementPolicy): unknown;
    fromPartial(object: DeepPartial<PlacementPolicy>): PlacementPolicy;
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
export declare const SchedulingPolicy: {
    encode(message: SchedulingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulingPolicy;
    fromJSON(object: any): SchedulingPolicy;
    toJSON(message: SchedulingPolicy): unknown;
    fromPartial(object: DeepPartial<SchedulingPolicy>): SchedulingPolicy;
};
export declare const NetworkSettings: {
    encode(message: NetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkSettings;
    fromJSON(object: any): NetworkSettings;
    toJSON(message: NetworkSettings): unknown;
    fromPartial(object: DeepPartial<NetworkSettings>): NetworkSettings;
};
export declare const LoadBalancerSpec: {
    encode(message: LoadBalancerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancerSpec;
    fromJSON(object: any): LoadBalancerSpec;
    toJSON(message: LoadBalancerSpec): unknown;
    fromPartial(object: DeepPartial<LoadBalancerSpec>): LoadBalancerSpec;
};
export declare const TargetGroupSpec: {
    encode(message: TargetGroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroupSpec;
    fromJSON(object: any): TargetGroupSpec;
    toJSON(message: TargetGroupSpec): unknown;
    fromPartial(object: DeepPartial<TargetGroupSpec>): TargetGroupSpec;
};
export declare const TargetGroupSpec_LabelsEntry: {
    encode(message: TargetGroupSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroupSpec_LabelsEntry;
    fromJSON(object: any): TargetGroupSpec_LabelsEntry;
    toJSON(message: TargetGroupSpec_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<TargetGroupSpec_LabelsEntry>): TargetGroupSpec_LabelsEntry;
};
export declare const ApplicationLoadBalancerSpec: {
    encode(message: ApplicationLoadBalancerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationLoadBalancerSpec;
    fromJSON(object: any): ApplicationLoadBalancerSpec;
    toJSON(message: ApplicationLoadBalancerSpec): unknown;
    fromPartial(object: DeepPartial<ApplicationLoadBalancerSpec>): ApplicationLoadBalancerSpec;
};
export declare const ApplicationTargetGroupSpec: {
    encode(message: ApplicationTargetGroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationTargetGroupSpec;
    fromJSON(object: any): ApplicationTargetGroupSpec;
    toJSON(message: ApplicationTargetGroupSpec): unknown;
    fromPartial(object: DeepPartial<ApplicationTargetGroupSpec>): ApplicationTargetGroupSpec;
};
export declare const ApplicationTargetGroupSpec_LabelsEntry: {
    encode(message: ApplicationTargetGroupSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationTargetGroupSpec_LabelsEntry;
    fromJSON(object: any): ApplicationTargetGroupSpec_LabelsEntry;
    toJSON(message: ApplicationTargetGroupSpec_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<ApplicationTargetGroupSpec_LabelsEntry>): ApplicationTargetGroupSpec_LabelsEntry;
};
export declare const HealthChecksSpec: {
    encode(message: HealthChecksSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthChecksSpec;
    fromJSON(object: any): HealthChecksSpec;
    toJSON(message: HealthChecksSpec): unknown;
    fromPartial(object: DeepPartial<HealthChecksSpec>): HealthChecksSpec;
};
export declare const HealthCheckSpec: {
    encode(message: HealthCheckSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheckSpec;
    fromJSON(object: any): HealthCheckSpec;
    toJSON(message: HealthCheckSpec): unknown;
    fromPartial(object: DeepPartial<HealthCheckSpec>): HealthCheckSpec;
};
export declare const HealthCheckSpec_TcpOptions: {
    encode(message: HealthCheckSpec_TcpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheckSpec_TcpOptions;
    fromJSON(object: any): HealthCheckSpec_TcpOptions;
    toJSON(message: HealthCheckSpec_TcpOptions): unknown;
    fromPartial(object: DeepPartial<HealthCheckSpec_TcpOptions>): HealthCheckSpec_TcpOptions;
};
export declare const HealthCheckSpec_HttpOptions: {
    encode(message: HealthCheckSpec_HttpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheckSpec_HttpOptions;
    fromJSON(object: any): HealthCheckSpec_HttpOptions;
    toJSON(message: HealthCheckSpec_HttpOptions): unknown;
    fromPartial(object: DeepPartial<HealthCheckSpec_HttpOptions>): HealthCheckSpec_HttpOptions;
};
export declare const ManagedInstance: {
    encode(message: ManagedInstance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ManagedInstance;
    fromJSON(object: any): ManagedInstance;
    toJSON(message: ManagedInstance): unknown;
    fromPartial(object: DeepPartial<ManagedInstance>): ManagedInstance;
};
export declare const NetworkInterface: {
    encode(message: NetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterface;
    fromJSON(object: any): NetworkInterface;
    toJSON(message: NetworkInterface): unknown;
    fromPartial(object: DeepPartial<NetworkInterface>): NetworkInterface;
};
export declare const PrimaryAddress: {
    encode(message: PrimaryAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddress;
    fromJSON(object: any): PrimaryAddress;
    toJSON(message: PrimaryAddress): unknown;
    fromPartial(object: DeepPartial<PrimaryAddress>): PrimaryAddress;
};
export declare const OneToOneNat: {
    encode(message: OneToOneNat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNat;
    fromJSON(object: any): OneToOneNat;
    toJSON(message: OneToOneNat): unknown;
    fromPartial(object: DeepPartial<OneToOneNat>): OneToOneNat;
};
export declare const DnsRecord: {
    encode(message: DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecord;
    fromJSON(object: any): DnsRecord;
    toJSON(message: DnsRecord): unknown;
    fromPartial(object: DeepPartial<DnsRecord>): DnsRecord;
};
export declare const LogRecord: {
    encode(message: LogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord;
    fromJSON(object: any): LogRecord;
    toJSON(message: LogRecord): unknown;
    fromPartial(object: DeepPartial<LogRecord>): LogRecord;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
