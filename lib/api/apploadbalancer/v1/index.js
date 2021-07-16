import { BackendGroupServiceService } from '../../../generated/yandex/cloud/apploadbalancer/v1/backend_group_service';
import { HttpRouterServiceService } from '../../../generated/yandex/cloud/apploadbalancer/v1/http_router_service';
import { LoadBalancerServiceService } from '../../../generated/yandex/cloud/apploadbalancer/v1/load_balancer_service';
import { TargetGroupServiceService } from '../../../generated/yandex/cloud/apploadbalancer/v1/target_group_service';
import { VirtualHostServiceService } from '../../../generated/yandex/cloud/apploadbalancer/v1/virtual_host_service';
import { Session } from '../../../src/index';
export const BackendGroupServiceDef = {
    ...BackendGroupServiceService,
    __endpointId: 'alb',
};
export function BackendGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackendGroupServiceDef);
}
export const HttpRouterServiceDef = {
    ...HttpRouterServiceService,
    __endpointId: 'alb',
};
export function HttpRouterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(HttpRouterServiceDef);
}
export const LoadBalancerServiceDef = {
    ...LoadBalancerServiceService,
    __endpointId: 'alb',
};
export function LoadBalancerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LoadBalancerServiceDef);
}
export const TargetGroupServiceDef = {
    ...TargetGroupServiceService,
    __endpointId: 'alb',
};
export function TargetGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TargetGroupServiceDef);
}
export const VirtualHostServiceDef = {
    ...VirtualHostServiceService,
    __endpointId: 'alb',
};
export function VirtualHostService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VirtualHostServiceDef);
}
