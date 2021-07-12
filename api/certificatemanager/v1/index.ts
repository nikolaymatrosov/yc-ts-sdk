import { CertificateContentServiceService } from 'cloud/certificatemanager/v1/certificate_content_service';
import { CertificateServiceService } from 'cloud/certificatemanager/v1/certificate_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const CertificateContentServiceDef: SdkServiceDefinition<
    typeof CertificateContentServiceService
> = {
    ...CertificateContentServiceService,
    __endpointId: 'certificate-manager-data',
};

export function CertificateContentService(
    session?: Session
): Client<typeof CertificateContentServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CertificateContentServiceDef);
}

export const CertificateServiceDef: SdkServiceDefinition<
    typeof CertificateServiceService
> = {
    ...CertificateServiceService,
    __endpointId: 'certificate-manager',
};

export function CertificateService(
    session?: Session
): Client<typeof CertificateServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CertificateServiceDef);
}
