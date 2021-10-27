import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.certificatemanager.v1";
/** Supported certificate types. */
export declare enum CertificateType {
    CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** IMPORTED - The certificate is imported by user. */
    IMPORTED = 1,
    /** MANAGED - The certificate is created by service. */
    MANAGED = 2,
    UNRECOGNIZED = -1
}
export declare function certificateTypeFromJSON(object: any): CertificateType;
export declare function certificateTypeToJSON(object: CertificateType): string;
/** Supported domain validation types. */
export declare enum ChallengeType {
    CHALLENGE_TYPE_UNSPECIFIED = 0,
    /** DNS - Domain validation type that using DNS-records. */
    DNS = 1,
    /** HTTP - Domain validation type that using HTTP-files. */
    HTTP = 2,
    UNRECOGNIZED = -1
}
export declare function challengeTypeFromJSON(object: any): ChallengeType;
export declare function challengeTypeToJSON(object: ChallengeType): string;
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
    labels: {
        [key: string]: string;
    };
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
export declare enum Certificate_Status {
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
    UNRECOGNIZED = -1
}
export declare function certificate_StatusFromJSON(object: any): Certificate_Status;
export declare function certificate_StatusToJSON(object: Certificate_Status): string;
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
export declare enum Challenge_Status {
    STATUS_UNSPECIFIED = 0,
    /** PENDING - The challenge is waiting to be completed. */
    PENDING = 1,
    /** PROCESSING - The challenge is awaiting approval from Let's Encrypt. */
    PROCESSING = 2,
    /** VALID - The challenge is complete. */
    VALID = 3,
    /** INVALID - The rights check for a specific domain failed or the one-week period allocated for the check expired. */
    INVALID = 4,
    UNRECOGNIZED = -1
}
export declare function challenge_StatusFromJSON(object: any): Challenge_Status;
export declare function challenge_StatusToJSON(object: Challenge_Status): string;
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
export declare const Certificate: {
    $type: "yandex.cloud.certificatemanager.v1.Certificate";
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    fromPartial(object: DeepPartial<Certificate>): Certificate;
};
export declare const Certificate_LabelsEntry: {
    $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry";
    encode(message: Certificate_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Certificate_LabelsEntry;
    fromJSON(object: any): Certificate_LabelsEntry;
    toJSON(message: Certificate_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Certificate_LabelsEntry>): Certificate_LabelsEntry;
};
export declare const Challenge: {
    $type: "yandex.cloud.certificatemanager.v1.Challenge";
    encode(message: Challenge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Challenge;
    fromJSON(object: any): Challenge;
    toJSON(message: Challenge): unknown;
    fromPartial(object: DeepPartial<Challenge>): Challenge;
};
export declare const Challenge_DnsRecord: {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord";
    encode(message: Challenge_DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Challenge_DnsRecord;
    fromJSON(object: any): Challenge_DnsRecord;
    toJSON(message: Challenge_DnsRecord): unknown;
    fromPartial(object: DeepPartial<Challenge_DnsRecord>): Challenge_DnsRecord;
};
export declare const Challenge_HttpFile: {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile";
    encode(message: Challenge_HttpFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Challenge_HttpFile;
    fromJSON(object: any): Challenge_HttpFile;
    toJSON(message: Challenge_HttpFile): unknown;
    fromPartial(object: DeepPartial<Challenge_HttpFile>): Challenge_HttpFile;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
