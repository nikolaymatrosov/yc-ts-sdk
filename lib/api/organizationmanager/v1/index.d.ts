import { OrganizationServiceService } from '../../../generated/yandex/cloud/organizationmanager/v1/organization_service';
import { UserServiceService } from '../../../generated/yandex/cloud/organizationmanager/v1/user_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../src/index';
export declare const OrganizationServiceDef: SdkServiceDefinition<typeof OrganizationServiceService>;
export declare function OrganizationService(session?: Session): Client<typeof OrganizationServiceService, {}>;
export declare const UserServiceDef: SdkServiceDefinition<typeof UserServiceService>;
export declare function UserService(session?: Session): Client<typeof UserServiceService, {}>;
