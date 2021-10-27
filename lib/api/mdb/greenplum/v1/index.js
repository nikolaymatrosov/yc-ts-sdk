"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterService = exports.ClusterServiceDef = void 0;
const cluster_service_1 = require("../../../../generated/yandex/cloud/mdb/greenplum/v1/cluster_service");
const index_1 = require("../../../../src/index");
exports.ClusterServiceDef = {
    ...cluster_service_1.ClusterServiceService,
    __endpointId: 'managed-greenplum',
};
function ClusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ClusterServiceDef);
}
exports.ClusterService = ClusterService;
