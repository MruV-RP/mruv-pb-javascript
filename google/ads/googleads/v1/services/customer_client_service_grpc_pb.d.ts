// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_client_service.proto

import * as google_ads_googleads_v1_services_customer_client_service_pb from "../../../../../google/ads/googleads/v1/services/customer_client_service_pb";
import * as google_ads_googleads_v1_resources_customer_client_pb from "../../../../../google/ads/googleads/v1/resources/customer_client_pb";
import * as grpc from "grpc";

interface ICustomerClientServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerClient: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_client_service_pb.GetCustomerClientRequest, google_ads_googleads_v1_resources_customer_client_pb.CustomerClient>;
}

export const CustomerClientServiceService: ICustomerClientServiceService;

export class CustomerClientServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerClient(argument: google_ads_googleads_v1_services_customer_client_service_pb.GetCustomerClientRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_client_pb.CustomerClient>): grpc.ClientUnaryCall;
  getCustomerClient(argument: google_ads_googleads_v1_services_customer_client_service_pb.GetCustomerClientRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_client_pb.CustomerClient>): grpc.ClientUnaryCall;
  getCustomerClient(argument: google_ads_googleads_v1_services_customer_client_service_pb.GetCustomerClientRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_client_pb.CustomerClient>): grpc.ClientUnaryCall;
}
