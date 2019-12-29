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
var google_appengine_v1_appengine_pb = require('../../../google/appengine/v1/appengine_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_appengine_v1_application_pb = require('../../../google/appengine/v1/application_pb.js');
var google_appengine_v1_instance_pb = require('../../../google/appengine/v1/instance_pb.js');
var google_appengine_v1_service_pb = require('../../../google/appengine/v1/service_pb.js');
var google_appengine_v1_version_pb = require('../../../google/appengine/v1/version_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_appengine_v1_Application(arg) {
  if (!(arg instanceof google_appengine_v1_application_pb.Application)) {
    throw new Error('Expected argument of type google.appengine.v1.Application');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_Application(buffer_arg) {
  return google_appengine_v1_application_pb.Application.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_CreateVersionRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.CreateVersionRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.CreateVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_CreateVersionRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.CreateVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_DebugInstanceRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.DebugInstanceRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.DebugInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_DebugInstanceRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.DebugInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_DeleteInstanceRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.DeleteInstanceRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.DeleteInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_DeleteInstanceRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.DeleteInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_DeleteServiceRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.DeleteServiceRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.DeleteServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_DeleteServiceRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.DeleteServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_DeleteVersionRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.DeleteVersionRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.DeleteVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_DeleteVersionRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.DeleteVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_GetApplicationRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.GetApplicationRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.GetApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_GetApplicationRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.GetApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_GetInstanceRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.GetInstanceRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.GetInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_GetInstanceRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.GetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_GetServiceRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.GetServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_GetServiceRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_GetVersionRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.GetVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_GetVersionRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_Instance(arg) {
  if (!(arg instanceof google_appengine_v1_instance_pb.Instance)) {
    throw new Error('Expected argument of type google.appengine.v1.Instance');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_Instance(buffer_arg) {
  return google_appengine_v1_instance_pb.Instance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_ListInstancesRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.ListInstancesRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.ListInstancesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_ListInstancesRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.ListInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_ListInstancesResponse(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.ListInstancesResponse)) {
    throw new Error('Expected argument of type google.appengine.v1.ListInstancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_ListInstancesResponse(buffer_arg) {
  return google_appengine_v1_appengine_pb.ListInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_ListServicesRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.ListServicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_ListServicesRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_ListServicesResponse(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type google.appengine.v1.ListServicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_ListServicesResponse(buffer_arg) {
  return google_appengine_v1_appengine_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_ListVersionsRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.ListVersionsRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.ListVersionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_ListVersionsRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.ListVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_ListVersionsResponse(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.ListVersionsResponse)) {
    throw new Error('Expected argument of type google.appengine.v1.ListVersionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_ListVersionsResponse(buffer_arg) {
  return google_appengine_v1_appengine_pb.ListVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_RepairApplicationRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.RepairApplicationRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.RepairApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_RepairApplicationRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.RepairApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_Service(arg) {
  if (!(arg instanceof google_appengine_v1_service_pb.Service)) {
    throw new Error('Expected argument of type google.appengine.v1.Service');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_Service(buffer_arg) {
  return google_appengine_v1_service_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_UpdateServiceRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.UpdateServiceRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.UpdateServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_UpdateServiceRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.UpdateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_UpdateVersionRequest(arg) {
  if (!(arg instanceof google_appengine_v1_appengine_pb.UpdateVersionRequest)) {
    throw new Error('Expected argument of type google.appengine.v1.UpdateVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_UpdateVersionRequest(buffer_arg) {
  return google_appengine_v1_appengine_pb.UpdateVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_appengine_v1_Version(arg) {
  if (!(arg instanceof google_appengine_v1_version_pb.Version)) {
    throw new Error('Expected argument of type google.appengine.v1.Version');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_appengine_v1_Version(buffer_arg) {
  return google_appengine_v1_version_pb.Version.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages instances of a version.
var InstancesService = exports.InstancesService = {
  // Lists the instances of a version.
  listInstances: {
    path: '/google.appengine.v1.Instances/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.ListInstancesRequest,
    responseType: google_appengine_v1_appengine_pb.ListInstancesResponse,
    requestSerialize: serialize_google_appengine_v1_ListInstancesRequest,
    requestDeserialize: deserialize_google_appengine_v1_ListInstancesRequest,
    responseSerialize: serialize_google_appengine_v1_ListInstancesResponse,
    responseDeserialize: deserialize_google_appengine_v1_ListInstancesResponse,
  },
  // Gets instance information.
  getInstance: {
    path: '/google.appengine.v1.Instances/GetInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.GetInstanceRequest,
    responseType: google_appengine_v1_instance_pb.Instance,
    requestSerialize: serialize_google_appengine_v1_GetInstanceRequest,
    requestDeserialize: deserialize_google_appengine_v1_GetInstanceRequest,
    responseSerialize: serialize_google_appengine_v1_Instance,
    responseDeserialize: deserialize_google_appengine_v1_Instance,
  },
  // Stops a running instance.
  deleteInstance: {
    path: '/google.appengine.v1.Instances/DeleteInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.DeleteInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_DeleteInstanceRequest,
    requestDeserialize: deserialize_google_appengine_v1_DeleteInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Enables debugging on a VM instance. This allows you to use the SSH
  // command to connect to the virtual machine where the instance lives.
  // While in "debug mode", the instance continues to serve live traffic.
  // You should delete the instance when you are done debugging and then
  // allow the system to take over and determine if another instance
  // should be started.
  //
  // Only applicable for instances in App Engine flexible environment.
  debugInstance: {
    path: '/google.appengine.v1.Instances/DebugInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.DebugInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_DebugInstanceRequest,
    requestDeserialize: deserialize_google_appengine_v1_DebugInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.InstancesClient = grpc.makeGenericClientConstructor(InstancesService);
// Manages versions of a service.
var VersionsService = exports.VersionsService = {
  // Lists the versions of a service.
  listVersions: {
    path: '/google.appengine.v1.Versions/ListVersions',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.ListVersionsRequest,
    responseType: google_appengine_v1_appengine_pb.ListVersionsResponse,
    requestSerialize: serialize_google_appengine_v1_ListVersionsRequest,
    requestDeserialize: deserialize_google_appengine_v1_ListVersionsRequest,
    responseSerialize: serialize_google_appengine_v1_ListVersionsResponse,
    responseDeserialize: deserialize_google_appengine_v1_ListVersionsResponse,
  },
  // Gets the specified Version resource.
  // By default, only a `BASIC_VIEW` will be returned.
  // Specify the `FULL_VIEW` parameter to get the full resource.
  getVersion: {
    path: '/google.appengine.v1.Versions/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.GetVersionRequest,
    responseType: google_appengine_v1_version_pb.Version,
    requestSerialize: serialize_google_appengine_v1_GetVersionRequest,
    requestDeserialize: deserialize_google_appengine_v1_GetVersionRequest,
    responseSerialize: serialize_google_appengine_v1_Version,
    responseDeserialize: deserialize_google_appengine_v1_Version,
  },
  // Deploys code and resource files to a new version.
  createVersion: {
    path: '/google.appengine.v1.Versions/CreateVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.CreateVersionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_CreateVersionRequest,
    requestDeserialize: deserialize_google_appengine_v1_CreateVersionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the specified Version resource.
  // You can specify the following fields depending on the App Engine
  // environment and type of scaling that the version resource uses:
  //
  // * [`serving_status`](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status):
  //   For Version resources that use basic scaling, manual scaling, or run in
  //   the App Engine flexible environment.
  // * [`instance_class`](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class):
  //   For Version resources that run in the App Engine standard environment.
  // * [`automatic_scaling.min_idle_instances`](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
  //   For Version resources that use automatic scaling and run in the App
  //   Engine standard environment.
  // * [`automatic_scaling.max_idle_instances`](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
  //   For Version resources that use automatic scaling and run in the App
  //   Engine standard environment.
  updateVersion: {
    path: '/google.appengine.v1.Versions/UpdateVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.UpdateVersionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_UpdateVersionRequest,
    requestDeserialize: deserialize_google_appengine_v1_UpdateVersionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes an existing Version resource.
  deleteVersion: {
    path: '/google.appengine.v1.Versions/DeleteVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.DeleteVersionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_DeleteVersionRequest,
    requestDeserialize: deserialize_google_appengine_v1_DeleteVersionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.VersionsClient = grpc.makeGenericClientConstructor(VersionsService);
// Manages services of an application.
var ServicesService = exports.ServicesService = {
  // Lists all the services in the application.
  listServices: {
    path: '/google.appengine.v1.Services/ListServices',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.ListServicesRequest,
    responseType: google_appengine_v1_appengine_pb.ListServicesResponse,
    requestSerialize: serialize_google_appengine_v1_ListServicesRequest,
    requestDeserialize: deserialize_google_appengine_v1_ListServicesRequest,
    responseSerialize: serialize_google_appengine_v1_ListServicesResponse,
    responseDeserialize: deserialize_google_appengine_v1_ListServicesResponse,
  },
  // Gets the current configuration of the specified service.
  getService: {
    path: '/google.appengine.v1.Services/GetService',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.GetServiceRequest,
    responseType: google_appengine_v1_service_pb.Service,
    requestSerialize: serialize_google_appengine_v1_GetServiceRequest,
    requestDeserialize: deserialize_google_appengine_v1_GetServiceRequest,
    responseSerialize: serialize_google_appengine_v1_Service,
    responseDeserialize: deserialize_google_appengine_v1_Service,
  },
  // Updates the configuration of the specified service.
  updateService: {
    path: '/google.appengine.v1.Services/UpdateService',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.UpdateServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_UpdateServiceRequest,
    requestDeserialize: deserialize_google_appengine_v1_UpdateServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes the specified service and all enclosed versions.
  deleteService: {
    path: '/google.appengine.v1.Services/DeleteService',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.DeleteServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_DeleteServiceRequest,
    requestDeserialize: deserialize_google_appengine_v1_DeleteServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ServicesClient = grpc.makeGenericClientConstructor(ServicesService);
// Manages App Engine applications.
var ApplicationsService = exports.ApplicationsService = {
  // Gets information about an application.
  getApplication: {
    path: '/google.appengine.v1.Applications/GetApplication',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.GetApplicationRequest,
    responseType: google_appengine_v1_application_pb.Application,
    requestSerialize: serialize_google_appengine_v1_GetApplicationRequest,
    requestDeserialize: deserialize_google_appengine_v1_GetApplicationRequest,
    responseSerialize: serialize_google_appengine_v1_Application,
    responseDeserialize: deserialize_google_appengine_v1_Application,
  },
  // Recreates the required App Engine features for the application in your
  // project, for example a Cloud Storage bucket or App Engine service account.
  // Use this method if you receive an error message about a missing feature,
  // for example "*Error retrieving the App Engine service account*".
  repairApplication: {
    path: '/google.appengine.v1.Applications/RepairApplication',
    requestStream: false,
    responseStream: false,
    requestType: google_appengine_v1_appengine_pb.RepairApplicationRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_appengine_v1_RepairApplicationRequest,
    requestDeserialize: deserialize_google_appengine_v1_RepairApplicationRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ApplicationsClient = grpc.makeGenericClientConstructor(ApplicationsService);
