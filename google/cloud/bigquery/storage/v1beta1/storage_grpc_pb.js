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
var google_cloud_bigquery_storage_v1beta1_storage_pb = require('../../../../../google/cloud/bigquery/storage/v1beta1/storage_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_cloud_bigquery_storage_v1beta1_arrow_pb = require('../../../../../google/cloud/bigquery/storage/v1beta1/arrow_pb.js');
var google_cloud_bigquery_storage_v1beta1_avro_pb = require('../../../../../google/cloud/bigquery/storage/v1beta1/avro_pb.js');
var google_cloud_bigquery_storage_v1beta1_read_options_pb = require('../../../../../google/cloud/bigquery/storage/v1beta1/read_options_pb.js');
var google_cloud_bigquery_storage_v1beta1_table_reference_pb = require('../../../../../google/cloud/bigquery/storage/v1beta1/table_reference_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsRequest(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsResponse(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_CreateReadSessionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_CreateReadSessionRequest(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_FinalizeStreamRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_FinalizeStreamRequest(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_ReadRowsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.ReadRowsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_ReadRowsRequest(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_ReadRowsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.ReadRowsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_ReadRowsResponse(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_ReadSession(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.ReadSession');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_ReadSession(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamRequest(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamResponse(buffer_arg) {
  return google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// BigQuery storage API.
//
// The BigQuery storage API can be used to read data stored in BigQuery.
var BigQueryStorageService = exports.BigQueryStorageService = {
  // Creates a new read session. A read session divides the contents of a
  // BigQuery table into one or more streams, which can then be used to read
  // data from the table. The read session also specifies properties of the
  // data to be read, such as a list of columns or a push-down filter describing
  // the rows to be returned.
  //
  // A particular row can be read by at most one stream. When the caller has
  // reached the end of each stream in the session, then all the data in the
  // table has been read.
  //
  // Read sessions automatically expire 24 hours after they are created and do
  // not require manual clean-up by the caller.
  createReadSession: {
    path: '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/CreateReadSession',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest,
    responseType: google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession,
    requestSerialize: serialize_google_cloud_bigquery_storage_v1beta1_CreateReadSessionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_CreateReadSessionRequest,
    responseSerialize: serialize_google_cloud_bigquery_storage_v1beta1_ReadSession,
    responseDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_ReadSession,
  },
  // Reads rows from the table in the format prescribed by the read session.
  // Each response contains one or more table rows, up to a maximum of 10 MiB
  // per response; read requests which attempt to read individual rows larger
  // than this will fail.
  //
  // Each request also returns a set of stream statistics reflecting the
  // estimated total number of rows in the read stream. This number is computed
  // based on the total table size and the number of active streams in the read
  // session, and may change as other streams continue to read data.
  readRows: {
    path: '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/ReadRows',
    requestStream: false,
    responseStream: true,
    requestType: google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsRequest,
    responseType: google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsResponse,
    requestSerialize: serialize_google_cloud_bigquery_storage_v1beta1_ReadRowsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_ReadRowsRequest,
    responseSerialize: serialize_google_cloud_bigquery_storage_v1beta1_ReadRowsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_ReadRowsResponse,
  },
  // Creates additional streams for a ReadSession. This API can be used to
  // dynamically adjust the parallelism of a batch processing task upwards by
  // adding additional workers.
  batchCreateReadSessionStreams: {
    path: '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/BatchCreateReadSessionStreams',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest,
    responseType: google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse,
    requestSerialize: serialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsRequest,
    responseSerialize: serialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_BatchCreateReadSessionStreamsResponse,
  },
  // Triggers the graceful termination of a single stream in a ReadSession. This
  // API can be used to dynamically adjust the parallelism of a batch processing
  // task downwards without losing data.
  //
  // This API does not delete the stream -- it remains visible in the
  // ReadSession, and any data processed by the stream is not released to other
  // streams. However, no additional data will be assigned to the stream once
  // this call completes. Callers must continue reading data on the stream until
  // the end of the stream is reached so that data which has already been
  // assigned to the stream will be processed.
  //
  // This method will return an error if there are no other live streams
  // in the Session, or if SplitReadStream() has been called on the given
  // Stream.
  finalizeStream: {
    path: '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/FinalizeStream',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_storage_v1beta1_FinalizeStreamRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_FinalizeStreamRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Splits a given read stream into two Streams. These streams are referred to
  // as the primary and the residual of the split. The original stream can still
  // be read from in the same manner as before. Both of the returned streams can
  // also be read from, and the total rows return by both child streams will be
  // the same as the rows read from the original stream.
  //
  // Moreover, the two child streams will be allocated back to back in the
  // original Stream. Concretely, it is guaranteed that for streams Original,
  // Primary, and Residual, that Original[0-j] = Primary[0-j] and
  // Original[j-n] = Residual[0-m] once the streams have been read to
  // completion.
  //
  // This method is guaranteed to be idempotent.
  splitReadStream: {
    path: '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/SplitReadStream',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest,
    responseType: google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse,
    requestSerialize: serialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamRequest,
    responseSerialize: serialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_storage_v1beta1_SplitReadStreamResponse,
  },
};

exports.BigQueryStorageClient = grpc.makeGenericClientConstructor(BigQueryStorageService);
