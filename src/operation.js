import * as operations from '../api/yandex/cloud/operation/operation_pb';
import { OperationServiceClient } from '../api/yandex/cloud/operation/operation_service_grpc_pb';
import * as util from './util';
import * as events from 'events';
import * as jsutil from 'util';
jsutil.inherits(operations.Operation, events.EventEmitter);
operations.Operation.prototype.timeSpent = function () {
    const createdAt = new Date(this.createdAt.seconds.toNumber() * 1000);
    return new Date().getTime() - createdAt.getTime();
};
operations.Operation.prototype.eventNames = function () {
    return ['status', 'error', 'done'];
};
operations.Operation.prototype.completion = function (session) {
    const operationService = session.client(OperationServiceClient);
    const currentState = this;
    return new Promise(async (resolve, reject) => {
        const checkOperation = async () => {
            const op = await operationService.get({
                operationId: currentState.id,
            });
            currentState.emit('status', op);
            if (op.error) {
                currentState.emit('error', op);
                return reject(op);
            }
            if (op.done) {
                currentState.emit('done', op);
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
};
operations.Operation.prototype.getMetadata = function () {
    return util.extractAny(this.metadata);
};
operations.Operation.prototype.getResponse = function () {
    return util.extractAny(this.response);
};
//# sourceMappingURL=operation.js.map