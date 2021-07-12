import { OperationServiceService } from 'cloud/operation/operation_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const OperationServiceDef: SdkServiceDefinition<
    typeof OperationServiceService
> = {
    ...OperationServiceService,
    __endpointId: 'operation',
};

export function OperationService(
    session?: Session
): Client<typeof OperationServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OperationServiceDef);
}
