import { TriggerServiceService } from '../../../../generated/yandex/cloud/serverless/triggers/v1/trigger_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const TriggerServiceDef: SdkServiceDefinition<typeof TriggerServiceService>;
export declare function TriggerService(session?: Session): Client<typeof TriggerServiceService, {}>;
