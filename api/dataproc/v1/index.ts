import { ClusterServiceService } from 'cloud/dataproc/v1/cluster_service';
import { JobServiceService } from 'cloud/dataproc/v1/job_service';
import { ResourcePresetServiceService } from 'cloud/dataproc/v1/resource_preset_service';
import { SubclusterServiceService } from 'cloud/dataproc/v1/subcluster_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ClusterServiceDef: SdkServiceDefinition<
    typeof ClusterServiceService
> = {
    ...ClusterServiceService,
    __endpointId: 'dataproc',
};

export function ClusterService(
    session?: Session
): Client<typeof ClusterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}

export const JobServiceDef: SdkServiceDefinition<typeof JobServiceService> = {
    ...JobServiceService,
    __endpointId: 'dataproc',
};

export function JobService(
    session?: Session
): Client<typeof JobServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(JobServiceDef);
}

export const ResourcePresetServiceDef: SdkServiceDefinition<
    typeof ResourcePresetServiceService
> = {
    ...ResourcePresetServiceService,
    __endpointId: 'dataproc',
};

export function ResourcePresetService(
    session?: Session
): Client<typeof ResourcePresetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}

export const SubclusterServiceDef: SdkServiceDefinition<
    typeof SubclusterServiceService
> = {
    ...SubclusterServiceService,
    __endpointId: 'dataproc',
};

export function SubclusterService(
    session?: Session
): Client<typeof SubclusterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SubclusterServiceDef);
}
