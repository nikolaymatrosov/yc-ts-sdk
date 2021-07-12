import { SymmetricCryptoServiceService } from '../../../generated/yandex/cloud/kms/v1/symmetric_crypto_service';
import { SymmetricKeyServiceService } from '../../../generated/yandex/cloud/kms/v1/symmetric_key_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const SymmetricCryptoServiceDef: SdkServiceDefinition<typeof SymmetricCryptoServiceService>;
export declare function SymmetricCryptoService(session?: Session): Client<typeof SymmetricCryptoServiceService, {}>;
export declare const SymmetricKeyServiceDef: SdkServiceDefinition<typeof SymmetricKeyServiceService>;
export declare function SymmetricKeyService(session?: Session): Client<typeof SymmetricKeyServiceService, {}>;
