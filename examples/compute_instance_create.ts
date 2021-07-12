// noinspection ES6PreferShortImport

import { run } from './';

import { NetworkService } from '../api/vpc/v1';

import { ImageService, InstanceService } from '../api/compute/v1';
import { completion, getResponse, timeSpent } from '../src/operation';
import { ListNetworksRequest, ListNetworkSubnetsRequest } from '../generated/yandex/cloud/vpc/v1/network_service';
import { CreateInstanceRequest } from '../generated/yandex/cloud/compute/v1/instance_service';
import { Session } from '../src';
import { IpVersion } from '../generated/yandex/cloud/compute/v1/instance';

const TARGET_ZONE_ID = 'ru-central1-a';

run(async (session: Session, cloudId: string, folderId: string) => {
    const imageService = ImageService(session);
    const instanceService = InstanceService(session);
    const networkService = NetworkService(session);

    const networksResponse = await networkService.list(ListNetworksRequest.fromPartial({ folderId }));
    const network = networksResponse.networks.pop();
    if (!network) {
        throw new Error(`There is no networks created in folder ${folderId}`);
    }

    const subNetworksResponse = await networkService.listSubnets(ListNetworkSubnetsRequest.fromPartial({
        networkId: network.id,
    }));
    const subNetwork = subNetworksResponse.subnets
        .filter((sn) => sn.zoneId === TARGET_ZONE_ID)
        .pop();
    if (!subNetwork) {
        throw new Error(
            `There is no subnet exists for ${TARGET_ZONE_ID} in ${network.id}`,
        );
    }

    const image = await imageService.getLatestByFamily({
        family: 'ubuntu-1804-lts',
        folderId: 'standard-images',
    });

    let operation = await instanceService.create(CreateInstanceRequest.fromPartial({
        folderId: folderId,
        zoneId: TARGET_ZONE_ID,
        platformId: 'standard-v2',
        labels: { 'nodejs-sdk': 'yes' },
        resourcesSpec: {
            memory: 2 * 1024 * 1024 * 1024,
            cores: 2,
        },
        bootDiskSpec: {
            autoDelete: true,
            diskSpec: {
                size: 10 * 1024 * 1024 * 1024,
                imageId: image.id,
            },
        },
        networkInterfaceSpecs: [
            {
                subnetId: subNetwork.id,
                primaryV4AddressSpec: {
                    oneToOneNatSpec: { ipVersion: IpVersion.IPV4 },
                },
            },
        ],
    }));


    operation = await completion(operation, session);
    console.log(
        `Instance ${
            getResponse(operation).id
        } created, ${timeSpent(operation)}ms spent.`,
    );
});
