// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_draft_service.proto

import * as google_ads_googleads_v1_services_campaign_draft_service_pb from "../../../../../google/ads/googleads/v1/services/campaign_draft_service_pb";
import * as google_ads_googleads_v1_resources_campaign_draft_pb from "../../../../../google/ads/googleads/v1/resources/campaign_draft_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface ICampaignDraftServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignDraft: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest, google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft>;
  mutateCampaignDrafts: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest, google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse>;
  promoteCampaignDraft: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest, google_longrunning_operations_pb.Operation>;
  listCampaignDraftAsyncErrors: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest, google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse>;
}

export const CampaignDraftServiceService: ICampaignDraftServiceService;

export class CampaignDraftServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignDraft(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft>): grpc.ClientUnaryCall;
  getCampaignDraft(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft>): grpc.ClientUnaryCall;
  getCampaignDraft(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft>): grpc.ClientUnaryCall;
  mutateCampaignDrafts(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse>): grpc.ClientUnaryCall;
  mutateCampaignDrafts(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse>): grpc.ClientUnaryCall;
  mutateCampaignDrafts(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse>): grpc.ClientUnaryCall;
  promoteCampaignDraft(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  promoteCampaignDraft(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  promoteCampaignDraft(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listCampaignDraftAsyncErrors(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse>): grpc.ClientUnaryCall;
  listCampaignDraftAsyncErrors(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse>): grpc.ClientUnaryCall;
  listCampaignDraftAsyncErrors(argument: google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse>): grpc.ClientUnaryCall;
}
