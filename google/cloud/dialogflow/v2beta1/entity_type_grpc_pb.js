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
var google_cloud_dialogflow_v2beta1_entity_type_pb = require('../../../../google/cloud/dialogflow/v2beta1/entity_type_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dialogflow_v2beta1_BatchCreateEntitiesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.BatchCreateEntitiesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchCreateEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchCreateEntitiesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.BatchCreateEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntitiesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntitiesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchDeleteEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntitiesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntityTypesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntityTypesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchDeleteEntityTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntityTypesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntitiesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntitiesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchUpdateEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntitiesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntityTypesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntityTypesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntityTypesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_CreateEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.CreateEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.CreateEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_CreateEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.CreateEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.DeleteEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.DeleteEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_EntityType(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.EntityType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_EntityType(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.GetEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.GetEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListEntityTypesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListEntityTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListEntityTypesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListEntityTypesResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListEntityTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListEntityTypesResponse(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_UpdateEntityTypeRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_entity_type_pb.UpdateEntityTypeRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.UpdateEntityTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_UpdateEntityTypeRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_entity_type_pb.UpdateEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Entities are extracted from user input and represent parameters that are
// meaningful to your application. For example, a date range, a proper name
// such as a geographic location or landmark, and so on. Entities represent
// actionable data for your application.
//
// When you define an entity, you can also include synonyms that all map to
// that entity. For example, "soft drink", "soda", "pop", and so on.
//
// There are three types of entities:
//
// *   **System** - entities that are defined by the Dialogflow API for common
//     data types such as date, time, currency, and so on. A system entity is
//     represented by the `EntityType` type.
//
// *   **Developer** - entities that are defined by you that represent
//     actionable data that is meaningful to your application. For example,
//     you could define a `pizza.sauce` entity for red or white pizza sauce,
//     a `pizza.cheese` entity for the different types of cheese on a pizza,
//     a `pizza.topping` entity for different toppings, and so on. A developer
//     entity is represented by the `EntityType` type.
//
// *   **User** - entities that are built for an individual user such as
//     favorites, preferences, playlists, and so on. A user entity is
//     represented by the [SessionEntityType][google.cloud.dialogflow.v2beta1.SessionEntityType] type.
//
// For more information about entity types, see the
// [Dialogflow
// documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
var EntityTypesService = exports.EntityTypesService = {
  // Returns the list of all entity types in the specified agent.
  listEntityTypes: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/ListEntityTypes',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesRequest,
    responseType: google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ListEntityTypesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListEntityTypesRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_ListEntityTypesResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListEntityTypesResponse,
  },
  // Retrieves the specified entity type.
  getEntityType: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/GetEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.GetEntityTypeRequest,
    responseType: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetEntityTypeRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_EntityType,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_EntityType,
  },
  // Creates an entity type in the specified agent.
  createEntityType: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/CreateEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.CreateEntityTypeRequest,
    responseType: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_CreateEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_CreateEntityTypeRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_EntityType,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_EntityType,
  },
  // Updates the specified entity type.
  updateEntityType: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/UpdateEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.UpdateEntityTypeRequest,
    responseType: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_UpdateEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_UpdateEntityTypeRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_EntityType,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_EntityType,
  },
  // Deletes the specified entity type.
  deleteEntityType: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/DeleteEntityType',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.DeleteEntityTypeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteEntityTypeRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteEntityTypeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates/Creates multiple entity types in the specified agent.
  //
  // Operation <response: [BatchUpdateEntityTypesResponse][google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesResponse]>
  batchUpdateEntityTypes: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/BatchUpdateEntityTypes',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntityTypesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntityTypesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntityTypesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes entity types in the specified agent.
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  batchDeleteEntityTypes: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/BatchDeleteEntityTypes',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntityTypesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntityTypesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntityTypesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates multiple new entities in the specified entity type.
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  batchCreateEntities: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/BatchCreateEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchCreateEntitiesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchCreateEntitiesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchCreateEntitiesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates or creates multiple entities in the specified entity type. This
  // method does not affect entities in the entity type that aren't explicitly
  // specified in the request.
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  batchUpdateEntities: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/BatchUpdateEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntitiesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntitiesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchUpdateEntitiesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes entities in the specified entity type.
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  batchDeleteEntities: {
    path: '/google.cloud.dialogflow.v2beta1.EntityTypes/BatchDeleteEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntitiesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntitiesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchDeleteEntitiesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.EntityTypesClient = grpc.makeGenericClientConstructor(EntityTypesService);
