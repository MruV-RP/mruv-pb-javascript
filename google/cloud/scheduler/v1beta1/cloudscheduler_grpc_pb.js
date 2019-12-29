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
var google_cloud_scheduler_v1beta1_cloudscheduler_pb = require('../../../../google/cloud/scheduler/v1beta1/cloudscheduler_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_scheduler_v1beta1_job_pb = require('../../../../google/cloud/scheduler/v1beta1/job_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_scheduler_v1beta1_CreateJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.CreateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_CreateJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_DeleteJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.DeleteJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.DeleteJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_DeleteJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.DeleteJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_GetJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.GetJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.GetJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_GetJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.GetJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_Job(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_job_pb.Job)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.Job');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_Job(buffer_arg) {
  return google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_ListJobsRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.ListJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_ListJobsRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_ListJobsResponse(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.ListJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_ListJobsResponse(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_PauseJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.PauseJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.PauseJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_PauseJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.PauseJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_ResumeJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.ResumeJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.ResumeJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_ResumeJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.ResumeJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_RunJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.RunJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.RunJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_RunJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.RunJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_scheduler_v1beta1_UpdateJobRequest(arg) {
  if (!(arg instanceof google_cloud_scheduler_v1beta1_cloudscheduler_pb.UpdateJobRequest)) {
    throw new Error('Expected argument of type google.cloud.scheduler.v1beta1.UpdateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_scheduler_v1beta1_UpdateJobRequest(buffer_arg) {
  return google_cloud_scheduler_v1beta1_cloudscheduler_pb.UpdateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Cloud Scheduler API allows external entities to reliably
// schedule asynchronous jobs.
var CloudSchedulerService = exports.CloudSchedulerService = {
  // Lists jobs.
  listJobs: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/ListJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.ListJobsRequest,
    responseType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.ListJobsResponse,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_ListJobsRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_ListJobsRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_ListJobsResponse,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_ListJobsResponse,
  },
  // Gets a job.
  getJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/GetJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.GetJobRequest,
    responseType: google_cloud_scheduler_v1beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_GetJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_GetJobRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_Job,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_Job,
  },
  // Creates a job.
  createJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.CreateJobRequest,
    responseType: google_cloud_scheduler_v1beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_CreateJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_CreateJobRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_Job,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_Job,
  },
  // Updates a job.
  //
  // If successful, the updated [Job][google.cloud.scheduler.v1beta1.Job] is returned. If the job does
  // not exist, `NOT_FOUND` is returned.
  //
  // If UpdateJob does not successfully return, it is possible for the
  // job to be in an [Job.State.UPDATE_FAILED][google.cloud.scheduler.v1beta1.Job.State.UPDATE_FAILED] state. A job in this state may
  // not be executed. If this happens, retry the UpdateJob request
  // until a successful response is received.
  updateJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/UpdateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.UpdateJobRequest,
    responseType: google_cloud_scheduler_v1beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_UpdateJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_UpdateJobRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_Job,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_Job,
  },
  // Deletes a job.
  deleteJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.DeleteJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_DeleteJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_DeleteJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Pauses a job.
  //
  // If a job is paused then the system will stop executing the job
  // until it is re-enabled via [ResumeJob][google.cloud.scheduler.v1beta1.CloudScheduler.ResumeJob]. The
  // state of the job is stored in [state][google.cloud.scheduler.v1beta1.Job.state]; if paused it
  // will be set to [Job.State.PAUSED][google.cloud.scheduler.v1beta1.Job.State.PAUSED]. A job must be in [Job.State.ENABLED][google.cloud.scheduler.v1beta1.Job.State.ENABLED]
  // to be paused.
  pauseJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/PauseJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.PauseJobRequest,
    responseType: google_cloud_scheduler_v1beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_PauseJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_PauseJobRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_Job,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_Job,
  },
  // Resume a job.
  //
  // This method reenables a job after it has been [Job.State.PAUSED][google.cloud.scheduler.v1beta1.Job.State.PAUSED]. The
  // state of a job is stored in [Job.state][google.cloud.scheduler.v1beta1.Job.state]; after calling this method it
  // will be set to [Job.State.ENABLED][google.cloud.scheduler.v1beta1.Job.State.ENABLED]. A job must be in
  // [Job.State.PAUSED][google.cloud.scheduler.v1beta1.Job.State.PAUSED] to be resumed.
  resumeJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/ResumeJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.ResumeJobRequest,
    responseType: google_cloud_scheduler_v1beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_ResumeJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_ResumeJobRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_Job,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_Job,
  },
  // Forces a job to run now.
  //
  // When this method is called, Cloud Scheduler will dispatch the job, even
  // if the job is already running.
  runJob: {
    path: '/google.cloud.scheduler.v1beta1.CloudScheduler/RunJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_scheduler_v1beta1_cloudscheduler_pb.RunJobRequest,
    responseType: google_cloud_scheduler_v1beta1_job_pb.Job,
    requestSerialize: serialize_google_cloud_scheduler_v1beta1_RunJobRequest,
    requestDeserialize: deserialize_google_cloud_scheduler_v1beta1_RunJobRequest,
    responseSerialize: serialize_google_cloud_scheduler_v1beta1_Job,
    responseDeserialize: deserialize_google_cloud_scheduler_v1beta1_Job,
  },
};

exports.CloudSchedulerClient = grpc.makeGenericClientConstructor(CloudSchedulerService);
