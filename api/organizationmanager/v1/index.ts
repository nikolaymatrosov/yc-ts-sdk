import { OrganizationServiceService } from 'cloud/organizationmanager/v1/organization_service';
import { UserServiceService } from 'cloud/organizationmanager/v1/user_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const OrganizationServiceDef: SdkServiceDefinition<
    typeof OrganizationServiceService
> = {
    ...OrganizationServiceService,
    __endpointId: 'organization-manager',
};

export function OrganizationService(
    session?: Session
): Client<typeof OrganizationServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(OrganizationServiceDef);
}

export const UserServiceDef: SdkServiceDefinition<typeof UserServiceService> = {
    ...UserServiceService,
    __endpointId: 'organization-manager',
};

export function UserService(
    session?: Session
): Client<typeof UserServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
