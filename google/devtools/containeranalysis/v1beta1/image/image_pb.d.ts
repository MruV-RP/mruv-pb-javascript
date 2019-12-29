// package: grafeas.v1beta1.image
// file: google/devtools/containeranalysis/v1beta1/image/image.proto

import * as jspb from "google-protobuf";

export class Layer extends jspb.Message {
  getDirective(): Layer.DirectiveMap[keyof Layer.DirectiveMap];
  setDirective(value: Layer.DirectiveMap[keyof Layer.DirectiveMap]): void;

  getArguments(): string;
  setArguments(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Layer.AsObject;
  static toObject(includeInstance: boolean, msg: Layer): Layer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Layer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Layer;
  static deserializeBinaryFromReader(message: Layer, reader: jspb.BinaryReader): Layer;
}

export namespace Layer {
  export type AsObject = {
    directive: Layer.DirectiveMap[keyof Layer.DirectiveMap],
    arguments: string,
  }

  export interface DirectiveMap {
    DIRECTIVE_UNSPECIFIED: 0;
    MAINTAINER: 1;
    RUN: 2;
    CMD: 3;
    LABEL: 4;
    EXPOSE: 5;
    ENV: 6;
    ADD: 7;
    COPY: 8;
    ENTRYPOINT: 9;
    VOLUME: 10;
    USER: 11;
    WORKDIR: 12;
    ARG: 13;
    ONBUILD: 14;
    STOPSIGNAL: 15;
    HEALTHCHECK: 16;
    SHELL: 17;
  }

  export const Directive: DirectiveMap;
}

export class Fingerprint extends jspb.Message {
  getV1Name(): string;
  setV1Name(value: string): void;

  clearV2BlobList(): void;
  getV2BlobList(): Array<string>;
  setV2BlobList(value: Array<string>): void;
  addV2Blob(value: string, index?: number): string;

  getV2Name(): string;
  setV2Name(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fingerprint.AsObject;
  static toObject(includeInstance: boolean, msg: Fingerprint): Fingerprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fingerprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fingerprint;
  static deserializeBinaryFromReader(message: Fingerprint, reader: jspb.BinaryReader): Fingerprint;
}

export namespace Fingerprint {
  export type AsObject = {
    v1Name: string,
    v2BlobList: Array<string>,
    v2Name: string,
  }
}

export class Basis extends jspb.Message {
  getResourceUrl(): string;
  setResourceUrl(value: string): void;

  hasFingerprint(): boolean;
  clearFingerprint(): void;
  getFingerprint(): Fingerprint | undefined;
  setFingerprint(value?: Fingerprint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Basis.AsObject;
  static toObject(includeInstance: boolean, msg: Basis): Basis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Basis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Basis;
  static deserializeBinaryFromReader(message: Basis, reader: jspb.BinaryReader): Basis;
}

export namespace Basis {
  export type AsObject = {
    resourceUrl: string,
    fingerprint?: Fingerprint.AsObject,
  }
}

export class Details extends jspb.Message {
  hasDerivedImage(): boolean;
  clearDerivedImage(): void;
  getDerivedImage(): Derived | undefined;
  setDerivedImage(value?: Derived): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    derivedImage?: Derived.AsObject,
  }
}

export class Derived extends jspb.Message {
  hasFingerprint(): boolean;
  clearFingerprint(): void;
  getFingerprint(): Fingerprint | undefined;
  setFingerprint(value?: Fingerprint): void;

  getDistance(): number;
  setDistance(value: number): void;

  clearLayerInfoList(): void;
  getLayerInfoList(): Array<Layer>;
  setLayerInfoList(value: Array<Layer>): void;
  addLayerInfo(value?: Layer, index?: number): Layer;

  getBaseResourceUrl(): string;
  setBaseResourceUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Derived.AsObject;
  static toObject(includeInstance: boolean, msg: Derived): Derived.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Derived, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Derived;
  static deserializeBinaryFromReader(message: Derived, reader: jspb.BinaryReader): Derived;
}

export namespace Derived {
  export type AsObject = {
    fingerprint?: Fingerprint.AsObject,
    distance: number,
    layerInfoList: Array<Layer.AsObject>,
    baseResourceUrl: string,
  }
}

