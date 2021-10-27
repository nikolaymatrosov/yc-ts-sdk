"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAny = exports.pimpServiceInstance = void 0;
/* eslint-disable  @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands */
const registar_1 = __importDefault(require("./registar"));
const util_1 = __importDefault(require("util"));
function pimpServiceInstance(instance) {
    for (const methodName of Object.keys(instance.$method_definitions)) {
        instance[methodName] = util_1.default.promisify(instance[methodName]);
    }
    return instance;
}
exports.pimpServiceInstance = pimpServiceInstance;
function extractAny(data) {
    const fqn = data.type_url.substring(data.type_url.lastIndexOf('/') + 1);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const pkg = registar_1.default.lookup(fqn.substring(0, fqn.lastIndexOf('.')));
    if (!pkg) {
        // eslint-disable-next-line
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    const messageName = fqn.substring(fqn.lastIndexOf('.') + 1);
    const cls = pkg[messageName];
    if (!cls) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return cls.decode(data.value);
}
exports.extractAny = extractAny;
