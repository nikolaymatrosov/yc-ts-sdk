import { NetworkLoadBalancerServiceService } from '../../../generated/yandex/cloud/loadbalancer/v1/network_load_balancer_service';
import { TargetGroupServiceService } from '../../../generated/yandex/cloud/loadbalancer/v1/target_group_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../src/index';
export declare const NetworkLoadBalancerServiceDef: SdkServiceDefinition<typeof NetworkLoadBalancerServiceService>;
export declare function NetworkLoadBalancerService(session?: Session): Client<typeof NetworkLoadBalancerServiceService, {}>;
export declare const TargetGroupServiceDef: SdkServiceDefinition<typeof TargetGroupServiceService>;
export declare function TargetGroupService(session?: Session): Client<typeof TargetGroupServiceService, {}>;
