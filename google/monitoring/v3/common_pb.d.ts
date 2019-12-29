// package: google.monitoring.v3
// file: google/monitoring/v3/common.proto

import * as jspb from "google-protobuf";
import * as google_api_distribution_pb from "../../../google/api/distribution_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TypedValue extends jspb.Message {
  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasInt64Value(): boolean;
  clearInt64Value(): void;
  getInt64Value(): number;
  setInt64Value(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasDistributionValue(): boolean;
  clearDistributionValue(): void;
  getDistributionValue(): google_api_distribution_pb.Distribution | undefined;
  setDistributionValue(value?: google_api_distribution_pb.Distribution): void;

  getValueCase(): TypedValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedValue.AsObject;
  static toObject(includeInstance: boolean, msg: TypedValue): TypedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedValue;
  static deserializeBinaryFromReader(message: TypedValue, reader: jspb.BinaryReader): TypedValue;
}

export namespace TypedValue {
  export type AsObject = {
    boolValue: boolean,
    int64Value: number,
    doubleValue: number,
    stringValue: string,
    distributionValue?: google_api_distribution_pb.Distribution.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    BOOL_VALUE = 1,
    INT64_VALUE = 2,
    DOUBLE_VALUE = 3,
    STRING_VALUE = 4,
    DISTRIBUTION_VALUE = 5,
  }
}

export class TimeInterval extends jspb.Message {
  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeInterval.AsObject;
  static toObject(includeInstance: boolean, msg: TimeInterval): TimeInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeInterval;
  static deserializeBinaryFromReader(message: TimeInterval, reader: jspb.BinaryReader): TimeInterval;
}

export namespace TimeInterval {
  export type AsObject = {
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Aggregation extends jspb.Message {
  hasAlignmentPeriod(): boolean;
  clearAlignmentPeriod(): void;
  getAlignmentPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setAlignmentPeriod(value?: google_protobuf_duration_pb.Duration): void;

  getPerSeriesAligner(): Aggregation.AlignerMap[keyof Aggregation.AlignerMap];
  setPerSeriesAligner(value: Aggregation.AlignerMap[keyof Aggregation.AlignerMap]): void;

  getCrossSeriesReducer(): Aggregation.ReducerMap[keyof Aggregation.ReducerMap];
  setCrossSeriesReducer(value: Aggregation.ReducerMap[keyof Aggregation.ReducerMap]): void;

  clearGroupByFieldsList(): void;
  getGroupByFieldsList(): Array<string>;
  setGroupByFieldsList(value: Array<string>): void;
  addGroupByFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Aggregation.AsObject;
  static toObject(includeInstance: boolean, msg: Aggregation): Aggregation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Aggregation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Aggregation;
  static deserializeBinaryFromReader(message: Aggregation, reader: jspb.BinaryReader): Aggregation;
}

export namespace Aggregation {
  export type AsObject = {
    alignmentPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    perSeriesAligner: Aggregation.AlignerMap[keyof Aggregation.AlignerMap],
    crossSeriesReducer: Aggregation.ReducerMap[keyof Aggregation.ReducerMap],
    groupByFieldsList: Array<string>,
  }

  export interface AlignerMap {
    ALIGN_NONE: 0;
    ALIGN_DELTA: 1;
    ALIGN_RATE: 2;
    ALIGN_INTERPOLATE: 3;
    ALIGN_NEXT_OLDER: 4;
    ALIGN_MIN: 10;
    ALIGN_MAX: 11;
    ALIGN_MEAN: 12;
    ALIGN_COUNT: 13;
    ALIGN_SUM: 14;
    ALIGN_STDDEV: 15;
    ALIGN_COUNT_TRUE: 16;
    ALIGN_COUNT_FALSE: 24;
    ALIGN_FRACTION_TRUE: 17;
    ALIGN_PERCENTILE_99: 18;
    ALIGN_PERCENTILE_95: 19;
    ALIGN_PERCENTILE_50: 20;
    ALIGN_PERCENTILE_05: 21;
    ALIGN_PERCENT_CHANGE: 23;
  }

  export const Aligner: AlignerMap;

  export interface ReducerMap {
    REDUCE_NONE: 0;
    REDUCE_MEAN: 1;
    REDUCE_MIN: 2;
    REDUCE_MAX: 3;
    REDUCE_SUM: 4;
    REDUCE_STDDEV: 5;
    REDUCE_COUNT: 6;
    REDUCE_COUNT_TRUE: 7;
    REDUCE_COUNT_FALSE: 15;
    REDUCE_FRACTION_TRUE: 8;
    REDUCE_PERCENTILE_99: 9;
    REDUCE_PERCENTILE_95: 10;
    REDUCE_PERCENTILE_50: 11;
    REDUCE_PERCENTILE_05: 12;
  }

  export const Reducer: ReducerMap;
}

export interface ComparisonTypeMap {
  COMPARISON_UNSPECIFIED: 0;
  COMPARISON_GT: 1;
  COMPARISON_GE: 2;
  COMPARISON_LT: 3;
  COMPARISON_LE: 4;
  COMPARISON_EQ: 5;
  COMPARISON_NE: 6;
}

export const ComparisonType: ComparisonTypeMap;

export interface ServiceTierMap {
  SERVICE_TIER_UNSPECIFIED: 0;
  SERVICE_TIER_BASIC: 1;
  SERVICE_TIER_PREMIUM: 2;
}

export const ServiceTier: ServiceTierMap;

