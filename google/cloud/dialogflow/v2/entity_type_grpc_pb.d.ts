// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/entity_type.proto

import * as google_cloud_dialogflow_v2_entity_type_pb from "../../../../google/cloud/dialogflow/v2/entity_type_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IEntityTypesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listEntityTypes: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesRequest, google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesResponse>;
  getEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.GetEntityTypeRequest, google_cloud_dialogflow_v2_entity_type_pb.EntityType>;
  createEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.CreateEntityTypeRequest, google_cloud_dialogflow_v2_entity_type_pb.EntityType>;
  updateEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.UpdateEntityTypeRequest, google_cloud_dialogflow_v2_entity_type_pb.EntityType>;
  deleteEntityType: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.DeleteEntityTypeRequest, google_protobuf_empty_pb.Empty>;
  batchUpdateEntityTypes: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntityTypesRequest, google_longrunning_operations_pb.Operation>;
  batchDeleteEntityTypes: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntityTypesRequest, google_longrunning_operations_pb.Operation>;
  batchCreateEntities: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.BatchCreateEntitiesRequest, google_longrunning_operations_pb.Operation>;
  batchUpdateEntities: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntitiesRequest, google_longrunning_operations_pb.Operation>;
  batchDeleteEntities: grpc.MethodDefinition<google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntitiesRequest, google_longrunning_operations_pb.Operation>;
}

export const EntityTypesService: IEntityTypesService;

export class EntityTypesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesResponse>): grpc.ClientUnaryCall;
  listEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesResponse>): grpc.ClientUnaryCall;
  listEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.ListEntityTypesResponse>): grpc.ClientUnaryCall;
  getEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.GetEntityTypeRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  getEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.GetEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  getEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.GetEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  createEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.CreateEntityTypeRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  createEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.CreateEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  createEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.CreateEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  updateEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.UpdateEntityTypeRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  updateEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.UpdateEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  updateEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.UpdateEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_entity_type_pb.EntityType>): grpc.ClientUnaryCall;
  deleteEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.DeleteEntityTypeRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.DeleteEntityTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEntityType(argument: google_cloud_dialogflow_v2_entity_type_pb.DeleteEntityTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchUpdateEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntityTypesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntityTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntityTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntityTypesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntityTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteEntityTypes(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntityTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchCreateEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchCreateEntitiesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchCreateEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchCreateEntitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchCreateEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchCreateEntitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntitiesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchUpdateEntitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntitiesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteEntities(argument: google_cloud_dialogflow_v2_entity_type_pb.BatchDeleteEntitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
