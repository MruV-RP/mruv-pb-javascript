// package: google.devtools.build.v1
// file: google/devtools/build/v1/build_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class BuildStatus extends jspb.Message {
  getResult(): BuildStatus.ResultMap[keyof BuildStatus.ResultMap];
  setResult(value: BuildStatus.ResultMap[keyof BuildStatus.ResultMap]): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): google_protobuf_any_pb.Any | undefined;
  setDetails(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStatus.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStatus): BuildStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStatus;
  static deserializeBinaryFromReader(message: BuildStatus, reader: jspb.BinaryReader): BuildStatus;
}

export namespace BuildStatus {
  export type AsObject = {
    result: BuildStatus.ResultMap[keyof BuildStatus.ResultMap],
    details?: google_protobuf_any_pb.Any.AsObject,
  }

  export interface ResultMap {
    UNKNOWN_STATUS: 0;
    COMMAND_SUCCEEDED: 1;
    COMMAND_FAILED: 2;
    USER_ERROR: 3;
    SYSTEM_ERROR: 4;
    RESOURCE_EXHAUSTED: 5;
    INVOCATION_DEADLINE_EXCEEDED: 6;
    REQUEST_DEADLINE_EXCEEDED: 8;
    CANCELLED: 7;
  }

  export const Result: ResultMap;
}

