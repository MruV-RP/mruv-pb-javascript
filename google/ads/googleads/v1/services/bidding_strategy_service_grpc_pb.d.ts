// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/bidding_strategy_service.proto

import * as google_ads_googleads_v1_services_bidding_strategy_service_pb from "../../../../../google/ads/googleads/v1/services/bidding_strategy_service_pb";
import * as google_ads_googleads_v1_resources_bidding_strategy_pb from "../../../../../google/ads/googleads/v1/resources/bidding_strategy_pb";
import * as grpc from "grpc";

interface IBiddingStrategyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBiddingStrategy: grpc.MethodDefinition<google_ads_googleads_v1_services_bidding_strategy_service_pb.GetBiddingStrategyRequest, google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy>;
  mutateBiddingStrategies: grpc.MethodDefinition<google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest, google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse>;
}

export const BiddingStrategyServiceService: IBiddingStrategyServiceService;

export class BiddingStrategyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getBiddingStrategy(argument: google_ads_googleads_v1_services_bidding_strategy_service_pb.GetBiddingStrategyRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy>): grpc.ClientUnaryCall;
  getBiddingStrategy(argument: google_ads_googleads_v1_services_bidding_strategy_service_pb.GetBiddingStrategyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy>): grpc.ClientUnaryCall;
  getBiddingStrategy(argument: google_ads_googleads_v1_services_bidding_strategy_service_pb.GetBiddingStrategyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy>): grpc.ClientUnaryCall;
  mutateBiddingStrategies(argument: google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse>): grpc.ClientUnaryCall;
  mutateBiddingStrategies(argument: google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse>): grpc.ClientUnaryCall;
  mutateBiddingStrategies(argument: google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse>): grpc.ClientUnaryCall;
}
