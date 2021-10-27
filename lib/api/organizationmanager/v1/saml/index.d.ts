import { CertificateServiceService } from '../../../../generated/yandex/cloud/organizationmanager/v1/saml/certificate_service';
import { FederationServiceService } from '../../../../generated/yandex/cloud/organizationmanager/v1/saml/federation_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const CertificateServiceDef: SdkServiceDefinition<typeof CertificateServiceService>;
export declare function CertificateService(session?: Session): Client<typeof CertificateServiceService, {}>;
export declare const FederationServiceDef: SdkServiceDefinition<typeof FederationServiceService>;
export declare function FederationService(session?: Session): Client<typeof FederationServiceService, {}>;
