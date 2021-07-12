import { ImageServiceService } from 'cloud/containerregistry/v1/image_service';
import { LifecyclePolicyServiceService } from 'cloud/containerregistry/v1/lifecycle_policy_service';
import { RegistryServiceService } from 'cloud/containerregistry/v1/registry_service';
import { RepositoryServiceService } from 'cloud/containerregistry/v1/repository_service';
import { ScannerServiceService } from 'cloud/containerregistry/v1/scanner_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const ImageServiceDef: SdkServiceDefinition<typeof ImageServiceService> =
    {
        ...ImageServiceService,
        __endpointId: 'container-registry',
    };

export function ImageService(
    session?: Session
): Client<typeof ImageServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ImageServiceDef);
}

export const LifecyclePolicyServiceDef: SdkServiceDefinition<
    typeof LifecyclePolicyServiceService
> = {
    ...LifecyclePolicyServiceService,
    __endpointId: 'container-registry',
};

export function LifecyclePolicyService(
    session?: Session
): Client<typeof LifecyclePolicyServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LifecyclePolicyServiceDef);
}

export const RegistryServiceDef: SdkServiceDefinition<
    typeof RegistryServiceService
> = {
    ...RegistryServiceService,
    __endpointId: 'container-registry',
};

export function RegistryService(
    session?: Session
): Client<typeof RegistryServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RegistryServiceDef);
}

export const RepositoryServiceDef: SdkServiceDefinition<
    typeof RepositoryServiceService
> = {
    ...RepositoryServiceService,
    __endpointId: 'container-registry',
};

export function RepositoryService(
    session?: Session
): Client<typeof RepositoryServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RepositoryServiceDef);
}

export const ScannerServiceDef: SdkServiceDefinition<
    typeof ScannerServiceService
> = {
    ...ScannerServiceService,
    __endpointId: 'container-registry',
};

export function ScannerService(
    session?: Session
): Client<typeof ScannerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ScannerServiceDef);
}
