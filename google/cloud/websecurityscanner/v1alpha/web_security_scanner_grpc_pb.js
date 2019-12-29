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
var google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/web_security_scanner_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_websecurityscanner_v1alpha_crawled_url_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/crawled_url_pb.js');
var google_cloud_websecurityscanner_v1alpha_finding_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/finding_pb.js');
var google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/finding_type_stats_pb.js');
var google_cloud_websecurityscanner_v1alpha_scan_config_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/scan_config_pb.js');
var google_cloud_websecurityscanner_v1alpha_scan_run_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/scan_run_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_websecurityscanner_v1alpha_CreateScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.CreateScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_CreateScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.CreateScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_DeleteScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.DeleteScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_DeleteScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.DeleteScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_Finding(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_finding_pb.Finding)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.Finding');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_Finding(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_GetFindingRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetFindingRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.GetFindingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_GetFindingRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetFindingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_GetScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_GetScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_GetScanRunRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanRunRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.GetScanRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_GetScanRunRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListFindingsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListFindingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListFindingsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListFindingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ScanConfig(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ScanConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ScanConfig(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_ScanRun(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.ScanRun');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_ScanRun(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_StartScanRunRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StartScanRunRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.StartScanRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_StartScanRunRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StartScanRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_StopScanRunRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StopScanRunRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.StopScanRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_StopScanRunRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StopScanRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1alpha_UpdateScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.UpdateScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1alpha_UpdateScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.UpdateScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Cloud Web Security Scanner Service identifies security vulnerabilities in web
// applications hosted on Google Cloud Platform. It crawls your application, and
// attempts to exercise as many user inputs and event handlers as possible.
var WebSecurityScannerService = exports.WebSecurityScannerService = {
  // Creates a new ScanConfig.
  createScanConfig: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/CreateScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.CreateScanConfigRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_CreateScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_CreateScanConfigRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ScanConfig,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ScanConfig,
  },
  // Deletes an existing ScanConfig and its child resources.
  deleteScanConfig: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/DeleteScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.DeleteScanConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_DeleteScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_DeleteScanConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a ScanConfig.
  getScanConfig: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanConfigRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_GetScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_GetScanConfigRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ScanConfig,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ScanConfig,
  },
  // Lists ScanConfigs under a given project.
  listScanConfigs: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListScanConfigsResponse,
  },
  // Updates a ScanConfig. This method support partial update of a ScanConfig.
  updateScanConfig: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/UpdateScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.UpdateScanConfigRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_UpdateScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_UpdateScanConfigRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ScanConfig,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ScanConfig,
  },
  // Start a ScanRun according to the given ScanConfig.
  startScanRun: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StartScanRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StartScanRunRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_StartScanRunRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_StartScanRunRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ScanRun,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ScanRun,
  },
  // Gets a ScanRun.
  getScanRun: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanRunRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_GetScanRunRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_GetScanRunRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ScanRun,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ScanRun,
  },
  // Lists ScanRuns under a given ScanConfig, in descending order of ScanRun
  // stop time.
  listScanRuns: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanRuns',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListScanRunsResponse,
  },
  // Stops a ScanRun. The stopped ScanRun is returned.
  stopScanRun: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StopScanRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StopScanRunRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_StopScanRunRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_StopScanRunRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ScanRun,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ScanRun,
  },
  // List CrawledUrls under a given ScanRun.
  listCrawledUrls: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListCrawledUrls',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListCrawledUrlsResponse,
  },
  // Gets a Finding.
  getFinding: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetFinding',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetFindingRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_GetFindingRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_GetFindingRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_Finding,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_Finding,
  },
  // List Findings under a given ScanRun.
  listFindings: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListFindingsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListFindingsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingsResponse,
  },
  // List all FindingTypeStats under a given ScanRun.
  listFindingTypeStats: {
    path: '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindingTypeStats',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsRequest,
    responseType: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1alpha_ListFindingTypeStatsResponse,
  },
};

exports.WebSecurityScannerClient = grpc.makeGenericClientConstructor(WebSecurityScannerService);
