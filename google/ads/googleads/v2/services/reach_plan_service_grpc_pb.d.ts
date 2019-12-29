// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/reach_plan_service.proto

import * as google_ads_googleads_v2_services_reach_plan_service_pb from "../../../../../google/ads/googleads/v2/services/reach_plan_service_pb";
import * as grpc from "grpc";

interface IReachPlanServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listPlannableLocations: grpc.MethodDefinition<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest, google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse>;
  listPlannableProducts: grpc.MethodDefinition<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest, google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse>;
  generateProductMixIdeas: grpc.MethodDefinition<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest, google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse>;
  generateReachForecast: grpc.MethodDefinition<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest, google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse>;
}

export const ReachPlanServiceService: IReachPlanServiceService;

export class ReachPlanServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listPlannableLocations(argument: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse>): grpc.ClientUnaryCall;
  listPlannableLocations(argument: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse>): grpc.ClientUnaryCall;
  listPlannableLocations(argument: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse>): grpc.ClientUnaryCall;
  listPlannableProducts(argument: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse>): grpc.ClientUnaryCall;
  listPlannableProducts(argument: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse>): grpc.ClientUnaryCall;
  listPlannableProducts(argument: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse>): grpc.ClientUnaryCall;
  generateProductMixIdeas(argument: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse>): grpc.ClientUnaryCall;
  generateProductMixIdeas(argument: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse>): grpc.ClientUnaryCall;
  generateProductMixIdeas(argument: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse>): grpc.ClientUnaryCall;
  generateReachForecast(argument: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse>): grpc.ClientUnaryCall;
  generateReachForecast(argument: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse>): grpc.ClientUnaryCall;
  generateReachForecast(argument: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse>): grpc.ClientUnaryCall;
}
