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
'use strict';
var grpc = require('grpc');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_streetview_publish_v1_resources_pb = require('../../../../google/streetview/publish/v1/resources_pb.js');
var google_streetview_publish_v1_rpcmessages_pb = require('../../../../google/streetview/publish/v1/rpcmessages_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_BatchDeletePhotosRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.BatchDeletePhotosRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_BatchDeletePhotosRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_BatchDeletePhotosResponse(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.BatchDeletePhotosResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_BatchDeletePhotosResponse(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_BatchGetPhotosRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.BatchGetPhotosRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_BatchGetPhotosRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_BatchGetPhotosResponse(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.BatchGetPhotosResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_BatchGetPhotosResponse(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_BatchUpdatePhotosRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.BatchUpdatePhotosRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_BatchUpdatePhotosRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_BatchUpdatePhotosResponse(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.BatchUpdatePhotosResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_BatchUpdatePhotosResponse(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_CreatePhotoRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.CreatePhotoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_CreatePhotoRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_DeletePhotoRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.DeletePhotoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_DeletePhotoRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_GetPhotoRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.GetPhotoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_GetPhotoRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_ListPhotosRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.ListPhotosRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_ListPhotosRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_ListPhotosResponse(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.ListPhotosResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_ListPhotosResponse(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_Photo(arg) {
  if (!(arg instanceof google_streetview_publish_v1_resources_pb.Photo)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.Photo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_Photo(buffer_arg) {
  return google_streetview_publish_v1_resources_pb.Photo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_UpdatePhotoRequest(arg) {
  if (!(arg instanceof google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.UpdatePhotoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_UpdatePhotoRequest(buffer_arg) {
  return google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_streetview_publish_v1_UploadRef(arg) {
  if (!(arg instanceof google_streetview_publish_v1_resources_pb.UploadRef)) {
    throw new Error('Expected argument of type google.streetview.publish.v1.UploadRef');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_streetview_publish_v1_UploadRef(buffer_arg) {
  return google_streetview_publish_v1_resources_pb.UploadRef.deserializeBinary(new Uint8Array(buffer_arg));
}


// Definition of the service that backs the Street View Publish API.
//
// Publishes and connects user-contributed photos on Street View.
var StreetViewPublishServiceService = exports.StreetViewPublishServiceService = {
  // Creates an upload session to start uploading photo bytes. The method uses
  // the upload URL of the returned
  // [UploadRef][google.streetview.publish.v1.UploadRef] to upload the bytes for
  // the [Photo][google.streetview.publish.v1.Photo].
  //
  // In addition to the photo requirements shown in
  // https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
  // the photo must meet the following requirements:
  //
  // * Photo Sphere XMP metadata must be included in the photo medadata. See
  // https://developers.google.com/streetview/spherical-metadata for the
  // required fields.
  // * The pixel size of the photo must meet the size requirements listed in
  // https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
  // the photo must be a full 360 horizontally.
  //
  // After the upload completes, the method uses
  // [UploadRef][google.streetview.publish.v1.UploadRef] with
  // [CreatePhoto][google.streetview.publish.v1.StreetViewPublishService.CreatePhoto]
  // to create the [Photo][google.streetview.publish.v1.Photo] object entry.
  startUpload: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/StartUpload',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_streetview_publish_v1_resources_pb.UploadRef,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_streetview_publish_v1_UploadRef,
    responseDeserialize: deserialize_google_streetview_publish_v1_UploadRef,
  },
  // After the client finishes uploading the photo with the returned
  // [UploadRef][google.streetview.publish.v1.UploadRef],
  // [CreatePhoto][google.streetview.publish.v1.StreetViewPublishService.CreatePhoto]
  // publishes the uploaded [Photo][google.streetview.publish.v1.Photo] to
  // Street View on Google Maps.
  //
  // Currently, the only way to set heading, pitch, and roll in CreatePhoto is
  // through the [Photo Sphere XMP
  // metadata](https://developers.google.com/streetview/spherical-metadata) in
  // the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`,
  // `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose.
  //
  // This method returns the following error codes:
  //
  // * [google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT] if
  // the request is malformed or if the uploaded photo is not a 360 photo.
  // * [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND] if the upload
  // reference does not exist.
  // * [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED]
  // if the account has reached the storage limit.
  createPhoto: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/CreatePhoto',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest,
    responseType: google_streetview_publish_v1_resources_pb.Photo,
    requestSerialize: serialize_google_streetview_publish_v1_CreatePhotoRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_CreatePhotoRequest,
    responseSerialize: serialize_google_streetview_publish_v1_Photo,
    responseDeserialize: deserialize_google_streetview_publish_v1_Photo,
  },
  // Gets the metadata of the specified
  // [Photo][google.streetview.publish.v1.Photo].
  //
  // This method returns the following error codes:
  //
  // * [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED] if
  // the requesting user did not create the requested
  // [Photo][google.streetview.publish.v1.Photo].
  // * [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND] if the requested
  // [Photo][google.streetview.publish.v1.Photo] does not exist.
  // * [google.rpc.Code.UNAVAILABLE][google.rpc.Code.UNAVAILABLE] if the
  // requested [Photo][google.streetview.publish.v1.Photo] is still being
  // indexed.
  getPhoto: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/GetPhoto',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest,
    responseType: google_streetview_publish_v1_resources_pb.Photo,
    requestSerialize: serialize_google_streetview_publish_v1_GetPhotoRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_GetPhotoRequest,
    responseSerialize: serialize_google_streetview_publish_v1_Photo,
    responseDeserialize: deserialize_google_streetview_publish_v1_Photo,
  },
  // Gets the metadata of the specified
  // [Photo][google.streetview.publish.v1.Photo] batch.
  //
  // Note that if
  // [BatchGetPhotos][google.streetview.publish.v1.StreetViewPublishService.BatchGetPhotos]
  // fails, either critical fields are missing or there is an authentication
  // error. Even if
  // [BatchGetPhotos][google.streetview.publish.v1.StreetViewPublishService.BatchGetPhotos]
  // succeeds, individual photos in the batch may have failures.
  // These failures are specified in each
  // [PhotoResponse.status][google.streetview.publish.v1.PhotoResponse.status]
  // in
  // [BatchGetPhotosResponse.results][google.streetview.publish.v1.BatchGetPhotosResponse.results].
  // See
  // [GetPhoto][google.streetview.publish.v1.StreetViewPublishService.GetPhoto]
  // for specific failures that can occur per photo.
  batchGetPhotos: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/BatchGetPhotos',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest,
    responseType: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse,
    requestSerialize: serialize_google_streetview_publish_v1_BatchGetPhotosRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_BatchGetPhotosRequest,
    responseSerialize: serialize_google_streetview_publish_v1_BatchGetPhotosResponse,
    responseDeserialize: deserialize_google_streetview_publish_v1_BatchGetPhotosResponse,
  },
  // Lists all the [Photos][google.streetview.publish.v1.Photo] that belong to
  // the user.
  //
  // <aside class="note"><b>Note:</b> Recently created photos that are still
  // being indexed are not returned in the response.</aside>
  listPhotos: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/ListPhotos',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest,
    responseType: google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse,
    requestSerialize: serialize_google_streetview_publish_v1_ListPhotosRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_ListPhotosRequest,
    responseSerialize: serialize_google_streetview_publish_v1_ListPhotosResponse,
    responseDeserialize: deserialize_google_streetview_publish_v1_ListPhotosResponse,
  },
  // Updates the metadata of a [Photo][google.streetview.publish.v1.Photo], such
  // as pose, place association, connections, etc. Changing the pixels of a
  // photo is not supported.
  //
  // Only the fields specified in the
  // [updateMask][google.streetview.publish.v1.UpdatePhotoRequest.update_mask]
  // field are used. If `updateMask` is not present, the update applies to all
  // fields.
  //
  // This method returns the following error codes:
  //
  // * [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED] if
  // the requesting user did not create the requested photo.
  // * [google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT] if
  // the request is malformed.
  // * [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND] if the requested
  // photo does not exist.
  // * [google.rpc.Code.UNAVAILABLE][google.rpc.Code.UNAVAILABLE] if the
  // requested [Photo][google.streetview.publish.v1.Photo] is still being
  // indexed.
  updatePhoto: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/UpdatePhoto',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest,
    responseType: google_streetview_publish_v1_resources_pb.Photo,
    requestSerialize: serialize_google_streetview_publish_v1_UpdatePhotoRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_UpdatePhotoRequest,
    responseSerialize: serialize_google_streetview_publish_v1_Photo,
    responseDeserialize: deserialize_google_streetview_publish_v1_Photo,
  },
  // Updates the metadata of [Photos][google.streetview.publish.v1.Photo], such
  // as pose, place association, connections, etc. Changing the pixels of photos
  // is not supported.
  //
  // Note that if
  // [BatchUpdatePhotos][google.streetview.publish.v1.StreetViewPublishService.BatchUpdatePhotos]
  // fails, either critical fields are missing or there is an authentication
  // error. Even if
  // [BatchUpdatePhotos][google.streetview.publish.v1.StreetViewPublishService.BatchUpdatePhotos]
  // succeeds, individual photos in the batch may have failures.
  // These failures are specified in each
  // [PhotoResponse.status][google.streetview.publish.v1.PhotoResponse.status]
  // in
  // [BatchUpdatePhotosResponse.results][google.streetview.publish.v1.BatchUpdatePhotosResponse.results].
  // See
  // [UpdatePhoto][google.streetview.publish.v1.StreetViewPublishService.UpdatePhoto]
  // for specific failures that can occur per photo.
  //
  // Only the fields specified in
  // [updateMask][google.streetview.publish.v1.UpdatePhotoRequest.update_mask]
  // field are used. If `updateMask` is not present, the update applies to all
  // fields.
  //
  // The number of
  // [UpdatePhotoRequest][google.streetview.publish.v1.UpdatePhotoRequest]
  // messages in a
  // [BatchUpdatePhotosRequest][google.streetview.publish.v1.BatchUpdatePhotosRequest]
  // must not exceed 20.
  //
  // <aside class="note"><b>Note:</b> To update
  // [Pose.altitude][google.streetview.publish.v1.Pose.altitude],
  // [Pose.latLngPair][google.streetview.publish.v1.Pose.lat_lng_pair] has to be
  // filled as well. Otherwise, the request will fail.</aside>
  batchUpdatePhotos: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/BatchUpdatePhotos',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest,
    responseType: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse,
    requestSerialize: serialize_google_streetview_publish_v1_BatchUpdatePhotosRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_BatchUpdatePhotosRequest,
    responseSerialize: serialize_google_streetview_publish_v1_BatchUpdatePhotosResponse,
    responseDeserialize: deserialize_google_streetview_publish_v1_BatchUpdatePhotosResponse,
  },
  // Deletes a [Photo][google.streetview.publish.v1.Photo] and its metadata.
  //
  // This method returns the following error codes:
  //
  // * [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED] if
  // the requesting user did not create the requested photo.
  // * [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND] if the photo ID
  // does not exist.
  deletePhoto: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/DeletePhoto',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_streetview_publish_v1_DeletePhotoRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_DeletePhotoRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes a list of [Photos][google.streetview.publish.v1.Photo] and their
  // metadata.
  //
  // Note that if
  // [BatchDeletePhotos][google.streetview.publish.v1.StreetViewPublishService.BatchDeletePhotos]
  // fails, either critical fields are missing or there was an authentication
  // error. Even if
  // [BatchDeletePhotos][google.streetview.publish.v1.StreetViewPublishService.BatchDeletePhotos]
  // succeeds, individual photos in the batch may have failures.
  // These failures are specified in each
  // [PhotoResponse.status][google.streetview.publish.v1.PhotoResponse.status]
  // in
  // [BatchDeletePhotosResponse.results][google.streetview.publish.v1.BatchDeletePhotosResponse.status].
  // See
  // [DeletePhoto][google.streetview.publish.v1.StreetViewPublishService.DeletePhoto]
  // for specific failures that can occur per photo.
  batchDeletePhotos: {
    path: '/google.streetview.publish.v1.StreetViewPublishService/BatchDeletePhotos',
    requestStream: false,
    responseStream: false,
    requestType: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest,
    responseType: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse,
    requestSerialize: serialize_google_streetview_publish_v1_BatchDeletePhotosRequest,
    requestDeserialize: deserialize_google_streetview_publish_v1_BatchDeletePhotosRequest,
    responseSerialize: serialize_google_streetview_publish_v1_BatchDeletePhotosResponse,
    responseDeserialize: deserialize_google_streetview_publish_v1_BatchDeletePhotosResponse,
  },
};

exports.StreetViewPublishServiceClient = grpc.makeGenericClientConstructor(StreetViewPublishServiceService);
