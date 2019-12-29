// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2016 Google Inc.
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
var google_genomics_v1alpha2_pipelines_pb = require('../../../google/genomics/v1alpha2/pipelines_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_code_pb = require('../../../google/rpc/code_pb.js');

function serialize_google_genomics_v1alpha2_ControllerConfig(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.ControllerConfig)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.ControllerConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_ControllerConfig(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.ControllerConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_CreatePipelineRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.CreatePipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_CreatePipelineRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_DeletePipelineRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.DeletePipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_DeletePipelineRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_GetControllerConfigRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.GetControllerConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_GetControllerConfigRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_GetPipelineRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.GetPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_GetPipelineRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_ListPipelinesRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.ListPipelinesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_ListPipelinesRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_ListPipelinesResponse(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.ListPipelinesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_ListPipelinesResponse(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_Pipeline(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.Pipeline)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.Pipeline');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_Pipeline(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.Pipeline.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_RunPipelineRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.RunPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_RunPipelineRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1alpha2_SetOperationStatusRequest(arg) {
  if (!(arg instanceof google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest)) {
    throw new Error('Expected argument of type google.genomics.v1alpha2.SetOperationStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1alpha2_SetOperationStatusRequest(buffer_arg) {
  return google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A service for running genomics pipelines.
var PipelinesV1Alpha2Service = exports.PipelinesV1Alpha2Service = {
  // Creates a pipeline that can be run later. Create takes a Pipeline that
  // has all fields other than `pipelineId` populated, and then returns
  // the same pipeline with `pipelineId` populated. This id can be used
  // to run the pipeline.
  //
  // Caller must have WRITE permission to the project.
  createPipeline: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/CreatePipeline',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest,
    responseType: google_genomics_v1alpha2_pipelines_pb.Pipeline,
    requestSerialize: serialize_google_genomics_v1alpha2_CreatePipelineRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_CreatePipelineRequest,
    responseSerialize: serialize_google_genomics_v1alpha2_Pipeline,
    responseDeserialize: deserialize_google_genomics_v1alpha2_Pipeline,
  },
  // Runs a pipeline. If `pipelineId` is specified in the request, then
  // run a saved pipeline. If `ephemeralPipeline` is specified, then run
  // that pipeline once without saving a copy.
  //
  // The caller must have READ permission to the project where the pipeline
  // is stored and WRITE permission to the project where the pipeline will be
  // run, as VMs will be created and storage will be used.
  runPipeline: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/RunPipeline',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_genomics_v1alpha2_RunPipelineRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_RunPipelineRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Retrieves a pipeline based on ID.
  //
  // Caller must have READ permission to the project.
  getPipeline: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetPipeline',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest,
    responseType: google_genomics_v1alpha2_pipelines_pb.Pipeline,
    requestSerialize: serialize_google_genomics_v1alpha2_GetPipelineRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_GetPipelineRequest,
    responseSerialize: serialize_google_genomics_v1alpha2_Pipeline,
    responseDeserialize: deserialize_google_genomics_v1alpha2_Pipeline,
  },
  // Lists pipelines.
  //
  // Caller must have READ permission to the project.
  listPipelines: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/ListPipelines',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest,
    responseType: google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse,
    requestSerialize: serialize_google_genomics_v1alpha2_ListPipelinesRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_ListPipelinesRequest,
    responseSerialize: serialize_google_genomics_v1alpha2_ListPipelinesResponse,
    responseDeserialize: deserialize_google_genomics_v1alpha2_ListPipelinesResponse,
  },
  // Deletes a pipeline based on ID.
  //
  // Caller must have WRITE permission to the project.
  deletePipeline: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/DeletePipeline',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1alpha2_DeletePipelineRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_DeletePipelineRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets controller configuration information. Should only be called
  // by VMs created by the Pipelines Service and not by end users.
  getControllerConfig: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetControllerConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest,
    responseType: google_genomics_v1alpha2_pipelines_pb.ControllerConfig,
    requestSerialize: serialize_google_genomics_v1alpha2_GetControllerConfigRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_GetControllerConfigRequest,
    responseSerialize: serialize_google_genomics_v1alpha2_ControllerConfig,
    responseDeserialize: deserialize_google_genomics_v1alpha2_ControllerConfig,
  },
  // Sets status of a given operation. Any new timestamps (as determined by
  // description) are appended to TimestampEvents. Should only be called by VMs
  // created by the Pipelines Service and not by end users.
  setOperationStatus: {
    path: '/google.genomics.v1alpha2.PipelinesV1Alpha2/SetOperationStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1alpha2_SetOperationStatusRequest,
    requestDeserialize: deserialize_google_genomics_v1alpha2_SetOperationStatusRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PipelinesV1Alpha2Client = grpc.makeGenericClientConstructor(PipelinesV1Alpha2Service);
