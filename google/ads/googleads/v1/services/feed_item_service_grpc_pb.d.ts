// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/feed_item_service.proto

import * as google_ads_googleads_v1_services_feed_item_service_pb from "../../../../../google/ads/googleads/v1/services/feed_item_service_pb";
import * as google_ads_googleads_v1_resources_feed_item_pb from "../../../../../google/ads/googleads/v1/resources/feed_item_pb";
import * as grpc from "grpc";

interface IFeedItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFeedItem: grpc.MethodDefinition<google_ads_googleads_v1_services_feed_item_service_pb.GetFeedItemRequest, google_ads_googleads_v1_resources_feed_item_pb.FeedItem>;
  mutateFeedItems: grpc.MethodDefinition<google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsRequest, google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsResponse>;
}

export const FeedItemServiceService: IFeedItemServiceService;

export class FeedItemServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFeedItem(argument: google_ads_googleads_v1_services_feed_item_service_pb.GetFeedItemRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_feed_item_pb.FeedItem>): grpc.ClientUnaryCall;
  getFeedItem(argument: google_ads_googleads_v1_services_feed_item_service_pb.GetFeedItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_feed_item_pb.FeedItem>): grpc.ClientUnaryCall;
  getFeedItem(argument: google_ads_googleads_v1_services_feed_item_service_pb.GetFeedItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_feed_item_pb.FeedItem>): grpc.ClientUnaryCall;
  mutateFeedItems(argument: google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsResponse>): grpc.ClientUnaryCall;
  mutateFeedItems(argument: google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsResponse>): grpc.ClientUnaryCall;
  mutateFeedItems(argument: google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_feed_item_service_pb.MutateFeedItemsResponse>): grpc.ClientUnaryCall;
}
