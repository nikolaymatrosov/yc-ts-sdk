import { DeviceDataServiceService } from 'cloud/iot/devices/v1/device_data_service';
import { RegistryDataServiceService } from 'cloud/iot/devices/v1/registry_data_service';
import { RegistryServiceService } from 'cloud/iot/devices/v1/registry_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const RegistryServiceDef: SdkServiceDefinition<
    typeof RegistryServiceService
> = {
    ...RegistryServiceService,
    __endpointId: 'iot-devices',
};

export function RegistryService(
    session?: Session
): Client<typeof RegistryServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RegistryServiceDef);
}

export const DeviceDataServiceDef: SdkServiceDefinition<
    typeof DeviceDataServiceService
> = {
    ...DeviceDataServiceService,
    __endpointId: 'iot-data',
};

export function DeviceDataService(
    session?: Session
): Client<typeof DeviceDataServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DeviceDataServiceDef);
}

export const RegistryDataServiceDef: SdkServiceDefinition<
    typeof RegistryDataServiceService
> = {
    ...RegistryDataServiceService,
    __endpointId: 'iot-data',
};

export function RegistryDataService(
    session?: Session
): Client<typeof RegistryDataServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RegistryDataServiceDef);
}
