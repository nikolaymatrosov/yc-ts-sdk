import { CertificateContentServiceService } from '../../../generated/yandex/cloud/certificatemanager/v1/certificate_content_service';
import { CertificateServiceService } from '../../../generated/yandex/cloud/certificatemanager/v1/certificate_service';
import { Session } from '../../../src/index';
export const CertificateContentServiceDef = {
    ...CertificateContentServiceService,
    __endpointId: 'certificate-manager-data',
};
export function CertificateContentService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CertificateContentServiceDef);
}
export const CertificateServiceDef = {
    ...CertificateServiceService,
    __endpointId: 'certificate-manager',
};
export function CertificateService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CertificateServiceDef);
}
