// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_feed_service.proto

import * as google_ads_googleads_v1_services_ad_group_feed_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_feed_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_feed_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_feed_pb";
import * as grpc from "grpc";

interface IAdGroupFeedServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupFeed: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest, google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed>;
  mutateAdGroupFeeds: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest, google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse>;
}

export const AdGroupFeedServiceService: IAdGroupFeedServiceService;

export class AdGroupFeedServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupFeed(argument: google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed>): grpc.ClientUnaryCall;
  getAdGroupFeed(argument: google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed>): grpc.ClientUnaryCall;
  getAdGroupFeed(argument: google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed>): grpc.ClientUnaryCall;
  mutateAdGroupFeeds(argument: google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupFeeds(argument: google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupFeeds(argument: google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse>): grpc.ClientUnaryCall;
}
