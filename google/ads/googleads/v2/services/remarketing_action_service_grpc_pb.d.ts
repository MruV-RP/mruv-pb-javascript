// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/remarketing_action_service.proto

import * as google_ads_googleads_v2_services_remarketing_action_service_pb from "../../../../../google/ads/googleads/v2/services/remarketing_action_service_pb";
import * as google_ads_googleads_v2_resources_remarketing_action_pb from "../../../../../google/ads/googleads/v2/resources/remarketing_action_pb";
import * as grpc from "grpc";

interface IRemarketingActionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getRemarketingAction: grpc.MethodDefinition<google_ads_googleads_v2_services_remarketing_action_service_pb.GetRemarketingActionRequest, google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction>;
  mutateRemarketingActions: grpc.MethodDefinition<google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsRequest, google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsResponse>;
}

export const RemarketingActionServiceService: IRemarketingActionServiceService;

export class RemarketingActionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getRemarketingAction(argument: google_ads_googleads_v2_services_remarketing_action_service_pb.GetRemarketingActionRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction>): grpc.ClientUnaryCall;
  getRemarketingAction(argument: google_ads_googleads_v2_services_remarketing_action_service_pb.GetRemarketingActionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction>): grpc.ClientUnaryCall;
  getRemarketingAction(argument: google_ads_googleads_v2_services_remarketing_action_service_pb.GetRemarketingActionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction>): grpc.ClientUnaryCall;
  mutateRemarketingActions(argument: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsResponse>): grpc.ClientUnaryCall;
  mutateRemarketingActions(argument: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsResponse>): grpc.ClientUnaryCall;
  mutateRemarketingActions(argument: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionsResponse>): grpc.ClientUnaryCall;
}
