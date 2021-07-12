import { TriggerServiceService } from '../../../../generated/yandex/cloud/serverless/triggers/v1/trigger_service';
import { Session } from 'src';
export const TriggerServiceDef = {
    ...TriggerServiceService,
    __endpointId: 'serverless-triggers',
};
export function TriggerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TriggerServiceDef);
}
