"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderService = exports.FolderServiceDef = exports.CloudService = exports.CloudServiceDef = void 0;
const cloud_service_1 = require("../../../generated/yandex/cloud/resourcemanager/v1/cloud_service");
const folder_service_1 = require("../../../generated/yandex/cloud/resourcemanager/v1/folder_service");
const index_1 = require("../../../src/index");
exports.CloudServiceDef = {
    ...cloud_service_1.CloudServiceService,
    __endpointId: 'resource-manager',
};
function CloudService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.CloudServiceDef);
}
exports.CloudService = CloudService;
exports.FolderServiceDef = {
    ...folder_service_1.FolderServiceService,
    __endpointId: 'resource-manager',
};
function FolderService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.FolderServiceDef);
}
exports.FolderService = FolderService;
