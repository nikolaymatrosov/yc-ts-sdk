import { CertificateServiceService } from 'cloud/organizationmanager/v1/saml/certificate_service';
import { FederationServiceService } from 'cloud/organizationmanager/v1/saml/federation_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const CertificateServiceDef: SdkServiceDefinition<
    typeof CertificateServiceService
> = {
    ...CertificateServiceService,
    __endpointId: 'organization-manager',
};

export function CertificateService(
    session?: Session
): Client<typeof CertificateServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CertificateServiceDef);
}

export const FederationServiceDef: SdkServiceDefinition<
    typeof FederationServiceService
> = {
    ...FederationServiceService,
    __endpointId: 'organization-manager',
};

export function FederationService(
    session?: Session
): Client<typeof FederationServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FederationServiceDef);
}
