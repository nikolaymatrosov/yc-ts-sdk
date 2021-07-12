import * as operations from '../generated/yandex/cloud/operation/operation';
import * as util from './util';
import * as events from 'events';
import * as jsutil from 'util';
import { OperationService } from '../api/operation';
jsutil.inherits(operations.Operation, events.EventEmitter);
function timeSpent(op) {
    var _a, _b;
    return new Date().getTime() - ((_b = (_a = op.createdAt) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : 0);
}
export function completion(op, session) {
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
                }
                catch (e) {
                    reject(e);
                }
            }, session.__config.pollInterval);
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
