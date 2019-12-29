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
var google_cloud_automl_v1_prediction_service_pb = require('../../../../google/cloud/automl/v1/prediction_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_automl_v1_annotation_payload_pb = require('../../../../google/cloud/automl/v1/annotation_payload_pb.js');
var google_cloud_automl_v1_data_items_pb = require('../../../../google/cloud/automl/v1/data_items_pb.js');
var google_cloud_automl_v1_io_pb = require('../../../../google/cloud/automl/v1/io_pb.js');
var google_cloud_automl_v1_operations_pb = require('../../../../google/cloud/automl/v1/operations_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');

function serialize_google_cloud_automl_v1_BatchPredictRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1_prediction_service_pb.BatchPredictRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1.BatchPredictRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1_BatchPredictRequest(buffer_arg) {
  return google_cloud_automl_v1_prediction_service_pb.BatchPredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1_PredictRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1_prediction_service_pb.PredictRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1.PredictRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1_PredictRequest(buffer_arg) {
  return google_cloud_automl_v1_prediction_service_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1_PredictResponse(arg) {
  if (!(arg instanceof google_cloud_automl_v1_prediction_service_pb.PredictResponse)) {
    throw new Error('Expected argument of type google.cloud.automl.v1.PredictResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1_PredictResponse(buffer_arg) {
  return google_cloud_automl_v1_prediction_service_pb.PredictResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// AutoML Prediction API.
//
// On any input that is documented to expect a string parameter in
// snake_case or kebab-case, either of those cases is accepted.
var PredictionServiceService = exports.PredictionServiceService = {
  // Perform an online prediction. The prediction result will be directly
  // returned in the response.
  // Available for following ML problems, and their expected request payloads:
  // * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes
  //                          up to 30MB.
  // * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes
  //                            up to 30MB.
  // * Text Classification - TextSnippet, content up to 60,000 characters,
  //                         UTF-8 encoded.
  // * Text Extraction - TextSnippet, content up to 30,000 characters,
  //                     UTF-8 NFC encoded.
  // * Translation - TextSnippet, content up to 25,000 characters, UTF-8
  //                 encoded.
  // * Text Sentiment - TextSnippet, content up 500 characters, UTF-8
  //                     encoded.
  predict: {
    path: '/google.cloud.automl.v1.PredictionService/Predict',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1_prediction_service_pb.PredictRequest,
    responseType: google_cloud_automl_v1_prediction_service_pb.PredictResponse,
    requestSerialize: serialize_google_cloud_automl_v1_PredictRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1_PredictRequest,
    responseSerialize: serialize_google_cloud_automl_v1_PredictResponse,
    responseDeserialize: deserialize_google_cloud_automl_v1_PredictResponse,
  },
  // Perform a batch prediction. Unlike the online
  // [Predict][google.cloud.automl.v1.PredictionService.Predict], batch
  // prediction result won't be immediately available in the response. Instead,
  // a long running operation object is returned. User can poll the operation
  // result via [GetOperation][google.longrunning.Operations.GetOperation]
  // method. Once the operation is done,
  // [BatchPredictResult][google.cloud.automl.v1.BatchPredictResult] is returned
  // in the [response][google.longrunning.Operation.response] field. Available
  // for following ML problems:
  // * Image Classification
  // * Image Object Detection
  // * Text Extraction
  batchPredict: {
    path: '/google.cloud.automl.v1.PredictionService/BatchPredict',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1_prediction_service_pb.BatchPredictRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1_BatchPredictRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1_BatchPredictRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.PredictionServiceClient = grpc.makeGenericClientConstructor(PredictionServiceService);
