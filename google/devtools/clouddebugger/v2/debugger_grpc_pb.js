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
var google_devtools_clouddebugger_v2_debugger_pb = require('../../../../google/devtools/clouddebugger/v2/debugger_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_devtools_clouddebugger_v2_data_pb = require('../../../../google/devtools/clouddebugger/v2/data_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_google_devtools_clouddebugger_v2_DeleteBreakpointRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.DeleteBreakpointRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_DeleteBreakpointRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_GetBreakpointRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.GetBreakpointRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_GetBreakpointRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_GetBreakpointResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.GetBreakpointResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_GetBreakpointResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_ListBreakpointsRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.ListBreakpointsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_ListBreakpointsRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_ListBreakpointsResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.ListBreakpointsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_ListBreakpointsResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_ListDebuggeesRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.ListDebuggeesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_ListDebuggeesRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_ListDebuggeesResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.ListDebuggeesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_ListDebuggeesResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_SetBreakpointRequest(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.SetBreakpointRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_SetBreakpointRequest(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouddebugger_v2_SetBreakpointResponse(arg) {
  if (!(arg instanceof google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse)) {
    throw new Error('Expected argument of type google.devtools.clouddebugger.v2.SetBreakpointResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouddebugger_v2_SetBreakpointResponse(buffer_arg) {
  return google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Debugger service provides the API that allows users to collect run-time
// information from a running application, without stopping or slowing it down
// and without modifying its state.  An application may include one or
// more replicated processes performing the same work.
//
// A debugged application is represented using the Debuggee concept. The
// Debugger service provides a way to query for available debuggees, but does
// not provide a way to create one.  A debuggee is created using the Controller
// service, usually by running a debugger agent with the application.
//
// The Debugger service enables the client to set one or more Breakpoints on a
// Debuggee and collect the results of the set Breakpoints.
var Debugger2Service = exports.Debugger2Service = {
  // Sets the breakpoint to the debuggee.
  setBreakpoint: {
    path: '/google.devtools.clouddebugger.v2.Debugger2/SetBreakpoint',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest,
    responseType: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_SetBreakpointRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_SetBreakpointRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_SetBreakpointResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_SetBreakpointResponse,
  },
  // Gets breakpoint information.
  getBreakpoint: {
    path: '/google.devtools.clouddebugger.v2.Debugger2/GetBreakpoint',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest,
    responseType: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_GetBreakpointRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_GetBreakpointRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_GetBreakpointResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_GetBreakpointResponse,
  },
  // Deletes the breakpoint from the debuggee.
  deleteBreakpoint: {
    path: '/google.devtools.clouddebugger.v2.Debugger2/DeleteBreakpoint',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_DeleteBreakpointRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_DeleteBreakpointRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all breakpoints for the debuggee.
  listBreakpoints: {
    path: '/google.devtools.clouddebugger.v2.Debugger2/ListBreakpoints',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest,
    responseType: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_ListBreakpointsRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_ListBreakpointsRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_ListBreakpointsResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_ListBreakpointsResponse,
  },
  // Lists all the debuggees that the user has access to.
  listDebuggees: {
    path: '/google.devtools.clouddebugger.v2.Debugger2/ListDebuggees',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest,
    responseType: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse,
    requestSerialize: serialize_google_devtools_clouddebugger_v2_ListDebuggeesRequest,
    requestDeserialize: deserialize_google_devtools_clouddebugger_v2_ListDebuggeesRequest,
    responseSerialize: serialize_google_devtools_clouddebugger_v2_ListDebuggeesResponse,
    responseDeserialize: deserialize_google_devtools_clouddebugger_v2_ListDebuggeesResponse,
  },
};

exports.Debugger2Client = grpc.makeGenericClientConstructor(Debugger2Service);
