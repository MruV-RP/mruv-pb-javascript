// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dataproc.v1beta2
// file: google/cloud/dataproc/v1beta2/workflow_templates.proto

import * as google_cloud_dataproc_v1beta2_workflow_templates_pb from "../../../../google/cloud/dataproc/v1beta2/workflow_templates_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IWorkflowTemplateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createWorkflowTemplate: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest, google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;
  getWorkflowTemplate: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest, google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;
  instantiateWorkflowTemplate: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest, google_longrunning_operations_pb.Operation>;
  instantiateInlineWorkflowTemplate: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest, google_longrunning_operations_pb.Operation>;
  updateWorkflowTemplate: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest, google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;
  listWorkflowTemplates: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest, google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse>;
  deleteWorkflowTemplate: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest, google_protobuf_empty_pb.Empty>;
}

export const WorkflowTemplateServiceService: IWorkflowTemplateServiceService;

export class WorkflowTemplateServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  createWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  createWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  getWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  getWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  getWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  instantiateWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  instantiateWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  instantiateWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  instantiateInlineWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  instantiateInlineWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  instantiateInlineWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  updateWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  updateWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>): grpc.ClientUnaryCall;
  listWorkflowTemplates(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse>): grpc.ClientUnaryCall;
  listWorkflowTemplates(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse>): grpc.ClientUnaryCall;
  listWorkflowTemplates(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse>): grpc.ClientUnaryCall;
  deleteWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteWorkflowTemplate(argument: google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
