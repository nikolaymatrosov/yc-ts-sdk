"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = exports.getMetadata = exports.completion = exports.timeSpent = void 0;
const operation_1 = require("../api/operation");
const util = __importStar(require("./util"));
const operation_service_1 = require("../generated/yandex/cloud/operation/operation_service");
function timeSpent(op) {
    var _a, _b;
    return new Date().getTime() - ((_b = (_a = op.createdAt) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : 0);
}
exports.timeSpent = timeSpent;
function completion(op, session) {
    const operationService = (0, operation_1.OperationService)(session);
    const currentState = op;
    return new Promise((resolve, reject) => {
        const checkOperation = async () => {
            const operation = await operationService.get(operation_service_1.GetOperationRequest.fromPartial({
                operationId: currentState.id,
            }));
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
exports.completion = completion;
function getMetadata(op) {
    return util.extractAny(op.metadata);
}
exports.getMetadata = getMetadata;
function getResponse(op) {
    return util.extractAny(op.response);
}
exports.getResponse = getResponse;
