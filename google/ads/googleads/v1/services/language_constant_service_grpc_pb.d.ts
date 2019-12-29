// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/language_constant_service.proto

import * as google_ads_googleads_v1_services_language_constant_service_pb from "../../../../../google/ads/googleads/v1/services/language_constant_service_pb";
import * as google_ads_googleads_v1_resources_language_constant_pb from "../../../../../google/ads/googleads/v1/resources/language_constant_pb";
import * as grpc from "grpc";

interface ILanguageConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getLanguageConstant: grpc.MethodDefinition<google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest, google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant>;
}

export const LanguageConstantServiceService: ILanguageConstantServiceService;

export class LanguageConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getLanguageConstant(argument: google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant>): grpc.ClientUnaryCall;
  getLanguageConstant(argument: google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant>): grpc.ClientUnaryCall;
  getLanguageConstant(argument: google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant>): grpc.ClientUnaryCall;
}
