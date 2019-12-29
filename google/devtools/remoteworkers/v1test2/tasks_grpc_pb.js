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
var google_devtools_remoteworkers_v1test2_tasks_pb = require('../../../../google/devtools/remoteworkers/v1test2/tasks_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_devtools_remoteworkers_v1test2_AddTaskLogRequest(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.AddTaskLogRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_AddTaskLogRequest(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_AddTaskLogResponse(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.AddTaskLogResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_AddTaskLogResponse(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_GetTaskRequest(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.GetTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_GetTaskRequest(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_Task(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_tasks_pb.Task)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.Task');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_Task(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_tasks_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_TaskResult(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.TaskResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_TaskResult(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_UpdateTaskResultRequest(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_UpdateTaskResultRequest(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// DEPRECATED. GetTask should be replaced by Lease.payload, UpdateTaskResult by
// Lease.result and logs should be precreated prior to sending to the bot (eg,
// via CommandTask.expected_outputs.stdout_destination).
var TasksService = exports.TasksService = {
  // DEPRECATED - use Lease.payload instead.
  // GetTask reads the current state of the task. Tasks must be created through
  // some other interface, and should be immutable once created and exposed to
  // the bots.
  getTask: {
    path: '/google.devtools.remoteworkers.v1test2.Tasks/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest,
    responseType: google_devtools_remoteworkers_v1test2_tasks_pb.Task,
    requestSerialize: serialize_google_devtools_remoteworkers_v1test2_GetTaskRequest,
    requestDeserialize: deserialize_google_devtools_remoteworkers_v1test2_GetTaskRequest,
    responseSerialize: serialize_google_devtools_remoteworkers_v1test2_Task,
    responseDeserialize: deserialize_google_devtools_remoteworkers_v1test2_Task,
  },
  // DEPRECATED - use Lease.result instead.
  // UpdateTaskResult updates the result.
  updateTaskResult: {
    path: '/google.devtools.remoteworkers.v1test2.Tasks/UpdateTaskResult',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest,
    responseType: google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult,
    requestSerialize: serialize_google_devtools_remoteworkers_v1test2_UpdateTaskResultRequest,
    requestDeserialize: deserialize_google_devtools_remoteworkers_v1test2_UpdateTaskResultRequest,
    responseSerialize: serialize_google_devtools_remoteworkers_v1test2_TaskResult,
    responseDeserialize: deserialize_google_devtools_remoteworkers_v1test2_TaskResult,
  },
  // DEPRECATED - precreate logs prior to sending to bot.
  // AddTaskLog creates a new streaming log. The log is streamed and marked as
  // completed through other interfaces (i.e., ByteStream). This can be called
  // by the bot if it wants to create a new log; the server can also predefine
  // logs that do not need to be created (e.g. `stdout`).
  addTaskLog: {
    path: '/google.devtools.remoteworkers.v1test2.Tasks/AddTaskLog',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest,
    responseType: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse,
    requestSerialize: serialize_google_devtools_remoteworkers_v1test2_AddTaskLogRequest,
    requestDeserialize: deserialize_google_devtools_remoteworkers_v1test2_AddTaskLogRequest,
    responseSerialize: serialize_google_devtools_remoteworkers_v1test2_AddTaskLogResponse,
    responseDeserialize: deserialize_google_devtools_remoteworkers_v1test2_AddTaskLogResponse,
  },
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
