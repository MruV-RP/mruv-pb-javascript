// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/group_placement_view_service.proto

import * as google_ads_googleads_v1_services_group_placement_view_service_pb from "../../../../../google/ads/googleads/v1/services/group_placement_view_service_pb";
import * as google_ads_googleads_v1_resources_group_placement_view_pb from "../../../../../google/ads/googleads/v1/resources/group_placement_view_pb";
import * as grpc from "grpc";

interface IGroupPlacementViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGroupPlacementView: grpc.MethodDefinition<google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest, google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView>;
}

export const GroupPlacementViewServiceService: IGroupPlacementViewServiceService;

export class GroupPlacementViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGroupPlacementView(argument: google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView>): grpc.ClientUnaryCall;
  getGroupPlacementView(argument: google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView>): grpc.ClientUnaryCall;
  getGroupPlacementView(argument: google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView>): grpc.ClientUnaryCall;
}
