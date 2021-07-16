import { PayloadServiceService } from '../../../generated/yandex/cloud/lockbox/v1/payload_service';
import { SecretServiceService } from '../../../generated/yandex/cloud/lockbox/v1/secret_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../src/index';
export declare const PayloadServiceDef: SdkServiceDefinition<typeof PayloadServiceService>;
export declare function PayloadService(session?: Session): Client<typeof PayloadServiceService, {}>;
export declare const SecretServiceDef: SdkServiceDefinition<typeof SecretServiceService>;
export declare function SecretService(session?: Session): Client<typeof SecretServiceService, {}>;
