// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
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
'use strict';
var grpc = require('grpc');
var google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb = require('../../../../google/cloud/runtimeconfig/v1beta1/runtimeconfig_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_runtimeconfig_v1beta1_resources_pb = require('../../../../google/cloud/runtimeconfig/v1beta1/resources_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_runtimeconfig_v1beta1_CreateConfigRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.CreateConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_CreateConfigRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_CreateVariableRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.CreateVariableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_CreateVariableRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_CreateWaiterRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_CreateWaiterRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_DeleteConfigRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_DeleteConfigRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_DeleteVariableRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_DeleteVariableRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_DeleteWaiterRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_DeleteWaiterRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_GetConfigRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.GetConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_GetConfigRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_GetVariableRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.GetVariableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_GetVariableRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_GetWaiterRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.GetWaiterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_GetWaiterRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_ListConfigsRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.ListConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_ListConfigsRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_ListConfigsResponse(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.ListConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_ListConfigsResponse(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_ListVariablesRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.ListVariablesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_ListVariablesRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_ListVariablesResponse(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.ListVariablesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_ListVariablesResponse(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_ListWaitersRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.ListWaitersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_ListWaitersRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_ListWaitersResponse(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.ListWaitersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_ListWaitersResponse(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.RuntimeConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_UpdateConfigRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_UpdateConfigRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_UpdateVariableRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_UpdateVariableRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_Variable(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_resources_pb.Variable)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.Variable');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_Variable(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_Waiter(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.Waiter');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_Waiter(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_runtimeconfig_v1beta1_WatchVariableRequest(arg) {
  if (!(arg instanceof google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest)) {
    throw new Error('Expected argument of type google.cloud.runtimeconfig.v1beta1.WatchVariableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_runtimeconfig_v1beta1_WatchVariableRequest(buffer_arg) {
  return google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// RuntimeConfig API represents configuration objects and operations on those
// configuration objects.
// RuntimeConfig objects consist of Variables logically grouped in the those
// objects.
// Variables are simple key-value pairs. Variables can be watched for changes or
// deletions. Variable key can be hieararchical, e.g. ports/serving_port,
// ports/monitoring_port, etc. Variable names can be hierarchical. No variable
// name can be prefix of another.
// Config objects represent logical containers for variables, e.g. flags,
// passwords, etc.
var RuntimeConfigManagerService = exports.RuntimeConfigManagerService = {
  // Lists all the RuntimeConfig resources within project.
  listConfigs: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_ListConfigsRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_ListConfigsRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_ListConfigsResponse,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_ListConfigsResponse,
  },
  // Gets information about a RuntimeConfig resource.
  getConfig: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_GetConfigRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_GetConfigRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig,
  },
  // Creates a new RuntimeConfig resource. The configuration name must be
  // unique within project.
  createConfig: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_CreateConfigRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_CreateConfigRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig,
  },
  // Updates a RuntimeConfig resource. The configuration must exist beforehand.
  updateConfig: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_UpdateConfigRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_UpdateConfigRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_RuntimeConfig,
  },
  // Deletes a RuntimeConfig resource.
  deleteConfig: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_DeleteConfigRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_DeleteConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists variables within given a configuration, matching any provided
  // filters. This only lists variable names, not the values, unless
  // `return_values` is true, in which case only variables that user has IAM
  // permission to GetVariable will be returned.
  listVariables: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListVariables',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_ListVariablesRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_ListVariablesRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_ListVariablesResponse,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_ListVariablesResponse,
  },
  // Gets information about a single variable.
  getVariable: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetVariable',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_GetVariableRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_GetVariableRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_Variable,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_Variable,
  },
  // Watches a specific variable and waits for a change in the variable's value.
  // When there is a change, this method returns the new value or times out.
  //
  // If a variable is deleted while being watched, the `variableState` state is
  // set to `DELETED` and the method returns the last known variable `value`.
  //
  // If you set the deadline for watching to a larger value than internal
  // timeout (60 seconds), the current variable value is returned and the
  // `variableState` will be `VARIABLE_STATE_UNSPECIFIED`.
  //
  // To learn more about creating a watcher, read the
  // [Watching a Variable for
  // Changes](/deployment-manager/runtime-configurator/watching-a-variable)
  // documentation.
  watchVariable: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/WatchVariable',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_WatchVariableRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_WatchVariableRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_Variable,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_Variable,
  },
  // Creates a variable within the given configuration. You cannot create
  // a variable with a name that is a prefix of an existing variable name, or a
  // name that has an existing variable name as a prefix.
  //
  // To learn more about creating a variable, read the
  // [Setting and Getting
  // Data](/deployment-manager/runtime-configurator/set-and-get-variables)
  // documentation.
  createVariable: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateVariable',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_CreateVariableRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_CreateVariableRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_Variable,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_Variable,
  },
  // Updates an existing variable with a new value.
  updateVariable: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateVariable',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_UpdateVariableRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_UpdateVariableRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_Variable,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_Variable,
  },
  // Deletes a variable or multiple variables.
  //
  // If you specify a variable name, then that variable is deleted. If you
  // specify a prefix and `recursive` is true, then all variables with that
  // prefix are deleted. You must set a `recursive` to true if you delete
  // variables by prefix.
  deleteVariable: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteVariable',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_DeleteVariableRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_DeleteVariableRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List waiters within the given configuration.
  listWaiters: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListWaiters',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_ListWaitersRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_ListWaitersRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_ListWaitersResponse,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_ListWaitersResponse,
  },
  // Gets information about a single waiter.
  getWaiter: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetWaiter',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest,
    responseType: google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_GetWaiterRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_GetWaiterRequest,
    responseSerialize: serialize_google_cloud_runtimeconfig_v1beta1_Waiter,
    responseDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_Waiter,
  },
  // Creates a Waiter resource. This operation returns a long-running Operation
  // resource which can be polled for completion. However, a waiter with the
  // given name will exist (and can be retrieved) prior to the operation
  // completing. If the operation fails, the failed Waiter resource will
  // still exist and must be deleted prior to subsequent creation attempts.
  createWaiter: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateWaiter',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_CreateWaiterRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_CreateWaiterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes the waiter with the specified name.
  deleteWaiter: {
    path: '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteWaiter',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_runtimeconfig_v1beta1_DeleteWaiterRequest,
    requestDeserialize: deserialize_google_cloud_runtimeconfig_v1beta1_DeleteWaiterRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.RuntimeConfigManagerClient = grpc.makeGenericClientConstructor(RuntimeConfigManagerService);
