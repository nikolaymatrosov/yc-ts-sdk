import { FunctionServiceService } from '../../../../generated/yandex/cloud/serverless/functions/v1/function_service';
import { Session } from '../../../../src/index';
export const FunctionServiceDef = {
    ...FunctionServiceService,
    __endpointId: 'serverless-functions',
};
export function FunctionService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FunctionServiceDef);
}
