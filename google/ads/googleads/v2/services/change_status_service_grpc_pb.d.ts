// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/change_status_service.proto

import * as google_ads_googleads_v2_services_change_status_service_pb from "../../../../../google/ads/googleads/v2/services/change_status_service_pb";
import * as google_ads_googleads_v2_resources_change_status_pb from "../../../../../google/ads/googleads/v2/resources/change_status_pb";
import * as grpc from "grpc";

interface IChangeStatusServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getChangeStatus: grpc.MethodDefinition<google_ads_googleads_v2_services_change_status_service_pb.GetChangeStatusRequest, google_ads_googleads_v2_resources_change_status_pb.ChangeStatus>;
}

export const ChangeStatusServiceService: IChangeStatusServiceService;

export class ChangeStatusServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getChangeStatus(argument: google_ads_googleads_v2_services_change_status_service_pb.GetChangeStatusRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_change_status_pb.ChangeStatus>): grpc.ClientUnaryCall;
  getChangeStatus(argument: google_ads_googleads_v2_services_change_status_service_pb.GetChangeStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_change_status_pb.ChangeStatus>): grpc.ClientUnaryCall;
  getChangeStatus(argument: google_ads_googleads_v2_services_change_status_service_pb.GetChangeStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_change_status_pb.ChangeStatus>): grpc.ClientUnaryCall;
}
