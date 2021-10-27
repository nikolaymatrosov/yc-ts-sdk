/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.certificatemanager.v1';

/** Supported certificate types. */
export enum CertificateType {
    CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** IMPORTED - The certificate is imported by user. */
    IMPORTED = 1,
    /** MANAGED - The certificate is created by service. */
    MANAGED = 2,
    UNRECOGNIZED = -1,
}

export function certificateTypeFromJSON(object: any): CertificateType {
    switch (object) {
        case 0:
        case 'CERTIFICATE_TYPE_UNSPECIFIED':
            return CertificateType.CERTIFICATE_TYPE_UNSPECIFIED;
        case 1:
        case 'IMPORTED':
            return CertificateType.IMPORTED;
        case 2:
        case 'MANAGED':
            return CertificateType.MANAGED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CertificateType.UNRECOGNIZED;
    }
}

export function certificateTypeToJSON(object: CertificateType): string {
    switch (object) {
        case CertificateType.CERTIFICATE_TYPE_UNSPECIFIED:
            return 'CERTIFICATE_TYPE_UNSPECIFIED';
        case CertificateType.IMPORTED:
            return 'IMPORTED';
        case CertificateType.MANAGED:
            return 'MANAGED';
        default:
            return 'UNKNOWN';
    }
}

/** Supported domain validation types. */
export enum ChallengeType {
    CHALLENGE_TYPE_UNSPECIFIED = 0,
    /** DNS - Domain validation type that using DNS-records. */
    DNS = 1,
    /** HTTP - Domain validation type that using HTTP-files. */
    HTTP = 2,
    UNRECOGNIZED = -1,
}

export function challengeTypeFromJSON(object: any): ChallengeType {
    switch (object) {
        case 0:
        case 'CHALLENGE_TYPE_UNSPECIFIED':
            return ChallengeType.CHALLENGE_TYPE_UNSPECIFIED;
        case 1:
        case 'DNS':
            return ChallengeType.DNS;
        case 2:
        case 'HTTP':
            return ChallengeType.HTTP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ChallengeType.UNRECOGNIZED;
    }
}

export function challengeTypeToJSON(object: ChallengeType): string {
    switch (object) {
        case ChallengeType.CHALLENGE_TYPE_UNSPECIFIED:
            return 'CHALLENGE_TYPE_UNSPECIFIED';
        case ChallengeType.DNS:
            return 'DNS';
        case ChallengeType.HTTP:
            return 'HTTP';
        default:
            return 'UNKNOWN';
    }
}

/** A certificate. For details about the concept, see [documentation](docs/certificate-manager/concepts/). */
export interface Certificate {
    $type: 'yandex.cloud.certificatemanager.v1.Certificate';
    /** ID of the certificate. Generated at creation time. */
    id: string;
    /** ID of the folder that the certificate belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the certificate.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Certificate labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Type of the certificate. */
    type: CertificateType;
    /** Fully qualified domain names of the certificate. */
    domains: string[];
    /** Status of the certificate. */
    status: Certificate_Status;
    /** [Distinguished Name](https://tools.ietf.org/html/rfc1779) of the certificate authority that issued the certificate. */
    issuer: string;
    /** [Distinguished Name](https://tools.ietf.org/html/rfc1779) of the entity that is associated with the public key contained in the certificate. */
    subject: string;
    /** Serial number of the certificate. */
    serial: string;
    /** Time when the certificate is updated. */
    updatedAt: Date | undefined;
    /** Time when the certificate is issued. */
    issuedAt: Date | undefined;
    /** Time after which the certificate is not valid. */
    notAfter: Date | undefined;
    /** Time before which the certificate is not valid. */
    notBefore: Date | undefined;
    /** Domains validation challenges of the certificate. Used only for managed certificates. */
    challenges: Challenge[];
}

