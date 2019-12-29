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
var google_genomics_v1_reads_pb = require('../../../google/genomics/v1/reads_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_genomics_v1_range_pb = require('../../../google/genomics/v1/range_pb.js');
var google_genomics_v1_readalignment_pb = require('../../../google/genomics/v1/readalignment_pb.js');
var google_genomics_v1_readgroupset_pb = require('../../../google/genomics/v1/readgroupset_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_genomics_v1_DeleteReadGroupSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.DeleteReadGroupSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteReadGroupSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteReadGroupSetRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.DeleteReadGroupSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ExportReadGroupSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.ExportReadGroupSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ExportReadGroupSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ExportReadGroupSetRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.ExportReadGroupSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetReadGroupSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.GetReadGroupSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetReadGroupSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetReadGroupSetRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.GetReadGroupSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ImportReadGroupSetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.ImportReadGroupSetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ImportReadGroupSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ImportReadGroupSetsRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.ImportReadGroupSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ListCoverageBucketsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.ListCoverageBucketsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ListCoverageBucketsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ListCoverageBucketsRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.ListCoverageBucketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ListCoverageBucketsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.ListCoverageBucketsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.ListCoverageBucketsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ListCoverageBucketsResponse(buffer_arg) {
  return google_genomics_v1_reads_pb.ListCoverageBucketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ReadGroupSet(arg) {
  if (!(arg instanceof google_genomics_v1_readgroupset_pb.ReadGroupSet)) {
    throw new Error('Expected argument of type google.genomics.v1.ReadGroupSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ReadGroupSet(buffer_arg) {
  return google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReadGroupSetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.SearchReadGroupSetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReadGroupSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReadGroupSetsRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.SearchReadGroupSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReadGroupSetsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.SearchReadGroupSetsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReadGroupSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReadGroupSetsResponse(buffer_arg) {
  return google_genomics_v1_reads_pb.SearchReadGroupSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReadsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.SearchReadsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReadsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReadsRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.SearchReadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_SearchReadsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.SearchReadsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.SearchReadsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_SearchReadsResponse(buffer_arg) {
  return google_genomics_v1_reads_pb.SearchReadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_StreamReadsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.StreamReadsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.StreamReadsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_StreamReadsRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.StreamReadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_StreamReadsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.StreamReadsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.StreamReadsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_StreamReadsResponse(buffer_arg) {
  return google_genomics_v1_reads_pb.StreamReadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateReadGroupSetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_reads_pb.UpdateReadGroupSetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateReadGroupSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateReadGroupSetRequest(buffer_arg) {
  return google_genomics_v1_reads_pb.UpdateReadGroupSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var StreamingReadServiceService = exports.StreamingReadServiceService = {
  // Returns a stream of all the reads matching the search request, ordered
  // by reference name, position, and ID.
  streamReads: {
    path: '/google.genomics.v1.StreamingReadService/StreamReads',
    requestStream: false,
    responseStream: true,
    requestType: google_genomics_v1_reads_pb.StreamReadsRequest,
    responseType: google_genomics_v1_reads_pb.StreamReadsResponse,
    requestSerialize: serialize_google_genomics_v1_StreamReadsRequest,
    requestDeserialize: deserialize_google_genomics_v1_StreamReadsRequest,
    responseSerialize: serialize_google_genomics_v1_StreamReadsResponse,
    responseDeserialize: deserialize_google_genomics_v1_StreamReadsResponse,
  },
};

exports.StreamingReadServiceClient = grpc.makeGenericClientConstructor(StreamingReadServiceService);
// The Readstore. A data store for DNA sequencing Reads.
var ReadServiceV1Service = exports.ReadServiceV1Service = {
  // Creates read group sets by asynchronously importing the provided
  // information.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // The caller must have WRITE permissions to the dataset.
  //
  // ## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import
  //
  // - Tags will be converted to strings - tag types are not preserved
  // - Comments (`@CO`) in the input file header will not be preserved
  // - Original header order of references (`@SQ`) will not be preserved
  // - Any reverse stranded unmapped reads will be reverse complemented, and
  // their qualities (also the "BQ" and "OQ" tags, if any) will be reversed
  // - Unmapped reads will be stripped of positional information (reference name
  // and position)
  importReadGroupSets: {
    path: '/google.genomics.v1.ReadServiceV1/ImportReadGroupSets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.ImportReadGroupSetsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_genomics_v1_ImportReadGroupSetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_ImportReadGroupSetsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Exports a read group set to a BAM file in Google Cloud Storage.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Note that currently there may be some differences between exported BAM
  // files and the original BAM file at the time of import. See
  // [ImportReadGroupSets][google.genomics.v1.ReadServiceV1.ImportReadGroupSets]
  // for caveats.
  exportReadGroupSet: {
    path: '/google.genomics.v1.ReadServiceV1/ExportReadGroupSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.ExportReadGroupSetRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_genomics_v1_ExportReadGroupSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_ExportReadGroupSetRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Searches for read group sets matching the criteria.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Implements
  // [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
  searchReadGroupSets: {
    path: '/google.genomics.v1.ReadServiceV1/SearchReadGroupSets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.SearchReadGroupSetsRequest,
    responseType: google_genomics_v1_reads_pb.SearchReadGroupSetsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchReadGroupSetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchReadGroupSetsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchReadGroupSetsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchReadGroupSetsResponse,
  },
  // Updates a read group set.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // This method supports patch semantics.
  updateReadGroupSet: {
    path: '/google.genomics.v1.ReadServiceV1/UpdateReadGroupSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.UpdateReadGroupSetRequest,
    responseType: google_genomics_v1_readgroupset_pb.ReadGroupSet,
    requestSerialize: serialize_google_genomics_v1_UpdateReadGroupSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateReadGroupSetRequest,
    responseSerialize: serialize_google_genomics_v1_ReadGroupSet,
    responseDeserialize: deserialize_google_genomics_v1_ReadGroupSet,
  },
  // Deletes a read group set.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  deleteReadGroupSet: {
    path: '/google.genomics.v1.ReadServiceV1/DeleteReadGroupSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.DeleteReadGroupSetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteReadGroupSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteReadGroupSetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a read group set by ID.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  getReadGroupSet: {
    path: '/google.genomics.v1.ReadServiceV1/GetReadGroupSet',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.GetReadGroupSetRequest,
    responseType: google_genomics_v1_readgroupset_pb.ReadGroupSet,
    requestSerialize: serialize_google_genomics_v1_GetReadGroupSetRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetReadGroupSetRequest,
    responseSerialize: serialize_google_genomics_v1_ReadGroupSet,
    responseDeserialize: deserialize_google_genomics_v1_ReadGroupSet,
  },
  // Lists fixed width coverage buckets for a read group set, each of which
  // correspond to a range of a reference sequence. Each bucket summarizes
  // coverage information across its corresponding genomic range.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Coverage is defined as the number of reads which are aligned to a given
  // base in the reference sequence. Coverage buckets are available at several
  // precomputed bucket widths, enabling retrieval of various coverage 'zoom
  // levels'. The caller must have READ permissions for the target read group
  // set.
  listCoverageBuckets: {
    path: '/google.genomics.v1.ReadServiceV1/ListCoverageBuckets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.ListCoverageBucketsRequest,
    responseType: google_genomics_v1_reads_pb.ListCoverageBucketsResponse,
    requestSerialize: serialize_google_genomics_v1_ListCoverageBucketsRequest,
    requestDeserialize: deserialize_google_genomics_v1_ListCoverageBucketsRequest,
    responseSerialize: serialize_google_genomics_v1_ListCoverageBucketsResponse,
    responseDeserialize: deserialize_google_genomics_v1_ListCoverageBucketsResponse,
  },
  // Gets a list of reads for one or more read group sets.
  //
  // For the definitions of read group sets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // Reads search operates over a genomic coordinate space of reference sequence
  // & position defined over the reference sequences to which the requested
  // read group sets are aligned.
  //
  // If a target positional range is specified, search returns all reads whose
  // alignment to the reference genome overlap the range. A query which
  // specifies only read group set IDs yields all reads in those read group
  // sets, including unmapped reads.
  //
  // All reads returned (including reads on subsequent pages) are ordered by
  // genomic coordinate (by reference sequence, then position). Reads with
  // equivalent genomic coordinates are returned in an unspecified order. This
  // order is consistent, such that two queries for the same content (regardless
  // of page size) yield reads in the same order across their respective streams
  // of paginated responses.
  //
  // Implements
  // [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
  searchReads: {
    path: '/google.genomics.v1.ReadServiceV1/SearchReads',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_reads_pb.SearchReadsRequest,
    responseType: google_genomics_v1_reads_pb.SearchReadsResponse,
    requestSerialize: serialize_google_genomics_v1_SearchReadsRequest,
    requestDeserialize: deserialize_google_genomics_v1_SearchReadsRequest,
    responseSerialize: serialize_google_genomics_v1_SearchReadsResponse,
    responseDeserialize: deserialize_google_genomics_v1_SearchReadsResponse,
  },
};

exports.ReadServiceV1Client = grpc.makeGenericClientConstructor(ReadServiceV1Service);
