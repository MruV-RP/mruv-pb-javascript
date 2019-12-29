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
var google_devtools_resultstore_v2_resultstore_file_download_pb = require('../../../../google/devtools/resultstore/v2/resultstore_file_download_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_devtools_resultstore_v2_GetFileRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetFileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetFileRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetFileResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetFileResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetFileResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetFileTailRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetFileTailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetFileTailRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetFileTailResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetFileTailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetFileTailResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// This API allows download of File messages referenced in
// ResultStore resources.
var ResultStoreFileDownloadService = exports.ResultStoreFileDownloadService = {
  // Retrieves the File with the given uri.
  // returns a stream of bytes to be stitched together in order.
  //
  // An error will be reported in the following cases:
  // - If the File is not found.
  // - If the given File uri is badly formatted.
  getFile: {
    path: '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFile',
    requestStream: false,
    responseStream: true,
    requestType: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest,
    responseType: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetFileRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetFileRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_GetFileResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_GetFileResponse,
  },
  // Retrieves the tail of a File with the given uri.
  //
  // An error will be reported in the following cases:
  // - If the File is not found.
  // - If the given File uri is badly formatted.
  getFileTail: {
    path: '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFileTail',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest,
    responseType: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetFileTailRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetFileTailRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_GetFileTailResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_GetFileTailResponse,
  },
};

exports.ResultStoreFileDownloadClient = grpc.makeGenericClientConstructor(ResultStoreFileDownloadService);
