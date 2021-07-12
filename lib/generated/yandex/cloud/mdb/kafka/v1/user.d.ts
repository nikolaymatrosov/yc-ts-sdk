import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/**
 * A Kafka user.
 * For more information, see the [Operations -> Accounts](/docs/managed-kafka/operations/cluster-accounts) section of the documentation.
 */
export interface User {
    /** Name of the Kafka user. */
    name: string;
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Set of permissions granted to this user. */
    permissions: Permission[];
}
export interface UserSpec {
    /** Name of the Kafka user. */
    name: string;
    /** Password of the Kafka user. */
    password: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
}
export interface Permission {
    /**
     * Name or prefix-pattern with wildcard for the topic that the permission grants access to.
     *
     * To get the topic name, make a [TopicService.List] request.
     */
    topicName: string;
    /** Access role type to grant to the user. */
    role: Permission_AccessRole;
}
export declare enum Permission_AccessRole {
    ACCESS_ROLE_UNSPECIFIED = 0,
    /** ACCESS_ROLE_PRODUCER - producer role for the user. */
    ACCESS_ROLE_PRODUCER = 1,
    /** ACCESS_ROLE_CONSUMER - consumer role for the user. */
    ACCESS_ROLE_CONSUMER = 2,
    /** ACCESS_ROLE_ADMIN - admin role for the user. */
    ACCESS_ROLE_ADMIN = 3,
    UNRECOGNIZED = -1
}
export declare function permission_AccessRoleFromJSON(object: any): Permission_AccessRole;
export declare function permission_AccessRoleToJSON(object: Permission_AccessRole): string;
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const UserSpec: {
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial(object: DeepPartial<UserSpec>): UserSpec;
};
export declare const Permission: {
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
