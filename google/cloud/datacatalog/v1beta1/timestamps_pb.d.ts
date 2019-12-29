// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/timestamps.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SystemTimestamps extends jspb.Message {
  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemTimestamps.AsObject;
  static toObject(includeInstance: boolean, msg: SystemTimestamps): SystemTimestamps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemTimestamps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemTimestamps;
  static deserializeBinaryFromReader(message: SystemTimestamps, reader: jspb.BinaryReader): SystemTimestamps;
}

export namespace SystemTimestamps {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

