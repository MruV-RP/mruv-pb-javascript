// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2016 Google Inc.
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
var google_genomics_v1_annotations_pb = require('../../../google/genomics/v1/annotations_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');

function serialize_google_genomics_v1_Annotation(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.Annotation)) {
    throw new Error('Expected argument of type google.genomics.v1.Annotation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_Annotation(buffer_arg) {
  return google_genomics_v1_annotations_pb.Annotation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_AnnotationSet(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.AnnotationSet)) {
    throw new Error('Expected argument of type google.genomics.v1.AnnotationSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_AnnotationSet(buffer_arg) {
  return google_genomics_v1_annotations_pb.AnnotationSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_BatchCreateAnnotationsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.BatchCreateAnnotationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_BatchCreateAnnotationsRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_BatchCreateAnnotationsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.BatchCreateAnnotationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_BatchCreateAnnotationsResponse(buffer_arg) {
  return google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_CreateAnnotationRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.CreateAnnotationRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.CreateAnnotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CreateAnnotationRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.CreateAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_CreateAnnotationSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.CreateAnnotationSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.CreateAnnotationSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CreateAnnotationSetRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.CreateAnnotationSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_DeleteAnnotationRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.DeleteAnnotationRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteAnnotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteAnnotationRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.DeleteAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_DeleteAnnotationSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteAnnotationSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteAnnotationSetRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetAnnotationRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.GetAnnotationRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetAnnotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetAnnotationRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.GetAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetAnnotationSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.GetAnnotationSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetAnnotationSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetAnnotationSetRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.GetAnnotationSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchAnnotationSetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchAnnotationSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchAnnotationSetsRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchAnnotationSetsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchAnnotationSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchAnnotationSetsResponse(buffer_arg) {
  return google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchAnnotationsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.SearchAnnotationsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchAnnotationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchAnnotationsRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.SearchAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchAnnotationsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.SearchAnnotationsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchAnnotationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchAnnotationsResponse(buffer_arg) {
  return google_genomics_v1_annotations_pb.SearchAnnotationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateAnnotationRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.UpdateAnnotationRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateAnnotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateAnnotationRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.UpdateAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateAnnotationSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateAnnotationSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateAnnotationSetRequest(buffer_arg) {
  return google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// This service provides storage and positional retrieval of genomic
// reference annotations, including variant annotations.
var AnnotationServiceV1Service = exports.AnnotationServiceV1Service = {
  // Creates a new annotation set. Caller must have WRITE permission for the
  // associated dataset.
  //
  // The following fields are required:
  //
  //   * [datasetId][google.genomics.v1.AnnotationSet.dataset_id]
  //   * [referenceSetId][google.genomics.v1.AnnotationSet.reference_set_id]
  //
  // All other fields may be optionally specified, unless documented as being
  // server-generated (for example, the `id` field).
  createAnnotationSet: {
    path: '/google.genomics.v1.AnnotationServiceV1/CreateAnnotationSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.CreateAnnotationSetRequest,
    responseType: google_genomics_v1_annotations_pb.AnnotationSet,
    requestSerialize: serialize_google_genomics_v1_CreateAnnotationSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_CreateAnnotationSetRequest,
    responseSerialize: serialize_google_genomics_v1_AnnotationSet,
    responseDeserialize: deserialize_google_genomics_v1_AnnotationSet,
  },
  // Gets an annotation set. Caller must have READ permission for
  // the associated dataset.
  getAnnotationSet: {
    path: '/google.genomics.v1.AnnotationServiceV1/GetAnnotationSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.GetAnnotationSetRequest,
    responseType: google_genomics_v1_annotations_pb.AnnotationSet,
    requestSerialize: serialize_google_genomics_v1_GetAnnotationSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetAnnotationSetRequest,
    responseSerialize: serialize_google_genomics_v1_AnnotationSet,
    responseDeserialize: deserialize_google_genomics_v1_AnnotationSet,
  },
  // Updates an annotation set. The update must respect all mutability
  // restrictions and other invariants described on the annotation set resource.
  // Caller must have WRITE permission for the associated dataset.
  updateAnnotationSet: {
    path: '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotationSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest,
    responseType: google_genomics_v1_annotations_pb.AnnotationSet,
    requestSerialize: serialize_google_genomics_v1_UpdateAnnotationSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateAnnotationSetRequest,
    responseSerialize: serialize_google_genomics_v1_AnnotationSet,
    responseDeserialize: deserialize_google_genomics_v1_AnnotationSet,
  },
  // Deletes an annotation set. Caller must have WRITE permission
  // for the associated annotation set.
  deleteAnnotationSet: {
    path: '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotationSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteAnnotationSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteAnnotationSetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Searches for annotation sets that match the given criteria. Annotation sets
  // are returned in an unspecified order. This order is consistent, such that
  // two queries for the same content (regardless of page size) yield annotation
  // sets in the same order across their respective streams of paginated
  // responses. Caller must have READ permission for the queried datasets.
  searchAnnotationSets: {
    path: '/google.genomics.v1.AnnotationServiceV1/SearchAnnotationSets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest,
    responseType: google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchAnnotationSetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchAnnotationSetsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchAnnotationSetsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchAnnotationSetsResponse,
  },
  // Creates a new annotation. Caller must have WRITE permission
  // for the associated annotation set.
  //
  // The following fields are required:
  //
  // * [annotationSetId][google.genomics.v1.Annotation.annotation_set_id]
  // * [referenceName][google.genomics.v1.Annotation.reference_name] or
  //   [referenceId][google.genomics.v1.Annotation.reference_id]
  //
  // ### Transcripts
  //
  // For annotations of type TRANSCRIPT, the following fields of
  // [transcript][google.genomics.v1.Annotation.transcript] must be provided:
  //
  // * [exons.start][google.genomics.v1.Transcript.Exon.start]
  // * [exons.end][google.genomics.v1.Transcript.Exon.end]
  //
  // All other fields may be optionally specified, unless documented as being
  // server-generated (for example, the `id` field). The annotated
  // range must be no longer than 100Mbp (mega base pairs). See the
  // [Annotation resource][google.genomics.v1.Annotation]
  // for additional restrictions on each field.
  createAnnotation: {
    path: '/google.genomics.v1.AnnotationServiceV1/CreateAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.CreateAnnotationRequest,
    responseType: google_genomics_v1_annotations_pb.Annotation,
    requestSerialize: serialize_google_genomics_v1_CreateAnnotationRequest,
    requestDeserialize: deserialize_google_genomics_v1_CreateAnnotationRequest,
    responseSerialize: serialize_google_genomics_v1_Annotation,
    responseDeserialize: deserialize_google_genomics_v1_Annotation,
  },
  // Creates one or more new annotations atomically. All annotations must
  // belong to the same annotation set. Caller must have WRITE
  // permission for this annotation set. For optimal performance, batch
  // positionally adjacent annotations together.
  //
  // If the request has a systemic issue, such as an attempt to write to
  // an inaccessible annotation set, the entire RPC will fail accordingly. For
  // lesser data issues, when possible an error will be isolated to the
  // corresponding batch entry in the response; the remaining well formed
  // annotations will be created normally.
  //
  // For details on the requirements for each individual annotation resource,
  // see
  // [CreateAnnotation][google.genomics.v1.AnnotationServiceV1.CreateAnnotation].
  batchCreateAnnotations: {
    path: '/google.genomics.v1.AnnotationServiceV1/BatchCreateAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest,
    responseType: google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse,
    requestSerialize: serialize_google_genomics_v1_BatchCreateAnnotationsRequest,
    requestDeserialize: deserialize_google_genomics_v1_BatchCreateAnnotationsRequest,
    responseSerialize: serialize_google_genomics_v1_BatchCreateAnnotationsResponse,
    responseDeserialize: deserialize_google_genomics_v1_BatchCreateAnnotationsResponse,
  },
  // Gets an annotation. Caller must have READ permission
  // for the associated annotation set.
  getAnnotation: {
    path: '/google.genomics.v1.AnnotationServiceV1/GetAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.GetAnnotationRequest,
    responseType: google_genomics_v1_annotations_pb.Annotation,
    requestSerialize: serialize_google_genomics_v1_GetAnnotationRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetAnnotationRequest,
    responseSerialize: serialize_google_genomics_v1_Annotation,
    responseDeserialize: deserialize_google_genomics_v1_Annotation,
  },
  // Updates an annotation. Caller must have
  // WRITE permission for the associated dataset.
  updateAnnotation: {
    path: '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.UpdateAnnotationRequest,
    responseType: google_genomics_v1_annotations_pb.Annotation,
    requestSerialize: serialize_google_genomics_v1_UpdateAnnotationRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateAnnotationRequest,
    responseSerialize: serialize_google_genomics_v1_Annotation,
    responseDeserialize: deserialize_google_genomics_v1_Annotation,
  },
  // Deletes an annotation. Caller must have WRITE permission for
  // the associated annotation set.
  deleteAnnotation: {
    path: '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.DeleteAnnotationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteAnnotationRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteAnnotationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Searches for annotations that match the given criteria. Results are
  // ordered by genomic coordinate (by reference sequence, then position).
  // Annotations with equivalent genomic coordinates are returned in an
  // unspecified order. This order is consistent, such that two queries for the
  // same content (regardless of page size) yield annotations in the same order
  // across their respective streams of paginated responses. Caller must have
  // READ permission for the queried annotation sets.
  searchAnnotations: {
    path: '/google.genomics.v1.AnnotationServiceV1/SearchAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_annotations_pb.SearchAnnotationsRequest,
    responseType: google_genomics_v1_annotations_pb.SearchAnnotationsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchAnnotationsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchAnnotationsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchAnnotationsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchAnnotationsResponse,
  },
};

exports.AnnotationServiceV1Client = grpc.makeGenericClientConstructor(AnnotationServiceV1Service);
