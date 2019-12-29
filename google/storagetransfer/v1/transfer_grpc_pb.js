// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
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
var google_storagetransfer_v1_transfer_pb = require('../../../google/storagetransfer/v1/transfer_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_storagetransfer_v1_transfer_types_pb = require('../../../google/storagetransfer/v1/transfer_types_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_CreateTransferJobRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.CreateTransferJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_CreateTransferJobRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_GetGoogleServiceAccountRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.GetGoogleServiceAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_GetGoogleServiceAccountRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_GetTransferJobRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.GetTransferJobRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.GetTransferJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_GetTransferJobRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.GetTransferJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_GoogleServiceAccount(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.GoogleServiceAccount');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_GoogleServiceAccount(buffer_arg) {
  return google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_ListTransferJobsRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.ListTransferJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_ListTransferJobsRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_ListTransferJobsResponse(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.ListTransferJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_ListTransferJobsResponse(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_PauseTransferOperationRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.PauseTransferOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_PauseTransferOperationRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_ResumeTransferOperationRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.ResumeTransferOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_ResumeTransferOperationRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_TransferJob(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_types_pb.TransferJob)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.TransferJob');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_TransferJob(buffer_arg) {
  return google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_storagetransfer_v1_UpdateTransferJobRequest(arg) {
  if (!(arg instanceof google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest)) {
    throw new Error('Expected argument of type google.storagetransfer.v1.UpdateTransferJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_storagetransfer_v1_UpdateTransferJobRequest(buffer_arg) {
  return google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Transfers data between between Google Cloud Storage buckets or from a data
// source external to Google to a Cloud Storage bucket.
var StorageTransferServiceService = exports.StorageTransferServiceService = {
  // Returns the Google service account that is used by Storage Transfer
  // Service to access buckets in the project where transfers
  // run or in other projects. Each Google service account is associated
  // with one Google Cloud Platform Console project. Users
  // should add this service account to the Google Cloud Storage bucket
  // ACLs to grant access to Storage Transfer Service. This service
  // account is created and owned by Storage Transfer Service and can
  // only be used by Storage Transfer Service.
  getGoogleServiceAccount: {
    path: '/google.storagetransfer.v1.StorageTransferService/GetGoogleServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest,
    responseType: google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount,
    requestSerialize: serialize_google_storagetransfer_v1_GetGoogleServiceAccountRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_GetGoogleServiceAccountRequest,
    responseSerialize: serialize_google_storagetransfer_v1_GoogleServiceAccount,
    responseDeserialize: deserialize_google_storagetransfer_v1_GoogleServiceAccount,
  },
  // Creates a transfer job that runs periodically.
  createTransferJob: {
    path: '/google.storagetransfer.v1.StorageTransferService/CreateTransferJob',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest,
    responseType: google_storagetransfer_v1_transfer_types_pb.TransferJob,
    requestSerialize: serialize_google_storagetransfer_v1_CreateTransferJobRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_CreateTransferJobRequest,
    responseSerialize: serialize_google_storagetransfer_v1_TransferJob,
    responseDeserialize: deserialize_google_storagetransfer_v1_TransferJob,
  },
  // Updates a transfer job. Updating a job's transfer spec does not affect
  // transfer operations that are running already. Updating the scheduling
  // of a job is not allowed.
  updateTransferJob: {
    path: '/google.storagetransfer.v1.StorageTransferService/UpdateTransferJob',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest,
    responseType: google_storagetransfer_v1_transfer_types_pb.TransferJob,
    requestSerialize: serialize_google_storagetransfer_v1_UpdateTransferJobRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_UpdateTransferJobRequest,
    responseSerialize: serialize_google_storagetransfer_v1_TransferJob,
    responseDeserialize: deserialize_google_storagetransfer_v1_TransferJob,
  },
  // Gets a transfer job.
  getTransferJob: {
    path: '/google.storagetransfer.v1.StorageTransferService/GetTransferJob',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.GetTransferJobRequest,
    responseType: google_storagetransfer_v1_transfer_types_pb.TransferJob,
    requestSerialize: serialize_google_storagetransfer_v1_GetTransferJobRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_GetTransferJobRequest,
    responseSerialize: serialize_google_storagetransfer_v1_TransferJob,
    responseDeserialize: deserialize_google_storagetransfer_v1_TransferJob,
  },
  // Lists transfer jobs.
  listTransferJobs: {
    path: '/google.storagetransfer.v1.StorageTransferService/ListTransferJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest,
    responseType: google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse,
    requestSerialize: serialize_google_storagetransfer_v1_ListTransferJobsRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_ListTransferJobsRequest,
    responseSerialize: serialize_google_storagetransfer_v1_ListTransferJobsResponse,
    responseDeserialize: deserialize_google_storagetransfer_v1_ListTransferJobsResponse,
  },
  // Pauses a transfer operation.
  pauseTransferOperation: {
    path: '/google.storagetransfer.v1.StorageTransferService/PauseTransferOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_storagetransfer_v1_PauseTransferOperationRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_PauseTransferOperationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Resumes a transfer operation that is paused.
  resumeTransferOperation: {
    path: '/google.storagetransfer.v1.StorageTransferService/ResumeTransferOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_storagetransfer_v1_ResumeTransferOperationRequest,
    requestDeserialize: deserialize_google_storagetransfer_v1_ResumeTransferOperationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.StorageTransferServiceClient = grpc.makeGenericClientConstructor(StorageTransferServiceService);
