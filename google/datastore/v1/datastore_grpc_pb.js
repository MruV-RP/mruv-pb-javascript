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
var google_datastore_v1_datastore_pb = require('../../../google/datastore/v1/datastore_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_datastore_v1_entity_pb = require('../../../google/datastore/v1/entity_pb.js');
var google_datastore_v1_query_pb = require('../../../google/datastore/v1/query_pb.js');

function serialize_google_datastore_v1_AllocateIdsRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.AllocateIdsRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.AllocateIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_AllocateIdsRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.AllocateIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_AllocateIdsResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.AllocateIdsResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.AllocateIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_AllocateIdsResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.AllocateIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_BeginTransactionRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.BeginTransactionRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.BeginTransactionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_BeginTransactionRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.BeginTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_BeginTransactionResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.BeginTransactionResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.BeginTransactionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_BeginTransactionResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.BeginTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_CommitRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.CommitRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.CommitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_CommitRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_CommitResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.CommitResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.CommitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_CommitResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_LookupRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.LookupRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.LookupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_LookupRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.LookupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_LookupResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.LookupResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.LookupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_LookupResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.LookupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_ReserveIdsRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.ReserveIdsRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.ReserveIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_ReserveIdsRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.ReserveIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_ReserveIdsResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.ReserveIdsResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.ReserveIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_ReserveIdsResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.ReserveIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_RollbackRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.RollbackRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.RollbackRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_RollbackRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.RollbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_RollbackResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.RollbackResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.RollbackResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_RollbackResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.RollbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_RunQueryRequest(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.RunQueryRequest)) {
    throw new Error('Expected argument of type google.datastore.v1.RunQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_RunQueryRequest(buffer_arg) {
  return google_datastore_v1_datastore_pb.RunQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_v1_RunQueryResponse(arg) {
  if (!(arg instanceof google_datastore_v1_datastore_pb.RunQueryResponse)) {
    throw new Error('Expected argument of type google.datastore.v1.RunQueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_v1_RunQueryResponse(buffer_arg) {
  return google_datastore_v1_datastore_pb.RunQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Each RPC normalizes the partition IDs of the keys in its input entities,
// and always returns entities with keys with normalized partition IDs.
// This applies to all keys and entities, including those in values, except keys
// with both an empty path and an empty or unset partition ID. Normalization of
// input keys sets the project ID (if not already set) to the project ID from
// the request.
//
var DatastoreService = exports.DatastoreService = {
  // Looks up entities by key.
  lookup: {
    path: '/google.datastore.v1.Datastore/Lookup',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.LookupRequest,
    responseType: google_datastore_v1_datastore_pb.LookupResponse,
    requestSerialize: serialize_google_datastore_v1_LookupRequest,
    requestDeserialize: deserialize_google_datastore_v1_LookupRequest,
    responseSerialize: serialize_google_datastore_v1_LookupResponse,
    responseDeserialize: deserialize_google_datastore_v1_LookupResponse,
  },
  // Queries for entities.
  runQuery: {
    path: '/google.datastore.v1.Datastore/RunQuery',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.RunQueryRequest,
    responseType: google_datastore_v1_datastore_pb.RunQueryResponse,
    requestSerialize: serialize_google_datastore_v1_RunQueryRequest,
    requestDeserialize: deserialize_google_datastore_v1_RunQueryRequest,
    responseSerialize: serialize_google_datastore_v1_RunQueryResponse,
    responseDeserialize: deserialize_google_datastore_v1_RunQueryResponse,
  },
  // Begins a new transaction.
  beginTransaction: {
    path: '/google.datastore.v1.Datastore/BeginTransaction',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.BeginTransactionRequest,
    responseType: google_datastore_v1_datastore_pb.BeginTransactionResponse,
    requestSerialize: serialize_google_datastore_v1_BeginTransactionRequest,
    requestDeserialize: deserialize_google_datastore_v1_BeginTransactionRequest,
    responseSerialize: serialize_google_datastore_v1_BeginTransactionResponse,
    responseDeserialize: deserialize_google_datastore_v1_BeginTransactionResponse,
  },
  // Commits a transaction, optionally creating, deleting or modifying some
  // entities.
  commit: {
    path: '/google.datastore.v1.Datastore/Commit',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.CommitRequest,
    responseType: google_datastore_v1_datastore_pb.CommitResponse,
    requestSerialize: serialize_google_datastore_v1_CommitRequest,
    requestDeserialize: deserialize_google_datastore_v1_CommitRequest,
    responseSerialize: serialize_google_datastore_v1_CommitResponse,
    responseDeserialize: deserialize_google_datastore_v1_CommitResponse,
  },
  // Rolls back a transaction.
  rollback: {
    path: '/google.datastore.v1.Datastore/Rollback',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.RollbackRequest,
    responseType: google_datastore_v1_datastore_pb.RollbackResponse,
    requestSerialize: serialize_google_datastore_v1_RollbackRequest,
    requestDeserialize: deserialize_google_datastore_v1_RollbackRequest,
    responseSerialize: serialize_google_datastore_v1_RollbackResponse,
    responseDeserialize: deserialize_google_datastore_v1_RollbackResponse,
  },
  // Allocates IDs for the given keys, which is useful for referencing an entity
  // before it is inserted.
  allocateIds: {
    path: '/google.datastore.v1.Datastore/AllocateIds',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.AllocateIdsRequest,
    responseType: google_datastore_v1_datastore_pb.AllocateIdsResponse,
    requestSerialize: serialize_google_datastore_v1_AllocateIdsRequest,
    requestDeserialize: deserialize_google_datastore_v1_AllocateIdsRequest,
    responseSerialize: serialize_google_datastore_v1_AllocateIdsResponse,
    responseDeserialize: deserialize_google_datastore_v1_AllocateIdsResponse,
  },
  // Prevents the supplied keys' IDs from being auto-allocated by Cloud
  // Datastore.
  reserveIds: {
    path: '/google.datastore.v1.Datastore/ReserveIds',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_v1_datastore_pb.ReserveIdsRequest,
    responseType: google_datastore_v1_datastore_pb.ReserveIdsResponse,
    requestSerialize: serialize_google_datastore_v1_ReserveIdsRequest,
    requestDeserialize: deserialize_google_datastore_v1_ReserveIdsRequest,
    responseSerialize: serialize_google_datastore_v1_ReserveIdsResponse,
    responseDeserialize: deserialize_google_datastore_v1_ReserveIdsResponse,
  },
};

exports.DatastoreClient = grpc.makeGenericClientConstructor(DatastoreService);
