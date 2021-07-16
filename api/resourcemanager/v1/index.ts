import { CloudServiceService } from 'cloud/resourcemanager/v1/cloud_service';
import { FolderServiceService } from 'cloud/resourcemanager/v1/folder_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const CloudServiceDef: SdkServiceDefinition<typeof CloudServiceService> =
    {
        ...CloudServiceService,
        __endpointId: 'resource-manager',
    };

export function CloudService(
    session?: Session
): Client<typeof CloudServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CloudServiceDef);
}

export const FolderServiceDef: SdkServiceDefinition<
    typeof FolderServiceService
> = {
    ...FolderServiceService,
    __endpointId: 'resource-manager',
};

export function FolderService(
    session?: Session
): Client<typeof FolderServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FolderServiceDef);
}
