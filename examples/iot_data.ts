// noinspection ES6PreferShortImport

import { run } from './';
import { Session } from '../src/';

import { RegistryDataService, RegistryService } from '../api/iot/devices/v1';
import { ListRegistriesRequest } from '../generated/yandex/cloud/iot/devices/v1/registry_service';

run(async (session: Session, cloudId: string, folderId: string) => {
    const registryService = RegistryService(session);
    const dataService = RegistryDataService(session);

    const registries = await registryService.list(ListRegistriesRequest.fromPartial({ folderId }));
    console.log(
        `found ${registries.registries.length} registries in folder ${folderId}`,
    );

    await Promise.all(
        registries.registries.map((registry) => {
            console.log(`broadcasting to ${registry.id}`);
            return dataService.publish({
                registryId: registry.id,
                topic: `$registries/${registry.id}/commands/heartbeat`,
                data: Buffer.from('{}'),
            });
        }),
    );

    console.log('all broadcasts sent');
});
