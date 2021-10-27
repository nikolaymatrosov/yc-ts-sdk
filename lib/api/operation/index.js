"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationService = exports.OperationServiceDef = void 0;
const operation_service_1 = require("../../generated/yandex/cloud/operation/operation_service");
const index_1 = require("../../src/index");
exports.OperationServiceDef = {
    ...operation_service_1.OperationServiceService,
    __endpointId: 'operation',
};
function OperationService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.OperationServiceDef);
}
exports.OperationService = OperationService;
