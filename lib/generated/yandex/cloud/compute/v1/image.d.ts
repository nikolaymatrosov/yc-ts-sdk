import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
/** An Image resource. */
export interface Image {
    $type: 'yandex.cloud.compute.v1.Image';
    /** ID of the image. */
    id: string;
    /** ID of the folder that the image belongs to. */
    folderId: string;
    createdAt: Date | undefined;
    /** Name of the image. 1-63 characters long. */
    name: string;
    /** Description of the image. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /**
     * The name of the image family to which this image belongs.
     *
     * You can get the most recent image from a family by using
     * the [yandex.cloud.compute.v1.ImageService.GetLatestByFamily] request
     * and create the disk from this image.
     */
    family: string;
    /** The size of the image, specified in bytes. */
    storageSize: number;
    /** Minimum size of the disk which will be created from this image. */
    minDiskSize: number;
    /**
     * License IDs that indicate which licenses are attached to this resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     *
     * The correct license ID is generated by Yandex.Cloud. IDs are inherited by new resources created from this resource.
     *
     * If you know the license IDs, specify them when you create the image.
     * For example, if you create a disk image using a third-party utility and load it into Yandex Object Storage, the license IDs will be lost.
     * You can specify them in the [yandex.cloud.compute.v1.ImageService.Create] request.
     */
    productIds: string[];
    /** Current status of the image. */
    status: Image_Status;
    /** Operating system that is contained in the image. */
    os: Os | undefined;
    /** When true, indicates there is an image pool for fast creation disks from the image. */
    pooled: boolean;
}
export declare enum Image_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Image is being created. */
    CREATING = 1,
    /** READY - Image is ready to use. */
    READY = 2,
    /** ERROR - Image encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - Image is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1
}
export declare function image_StatusFromJSON(object: any): Image_Status;
export declare function image_StatusToJSON(object: Image_Status): string;
export interface Image_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.Image.LabelsEntry';
    key: string;
    value: string;
}
export interface Os {
    $type: 'yandex.cloud.compute.v1.Os';
    /**
     * Operating system type. The default is `LINUX`.
     *
     * This field is used to correctly emulate a vCPU and calculate the cost of using an instance.
     */
    type: Os_Type;
}
export declare enum Os_Type {
    TYPE_UNSPECIFIED = 0,
    /** LINUX - Linux operating system. */
    LINUX = 1,
    /** WINDOWS - Windows operating system. */
    WINDOWS = 2,
    UNRECOGNIZED = -1
}
export declare function os_TypeFromJSON(object: any): Os_Type;
export declare function os_TypeToJSON(object: Os_Type): string;
export declare const Image: {
    $type: "yandex.cloud.compute.v1.Image";
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial(object: DeepPartial<Image>): Image;
};
export declare const Image_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.Image.LabelsEntry";
    encode(message: Image_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image_LabelsEntry;
    fromJSON(object: any): Image_LabelsEntry;
    toJSON(message: Image_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Image_LabelsEntry>): Image_LabelsEntry;
};
export declare const Os: {
    $type: "yandex.cloud.compute.v1.Os";
    encode(message: Os, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Os;
    fromJSON(object: any): Os;
    toJSON(message: Os): unknown;
    fromPartial(object: DeepPartial<Os>): Os;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
