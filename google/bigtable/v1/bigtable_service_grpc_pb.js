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
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_bigtable_v1_bigtable_data_pb = require('../../../google/bigtable/v1/bigtable_data_pb.js');
var google_bigtable_v1_bigtable_service_messages_pb = require('../../../google/bigtable/v1/bigtable_service_messages_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_bigtable_v1_CheckAndMutateRowRequest(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest)) {
    throw new Error('Expected argument of type google.bigtable.v1.CheckAndMutateRowRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_CheckAndMutateRowRequest(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_CheckAndMutateRowResponse(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse)) {
    throw new Error('Expected argument of type google.bigtable.v1.CheckAndMutateRowResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_CheckAndMutateRowResponse(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_MutateRowRequest(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest)) {
    throw new Error('Expected argument of type google.bigtable.v1.MutateRowRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_MutateRowRequest(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_MutateRowsRequest(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest)) {
    throw new Error('Expected argument of type google.bigtable.v1.MutateRowsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_MutateRowsRequest(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_MutateRowsResponse(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse)) {
    throw new Error('Expected argument of type google.bigtable.v1.MutateRowsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_MutateRowsResponse(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_ReadModifyWriteRowRequest(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest)) {
    throw new Error('Expected argument of type google.bigtable.v1.ReadModifyWriteRowRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_ReadModifyWriteRowRequest(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_ReadRowsRequest(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest)) {
    throw new Error('Expected argument of type google.bigtable.v1.ReadRowsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_ReadRowsRequest(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_ReadRowsResponse(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse)) {
    throw new Error('Expected argument of type google.bigtable.v1.ReadRowsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_ReadRowsResponse(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_Row(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_data_pb.Row)) {
    throw new Error('Expected argument of type google.bigtable.v1.Row');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_Row(buffer_arg) {
  return google_bigtable_v1_bigtable_data_pb.Row.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_SampleRowKeysRequest(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest)) {
    throw new Error('Expected argument of type google.bigtable.v1.SampleRowKeysRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_SampleRowKeysRequest(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v1_SampleRowKeysResponse(arg) {
  if (!(arg instanceof google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse)) {
    throw new Error('Expected argument of type google.bigtable.v1.SampleRowKeysResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v1_SampleRowKeysResponse(buffer_arg) {
  return google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for reading from and writing to existing Bigtables.
var BigtableServiceService = exports.BigtableServiceService = {
  // Streams back the contents of all requested rows, optionally applying
  // the same Reader filter to each. Depending on their size, rows may be
  // broken up across multiple responses, but atomicity of each row will still
  // be preserved.
  readRows: {
    path: '/google.bigtable.v1.BigtableService/ReadRows',
    requestStream: false,
    responseStream: true,
    requestType: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest,
    responseType: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse,
    requestSerialize: serialize_google_bigtable_v1_ReadRowsRequest,
    requestDeserialize: deserialize_google_bigtable_v1_ReadRowsRequest,
    responseSerialize: serialize_google_bigtable_v1_ReadRowsResponse,
    responseDeserialize: deserialize_google_bigtable_v1_ReadRowsResponse,
  },
  // Returns a sample of row keys in the table. The returned row keys will
  // delimit contiguous sections of the table of approximately equal size,
  // which can be used to break up the data for distributed tasks like
  // mapreduces.
  sampleRowKeys: {
    path: '/google.bigtable.v1.BigtableService/SampleRowKeys',
    requestStream: false,
    responseStream: true,
    requestType: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest,
    responseType: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse,
    requestSerialize: serialize_google_bigtable_v1_SampleRowKeysRequest,
    requestDeserialize: deserialize_google_bigtable_v1_SampleRowKeysRequest,
    responseSerialize: serialize_google_bigtable_v1_SampleRowKeysResponse,
    responseDeserialize: deserialize_google_bigtable_v1_SampleRowKeysResponse,
  },
  // Mutates a row atomically. Cells already present in the row are left
  // unchanged unless explicitly changed by 'mutation'.
  mutateRow: {
    path: '/google.bigtable.v1.BigtableService/MutateRow',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_v1_MutateRowRequest,
    requestDeserialize: deserialize_google_bigtable_v1_MutateRowRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Mutates multiple rows in a batch. Each individual row is mutated
  // atomically as in MutateRow, but the entire batch is not executed
  // atomically.
  mutateRows: {
    path: '/google.bigtable.v1.BigtableService/MutateRows',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest,
    responseType: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse,
    requestSerialize: serialize_google_bigtable_v1_MutateRowsRequest,
    requestDeserialize: deserialize_google_bigtable_v1_MutateRowsRequest,
    responseSerialize: serialize_google_bigtable_v1_MutateRowsResponse,
    responseDeserialize: deserialize_google_bigtable_v1_MutateRowsResponse,
  },
  // Mutates a row atomically based on the output of a predicate Reader filter.
  checkAndMutateRow: {
    path: '/google.bigtable.v1.BigtableService/CheckAndMutateRow',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest,
    responseType: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse,
    requestSerialize: serialize_google_bigtable_v1_CheckAndMutateRowRequest,
    requestDeserialize: deserialize_google_bigtable_v1_CheckAndMutateRowRequest,
    responseSerialize: serialize_google_bigtable_v1_CheckAndMutateRowResponse,
    responseDeserialize: deserialize_google_bigtable_v1_CheckAndMutateRowResponse,
  },
  // Modifies a row atomically, reading the latest existing timestamp/value from
  // the specified columns and writing a new value at
  // max(existing timestamp, current server time) based on pre-defined
  // read/modify/write rules. Returns the new contents of all modified cells.
  readModifyWriteRow: {
    path: '/google.bigtable.v1.BigtableService/ReadModifyWriteRow',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest,
    responseType: google_bigtable_v1_bigtable_data_pb.Row,
    requestSerialize: serialize_google_bigtable_v1_ReadModifyWriteRowRequest,
    requestDeserialize: deserialize_google_bigtable_v1_ReadModifyWriteRowRequest,
    responseSerialize: serialize_google_bigtable_v1_Row,
    responseDeserialize: deserialize_google_bigtable_v1_Row,
  },
};

exports.BigtableServiceClient = grpc.makeGenericClientConstructor(BigtableServiceService);
