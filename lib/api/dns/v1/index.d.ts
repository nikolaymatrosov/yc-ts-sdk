import { DnsZoneServiceService } from '../../../generated/yandex/cloud/dns/v1/dns_zone_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const DnsZoneServiceDef: SdkServiceDefinition<typeof DnsZoneServiceService>;
export declare function DnsZoneService(session?: Session): Client<typeof DnsZoneServiceService, {}>;
