/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cdn.v1';

/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
export enum OriginProtocol {
    ORIGIN_PROTOCOL_UNSPECIFIED = 0,
    /** HTTP - CDN servers will connect to your origin via HTTP. */
    HTTP = 1,
    /** HTTPS - CDN servers will connect to your origin via HTTPS. */
    HTTPS = 2,
    /**
     * MATCH - Connection protocol will be chosen automatically (content on the
     * origin source should be available for the CDN both through HTTP and HTTPS).
     */
    MATCH = 3,
    UNRECOGNIZED = -1,
}

export function originProtocolFromJSON(object: any): OriginProtocol {
    switch (object) {
        case 0:
        case 'ORIGIN_PROTOCOL_UNSPECIFIED':
            return OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED;
        case 1:
        case 'HTTP':
            return OriginProtocol.HTTP;
        case 2:
        case 'HTTPS':
            return OriginProtocol.HTTPS;
        case 3:
        case 'MATCH':
            return OriginProtocol.MATCH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OriginProtocol.UNRECOGNIZED;
    }
}

export function originProtocolToJSON(object: OriginProtocol): string {
    switch (object) {
        case OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED:
            return 'ORIGIN_PROTOCOL_UNSPECIFIED';
        case OriginProtocol.HTTP:
            return 'HTTP';
        case OriginProtocol.HTTPS:
            return 'HTTPS';
        case OriginProtocol.MATCH:
            return 'MATCH';
        default:
            return 'UNKNOWN';
    }
}

/** RewriteFlag defines flag for the Rewrite option. */
export enum RewriteFlag {
    REWRITE_FLAG_UNSPECIFIED = 0,
    /**
     * LAST - Stops processing of the current set of ngx_http_rewrite_module directives and
     * starts a search for a new location matching changed URI.
     */
    LAST = 1,
    /** BREAK - Stops processing of the current set of the Rewrite option. */
    BREAK = 2,
    /**
     * REDIRECT - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start
     * with "http://", "https://", or "$scheme".
     */
    REDIRECT = 3,
    /** PERMANENT - Returns a permanent redirect with the 301 code. */
    PERMANENT = 4,
    UNRECOGNIZED = -1,
}

export function rewriteFlagFromJSON(object: any): RewriteFlag {
    switch (object) {
        case 0:
        case 'REWRITE_FLAG_UNSPECIFIED':
            return RewriteFlag.REWRITE_FLAG_UNSPECIFIED;
        case 1:
        case 'LAST':
            return RewriteFlag.LAST;
        case 2:
        case 'BREAK':
            return RewriteFlag.BREAK;
        case 3:
        case 'REDIRECT':
            return RewriteFlag.REDIRECT;
        case 4:
        case 'PERMANENT':
            return RewriteFlag.PERMANENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RewriteFlag.UNRECOGNIZED;
    }
}

export function rewriteFlagToJSON(object: RewriteFlag): string {
    switch (object) {
        case RewriteFlag.REWRITE_FLAG_UNSPECIFIED:
            return 'REWRITE_FLAG_UNSPECIFIED';
        case RewriteFlag.LAST:
            return 'LAST';
        case RewriteFlag.BREAK:
            return 'BREAK';
        case RewriteFlag.REDIRECT:
            return 'REDIRECT';
        case RewriteFlag.PERMANENT:
            return 'PERMANENT';
        default:
            return 'UNKNOWN';
    }
}

/** A certificate type patameters. */
export enum SSLCertificateType {
    /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
    DONT_USE = 1,
    /** LETS_ENCRYPT_GCORE - Works only if you have already pointed your domain name to the protected IP address in your DNS */
    LETS_ENCRYPT_GCORE = 2,
    /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key */
    CM = 3,
    UNRECOGNIZED = -1,
}

export function sSLCertificateTypeFromJSON(object: any): SSLCertificateType {
    switch (object) {
        case 0:
        case 'SSL_CERTIFICATE_TYPE_UNSPECIFIED':
            return SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED;
        case 1:
        case 'DONT_USE':
            return SSLCertificateType.DONT_USE;
        case 2:
        case 'LETS_ENCRYPT_GCORE':
            return SSLCertificateType.LETS_ENCRYPT_GCORE;
        case 3:
        case 'CM':
            return SSLCertificateType.CM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SSLCertificateType.UNRECOGNIZED;
    }
}

export function sSLCertificateTypeToJSON(object: SSLCertificateType): string {
    switch (object) {
        case SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED:
            return 'SSL_CERTIFICATE_TYPE_UNSPECIFIED';
        case SSLCertificateType.DONT_USE:
            return 'DONT_USE';
        case SSLCertificateType.LETS_ENCRYPT_GCORE:
            return 'LETS_ENCRYPT_GCORE';
        case SSLCertificateType.CM:
            return 'CM';
        default:
            return 'UNKNOWN';
    }
}

/** A certificate status patameters. */
export enum SSLCertificateStatus {
    /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_STATUS_UNSPECIFIED = 0,
    /** READY - SSL certificate is ready to use. */
    READY = 1,
    /** CREATING - SSL certificate is creating. */
    CREATING = 2,
    UNRECOGNIZED = -1,
}

export function sSLCertificateStatusFromJSON(
    object: any
): SSLCertificateStatus {
    switch (object) {
        case 0:
        case 'SSL_CERTIFICATE_STATUS_UNSPECIFIED':
            return SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED;
        case 1:
        case 'READY':
            return SSLCertificateStatus.READY;
        case 2:
        case 'CREATING':
            return SSLCertificateStatus.CREATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SSLCertificateStatus.UNRECOGNIZED;
    }
}

export function sSLCertificateStatusToJSON(
    object: SSLCertificateStatus
): string {
    switch (object) {
        case SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED:
            return 'SSL_CERTIFICATE_STATUS_UNSPECIFIED';
        case SSLCertificateStatus.READY:
            return 'READY';
        case SSLCertificateStatus.CREATING:
            return 'CREATING';
        default:
            return 'UNKNOWN';
    }
}

/** List of secondary (alternative) CNAMEs. */
export interface SecondaryHostnames {
    $type: 'yandex.cloud.cdn.v1.SecondaryHostnames';
    /** List of secondary hostname values. */
    values: string[];
}

/** A CDN resource - representation of providers resource. */
export interface Resource {
    $type: 'yandex.cloud.cdn.v1.Resource';
    /** ID of the resource. */
    id: string;
    /** Folder id. */
    folderId: string;
    /** CDN endpoint CNAME, must be unique among resources. */
    cname: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Update timestamp. */
    updatedAt: Date | undefined;
    /**
     * Flag to create Resource either in active or disabled state.
     * True - the content from CDN is available to clients.
     * False - the content from CDN isn't available to clients.
     */
    active: boolean;
    /** Resource settings and options to tune CDN edge behavior. */
    options: ResourceOptions | undefined;
    /** List of secondary hostname strings. */
    secondaryHostnames: string[];
    /** ID of the origin group. */
    originGroupId: number;
    /** Name of the origin group. */
    originGroupName: string;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /** SSL certificate options. */
    sslCertificate: SSLCertificate | undefined;
}

/** A major set of various resource options. */
export interface ResourceOptions {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions';
    /** Set up a cache status. */
    disableCache: ResourceOptions_BoolOption | undefined;
    /** Set up [EdgeCacheSettings]. */
    edgeCacheSettings: ResourceOptions_EdgeCacheSettings | undefined;
    /**
     * Using [Int64Option]. Set up a cache period for the end-users browser.
     * Content will be cached due to origin settings.
     * If there are no cache settings on your origin, the content will not be cached.
     * The list of HTTP response codes that can be cached in browsers: 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
     * Other response codes will not be cached.
     * The default value is 4 days.
     */
    browserCacheSettings: ResourceOptions_Int64Option | undefined;
    /** List HTTP headers that must be included in responses to clients. */
    cacheHttpHeaders: ResourceOptions_StringsListOption | undefined;
    /** Set up [QueryParamsOptions]. */
    queryParamsOptions: ResourceOptions_QueryParamsOptions | undefined;
    /**
     * Files larger than 10 MB will be requested and cached in parts (no larger than 10 MB each part). It reduces time to first byte.
     *
     * The origin must support HTTP Range requests.
     *
     * By default the option is disabled.
     */
    slice: ResourceOptions_BoolOption | undefined;
    /** Set up compression variant. */
    compressionOptions: ResourceOptions_CompressionOptions | undefined;
    /** Set up redirects. */
    redirectOptions: ResourceOptions_RedirectOptions | undefined;
    /** Set up host parameters. */
    hostOptions: ResourceOptions_HostOptions | undefined;
    /** Set up static headers that CDN servers send in responses to clients. */
    staticHeaders: ResourceOptions_StringsMapOption | undefined;
    /**
     * Parameter that lets browsers get access to selected resources from a domain
     * different to a domain from which the request is received.
     * [Read more](/docs/cdn/concepts/cors).
     */
    cors: ResourceOptions_StringsListOption | undefined;
    /**
     * List of errors which instruct CDN servers to serve stale content to clients.
     *
     * Possible values: `error`, `http_403`, `http_404`, `http_429`, `http_500`, `http_502`, `http_503`, `http_504`, `invalid_header`, `timeout`, `updating`.
     */
    stale: ResourceOptions_StringsListOption | undefined;
    /**
     * HTTP methods for your CDN content. By default the following methods
     * are allowed: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
     * In case some methods are not allowed to the user, they will get the 405
     * (Method Not Allowed) response. If the method is not supported,
     * the user gets the 501 (Not Implemented) response.
     */
    allowedHttpMethods: ResourceOptions_StringsListOption | undefined;
    /** Allows caching for GET, HEAD and POST requests. */
    proxyCacheMethodsSet: ResourceOptions_BoolOption | undefined;
    /** Disabling proxy force ranges. */
    disableProxyForceRanges: ResourceOptions_BoolOption | undefined;
    /**
     * Set up custom headers that CDN servers send in requests to origins.
     * The Header name field can contain letters (A-Z, a-z), numbers (0-9), dashes (-) and underscores (_).
     * The Value field can contain letters (A-Z, a-z), numbers (0-9), dashes (-),
     * underscores (_), slashes (/), colons (:), equal (=), dots (.), and spaces.
     */
    staticRequestHeaders: ResourceOptions_StringsMapOption | undefined;
    /**
     * Wildcard additional CNAME.
     * If a resource has a wildcard additional CNAME, you can use your own certificate for content delivery via HTTPS. Read-only.
     */
    customServerName: ResourceOptions_StringOption | undefined;
    /** Using [BoolOption] for ignoring cookie. */
    ignoreCookie: ResourceOptions_BoolOption | undefined;
    /** Changing or redirecting query paths. */
    rewrite: ResourceOptions_RewriteOption | undefined;
}

