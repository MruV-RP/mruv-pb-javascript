// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/label_service.proto

import * as google_ads_googleads_v2_services_label_service_pb from "../../../../../google/ads/googleads/v2/services/label_service_pb";
import * as google_ads_googleads_v2_resources_label_pb from "../../../../../google/ads/googleads/v2/resources/label_pb";
import * as grpc from "grpc";

interface ILabelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getLabel: grpc.MethodDefinition<google_ads_googleads_v2_services_label_service_pb.GetLabelRequest, google_ads_googleads_v2_resources_label_pb.Label>;
  mutateLabels: grpc.MethodDefinition<google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest, google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse>;
}

export const LabelServiceService: ILabelServiceService;

export class LabelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getLabel(argument: google_ads_googleads_v2_services_label_service_pb.GetLabelRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_label_pb.Label>): grpc.ClientUnaryCall;
  getLabel(argument: google_ads_googleads_v2_services_label_service_pb.GetLabelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_label_pb.Label>): grpc.ClientUnaryCall;
  getLabel(argument: google_ads_googleads_v2_services_label_service_pb.GetLabelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_label_pb.Label>): grpc.ClientUnaryCall;
  mutateLabels(argument: google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse>): grpc.ClientUnaryCall;
  mutateLabels(argument: google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse>): grpc.ClientUnaryCall;
  mutateLabels(argument: google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse>): grpc.ClientUnaryCall;
}
