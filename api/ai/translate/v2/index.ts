import { TranslationServiceService } from 'cloud/ai/translate/v2/translation_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const TranslationServiceDef: SdkServiceDefinition<
    typeof TranslationServiceService
> = {
    ...TranslationServiceService,
    __endpointId: 'ai-translate',
};

export function TranslationService(
    session?: Session
): Client<typeof TranslationServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TranslationServiceDef);
}
