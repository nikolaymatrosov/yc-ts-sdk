import { DnsZoneServiceService } from 'cloud/dns/v1/dns_zone_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const DnsZoneServiceDef: SdkServiceDefinition<
    typeof DnsZoneServiceService
> = {
    ...DnsZoneServiceService,
    __endpointId: 'dns',
};

export function DnsZoneService(
    session?: Session
): Client<typeof DnsZoneServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DnsZoneServiceDef);
}
