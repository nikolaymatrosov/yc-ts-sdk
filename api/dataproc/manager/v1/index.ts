import { JobServiceService } from 'cloud/dataproc/manager/v1/job_service';
import { DataprocManagerServiceService } from 'cloud/dataproc/manager/v1/manager_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const JobServiceDef: SdkServiceDefinition<typeof JobServiceService> = {
    ...JobServiceService,
    __endpointId: 'dataproc-manager',
};

export function JobService(
    session?: Session
): Client<typeof JobServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(JobServiceDef);
}

export const DataprocManagerServiceDef: SdkServiceDefinition<
    typeof DataprocManagerServiceService
> = {
    ...DataprocManagerServiceService,
    __endpointId: 'dataproc-manager',
};

export function DataprocManagerService(
    session?: Session
): Client<typeof DataprocManagerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DataprocManagerServiceDef);
}