export enum Certificate_Status {
    STATUS_UNSPECIFIED = 0,
    /** VALIDATING - The certificate domains validation are required. Used only for managed certificates. */
    VALIDATING = 1,
    /** INVALID - The certificate issuance is failed. Used only for managed certificates. */
    INVALID = 2,
    /** ISSUED - The certificate is issued. */
    ISSUED = 3,
    /** REVOKED - The certificate is revoked. */
    REVOKED = 4,
    /** RENEWING - The certificate renewal is started. Used only for managed certificates. */
    RENEWING = 5,
    /** RENEWAL_FAILED - The certificate renewal is failed. Used only for managed certificates. */
    RENEWAL_FAILED = 6,
    UNRECOGNIZED = -1,
}

export function certificate_StatusFromJSON(object: any): Certificate_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Certificate_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'VALIDATING':
            return Certificate_Status.VALIDATING;
        case 2:
        case 'INVALID':
            return Certificate_Status.INVALID;
        case 3:
        case 'ISSUED':
            return Certificate_Status.ISSUED;
        case 4:
        case 'REVOKED':
            return Certificate_Status.REVOKED;
        case 5:
        case 'RENEWING':
            return Certificate_Status.RENEWING;
        case 6:
        case 'RENEWAL_FAILED':
            return Certificate_Status.RENEWAL_FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Certificate_Status.UNRECOGNIZED;
    }
}

export function certificate_StatusToJSON(object: Certificate_Status): string {
    switch (object) {
        case Certificate_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Certificate_Status.VALIDATING:
            return 'VALIDATING';
        case Certificate_Status.INVALID:
            return 'INVALID';
        case Certificate_Status.ISSUED:
            return 'ISSUED';
        case Certificate_Status.REVOKED:
            return 'REVOKED';
        case Certificate_Status.RENEWING:
            return 'RENEWING';
        case Certificate_Status.RENEWAL_FAILED:
            return 'RENEWAL_FAILED';
        default:
            return 'UNKNOWN';
    }
}

export interface Certificate_LabelsEntry {
    $type: 'yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry';
    key: string;
    value: string;
}

/** Domain validation challenge. */
export interface Challenge {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge';
    /** Domain of the challenge. */
    domain: string;
    /** Type of the challenge. */
    type: ChallengeType;
    /** Time when the challenge is created. */
    createdAt: Date | undefined;
    /** Time when the challenge is updated. */
    updatedAt: Date | undefined;
    /** Status of the challenge. */
    status: Challenge_Status;
    /** Description of the challenge. */
    message: string;
    /** Error of the challenge. */
    error: string;
    /** DNS-record. */
    dnsChallenge: Challenge_DnsRecord | undefined;
    /** HTTP-file. */
    httpChallenge: Challenge_HttpFile | undefined;
}

export enum Challenge_Status {
    STATUS_UNSPECIFIED = 0,
    /** PENDING - The challenge is waiting to be completed. */
    PENDING = 1,
    /** PROCESSING - The challenge is awaiting approval from Let's Encrypt. */
    PROCESSING = 2,
    /** VALID - The challenge is complete. */
    VALID = 3,
    /** INVALID - The rights check for a specific domain failed or the one-week period allocated for the check expired. */
    INVALID = 4,
    UNRECOGNIZED = -1,
}

export function challenge_StatusFromJSON(object: any): Challenge_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Challenge_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PENDING':
            return Challenge_Status.PENDING;
        case 2:
        case 'PROCESSING':
            return Challenge_Status.PROCESSING;
        case 3:
        case 'VALID':
            return Challenge_Status.VALID;
        case 4:
        case 'INVALID':
            return Challenge_Status.INVALID;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Challenge_Status.UNRECOGNIZED;
    }
}

export function challenge_StatusToJSON(object: Challenge_Status): string {
    switch (object) {
        case Challenge_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Challenge_Status.PENDING:
            return 'PENDING';
        case Challenge_Status.PROCESSING:
            return 'PROCESSING';
        case Challenge_Status.VALID:
            return 'VALID';
        case Challenge_Status.INVALID:
            return 'INVALID';
        default:
            return 'UNKNOWN';
    }
}

