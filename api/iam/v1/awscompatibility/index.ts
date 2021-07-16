import { AccessKeyServiceService } from 'cloud/iam/v1/awscompatibility/access_key_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const AccessKeyServiceDef: SdkServiceDefinition<
    typeof AccessKeyServiceService
> = {
    ...AccessKeyServiceService,
    __endpointId: 'iam',
};

export function AccessKeyService(
    session?: Session
): Client<typeof AccessKeyServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AccessKeyServiceDef);
}
