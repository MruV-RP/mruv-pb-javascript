// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/operating_system_version_constant_service.proto

import * as google_ads_googleads_v2_services_operating_system_version_constant_service_pb from "../../../../../google/ads/googleads/v2/services/operating_system_version_constant_service_pb";
import * as google_ads_googleads_v2_resources_operating_system_version_constant_pb from "../../../../../google/ads/googleads/v2/resources/operating_system_version_constant_pb";
import * as grpc from "grpc";

interface IOperatingSystemVersionConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getOperatingSystemVersionConstant: grpc.MethodDefinition<google_ads_googleads_v2_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest, google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant>;
}

export const OperatingSystemVersionConstantServiceService: IOperatingSystemVersionConstantServiceService;

export class OperatingSystemVersionConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getOperatingSystemVersionConstant(argument: google_ads_googleads_v2_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant>): grpc.ClientUnaryCall;
  getOperatingSystemVersionConstant(argument: google_ads_googleads_v2_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant>): grpc.ClientUnaryCall;
  getOperatingSystemVersionConstant(argument: google_ads_googleads_v2_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant>): grpc.ClientUnaryCall;
}
