// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_negative_criterion_service.proto

import * as google_ads_googleads_v1_services_customer_negative_criterion_service_pb from "../../../../../google/ads/googleads/v1/services/customer_negative_criterion_service_pb";
import * as google_ads_googleads_v1_resources_customer_negative_criterion_pb from "../../../../../google/ads/googleads/v1/resources/customer_negative_criterion_pb";
import * as grpc from "grpc";

interface ICustomerNegativeCriterionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerNegativeCriterion: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest, google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion>;
  mutateCustomerNegativeCriteria: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest, google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse>;
}

export const CustomerNegativeCriterionServiceService: ICustomerNegativeCriterionServiceService;

export class CustomerNegativeCriterionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerNegativeCriterion(argument: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion>): grpc.ClientUnaryCall;
  getCustomerNegativeCriterion(argument: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion>): grpc.ClientUnaryCall;
  getCustomerNegativeCriterion(argument: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion>): grpc.ClientUnaryCall;
  mutateCustomerNegativeCriteria(argument: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse>): grpc.ClientUnaryCall;
  mutateCustomerNegativeCriteria(argument: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse>): grpc.ClientUnaryCall;
  mutateCustomerNegativeCriteria(argument: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse>): grpc.ClientUnaryCall;
}
