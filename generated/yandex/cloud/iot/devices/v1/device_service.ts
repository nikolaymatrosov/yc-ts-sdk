/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    DeviceView,
    Device,
    DeviceCertificate,
    DevicePassword,
    deviceViewFromJSON,
    deviceViewToJSON,
} from '../../../../../yandex/cloud/iot/devices/v1/device';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.iot.devices.v1';

export interface GetDeviceRequest {
    /**
     * ID of the device to return.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * Specifies which parts of the device resource should be returned
     * in the response.
     */
    deviceView: DeviceView;
}

export interface GetByNameDeviceRequest {
    /**
     * ID of the registry to get device.
     *
     * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
     */
    registryId: string;
    /**
     * Name of the device to return.
     *
     * To get a device name make a [DeviceService.List] request.
     */
    deviceName: string;
    /**
     * Specifies which parts of the device resource should be returned
     * in the response.
     */
    deviceView: DeviceView;
}

export interface ListDevicesRequest {
    /**
     * ID of the registry to list devices in.
     *
     * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
     */
    registryId: string | undefined;
    /**
     * ID of the folder to list devices in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDevicesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDevicesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * Specifies which parts of the device resource should be returned
     * in the response.
     */
    deviceView: DeviceView;
}

export interface ListDevicesResponse {
    /** List of devices. */
    devices: Device[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDevicesRequest.page_size], use `next_page_token` as the value
     * for the [ListDevicesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDeviceRequest {
    /**
     * ID of the registry to create a device in.
     *
     * To get a registry ID, make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
     */
    registryId: string;
    /** Name of the device. The name must be unique within the registry. */
    name: string;
    /** Description of the device. */
    description: string;
    /** Device certificate. */
    certificates: CreateDeviceRequest_Certificate[];
    /**
     * Alias of a device topic.
     *
     * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
     */
    topicAliases: { [key: string]: string };
    /**
     * Device password.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}

export interface CreateDeviceRequest_TopicAliasesEntry {
    key: string;
    value: string;
}

/** Specification of a device certificate. */
export interface CreateDeviceRequest_Certificate {
    /** Public part of the device certificate. */
    certificateData: string;
}

export interface CreateDeviceMetadata {
    /** ID of the device that is being created. */
    deviceId: string;
}

export interface UpdateDeviceRequest {
    /**
     * ID of the device to update.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /** Field mask that specifies which fields of the device are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the device. The name must be unique within the registry. */
    name: string;
    /** Description of the device. */
    description: string;
    /**
     * Alias of a device topic.
     *
     * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
     */
    topicAliases: { [key: string]: string };
}

export interface UpdateDeviceRequest_TopicAliasesEntry {
    key: string;
    value: string;
}

export interface UpdateDeviceMetadata {
    /** ID of the device that is being updated. */
    deviceId: string;
}

export interface DeleteDeviceRequest {
    /**
     * ID of the device to delete.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
}

export interface DeleteDeviceMetadata {
    /** ID of the device that is being deleted. */
    deviceId: string;
}

export interface ListDeviceCertificatesRequest {
    /** ID of the device to list certificates for. */
    deviceId: string;
}

export interface ListDeviceCertificatesResponse {
    /** List of certificates for the specified device. */
    certificates: DeviceCertificate[];
}

export interface AddDeviceCertificateRequest {
    /**
     * ID of the device for which the certificate is being added.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /** Public part of the certificate. */
    certificateData: string;
}

export interface AddDeviceCertificateMetadata {
    /** ID of the device certificate that is being added. */
    deviceId: string;
    /** Fingerprint of the certificate that is being added. */
    fingerprint: string;
}

export interface DeleteDeviceCertificateRequest {
    /**
     * ID of the device to delete a certificate for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /** Fingerprint of the certificate to delete. */
    fingerprint: string;
}

export interface DeleteDeviceCertificateMetadata {
    /** ID of the device certificate that is being deleted. */
    deviceId: string;
    /** Fingerprint of the certificate that is being deleted. */
    fingerprint: string;
}

export interface ListDevicePasswordsRequest {
    /**
     * ID of the registry to list passwords in.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    deviceId: string;
}

export interface ListDevicePasswordsResponse {
    /** List of passwords for the specified device. */
    passwords: DevicePassword[];
}

export interface AddDevicePasswordRequest {
    /**
     * ID of the device to add a password for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * Passwords for the device.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}

export interface AddDevicePasswordMetadata {
    /** ID of the device for which the password is being added. */
    deviceId: string;
    /** ID of the password that is being added. */
    passwordId: string;
}

export interface DeleteDevicePasswordRequest {
    /**
     * ID of the device to delete a password for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [DeviceService.ListPasswords] request.
     */
    passwordId: string;
}

export interface DeleteDevicePasswordMetadata {
    /** ID of the device for which the password is being deleted. */
    deviceId: string;
    /** ID of the password that is being deleted. */
    passwordId: string;
}

export interface ListDeviceOperationsRequest {
    /**
     * ID of the device to list operations for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListDeviceOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDeviceOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Device.name] field.
     */
    filter: string;
}

export interface ListDeviceOperationsResponse {
    /** List of operations for the specified device certificate. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDeviceOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListDeviceOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetDeviceRequest: object = { deviceId: '', deviceView: 0 };

export const GetDeviceRequest = {
    encode(
        message: GetDeviceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.deviceView !== 0) {
            writer.uint32(16).int32(message.deviceView);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDeviceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDeviceRequest } as GetDeviceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.deviceView = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDeviceRequest {
        const message = { ...baseGetDeviceRequest } as GetDeviceRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = deviceViewFromJSON(object.deviceView);
        } else {
            message.deviceView = 0;
        }
        return message;
    },

    toJSON(message: GetDeviceRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.deviceView !== undefined &&
            (obj.deviceView = deviceViewToJSON(message.deviceView));
        return obj;
    },

    fromPartial(object: DeepPartial<GetDeviceRequest>): GetDeviceRequest {
        const message = { ...baseGetDeviceRequest } as GetDeviceRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = object.deviceView;
        } else {
            message.deviceView = 0;
        }
        return message;
    },
};

const baseGetByNameDeviceRequest: object = {
    registryId: '',
    deviceName: '',
    deviceView: 0,
};

export const GetByNameDeviceRequest = {
    encode(
        message: GetByNameDeviceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.deviceView !== 0) {
            writer.uint32(24).int32(message.deviceView);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetByNameDeviceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetByNameDeviceRequest,
        } as GetByNameDeviceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.deviceView = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetByNameDeviceRequest {
        const message = {
            ...baseGetByNameDeviceRequest,
        } as GetByNameDeviceRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = deviceViewFromJSON(object.deviceView);
        } else {
            message.deviceView = 0;
        }
        return message;
    },

    toJSON(message: GetByNameDeviceRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.deviceView !== undefined &&
            (obj.deviceView = deviceViewToJSON(message.deviceView));
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetByNameDeviceRequest>
    ): GetByNameDeviceRequest {
        const message = {
            ...baseGetByNameDeviceRequest,
        } as GetByNameDeviceRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = object.deviceView;
        } else {
            message.deviceView = 0;
        }
        return message;
    },
};

const baseListDevicesRequest: object = {
    pageSize: 0,
    pageToken: '',
    deviceView: 0,
};

export const ListDevicesRequest = {
    encode(
        message: ListDevicesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== undefined) {
            writer.uint32(10).string(message.registryId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.deviceView !== 0) {
            writer.uint32(40).int32(message.deviceView);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDevicesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDevicesRequest } as ListDevicesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.deviceView = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDevicesRequest {
        const message = { ...baseListDevicesRequest } as ListDevicesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = undefined;
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = deviceViewFromJSON(object.deviceView);
        } else {
            message.deviceView = 0;
        }
        return message;
    },

    toJSON(message: ListDevicesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.deviceView !== undefined &&
            (obj.deviceView = deviceViewToJSON(message.deviceView));
        return obj;
    },

    fromPartial(object: DeepPartial<ListDevicesRequest>): ListDevicesRequest {
        const message = { ...baseListDevicesRequest } as ListDevicesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = undefined;
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = object.deviceView;
        } else {
            message.deviceView = 0;
        }
        return message;
    },
};

const baseListDevicesResponse: object = { nextPageToken: '' };

export const ListDevicesResponse = {
    encode(
        message: ListDevicesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.devices) {
            Device.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDevicesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDevicesResponse } as ListDevicesResponse;
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.devices.push(
                        Device.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDevicesResponse {
        const message = { ...baseListDevicesResponse } as ListDevicesResponse;
        message.devices = [];
        if (object.devices !== undefined && object.devices !== null) {
            for (const e of object.devices) {
                message.devices.push(Device.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListDevicesResponse): unknown {
        const obj: any = {};
        if (message.devices) {
            obj.devices = message.devices.map((e) =>
                e ? Device.toJSON(e) : undefined
            );
        } else {
            obj.devices = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListDevicesResponse>): ListDevicesResponse {
        const message = { ...baseListDevicesResponse } as ListDevicesResponse;
        message.devices = [];
        if (object.devices !== undefined && object.devices !== null) {
            for (const e of object.devices) {
                message.devices.push(Device.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseCreateDeviceRequest: object = {
    registryId: '',
    name: '',
    description: '',
    password: '',
};

export const CreateDeviceRequest = {
    encode(
        message: CreateDeviceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.certificates) {
            CreateDeviceRequest_Certificate.encode(
                v!,
                writer.uint32(34).fork()
            ).ldelim();
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            CreateDeviceRequest_TopicAliasesEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDeviceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDeviceRequest } as CreateDeviceRequest;
        message.certificates = [];
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.certificates.push(
                        CreateDeviceRequest_Certificate.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 5:
                    const entry5 = CreateDeviceRequest_TopicAliasesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.topicAliases[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDeviceRequest {
        const message = { ...baseCreateDeviceRequest } as CreateDeviceRequest;
        message.certificates = [];
        message.topicAliases = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(
                    CreateDeviceRequest_Certificate.fromJSON(e)
                );
            }
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                message.topicAliases[key] = String(value);
            });
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(message: CreateDeviceRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? CreateDeviceRequest_Certificate.toJSON(e) : undefined
            );
        } else {
            obj.certificates = [];
        }
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateDeviceRequest>): CreateDeviceRequest {
        const message = { ...baseCreateDeviceRequest } as CreateDeviceRequest;
        message.certificates = [];
        message.topicAliases = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(
                    CreateDeviceRequest_Certificate.fromPartial(e)
                );
            }
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.topicAliases[key] = String(value);
                }
            });
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

const baseCreateDeviceRequest_TopicAliasesEntry: object = {
    key: '',
    value: '',
};

export const CreateDeviceRequest_TopicAliasesEntry = {
    encode(
        message: CreateDeviceRequest_TopicAliasesEntry,
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
    ): CreateDeviceRequest_TopicAliasesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDeviceRequest_TopicAliasesEntry,
        } as CreateDeviceRequest_TopicAliasesEntry;
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

    fromJSON(object: any): CreateDeviceRequest_TopicAliasesEntry {
        const message = {
            ...baseCreateDeviceRequest_TopicAliasesEntry,
        } as CreateDeviceRequest_TopicAliasesEntry;
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

    toJSON(message: CreateDeviceRequest_TopicAliasesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDeviceRequest_TopicAliasesEntry>
    ): CreateDeviceRequest_TopicAliasesEntry {
        const message = {
            ...baseCreateDeviceRequest_TopicAliasesEntry,
        } as CreateDeviceRequest_TopicAliasesEntry;
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

const baseCreateDeviceRequest_Certificate: object = { certificateData: '' };

export const CreateDeviceRequest_Certificate = {
    encode(
        message: CreateDeviceRequest_Certificate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateData !== '') {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDeviceRequest_Certificate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDeviceRequest_Certificate,
        } as CreateDeviceRequest_Certificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDeviceRequest_Certificate {
        const message = {
            ...baseCreateDeviceRequest_Certificate,
        } as CreateDeviceRequest_Certificate;
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = String(object.certificateData);
        } else {
            message.certificateData = '';
        }
        return message;
    },

    toJSON(message: CreateDeviceRequest_Certificate): unknown {
        const obj: any = {};
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDeviceRequest_Certificate>
    ): CreateDeviceRequest_Certificate {
        const message = {
            ...baseCreateDeviceRequest_Certificate,
        } as CreateDeviceRequest_Certificate;
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = object.certificateData;
        } else {
            message.certificateData = '';
        }
        return message;
    },
};

const baseCreateDeviceMetadata: object = { deviceId: '' };

export const CreateDeviceMetadata = {
    encode(
        message: CreateDeviceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDeviceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDeviceMetadata } as CreateDeviceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDeviceMetadata {
        const message = { ...baseCreateDeviceMetadata } as CreateDeviceMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        return message;
    },

    toJSON(message: CreateDeviceMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDeviceMetadata>
    ): CreateDeviceMetadata {
        const message = { ...baseCreateDeviceMetadata } as CreateDeviceMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        return message;
    },
};

const baseUpdateDeviceRequest: object = {
    deviceId: '',
    name: '',
    description: '',
};

export const UpdateDeviceRequest = {
    encode(
        message: UpdateDeviceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            UpdateDeviceRequest_TopicAliasesEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDeviceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDeviceRequest } as UpdateDeviceRequest;
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateDeviceRequest_TopicAliasesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.topicAliases[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDeviceRequest {
        const message = { ...baseUpdateDeviceRequest } as UpdateDeviceRequest;
        message.topicAliases = {};
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                message.topicAliases[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: UpdateDeviceRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateDeviceRequest>): UpdateDeviceRequest {
        const message = { ...baseUpdateDeviceRequest } as UpdateDeviceRequest;
        message.topicAliases = {};
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.topicAliases[key] = String(value);
                }
            });
        }
        return message;
    },
};

const baseUpdateDeviceRequest_TopicAliasesEntry: object = {
    key: '',
    value: '',
};

export const UpdateDeviceRequest_TopicAliasesEntry = {
    encode(
        message: UpdateDeviceRequest_TopicAliasesEntry,
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
    ): UpdateDeviceRequest_TopicAliasesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDeviceRequest_TopicAliasesEntry,
        } as UpdateDeviceRequest_TopicAliasesEntry;
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

    fromJSON(object: any): UpdateDeviceRequest_TopicAliasesEntry {
        const message = {
            ...baseUpdateDeviceRequest_TopicAliasesEntry,
        } as UpdateDeviceRequest_TopicAliasesEntry;
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

    toJSON(message: UpdateDeviceRequest_TopicAliasesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDeviceRequest_TopicAliasesEntry>
    ): UpdateDeviceRequest_TopicAliasesEntry {
        const message = {
            ...baseUpdateDeviceRequest_TopicAliasesEntry,
        } as UpdateDeviceRequest_TopicAliasesEntry;
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

const baseUpdateDeviceMetadata: object = { deviceId: '' };

export const UpdateDeviceMetadata = {
    encode(
        message: UpdateDeviceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDeviceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDeviceMetadata } as UpdateDeviceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDeviceMetadata {
        const message = { ...baseUpdateDeviceMetadata } as UpdateDeviceMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        return message;
    },

    toJSON(message: UpdateDeviceMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDeviceMetadata>
    ): UpdateDeviceMetadata {
        const message = { ...baseUpdateDeviceMetadata } as UpdateDeviceMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        return message;
    },
};

const baseDeleteDeviceRequest: object = { deviceId: '' };

export const DeleteDeviceRequest = {
    encode(
        message: DeleteDeviceRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDeviceRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDeviceRequest } as DeleteDeviceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDeviceRequest {
        const message = { ...baseDeleteDeviceRequest } as DeleteDeviceRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        return message;
    },

    toJSON(message: DeleteDeviceRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteDeviceRequest>): DeleteDeviceRequest {
        const message = { ...baseDeleteDeviceRequest } as DeleteDeviceRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        return message;
    },
};

const baseDeleteDeviceMetadata: object = { deviceId: '' };

export const DeleteDeviceMetadata = {
    encode(
        message: DeleteDeviceMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDeviceMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDeviceMetadata } as DeleteDeviceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDeviceMetadata {
        const message = { ...baseDeleteDeviceMetadata } as DeleteDeviceMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        return message;
    },

    toJSON(message: DeleteDeviceMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDeviceMetadata>
    ): DeleteDeviceMetadata {
        const message = { ...baseDeleteDeviceMetadata } as DeleteDeviceMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        return message;
    },
};

const baseListDeviceCertificatesRequest: object = { deviceId: '' };

export const ListDeviceCertificatesRequest = {
    encode(
        message: ListDeviceCertificatesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDeviceCertificatesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceCertificatesRequest,
        } as ListDeviceCertificatesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDeviceCertificatesRequest {
        const message = {
            ...baseListDeviceCertificatesRequest,
        } as ListDeviceCertificatesRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        return message;
    },

    toJSON(message: ListDeviceCertificatesRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDeviceCertificatesRequest>
    ): ListDeviceCertificatesRequest {
        const message = {
            ...baseListDeviceCertificatesRequest,
        } as ListDeviceCertificatesRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        return message;
    },
};

const baseListDeviceCertificatesResponse: object = {};

export const ListDeviceCertificatesResponse = {
    encode(
        message: ListDeviceCertificatesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.certificates) {
            DeviceCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDeviceCertificatesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceCertificatesResponse,
        } as ListDeviceCertificatesResponse;
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(
                        DeviceCertificate.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDeviceCertificatesResponse {
        const message = {
            ...baseListDeviceCertificatesResponse,
        } as ListDeviceCertificatesResponse;
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(DeviceCertificate.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListDeviceCertificatesResponse): unknown {
        const obj: any = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? DeviceCertificate.toJSON(e) : undefined
            );
        } else {
            obj.certificates = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDeviceCertificatesResponse>
    ): ListDeviceCertificatesResponse {
        const message = {
            ...baseListDeviceCertificatesResponse,
        } as ListDeviceCertificatesResponse;
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(DeviceCertificate.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddDeviceCertificateRequest: object = {
    deviceId: '',
    certificateData: '',
};

export const AddDeviceCertificateRequest = {
    encode(
        message: AddDeviceCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddDeviceCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDeviceCertificateRequest,
        } as AddDeviceCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDeviceCertificateRequest {
        const message = {
            ...baseAddDeviceCertificateRequest,
        } as AddDeviceCertificateRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = String(object.certificateData);
        } else {
            message.certificateData = '';
        }
        return message;
    },

    toJSON(message: AddDeviceCertificateRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddDeviceCertificateRequest>
    ): AddDeviceCertificateRequest {
        const message = {
            ...baseAddDeviceCertificateRequest,
        } as AddDeviceCertificateRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (
            object.certificateData !== undefined &&
            object.certificateData !== null
        ) {
            message.certificateData = object.certificateData;
        } else {
            message.certificateData = '';
        }
        return message;
    },
};

const baseAddDeviceCertificateMetadata: object = {
    deviceId: '',
    fingerprint: '',
};

export const AddDeviceCertificateMetadata = {
    encode(
        message: AddDeviceCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddDeviceCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDeviceCertificateMetadata,
        } as AddDeviceCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDeviceCertificateMetadata {
        const message = {
            ...baseAddDeviceCertificateMetadata,
        } as AddDeviceCertificateMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        return message;
    },

    toJSON(message: AddDeviceCertificateMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddDeviceCertificateMetadata>
    ): AddDeviceCertificateMetadata {
        const message = {
            ...baseAddDeviceCertificateMetadata,
        } as AddDeviceCertificateMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        return message;
    },
};

const baseDeleteDeviceCertificateRequest: object = {
    deviceId: '',
    fingerprint: '',
};

export const DeleteDeviceCertificateRequest = {
    encode(
        message: DeleteDeviceCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDeviceCertificateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDeviceCertificateRequest,
        } as DeleteDeviceCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDeviceCertificateRequest {
        const message = {
            ...baseDeleteDeviceCertificateRequest,
        } as DeleteDeviceCertificateRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        return message;
    },

    toJSON(message: DeleteDeviceCertificateRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDeviceCertificateRequest>
    ): DeleteDeviceCertificateRequest {
        const message = {
            ...baseDeleteDeviceCertificateRequest,
        } as DeleteDeviceCertificateRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        return message;
    },
};

const baseDeleteDeviceCertificateMetadata: object = {
    deviceId: '',
    fingerprint: '',
};

export const DeleteDeviceCertificateMetadata = {
    encode(
        message: DeleteDeviceCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDeviceCertificateMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDeviceCertificateMetadata,
        } as DeleteDeviceCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDeviceCertificateMetadata {
        const message = {
            ...baseDeleteDeviceCertificateMetadata,
        } as DeleteDeviceCertificateMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        } else {
            message.fingerprint = '';
        }
        return message;
    },

    toJSON(message: DeleteDeviceCertificateMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDeviceCertificateMetadata>
    ): DeleteDeviceCertificateMetadata {
        const message = {
            ...baseDeleteDeviceCertificateMetadata,
        } as DeleteDeviceCertificateMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        } else {
            message.fingerprint = '';
        }
        return message;
    },
};

const baseListDevicePasswordsRequest: object = { deviceId: '' };

export const ListDevicePasswordsRequest = {
    encode(
        message: ListDevicePasswordsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDevicePasswordsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDevicePasswordsRequest,
        } as ListDevicePasswordsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDevicePasswordsRequest {
        const message = {
            ...baseListDevicePasswordsRequest,
        } as ListDevicePasswordsRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        return message;
    },

    toJSON(message: ListDevicePasswordsRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDevicePasswordsRequest>
    ): ListDevicePasswordsRequest {
        const message = {
            ...baseListDevicePasswordsRequest,
        } as ListDevicePasswordsRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        return message;
    },
};

const baseListDevicePasswordsResponse: object = {};

export const ListDevicePasswordsResponse = {
    encode(
        message: ListDevicePasswordsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.passwords) {
            DevicePassword.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDevicePasswordsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDevicePasswordsResponse,
        } as ListDevicePasswordsResponse;
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(
                        DevicePassword.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDevicePasswordsResponse {
        const message = {
            ...baseListDevicePasswordsResponse,
        } as ListDevicePasswordsResponse;
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(DevicePassword.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListDevicePasswordsResponse): unknown {
        const obj: any = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) =>
                e ? DevicePassword.toJSON(e) : undefined
            );
        } else {
            obj.passwords = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDevicePasswordsResponse>
    ): ListDevicePasswordsResponse {
        const message = {
            ...baseListDevicePasswordsResponse,
        } as ListDevicePasswordsResponse;
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(DevicePassword.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddDevicePasswordRequest: object = { deviceId: '', password: '' };

export const AddDevicePasswordRequest = {
    encode(
        message: AddDevicePasswordRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddDevicePasswordRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDevicePasswordRequest,
        } as AddDevicePasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDevicePasswordRequest {
        const message = {
            ...baseAddDevicePasswordRequest,
        } as AddDevicePasswordRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(message: AddDevicePasswordRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddDevicePasswordRequest>
    ): AddDevicePasswordRequest {
        const message = {
            ...baseAddDevicePasswordRequest,
        } as AddDevicePasswordRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

const baseAddDevicePasswordMetadata: object = { deviceId: '', passwordId: '' };

export const AddDevicePasswordMetadata = {
    encode(
        message: AddDevicePasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddDevicePasswordMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDevicePasswordMetadata,
        } as AddDevicePasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDevicePasswordMetadata {
        const message = {
            ...baseAddDevicePasswordMetadata,
        } as AddDevicePasswordMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        } else {
            message.passwordId = '';
        }
        return message;
    },

    toJSON(message: AddDevicePasswordMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddDevicePasswordMetadata>
    ): AddDevicePasswordMetadata {
        const message = {
            ...baseAddDevicePasswordMetadata,
        } as AddDevicePasswordMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        } else {
            message.passwordId = '';
        }
        return message;
    },
};

const baseDeleteDevicePasswordRequest: object = {
    deviceId: '',
    passwordId: '',
};

export const DeleteDevicePasswordRequest = {
    encode(
        message: DeleteDevicePasswordRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDevicePasswordRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDevicePasswordRequest,
        } as DeleteDevicePasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDevicePasswordRequest {
        const message = {
            ...baseDeleteDevicePasswordRequest,
        } as DeleteDevicePasswordRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        } else {
            message.passwordId = '';
        }
        return message;
    },

    toJSON(message: DeleteDevicePasswordRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDevicePasswordRequest>
    ): DeleteDevicePasswordRequest {
        const message = {
            ...baseDeleteDevicePasswordRequest,
        } as DeleteDevicePasswordRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        } else {
            message.passwordId = '';
        }
        return message;
    },
};

const baseDeleteDevicePasswordMetadata: object = {
    deviceId: '',
    passwordId: '',
};

export const DeleteDevicePasswordMetadata = {
    encode(
        message: DeleteDevicePasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDevicePasswordMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDevicePasswordMetadata,
        } as DeleteDevicePasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDevicePasswordMetadata {
        const message = {
            ...baseDeleteDevicePasswordMetadata,
        } as DeleteDevicePasswordMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        } else {
            message.passwordId = '';
        }
        return message;
    },

    toJSON(message: DeleteDevicePasswordMetadata): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDevicePasswordMetadata>
    ): DeleteDevicePasswordMetadata {
        const message = {
            ...baseDeleteDevicePasswordMetadata,
        } as DeleteDevicePasswordMetadata;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        } else {
            message.passwordId = '';
        }
        return message;
    },
};

const baseListDeviceOperationsRequest: object = {
    deviceId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDeviceOperationsRequest = {
    encode(
        message: ListDeviceOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDeviceOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceOperationsRequest,
        } as ListDeviceOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDeviceOperationsRequest {
        const message = {
            ...baseListDeviceOperationsRequest,
        } as ListDeviceOperationsRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        } else {
            message.deviceId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        return message;
    },

    toJSON(message: ListDeviceOperationsRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDeviceOperationsRequest>
    ): ListDeviceOperationsRequest {
        const message = {
            ...baseListDeviceOperationsRequest,
        } as ListDeviceOperationsRequest;
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        } else {
            message.deviceId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        return message;
    },
};

const baseListDeviceOperationsResponse: object = { nextPageToken: '' };

export const ListDeviceOperationsResponse = {
    encode(
        message: ListDeviceOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDeviceOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceOperationsResponse,
        } as ListDeviceOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(
                        Operation.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDeviceOperationsResponse {
        const message = {
            ...baseListDeviceOperationsResponse,
        } as ListDeviceOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListDeviceOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) =>
                e ? Operation.toJSON(e) : undefined
            );
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDeviceOperationsResponse>
    ): ListDeviceOperationsResponse {
        const message = {
            ...baseListDeviceOperationsResponse,
        } as ListDeviceOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

/** A set of methods for managing devices. */
export const DeviceServiceService = {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDeviceRequest) =>
            Buffer.from(GetDeviceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDeviceRequest.decode(value),
        responseSerialize: (value: Device) =>
            Buffer.from(Device.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Device.decode(value),
    },
    getByName: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetByNameDeviceRequest) =>
            Buffer.from(GetByNameDeviceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetByNameDeviceRequest.decode(value),
        responseSerialize: (value: Device) =>
            Buffer.from(Device.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Device.decode(value),
    },
    /** Retrieves the list of devices in the specified registry. */
    list: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDevicesRequest) =>
            Buffer.from(ListDevicesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDevicesRequest.decode(value),
        responseSerialize: (value: ListDevicesResponse) =>
            Buffer.from(ListDevicesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDevicesResponse.decode(value),
    },
    /** Creates a device in the specified registry. */
    create: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDeviceRequest) =>
            Buffer.from(CreateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateDeviceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified device. */
    update: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDeviceRequest) =>
            Buffer.from(UpdateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateDeviceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified device. */
    delete: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDeviceRequest) =>
            Buffer.from(DeleteDeviceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDeviceRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDeviceCertificatesRequest) =>
            Buffer.from(ListDeviceCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDeviceCertificatesRequest.decode(value),
        responseSerialize: (value: ListDeviceCertificatesResponse) =>
            Buffer.from(ListDeviceCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDeviceCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddDeviceCertificateRequest) =>
            Buffer.from(AddDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AddDeviceCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified device certificate. */
    deleteCertificate: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDeviceCertificateRequest) =>
            Buffer.from(DeleteDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDeviceCertificateRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified device. */
    listPasswords: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDevicePasswordsRequest) =>
            Buffer.from(ListDevicePasswordsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDevicePasswordsRequest.decode(value),
        responseSerialize: (value: ListDevicePasswordsResponse) =>
            Buffer.from(ListDevicePasswordsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDevicePasswordsResponse.decode(value),
    },
    /** Adds password for the specified device. */
    addPassword: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/AddPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddDevicePasswordRequest) =>
            Buffer.from(AddDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AddDevicePasswordRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDevicePasswordRequest) =>
            Buffer.from(DeleteDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDevicePasswordRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified device. */
    listOperations: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDeviceOperationsRequest) =>
            Buffer.from(ListDeviceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDeviceOperationsRequest.decode(value),
        responseSerialize: (value: ListDeviceOperationsResponse) =>
            Buffer.from(ListDeviceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDeviceOperationsResponse.decode(value),
    },
} as const;

export interface DeviceServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get: handleUnaryCall<GetDeviceRequest, Device>;
    getByName: handleUnaryCall<GetByNameDeviceRequest, Device>;
    /** Retrieves the list of devices in the specified registry. */
    list: handleUnaryCall<ListDevicesRequest, ListDevicesResponse>;
    /** Creates a device in the specified registry. */
    create: handleUnaryCall<CreateDeviceRequest, Operation>;
    /** Updates the specified device. */
    update: handleUnaryCall<UpdateDeviceRequest, Operation>;
    /** Deletes the specified device. */
    delete: handleUnaryCall<DeleteDeviceRequest, Operation>;
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates: handleUnaryCall<
        ListDeviceCertificatesRequest,
        ListDeviceCertificatesResponse
    >;
    /** Adds a certificate. */
    addCertificate: handleUnaryCall<AddDeviceCertificateRequest, Operation>;
    /** Deletes the specified device certificate. */
    deleteCertificate: handleUnaryCall<
        DeleteDeviceCertificateRequest,
        Operation
    >;
    /** Retrieves the list of passwords for the specified device. */
    listPasswords: handleUnaryCall<
        ListDevicePasswordsRequest,
        ListDevicePasswordsResponse
    >;
    /** Adds password for the specified device. */
    addPassword: handleUnaryCall<AddDevicePasswordRequest, Operation>;
    /** Deletes the specified password. */
    deletePassword: handleUnaryCall<DeleteDevicePasswordRequest, Operation>;
    /** Lists operations for the specified device. */
    listOperations: handleUnaryCall<
        ListDeviceOperationsRequest,
        ListDeviceOperationsResponse
    >;
}

export interface DeviceServiceClient extends Client {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get(
        request: GetDeviceRequest,
        callback: (error: ServiceError | null, response: Device) => void
    ): ClientUnaryCall;
    get(
        request: GetDeviceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Device) => void
    ): ClientUnaryCall;
    get(
        request: GetDeviceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Device) => void
    ): ClientUnaryCall;
    getByName(
        request: GetByNameDeviceRequest,
        callback: (error: ServiceError | null, response: Device) => void
    ): ClientUnaryCall;
    getByName(
        request: GetByNameDeviceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Device) => void
    ): ClientUnaryCall;
    getByName(
        request: GetByNameDeviceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Device) => void
    ): ClientUnaryCall;
    /** Retrieves the list of devices in the specified registry. */
    list(
        request: ListDevicesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDevicesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDevicesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDevicesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDevicesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDevicesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a device in the specified registry. */
    create(
        request: CreateDeviceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDeviceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDeviceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified device. */
    update(
        request: UpdateDeviceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDeviceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDeviceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified device. */
    delete(
        request: DeleteDeviceRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDeviceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDeviceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates(
        request: ListDeviceCertificatesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDeviceCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    listCertificates(
        request: ListDeviceCertificatesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDeviceCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    listCertificates(
        request: ListDeviceCertificatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDeviceCertificatesResponse
        ) => void
    ): ClientUnaryCall;
    /** Adds a certificate. */
    addCertificate(
        request: AddDeviceCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addCertificate(
        request: AddDeviceCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addCertificate(
        request: AddDeviceCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified device certificate. */
    deleteCertificate(
        request: DeleteDeviceCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteCertificate(
        request: DeleteDeviceCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteCertificate(
        request: DeleteDeviceCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of passwords for the specified device. */
    listPasswords(
        request: ListDevicePasswordsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDevicePasswordsResponse
        ) => void
    ): ClientUnaryCall;
    listPasswords(
        request: ListDevicePasswordsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDevicePasswordsResponse
        ) => void
    ): ClientUnaryCall;
    listPasswords(
        request: ListDevicePasswordsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDevicePasswordsResponse
        ) => void
    ): ClientUnaryCall;
    /** Adds password for the specified device. */
    addPassword(
        request: AddDevicePasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addPassword(
        request: AddDevicePasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addPassword(
        request: AddDevicePasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified password. */
    deletePassword(
        request: DeleteDevicePasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deletePassword(
        request: DeleteDevicePasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deletePassword(
        request: DeleteDevicePasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified device. */
    listOperations(
        request: ListDeviceOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDeviceOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListDeviceOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDeviceOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListDeviceOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDeviceOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const DeviceServiceClient = makeGenericClientConstructor(
    DeviceServiceService,
    'yandex.cloud.iot.devices.v1.DeviceService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DeviceServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

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