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
var google_devtools_cloudbuild_v1_cloudbuild_pb = require('../../../../google/devtools/cloudbuild/v1/cloudbuild_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_devtools_cloudbuild_v1_Build(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.Build)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.Build');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_Build(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.Build.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_BuildTrigger(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.BuildTrigger');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_BuildTrigger(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_CancelBuildRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.CancelBuildRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_CancelBuildRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_CreateBuildRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.CreateBuildRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_CreateBuildRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_CreateBuildTriggerRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.CreateBuildTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_CreateBuildTriggerRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_CreateWorkerPoolRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.CreateWorkerPoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_CreateWorkerPoolRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_DeleteBuildTriggerRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_DeleteBuildTriggerRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_DeleteWorkerPoolRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_DeleteWorkerPoolRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_GetBuildRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.GetBuildRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_GetBuildRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_GetBuildTriggerRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.GetBuildTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_GetBuildTriggerRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_GetWorkerPoolRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.GetWorkerPoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_GetWorkerPoolRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_ListBuildTriggersRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.ListBuildTriggersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_ListBuildTriggersRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_ListBuildTriggersResponse(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.ListBuildTriggersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_ListBuildTriggersResponse(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_ListBuildsRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.ListBuildsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_ListBuildsRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_ListBuildsResponse(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.ListBuildsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_ListBuildsResponse(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_ListWorkerPoolsRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.ListWorkerPoolsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_ListWorkerPoolsRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_ListWorkerPoolsResponse(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.ListWorkerPoolsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_ListWorkerPoolsResponse(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_RetryBuildRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.RetryBuildRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_RetryBuildRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_RunBuildTriggerRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.RunBuildTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_RunBuildTriggerRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_UpdateBuildTriggerRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_UpdateBuildTriggerRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_UpdateWorkerPoolRequest(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_UpdateWorkerPoolRequest(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudbuild_v1_WorkerPool(arg) {
  if (!(arg instanceof google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool)) {
    throw new Error('Expected argument of type google.devtools.cloudbuild.v1.WorkerPool');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudbuild_v1_WorkerPool(buffer_arg) {
  return google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool.deserializeBinary(new Uint8Array(buffer_arg));
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


// Creates and manages builds on Google Cloud Platform.
//
// The main concept used by this API is a `Build`, which describes the location
// of the source to build, how to build the source, and where to store the
// built artifacts, if any.
//
// A user can list previously-requested builds or get builds by their ID to
// determine the status of the build.
var CloudBuildService = exports.CloudBuildService = {
  // Starts a build with the specified configuration.
  //
  // This method returns a long-running `Operation`, which includes the build
  // ID. Pass the build ID to `GetBuild` to determine the build status (such as
  // `SUCCESS` or `FAILURE`).
  createBuild: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuild',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_CreateBuildRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_CreateBuildRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Returns information about a previously requested build.
  //
  // The `Build` that is returned includes its status (such as `SUCCESS`,
  // `FAILURE`, or `WORKING`), and timing information.
  getBuild: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/GetBuild',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.Build,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_GetBuildRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_GetBuildRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_Build,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_Build,
  },
  // Lists previously requested builds.
  //
  // Previously requested builds may still be in-progress, or may have finished
  // successfully or unsuccessfully.
  listBuilds: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/ListBuilds',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_ListBuildsRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_ListBuildsRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_ListBuildsResponse,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_ListBuildsResponse,
  },
  // Cancels a build in progress.
  cancelBuild: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/CancelBuild',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.Build,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_CancelBuildRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_CancelBuildRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_Build,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_Build,
  },
  // Creates a new build based on the specified build.
  //
  // This method creates a new build using the original build request, which may
  // or may not result in an identical build.
  //
  // For triggered builds:
  //
  // * Triggered builds resolve to a precise revision; therefore a retry of a
  // triggered build will result in a build that uses the same revision.
  //
  // For non-triggered builds that specify `RepoSource`:
  //
  // * If the original build built from the tip of a branch, the retried build
  // will build from the tip of that branch, which may not be the same revision
  // as the original build.
  // * If the original build specified a commit sha or revision ID, the retried
  // build will use the identical source.
  //
  // For builds that specify `StorageSource`:
  //
  // * If the original build pulled source from Google Cloud Storage without
  // specifying the generation of the object, the new build will use the current
  // object, which may be different from the original build source.
  // * If the original build pulled source from Cloud Storage and specified the
  // generation of the object, the new build will attempt to use the same
  // object, which may or may not be available depending on the bucket's
  // lifecycle management settings.
  retryBuild: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/RetryBuild',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_RetryBuildRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_RetryBuildRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates a new `BuildTrigger`.
  //
  // This API is experimental.
  createBuildTrigger: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuildTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_CreateBuildTriggerRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_CreateBuildTriggerRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_BuildTrigger,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_BuildTrigger,
  },
  // Returns information about a `BuildTrigger`.
  //
  // This API is experimental.
  getBuildTrigger: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/GetBuildTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_GetBuildTriggerRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_GetBuildTriggerRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_BuildTrigger,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_BuildTrigger,
  },
  // Lists existing `BuildTrigger`s.
  //
  // This API is experimental.
  listBuildTriggers: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/ListBuildTriggers',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_ListBuildTriggersRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_ListBuildTriggersRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_ListBuildTriggersResponse,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_ListBuildTriggersResponse,
  },
  // Deletes a `BuildTrigger` by its project ID and trigger ID.
  //
  // This API is experimental.
  deleteBuildTrigger: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/DeleteBuildTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_DeleteBuildTriggerRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_DeleteBuildTriggerRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates a `BuildTrigger` by its project ID and trigger ID.
  //
  // This API is experimental.
  updateBuildTrigger: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/UpdateBuildTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_UpdateBuildTriggerRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_UpdateBuildTriggerRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_BuildTrigger,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_BuildTrigger,
  },
  // Runs a `BuildTrigger` at a particular source revision.
  runBuildTrigger: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/RunBuildTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_RunBuildTriggerRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_RunBuildTriggerRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates a `WorkerPool` to run the builds, and returns the new worker pool.
  //
  // This API is experimental.
  createWorkerPool: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/CreateWorkerPool',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_CreateWorkerPoolRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_CreateWorkerPoolRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_WorkerPool,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_WorkerPool,
  },
  // Returns information about a `WorkerPool`.
  //
  // This API is experimental.
  getWorkerPool: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/GetWorkerPool',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_GetWorkerPoolRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_GetWorkerPoolRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_WorkerPool,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_WorkerPool,
  },
  // Deletes a `WorkerPool` by its project ID and WorkerPool name.
  //
  // This API is experimental.
  deleteWorkerPool: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/DeleteWorkerPool',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_DeleteWorkerPoolRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_DeleteWorkerPoolRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Update a `WorkerPool`.
  //
  // This API is experimental.
  updateWorkerPool: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/UpdateWorkerPool',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_UpdateWorkerPoolRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_UpdateWorkerPoolRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_WorkerPool,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_WorkerPool,
  },
  // List project's `WorkerPool`s.
  //
  // This API is experimental.
  listWorkerPools: {
    path: '/google.devtools.cloudbuild.v1.CloudBuild/ListWorkerPools',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest,
    responseType: google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse,
    requestSerialize: serialize_google_devtools_cloudbuild_v1_ListWorkerPoolsRequest,
    requestDeserialize: deserialize_google_devtools_cloudbuild_v1_ListWorkerPoolsRequest,
    responseSerialize: serialize_google_devtools_cloudbuild_v1_ListWorkerPoolsResponse,
    responseDeserialize: deserialize_google_devtools_cloudbuild_v1_ListWorkerPoolsResponse,
  },
};

exports.CloudBuildClient = grpc.makeGenericClientConstructor(CloudBuildService);
