"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.UserServiceDef = exports.OrganizationService = exports.OrganizationServiceDef = void 0;
const organization_service_1 = require("../../../generated/yandex/cloud/organizationmanager/v1/organization_service");
const user_service_1 = require("../../../generated/yandex/cloud/organizationmanager/v1/user_service");
const index_1 = require("../../../src/index");
exports.OrganizationServiceDef = {
    ...organization_service_1.OrganizationServiceService,
    __endpointId: 'organization-manager',
};
function OrganizationService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.OrganizationServiceDef);
}
exports.OrganizationService = OrganizationService;
exports.UserServiceDef = {
    ...user_service_1.UserServiceService,
    __endpointId: 'organization-manager',
};
function UserService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.UserServiceDef);
}
exports.UserService = UserService;
