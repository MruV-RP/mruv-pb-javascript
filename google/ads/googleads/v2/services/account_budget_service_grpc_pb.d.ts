// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/account_budget_service.proto

import * as google_ads_googleads_v2_services_account_budget_service_pb from "../../../../../google/ads/googleads/v2/services/account_budget_service_pb";
import * as google_ads_googleads_v2_resources_account_budget_pb from "../../../../../google/ads/googleads/v2/resources/account_budget_pb";
import * as grpc from "grpc";

interface IAccountBudgetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAccountBudget: grpc.MethodDefinition<google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest, google_ads_googleads_v2_resources_account_budget_pb.AccountBudget>;
}

export const AccountBudgetServiceService: IAccountBudgetServiceService;

export class AccountBudgetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAccountBudget(argument: google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_account_budget_pb.AccountBudget>): grpc.ClientUnaryCall;
  getAccountBudget(argument: google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_account_budget_pb.AccountBudget>): grpc.ClientUnaryCall;
  getAccountBudget(argument: google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_account_budget_pb.AccountBudget>): grpc.ClientUnaryCall;
}
