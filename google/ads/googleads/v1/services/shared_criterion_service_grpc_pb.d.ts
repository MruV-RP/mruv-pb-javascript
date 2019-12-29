// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/shared_criterion_service.proto

import * as google_ads_googleads_v1_services_shared_criterion_service_pb from "../../../../../google/ads/googleads/v1/services/shared_criterion_service_pb";
import * as google_ads_googleads_v1_resources_shared_criterion_pb from "../../../../../google/ads/googleads/v1/resources/shared_criterion_pb";
import * as grpc from "grpc";

interface ISharedCriterionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSharedCriterion: grpc.MethodDefinition<google_ads_googleads_v1_services_shared_criterion_service_pb.GetSharedCriterionRequest, google_ads_googleads_v1_resources_shared_criterion_pb.SharedCriterion>;
  mutateSharedCriteria: grpc.MethodDefinition<google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaRequest, google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaResponse>;
}

export const SharedCriterionServiceService: ISharedCriterionServiceService;

export class SharedCriterionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSharedCriterion(argument: google_ads_googleads_v1_services_shared_criterion_service_pb.GetSharedCriterionRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_shared_criterion_pb.SharedCriterion>): grpc.ClientUnaryCall;
  getSharedCriterion(argument: google_ads_googleads_v1_services_shared_criterion_service_pb.GetSharedCriterionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_shared_criterion_pb.SharedCriterion>): grpc.ClientUnaryCall;
  getSharedCriterion(argument: google_ads_googleads_v1_services_shared_criterion_service_pb.GetSharedCriterionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_shared_criterion_pb.SharedCriterion>): grpc.ClientUnaryCall;
  mutateSharedCriteria(argument: google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaResponse>): grpc.ClientUnaryCall;
  mutateSharedCriteria(argument: google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaResponse>): grpc.ClientUnaryCall;
  mutateSharedCriteria(argument: google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_shared_criterion_service_pb.MutateSharedCriteriaResponse>): grpc.ClientUnaryCall;
}
