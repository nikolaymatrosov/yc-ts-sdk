import { CacheServiceService } from 'cloud/cdn/v1/cache_service';
import { OriginGroupServiceService } from 'cloud/cdn/v1/origin_group_service';
import { OriginServiceService } from 'cloud/cdn/v1/origin_service';
import { ResourceServiceService } from 'cloud/cdn/v1/resource_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const CacheServiceDef: SdkServiceDefinition<typeof CacheServiceService> =
    {
        ...CacheServiceService,
        __endpointId: 'cdn',
    };

export function CacheService(
    session?: Session
): Client<typeof CacheServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CacheServiceDef);
}

export const OriginGroupServiceDef: SdkServiceDefinition<
    typeof OriginGroupServiceService
> = {
    ...OriginGroupServiceService,
    __endpointId: 'cdn',
};

export function OriginGroupService(
    session?: Session
): Client<typeof OriginGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OriginGroupServiceDef);
}

export const OriginServiceDef: SdkServiceDefinition<
    typeof OriginServiceService
> = {
    ...OriginServiceService,
    __endpointId: 'cdn',
};

export function OriginService(
    session?: Session
): Client<typeof OriginServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OriginServiceDef);
}

export const ResourceServiceDef: SdkServiceDefinition<
    typeof ResourceServiceService
> = {
    ...ResourceServiceService,
    __endpointId: 'cdn',
};

export function ResourceService(
    session?: Session
): Client<typeof ResourceServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourceServiceDef);
}
