import { NetworkLoadBalancerServiceService } from 'cloud/loadbalancer/v1/network_load_balancer_service';
import { TargetGroupServiceService } from 'cloud/loadbalancer/v1/target_group_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const NetworkLoadBalancerServiceDef: SdkServiceDefinition<
    typeof NetworkLoadBalancerServiceService
> = {
    ...NetworkLoadBalancerServiceService,
    __endpointId: 'load-balancer',
};

export function NetworkLoadBalancerService(
    session?: Session
): Client<typeof NetworkLoadBalancerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NetworkLoadBalancerServiceDef);
}

export const TargetGroupServiceDef: SdkServiceDefinition<
    typeof TargetGroupServiceService
> = {
    ...TargetGroupServiceService,
    __endpointId: 'load-balancer',
};

export function TargetGroupService(
    session?: Session
): Client<typeof TargetGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TargetGroupServiceDef);
}
