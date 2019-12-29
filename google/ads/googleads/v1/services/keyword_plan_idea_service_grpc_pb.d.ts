// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/keyword_plan_idea_service.proto

import * as google_ads_googleads_v1_services_keyword_plan_idea_service_pb from "../../../../../google/ads/googleads/v1/services/keyword_plan_idea_service_pb";
import * as grpc from "grpc";

interface IKeywordPlanIdeaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateKeywordIdeas: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest, google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse>;
}

export const KeywordPlanIdeaServiceService: IKeywordPlanIdeaServiceService;

export class KeywordPlanIdeaServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateKeywordIdeas(argument: google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse>): grpc.ClientUnaryCall;
  generateKeywordIdeas(argument: google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse>): grpc.ClientUnaryCall;
  generateKeywordIdeas(argument: google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse>): grpc.ClientUnaryCall;
}
