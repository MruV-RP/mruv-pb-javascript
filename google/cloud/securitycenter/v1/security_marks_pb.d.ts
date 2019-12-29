// package: google.cloud.securitycenter.v1
// file: google/cloud/securitycenter/v1/security_marks.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class SecurityMarks extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMarksMap(): jspb.Map<string, string>;
  clearMarksMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityMarks.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityMarks): SecurityMarks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityMarks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityMarks;
  static deserializeBinaryFromReader(message: SecurityMarks, reader: jspb.BinaryReader): SecurityMarks;
}

export namespace SecurityMarks {
  export type AsObject = {
    name: string,
    marksMap: Array<[string, string]>,
  }
}

