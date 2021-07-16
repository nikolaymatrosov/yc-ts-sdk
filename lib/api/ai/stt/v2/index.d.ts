import { SttServiceService } from '../../../../generated/yandex/cloud/ai/stt/v2/stt_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const SttServiceDef: SdkServiceDefinition<typeof SttServiceService>;
export declare function SttService(session?: Session): Client<typeof SttServiceService, {}>;
