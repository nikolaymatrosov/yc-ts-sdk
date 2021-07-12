/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export enum MlModelType {
    ML_MODEL_TYPE_UNSPECIFIED = 0,
    /** ML_MODEL_TYPE_CATBOOST - CatBoost model. */
    ML_MODEL_TYPE_CATBOOST = 1,
    UNRECOGNIZED = -1,
}

export function mlModelTypeFromJSON(object: any): MlModelType {
    switch (object) {
        case 0:
        case 'ML_MODEL_TYPE_UNSPECIFIED':
            return MlModelType.ML_MODEL_TYPE_UNSPECIFIED;
        case 1:
        case 'ML_MODEL_TYPE_CATBOOST':
            return MlModelType.ML_MODEL_TYPE_CATBOOST;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MlModelType.UNRECOGNIZED;
    }
}

export function mlModelTypeToJSON(object: MlModelType): string {
    switch (object) {
        case MlModelType.ML_MODEL_TYPE_UNSPECIFIED:
            return 'ML_MODEL_TYPE_UNSPECIFIED';
        case MlModelType.ML_MODEL_TYPE_CATBOOST:
            return 'ML_MODEL_TYPE_CATBOOST';
        default:
            return 'UNKNOWN';
    }
}

export interface MlModel {
    /** Name of the the model. */
    name: string;
    /** ID of the ClickHouse cluster that the model belongs to. */
    clusterId: string;
    /** Type of the model. */
    type: MlModelType;
    /** Model file URL. You can only use models stored in Yandex Object Storage. */
    uri: string;
}

const baseMlModel: object = { name: '', clusterId: '', type: 0, uri: '' };

export const MlModel = {
    encode(
        message: MlModel,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MlModel {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMlModel } as MlModel;
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
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MlModel {
        const message = { ...baseMlModel } as MlModel;
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
        if (object.type !== undefined && object.type !== null) {
            message.type = mlModelTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        } else {
            message.uri = '';
        }
        return message;
    },

    toJSON(message: MlModel): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.type !== undefined &&
            (obj.type = mlModelTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial(object: DeepPartial<MlModel>): MlModel {
        const message = { ...baseMlModel } as MlModel;
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
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        } else {
            message.uri = '';
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
