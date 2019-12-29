// package: google.cloud.recommender.v1beta1
// file: google/cloud/recommender/v1beta1/recommendation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_money_pb from "../../../../google/type/money_pb";

export class Recommendation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRecommenderSubtype(): string;
  setRecommenderSubtype(value: string): void;

  hasLastRefreshTime(): boolean;
  clearLastRefreshTime(): void;
  getLastRefreshTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastRefreshTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPrimaryImpact(): boolean;
  clearPrimaryImpact(): void;
  getPrimaryImpact(): Impact | undefined;
  setPrimaryImpact(value?: Impact): void;

  clearAdditionalImpactList(): void;
  getAdditionalImpactList(): Array<Impact>;
  setAdditionalImpactList(value: Array<Impact>): void;
  addAdditionalImpact(value?: Impact, index?: number): Impact;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): RecommendationContent | undefined;
  setContent(value?: RecommendationContent): void;

  hasStateInfo(): boolean;
  clearStateInfo(): void;
  getStateInfo(): RecommendationStateInfo | undefined;
  setStateInfo(value?: RecommendationStateInfo): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recommendation.AsObject;
  static toObject(includeInstance: boolean, msg: Recommendation): Recommendation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Recommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recommendation;
  static deserializeBinaryFromReader(message: Recommendation, reader: jspb.BinaryReader): Recommendation;
}

export namespace Recommendation {
  export type AsObject = {
    name: string,
    description: string,
    recommenderSubtype: string,
    lastRefreshTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    primaryImpact?: Impact.AsObject,
    additionalImpactList: Array<Impact.AsObject>,
    content?: RecommendationContent.AsObject,
    stateInfo?: RecommendationStateInfo.AsObject,
    etag: string,
  }
}

export class RecommendationContent extends jspb.Message {
  clearOperationGroupsList(): void;
  getOperationGroupsList(): Array<OperationGroup>;
  setOperationGroupsList(value: Array<OperationGroup>): void;
  addOperationGroups(value?: OperationGroup, index?: number): OperationGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationContent.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationContent): RecommendationContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendationContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationContent;
  static deserializeBinaryFromReader(message: RecommendationContent, reader: jspb.BinaryReader): RecommendationContent;
}

export namespace RecommendationContent {
  export type AsObject = {
    operationGroupsList: Array<OperationGroup.AsObject>,
  }
}

export class OperationGroup extends jspb.Message {
  clearOperationsList(): void;
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  addOperations(value?: Operation, index?: number): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationGroup.AsObject;
  static toObject(includeInstance: boolean, msg: OperationGroup): OperationGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationGroup;
  static deserializeBinaryFromReader(message: OperationGroup, reader: jspb.BinaryReader): OperationGroup;
}

export namespace OperationGroup {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
  }
}

export class Operation extends jspb.Message {
  getAction(): string;
  setAction(value: string): void;

  getResourceType(): string;
  setResourceType(value: string): void;

  getResource(): string;
  setResource(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getSourceResource(): string;
  setSourceResource(value: string): void;

  getSourcePath(): string;
  setSourcePath(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Value | undefined;
  setValue(value?: google_protobuf_struct_pb.Value): void;

  getPathFiltersMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearPathFiltersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    action: string,
    resourceType: string,
    resource: string,
    path: string,
    sourceResource: string,
    sourcePath: string,
    value?: google_protobuf_struct_pb.Value.AsObject,
    pathFiltersMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class CostProjection extends jspb.Message {
  hasCost(): boolean;
  clearCost(): void;
  getCost(): google_type_money_pb.Money | undefined;
  setCost(value?: google_type_money_pb.Money): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CostProjection.AsObject;
  static toObject(includeInstance: boolean, msg: CostProjection): CostProjection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CostProjection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CostProjection;
  static deserializeBinaryFromReader(message: CostProjection, reader: jspb.BinaryReader): CostProjection;
}

export namespace CostProjection {
  export type AsObject = {
    cost?: google_type_money_pb.Money.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Impact extends jspb.Message {
  getCategory(): Impact.CategoryMap[keyof Impact.CategoryMap];
  setCategory(value: Impact.CategoryMap[keyof Impact.CategoryMap]): void;

  hasCostProjection(): boolean;
  clearCostProjection(): void;
  getCostProjection(): CostProjection | undefined;
  setCostProjection(value?: CostProjection): void;

  getProjectionCase(): Impact.ProjectionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Impact.AsObject;
  static toObject(includeInstance: boolean, msg: Impact): Impact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Impact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Impact;
  static deserializeBinaryFromReader(message: Impact, reader: jspb.BinaryReader): Impact;
}

export namespace Impact {
  export type AsObject = {
    category: Impact.CategoryMap[keyof Impact.CategoryMap],
    costProjection?: CostProjection.AsObject,
  }

  export interface CategoryMap {
    CATEGORY_UNSPECIFIED: 0;
    COST: 1;
    SECURITY: 2;
    PERFORMANCE: 3;
  }

  export const Category: CategoryMap;

  export enum ProjectionCase {
    PROJECTION_NOT_SET = 0,
    COST_PROJECTION = 100,
  }
}

export class RecommendationStateInfo extends jspb.Message {
  getState(): RecommendationStateInfo.StateMap[keyof RecommendationStateInfo.StateMap];
  setState(value: RecommendationStateInfo.StateMap[keyof RecommendationStateInfo.StateMap]): void;

  getStateMetadataMap(): jspb.Map<string, string>;
  clearStateMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationStateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationStateInfo): RecommendationStateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendationStateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationStateInfo;
  static deserializeBinaryFromReader(message: RecommendationStateInfo, reader: jspb.BinaryReader): RecommendationStateInfo;
}

export namespace RecommendationStateInfo {
  export type AsObject = {
    state: RecommendationStateInfo.StateMap[keyof RecommendationStateInfo.StateMap],
    stateMetadataMap: Array<[string, string]>,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    ACTIVE: 1;
    CLAIMED: 6;
    SUCCEEDED: 3;
    FAILED: 4;
    DISMISSED: 5;
  }

  export const State: StateMap;
}

