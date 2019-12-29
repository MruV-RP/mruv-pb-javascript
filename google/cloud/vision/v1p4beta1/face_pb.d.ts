// package: google.cloud.vision.v1p4beta1
// file: google/cloud/vision/v1p4beta1/face.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_vision_v1p4beta1_geometry_pb from "../../../../google/cloud/vision/v1p4beta1/geometry_pb";

export class FaceRecognitionParams extends jspb.Message {
  clearCelebritySetList(): void;
  getCelebritySetList(): Array<string>;
  setCelebritySetList(value: Array<string>): void;
  addCelebritySet(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceRecognitionParams.AsObject;
  static toObject(includeInstance: boolean, msg: FaceRecognitionParams): FaceRecognitionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceRecognitionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceRecognitionParams;
  static deserializeBinaryFromReader(message: FaceRecognitionParams, reader: jspb.BinaryReader): FaceRecognitionParams;
}

export namespace FaceRecognitionParams {
  export type AsObject = {
    celebritySetList: Array<string>,
  }
}

export class Celebrity extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Celebrity.AsObject;
  static toObject(includeInstance: boolean, msg: Celebrity): Celebrity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Celebrity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Celebrity;
  static deserializeBinaryFromReader(message: Celebrity, reader: jspb.BinaryReader): Celebrity;
}

export namespace Celebrity {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
  }
}

export class FaceRecognitionResult extends jspb.Message {
  hasCelebrity(): boolean;
  clearCelebrity(): void;
  getCelebrity(): Celebrity | undefined;
  setCelebrity(value?: Celebrity): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: FaceRecognitionResult): FaceRecognitionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceRecognitionResult;
  static deserializeBinaryFromReader(message: FaceRecognitionResult, reader: jspb.BinaryReader): FaceRecognitionResult;
}

export namespace FaceRecognitionResult {
  export type AsObject = {
    celebrity?: Celebrity.AsObject,
    confidence: number,
  }
}

