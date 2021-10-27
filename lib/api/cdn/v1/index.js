"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = exports.ResourceServiceDef = exports.OriginService = exports.OriginServiceDef = exports.OriginGroupService = exports.OriginGroupServiceDef = exports.CacheService = exports.CacheServiceDef = void 0;
const cache_service_1 = require("../../../generated/yandex/cloud/cdn/v1/cache_service");
const origin_group_service_1 = require("../../../generated/yandex/cloud/cdn/v1/origin_group_service");
const origin_service_1 = require("../../../generated/yandex/cloud/cdn/v1/origin_service");
const resource_service_1 = require("../../../generated/yandex/cloud/cdn/v1/resource_service");
const index_1 = require("../../../src/index");
exports.CacheServiceDef = {
    ...cache_service_1.CacheServiceService,
    __endpointId: 'cdn',
};
function CacheService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.CacheServiceDef);
}
exports.CacheService = CacheService;
exports.OriginGroupServiceDef = {
    ...origin_group_service_1.OriginGroupServiceService,
    __endpointId: 'cdn',
};
function OriginGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.OriginGroupServiceDef);
}
exports.OriginGroupService = OriginGroupService;
exports.OriginServiceDef = {
    ...origin_service_1.OriginServiceService,
    __endpointId: 'cdn',
};
function OriginService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.OriginServiceDef);
}
exports.OriginService = OriginService;
exports.ResourceServiceDef = {
    ...resource_service_1.ResourceServiceService,
    __endpointId: 'cdn',
};
function ResourceService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ResourceServiceDef);
}
exports.ResourceService = ResourceService;
