// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/annotation_spec_set.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class AnnotationSpecSet extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearAnnotationSpecsList(): void;
  getAnnotationSpecsList(): Array<AnnotationSpec>;
  setAnnotationSpecsList(value: Array<AnnotationSpec>): void;
  addAnnotationSpecs(value?: AnnotationSpec, index?: number): AnnotationSpec;

  clearBlockingResourcesList(): void;
  getBlockingResourcesList(): Array<string>;
  setBlockingResourcesList(value: Array<string>): void;
  addBlockingResources(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationSpecSet.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationSpecSet): AnnotationSpecSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotationSpecSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationSpecSet;
  static deserializeBinaryFromReader(message: AnnotationSpecSet, reader: jspb.BinaryReader): AnnotationSpecSet;
}

export namespace AnnotationSpecSet {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    annotationSpecsList: Array<AnnotationSpec.AsObject>,
    blockingResourcesList: Array<string>,
  }
}

export class AnnotationSpec extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

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
    displayName: string,
    description: string,
  }
}

