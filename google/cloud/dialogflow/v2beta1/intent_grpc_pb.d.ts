// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/intent.proto

import * as google_cloud_dialogflow_v2beta1_intent_pb from "../../../../google/cloud/dialogflow/v2beta1/intent_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IIntentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listIntents: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest, google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse>;
  getIntent: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest, google_cloud_dialogflow_v2beta1_intent_pb.Intent>;
  createIntent: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest, google_cloud_dialogflow_v2beta1_intent_pb.Intent>;
  updateIntent: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest, google_cloud_dialogflow_v2beta1_intent_pb.Intent>;
  deleteIntent: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest, google_protobuf_empty_pb.Empty>;
  batchUpdateIntents: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest, google_longrunning_operations_pb.Operation>;
  batchDeleteIntents: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest, google_longrunning_operations_pb.Operation>;
}

export const IntentsService: IIntentsService;

export class IntentsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse>): grpc.ClientUnaryCall;
  listIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse>): grpc.ClientUnaryCall;
  listIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse>): grpc.ClientUnaryCall;
  getIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  getIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  getIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  createIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  createIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  createIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  updateIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  updateIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  updateIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_intent_pb.Intent>): grpc.ClientUnaryCall;
  deleteIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIntent(argument: google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchUpdateIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchDeleteIntents(argument: google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
