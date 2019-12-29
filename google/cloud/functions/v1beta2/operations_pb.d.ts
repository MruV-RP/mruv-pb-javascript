// package: google.cloud.functions.v1beta2
// file: google/cloud/functions/v1beta2/operations.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class OperationMetadataV1Beta2 extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): void;

  getType(): OperationTypeMap[keyof OperationTypeMap];
  setType(value: OperationTypeMap[keyof OperationTypeMap]): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_protobuf_any_pb.Any | undefined;
  setRequest(value?: google_protobuf_any_pb.Any): void;

  getVersionId(): number;
  setVersionId(value: number): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadataV1Beta2.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadataV1Beta2): OperationMetadataV1Beta2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationMetadataV1Beta2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadataV1Beta2;
  static deserializeBinaryFromReader(message: OperationMetadataV1Beta2, reader: jspb.BinaryReader): OperationMetadataV1Beta2;
}

export namespace OperationMetadataV1Beta2 {
  export type AsObject = {
    target: string,
    type: OperationTypeMap[keyof OperationTypeMap],
    request?: google_protobuf_any_pb.Any.AsObject,
    versionId: number,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface OperationTypeMap {
  OPERATION_UNSPECIFIED: 0;
  CREATE_FUNCTION: 1;
  UPDATE_FUNCTION: 2;
  DELETE_FUNCTION: 3;
}

export const OperationType: OperationTypeMap;

