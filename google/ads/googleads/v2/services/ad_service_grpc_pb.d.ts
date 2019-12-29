// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_service.proto

import * as google_ads_googleads_v2_services_ad_service_pb from "../../../../../google/ads/googleads/v2/services/ad_service_pb";
import * as google_ads_googleads_v2_resources_ad_pb from "../../../../../google/ads/googleads/v2/resources/ad_pb";
import * as grpc from "grpc";

interface IAdServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAd: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_service_pb.GetAdRequest, google_ads_googleads_v2_resources_ad_pb.Ad>;
  mutateAds: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest, google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse>;
}

export const AdServiceService: IAdServiceService;

export class AdServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAd(argument: google_ads_googleads_v2_services_ad_service_pb.GetAdRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_pb.Ad>): grpc.ClientUnaryCall;
  getAd(argument: google_ads_googleads_v2_services_ad_service_pb.GetAdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_pb.Ad>): grpc.ClientUnaryCall;
  getAd(argument: google_ads_googleads_v2_services_ad_service_pb.GetAdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_pb.Ad>): grpc.ClientUnaryCall;
  mutateAds(argument: google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse>): grpc.ClientUnaryCall;
  mutateAds(argument: google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse>): grpc.ClientUnaryCall;
  mutateAds(argument: google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse>): grpc.ClientUnaryCall;
}
