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
var google_genomics_v1_variants_pb = require('../../../google/genomics/v1/variants_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_google_genomics_v1_CallSet(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.CallSet)) {
    throw new Error('Expected argument of type google.genomics.v1.CallSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CallSet(buffer_arg) {
  return google_genomics_v1_variants_pb.CallSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_CreateCallSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.CreateCallSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.CreateCallSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CreateCallSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.CreateCallSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_CreateVariantRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.CreateVariantRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.CreateVariantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CreateVariantRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.CreateVariantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_CreateVariantSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.CreateVariantSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.CreateVariantSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CreateVariantSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.CreateVariantSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_DeleteCallSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.DeleteCallSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteCallSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteCallSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.DeleteCallSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_DeleteVariantRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.DeleteVariantRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteVariantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteVariantRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.DeleteVariantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_DeleteVariantSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.DeleteVariantSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteVariantSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteVariantSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.DeleteVariantSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ExportVariantSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.ExportVariantSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ExportVariantSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ExportVariantSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.ExportVariantSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetCallSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.GetCallSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetCallSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetCallSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.GetCallSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetVariantRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.GetVariantRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetVariantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetVariantRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.GetVariantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetVariantSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.GetVariantSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetVariantSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetVariantSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.GetVariantSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ImportVariantsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.ImportVariantsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ImportVariantsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ImportVariantsRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.ImportVariantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_MergeVariantsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.MergeVariantsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.MergeVariantsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_MergeVariantsRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.MergeVariantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchCallSetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.SearchCallSetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchCallSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchCallSetsRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.SearchCallSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchCallSetsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.SearchCallSetsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchCallSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchCallSetsResponse(buffer_arg) {
  return google_genomics_v1_variants_pb.SearchCallSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchVariantSetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.SearchVariantSetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchVariantSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchVariantSetsRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.SearchVariantSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchVariantSetsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.SearchVariantSetsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchVariantSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchVariantSetsResponse(buffer_arg) {
  return google_genomics_v1_variants_pb.SearchVariantSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchVariantsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.SearchVariantsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchVariantsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchVariantsRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.SearchVariantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchVariantsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.SearchVariantsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchVariantsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchVariantsResponse(buffer_arg) {
  return google_genomics_v1_variants_pb.SearchVariantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_StreamVariantsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.StreamVariantsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.StreamVariantsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_StreamVariantsRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.StreamVariantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_StreamVariantsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.StreamVariantsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.StreamVariantsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_StreamVariantsResponse(buffer_arg) {
  return google_genomics_v1_variants_pb.StreamVariantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateCallSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.UpdateCallSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateCallSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateCallSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.UpdateCallSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateVariantRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.UpdateVariantRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateVariantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateVariantRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.UpdateVariantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateVariantSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.UpdateVariantSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateVariantSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateVariantSetRequest(buffer_arg) {
  return google_genomics_v1_variants_pb.UpdateVariantSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_Variant(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.Variant)) {
    throw new Error('Expected argument of type google.genomics.v1.Variant');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_Variant(buffer_arg) {
  return google_genomics_v1_variants_pb.Variant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_VariantSet(arg) {
  if (!(arg instanceof google_genomics_v1_variants_pb.VariantSet)) {
    throw new Error('Expected argument of type google.genomics.v1.VariantSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_VariantSet(buffer_arg) {
  return google_genomics_v1_variants_pb.VariantSet.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamingVariantServiceService = exports.StreamingVariantServiceService = {
  // Returns a stream of all the variants matching the search request, ordered
  // by reference name, position, and ID.
  streamVariants: {
    path: '/google.genomics.v1.StreamingVariantService/StreamVariants',
    requestStream: false,
    responseStream: true,
    requestType: google_genomics_v1_variants_pb.StreamVariantsRequest,
    responseType: google_genomics_v1_variants_pb.StreamVariantsResponse,
    requestSerialize: serialize_google_genomics_v1_StreamVariantsRequest,
    requestDeserialize: deserialize_google_genomics_v1_StreamVariantsRequest,
    responseSerialize: serialize_google_genomics_v1_StreamVariantsResponse,
    responseDeserialize: deserialize_google_genomics_v1_StreamVariantsResponse,
  },
};

exports.StreamingVariantServiceClient = grpc.makeGenericClientConstructor(StreamingVariantServiceService);
var VariantServiceV1Service = exports.VariantServiceV1Service = {
  // Creates variant data by asynchronously importing the provided information.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // The variants for import will be merged with any existing variant that
  // matches its reference sequence, start, end, reference bases, and
  // alternative bases. If no such variant exists, a new one will be created.
  //
  // When variants are merged, the call information from the new variant
  // is added to the existing variant, and Variant info fields are merged
  // as specified in
  // [infoMergeConfig][google.genomics.v1.ImportVariantsRequest.info_merge_config].
  // As a special case, for single-sample VCF files, QUAL and FILTER fields will
  // be moved to the call level; these are sometimes interpreted in a
  // call-specific context.
  // Imported VCF headers are appended to the metadata already in a variant set.
  importVariants: {
    path: '/google.genomics.v1.VariantServiceV1/ImportVariants',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.ImportVariantsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_genomics_v1_ImportVariantsRequest,
    requestDeserialize: deserialize_google_genomics_v1_ImportVariantsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates a new variant set.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // The provided variant set must have a valid `datasetId` set - all other
  // fields are optional. Note that the `id` field will be ignored, as this is
  // assigned by the server.
  createVariantSet: {
    path: '/google.genomics.v1.VariantServiceV1/CreateVariantSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.CreateVariantSetRequest,
    responseType: google_genomics_v1_variants_pb.VariantSet,
    requestSerialize: serialize_google_genomics_v1_CreateVariantSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_CreateVariantSetRequest,
    responseSerialize: serialize_google_genomics_v1_VariantSet,
    responseDeserialize: deserialize_google_genomics_v1_VariantSet,
  },
  // Exports variant set data to an external destination.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  exportVariantSet: {
    path: '/google.genomics.v1.VariantServiceV1/ExportVariantSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.ExportVariantSetRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_genomics_v1_ExportVariantSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_ExportVariantSetRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets a variant set by ID.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  getVariantSet: {
    path: '/google.genomics.v1.VariantServiceV1/GetVariantSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.GetVariantSetRequest,
    responseType: google_genomics_v1_variants_pb.VariantSet,
    requestSerialize: serialize_google_genomics_v1_GetVariantSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetVariantSetRequest,
    responseSerialize: serialize_google_genomics_v1_VariantSet,
    responseDeserialize: deserialize_google_genomics_v1_VariantSet,
  },
  // Returns a list of all variant sets matching search criteria.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
  searchVariantSets: {
    path: '/google.genomics.v1.VariantServiceV1/SearchVariantSets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.SearchVariantSetsRequest,
    responseType: google_genomics_v1_variants_pb.SearchVariantSetsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchVariantSetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchVariantSetsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchVariantSetsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchVariantSetsResponse,
  },
  // Deletes a variant set including all variants, call sets, and calls within.
  // This is not reversible.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  deleteVariantSet: {
    path: '/google.genomics.v1.VariantServiceV1/DeleteVariantSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.DeleteVariantSetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteVariantSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteVariantSetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates a variant set using patch semantics.
  //
  // For the definitions of variant sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  updateVariantSet: {
    path: '/google.genomics.v1.VariantServiceV1/UpdateVariantSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.UpdateVariantSetRequest,
    responseType: google_genomics_v1_variants_pb.VariantSet,
    requestSerialize: serialize_google_genomics_v1_UpdateVariantSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateVariantSetRequest,
    responseSerialize: serialize_google_genomics_v1_VariantSet,
    responseDeserialize: deserialize_google_genomics_v1_VariantSet,
  },
  // Gets a list of variants matching the criteria.
  //
  // For the definitions of variants and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
  searchVariants: {
    path: '/google.genomics.v1.VariantServiceV1/SearchVariants',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.SearchVariantsRequest,
    responseType: google_genomics_v1_variants_pb.SearchVariantsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchVariantsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchVariantsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchVariantsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchVariantsResponse,
  },
  // Creates a new variant.
  //
  // For the definitions of variants and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  createVariant: {
    path: '/google.genomics.v1.VariantServiceV1/CreateVariant',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.CreateVariantRequest,
    responseType: google_genomics_v1_variants_pb.Variant,
    requestSerialize: serialize_google_genomics_v1_CreateVariantRequest,
    requestDeserialize: deserialize_google_genomics_v1_CreateVariantRequest,
    responseSerialize: serialize_google_genomics_v1_Variant,
    responseDeserialize: deserialize_google_genomics_v1_Variant,
  },
  // Updates a variant.
  //
  // For the definitions of variants and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // This method supports patch semantics. Returns the modified variant without
  // its calls.
  updateVariant: {
    path: '/google.genomics.v1.VariantServiceV1/UpdateVariant',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.UpdateVariantRequest,
    responseType: google_genomics_v1_variants_pb.Variant,
    requestSerialize: serialize_google_genomics_v1_UpdateVariantRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateVariantRequest,
    responseSerialize: serialize_google_genomics_v1_Variant,
    responseDeserialize: deserialize_google_genomics_v1_Variant,
  },
  // Deletes a variant.
  //
  // For the definitions of variants and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  deleteVariant: {
    path: '/google.genomics.v1.VariantServiceV1/DeleteVariant',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.DeleteVariantRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteVariantRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteVariantRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a variant by ID.
  //
  // For the definitions of variants and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  getVariant: {
    path: '/google.genomics.v1.VariantServiceV1/GetVariant',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.GetVariantRequest,
    responseType: google_genomics_v1_variants_pb.Variant,
    requestSerialize: serialize_google_genomics_v1_GetVariantRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetVariantRequest,
    responseSerialize: serialize_google_genomics_v1_Variant,
    responseDeserialize: deserialize_google_genomics_v1_Variant,
  },
  // Merges the given variants with existing variants.
  //
  // For the definitions of variants and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Each variant will be
  // merged with an existing variant that matches its reference sequence,
  // start, end, reference bases, and alternative bases. If no such variant
  // exists, a new one will be created.
  //
  // When variants are merged, the call information from the new variant
  // is added to the existing variant. Variant info fields are merged as
  // specified in the
  // [infoMergeConfig][google.genomics.v1.MergeVariantsRequest.info_merge_config]
  // field of the MergeVariantsRequest.
  //
  // Please exercise caution when using this method!  It is easy to introduce
  // mistakes in existing variants and difficult to back out of them.  For
  // example,
  // suppose you were trying to merge a new variant with an existing one and
  // both
  // variants contain calls that belong to callsets with the same callset ID.
  //
  //     // Existing variant - irrelevant fields trimmed for clarity
  //     {
  //         "variantSetId": "10473108253681171589",
  //         "referenceName": "1",
  //         "start": "10582",
  //         "referenceBases": "G",
  //         "alternateBases": [
  //             "A"
  //         ],
  //         "calls": [
  //             {
  //                 "callSetId": "10473108253681171589-0",
  //                 "callSetName": "CALLSET0",
  //                 "genotype": [
  //                     0,
  //                     1
  //                 ],
  //             }
  //         ]
  //     }
  //
  //     // New variant with conflicting call information
  //     {
  //         "variantSetId": "10473108253681171589",
  //         "referenceName": "1",
  //         "start": "10582",
  //         "referenceBases": "G",
  //         "alternateBases": [
  //             "A"
  //         ],
  //         "calls": [
  //             {
  //                 "callSetId": "10473108253681171589-0",
  //                 "callSetName": "CALLSET0",
  //                 "genotype": [
  //                     1,
  //                     1
  //                 ],
  //             }
  //         ]
  //     }
  //
  // The resulting merged variant would overwrite the existing calls with those
  // from the new variant:
  //
  //     {
  //         "variantSetId": "10473108253681171589",
  //         "referenceName": "1",
  //         "start": "10582",
  //         "referenceBases": "G",
  //         "alternateBases": [
  //             "A"
  //         ],
  //         "calls": [
  //             {
  //                 "callSetId": "10473108253681171589-0",
  //                 "callSetName": "CALLSET0",
  //                 "genotype": [
  //                     1,
  //                     1
  //                 ],
  //             }
  //         ]
  //     }
  //
  // This may be the desired outcome, but it is up to the user to determine if
  // if that is indeed the case.
  mergeVariants: {
    path: '/google.genomics.v1.VariantServiceV1/MergeVariants',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.MergeVariantsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_MergeVariantsRequest,
    requestDeserialize: deserialize_google_genomics_v1_MergeVariantsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a list of call sets matching the criteria.
  //
  // For the definitions of call sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
  searchCallSets: {
    path: '/google.genomics.v1.VariantServiceV1/SearchCallSets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.SearchCallSetsRequest,
    responseType: google_genomics_v1_variants_pb.SearchCallSetsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchCallSetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchCallSetsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchCallSetsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchCallSetsResponse,
  },
  // Creates a new call set.
  //
  // For the definitions of call sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  createCallSet: {
    path: '/google.genomics.v1.VariantServiceV1/CreateCallSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.CreateCallSetRequest,
    responseType: google_genomics_v1_variants_pb.CallSet,
    requestSerialize: serialize_google_genomics_v1_CreateCallSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_CreateCallSetRequest,
    responseSerialize: serialize_google_genomics_v1_CallSet,
    responseDeserialize: deserialize_google_genomics_v1_CallSet,
  },
  // Updates a call set.
  //
  // For the definitions of call sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // This method supports patch semantics.
  updateCallSet: {
    path: '/google.genomics.v1.VariantServiceV1/UpdateCallSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.UpdateCallSetRequest,
    responseType: google_genomics_v1_variants_pb.CallSet,
    requestSerialize: serialize_google_genomics_v1_UpdateCallSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateCallSetRequest,
    responseSerialize: serialize_google_genomics_v1_CallSet,
    responseDeserialize: deserialize_google_genomics_v1_CallSet,
  },
  // Deletes a call set.
  //
  // For the definitions of call sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  deleteCallSet: {
    path: '/google.genomics.v1.VariantServiceV1/DeleteCallSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.DeleteCallSetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteCallSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteCallSetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a call set by ID.
  //
  // For the definitions of call sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  getCallSet: {
    path: '/google.genomics.v1.VariantServiceV1/GetCallSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_variants_pb.GetCallSetRequest,
    responseType: google_genomics_v1_variants_pb.CallSet,
    requestSerialize: serialize_google_genomics_v1_GetCallSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetCallSetRequest,
    responseSerialize: serialize_google_genomics_v1_CallSet,
    responseDeserialize: deserialize_google_genomics_v1_CallSet,
  },
};

exports.VariantServiceV1Client = grpc.makeGenericClientConstructor(VariantServiceV1Service);
