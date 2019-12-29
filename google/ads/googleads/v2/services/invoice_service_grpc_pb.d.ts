// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/invoice_service.proto

import * as google_ads_googleads_v2_services_invoice_service_pb from "../../../../../google/ads/googleads/v2/services/invoice_service_pb";
import * as grpc from "grpc";

interface IInvoiceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listInvoices: grpc.MethodDefinition<google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest, google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse>;
}

export const InvoiceServiceService: IInvoiceServiceService;

export class InvoiceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listInvoices(argument: google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse>): grpc.ClientUnaryCall;
}
