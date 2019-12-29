// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_service.proto

import * as google_ads_googleads_v1_services_customer_service_pb from "../../../../../google/ads/googleads/v1/services/customer_service_pb";
import * as google_ads_googleads_v1_resources_customer_pb from "../../../../../google/ads/googleads/v1/resources/customer_pb";
import * as grpc from "grpc";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomer: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest, google_ads_googleads_v1_resources_customer_pb.Customer>;
  mutateCustomer: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest, google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse>;
  listAccessibleCustomers: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest, google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse>;
  createCustomerClient: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest, google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse>;
}

export const CustomerServiceService: ICustomerServiceService;

export class CustomerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomer(argument: google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_pb.Customer>): grpc.ClientUnaryCall;
  getCustomer(argument: google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_pb.Customer>): grpc.ClientUnaryCall;
  getCustomer(argument: google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_pb.Customer>): grpc.ClientUnaryCall;
  mutateCustomer(argument: google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse>): grpc.ClientUnaryCall;
  mutateCustomer(argument: google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse>): grpc.ClientUnaryCall;
  mutateCustomer(argument: google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse>): grpc.ClientUnaryCall;
  listAccessibleCustomers(argument: google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse>): grpc.ClientUnaryCall;
  listAccessibleCustomers(argument: google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse>): grpc.ClientUnaryCall;
  listAccessibleCustomers(argument: google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse>): grpc.ClientUnaryCall;
  createCustomerClient(argument: google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse>): grpc.ClientUnaryCall;
  createCustomerClient(argument: google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse>): grpc.ClientUnaryCall;
  createCustomerClient(argument: google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse>): grpc.ClientUnaryCall;
}
