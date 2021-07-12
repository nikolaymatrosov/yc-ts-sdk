import { AccessKeyServiceService } from '../../../../generated/yandex/cloud/iam/v1/awscompatibility/access_key_service';
import { Session } from 'src';
export const AccessKeyServiceDef = {
    ...AccessKeyServiceService,
    __endpointId: 'iam',
};
export function AccessKeyService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AccessKeyServiceDef);
}
