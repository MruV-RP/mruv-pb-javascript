// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/payments_account_service.proto

import * as google_ads_googleads_v1_services_payments_account_service_pb from "../../../../../google/ads/googleads/v1/services/payments_account_service_pb";
import * as grpc from "grpc";

interface IPaymentsAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listPaymentsAccounts: grpc.MethodDefinition<google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsRequest, google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsResponse>;
}

export const PaymentsAccountServiceService: IPaymentsAccountServiceService;

export class PaymentsAccountServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listPaymentsAccounts(argument: google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsResponse>): grpc.ClientUnaryCall;
  listPaymentsAccounts(argument: google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsResponse>): grpc.ClientUnaryCall;
  listPaymentsAccounts(argument: google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_payments_account_service_pb.ListPaymentsAccountsResponse>): grpc.ClientUnaryCall;
}
