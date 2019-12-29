// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC
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
var google_devtools_cloudprofiler_v2_profiler_pb = require('../../../../google/devtools/cloudprofiler/v2/profiler_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_devtools_cloudprofiler_v2_CreateOfflineProfileRequest(arg) {
  if (!(arg instanceof google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudprofiler_v2_CreateOfflineProfileRequest(buffer_arg) {
  return google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudprofiler_v2_CreateProfileRequest(arg) {
  if (!(arg instanceof google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudprofiler.v2.CreateProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudprofiler_v2_CreateProfileRequest(buffer_arg) {
  return google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudprofiler_v2_Profile(arg) {
  if (!(arg instanceof google_devtools_cloudprofiler_v2_profiler_pb.Profile)) {
    throw new Error('Expected argument of type google.devtools.cloudprofiler.v2.Profile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudprofiler_v2_Profile(buffer_arg) {
  return google_devtools_cloudprofiler_v2_profiler_pb.Profile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudprofiler_v2_UpdateProfileRequest(arg) {
  if (!(arg instanceof google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudprofiler.v2.UpdateProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudprofiler_v2_UpdateProfileRequest(buffer_arg) {
  return google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manage the collection of continuous profiling data provided by profiling
// agents running in the cloud or by an offline provider of profiling data.
//
// General guidelines:
// * Profiles for a single deployment must be created in ascending time order.
// * Profiles can be created in either online or offline mode, see below.
var ProfilerServiceService = exports.ProfilerServiceService = {
  // CreateProfile creates a new profile resource in the online mode.
  //
  // The server ensures that the new profiles are created at a constant rate per
  // deployment, so the creation request may hang for some time until the next
  // profile session is available.
  //
  // The request may fail with ABORTED error if the creation is not available
  // within ~1m, the response will indicate the duration of the backoff the
  // client should take before attempting creating a profile again. The backoff
  // duration is returned in google.rpc.RetryInfo extension on the response
  // status. To a gRPC client, the extension will be return as a
  // binary-serialized proto in the trailing metadata item named
  // "google.rpc.retryinfo-bin".
  createProfile: {
    path: '/google.devtools.cloudprofiler.v2.ProfilerService/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest,
    responseType: google_devtools_cloudprofiler_v2_profiler_pb.Profile,
    requestSerialize: serialize_google_devtools_cloudprofiler_v2_CreateProfileRequest,
    requestDeserialize: deserialize_google_devtools_cloudprofiler_v2_CreateProfileRequest,
    responseSerialize: serialize_google_devtools_cloudprofiler_v2_Profile,
    responseDeserialize: deserialize_google_devtools_cloudprofiler_v2_Profile,
  },
  // CreateOfflineProfile creates a new profile resource in the offline mode.
  // The client provides the profile to create along with the profile bytes, the
  // server records it.
  createOfflineProfile: {
    path: '/google.devtools.cloudprofiler.v2.ProfilerService/CreateOfflineProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest,
    responseType: google_devtools_cloudprofiler_v2_profiler_pb.Profile,
    requestSerialize: serialize_google_devtools_cloudprofiler_v2_CreateOfflineProfileRequest,
    requestDeserialize: deserialize_google_devtools_cloudprofiler_v2_CreateOfflineProfileRequest,
    responseSerialize: serialize_google_devtools_cloudprofiler_v2_Profile,
    responseDeserialize: deserialize_google_devtools_cloudprofiler_v2_Profile,
  },
  // UpdateProfile updates the profile bytes and labels on the profile resource
  // created in the online mode. Updating the bytes for profiles created in the
  // offline mode is currently not supported: the profile content must be
  // provided at the time of the profile creation.
  updateProfile: {
    path: '/google.devtools.cloudprofiler.v2.ProfilerService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest,
    responseType: google_devtools_cloudprofiler_v2_profiler_pb.Profile,
    requestSerialize: serialize_google_devtools_cloudprofiler_v2_UpdateProfileRequest,
    requestDeserialize: deserialize_google_devtools_cloudprofiler_v2_UpdateProfileRequest,
    responseSerialize: serialize_google_devtools_cloudprofiler_v2_Profile,
    responseDeserialize: deserialize_google_devtools_cloudprofiler_v2_Profile,
  },
};

exports.ProfilerServiceClient = grpc.makeGenericClientConstructor(ProfilerServiceService);
