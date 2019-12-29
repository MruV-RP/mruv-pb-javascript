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
var google_logging_v2_logging_config_pb = require('../../../google/logging/v2/logging_config_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_logging_v2_CreateExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CreateExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateExclusionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CreateExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_CreateSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CreateSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateSinkRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CreateSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.DeleteExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteExclusionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.DeleteExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.DeleteSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteSinkRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.DeleteSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetExclusionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetSinkRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListExclusionsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListExclusionsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListExclusionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListExclusionsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListExclusionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListExclusionsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListExclusionsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListExclusionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListExclusionsResponse(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListExclusionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListSinksRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListSinksRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListSinksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListSinksRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListSinksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListSinksResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListSinksResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListSinksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListSinksResponse(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListSinksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogExclusion(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.LogExclusion)) {
    throw new Error('Expected argument of type google.logging.v2.LogExclusion');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogExclusion(buffer_arg) {
  return google_logging_v2_logging_config_pb.LogExclusion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogSink(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.LogSink)) {
    throw new Error('Expected argument of type google.logging.v2.LogSink');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogSink(buffer_arg) {
  return google_logging_v2_logging_config_pb.LogSink.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateExclusionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateSinkRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for configuring sinks used to route log entries.
var ConfigServiceV2Service = exports.ConfigServiceV2Service = {
  // Lists sinks.
  listSinks: {
    path: '/google.logging.v2.ConfigServiceV2/ListSinks',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.ListSinksRequest,
    responseType: google_logging_v2_logging_config_pb.ListSinksResponse,
    requestSerialize: serialize_google_logging_v2_ListSinksRequest,
    requestDeserialize: deserialize_google_logging_v2_ListSinksRequest,
    responseSerialize: serialize_google_logging_v2_ListSinksResponse,
    responseDeserialize: deserialize_google_logging_v2_ListSinksResponse,
  },
  // Gets a sink.
  getSink: {
    path: '/google.logging.v2.ConfigServiceV2/GetSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetSinkRequest,
    responseType: google_logging_v2_logging_config_pb.LogSink,
    requestSerialize: serialize_google_logging_v2_GetSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_GetSinkRequest,
    responseSerialize: serialize_google_logging_v2_LogSink,
    responseDeserialize: deserialize_google_logging_v2_LogSink,
  },
  // Creates a sink that exports specified log entries to a destination. The
  // export of newly-ingested log entries begins immediately, unless the sink's
  // `writer_identity` is not permitted to write to the destination. A sink can
  // export log entries only from the resource owning the sink.
  createSink: {
    path: '/google.logging.v2.ConfigServiceV2/CreateSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CreateSinkRequest,
    responseType: google_logging_v2_logging_config_pb.LogSink,
    requestSerialize: serialize_google_logging_v2_CreateSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateSinkRequest,
    responseSerialize: serialize_google_logging_v2_LogSink,
    responseDeserialize: deserialize_google_logging_v2_LogSink,
  },
  // Updates a sink. This method replaces the following fields in the existing
  // sink with values from the new sink: `destination`, and `filter`.
  //
  // The updated sink might also have a new `writer_identity`; see the
  // `unique_writer_identity` field.
  updateSink: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateSinkRequest,
    responseType: google_logging_v2_logging_config_pb.LogSink,
    requestSerialize: serialize_google_logging_v2_UpdateSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateSinkRequest,
    responseSerialize: serialize_google_logging_v2_LogSink,
    responseDeserialize: deserialize_google_logging_v2_LogSink,
  },
  // Deletes a sink. If the sink has a unique `writer_identity`, then that
  // service account is also deleted.
  deleteSink: {
    path: '/google.logging.v2.ConfigServiceV2/DeleteSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.DeleteSinkRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteSinkRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all the exclusions in a parent resource.
  listExclusions: {
    path: '/google.logging.v2.ConfigServiceV2/ListExclusions',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.ListExclusionsRequest,
    responseType: google_logging_v2_logging_config_pb.ListExclusionsResponse,
    requestSerialize: serialize_google_logging_v2_ListExclusionsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListExclusionsRequest,
    responseSerialize: serialize_google_logging_v2_ListExclusionsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListExclusionsResponse,
  },
  // Gets the description of an exclusion.
  getExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/GetExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetExclusionRequest,
    responseType: google_logging_v2_logging_config_pb.LogExclusion,
    requestSerialize: serialize_google_logging_v2_GetExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_GetExclusionRequest,
    responseSerialize: serialize_google_logging_v2_LogExclusion,
    responseDeserialize: deserialize_google_logging_v2_LogExclusion,
  },
  // Creates a new exclusion in a specified parent resource.
  // Only log entries belonging to that resource can be excluded.
  // You can have up to 10 exclusions in a resource.
  createExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/CreateExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CreateExclusionRequest,
    responseType: google_logging_v2_logging_config_pb.LogExclusion,
    requestSerialize: serialize_google_logging_v2_CreateExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateExclusionRequest,
    responseSerialize: serialize_google_logging_v2_LogExclusion,
    responseDeserialize: deserialize_google_logging_v2_LogExclusion,
  },
  // Changes one or more properties of an existing exclusion.
  updateExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateExclusionRequest,
    responseType: google_logging_v2_logging_config_pb.LogExclusion,
    requestSerialize: serialize_google_logging_v2_UpdateExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateExclusionRequest,
    responseSerialize: serialize_google_logging_v2_LogExclusion,
    responseDeserialize: deserialize_google_logging_v2_LogExclusion,
  },
  // Deletes an exclusion.
  deleteExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/DeleteExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.DeleteExclusionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteExclusionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ConfigServiceV2Client = grpc.makeGenericClientConstructor(ConfigServiceV2Service);
