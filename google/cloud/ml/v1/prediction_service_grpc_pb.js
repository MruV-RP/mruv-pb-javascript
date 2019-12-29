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
var google_cloud_ml_v1_prediction_service_pb = require('../../../../google/cloud/ml/v1/prediction_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_httpbody_pb = require('../../../../google/api/httpbody_pb.js');

function serialize_google_api_HttpBody(arg) {
  if (!(arg instanceof google_api_httpbody_pb.HttpBody)) {
    throw new Error('Expected argument of type google.api.HttpBody');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_HttpBody(buffer_arg) {
  return google_api_httpbody_pb.HttpBody.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_PredictRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_prediction_service_pb.PredictRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.PredictRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_PredictRequest(buffer_arg) {
  return google_cloud_ml_v1_prediction_service_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Copyright 2017 Google Inc. All Rights Reserved.
//
// Proto file for the Google Cloud Machine Learning Engine.
// Describes the online prediction service.
//
// The Prediction API, which serves predictions for models managed by
// ModelService.
var OnlinePredictionServiceService = exports.OnlinePredictionServiceService = {
  // Performs prediction on the data in the request.
  //
  // **** REMOVE FROM GENERATED DOCUMENTATION
  predict: {
    path: '/google.cloud.ml.v1.OnlinePredictionService/Predict',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_prediction_service_pb.PredictRequest,
    responseType: google_api_httpbody_pb.HttpBody,
    requestSerialize: serialize_google_cloud_ml_v1_PredictRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_PredictRequest,
    responseSerialize: serialize_google_api_HttpBody,
    responseDeserialize: deserialize_google_api_HttpBody,
  },
};

exports.OnlinePredictionServiceClient = grpc.makeGenericClientConstructor(OnlinePredictionServiceService);
