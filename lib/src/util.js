"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAny = exports.pimpServiceInstance = void 0;
const typeRegistry_1 = require("generated/typeRegistry");
const util_1 = __importDefault(require("util"));
function pimpServiceInstance(instance) {
    for (const methodName of Object.keys(instance.$method_definitions)) {
        instance[methodName] = util_1.default.promisify(instance[methodName]);
    }
    return instance;
}
exports.pimpServiceInstance = pimpServiceInstance;
function extractAny(data) {
    if (data === undefined) {
        return;
    }
    const fqn = data.typeUrl.substring(data.typeUrl.lastIndexOf('/') + 1);
    const cls = typeRegistry_1.messageTypeRegistry.get(fqn);
    if (!cls) {
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    return cls.decode(data.value);
}
exports.extractAny = extractAny;
