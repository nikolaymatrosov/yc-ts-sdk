/* eslint-disable */
import { releaseChannelFromJSON, releaseChannelToJSON, } from '../../../../yandex/cloud/k8s/v1/cluster';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.k8s.v1';
const baseListVersionsRequest = {};
export const ListVersionsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseListVersionsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseListVersionsRequest };
        return message;
    },
};
const baseListVersionsResponse = {};
export const ListVersionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.availableVersions) {
            AvailableVersions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsResponse };
        message.availableVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.availableVersions.push(AvailableVersions.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListVersionsResponse };
        message.availableVersions = [];
        if (object.availableVersions !== undefined &&
            object.availableVersions !== null) {
            for (const e of object.availableVersions) {
                message.availableVersions.push(AvailableVersions.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.availableVersions) {
            obj.availableVersions = message.availableVersions.map((e) => e ? AvailableVersions.toJSON(e) : undefined);
        }
        else {
            obj.availableVersions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListVersionsResponse };
        message.availableVersions = [];
        if (object.availableVersions !== undefined &&
            object.availableVersions !== null) {
            for (const e of object.availableVersions) {
                message.availableVersions.push(AvailableVersions.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAvailableVersions = { releaseChannel: 0, versions: '' };
export const AvailableVersions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.releaseChannel !== 0) {
            writer.uint32(8).int32(message.releaseChannel);
        }
        for (const v of message.versions) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAvailableVersions };
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.releaseChannel = reader.int32();
                    break;
                case 2:
                    message.versions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAvailableVersions };
        message.versions = [];
        if (object.releaseChannel !== undefined &&
            object.releaseChannel !== null) {
            message.releaseChannel = releaseChannelFromJSON(object.releaseChannel);
        }
        else {
            message.releaseChannel = 0;
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.releaseChannel !== undefined &&
            (obj.releaseChannel = releaseChannelToJSON(message.releaseChannel));
        if (message.versions) {
            obj.versions = message.versions.map((e) => e);
        }
        else {
            obj.versions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAvailableVersions };
        message.versions = [];
        if (object.releaseChannel !== undefined &&
            object.releaseChannel !== null) {
            message.releaseChannel = object.releaseChannel;
        }
        else {
            message.releaseChannel = 0;
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(e);
            }
        }
        return message;
    },
};
/** A set of methods for managing Kubernetes versions. */
export const VersionServiceService = {
    /** Retrieves the list of versions in the specified release channel. */
    list: {
        path: '/yandex.cloud.k8s.v1.VersionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListVersionsResponse.decode(value),
    },
};
export const VersionServiceClient = makeGenericClientConstructor(VersionServiceService, 'yandex.cloud.k8s.v1.VersionService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
