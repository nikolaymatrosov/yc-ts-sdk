import { VisionServiceService } from '../../../../generated/yandex/cloud/ai/vision/v1/vision_service';
import { Session } from 'src';
export const VisionServiceDef = {
    ...VisionServiceService,
    __endpointId: 'ai-vision',
};
export function VisionService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VisionServiceDef);
}
