// package: google.cloud.bigquery.v2
// file: google/cloud/bigquery/v2/encryption_config.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class EncryptionConfiguration extends jspb.Message {
  hasKmsKeyName(): boolean;
  clearKmsKeyName(): void;
  getKmsKeyName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKmsKeyName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptionConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptionConfiguration): EncryptionConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptionConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptionConfiguration;
  static deserializeBinaryFromReader(message: EncryptionConfiguration, reader: jspb.BinaryReader): EncryptionConfiguration;
}

export namespace EncryptionConfiguration {
  export type AsObject = {
    kmsKeyName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

