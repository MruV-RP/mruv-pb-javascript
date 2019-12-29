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
var google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb = require('../../../../../google/cloud/osconfig/agentendpoint/v1beta/agentendpoint_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_cloud_osconfig_agentendpoint_v1beta_tasks_pb = require('../../../../../google/cloud/osconfig/agentendpoint/v1beta/tasks_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationRequest(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationRequest)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.ReceiveTaskNotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationRequest(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationResponse(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationResponse)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.ReceiveTaskNotificationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationResponse(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteRequest(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.ReportTaskCompleteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteRequest(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteResponse(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.ReportTaskCompleteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteResponse(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressRequest(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.ReportTaskProgressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressRequest(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressResponse(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.ReportTaskProgressResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressResponse(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskRequest(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.StartNextTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskRequest(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskResponse(arg) {
  if (!(arg instanceof google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse)) {
    throw new Error('Expected argument of type google.cloud.osconfig.agentendpoint.v1beta.StartNextTaskResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskResponse(buffer_arg) {
  return google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// OS Config agent endpoint API.
var AgentEndpointServiceService = exports.AgentEndpointServiceService = {
  // Stream established by client to receive Task notifications.
  receiveTaskNotification: {
    path: '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/ReceiveTaskNotification',
    requestStream: false,
    responseStream: true,
    requestType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationRequest,
    responseType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReceiveTaskNotificationResponse,
    requestSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationRequest,
    requestDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationRequest,
    responseSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationResponse,
    responseDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReceiveTaskNotificationResponse,
  },
  // Signals the start of a task execution and returns the task info.
  startNextTask: {
    path: '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/StartNextTask',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskRequest,
    responseType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.StartNextTaskResponse,
    requestSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskRequest,
    requestDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskRequest,
    responseSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskResponse,
    responseDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_StartNextTaskResponse,
  },
  // Signals an intermediary progress checkpoint in task execution.
  reportTaskProgress: {
    path: '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/ReportTaskProgress',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressRequest,
    responseType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskProgressResponse,
    requestSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressRequest,
    requestDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressRequest,
    responseSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressResponse,
    responseDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskProgressResponse,
  },
  // Signals that the task execution is complete and optionally returns the next
  // task.
  reportTaskComplete: {
    path: '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/ReportTaskComplete',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteRequest,
    responseType: google_cloud_osconfig_agentendpoint_v1beta_agentendpoint_pb.ReportTaskCompleteResponse,
    requestSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteRequest,
    requestDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteRequest,
    responseSerialize: serialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteResponse,
    responseDeserialize: deserialize_google_cloud_osconfig_agentendpoint_v1beta_ReportTaskCompleteResponse,
  },
};

exports.AgentEndpointServiceClient = grpc.makeGenericClientConstructor(AgentEndpointServiceService);
