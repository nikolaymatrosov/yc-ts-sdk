"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsZoneService = exports.DnsZoneServiceDef = void 0;
const dns_zone_service_1 = require("../../../generated/yandex/cloud/dns/v1/dns_zone_service");
const index_1 = require("../../../src/index");
exports.DnsZoneServiceDef = {
    ...dns_zone_service_1.DnsZoneServiceService,
    __endpointId: 'dns',
};
function DnsZoneService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DnsZoneServiceDef);
}
exports.DnsZoneService = DnsZoneService;
