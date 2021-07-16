import { TranslationServiceService } from '../../../../generated/yandex/cloud/ai/translate/v2/translation_service';
import { Session } from '../../../../src/index';
export const TranslationServiceDef = {
    ...TranslationServiceService,
    __endpointId: 'ai-translate',
};
export function TranslationService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TranslationServiceDef);
}
