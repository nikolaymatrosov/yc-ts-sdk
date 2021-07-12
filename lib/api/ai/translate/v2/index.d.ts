import { TranslationServiceService } from '../../../../generated/yandex/cloud/ai/translate/v2/translation_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const TranslationServiceDef: SdkServiceDefinition<typeof TranslationServiceService>;
export declare function TranslationService(session?: Session): Client<typeof TranslationServiceService, {}>;
