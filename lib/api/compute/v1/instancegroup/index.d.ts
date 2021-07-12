import { InstanceGroupServiceService } from '../../../../generated/yandex/cloud/compute/v1/instancegroup/instance_group_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const InstanceGroupServiceDef: SdkServiceDefinition<typeof InstanceGroupServiceService>;
export declare function InstanceGroupService(session?: Session): Client<typeof InstanceGroupServiceService, {}>;
