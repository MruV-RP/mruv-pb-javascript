// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
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
var google_cloud_ml_v1_project_service_pb = require('../../../../google/cloud/ml/v1/project_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_google_cloud_ml_v1_GetConfigRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_project_service_pb.GetConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.GetConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_GetConfigRequest(buffer_arg) {
  return google_cloud_ml_v1_project_service_pb.GetConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_GetConfigResponse(arg) {
  if (!(arg instanceof google_cloud_ml_v1_project_service_pb.GetConfigResponse)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.GetConfigResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_GetConfigResponse(buffer_arg) {
  return google_cloud_ml_v1_project_service_pb.GetConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Copyright 2017 Google Inc. All Rights Reserved.
//
// Proto file for the Google Cloud Machine Learning Engine.
// Describes the project management service.
//
// Allows retrieving project related information.
var ProjectManagementServiceService = exports.ProjectManagementServiceService = {
  // Get the service account information associated with your project. You need
  // this information in order to grant the service account persmissions for
  // the Google Cloud Storage location where you put your model training code
  // for training the model with Google Cloud Machine Learning.
  getConfig: {
    path: '/google.cloud.ml.v1.ProjectManagementService/GetConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_project_service_pb.GetConfigRequest,
    responseType: google_cloud_ml_v1_project_service_pb.GetConfigResponse,
    requestSerialize: serialize_google_cloud_ml_v1_GetConfigRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_GetConfigRequest,
    responseSerialize: serialize_google_cloud_ml_v1_GetConfigResponse,
    responseDeserialize: deserialize_google_cloud_ml_v1_GetConfigResponse,
  },
};

exports.ProjectManagementServiceClient = grpc.makeGenericClientConstructor(ProjectManagementServiceService);
