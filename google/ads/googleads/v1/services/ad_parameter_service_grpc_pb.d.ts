// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_parameter_service.proto

import * as google_ads_googleads_v1_services_ad_parameter_service_pb from "../../../../../google/ads/googleads/v1/services/ad_parameter_service_pb";
import * as google_ads_googleads_v1_resources_ad_parameter_pb from "../../../../../google/ads/googleads/v1/resources/ad_parameter_pb";
import * as grpc from "grpc";

interface IAdParameterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdParameter: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_parameter_service_pb.GetAdParameterRequest, google_ads_googleads_v1_resources_ad_parameter_pb.AdParameter>;
  mutateAdParameters: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersRequest, google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersResponse>;
}

export const AdParameterServiceService: IAdParameterServiceService;

export class AdParameterServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdParameter(argument: google_ads_googleads_v1_services_ad_parameter_service_pb.GetAdParameterRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_parameter_pb.AdParameter>): grpc.ClientUnaryCall;
  getAdParameter(argument: google_ads_googleads_v1_services_ad_parameter_service_pb.GetAdParameterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_parameter_pb.AdParameter>): grpc.ClientUnaryCall;
  getAdParameter(argument: google_ads_googleads_v1_services_ad_parameter_service_pb.GetAdParameterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_parameter_pb.AdParameter>): grpc.ClientUnaryCall;
  mutateAdParameters(argument: google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersResponse>): grpc.ClientUnaryCall;
  mutateAdParameters(argument: google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersResponse>): grpc.ClientUnaryCall;
  mutateAdParameters(argument: google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_parameter_service_pb.MutateAdParametersResponse>): grpc.ClientUnaryCall;
}
