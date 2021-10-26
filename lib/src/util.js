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
    const pkg = registar.lookup(fqn.substring(0, fqn.lastIndexOf('.')));
    if (!pkg) {
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    const messageName = fqn.substring(fqn.lastIndexOf('.') + 1);
    const cls = pkg[messageName];
    if (!cls) {
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    return cls.decode(data.value);
}
