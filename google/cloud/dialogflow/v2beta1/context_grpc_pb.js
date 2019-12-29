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
var google_cloud_dialogflow_v2beta1_context_pb = require('../../../../google/cloud/dialogflow/v2beta1/context_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dialogflow_v2beta1_Context(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.Context)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.Context');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_Context(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.Context.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_CreateContextRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.CreateContextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_CreateContextRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteAllContextsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteAllContextsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteAllContextsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteContextRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteContextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteContextRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetContextRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetContextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetContextRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListContextsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListContextsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListContextsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListContextsResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListContextsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListContextsResponse(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_UpdateContextRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.UpdateContextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_UpdateContextRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A context represents additional information included with user input or with
// an intent returned by the Dialogflow API. Contexts are helpful for
// differentiating user input which may be vague or have a different meaning
// depending on additional details from your application such as user setting
// and preferences, previous user input, where the user is in your application,
// geographic location, and so on.
//
// You can include contexts as input parameters of a
// [DetectIntent][google.cloud.dialogflow.v2beta1.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2beta1.Sessions.StreamingDetectIntent]) request,
// or as output contexts included in the returned intent.
// Contexts expire when an intent is matched, after the number of `DetectIntent`
// requests specified by the `lifespan_count` parameter, or after 20 minutes
// if no intents are matched for a `DetectIntent` request.
//
// For more information about contexts, see the
// [Dialogflow
// documentation](https://cloud.google.com/dialogflow/docs/contexts-overview).
var ContextsService = exports.ContextsService = {
  // Returns the list of all contexts in the specified session.
  listContexts: {
    path: '/google.cloud.dialogflow.v2beta1.Contexts/ListContexts',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_context_pb.ListContextsRequest,
    responseType: google_cloud_dialogflow_v2beta1_context_pb.ListContextsResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ListContextsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListContextsRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_ListContextsResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListContextsResponse,
  },
  // Retrieves the specified context.
  getContext: {
    path: '/google.cloud.dialogflow.v2beta1.Contexts/GetContext',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_context_pb.GetContextRequest,
    responseType: google_cloud_dialogflow_v2beta1_context_pb.Context,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetContextRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetContextRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Context,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Context,
  },
  // Creates a context.
  //
  // If the specified context already exists, overrides the context.
  createContext: {
    path: '/google.cloud.dialogflow.v2beta1.Contexts/CreateContext',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_context_pb.CreateContextRequest,
    responseType: google_cloud_dialogflow_v2beta1_context_pb.Context,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_CreateContextRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_CreateContextRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Context,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Context,
  },
  // Updates the specified context.
  updateContext: {
    path: '/google.cloud.dialogflow.v2beta1.Contexts/UpdateContext',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_context_pb.UpdateContextRequest,
    responseType: google_cloud_dialogflow_v2beta1_context_pb.Context,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_UpdateContextRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_UpdateContextRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Context,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Context,
  },
  // Deletes the specified context.
  deleteContext: {
    path: '/google.cloud.dialogflow.v2beta1.Contexts/DeleteContext',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_context_pb.DeleteContextRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteContextRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteContextRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes all active contexts in the specified session.
  deleteAllContexts: {
    path: '/google.cloud.dialogflow.v2beta1.Contexts/DeleteAllContexts',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_context_pb.DeleteAllContextsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteAllContextsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteAllContextsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ContextsClient = grpc.makeGenericClientConstructor(ContextsService);
