// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_ad_asset_view_service.proto

import * as google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_ad_asset_view_service_pb";
import * as google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_ad_asset_view_pb";
import * as grpc from "grpc";

interface IAdGroupAdAssetViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupAdAssetView: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest, google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView>;
}

export const AdGroupAdAssetViewServiceService: IAdGroupAdAssetViewServiceService;

export class AdGroupAdAssetViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupAdAssetView(argument: google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView>): grpc.ClientUnaryCall;
  getAdGroupAdAssetView(argument: google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView>): grpc.ClientUnaryCall;
  getAdGroupAdAssetView(argument: google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView>): grpc.ClientUnaryCall;
}
