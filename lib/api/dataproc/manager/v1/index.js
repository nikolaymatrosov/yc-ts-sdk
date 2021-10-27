"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataprocManagerService = exports.DataprocManagerServiceDef = exports.JobService = exports.JobServiceDef = void 0;
const job_service_1 = require("../../../../generated/yandex/cloud/dataproc/manager/v1/job_service");
const manager_service_1 = require("../../../../generated/yandex/cloud/dataproc/manager/v1/manager_service");
const index_1 = require("../../../../src/index");
exports.JobServiceDef = {
    ...job_service_1.JobServiceService,
    __endpointId: 'dataproc-manager',
};
function JobService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.JobServiceDef);
}
exports.JobService = JobService;
exports.DataprocManagerServiceDef = {
    ...manager_service_1.DataprocManagerServiceService,
    __endpointId: 'dataproc-manager',
};
function DataprocManagerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DataprocManagerServiceDef);
}
exports.DataprocManagerService = DataprocManagerService;
