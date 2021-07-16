import { ImageServiceService } from '../../../generated/yandex/cloud/containerregistry/v1/image_service';
import { LifecyclePolicyServiceService } from '../../../generated/yandex/cloud/containerregistry/v1/lifecycle_policy_service';
import { RegistryServiceService } from '../../../generated/yandex/cloud/containerregistry/v1/registry_service';
import { RepositoryServiceService } from '../../../generated/yandex/cloud/containerregistry/v1/repository_service';
import { ScannerServiceService } from '../../../generated/yandex/cloud/containerregistry/v1/scanner_service';
import { Session } from '../../../src/index';
export const ImageServiceDef = {
    ...ImageServiceService,
    __endpointId: 'container-registry',
};
export function ImageService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ImageServiceDef);
}
export const LifecyclePolicyServiceDef = {
    ...LifecyclePolicyServiceService,
    __endpointId: 'container-registry',
};
export function LifecyclePolicyService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LifecyclePolicyServiceDef);
}
export const RegistryServiceDef = {
    ...RegistryServiceService,
    __endpointId: 'container-registry',
};
export function RegistryService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RegistryServiceDef);
}
export const RepositoryServiceDef = {
    ...RepositoryServiceService,
    __endpointId: 'container-registry',
};
export function RepositoryService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RepositoryServiceDef);
}
export const ScannerServiceDef = {
    ...ScannerServiceService,
    __endpointId: 'container-registry',
};
export function ScannerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ScannerServiceDef);
}
