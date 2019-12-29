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
var google_cloud_talent_v4beta1_profile_service_pb = require('../../../../google/cloud/talent/v4beta1/profile_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');
var google_cloud_talent_v4beta1_filters_pb = require('../../../../google/cloud/talent/v4beta1/filters_pb.js');
var google_cloud_talent_v4beta1_histogram_pb = require('../../../../google/cloud/talent/v4beta1/histogram_pb.js');
var google_cloud_talent_v4beta1_profile_pb = require('../../../../google/cloud/talent/v4beta1/profile_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_talent_v4beta1_CreateProfileRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CreateProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CreateProfileRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_DeleteProfileRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.DeleteProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_DeleteProfileRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_GetProfileRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.GetProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_GetProfileRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListProfilesRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListProfilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListProfilesRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListProfilesResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListProfilesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListProfilesResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_Profile(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_pb.Profile)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.Profile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_Profile(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_pb.Profile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_SearchProfilesRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.SearchProfilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_SearchProfilesRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_SearchProfilesResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.SearchProfilesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_SearchProfilesResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_UpdateProfileRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.UpdateProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_UpdateProfileRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A service that handles profile management, including profile CRUD,
// enumeration and search.
var ProfileServiceService = exports.ProfileServiceService = {
  // Lists profiles by filter. The order is unspecified.
  listProfiles: {
    path: '/google.cloud.talent.v4beta1.ProfileService/ListProfiles',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest,
    responseType: google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_ListProfilesRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_ListProfilesRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_ListProfilesResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_ListProfilesResponse,
  },
  // Creates and returns a new profile.
  createProfile: {
    path: '/google.cloud.talent.v4beta1.ProfileService/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest,
    responseType: google_cloud_talent_v4beta1_profile_pb.Profile,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CreateProfileRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CreateProfileRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Profile,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Profile,
  },
  // Gets the specified profile.
  getProfile: {
    path: '/google.cloud.talent.v4beta1.ProfileService/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest,
    responseType: google_cloud_talent_v4beta1_profile_pb.Profile,
    requestSerialize: serialize_google_cloud_talent_v4beta1_GetProfileRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_GetProfileRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Profile,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Profile,
  },
  // Updates the specified profile and returns the updated result.
  updateProfile: {
    path: '/google.cloud.talent.v4beta1.ProfileService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest,
    responseType: google_cloud_talent_v4beta1_profile_pb.Profile,
    requestSerialize: serialize_google_cloud_talent_v4beta1_UpdateProfileRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_UpdateProfileRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Profile,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Profile,
  },
  // Deletes the specified profile.
  // Prerequisite: The profile has no associated applications or assignments
  // associated.
  deleteProfile: {
    path: '/google.cloud.talent.v4beta1.ProfileService/DeleteProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_talent_v4beta1_DeleteProfileRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_DeleteProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Searches for profiles within a tenant.
  //
  // For example, search by raw queries "software engineer in Mountain View" or
  // search by structured filters (location filter, education filter, etc.).
  //
  // See
  // [SearchProfilesRequest][google.cloud.talent.v4beta1.SearchProfilesRequest]
  // for more information.
  searchProfiles: {
    path: '/google.cloud.talent.v4beta1.ProfileService/SearchProfiles',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest,
    responseType: google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_SearchProfilesRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_SearchProfilesRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_SearchProfilesResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_SearchProfilesResponse,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService);
