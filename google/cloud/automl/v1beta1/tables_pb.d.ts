// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/tables.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_automl_v1beta1_classification_pb from "../../../../google/cloud/automl/v1beta1/classification_pb";
import * as google_cloud_automl_v1beta1_column_spec_pb from "../../../../google/cloud/automl/v1beta1/column_spec_pb";
import * as google_cloud_automl_v1beta1_data_items_pb from "../../../../google/cloud/automl/v1beta1/data_items_pb";
import * as google_cloud_automl_v1beta1_data_stats_pb from "../../../../google/cloud/automl/v1beta1/data_stats_pb";
import * as google_cloud_automl_v1beta1_ranges_pb from "../../../../google/cloud/automl/v1beta1/ranges_pb";
import * as google_cloud_automl_v1beta1_temporal_pb from "../../../../google/cloud/automl/v1beta1/temporal_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TablesDatasetMetadata extends jspb.Message {
  getPrimaryTableSpecId(): string;
  setPrimaryTableSpecId(value: string): void;

  getTargetColumnSpecId(): string;
  setTargetColumnSpecId(value: string): void;

  getWeightColumnSpecId(): string;
  setWeightColumnSpecId(value: string): void;

  getMlUseColumnSpecId(): string;
  setMlUseColumnSpecId(value: string): void;

  getTargetColumnCorrelationsMap(): jspb.Map<string, google_cloud_automl_v1beta1_data_stats_pb.CorrelationStats>;
  clearTargetColumnCorrelationsMap(): void;
  hasStatsUpdateTime(): boolean;
  clearStatsUpdateTime(): void;
  getStatsUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStatsUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablesDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TablesDatasetMetadata): TablesDatasetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TablesDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablesDatasetMetadata;
  static deserializeBinaryFromReader(message: TablesDatasetMetadata, reader: jspb.BinaryReader): TablesDatasetMetadata;
}

export namespace TablesDatasetMetadata {
  export type AsObject = {
    primaryTableSpecId: string,
    targetColumnSpecId: string,
    weightColumnSpecId: string,
    mlUseColumnSpecId: string,
    targetColumnCorrelationsMap: Array<[string, google_cloud_automl_v1beta1_data_stats_pb.CorrelationStats.AsObject]>,
    statsUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TablesModelMetadata extends jspb.Message {
  hasOptimizationObjectiveRecallValue(): boolean;
  clearOptimizationObjectiveRecallValue(): void;
  getOptimizationObjectiveRecallValue(): number;
  setOptimizationObjectiveRecallValue(value: number): void;

  hasOptimizationObjectivePrecisionValue(): boolean;
  clearOptimizationObjectivePrecisionValue(): void;
  getOptimizationObjectivePrecisionValue(): number;
  setOptimizationObjectivePrecisionValue(value: number): void;

  hasTargetColumnSpec(): boolean;
  clearTargetColumnSpec(): void;
  getTargetColumnSpec(): google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec | undefined;
  setTargetColumnSpec(value?: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec): void;

  clearInputFeatureColumnSpecsList(): void;
  getInputFeatureColumnSpecsList(): Array<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>;
  setInputFeatureColumnSpecsList(value: Array<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): void;
  addInputFeatureColumnSpecs(value?: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec, index?: number): google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec;

  getOptimizationObjective(): string;
  setOptimizationObjective(value: string): void;

  clearTablesModelColumnInfoList(): void;
  getTablesModelColumnInfoList(): Array<TablesModelColumnInfo>;
  setTablesModelColumnInfoList(value: Array<TablesModelColumnInfo>): void;
  addTablesModelColumnInfo(value?: TablesModelColumnInfo, index?: number): TablesModelColumnInfo;

  getTrainBudgetMilliNodeHours(): number;
  setTrainBudgetMilliNodeHours(value: number): void;

  getTrainCostMilliNodeHours(): number;
  setTrainCostMilliNodeHours(value: number): void;

  getDisableEarlyStopping(): boolean;
  setDisableEarlyStopping(value: boolean): void;

  getAdditionalOptimizationObjectiveConfigCase(): TablesModelMetadata.AdditionalOptimizationObjectiveConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablesModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TablesModelMetadata): TablesModelMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TablesModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablesModelMetadata;
  static deserializeBinaryFromReader(message: TablesModelMetadata, reader: jspb.BinaryReader): TablesModelMetadata;
}

export namespace TablesModelMetadata {
  export type AsObject = {
    optimizationObjectiveRecallValue: number,
    optimizationObjectivePrecisionValue: number,
    targetColumnSpec?: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.AsObject,
    inputFeatureColumnSpecsList: Array<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.AsObject>,
    optimizationObjective: string,
    tablesModelColumnInfoList: Array<TablesModelColumnInfo.AsObject>,
    trainBudgetMilliNodeHours: number,
    trainCostMilliNodeHours: number,
    disableEarlyStopping: boolean,
  }

  export enum AdditionalOptimizationObjectiveConfigCase {
    ADDITIONAL_OPTIMIZATION_OBJECTIVE_CONFIG_NOT_SET = 0,
    OPTIMIZATION_OBJECTIVE_RECALL_VALUE = 17,
    OPTIMIZATION_OBJECTIVE_PRECISION_VALUE = 18,
  }
}

export class TablesAnnotation extends jspb.Message {
  getScore(): number;
  setScore(value: number): void;

  hasPredictionInterval(): boolean;
  clearPredictionInterval(): void;
  getPredictionInterval(): google_cloud_automl_v1beta1_ranges_pb.DoubleRange | undefined;
  setPredictionInterval(value?: google_cloud_automl_v1beta1_ranges_pb.DoubleRange): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Value | undefined;
  setValue(value?: google_protobuf_struct_pb.Value): void;

  clearTablesModelColumnInfoList(): void;
  getTablesModelColumnInfoList(): Array<TablesModelColumnInfo>;
  setTablesModelColumnInfoList(value: Array<TablesModelColumnInfo>): void;
  addTablesModelColumnInfo(value?: TablesModelColumnInfo, index?: number): TablesModelColumnInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablesAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TablesAnnotation): TablesAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TablesAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablesAnnotation;
  static deserializeBinaryFromReader(message: TablesAnnotation, reader: jspb.BinaryReader): TablesAnnotation;
}

export namespace TablesAnnotation {
  export type AsObject = {
    score: number,
    predictionInterval?: google_cloud_automl_v1beta1_ranges_pb.DoubleRange.AsObject,
    value?: google_protobuf_struct_pb.Value.AsObject,
    tablesModelColumnInfoList: Array<TablesModelColumnInfo.AsObject>,
  }
}

export class TablesModelColumnInfo extends jspb.Message {
  getColumnSpecName(): string;
  setColumnSpecName(value: string): void;

  getColumnDisplayName(): string;
  setColumnDisplayName(value: string): void;

  getFeatureImportance(): number;
  setFeatureImportance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablesModelColumnInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TablesModelColumnInfo): TablesModelColumnInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TablesModelColumnInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablesModelColumnInfo;
  static deserializeBinaryFromReader(message: TablesModelColumnInfo, reader: jspb.BinaryReader): TablesModelColumnInfo;
}

export namespace TablesModelColumnInfo {
  export type AsObject = {
    columnSpecName: string,
    columnDisplayName: string,
    featureImportance: number,
  }
}

