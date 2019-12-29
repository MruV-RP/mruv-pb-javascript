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
var google_genomics_v1_references_pb = require('../../../google/genomics/v1/references_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

function serialize_google_genomics_v1_GetReferenceRequest(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.GetReferenceRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetReferenceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetReferenceRequest(buffer_arg) {
  return google_genomics_v1_references_pb.GetReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetReferenceSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.GetReferenceSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetReferenceSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetReferenceSetRequest(buffer_arg) {
  return google_genomics_v1_references_pb.GetReferenceSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ListBasesRequest(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.ListBasesRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ListBasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ListBasesRequest(buffer_arg) {
  return google_genomics_v1_references_pb.ListBasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ListBasesResponse(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.ListBasesResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.ListBasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ListBasesResponse(buffer_arg) {
  return google_genomics_v1_references_pb.ListBasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_Reference(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.Reference)) {
    throw new Error('Expected argument of type google.genomics.v1.Reference');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_Reference(buffer_arg) {
  return google_genomics_v1_references_pb.Reference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ReferenceSet(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.ReferenceSet)) {
    throw new Error('Expected argument of type google.genomics.v1.ReferenceSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ReferenceSet(buffer_arg) {
  return google_genomics_v1_references_pb.ReferenceSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReferenceSetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.SearchReferenceSetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReferenceSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReferenceSetsRequest(buffer_arg) {
  return google_genomics_v1_references_pb.SearchReferenceSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReferenceSetsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.SearchReferenceSetsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReferenceSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReferenceSetsResponse(buffer_arg) {
  return google_genomics_v1_references_pb.SearchReferenceSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReferencesRequest(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.SearchReferencesRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReferencesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReferencesRequest(buffer_arg) {
  return google_genomics_v1_references_pb.SearchReferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReferencesResponse(arg) {
  if (!(arg instanceof google_genomics_v1_references_pb.SearchReferencesResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReferencesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReferencesResponse(buffer_arg) {
  return google_genomics_v1_references_pb.SearchReferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ReferenceServiceV1Service = exports.ReferenceServiceV1Service = {
  // Searches for reference sets which match the given criteria.
  //
  // For the definitions of references and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
  searchReferenceSets: {
    path: '/google.genomics.v1.ReferenceServiceV1/SearchReferenceSets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_references_pb.SearchReferenceSetsRequest,
    responseType: google_genomics_v1_references_pb.SearchReferenceSetsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchReferenceSetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchReferenceSetsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchReferenceSetsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchReferenceSetsResponse,
  },
  // Gets a reference set.
  //
  // For the definitions of references and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
  getReferenceSet: {
    path: '/google.genomics.v1.ReferenceServiceV1/GetReferenceSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_references_pb.GetReferenceSetRequest,
    responseType: google_genomics_v1_references_pb.ReferenceSet,
    requestSerialize: serialize_google_genomics_v1_GetReferenceSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetReferenceSetRequest,
    responseSerialize: serialize_google_genomics_v1_ReferenceSet,
    responseDeserialize: deserialize_google_genomics_v1_ReferenceSet,
  },
  // Searches for references which match the given criteria.
  //
  // For the definitions of references and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
  searchReferences: {
    path: '/google.genomics.v1.ReferenceServiceV1/SearchReferences',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_references_pb.SearchReferencesRequest,
    responseType: google_genomics_v1_references_pb.SearchReferencesResponse,
    requestSerialize: serialize_google_genomics_v1_SearchReferencesRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchReferencesRequest,
    responseSerialize: serialize_google_genomics_v1_SearchReferencesResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchReferencesResponse,
  },
  // Gets a reference.
  //
  // For the definitions of references and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
  getReference: {
    path: '/google.genomics.v1.ReferenceServiceV1/GetReference',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_references_pb.GetReferenceRequest,
    responseType: google_genomics_v1_references_pb.Reference,
    requestSerialize: serialize_google_genomics_v1_GetReferenceRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetReferenceRequest,
    responseSerialize: serialize_google_genomics_v1_Reference,
    responseDeserialize: deserialize_google_genomics_v1_Reference,
  },
  // Lists the bases in a reference, optionally restricted to a range.
  //
  // For the definitions of references and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
  listBases: {
    path: '/google.genomics.v1.ReferenceServiceV1/ListBases',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_references_pb.ListBasesRequest,
    responseType: google_genomics_v1_references_pb.ListBasesResponse,
    requestSerialize: serialize_google_genomics_v1_ListBasesRequest,
    requestDeserialize: deserialize_google_genomics_v1_ListBasesRequest,
    responseSerialize: serialize_google_genomics_v1_ListBasesResponse,
    responseDeserialize: deserialize_google_genomics_v1_ListBasesResponse,
  },
};

exports.ReferenceServiceV1Client = grpc.makeGenericClientConstructor(ReferenceServiceV1Service);
