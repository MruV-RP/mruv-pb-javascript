// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/column_spec.proto

import * as jspb from "google-protobuf";
import * as google_cloud_automl_v1beta1_data_stats_pb from "../../../../google/cloud/automl/v1beta1/data_stats_pb";
import * as google_cloud_automl_v1beta1_data_types_pb from "../../../../google/cloud/automl/v1beta1/data_types_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ColumnSpec extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDataType(): boolean;
  clearDataType(): void;
  getDataType(): google_cloud_automl_v1beta1_data_types_pb.DataType | undefined;
  setDataType(value?: google_cloud_automl_v1beta1_data_types_pb.DataType): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasDataStats(): boolean;
  clearDataStats(): void;
  getDataStats(): google_cloud_automl_v1beta1_data_stats_pb.DataStats | undefined;
  setDataStats(value?: google_cloud_automl_v1beta1_data_stats_pb.DataStats): void;

  clearTopCorrelatedColumnsList(): void;
  getTopCorrelatedColumnsList(): Array<ColumnSpec.CorrelatedColumn>;
  setTopCorrelatedColumnsList(value: Array<ColumnSpec.CorrelatedColumn>): void;
  addTopCorrelatedColumns(value?: ColumnSpec.CorrelatedColumn, index?: number): ColumnSpec.CorrelatedColumn;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnSpec): ColumnSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnSpec;
  static deserializeBinaryFromReader(message: ColumnSpec, reader: jspb.BinaryReader): ColumnSpec;
}

export namespace ColumnSpec {
  export type AsObject = {
    name: string,
    dataType?: google_cloud_automl_v1beta1_data_types_pb.DataType.AsObject,
    displayName: string,
    dataStats?: google_cloud_automl_v1beta1_data_stats_pb.DataStats.AsObject,
    topCorrelatedColumnsList: Array<ColumnSpec.CorrelatedColumn.AsObject>,
    etag: string,
  }

  export class CorrelatedColumn extends jspb.Message {
    getColumnSpecId(): string;
    setColumnSpecId(value: string): void;

    hasCorrelationStats(): boolean;
    clearCorrelationStats(): void;
    getCorrelationStats(): google_cloud_automl_v1beta1_data_stats_pb.CorrelationStats | undefined;
    setCorrelationStats(value?: google_cloud_automl_v1beta1_data_stats_pb.CorrelationStats): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CorrelatedColumn.AsObject;
    static toObject(includeInstance: boolean, msg: CorrelatedColumn): CorrelatedColumn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CorrelatedColumn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CorrelatedColumn;
    static deserializeBinaryFromReader(message: CorrelatedColumn, reader: jspb.BinaryReader): CorrelatedColumn;
  }

  export namespace CorrelatedColumn {
    export type AsObject = {
      columnSpecId: string,
      correlationStats?: google_cloud_automl_v1beta1_data_stats_pb.CorrelationStats.AsObject,
    }
  }
}

