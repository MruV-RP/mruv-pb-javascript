// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_ad_service.proto

import * as google_ads_googleads_v1_services_ad_group_ad_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_ad_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_ad_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_ad_pb";
import * as grpc from "grpc";

interface IAdGroupAdServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupAd: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_ad_service_pb.GetAdGroupAdRequest, google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd>;
  mutateAdGroupAds: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest, google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse>;
}

export const AdGroupAdServiceService: IAdGroupAdServiceService;

export class AdGroupAdServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupAd(argument: google_ads_googleads_v1_services_ad_group_ad_service_pb.GetAdGroupAdRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd>): grpc.ClientUnaryCall;
  getAdGroupAd(argument: google_ads_googleads_v1_services_ad_group_ad_service_pb.GetAdGroupAdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd>): grpc.ClientUnaryCall;
  getAdGroupAd(argument: google_ads_googleads_v1_services_ad_group_ad_service_pb.GetAdGroupAdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd>): grpc.ClientUnaryCall;
  mutateAdGroupAds(argument: google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupAds(argument: google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupAds(argument: google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse>): grpc.ClientUnaryCall;
}
