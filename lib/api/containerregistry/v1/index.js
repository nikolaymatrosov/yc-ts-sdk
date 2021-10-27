"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannerService = exports.ScannerServiceDef = exports.RepositoryService = exports.RepositoryServiceDef = exports.RegistryService = exports.RegistryServiceDef = exports.LifecyclePolicyService = exports.LifecyclePolicyServiceDef = exports.ImageService = exports.ImageServiceDef = void 0;
const image_service_1 = require("../../../generated/yandex/cloud/containerregistry/v1/image_service");
const lifecycle_policy_service_1 = require("../../../generated/yandex/cloud/containerregistry/v1/lifecycle_policy_service");
const registry_service_1 = require("../../../generated/yandex/cloud/containerregistry/v1/registry_service");
const repository_service_1 = require("../../../generated/yandex/cloud/containerregistry/v1/repository_service");
const scanner_service_1 = require("../../../generated/yandex/cloud/containerregistry/v1/scanner_service");
const index_1 = require("../../../src/index");
exports.ImageServiceDef = {
    ...image_service_1.ImageServiceService,
    __endpointId: 'container-registry',
};
function ImageService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ImageServiceDef);
}
exports.ImageService = ImageService;
exports.LifecyclePolicyServiceDef = {
    ...lifecycle_policy_service_1.LifecyclePolicyServiceService,
    __endpointId: 'container-registry',
};
function LifecyclePolicyService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.LifecyclePolicyServiceDef);
}
exports.LifecyclePolicyService = LifecyclePolicyService;
exports.RegistryServiceDef = {
    ...registry_service_1.RegistryServiceService,
    __endpointId: 'container-registry',
};
function RegistryService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.RegistryServiceDef);
}
exports.RegistryService = RegistryService;
exports.RepositoryServiceDef = {
    ...repository_service_1.RepositoryServiceService,
    __endpointId: 'container-registry',
};
function RepositoryService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.RepositoryServiceDef);
}
exports.RepositoryService = RepositoryService;
exports.ScannerServiceDef = {
    ...scanner_service_1.ScannerServiceService,
    __endpointId: 'container-registry',
};
function ScannerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ScannerServiceDef);
}
exports.ScannerService = ScannerService;
