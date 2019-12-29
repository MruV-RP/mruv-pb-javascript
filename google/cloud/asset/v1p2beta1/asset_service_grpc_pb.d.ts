// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.asset.v1p2beta1
// file: google/cloud/asset/v1p2beta1/asset_service.proto

import * as google_cloud_asset_v1p2beta1_asset_service_pb from "../../../../google/cloud/asset/v1p2beta1/asset_service_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IAssetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exportAssets: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest, google_longrunning_operations_pb.Operation>;
  batchGetAssetsHistory: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest, google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse>;
  createFeed: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest, google_cloud_asset_v1p2beta1_asset_service_pb.Feed>;
  getFeed: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest, google_cloud_asset_v1p2beta1_asset_service_pb.Feed>;
  listFeeds: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest, google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse>;
  updateFeed: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest, google_cloud_asset_v1p2beta1_asset_service_pb.Feed>;
  deleteFeed: grpc.MethodDefinition<google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest, google_protobuf_empty_pb.Empty>;
}

export const AssetServiceService: IAssetServiceService;

export class AssetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exportAssets(argument: google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAssets(argument: google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAssets(argument: google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchGetAssetsHistory(argument: google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse>): grpc.ClientUnaryCall;
  batchGetAssetsHistory(argument: google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse>): grpc.ClientUnaryCall;
  batchGetAssetsHistory(argument: google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse>): grpc.ClientUnaryCall;
  createFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  createFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  createFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  getFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  getFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  getFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  listFeeds(argument: google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse>): grpc.ClientUnaryCall;
  listFeeds(argument: google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse>): grpc.ClientUnaryCall;
  listFeeds(argument: google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse>): grpc.ClientUnaryCall;
  updateFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  updateFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  updateFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1p2beta1_asset_service_pb.Feed>): grpc.ClientUnaryCall;
  deleteFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteFeed(argument: google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
