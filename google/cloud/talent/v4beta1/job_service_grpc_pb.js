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
var google_cloud_talent_v4beta1_job_service_pb = require('../../../../google/cloud/talent/v4beta1/job_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');
var google_cloud_talent_v4beta1_filters_pb = require('../../../../google/cloud/talent/v4beta1/filters_pb.js');
var google_cloud_talent_v4beta1_histogram_pb = require('../../../../google/cloud/talent/v4beta1/histogram_pb.js');
var google_cloud_talent_v4beta1_job_pb = require('../../../../google/cloud/talent/v4beta1/job_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_cloud_talent_v4beta1_BatchCreateJobsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.BatchCreateJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_BatchCreateJobsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_BatchDeleteJobsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.BatchDeleteJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_BatchDeleteJobsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_BatchUpdateJobsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.BatchUpdateJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_BatchUpdateJobsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_CreateJobRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CreateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CreateJobRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_DeleteJobRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.DeleteJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_DeleteJobRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_GetJobRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.GetJobRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.GetJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_GetJobRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.GetJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_Job(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_pb.Job)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.Job');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_Job(buffer_arg) {
  return google_cloud_talent_v4beta1_job_pb.Job.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListJobsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListJobsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListJobsResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListJobsResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_SearchJobsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.SearchJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_SearchJobsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_SearchJobsResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.SearchJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_SearchJobsResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_UpdateJobRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.UpdateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_UpdateJobRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A service handles job management, including job CRUD, enumeration and search.
var JobServiceService = exports.JobServiceService = {
  // Creates a new job.
  //
  // Typically, the job becomes searchable within 10 seconds, but it may take
  // up to 5 minutes.
  createJob: {
    path: '/google.cloud.talent.v4beta1.JobService/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest,
    responseType: google_cloud_talent_v4beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CreateJobRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CreateJobRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Job,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Job,
  },
  // Begins executing a batch create jobs operation.
  batchCreateJobs: {
    path: '/google.cloud.talent.v4beta1.JobService/BatchCreateJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_talent_v4beta1_BatchCreateJobsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_BatchCreateJobsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Retrieves the specified job, whose status is OPEN or recently EXPIRED
  // within the last 90 days.
  getJob: {
    path: '/google.cloud.talent.v4beta1.JobService/GetJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.GetJobRequest,
    responseType: google_cloud_talent_v4beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_talent_v4beta1_GetJobRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_GetJobRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Job,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Job,
  },
  // Updates specified job.
  //
  // Typically, updated contents become visible in search results within 10
  // seconds, but it may take up to 5 minutes.
  updateJob: {
    path: '/google.cloud.talent.v4beta1.JobService/UpdateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest,
    responseType: google_cloud_talent_v4beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_talent_v4beta1_UpdateJobRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_UpdateJobRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Job,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Job,
  },
  // Begins executing a batch update jobs operation.
  batchUpdateJobs: {
    path: '/google.cloud.talent.v4beta1.JobService/BatchUpdateJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_talent_v4beta1_BatchUpdateJobsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_BatchUpdateJobsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes the specified job.
  //
  // Typically, the job becomes unsearchable within 10 seconds, but it may take
  // up to 5 minutes.
  deleteJob: {
    path: '/google.cloud.talent.v4beta1.JobService/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_talent_v4beta1_DeleteJobRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_DeleteJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes a list of [Job][google.cloud.talent.v4beta1.Job]s by filter.
  batchDeleteJobs: {
    path: '/google.cloud.talent.v4beta1.JobService/BatchDeleteJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_talent_v4beta1_BatchDeleteJobsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_BatchDeleteJobsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists jobs by filter.
  listJobs: {
    path: '/google.cloud.talent.v4beta1.JobService/ListJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest,
    responseType: google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_ListJobsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_ListJobsRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_ListJobsResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_ListJobsResponse,
  },
  // Searches for jobs using the provided
  // [SearchJobsRequest][google.cloud.talent.v4beta1.SearchJobsRequest].
  //
  // This call constrains the
  // [visibility][google.cloud.talent.v4beta1.Job.visibility] of jobs present in
  // the database, and only returns jobs that the caller has permission to
  // search against.
  searchJobs: {
    path: '/google.cloud.talent.v4beta1.JobService/SearchJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest,
    responseType: google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_SearchJobsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_SearchJobsRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_SearchJobsResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_SearchJobsResponse,
  },
  // Searches for jobs using the provided
  // [SearchJobsRequest][google.cloud.talent.v4beta1.SearchJobsRequest].
  //
  // This API call is intended for the use case of targeting passive job
  // seekers (for example, job seekers who have signed up to receive email
  // alerts about potential job opportunities), and has different algorithmic
  // adjustments that are targeted to passive job seekers.
  //
  // This call constrains the
  // [visibility][google.cloud.talent.v4beta1.Job.visibility] of jobs present in
  // the database, and only returns jobs the caller has permission to search
  // against.
  searchJobsForAlert: {
    path: '/google.cloud.talent.v4beta1.JobService/SearchJobsForAlert',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest,
    responseType: google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_SearchJobsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_SearchJobsRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_SearchJobsResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_SearchJobsResponse,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService);
