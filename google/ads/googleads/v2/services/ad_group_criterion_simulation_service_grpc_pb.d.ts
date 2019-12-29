// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_criterion_simulation_service.proto

import * as google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_criterion_simulation_service_pb";
import * as google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_criterion_simulation_pb";
import * as grpc from "grpc";

interface IAdGroupCriterionSimulationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupCriterionSimulation: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest, google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation>;
}

export const AdGroupCriterionSimulationServiceService: IAdGroupCriterionSimulationServiceService;

export class AdGroupCriterionSimulationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupCriterionSimulation(argument: google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation>): grpc.ClientUnaryCall;
  getAdGroupCriterionSimulation(argument: google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation>): grpc.ClientUnaryCall;
  getAdGroupCriterionSimulation(argument: google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation>): grpc.ClientUnaryCall;
}
