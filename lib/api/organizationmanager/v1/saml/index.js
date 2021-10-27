"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederationService = exports.FederationServiceDef = exports.CertificateService = exports.CertificateServiceDef = void 0;
const certificate_service_1 = require("../../../../generated/yandex/cloud/organizationmanager/v1/saml/certificate_service");
const federation_service_1 = require("../../../../generated/yandex/cloud/organizationmanager/v1/saml/federation_service");
const index_1 = require("../../../../src/index");
exports.CertificateServiceDef = {
    ...certificate_service_1.CertificateServiceService,
    __endpointId: 'organization-manager',
};
function CertificateService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.CertificateServiceDef);
}
exports.CertificateService = CertificateService;
exports.FederationServiceDef = {
    ...federation_service_1.FederationServiceService,
    __endpointId: 'organization-manager',
};
function FederationService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.FederationServiceDef);
}
exports.FederationService = FederationService;
