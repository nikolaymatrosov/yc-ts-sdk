import { JobServiceService } from '../../../../generated/yandex/cloud/dataproc/manager/v1/job_service';
import { DataprocManagerServiceService } from '../../../../generated/yandex/cloud/dataproc/manager/v1/manager_service';
import { Session } from 'src';
export const JobServiceDef = {
    ...JobServiceService,
    __endpointId: 'dataproc-manager',
};
export function JobService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(JobServiceDef);
}
export const DataprocManagerServiceDef = {
    ...DataprocManagerServiceService,
    __endpointId: 'dataproc-manager',
};
export function DataprocManagerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DataprocManagerServiceDef);
}
