// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var jobs_jobs_pb = require('../jobs/jobs_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_jobs_CreateJobRequest(arg) {
  if (!(arg instanceof jobs_jobs_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type mruv.jobs.CreateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_CreateJobRequest(buffer_arg) {
  return jobs_jobs_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_CreateJobResponse(arg) {
  if (!(arg instanceof jobs_jobs_pb.CreateJobResponse)) {
    throw new Error('Expected argument of type mruv.jobs.CreateJobResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_CreateJobResponse(buffer_arg) {
  return jobs_jobs_pb.CreateJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_DeleteJobRequest(arg) {
  if (!(arg instanceof jobs_jobs_pb.DeleteJobRequest)) {
    throw new Error('Expected argument of type mruv.jobs.DeleteJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_DeleteJobRequest(buffer_arg) {
  return jobs_jobs_pb.DeleteJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_DeleteJobResponse(arg) {
  if (!(arg instanceof jobs_jobs_pb.DeleteJobResponse)) {
    throw new Error('Expected argument of type mruv.jobs.DeleteJobResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_DeleteJobResponse(buffer_arg) {
  return jobs_jobs_pb.DeleteJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_GetJobRequest(arg) {
  if (!(arg instanceof jobs_jobs_pb.GetJobRequest)) {
    throw new Error('Expected argument of type mruv.jobs.GetJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_GetJobRequest(buffer_arg) {
  return jobs_jobs_pb.GetJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_GetJobResponse(arg) {
  if (!(arg instanceof jobs_jobs_pb.GetJobResponse)) {
    throw new Error('Expected argument of type mruv.jobs.GetJobResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_GetJobResponse(buffer_arg) {
  return jobs_jobs_pb.GetJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_UpdateJobRequest(arg) {
  if (!(arg instanceof jobs_jobs_pb.UpdateJobRequest)) {
    throw new Error('Expected argument of type mruv.jobs.UpdateJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_UpdateJobRequest(buffer_arg) {
  return jobs_jobs_pb.UpdateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_jobs_UpdateJobResponse(arg) {
  if (!(arg instanceof jobs_jobs_pb.UpdateJobResponse)) {
    throw new Error('Expected argument of type mruv.jobs.UpdateJobResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_jobs_UpdateJobResponse(buffer_arg) {
  return jobs_jobs_pb.UpdateJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV jobs service provides procedures for managing jobs.
var MruVJobsServiceService = exports.MruVJobsServiceService = {
  // Create a job.
  createJob: {
    path: '/mruv.jobs.MruVJobsService/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: jobs_jobs_pb.CreateJobRequest,
    responseType: jobs_jobs_pb.CreateJobResponse,
    requestSerialize: serialize_mruv_jobs_CreateJobRequest,
    requestDeserialize: deserialize_mruv_jobs_CreateJobRequest,
    responseSerialize: serialize_mruv_jobs_CreateJobResponse,
    responseDeserialize: deserialize_mruv_jobs_CreateJobResponse,
  },
  // Get a job.
  getJob: {
    path: '/mruv.jobs.MruVJobsService/GetJob',
    requestStream: false,
    responseStream: false,
    requestType: jobs_jobs_pb.GetJobRequest,
    responseType: jobs_jobs_pb.GetJobResponse,
    requestSerialize: serialize_mruv_jobs_GetJobRequest,
    requestDeserialize: deserialize_mruv_jobs_GetJobRequest,
    responseSerialize: serialize_mruv_jobs_GetJobResponse,
    responseDeserialize: deserialize_mruv_jobs_GetJobResponse,
  },
  // Update a job.
  updateJob: {
    path: '/mruv.jobs.MruVJobsService/UpdateJob',
    requestStream: false,
    responseStream: false,
    requestType: jobs_jobs_pb.UpdateJobRequest,
    responseType: jobs_jobs_pb.UpdateJobResponse,
    requestSerialize: serialize_mruv_jobs_UpdateJobRequest,
    requestDeserialize: deserialize_mruv_jobs_UpdateJobRequest,
    responseSerialize: serialize_mruv_jobs_UpdateJobResponse,
    responseDeserialize: deserialize_mruv_jobs_UpdateJobResponse,
  },
  // Delete a job.
  deleteJob: {
    path: '/mruv.jobs.MruVJobsService/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: jobs_jobs_pb.DeleteJobRequest,
    responseType: jobs_jobs_pb.DeleteJobResponse,
    requestSerialize: serialize_mruv_jobs_DeleteJobRequest,
    requestDeserialize: deserialize_mruv_jobs_DeleteJobRequest,
    responseSerialize: serialize_mruv_jobs_DeleteJobResponse,
    responseDeserialize: deserialize_mruv_jobs_DeleteJobResponse,
  },
};

exports.MruVJobsServiceClient = grpc.makeGenericClientConstructor(MruVJobsServiceService);
