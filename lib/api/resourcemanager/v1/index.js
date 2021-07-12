import { CloudServiceService } from '../../../generated/yandex/cloud/resourcemanager/v1/cloud_service';
import { FolderServiceService } from '../../../generated/yandex/cloud/resourcemanager/v1/folder_service';
import { Session } from 'src';
export const CloudServiceDef = {
    ...CloudServiceService,
    __endpointId: 'resource-manager',
};
export function CloudService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CloudServiceDef);
}
export const FolderServiceDef = {
    ...FolderServiceService,
    __endpointId: 'resource-manager',
};
export function FolderService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FolderServiceDef);
}
