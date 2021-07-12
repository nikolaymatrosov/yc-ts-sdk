import { SttServiceService } from 'cloud/ai/stt/v2/stt_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const SttServiceDef: SdkServiceDefinition<typeof SttServiceService> = {
    ...SttServiceService,
    __endpointId: 'undefined',
};

export function SttService(
    session?: Session
): Client<typeof SttServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SttServiceDef);
}
