import { AppTokenServiceService } from '../../../generated/yandex/cloud/datasphere/v1/app_token_service';
import { NodeServiceService } from '../../../generated/yandex/cloud/datasphere/v1/node_service';
import { ProjectServiceService } from '../../../generated/yandex/cloud/datasphere/v1/project_service';
import { Session } from '../../../src/index';
export const AppTokenServiceDef = {
    ...AppTokenServiceService,
    __endpointId: 'datasphere',
};
export function AppTokenService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AppTokenServiceDef);
}
export const NodeServiceDef = {
    ...NodeServiceService,
    __endpointId: 'datasphere',
};
export function NodeService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NodeServiceDef);
}
export const ProjectServiceDef = {
    ...ProjectServiceService,
    __endpointId: 'datasphere',
};
export function ProjectService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ProjectServiceDef);
}
