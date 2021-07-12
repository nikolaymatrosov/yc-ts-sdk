// noinspection ES6PreferShortImport

import { TranslationService } from '../api/ai/translate/v2';
import {
    TranslateRequest,
    TranslateRequest_Format,
} from '../generated/yandex/cloud/ai/translate/v2/translation_service';
import { Session } from '../src';

const run = require('./').run;


run(async (session: Session, _: any, folderId: string) => {
    const translationService = TranslationService(session);
    const texts = ['NodeJS SDK examples', 'Powerful, but easy to use library'];

    const response = await translationService.translate(TranslateRequest.fromPartial({
        targetLanguageCode: 'ru',
        format: TranslateRequest_Format.PLAIN_TEXT,
        folderId: folderId,
        texts: texts,
    }));

    response.translations.forEach((text, idx) => {
        console.log(`translated '${texts[idx]}' => '${text.text}'`);
    });
});
