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
var google_spanner_v1_spanner_pb = require('../../../google/spanner/v1/spanner_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');
var google_spanner_v1_keys_pb = require('../../../google/spanner/v1/keys_pb.js');
var google_spanner_v1_mutation_pb = require('../../../google/spanner/v1/mutation_pb.js');
var google_spanner_v1_result_set_pb = require('../../../google/spanner/v1/result_set_pb.js');
var google_spanner_v1_transaction_pb = require('../../../google/spanner/v1/transaction_pb.js');
var google_spanner_v1_type_pb = require('../../../google/spanner/v1/type_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_BatchCreateSessionsRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.BatchCreateSessionsRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.BatchCreateSessionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_BatchCreateSessionsRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.BatchCreateSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_BatchCreateSessionsResponse(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.BatchCreateSessionsResponse)) {
    throw new Error('Expected argument of type google.spanner.v1.BatchCreateSessionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_BatchCreateSessionsResponse(buffer_arg) {
  return google_spanner_v1_spanner_pb.BatchCreateSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_BeginTransactionRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.BeginTransactionRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.BeginTransactionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_BeginTransactionRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.BeginTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_CommitRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.CommitRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.CommitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_CommitRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_CommitResponse(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.CommitResponse)) {
    throw new Error('Expected argument of type google.spanner.v1.CommitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_CommitResponse(buffer_arg) {
  return google_spanner_v1_spanner_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_CreateSessionRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.CreateSessionRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.CreateSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_CreateSessionRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.CreateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_DeleteSessionRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.DeleteSessionRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.DeleteSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_DeleteSessionRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.DeleteSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ExecuteBatchDmlRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.ExecuteBatchDmlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ExecuteBatchDmlRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ExecuteBatchDmlResponse(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse)) {
    throw new Error('Expected argument of type google.spanner.v1.ExecuteBatchDmlResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ExecuteBatchDmlResponse(buffer_arg) {
  return google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ExecuteSqlRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.ExecuteSqlRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.ExecuteSqlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ExecuteSqlRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.ExecuteSqlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_GetSessionRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.GetSessionRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.GetSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_GetSessionRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.GetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ListSessionsRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.ListSessionsRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.ListSessionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ListSessionsRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.ListSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ListSessionsResponse(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.ListSessionsResponse)) {
    throw new Error('Expected argument of type google.spanner.v1.ListSessionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ListSessionsResponse(buffer_arg) {
  return google_spanner_v1_spanner_pb.ListSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_PartialResultSet(arg) {
  if (!(arg instanceof google_spanner_v1_result_set_pb.PartialResultSet)) {
    throw new Error('Expected argument of type google.spanner.v1.PartialResultSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_PartialResultSet(buffer_arg) {
  return google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_PartitionQueryRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.PartitionQueryRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.PartitionQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_PartitionQueryRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.PartitionQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_PartitionReadRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.PartitionReadRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.PartitionReadRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_PartitionReadRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.PartitionReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_PartitionResponse(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.PartitionResponse)) {
    throw new Error('Expected argument of type google.spanner.v1.PartitionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_PartitionResponse(buffer_arg) {
  return google_spanner_v1_spanner_pb.PartitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ReadRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.ReadRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.ReadRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ReadRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_ResultSet(arg) {
  if (!(arg instanceof google_spanner_v1_result_set_pb.ResultSet)) {
    throw new Error('Expected argument of type google.spanner.v1.ResultSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_ResultSet(buffer_arg) {
  return google_spanner_v1_result_set_pb.ResultSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_RollbackRequest(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.RollbackRequest)) {
    throw new Error('Expected argument of type google.spanner.v1.RollbackRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_RollbackRequest(buffer_arg) {
  return google_spanner_v1_spanner_pb.RollbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_Session(arg) {
  if (!(arg instanceof google_spanner_v1_spanner_pb.Session)) {
    throw new Error('Expected argument of type google.spanner.v1.Session');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_Session(buffer_arg) {
  return google_spanner_v1_spanner_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_v1_Transaction(arg) {
  if (!(arg instanceof google_spanner_v1_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type google.spanner.v1.Transaction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_v1_Transaction(buffer_arg) {
  return google_spanner_v1_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}


// Cloud Spanner API
//
// The Cloud Spanner API can be used to manage sessions and execute
// transactions on data stored in Cloud Spanner databases.
var SpannerService = exports.SpannerService = {
  // Creates a new session. A session can be used to perform
  // transactions that read and/or modify data in a Cloud Spanner database.
  // Sessions are meant to be reused for many consecutive
  // transactions.
  //
  // Sessions can only execute one transaction at a time. To execute
  // multiple concurrent read-write/write-only transactions, create
  // multiple sessions. Note that standalone reads and queries use a
  // transaction internally, and count toward the one transaction
  // limit.
  //
  // Active sessions use additional server resources, so it is a good idea to
  // delete idle and unneeded sessions.
  // Aside from explicit deletes, Cloud Spanner can delete sessions for which no
  // operations are sent for more than an hour. If a session is deleted,
  // requests to it return `NOT_FOUND`.
  //
  // Idle sessions can be kept alive by sending a trivial SQL query
  // periodically, e.g., `"SELECT 1"`.
  createSession: {
    path: '/google.spanner.v1.Spanner/CreateSession',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.CreateSessionRequest,
    responseType: google_spanner_v1_spanner_pb.Session,
    requestSerialize: serialize_google_spanner_v1_CreateSessionRequest,
    requestDeserialize: deserialize_google_spanner_v1_CreateSessionRequest,
    responseSerialize: serialize_google_spanner_v1_Session,
    responseDeserialize: deserialize_google_spanner_v1_Session,
  },
  // Creates multiple new sessions.
  //
  // This API can be used to initialize a session cache on the clients.
  // See https://goo.gl/TgSFN2 for best practices on session cache management.
  batchCreateSessions: {
    path: '/google.spanner.v1.Spanner/BatchCreateSessions',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.BatchCreateSessionsRequest,
    responseType: google_spanner_v1_spanner_pb.BatchCreateSessionsResponse,
    requestSerialize: serialize_google_spanner_v1_BatchCreateSessionsRequest,
    requestDeserialize: deserialize_google_spanner_v1_BatchCreateSessionsRequest,
    responseSerialize: serialize_google_spanner_v1_BatchCreateSessionsResponse,
    responseDeserialize: deserialize_google_spanner_v1_BatchCreateSessionsResponse,
  },
  // Gets a session. Returns `NOT_FOUND` if the session does not exist.
  // This is mainly useful for determining whether a session is still
  // alive.
  getSession: {
    path: '/google.spanner.v1.Spanner/GetSession',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.GetSessionRequest,
    responseType: google_spanner_v1_spanner_pb.Session,
    requestSerialize: serialize_google_spanner_v1_GetSessionRequest,
    requestDeserialize: deserialize_google_spanner_v1_GetSessionRequest,
    responseSerialize: serialize_google_spanner_v1_Session,
    responseDeserialize: deserialize_google_spanner_v1_Session,
  },
  // Lists all sessions in a given database.
  listSessions: {
    path: '/google.spanner.v1.Spanner/ListSessions',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.ListSessionsRequest,
    responseType: google_spanner_v1_spanner_pb.ListSessionsResponse,
    requestSerialize: serialize_google_spanner_v1_ListSessionsRequest,
    requestDeserialize: deserialize_google_spanner_v1_ListSessionsRequest,
    responseSerialize: serialize_google_spanner_v1_ListSessionsResponse,
    responseDeserialize: deserialize_google_spanner_v1_ListSessionsResponse,
  },
  // Ends a session, releasing server resources associated with it. This will
  // asynchronously trigger cancellation of any operations that are running with
  // this session.
  deleteSession: {
    path: '/google.spanner.v1.Spanner/DeleteSession',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.DeleteSessionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_spanner_v1_DeleteSessionRequest,
    requestDeserialize: deserialize_google_spanner_v1_DeleteSessionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Executes an SQL statement, returning all results in a single reply. This
  // method cannot be used to return a result set larger than 10 MiB;
  // if the query yields more data than that, the query fails with
  // a `FAILED_PRECONDITION` error.
  //
  // Operations inside read-write transactions might return `ABORTED`. If
  // this occurs, the application should restart the transaction from
  // the beginning. See [Transaction][google.spanner.v1.Transaction] for more
  // details.
  //
  // Larger result sets can be fetched in streaming fashion by calling
  // [ExecuteStreamingSql][google.spanner.v1.Spanner.ExecuteStreamingSql]
  // instead.
  executeSql: {
    path: '/google.spanner.v1.Spanner/ExecuteSql',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.ExecuteSqlRequest,
    responseType: google_spanner_v1_result_set_pb.ResultSet,
    requestSerialize: serialize_google_spanner_v1_ExecuteSqlRequest,
    requestDeserialize: deserialize_google_spanner_v1_ExecuteSqlRequest,
    responseSerialize: serialize_google_spanner_v1_ResultSet,
    responseDeserialize: deserialize_google_spanner_v1_ResultSet,
  },
  // Like [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql], except returns the
  // result set as a stream. Unlike
  // [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql], there is no limit on
  // the size of the returned result set. However, no individual row in the
  // result set can exceed 100 MiB, and no column value can exceed 10 MiB.
  executeStreamingSql: {
    path: '/google.spanner.v1.Spanner/ExecuteStreamingSql',
    requestStream: false,
    responseStream: true,
    requestType: google_spanner_v1_spanner_pb.ExecuteSqlRequest,
    responseType: google_spanner_v1_result_set_pb.PartialResultSet,
    requestSerialize: serialize_google_spanner_v1_ExecuteSqlRequest,
    requestDeserialize: deserialize_google_spanner_v1_ExecuteSqlRequest,
    responseSerialize: serialize_google_spanner_v1_PartialResultSet,
    responseDeserialize: deserialize_google_spanner_v1_PartialResultSet,
  },
  // Executes a batch of SQL DML statements. This method allows many statements
  // to be run with lower latency than submitting them sequentially with
  // [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql].
  //
  // Statements are executed in sequential order. A request can succeed even if
  // a statement fails. The
  // [ExecuteBatchDmlResponse.status][google.spanner.v1.ExecuteBatchDmlResponse.status]
  // field in the response provides information about the statement that failed.
  // Clients must inspect this field to determine whether an error occurred.
  //
  // Execution stops after the first failed statement; the remaining statements
  // are not executed.
  executeBatchDml: {
    path: '/google.spanner.v1.Spanner/ExecuteBatchDml',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest,
    responseType: google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse,
    requestSerialize: serialize_google_spanner_v1_ExecuteBatchDmlRequest,
    requestDeserialize: deserialize_google_spanner_v1_ExecuteBatchDmlRequest,
    responseSerialize: serialize_google_spanner_v1_ExecuteBatchDmlResponse,
    responseDeserialize: deserialize_google_spanner_v1_ExecuteBatchDmlResponse,
  },
  // Reads rows from the database using key lookups and scans, as a
  // simple key/value style alternative to
  // [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql].  This method cannot be
  // used to return a result set larger than 10 MiB; if the read matches more
  // data than that, the read fails with a `FAILED_PRECONDITION`
  // error.
  //
  // Reads inside read-write transactions might return `ABORTED`. If
  // this occurs, the application should restart the transaction from
  // the beginning. See [Transaction][google.spanner.v1.Transaction] for more
  // details.
  //
  // Larger result sets can be yielded in streaming fashion by calling
  // [StreamingRead][google.spanner.v1.Spanner.StreamingRead] instead.
  read: {
    path: '/google.spanner.v1.Spanner/Read',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.ReadRequest,
    responseType: google_spanner_v1_result_set_pb.ResultSet,
    requestSerialize: serialize_google_spanner_v1_ReadRequest,
    requestDeserialize: deserialize_google_spanner_v1_ReadRequest,
    responseSerialize: serialize_google_spanner_v1_ResultSet,
    responseDeserialize: deserialize_google_spanner_v1_ResultSet,
  },
  // Like [Read][google.spanner.v1.Spanner.Read], except returns the result set
  // as a stream. Unlike [Read][google.spanner.v1.Spanner.Read], there is no
  // limit on the size of the returned result set. However, no individual row in
  // the result set can exceed 100 MiB, and no column value can exceed
  // 10 MiB.
  streamingRead: {
    path: '/google.spanner.v1.Spanner/StreamingRead',
    requestStream: false,
    responseStream: true,
    requestType: google_spanner_v1_spanner_pb.ReadRequest,
    responseType: google_spanner_v1_result_set_pb.PartialResultSet,
    requestSerialize: serialize_google_spanner_v1_ReadRequest,
    requestDeserialize: deserialize_google_spanner_v1_ReadRequest,
    responseSerialize: serialize_google_spanner_v1_PartialResultSet,
    responseDeserialize: deserialize_google_spanner_v1_PartialResultSet,
  },
  // Begins a new transaction. This step can often be skipped:
  // [Read][google.spanner.v1.Spanner.Read],
  // [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql] and
  // [Commit][google.spanner.v1.Spanner.Commit] can begin a new transaction as a
  // side-effect.
  beginTransaction: {
    path: '/google.spanner.v1.Spanner/BeginTransaction',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.BeginTransactionRequest,
    responseType: google_spanner_v1_transaction_pb.Transaction,
    requestSerialize: serialize_google_spanner_v1_BeginTransactionRequest,
    requestDeserialize: deserialize_google_spanner_v1_BeginTransactionRequest,
    responseSerialize: serialize_google_spanner_v1_Transaction,
    responseDeserialize: deserialize_google_spanner_v1_Transaction,
  },
  // Commits a transaction. The request includes the mutations to be
  // applied to rows in the database.
  //
  // `Commit` might return an `ABORTED` error. This can occur at any time;
  // commonly, the cause is conflicts with concurrent
  // transactions. However, it can also happen for a variety of other
  // reasons. If `Commit` returns `ABORTED`, the caller should re-attempt
  // the transaction from the beginning, re-using the same session.
  commit: {
    path: '/google.spanner.v1.Spanner/Commit',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.CommitRequest,
    responseType: google_spanner_v1_spanner_pb.CommitResponse,
    requestSerialize: serialize_google_spanner_v1_CommitRequest,
    requestDeserialize: deserialize_google_spanner_v1_CommitRequest,
    responseSerialize: serialize_google_spanner_v1_CommitResponse,
    responseDeserialize: deserialize_google_spanner_v1_CommitResponse,
  },
  // Rolls back a transaction, releasing any locks it holds. It is a good
  // idea to call this for any transaction that includes one or more
  // [Read][google.spanner.v1.Spanner.Read] or
  // [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql] requests and ultimately
  // decides not to commit.
  //
  // `Rollback` returns `OK` if it successfully aborts the transaction, the
  // transaction was already aborted, or the transaction is not
  // found. `Rollback` never returns `ABORTED`.
  rollback: {
    path: '/google.spanner.v1.Spanner/Rollback',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.RollbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_spanner_v1_RollbackRequest,
    requestDeserialize: deserialize_google_spanner_v1_RollbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a set of partition tokens that can be used to execute a query
  // operation in parallel.  Each of the returned partition tokens can be used
  // by [ExecuteStreamingSql][google.spanner.v1.Spanner.ExecuteStreamingSql] to
  // specify a subset of the query result to read.  The same session and
  // read-only transaction must be used by the PartitionQueryRequest used to
  // create the partition tokens and the ExecuteSqlRequests that use the
  // partition tokens.
  //
  // Partition tokens become invalid when the session used to create them
  // is deleted, is idle for too long, begins a new transaction, or becomes too
  // old.  When any of these happen, it is not possible to resume the query, and
  // the whole operation must be restarted from the beginning.
  partitionQuery: {
    path: '/google.spanner.v1.Spanner/PartitionQuery',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.PartitionQueryRequest,
    responseType: google_spanner_v1_spanner_pb.PartitionResponse,
    requestSerialize: serialize_google_spanner_v1_PartitionQueryRequest,
    requestDeserialize: deserialize_google_spanner_v1_PartitionQueryRequest,
    responseSerialize: serialize_google_spanner_v1_PartitionResponse,
    responseDeserialize: deserialize_google_spanner_v1_PartitionResponse,
  },
  // Creates a set of partition tokens that can be used to execute a read
  // operation in parallel.  Each of the returned partition tokens can be used
  // by [StreamingRead][google.spanner.v1.Spanner.StreamingRead] to specify a
  // subset of the read result to read.  The same session and read-only
  // transaction must be used by the PartitionReadRequest used to create the
  // partition tokens and the ReadRequests that use the partition tokens.  There
  // are no ordering guarantees on rows returned among the returned partition
  // tokens, or even within each individual StreamingRead call issued with a
  // partition_token.
  //
  // Partition tokens become invalid when the session used to create them
  // is deleted, is idle for too long, begins a new transaction, or becomes too
  // old.  When any of these happen, it is not possible to resume the read, and
  // the whole operation must be restarted from the beginning.
  partitionRead: {
    path: '/google.spanner.v1.Spanner/PartitionRead',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_v1_spanner_pb.PartitionReadRequest,
    responseType: google_spanner_v1_spanner_pb.PartitionResponse,
    requestSerialize: serialize_google_spanner_v1_PartitionReadRequest,
    requestDeserialize: deserialize_google_spanner_v1_PartitionReadRequest,
    responseSerialize: serialize_google_spanner_v1_PartitionResponse,
    responseDeserialize: deserialize_google_spanner_v1_PartitionResponse,
  },
};

exports.SpannerClient = grpc.makeGenericClientConstructor(SpannerService);