/** Set up bool values. */
export interface ResourceOptions_BoolOption {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.BoolOption';
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: boolean;
}

/** A set of the string parameters. */
export interface ResourceOptions_StringOption {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringOption';
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: string;
}

/** A set of the numeric parameters. */
export interface ResourceOptions_Int64Option {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.Int64Option';
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: number;
}

/** A set of the string list parameters. */
export interface ResourceOptions_StringsListOption {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsListOption';
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: string[];
}

/** A set of the strings map parameters. */
export interface ResourceOptions_StringsMapOption {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption';
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: { [key: string]: string };
}

export interface ResourceOptions_StringsMapOption_ValueEntry {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry';
    key: string;
    value: string;
}

/** A set of the caching response time parameters. */
export interface ResourceOptions_CachingTimes {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes';
    /**
     * Caching time for a response with codes 200, 206, 301, 302.
     * Responses with codes 4xx, 5xx will not be cached. Use `0s` disable to caching.
     * Use [custom_values] field to specify a custom caching time for a response with specific codes.
     */
    simpleValue: number;
    /**
     * Caching time for a response with specific codes. These settings have a higher priority than the value field.
     * Response code (`304`, `404` for example). Use `any` to specify caching time for all response codes.
     * Caching time in seconds (`0s`, `600s` for example). Use `0s` to disable caching for a specific response code.
     */
    customValues: { [key: string]: number };
}

export interface ResourceOptions_CachingTimes_CustomValuesEntry {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry';
    key: string;
    value: number;
}

/** A set of the edge cache parameters. */
export interface ResourceOptions_EdgeCacheSettings {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings';
    /**
     * True - the option is enabled and its `values_variant` is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: ResourceOptions_CachingTimes | undefined;
    /**
     * Content will be cached according to origin cache settings.
     * The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308
     * if an origin server does not have caching HTTP headers.
     * Responses with other codes will not be cached.
     */
    defaultValue: number | undefined;
}

/** A set of the string variable map parameters. */
export interface ResourceOptions_StringVariableMapOption {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption';
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: {
        [key: string]: ResourceOptions_StringVariableMapOption_OneofString;
    };
}

export interface ResourceOptions_StringVariableMapOption_OneofString {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString';
    /** Using [StringOption] to set value. */
    value: ResourceOptions_StringOption | undefined;
    /** Using [StringsListOption] to set values. */
    values: ResourceOptions_StringsListOption | undefined;
}

export interface ResourceOptions_StringVariableMapOption_ValueEntry {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry';
    key: string;
    value: ResourceOptions_StringVariableMapOption_OneofString | undefined;
}

/** A set of the query parameters. */
export interface ResourceOptions_QueryParamsOptions {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions';
    /** Using [BoolOption]. Selected by default. Files with different query parameters are cached as objects with the same key regardless of the parameter value. */
    ignoreQueryString: ResourceOptions_BoolOption | undefined;
    /**
     * Ignore All Except.
     * Files with the specified query parameters are cached as objects with different keys,
     * files with other parameters are cached as objects with the same key.
     */
    queryParamsWhitelist: ResourceOptions_StringsListOption | undefined;
    /**
     * Ignore only. Files with the specified query parameters are cached as objects with the same key,
     * files with other parameters are cached as objects with different keys.
     */
    queryParamsBlacklist: ResourceOptions_StringsListOption | undefined;
}

/** A set of the redirect parameters. */
export interface ResourceOptions_RedirectOptions {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions';
    /** Using [BoolOption]. Set up a redirect from HTTPS to HTTP. */
    redirectHttpToHttps: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. Set up a redirect from HTTP to HTTPS. */
    redirectHttpsToHttp: ResourceOptions_BoolOption | undefined;
}

/** A set of the host parameters. */
export interface ResourceOptions_HostOptions {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.HostOptions';
    /**
     * Custom value for the Host header.
     *
     * Your server must be able to process requests with the chosen header.
     *
     * Default value (if [StringOption.enabled] is `false`) is [Resource.cname].
     */
    host: ResourceOptions_StringOption | undefined;
    /**
     * Using [BoolOption]. Choose the Forward Host header option if is important to send in the request to the Origin
     * the same Host header as was sent in the request to CDN server.
     */
    forwardHostHeader: ResourceOptions_BoolOption | undefined;
}

/** A set of the compression variant parameters. */
export interface ResourceOptions_CompressionOptions {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions';
    /**
     * The Fetch compressed option helps you to reduce
     * the bandwidth between origin and CDN servers.
     * Also, content delivery speed becomes higher because of reducing the time
     * for compressing files in a CDN.
     */
    fetchCompressed: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. GZip compression at CDN servers reduces file size by 70% and can be as high as 90%. */
    gzipOn: ResourceOptions_BoolOption | undefined;
    /**
     * The option allows to compress content with brotli on the CDN's end.
     *
     * Compression is performed on the Origin Shielding. If a pre-cache server doesn't active for a resource, compression does not occur even if the option is enabled.
     *
     * Specify the content-type for each type of content you wish to have compressed. CDN servers will request only uncompressed content from the origin.
     */
    brotliCompression: ResourceOptions_StringsListOption | undefined;
}

/** An option for changing or redirecting query paths. */
export interface ResourceOptions_RewriteOption {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.RewriteOption';
    /**
     * True - the option is enabled and its [flag] is applied to the resource.
     * False - the option is disabled and its default value of the [flag] is used for the resource.
     */
    enabled: boolean;
    /**
     * Pattern for rewrite.
     *
     * The value must have the following format: `<source path> <destination path>`, where both paths are regular expressions which use at least one group. E.g., `/foo/(.*) /bar/$1`.
     */
    body: string;
    /**
     * Break flag is applied to the option by default.
     * It is not shown in the field.
     */
    flag: RewriteFlag;
}

/** A set of the personal SSL certificate patameters. */
export interface SSLTargetCertificate {
    $type: 'yandex.cloud.cdn.v1.SSLTargetCertificate';
    /** Type of the sertificate. */
    type: SSLCertificateType;
    /** Certificate data. */
    data: SSLCertificateData | undefined;
}

/** A SSL sertificate patameters. */
export interface SSLCertificate {
    $type: 'yandex.cloud.cdn.v1.SSLCertificate';
    /** Type of the sertificate. */
    type: SSLCertificateType;
    /** Active status. */
    status: SSLCertificateStatus;
    /** Certificate data. */
    data: SSLCertificateData | undefined;
}

/** A certificate data patameters. */
export interface SSLCertificateData {
    $type: 'yandex.cloud.cdn.v1.SSLCertificateData';
    /**
     * Custom (add your SSL certificate by uploading the certificate
     * in PEM format and your private key).
     */
    cm: SSLCertificateCMData | undefined;
}

/** A certificate data custom patameters. */
export interface SSLCertificateCMData {
    $type: 'yandex.cloud.cdn.v1.SSLCertificateCMData';
    /** ID of the custom sertificate. */
    id: string;
}

const baseSecondaryHostnames: object = {
    $type: 'yandex.cloud.cdn.v1.SecondaryHostnames',
    values: '',
};

