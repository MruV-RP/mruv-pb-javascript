// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/carrier_constant_service.proto

import * as google_ads_googleads_v1_services_carrier_constant_service_pb from "../../../../../google/ads/googleads/v1/services/carrier_constant_service_pb";
import * as google_ads_googleads_v1_resources_carrier_constant_pb from "../../../../../google/ads/googleads/v1/resources/carrier_constant_pb";
import * as grpc from "grpc";

interface ICarrierConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCarrierConstant: grpc.MethodDefinition<google_ads_googleads_v1_services_carrier_constant_service_pb.GetCarrierConstantRequest, google_ads_googleads_v1_resources_carrier_constant_pb.CarrierConstant>;
}

export const CarrierConstantServiceService: ICarrierConstantServiceService;

export class CarrierConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCarrierConstant(argument: google_ads_googleads_v1_services_carrier_constant_service_pb.GetCarrierConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_carrier_constant_pb.CarrierConstant>): grpc.ClientUnaryCall;
  getCarrierConstant(argument: google_ads_googleads_v1_services_carrier_constant_service_pb.GetCarrierConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_carrier_constant_pb.CarrierConstant>): grpc.ClientUnaryCall;
  getCarrierConstant(argument: google_ads_googleads_v1_services_carrier_constant_service_pb.GetCarrierConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_carrier_constant_pb.CarrierConstant>): grpc.ClientUnaryCall;
}
