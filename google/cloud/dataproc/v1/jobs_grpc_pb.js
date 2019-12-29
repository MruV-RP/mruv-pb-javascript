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
var google_cloud_dataproc_v1_jobs_pb = require('../../../../google/cloud/dataproc/v1/jobs_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_dataproc_v1_CancelJobRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.CancelJobRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.CancelJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_CancelJobRequest(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.CancelJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_DeleteJobRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.DeleteJobRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.DeleteJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_DeleteJobRequest(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.DeleteJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_GetJobRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.GetJobRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.GetJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_GetJobRequest(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.GetJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_Job(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.Job)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.Job');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_Job(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.Job.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_ListJobsRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.ListJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_ListJobsRequest(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_ListJobsResponse(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.ListJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_ListJobsResponse(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_SubmitJobRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.SubmitJobRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.SubmitJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_SubmitJobRequest(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.SubmitJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_UpdateJobRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_jobs_pb.UpdateJobRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.UpdateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_UpdateJobRequest(buffer_arg) {
  return google_cloud_dataproc_v1_jobs_pb.UpdateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The JobController provides methods to manage jobs.
var JobControllerService = exports.JobControllerService = {
  // Submits a job to a cluster.
  submitJob: {
    path: '/google.cloud.dataproc.v1.JobController/SubmitJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_jobs_pb.SubmitJobRequest,
    responseType: google_cloud_dataproc_v1_jobs_pb.Job,
    requestSerialize: serialize_google_cloud_dataproc_v1_SubmitJobRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_SubmitJobRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_Job,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_Job,
  },
  // Gets the resource representation for a job in a project.
  getJob: {
    path: '/google.cloud.dataproc.v1.JobController/GetJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_jobs_pb.GetJobRequest,
    responseType: google_cloud_dataproc_v1_jobs_pb.Job,
    requestSerialize: serialize_google_cloud_dataproc_v1_GetJobRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_GetJobRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_Job,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_Job,
  },
  // Lists regions/{region}/jobs in a project.
  listJobs: {
    path: '/google.cloud.dataproc.v1.JobController/ListJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_jobs_pb.ListJobsRequest,
    responseType: google_cloud_dataproc_v1_jobs_pb.ListJobsResponse,
    requestSerialize: serialize_google_cloud_dataproc_v1_ListJobsRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_ListJobsRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_ListJobsResponse,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_ListJobsResponse,
  },
  // Updates a job in a project.
  updateJob: {
    path: '/google.cloud.dataproc.v1.JobController/UpdateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_jobs_pb.UpdateJobRequest,
    responseType: google_cloud_dataproc_v1_jobs_pb.Job,
    requestSerialize: serialize_google_cloud_dataproc_v1_UpdateJobRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_UpdateJobRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_Job,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_Job,
  },
  // Starts a job cancellation request. To access the job resource
  // after cancellation, call
  // [regions/{region}/jobs.list](/dataproc/docs/reference/rest/v1/projects.regions.jobs/list)
  // or
  // [regions/{region}/jobs.get](/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
  cancelJob: {
    path: '/google.cloud.dataproc.v1.JobController/CancelJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_jobs_pb.CancelJobRequest,
    responseType: google_cloud_dataproc_v1_jobs_pb.Job,
    requestSerialize: serialize_google_cloud_dataproc_v1_CancelJobRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_CancelJobRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_Job,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_Job,
  },
  // Deletes the job from the project. If the job is active, the delete fails,
  // and the response returns `FAILED_PRECONDITION`.
  deleteJob: {
    path: '/google.cloud.dataproc.v1.JobController/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_jobs_pb.DeleteJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dataproc_v1_DeleteJobRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_DeleteJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.JobControllerClient = grpc.makeGenericClientConstructor(JobControllerService);
