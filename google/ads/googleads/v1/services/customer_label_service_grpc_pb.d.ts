// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_label_service.proto

import * as google_ads_googleads_v1_services_customer_label_service_pb from "../../../../../google/ads/googleads/v1/services/customer_label_service_pb";
import * as google_ads_googleads_v1_resources_customer_label_pb from "../../../../../google/ads/googleads/v1/resources/customer_label_pb";
import * as grpc from "grpc";

interface ICustomerLabelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerLabel: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_label_service_pb.GetCustomerLabelRequest, google_ads_googleads_v1_resources_customer_label_pb.CustomerLabel>;
  mutateCustomerLabels: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsRequest, google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsResponse>;
}

export const CustomerLabelServiceService: ICustomerLabelServiceService;

export class CustomerLabelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerLabel(argument: google_ads_googleads_v1_services_customer_label_service_pb.GetCustomerLabelRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_label_pb.CustomerLabel>): grpc.ClientUnaryCall;
  getCustomerLabel(argument: google_ads_googleads_v1_services_customer_label_service_pb.GetCustomerLabelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_label_pb.CustomerLabel>): grpc.ClientUnaryCall;
  getCustomerLabel(argument: google_ads_googleads_v1_services_customer_label_service_pb.GetCustomerLabelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_label_pb.CustomerLabel>): grpc.ClientUnaryCall;
  mutateCustomerLabels(argument: google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsResponse>): grpc.ClientUnaryCall;
  mutateCustomerLabels(argument: google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsResponse>): grpc.ClientUnaryCall;
  mutateCustomerLabels(argument: google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_label_service_pb.MutateCustomerLabelsResponse>): grpc.ClientUnaryCall;
}
