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
var google_monitoring_v3_service_service_pb = require('../../../google/monitoring/v3/service_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js');
var google_monitoring_v3_service_pb = require('../../../google/monitoring/v3/service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_monitoring_v3_CreateServiceLevelObjectiveRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateServiceLevelObjectiveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateServiceLevelObjectiveRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_CreateServiceRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.CreateServiceRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateServiceRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.CreateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteServiceLevelObjectiveRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteServiceLevelObjectiveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteServiceLevelObjectiveRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteServiceRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.DeleteServiceRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteServiceRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.DeleteServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetServiceLevelObjectiveRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetServiceLevelObjectiveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetServiceLevelObjectiveRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetServiceRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetServiceRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListServiceLevelObjectivesRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListServiceLevelObjectivesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListServiceLevelObjectivesRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListServiceLevelObjectivesResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListServiceLevelObjectivesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListServiceLevelObjectivesResponse(buffer_arg) {
  return google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListServicesRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListServicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListServicesRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListServicesResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListServicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListServicesResponse(buffer_arg) {
  return google_monitoring_v3_service_service_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_Service(arg) {
  if (!(arg instanceof google_monitoring_v3_service_pb.Service)) {
    throw new Error('Expected argument of type google.monitoring.v3.Service');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_Service(buffer_arg) {
  return google_monitoring_v3_service_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ServiceLevelObjective(arg) {
  if (!(arg instanceof google_monitoring_v3_service_pb.ServiceLevelObjective)) {
    throw new Error('Expected argument of type google.monitoring.v3.ServiceLevelObjective');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ServiceLevelObjective(buffer_arg) {
  return google_monitoring_v3_service_pb.ServiceLevelObjective.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UpdateServiceLevelObjectiveRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.UpdateServiceLevelObjectiveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UpdateServiceLevelObjectiveRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UpdateServiceRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_service_service_pb.UpdateServiceRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.UpdateServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UpdateServiceRequest(buffer_arg) {
  return google_monitoring_v3_service_service_pb.UpdateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Stackdriver Monitoring Service-Oriented Monitoring API has endpoints for
// managing and querying aspects of a workspace's services. These include the
// `Service`'s monitored resources, its Service-Level Objectives, and a taxonomy
// of categorized Health Metrics.
var ServiceMonitoringServiceService = exports.ServiceMonitoringServiceService = {
  // Create a `Service`.
  createService: {
    path: '/google.monitoring.v3.ServiceMonitoringService/CreateService',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.CreateServiceRequest,
    responseType: google_monitoring_v3_service_pb.Service,
    requestSerialize: serialize_google_monitoring_v3_CreateServiceRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateServiceRequest,
    responseSerialize: serialize_google_monitoring_v3_Service,
    responseDeserialize: deserialize_google_monitoring_v3_Service,
  },
  // Get the named `Service`.
  getService: {
    path: '/google.monitoring.v3.ServiceMonitoringService/GetService',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.GetServiceRequest,
    responseType: google_monitoring_v3_service_pb.Service,
    requestSerialize: serialize_google_monitoring_v3_GetServiceRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetServiceRequest,
    responseSerialize: serialize_google_monitoring_v3_Service,
    responseDeserialize: deserialize_google_monitoring_v3_Service,
  },
  // List `Service`s for this workspace.
  listServices: {
    path: '/google.monitoring.v3.ServiceMonitoringService/ListServices',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.ListServicesRequest,
    responseType: google_monitoring_v3_service_service_pb.ListServicesResponse,
    requestSerialize: serialize_google_monitoring_v3_ListServicesRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListServicesRequest,
    responseSerialize: serialize_google_monitoring_v3_ListServicesResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListServicesResponse,
  },
  // Update this `Service`.
  updateService: {
    path: '/google.monitoring.v3.ServiceMonitoringService/UpdateService',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.UpdateServiceRequest,
    responseType: google_monitoring_v3_service_pb.Service,
    requestSerialize: serialize_google_monitoring_v3_UpdateServiceRequest,
    requestDeserialize: deserialize_google_monitoring_v3_UpdateServiceRequest,
    responseSerialize: serialize_google_monitoring_v3_Service,
    responseDeserialize: deserialize_google_monitoring_v3_Service,
  },
  // Soft delete this `Service`.
  deleteService: {
    path: '/google.monitoring.v3.ServiceMonitoringService/DeleteService',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.DeleteServiceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteServiceRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteServiceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Create a `ServiceLevelObjective` for the given `Service`.
  createServiceLevelObjective: {
    path: '/google.monitoring.v3.ServiceMonitoringService/CreateServiceLevelObjective',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest,
    responseType: google_monitoring_v3_service_pb.ServiceLevelObjective,
    requestSerialize: serialize_google_monitoring_v3_CreateServiceLevelObjectiveRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateServiceLevelObjectiveRequest,
    responseSerialize: serialize_google_monitoring_v3_ServiceLevelObjective,
    responseDeserialize: deserialize_google_monitoring_v3_ServiceLevelObjective,
  },
  // Get a `ServiceLevelObjective` by name.
  getServiceLevelObjective: {
    path: '/google.monitoring.v3.ServiceMonitoringService/GetServiceLevelObjective',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest,
    responseType: google_monitoring_v3_service_pb.ServiceLevelObjective,
    requestSerialize: serialize_google_monitoring_v3_GetServiceLevelObjectiveRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetServiceLevelObjectiveRequest,
    responseSerialize: serialize_google_monitoring_v3_ServiceLevelObjective,
    responseDeserialize: deserialize_google_monitoring_v3_ServiceLevelObjective,
  },
  // List the `ServiceLevelObjective`s for the given `Service`.
  listServiceLevelObjectives: {
    path: '/google.monitoring.v3.ServiceMonitoringService/ListServiceLevelObjectives',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest,
    responseType: google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse,
    requestSerialize: serialize_google_monitoring_v3_ListServiceLevelObjectivesRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListServiceLevelObjectivesRequest,
    responseSerialize: serialize_google_monitoring_v3_ListServiceLevelObjectivesResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListServiceLevelObjectivesResponse,
  },
  // Update the given `ServiceLevelObjective`.
  updateServiceLevelObjective: {
    path: '/google.monitoring.v3.ServiceMonitoringService/UpdateServiceLevelObjective',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest,
    responseType: google_monitoring_v3_service_pb.ServiceLevelObjective,
    requestSerialize: serialize_google_monitoring_v3_UpdateServiceLevelObjectiveRequest,
    requestDeserialize: deserialize_google_monitoring_v3_UpdateServiceLevelObjectiveRequest,
    responseSerialize: serialize_google_monitoring_v3_ServiceLevelObjective,
    responseDeserialize: deserialize_google_monitoring_v3_ServiceLevelObjective,
  },
  // Delete the given `ServiceLevelObjective`.
  deleteServiceLevelObjective: {
    path: '/google.monitoring.v3.ServiceMonitoringService/DeleteServiceLevelObjective',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteServiceLevelObjectiveRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteServiceLevelObjectiveRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ServiceMonitoringServiceClient = grpc.makeGenericClientConstructor(ServiceMonitoringServiceService);
