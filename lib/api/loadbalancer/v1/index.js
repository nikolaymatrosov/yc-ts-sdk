import { NetworkLoadBalancerServiceService } from '../../../generated/yandex/cloud/loadbalancer/v1/network_load_balancer_service';
import { TargetGroupServiceService } from '../../../generated/yandex/cloud/loadbalancer/v1/target_group_service';
import { Session } from 'src';
export const NetworkLoadBalancerServiceDef = {
    ...NetworkLoadBalancerServiceService,
    __endpointId: 'load-balancer',
};
export function NetworkLoadBalancerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NetworkLoadBalancerServiceDef);
}
export const TargetGroupServiceDef = {
    ...TargetGroupServiceService,
    __endpointId: 'load-balancer',
};
export function TargetGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TargetGroupServiceDef);
}
