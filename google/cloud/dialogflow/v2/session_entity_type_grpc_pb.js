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
var google_cloud_dialogflow_v2_session_entity_type_pb = require('../../../../google/cloud/dialogflow/v2/session_entity_type_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_dialogflow_v2_entity_type_pb = require('../../../../google/cloud/dialogflow/v2/entity_type_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_dialogflow_v2_CreateSessionEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.CreateSessionEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_CreateSessionEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.CreateSessionEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_DeleteSessionEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.DeleteSessionEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_DeleteSessionEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.DeleteSessionEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_GetSessionEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.GetSessionEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.GetSessionEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_GetSessionEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.GetSessionEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_ListSessionEntityTypesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.ListSessionEntityTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_ListSessionEntityTypesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_ListSessionEntityTypesResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.ListSessionEntityTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_ListSessionEntityTypesResponse(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_SessionEntityType(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.SessionEntityType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_SessionEntityType(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_UpdateSessionEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_entity_type_pb.UpdateSessionEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_UpdateSessionEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_entity_type_pb.UpdateSessionEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Entities are extracted from user input and represent parameters that are
// meaningful to your application. For example, a date range, a proper name
// such as a geographic location or landmark, and so on. Entities represent
// actionable data for your application.
//
// Session entity types are referred to as **User** entity types and are
// entities that are built for an individual user such as
// favorites, preferences, playlists, and so on. You can redefine a session
// entity type at the session level.
//
// Session entity methods do not work with Google Assistant integration.
// Contact Dialogflow support if you need to use session entities
// with Google Assistant integration.
//
// For more information about entity types, see the
// [Dialogflow
// documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
var SessionEntityTypesService = exports.SessionEntityTypesService = {
  // Returns the list of all session entity types in the specified session.
  //
  // This method doesn't work with Google Assistant integration.
  // Contact Dialogflow support if you need to use session entities
  // with Google Assistant integration.
  listSessionEntityTypes: {
    path: '/google.cloud.dialogflow.v2.SessionEntityTypes/ListSessionEntityTypes',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesRequest,
    responseType: google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2_ListSessionEntityTypesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_ListSessionEntityTypesRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2_ListSessionEntityTypesResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2_ListSessionEntityTypesResponse,
  },
  // Retrieves the specified session entity type.
  //
  // This method doesn't work with Google Assistant integration.
  // Contact Dialogflow support if you need to use session entities
  // with Google Assistant integration.
  getSessionEntityType: {
    path: '/google.cloud.dialogflow.v2.SessionEntityTypes/GetSessionEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2_session_entity_type_pb.GetSessionEntityTypeRequest,
    responseType: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType,
    requestSerialize: serialize_google_cloud_dialogflow_v2_GetSessionEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_GetSessionEntityTypeRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2_SessionEntityType,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2_SessionEntityType,
  },
  // Creates a session entity type.
  //
  // If the specified session entity type already exists, overrides the session
  // entity type.
  //
  // This method doesn't work with Google Assistant integration.
  // Contact Dialogflow support if you need to use session entities
  // with Google Assistant integration.
  createSessionEntityType: {
    path: '/google.cloud.dialogflow.v2.SessionEntityTypes/CreateSessionEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2_session_entity_type_pb.CreateSessionEntityTypeRequest,
    responseType: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType,
    requestSerialize: serialize_google_cloud_dialogflow_v2_CreateSessionEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_CreateSessionEntityTypeRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2_SessionEntityType,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2_SessionEntityType,
  },
  // Updates the specified session entity type.
  //
  // This method doesn't work with Google Assistant integration.
  // Contact Dialogflow support if you need to use session entities
  // with Google Assistant integration.
  updateSessionEntityType: {
    path: '/google.cloud.dialogflow.v2.SessionEntityTypes/UpdateSessionEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2_session_entity_type_pb.UpdateSessionEntityTypeRequest,
    responseType: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType,
    requestSerialize: serialize_google_cloud_dialogflow_v2_UpdateSessionEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_UpdateSessionEntityTypeRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2_SessionEntityType,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2_SessionEntityType,
  },
  // Deletes the specified session entity type.
  //
  // This method doesn't work with Google Assistant integration.
  // Contact Dialogflow support if you need to use session entities
  // with Google Assistant integration.
  deleteSessionEntityType: {
    path: '/google.cloud.dialogflow.v2.SessionEntityTypes/DeleteSessionEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2_session_entity_type_pb.DeleteSessionEntityTypeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2_DeleteSessionEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_DeleteSessionEntityTypeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SessionEntityTypesClient = grpc.makeGenericClientConstructor(SessionEntityTypesService);
