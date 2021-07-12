import { FunctionServiceService } from 'cloud/serverless/functions/v1/function_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const FunctionServiceDef: SdkServiceDefinition<
    typeof FunctionServiceService
> = {
    ...FunctionServiceService,
    __endpointId: 'serverless-functions',
};

export function FunctionService(
    session?: Session
): Client<typeof FunctionServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FunctionServiceDef);
}
