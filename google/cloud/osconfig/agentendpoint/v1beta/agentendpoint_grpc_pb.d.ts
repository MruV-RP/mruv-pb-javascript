// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.osconfig.agentendpoint.v1beta
// file: google/cloud/osconfig/agentendpoint/v1beta/agentendpoint.proto

import * as google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb from "../../../../../google/cloud/osconfig/agentendpoint/v1beta/agentendpoint_pb";
import * as grpc from "grpc";

interface IAgentEndpointServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  receiveTaskNotification: grpc.MethodDefinition<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationRequest, google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationResponse>;
  startNextTask: grpc.MethodDefinition<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest, google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse>;
  reportTaskProgress: grpc.MethodDefinition<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest, google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse>;
  reportTaskComplete: grpc.MethodDefinition<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest, google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse>;
}

export const AgentEndpointServiceService: IAgentEndpointServiceService;

export class AgentEndpointServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  receiveTaskNotification(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationResponse>;
  receiveTaskNotification(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationResponse>;
  startNextTask(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse>): grpc.ClientUnaryCall;
  startNextTask(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse>): grpc.ClientUnaryCall;
  startNextTask(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse>): grpc.ClientUnaryCall;
  reportTaskProgress(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse>): grpc.ClientUnaryCall;
  reportTaskProgress(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse>): grpc.ClientUnaryCall;
  reportTaskProgress(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse>): grpc.ClientUnaryCall;
  reportTaskComplete(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse>): grpc.ClientUnaryCall;
  reportTaskComplete(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse>): grpc.ClientUnaryCall;
  reportTaskComplete(argument: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse>): grpc.ClientUnaryCall;
}
