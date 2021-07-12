import { CloudServiceService } from '../../../generated/yandex/cloud/resourcemanager/v1/cloud_service';
import { FolderServiceService } from '../../../generated/yandex/cloud/resourcemanager/v1/folder_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const CloudServiceDef: SdkServiceDefinition<typeof CloudServiceService>;
export declare function CloudService(session?: Session): Client<typeof CloudServiceService, {}>;
export declare const FolderServiceDef: SdkServiceDefinition<typeof FolderServiceService>;
export declare function FolderService(session?: Session): Client<typeof FolderServiceService, {}>;
