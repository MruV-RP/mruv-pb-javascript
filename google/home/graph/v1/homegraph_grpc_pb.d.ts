// GENERATED CODE -- DO NOT EDIT!

// package: google.home.graph.v1
// file: google/home/graph/v1/homegraph.proto

import * as google_home_graph_v1_homegraph_pb from "../../../../google/home/graph/v1/homegraph_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IHomeGraphApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  requestSyncDevices: grpc.MethodDefinition<google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest, google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse>;
  reportStateAndNotification: grpc.MethodDefinition<google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest, google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse>;
  deleteAgentUser: grpc.MethodDefinition<google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest, google_protobuf_empty_pb.Empty>;
  query: grpc.MethodDefinition<google_home_graph_v1_homegraph_pb.QueryRequest, google_home_graph_v1_homegraph_pb.QueryResponse>;
  sync: grpc.MethodDefinition<google_home_graph_v1_homegraph_pb.SyncRequest, google_home_graph_v1_homegraph_pb.SyncResponse>;
}

export const HomeGraphApiServiceService: IHomeGraphApiServiceService;

export class HomeGraphApiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  requestSyncDevices(argument: google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse>): grpc.ClientUnaryCall;
  requestSyncDevices(argument: google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse>): grpc.ClientUnaryCall;
  requestSyncDevices(argument: google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse>): grpc.ClientUnaryCall;
  reportStateAndNotification(argument: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse>): grpc.ClientUnaryCall;
  reportStateAndNotification(argument: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse>): grpc.ClientUnaryCall;
  reportStateAndNotification(argument: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse>): grpc.ClientUnaryCall;
  deleteAgentUser(argument: google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAgentUser(argument: google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAgentUser(argument: google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  query(argument: google_home_graph_v1_homegraph_pb.QueryRequest, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.QueryResponse>): grpc.ClientUnaryCall;
  query(argument: google_home_graph_v1_homegraph_pb.QueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.QueryResponse>): grpc.ClientUnaryCall;
  query(argument: google_home_graph_v1_homegraph_pb.QueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.QueryResponse>): grpc.ClientUnaryCall;
  sync(argument: google_home_graph_v1_homegraph_pb.SyncRequest, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.SyncResponse>): grpc.ClientUnaryCall;
  sync(argument: google_home_graph_v1_homegraph_pb.SyncRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.SyncResponse>): grpc.ClientUnaryCall;
  sync(argument: google_home_graph_v1_homegraph_pb.SyncRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_home_graph_v1_homegraph_pb.SyncResponse>): grpc.ClientUnaryCall;
}
