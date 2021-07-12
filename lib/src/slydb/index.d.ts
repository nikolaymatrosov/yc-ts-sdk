import { Driver, IAuthService } from 'ydb-sdk';
export declare function createDriver(database?: string, endpoint?: string, authService?: IAuthService): Driver;
