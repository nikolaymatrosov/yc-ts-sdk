// noinspection ES6PreferShortImport

import { Session } from '../src';

import { SymmetricCryptoService, SymmetricKeyService } from '../api/kms/v1';
import { CreateSymmetricKeyRequest } from '../generated/yandex/cloud/kms/v1/symmetric_key_service';
import {
    SymmetricDecryptRequest,
    SymmetricEncryptRequest,
} from '../generated/yandex/cloud/kms/v1/symmetric_crypto_service';
import { completion, getResponse } from '../src/operation';
import { SymmetricAlgorithm } from '../generated/yandex/cloud/kms/v1/symmetric_key';

const run = require('./').run;


run(async (session: Session, cloudId: string, folderId: string) => {
    const keyService = SymmetricKeyService(session);
    const cryptoService = SymmetricCryptoService(session);

    let keyOp = await keyService.create(CreateSymmetricKeyRequest.fromPartial({
        folderId,
        defaultAlgorithm: SymmetricAlgorithm.AES_256,
    }));

    const key = getResponse(keyOp);

    const encrypted = (
        await cryptoService.encrypt(SymmetricEncryptRequest.fromPartial({
            keyId: key.id,
            plaintext: Buffer.from('example kms message'),
        }))
    ).ciphertext;

    console.log(`got "${encrypted}" from KMS. Let's decrypt.`);

    const decrypted = (
        await cryptoService.decrypt(SymmetricDecryptRequest.fromPartial({
            keyId: key.id,
            ciphertext: encrypted,
        }))
    ).plaintext;

    console.log(`got "${decrypted}" from KMS. Is it looks good?`);

    let keyDeleteOp = await keyService.delete({
        keyId: key.id,
    });
    await completion(keyDeleteOp, session);
});
