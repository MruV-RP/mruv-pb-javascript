// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/managed_placement_view_service.proto

import * as google_ads_googleads_v1_services_managed_placement_view_service_pb from "../../../../../google/ads/googleads/v1/services/managed_placement_view_service_pb";
import * as google_ads_googleads_v1_resources_managed_placement_view_pb from "../../../../../google/ads/googleads/v1/resources/managed_placement_view_pb";
import * as grpc from "grpc";

interface IManagedPlacementViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getManagedPlacementView: grpc.MethodDefinition<google_ads_googleads_v1_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest, google_ads_googleads_v1_resources_managed_placement_view_pb.ManagedPlacementView>;
}

export const ManagedPlacementViewServiceService: IManagedPlacementViewServiceService;

export class ManagedPlacementViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getManagedPlacementView(argument: google_ads_googleads_v1_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_managed_placement_view_pb.ManagedPlacementView>): grpc.ClientUnaryCall;
  getManagedPlacementView(argument: google_ads_googleads_v1_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_managed_placement_view_pb.ManagedPlacementView>): grpc.ClientUnaryCall;
  getManagedPlacementView(argument: google_ads_googleads_v1_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_managed_placement_view_pb.ManagedPlacementView>): grpc.ClientUnaryCall;
}
