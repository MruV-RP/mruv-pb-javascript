// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/data_stats.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class DataStats extends jspb.Message {
  hasFloat64Stats(): boolean;
  clearFloat64Stats(): void;
  getFloat64Stats(): Float64Stats | undefined;
  setFloat64Stats(value?: Float64Stats): void;

  hasStringStats(): boolean;
  clearStringStats(): void;
  getStringStats(): StringStats | undefined;
  setStringStats(value?: StringStats): void;

  hasTimestampStats(): boolean;
  clearTimestampStats(): void;
  getTimestampStats(): TimestampStats | undefined;
  setTimestampStats(value?: TimestampStats): void;

  hasArrayStats(): boolean;
  clearArrayStats(): void;
  getArrayStats(): ArrayStats | undefined;
  setArrayStats(value?: ArrayStats): void;

  hasStructStats(): boolean;
  clearStructStats(): void;
  getStructStats(): StructStats | undefined;
  setStructStats(value?: StructStats): void;

  hasCategoryStats(): boolean;
  clearCategoryStats(): void;
  getCategoryStats(): CategoryStats | undefined;
  setCategoryStats(value?: CategoryStats): void;

  getDistinctValueCount(): number;
  setDistinctValueCount(value: number): void;

  getNullValueCount(): number;
  setNullValueCount(value: number): void;

  getValidValueCount(): number;
  setValidValueCount(value: number): void;

  getStatsCase(): DataStats.StatsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataStats.AsObject;
  static toObject(includeInstance: boolean, msg: DataStats): DataStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataStats;
  static deserializeBinaryFromReader(message: DataStats, reader: jspb.BinaryReader): DataStats;
}

export namespace DataStats {
  export type AsObject = {
    float64Stats?: Float64Stats.AsObject,
    stringStats?: StringStats.AsObject,
    timestampStats?: TimestampStats.AsObject,
    arrayStats?: ArrayStats.AsObject,
    structStats?: StructStats.AsObject,
    categoryStats?: CategoryStats.AsObject,
    distinctValueCount: number,
    nullValueCount: number,
    validValueCount: number,
  }

  export enum StatsCase {
    STATS_NOT_SET = 0,
    FLOAT64_STATS = 3,
    STRING_STATS = 4,
    TIMESTAMP_STATS = 5,
    ARRAY_STATS = 6,
    STRUCT_STATS = 7,
    CATEGORY_STATS = 8,
  }
}

export class Float64Stats extends jspb.Message {
  getMean(): number;
  setMean(value: number): void;

  getStandardDeviation(): number;
  setStandardDeviation(value: number): void;

  clearQuantilesList(): void;
  getQuantilesList(): Array<number>;
  setQuantilesList(value: Array<number>): void;
  addQuantiles(value: number, index?: number): number;

  clearHistogramBucketsList(): void;
  getHistogramBucketsList(): Array<Float64Stats.HistogramBucket>;
  setHistogramBucketsList(value: Array<Float64Stats.HistogramBucket>): void;
  addHistogramBuckets(value?: Float64Stats.HistogramBucket, index?: number): Float64Stats.HistogramBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Float64Stats.AsObject;
  static toObject(includeInstance: boolean, msg: Float64Stats): Float64Stats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Float64Stats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Float64Stats;
  static deserializeBinaryFromReader(message: Float64Stats, reader: jspb.BinaryReader): Float64Stats;
}

export namespace Float64Stats {
  export type AsObject = {
    mean: number,
    standardDeviation: number,
    quantilesList: Array<number>,
    histogramBucketsList: Array<Float64Stats.HistogramBucket.AsObject>,
  }

  export class HistogramBucket extends jspb.Message {
    getMin(): number;
    setMin(value: number): void;

    getMax(): number;
    setMax(value: number): void;

    getCount(): number;
    setCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistogramBucket.AsObject;
    static toObject(includeInstance: boolean, msg: HistogramBucket): HistogramBucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistogramBucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistogramBucket;
    static deserializeBinaryFromReader(message: HistogramBucket, reader: jspb.BinaryReader): HistogramBucket;
  }

  export namespace HistogramBucket {
    export type AsObject = {
      min: number,
      max: number,
      count: number,
    }
  }
}

export class StringStats extends jspb.Message {
  clearTopUnigramStatsList(): void;
  getTopUnigramStatsList(): Array<StringStats.UnigramStats>;
  setTopUnigramStatsList(value: Array<StringStats.UnigramStats>): void;
  addTopUnigramStats(value?: StringStats.UnigramStats, index?: number): StringStats.UnigramStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringStats.AsObject;
  static toObject(includeInstance: boolean, msg: StringStats): StringStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringStats;
  static deserializeBinaryFromReader(message: StringStats, reader: jspb.BinaryReader): StringStats;
}

