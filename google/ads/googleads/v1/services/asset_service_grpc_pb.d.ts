// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/asset_service.proto

import * as google_ads_googleads_v1_services_asset_service_pb from "../../../../../google/ads/googleads/v1/services/asset_service_pb";
import * as google_ads_googleads_v1_resources_asset_pb from "../../../../../google/ads/googleads/v1/resources/asset_pb";
import * as grpc from "grpc";

interface IAssetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAsset: grpc.MethodDefinition<google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest, google_ads_googleads_v1_resources_asset_pb.Asset>;
  mutateAssets: grpc.MethodDefinition<google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest, google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse>;
}

export const AssetServiceService: IAssetServiceService;

export class AssetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAsset(argument: google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_asset_pb.Asset>): grpc.ClientUnaryCall;
  getAsset(argument: google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_asset_pb.Asset>): grpc.ClientUnaryCall;
  getAsset(argument: google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_asset_pb.Asset>): grpc.ClientUnaryCall;
  mutateAssets(argument: google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse>): grpc.ClientUnaryCall;
  mutateAssets(argument: google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse>): grpc.ClientUnaryCall;
  mutateAssets(argument: google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse>): grpc.ClientUnaryCall;
}
