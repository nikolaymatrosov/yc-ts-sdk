import { SynthesizerService } from 'cloud/ai/tts/v3/tts_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const SynthesizerDef: SdkServiceDefinition<typeof SynthesizerService> = {
    ...SynthesizerService,
    __endpointId: 'undefined',
};

export function Synthesizer(
    session?: Session
): Client<typeof SynthesizerService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SynthesizerDef);
}
