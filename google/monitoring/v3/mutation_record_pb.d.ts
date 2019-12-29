// package: google.monitoring.v3
// file: google/monitoring/v3/mutation_record.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class MutationRecord extends jspb.Message {
  hasMutateTime(): boolean;
  clearMutateTime(): void;
  getMutateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMutateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMutatedBy(): string;
  setMutatedBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutationRecord.AsObject;
  static toObject(includeInstance: boolean, msg: MutationRecord): MutationRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutationRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutationRecord;
  static deserializeBinaryFromReader(message: MutationRecord, reader: jspb.BinaryReader): MutationRecord;
}

export namespace MutationRecord {
  export type AsObject = {
    mutateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mutatedBy: string,
  }
}

