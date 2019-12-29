// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/topic_constant_service.proto

import * as google_ads_googleads_v2_services_topic_constant_service_pb from "../../../../../google/ads/googleads/v2/services/topic_constant_service_pb";
import * as google_ads_googleads_v2_resources_topic_constant_pb from "../../../../../google/ads/googleads/v2/resources/topic_constant_pb";
import * as grpc from "grpc";

interface ITopicConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getTopicConstant: grpc.MethodDefinition<google_ads_googleads_v2_services_topic_constant_service_pb.GetTopicConstantRequest, google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant>;
}

export const TopicConstantServiceService: ITopicConstantServiceService;

export class TopicConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getTopicConstant(argument: google_ads_googleads_v2_services_topic_constant_service_pb.GetTopicConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant>): grpc.ClientUnaryCall;
  getTopicConstant(argument: google_ads_googleads_v2_services_topic_constant_service_pb.GetTopicConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant>): grpc.ClientUnaryCall;
  getTopicConstant(argument: google_ads_googleads_v2_services_topic_constant_service_pb.GetTopicConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant>): grpc.ClientUnaryCall;
}
