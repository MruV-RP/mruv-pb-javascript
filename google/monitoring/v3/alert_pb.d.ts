// package: google.monitoring.v3
// file: google/monitoring/v3/alert.proto

import * as jspb from "google-protobuf";
import * as google_monitoring_v3_common_pb from "../../../google/monitoring/v3/common_pb";
import * as google_monitoring_v3_mutation_record_pb from "../../../google/monitoring/v3/mutation_record_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";

export class AlertPolicy extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasDocumentation(): boolean;
  clearDocumentation(): void;
  getDocumentation(): AlertPolicy.Documentation | undefined;
  setDocumentation(value?: AlertPolicy.Documentation): void;

  getUserLabelsMap(): jspb.Map<string, string>;
  clearUserLabelsMap(): void;
  clearConditionsList(): void;
  getConditionsList(): Array<AlertPolicy.Condition>;
  setConditionsList(value: Array<AlertPolicy.Condition>): void;
  addConditions(value?: AlertPolicy.Condition, index?: number): AlertPolicy.Condition;

  getCombiner(): AlertPolicy.ConditionCombinerTypeMap[keyof AlertPolicy.ConditionCombinerTypeMap];
  setCombiner(value: AlertPolicy.ConditionCombinerTypeMap[keyof AlertPolicy.ConditionCombinerTypeMap]): void;

  hasEnabled(): boolean;
  clearEnabled(): void;
  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasValidity(): boolean;
  clearValidity(): void;
  getValidity(): google_rpc_status_pb.Status | undefined;
  setValidity(value?: google_rpc_status_pb.Status): void;

  clearNotificationChannelsList(): void;
  getNotificationChannelsList(): Array<string>;
  setNotificationChannelsList(value: Array<string>): void;
  addNotificationChannels(value: string, index?: number): string;

  hasCreationRecord(): boolean;
  clearCreationRecord(): void;
  getCreationRecord(): google_monitoring_v3_mutation_record_pb.MutationRecord | undefined;
  setCreationRecord(value?: google_monitoring_v3_mutation_record_pb.MutationRecord): void;

  hasMutationRecord(): boolean;
  clearMutationRecord(): void;
  getMutationRecord(): google_monitoring_v3_mutation_record_pb.MutationRecord | undefined;
  setMutationRecord(value?: google_monitoring_v3_mutation_record_pb.MutationRecord): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: AlertPolicy): AlertPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertPolicy;
  static deserializeBinaryFromReader(message: AlertPolicy, reader: jspb.BinaryReader): AlertPolicy;
}

export namespace AlertPolicy {
  export type AsObject = {
    name: string,
    displayName: string,
    documentation?: AlertPolicy.Documentation.AsObject,
    userLabelsMap: Array<[string, string]>,
    conditionsList: Array<AlertPolicy.Condition.AsObject>,
    combiner: AlertPolicy.ConditionCombinerTypeMap[keyof AlertPolicy.ConditionCombinerTypeMap],
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    validity?: google_rpc_status_pb.Status.AsObject,
    notificationChannelsList: Array<string>,
    creationRecord?: google_monitoring_v3_mutation_record_pb.MutationRecord.AsObject,
    mutationRecord?: google_monitoring_v3_mutation_record_pb.MutationRecord.AsObject,
  }

  export class Documentation extends jspb.Message {
    getContent(): string;
    setContent(value: string): void;

    getMimeType(): string;
    setMimeType(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Documentation.AsObject;
    static toObject(includeInstance: boolean, msg: Documentation): Documentation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Documentation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Documentation;
    static deserializeBinaryFromReader(message: Documentation, reader: jspb.BinaryReader): Documentation;
  }

  export namespace Documentation {
    export type AsObject = {
      content: string,
      mimeType: string,
    }
  }

  export class Condition extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDisplayName(): string;
    setDisplayName(value: string): void;

    hasConditionThreshold(): boolean;
    clearConditionThreshold(): void;
    getConditionThreshold(): AlertPolicy.Condition.MetricThreshold | undefined;
    setConditionThreshold(value?: AlertPolicy.Condition.MetricThreshold): void;

    hasConditionAbsent(): boolean;
    clearConditionAbsent(): void;
    getConditionAbsent(): AlertPolicy.Condition.MetricAbsence | undefined;
    setConditionAbsent(value?: AlertPolicy.Condition.MetricAbsence): void;

    getConditionCase(): Condition.ConditionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
  }

  export namespace Condition {
    export type AsObject = {
      name: string,
      displayName: string,
      conditionThreshold?: AlertPolicy.Condition.MetricThreshold.AsObject,
      conditionAbsent?: AlertPolicy.Condition.MetricAbsence.AsObject,
    }

    export class Trigger extends jspb.Message {
      hasCount(): boolean;
      clearCount(): void;
      getCount(): number;
      setCount(value: number): void;

