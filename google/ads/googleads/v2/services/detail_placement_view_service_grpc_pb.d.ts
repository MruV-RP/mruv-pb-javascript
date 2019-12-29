// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/detail_placement_view_service.proto

import * as google_ads_googleads_v2_services_detail_placement_view_service_pb from "../../../../../google/ads/googleads/v2/services/detail_placement_view_service_pb";
import * as google_ads_googleads_v2_resources_detail_placement_view_pb from "../../../../../google/ads/googleads/v2/resources/detail_placement_view_pb";
import * as grpc from "grpc";

interface IDetailPlacementViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDetailPlacementView: grpc.MethodDefinition<google_ads_googleads_v2_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest, google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView>;
}

export const DetailPlacementViewServiceService: IDetailPlacementViewServiceService;

export class DetailPlacementViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getDetailPlacementView(argument: google_ads_googleads_v2_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView>): grpc.ClientUnaryCall;
  getDetailPlacementView(argument: google_ads_googleads_v2_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView>): grpc.ClientUnaryCall;
  getDetailPlacementView(argument: google_ads_googleads_v2_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView>): grpc.ClientUnaryCall;
}
