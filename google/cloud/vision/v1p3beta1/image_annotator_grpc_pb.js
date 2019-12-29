// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
var google_cloud_vision_v1p3beta1_image_annotator_pb = require('../../../../google/cloud/vision/v1p3beta1/image_annotator_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_vision_v1p3beta1_geometry_pb = require('../../../../google/cloud/vision/v1p3beta1/geometry_pb.js');
var google_cloud_vision_v1p3beta1_product_search_pb = require('../../../../google/cloud/vision/v1p3beta1/product_search_pb.js');
var google_cloud_vision_v1p3beta1_text_annotation_pb = require('../../../../google/cloud/vision/v1p3beta1/text_annotation_pb.js');
var google_cloud_vision_v1p3beta1_web_detection_pb = require('../../../../google/cloud/vision/v1p3beta1/web_detection_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var google_type_color_pb = require('../../../../google/type/color_pb.js');
var google_type_latlng_pb = require('../../../../google/type/latlng_pb.js');

function serialize_google_cloud_vision_v1p3beta1_AsyncBatchAnnotateFilesRequest(arg) {
  if (!(arg instanceof google_cloud_vision_v1p3beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p3beta1_AsyncBatchAnnotateFilesRequest(buffer_arg) {
  return google_cloud_vision_v1p3beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesRequest(arg) {
  if (!(arg instanceof google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesRequest)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesRequest(buffer_arg) {
  return google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesResponse(arg) {
  if (!(arg instanceof google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesResponse)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesResponse(buffer_arg) {
  return google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service that performs Google Cloud Vision API detection tasks over client
// images, such as face, landmark, logo, label, and text detection. The
// ImageAnnotator service returns detected entities from the images.
var ImageAnnotatorService = exports.ImageAnnotatorService = {
  // Run image detection and annotation for a batch of images.
  batchAnnotateImages: {
    path: '/google.cloud.vision.v1p3beta1.ImageAnnotator/BatchAnnotateImages',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesRequest,
    responseType: google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesResponse,
    requestSerialize: serialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesRequest,
    requestDeserialize: deserialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesRequest,
    responseSerialize: serialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesResponse,
    responseDeserialize: deserialize_google_cloud_vision_v1p3beta1_BatchAnnotateImagesResponse,
  },
  // Run asynchronous image detection and annotation for a list of generic
  // files, such as PDF files, which may contain multiple pages and multiple
  // images per page. Progress and results can be retrieved through the
  // `google.longrunning.Operations` interface.
  // `Operation.metadata` contains `OperationMetadata` (metadata).
  // `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
  asyncBatchAnnotateFiles: {
    path: '/google.cloud.vision.v1p3beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_vision_v1p3beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_vision_v1p3beta1_AsyncBatchAnnotateFilesRequest,
    requestDeserialize: deserialize_google_cloud_vision_v1p3beta1_AsyncBatchAnnotateFilesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ImageAnnotatorClient = grpc.makeGenericClientConstructor(ImageAnnotatorService);
