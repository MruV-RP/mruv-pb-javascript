// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/keyword_plan_keyword_service.proto

import * as google_ads_googleads_v2_services_keyword_plan_keyword_service_pb from "../../../../../google/ads/googleads/v2/services/keyword_plan_keyword_service_pb";
import * as google_ads_googleads_v2_resources_keyword_plan_keyword_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_keyword_pb";
import * as grpc from "grpc";

interface IKeywordPlanKeywordServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getKeywordPlanKeyword: grpc.MethodDefinition<google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest, google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword>;
  mutateKeywordPlanKeywords: grpc.MethodDefinition<google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest, google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse>;
}

export const KeywordPlanKeywordServiceService: IKeywordPlanKeywordServiceService;

export class KeywordPlanKeywordServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getKeywordPlanKeyword(argument: google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword>): grpc.ClientUnaryCall;
  getKeywordPlanKeyword(argument: google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword>): grpc.ClientUnaryCall;
  getKeywordPlanKeyword(argument: google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword>): grpc.ClientUnaryCall;
  mutateKeywordPlanKeywords(argument: google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlanKeywords(argument: google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlanKeywords(argument: google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse>): grpc.ClientUnaryCall;
}
