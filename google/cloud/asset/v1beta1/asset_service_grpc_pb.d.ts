// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.asset.v1beta1
// file: google/cloud/asset/v1beta1/asset_service.proto

import * as google_cloud_asset_v1beta1_asset_service_pb from "../../../../google/cloud/asset/v1beta1/asset_service_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IAssetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exportAssets: grpc.MethodDefinition<google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest, google_longrunning_operations_pb.Operation>;
  batchGetAssetsHistory: grpc.MethodDefinition<google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest, google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse>;
}

export const AssetServiceService: IAssetServiceService;

export class AssetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exportAssets(argument: google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAssets(argument: google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAssets(argument: google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchGetAssetsHistory(argument: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest, callback: grpc.requestCallback<google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse>): grpc.ClientUnaryCall;
  batchGetAssetsHistory(argument: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse>): grpc.ClientUnaryCall;
  batchGetAssetsHistory(argument: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse>): grpc.ClientUnaryCall;
}
