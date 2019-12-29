// package: google.cloud.bigquery.v2
// file: google/cloud/bigquery/v2/model_reference.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ModelReference extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelReference.AsObject;
  static toObject(includeInstance: boolean, msg: ModelReference): ModelReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModelReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelReference;
  static deserializeBinaryFromReader(message: ModelReference, reader: jspb.BinaryReader): ModelReference;
}

export namespace ModelReference {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    modelId: string,
  }
}

