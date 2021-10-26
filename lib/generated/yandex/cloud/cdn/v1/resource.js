/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.cdn.v1';
/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
export var OriginProtocol;
(function (OriginProtocol) {
    OriginProtocol[OriginProtocol["ORIGIN_PROTOCOL_UNSPECIFIED"] = 0] = "ORIGIN_PROTOCOL_UNSPECIFIED";
    /** HTTP - CDN servers will connect to your origin via HTTP. */
    OriginProtocol[OriginProtocol["HTTP"] = 1] = "HTTP";
    /** HTTPS - CDN servers will connect to your origin via HTTPS. */
    OriginProtocol[OriginProtocol["HTTPS"] = 2] = "HTTPS";
    /**
     * MATCH - Connection protocol will be chosen automatically (content on the
     * origin source should be available for the CDN both through HTTP and HTTPS).
     */
    OriginProtocol[OriginProtocol["MATCH"] = 3] = "MATCH";
    OriginProtocol[OriginProtocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OriginProtocol || (OriginProtocol = {}));
export function originProtocolFromJSON(object) {
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
export function originProtocolToJSON(object) {
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
export var RewriteFlag;
(function (RewriteFlag) {
    RewriteFlag[RewriteFlag["REWRITE_FLAG_UNSPECIFIED"] = 0] = "REWRITE_FLAG_UNSPECIFIED";
    /**
     * LAST - Stops processing of the current set of ngx_http_rewrite_module directives and
     * starts a search for a new location matching changed URI.
     */
    RewriteFlag[RewriteFlag["LAST"] = 1] = "LAST";
    /** BREAK - Stops processing of the current set of the Rewrite option. */
    RewriteFlag[RewriteFlag["BREAK"] = 2] = "BREAK";
    /**
     * REDIRECT - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start
     * with "http://", "https://", or "$scheme".
     */
    RewriteFlag[RewriteFlag["REDIRECT"] = 3] = "REDIRECT";
    /** PERMANENT - Returns a permanent redirect with the 301 code. */
    RewriteFlag[RewriteFlag["PERMANENT"] = 4] = "PERMANENT";
    RewriteFlag[RewriteFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RewriteFlag || (RewriteFlag = {}));
export function rewriteFlagFromJSON(object) {
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
export function rewriteFlagToJSON(object) {
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
export var SSLCertificateType;
(function (SSLCertificateType) {
    /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
    SSLCertificateType[SSLCertificateType["SSL_CERTIFICATE_TYPE_UNSPECIFIED"] = 0] = "SSL_CERTIFICATE_TYPE_UNSPECIFIED";
    /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
    SSLCertificateType[SSLCertificateType["DONT_USE"] = 1] = "DONT_USE";
    /** LETS_ENCRYPT_GCORE - Works only if you have already pointed your domain name to the protected IP address in your DNS */
    SSLCertificateType[SSLCertificateType["LETS_ENCRYPT_GCORE"] = 2] = "LETS_ENCRYPT_GCORE";
    /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key */
    SSLCertificateType[SSLCertificateType["CM"] = 3] = "CM";
    SSLCertificateType[SSLCertificateType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SSLCertificateType || (SSLCertificateType = {}));
export function sSLCertificateTypeFromJSON(object) {
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
export function sSLCertificateTypeToJSON(object) {
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
export var SSLCertificateStatus;
(function (SSLCertificateStatus) {
    /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
    SSLCertificateStatus[SSLCertificateStatus["SSL_CERTIFICATE_STATUS_UNSPECIFIED"] = 0] = "SSL_CERTIFICATE_STATUS_UNSPECIFIED";
    /** READY - SSL certificate is ready to use. */
    SSLCertificateStatus[SSLCertificateStatus["READY"] = 1] = "READY";
    /** CREATING - SSL certificate is creating. */
    SSLCertificateStatus[SSLCertificateStatus["CREATING"] = 2] = "CREATING";
    SSLCertificateStatus[SSLCertificateStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SSLCertificateStatus || (SSLCertificateStatus = {}));
export function sSLCertificateStatusFromJSON(object) {
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
export function sSLCertificateStatusToJSON(object) {
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
const baseSecondaryHostnames = { values: '' };
export const SecondaryHostnames = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecondaryHostnames };
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
    fromJSON(object) {
        const message = { ...baseSecondaryHostnames };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecondaryHostnames };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};
const baseResource = {
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
    encode(message, writer = _m0.Writer.create()) {
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
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.active === true) {
            writer.uint32(48).bool(message.active);
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.secondaryHostnames) {
            writer.uint32(66).string(v);
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
            SSLCertificate.encode(message.sslCertificate, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResource };
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                case 7:
                    message.options = ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.secondaryHostnames.push(reader.string());
                    break;
                case 9:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 10:
                    message.originGroupName = reader.string();
                    break;
                case 11:
                    message.originProtocol = reader.int32();
                    break;
                case 12:
                    message.sslCertificate = SSLCertificate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResource };
        message.secondaryHostnames = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = String(object.cname);
        }
        else {
            message.cname = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = fromJsonTimestamp(object.updatedAt);
        }
        else {
            message.updatedAt = undefined;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        }
        else {
            message.active = false;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            for (const e of object.secondaryHostnames) {
                message.secondaryHostnames.push(String(e));
            }
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        if (object.originGroupName !== undefined &&
            object.originGroupName !== null) {
            message.originGroupName = String(object.originGroupName);
        }
        else {
            message.originGroupName = '';
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = originProtocolFromJSON(object.originProtocol);
        }
        else {
            message.originProtocol = 0;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = SSLCertificate.fromJSON(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
        }
        else {
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
    fromPartial(object) {
        const message = { ...baseResource };
        message.secondaryHostnames = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = object.cname;
        }
        else {
            message.cname = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = object.updatedAt;
        }
        else {
            message.updatedAt = undefined;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        }
        else {
            message.active = false;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            for (const e of object.secondaryHostnames) {
                message.secondaryHostnames.push(e);
            }
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        if (object.originGroupName !== undefined &&
            object.originGroupName !== null) {
            message.originGroupName = object.originGroupName;
        }
        else {
            message.originGroupName = '';
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = object.originProtocol;
        }
        else {
            message.originProtocol = 0;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = SSLCertificate.fromPartial(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};
const baseResourceOptions = {};
export const ResourceOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.disableCache !== undefined) {
            ResourceOptions_BoolOption.encode(message.disableCache, writer.uint32(10).fork()).ldelim();
        }
        if (message.edgeCacheSettings !== undefined) {
            ResourceOptions_EdgeCacheSettings.encode(message.edgeCacheSettings, writer.uint32(18).fork()).ldelim();
        }
        if (message.browserCacheSettings !== undefined) {
            ResourceOptions_Int64Option.encode(message.browserCacheSettings, writer.uint32(26).fork()).ldelim();
        }
        if (message.cacheHttpHeaders !== undefined) {
            ResourceOptions_StringsListOption.encode(message.cacheHttpHeaders, writer.uint32(34).fork()).ldelim();
        }
        if (message.queryParamsOptions !== undefined) {
            ResourceOptions_QueryParamsOptions.encode(message.queryParamsOptions, writer.uint32(42).fork()).ldelim();
        }
        if (message.slice !== undefined) {
            ResourceOptions_BoolOption.encode(message.slice, writer.uint32(50).fork()).ldelim();
        }
        if (message.compressionOptions !== undefined) {
            ResourceOptions_CompressionOptions.encode(message.compressionOptions, writer.uint32(58).fork()).ldelim();
        }
        if (message.redirectOptions !== undefined) {
            ResourceOptions_RedirectOptions.encode(message.redirectOptions, writer.uint32(66).fork()).ldelim();
        }
        if (message.hostOptions !== undefined) {
            ResourceOptions_HostOptions.encode(message.hostOptions, writer.uint32(74).fork()).ldelim();
        }
        if (message.staticHeaders !== undefined) {
            ResourceOptions_StringsMapOption.encode(message.staticHeaders, writer.uint32(82).fork()).ldelim();
        }
        if (message.cors !== undefined) {
            ResourceOptions_StringsListOption.encode(message.cors, writer.uint32(90).fork()).ldelim();
        }
        if (message.stale !== undefined) {
            ResourceOptions_StringsListOption.encode(message.stale, writer.uint32(98).fork()).ldelim();
        }
        if (message.allowedHttpMethods !== undefined) {
            ResourceOptions_StringsListOption.encode(message.allowedHttpMethods, writer.uint32(106).fork()).ldelim();
        }
        if (message.proxyCacheMethodsSet !== undefined) {
            ResourceOptions_BoolOption.encode(message.proxyCacheMethodsSet, writer.uint32(114).fork()).ldelim();
        }
        if (message.disableProxyForceRanges !== undefined) {
            ResourceOptions_BoolOption.encode(message.disableProxyForceRanges, writer.uint32(122).fork()).ldelim();
        }
        if (message.staticRequestHeaders !== undefined) {
            ResourceOptions_StringsMapOption.encode(message.staticRequestHeaders, writer.uint32(130).fork()).ldelim();
        }
        if (message.customServerName !== undefined) {
            ResourceOptions_StringOption.encode(message.customServerName, writer.uint32(138).fork()).ldelim();
        }
        if (message.ignoreCookie !== undefined) {
            ResourceOptions_BoolOption.encode(message.ignoreCookie, writer.uint32(146).fork()).ldelim();
        }
        if (message.rewrite !== undefined) {
            ResourceOptions_RewriteOption.encode(message.rewrite, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disableCache = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.edgeCacheSettings =
                        ResourceOptions_EdgeCacheSettings.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.browserCacheSettings =
                        ResourceOptions_Int64Option.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cacheHttpHeaders =
                        ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryParamsOptions =
                        ResourceOptions_QueryParamsOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.slice = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.compressionOptions =
                        ResourceOptions_CompressionOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.redirectOptions =
                        ResourceOptions_RedirectOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.hostOptions = ResourceOptions_HostOptions.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.staticHeaders =
                        ResourceOptions_StringsMapOption.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.cors = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.stale = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.allowedHttpMethods =
                        ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.proxyCacheMethodsSet =
                        ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.disableProxyForceRanges =
                        ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.staticRequestHeaders =
                        ResourceOptions_StringsMapOption.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.customServerName =
                        ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.ignoreCookie = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.rewrite = ResourceOptions_RewriteOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResourceOptions };
        if (object.disableCache !== undefined && object.disableCache !== null) {
            message.disableCache = ResourceOptions_BoolOption.fromJSON(object.disableCache);
        }
        else {
            message.disableCache = undefined;
        }
        if (object.edgeCacheSettings !== undefined &&
            object.edgeCacheSettings !== null) {
            message.edgeCacheSettings =
                ResourceOptions_EdgeCacheSettings.fromJSON(object.edgeCacheSettings);
        }
        else {
            message.edgeCacheSettings = undefined;
        }
        if (object.browserCacheSettings !== undefined &&
            object.browserCacheSettings !== null) {
            message.browserCacheSettings = ResourceOptions_Int64Option.fromJSON(object.browserCacheSettings);
        }
        else {
            message.browserCacheSettings = undefined;
        }
        if (object.cacheHttpHeaders !== undefined &&
            object.cacheHttpHeaders !== null) {
            message.cacheHttpHeaders =
                ResourceOptions_StringsListOption.fromJSON(object.cacheHttpHeaders);
        }
        else {
            message.cacheHttpHeaders = undefined;
        }
        if (object.queryParamsOptions !== undefined &&
            object.queryParamsOptions !== null) {
            message.queryParamsOptions =
                ResourceOptions_QueryParamsOptions.fromJSON(object.queryParamsOptions);
        }
        else {
            message.queryParamsOptions = undefined;
        }
        if (object.slice !== undefined && object.slice !== null) {
            message.slice = ResourceOptions_BoolOption.fromJSON(object.slice);
        }
        else {
            message.slice = undefined;
        }
        if (object.compressionOptions !== undefined &&
            object.compressionOptions !== null) {
            message.compressionOptions =
                ResourceOptions_CompressionOptions.fromJSON(object.compressionOptions);
        }
        else {
            message.compressionOptions = undefined;
        }
        if (object.redirectOptions !== undefined &&
            object.redirectOptions !== null) {
            message.redirectOptions = ResourceOptions_RedirectOptions.fromJSON(object.redirectOptions);
        }
        else {
            message.redirectOptions = undefined;
        }
        if (object.hostOptions !== undefined && object.hostOptions !== null) {
            message.hostOptions = ResourceOptions_HostOptions.fromJSON(object.hostOptions);
        }
        else {
            message.hostOptions = undefined;
        }
        if (object.staticHeaders !== undefined &&
            object.staticHeaders !== null) {
            message.staticHeaders = ResourceOptions_StringsMapOption.fromJSON(object.staticHeaders);
        }
        else {
            message.staticHeaders = undefined;
        }
        if (object.cors !== undefined && object.cors !== null) {
            message.cors = ResourceOptions_StringsListOption.fromJSON(object.cors);
        }
        else {
            message.cors = undefined;
        }
        if (object.stale !== undefined && object.stale !== null) {
            message.stale = ResourceOptions_StringsListOption.fromJSON(object.stale);
        }
        else {
            message.stale = undefined;
        }
        if (object.allowedHttpMethods !== undefined &&
            object.allowedHttpMethods !== null) {
            message.allowedHttpMethods =
                ResourceOptions_StringsListOption.fromJSON(object.allowedHttpMethods);
        }
        else {
            message.allowedHttpMethods = undefined;
        }
        if (object.proxyCacheMethodsSet !== undefined &&
            object.proxyCacheMethodsSet !== null) {
            message.proxyCacheMethodsSet = ResourceOptions_BoolOption.fromJSON(object.proxyCacheMethodsSet);
        }
        else {
            message.proxyCacheMethodsSet = undefined;
        }
        if (object.disableProxyForceRanges !== undefined &&
            object.disableProxyForceRanges !== null) {
            message.disableProxyForceRanges =
                ResourceOptions_BoolOption.fromJSON(object.disableProxyForceRanges);
        }
        else {
            message.disableProxyForceRanges = undefined;
        }
        if (object.staticRequestHeaders !== undefined &&
            object.staticRequestHeaders !== null) {
            message.staticRequestHeaders =
                ResourceOptions_StringsMapOption.fromJSON(object.staticRequestHeaders);
        }
        else {
            message.staticRequestHeaders = undefined;
        }
        if (object.customServerName !== undefined &&
            object.customServerName !== null) {
            message.customServerName = ResourceOptions_StringOption.fromJSON(object.customServerName);
        }
        else {
            message.customServerName = undefined;
        }
        if (object.ignoreCookie !== undefined && object.ignoreCookie !== null) {
            message.ignoreCookie = ResourceOptions_BoolOption.fromJSON(object.ignoreCookie);
        }
        else {
            message.ignoreCookie = undefined;
        }
        if (object.rewrite !== undefined && object.rewrite !== null) {
            message.rewrite = ResourceOptions_RewriteOption.fromJSON(object.rewrite);
        }
        else {
            message.rewrite = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.disableCache !== undefined &&
            (obj.disableCache = message.disableCache
                ? ResourceOptions_BoolOption.toJSON(message.disableCache)
                : undefined);
        message.edgeCacheSettings !== undefined &&
            (obj.edgeCacheSettings = message.edgeCacheSettings
                ? ResourceOptions_EdgeCacheSettings.toJSON(message.edgeCacheSettings)
                : undefined);
        message.browserCacheSettings !== undefined &&
            (obj.browserCacheSettings = message.browserCacheSettings
                ? ResourceOptions_Int64Option.toJSON(message.browserCacheSettings)
                : undefined);
        message.cacheHttpHeaders !== undefined &&
            (obj.cacheHttpHeaders = message.cacheHttpHeaders
                ? ResourceOptions_StringsListOption.toJSON(message.cacheHttpHeaders)
                : undefined);
        message.queryParamsOptions !== undefined &&
            (obj.queryParamsOptions = message.queryParamsOptions
                ? ResourceOptions_QueryParamsOptions.toJSON(message.queryParamsOptions)
                : undefined);
        message.slice !== undefined &&
            (obj.slice = message.slice
                ? ResourceOptions_BoolOption.toJSON(message.slice)
                : undefined);
        message.compressionOptions !== undefined &&
            (obj.compressionOptions = message.compressionOptions
                ? ResourceOptions_CompressionOptions.toJSON(message.compressionOptions)
                : undefined);
        message.redirectOptions !== undefined &&
            (obj.redirectOptions = message.redirectOptions
                ? ResourceOptions_RedirectOptions.toJSON(message.redirectOptions)
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
                ? ResourceOptions_StringsListOption.toJSON(message.allowedHttpMethods)
                : undefined);
        message.proxyCacheMethodsSet !== undefined &&
            (obj.proxyCacheMethodsSet = message.proxyCacheMethodsSet
                ? ResourceOptions_BoolOption.toJSON(message.proxyCacheMethodsSet)
                : undefined);
        message.disableProxyForceRanges !== undefined &&
            (obj.disableProxyForceRanges = message.disableProxyForceRanges
                ? ResourceOptions_BoolOption.toJSON(message.disableProxyForceRanges)
                : undefined);
        message.staticRequestHeaders !== undefined &&
            (obj.staticRequestHeaders = message.staticRequestHeaders
                ? ResourceOptions_StringsMapOption.toJSON(message.staticRequestHeaders)
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
    fromPartial(object) {
        const message = { ...baseResourceOptions };
        if (object.disableCache !== undefined && object.disableCache !== null) {
            message.disableCache = ResourceOptions_BoolOption.fromPartial(object.disableCache);
        }
        else {
            message.disableCache = undefined;
        }
        if (object.edgeCacheSettings !== undefined &&
            object.edgeCacheSettings !== null) {
            message.edgeCacheSettings =
                ResourceOptions_EdgeCacheSettings.fromPartial(object.edgeCacheSettings);
        }
        else {
            message.edgeCacheSettings = undefined;
        }
        if (object.browserCacheSettings !== undefined &&
            object.browserCacheSettings !== null) {
            message.browserCacheSettings =
                ResourceOptions_Int64Option.fromPartial(object.browserCacheSettings);
        }
        else {
            message.browserCacheSettings = undefined;
        }
        if (object.cacheHttpHeaders !== undefined &&
            object.cacheHttpHeaders !== null) {
            message.cacheHttpHeaders =
                ResourceOptions_StringsListOption.fromPartial(object.cacheHttpHeaders);
        }
        else {
            message.cacheHttpHeaders = undefined;
        }
        if (object.queryParamsOptions !== undefined &&
            object.queryParamsOptions !== null) {
            message.queryParamsOptions =
                ResourceOptions_QueryParamsOptions.fromPartial(object.queryParamsOptions);
        }
        else {
            message.queryParamsOptions = undefined;
        }
        if (object.slice !== undefined && object.slice !== null) {
            message.slice = ResourceOptions_BoolOption.fromPartial(object.slice);
        }
        else {
            message.slice = undefined;
        }
        if (object.compressionOptions !== undefined &&
            object.compressionOptions !== null) {
            message.compressionOptions =
                ResourceOptions_CompressionOptions.fromPartial(object.compressionOptions);
        }
        else {
            message.compressionOptions = undefined;
        }
        if (object.redirectOptions !== undefined &&
            object.redirectOptions !== null) {
            message.redirectOptions =
                ResourceOptions_RedirectOptions.fromPartial(object.redirectOptions);
        }
        else {
            message.redirectOptions = undefined;
        }
        if (object.hostOptions !== undefined && object.hostOptions !== null) {
            message.hostOptions = ResourceOptions_HostOptions.fromPartial(object.hostOptions);
        }
        else {
            message.hostOptions = undefined;
        }
        if (object.staticHeaders !== undefined &&
            object.staticHeaders !== null) {
            message.staticHeaders =
                ResourceOptions_StringsMapOption.fromPartial(object.staticHeaders);
        }
        else {
            message.staticHeaders = undefined;
        }
        if (object.cors !== undefined && object.cors !== null) {
            message.cors = ResourceOptions_StringsListOption.fromPartial(object.cors);
        }
        else {
            message.cors = undefined;
        }
        if (object.stale !== undefined && object.stale !== null) {
            message.stale = ResourceOptions_StringsListOption.fromPartial(object.stale);
        }
        else {
            message.stale = undefined;
        }
        if (object.allowedHttpMethods !== undefined &&
            object.allowedHttpMethods !== null) {
            message.allowedHttpMethods =
                ResourceOptions_StringsListOption.fromPartial(object.allowedHttpMethods);
        }
        else {
            message.allowedHttpMethods = undefined;
        }
        if (object.proxyCacheMethodsSet !== undefined &&
            object.proxyCacheMethodsSet !== null) {
            message.proxyCacheMethodsSet =
                ResourceOptions_BoolOption.fromPartial(object.proxyCacheMethodsSet);
        }
        else {
            message.proxyCacheMethodsSet = undefined;
        }
        if (object.disableProxyForceRanges !== undefined &&
            object.disableProxyForceRanges !== null) {
            message.disableProxyForceRanges =
                ResourceOptions_BoolOption.fromPartial(object.disableProxyForceRanges);
        }
        else {
            message.disableProxyForceRanges = undefined;
        }
        if (object.staticRequestHeaders !== undefined &&
            object.staticRequestHeaders !== null) {
            message.staticRequestHeaders =
                ResourceOptions_StringsMapOption.fromPartial(object.staticRequestHeaders);
        }
        else {
            message.staticRequestHeaders = undefined;
        }
        if (object.customServerName !== undefined &&
            object.customServerName !== null) {
            message.customServerName = ResourceOptions_StringOption.fromPartial(object.customServerName);
        }
        else {
            message.customServerName = undefined;
        }
        if (object.ignoreCookie !== undefined && object.ignoreCookie !== null) {
            message.ignoreCookie = ResourceOptions_BoolOption.fromPartial(object.ignoreCookie);
        }
        else {
            message.ignoreCookie = undefined;
        }
        if (object.rewrite !== undefined && object.rewrite !== null) {
            message.rewrite = ResourceOptions_RewriteOption.fromPartial(object.rewrite);
        }
        else {
            message.rewrite = undefined;
        }
        return message;
    },
};
const baseResourceOptions_BoolOption = { enabled: false, value: false };
export const ResourceOptions_BoolOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_BoolOption,
        };
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_BoolOption,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Boolean(object.value);
        }
        else {
            message.value = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_BoolOption,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = false;
        }
        return message;
    },
};
const baseResourceOptions_StringOption = { enabled: false, value: '' };
export const ResourceOptions_StringOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringOption,
        };
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringOption,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringOption,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseResourceOptions_Int64Option = { enabled: false, value: 0 };
export const ResourceOptions_Int64Option = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_Int64Option,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_Int64Option,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        else {
            message.value = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_Int64Option,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = 0;
        }
        return message;
    },
};
const baseResourceOptions_StringsListOption = {
    enabled: false,
    value: '',
};
export const ResourceOptions_StringsListOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        for (const v of message.value) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsListOption,
        };
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringsListOption,
        };
        message.value = [];
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            for (const e of object.value) {
                message.value.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        if (message.value) {
            obj.value = message.value.map((e) => e);
        }
        else {
            obj.value = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringsListOption,
        };
        message.value = [];
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
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
const baseResourceOptions_StringsMapOption = { enabled: false };
export const ResourceOptions_StringsMapOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            ResourceOptions_StringsMapOption_ValueEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsMapOption,
        };
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 = ResourceOptions_StringsMapOption_ValueEntry.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringsMapOption,
        };
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                message.value[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringsMapOption,
        };
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
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
const baseResourceOptions_StringsMapOption_ValueEntry = {
    key: '',
    value: '',
};
export const ResourceOptions_StringsMapOption_ValueEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        };
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseResourceOptions_CachingTimes = { simpleValue: 0 };
export const ResourceOptions_CachingTimes = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.simpleValue !== 0) {
            writer.uint32(8).int64(message.simpleValue);
        }
        Object.entries(message.customValues).forEach(([key, value]) => {
            ResourceOptions_CachingTimes_CustomValuesEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CachingTimes,
        };
        message.customValues = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.simpleValue = longToNumber(reader.int64());
                    break;
                case 2:
                    const entry2 = ResourceOptions_CachingTimes_CustomValuesEntry.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_CachingTimes,
        };
        message.customValues = {};
        if (object.simpleValue !== undefined && object.simpleValue !== null) {
            message.simpleValue = Number(object.simpleValue);
        }
        else {
            message.simpleValue = 0;
        }
        if (object.customValues !== undefined && object.customValues !== null) {
            Object.entries(object.customValues).forEach(([key, value]) => {
                message.customValues[key] = Number(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_CachingTimes,
        };
        message.customValues = {};
        if (object.simpleValue !== undefined && object.simpleValue !== null) {
            message.simpleValue = object.simpleValue;
        }
        else {
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
const baseResourceOptions_CachingTimes_CustomValuesEntry = {
    key: '',
    value: 0,
};
export const ResourceOptions_CachingTimes_CustomValuesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        else {
            message.value = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = 0;
        }
        return message;
    },
};
const baseResourceOptions_EdgeCacheSettings = { enabled: false };
export const ResourceOptions_EdgeCacheSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== undefined) {
            ResourceOptions_CachingTimes.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultValue !== undefined) {
            writer.uint32(24).int64(message.defaultValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = ResourceOptions_CachingTimes.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultValue = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_CachingTimes.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        if (object.defaultValue !== undefined && object.defaultValue !== null) {
            message.defaultValue = Number(object.defaultValue);
        }
        else {
            message.defaultValue = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_CachingTimes.toJSON(message.value)
                : undefined);
        message.defaultValue !== undefined &&
            (obj.defaultValue = message.defaultValue);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_CachingTimes.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        if (object.defaultValue !== undefined && object.defaultValue !== null) {
            message.defaultValue = object.defaultValue;
        }
        else {
            message.defaultValue = undefined;
        }
        return message;
    },
};
const baseResourceOptions_StringVariableMapOption = { enabled: false };
export const ResourceOptions_StringVariableMapOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            ResourceOptions_StringVariableMapOption_ValueEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        };
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 = ResourceOptions_StringVariableMapOption_ValueEntry.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        };
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                message.value[key] =
                    ResourceOptions_StringVariableMapOption_OneofString.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] =
                    ResourceOptions_StringVariableMapOption_OneofString.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        };
        message.value = {};
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.value !== undefined && object.value !== null) {
            Object.entries(object.value).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.value[key] =
                        ResourceOptions_StringVariableMapOption_OneofString.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseResourceOptions_StringVariableMapOption_OneofString = {};
export const ResourceOptions_StringVariableMapOption_OneofString = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            ResourceOptions_StringOption.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.values !== undefined) {
            ResourceOptions_StringsListOption.encode(message.values, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.values = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_StringOption.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = ResourceOptions_StringsListOption.fromJSON(object.values);
        }
        else {
            message.values = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = ResourceOptions_StringOption.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = ResourceOptions_StringsListOption.fromPartial(object.values);
        }
        else {
            message.values = undefined;
        }
        return message;
    },
};
const baseResourceOptions_StringVariableMapOption_ValueEntry = {
    key: '',
};
export const ResourceOptions_StringVariableMapOption_ValueEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            ResourceOptions_StringVariableMapOption_OneofString.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value =
                        ResourceOptions_StringVariableMapOption_OneofString.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value =
                ResourceOptions_StringVariableMapOption_OneofString.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_StringVariableMapOption_OneofString.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value =
                ResourceOptions_StringVariableMapOption_OneofString.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseResourceOptions_QueryParamsOptions = {};
export const ResourceOptions_QueryParamsOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ignoreQueryString !== undefined) {
            ResourceOptions_BoolOption.encode(message.ignoreQueryString, writer.uint32(10).fork()).ldelim();
        }
        if (message.queryParamsWhitelist !== undefined) {
            ResourceOptions_StringsListOption.encode(message.queryParamsWhitelist, writer.uint32(18).fork()).ldelim();
        }
        if (message.queryParamsBlacklist !== undefined) {
            ResourceOptions_StringsListOption.encode(message.queryParamsBlacklist, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ignoreQueryString =
                        ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryParamsWhitelist =
                        ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.queryParamsBlacklist =
                        ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        };
        if (object.ignoreQueryString !== undefined &&
            object.ignoreQueryString !== null) {
            message.ignoreQueryString = ResourceOptions_BoolOption.fromJSON(object.ignoreQueryString);
        }
        else {
            message.ignoreQueryString = undefined;
        }
        if (object.queryParamsWhitelist !== undefined &&
            object.queryParamsWhitelist !== null) {
            message.queryParamsWhitelist =
                ResourceOptions_StringsListOption.fromJSON(object.queryParamsWhitelist);
        }
        else {
            message.queryParamsWhitelist = undefined;
        }
        if (object.queryParamsBlacklist !== undefined &&
            object.queryParamsBlacklist !== null) {
            message.queryParamsBlacklist =
                ResourceOptions_StringsListOption.fromJSON(object.queryParamsBlacklist);
        }
        else {
            message.queryParamsBlacklist = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ignoreQueryString !== undefined &&
            (obj.ignoreQueryString = message.ignoreQueryString
                ? ResourceOptions_BoolOption.toJSON(message.ignoreQueryString)
                : undefined);
        message.queryParamsWhitelist !== undefined &&
            (obj.queryParamsWhitelist = message.queryParamsWhitelist
                ? ResourceOptions_StringsListOption.toJSON(message.queryParamsWhitelist)
                : undefined);
        message.queryParamsBlacklist !== undefined &&
            (obj.queryParamsBlacklist = message.queryParamsBlacklist
                ? ResourceOptions_StringsListOption.toJSON(message.queryParamsBlacklist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        };
        if (object.ignoreQueryString !== undefined &&
            object.ignoreQueryString !== null) {
            message.ignoreQueryString = ResourceOptions_BoolOption.fromPartial(object.ignoreQueryString);
        }
        else {
            message.ignoreQueryString = undefined;
        }
        if (object.queryParamsWhitelist !== undefined &&
            object.queryParamsWhitelist !== null) {
            message.queryParamsWhitelist =
                ResourceOptions_StringsListOption.fromPartial(object.queryParamsWhitelist);
        }
        else {
            message.queryParamsWhitelist = undefined;
        }
        if (object.queryParamsBlacklist !== undefined &&
            object.queryParamsBlacklist !== null) {
            message.queryParamsBlacklist =
                ResourceOptions_StringsListOption.fromPartial(object.queryParamsBlacklist);
        }
        else {
            message.queryParamsBlacklist = undefined;
        }
        return message;
    },
};
const baseResourceOptions_RedirectOptions = {};
export const ResourceOptions_RedirectOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redirectHttpToHttps !== undefined) {
            ResourceOptions_BoolOption.encode(message.redirectHttpToHttps, writer.uint32(10).fork()).ldelim();
        }
        if (message.redirectHttpsToHttp !== undefined) {
            ResourceOptions_BoolOption.encode(message.redirectHttpsToHttp, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_RedirectOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redirectHttpToHttps =
                        ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redirectHttpsToHttp =
                        ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_RedirectOptions,
        };
        if (object.redirectHttpToHttps !== undefined &&
            object.redirectHttpToHttps !== null) {
            message.redirectHttpToHttps = ResourceOptions_BoolOption.fromJSON(object.redirectHttpToHttps);
        }
        else {
            message.redirectHttpToHttps = undefined;
        }
        if (object.redirectHttpsToHttp !== undefined &&
            object.redirectHttpsToHttp !== null) {
            message.redirectHttpsToHttp = ResourceOptions_BoolOption.fromJSON(object.redirectHttpsToHttp);
        }
        else {
            message.redirectHttpsToHttp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_RedirectOptions,
        };
        if (object.redirectHttpToHttps !== undefined &&
            object.redirectHttpToHttps !== null) {
            message.redirectHttpToHttps =
                ResourceOptions_BoolOption.fromPartial(object.redirectHttpToHttps);
        }
        else {
            message.redirectHttpToHttps = undefined;
        }
        if (object.redirectHttpsToHttp !== undefined &&
            object.redirectHttpsToHttp !== null) {
            message.redirectHttpsToHttp =
                ResourceOptions_BoolOption.fromPartial(object.redirectHttpsToHttp);
        }
        else {
            message.redirectHttpsToHttp = undefined;
        }
        return message;
    },
};
const baseResourceOptions_HostOptions = {};
export const ResourceOptions_HostOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.host !== undefined) {
            ResourceOptions_StringOption.encode(message.host, writer.uint32(10).fork()).ldelim();
        }
        if (message.forwardHostHeader !== undefined) {
            ResourceOptions_BoolOption.encode(message.forwardHostHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_HostOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.forwardHostHeader =
                        ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_HostOptions,
        };
        if (object.host !== undefined && object.host !== null) {
            message.host = ResourceOptions_StringOption.fromJSON(object.host);
        }
        else {
            message.host = undefined;
        }
        if (object.forwardHostHeader !== undefined &&
            object.forwardHostHeader !== null) {
            message.forwardHostHeader = ResourceOptions_BoolOption.fromJSON(object.forwardHostHeader);
        }
        else {
            message.forwardHostHeader = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_HostOptions,
        };
        if (object.host !== undefined && object.host !== null) {
            message.host = ResourceOptions_StringOption.fromPartial(object.host);
        }
        else {
            message.host = undefined;
        }
        if (object.forwardHostHeader !== undefined &&
            object.forwardHostHeader !== null) {
            message.forwardHostHeader = ResourceOptions_BoolOption.fromPartial(object.forwardHostHeader);
        }
        else {
            message.forwardHostHeader = undefined;
        }
        return message;
    },
};
const baseResourceOptions_CompressionOptions = {};
export const ResourceOptions_CompressionOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fetchCompressed !== undefined) {
            ResourceOptions_BoolOption.encode(message.fetchCompressed, writer.uint32(10).fork()).ldelim();
        }
        if (message.gzipOn !== undefined) {
            ResourceOptions_BoolOption.encode(message.gzipOn, writer.uint32(18).fork()).ldelim();
        }
        if (message.brotliCompression !== undefined) {
            ResourceOptions_StringsListOption.encode(message.brotliCompression, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CompressionOptions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fetchCompressed = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gzipOn = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.brotliCompression =
                        ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_CompressionOptions,
        };
        if (object.fetchCompressed !== undefined &&
            object.fetchCompressed !== null) {
            message.fetchCompressed = ResourceOptions_BoolOption.fromJSON(object.fetchCompressed);
        }
        else {
            message.fetchCompressed = undefined;
        }
        if (object.gzipOn !== undefined && object.gzipOn !== null) {
            message.gzipOn = ResourceOptions_BoolOption.fromJSON(object.gzipOn);
        }
        else {
            message.gzipOn = undefined;
        }
        if (object.brotliCompression !== undefined &&
            object.brotliCompression !== null) {
            message.brotliCompression =
                ResourceOptions_StringsListOption.fromJSON(object.brotliCompression);
        }
        else {
            message.brotliCompression = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
                ? ResourceOptions_StringsListOption.toJSON(message.brotliCompression)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_CompressionOptions,
        };
        if (object.fetchCompressed !== undefined &&
            object.fetchCompressed !== null) {
            message.fetchCompressed = ResourceOptions_BoolOption.fromPartial(object.fetchCompressed);
        }
        else {
            message.fetchCompressed = undefined;
        }
        if (object.gzipOn !== undefined && object.gzipOn !== null) {
            message.gzipOn = ResourceOptions_BoolOption.fromPartial(object.gzipOn);
        }
        else {
            message.gzipOn = undefined;
        }
        if (object.brotliCompression !== undefined &&
            object.brotliCompression !== null) {
            message.brotliCompression =
                ResourceOptions_StringsListOption.fromPartial(object.brotliCompression);
        }
        else {
            message.brotliCompression = undefined;
        }
        return message;
    },
};
const baseResourceOptions_RewriteOption = {
    enabled: false,
    body: '',
    flag: 0,
};
export const ResourceOptions_RewriteOption = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_RewriteOption,
        };
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
                    message.flag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResourceOptions_RewriteOption,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body);
        }
        else {
            message.body = '';
        }
        if (object.flag !== undefined && object.flag !== null) {
            message.flag = rewriteFlagFromJSON(object.flag);
        }
        else {
            message.flag = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.body !== undefined && (obj.body = message.body);
        message.flag !== undefined &&
            (obj.flag = rewriteFlagToJSON(message.flag));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResourceOptions_RewriteOption,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        else {
            message.body = '';
        }
        if (object.flag !== undefined && object.flag !== null) {
            message.flag = object.flag;
        }
        else {
            message.flag = 0;
        }
        return message;
    },
};
const baseSSLTargetCertificate = { type: 0 };
export const SSLTargetCertificate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.data !== undefined) {
            SSLCertificateData.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLTargetCertificate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.data = SSLCertificateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSSLTargetCertificate };
        if (object.type !== undefined && object.type !== null) {
            message.type = sSLCertificateTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = sSLCertificateTypeToJSON(message.type));
        message.data !== undefined &&
            (obj.data = message.data
                ? SSLCertificateData.toJSON(message.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSSLTargetCertificate };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
};
const baseSSLCertificate = { type: 0, status: 0 };
export const SSLCertificate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.data !== undefined) {
            SSLCertificateData.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.data = SSLCertificateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSSLCertificate };
        if (object.type !== undefined && object.type !== null) {
            message.type = sSLCertificateTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = sSLCertificateStatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseSSLCertificate };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = SSLCertificateData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
};
const baseSSLCertificateData = {};
export const SSLCertificateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cm !== undefined) {
            SSLCertificateCMData.encode(message.cm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificateData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cm = SSLCertificateCMData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSSLCertificateData };
        if (object.cm !== undefined && object.cm !== null) {
            message.cm = SSLCertificateCMData.fromJSON(object.cm);
        }
        else {
            message.cm = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cm !== undefined &&
            (obj.cm = message.cm
                ? SSLCertificateCMData.toJSON(message.cm)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSSLCertificateData };
        if (object.cm !== undefined && object.cm !== null) {
            message.cm = SSLCertificateCMData.fromPartial(object.cm);
        }
        else {
            message.cm = undefined;
        }
        return message;
    },
};
const baseSSLCertificateCMData = { id: '' };
export const SSLCertificateCMData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificateCMData };
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
    fromJSON(object) {
        const message = { ...baseSSLCertificateCMData };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSSLCertificateCMData };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
