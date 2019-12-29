// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_manager_link_service.proto

import * as google_ads_googleads_v1_services_customer_manager_link_service_pb from "../../../../../google/ads/googleads/v1/services/customer_manager_link_service_pb";
import * as google_ads_googleads_v1_resources_customer_manager_link_pb from "../../../../../google/ads/googleads/v1/resources/customer_manager_link_pb";
import * as grpc from "grpc";

interface ICustomerManagerLinkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerManagerLink: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest, google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink>;
  mutateCustomerManagerLink: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest, google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse>;
}

export const CustomerManagerLinkServiceService: ICustomerManagerLinkServiceService;

export class CustomerManagerLinkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerManagerLink(argument: google_ads_googleads_v1_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink>): grpc.ClientUnaryCall;
  getCustomerManagerLink(argument: google_ads_googleads_v1_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink>): grpc.ClientUnaryCall;
  getCustomerManagerLink(argument: google_ads_googleads_v1_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink>): grpc.ClientUnaryCall;
  mutateCustomerManagerLink(argument: google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse>): grpc.ClientUnaryCall;
  mutateCustomerManagerLink(argument: google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse>): grpc.ClientUnaryCall;
  mutateCustomerManagerLink(argument: google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse>): grpc.ClientUnaryCall;
}
