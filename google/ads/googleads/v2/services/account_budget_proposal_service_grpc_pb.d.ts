// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/account_budget_proposal_service.proto

import * as google_ads_googleads_v2_services_account_budget_proposal_service_pb from "../../../../../google/ads/googleads/v2/services/account_budget_proposal_service_pb";
import * as google_ads_googleads_v2_resources_account_budget_proposal_pb from "../../../../../google/ads/googleads/v2/resources/account_budget_proposal_pb";
import * as grpc from "grpc";

interface IAccountBudgetProposalServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAccountBudgetProposal: grpc.MethodDefinition<google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest, google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal>;
  mutateAccountBudgetProposal: grpc.MethodDefinition<google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest, google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse>;
}

export const AccountBudgetProposalServiceService: IAccountBudgetProposalServiceService;

export class AccountBudgetProposalServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAccountBudgetProposal(argument: google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal>): grpc.ClientUnaryCall;
  getAccountBudgetProposal(argument: google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal>): grpc.ClientUnaryCall;
  getAccountBudgetProposal(argument: google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal>): grpc.ClientUnaryCall;
  mutateAccountBudgetProposal(argument: google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse>): grpc.ClientUnaryCall;
  mutateAccountBudgetProposal(argument: google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse>): grpc.ClientUnaryCall;
  mutateAccountBudgetProposal(argument: google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse>): grpc.ClientUnaryCall;
}
