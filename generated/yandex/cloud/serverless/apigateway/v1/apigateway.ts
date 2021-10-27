/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.serverless.apigateway.v1';

export interface ApiGateway {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway';
    /** ID of the API gateway. Generated at creation time. */
    id: string;
    /** ID of the folder that the API gateway belongs to. */
    folderId: string;
    /** Creation timestamp for the API-gateway. */
    createdAt: Date | undefined;
    /** Name of the API gateway. The name is unique within the folder. */
    name: string;
    /** Description of the API gateway. */
    description: string;
    /** API gateway labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Status of the API gateway. */
    status: ApiGateway_Status;
    /** Default domain for the API gateway. Generated at creation time. */
    domain: string;
    /** ID of the log group for the API gateway. */
    logGroupId: string;
    /** List of domains attached to API gateway. */
    attachedDomains: AttachedDomain[];
}

export enum ApiGateway_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - API gateway is being created. */
    CREATING = 1,
    /** ACTIVE - API gateway is ready for use. */
    ACTIVE = 2,
    /** DELETING - API gateway is being deleted. */
    DELETING = 3,
    /** ERROR - API gateway failed. The only allowed action is delete. */
    ERROR = 4,
    /** UPDATING - API gateway is being updated. */
    UPDATING = 5,
    UNRECOGNIZED = -1,
}

export function apiGateway_StatusFromJSON(object: any): ApiGateway_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return ApiGateway_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return ApiGateway_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return ApiGateway_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return ApiGateway_Status.DELETING;
        case 4:
        case 'ERROR':
            return ApiGateway_Status.ERROR;
        case 5:
        case 'UPDATING':
            return ApiGateway_Status.UPDATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ApiGateway_Status.UNRECOGNIZED;
    }
}

export function apiGateway_StatusToJSON(object: ApiGateway_Status): string {
    switch (object) {
        case ApiGateway_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case ApiGateway_Status.CREATING:
            return 'CREATING';
        case ApiGateway_Status.ACTIVE:
            return 'ACTIVE';
        case ApiGateway_Status.DELETING:
            return 'DELETING';
        case ApiGateway_Status.ERROR:
            return 'ERROR';
        case ApiGateway_Status.UPDATING:
            return 'UPDATING';
        default:
            return 'UNKNOWN';
    }
}

export interface ApiGateway_LabelsEntry {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry';
    key: string;
    value: string;
}

export interface AttachedDomain {
    $type: 'yandex.cloud.serverless.apigateway.v1.AttachedDomain';
    /** ID of the domain. */
    domainId: string;
    /** ID of the domain certificate. */
    certificateId: string;
    /** Enabling flag. */
    enabled: boolean;
    /** Name of the domain. */
    domain: string;
}

const baseApiGateway: object = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway',
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    domain: '',
    logGroupId: '',
};

export const ApiGateway = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway' as const,

    encode(
        message: ApiGateway,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            ApiGateway_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(58).fork()
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.domain !== '') {
            writer.uint32(74).string(message.domain);
        }
        if (message.logGroupId !== '') {
            writer.uint32(82).string(message.logGroupId);
        }
        for (const v of message.attachedDomains) {
            AttachedDomain.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ApiGateway {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiGateway } as ApiGateway;
        message.labels = {};
        message.attachedDomains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = ApiGateway_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.domain = reader.string();
                    break;
                case 10:
                    message.logGroupId = reader.string();
                    break;
                case 11:
                    message.attachedDomains.push(
                        AttachedDomain.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ApiGateway {
        const message = { ...baseApiGateway } as ApiGateway;
        message.labels = {};
        message.attachedDomains = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = apiGateway_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = String(object.domain);
        } else {
            message.domain = '';
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (
            object.attachedDomains !== undefined &&
            object.attachedDomains !== null
        ) {
            for (const e of object.attachedDomains) {
                message.attachedDomains.push(AttachedDomain.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ApiGateway): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = apiGateway_StatusToJSON(message.status));
        message.domain !== undefined && (obj.domain = message.domain);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        if (message.attachedDomains) {
            obj.attachedDomains = message.attachedDomains.map((e) =>
                e ? AttachedDomain.toJSON(e) : undefined
            );
        } else {
            obj.attachedDomains = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ApiGateway>): ApiGateway {
        const message = { ...baseApiGateway } as ApiGateway;
        message.labels = {};
        message.attachedDomains = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = object.domain;
        } else {
            message.domain = '';
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (
            object.attachedDomains !== undefined &&
            object.attachedDomains !== null
        ) {
            for (const e of object.attachedDomains) {
                message.attachedDomains.push(AttachedDomain.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(ApiGateway.$type, ApiGateway);

const baseApiGateway_LabelsEntry: object = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry',
    key: '',
    value: '',
};

export const ApiGateway_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry' as const,

    encode(
        message: ApiGateway_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ApiGateway_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseApiGateway_LabelsEntry,
        } as ApiGateway_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ApiGateway_LabelsEntry {
        const message = {
            ...baseApiGateway_LabelsEntry,
        } as ApiGateway_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: ApiGateway_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ApiGateway_LabelsEntry>
    ): ApiGateway_LabelsEntry {
        const message = {
            ...baseApiGateway_LabelsEntry,
        } as ApiGateway_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(ApiGateway_LabelsEntry.$type, ApiGateway_LabelsEntry);

const baseAttachedDomain: object = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AttachedDomain',
    domainId: '',
    certificateId: '',
    enabled: false,
    domain: '',
};

export const AttachedDomain = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AttachedDomain' as const,

    encode(
        message: AttachedDomain,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.domainId !== '') {
            writer.uint32(10).string(message.domainId);
        }
        if (message.certificateId !== '') {
            writer.uint32(18).string(message.certificateId);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.domain !== '') {
            writer.uint32(42).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDomain {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedDomain } as AttachedDomain;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domainId = reader.string();
                    break;
                case 2:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachedDomain {
        const message = { ...baseAttachedDomain } as AttachedDomain;
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        } else {
            message.domainId = '';
        }
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = String(object.domain);
        } else {
            message.domain = '';
        }
        return message;
    },

    toJSON(message: AttachedDomain): unknown {
        const obj: any = {};
        message.domainId !== undefined && (obj.domainId = message.domainId);
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial(object: DeepPartial<AttachedDomain>): AttachedDomain {
        const message = { ...baseAttachedDomain } as AttachedDomain;
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        } else {
            message.domainId = '';
        }
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = object.domain;
        } else {
            message.domain = '';
        }
        return message;
    },
};

messageTypeRegistry.set(AttachedDomain.$type, AttachedDomain);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
