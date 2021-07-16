import { ApiGatewayServiceService } from '../../../../generated/yandex/cloud/serverless/apigateway/v1/apigateway_service';
import { Session } from '../../../../src/index';
export const ApiGatewayServiceDef = {
    ...ApiGatewayServiceService,
    __endpointId: 'serverless-apigateway',
};
export function ApiGatewayService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ApiGatewayServiceDef);
}
