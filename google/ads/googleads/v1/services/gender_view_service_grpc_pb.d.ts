// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/gender_view_service.proto

import * as google_ads_googleads_v1_services_gender_view_service_pb from "../../../../../google/ads/googleads/v1/services/gender_view_service_pb";
import * as google_ads_googleads_v1_resources_gender_view_pb from "../../../../../google/ads/googleads/v1/resources/gender_view_pb";
import * as grpc from "grpc";

interface IGenderViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGenderView: grpc.MethodDefinition<google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest, google_ads_googleads_v1_resources_gender_view_pb.GenderView>;
}

export const GenderViewServiceService: IGenderViewServiceService;

export class GenderViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGenderView(argument: google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_gender_view_pb.GenderView>): grpc.ClientUnaryCall;
  getGenderView(argument: google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_gender_view_pb.GenderView>): grpc.ClientUnaryCall;
  getGenderView(argument: google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_gender_view_pb.GenderView>): grpc.ClientUnaryCall;
}
