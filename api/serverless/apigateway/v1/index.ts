import { ApiGatewayServiceService } from 'cloud/serverless/apigateway/v1/apigateway_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ApiGatewayServiceDef: SdkServiceDefinition<
    typeof ApiGatewayServiceService
> = {
    ...ApiGatewayServiceService,
    __endpointId: 'serverless-apigateway',
};

export function ApiGatewayService(
    session?: Session
): Client<typeof ApiGatewayServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ApiGatewayServiceDef);
}
