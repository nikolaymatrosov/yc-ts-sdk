import { ClusterServiceService } from '../../../generated/yandex/cloud/dataproc/v1/cluster_service';
import { JobServiceService } from '../../../generated/yandex/cloud/dataproc/v1/job_service';
import { ResourcePresetServiceService } from '../../../generated/yandex/cloud/dataproc/v1/resource_preset_service';
import { SubclusterServiceService } from '../../../generated/yandex/cloud/dataproc/v1/subcluster_service';
import { Session } from '../../../src/index';
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'dataproc',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const JobServiceDef = {
    ...JobServiceService,
    __endpointId: 'dataproc',
};
export function JobService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(JobServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'dataproc',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const SubclusterServiceDef = {
    ...SubclusterServiceService,
    __endpointId: 'dataproc',
};
export function SubclusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SubclusterServiceDef);
}
