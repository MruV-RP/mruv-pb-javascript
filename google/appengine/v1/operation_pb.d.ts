// package: google.appengine.v1
// file: google/appengine/v1/operation.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class OperationMetadataV1 extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): void;

  hasInsertTime(): boolean;
  clearInsertTime(): void;
  getInsertTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInsertTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUser(): string;
  setUser(value: string): void;

  getTarget(): string;
  setTarget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadataV1.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadataV1): OperationMetadataV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationMetadataV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadataV1;
  static deserializeBinaryFromReader(message: OperationMetadataV1, reader: jspb.BinaryReader): OperationMetadataV1;
}

export namespace OperationMetadataV1 {
  export type AsObject = {
    method: string,
    insertTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    user: string,
    target: string,
  }
}