export const SecondaryHostnames = {
    $type: 'yandex.cloud.cdn.v1.SecondaryHostnames' as const,

    encode(
        message: SecondaryHostnames,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.values) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SecondaryHostnames {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecondaryHostnames } as SecondaryHostnames;
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecondaryHostnames {
        const message = { ...baseSecondaryHostnames } as SecondaryHostnames;
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: SecondaryHostnames): unknown {
        const obj: any = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<SecondaryHostnames>): SecondaryHostnames {
        const message = { ...baseSecondaryHostnames } as SecondaryHostnames;
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(SecondaryHostnames.$type, SecondaryHostnames);

const baseResource: object = {
    $type: 'yandex.cloud.cdn.v1.Resource',
    id: '',
    folderId: '',
    cname: '',
    active: false,
    secondaryHostnames: '',
    originGroupId: 0,
    originGroupName: '',
    originProtocol: 0,
};

export const Resource = {
    $type: 'yandex.cloud.cdn.v1.Resource' as const,

    encode(
        message: Resource,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cname !== '') {
            writer.uint32(26).string(message.cname);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.updatedAt),
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.active === true) {
            writer.uint32(48).bool(message.active);
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(
                message.options,
                writer.uint32(58).fork()
            ).ldelim();
        }
        for (const v of message.secondaryHostnames) {
            writer.uint32(66).string(v!);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(72).int64(message.originGroupId);
        }
        if (message.originGroupName !== '') {
            writer.uint32(82).string(message.originGroupName);
        }
        if (message.originProtocol !== 0) {
            writer.uint32(88).int32(message.originProtocol);
        }
        if (message.sslCertificate !== undefined) {
            SSLCertificate.encode(
                message.sslCertificate,
                writer.uint32(98).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResource } as Resource;
        message.secondaryHostnames = [];
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
                    message.cname = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                case 7:
                    message.options = ResourceOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.secondaryHostnames.push(reader.string());
                    break;
                case 9:
                    message.originGroupId = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 10:
                    message.originGroupName = reader.string();
                    break;
                case 11:
                    message.originProtocol = reader.int32() as any;
                    break;
                case 12:
                    message.sslCertificate = SSLCertificate.decode(
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

    fromJSON(object: any): Resource {
        const message = { ...baseResource } as Resource;
        message.secondaryHostnames = [];
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
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = String(object.cname);
        } else {
            message.cname = '';
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
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        } else {
            message.active = false;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromJSON(object.options);
        } else {
            message.options = undefined;
        }
        if (
            object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null
        ) {
            for (const e of object.secondaryHostnames) {
                message.secondaryHostnames.push(String(e));
            }
        }
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = Number(object.originGroupId);
        } else {
            message.originGroupId = 0;
        }
        if (
            object.originGroupName !== undefined &&
            object.originGroupName !== null
        ) {
            message.originGroupName = String(object.originGroupName);
        } else {
            message.originGroupName = '';
        }
        if (
            object.originProtocol !== undefined &&
            object.originProtocol !== null
        ) {
            message.originProtocol = originProtocolFromJSON(
                object.originProtocol
            );
        } else {
            message.originProtocol = 0;
        }
        if (
            object.sslCertificate !== undefined &&
            object.sslCertificate !== null
        ) {
            message.sslCertificate = SSLCertificate.fromJSON(
                object.sslCertificate
            );
        } else {
            message.sslCertificate = undefined;
        }
        return message;
    },

    toJSON(message: Resource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cname !== undefined && (obj.cname = message.cname);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options
                ? ResourceOptions.toJSON(message.options)
                : undefined);
        if (message.secondaryHostnames) {
            obj.secondaryHostnames = message.secondaryHostnames.map((e) => e);
        } else {
            obj.secondaryHostnames = [];
        }
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.originGroupName !== undefined &&
            (obj.originGroupName = message.originGroupName);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? SSLCertificate.toJSON(message.sslCertificate)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Resource>): Resource {
        const message = { ...baseResource } as Resource;
        message.secondaryHostnames = [];
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
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = object.cname;
        } else {
            message.cname = '';
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
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        } else {
            message.active = false;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromPartial(object.options);
        } else {
            message.options = undefined;
        }
        if (
            object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null
        ) {
            for (const e of object.secondaryHostnames) {
                message.secondaryHostnames.push(e);
            }
        }
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = object.originGroupId;
        } else {
            message.originGroupId = 0;
        }
        if (
            object.originGroupName !== undefined &&
            object.originGroupName !== null
        ) {
            message.originGroupName = object.originGroupName;
        } else {
            message.originGroupName = '';
        }
        if (
            object.originProtocol !== undefined &&
            object.originProtocol !== null
        ) {
            message.originProtocol = object.originProtocol;
        } else {
            message.originProtocol = 0;
        }
        if (
            object.sslCertificate !== undefined &&
            object.sslCertificate !== null
        ) {
            message.sslCertificate = SSLCertificate.fromPartial(
                object.sslCertificate
            );
        } else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Resource.$type, Resource);

const baseResourceOptions: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions',
};

