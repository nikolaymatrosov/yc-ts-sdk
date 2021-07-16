import { DeviceDataServiceService } from '../../../../generated/yandex/cloud/iot/devices/v1/device_data_service';
import { RegistryDataServiceService } from '../../../../generated/yandex/cloud/iot/devices/v1/registry_data_service';
import { RegistryServiceService } from '../../../../generated/yandex/cloud/iot/devices/v1/registry_service';
import { Session } from '../../../../src/index';
export const RegistryServiceDef = {
    ...RegistryServiceService,
    __endpointId: 'iot-devices',
};
export function RegistryService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RegistryServiceDef);
}
export const DeviceDataServiceDef = {
    ...DeviceDataServiceService,
    __endpointId: 'iot-data',
};
export function DeviceDataService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DeviceDataServiceDef);
}
export const RegistryDataServiceDef = {
    ...RegistryDataServiceService,
    __endpointId: 'iot-data',
};
export function RegistryDataService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RegistryDataServiceDef);
}
