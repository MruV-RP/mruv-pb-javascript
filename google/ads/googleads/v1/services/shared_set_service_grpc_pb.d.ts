// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/shared_set_service.proto

import * as google_ads_googleads_v1_services_shared_set_service_pb from "../../../../../google/ads/googleads/v1/services/shared_set_service_pb";
import * as google_ads_googleads_v1_resources_shared_set_pb from "../../../../../google/ads/googleads/v1/resources/shared_set_pb";
import * as grpc from "grpc";

interface ISharedSetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSharedSet: grpc.MethodDefinition<google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest, google_ads_googleads_v1_resources_shared_set_pb.SharedSet>;
  mutateSharedSets: grpc.MethodDefinition<google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest, google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse>;
}

export const SharedSetServiceService: ISharedSetServiceService;

export class SharedSetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSharedSet(argument: google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_shared_set_pb.SharedSet>): grpc.ClientUnaryCall;
  getSharedSet(argument: google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_shared_set_pb.SharedSet>): grpc.ClientUnaryCall;
  getSharedSet(argument: google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_shared_set_pb.SharedSet>): grpc.ClientUnaryCall;
  mutateSharedSets(argument: google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse>): grpc.ClientUnaryCall;
  mutateSharedSets(argument: google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse>): grpc.ClientUnaryCall;
  mutateSharedSets(argument: google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse>): grpc.ClientUnaryCall;
}
