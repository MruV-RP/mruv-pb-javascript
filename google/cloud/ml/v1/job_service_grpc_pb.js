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
var google_cloud_ml_v1_job_service_pb = require('../../../../google/cloud/ml/v1/job_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_auth_pb = require('../../../../google/api/auth_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_ml_v1_CancelJobRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_job_service_pb.CancelJobRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.CancelJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_CancelJobRequest(buffer_arg) {
  return google_cloud_ml_v1_job_service_pb.CancelJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_CreateJobRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_job_service_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.CreateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_CreateJobRequest(buffer_arg) {
  return google_cloud_ml_v1_job_service_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_GetJobRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_job_service_pb.GetJobRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.GetJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_GetJobRequest(buffer_arg) {
  return google_cloud_ml_v1_job_service_pb.GetJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_Job(arg) {
  if (!(arg instanceof google_cloud_ml_v1_job_service_pb.Job)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.Job');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_Job(buffer_arg) {
  return google_cloud_ml_v1_job_service_pb.Job.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_ListJobsRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_job_service_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.ListJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_ListJobsRequest(buffer_arg) {
  return google_cloud_ml_v1_job_service_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_ListJobsResponse(arg) {
  if (!(arg instanceof google_cloud_ml_v1_job_service_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.ListJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_ListJobsResponse(buffer_arg) {
  return google_cloud_ml_v1_job_service_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Copyright 2017 Google Inc. All Rights Reserved.
//
// Proto file for the Google Cloud Machine Learning Engine.
// Describes the 'job service' to manage training and prediction jobs.
//
// Service to create and manage training and batch prediction jobs.
var JobServiceService = exports.JobServiceService = {
  // Creates a training or a batch prediction job.
  createJob: {
    path: '/google.cloud.ml.v1.JobService/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_job_service_pb.CreateJobRequest,
    responseType: google_cloud_ml_v1_job_service_pb.Job,
    requestSerialize: serialize_google_cloud_ml_v1_CreateJobRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_CreateJobRequest,
    responseSerialize: serialize_google_cloud_ml_v1_Job,
    responseDeserialize: deserialize_google_cloud_ml_v1_Job,
  },
  // Lists the jobs in the project.
  listJobs: {
    path: '/google.cloud.ml.v1.JobService/ListJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_job_service_pb.ListJobsRequest,
    responseType: google_cloud_ml_v1_job_service_pb.ListJobsResponse,
    requestSerialize: serialize_google_cloud_ml_v1_ListJobsRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_ListJobsRequest,
    responseSerialize: serialize_google_cloud_ml_v1_ListJobsResponse,
    responseDeserialize: deserialize_google_cloud_ml_v1_ListJobsResponse,
  },
  // Describes a job.
  getJob: {
    path: '/google.cloud.ml.v1.JobService/GetJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_job_service_pb.GetJobRequest,
    responseType: google_cloud_ml_v1_job_service_pb.Job,
    requestSerialize: serialize_google_cloud_ml_v1_GetJobRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_GetJobRequest,
    responseSerialize: serialize_google_cloud_ml_v1_Job,
    responseDeserialize: deserialize_google_cloud_ml_v1_Job,
  },
  // Cancels a running job.
  cancelJob: {
    path: '/google.cloud.ml.v1.JobService/CancelJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_job_service_pb.CancelJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_ml_v1_CancelJobRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_CancelJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService);
