"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceGroupService = exports.InstanceGroupServiceDef = void 0;
const instance_group_service_1 = require("../../../../generated/yandex/cloud/compute/v1/instancegroup/instance_group_service");
const index_1 = require("../../../../src/index");
exports.InstanceGroupServiceDef = {
    ...instance_group_service_1.InstanceGroupServiceService,
    __endpointId: 'compute',
};
function InstanceGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.InstanceGroupServiceDef);
}
exports.InstanceGroupService = InstanceGroupService;
