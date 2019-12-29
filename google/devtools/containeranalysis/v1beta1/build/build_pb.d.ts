// package: grafeas.v1beta1.build
// file: google/devtools/containeranalysis/v1beta1/build/build.proto

import * as jspb from "google-protobuf";
import * as google_devtools_containeranalysis_v1beta1_provenance_provenance_pb from "../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb";

export class Build extends jspb.Message {
  getBuilderVersion(): string;
  setBuilderVersion(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): BuildSignature | undefined;
  setSignature(value?: BuildSignature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Build.AsObject;
  static toObject(includeInstance: boolean, msg: Build): Build.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Build, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Build;
  static deserializeBinaryFromReader(message: Build, reader: jspb.BinaryReader): Build;
}

export namespace Build {
  export type AsObject = {
    builderVersion: string,
    signature?: BuildSignature.AsObject,
  }
}

export class BuildSignature extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  getKeyType(): BuildSignature.KeyTypeMap[keyof BuildSignature.KeyTypeMap];
  setKeyType(value: BuildSignature.KeyTypeMap[keyof BuildSignature.KeyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildSignature.AsObject;
  static toObject(includeInstance: boolean, msg: BuildSignature): BuildSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildSignature;
  static deserializeBinaryFromReader(message: BuildSignature, reader: jspb.BinaryReader): BuildSignature;
}

export namespace BuildSignature {
  export type AsObject = {
    publicKey: string,
    signature: Uint8Array | string,
    keyId: string,
    keyType: BuildSignature.KeyTypeMap[keyof BuildSignature.KeyTypeMap],
  }

  export interface KeyTypeMap {
    KEY_TYPE_UNSPECIFIED: 0;
    PGP_ASCII_ARMORED: 1;
    PKIX_PEM: 2;
  }

  export const KeyType: KeyTypeMap;
}

export class Details extends jspb.Message {
  hasProvenance(): boolean;
  clearProvenance(): void;
  getProvenance(): google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance | undefined;
  setProvenance(value?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance): void;

  getProvenanceBytes(): string;
  setProvenanceBytes(value: string): void;

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
    provenance?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance.AsObject,
    provenanceBytes: string,
  }
}

