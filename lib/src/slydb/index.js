import { Driver, getCredentialsFromEnv, getLogger } from 'ydb-sdk';
export function createDriver(database, endpoint, authService) {
    if (!database) {
        database = process.env['YDB_DATABASE'];
    }
    if (!database) {
        throw new Error('Database not set');
    }
    if (!endpoint) {
        endpoint = 'grpcs://ydb.serverless.yandexcloud.net:2135';
    }
    if (!authService) {
        authService = getCredentialsFromEnv(endpoint, database, getLogger({ level: 'debug' }));
    }
    return new Driver(endpoint, database, authService);
}
