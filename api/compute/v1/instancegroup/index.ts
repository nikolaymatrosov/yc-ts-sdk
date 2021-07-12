import { InstanceGroupServiceService } from 'cloud/compute/v1/instancegroup/instance_group_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const InstanceGroupServiceDef: SdkServiceDefinition<
    typeof InstanceGroupServiceService
> = {
    ...InstanceGroupServiceService,
    __endpointId: 'compute',
};

export function InstanceGroupService(
    session?: Session
): Client<typeof InstanceGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(InstanceGroupServiceDef);
}
