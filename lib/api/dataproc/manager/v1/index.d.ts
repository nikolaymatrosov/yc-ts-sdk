import { JobServiceService } from '../../../../generated/yandex/cloud/dataproc/manager/v1/job_service';
import { DataprocManagerServiceService } from '../../../../generated/yandex/cloud/dataproc/manager/v1/manager_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const JobServiceDef: SdkServiceDefinition<typeof JobServiceService>;
export declare function JobService(session?: Session): Client<typeof JobServiceService, {}>;
export declare const DataprocManagerServiceDef: SdkServiceDefinition<typeof DataprocManagerServiceService>;
export declare function DataprocManagerService(session?: Session): Client<typeof DataprocManagerServiceService, {}>;
