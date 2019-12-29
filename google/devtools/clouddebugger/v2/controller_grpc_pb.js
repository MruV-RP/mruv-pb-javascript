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
var google_devtools_clouddebugger_v2_controller_pb = require('../../../../google/devtools/clouddebugger/v2/controller_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_devtools_clouddebugger_v2_data_pb = require('../../../../google/devtools/clouddebugger/v2/data_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_RegisterDebuggeeRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.RegisterDebuggeeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_RegisterDebuggeeRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_RegisterDebuggeeResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.RegisterDebuggeeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_RegisterDebuggeeResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Controller service provides the API for orchestrating a collection of
// debugger agents to perform debugging tasks. These agents are each attached
// to a process of an application which may include one or more replicas.
//
// The debugger agents register with the Controller to identify the application
// being debugged, the Debuggee. All agents that register with the same data,
// represent the same Debuggee, and are assigned the same `debuggee_id`.
//
// The debugger agents call the Controller to retrieve  the list of active
// Breakpoints. Agents with the same `debuggee_id` get the same breakpoints
// list. An agent that can fulfill the breakpoint request updates the
// Controller with the breakpoint result. The controller selects the first
// result received and discards the rest of the results.
// Agents that poll again for active breakpoints will no longer have
// the completed breakpoint in the list and should remove that breakpoint from
// their attached process.
//
// The Controller service does not provide a way to retrieve the results of
// a completed breakpoint. This functionality is available using the Debugger
// service.
var Controller2Service = exports.Controller2Service = {
  // Registers the debuggee with the controller service.
  //
  // All agents attached to the same application must call this method with
  // exactly the same request content to get back the same stable `debuggee_id`.
  // Agents should call this method again whenever `google.rpc.Code.NOT_FOUND`
  // is returned from any controller method.
  //
  // This protocol allows the controller service to disable debuggees, recover
  // from data loss, or change the `debuggee_id` format. Agents must handle
  // `debuggee_id` value changing upon re-registration.
  registerDebuggee: {
    path: '/google.devtools.clouddebugger.v2.Controller2/RegisterDebuggee',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest,
    responseType: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_RegisterDebuggeeRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_RegisterDebuggeeRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_RegisterDebuggeeResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_RegisterDebuggeeResponse,
  },
  // Returns the list of all active breakpoints for the debuggee.
  //
  // The breakpoint specification (`location`, `condition`, and `expressions`
  // fields) is semantically immutable, although the field values may
  // change. For example, an agent may update the location line number
  // to reflect the actual line where the breakpoint was set, but this
  // doesn't change the breakpoint semantics.
  //
  // This means that an agent does not need to check if a breakpoint has changed
  // when it encounters the same breakpoint on a successive call.
  // Moreover, an agent should remember the breakpoints that are completed
  // until the controller removes them from the active list to avoid
  // setting those breakpoints again.
  listActiveBreakpoints: {
    path: '/google.devtools.clouddebugger.v2.Controller2/ListActiveBreakpoints',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest,
    responseType: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_ListActiveBreakpointsResponse,
  },
  // Updates the breakpoint state or mutable fields.
  // The entire Breakpoint message must be sent back to the controller service.
  //
  // Updates to active breakpoint fields are only allowed if the new value
  // does not change the breakpoint specification. Updates to the `location`,
  // `condition` and `expressions` fields should not alter the breakpoint
  // semantics. These may only make changes such as canonicalizing a value
  // or snapping the location to the correct line of code.
  updateActiveBreakpoint: {
    path: '/google.devtools.clouddebugger.v2.Controller2/UpdateActiveBreakpoint',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest,
    responseType: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_UpdateActiveBreakpointResponse,
  },
};

exports.Controller2Client = grpc.makeGenericClientConstructor(Controller2Service);
