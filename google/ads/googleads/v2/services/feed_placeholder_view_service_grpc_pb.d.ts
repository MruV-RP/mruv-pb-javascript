// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/feed_placeholder_view_service.proto

import * as google_ads_googleads_v2_services_feed_placeholder_view_service_pb from "../../../../../google/ads/googleads/v2/services/feed_placeholder_view_service_pb";
import * as google_ads_googleads_v2_resources_feed_placeholder_view_pb from "../../../../../google/ads/googleads/v2/resources/feed_placeholder_view_pb";
import * as grpc from "grpc";

interface IFeedPlaceholderViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFeedPlaceholderView: grpc.MethodDefinition<google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest, google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView>;
}

export const FeedPlaceholderViewServiceService: IFeedPlaceholderViewServiceService;

export class FeedPlaceholderViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFeedPlaceholderView(argument: google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView>): grpc.ClientUnaryCall;
  getFeedPlaceholderView(argument: google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView>): grpc.ClientUnaryCall;
  getFeedPlaceholderView(argument: google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView>): grpc.ClientUnaryCall;
}
