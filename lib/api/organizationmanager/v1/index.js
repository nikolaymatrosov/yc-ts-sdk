import { OrganizationServiceService } from '../../../generated/yandex/cloud/organizationmanager/v1/organization_service';
import { UserServiceService } from '../../../generated/yandex/cloud/organizationmanager/v1/user_service';
import { Session } from '../../../src/index';
export const OrganizationServiceDef = {
    ...OrganizationServiceService,
    __endpointId: 'organization-manager',
};
export function OrganizationService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OrganizationServiceDef);
}
export const UserServiceDef = {
    ...UserServiceService,
    __endpointId: 'organization-manager',
};
export function UserService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
