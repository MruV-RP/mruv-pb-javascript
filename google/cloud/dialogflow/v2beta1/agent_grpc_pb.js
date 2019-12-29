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
var google_cloud_dialogflow_v2beta1_agent_pb = require('../../../../google/cloud/dialogflow/v2beta1/agent_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_dialogflow_v2beta1_validation_result_pb = require('../../../../google/cloud/dialogflow/v2beta1/validation_result_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dialogflow_v2beta1_Agent(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.Agent)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.Agent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_Agent(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.Agent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.DeleteAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.DeleteAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ExportAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.ExportAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ExportAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ExportAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.ExportAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.GetAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.GetAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetValidationResultRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.GetValidationResultRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetValidationResultRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetValidationResultRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.GetValidationResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ImportAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.ImportAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ImportAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ImportAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.ImportAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_RestoreAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.RestoreAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.RestoreAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_RestoreAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.RestoreAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_SearchAgentsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.SearchAgentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_SearchAgentsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_SearchAgentsResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.SearchAgentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_SearchAgentsResponse(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_SetAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.SetAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.SetAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_SetAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.SetAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_TrainAgentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_agent_pb.TrainAgentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.TrainAgentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_TrainAgentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_agent_pb.TrainAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ValidationResult(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_validation_result_pb.ValidationResult)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ValidationResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ValidationResult(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_validation_result_pb.ValidationResult.deserializeBinary(new Uint8Array(buffer_arg));
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


// Agents are best described as Natural Language Understanding (NLU) modules
// that transform user requests into actionable data. You can include agents
// in your app, product, or service to determine user intent and respond to the
// user in a natural way.
//
// After you create an agent, you can add [Intents][google.cloud.dialogflow.v2beta1.Intents], [Contexts][google.cloud.dialogflow.v2beta1.Contexts],
// [Entity Types][google.cloud.dialogflow.v2beta1.EntityTypes], [Webhooks][google.cloud.dialogflow.v2beta1.WebhookRequest], and so on to
// manage the flow of a conversation and match user input to predefined intents
// and actions.
//
// You can create an agent using both Dialogflow Standard Edition and
// Dialogflow Enterprise Edition. For details, see
// [Dialogflow
// Editions](https://cloud.google.com/dialogflow/docs/editions).
//
// You can save your agent for backup or versioning by exporting the agent by
// using the [ExportAgent][google.cloud.dialogflow.v2beta1.Agents.ExportAgent] method. You can import a saved
// agent by using the [ImportAgent][google.cloud.dialogflow.v2beta1.Agents.ImportAgent] method.
//
// Dialogflow provides several
// [prebuilt
// agents](https://cloud.google.com/dialogflow/docs/agents-prebuilt)
// for common conversation scenarios such as determining a date and time,
// converting currency, and so on.
//
// For more information about agents, see the
// [Dialogflow
// documentation](https://cloud.google.com/dialogflow/docs/agents-overview).
var AgentsService = exports.AgentsService = {
  // Retrieves the specified agent.
  getAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/GetAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.GetAgentRequest,
    responseType: google_cloud_dialogflow_v2beta1_agent_pb.Agent,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetAgentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Agent,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Agent,
  },
  // Creates/updates the specified agent.
  setAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/SetAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.SetAgentRequest,
    responseType: google_cloud_dialogflow_v2beta1_agent_pb.Agent,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_SetAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_SetAgentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Agent,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Agent,
  },
  // Deletes the specified agent.
  deleteAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/DeleteAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.DeleteAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the list of agents.
  //
  // Since there is at most one conversational agent per project, this method is
  // useful primarily for listing all agents across projects the caller has
  // access to. One can achieve that with a wildcard project collection id "-".
  // Refer to [List
  // Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
  searchAgents: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/SearchAgents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsRequest,
    responseType: google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_SearchAgentsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_SearchAgentsRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_SearchAgentsResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_SearchAgentsResponse,
  },
  // Trains the specified agent.
  //
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  trainAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/TrainAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.TrainAgentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_TrainAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_TrainAgentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Exports the specified agent to a ZIP file.
  //
  //
  // Operation <response: [ExportAgentResponse][google.cloud.dialogflow.v2beta1.ExportAgentResponse]>
  exportAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/ExportAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.ExportAgentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ExportAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ExportAgentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Imports the specified agent from a ZIP file.
  //
  // Uploads new intents and entity types without deleting the existing ones.
  // Intents and entity types with the same name are replaced with the new
  // versions from ImportAgentRequest.
  //
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  importAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/ImportAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.ImportAgentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ImportAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ImportAgentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Restores the specified agent from a ZIP file.
  //
  // Replaces the current agent version with a new one. All the intents and
  // entity types in the older version are deleted.
  //
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  restoreAgent: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/RestoreAgent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.RestoreAgentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_RestoreAgentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_RestoreAgentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets agent validation result. Agent validation is performed during
  // training time and is updated automatically when training is completed.
  getValidationResult: {
    path: '/google.cloud.dialogflow.v2beta1.Agents/GetValidationResult',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_agent_pb.GetValidationResultRequest,
    responseType: google_cloud_dialogflow_v2beta1_validation_result_pb.ValidationResult,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetValidationResultRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetValidationResultRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_ValidationResult,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ValidationResult,
  },
};

exports.AgentsClient = grpc.makeGenericClientConstructor(AgentsService);
