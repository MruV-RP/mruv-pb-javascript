// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/conversion_action_service.proto

import * as google_ads_googleads_v2_services_conversion_action_service_pb from "../../../../../google/ads/googleads/v2/services/conversion_action_service_pb";
import * as google_ads_googleads_v2_resources_conversion_action_pb from "../../../../../google/ads/googleads/v2/resources/conversion_action_pb";
import * as grpc from "grpc";

interface IConversionActionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getConversionAction: grpc.MethodDefinition<google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest, google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction>;
  mutateConversionActions: grpc.MethodDefinition<google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest, google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse>;
}

export const ConversionActionServiceService: IConversionActionServiceService;

export class ConversionActionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getConversionAction(argument: google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction>): grpc.ClientUnaryCall;
  getConversionAction(argument: google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction>): grpc.ClientUnaryCall;
  getConversionAction(argument: google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction>): grpc.ClientUnaryCall;
  mutateConversionActions(argument: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse>): grpc.ClientUnaryCall;
  mutateConversionActions(argument: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse>): grpc.ClientUnaryCall;
  mutateConversionActions(argument: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse>): grpc.ClientUnaryCall;
}
