import { VisionServiceService } from '../../../../generated/yandex/cloud/ai/vision/v1/vision_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const VisionServiceDef: SdkServiceDefinition<typeof VisionServiceService>;
export declare function VisionService(session?: Session): Client<typeof VisionServiceService, {}>;
