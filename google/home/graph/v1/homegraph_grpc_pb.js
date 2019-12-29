// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
var google_home_graph_v1_homegraph_pb = require('../../../../google/home/graph/v1/homegraph_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_home_graph_v1_device_pb = require('../../../../google/home/graph/v1/device_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_google_home_graph_v1_DeleteAgentUserRequest(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest)) {
    throw new Error('Expected argument of type google.home.graph.v1.DeleteAgentUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_DeleteAgentUserRequest(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_QueryRequest(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.QueryRequest)) {
    throw new Error('Expected argument of type google.home.graph.v1.QueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_QueryRequest(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_QueryResponse(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.QueryResponse)) {
    throw new Error('Expected argument of type google.home.graph.v1.QueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_QueryResponse(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_ReportStateAndNotificationRequest(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest)) {
    throw new Error('Expected argument of type google.home.graph.v1.ReportStateAndNotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_ReportStateAndNotificationRequest(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_ReportStateAndNotificationResponse(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse)) {
    throw new Error('Expected argument of type google.home.graph.v1.ReportStateAndNotificationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_ReportStateAndNotificationResponse(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_RequestSyncDevicesRequest(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest)) {
    throw new Error('Expected argument of type google.home.graph.v1.RequestSyncDevicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_RequestSyncDevicesRequest(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_RequestSyncDevicesResponse(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse)) {
    throw new Error('Expected argument of type google.home.graph.v1.RequestSyncDevicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_RequestSyncDevicesResponse(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_SyncRequest(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.SyncRequest)) {
    throw new Error('Expected argument of type google.home.graph.v1.SyncRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_SyncRequest(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.SyncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_home_graph_v1_SyncResponse(arg) {
  if (!(arg instanceof google_home_graph_v1_homegraph_pb.SyncResponse)) {
    throw new Error('Expected argument of type google.home.graph.v1.SyncResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_home_graph_v1_SyncResponse(buffer_arg) {
  return google_home_graph_v1_homegraph_pb.SyncResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Google HomeGraph API. HomeGraph Service provides the support for storing
// and querying first-party and third-party devices, rooms and structures,
// the relationships among them and their state in the home. It stores
// entities and their relationships in the home.
var HomeGraphApiServiceService = exports.HomeGraphApiServiceService = {
  // Requests a Sync call from Google to a 3p partner's home control agent for
  // a user.
  //
  //
  // Third-party user's identity is passed in as agent_user_id.
  // (see
  // [RequestSyncDevicesRequest][google.home.graph.v1.RequestSyncDevicesRequest])
  // and forwarded back to the agent. Agent is identified by the API key or JWT
  // signed by the partner's service account.
  requestSyncDevices: {
    path: '/google.home.graph.v1.HomeGraphApiService/RequestSyncDevices',
    requestStream: false,
    responseStream: false,
    requestType: google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest,
    responseType: google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse,
    requestSerialize: serialize_google_home_graph_v1_RequestSyncDevicesRequest,
    requestDeserialize: deserialize_google_home_graph_v1_RequestSyncDevicesRequest,
    responseSerialize: serialize_google_home_graph_v1_RequestSyncDevicesResponse,
    responseDeserialize: deserialize_google_home_graph_v1_RequestSyncDevicesResponse,
  },
  // Reports device state and optionally sends device notifications. Called by
  // an agent when the device state of a third-party changes or the agent wants
  // to send a notification about the device.
  // This method updates a predefined set of States for a device, which all
  // devices have (for example a light will have OnOff, Color, Brightness).
  // A new State may not be created and an INVALID_ARGUMENT code will be thrown
  // if so. It also optionally takes in a list of Notifications that may be
  // created, which are associated to this State change.
  //
  // Third-party user's identity is passed in as agent_user_id.
  // Agent is identified by the JWT signed by the partner's service account.
  reportStateAndNotification: {
    path: '/google.home.graph.v1.HomeGraphApiService/ReportStateAndNotification',
    requestStream: false,
    responseStream: false,
    requestType: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest,
    responseType: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse,
    requestSerialize: serialize_google_home_graph_v1_ReportStateAndNotificationRequest,
    requestDeserialize: deserialize_google_home_graph_v1_ReportStateAndNotificationRequest,
    responseSerialize: serialize_google_home_graph_v1_ReportStateAndNotificationResponse,
    responseDeserialize: deserialize_google_home_graph_v1_ReportStateAndNotificationResponse,
  },
  // Unlink an agent user from Google. As result, all data related to this user
  // will be deleted.
  //
  // Here is how the agent user is created in Google:
  // When users open their Google Home App, they can begin linking a 3p
  // partner. User is guided through the OAuth process. After entering the 3p
  // credentials, Google gets the 3p OAuth token, and uses it to make a
  // Sync call to the 3p partner and gets back all the user's data, including
  // agent_user_id and devices.
  // Google then creates the agent user and stores a mapping from the
  // agent_user_id -> Google ID mapping. Google also stores all user's devices
  // under that Google ID.
  // The mapping from agent_user_id -> Google ID is many to many, since one
  // Google user can have multiple 3p accounts, and multiple Google users can
  // map to one agent_user_id (e.g. husband and wife share one Nest account
  // username/password).
  //
  // Third-party user's identity is passed in as agent_user_id
  // Agent is identified by the JWT signed by the partner's service account.
  //
  // Note: Special characters (except "/") in agent_user_id must be URL encoded.
  deleteAgentUser: {
    path: '/google.home.graph.v1.HomeGraphApiService/DeleteAgentUser',
    requestStream: false,
    responseStream: false,
    requestType: google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_home_graph_v1_DeleteAgentUserRequest,
    requestDeserialize: deserialize_google_home_graph_v1_DeleteAgentUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the device states for the devices in QueryRequest.
  // Third-party user's identity is passed in as agent_user_id. Agent is
  // identified by the JWT signed by the third-party partner's service account.
  query: {
    path: '/google.home.graph.v1.HomeGraphApiService/Query',
    requestStream: false,
    responseStream: false,
    requestType: google_home_graph_v1_homegraph_pb.QueryRequest,
    responseType: google_home_graph_v1_homegraph_pb.QueryResponse,
    requestSerialize: serialize_google_home_graph_v1_QueryRequest,
    requestDeserialize: deserialize_google_home_graph_v1_QueryRequest,
    responseSerialize: serialize_google_home_graph_v1_QueryResponse,
    responseDeserialize: deserialize_google_home_graph_v1_QueryResponse,
  },
  // Gets all the devices associated with the given third-party user.
  // Third-party user's identity is passed in as agent_user_id. Agent is
  // identified by the JWT signed by the third-party partner's service account.
  sync: {
    path: '/google.home.graph.v1.HomeGraphApiService/Sync',
    requestStream: false,
    responseStream: false,
    requestType: google_home_graph_v1_homegraph_pb.SyncRequest,
    responseType: google_home_graph_v1_homegraph_pb.SyncResponse,
    requestSerialize: serialize_google_home_graph_v1_SyncRequest,
    requestDeserialize: deserialize_google_home_graph_v1_SyncRequest,
    responseSerialize: serialize_google_home_graph_v1_SyncResponse,
    responseDeserialize: deserialize_google_home_graph_v1_SyncResponse,
  },
};

exports.HomeGraphApiServiceClient = grpc.makeGenericClientConstructor(HomeGraphApiServiceService);
