"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubclusterService = exports.SubclusterServiceDef = exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.JobService = exports.JobServiceDef = exports.ClusterService = exports.ClusterServiceDef = void 0;
const cluster_service_1 = require("../../../generated/yandex/cloud/dataproc/v1/cluster_service");
const job_service_1 = require("../../../generated/yandex/cloud/dataproc/v1/job_service");
const resource_preset_service_1 = require("../../../generated/yandex/cloud/dataproc/v1/resource_preset_service");
const subcluster_service_1 = require("../../../generated/yandex/cloud/dataproc/v1/subcluster_service");
const index_1 = require("../../../src/index");
exports.ClusterServiceDef = {
    ...cluster_service_1.ClusterServiceService,
    __endpointId: 'dataproc',
};
function ClusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ClusterServiceDef);
}
exports.ClusterService = ClusterService;
exports.JobServiceDef = {
    ...job_service_1.JobServiceService,
    __endpointId: 'dataproc',
};
function JobService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.JobServiceDef);
}
exports.JobService = JobService;
exports.ResourcePresetServiceDef = {
    ...resource_preset_service_1.ResourcePresetServiceService,
    __endpointId: 'dataproc',
};
function ResourcePresetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ResourcePresetServiceDef);
}
exports.ResourcePresetService = ResourcePresetService;
exports.SubclusterServiceDef = {
    ...subcluster_service_1.SubclusterServiceService,
    __endpointId: 'dataproc',
};
function SubclusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SubclusterServiceDef);
}
exports.SubclusterService = SubclusterService;
