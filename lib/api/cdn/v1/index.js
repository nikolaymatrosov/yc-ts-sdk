import { CacheServiceService } from '../../../generated/yandex/cloud/cdn/v1/cache_service';
import { OriginGroupServiceService } from '../../../generated/yandex/cloud/cdn/v1/origin_group_service';
import { OriginServiceService } from '../../../generated/yandex/cloud/cdn/v1/origin_service';
import { ResourceServiceService } from '../../../generated/yandex/cloud/cdn/v1/resource_service';
import { Session } from '../../../src/index';
export const CacheServiceDef = {
    ...CacheServiceService,
    __endpointId: 'cdn',
};
export function CacheService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CacheServiceDef);
}
export const OriginGroupServiceDef = {
    ...OriginGroupServiceService,
    __endpointId: 'cdn',
};
export function OriginGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OriginGroupServiceDef);
}
export const OriginServiceDef = {
    ...OriginServiceService,
    __endpointId: 'cdn',
};
export function OriginService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OriginServiceDef);
}
export const ResourceServiceDef = {
    ...ResourceServiceService,
    __endpointId: 'cdn',
};
export function ResourceService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourceServiceDef);
}