export const ResourceOptions = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions' as const,

    encode(
        message: ResourceOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.disableCache !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.disableCache,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.edgeCacheSettings !== undefined) {
            ResourceOptions_EdgeCacheSettings.encode(
                message.edgeCacheSettings,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.browserCacheSettings !== undefined) {
            ResourceOptions_Int64Option.encode(
                message.browserCacheSettings,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.cacheHttpHeaders !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.cacheHttpHeaders,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.queryParamsOptions !== undefined) {
            ResourceOptions_QueryParamsOptions.encode(
                message.queryParamsOptions,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.slice !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.slice,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.compressionOptions !== undefined) {
            ResourceOptions_CompressionOptions.encode(
                message.compressionOptions,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.redirectOptions !== undefined) {
            ResourceOptions_RedirectOptions.encode(
                message.redirectOptions,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.hostOptions !== undefined) {
            ResourceOptions_HostOptions.encode(
                message.hostOptions,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.staticHeaders !== undefined) {
            ResourceOptions_StringsMapOption.encode(
                message.staticHeaders,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.cors !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.cors,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.stale !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.stale,
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.allowedHttpMethods !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.allowedHttpMethods,
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.proxyCacheMethodsSet !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.proxyCacheMethodsSet,
                writer.uint32(114).fork()
            ).ldelim();
        }
        if (message.disableProxyForceRanges !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.disableProxyForceRanges,
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.staticRequestHeaders !== undefined) {
            ResourceOptions_StringsMapOption.encode(
                message.staticRequestHeaders,
                writer.uint32(130).fork()
            ).ldelim();
        }
        if (message.customServerName !== undefined) {
            ResourceOptions_StringOption.encode(
                message.customServerName,
                writer.uint32(138).fork()
            ).ldelim();
        }
        if (message.ignoreCookie !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.ignoreCookie,
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.rewrite !== undefined) {
            ResourceOptions_RewriteOption.encode(
                message.rewrite,
                writer.uint32(154).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions } as ResourceOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disableCache = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.edgeCacheSettings =
                        ResourceOptions_EdgeCacheSettings.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.browserCacheSettings =
                        ResourceOptions_Int64Option.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 4:
                    message.cacheHttpHeaders =
                        ResourceOptions_StringsListOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 5:
                    message.queryParamsOptions =
                        ResourceOptions_QueryParamsOptions.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 6:
                    message.slice = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.compressionOptions =
                        ResourceOptions_CompressionOptions.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 8:
                    message.redirectOptions =
                        ResourceOptions_RedirectOptions.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 9:
                    message.hostOptions = ResourceOptions_HostOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.staticHeaders =
                        ResourceOptions_StringsMapOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 11:
                    message.cors = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.stale = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 13:
                    message.allowedHttpMethods =
                        ResourceOptions_StringsListOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 14:
                    message.proxyCacheMethodsSet =
                        ResourceOptions_BoolOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 15:
                    message.disableProxyForceRanges =
                        ResourceOptions_BoolOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 16:
                    message.staticRequestHeaders =
                        ResourceOptions_StringsMapOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 17:
                    message.customServerName =
                        ResourceOptions_StringOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 18:
                    message.ignoreCookie = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 19:
                    message.rewrite = ResourceOptions_RewriteOption.decode(
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

    fromJSON(object: any): ResourceOptions {
        const message = { ...baseResourceOptions } as ResourceOptions;
        if (object.disableCache !== undefined && object.disableCache !== null) {
            message.disableCache = ResourceOptions_BoolOption.fromJSON(
                object.disableCache
            );
        } else {
            message.disableCache = undefined;
        }
        if (
            object.edgeCacheSettings !== undefined &&
            object.edgeCacheSettings !== null
        ) {
            message.edgeCacheSettings =
                ResourceOptions_EdgeCacheSettings.fromJSON(
                    object.edgeCacheSettings
                );
        } else {
            message.edgeCacheSettings = undefined;
        }
        if (
            object.browserCacheSettings !== undefined &&
            object.browserCacheSettings !== null
        ) {
            message.browserCacheSettings = ResourceOptions_Int64Option.fromJSON(
                object.browserCacheSettings
            );
        } else {
            message.browserCacheSettings = undefined;
        }
        if (
            object.cacheHttpHeaders !== undefined &&
            object.cacheHttpHeaders !== null
        ) {
            message.cacheHttpHeaders =
                ResourceOptions_StringsListOption.fromJSON(
                    object.cacheHttpHeaders
                );
        } else {
            message.cacheHttpHeaders = undefined;
        }
        if (
            object.queryParamsOptions !== undefined &&
            object.queryParamsOptions !== null
        ) {
            message.queryParamsOptions =
                ResourceOptions_QueryParamsOptions.fromJSON(
                    object.queryParamsOptions
                );
        } else {
            message.queryParamsOptions = undefined;
        }
        if (object.slice !== undefined && object.slice !== null) {
            message.slice = ResourceOptions_BoolOption.fromJSON(object.slice);
        } else {
            message.slice = undefined;
        }
        if (
            object.compressionOptions !== undefined &&
            object.compressionOptions !== null
        ) {
            message.compressionOptions =
                ResourceOptions_CompressionOptions.fromJSON(
                    object.compressionOptions
                );
        } else {
            message.compressionOptions = undefined;
        }
        if (
            object.redirectOptions !== undefined &&
            object.redirectOptions !== null
        ) {
            message.redirectOptions = ResourceOptions_RedirectOptions.fromJSON(
                object.redirectOptions
            );
        } else {
            message.redirectOptions = undefined;
        }
        if (object.hostOptions !== undefined && object.hostOptions !== null) {
            message.hostOptions = ResourceOptions_HostOptions.fromJSON(
                object.hostOptions
            );
        } else {
            message.hostOptions = undefined;
        }
        if (
            object.staticHeaders !== undefined &&
            object.staticHeaders !== null
        ) {
            message.staticHeaders = ResourceOptions_StringsMapOption.fromJSON(
                object.staticHeaders
            );
        } else {
            message.staticHeaders = undefined;
        }
        if (object.cors !== undefined && object.cors !== null) {
            message.cors = ResourceOptions_StringsListOption.fromJSON(
                object.cors
            );
        } else {
            message.cors = undefined;
        }
        if (object.stale !== undefined && object.stale !== null) {
            message.stale = ResourceOptions_StringsListOption.fromJSON(
                object.stale
            );
        } else {
            message.stale = undefined;
        }
        if (
            object.allowedHttpMethods !== undefined &&
            object.allowedHttpMethods !== null
        ) {
            message.allowedHttpMethods =
                ResourceOptions_StringsListOption.fromJSON(
                    object.allowedHttpMethods
                );
        } else {
            message.allowedHttpMethods = undefined;
        }
        if (
            object.proxyCacheMethodsSet !== undefined &&
            object.proxyCacheMethodsSet !== null
        ) {
            message.proxyCacheMethodsSet = ResourceOptions_BoolOption.fromJSON(
                object.proxyCacheMethodsSet
            );
        } else {
            message.proxyCacheMethodsSet = undefined;
        }
        if (
            object.disableProxyForceRanges !== undefined &&
            object.disableProxyForceRanges !== null
        ) {
            message.disableProxyForceRanges =
                ResourceOptions_BoolOption.fromJSON(
                    object.disableProxyForceRanges
                );
        } else {
            message.disableProxyForceRanges = undefined;
        }
        if (
            object.staticRequestHeaders !== undefined &&
            object.staticRequestHeaders !== null
        ) {
            message.staticRequestHeaders =
                ResourceOptions_StringsMapOption.fromJSON(
                    object.staticRequestHeaders
                );
        } else {
            message.staticRequestHeaders = undefined;
        }
        if (
            object.customServerName !== undefined &&
            object.customServerName !== null
        ) {
            message.customServerName = ResourceOptions_StringOption.fromJSON(
                object.customServerName
            );
        } else {
            message.customServerName = undefined;
        }
        if (object.ignoreCookie !== undefined && object.ignoreCookie !== null) {
            message.ignoreCookie = ResourceOptions_BoolOption.fromJSON(
                object.ignoreCookie
            );
        } else {
            message.ignoreCookie = undefined;
        }
        if (object.rewrite !== undefined && object.rewrite !== null) {
            message.rewrite = ResourceOptions_RewriteOption.fromJSON(
                object.rewrite
            );
        } else {
            message.rewrite = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOptions): unknown {
        const obj: any = {};
        message.disableCache !== undefined &&
            (obj.disableCache = message.disableCache
                ? ResourceOptions_BoolOption.toJSON(message.disableCache)
                : undefined);
        message.edgeCacheSettings !== undefined &&
            (obj.edgeCacheSettings = message.edgeCacheSettings
                ? ResourceOptions_EdgeCacheSettings.toJSON(
                      message.edgeCacheSettings
                  )
                : undefined);
        message.browserCacheSettings !== undefined &&
            (obj.browserCacheSettings = message.browserCacheSettings
                ? ResourceOptions_Int64Option.toJSON(
                      message.browserCacheSettings
                  )
                : undefined);
        message.cacheHttpHeaders !== undefined &&
            (obj.cacheHttpHeaders = message.cacheHttpHeaders
                ? ResourceOptions_StringsListOption.toJSON(
                      message.cacheHttpHeaders
                  )
                : undefined);
        message.queryParamsOptions !== undefined &&
            (obj.queryParamsOptions = message.queryParamsOptions
                ? ResourceOptions_QueryParamsOptions.toJSON(
                      message.queryParamsOptions
                  )
                : undefined);
        message.slice !== undefined &&
            (obj.slice = message.slice
                ? ResourceOptions_BoolOption.toJSON(message.slice)
                : undefined);
        message.compressionOptions !== undefined &&
            (obj.compressionOptions = message.compressionOptions
                ? ResourceOptions_CompressionOptions.toJSON(
                      message.compressionOptions
                  )
                : undefined);
        message.redirectOptions !== undefined &&
            (obj.redirectOptions = message.redirectOptions
                ? ResourceOptions_RedirectOptions.toJSON(
                      message.redirectOptions
                  )
                : undefined);
        message.hostOptions !== undefined &&
            (obj.hostOptions = message.hostOptions
                ? ResourceOptions_HostOptions.toJSON(message.hostOptions)
                : undefined);
        message.staticHeaders !== undefined &&
            (obj.staticHeaders = message.staticHeaders
                ? ResourceOptions_StringsMapOption.toJSON(message.staticHeaders)
                : undefined);
        message.cors !== undefined &&
            (obj.cors = message.cors
                ? ResourceOptions_StringsListOption.toJSON(message.cors)
                : undefined);
        message.stale !== undefined &&
            (obj.stale = message.stale
                ? ResourceOptions_StringsListOption.toJSON(message.stale)
                : undefined);
        message.allowedHttpMethods !== undefined &&
            (obj.allowedHttpMethods = message.allowedHttpMethods
                ? ResourceOptions_StringsListOption.toJSON(
                      message.allowedHttpMethods
                  )
                : undefined);
        message.proxyCacheMethodsSet !== undefined &&
            (obj.proxyCacheMethodsSet = message.proxyCacheMethodsSet
                ? ResourceOptions_BoolOption.toJSON(
                      message.proxyCacheMethodsSet
                  )
                : undefined);
        message.disableProxyForceRanges !== undefined &&
            (obj.disableProxyForceRanges = message.disableProxyForceRanges
                ? ResourceOptions_BoolOption.toJSON(
                      message.disableProxyForceRanges
                  )
                : undefined);
        message.staticRequestHeaders !== undefined &&
            (obj.staticRequestHeaders = message.staticRequestHeaders
                ? ResourceOptions_StringsMapOption.toJSON(
                      message.staticRequestHeaders
                  )
                : undefined);
        message.customServerName !== undefined &&
            (obj.customServerName = message.customServerName
                ? ResourceOptions_StringOption.toJSON(message.customServerName)
                : undefined);
        message.ignoreCookie !== undefined &&
            (obj.ignoreCookie = message.ignoreCookie
                ? ResourceOptions_BoolOption.toJSON(message.ignoreCookie)
                : undefined);
        message.rewrite !== undefined &&
            (obj.rewrite = message.rewrite
                ? ResourceOptions_RewriteOption.toJSON(message.rewrite)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ResourceOptions>): ResourceOptions {
        const message = { ...baseResourceOptions } as ResourceOptions;
        if (object.disableCache !== undefined && object.disableCache !== null) {
            message.disableCache = ResourceOptions_BoolOption.fromPartial(
                object.disableCache
            );
        } else {
            message.disableCache = undefined;
        }
        if (
            object.edgeCacheSettings !== undefined &&
            object.edgeCacheSettings !== null
        ) {
            message.edgeCacheSettings =
                ResourceOptions_EdgeCacheSettings.fromPartial(
                    object.edgeCacheSettings
                );
        } else {
            message.edgeCacheSettings = undefined;
        }
        if (
            object.browserCacheSettings !== undefined &&
            object.browserCacheSettings !== null
        ) {
            message.browserCacheSettings =
                ResourceOptions_Int64Option.fromPartial(
                    object.browserCacheSettings
                );
        } else {
            message.browserCacheSettings = undefined;
        }
        if (
            object.cacheHttpHeaders !== undefined &&
            object.cacheHttpHeaders !== null
        ) {
            message.cacheHttpHeaders =
                ResourceOptions_StringsListOption.fromPartial(
                    object.cacheHttpHeaders
                );
        } else {
            message.cacheHttpHeaders = undefined;
        }
        if (
            object.queryParamsOptions !== undefined &&
            object.queryParamsOptions !== null
        ) {
            message.queryParamsOptions =
                ResourceOptions_QueryParamsOptions.fromPartial(
                    object.queryParamsOptions
                );
        } else {
            message.queryParamsOptions = undefined;
        }
        if (object.slice !== undefined && object.slice !== null) {
            message.slice = ResourceOptions_BoolOption.fromPartial(
                object.slice
            );
        } else {
            message.slice = undefined;
        }
        if (
            object.compressionOptions !== undefined &&
            object.compressionOptions !== null
        ) {
            message.compressionOptions =
                ResourceOptions_CompressionOptions.fromPartial(
                    object.compressionOptions
                );
        } else {
            message.compressionOptions = undefined;
        }
        if (
            object.redirectOptions !== undefined &&
            object.redirectOptions !== null
        ) {
            message.redirectOptions =
                ResourceOptions_RedirectOptions.fromPartial(
                    object.redirectOptions
                );
        } else {
            message.redirectOptions = undefined;
        }
        if (object.hostOptions !== undefined && object.hostOptions !== null) {
            message.hostOptions = ResourceOptions_HostOptions.fromPartial(
                object.hostOptions
            );
        } else {
            message.hostOptions = undefined;
        }
        if (
            object.staticHeaders !== undefined &&
            object.staticHeaders !== null
        ) {
            message.staticHeaders =
                ResourceOptions_StringsMapOption.fromPartial(
                    object.staticHeaders
                );
        } else {
            message.staticHeaders = undefined;
        }
        if (object.cors !== undefined && object.cors !== null) {
            message.cors = ResourceOptions_StringsListOption.fromPartial(
                object.cors
            );
        } else {
            message.cors = undefined;
        }
        if (object.stale !== undefined && object.stale !== null) {
            message.stale = ResourceOptions_StringsListOption.fromPartial(
                object.stale
            );
        } else {
            message.stale = undefined;
        }
        if (
            object.allowedHttpMethods !== undefined &&
            object.allowedHttpMethods !== null
        ) {
            message.allowedHttpMethods =
                ResourceOptions_StringsListOption.fromPartial(
                    object.allowedHttpMethods
                );
        } else {
            message.allowedHttpMethods = undefined;
        }
        if (
            object.proxyCacheMethodsSet !== undefined &&
            object.proxyCacheMethodsSet !== null
        ) {
            message.proxyCacheMethodsSet =
                ResourceOptions_BoolOption.fromPartial(
                    object.proxyCacheMethodsSet
                );
        } else {
            message.proxyCacheMethodsSet = undefined;
        }
        if (
            object.disableProxyForceRanges !== undefined &&
            object.disableProxyForceRanges !== null
        ) {
            message.disableProxyForceRanges =
                ResourceOptions_BoolOption.fromPartial(
                    object.disableProxyForceRanges
                );
        } else {
            message.disableProxyForceRanges = undefined;
        }
        if (
            object.staticRequestHeaders !== undefined &&
            object.staticRequestHeaders !== null
        ) {
            message.staticRequestHeaders =
                ResourceOptions_StringsMapOption.fromPartial(
                    object.staticRequestHeaders
                );
        } else {
            message.staticRequestHeaders = undefined;
        }
        if (
            object.customServerName !== undefined &&
            object.customServerName !== null
        ) {
            message.customServerName = ResourceOptions_StringOption.fromPartial(
                object.customServerName
            );
        } else {
            message.customServerName = undefined;
        }
        if (object.ignoreCookie !== undefined && object.ignoreCookie !== null) {
            message.ignoreCookie = ResourceOptions_BoolOption.fromPartial(
                object.ignoreCookie
            );
        } else {
            message.ignoreCookie = undefined;
        }
        if (object.rewrite !== undefined && object.rewrite !== null) {
            message.rewrite = ResourceOptions_RewriteOption.fromPartial(
                object.rewrite
            );
        } else {
            message.rewrite = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ResourceOptions.$type, ResourceOptions);

const baseResourceOptions_BoolOption: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.BoolOption',
    enabled: false,
    value: false,
};

export const ResourceOptions_BoolOption = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.BoolOption' as const,

    encode(
        message: ResourceOptions_BoolOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_BoolOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_BoolOption,
        } as ResourceOptions_BoolOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_BoolOption {
        const message = {
            ...baseResourceOptions_BoolOption,
        } as ResourceOptions_BoolOption;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Boolean(object.value);
        } else {
            message.value = false;
        }
        return message;
    },

    toJSON(message: ResourceOptions_BoolOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_BoolOption>
    ): ResourceOptions_BoolOption {
        const message = {
            ...baseResourceOptions_BoolOption,
        } as ResourceOptions_BoolOption;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = false;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_BoolOption.$type,
    ResourceOptions_BoolOption
);

const baseResourceOptions_StringOption: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringOption',
    enabled: false,
    value: '',
};

export const ResourceOptions_StringOption = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringOption' as const,

    encode(
        message: ResourceOptions_StringOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_StringOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringOption,
        } as ResourceOptions_StringOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
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

    fromJSON(object: any): ResourceOptions_StringOption {
        const message = {
            ...baseResourceOptions_StringOption,
        } as ResourceOptions_StringOption;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: ResourceOptions_StringOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringOption>
    ): ResourceOptions_StringOption {
        const message = {
            ...baseResourceOptions_StringOption,
        } as ResourceOptions_StringOption;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_StringOption.$type,
    ResourceOptions_StringOption
);

const baseResourceOptions_Int64Option: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.Int64Option',
    enabled: false,
    value: 0,
};

export const ResourceOptions_Int64Option = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.Int64Option' as const,

    encode(
        message: ResourceOptions_Int64Option,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_Int64Option {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_Int64Option,
        } as ResourceOptions_Int64Option;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_Int64Option {
        const message = {
            ...baseResourceOptions_Int64Option,
        } as ResourceOptions_Int64Option;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        } else {
            message.value = 0;
        }
        return message;
    },

    toJSON(message: ResourceOptions_Int64Option): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_Int64Option>
    ): ResourceOptions_Int64Option {
        const message = {
            ...baseResourceOptions_Int64Option,
        } as ResourceOptions_Int64Option;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_Int64Option.$type,
    ResourceOptions_Int64Option
);

const baseResourceOptions_StringsListOption: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsListOption',
    enabled: false,
    value: '',
};

export const ResourceOptions_StringsListOption = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsListOption' as const,

    encode(
        message: ResourceOptions_StringsListOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        for (const v of message.value) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_StringsListOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsListOption,
        } as ResourceOptions_StringsListOption;
        message.value = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringsListOption {
        const message = {
            ...baseResourceOptions_StringsListOption,
        } as ResourceOptions_StringsListOption;
        message.value = [];
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            for (const e of object.value) {
                message.value.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: ResourceOptions_StringsListOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        if (message.value) {
            obj.value = message.value.map((e) => e);
        } else {
            obj.value = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringsListOption>
    ): ResourceOptions_StringsListOption {
        const message = {
            ...baseResourceOptions_StringsListOption,
        } as ResourceOptions_StringsListOption;
        message.value = [];
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            for (const e of object.value) {
                message.value.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_StringsListOption.$type,
    ResourceOptions_StringsListOption
);

const baseResourceOptions_StringsMapOption: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption',
    enabled: false,
};

export const ResourceOptions_StringsMapOption = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption' as const,

    encode(
        message: ResourceOptions_StringsMapOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            ResourceOptions_StringsMapOption_ValueEntry.encode(
                {
                    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(18).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_StringsMapOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsMapOption,
        } as ResourceOptions_StringsMapOption;
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 =
                        ResourceOptions_StringsMapOption_ValueEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry2.value !== undefined) {
                        message.value[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringsMapOption {
        const message = {
            ...baseResourceOptions_StringsMapOption,
        } as ResourceOptions_StringsMapOption;
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                message.value[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: ResourceOptions_StringsMapOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringsMapOption>
    ): ResourceOptions_StringsMapOption {
        const message = {
            ...baseResourceOptions_StringsMapOption,
        } as ResourceOptions_StringsMapOption;
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.value[key] = String(value);
                }
            });
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_StringsMapOption.$type,
    ResourceOptions_StringsMapOption
);

const baseResourceOptions_StringsMapOption_ValueEntry: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry',
    key: '',
    value: '',
};

export const ResourceOptions_StringsMapOption_ValueEntry = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry' as const,

    encode(
        message: ResourceOptions_StringsMapOption_ValueEntry,
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
    ): ResourceOptions_StringsMapOption_ValueEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        } as ResourceOptions_StringsMapOption_ValueEntry;
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

    fromJSON(object: any): ResourceOptions_StringsMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        } as ResourceOptions_StringsMapOption_ValueEntry;
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

    toJSON(message: ResourceOptions_StringsMapOption_ValueEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringsMapOption_ValueEntry>
    ): ResourceOptions_StringsMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        } as ResourceOptions_StringsMapOption_ValueEntry;
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

messageTypeRegistry.set(
    ResourceOptions_StringsMapOption_ValueEntry.$type,
    ResourceOptions_StringsMapOption_ValueEntry
);

const baseResourceOptions_CachingTimes: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes',
    simpleValue: 0,
};

export const ResourceOptions_CachingTimes = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes' as const,

    encode(
        message: ResourceOptions_CachingTimes,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.simpleValue !== 0) {
            writer.uint32(8).int64(message.simpleValue);
        }
        Object.entries(message.customValues).forEach(([key, value]) => {
            ResourceOptions_CachingTimes_CustomValuesEntry.encode(
                {
                    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(18).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_CachingTimes {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CachingTimes,
        } as ResourceOptions_CachingTimes;
        message.customValues = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.simpleValue = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    const entry2 =
                        ResourceOptions_CachingTimes_CustomValuesEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry2.value !== undefined) {
                        message.customValues[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_CachingTimes {
        const message = {
            ...baseResourceOptions_CachingTimes,
        } as ResourceOptions_CachingTimes;
        message.customValues = {};
        if (object.simpleValue !== undefined && object.simpleValue !== null) {
            message.simpleValue = Number(object.simpleValue);
        } else {
            message.simpleValue = 0;
        }
        if (object.customValues !== undefined && object.customValues !== null) {
            Object.entries(object.customValues).forEach(([key, value]) => {
                message.customValues[key] = Number(value);
            });
        }
        return message;
    },

    toJSON(message: ResourceOptions_CachingTimes): unknown {
        const obj: any = {};
        message.simpleValue !== undefined &&
            (obj.simpleValue = message.simpleValue);
        obj.customValues = {};
        if (message.customValues) {
            Object.entries(message.customValues).forEach(([k, v]) => {
                obj.customValues[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_CachingTimes>
    ): ResourceOptions_CachingTimes {
        const message = {
            ...baseResourceOptions_CachingTimes,
        } as ResourceOptions_CachingTimes;
        message.customValues = {};
        if (object.simpleValue !== undefined && object.simpleValue !== null) {
            message.simpleValue = object.simpleValue;
        } else {
            message.simpleValue = 0;
        }
        if (object.customValues !== undefined && object.customValues !== null) {
            Object.entries(object.customValues).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.customValues[key] = Number(value);
                }
            });
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_CachingTimes.$type,
    ResourceOptions_CachingTimes
);

const baseResourceOptions_CachingTimes_CustomValuesEntry: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry',
    key: '',
    value: 0,
};

export const ResourceOptions_CachingTimes_CustomValuesEntry = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry' as const,

    encode(
        message: ResourceOptions_CachingTimes_CustomValuesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_CachingTimes_CustomValuesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        } as ResourceOptions_CachingTimes_CustomValuesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_CachingTimes_CustomValuesEntry {
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        } as ResourceOptions_CachingTimes_CustomValuesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        } else {
            message.value = 0;
        }
        return message;
    },

    toJSON(message: ResourceOptions_CachingTimes_CustomValuesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_CachingTimes_CustomValuesEntry>
    ): ResourceOptions_CachingTimes_CustomValuesEntry {
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        } as ResourceOptions_CachingTimes_CustomValuesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_CachingTimes_CustomValuesEntry.$type,
    ResourceOptions_CachingTimes_CustomValuesEntry
);

const baseResourceOptions_EdgeCacheSettings: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings',
    enabled: false,
};

export const ResourceOptions_EdgeCacheSettings = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings' as const,

    encode(
        message: ResourceOptions_EdgeCacheSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== undefined) {
            ResourceOptions_CachingTimes.encode(
                message.value,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultValue !== undefined) {
            writer.uint32(24).int64(message.defaultValue);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_EdgeCacheSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        } as ResourceOptions_EdgeCacheSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = ResourceOptions_CachingTimes.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultValue = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_EdgeCacheSettings {
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        } as ResourceOptions_EdgeCacheSettings;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_CachingTimes.fromJSON(object.value);
        } else {
            message.value = undefined;
        }
        if (object.defaultValue !== undefined && object.defaultValue !== null) {
            message.defaultValue = Number(object.defaultValue);
        } else {
            message.defaultValue = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOptions_EdgeCacheSettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_CachingTimes.toJSON(message.value)
                : undefined);
        message.defaultValue !== undefined &&
            (obj.defaultValue = message.defaultValue);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_EdgeCacheSettings>
    ): ResourceOptions_EdgeCacheSettings {
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        } as ResourceOptions_EdgeCacheSettings;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_CachingTimes.fromPartial(
                object.value
            );
        } else {
            message.value = undefined;
        }
        if (object.defaultValue !== undefined && object.defaultValue !== null) {
            message.defaultValue = object.defaultValue;
        } else {
            message.defaultValue = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_EdgeCacheSettings.$type,
    ResourceOptions_EdgeCacheSettings
);

const baseResourceOptions_StringVariableMapOption: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption',
    enabled: false,
};

export const ResourceOptions_StringVariableMapOption = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption' as const,

    encode(
        message: ResourceOptions_StringVariableMapOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            ResourceOptions_StringVariableMapOption_ValueEntry.encode(
                {
                    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(18).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_StringVariableMapOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        } as ResourceOptions_StringVariableMapOption;
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 =
                        ResourceOptions_StringVariableMapOption_ValueEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry2.value !== undefined) {
                        message.value[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringVariableMapOption {
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        } as ResourceOptions_StringVariableMapOption;
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                message.value[key] =
                    ResourceOptions_StringVariableMapOption_OneofString.fromJSON(
                        value
                    );
            });
        }
        return message;
    },

    toJSON(message: ResourceOptions_StringVariableMapOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] =
                    ResourceOptions_StringVariableMapOption_OneofString.toJSON(
                        v
                    );
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringVariableMapOption>
    ): ResourceOptions_StringVariableMapOption {
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        } as ResourceOptions_StringVariableMapOption;
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.value[key] =
                        ResourceOptions_StringVariableMapOption_OneofString.fromPartial(
                            value
                        );
                }
            });
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_StringVariableMapOption.$type,
    ResourceOptions_StringVariableMapOption
);

