import { DnsZoneServiceService } from '../../../generated/yandex/cloud/dns/v1/dns_zone_service';
import { Session } from '../../../src/index';
export const DnsZoneServiceDef = {
    ...DnsZoneServiceService,
    __endpointId: 'dns',
};
export function DnsZoneService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DnsZoneServiceDef);
}
