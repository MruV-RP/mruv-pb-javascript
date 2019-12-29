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
var google_cloud_websecurityscanner_v1beta_web_security_scanner_pb = require('../../../../google/cloud/websecurityscanner/v1beta/web_security_scanner_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_websecurityscanner_v1beta_crawled_url_pb = require('../../../../google/cloud/websecurityscanner/v1beta/crawled_url_pb.js');
var google_cloud_websecurityscanner_v1beta_finding_pb = require('../../../../google/cloud/websecurityscanner/v1beta/finding_pb.js');
var google_cloud_websecurityscanner_v1beta_finding_type_stats_pb = require('../../../../google/cloud/websecurityscanner/v1beta/finding_type_stats_pb.js');
var google_cloud_websecurityscanner_v1beta_scan_config_pb = require('../../../../google/cloud/websecurityscanner/v1beta/scan_config_pb.js');
var google_cloud_websecurityscanner_v1beta_scan_run_pb = require('../../../../google/cloud/websecurityscanner/v1beta/scan_run_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_websecurityscanner_v1beta_CreateScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_CreateScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_DeleteScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_DeleteScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_Finding(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_finding_pb.Finding)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.Finding');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_Finding(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_finding_pb.Finding.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_GetFindingRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.GetFindingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_GetFindingRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_GetScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.GetScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_GetScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_GetScanRunRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.GetScanRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_GetScanRunRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListFindingsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListFindingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListFindingsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListFindingsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListFindingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListFindingsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListScanRunsRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListScanRunsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListScanRunsRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ListScanRunsResponse(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ListScanRunsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ListScanRunsResponse(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ScanConfig(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ScanConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ScanConfig(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_ScanRun(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.ScanRun');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_ScanRun(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_StartScanRunRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.StartScanRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_StartScanRunRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_StopScanRunRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.StopScanRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_StopScanRunRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_websecurityscanner_v1beta_UpdateScanConfigRequest(arg) {
  if (!(arg instanceof google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_websecurityscanner_v1beta_UpdateScanConfigRequest(buffer_arg) {
  return google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/CreateScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest,
    responseType: google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_CreateScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_CreateScanConfigRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ScanConfig,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ScanConfig,
  },
  // Deletes an existing ScanConfig and its child resources.
  deleteScanConfig: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/DeleteScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_DeleteScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_DeleteScanConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a ScanConfig.
  getScanConfig: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/GetScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest,
    responseType: google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_GetScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_GetScanConfigRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ScanConfig,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ScanConfig,
  },
  // Lists ScanConfigs under a given project.
  listScanConfigs: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/ListScanConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest,
    responseType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListScanConfigsResponse,
  },
  // Updates a ScanConfig. This method support partial update of a ScanConfig.
  updateScanConfig: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/UpdateScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest,
    responseType: google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_UpdateScanConfigRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_UpdateScanConfigRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ScanConfig,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ScanConfig,
  },
  // Start a ScanRun according to the given ScanConfig.
  startScanRun: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/StartScanRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest,
    responseType: google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_StartScanRunRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_StartScanRunRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ScanRun,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ScanRun,
  },
  // Gets a ScanRun.
  getScanRun: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/GetScanRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest,
    responseType: google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_GetScanRunRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_GetScanRunRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ScanRun,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ScanRun,
  },
  // Lists ScanRuns under a given ScanConfig, in descending order of ScanRun
  // stop time.
  listScanRuns: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/ListScanRuns',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest,
    responseType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListScanRunsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListScanRunsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListScanRunsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListScanRunsResponse,
  },
  // Stops a ScanRun. The stopped ScanRun is returned.
  stopScanRun: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/StopScanRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest,
    responseType: google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_StopScanRunRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_StopScanRunRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ScanRun,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ScanRun,
  },
  // List CrawledUrls under a given ScanRun.
  listCrawledUrls: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/ListCrawledUrls',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest,
    responseType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListCrawledUrlsResponse,
  },
  // Gets a Finding.
  getFinding: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/GetFinding',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest,
    responseType: google_cloud_websecurityscanner_v1beta_finding_pb.Finding,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_GetFindingRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_GetFindingRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_Finding,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_Finding,
  },
  // List Findings under a given ScanRun.
  listFindings: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/ListFindings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest,
    responseType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListFindingsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListFindingsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListFindingsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListFindingsResponse,
  },
  // List all FindingTypeStats under a given ScanRun.
  listFindingTypeStats: {
    path: '/google.cloud.websecurityscanner.v1beta.WebSecurityScanner/ListFindingTypeStats',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest,
    responseType: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse,
    requestSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsRequest,
    requestDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsRequest,
    responseSerialize: serialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsResponse,
    responseDeserialize: deserialize_google_cloud_websecurityscanner_v1beta_ListFindingTypeStatsResponse,
  },
};

exports.WebSecurityScannerClient = grpc.makeGenericClientConstructor(WebSecurityScannerService);
