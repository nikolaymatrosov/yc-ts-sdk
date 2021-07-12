import { InstanceGroupServiceService } from '../../../../generated/yandex/cloud/compute/v1/instancegroup/instance_group_service';
import { Session } from 'src';
export const InstanceGroupServiceDef = {
    ...InstanceGroupServiceService,
    __endpointId: 'compute',
};
export function InstanceGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(InstanceGroupServiceDef);
}
