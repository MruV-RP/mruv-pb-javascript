// package: google.cloud.recommender.v1beta1
// file: google/cloud/recommender/v1beta1/recommender_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_recommender_v1beta1_recommendation_pb from "../../../../google/cloud/recommender/v1beta1/recommendation_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class ListRecommendationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecommendationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecommendationsRequest): ListRecommendationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecommendationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecommendationsRequest;
  static deserializeBinaryFromReader(message: ListRecommendationsRequest, reader: jspb.BinaryReader): ListRecommendationsRequest;
}

export namespace ListRecommendationsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListRecommendationsResponse extends jspb.Message {
  clearRecommendationsList(): void;
  getRecommendationsList(): Array<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>;
  setRecommendationsList(value: Array<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): void;
  addRecommendations(value?: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation, index?: number): google_cloud_recommender_v1beta1_recommendation_pb.Recommendation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecommendationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecommendationsResponse): ListRecommendationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecommendationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecommendationsResponse;
  static deserializeBinaryFromReader(message: ListRecommendationsResponse, reader: jspb.BinaryReader): ListRecommendationsResponse;
}

export namespace ListRecommendationsResponse {
  export type AsObject = {
    recommendationsList: Array<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation.AsObject>,
    nextPageToken: string,
  }
}

export class GetRecommendationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationRequest): GetRecommendationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationRequest;
  static deserializeBinaryFromReader(message: GetRecommendationRequest, reader: jspb.BinaryReader): GetRecommendationRequest;
}

export namespace GetRecommendationRequest {
  export type AsObject = {
    name: string,
  }
}

export class MarkRecommendationClaimedRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStateMetadataMap(): jspb.Map<string, string>;
  clearStateMetadataMap(): void;
  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkRecommendationClaimedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkRecommendationClaimedRequest): MarkRecommendationClaimedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkRecommendationClaimedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkRecommendationClaimedRequest;
  static deserializeBinaryFromReader(message: MarkRecommendationClaimedRequest, reader: jspb.BinaryReader): MarkRecommendationClaimedRequest;
}

export namespace MarkRecommendationClaimedRequest {
  export type AsObject = {
    name: string,
    stateMetadataMap: Array<[string, string]>,
    etag: string,
  }
}

export class MarkRecommendationSucceededRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStateMetadataMap(): jspb.Map<string, string>;
  clearStateMetadataMap(): void;
  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkRecommendationSucceededRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkRecommendationSucceededRequest): MarkRecommendationSucceededRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkRecommendationSucceededRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkRecommendationSucceededRequest;
  static deserializeBinaryFromReader(message: MarkRecommendationSucceededRequest, reader: jspb.BinaryReader): MarkRecommendationSucceededRequest;
}

export namespace MarkRecommendationSucceededRequest {
  export type AsObject = {
    name: string,
    stateMetadataMap: Array<[string, string]>,
    etag: string,
  }
}

export class MarkRecommendationFailedRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStateMetadataMap(): jspb.Map<string, string>;
  clearStateMetadataMap(): void;
  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkRecommendationFailedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkRecommendationFailedRequest): MarkRecommendationFailedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkRecommendationFailedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkRecommendationFailedRequest;
  static deserializeBinaryFromReader(message: MarkRecommendationFailedRequest, reader: jspb.BinaryReader): MarkRecommendationFailedRequest;
}

export namespace MarkRecommendationFailedRequest {
  export type AsObject = {
    name: string,
    stateMetadataMap: Array<[string, string]>,
    etag: string,
  }
}

