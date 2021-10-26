import { Duration } from '../../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.containers.v1";
export interface Container {
    id: string;
    folderId: string;
    createdAt: Date | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    url: string;
    status: Container_Status;
}
export declare enum Container_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function container_StatusFromJSON(object: any): Container_Status;
export declare function container_StatusToJSON(object: Container_Status): string;
export interface Container_LabelsEntry {
    key: string;
    value: string;
}
export interface Revision {
    id: string;
    containerId: string;
    description: string;
    createdAt: Date | undefined;
    image: Image | undefined;
    resources: Resources | undefined;
    executionTimeout: Duration | undefined;
    concurrency: number;
    serviceAccountId: string;
    status: Revision_Status;
}
export declare enum Revision_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    OBSOLETE = 3,
    UNRECOGNIZED = -1
}
export declare function revision_StatusFromJSON(object: any): Revision_Status;
export declare function revision_StatusToJSON(object: Revision_Status): string;
export interface Image {
    imageUrl: string;
    imageDigest: string;
    command: Command | undefined;
    args: Args | undefined;
    environment: {
        [key: string]: string;
    };
    workingDir: string;
}
export interface Image_EnvironmentEntry {
    key: string;
    value: string;
}
export interface Command {
    command: string[];
}
export interface Args {
    args: string[];
}
export interface Resources {
    memory: number;
    cores: number;
    coreFraction: number;
}
export declare const Container: {
    encode(message: Container, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Container;
    fromJSON(object: any): Container;
    toJSON(message: Container): unknown;
    fromPartial(object: DeepPartial<Container>): Container;
};
export declare const Container_LabelsEntry: {
    encode(message: Container_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Container_LabelsEntry;
    fromJSON(object: any): Container_LabelsEntry;
    toJSON(message: Container_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Container_LabelsEntry>): Container_LabelsEntry;
};
export declare const Revision: {
    encode(message: Revision, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Revision;
    fromJSON(object: any): Revision;
    toJSON(message: Revision): unknown;
    fromPartial(object: DeepPartial<Revision>): Revision;
};
export declare const Image: {
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial(object: DeepPartial<Image>): Image;
};
export declare const Image_EnvironmentEntry: {
    encode(message: Image_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image_EnvironmentEntry;
    fromJSON(object: any): Image_EnvironmentEntry;
    toJSON(message: Image_EnvironmentEntry): unknown;
    fromPartial(object: DeepPartial<Image_EnvironmentEntry>): Image_EnvironmentEntry;
};
export declare const Command: {
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    fromPartial(object: DeepPartial<Command>): Command;
};
export declare const Args: {
    encode(message: Args, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Args;
    fromJSON(object: any): Args;
    toJSON(message: Args): unknown;
    fromPartial(object: DeepPartial<Args>): Args;
};
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
