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
var google_cloud_vision_v1p4beta1_image_annotator_pb = require('../../../../google/cloud/vision/v1p4beta1/image_annotator_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_vision_v1p4beta1_face_pb = require('../../../../google/cloud/vision/v1p4beta1/face_pb.js');
var google_cloud_vision_v1p4beta1_geometry_pb = require('../../../../google/cloud/vision/v1p4beta1/geometry_pb.js');
var google_cloud_vision_v1p4beta1_product_search_pb = require('../../../../google/cloud/vision/v1p4beta1/product_search_pb.js');
var google_cloud_vision_v1p4beta1_text_annotation_pb = require('../../../../google/cloud/vision/v1p4beta1/text_annotation_pb.js');
var google_cloud_vision_v1p4beta1_web_detection_pb = require('../../../../google/cloud/vision/v1p4beta1/web_detection_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var google_type_color_pb = require('../../../../google/type/color_pb.js');
var google_type_latlng_pb = require('../../../../google/type/latlng_pb.js');

function serialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateFilesRequest(arg) {
  if (!(arg instanceof google_cloud_vision_v1p4beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p4beta1.AsyncBatchAnnotateFilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateFilesRequest(buffer_arg) {
  return google_cloud_vision_v1p4beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateImagesRequest(arg) {
  if (!(arg instanceof google_cloud_vision_v1p4beta1_image_annotator_pb.AsyncBatchAnnotateImagesRequest)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p4beta1.AsyncBatchAnnotateImagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateImagesRequest(buffer_arg) {
  return google_cloud_vision_v1p4beta1_image_annotator_pb.AsyncBatchAnnotateImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesRequest(arg) {
  if (!(arg instanceof google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateFilesRequest)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p4beta1.BatchAnnotateFilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesRequest(buffer_arg) {
  return google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesResponse(arg) {
  if (!(arg instanceof google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateFilesResponse)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p4beta1.BatchAnnotateFilesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesResponse(buffer_arg) {
  return google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesRequest(arg) {
  if (!(arg instanceof google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateImagesRequest)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p4beta1.BatchAnnotateImagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesRequest(buffer_arg) {
  return google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesResponse(arg) {
  if (!(arg instanceof google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateImagesResponse)) {
    throw new Error('Expected argument of type google.cloud.vision.v1p4beta1.BatchAnnotateImagesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesResponse(buffer_arg) {
  return google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateImagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
    path: '/google.cloud.vision.v1p4beta1.ImageAnnotator/BatchAnnotateImages',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateImagesRequest,
    responseType: google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateImagesResponse,
    requestSerialize: serialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesRequest,
    requestDeserialize: deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesRequest,
    responseSerialize: serialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesResponse,
    responseDeserialize: deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateImagesResponse,
  },
  // Service that performs image detection and annotation for a batch of files.
  // Now only "application/pdf", "image/tiff" and "image/gif" are supported.
  //
  // This service will extract at most 5 (customers can specify which 5 in
  // AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each
  // file provided and perform detection and annotation for each image
  // extracted.
  batchAnnotateFiles: {
    path: '/google.cloud.vision.v1p4beta1.ImageAnnotator/BatchAnnotateFiles',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateFilesRequest,
    responseType: google_cloud_vision_v1p4beta1_image_annotator_pb.BatchAnnotateFilesResponse,
    requestSerialize: serialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesRequest,
    requestDeserialize: deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesRequest,
    responseSerialize: serialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesResponse,
    responseDeserialize: deserialize_google_cloud_vision_v1p4beta1_BatchAnnotateFilesResponse,
  },
  // Run asynchronous image detection and annotation for a list of images.
  //
  // Progress and results can be retrieved through the
  // `google.longrunning.Operations` interface.
  // `Operation.metadata` contains `OperationMetadata` (metadata).
  // `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).
  //
  // This service will write image annotation outputs to json files in customer
  // GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
  asyncBatchAnnotateImages: {
    path: '/google.cloud.vision.v1p4beta1.ImageAnnotator/AsyncBatchAnnotateImages',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_vision_v1p4beta1_image_annotator_pb.AsyncBatchAnnotateImagesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateImagesRequest,
    requestDeserialize: deserialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateImagesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Run asynchronous image detection and annotation for a list of generic
  // files, such as PDF files, which may contain multiple pages and multiple
  // images per page. Progress and results can be retrieved through the
  // `google.longrunning.Operations` interface.
  // `Operation.metadata` contains `OperationMetadata` (metadata).
  // `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
  asyncBatchAnnotateFiles: {
    path: '/google.cloud.vision.v1p4beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_vision_v1p4beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateFilesRequest,
    requestDeserialize: deserialize_google_cloud_vision_v1p4beta1_AsyncBatchAnnotateFilesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ImageAnnotatorClient = grpc.makeGenericClientConstructor(ImageAnnotatorService);
