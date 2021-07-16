import { NodeServiceService } from '../../../generated/yandex/cloud/datasphere/v1/node_service';
import { ProjectServiceService } from '../../../generated/yandex/cloud/datasphere/v1/project_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../src/index';
export declare const NodeServiceDef: SdkServiceDefinition<typeof NodeServiceService>;
export declare function NodeService(session?: Session): Client<typeof NodeServiceService, {}>;
export declare const ProjectServiceDef: SdkServiceDefinition<typeof ProjectServiceService>;
export declare function ProjectService(session?: Session): Client<typeof ProjectServiceService, {}>;
