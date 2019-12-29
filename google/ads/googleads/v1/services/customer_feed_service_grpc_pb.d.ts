// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_feed_service.proto

import * as google_ads_googleads_v1_services_customer_feed_service_pb from "../../../../../google/ads/googleads/v1/services/customer_feed_service_pb";
import * as google_ads_googleads_v1_resources_customer_feed_pb from "../../../../../google/ads/googleads/v1/resources/customer_feed_pb";
import * as grpc from "grpc";

interface ICustomerFeedServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerFeed: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_feed_service_pb.GetCustomerFeedRequest, google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed>;
  mutateCustomerFeeds: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsRequest, google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsResponse>;
}

export const CustomerFeedServiceService: ICustomerFeedServiceService;

export class CustomerFeedServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerFeed(argument: google_ads_googleads_v1_services_customer_feed_service_pb.GetCustomerFeedRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed>): grpc.ClientUnaryCall;
  getCustomerFeed(argument: google_ads_googleads_v1_services_customer_feed_service_pb.GetCustomerFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed>): grpc.ClientUnaryCall;
  getCustomerFeed(argument: google_ads_googleads_v1_services_customer_feed_service_pb.GetCustomerFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed>): grpc.ClientUnaryCall;
  mutateCustomerFeeds(argument: google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsResponse>): grpc.ClientUnaryCall;
  mutateCustomerFeeds(argument: google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsResponse>): grpc.ClientUnaryCall;
  mutateCustomerFeeds(argument: google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_feed_service_pb.MutateCustomerFeedsResponse>): grpc.ClientUnaryCall;
}
