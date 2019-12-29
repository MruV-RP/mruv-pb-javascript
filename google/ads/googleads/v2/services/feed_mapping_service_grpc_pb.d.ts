// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/feed_mapping_service.proto

import * as google_ads_googleads_v2_services_feed_mapping_service_pb from "../../../../../google/ads/googleads/v2/services/feed_mapping_service_pb";
import * as google_ads_googleads_v2_resources_feed_mapping_pb from "../../../../../google/ads/googleads/v2/resources/feed_mapping_pb";
import * as grpc from "grpc";

interface IFeedMappingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFeedMapping: grpc.MethodDefinition<google_ads_googleads_v2_services_feed_mapping_service_pb.GetFeedMappingRequest, google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping>;
  mutateFeedMappings: grpc.MethodDefinition<google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsRequest, google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsResponse>;
}

export const FeedMappingServiceService: IFeedMappingServiceService;

export class FeedMappingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFeedMapping(argument: google_ads_googleads_v2_services_feed_mapping_service_pb.GetFeedMappingRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping>): grpc.ClientUnaryCall;
  getFeedMapping(argument: google_ads_googleads_v2_services_feed_mapping_service_pb.GetFeedMappingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping>): grpc.ClientUnaryCall;
  getFeedMapping(argument: google_ads_googleads_v2_services_feed_mapping_service_pb.GetFeedMappingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping>): grpc.ClientUnaryCall;
  mutateFeedMappings(argument: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsResponse>): grpc.ClientUnaryCall;
  mutateFeedMappings(argument: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsResponse>): grpc.ClientUnaryCall;
  mutateFeedMappings(argument: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingsResponse>): grpc.ClientUnaryCall;
}
