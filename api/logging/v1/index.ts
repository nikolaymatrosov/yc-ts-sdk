import { LogGroupServiceService } from 'cloud/logging/v1/log_group_service';
import { LogIngestionServiceService } from 'cloud/logging/v1/log_ingestion_service';
import { LogReadingServiceService } from 'cloud/logging/v1/log_reading_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const LogGroupServiceDef: SdkServiceDefinition<
    typeof LogGroupServiceService
> = {
    ...LogGroupServiceService,
    __endpointId: 'logging',
};

export function LogGroupService(
    session?: Session
): Client<typeof LogGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LogGroupServiceDef);
}

export const LogIngestionServiceDef: SdkServiceDefinition<
    typeof LogIngestionServiceService
> = {
    ...LogIngestionServiceService,
    __endpointId: 'log-ingestion',
};

export function LogIngestionService(
    session?: Session
): Client<typeof LogIngestionServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LogIngestionServiceDef);
}

export const LogReadingServiceDef: SdkServiceDefinition<
    typeof LogReadingServiceService
> = {
    ...LogReadingServiceService,
    __endpointId: 'log-reading',
};

export function LogReadingService(
    session?: Session
): Client<typeof LogReadingServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LogReadingServiceDef);
}
