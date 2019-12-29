// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/parental_status_view_service.proto

import * as google_ads_googleads_v1_services_parental_status_view_service_pb from "../../../../../google/ads/googleads/v1/services/parental_status_view_service_pb";
import * as google_ads_googleads_v1_resources_parental_status_view_pb from "../../../../../google/ads/googleads/v1/resources/parental_status_view_pb";
import * as grpc from "grpc";

interface IParentalStatusViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getParentalStatusView: grpc.MethodDefinition<google_ads_googleads_v1_services_parental_status_view_service_pb.GetParentalStatusViewRequest, google_ads_googleads_v1_resources_parental_status_view_pb.ParentalStatusView>;
}

export const ParentalStatusViewServiceService: IParentalStatusViewServiceService;

export class ParentalStatusViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getParentalStatusView(argument: google_ads_googleads_v1_services_parental_status_view_service_pb.GetParentalStatusViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_parental_status_view_pb.ParentalStatusView>): grpc.ClientUnaryCall;
  getParentalStatusView(argument: google_ads_googleads_v1_services_parental_status_view_service_pb.GetParentalStatusViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_parental_status_view_pb.ParentalStatusView>): grpc.ClientUnaryCall;
  getParentalStatusView(argument: google_ads_googleads_v1_services_parental_status_view_service_pb.GetParentalStatusViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_parental_status_view_pb.ParentalStatusView>): grpc.ClientUnaryCall;
}
