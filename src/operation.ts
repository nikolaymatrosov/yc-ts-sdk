import { OperationService } from '../api/operation';
import * as operations from '../generated/yandex/cloud/operation/operation';
import { Session } from './index';
import * as util from './util';

export function timeSpent(op: operations.Operation): number {
    return new Date().getTime() - (op.createdAt?.getTime() ?? 0);
}

export function completion(
    op: operations.Operation,
    session: Session,
): Promise<operations.Operation> {
    const operationService = OperationService(session);
    const currentState = op;
    return new Promise((resolve, reject) => {
        const checkOperation = async () => {
            const operation = await operationService.get({
                operationId: currentState.id,
            });
            if (operation.error) {
                return reject(operation);
            }
            if (operation.done) {
                return resolve(operation);
            }
            setTimeout(() => {
                checkOperation().catch((e) => {
                    reject(e);
                });
            }, session.pollInterval);
        };
        checkOperation().catch((e) => {
            reject(e);
        });
    });
}

export function getMetadata(op: operations.Operation): any {
    return util.extractAny(op.metadata);
}

export function getResponse(op: operations.Operation): any {
    return util.extractAny(op.response);
}
