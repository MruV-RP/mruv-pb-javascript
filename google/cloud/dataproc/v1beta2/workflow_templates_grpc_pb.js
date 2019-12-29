// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_cloud_dataproc_v1beta2_workflow_templates_pb = require('../../../../google/cloud/dataproc/v1beta2/workflow_templates_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_dataproc_v1beta2_clusters_pb = require('../../../../google/cloud/dataproc/v1beta2/clusters_pb.js');
var google_cloud_dataproc_v1beta2_jobs_pb = require('../../../../google/cloud/dataproc/v1beta2/jobs_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_dataproc_v1beta2_CreateWorkflowTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_CreateWorkflowTemplateRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_DeleteWorkflowTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_DeleteWorkflowTemplateRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_GetWorkflowTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_GetWorkflowTemplateRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_InstantiateInlineWorkflowTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_InstantiateInlineWorkflowTemplateRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_InstantiateWorkflowTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_InstantiateWorkflowTemplateRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesResponse(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesResponse(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_UpdateWorkflowTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_UpdateWorkflowTemplateRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_WorkflowTemplate(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.WorkflowTemplate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_WorkflowTemplate(buffer_arg) {
  return google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The API interface for managing Workflow Templates in the
// Cloud Dataproc API.
var WorkflowTemplateServiceService = exports.WorkflowTemplateServiceService = {
  // Creates new workflow template.
  createWorkflowTemplate: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/CreateWorkflowTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest,
    responseType: google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_CreateWorkflowTemplateRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_CreateWorkflowTemplateRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1beta2_WorkflowTemplate,
    responseDeserialize: deserialize_google_cloud_dataproc_v1beta2_WorkflowTemplate,
  },
  // Retrieves the latest workflow template.
  //
  // Can retrieve previously instantiated template by specifying optional
  // version parameter.
  getWorkflowTemplate: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/GetWorkflowTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest,
    responseType: google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_GetWorkflowTemplateRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_GetWorkflowTemplateRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1beta2_WorkflowTemplate,
    responseDeserialize: deserialize_google_cloud_dataproc_v1beta2_WorkflowTemplate,
  },
  // Instantiates a template and begins execution.
  //
  // The returned Operation can be used to track execution of
  // workflow by polling
  // [operations.get][google.longrunning.Operations.GetOperation].
  // The Operation will complete when entire workflow is finished.
  //
  // The running workflow can be aborted via
  // [operations.cancel][google.longrunning.Operations.CancelOperation].
  // This will cause any inflight jobs to be cancelled and workflow-owned
  // clusters to be deleted.
  //
  // The [Operation.metadata][google.longrunning.Operation.metadata] will be
  // [WorkflowMetadata](/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#workflowmetadata).
  // Also see [Using
  // WorkflowMetadata](/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).
  //
  // On successful completion,
  // [Operation.response][google.longrunning.Operation.response] will be
  // [Empty][google.protobuf.Empty].
  instantiateWorkflowTemplate: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateWorkflowTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_InstantiateWorkflowTemplateRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_InstantiateWorkflowTemplateRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Instantiates a template and begins execution.
  //
  // This method is equivalent to executing the sequence
  // [CreateWorkflowTemplate][google.cloud.dataproc.v1beta2.WorkflowTemplateService.CreateWorkflowTemplate], [InstantiateWorkflowTemplate][google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateWorkflowTemplate],
  // [DeleteWorkflowTemplate][google.cloud.dataproc.v1beta2.WorkflowTemplateService.DeleteWorkflowTemplate].
  //
  // The returned Operation can be used to track execution of
  // workflow by polling
  // [operations.get][google.longrunning.Operations.GetOperation].
  // The Operation will complete when entire workflow is finished.
  //
  // The running workflow can be aborted via
  // [operations.cancel][google.longrunning.Operations.CancelOperation].
  // This will cause any inflight jobs to be cancelled and workflow-owned
  // clusters to be deleted.
  //
  // The [Operation.metadata][google.longrunning.Operation.metadata] will be
  // [WorkflowMetadata](/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata).
  // Also see [Using
  // WorkflowMetadata](/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).
  //
  // On successful completion,
  // [Operation.response][google.longrunning.Operation.response] will be
  // [Empty][google.protobuf.Empty].
  instantiateInlineWorkflowTemplate: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateInlineWorkflowTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_InstantiateInlineWorkflowTemplateRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_InstantiateInlineWorkflowTemplateRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates (replaces) workflow template. The updated template
  // must contain version that matches the current server version.
  updateWorkflowTemplate: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/UpdateWorkflowTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest,
    responseType: google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_UpdateWorkflowTemplateRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_UpdateWorkflowTemplateRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1beta2_WorkflowTemplate,
    responseDeserialize: deserialize_google_cloud_dataproc_v1beta2_WorkflowTemplate,
  },
  // Lists workflows that match the specified filter in the request.
  listWorkflowTemplates: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/ListWorkflowTemplates',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest,
    responseType: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesResponse,
    responseDeserialize: deserialize_google_cloud_dataproc_v1beta2_ListWorkflowTemplatesResponse,
  },
  // Deletes a workflow template. It does not cancel in-progress workflows.
  deleteWorkflowTemplate: {
    path: '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/DeleteWorkflowTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_DeleteWorkflowTemplateRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_DeleteWorkflowTemplateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.WorkflowTemplateServiceClient = grpc.makeGenericClientConstructor(WorkflowTemplateServiceService);
