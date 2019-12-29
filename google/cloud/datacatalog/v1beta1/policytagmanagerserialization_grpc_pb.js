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
var google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb = require('../../../../google/cloud/datacatalog/v1beta1/policytagmanagerserialization_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_datacatalog_v1beta1_policytagmanager_pb = require('../../../../google/cloud/datacatalog/v1beta1/policytagmanager_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');

function serialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesResponse(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesResponse(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesResponse(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesResponse(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Policy tag manager serialization API service allows clients to manipulate
// their taxonomies and policy tags data with serialized format.
var PolicyTagManagerSerializationService = exports.PolicyTagManagerSerializationService = {
  // Imports all taxonomies and their policy tags to a project as new
  // taxonomies.
  //
  // This method provides a bulk taxonomy / policy tag creation using nested
  // proto structure.
  importTaxonomies: {
    path: '/google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization/ImportTaxonomies',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest,
    responseType: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesResponse,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_ImportTaxonomiesResponse,
  },
  // Exports all taxonomies and their policy tags in a project.
  //
  // This method generates SerializedTaxonomy protos with nested policy tags
  // that can be used as an input for future ImportTaxonomies calls.
  exportTaxonomies: {
    path: '/google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization/ExportTaxonomies',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest,
    responseType: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesResponse,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_ExportTaxonomiesResponse,
  },
};

exports.PolicyTagManagerSerializationClient = grpc.makeGenericClientConstructor(PolicyTagManagerSerializationService);
