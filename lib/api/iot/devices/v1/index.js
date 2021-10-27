"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryDataService = exports.RegistryDataServiceDef = exports.DeviceDataService = exports.DeviceDataServiceDef = exports.RegistryService = exports.RegistryServiceDef = void 0;
const device_data_service_1 = require("../../../../generated/yandex/cloud/iot/devices/v1/device_data_service");
const registry_data_service_1 = require("../../../../generated/yandex/cloud/iot/devices/v1/registry_data_service");
const registry_service_1 = require("../../../../generated/yandex/cloud/iot/devices/v1/registry_service");
const index_1 = require("../../../../src/index");
exports.RegistryServiceDef = {
    ...registry_service_1.RegistryServiceService,
    __endpointId: 'iot-devices',
};
function RegistryService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.RegistryServiceDef);
}
exports.RegistryService = RegistryService;
exports.DeviceDataServiceDef = {
    ...device_data_service_1.DeviceDataServiceService,
    __endpointId: 'iot-data',
};
function DeviceDataService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DeviceDataServiceDef);
}
exports.DeviceDataService = DeviceDataService;
exports.RegistryDataServiceDef = {
    ...registry_data_service_1.RegistryDataServiceService,
    __endpointId: 'iot-data',
};
function RegistryDataService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.RegistryDataServiceDef);
}
exports.RegistryDataService = RegistryDataService;
