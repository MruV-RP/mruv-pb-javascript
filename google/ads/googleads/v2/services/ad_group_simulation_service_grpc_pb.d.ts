// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_simulation_service.proto

import * as google_ads_googleads_v2_services_ad_group_simulation_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_simulation_service_pb";
import * as google_ads_googleads_v2_resources_ad_group_simulation_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_simulation_pb";
import * as grpc from "grpc";

interface IAdGroupSimulationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupSimulation: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest, google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation>;
}

export const AdGroupSimulationServiceService: IAdGroupSimulationServiceService;

export class AdGroupSimulationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupSimulation(argument: google_ads_googleads_v2_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation>): grpc.ClientUnaryCall;
  getAdGroupSimulation(argument: google_ads_googleads_v2_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation>): grpc.ClientUnaryCall;
  getAdGroupSimulation(argument: google_ads_googleads_v2_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation>): grpc.ClientUnaryCall;
}
