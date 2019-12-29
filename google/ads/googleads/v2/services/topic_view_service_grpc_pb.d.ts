// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/topic_view_service.proto

import * as google_ads_googleads_v2_services_topic_view_service_pb from "../../../../../google/ads/googleads/v2/services/topic_view_service_pb";
import * as google_ads_googleads_v2_resources_topic_view_pb from "../../../../../google/ads/googleads/v2/resources/topic_view_pb";
import * as grpc from "grpc";

interface ITopicViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getTopicView: grpc.MethodDefinition<google_ads_googleads_v2_services_topic_view_service_pb.GetTopicViewRequest, google_ads_googleads_v2_resources_topic_view_pb.TopicView>;
}

export const TopicViewServiceService: ITopicViewServiceService;

export class TopicViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getTopicView(argument: google_ads_googleads_v2_services_topic_view_service_pb.GetTopicViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_topic_view_pb.TopicView>): grpc.ClientUnaryCall;
  getTopicView(argument: google_ads_googleads_v2_services_topic_view_service_pb.GetTopicViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_topic_view_pb.TopicView>): grpc.ClientUnaryCall;
  getTopicView(argument: google_ads_googleads_v2_services_topic_view_service_pb.GetTopicViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_topic_view_pb.TopicView>): grpc.ClientUnaryCall;
}
