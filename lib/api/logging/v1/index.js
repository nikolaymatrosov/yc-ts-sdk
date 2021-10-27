"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogReadingService = exports.LogReadingServiceDef = exports.LogIngestionService = exports.LogIngestionServiceDef = exports.LogGroupService = exports.LogGroupServiceDef = void 0;
const log_group_service_1 = require("../../../generated/yandex/cloud/logging/v1/log_group_service");
const log_ingestion_service_1 = require("../../../generated/yandex/cloud/logging/v1/log_ingestion_service");
const log_reading_service_1 = require("../../../generated/yandex/cloud/logging/v1/log_reading_service");
const index_1 = require("../../../src/index");
exports.LogGroupServiceDef = {
    ...log_group_service_1.LogGroupServiceService,
    __endpointId: 'logging',
};
function LogGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.LogGroupServiceDef);
}
exports.LogGroupService = LogGroupService;
exports.LogIngestionServiceDef = {
    ...log_ingestion_service_1.LogIngestionServiceService,
    __endpointId: 'log-ingestion',
};
function LogIngestionService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.LogIngestionServiceDef);
}
exports.LogIngestionService = LogIngestionService;
exports.LogReadingServiceDef = {
    ...log_reading_service_1.LogReadingServiceService,
    __endpointId: 'log-reading',
};
function LogReadingService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.LogReadingServiceDef);
}
exports.LogReadingService = LogReadingService;
