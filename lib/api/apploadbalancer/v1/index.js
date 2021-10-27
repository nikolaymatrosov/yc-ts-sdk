"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualHostService = exports.VirtualHostServiceDef = exports.TargetGroupService = exports.TargetGroupServiceDef = exports.LoadBalancerService = exports.LoadBalancerServiceDef = exports.HttpRouterService = exports.HttpRouterServiceDef = exports.BackendGroupService = exports.BackendGroupServiceDef = void 0;
const backend_group_service_1 = require("../../../generated/yandex/cloud/apploadbalancer/v1/backend_group_service");
const http_router_service_1 = require("../../../generated/yandex/cloud/apploadbalancer/v1/http_router_service");
const load_balancer_service_1 = require("../../../generated/yandex/cloud/apploadbalancer/v1/load_balancer_service");
const target_group_service_1 = require("../../../generated/yandex/cloud/apploadbalancer/v1/target_group_service");
const virtual_host_service_1 = require("../../../generated/yandex/cloud/apploadbalancer/v1/virtual_host_service");
const index_1 = require("../../../src/index");
exports.BackendGroupServiceDef = {
    ...backend_group_service_1.BackendGroupServiceService,
    __endpointId: 'alb',
};
function BackendGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.BackendGroupServiceDef);
}
exports.BackendGroupService = BackendGroupService;
exports.HttpRouterServiceDef = {
    ...http_router_service_1.HttpRouterServiceService,
    __endpointId: 'alb',
};
function HttpRouterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.HttpRouterServiceDef);
}
exports.HttpRouterService = HttpRouterService;
exports.LoadBalancerServiceDef = {
    ...load_balancer_service_1.LoadBalancerServiceService,
    __endpointId: 'alb',
};
function LoadBalancerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.LoadBalancerServiceDef);
}
exports.LoadBalancerService = LoadBalancerService;
exports.TargetGroupServiceDef = {
    ...target_group_service_1.TargetGroupServiceService,
    __endpointId: 'alb',
};
function TargetGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.TargetGroupServiceDef);
}
exports.TargetGroupService = TargetGroupService;
exports.VirtualHostServiceDef = {
    ...virtual_host_service_1.VirtualHostServiceService,
    __endpointId: 'alb',
};
function VirtualHostService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.VirtualHostServiceDef);
}
exports.VirtualHostService = VirtualHostService;
