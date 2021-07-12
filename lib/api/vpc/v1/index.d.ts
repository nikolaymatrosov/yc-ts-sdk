import { AddressServiceService } from '../../../generated/yandex/cloud/vpc/v1/address_service';
import { NetworkServiceService } from '../../../generated/yandex/cloud/vpc/v1/network_service';
import { RouteTableServiceService } from '../../../generated/yandex/cloud/vpc/v1/route_table_service';
import { SecurityGroupServiceService } from '../../../generated/yandex/cloud/vpc/v1/security_group_service';
import { SubnetServiceService } from '../../../generated/yandex/cloud/vpc/v1/subnet_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const AddressServiceDef: SdkServiceDefinition<typeof AddressServiceService>;
export declare function AddressService(session?: Session): Client<typeof AddressServiceService, {}>;
export declare const NetworkServiceDef: SdkServiceDefinition<typeof NetworkServiceService>;
export declare function NetworkService(session?: Session): Client<typeof NetworkServiceService, {}>;
export declare const RouteTableServiceDef: SdkServiceDefinition<typeof RouteTableServiceService>;
export declare function RouteTableService(session?: Session): Client<typeof RouteTableServiceService, {}>;
export declare const SecurityGroupServiceDef: SdkServiceDefinition<typeof SecurityGroupServiceService>;
export declare function SecurityGroupService(session?: Session): Client<typeof SecurityGroupServiceService, {}>;
export declare const SubnetServiceDef: SdkServiceDefinition<typeof SubnetServiceService>;
export declare function SubnetService(session?: Session): Client<typeof SubnetServiceService, {}>;
