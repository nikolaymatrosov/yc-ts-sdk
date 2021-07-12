import { SttServiceService } from '../../../../generated/yandex/cloud/ai/stt/v2/stt_service';
import { Session } from 'src';
export const SttServiceDef = {
    ...SttServiceService,
    __endpointId: 'undefined',
};
export function SttService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SttServiceDef);
}
