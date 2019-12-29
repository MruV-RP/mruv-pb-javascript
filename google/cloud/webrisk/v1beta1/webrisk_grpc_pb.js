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
var google_cloud_webrisk_v1beta1_webrisk_pb = require('../../../../google/cloud/webrisk/v1beta1/webrisk_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffRequest(arg) {
  if (!(arg instanceof google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest)) {
    throw new Error('Expected argument of type google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffRequest(buffer_arg) {
  return google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffResponse(arg) {
  if (!(arg instanceof google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse)) {
    throw new Error('Expected argument of type google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffResponse(buffer_arg) {
  return google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_webrisk_v1beta1_SearchHashesRequest(arg) {
  if (!(arg instanceof google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest)) {
    throw new Error('Expected argument of type google.cloud.webrisk.v1beta1.SearchHashesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_webrisk_v1beta1_SearchHashesRequest(buffer_arg) {
  return google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_webrisk_v1beta1_SearchHashesResponse(arg) {
  if (!(arg instanceof google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse)) {
    throw new Error('Expected argument of type google.cloud.webrisk.v1beta1.SearchHashesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_webrisk_v1beta1_SearchHashesResponse(buffer_arg) {
  return google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_webrisk_v1beta1_SearchUrisRequest(arg) {
  if (!(arg instanceof google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest)) {
    throw new Error('Expected argument of type google.cloud.webrisk.v1beta1.SearchUrisRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_webrisk_v1beta1_SearchUrisRequest(buffer_arg) {
  return google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_webrisk_v1beta1_SearchUrisResponse(arg) {
  if (!(arg instanceof google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse)) {
    throw new Error('Expected argument of type google.cloud.webrisk.v1beta1.SearchUrisResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_webrisk_v1beta1_SearchUrisResponse(buffer_arg) {
  return google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Web Risk v1beta1 API defines an interface to detect malicious URLs on your
// website and in client applications.
var WebRiskServiceV1Beta1Service = exports.WebRiskServiceV1Beta1Service = {
  // Gets the most recent threat list diffs.
  computeThreatListDiff: {
    path: '/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/ComputeThreatListDiff',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest,
    responseType: google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse,
    requestSerialize: serialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffRequest,
    requestDeserialize: deserialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffRequest,
    responseSerialize: serialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffResponse,
    responseDeserialize: deserialize_google_cloud_webrisk_v1beta1_ComputeThreatListDiffResponse,
  },
  // This method is used to check whether a URI is on a given threatList.
  searchUris: {
    path: '/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/SearchUris',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest,
    responseType: google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse,
    requestSerialize: serialize_google_cloud_webrisk_v1beta1_SearchUrisRequest,
    requestDeserialize: deserialize_google_cloud_webrisk_v1beta1_SearchUrisRequest,
    responseSerialize: serialize_google_cloud_webrisk_v1beta1_SearchUrisResponse,
    responseDeserialize: deserialize_google_cloud_webrisk_v1beta1_SearchUrisResponse,
  },
  // Gets the full hashes that match the requested hash prefix.
  // This is used after a hash prefix is looked up in a threatList
  // and there is a match. The client side threatList only holds partial hashes
  // so the client must query this method to determine if there is a full
  // hash match of a threat.
  searchHashes: {
    path: '/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/SearchHashes',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest,
    responseType: google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse,
    requestSerialize: serialize_google_cloud_webrisk_v1beta1_SearchHashesRequest,
    requestDeserialize: deserialize_google_cloud_webrisk_v1beta1_SearchHashesRequest,
    responseSerialize: serialize_google_cloud_webrisk_v1beta1_SearchHashesResponse,
    responseDeserialize: deserialize_google_cloud_webrisk_v1beta1_SearchHashesResponse,
  },
};

exports.WebRiskServiceV1Beta1Client = grpc.makeGenericClientConstructor(WebRiskServiceV1Beta1Service);
