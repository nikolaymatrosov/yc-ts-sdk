import { LogGroupServiceService } from '../../../generated/yandex/cloud/logging/v1/log_group_service';
import { LogIngestionServiceService } from '../../../generated/yandex/cloud/logging/v1/log_ingestion_service';
import { LogReadingServiceService } from '../../../generated/yandex/cloud/logging/v1/log_reading_service';
import { Session } from '../../../src/index';
export const LogGroupServiceDef = {
    ...LogGroupServiceService,
    __endpointId: 'logging',
};
export function LogGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LogGroupServiceDef);
}
export const LogIngestionServiceDef = {
    ...LogIngestionServiceService,
    __endpointId: 'log-ingestion',
};
export function LogIngestionService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LogIngestionServiceDef);
}
export const LogReadingServiceDef = {
    ...LogReadingServiceService,
    __endpointId: 'log-reading',
};
export function LogReadingService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LogReadingServiceDef);
}