const baseResourceOptions_StringVariableMapOption_OneofString: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString',
};

export const ResourceOptions_StringVariableMapOption_OneofString = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString' as const,

    encode(
        message: ResourceOptions_StringVariableMapOption_OneofString,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.value !== undefined) {
            ResourceOptions_StringOption.encode(
                message.value,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.values !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.values,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_StringVariableMapOption_OneofString {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        } as ResourceOptions_StringVariableMapOption_OneofString;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = ResourceOptions_StringOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.values = ResourceOptions_StringsListOption.decode(
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

    fromJSON(object: any): ResourceOptions_StringVariableMapOption_OneofString {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        } as ResourceOptions_StringVariableMapOption_OneofString;
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_StringOption.fromJSON(object.value);
        } else {
            message.value = undefined;
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = ResourceOptions_StringsListOption.fromJSON(
                object.values
            );
        } else {
            message.values = undefined;
        }
        return message;
    },

    toJSON(
        message: ResourceOptions_StringVariableMapOption_OneofString
    ): unknown {
        const obj: any = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_StringOption.toJSON(message.value)
                : undefined);
        message.values !== undefined &&
            (obj.values = message.values
                ? ResourceOptions_StringsListOption.toJSON(message.values)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringVariableMapOption_OneofString>
    ): ResourceOptions_StringVariableMapOption_OneofString {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        } as ResourceOptions_StringVariableMapOption_OneofString;
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_StringOption.fromPartial(
                object.value
            );
        } else {
            message.value = undefined;
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = ResourceOptions_StringsListOption.fromPartial(
                object.values
            );
        } else {
            message.values = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_StringVariableMapOption_OneofString.$type,
    ResourceOptions_StringVariableMapOption_OneofString
);

