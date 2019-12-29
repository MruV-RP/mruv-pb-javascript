// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/agent.proto

import * as google_cloud_dialogflow_v2_agent_pb from "../../../../google/cloud/dialogflow/v2/agent_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IAgentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.GetAgentRequest, google_cloud_dialogflow_v2_agent_pb.Agent>;
  setAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.SetAgentRequest, google_cloud_dialogflow_v2_agent_pb.Agent>;
  deleteAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.DeleteAgentRequest, google_protobuf_empty_pb.Empty>;
  searchAgents: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.SearchAgentsRequest, google_cloud_dialogflow_v2_agent_pb.SearchAgentsResponse>;
  trainAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.TrainAgentRequest, google_longrunning_operations_pb.Operation>;
  exportAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.ExportAgentRequest, google_longrunning_operations_pb.Operation>;
  importAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.ImportAgentRequest, google_longrunning_operations_pb.Operation>;
  restoreAgent: grpc.MethodDefinition<google_cloud_dialogflow_v2_agent_pb.RestoreAgentRequest, google_longrunning_operations_pb.Operation>;
}

export const AgentsService: IAgentsService;

export class AgentsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAgent(argument: google_cloud_dialogflow_v2_agent_pb.GetAgentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.Agent>): grpc.ClientUnaryCall;
  getAgent(argument: google_cloud_dialogflow_v2_agent_pb.GetAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.Agent>): grpc.ClientUnaryCall;
  getAgent(argument: google_cloud_dialogflow_v2_agent_pb.GetAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.Agent>): grpc.ClientUnaryCall;
  setAgent(argument: google_cloud_dialogflow_v2_agent_pb.SetAgentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.Agent>): grpc.ClientUnaryCall;
  setAgent(argument: google_cloud_dialogflow_v2_agent_pb.SetAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.Agent>): grpc.ClientUnaryCall;
  setAgent(argument: google_cloud_dialogflow_v2_agent_pb.SetAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.Agent>): grpc.ClientUnaryCall;
  deleteAgent(argument: google_cloud_dialogflow_v2_agent_pb.DeleteAgentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAgent(argument: google_cloud_dialogflow_v2_agent_pb.DeleteAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAgent(argument: google_cloud_dialogflow_v2_agent_pb.DeleteAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  searchAgents(argument: google_cloud_dialogflow_v2_agent_pb.SearchAgentsRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.SearchAgentsResponse>): grpc.ClientUnaryCall;
  searchAgents(argument: google_cloud_dialogflow_v2_agent_pb.SearchAgentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.SearchAgentsResponse>): grpc.ClientUnaryCall;
  searchAgents(argument: google_cloud_dialogflow_v2_agent_pb.SearchAgentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_agent_pb.SearchAgentsResponse>): grpc.ClientUnaryCall;
  trainAgent(argument: google_cloud_dialogflow_v2_agent_pb.TrainAgentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  trainAgent(argument: google_cloud_dialogflow_v2_agent_pb.TrainAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  trainAgent(argument: google_cloud_dialogflow_v2_agent_pb.TrainAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAgent(argument: google_cloud_dialogflow_v2_agent_pb.ExportAgentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAgent(argument: google_cloud_dialogflow_v2_agent_pb.ExportAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportAgent(argument: google_cloud_dialogflow_v2_agent_pb.ExportAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importAgent(argument: google_cloud_dialogflow_v2_agent_pb.ImportAgentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importAgent(argument: google_cloud_dialogflow_v2_agent_pb.ImportAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importAgent(argument: google_cloud_dialogflow_v2_agent_pb.ImportAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  restoreAgent(argument: google_cloud_dialogflow_v2_agent_pb.RestoreAgentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  restoreAgent(argument: google_cloud_dialogflow_v2_agent_pb.RestoreAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  restoreAgent(argument: google_cloud_dialogflow_v2_agent_pb.RestoreAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
