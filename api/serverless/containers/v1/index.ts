import { ContainerServiceService } from 'cloud/serverless/containers/v1/container_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ContainerServiceDef: SdkServiceDefinition<
    typeof ContainerServiceService
> = {
    ...ContainerServiceService,
    __endpointId: 'serverless-containers',
};

export function ContainerService(
    session?: Session
): Client<typeof ContainerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ContainerServiceDef);
}
