import { BackendGroupServiceService } from 'cloud/apploadbalancer/v1/backend_group_service';
import { HttpRouterServiceService } from 'cloud/apploadbalancer/v1/http_router_service';
import { LoadBalancerServiceService } from 'cloud/apploadbalancer/v1/load_balancer_service';
import { TargetGroupServiceService } from 'cloud/apploadbalancer/v1/target_group_service';
import { VirtualHostServiceService } from 'cloud/apploadbalancer/v1/virtual_host_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const BackendGroupServiceDef: SdkServiceDefinition<
    typeof BackendGroupServiceService
> = {
    ...BackendGroupServiceService,
    __endpointId: 'alb',
};

export function BackendGroupService(
    session?: Session
): Client<typeof BackendGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackendGroupServiceDef);
}

export const HttpRouterServiceDef: SdkServiceDefinition<
    typeof HttpRouterServiceService
> = {
    ...HttpRouterServiceService,
    __endpointId: 'alb',
};

export function HttpRouterService(
    session?: Session
): Client<typeof HttpRouterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(HttpRouterServiceDef);
}

export const LoadBalancerServiceDef: SdkServiceDefinition<
    typeof LoadBalancerServiceService
> = {
    ...LoadBalancerServiceService,
    __endpointId: 'alb',
};

export function LoadBalancerService(
    session?: Session
): Client<typeof LoadBalancerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LoadBalancerServiceDef);
}

export const TargetGroupServiceDef: SdkServiceDefinition<
    typeof TargetGroupServiceService
> = {
    ...TargetGroupServiceService,
    __endpointId: 'alb',
};

export function TargetGroupService(
    session?: Session
): Client<typeof TargetGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TargetGroupServiceDef);
}

export const VirtualHostServiceDef: SdkServiceDefinition<
    typeof VirtualHostServiceService
> = {
    ...VirtualHostServiceService,
    __endpointId: 'alb',
};

export function VirtualHostService(
    session?: Session
): Client<typeof VirtualHostServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VirtualHostServiceDef);
}
