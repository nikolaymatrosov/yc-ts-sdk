import { OperationServiceService } from '../../generated/yandex/cloud/operation/operation_service';
import { Session } from '../../src/index';
export const OperationServiceDef = {
    ...OperationServiceService,
    __endpointId: 'operation',
};
export function OperationService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OperationServiceDef);
}
