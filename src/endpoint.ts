// import { ApiEndpointService } from '../api/endpoint';
import {
    ApiEndpointServiceService,
    ListApiEndpointsRequest,
} from '../generated/yandex/cloud/endpoint/api_endpoint_service';
import { credentials } from '@grpc/grpc-js';
import { createChannel, createClient } from 'nice-grpc';

interface Endpoint {
    id: string;
    address: string;
}

type EndpointDict = { [id: string]: string };

const defaultEndpoints = [
    {
        id: 'ai-speechkit',
        address: 'transcribe.api.cloud.yandex.net:443',
    },
    {
        id: 'ai-stt',
        address: 'transcribe.api.cloud.yandex.net:443',
    },
    {
        id: 'ai-translate',
        address: 'translate.api.cloud.yandex.net:443',
    },
    {
        id: 'ai-vision',
        address: 'vision.api.cloud.yandex.net:443',
    },
    {
        id: 'alb',
        address: 'alb.api.cloud.yandex.net:443',
    },
    {
        id: 'application-load-balancer',
        address: 'alb.api.cloud.yandex.net:443',
    },
    {
        id: 'apploadbalancer',
        address: 'alb.api.cloud.yandex.net:443',
    },
    {
        id: 'billing',
        address: 'billing.api.cloud.yandex.net:443',
    },
    {
        id: 'cdn',
        address: 'cdn.api.cloud.yandex.net:443',
    },
    {
        id: 'certificate-manager',
        address: 'certificate-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'certificate-manager-data',
        address: 'data.certificate-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'compute',
        address: 'compute.api.cloud.yandex.net:443',
    },
    {
        id: 'container-registry',
        address: 'container-registry.api.cloud.yandex.net:443',
    },
    {
        id: 'dataproc',
        address: 'dataproc.api.cloud.yandex.net:443',
    },
    {
        id: 'dataproc-manager',
        address: 'dataproc-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'datasphere',
        address: 'datasphere.api.cloud.yandex.net:443',
    },
    {
        id: 'datatransfer',
        address: 'datatransfer.api.cloud.yandex.net:443',
    },
    {
        id: 'dns',
        address: 'dns.api.cloud.yandex.net:443',
    },
    {
        id: 'endpoint',
        address: 'api.cloud.yandex.net:443',
    },
    {
        id: 'iam',
        address: 'iam.api.cloud.yandex.net:443',
    },
    {
        id: 'iot-data',
        address: 'iot-data.api.cloud.yandex.net:443',
    },
    {
        id: 'iot-devices',
        address: 'iot-devices.api.cloud.yandex.net:443',
    },
    {
        id: 'k8s',
        address: 'mks.api.cloud.yandex.net:443',
    },
    {
        id: 'kms',
        address: 'kms.api.cloud.yandex.net:443',
    },
    {
        id: 'kms-crypto',
        address: 'kms.yandex:443',
    },
    {
        id: 'load-balancer',
        address: 'load-balancer.api.cloud.yandex.net:443',
    },
    {
        id: 'loadtesting',
        address: 'loadtesting.api.cloud.yandex.net:443',
    },
    {
        id: 'locator',
        address: 'locator.api.cloud.yandex.net:443',
    },
    {
        id: 'lockbox',
        address: 'lockbox.api.cloud.yandex.net:443',
    },
    {
        id: 'lockbox-payload',
        address: 'payload.lockbox.api.cloud.yandex.net:443',
    },
    {
        id: 'log-ingestion',
        address: 'ingester.logging.yandexcloud.net:443',
    },
    {
        id: 'log-reading',
        address: 'reader.logging.yandexcloud.net:443',
    },
    {
        id: 'logging',
        address: 'logging.api.cloud.yandex.net:443',
    },
    {
        id: 'logs',
        address: 'logs.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-clickhouse',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-elasticsearch',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-greenplum',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-kafka',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-kubernetes',
        address: 'mks.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-mongodb',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-mysql',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-postgresql',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-redis',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'managed-sqlserver',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'marketplace',
        address: 'marketplace.api.cloud.yandex.net:443',
    },
    {
        id: 'mdb-clickhouse',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'mdb-mongodb',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'mdb-mysql',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'mdb-postgresql',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'mdb-redis',
        address: 'mdb.api.cloud.yandex.net:443',
    },
    {
        id: 'mdbproxy',
        address: 'mdbproxy.api.cloud.yandex.net:443',
    },
    {
        id: 'operation',
        address: 'operation.api.cloud.yandex.net:443',
    },
    {
        id: 'organization-manager',
        address: 'organization-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'organizationmanager',
        address: 'organization-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'resource-manager',
        address: 'resource-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'resourcemanager',
        address: 'resource-manager.api.cloud.yandex.net:443',
    },
    {
        id: 'serialssh',
        address: 'serialssh.cloud.yandex.net:9600',
    },
    {
        id: 'serverless-apigateway',
        address: 'serverless-apigateway.api.cloud.yandex.net:443',
    },
    {
        id: 'serverless-containers',
        address: 'serverless-containers.api.cloud.yandex.net:443',
    },
    {
        id: 'serverless-functions',
        address: 'serverless-functions.api.cloud.yandex.net:443',
    },
    {
        id: 'serverless-triggers',
        address: 'serverless-triggers.api.cloud.yandex.net:443',
    },
    {
        id: 'storage',
        address: 'storage.yandexcloud.net:443',
    },
    {
        id: 'vpc',
        address: 'vpc.api.cloud.yandex.net:443',
    },
    {
        id: 'ydb',
        address: 'ydb.api.cloud.yandex.net:443',
    },
];

function zipEndpoints(endpoints: Endpoint[]) {
    const result: EndpointDict = {};
    for (const endpoint of endpoints) {
        result[endpoint.id] = endpoint.address;
    }
    return result;
}

export class EndpointResolver {
    private endpoints: EndpointDict;

    constructor() {
        this.endpoints = zipEndpoints(defaultEndpoints);
    }

    async updateEndpointList(cloudApiEndpoint: string) {
        const channel = createChannel(
            cloudApiEndpoint,
            credentials.createSsl(),
        );
        const client = createClient(ApiEndpointServiceService, channel);
        const result = await client.list(ListApiEndpointsRequest.fromJSON({}));
        for (const ep of result.endpoints) {
            this.endpoints[ep.id] = ep.address;
        }
    }

    resolve(endpointId: string) {
        if (!this.endpoints.hasOwnProperty(endpointId)) {
            throw new Error(`unknown endpoint '${endpointId}'`);
        }

        return this.endpoints[endpointId];
    }
}
