/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';

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

export enum Permission_AccessRole {
    ACCESS_ROLE_UNSPECIFIED = 0,
    /** ACCESS_ROLE_PRODUCER - producer role for the user. */
    ACCESS_ROLE_PRODUCER = 1,
    /** ACCESS_ROLE_CONSUMER - consumer role for the user. */
    ACCESS_ROLE_CONSUMER = 2,
    /** ACCESS_ROLE_ADMIN - admin role for the user. */
    ACCESS_ROLE_ADMIN = 3,
    UNRECOGNIZED = -1,
}

export function permission_AccessRoleFromJSON(
    object: any
): Permission_AccessRole {
    switch (object) {
        case 0:
        case 'ACCESS_ROLE_UNSPECIFIED':
            return Permission_AccessRole.ACCESS_ROLE_UNSPECIFIED;
        case 1:
        case 'ACCESS_ROLE_PRODUCER':
            return Permission_AccessRole.ACCESS_ROLE_PRODUCER;
        case 2:
        case 'ACCESS_ROLE_CONSUMER':
            return Permission_AccessRole.ACCESS_ROLE_CONSUMER;
        case 3:
        case 'ACCESS_ROLE_ADMIN':
            return Permission_AccessRole.ACCESS_ROLE_ADMIN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permission_AccessRole.UNRECOGNIZED;
    }
}

export function permission_AccessRoleToJSON(
    object: Permission_AccessRole
): string {
    switch (object) {
        case Permission_AccessRole.ACCESS_ROLE_UNSPECIFIED:
            return 'ACCESS_ROLE_UNSPECIFIED';
        case Permission_AccessRole.ACCESS_ROLE_PRODUCER:
            return 'ACCESS_ROLE_PRODUCER';
        case Permission_AccessRole.ACCESS_ROLE_CONSUMER:
            return 'ACCESS_ROLE_CONSUMER';
        case Permission_AccessRole.ACCESS_ROLE_ADMIN:
            return 'ACCESS_ROLE_ADMIN';
        default:
            return 'UNKNOWN';
    }
}

const baseUser: object = { name: '', clusterId: '' };

export const User = {
    encode(
        message: User,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(
                        Permission.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): User {
        const message = { ...baseUser } as User;
        message.permissions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined
            );
        } else {
            obj.permissions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<User>): User {
        const message = { ...baseUser } as User;
        message.permissions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUserSpec: object = { name: '', password: '' };

export const UserSpec = {
    encode(
        message: UserSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(
                        Permission.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UserSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined
            );
        } else {
            obj.permissions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<UserSpec>): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        return message;
    },
};

const basePermission: object = { topicName: '', role: 0 };

export const Permission = {
    encode(
        message: Permission,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.topicName !== '') {
            writer.uint32(10).string(message.topicName);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission } as Permission;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topicName = reader.string();
                    break;
                case 2:
                    message.role = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Permission {
        const message = { ...basePermission } as Permission;
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        } else {
            message.topicName = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = permission_AccessRoleFromJSON(object.role);
        } else {
            message.role = 0;
        }
        return message;
    },

    toJSON(message: Permission): unknown {
        const obj: any = {};
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.role !== undefined &&
            (obj.role = permission_AccessRoleToJSON(message.role));
        return obj;
    },

    fromPartial(object: DeepPartial<Permission>): Permission {
        const message = { ...basePermission } as Permission;
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        } else {
            message.topicName = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        } else {
            message.role = 0;
        }
        return message;
    },
};

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
