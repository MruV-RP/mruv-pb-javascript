// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/document.proto

import * as google_cloud_dialogflow_v2beta1_document_pb from "../../../../google/cloud/dialogflow/v2beta1/document_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IDocumentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listDocuments: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest, google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse>;
  getDocument: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest, google_cloud_dialogflow_v2beta1_document_pb.Document>;
  createDocument: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest, google_longrunning_operations_pb.Operation>;
  deleteDocument: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest, google_longrunning_operations_pb.Operation>;
  updateDocument: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest, google_longrunning_operations_pb.Operation>;
  reloadDocument: grpc.MethodDefinition<google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest, google_longrunning_operations_pb.Operation>;
}

export const DocumentsService: IDocumentsService;

export class DocumentsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listDocuments(argument: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse>): grpc.ClientUnaryCall;
  listDocuments(argument: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse>): grpc.ClientUnaryCall;
  listDocuments(argument: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse>): grpc.ClientUnaryCall;
  getDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_document_pb.Document>): grpc.ClientUnaryCall;
  getDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_document_pb.Document>): grpc.ClientUnaryCall;
  getDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2beta1_document_pb.Document>): grpc.ClientUnaryCall;
  createDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  reloadDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  reloadDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  reloadDocument(argument: google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
