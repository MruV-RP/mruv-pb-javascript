// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/context.proto

import * as google_cloud_dialogflow_v2beta1_context_pb from "../../../../google/cloud/dialogflow/v2beta1/context_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IContextsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listContexts: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest, google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse>;
  getContext: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest, google_cloud_dialogflow_v2beta1_context_pb.Context>;
  createContext: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest, google_cloud_dialogflow_v2beta1_context_pb.Context>;
  updateContext: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest, google_cloud_dialogflow_v2beta1_context_pb.Context>;
  deleteContext: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest, google_protobuf_empty_pb.Empty>;
  deleteAllContexts: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest, google_protobuf_empty_pb.Empty>;
}

export const ContextsService: IContextsService;

export class ContextsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listContexts(argument: google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse>): grpc.ClientUnaryCall;
  listContexts(argument: google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse>): grpc.ClientUnaryCall;
  listContexts(argument: google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse>): grpc.ClientUnaryCall;
  getContext(argument: google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  getContext(argument: google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  getContext(argument: google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  createContext(argument: google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  createContext(argument: google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  createContext(argument: google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  updateContext(argument: google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  updateContext(argument: google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  updateContext(argument: google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_context_pb.Context>): grpc.ClientUnaryCall;
  deleteContext(argument: google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteContext(argument: google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteContext(argument: google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAllContexts(argument: google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAllContexts(argument: google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAllContexts(argument: google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
