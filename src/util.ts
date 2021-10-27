import { messageTypeRegistry } from '../generated/typeRegistry';
import { Any } from 'generated/google/protobuf/any';
import jsutil from 'util';

type IServiceInstance = {
    [key: string]: () => Promise<any> | any;
};

export function pimpServiceInstance(instance: IServiceInstance) {
    for (const methodName of Object.keys(instance.$method_definitions)) {
        instance[methodName] = jsutil.promisify(instance[methodName]);
    }
    return instance;
}

export function extractAny(data: Any | undefined) {
    if (data === undefined) {
        return;
    }
    const fqn = data.typeUrl.substring(data.typeUrl.lastIndexOf('/') + 1);
    const cls = messageTypeRegistry.get(fqn);
    if (!cls) {
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    return cls.decode(data.value);
}
