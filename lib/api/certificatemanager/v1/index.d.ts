import { CertificateContentServiceService } from '../../../generated/yandex/cloud/certificatemanager/v1/certificate_content_service';
import { CertificateServiceService } from '../../../generated/yandex/cloud/certificatemanager/v1/certificate_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../src/index';
export declare const CertificateContentServiceDef: SdkServiceDefinition<typeof CertificateContentServiceService>;
export declare function CertificateContentService(session?: Session): Client<typeof CertificateContentServiceService, {}>;
export declare const CertificateServiceDef: SdkServiceDefinition<typeof CertificateServiceService>;
export declare function CertificateService(session?: Session): Client<typeof CertificateServiceService, {}>;
