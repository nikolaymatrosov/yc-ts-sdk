/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';
/** HTTP status codes supported for use in redirect responses. */
export var RedirectAction_RedirectResponseCode;
(function (RedirectAction_RedirectResponseCode) {
    /** MOVED_PERMANENTLY - `301 Moved Permanently` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["MOVED_PERMANENTLY"] = 0] = "MOVED_PERMANENTLY";
    /** FOUND - `302 Found` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["FOUND"] = 1] = "FOUND";
    /** SEE_OTHER - `303 See Other` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["SEE_OTHER"] = 2] = "SEE_OTHER";
    /** TEMPORARY_REDIRECT - `307 Temporary Redirect` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["TEMPORARY_REDIRECT"] = 3] = "TEMPORARY_REDIRECT";
    /** PERMANENT_REDIRECT - `308 Permanent Redirect` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["PERMANENT_REDIRECT"] = 4] = "PERMANENT_REDIRECT";
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RedirectAction_RedirectResponseCode || (RedirectAction_RedirectResponseCode = {}));
export function redirectAction_RedirectResponseCodeFromJSON(object) {
    switch (object) {
        case 0:
        case 'MOVED_PERMANENTLY':
            return RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY;
        case 1:
        case 'FOUND':
            return RedirectAction_RedirectResponseCode.FOUND;
        case 2:
        case 'SEE_OTHER':
            return RedirectAction_RedirectResponseCode.SEE_OTHER;
        case 3:
        case 'TEMPORARY_REDIRECT':
            return RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT;
        case 4:
        case 'PERMANENT_REDIRECT':
            return RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RedirectAction_RedirectResponseCode.UNRECOGNIZED;
    }
}
export function redirectAction_RedirectResponseCodeToJSON(object) {
    switch (object) {
        case RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY:
            return 'MOVED_PERMANENTLY';
        case RedirectAction_RedirectResponseCode.FOUND:
            return 'FOUND';
        case RedirectAction_RedirectResponseCode.SEE_OTHER:
            return 'SEE_OTHER';
        case RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT:
            return 'TEMPORARY_REDIRECT';
        case RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT:
            return 'PERMANENT_REDIRECT';
        default:
            return 'UNKNOWN';
    }
}
/** gRPC status code supported for use in responses. */
export var GrpcStatusResponseAction_Status;
(function (GrpcStatusResponseAction_Status) {
    /** OK - `OK` (0) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["OK"] = 0] = "OK";
    /** INVALID_ARGUMENT - `INVALID_ARGUMENT` (3) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["INVALID_ARGUMENT"] = 1] = "INVALID_ARGUMENT";
    /** NOT_FOUND - `NOT_FOUND` (5) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["NOT_FOUND"] = 2] = "NOT_FOUND";
    /** PERMISSION_DENIED - `PERMISSION_DENIED` (7) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["PERMISSION_DENIED"] = 3] = "PERMISSION_DENIED";
    /** UNAUTHENTICATED - `UNAUTHENTICATED` (16) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNAUTHENTICATED"] = 4] = "UNAUTHENTICATED";
    /** UNIMPLEMENTED - `UNIMPLEMENTED` (12) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNIMPLEMENTED"] = 5] = "UNIMPLEMENTED";
    /** INTERNAL - `INTERNAL` (13) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["INTERNAL"] = 6] = "INTERNAL";
    /** UNAVAILABLE - `UNAVAILABLE` (14) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNAVAILABLE"] = 7] = "UNAVAILABLE";
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GrpcStatusResponseAction_Status || (GrpcStatusResponseAction_Status = {}));
export function grpcStatusResponseAction_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'OK':
            return GrpcStatusResponseAction_Status.OK;
        case 1:
        case 'INVALID_ARGUMENT':
            return GrpcStatusResponseAction_Status.INVALID_ARGUMENT;
        case 2:
        case 'NOT_FOUND':
            return GrpcStatusResponseAction_Status.NOT_FOUND;
        case 3:
        case 'PERMISSION_DENIED':
            return GrpcStatusResponseAction_Status.PERMISSION_DENIED;
        case 4:
        case 'UNAUTHENTICATED':
            return GrpcStatusResponseAction_Status.UNAUTHENTICATED;
        case 5:
        case 'UNIMPLEMENTED':
            return GrpcStatusResponseAction_Status.UNIMPLEMENTED;
        case 6:
        case 'INTERNAL':
            return GrpcStatusResponseAction_Status.INTERNAL;
        case 7:
        case 'UNAVAILABLE':
            return GrpcStatusResponseAction_Status.UNAVAILABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GrpcStatusResponseAction_Status.UNRECOGNIZED;
    }
}
export function grpcStatusResponseAction_StatusToJSON(object) {
    switch (object) {
        case GrpcStatusResponseAction_Status.OK:
            return 'OK';
        case GrpcStatusResponseAction_Status.INVALID_ARGUMENT:
            return 'INVALID_ARGUMENT';
        case GrpcStatusResponseAction_Status.NOT_FOUND:
            return 'NOT_FOUND';
        case GrpcStatusResponseAction_Status.PERMISSION_DENIED:
            return 'PERMISSION_DENIED';
        case GrpcStatusResponseAction_Status.UNAUTHENTICATED:
            return 'UNAUTHENTICATED';
        case GrpcStatusResponseAction_Status.UNIMPLEMENTED:
            return 'UNIMPLEMENTED';
        case GrpcStatusResponseAction_Status.INTERNAL:
            return 'INTERNAL';
        case GrpcStatusResponseAction_Status.UNAVAILABLE:
            return 'UNAVAILABLE';
        default:
            return 'UNKNOWN';
    }
}
const baseVirtualHost = { name: '', authority: '' };
export const VirtualHost = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.authority) {
            writer.uint32(18).string(v);
        }
        for (const v of message.routes) {
            Route.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            RouteOptions.encode(message.routeOptions, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVirtualHost };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.authority.push(reader.string());
                    break;
                case 3:
                    message.routes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.modifyRequestHeaders.push(HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.modifyResponseHeaders.push(HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.routeOptions = RouteOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVirtualHost };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(String(e));
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromJSON(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromJSON(object.routeOptions);
        }
        else {
            message.routeOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? Route.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVirtualHost };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(e);
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromPartial(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromPartial(object.routeOptions);
        }
        else {
            message.routeOptions = undefined;
        }
        return message;
    },
};
const baseRouteOptions = {};
export const RouteOptions = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRouteOptions };
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modifyRequestHeaders.push(HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.modifyResponseHeaders.push(HeaderModification.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRouteOptions };
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRouteOptions };
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        return message;
    },
};
const baseHeaderModification = { name: '' };
export const HeaderModification = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.append !== undefined) {
            writer.uint32(18).string(message.append);
        }
        if (message.replace !== undefined) {
            writer.uint32(26).string(message.replace);
        }
        if (message.remove !== undefined) {
            writer.uint32(32).bool(message.remove);
        }
        if (message.rename !== undefined) {
            writer.uint32(42).string(message.rename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHeaderModification };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.append = reader.string();
                    break;
                case 3:
                    message.replace = reader.string();
                    break;
                case 4:
                    message.remove = reader.bool();
                    break;
                case 5:
                    message.rename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHeaderModification };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.append !== undefined && object.append !== null) {
            message.append = String(object.append);
        }
        else {
            message.append = undefined;
        }
        if (object.replace !== undefined && object.replace !== null) {
            message.replace = String(object.replace);
        }
        else {
            message.replace = undefined;
        }
        if (object.remove !== undefined && object.remove !== null) {
            message.remove = Boolean(object.remove);
        }
        else {
            message.remove = undefined;
        }
        if (object.rename !== undefined && object.rename !== null) {
            message.rename = String(object.rename);
        }
        else {
            message.rename = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.append !== undefined && (obj.append = message.append);
        message.replace !== undefined && (obj.replace = message.replace);
        message.remove !== undefined && (obj.remove = message.remove);
        message.rename !== undefined && (obj.rename = message.rename);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHeaderModification };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.append !== undefined && object.append !== null) {
            message.append = object.append;
        }
        else {
            message.append = undefined;
        }
        if (object.replace !== undefined && object.replace !== null) {
            message.replace = object.replace;
        }
        else {
            message.replace = undefined;
        }
        if (object.remove !== undefined && object.remove !== null) {
            message.remove = object.remove;
        }
        else {
            message.remove = undefined;
        }
        if (object.rename !== undefined && object.rename !== null) {
            message.rename = object.rename;
        }
        else {
            message.rename = undefined;
        }
        return message;
    },
};
const baseRoute = { name: '' };
export const Route = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.http !== undefined) {
            HttpRoute.encode(message.http, writer.uint32(18).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcRoute.encode(message.grpc, writer.uint32(26).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            RouteOptions.encode(message.routeOptions, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoute };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.http = HttpRoute.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grpc = GrpcRoute.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.routeOptions = RouteOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRoute };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpRoute.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcRoute.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromJSON(object.routeOptions);
        }
        else {
            message.routeOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpRoute.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcRoute.toJSON(message.grpc)
                : undefined);
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRoute };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpRoute.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcRoute.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromPartial(object.routeOptions);
        }
        else {
            message.routeOptions = undefined;
        }
        return message;
    },
};
const baseHttpRoute = {};
export const HttpRoute = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.match !== undefined) {
            HttpRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.route !== undefined) {
            HttpRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
        }
        if (message.redirect !== undefined) {
            RedirectAction.encode(message.redirect, writer.uint32(26).fork()).ldelim();
        }
        if (message.directResponse !== undefined) {
            DirectResponseAction.encode(message.directResponse, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRoute };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = HttpRouteMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.route = HttpRouteAction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.redirect = RedirectAction.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.directResponse = DirectResponseAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttpRoute };
        if (object.match !== undefined && object.match !== null) {
            message.match = HttpRouteMatch.fromJSON(object.match);
        }
        else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = HttpRouteAction.fromJSON(object.route);
        }
        else {
            message.route = undefined;
        }
        if (object.redirect !== undefined && object.redirect !== null) {
            message.redirect = RedirectAction.fromJSON(object.redirect);
        }
        else {
            message.redirect = undefined;
        }
        if (object.directResponse !== undefined &&
            object.directResponse !== null) {
            message.directResponse = DirectResponseAction.fromJSON(object.directResponse);
        }
        else {
            message.directResponse = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.match !== undefined &&
            (obj.match = message.match
                ? HttpRouteMatch.toJSON(message.match)
                : undefined);
        message.route !== undefined &&
            (obj.route = message.route
                ? HttpRouteAction.toJSON(message.route)
                : undefined);
        message.redirect !== undefined &&
            (obj.redirect = message.redirect
                ? RedirectAction.toJSON(message.redirect)
                : undefined);
        message.directResponse !== undefined &&
            (obj.directResponse = message.directResponse
                ? DirectResponseAction.toJSON(message.directResponse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttpRoute };
        if (object.match !== undefined && object.match !== null) {
            message.match = HttpRouteMatch.fromPartial(object.match);
        }
        else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = HttpRouteAction.fromPartial(object.route);
        }
        else {
            message.route = undefined;
        }
        if (object.redirect !== undefined && object.redirect !== null) {
            message.redirect = RedirectAction.fromPartial(object.redirect);
        }
        else {
            message.redirect = undefined;
        }
        if (object.directResponse !== undefined &&
            object.directResponse !== null) {
            message.directResponse = DirectResponseAction.fromPartial(object.directResponse);
        }
        else {
            message.directResponse = undefined;
        }
        return message;
    },
};
const baseGrpcRoute = {};
export const GrpcRoute = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.match !== undefined) {
            GrpcRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.route !== undefined) {
            GrpcRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
        }
        if (message.statusResponse !== undefined) {
            GrpcStatusResponseAction.encode(message.statusResponse, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcRoute };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = GrpcRouteMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.route = GrpcRouteAction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.statusResponse = GrpcStatusResponseAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrpcRoute };
        if (object.match !== undefined && object.match !== null) {
            message.match = GrpcRouteMatch.fromJSON(object.match);
        }
        else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = GrpcRouteAction.fromJSON(object.route);
        }
        else {
            message.route = undefined;
        }
        if (object.statusResponse !== undefined &&
            object.statusResponse !== null) {
            message.statusResponse = GrpcStatusResponseAction.fromJSON(object.statusResponse);
        }
        else {
            message.statusResponse = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.match !== undefined &&
            (obj.match = message.match
                ? GrpcRouteMatch.toJSON(message.match)
                : undefined);
        message.route !== undefined &&
            (obj.route = message.route
                ? GrpcRouteAction.toJSON(message.route)
                : undefined);
        message.statusResponse !== undefined &&
            (obj.statusResponse = message.statusResponse
                ? GrpcStatusResponseAction.toJSON(message.statusResponse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrpcRoute };
        if (object.match !== undefined && object.match !== null) {
            message.match = GrpcRouteMatch.fromPartial(object.match);
        }
        else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = GrpcRouteAction.fromPartial(object.route);
        }
        else {
            message.route = undefined;
        }
        if (object.statusResponse !== undefined &&
            object.statusResponse !== null) {
            message.statusResponse = GrpcStatusResponseAction.fromPartial(object.statusResponse);
        }
        else {
            message.statusResponse = undefined;
        }
        return message;
    },
};
const baseHttpRouteMatch = { httpMethod: '' };
export const HttpRouteMatch = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.httpMethod) {
            writer.uint32(10).string(v);
        }
        if (message.path !== undefined) {
            StringMatch.encode(message.path, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRouteMatch };
        message.httpMethod = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpMethod.push(reader.string());
                    break;
                case 2:
                    message.path = StringMatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttpRouteMatch };
        message.httpMethod = [];
        if (object.httpMethod !== undefined && object.httpMethod !== null) {
            for (const e of object.httpMethod) {
                message.httpMethod.push(String(e));
            }
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = StringMatch.fromJSON(object.path);
        }
        else {
            message.path = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.httpMethod) {
            obj.httpMethod = message.httpMethod.map((e) => e);
        }
        else {
            obj.httpMethod = [];
        }
        message.path !== undefined &&
            (obj.path = message.path
                ? StringMatch.toJSON(message.path)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttpRouteMatch };
        message.httpMethod = [];
        if (object.httpMethod !== undefined && object.httpMethod !== null) {
            for (const e of object.httpMethod) {
                message.httpMethod.push(e);
            }
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = StringMatch.fromPartial(object.path);
        }
        else {
            message.path = undefined;
        }
        return message;
    },
};
const baseGrpcRouteMatch = {};
export const GrpcRouteMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fqmn !== undefined) {
            StringMatch.encode(message.fqmn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcRouteMatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqmn = StringMatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrpcRouteMatch };
        if (object.fqmn !== undefined && object.fqmn !== null) {
            message.fqmn = StringMatch.fromJSON(object.fqmn);
        }
        else {
            message.fqmn = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fqmn !== undefined &&
            (obj.fqmn = message.fqmn
                ? StringMatch.toJSON(message.fqmn)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrpcRouteMatch };
        if (object.fqmn !== undefined && object.fqmn !== null) {
            message.fqmn = StringMatch.fromPartial(object.fqmn);
        }
        else {
            message.fqmn = undefined;
        }
        return message;
    },
};
const baseStringMatch = {};
export const StringMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exactMatch !== undefined) {
            writer.uint32(10).string(message.exactMatch);
        }
        if (message.prefixMatch !== undefined) {
            writer.uint32(18).string(message.prefixMatch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStringMatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exactMatch = reader.string();
                    break;
                case 2:
                    message.prefixMatch = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStringMatch };
        if (object.exactMatch !== undefined && object.exactMatch !== null) {
            message.exactMatch = String(object.exactMatch);
        }
        else {
            message.exactMatch = undefined;
        }
        if (object.prefixMatch !== undefined && object.prefixMatch !== null) {
            message.prefixMatch = String(object.prefixMatch);
        }
        else {
            message.prefixMatch = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exactMatch !== undefined &&
            (obj.exactMatch = message.exactMatch);
        message.prefixMatch !== undefined &&
            (obj.prefixMatch = message.prefixMatch);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStringMatch };
        if (object.exactMatch !== undefined && object.exactMatch !== null) {
            message.exactMatch = object.exactMatch;
        }
        else {
            message.exactMatch = undefined;
        }
        if (object.prefixMatch !== undefined && object.prefixMatch !== null) {
            message.prefixMatch = object.prefixMatch;
        }
        else {
            message.prefixMatch = undefined;
        }
        return message;
    },
};
const baseRedirectAction = {
    replaceScheme: '',
    replaceHost: '',
    replacePort: 0,
    removeQuery: false,
    responseCode: 0,
};
export const RedirectAction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.replaceScheme !== '') {
            writer.uint32(10).string(message.replaceScheme);
        }
        if (message.replaceHost !== '') {
            writer.uint32(18).string(message.replaceHost);
        }
        if (message.replacePort !== 0) {
            writer.uint32(24).int64(message.replacePort);
        }
        if (message.replacePath !== undefined) {
            writer.uint32(34).string(message.replacePath);
        }
        if (message.replacePrefix !== undefined) {
            writer.uint32(42).string(message.replacePrefix);
        }
        if (message.removeQuery === true) {
            writer.uint32(48).bool(message.removeQuery);
        }
        if (message.responseCode !== 0) {
            writer.uint32(56).int32(message.responseCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedirectAction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replaceScheme = reader.string();
                    break;
                case 2:
                    message.replaceHost = reader.string();
                    break;
                case 3:
                    message.replacePort = longToNumber(reader.int64());
                    break;
                case 4:
                    message.replacePath = reader.string();
                    break;
                case 5:
                    message.replacePrefix = reader.string();
                    break;
                case 6:
                    message.removeQuery = reader.bool();
                    break;
                case 7:
                    message.responseCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRedirectAction };
        if (object.replaceScheme !== undefined &&
            object.replaceScheme !== null) {
            message.replaceScheme = String(object.replaceScheme);
        }
        else {
            message.replaceScheme = '';
        }
        if (object.replaceHost !== undefined && object.replaceHost !== null) {
            message.replaceHost = String(object.replaceHost);
        }
        else {
            message.replaceHost = '';
        }
        if (object.replacePort !== undefined && object.replacePort !== null) {
            message.replacePort = Number(object.replacePort);
        }
        else {
            message.replacePort = 0;
        }
        if (object.replacePath !== undefined && object.replacePath !== null) {
            message.replacePath = String(object.replacePath);
        }
        else {
            message.replacePath = undefined;
        }
        if (object.replacePrefix !== undefined &&
            object.replacePrefix !== null) {
            message.replacePrefix = String(object.replacePrefix);
        }
        else {
            message.replacePrefix = undefined;
        }
        if (object.removeQuery !== undefined && object.removeQuery !== null) {
            message.removeQuery = Boolean(object.removeQuery);
        }
        else {
            message.removeQuery = false;
        }
        if (object.responseCode !== undefined && object.responseCode !== null) {
            message.responseCode = redirectAction_RedirectResponseCodeFromJSON(object.responseCode);
        }
        else {
            message.responseCode = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.replaceScheme !== undefined &&
            (obj.replaceScheme = message.replaceScheme);
        message.replaceHost !== undefined &&
            (obj.replaceHost = message.replaceHost);
        message.replacePort !== undefined &&
            (obj.replacePort = message.replacePort);
        message.replacePath !== undefined &&
            (obj.replacePath = message.replacePath);
        message.replacePrefix !== undefined &&
            (obj.replacePrefix = message.replacePrefix);
        message.removeQuery !== undefined &&
            (obj.removeQuery = message.removeQuery);
        message.responseCode !== undefined &&
            (obj.responseCode = redirectAction_RedirectResponseCodeToJSON(message.responseCode));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRedirectAction };
        if (object.replaceScheme !== undefined &&
            object.replaceScheme !== null) {
            message.replaceScheme = object.replaceScheme;
        }
        else {
            message.replaceScheme = '';
        }
        if (object.replaceHost !== undefined && object.replaceHost !== null) {
            message.replaceHost = object.replaceHost;
        }
        else {
            message.replaceHost = '';
        }
        if (object.replacePort !== undefined && object.replacePort !== null) {
            message.replacePort = object.replacePort;
        }
        else {
            message.replacePort = 0;
        }
        if (object.replacePath !== undefined && object.replacePath !== null) {
            message.replacePath = object.replacePath;
        }
        else {
            message.replacePath = undefined;
        }
        if (object.replacePrefix !== undefined &&
            object.replacePrefix !== null) {
            message.replacePrefix = object.replacePrefix;
        }
        else {
            message.replacePrefix = undefined;
        }
        if (object.removeQuery !== undefined && object.removeQuery !== null) {
            message.removeQuery = object.removeQuery;
        }
        else {
            message.removeQuery = false;
        }
        if (object.responseCode !== undefined && object.responseCode !== null) {
            message.responseCode = object.responseCode;
        }
        else {
            message.responseCode = 0;
        }
        return message;
    },
};
const baseDirectResponseAction = { status: 0 };
export const DirectResponseAction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int64(message.status);
        }
        if (message.body !== undefined) {
            Payload.encode(message.body, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDirectResponseAction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = longToNumber(reader.int64());
                    break;
                case 2:
                    message.body = Payload.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDirectResponseAction };
        if (object.status !== undefined && object.status !== null) {
            message.status = Number(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = Payload.fromJSON(object.body);
        }
        else {
            message.body = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.body !== undefined &&
            (obj.body = message.body
                ? Payload.toJSON(message.body)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDirectResponseAction };
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = Payload.fromPartial(object.body);
        }
        else {
            message.body = undefined;
        }
        return message;
    },
};
const baseGrpcStatusResponseAction = { status: 0 };
export const GrpcStatusResponseAction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGrpcStatusResponseAction,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
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
            ...baseGrpcStatusResponseAction,
        };
        if (object.status !== undefined && object.status !== null) {
            message.status = grpcStatusResponseAction_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = grpcStatusResponseAction_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGrpcStatusResponseAction,
        };
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        return message;
    },
};
const baseHttpRouteAction = {
    backendGroupId: '',
    prefixRewrite: '',
    upgradeTypes: '',
};
export const HttpRouteAction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.timeout !== undefined) {
            Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.hostRewrite !== undefined) {
            writer.uint32(34).string(message.hostRewrite);
        }
        if (message.autoHostRewrite !== undefined) {
            writer.uint32(40).bool(message.autoHostRewrite);
        }
        if (message.prefixRewrite !== '') {
            writer.uint32(50).string(message.prefixRewrite);
        }
        for (const v of message.upgradeTypes) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRouteAction };
        message.upgradeTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.timeout = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.idleTimeout = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostRewrite = reader.string();
                    break;
                case 5:
                    message.autoHostRewrite = reader.bool();
                    break;
                case 6:
                    message.prefixRewrite = reader.string();
                    break;
                case 7:
                    message.upgradeTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttpRouteAction };
        message.upgradeTypes = [];
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromJSON(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromJSON(object.idleTimeout);
        }
        else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = String(object.hostRewrite);
        }
        else {
            message.hostRewrite = undefined;
        }
        if (object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null) {
            message.autoHostRewrite = Boolean(object.autoHostRewrite);
        }
        else {
            message.autoHostRewrite = undefined;
        }
        if (object.prefixRewrite !== undefined &&
            object.prefixRewrite !== null) {
            message.prefixRewrite = String(object.prefixRewrite);
        }
        else {
            message.prefixRewrite = '';
        }
        if (object.upgradeTypes !== undefined && object.upgradeTypes !== null) {
            for (const e of object.upgradeTypes) {
                message.upgradeTypes.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? Duration.toJSON(message.timeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? Duration.toJSON(message.idleTimeout)
                : undefined);
        message.hostRewrite !== undefined &&
            (obj.hostRewrite = message.hostRewrite);
        message.autoHostRewrite !== undefined &&
            (obj.autoHostRewrite = message.autoHostRewrite);
        message.prefixRewrite !== undefined &&
            (obj.prefixRewrite = message.prefixRewrite);
        if (message.upgradeTypes) {
            obj.upgradeTypes = message.upgradeTypes.map((e) => e);
        }
        else {
            obj.upgradeTypes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttpRouteAction };
        message.upgradeTypes = [];
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromPartial(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromPartial(object.idleTimeout);
        }
        else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = object.hostRewrite;
        }
        else {
            message.hostRewrite = undefined;
        }
        if (object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null) {
            message.autoHostRewrite = object.autoHostRewrite;
        }
        else {
            message.autoHostRewrite = undefined;
        }
        if (object.prefixRewrite !== undefined &&
            object.prefixRewrite !== null) {
            message.prefixRewrite = object.prefixRewrite;
        }
        else {
            message.prefixRewrite = '';
        }
        if (object.upgradeTypes !== undefined && object.upgradeTypes !== null) {
            for (const e of object.upgradeTypes) {
                message.upgradeTypes.push(e);
            }
        }
        return message;
    },
};
const baseGrpcRouteAction = { backendGroupId: '' };
export const GrpcRouteAction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.maxTimeout !== undefined) {
            Duration.encode(message.maxTimeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.hostRewrite !== undefined) {
            writer.uint32(34).string(message.hostRewrite);
        }
        if (message.autoHostRewrite !== undefined) {
            writer.uint32(40).bool(message.autoHostRewrite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcRouteAction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.maxTimeout = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.idleTimeout = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostRewrite = reader.string();
                    break;
                case 5:
                    message.autoHostRewrite = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrpcRouteAction };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.maxTimeout !== undefined && object.maxTimeout !== null) {
            message.maxTimeout = Duration.fromJSON(object.maxTimeout);
        }
        else {
            message.maxTimeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromJSON(object.idleTimeout);
        }
        else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = String(object.hostRewrite);
        }
        else {
            message.hostRewrite = undefined;
        }
        if (object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null) {
            message.autoHostRewrite = Boolean(object.autoHostRewrite);
        }
        else {
            message.autoHostRewrite = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.maxTimeout !== undefined &&
            (obj.maxTimeout = message.maxTimeout
                ? Duration.toJSON(message.maxTimeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? Duration.toJSON(message.idleTimeout)
                : undefined);
        message.hostRewrite !== undefined &&
            (obj.hostRewrite = message.hostRewrite);
        message.autoHostRewrite !== undefined &&
            (obj.autoHostRewrite = message.autoHostRewrite);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrpcRouteAction };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.maxTimeout !== undefined && object.maxTimeout !== null) {
            message.maxTimeout = Duration.fromPartial(object.maxTimeout);
        }
        else {
            message.maxTimeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromPartial(object.idleTimeout);
        }
        else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = object.hostRewrite;
        }
        else {
            message.hostRewrite = undefined;
        }
        if (object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null) {
            message.autoHostRewrite = object.autoHostRewrite;
        }
        else {
            message.autoHostRewrite = undefined;
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
