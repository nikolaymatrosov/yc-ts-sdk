import { NodeServiceService } from 'cloud/datasphere/v1/node_service';
import { ProjectServiceService } from 'cloud/datasphere/v1/project_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const NodeServiceDef: SdkServiceDefinition<typeof NodeServiceService> = {
    ...NodeServiceService,
    __endpointId: 'datasphere',
};

export function NodeService(
    session?: Session
): Client<typeof NodeServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NodeServiceDef);
}

export const ProjectServiceDef: SdkServiceDefinition<
    typeof ProjectServiceService
> = {
    ...ProjectServiceService,
    __endpointId: 'datasphere',
};

export function ProjectService(
    session?: Session
): Client<typeof ProjectServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ProjectServiceDef);
}
