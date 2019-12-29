// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/knowledge_base.proto

import * as google_cloud_dialogflow_v2beta1_knowledge_base_pb from "../../../../google/cloud/dialogflow/v2beta1/knowledge_base_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IKnowledgeBasesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listKnowledgeBases: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest, google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse>;
  getKnowledgeBase: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest, google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;
  createKnowledgeBase: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest, google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;
  deleteKnowledgeBase: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest, google_protobuf_empty_pb.Empty>;
  updateKnowledgeBase: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest, google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;
}

export const KnowledgeBasesService: IKnowledgeBasesService;

export class KnowledgeBasesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listKnowledgeBases(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse>): grpc.ClientUnaryCall;
  listKnowledgeBases(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse>): grpc.ClientUnaryCall;
  listKnowledgeBases(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse>): grpc.ClientUnaryCall;
  getKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  getKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  getKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  createKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  createKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  createKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  deleteKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  updateKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
  updateKnowledgeBase(argument: google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>): grpc.ClientUnaryCall;
}
