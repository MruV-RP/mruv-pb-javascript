// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/regression.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class RegressionEvaluationMetrics extends jspb.Message {
  getRootMeanSquaredError(): number;
  setRootMeanSquaredError(value: number): void;

  getMeanAbsoluteError(): number;
  setMeanAbsoluteError(value: number): void;

  getMeanAbsolutePercentageError(): number;
  setMeanAbsolutePercentageError(value: number): void;

  getRSquared(): number;
  setRSquared(value: number): void;

  getRootMeanSquaredLogError(): number;
  setRootMeanSquaredLogError(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegressionEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: RegressionEvaluationMetrics): RegressionEvaluationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegressionEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegressionEvaluationMetrics;
  static deserializeBinaryFromReader(message: RegressionEvaluationMetrics, reader: jspb.BinaryReader): RegressionEvaluationMetrics;
}

export namespace RegressionEvaluationMetrics {
  export type AsObject = {
    rootMeanSquaredError: number,
    meanAbsoluteError: number,
    meanAbsolutePercentageError: number,
    rSquared: number,
    rootMeanSquaredLogError: number,
  }
}

