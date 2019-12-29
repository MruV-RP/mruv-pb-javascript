// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/session_entity_type.proto

import * as google_cloud_dialogflow_v2beta1_session_entity_type_pb from "../../../../google/cloud/dialogflow/v2beta1/session_entity_type_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISessionEntityTypesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listSessionEntityTypes: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesRequest, google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesResponse>;
  getSessionEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_session_entity_type_pb.GetSessionEntityTypeRequest, google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>;
  createSessionEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_session_entity_type_pb.CreateSessionEntityTypeRequest, google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>;
  updateSessionEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_session_entity_type_pb.UpdateSessionEntityTypeRequest, google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>;
  deleteSessionEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_session_entity_type_pb.DeleteSessionEntityTypeRequest, google_protobuf_empty_pb.Empty>;
}

export const SessionEntityTypesService: ISessionEntityTypesService;

export class SessionEntityTypesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listSessionEntityTypes(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesResponse>): grpc.ClientUnaryCall;
  listSessionEntityTypes(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesResponse>): grpc.ClientUnaryCall;
  listSessionEntityTypes(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.ListSessionEntityTypesResponse>): grpc.ClientUnaryCall;
  getSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.GetSessionEntityTypeRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  getSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.GetSessionEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  getSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.GetSessionEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  createSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.CreateSessionEntityTypeRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  createSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.CreateSessionEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  createSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.CreateSessionEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  updateSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.UpdateSessionEntityTypeRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  updateSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.UpdateSessionEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  updateSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.UpdateSessionEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): grpc.ClientUnaryCall;
  deleteSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.DeleteSessionEntityTypeRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.DeleteSessionEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSessionEntityType(argument: google_cloud_dialogflow_v2beta1_session_entity_type_pb.DeleteSessionEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
