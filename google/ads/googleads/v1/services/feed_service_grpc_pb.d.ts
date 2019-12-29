// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/feed_service.proto

import * as google_ads_googleads_v1_services_feed_service_pb from "../../../../../google/ads/googleads/v1/services/feed_service_pb";
import * as google_ads_googleads_v1_resources_feed_pb from "../../../../../google/ads/googleads/v1/resources/feed_pb";
import * as grpc from "grpc";

interface IFeedServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFeed: grpc.MethodDefinition<google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest, google_ads_googleads_v1_resources_feed_pb.Feed>;
  mutateFeeds: grpc.MethodDefinition<google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest, google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse>;
}

export const FeedServiceService: IFeedServiceService;

export class FeedServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFeed(argument: google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_feed_pb.Feed>): grpc.ClientUnaryCall;
  getFeed(argument: google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_feed_pb.Feed>): grpc.ClientUnaryCall;
  getFeed(argument: google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_feed_pb.Feed>): grpc.ClientUnaryCall;
  mutateFeeds(argument: google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse>): grpc.ClientUnaryCall;
  mutateFeeds(argument: google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse>): grpc.ClientUnaryCall;
  mutateFeeds(argument: google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse>): grpc.ClientUnaryCall;
}
