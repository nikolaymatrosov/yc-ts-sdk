// noinspection ES6PreferShortImport

import { CloudService } from '../api/resourcemanager/v1';
import { Session } from '../src';
import { ListCloudsRequest } from '../generated/yandex/cloud/resourcemanager/v1/cloud_service';
import { run } from './';

run(async (session: Session) => {
    const cloudService =  CloudService(session);

    const cloudsResponse = await cloudService.list(ListCloudsRequest.fromPartial({ pageSize: 100 }));
    cloudsResponse.clouds.forEach((cloud) => {
        console.log(`found cloud id = ${cloud.id}, name = ${cloud.name}`);
    });
});