export interface Challenge_DnsRecord {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge.DnsRecord';
    /** Name of the DNS record. */
    name: string;
    /** Type of the DNS-record. */
    type: string;
    /** Value of the DNS-record. */
    value: string;
}

export interface Challenge_HttpFile {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge.HttpFile';
    /** Location of the HTTP file. */
    url: string;
    /** Content of the HTTP file. */
    content: string;
}

const baseCertificate: object = {
    $type: 'yandex.cloud.certificatemanager.v1.Certificate',
    id: '',
    folderId: '',
    name: '',
    description: '',
    type: 0,
    domains: '',
    status: 0,
    issuer: '',
    subject: '',
    serial: '',
};

export const Certificate = {
    $type: 'yandex.cloud.certificatemanager.v1.Certificate' as const,

    encode(
        message: Certificate,
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
            Certificate_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        for (const v of message.domains) {
            writer.uint32(66).string(v!);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.issuer !== '') {
            writer.uint32(82).string(message.issuer);
        }
        if (message.subject !== '') {
            writer.uint32(90).string(message.subject);
        }
        if (message.serial !== '') {
            writer.uint32(98).string(message.serial);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.updatedAt),
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.issuedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.issuedAt),
                writer.uint32(114).fork()
            ).ldelim();
        }
        if (message.notAfter !== undefined) {
            Timestamp.encode(
                toTimestamp(message.notAfter),
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.notBefore !== undefined) {
            Timestamp.encode(
                toTimestamp(message.notBefore),
                writer.uint32(130).fork()
            ).ldelim();
        }
        for (const v of message.challenges) {
            Challenge.encode(v!, writer.uint32(138).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCertificate } as Certificate;
        message.labels = {};
        message.domains = [];
        message.challenges = [];
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
                case 6:
                    const entry6 = Certificate_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.type = reader.int32() as any;
                    break;
                case 8:
                    message.domains.push(reader.string());
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.issuer = reader.string();
                    break;
                case 11:
                    message.subject = reader.string();
                    break;
                case 12:
                    message.serial = reader.string();
                    break;
                case 13:
                    message.updatedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 14:
                    message.issuedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 15:
                    message.notAfter = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 16:
                    message.notBefore = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 17:
                    message.challenges.push(
                        Challenge.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Certificate {
        const message = { ...baseCertificate } as Certificate;
        message.labels = {};
        message.domains = [];
        message.challenges = [];
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
        if (object.type !== undefined && object.type !== null) {
            message.type = certificateTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.domains !== undefined && object.domains !== null) {
            for (const e of object.domains) {
                message.domains.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = certificate_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        } else {
            message.issuer = '';
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = String(object.subject);
        } else {
            message.subject = '';
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = String(object.serial);
        } else {
            message.serial = '';
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = fromJsonTimestamp(object.updatedAt);
        } else {
            message.updatedAt = undefined;
        }
        if (object.issuedAt !== undefined && object.issuedAt !== null) {
            message.issuedAt = fromJsonTimestamp(object.issuedAt);
        } else {
            message.issuedAt = undefined;
        }
        if (object.notAfter !== undefined && object.notAfter !== null) {
            message.notAfter = fromJsonTimestamp(object.notAfter);
        } else {
            message.notAfter = undefined;
        }
        if (object.notBefore !== undefined && object.notBefore !== null) {
            message.notBefore = fromJsonTimestamp(object.notBefore);
        } else {
            message.notBefore = undefined;
        }
        if (object.challenges !== undefined && object.challenges !== null) {
            for (const e of object.challenges) {
                message.challenges.push(Challenge.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: Certificate): unknown {
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
        message.type !== undefined &&
            (obj.type = certificateTypeToJSON(message.type));
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        } else {
            obj.domains = [];
        }
        message.status !== undefined &&
            (obj.status = certificate_StatusToJSON(message.status));
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.subject !== undefined && (obj.subject = message.subject);
        message.serial !== undefined && (obj.serial = message.serial);
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.issuedAt !== undefined &&
            (obj.issuedAt = message.issuedAt.toISOString());
        message.notAfter !== undefined &&
            (obj.notAfter = message.notAfter.toISOString());
        message.notBefore !== undefined &&
            (obj.notBefore = message.notBefore.toISOString());
        if (message.challenges) {
            obj.challenges = message.challenges.map((e) =>
                e ? Challenge.toJSON(e) : undefined
            );
        } else {
            obj.challenges = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Certificate>): Certificate {
        const message = { ...baseCertificate } as Certificate;
        message.labels = {};
        message.domains = [];
        message.challenges = [];
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
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.domains !== undefined && object.domains !== null) {
            for (const e of object.domains) {
                message.domains.push(e);
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        } else {
            message.issuer = '';
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        } else {
            message.subject = '';
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        } else {
            message.serial = '';
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = object.updatedAt;
        } else {
            message.updatedAt = undefined;
        }
        if (object.issuedAt !== undefined && object.issuedAt !== null) {
            message.issuedAt = object.issuedAt;
        } else {
            message.issuedAt = undefined;
        }
        if (object.notAfter !== undefined && object.notAfter !== null) {
            message.notAfter = object.notAfter;
        } else {
            message.notAfter = undefined;
        }
        if (object.notBefore !== undefined && object.notBefore !== null) {
            message.notBefore = object.notBefore;
        } else {
            message.notBefore = undefined;
        }
        if (object.challenges !== undefined && object.challenges !== null) {
            for (const e of object.challenges) {
                message.challenges.push(Challenge.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(Certificate.$type, Certificate);

const baseCertificate_LabelsEntry: object = {
    $type: 'yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry',
    key: '',
    value: '',
};

export const Certificate_LabelsEntry = {
    $type: 'yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry' as const,

    encode(
        message: Certificate_LabelsEntry,
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
    ): Certificate_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCertificate_LabelsEntry,
        } as Certificate_LabelsEntry;
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

    fromJSON(object: any): Certificate_LabelsEntry {
        const message = {
            ...baseCertificate_LabelsEntry,
        } as Certificate_LabelsEntry;
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

    toJSON(message: Certificate_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Certificate_LabelsEntry>
    ): Certificate_LabelsEntry {
        const message = {
            ...baseCertificate_LabelsEntry,
        } as Certificate_LabelsEntry;
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

messageTypeRegistry.set(Certificate_LabelsEntry.$type, Certificate_LabelsEntry);

const baseChallenge: object = {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge',
    domain: '',
    type: 0,
    status: 0,
    message: '',
    error: '',
};

export const Challenge = {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge' as const,

    encode(
        message: Challenge,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.domain !== '') {
            writer.uint32(10).string(message.domain);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.updatedAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.message !== '') {
            writer.uint32(50).string(message.message);
        }
        if (message.error !== '') {
            writer.uint32(58).string(message.error);
        }
        if (message.dnsChallenge !== undefined) {
            Challenge_DnsRecord.encode(
                message.dnsChallenge,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.httpChallenge !== undefined) {
            Challenge_HttpFile.encode(
                message.httpChallenge,
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Challenge {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChallenge } as Challenge;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domain = reader.string();
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.updatedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.message = reader.string();
                    break;
                case 7:
                    message.error = reader.string();
                    break;
                case 8:
                    message.dnsChallenge = Challenge_DnsRecord.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.httpChallenge = Challenge_HttpFile.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Challenge {
        const message = { ...baseChallenge } as Challenge;
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = String(object.domain);
        } else {
            message.domain = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = challengeTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = fromJsonTimestamp(object.updatedAt);
        } else {
            message.updatedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = challenge_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        } else {
            message.message = '';
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = String(object.error);
        } else {
            message.error = '';
        }
        if (object.dnsChallenge !== undefined && object.dnsChallenge !== null) {
            message.dnsChallenge = Challenge_DnsRecord.fromJSON(
                object.dnsChallenge
            );
        } else {
            message.dnsChallenge = undefined;
        }
        if (
            object.httpChallenge !== undefined &&
            object.httpChallenge !== null
        ) {
            message.httpChallenge = Challenge_HttpFile.fromJSON(
                object.httpChallenge
            );
        } else {
            message.httpChallenge = undefined;
        }
        return message;
    },

    toJSON(message: Challenge): unknown {
        const obj: any = {};
        message.domain !== undefined && (obj.domain = message.domain);
        message.type !== undefined &&
            (obj.type = challengeTypeToJSON(message.type));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.status !== undefined &&
            (obj.status = challenge_StatusToJSON(message.status));
        message.message !== undefined && (obj.message = message.message);
        message.error !== undefined && (obj.error = message.error);
        message.dnsChallenge !== undefined &&
            (obj.dnsChallenge = message.dnsChallenge
                ? Challenge_DnsRecord.toJSON(message.dnsChallenge)
                : undefined);
        message.httpChallenge !== undefined &&
            (obj.httpChallenge = message.httpChallenge
                ? Challenge_HttpFile.toJSON(message.httpChallenge)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Challenge>): Challenge {
        const message = { ...baseChallenge } as Challenge;
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = object.domain;
        } else {
            message.domain = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = object.updatedAt;
        } else {
            message.updatedAt = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        } else {
            message.message = '';
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        } else {
            message.error = '';
        }
        if (object.dnsChallenge !== undefined && object.dnsChallenge !== null) {
            message.dnsChallenge = Challenge_DnsRecord.fromPartial(
                object.dnsChallenge
            );
        } else {
            message.dnsChallenge = undefined;
        }
        if (
            object.httpChallenge !== undefined &&
            object.httpChallenge !== null
        ) {
            message.httpChallenge = Challenge_HttpFile.fromPartial(
                object.httpChallenge
            );
        } else {
            message.httpChallenge = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Challenge.$type, Challenge);

const baseChallenge_DnsRecord: object = {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge.DnsRecord',
    name: '',
    type: '',
    value: '',
};

export const Challenge_DnsRecord = {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge.DnsRecord' as const,

    encode(
        message: Challenge_DnsRecord,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.value !== '') {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Challenge_DnsRecord {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChallenge_DnsRecord } as Challenge_DnsRecord;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Challenge_DnsRecord {
        const message = { ...baseChallenge_DnsRecord } as Challenge_DnsRecord;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Challenge_DnsRecord): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Challenge_DnsRecord>): Challenge_DnsRecord {
        const message = { ...baseChallenge_DnsRecord } as Challenge_DnsRecord;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(Challenge_DnsRecord.$type, Challenge_DnsRecord);

const baseChallenge_HttpFile: object = {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge.HttpFile',
    url: '',
    content: '',
};

export const Challenge_HttpFile = {
    $type: 'yandex.cloud.certificatemanager.v1.Challenge.HttpFile' as const,

    encode(
        message: Challenge_HttpFile,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.content !== '') {
            writer.uint32(18).string(message.content);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Challenge_HttpFile {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChallenge_HttpFile } as Challenge_HttpFile;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Challenge_HttpFile {
        const message = { ...baseChallenge_HttpFile } as Challenge_HttpFile;
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        } else {
            message.url = '';
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        } else {
            message.content = '';
        }
        return message;
    },

    toJSON(message: Challenge_HttpFile): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },

    fromPartial(object: DeepPartial<Challenge_HttpFile>): Challenge_HttpFile {
        const message = { ...baseChallenge_HttpFile } as Challenge_HttpFile;
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        } else {
            message.url = '';
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        } else {
            message.content = '';
        }
        return message;
    },
};

messageTypeRegistry.set(Challenge_HttpFile.$type, Challenge_HttpFile);

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
