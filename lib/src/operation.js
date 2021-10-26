import { OperationService } from '../api/operation';
import * as util from './util';
export function timeSpent(op) {
    var _a, _b;
    return new Date().getTime() - ((_b = (_a = op.createdAt) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : 0);
}
export function completion(op, session) {
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
                }
                catch (e) {
                    reject(e);
                }
            }, session.pollInterval);
        };
        await checkOperation();
    });
}
export function getMetadata(op) {
    return util.extractAny(op.metadata);
}
export function getResponse(op) {
    return util.extractAny(op.response);
}
