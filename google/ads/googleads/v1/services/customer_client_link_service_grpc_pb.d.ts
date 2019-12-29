// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_client_link_service.proto

import * as google_ads_googleads_v1_services_customer_client_link_service_pb from "../../../../../google/ads/googleads/v1/services/customer_client_link_service_pb";
import * as google_ads_googleads_v1_resources_customer_client_link_pb from "../../../../../google/ads/googleads/v1/resources/customer_client_link_pb";
import * as grpc from "grpc";

interface ICustomerClientLinkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerClientLink: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_client_link_service_pb.GetCustomerClientLinkRequest, google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink>;
  mutateCustomerClientLink: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest, google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse>;
}

export const CustomerClientLinkServiceService: ICustomerClientLinkServiceService;

export class CustomerClientLinkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerClientLink(argument: google_ads_googleads_v1_services_customer_client_link_service_pb.GetCustomerClientLinkRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink>): grpc.ClientUnaryCall;
  getCustomerClientLink(argument: google_ads_googleads_v1_services_customer_client_link_service_pb.GetCustomerClientLinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink>): grpc.ClientUnaryCall;
  getCustomerClientLink(argument: google_ads_googleads_v1_services_customer_client_link_service_pb.GetCustomerClientLinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink>): grpc.ClientUnaryCall;
  mutateCustomerClientLink(argument: google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse>): grpc.ClientUnaryCall;
  mutateCustomerClientLink(argument: google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse>): grpc.ClientUnaryCall;
  mutateCustomerClientLink(argument: google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse>): grpc.ClientUnaryCall;
}
