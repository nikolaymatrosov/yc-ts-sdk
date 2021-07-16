import { AccessKeyServiceService } from '../../../../generated/yandex/cloud/iam/v1/awscompatibility/access_key_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const AccessKeyServiceDef: SdkServiceDefinition<typeof AccessKeyServiceService>;
export declare function AccessKeyService(session?: Session): Client<typeof AccessKeyServiceService, {}>;
