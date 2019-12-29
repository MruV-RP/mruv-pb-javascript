// package: google.cloud.automl.v1
// file: google/cloud/automl/v1/annotation_spec.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class AnnotationSpec extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getExampleCount(): number;
  setExampleCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationSpec): AnnotationSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationSpec;
  static deserializeBinaryFromReader(message: AnnotationSpec, reader: jspb.BinaryReader): AnnotationSpec;
}

export namespace AnnotationSpec {
  export type AsObject = {
    name: string,
    displayName: string,
    exampleCount: number,
  }
}

