// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/text.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_automl_v1beta1_classification_pb from "../../../../google/cloud/automl/v1beta1/classification_pb";

export class TextClassificationDatasetMetadata extends jspb.Message {
  getClassificationType(): google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap[keyof google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap];
  setClassificationType(value: google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap[keyof google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextClassificationDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextClassificationDatasetMetadata): TextClassificationDatasetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextClassificationDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextClassificationDatasetMetadata;
  static deserializeBinaryFromReader(message: TextClassificationDatasetMetadata, reader: jspb.BinaryReader): TextClassificationDatasetMetadata;
}

export namespace TextClassificationDatasetMetadata {
  export type AsObject = {
    classificationType: google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap[keyof google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap],
  }
}

export class TextClassificationModelMetadata extends jspb.Message {
  getClassificationType(): google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap[keyof google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap];
  setClassificationType(value: google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap[keyof google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextClassificationModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextClassificationModelMetadata): TextClassificationModelMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextClassificationModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextClassificationModelMetadata;
  static deserializeBinaryFromReader(message: TextClassificationModelMetadata, reader: jspb.BinaryReader): TextClassificationModelMetadata;
}

export namespace TextClassificationModelMetadata {
  export type AsObject = {
    classificationType: google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap[keyof google_cloud_automl_v1beta1_classification_pb.ClassificationTypeMap],
  }
}

export class TextExtractionDatasetMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextExtractionDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextExtractionDatasetMetadata): TextExtractionDatasetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextExtractionDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextExtractionDatasetMetadata;
  static deserializeBinaryFromReader(message: TextExtractionDatasetMetadata, reader: jspb.BinaryReader): TextExtractionDatasetMetadata;
}

export namespace TextExtractionDatasetMetadata {
  export type AsObject = {
  }
}

export class TextExtractionModelMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextExtractionModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextExtractionModelMetadata): TextExtractionModelMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextExtractionModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextExtractionModelMetadata;
  static deserializeBinaryFromReader(message: TextExtractionModelMetadata, reader: jspb.BinaryReader): TextExtractionModelMetadata;
}

export namespace TextExtractionModelMetadata {
  export type AsObject = {
  }
}

export class TextSentimentDatasetMetadata extends jspb.Message {
  getSentimentMax(): number;
  setSentimentMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSentimentDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextSentimentDatasetMetadata): TextSentimentDatasetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSentimentDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSentimentDatasetMetadata;
  static deserializeBinaryFromReader(message: TextSentimentDatasetMetadata, reader: jspb.BinaryReader): TextSentimentDatasetMetadata;
}

export namespace TextSentimentDatasetMetadata {
  export type AsObject = {
    sentimentMax: number,
  }
}

export class TextSentimentModelMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSentimentModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextSentimentModelMetadata): TextSentimentModelMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSentimentModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSentimentModelMetadata;
  static deserializeBinaryFromReader(message: TextSentimentModelMetadata, reader: jspb.BinaryReader): TextSentimentModelMetadata;
}

export namespace TextSentimentModelMetadata {
  export type AsObject = {
  }
}

