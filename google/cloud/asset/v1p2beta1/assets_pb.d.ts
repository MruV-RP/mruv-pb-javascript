// package: google.cloud.asset.v1p2beta1
// file: google/cloud/asset/v1p2beta1/assets.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TemporalAsset extends jspb.Message {
  hasWindow(): boolean;
  clearWindow(): void;
  getWindow(): TimeWindow | undefined;
  setWindow(value?: TimeWindow): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): Asset | undefined;
  setAsset(value?: Asset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemporalAsset.AsObject;
  static toObject(includeInstance: boolean, msg: TemporalAsset): TemporalAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemporalAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemporalAsset;
  static deserializeBinaryFromReader(message: TemporalAsset, reader: jspb.BinaryReader): TemporalAsset;
}

export namespace TemporalAsset {
  export type AsObject = {
    window?: TimeWindow.AsObject,
    deleted: boolean,
    asset?: Asset.AsObject,
  }
}

export class TimeWindow extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeWindow.AsObject;
  static toObject(includeInstance: boolean, msg: TimeWindow): TimeWindow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeWindow;
  static deserializeBinaryFromReader(message: TimeWindow, reader: jspb.BinaryReader): TimeWindow;
}

export namespace TimeWindow {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Asset extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAssetType(): string;
  setAssetType(value: string): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  hasIamPolicy(): boolean;
  clearIamPolicy(): void;
  getIamPolicy(): google_iam_v1_policy_pb.Policy | undefined;
  setIamPolicy(value?: google_iam_v1_policy_pb.Policy): void;

  getIamPolicyName(): Uint8Array | string;
  getIamPolicyName_asU8(): Uint8Array;
  getIamPolicyName_asB64(): string;
  setIamPolicyName(value: Uint8Array | string): void;

  clearAncestorsList(): void;
  getAncestorsList(): Array<string>;
  setAncestorsList(value: Array<string>): void;
  addAncestors(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    name: string,
    assetType: string,
    resource?: Resource.AsObject,
    iamPolicy?: google_iam_v1_policy_pb.Policy.AsObject,
    iamPolicyName: Uint8Array | string,
    ancestorsList: Array<string>,
  }
}

export class Resource extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getDiscoveryDocumentUri(): string;
  setDiscoveryDocumentUri(value: string): void;

  getDiscoveryName(): string;
  setDiscoveryName(value: string): void;

  getResourceUrl(): string;
  setResourceUrl(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  hasInternalData(): boolean;
  clearInternalData(): void;
  getInternalData(): google_protobuf_any_pb.Any | undefined;
  setInternalData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    version: string,
    discoveryDocumentUri: string,
    discoveryName: string,
    resourceUrl: string,
    parent: string,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    internalData?: google_protobuf_any_pb.Any.AsObject,
  }
}