export namespace StringStats {
  export type AsObject = {
    topUnigramStatsList: Array<StringStats.UnigramStats.AsObject>,
  }

  export class UnigramStats extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    getCount(): number;
    setCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnigramStats.AsObject;
    static toObject(includeInstance: boolean, msg: UnigramStats): UnigramStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnigramStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnigramStats;
    static deserializeBinaryFromReader(message: UnigramStats, reader: jspb.BinaryReader): UnigramStats;
  }

  export namespace UnigramStats {
    export type AsObject = {
      value: string,
      count: number,
    }
  }
}

export class TimestampStats extends jspb.Message {
  getGranularStatsMap(): jspb.Map<string, TimestampStats.GranularStats>;
  clearGranularStatsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampStats.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampStats): TimestampStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampStats;
  static deserializeBinaryFromReader(message: TimestampStats, reader: jspb.BinaryReader): TimestampStats;
}

export namespace TimestampStats {
  export type AsObject = {
    granularStatsMap: Array<[string, TimestampStats.GranularStats.AsObject]>,
  }

  export class GranularStats extends jspb.Message {
    getBucketsMap(): jspb.Map<number, number>;
    clearBucketsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GranularStats.AsObject;
    static toObject(includeInstance: boolean, msg: GranularStats): GranularStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GranularStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GranularStats;
    static deserializeBinaryFromReader(message: GranularStats, reader: jspb.BinaryReader): GranularStats;
  }

  export namespace GranularStats {
    export type AsObject = {
      bucketsMap: Array<[number, number]>,
    }
  }
}

export class ArrayStats extends jspb.Message {
  hasMemberStats(): boolean;
  clearMemberStats(): void;
  getMemberStats(): DataStats | undefined;
  setMemberStats(value?: DataStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayStats.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayStats): ArrayStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrayStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayStats;
  static deserializeBinaryFromReader(message: ArrayStats, reader: jspb.BinaryReader): ArrayStats;
}

export namespace ArrayStats {
  export type AsObject = {
    memberStats?: DataStats.AsObject,
  }
}

export class StructStats extends jspb.Message {
  getFieldStatsMap(): jspb.Map<string, DataStats>;
  clearFieldStatsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructStats.AsObject;
  static toObject(includeInstance: boolean, msg: StructStats): StructStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructStats;
  static deserializeBinaryFromReader(message: StructStats, reader: jspb.BinaryReader): StructStats;
}

export namespace StructStats {
  export type AsObject = {
    fieldStatsMap: Array<[string, DataStats.AsObject]>,
  }
}

export class CategoryStats extends jspb.Message {
  clearTopCategoryStatsList(): void;
  getTopCategoryStatsList(): Array<CategoryStats.SingleCategoryStats>;
  setTopCategoryStatsList(value: Array<CategoryStats.SingleCategoryStats>): void;
  addTopCategoryStats(value?: CategoryStats.SingleCategoryStats, index?: number): CategoryStats.SingleCategoryStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryStats.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryStats): CategoryStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryStats;
  static deserializeBinaryFromReader(message: CategoryStats, reader: jspb.BinaryReader): CategoryStats;
}

export namespace CategoryStats {
  export type AsObject = {
    topCategoryStatsList: Array<CategoryStats.SingleCategoryStats.AsObject>,
  }

  export class SingleCategoryStats extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    getCount(): number;
    setCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleCategoryStats.AsObject;
    static toObject(includeInstance: boolean, msg: SingleCategoryStats): SingleCategoryStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleCategoryStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleCategoryStats;
    static deserializeBinaryFromReader(message: SingleCategoryStats, reader: jspb.BinaryReader): SingleCategoryStats;
  }

  export namespace SingleCategoryStats {
    export type AsObject = {
      value: string,
      count: number,
    }
  }
}

export class CorrelationStats extends jspb.Message {
  getCramersV(): number;
  setCramersV(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CorrelationStats.AsObject;
  static toObject(includeInstance: boolean, msg: CorrelationStats): CorrelationStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CorrelationStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CorrelationStats;
  static deserializeBinaryFromReader(message: CorrelationStats, reader: jspb.BinaryReader): CorrelationStats;
}

export namespace CorrelationStats {
  export type AsObject = {
    cramersV: number,
  }
}

