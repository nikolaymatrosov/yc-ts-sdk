import { SynthesizerService } from '../../../../generated/yandex/cloud/ai/tts/v3/tts_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const SynthesizerDef: SdkServiceDefinition<typeof SynthesizerService>;
export declare function Synthesizer(session?: Session): Client<typeof SynthesizerService, {}>;
