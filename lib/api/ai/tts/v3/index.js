import { SynthesizerService } from '../../../../generated/yandex/cloud/ai/tts/v3/tts_service';
import { Session } from '../../../../src/index';
export const SynthesizerDef = {
    ...SynthesizerService,
    __endpointId: 'undefined',
};
export function Synthesizer(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SynthesizerDef);
}
