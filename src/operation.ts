import * as operations from '../generated/yandex/cloud/operation/operation';

import * as util from './util';
import * as events from 'events';
import * as jsutil from 'util';
import { Session } from './index';
import { OperationService } from 'api/operation';

jsutil.inherits(operations.Operation, events.EventEmitter);

export function timeSpent(op: operations.Operation): number {
    return new Date().getTime() - (op.createdAt?.getTime() ?? 0);
}

export function completion(op: operations.Operation, session: Session): Promise<operations.Operation> {
    const operationService = OperationService(session);
    const currentState = op;
    return new Promise(async (resolve, reject) => {
        const checkOperation = async () => {
            const op = await operationService.get({
                operationId: currentState.id,
            });
            if (op.error) {
                return reject(op);
            }
            if (op.done) {
                return resolve(op);
            }
            setTimeout(async () => {
                try {
                    await checkOperation();
                } catch (e) {
                    reject(e);
                }
            }, session.__config.pollInterval);
        };
        await checkOperation();
    });
}

export function getMetadata(op: operations.Operation) {
    return util.extractAny(op.metadata);
}

export function getResponse(op: operations.Operation) {
    return util.extractAny(op.response);
}
