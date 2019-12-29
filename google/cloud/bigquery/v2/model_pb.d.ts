// package: google.cloud.bigquery.v2
// file: google/cloud/bigquery/v2/model.proto

import * as jspb from "google-protobuf";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_bigquery_v2_encryption_config_pb from "../../../../google/cloud/bigquery/v2/encryption_config_pb";
import * as google_cloud_bigquery_v2_model_reference_pb from "../../../../google/cloud/bigquery/v2/model_reference_pb";
import * as google_cloud_bigquery_v2_standard_sql_pb from "../../../../google/cloud/bigquery/v2/standard_sql_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Model extends jspb.Message {
  getEtag(): string;
  setEtag(value: string): void;

  hasModelReference(): boolean;
  clearModelReference(): void;
  getModelReference(): google_cloud_bigquery_v2_model_reference_pb.ModelReference | undefined;
  setModelReference(value?: google_cloud_bigquery_v2_model_reference_pb.ModelReference): void;

  getCreationTime(): number;
  setCreationTime(value: number): void;

  getLastModifiedTime(): number;
  setLastModifiedTime(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFriendlyName(): string;
  setFriendlyName(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getExpirationTime(): number;
  setExpirationTime(value: number): void;

  getLocation(): string;
  setLocation(value: string): void;

  hasEncryptionConfiguration(): boolean;
  clearEncryptionConfiguration(): void;
  getEncryptionConfiguration(): google_cloud_bigquery_v2_encryption_config_pb.EncryptionConfiguration | undefined;
  setEncryptionConfiguration(value?: google_cloud_bigquery_v2_encryption_config_pb.EncryptionConfiguration): void;

  getModelType(): Model.ModelTypeMap[keyof Model.ModelTypeMap];
  setModelType(value: Model.ModelTypeMap[keyof Model.ModelTypeMap]): void;

  clearTrainingRunsList(): void;
  getTrainingRunsList(): Array<Model.TrainingRun>;
  setTrainingRunsList(value: Array<Model.TrainingRun>): void;
  addTrainingRuns(value?: Model.TrainingRun, index?: number): Model.TrainingRun;

  clearFeatureColumnsList(): void;
  getFeatureColumnsList(): Array<google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField>;
  setFeatureColumnsList(value: Array<google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField>): void;
  addFeatureColumns(value?: google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField, index?: number): google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField;

  clearLabelColumnsList(): void;
  getLabelColumnsList(): Array<google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField>;
  setLabelColumnsList(value: Array<google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField>): void;
  addLabelColumns(value?: google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField, index?: number): google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    etag: string,
    modelReference?: google_cloud_bigquery_v2_model_reference_pb.ModelReference.AsObject,
    creationTime: number,
    lastModifiedTime: number,
    description: string,
    friendlyName: string,
    labelsMap: Array<[string, string]>,
    expirationTime: number,
    location: string,
    encryptionConfiguration?: google_cloud_bigquery_v2_encryption_config_pb.EncryptionConfiguration.AsObject,
    modelType: Model.ModelTypeMap[keyof Model.ModelTypeMap],
    trainingRunsList: Array<Model.TrainingRun.AsObject>,
    featureColumnsList: Array<google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField.AsObject>,
    labelColumnsList: Array<google_cloud_bigquery_v2_standard_sql_pb.StandardSqlField.AsObject>,
  }

  export class KmeansEnums extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KmeansEnums.AsObject;
    static toObject(includeInstance: boolean, msg: KmeansEnums): KmeansEnums.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KmeansEnums, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KmeansEnums;
    static deserializeBinaryFromReader(message: KmeansEnums, reader: jspb.BinaryReader): KmeansEnums;
  }

  export namespace KmeansEnums {
    export type AsObject = {
    }

    export interface KmeansInitializationMethodMap {
      KMEANS_INITIALIZATION_METHOD_UNSPECIFIED: 0;
      RANDOM: 1;
      CUSTOM: 2;
    }

    export const KmeansInitializationMethod: KmeansInitializationMethodMap;
  }

  export class RegressionMetrics extends jspb.Message {
    hasMeanAbsoluteError(): boolean;
    clearMeanAbsoluteError(): void;
    getMeanAbsoluteError(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMeanAbsoluteError(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasMeanSquaredError(): boolean;
    clearMeanSquaredError(): void;
    getMeanSquaredError(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMeanSquaredError(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasMeanSquaredLogError(): boolean;
    clearMeanSquaredLogError(): void;
    getMeanSquaredLogError(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMeanSquaredLogError(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasMedianAbsoluteError(): boolean;
    clearMedianAbsoluteError(): void;
    getMedianAbsoluteError(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMedianAbsoluteError(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasRSquared(): boolean;
    clearRSquared(): void;
    getRSquared(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRSquared(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegressionMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: RegressionMetrics): RegressionMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegressionMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegressionMetrics;
    static deserializeBinaryFromReader(message: RegressionMetrics, reader: jspb.BinaryReader): RegressionMetrics;
  }

  export namespace RegressionMetrics {
    export type AsObject = {
      meanAbsoluteError?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      meanSquaredError?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      meanSquaredLogError?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      medianAbsoluteError?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      rSquared?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
  }

  export class AggregateClassificationMetrics extends jspb.Message {
    hasPrecision(): boolean;
    clearPrecision(): void;
    getPrecision(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPrecision(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasRecall(): boolean;
    clearRecall(): void;
    getRecall(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRecall(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasAccuracy(): boolean;
    clearAccuracy(): void;
    getAccuracy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAccuracy(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setThreshold(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasF1Score(): boolean;
    clearF1Score(): void;
    getF1Score(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setF1Score(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasLogLoss(): boolean;
    clearLogLoss(): void;
    getLogLoss(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLogLoss(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasRocAuc(): boolean;
    clearRocAuc(): void;
    getRocAuc(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRocAuc(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AggregateClassificationMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: AggregateClassificationMetrics): AggregateClassificationMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AggregateClassificationMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AggregateClassificationMetrics;
    static deserializeBinaryFromReader(message: AggregateClassificationMetrics, reader: jspb.BinaryReader): AggregateClassificationMetrics;
  }

  export namespace AggregateClassificationMetrics {
    export type AsObject = {
      precision?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      recall?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      accuracy?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      threshold?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      f1Score?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      logLoss?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      rocAuc?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
  }

  export class BinaryClassificationMetrics extends jspb.Message {
    hasAggregateClassificationMetrics(): boolean;
    clearAggregateClassificationMetrics(): void;
    getAggregateClassificationMetrics(): Model.AggregateClassificationMetrics | undefined;
    setAggregateClassificationMetrics(value?: Model.AggregateClassificationMetrics): void;

    clearBinaryConfusionMatrixListList(): void;
    getBinaryConfusionMatrixListList(): Array<Model.BinaryClassificationMetrics.BinaryConfusionMatrix>;
    setBinaryConfusionMatrixListList(value: Array<Model.BinaryClassificationMetrics.BinaryConfusionMatrix>): void;
    addBinaryConfusionMatrixList(value?: Model.BinaryClassificationMetrics.BinaryConfusionMatrix, index?: number): Model.BinaryClassificationMetrics.BinaryConfusionMatrix;

    getPositiveLabel(): string;
    setPositiveLabel(value: string): void;

    getNegativeLabel(): string;
    setNegativeLabel(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BinaryClassificationMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: BinaryClassificationMetrics): BinaryClassificationMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BinaryClassificationMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BinaryClassificationMetrics;
    static deserializeBinaryFromReader(message: BinaryClassificationMetrics, reader: jspb.BinaryReader): BinaryClassificationMetrics;
  }

  export namespace BinaryClassificationMetrics {
    export type AsObject = {
      aggregateClassificationMetrics?: Model.AggregateClassificationMetrics.AsObject,
      binaryConfusionMatrixListList: Array<Model.BinaryClassificationMetrics.BinaryConfusionMatrix.AsObject>,
      positiveLabel: string,
      negativeLabel: string,
    }

    export class BinaryConfusionMatrix extends jspb.Message {
      hasPositiveClassThreshold(): boolean;
      clearPositiveClassThreshold(): void;
      getPositiveClassThreshold(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setPositiveClassThreshold(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasTruePositives(): boolean;
      clearTruePositives(): void;
      getTruePositives(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setTruePositives(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasFalsePositives(): boolean;
      clearFalsePositives(): void;
      getFalsePositives(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setFalsePositives(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasTrueNegatives(): boolean;
      clearTrueNegatives(): void;
      getTrueNegatives(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setTrueNegatives(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasFalseNegatives(): boolean;
      clearFalseNegatives(): void;
      getFalseNegatives(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setFalseNegatives(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasPrecision(): boolean;
      clearPrecision(): void;
      getPrecision(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setPrecision(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasRecall(): boolean;
      clearRecall(): void;
      getRecall(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setRecall(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasF1Score(): boolean;
      clearF1Score(): void;
      getF1Score(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setF1Score(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasAccuracy(): boolean;
      clearAccuracy(): void;
      getAccuracy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setAccuracy(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BinaryConfusionMatrix.AsObject;
      static toObject(includeInstance: boolean, msg: BinaryConfusionMatrix): BinaryConfusionMatrix.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BinaryConfusionMatrix, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BinaryConfusionMatrix;
      static deserializeBinaryFromReader(message: BinaryConfusionMatrix, reader: jspb.BinaryReader): BinaryConfusionMatrix;
    }

    export namespace BinaryConfusionMatrix {
      export type AsObject = {
        positiveClassThreshold?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        truePositives?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        falsePositives?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        trueNegatives?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        falseNegatives?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        precision?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        recall?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        f1Score?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        accuracy?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      }
    }
  }

  export class MultiClassClassificationMetrics extends jspb.Message {
    hasAggregateClassificationMetrics(): boolean;
    clearAggregateClassificationMetrics(): void;
    getAggregateClassificationMetrics(): Model.AggregateClassificationMetrics | undefined;
    setAggregateClassificationMetrics(value?: Model.AggregateClassificationMetrics): void;

    clearConfusionMatrixListList(): void;
    getConfusionMatrixListList(): Array<Model.MultiClassClassificationMetrics.ConfusionMatrix>;
    setConfusionMatrixListList(value: Array<Model.MultiClassClassificationMetrics.ConfusionMatrix>): void;
    addConfusionMatrixList(value?: Model.MultiClassClassificationMetrics.ConfusionMatrix, index?: number): Model.MultiClassClassificationMetrics.ConfusionMatrix;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiClassClassificationMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: MultiClassClassificationMetrics): MultiClassClassificationMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiClassClassificationMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiClassClassificationMetrics;
    static deserializeBinaryFromReader(message: MultiClassClassificationMetrics, reader: jspb.BinaryReader): MultiClassClassificationMetrics;
  }

  export namespace MultiClassClassificationMetrics {
    export type AsObject = {
      aggregateClassificationMetrics?: Model.AggregateClassificationMetrics.AsObject,
      confusionMatrixListList: Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.AsObject>,
    }

    export class ConfusionMatrix extends jspb.Message {
      hasConfidenceThreshold(): boolean;
      clearConfidenceThreshold(): void;
      getConfidenceThreshold(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setConfidenceThreshold(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      clearRowsList(): void;
      getRowsList(): Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.Row>;
      setRowsList(value: Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.Row>): void;
      addRows(value?: Model.MultiClassClassificationMetrics.ConfusionMatrix.Row, index?: number): Model.MultiClassClassificationMetrics.ConfusionMatrix.Row;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ConfusionMatrix.AsObject;
      static toObject(includeInstance: boolean, msg: ConfusionMatrix): ConfusionMatrix.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ConfusionMatrix, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ConfusionMatrix;
      static deserializeBinaryFromReader(message: ConfusionMatrix, reader: jspb.BinaryReader): ConfusionMatrix;
    }

    export namespace ConfusionMatrix {
      export type AsObject = {
        confidenceThreshold?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        rowsList: Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.Row.AsObject>,
      }

      export class Entry extends jspb.Message {
        getPredictedLabel(): string;
        setPredictedLabel(value: string): void;

        hasItemCount(): boolean;
        clearItemCount(): void;
        getItemCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setItemCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Entry.AsObject;
        static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Entry;
        static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
      }

      export namespace Entry {
        export type AsObject = {
          predictedLabel: string,
          itemCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
      }

      export class Row extends jspb.Message {
        getActualLabel(): string;
        setActualLabel(value: string): void;

        clearEntriesList(): void;
        getEntriesList(): Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.Entry>;
        setEntriesList(value: Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.Entry>): void;
        addEntries(value?: Model.MultiClassClassificationMetrics.ConfusionMatrix.Entry, index?: number): Model.MultiClassClassificationMetrics.ConfusionMatrix.Entry;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Row.AsObject;
        static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Row;
        static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
      }

      export namespace Row {
        export type AsObject = {
          actualLabel: string,
          entriesList: Array<Model.MultiClassClassificationMetrics.ConfusionMatrix.Entry.AsObject>,
        }
      }
    }
  }

  export class ClusteringMetrics extends jspb.Message {
    hasDaviesBouldinIndex(): boolean;
    clearDaviesBouldinIndex(): void;
    getDaviesBouldinIndex(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDaviesBouldinIndex(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasMeanSquaredDistance(): boolean;
    clearMeanSquaredDistance(): void;
    getMeanSquaredDistance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMeanSquaredDistance(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    clearClustersList(): void;
    getClustersList(): Array<Model.ClusteringMetrics.Cluster>;
    setClustersList(value: Array<Model.ClusteringMetrics.Cluster>): void;
    addClusters(value?: Model.ClusteringMetrics.Cluster, index?: number): Model.ClusteringMetrics.Cluster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusteringMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: ClusteringMetrics): ClusteringMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusteringMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusteringMetrics;
    static deserializeBinaryFromReader(message: ClusteringMetrics, reader: jspb.BinaryReader): ClusteringMetrics;
  }

  export namespace ClusteringMetrics {
    export type AsObject = {
      daviesBouldinIndex?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      meanSquaredDistance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      clustersList: Array<Model.ClusteringMetrics.Cluster.AsObject>,
    }

    export class Cluster extends jspb.Message {
      getCentroidId(): number;
      setCentroidId(value: number): void;

      clearFeatureValuesList(): void;
      getFeatureValuesList(): Array<Model.ClusteringMetrics.Cluster.FeatureValue>;
      setFeatureValuesList(value: Array<Model.ClusteringMetrics.Cluster.FeatureValue>): void;
      addFeatureValues(value?: Model.ClusteringMetrics.Cluster.FeatureValue, index?: number): Model.ClusteringMetrics.Cluster.FeatureValue;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Cluster.AsObject;
      static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Cluster;
      static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
    }

    export namespace Cluster {
      export type AsObject = {
        centroidId: number,
        featureValuesList: Array<Model.ClusteringMetrics.Cluster.FeatureValue.AsObject>,
        count?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      }

      export class FeatureValue extends jspb.Message {
        getFeatureColumn(): string;
        setFeatureColumn(value: string): void;

        hasNumericalValue(): boolean;
        clearNumericalValue(): void;
        getNumericalValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setNumericalValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        hasCategoricalValue(): boolean;
        clearCategoricalValue(): void;
        getCategoricalValue(): Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue | undefined;
        setCategoricalValue(value?: Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue): void;

        getValueCase(): FeatureValue.ValueCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FeatureValue.AsObject;
        static toObject(includeInstance: boolean, msg: FeatureValue): FeatureValue.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FeatureValue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FeatureValue;
        static deserializeBinaryFromReader(message: FeatureValue, reader: jspb.BinaryReader): FeatureValue;
      }

      export namespace FeatureValue {
        export type AsObject = {
          featureColumn: string,
          numericalValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
          categoricalValue?: Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue.AsObject,
        }

        export class CategoricalValue extends jspb.Message {
          clearCategoryCountsList(): void;
          getCategoryCountsList(): Array<Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue.CategoryCount>;
          setCategoryCountsList(value: Array<Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue.CategoryCount>): void;
          addCategoryCounts(value?: Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue.CategoryCount, index?: number): Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue.CategoryCount;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): CategoricalValue.AsObject;
          static toObject(includeInstance: boolean, msg: CategoricalValue): CategoricalValue.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: CategoricalValue, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): CategoricalValue;
          static deserializeBinaryFromReader(message: CategoricalValue, reader: jspb.BinaryReader): CategoricalValue;
        }

        export namespace CategoricalValue {
          export type AsObject = {
            categoryCountsList: Array<Model.ClusteringMetrics.Cluster.FeatureValue.CategoricalValue.CategoryCount.AsObject>,
          }

          export class CategoryCount extends jspb.Message {
            getCategory(): string;
            setCategory(value: string): void;

            hasCount(): boolean;
            clearCount(): void;
            getCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
            setCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CategoryCount.AsObject;
            static toObject(includeInstance: boolean, msg: CategoryCount): CategoryCount.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CategoryCount, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CategoryCount;
            static deserializeBinaryFromReader(message: CategoryCount, reader: jspb.BinaryReader): CategoryCount;
          }

          export namespace CategoryCount {
            export type AsObject = {
              category: string,
              count?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            }
          }
        }

        export enum ValueCase {
          VALUE_NOT_SET = 0,
          NUMERICAL_VALUE = 2,
          CATEGORICAL_VALUE = 3,
        }
      }
    }
  }

  export class EvaluationMetrics extends jspb.Message {
    hasRegressionMetrics(): boolean;
    clearRegressionMetrics(): void;
    getRegressionMetrics(): Model.RegressionMetrics | undefined;
    setRegressionMetrics(value?: Model.RegressionMetrics): void;

    hasBinaryClassificationMetrics(): boolean;
    clearBinaryClassificationMetrics(): void;
    getBinaryClassificationMetrics(): Model.BinaryClassificationMetrics | undefined;
    setBinaryClassificationMetrics(value?: Model.BinaryClassificationMetrics): void;

    hasMultiClassClassificationMetrics(): boolean;
    clearMultiClassClassificationMetrics(): void;
    getMultiClassClassificationMetrics(): Model.MultiClassClassificationMetrics | undefined;
    setMultiClassClassificationMetrics(value?: Model.MultiClassClassificationMetrics): void;

    hasClusteringMetrics(): boolean;
    clearClusteringMetrics(): void;
    getClusteringMetrics(): Model.ClusteringMetrics | undefined;
    setClusteringMetrics(value?: Model.ClusteringMetrics): void;

    getMetricsCase(): EvaluationMetrics.MetricsCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluationMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluationMetrics): EvaluationMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluationMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluationMetrics;
    static deserializeBinaryFromReader(message: EvaluationMetrics, reader: jspb.BinaryReader): EvaluationMetrics;
  }

  export namespace EvaluationMetrics {
    export type AsObject = {
      regressionMetrics?: Model.RegressionMetrics.AsObject,
      binaryClassificationMetrics?: Model.BinaryClassificationMetrics.AsObject,
      multiClassClassificationMetrics?: Model.MultiClassClassificationMetrics.AsObject,
      clusteringMetrics?: Model.ClusteringMetrics.AsObject,
    }

    export enum MetricsCase {
      METRICS_NOT_SET = 0,
      REGRESSION_METRICS = 1,
      BINARY_CLASSIFICATION_METRICS = 2,
      MULTI_CLASS_CLASSIFICATION_METRICS = 3,
      CLUSTERING_METRICS = 4,
    }
  }

  export class TrainingRun extends jspb.Message {
    hasTrainingOptions(): boolean;
    clearTrainingOptions(): void;
    getTrainingOptions(): Model.TrainingRun.TrainingOptions | undefined;
    setTrainingOptions(value?: Model.TrainingRun.TrainingOptions): void;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    clearResultsList(): void;
    getResultsList(): Array<Model.TrainingRun.IterationResult>;
    setResultsList(value: Array<Model.TrainingRun.IterationResult>): void;
    addResults(value?: Model.TrainingRun.IterationResult, index?: number): Model.TrainingRun.IterationResult;

    hasEvaluationMetrics(): boolean;
    clearEvaluationMetrics(): void;
    getEvaluationMetrics(): Model.EvaluationMetrics | undefined;
    setEvaluationMetrics(value?: Model.EvaluationMetrics): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainingRun.AsObject;
    static toObject(includeInstance: boolean, msg: TrainingRun): TrainingRun.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainingRun, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainingRun;
    static deserializeBinaryFromReader(message: TrainingRun, reader: jspb.BinaryReader): TrainingRun;
  }

  export namespace TrainingRun {
    export type AsObject = {
      trainingOptions?: Model.TrainingRun.TrainingOptions.AsObject,
      startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      resultsList: Array<Model.TrainingRun.IterationResult.AsObject>,
      evaluationMetrics?: Model.EvaluationMetrics.AsObject,
    }

    export class TrainingOptions extends jspb.Message {
      getMaxIterations(): number;
      setMaxIterations(value: number): void;

      getLossType(): Model.LossTypeMap[keyof Model.LossTypeMap];
      setLossType(value: Model.LossTypeMap[keyof Model.LossTypeMap]): void;

      getLearnRate(): number;
      setLearnRate(value: number): void;

      hasL1Regularization(): boolean;
      clearL1Regularization(): void;
      getL1Regularization(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setL1Regularization(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasL2Regularization(): boolean;
      clearL2Regularization(): void;
      getL2Regularization(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setL2Regularization(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasMinRelativeProgress(): boolean;
      clearMinRelativeProgress(): void;
      getMinRelativeProgress(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setMinRelativeProgress(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasWarmStart(): boolean;
      clearWarmStart(): void;
      getWarmStart(): google_protobuf_wrappers_pb.BoolValue | undefined;
      setWarmStart(value?: google_protobuf_wrappers_pb.BoolValue): void;

      hasEarlyStop(): boolean;
      clearEarlyStop(): void;
      getEarlyStop(): google_protobuf_wrappers_pb.BoolValue | undefined;
      setEarlyStop(value?: google_protobuf_wrappers_pb.BoolValue): void;

      clearInputLabelColumnsList(): void;
      getInputLabelColumnsList(): Array<string>;
      setInputLabelColumnsList(value: Array<string>): void;
      addInputLabelColumns(value: string, index?: number): string;

      getDataSplitMethod(): Model.DataSplitMethodMap[keyof Model.DataSplitMethodMap];
      setDataSplitMethod(value: Model.DataSplitMethodMap[keyof Model.DataSplitMethodMap]): void;

      getDataSplitEvalFraction(): number;
      setDataSplitEvalFraction(value: number): void;

      getDataSplitColumn(): string;
      setDataSplitColumn(value: string): void;

      getLearnRateStrategy(): Model.LearnRateStrategyMap[keyof Model.LearnRateStrategyMap];
      setLearnRateStrategy(value: Model.LearnRateStrategyMap[keyof Model.LearnRateStrategyMap]): void;

      getInitialLearnRate(): number;
      setInitialLearnRate(value: number): void;

      getLabelClassWeightsMap(): jspb.Map<string, number>;
      clearLabelClassWeightsMap(): void;
      getDistanceType(): Model.DistanceTypeMap[keyof Model.DistanceTypeMap];
      setDistanceType(value: Model.DistanceTypeMap[keyof Model.DistanceTypeMap]): void;

      getNumClusters(): number;
      setNumClusters(value: number): void;

      getModelUri(): string;
      setModelUri(value: string): void;

      getOptimizationStrategy(): Model.OptimizationStrategyMap[keyof Model.OptimizationStrategyMap];
      setOptimizationStrategy(value: Model.OptimizationStrategyMap[keyof Model.OptimizationStrategyMap]): void;

      getKmeansInitializationMethod(): Model.KmeansEnums.KmeansInitializationMethodMap[keyof Model.KmeansEnums.KmeansInitializationMethodMap];
      setKmeansInitializationMethod(value: Model.KmeansEnums.KmeansInitializationMethodMap[keyof Model.KmeansEnums.KmeansInitializationMethodMap]): void;

      getKmeansInitializationColumn(): string;
      setKmeansInitializationColumn(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TrainingOptions.AsObject;
      static toObject(includeInstance: boolean, msg: TrainingOptions): TrainingOptions.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TrainingOptions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TrainingOptions;
      static deserializeBinaryFromReader(message: TrainingOptions, reader: jspb.BinaryReader): TrainingOptions;
    }

    export namespace TrainingOptions {
      export type AsObject = {
        maxIterations: number,
        lossType: Model.LossTypeMap[keyof Model.LossTypeMap],
        learnRate: number,
        l1Regularization?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        l2Regularization?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        minRelativeProgress?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        warmStart?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        earlyStop?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        inputLabelColumnsList: Array<string>,
        dataSplitMethod: Model.DataSplitMethodMap[keyof Model.DataSplitMethodMap],
        dataSplitEvalFraction: number,
        dataSplitColumn: string,
        learnRateStrategy: Model.LearnRateStrategyMap[keyof Model.LearnRateStrategyMap],
        initialLearnRate: number,
        labelClassWeightsMap: Array<[string, number]>,
        distanceType: Model.DistanceTypeMap[keyof Model.DistanceTypeMap],
        numClusters: number,
        modelUri: string,
        optimizationStrategy: Model.OptimizationStrategyMap[keyof Model.OptimizationStrategyMap],
        kmeansInitializationMethod: Model.KmeansEnums.KmeansInitializationMethodMap[keyof Model.KmeansEnums.KmeansInitializationMethodMap],
        kmeansInitializationColumn: string,
      }
    }

    export class IterationResult extends jspb.Message {
      hasIndex(): boolean;
      clearIndex(): void;
      getIndex(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setIndex(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasDurationMs(): boolean;
      clearDurationMs(): void;
      getDurationMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setDurationMs(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasTrainingLoss(): boolean;
      clearTrainingLoss(): void;
      getTrainingLoss(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setTrainingLoss(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      hasEvalLoss(): boolean;
      clearEvalLoss(): void;
      getEvalLoss(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setEvalLoss(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      getLearnRate(): number;
      setLearnRate(value: number): void;

      clearClusterInfosList(): void;
      getClusterInfosList(): Array<Model.TrainingRun.IterationResult.ClusterInfo>;
      setClusterInfosList(value: Array<Model.TrainingRun.IterationResult.ClusterInfo>): void;
      addClusterInfos(value?: Model.TrainingRun.IterationResult.ClusterInfo, index?: number): Model.TrainingRun.IterationResult.ClusterInfo;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): IterationResult.AsObject;
      static toObject(includeInstance: boolean, msg: IterationResult): IterationResult.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: IterationResult, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): IterationResult;
      static deserializeBinaryFromReader(message: IterationResult, reader: jspb.BinaryReader): IterationResult;
    }

    export namespace IterationResult {
      export type AsObject = {
        index?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        durationMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        trainingLoss?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        evalLoss?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        learnRate: number,
        clusterInfosList: Array<Model.TrainingRun.IterationResult.ClusterInfo.AsObject>,
      }

      export class ClusterInfo extends jspb.Message {
        getCentroidId(): number;
        setCentroidId(value: number): void;

        hasClusterRadius(): boolean;
        clearClusterRadius(): void;
        getClusterRadius(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setClusterRadius(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        hasClusterSize(): boolean;
        clearClusterSize(): void;
        getClusterSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setClusterSize(value?: google_protobuf_wrappers_pb.Int64Value): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ClusterInfo.AsObject;
        static toObject(includeInstance: boolean, msg: ClusterInfo): ClusterInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ClusterInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ClusterInfo;
        static deserializeBinaryFromReader(message: ClusterInfo, reader: jspb.BinaryReader): ClusterInfo;
      }

      export namespace ClusterInfo {
        export type AsObject = {
          centroidId: number,
          clusterRadius?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
          clusterSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
      }
    }
  }

  export interface ModelTypeMap {
    MODEL_TYPE_UNSPECIFIED: 0;
    LINEAR_REGRESSION: 1;
    LOGISTIC_REGRESSION: 2;
    KMEANS: 3;
    TENSORFLOW: 6;
  }

  export const ModelType: ModelTypeMap;

  export interface LossTypeMap {
    LOSS_TYPE_UNSPECIFIED: 0;
    MEAN_SQUARED_LOSS: 1;
    MEAN_LOG_LOSS: 2;
  }

  export const LossType: LossTypeMap;

  export interface DistanceTypeMap {
    DISTANCE_TYPE_UNSPECIFIED: 0;
    EUCLIDEAN: 1;
    COSINE: 2;
  }

  export const DistanceType: DistanceTypeMap;

  export interface DataSplitMethodMap {
    DATA_SPLIT_METHOD_UNSPECIFIED: 0;
    RANDOM: 1;
    CUSTOM: 2;
    SEQUENTIAL: 3;
    NO_SPLIT: 4;
    AUTO_SPLIT: 5;
  }

  export const DataSplitMethod: DataSplitMethodMap;

  export interface LearnRateStrategyMap {
    LEARN_RATE_STRATEGY_UNSPECIFIED: 0;
    LINE_SEARCH: 1;
    CONSTANT: 2;
  }

  export const LearnRateStrategy: LearnRateStrategyMap;

  export interface OptimizationStrategyMap {
    OPTIMIZATION_STRATEGY_UNSPECIFIED: 0;
    BATCH_GRADIENT_DESCENT: 1;
    NORMAL_EQUATION: 2;
  }

  export const OptimizationStrategy: OptimizationStrategyMap;
}

export class GetModelRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    modelId: string,
  }
}

export class PatchModelRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): Model | undefined;
  setModel(value?: Model): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelRequest): PatchModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatchModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelRequest;
  static deserializeBinaryFromReader(message: PatchModelRequest, reader: jspb.BinaryReader): PatchModelRequest;
}

export namespace PatchModelRequest {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    modelId: string,
    model?: Model.AsObject,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    modelId: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  hasMaxResults(): boolean;
  clearMaxResults(): void;
  getMaxResults(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setMaxResults(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    maxResults?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    pageToken: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<Model>;
  setModelsList(value: Array<Model>): void;
  addModels(value?: Model, index?: number): Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    modelsList: Array<Model.AsObject>,
    nextPageToken: string,
  }
}

