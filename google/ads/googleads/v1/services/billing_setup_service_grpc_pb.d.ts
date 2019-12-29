// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/billing_setup_service.proto

import * as google_ads_googleads_v1_services_billing_setup_service_pb from "../../../../../google/ads/googleads/v1/services/billing_setup_service_pb";
import * as google_ads_googleads_v1_resources_billing_setup_pb from "../../../../../google/ads/googleads/v1/resources/billing_setup_pb";
import * as grpc from "grpc";

interface IBillingSetupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBillingSetup: grpc.MethodDefinition<google_ads_googleads_v1_services_billing_setup_service_pb.GetBillingSetupRequest, google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup>;
  mutateBillingSetup: grpc.MethodDefinition<google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupRequest, google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupResponse>;
}

export const BillingSetupServiceService: IBillingSetupServiceService;

export class BillingSetupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getBillingSetup(argument: google_ads_googleads_v1_services_billing_setup_service_pb.GetBillingSetupRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup>): grpc.ClientUnaryCall;
  getBillingSetup(argument: google_ads_googleads_v1_services_billing_setup_service_pb.GetBillingSetupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup>): grpc.ClientUnaryCall;
  getBillingSetup(argument: google_ads_googleads_v1_services_billing_setup_service_pb.GetBillingSetupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup>): grpc.ClientUnaryCall;
  mutateBillingSetup(argument: google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupResponse>): grpc.ClientUnaryCall;
  mutateBillingSetup(argument: google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupResponse>): grpc.ClientUnaryCall;
  mutateBillingSetup(argument: google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_billing_setup_service_pb.MutateBillingSetupResponse>): grpc.ClientUnaryCall;
}
