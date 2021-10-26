import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
export declare enum OriginProtocol {
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
    UNRECOGNIZED = -1
}
export declare function originProtocolFromJSON(object: any): OriginProtocol;
export declare function originProtocolToJSON(object: OriginProtocol): string;
/** RewriteFlag defines flag for the Rewrite option. */
export declare enum RewriteFlag {
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
    UNRECOGNIZED = -1
}
export declare function rewriteFlagFromJSON(object: any): RewriteFlag;
export declare function rewriteFlagToJSON(object: RewriteFlag): string;
/** A certificate type patameters. */
export declare enum SSLCertificateType {
    /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
    DONT_USE = 1,
    /** LETS_ENCRYPT_GCORE - Works only if you have already pointed your domain name to the protected IP address in your DNS */
    LETS_ENCRYPT_GCORE = 2,
    /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key */
    CM = 3,
    UNRECOGNIZED = -1
}
export declare function sSLCertificateTypeFromJSON(object: any): SSLCertificateType;
export declare function sSLCertificateTypeToJSON(object: SSLCertificateType): string;
/** A certificate status patameters. */
export declare enum SSLCertificateStatus {
    /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_STATUS_UNSPECIFIED = 0,
    /** READY - SSL certificate is ready to use. */
    READY = 1,
    /** CREATING - SSL certificate is creating. */
    CREATING = 2,
    UNRECOGNIZED = -1
}
export declare function sSLCertificateStatusFromJSON(object: any): SSLCertificateStatus;
export declare function sSLCertificateStatusToJSON(object: SSLCertificateStatus): string;
/** List of secondary (alternative) CNAMEs. */
export interface SecondaryHostnames {
    /** List of secondary hostname values. */
    values: string[];
}
/** A CDN resource - representation of providers resource. */
export interface Resource {
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
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: {
        [key: string]: string;
    };
}
export interface ResourceOptions_StringsMapOption_ValueEntry {
    key: string;
    value: string;
}
/** A set of the caching response time parameters. */
export interface ResourceOptions_CachingTimes {
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
    customValues: {
        [key: string]: number;
    };
}
export interface ResourceOptions_CachingTimes_CustomValuesEntry {
    key: string;
    value: number;
}
/** A set of the edge cache parameters. */
export interface ResourceOptions_EdgeCacheSettings {
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
    /** Using [StringOption] to set value. */
    value: ResourceOptions_StringOption | undefined;
    /** Using [StringsListOption] to set values. */
    values: ResourceOptions_StringsListOption | undefined;
}
export interface ResourceOptions_StringVariableMapOption_ValueEntry {
    key: string;
    value: ResourceOptions_StringVariableMapOption_OneofString | undefined;
}
/** A set of the query parameters. */
export interface ResourceOptions_QueryParamsOptions {
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
    /** Using [BoolOption]. Set up a redirect from HTTPS to HTTP. */
    redirectHttpToHttps: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. Set up a redirect from HTTP to HTTPS. */
    redirectHttpsToHttp: ResourceOptions_BoolOption | undefined;
}
/** A set of the host parameters. */
export interface ResourceOptions_HostOptions {
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
    /** Type of the sertificate. */
    type: SSLCertificateType;
    /** Certificate data. */
    data: SSLCertificateData | undefined;
}
/** A SSL sertificate patameters. */
export interface SSLCertificate {
    /** Type of the sertificate. */
    type: SSLCertificateType;
    /** Active status. */
    status: SSLCertificateStatus;
    /** Certificate data. */
    data: SSLCertificateData | undefined;
}
/** A certificate data patameters. */
export interface SSLCertificateData {
    /**
     * Custom (add your SSL certificate by uploading the certificate
     * in PEM format and your private key).
     */
    cm: SSLCertificateCMData | undefined;
}
/** A certificate data custom patameters. */
export interface SSLCertificateCMData {
    /** ID of the custom sertificate. */
    id: string;
}
export declare const SecondaryHostnames: {
    encode(message: SecondaryHostnames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecondaryHostnames;
    fromJSON(object: any): SecondaryHostnames;
    toJSON(message: SecondaryHostnames): unknown;
    fromPartial(object: DeepPartial<SecondaryHostnames>): SecondaryHostnames;
};
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial(object: DeepPartial<Resource>): Resource;
};
export declare const ResourceOptions: {
    encode(message: ResourceOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions;
    fromJSON(object: any): ResourceOptions;
    toJSON(message: ResourceOptions): unknown;
    fromPartial(object: DeepPartial<ResourceOptions>): ResourceOptions;
};
export declare const ResourceOptions_BoolOption: {
    encode(message: ResourceOptions_BoolOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_BoolOption;
    fromJSON(object: any): ResourceOptions_BoolOption;
    toJSON(message: ResourceOptions_BoolOption): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_BoolOption>): ResourceOptions_BoolOption;
};
export declare const ResourceOptions_StringOption: {
    encode(message: ResourceOptions_StringOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringOption;
    fromJSON(object: any): ResourceOptions_StringOption;
    toJSON(message: ResourceOptions_StringOption): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringOption>): ResourceOptions_StringOption;
};
export declare const ResourceOptions_Int64Option: {
    encode(message: ResourceOptions_Int64Option, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_Int64Option;
    fromJSON(object: any): ResourceOptions_Int64Option;
    toJSON(message: ResourceOptions_Int64Option): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_Int64Option>): ResourceOptions_Int64Option;
};
export declare const ResourceOptions_StringsListOption: {
    encode(message: ResourceOptions_StringsListOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringsListOption;
    fromJSON(object: any): ResourceOptions_StringsListOption;
    toJSON(message: ResourceOptions_StringsListOption): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringsListOption>): ResourceOptions_StringsListOption;
};
export declare const ResourceOptions_StringsMapOption: {
    encode(message: ResourceOptions_StringsMapOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringsMapOption;
    fromJSON(object: any): ResourceOptions_StringsMapOption;
    toJSON(message: ResourceOptions_StringsMapOption): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringsMapOption>): ResourceOptions_StringsMapOption;
};
export declare const ResourceOptions_StringsMapOption_ValueEntry: {
    encode(message: ResourceOptions_StringsMapOption_ValueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringsMapOption_ValueEntry;
    fromJSON(object: any): ResourceOptions_StringsMapOption_ValueEntry;
    toJSON(message: ResourceOptions_StringsMapOption_ValueEntry): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringsMapOption_ValueEntry>): ResourceOptions_StringsMapOption_ValueEntry;
};
export declare const ResourceOptions_CachingTimes: {
    encode(message: ResourceOptions_CachingTimes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_CachingTimes;
    fromJSON(object: any): ResourceOptions_CachingTimes;
    toJSON(message: ResourceOptions_CachingTimes): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_CachingTimes>): ResourceOptions_CachingTimes;
};
export declare const ResourceOptions_CachingTimes_CustomValuesEntry: {
    encode(message: ResourceOptions_CachingTimes_CustomValuesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_CachingTimes_CustomValuesEntry;
    fromJSON(object: any): ResourceOptions_CachingTimes_CustomValuesEntry;
    toJSON(message: ResourceOptions_CachingTimes_CustomValuesEntry): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_CachingTimes_CustomValuesEntry>): ResourceOptions_CachingTimes_CustomValuesEntry;
};
export declare const ResourceOptions_EdgeCacheSettings: {
    encode(message: ResourceOptions_EdgeCacheSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_EdgeCacheSettings;
    fromJSON(object: any): ResourceOptions_EdgeCacheSettings;
    toJSON(message: ResourceOptions_EdgeCacheSettings): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_EdgeCacheSettings>): ResourceOptions_EdgeCacheSettings;
};
export declare const ResourceOptions_StringVariableMapOption: {
    encode(message: ResourceOptions_StringVariableMapOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringVariableMapOption;
    fromJSON(object: any): ResourceOptions_StringVariableMapOption;
    toJSON(message: ResourceOptions_StringVariableMapOption): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringVariableMapOption>): ResourceOptions_StringVariableMapOption;
};
export declare const ResourceOptions_StringVariableMapOption_OneofString: {
    encode(message: ResourceOptions_StringVariableMapOption_OneofString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringVariableMapOption_OneofString;
    fromJSON(object: any): ResourceOptions_StringVariableMapOption_OneofString;
    toJSON(message: ResourceOptions_StringVariableMapOption_OneofString): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringVariableMapOption_OneofString>): ResourceOptions_StringVariableMapOption_OneofString;
};
export declare const ResourceOptions_StringVariableMapOption_ValueEntry: {
    encode(message: ResourceOptions_StringVariableMapOption_ValueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringVariableMapOption_ValueEntry;
    fromJSON(object: any): ResourceOptions_StringVariableMapOption_ValueEntry;
    toJSON(message: ResourceOptions_StringVariableMapOption_ValueEntry): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_StringVariableMapOption_ValueEntry>): ResourceOptions_StringVariableMapOption_ValueEntry;
};
export declare const ResourceOptions_QueryParamsOptions: {
    encode(message: ResourceOptions_QueryParamsOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_QueryParamsOptions;
    fromJSON(object: any): ResourceOptions_QueryParamsOptions;
    toJSON(message: ResourceOptions_QueryParamsOptions): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_QueryParamsOptions>): ResourceOptions_QueryParamsOptions;
};
export declare const ResourceOptions_RedirectOptions: {
    encode(message: ResourceOptions_RedirectOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_RedirectOptions;
    fromJSON(object: any): ResourceOptions_RedirectOptions;
    toJSON(message: ResourceOptions_RedirectOptions): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_RedirectOptions>): ResourceOptions_RedirectOptions;
};
export declare const ResourceOptions_HostOptions: {
    encode(message: ResourceOptions_HostOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_HostOptions;
    fromJSON(object: any): ResourceOptions_HostOptions;
    toJSON(message: ResourceOptions_HostOptions): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_HostOptions>): ResourceOptions_HostOptions;
};
export declare const ResourceOptions_CompressionOptions: {
    encode(message: ResourceOptions_CompressionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_CompressionOptions;
    fromJSON(object: any): ResourceOptions_CompressionOptions;
    toJSON(message: ResourceOptions_CompressionOptions): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_CompressionOptions>): ResourceOptions_CompressionOptions;
};
export declare const ResourceOptions_RewriteOption: {
    encode(message: ResourceOptions_RewriteOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_RewriteOption;
    fromJSON(object: any): ResourceOptions_RewriteOption;
    toJSON(message: ResourceOptions_RewriteOption): unknown;
    fromPartial(object: DeepPartial<ResourceOptions_RewriteOption>): ResourceOptions_RewriteOption;
};
export declare const SSLTargetCertificate: {
    encode(message: SSLTargetCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLTargetCertificate;
    fromJSON(object: any): SSLTargetCertificate;
    toJSON(message: SSLTargetCertificate): unknown;
    fromPartial(object: DeepPartial<SSLTargetCertificate>): SSLTargetCertificate;
};
export declare const SSLCertificate: {
    encode(message: SSLCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLCertificate;
    fromJSON(object: any): SSLCertificate;
    toJSON(message: SSLCertificate): unknown;
    fromPartial(object: DeepPartial<SSLCertificate>): SSLCertificate;
};
export declare const SSLCertificateData: {
    encode(message: SSLCertificateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLCertificateData;
    fromJSON(object: any): SSLCertificateData;
    toJSON(message: SSLCertificateData): unknown;
    fromPartial(object: DeepPartial<SSLCertificateData>): SSLCertificateData;
};
export declare const SSLCertificateCMData: {
    encode(message: SSLCertificateCMData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLCertificateCMData;
    fromJSON(object: any): SSLCertificateCMData;
    toJSON(message: SSLCertificateCMData): unknown;
    fromPartial(object: DeepPartial<SSLCertificateCMData>): SSLCertificateCMData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
