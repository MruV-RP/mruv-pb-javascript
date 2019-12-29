// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/recommendation_service.proto

import * as google_ads_googleads_v2_services_recommendation_service_pb from "../../../../../google/ads/googleads/v2/services/recommendation_service_pb";
import * as google_ads_googleads_v2_resources_recommendation_pb from "../../../../../google/ads/googleads/v2/resources/recommendation_pb";
import * as grpc from "grpc";

interface IRecommendationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getRecommendation: grpc.MethodDefinition<google_ads_googleads_v2_services_recommendation_service_pb.GetRecommendationRequest, google_ads_googleads_v2_resources_recommendation_pb.Recommendation>;
  applyRecommendation: grpc.MethodDefinition<google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationRequest, google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationResponse>;
  dismissRecommendation: grpc.MethodDefinition<google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationRequest, google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationResponse>;
}

export const RecommendationServiceService: IRecommendationServiceService;

export class RecommendationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.GetRecommendationRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  getRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.GetRecommendationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  getRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.GetRecommendationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  applyRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationResponse>): grpc.ClientUnaryCall;
  applyRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationResponse>): grpc.ClientUnaryCall;
  applyRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_recommendation_service_pb.ApplyRecommendationResponse>): grpc.ClientUnaryCall;
  dismissRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationResponse>): grpc.ClientUnaryCall;
  dismissRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationResponse>): grpc.ClientUnaryCall;
  dismissRecommendation(argument: google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_recommendation_service_pb.DismissRecommendationResponse>): grpc.ClientUnaryCall;
}
