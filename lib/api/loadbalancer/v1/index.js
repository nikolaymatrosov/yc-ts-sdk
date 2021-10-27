"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetGroupService = exports.TargetGroupServiceDef = exports.NetworkLoadBalancerService = exports.NetworkLoadBalancerServiceDef = void 0;
const network_load_balancer_service_1 = require("../../../generated/yandex/cloud/loadbalancer/v1/network_load_balancer_service");
const target_group_service_1 = require("../../../generated/yandex/cloud/loadbalancer/v1/target_group_service");
const index_1 = require("../../../src/index");
exports.NetworkLoadBalancerServiceDef = {
    ...network_load_balancer_service_1.NetworkLoadBalancerServiceService,
    __endpointId: 'load-balancer',
};
function NetworkLoadBalancerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.NetworkLoadBalancerServiceDef);
}
exports.NetworkLoadBalancerService = NetworkLoadBalancerService;
exports.TargetGroupServiceDef = {
    ...target_group_service_1.TargetGroupServiceService,
    __endpointId: 'load-balancer',
};
function TargetGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.TargetGroupServiceDef);
}
exports.TargetGroupService = TargetGroupService;
