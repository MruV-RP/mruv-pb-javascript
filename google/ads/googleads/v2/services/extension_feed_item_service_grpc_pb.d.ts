// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/extension_feed_item_service.proto

import * as google_ads_googleads_v2_services_extension_feed_item_service_pb from "../../../../../google/ads/googleads/v2/services/extension_feed_item_service_pb";
import * as google_ads_googleads_v2_resources_extension_feed_item_pb from "../../../../../google/ads/googleads/v2/resources/extension_feed_item_pb";
import * as grpc from "grpc";

interface IExtensionFeedItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getExtensionFeedItem: grpc.MethodDefinition<google_ads_googleads_v2_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest, google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem>;
  mutateExtensionFeedItems: grpc.MethodDefinition<google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest, google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse>;
}

export const ExtensionFeedItemServiceService: IExtensionFeedItemServiceService;

export class ExtensionFeedItemServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getExtensionFeedItem(argument: google_ads_googleads_v2_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem>): grpc.ClientUnaryCall;
  getExtensionFeedItem(argument: google_ads_googleads_v2_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem>): grpc.ClientUnaryCall;
  getExtensionFeedItem(argument: google_ads_googleads_v2_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem>): grpc.ClientUnaryCall;
  mutateExtensionFeedItems(argument: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse>): grpc.ClientUnaryCall;
  mutateExtensionFeedItems(argument: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse>): grpc.ClientUnaryCall;
  mutateExtensionFeedItems(argument: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse>): grpc.ClientUnaryCall;
}