      hasPercent(): boolean;
      clearPercent(): void;
      getPercent(): number;
      setPercent(value: number): void;

      getTypeCase(): Trigger.TypeCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Trigger.AsObject;
      static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Trigger;
      static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
    }

    export namespace Trigger {
      export type AsObject = {
        count: number,
        percent: number,
      }

      export enum TypeCase {
        TYPE_NOT_SET = 0,
        COUNT = 1,
        PERCENT = 2,
      }
    }

    export class MetricThreshold extends jspb.Message {
      getFilter(): string;
      setFilter(value: string): void;

      clearAggregationsList(): void;
      getAggregationsList(): Array<google_monitoring_v3_common_pb.Aggregation>;
      setAggregationsList(value: Array<google_monitoring_v3_common_pb.Aggregation>): void;
      addAggregations(value?: google_monitoring_v3_common_pb.Aggregation, index?: number): google_monitoring_v3_common_pb.Aggregation;

      getDenominatorFilter(): string;
      setDenominatorFilter(value: string): void;

      clearDenominatorAggregationsList(): void;
      getDenominatorAggregationsList(): Array<google_monitoring_v3_common_pb.Aggregation>;
      setDenominatorAggregationsList(value: Array<google_monitoring_v3_common_pb.Aggregation>): void;
      addDenominatorAggregations(value?: google_monitoring_v3_common_pb.Aggregation, index?: number): google_monitoring_v3_common_pb.Aggregation;

      getComparison(): google_monitoring_v3_common_pb.ComparisonTypeMap[keyof google_monitoring_v3_common_pb.ComparisonTypeMap];
      setComparison(value: google_monitoring_v3_common_pb.ComparisonTypeMap[keyof google_monitoring_v3_common_pb.ComparisonTypeMap]): void;

      getThresholdValue(): number;
      setThresholdValue(value: number): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): google_protobuf_duration_pb.Duration | undefined;
      setDuration(value?: google_protobuf_duration_pb.Duration): void;

      hasTrigger(): boolean;
      clearTrigger(): void;
      getTrigger(): AlertPolicy.Condition.Trigger | undefined;
      setTrigger(value?: AlertPolicy.Condition.Trigger): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MetricThreshold.AsObject;
      static toObject(includeInstance: boolean, msg: MetricThreshold): MetricThreshold.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MetricThreshold, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MetricThreshold;
      static deserializeBinaryFromReader(message: MetricThreshold, reader: jspb.BinaryReader): MetricThreshold;
    }

    export namespace MetricThreshold {
      export type AsObject = {
        filter: string,
        aggregationsList: Array<google_monitoring_v3_common_pb.Aggregation.AsObject>,
        denominatorFilter: string,
        denominatorAggregationsList: Array<google_monitoring_v3_common_pb.Aggregation.AsObject>,
        comparison: google_monitoring_v3_common_pb.ComparisonTypeMap[keyof google_monitoring_v3_common_pb.ComparisonTypeMap],
        thresholdValue: number,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        trigger?: AlertPolicy.Condition.Trigger.AsObject,
      }
    }

    export class MetricAbsence extends jspb.Message {
      getFilter(): string;
      setFilter(value: string): void;

      clearAggregationsList(): void;
      getAggregationsList(): Array<google_monitoring_v3_common_pb.Aggregation>;
      setAggregationsList(value: Array<google_monitoring_v3_common_pb.Aggregation>): void;
      addAggregations(value?: google_monitoring_v3_common_pb.Aggregation, index?: number): google_monitoring_v3_common_pb.Aggregation;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): google_protobuf_duration_pb.Duration | undefined;
      setDuration(value?: google_protobuf_duration_pb.Duration): void;

      hasTrigger(): boolean;
      clearTrigger(): void;
      getTrigger(): AlertPolicy.Condition.Trigger | undefined;
      setTrigger(value?: AlertPolicy.Condition.Trigger): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MetricAbsence.AsObject;
      static toObject(includeInstance: boolean, msg: MetricAbsence): MetricAbsence.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MetricAbsence, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MetricAbsence;
      static deserializeBinaryFromReader(message: MetricAbsence, reader: jspb.BinaryReader): MetricAbsence;
    }

    export namespace MetricAbsence {
      export type AsObject = {
        filter: string,
        aggregationsList: Array<google_monitoring_v3_common_pb.Aggregation.AsObject>,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        trigger?: AlertPolicy.Condition.Trigger.AsObject,
      }
    }

    export enum ConditionCase {
      CONDITION_NOT_SET = 0,
      CONDITION_THRESHOLD = 1,
      CONDITION_ABSENT = 2,
    }
  }

  export interface ConditionCombinerTypeMap {
    COMBINE_UNSPECIFIED: 0;
    AND: 1;
    OR: 2;
    AND_WITH_MATCHING_RESOURCE: 3;
  }

  export const ConditionCombinerType: ConditionCombinerTypeMap;
}

