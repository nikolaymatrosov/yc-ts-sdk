import { BackupServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/backup_service';
import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/cluster_service';
import { DatabaseServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/database_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/resource_preset_service';
import { UserServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/user_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const BackupServiceDef: SdkServiceDefinition<typeof BackupServiceService>;
export declare function BackupService(session?: Session): Client<typeof BackupServiceService, {}>;
export declare const ClusterServiceDef: SdkServiceDefinition<typeof ClusterServiceService>;
export declare function ClusterService(session?: Session): Client<typeof ClusterServiceService, {}>;
export declare const DatabaseServiceDef: SdkServiceDefinition<typeof DatabaseServiceService>;
export declare function DatabaseService(session?: Session): Client<typeof DatabaseServiceService, {}>;
export declare const ResourcePresetServiceDef: SdkServiceDefinition<typeof ResourcePresetServiceService>;
export declare function ResourcePresetService(session?: Session): Client<typeof ResourcePresetServiceService, {}>;
export declare const UserServiceDef: SdkServiceDefinition<typeof UserServiceService>;
export declare function UserService(session?: Session): Client<typeof UserServiceService, {}>;
