// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/google_ads_field_service.proto

import * as google_ads_googleads_v1_services_google_ads_field_service_pb from "../../../../../google/ads/googleads/v1/services/google_ads_field_service_pb";
import * as google_ads_googleads_v1_resources_google_ads_field_pb from "../../../../../google/ads/googleads/v1/resources/google_ads_field_pb";
import * as grpc from "grpc";

interface IGoogleAdsFieldServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGoogleAdsField: grpc.MethodDefinition<google_ads_googleads_v1_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest, google_ads_googleads_v1_resources_google_ads_field_pb.GoogleAdsField>;
  searchGoogleAdsFields: grpc.MethodDefinition<google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest, google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse>;
}

export const GoogleAdsFieldServiceService: IGoogleAdsFieldServiceService;

export class GoogleAdsFieldServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGoogleAdsField(argument: google_ads_googleads_v1_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_google_ads_field_pb.GoogleAdsField>): grpc.ClientUnaryCall;
  getGoogleAdsField(argument: google_ads_googleads_v1_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_google_ads_field_pb.GoogleAdsField>): grpc.ClientUnaryCall;
  getGoogleAdsField(argument: google_ads_googleads_v1_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_google_ads_field_pb.GoogleAdsField>): grpc.ClientUnaryCall;
  searchGoogleAdsFields(argument: google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse>): grpc.ClientUnaryCall;
  searchGoogleAdsFields(argument: google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse>): grpc.ClientUnaryCall;
  searchGoogleAdsFields(argument: google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse>): grpc.ClientUnaryCall;
}
