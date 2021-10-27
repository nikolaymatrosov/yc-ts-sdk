import { Any } from '../../../google/protobuf/any';
import { Status } from '../../../google/rpc/status';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.operation";
/** An Operation resource. For more information, see [Operation](/docs/api-design-guide/concepts/operation). */
export interface Operation {
    $type: 'yandex.cloud.operation.Operation';
    /** ID of the operation. */
    id: string;
    /** Description of the operation. 0-256 characters long. */
    description: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** ID of the user or service account who initiated the operation. */
    createdBy: string;
    /** The time when the Operation resource was last modified. */
    modifiedAt: Date | undefined;
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done: boolean;
    /**
     * Service-specific metadata associated with the operation.
     * It typically contains the ID of the target resource that the operation is performed on.
     * Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata: Any | undefined;
    /** The error result of the operation in case of failure or cancellation. */
    error: Status | undefined;
    /**
     * The normal response of the operation in case of success.
     * If the original method returns no data on success, such as Delete,
     * the response is [google.protobuf.Empty].
     * If the original method is the standard Create/Update,
     * the response should be the target resource of the operation.
     * Any method that returns a long-running operation should document the response type, if any.
     */
    response: Any | undefined;
}
export declare const Operation: {
    $type: "yandex.cloud.operation.Operation";
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial(object: DeepPartial<Operation>): Operation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
