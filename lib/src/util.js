/* eslint-disable  @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands */
import registar from './registar';
import jsutil from 'util';
export function pimpServiceInstance(instance) {
    for (const methodName of Object.keys(instance.$method_definitions)) {
        instance[methodName] = jsutil.promisify(instance[methodName]);
    }
    return instance;
}
export function extractAny(data) {
    const fqn = data.type_url.substring(data.type_url.lastIndexOf('/') + 1);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const pkg = registar.lookup(fqn.substring(0, fqn.lastIndexOf('.')));
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
