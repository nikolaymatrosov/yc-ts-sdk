import { OperationService } from '../api/operation';
import * as operations from '../generated/yandex/cloud/operation/operation';
import { Session } from './index';
import * as util from './util';

export function timeSpent(op: operations.Operation): number {
    return new Date().getTime() - (op.createdAt?.getTime() ?? 0);
}

export function completion(
    op: operations.Operation,
    session: Session
): Promise<operations.Operation> {
    const operationService = OperationService(session);
    const currentState = op;
    return new Promise(async (resolve, reject) => {
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
            setTimeout(async () => {
                try {
                    await checkOperation();
                } catch (e) {
                    reject(e);
                }
            }, session.pollInterval);
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
