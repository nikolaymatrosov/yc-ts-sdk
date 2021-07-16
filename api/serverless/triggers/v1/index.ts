import { TriggerServiceService } from 'cloud/serverless/triggers/v1/trigger_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const TriggerServiceDef: SdkServiceDefinition<
    typeof TriggerServiceService
> = {
    ...TriggerServiceService,
    __endpointId: 'serverless-triggers',
};

export function TriggerService(
    session?: Session
): Client<typeof TriggerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TriggerServiceDef);
}
