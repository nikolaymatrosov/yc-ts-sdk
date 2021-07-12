import * as operations from '../generated/yandex/cloud/operation/operation';
import { Session } from './index';
export declare function completion(op: operations.Operation, session: Session): Promise<unknown>;
export declare function getMetadata(op: operations.Operation): any;
export declare function getResponse(op: operations.Operation): any;
