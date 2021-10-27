import { CertificateServiceService } from '../../../../generated/yandex/cloud/organizationmanager/v1/saml/certificate_service';
import { FederationServiceService } from '../../../../generated/yandex/cloud/organizationmanager/v1/saml/federation_service';
import { Session } from '../../../../src/index';
export const CertificateServiceDef = {
    ...CertificateServiceService,
    __endpointId: 'organization-manager',
};
export function CertificateService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CertificateServiceDef);
}
export const FederationServiceDef = {
    ...FederationServiceService,
    __endpointId: 'organization-manager',
};
export function FederationService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FederationServiceDef);
}
