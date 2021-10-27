import { OperationService } from '../api/operation';
import { Session } from './index';
import * as util from './util';
import * as operations from 'cloud/operation/operation';
import { GetOperationRequest } from 'cloud/operation/operation_service';

export function timeSpent(op: operations.Operation): number {
    return new Date().getTime() - (op.createdAt?.getTime() ?? 0);
}

export function completion(
    op: operations.Operation,
    session: Session
): Promise<operations.Operation> {
    const operationService = OperationService(session);
    const currentState = op;
    return new Promise((resolve, reject) => {
        const checkOperation = async () => {
            const operation = await operationService.get(
                GetOperationRequest.fromPartial({
                    operationId: currentState.id,
                })
            );
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
