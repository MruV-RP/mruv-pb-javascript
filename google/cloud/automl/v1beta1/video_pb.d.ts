// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/video.proto

import * as jspb from "google-protobuf";
import * as google_cloud_automl_v1beta1_classification_pb from "../../../../google/cloud/automl/v1beta1/classification_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class VideoClassificationDatasetMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoClassificationDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VideoClassificationDatasetMetadata): VideoClassificationDatasetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoClassificationDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoClassificationDatasetMetadata;
  static deserializeBinaryFromReader(message: VideoClassificationDatasetMetadata, reader: jspb.BinaryReader): VideoClassificationDatasetMetadata;
}

export namespace VideoClassificationDatasetMetadata {
  export type AsObject = {
  }
}

export class VideoObjectTrackingDatasetMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoObjectTrackingDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VideoObjectTrackingDatasetMetadata): VideoObjectTrackingDatasetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoObjectTrackingDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoObjectTrackingDatasetMetadata;
  static deserializeBinaryFromReader(message: VideoObjectTrackingDatasetMetadata, reader: jspb.BinaryReader): VideoObjectTrackingDatasetMetadata;
}

export namespace VideoObjectTrackingDatasetMetadata {
  export type AsObject = {
  }
}

export class VideoClassificationModelMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoClassificationModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VideoClassificationModelMetadata): VideoClassificationModelMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoClassificationModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoClassificationModelMetadata;
  static deserializeBinaryFromReader(message: VideoClassificationModelMetadata, reader: jspb.BinaryReader): VideoClassificationModelMetadata;
}

export namespace VideoClassificationModelMetadata {
  export type AsObject = {
  }
}

export class VideoObjectTrackingModelMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoObjectTrackingModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VideoObjectTrackingModelMetadata): VideoObjectTrackingModelMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoObjectTrackingModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoObjectTrackingModelMetadata;
  static deserializeBinaryFromReader(message: VideoObjectTrackingModelMetadata, reader: jspb.BinaryReader): VideoObjectTrackingModelMetadata;
}

export namespace VideoObjectTrackingModelMetadata {
  export type AsObject = {
  }
}

