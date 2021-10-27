"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateService = exports.CertificateServiceDef = exports.CertificateContentService = exports.CertificateContentServiceDef = void 0;
const certificate_content_service_1 = require("../../../generated/yandex/cloud/certificatemanager/v1/certificate_content_service");
const certificate_service_1 = require("../../../generated/yandex/cloud/certificatemanager/v1/certificate_service");
const index_1 = require("../../../src/index");
exports.CertificateContentServiceDef = {
    ...certificate_content_service_1.CertificateContentServiceService,
    __endpointId: 'certificate-manager-data',
};
function CertificateContentService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.CertificateContentServiceDef);
}
exports.CertificateContentService = CertificateContentService;
exports.CertificateServiceDef = {
    ...certificate_service_1.CertificateServiceService,
    __endpointId: 'certificate-manager',
};
function CertificateService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.CertificateServiceDef);
}
exports.CertificateService = CertificateService;