const baseResourceOptions_StringVariableMapOption_ValueEntry: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry',
    key: '',
};

export const ResourceOptions_StringVariableMapOption_ValueEntry = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry' as const,

    encode(
        message: ResourceOptions_StringVariableMapOption_ValueEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            ResourceOptions_StringVariableMapOption_OneofString.encode(
                message.value,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_StringVariableMapOption_ValueEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        } as ResourceOptions_StringVariableMapOption_ValueEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value =
                        ResourceOptions_StringVariableMapOption_OneofString.decode(
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

    fromJSON(object: any): ResourceOptions_StringVariableMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        } as ResourceOptions_StringVariableMapOption_ValueEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value =
                ResourceOptions_StringVariableMapOption_OneofString.fromJSON(
                    object.value
                );
        } else {
            message.value = undefined;
        }
        return message;
    },

    toJSON(
        message: ResourceOptions_StringVariableMapOption_ValueEntry
    ): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_StringVariableMapOption_OneofString.toJSON(
                      message.value
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_StringVariableMapOption_ValueEntry>
    ): ResourceOptions_StringVariableMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        } as ResourceOptions_StringVariableMapOption_ValueEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value =
                ResourceOptions_StringVariableMapOption_OneofString.fromPartial(
                    object.value
                );
        } else {
            message.value = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_StringVariableMapOption_ValueEntry.$type,
    ResourceOptions_StringVariableMapOption_ValueEntry
);

