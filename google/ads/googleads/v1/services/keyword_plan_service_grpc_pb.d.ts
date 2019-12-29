// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/keyword_plan_service.proto

import * as google_ads_googleads_v1_services_keyword_plan_service_pb from "../../../../../google/ads/googleads/v1/services/keyword_plan_service_pb";
import * as google_ads_googleads_v1_resources_keyword_plan_pb from "../../../../../google/ads/googleads/v1/resources/keyword_plan_pb";
import * as grpc from "grpc";

interface IKeywordPlanServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getKeywordPlan: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest, google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan>;
  mutateKeywordPlans: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest, google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse>;
  generateForecastMetrics: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest, google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse>;
  generateHistoricalMetrics: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest, google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse>;
}

export const KeywordPlanServiceService: IKeywordPlanServiceService;

export class KeywordPlanServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getKeywordPlan(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan>): grpc.ClientUnaryCall;
  getKeywordPlan(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan>): grpc.ClientUnaryCall;
  getKeywordPlan(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan>): grpc.ClientUnaryCall;
  mutateKeywordPlans(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlans(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlans(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse>): grpc.ClientUnaryCall;
  generateForecastMetrics(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse>): grpc.ClientUnaryCall;
  generateForecastMetrics(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse>): grpc.ClientUnaryCall;
  generateForecastMetrics(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse>): grpc.ClientUnaryCall;
  generateHistoricalMetrics(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse>): grpc.ClientUnaryCall;
  generateHistoricalMetrics(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse>): grpc.ClientUnaryCall;
  generateHistoricalMetrics(argument: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse>): grpc.ClientUnaryCall;
}
