// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/event_service.proto

import * as google_cloud_talent_v4beta1_event_service_pb from "../../../../google/cloud/talent/v4beta1/event_service_pb";
import * as google_cloud_talent_v4beta1_event_pb from "../../../../google/cloud/talent/v4beta1/event_pb";
import * as grpc from "grpc";

interface IEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createClientEvent: grpc.MethodDefinition<google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest, google_cloud_talent_v4beta1_event_pb.ClientEvent>;
}

export const EventServiceService: IEventServiceService;

export class EventServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createClientEvent(argument: google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_event_pb.ClientEvent>): grpc.ClientUnaryCall;
  createClientEvent(argument: google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_event_pb.ClientEvent>): grpc.ClientUnaryCall;
  createClientEvent(argument: google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_event_pb.ClientEvent>): grpc.ClientUnaryCall;
}
