// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/feed_item_target_service.proto

import * as google_ads_googleads_v2_services_feed_item_target_service_pb from "../../../../../google/ads/googleads/v2/services/feed_item_target_service_pb";
import * as google_ads_googleads_v2_resources_feed_item_target_pb from "../../../../../google/ads/googleads/v2/resources/feed_item_target_pb";
import * as grpc from "grpc";

interface IFeedItemTargetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFeedItemTarget: grpc.MethodDefinition<google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest, google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget>;
  mutateFeedItemTargets: grpc.MethodDefinition<google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest, google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse>;
}

export const FeedItemTargetServiceService: IFeedItemTargetServiceService;

export class FeedItemTargetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFeedItemTarget(argument: google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget>): grpc.ClientUnaryCall;
  getFeedItemTarget(argument: google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget>): grpc.ClientUnaryCall;
  getFeedItemTarget(argument: google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget>): grpc.ClientUnaryCall;
  mutateFeedItemTargets(argument: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse>): grpc.ClientUnaryCall;
  mutateFeedItemTargets(argument: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse>): grpc.ClientUnaryCall;
  mutateFeedItemTargets(argument: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse>): grpc.ClientUnaryCall;
}