const baseResourceOptions_QueryParamsOptions: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions',
};

export const ResourceOptions_QueryParamsOptions = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions' as const,

    encode(
        message: ResourceOptions_QueryParamsOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.ignoreQueryString !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.ignoreQueryString,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.queryParamsWhitelist !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.queryParamsWhitelist,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.queryParamsBlacklist !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.queryParamsBlacklist,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_QueryParamsOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        } as ResourceOptions_QueryParamsOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ignoreQueryString =
                        ResourceOptions_BoolOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.queryParamsWhitelist =
                        ResourceOptions_StringsListOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.queryParamsBlacklist =
                        ResourceOptions_StringsListOption.decode(
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

    fromJSON(object: any): ResourceOptions_QueryParamsOptions {
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        } as ResourceOptions_QueryParamsOptions;
        if (
            object.ignoreQueryString !== undefined &&
            object.ignoreQueryString !== null
        ) {
            message.ignoreQueryString = ResourceOptions_BoolOption.fromJSON(
                object.ignoreQueryString
            );
        } else {
            message.ignoreQueryString = undefined;
        }
        if (
            object.queryParamsWhitelist !== undefined &&
            object.queryParamsWhitelist !== null
        ) {
            message.queryParamsWhitelist =
                ResourceOptions_StringsListOption.fromJSON(
                    object.queryParamsWhitelist
                );
        } else {
            message.queryParamsWhitelist = undefined;
        }
        if (
            object.queryParamsBlacklist !== undefined &&
            object.queryParamsBlacklist !== null
        ) {
            message.queryParamsBlacklist =
                ResourceOptions_StringsListOption.fromJSON(
                    object.queryParamsBlacklist
                );
        } else {
            message.queryParamsBlacklist = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOptions_QueryParamsOptions): unknown {
        const obj: any = {};
        message.ignoreQueryString !== undefined &&
            (obj.ignoreQueryString = message.ignoreQueryString
                ? ResourceOptions_BoolOption.toJSON(message.ignoreQueryString)
                : undefined);
        message.queryParamsWhitelist !== undefined &&
            (obj.queryParamsWhitelist = message.queryParamsWhitelist
                ? ResourceOptions_StringsListOption.toJSON(
                      message.queryParamsWhitelist
                  )
                : undefined);
        message.queryParamsBlacklist !== undefined &&
            (obj.queryParamsBlacklist = message.queryParamsBlacklist
                ? ResourceOptions_StringsListOption.toJSON(
                      message.queryParamsBlacklist
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_QueryParamsOptions>
    ): ResourceOptions_QueryParamsOptions {
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        } as ResourceOptions_QueryParamsOptions;
        if (
            object.ignoreQueryString !== undefined &&
            object.ignoreQueryString !== null
        ) {
            message.ignoreQueryString = ResourceOptions_BoolOption.fromPartial(
                object.ignoreQueryString
            );
        } else {
            message.ignoreQueryString = undefined;
        }
        if (
            object.queryParamsWhitelist !== undefined &&
            object.queryParamsWhitelist !== null
        ) {
            message.queryParamsWhitelist =
                ResourceOptions_StringsListOption.fromPartial(
                    object.queryParamsWhitelist
                );
        } else {
            message.queryParamsWhitelist = undefined;
        }
        if (
            object.queryParamsBlacklist !== undefined &&
            object.queryParamsBlacklist !== null
        ) {
            message.queryParamsBlacklist =
                ResourceOptions_StringsListOption.fromPartial(
                    object.queryParamsBlacklist
                );
        } else {
            message.queryParamsBlacklist = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_QueryParamsOptions.$type,
    ResourceOptions_QueryParamsOptions
);

const baseResourceOptions_RedirectOptions: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions',
};

export const ResourceOptions_RedirectOptions = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions' as const,

    encode(
        message: ResourceOptions_RedirectOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.redirectHttpToHttps !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.redirectHttpToHttps,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.redirectHttpsToHttp !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.redirectHttpsToHttp,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_RedirectOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_RedirectOptions,
        } as ResourceOptions_RedirectOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redirectHttpToHttps =
                        ResourceOptions_BoolOption.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.redirectHttpsToHttp =
                        ResourceOptions_BoolOption.decode(
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

    fromJSON(object: any): ResourceOptions_RedirectOptions {
        const message = {
            ...baseResourceOptions_RedirectOptions,
        } as ResourceOptions_RedirectOptions;
        if (
            object.redirectHttpToHttps !== undefined &&
            object.redirectHttpToHttps !== null
        ) {
            message.redirectHttpToHttps = ResourceOptions_BoolOption.fromJSON(
                object.redirectHttpToHttps
            );
        } else {
            message.redirectHttpToHttps = undefined;
        }
        if (
            object.redirectHttpsToHttp !== undefined &&
            object.redirectHttpsToHttp !== null
        ) {
            message.redirectHttpsToHttp = ResourceOptions_BoolOption.fromJSON(
                object.redirectHttpsToHttp
            );
        } else {
            message.redirectHttpsToHttp = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOptions_RedirectOptions): unknown {
        const obj: any = {};
        message.redirectHttpToHttps !== undefined &&
            (obj.redirectHttpToHttps = message.redirectHttpToHttps
                ? ResourceOptions_BoolOption.toJSON(message.redirectHttpToHttps)
                : undefined);
        message.redirectHttpsToHttp !== undefined &&
            (obj.redirectHttpsToHttp = message.redirectHttpsToHttp
                ? ResourceOptions_BoolOption.toJSON(message.redirectHttpsToHttp)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_RedirectOptions>
    ): ResourceOptions_RedirectOptions {
        const message = {
            ...baseResourceOptions_RedirectOptions,
        } as ResourceOptions_RedirectOptions;
        if (
            object.redirectHttpToHttps !== undefined &&
            object.redirectHttpToHttps !== null
        ) {
            message.redirectHttpToHttps =
                ResourceOptions_BoolOption.fromPartial(
                    object.redirectHttpToHttps
                );
        } else {
            message.redirectHttpToHttps = undefined;
        }
        if (
            object.redirectHttpsToHttp !== undefined &&
            object.redirectHttpsToHttp !== null
        ) {
            message.redirectHttpsToHttp =
                ResourceOptions_BoolOption.fromPartial(
                    object.redirectHttpsToHttp
                );
        } else {
            message.redirectHttpsToHttp = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_RedirectOptions.$type,
    ResourceOptions_RedirectOptions
);

const baseResourceOptions_HostOptions: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.HostOptions',
};

export const ResourceOptions_HostOptions = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.HostOptions' as const,

    encode(
        message: ResourceOptions_HostOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.host !== undefined) {
            ResourceOptions_StringOption.encode(
                message.host,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.forwardHostHeader !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.forwardHostHeader,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_HostOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_HostOptions,
        } as ResourceOptions_HostOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = ResourceOptions_StringOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.forwardHostHeader =
                        ResourceOptions_BoolOption.decode(
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

    fromJSON(object: any): ResourceOptions_HostOptions {
        const message = {
            ...baseResourceOptions_HostOptions,
        } as ResourceOptions_HostOptions;
        if (object.host !== undefined && object.host !== null) {
            message.host = ResourceOptions_StringOption.fromJSON(object.host);
        } else {
            message.host = undefined;
        }
        if (
            object.forwardHostHeader !== undefined &&
            object.forwardHostHeader !== null
        ) {
            message.forwardHostHeader = ResourceOptions_BoolOption.fromJSON(
                object.forwardHostHeader
            );
        } else {
            message.forwardHostHeader = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOptions_HostOptions): unknown {
        const obj: any = {};
        message.host !== undefined &&
            (obj.host = message.host
                ? ResourceOptions_StringOption.toJSON(message.host)
                : undefined);
        message.forwardHostHeader !== undefined &&
            (obj.forwardHostHeader = message.forwardHostHeader
                ? ResourceOptions_BoolOption.toJSON(message.forwardHostHeader)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_HostOptions>
    ): ResourceOptions_HostOptions {
        const message = {
            ...baseResourceOptions_HostOptions,
        } as ResourceOptions_HostOptions;
        if (object.host !== undefined && object.host !== null) {
            message.host = ResourceOptions_StringOption.fromPartial(
                object.host
            );
        } else {
            message.host = undefined;
        }
        if (
            object.forwardHostHeader !== undefined &&
            object.forwardHostHeader !== null
        ) {
            message.forwardHostHeader = ResourceOptions_BoolOption.fromPartial(
                object.forwardHostHeader
            );
        } else {
            message.forwardHostHeader = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_HostOptions.$type,
    ResourceOptions_HostOptions
);

const baseResourceOptions_CompressionOptions: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions',
};

export const ResourceOptions_CompressionOptions = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions' as const,

    encode(
        message: ResourceOptions_CompressionOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.fetchCompressed !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.fetchCompressed,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.gzipOn !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.gzipOn,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.brotliCompression !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.brotliCompression,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_CompressionOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CompressionOptions,
        } as ResourceOptions_CompressionOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fetchCompressed = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.gzipOn = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.brotliCompression =
                        ResourceOptions_StringsListOption.decode(
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

    fromJSON(object: any): ResourceOptions_CompressionOptions {
        const message = {
            ...baseResourceOptions_CompressionOptions,
        } as ResourceOptions_CompressionOptions;
        if (
            object.fetchCompressed !== undefined &&
            object.fetchCompressed !== null
        ) {
            message.fetchCompressed = ResourceOptions_BoolOption.fromJSON(
                object.fetchCompressed
            );
        } else {
            message.fetchCompressed = undefined;
        }
        if (object.gzipOn !== undefined && object.gzipOn !== null) {
            message.gzipOn = ResourceOptions_BoolOption.fromJSON(object.gzipOn);
        } else {
            message.gzipOn = undefined;
        }
        if (
            object.brotliCompression !== undefined &&
            object.brotliCompression !== null
        ) {
            message.brotliCompression =
                ResourceOptions_StringsListOption.fromJSON(
                    object.brotliCompression
                );
        } else {
            message.brotliCompression = undefined;
        }
        return message;
    },

    toJSON(message: ResourceOptions_CompressionOptions): unknown {
        const obj: any = {};
        message.fetchCompressed !== undefined &&
            (obj.fetchCompressed = message.fetchCompressed
                ? ResourceOptions_BoolOption.toJSON(message.fetchCompressed)
                : undefined);
        message.gzipOn !== undefined &&
            (obj.gzipOn = message.gzipOn
                ? ResourceOptions_BoolOption.toJSON(message.gzipOn)
                : undefined);
        message.brotliCompression !== undefined &&
            (obj.brotliCompression = message.brotliCompression
                ? ResourceOptions_StringsListOption.toJSON(
                      message.brotliCompression
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_CompressionOptions>
    ): ResourceOptions_CompressionOptions {
        const message = {
            ...baseResourceOptions_CompressionOptions,
        } as ResourceOptions_CompressionOptions;
        if (
            object.fetchCompressed !== undefined &&
            object.fetchCompressed !== null
        ) {
            message.fetchCompressed = ResourceOptions_BoolOption.fromPartial(
                object.fetchCompressed
            );
        } else {
            message.fetchCompressed = undefined;
        }
        if (object.gzipOn !== undefined && object.gzipOn !== null) {
            message.gzipOn = ResourceOptions_BoolOption.fromPartial(
                object.gzipOn
            );
        } else {
            message.gzipOn = undefined;
        }
        if (
            object.brotliCompression !== undefined &&
            object.brotliCompression !== null
        ) {
            message.brotliCompression =
                ResourceOptions_StringsListOption.fromPartial(
                    object.brotliCompression
                );
        } else {
            message.brotliCompression = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_CompressionOptions.$type,
    ResourceOptions_CompressionOptions
);

const baseResourceOptions_RewriteOption: object = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.RewriteOption',
    enabled: false,
    body: '',
    flag: 0,
};

export const ResourceOptions_RewriteOption = {
    $type: 'yandex.cloud.cdn.v1.ResourceOptions.RewriteOption' as const,

    encode(
        message: ResourceOptions_RewriteOption,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.body !== '') {
            writer.uint32(18).string(message.body);
        }
        if (message.flag !== 0) {
            writer.uint32(24).int32(message.flag);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResourceOptions_RewriteOption {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_RewriteOption,
        } as ResourceOptions_RewriteOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                case 3:
                    message.flag = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_RewriteOption {
        const message = {
            ...baseResourceOptions_RewriteOption,
        } as ResourceOptions_RewriteOption;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body);
        } else {
            message.body = '';
        }
        if (object.flag !== undefined && object.flag !== null) {
            message.flag = rewriteFlagFromJSON(object.flag);
        } else {
            message.flag = 0;
        }
        return message;
    },

    toJSON(message: ResourceOptions_RewriteOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.body !== undefined && (obj.body = message.body);
        message.flag !== undefined &&
            (obj.flag = rewriteFlagToJSON(message.flag));
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResourceOptions_RewriteOption>
    ): ResourceOptions_RewriteOption {
        const message = {
            ...baseResourceOptions_RewriteOption,
        } as ResourceOptions_RewriteOption;
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        } else {
            message.body = '';
        }
        if (object.flag !== undefined && object.flag !== null) {
            message.flag = object.flag;
        } else {
            message.flag = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ResourceOptions_RewriteOption.$type,
    ResourceOptions_RewriteOption
);

const baseSSLTargetCertificate: object = {
    $type: 'yandex.cloud.cdn.v1.SSLTargetCertificate',
    type: 0,
};

export const SSLTargetCertificate = {
    $type: 'yandex.cloud.cdn.v1.SSLTargetCertificate' as const,

    encode(
        message: SSLTargetCertificate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.data !== undefined) {
            SSLCertificateData.encode(
                message.data,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SSLTargetCertificate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLTargetCertificate } as SSLTargetCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.data = SSLCertificateData.decode(
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

    fromJSON(object: any): SSLTargetCertificate {
        const message = { ...baseSSLTargetCertificate } as SSLTargetCertificate;
        if (object.type !== undefined && object.type !== null) {
            message.type = sSLCertificateTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromJSON(object.data);
        } else {
            message.data = undefined;
        }
        return message;
    },

    toJSON(message: SSLTargetCertificate): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = sSLCertificateTypeToJSON(message.type));
        message.data !== undefined &&
            (obj.data = message.data
                ? SSLCertificateData.toJSON(message.data)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SSLTargetCertificate>
    ): SSLTargetCertificate {
        const message = { ...baseSSLTargetCertificate } as SSLTargetCertificate;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromPartial(object.data);
        } else {
            message.data = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(SSLTargetCertificate.$type, SSLTargetCertificate);

const baseSSLCertificate: object = {
    $type: 'yandex.cloud.cdn.v1.SSLCertificate',
    type: 0,
    status: 0,
};

export const SSLCertificate = {
    $type: 'yandex.cloud.cdn.v1.SSLCertificate' as const,

    encode(
        message: SSLCertificate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.data !== undefined) {
            SSLCertificateData.encode(
                message.data,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificate } as SSLCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.data = SSLCertificateData.decode(
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

    fromJSON(object: any): SSLCertificate {
        const message = { ...baseSSLCertificate } as SSLCertificate;
        if (object.type !== undefined && object.type !== null) {
            message.type = sSLCertificateTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = sSLCertificateStatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromJSON(object.data);
        } else {
            message.data = undefined;
        }
        return message;
    },

    toJSON(message: SSLCertificate): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = sSLCertificateTypeToJSON(message.type));
        message.status !== undefined &&
            (obj.status = sSLCertificateStatusToJSON(message.status));
        message.data !== undefined &&
            (obj.data = message.data
                ? SSLCertificateData.toJSON(message.data)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<SSLCertificate>): SSLCertificate {
        const message = { ...baseSSLCertificate } as SSLCertificate;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromPartial(object.data);
        } else {
            message.data = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(SSLCertificate.$type, SSLCertificate);

const baseSSLCertificateData: object = {
    $type: 'yandex.cloud.cdn.v1.SSLCertificateData',
};

export const SSLCertificateData = {
    $type: 'yandex.cloud.cdn.v1.SSLCertificateData' as const,

    encode(
        message: SSLCertificateData,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cm !== undefined) {
            SSLCertificateCMData.encode(
                message.cm,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SSLCertificateData {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificateData } as SSLCertificateData;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cm = SSLCertificateCMData.decode(
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

    fromJSON(object: any): SSLCertificateData {
        const message = { ...baseSSLCertificateData } as SSLCertificateData;
        if (object.cm !== undefined && object.cm !== null) {
            message.cm = SSLCertificateCMData.fromJSON(object.cm);
        } else {
            message.cm = undefined;
        }
        return message;
    },

    toJSON(message: SSLCertificateData): unknown {
        const obj: any = {};
        message.cm !== undefined &&
            (obj.cm = message.cm
                ? SSLCertificateCMData.toJSON(message.cm)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<SSLCertificateData>): SSLCertificateData {
        const message = { ...baseSSLCertificateData } as SSLCertificateData;
        if (object.cm !== undefined && object.cm !== null) {
            message.cm = SSLCertificateCMData.fromPartial(object.cm);
        } else {
            message.cm = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(SSLCertificateData.$type, SSLCertificateData);

const baseSSLCertificateCMData: object = {
    $type: 'yandex.cloud.cdn.v1.SSLCertificateCMData',
    id: '',
};

export const SSLCertificateCMData = {
    $type: 'yandex.cloud.cdn.v1.SSLCertificateCMData' as const,

    encode(
        message: SSLCertificateCMData,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SSLCertificateCMData {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificateCMData } as SSLCertificateCMData;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SSLCertificateCMData {
        const message = { ...baseSSLCertificateCMData } as SSLCertificateCMData;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        return message;
    },

    toJSON(message: SSLCertificateCMData): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SSLCertificateCMData>
    ): SSLCertificateCMData {
        const message = { ...baseSSLCertificateCMData } as SSLCertificateCMData;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        return message;
    },
};

messageTypeRegistry.set(SSLCertificateCMData.$type, SSLCertificateCMData);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
