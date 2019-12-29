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
'use strict';
var grpc = require('grpc');
var google_bigtable_v2_bigtable_pb = require('../../../google/bigtable/v2/bigtable_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
var google_bigtable_v2_data_pb = require('../../../google/bigtable/v2/data_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');

function serialize_google_bigtable_v2_CheckAndMutateRowRequest(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest)) {
    throw new Error('Expected argument of type google.bigtable.v2.CheckAndMutateRowRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_CheckAndMutateRowRequest(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_CheckAndMutateRowResponse(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse)) {
    throw new Error('Expected argument of type google.bigtable.v2.CheckAndMutateRowResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_CheckAndMutateRowResponse(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_MutateRowRequest(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.MutateRowRequest)) {
    throw new Error('Expected argument of type google.bigtable.v2.MutateRowRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_MutateRowRequest(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.MutateRowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_MutateRowResponse(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.MutateRowResponse)) {
    throw new Error('Expected argument of type google.bigtable.v2.MutateRowResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_MutateRowResponse(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.MutateRowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_MutateRowsRequest(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.MutateRowsRequest)) {
    throw new Error('Expected argument of type google.bigtable.v2.MutateRowsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_MutateRowsRequest(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.MutateRowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_MutateRowsResponse(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.MutateRowsResponse)) {
    throw new Error('Expected argument of type google.bigtable.v2.MutateRowsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_MutateRowsResponse(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.MutateRowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_ReadModifyWriteRowRequest(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest)) {
    throw new Error('Expected argument of type google.bigtable.v2.ReadModifyWriteRowRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_ReadModifyWriteRowRequest(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_ReadModifyWriteRowResponse(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse)) {
    throw new Error('Expected argument of type google.bigtable.v2.ReadModifyWriteRowResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_ReadModifyWriteRowResponse(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_ReadRowsRequest(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.ReadRowsRequest)) {
    throw new Error('Expected argument of type google.bigtable.v2.ReadRowsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_ReadRowsRequest(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.ReadRowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_ReadRowsResponse(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.ReadRowsResponse)) {
    throw new Error('Expected argument of type google.bigtable.v2.ReadRowsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_ReadRowsResponse(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.ReadRowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_SampleRowKeysRequest(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.SampleRowKeysRequest)) {
    throw new Error('Expected argument of type google.bigtable.v2.SampleRowKeysRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_SampleRowKeysRequest(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.SampleRowKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_v2_SampleRowKeysResponse(arg) {
  if (!(arg instanceof google_bigtable_v2_bigtable_pb.SampleRowKeysResponse)) {
    throw new Error('Expected argument of type google.bigtable.v2.SampleRowKeysResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_v2_SampleRowKeysResponse(buffer_arg) {
  return google_bigtable_v2_bigtable_pb.SampleRowKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for reading from and writing to existing Bigtable tables.
var BigtableService = exports.BigtableService = {
  // Streams back the contents of all requested rows in key order, optionally
  // applying the same Reader filter to each. Depending on their size,
  // rows and cells may be broken up across multiple responses, but
  // atomicity of each row will still be preserved. See the
  // ReadRowsResponse documentation for details.
  readRows: {
    path: '/google.bigtable.v2.Bigtable/ReadRows',
    requestStream: false,
    responseStream: true,
    requestType: google_bigtable_v2_bigtable_pb.ReadRowsRequest,
    responseType: google_bigtable_v2_bigtable_pb.ReadRowsResponse,
    requestSerialize: serialize_google_bigtable_v2_ReadRowsRequest,
    requestDeserialize: deserialize_google_bigtable_v2_ReadRowsRequest,
    responseSerialize: serialize_google_bigtable_v2_ReadRowsResponse,
    responseDeserialize: deserialize_google_bigtable_v2_ReadRowsResponse,
  },
  // Returns a sample of row keys in the table. The returned row keys will
  // delimit contiguous sections of the table of approximately equal size,
  // which can be used to break up the data for distributed tasks like
  // mapreduces.
  sampleRowKeys: {
    path: '/google.bigtable.v2.Bigtable/SampleRowKeys',
    requestStream: false,
    responseStream: true,
    requestType: google_bigtable_v2_bigtable_pb.SampleRowKeysRequest,
    responseType: google_bigtable_v2_bigtable_pb.SampleRowKeysResponse,
    requestSerialize: serialize_google_bigtable_v2_SampleRowKeysRequest,
    requestDeserialize: deserialize_google_bigtable_v2_SampleRowKeysRequest,
    responseSerialize: serialize_google_bigtable_v2_SampleRowKeysResponse,
    responseDeserialize: deserialize_google_bigtable_v2_SampleRowKeysResponse,
  },
  // Mutates a row atomically. Cells already present in the row are left
  // unchanged unless explicitly changed by `mutation`.
  mutateRow: {
    path: '/google.bigtable.v2.Bigtable/MutateRow',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v2_bigtable_pb.MutateRowRequest,
    responseType: google_bigtable_v2_bigtable_pb.MutateRowResponse,
    requestSerialize: serialize_google_bigtable_v2_MutateRowRequest,
    requestDeserialize: deserialize_google_bigtable_v2_MutateRowRequest,
    responseSerialize: serialize_google_bigtable_v2_MutateRowResponse,
    responseDeserialize: deserialize_google_bigtable_v2_MutateRowResponse,
  },
  // Mutates multiple rows in a batch. Each individual row is mutated
  // atomically as in MutateRow, but the entire batch is not executed
  // atomically.
  mutateRows: {
    path: '/google.bigtable.v2.Bigtable/MutateRows',
    requestStream: false,
    responseStream: true,
    requestType: google_bigtable_v2_bigtable_pb.MutateRowsRequest,
    responseType: google_bigtable_v2_bigtable_pb.MutateRowsResponse,
    requestSerialize: serialize_google_bigtable_v2_MutateRowsRequest,
    requestDeserialize: deserialize_google_bigtable_v2_MutateRowsRequest,
    responseSerialize: serialize_google_bigtable_v2_MutateRowsResponse,
    responseDeserialize: deserialize_google_bigtable_v2_MutateRowsResponse,
  },
  // Mutates a row atomically based on the output of a predicate Reader filter.
  checkAndMutateRow: {
    path: '/google.bigtable.v2.Bigtable/CheckAndMutateRow',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest,
    responseType: google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse,
    requestSerialize: serialize_google_bigtable_v2_CheckAndMutateRowRequest,
    requestDeserialize: deserialize_google_bigtable_v2_CheckAndMutateRowRequest,
    responseSerialize: serialize_google_bigtable_v2_CheckAndMutateRowResponse,
    responseDeserialize: deserialize_google_bigtable_v2_CheckAndMutateRowResponse,
  },
  // Modifies a row atomically on the server. The method reads the latest
  // existing timestamp and value from the specified columns and writes a new
  // entry based on pre-defined read/modify/write rules. The new value for the
  // timestamp is the greater of the existing timestamp or the current server
  // time. The method returns the new contents of all modified cells.
  readModifyWriteRow: {
    path: '/google.bigtable.v2.Bigtable/ReadModifyWriteRow',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest,
    responseType: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse,
    requestSerialize: serialize_google_bigtable_v2_ReadModifyWriteRowRequest,
    requestDeserialize: deserialize_google_bigtable_v2_ReadModifyWriteRowRequest,
    responseSerialize: serialize_google_bigtable_v2_ReadModifyWriteRowResponse,
    responseDeserialize: deserialize_google_bigtable_v2_ReadModifyWriteRowResponse,
  },
};

exports.BigtableClient = grpc.makeGenericClientConstructor(BigtableService);
