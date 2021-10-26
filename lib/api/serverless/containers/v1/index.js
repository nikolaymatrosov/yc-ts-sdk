import { ContainerServiceService } from '../../../../generated/yandex/cloud/serverless/containers/v1/container_service';
import { Session } from '../../../../src/index';
export const ContainerServiceDef = {
    ...ContainerServiceService,
    __endpointId: 'serverless-containers',
};
export function ContainerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ContainerServiceDef);
}
