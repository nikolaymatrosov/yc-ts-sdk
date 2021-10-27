"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubnetService = exports.SubnetServiceDef = exports.SecurityGroupService = exports.SecurityGroupServiceDef = exports.RouteTableService = exports.RouteTableServiceDef = exports.NetworkService = exports.NetworkServiceDef = exports.AddressService = exports.AddressServiceDef = void 0;
const address_service_1 = require("../../../generated/yandex/cloud/vpc/v1/address_service");
const network_service_1 = require("../../../generated/yandex/cloud/vpc/v1/network_service");
const route_table_service_1 = require("../../../generated/yandex/cloud/vpc/v1/route_table_service");
const security_group_service_1 = require("../../../generated/yandex/cloud/vpc/v1/security_group_service");
const subnet_service_1 = require("../../../generated/yandex/cloud/vpc/v1/subnet_service");
const index_1 = require("../../../src/index");
exports.AddressServiceDef = {
    ...address_service_1.AddressServiceService,
    __endpointId: 'vpc',
};
function AddressService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.AddressServiceDef);
}
exports.AddressService = AddressService;
exports.NetworkServiceDef = {
    ...network_service_1.NetworkServiceService,
    __endpointId: 'vpc',
};
function NetworkService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.NetworkServiceDef);
}
exports.NetworkService = NetworkService;
exports.RouteTableServiceDef = {
    ...route_table_service_1.RouteTableServiceService,
    __endpointId: 'vpc',
};
function RouteTableService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.RouteTableServiceDef);
}
exports.RouteTableService = RouteTableService;
exports.SecurityGroupServiceDef = {
    ...security_group_service_1.SecurityGroupServiceService,
    __endpointId: 'vpc',
};
function SecurityGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SecurityGroupServiceDef);
}
exports.SecurityGroupService = SecurityGroupService;
exports.SubnetServiceDef = {
    ...subnet_service_1.SubnetServiceService,
    __endpointId: 'vpc',
};
function SubnetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SubnetServiceDef);
}
exports.SubnetService = SubnetService;
