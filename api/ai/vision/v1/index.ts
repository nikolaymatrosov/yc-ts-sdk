import { VisionServiceService } from 'cloud/ai/vision/v1/vision_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const VisionServiceDef: SdkServiceDefinition<
    typeof VisionServiceService
> = {
    ...VisionServiceService,
    __endpointId: 'ai-vision',
};

export function VisionService(
    session?: Session
): Client<typeof VisionServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VisionServiceDef);
}
