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
var google_cloud_iot_v1_device_manager_pb = require('../../../../google/cloud/iot/v1/device_manager_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_iot_v1_resources_pb = require('../../../../google/cloud/iot/v1/resources_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_cloud_iot_v1_BindDeviceToGatewayRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.BindDeviceToGatewayRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_BindDeviceToGatewayRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_BindDeviceToGatewayResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.BindDeviceToGatewayResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_BindDeviceToGatewayResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_CreateDeviceRegistryRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.CreateDeviceRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_CreateDeviceRegistryRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_CreateDeviceRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.CreateDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_CreateDeviceRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_DeleteDeviceRegistryRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.DeleteDeviceRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_DeleteDeviceRegistryRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_DeleteDeviceRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.DeleteDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_DeleteDeviceRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_Device(arg) {
  if (!(arg instanceof google_cloud_iot_v1_resources_pb.Device)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.Device');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_Device(buffer_arg) {
  return google_cloud_iot_v1_resources_pb.Device.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_DeviceConfig(arg) {
  if (!(arg instanceof google_cloud_iot_v1_resources_pb.DeviceConfig)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.DeviceConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_DeviceConfig(buffer_arg) {
  return google_cloud_iot_v1_resources_pb.DeviceConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_DeviceRegistry(arg) {
  if (!(arg instanceof google_cloud_iot_v1_resources_pb.DeviceRegistry)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.DeviceRegistry');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_DeviceRegistry(buffer_arg) {
  return google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_GetDeviceRegistryRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.GetDeviceRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_GetDeviceRegistryRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_GetDeviceRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.GetDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_GetDeviceRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDeviceConfigVersionsRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDeviceConfigVersionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDeviceConfigVersionsRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDeviceConfigVersionsResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDeviceConfigVersionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDeviceConfigVersionsResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDeviceRegistriesRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDeviceRegistriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDeviceRegistriesRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDeviceRegistriesResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDeviceRegistriesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDeviceRegistriesResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDeviceStatesRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDeviceStatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDeviceStatesRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDeviceStatesResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDeviceStatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDeviceStatesResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDevicesRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDevicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDevicesRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ListDevicesResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ListDevicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ListDevicesResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_ModifyCloudToDeviceConfigRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_ModifyCloudToDeviceConfigRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_SendCommandToDeviceRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.SendCommandToDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_SendCommandToDeviceRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_SendCommandToDeviceResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.SendCommandToDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_SendCommandToDeviceResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_UnbindDeviceFromGatewayRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.UnbindDeviceFromGatewayRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_UnbindDeviceFromGatewayRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_UnbindDeviceFromGatewayResponse(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.UnbindDeviceFromGatewayResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_UnbindDeviceFromGatewayResponse(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_UpdateDeviceRegistryRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.UpdateDeviceRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_UpdateDeviceRegistryRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_iot_v1_UpdateDeviceRequest(arg) {
  if (!(arg instanceof google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest)) {
    throw new Error('Expected argument of type google.cloud.iot.v1.UpdateDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_iot_v1_UpdateDeviceRequest(buffer_arg) {
  return google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Internet of Things (IoT) service. Securely connect and manage IoT devices.
var DeviceManagerService = exports.DeviceManagerService = {
  // Creates a device registry that contains devices.
  createDeviceRegistry: {
    path: '/google.cloud.iot.v1.DeviceManager/CreateDeviceRegistry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest,
    responseType: google_cloud_iot_v1_resources_pb.DeviceRegistry,
    requestSerialize: serialize_google_cloud_iot_v1_CreateDeviceRegistryRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_CreateDeviceRegistryRequest,
    responseSerialize: serialize_google_cloud_iot_v1_DeviceRegistry,
    responseDeserialize: deserialize_google_cloud_iot_v1_DeviceRegistry,
  },
  // Gets a device registry configuration.
  getDeviceRegistry: {
    path: '/google.cloud.iot.v1.DeviceManager/GetDeviceRegistry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest,
    responseType: google_cloud_iot_v1_resources_pb.DeviceRegistry,
    requestSerialize: serialize_google_cloud_iot_v1_GetDeviceRegistryRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_GetDeviceRegistryRequest,
    responseSerialize: serialize_google_cloud_iot_v1_DeviceRegistry,
    responseDeserialize: deserialize_google_cloud_iot_v1_DeviceRegistry,
  },
  // Updates a device registry configuration.
  updateDeviceRegistry: {
    path: '/google.cloud.iot.v1.DeviceManager/UpdateDeviceRegistry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest,
    responseType: google_cloud_iot_v1_resources_pb.DeviceRegistry,
    requestSerialize: serialize_google_cloud_iot_v1_UpdateDeviceRegistryRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_UpdateDeviceRegistryRequest,
    responseSerialize: serialize_google_cloud_iot_v1_DeviceRegistry,
    responseDeserialize: deserialize_google_cloud_iot_v1_DeviceRegistry,
  },
  // Deletes a device registry configuration.
  deleteDeviceRegistry: {
    path: '/google.cloud.iot.v1.DeviceManager/DeleteDeviceRegistry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_iot_v1_DeleteDeviceRegistryRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_DeleteDeviceRegistryRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists device registries.
  listDeviceRegistries: {
    path: '/google.cloud.iot.v1.DeviceManager/ListDeviceRegistries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse,
    requestSerialize: serialize_google_cloud_iot_v1_ListDeviceRegistriesRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_ListDeviceRegistriesRequest,
    responseSerialize: serialize_google_cloud_iot_v1_ListDeviceRegistriesResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_ListDeviceRegistriesResponse,
  },
  // Creates a device in a device registry.
  createDevice: {
    path: '/google.cloud.iot.v1.DeviceManager/CreateDevice',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest,
    responseType: google_cloud_iot_v1_resources_pb.Device,
    requestSerialize: serialize_google_cloud_iot_v1_CreateDeviceRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_CreateDeviceRequest,
    responseSerialize: serialize_google_cloud_iot_v1_Device,
    responseDeserialize: deserialize_google_cloud_iot_v1_Device,
  },
  // Gets details about a device.
  getDevice: {
    path: '/google.cloud.iot.v1.DeviceManager/GetDevice',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.GetDeviceRequest,
    responseType: google_cloud_iot_v1_resources_pb.Device,
    requestSerialize: serialize_google_cloud_iot_v1_GetDeviceRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_GetDeviceRequest,
    responseSerialize: serialize_google_cloud_iot_v1_Device,
    responseDeserialize: deserialize_google_cloud_iot_v1_Device,
  },
  // Updates a device.
  updateDevice: {
    path: '/google.cloud.iot.v1.DeviceManager/UpdateDevice',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest,
    responseType: google_cloud_iot_v1_resources_pb.Device,
    requestSerialize: serialize_google_cloud_iot_v1_UpdateDeviceRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_UpdateDeviceRequest,
    responseSerialize: serialize_google_cloud_iot_v1_Device,
    responseDeserialize: deserialize_google_cloud_iot_v1_Device,
  },
  // Deletes a device.
  deleteDevice: {
    path: '/google.cloud.iot.v1.DeviceManager/DeleteDevice',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_iot_v1_DeleteDeviceRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_DeleteDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List devices in a device registry.
  listDevices: {
    path: '/google.cloud.iot.v1.DeviceManager/ListDevices',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.ListDevicesRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.ListDevicesResponse,
    requestSerialize: serialize_google_cloud_iot_v1_ListDevicesRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_ListDevicesRequest,
    responseSerialize: serialize_google_cloud_iot_v1_ListDevicesResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_ListDevicesResponse,
  },
  // Modifies the configuration for the device, which is eventually sent from
  // the Cloud IoT Core servers. Returns the modified configuration version and
  // its metadata.
  modifyCloudToDeviceConfig: {
    path: '/google.cloud.iot.v1.DeviceManager/ModifyCloudToDeviceConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest,
    responseType: google_cloud_iot_v1_resources_pb.DeviceConfig,
    requestSerialize: serialize_google_cloud_iot_v1_ModifyCloudToDeviceConfigRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_ModifyCloudToDeviceConfigRequest,
    responseSerialize: serialize_google_cloud_iot_v1_DeviceConfig,
    responseDeserialize: deserialize_google_cloud_iot_v1_DeviceConfig,
  },
  // Lists the last few versions of the device configuration in descending
  // order (i.e.: newest first).
  listDeviceConfigVersions: {
    path: '/google.cloud.iot.v1.DeviceManager/ListDeviceConfigVersions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse,
    requestSerialize: serialize_google_cloud_iot_v1_ListDeviceConfigVersionsRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_ListDeviceConfigVersionsRequest,
    responseSerialize: serialize_google_cloud_iot_v1_ListDeviceConfigVersionsResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_ListDeviceConfigVersionsResponse,
  },
  // Lists the last few versions of the device state in descending order (i.e.:
  // newest first).
  listDeviceStates: {
    path: '/google.cloud.iot.v1.DeviceManager/ListDeviceStates',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse,
    requestSerialize: serialize_google_cloud_iot_v1_ListDeviceStatesRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_ListDeviceStatesRequest,
    responseSerialize: serialize_google_cloud_iot_v1_ListDeviceStatesResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_ListDeviceStatesResponse,
  },
  // Sets the access control policy on the specified resource. Replaces any
  // existing policy.
  setIamPolicy: {
    path: '/google.cloud.iot.v1.DeviceManager/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for a resource.
  // Returns an empty policy if the resource exists and does not have a policy
  // set.
  getIamPolicy: {
    path: '/google.cloud.iot.v1.DeviceManager/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on the specified resource.
  // If the resource does not exist, this will return an empty set of
  // permissions, not a NOT_FOUND error.
  testIamPermissions: {
    path: '/google.cloud.iot.v1.DeviceManager/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Sends a command to the specified device. In order for a device to be able
  // to receive commands, it must:
  // 1) be connected to Cloud IoT Core using the MQTT protocol, and
  // 2) be subscribed to the group of MQTT topics specified by
  //    /devices/{device-id}/commands/#. This subscription will receive commands
  //    at the top-level topic /devices/{device-id}/commands as well as commands
  //    for subfolders, like /devices/{device-id}/commands/subfolder.
  //    Note that subscribing to specific subfolders is not supported.
  // If the command could not be delivered to the device, this method will
  // return an error; in particular, if the device is not subscribed, this
  // method will return FAILED_PRECONDITION. Otherwise, this method will
  // return OK. If the subscription is QoS 1, at least once delivery will be
  // guaranteed; for QoS 0, no acknowledgment will be expected from the device.
  sendCommandToDevice: {
    path: '/google.cloud.iot.v1.DeviceManager/SendCommandToDevice',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse,
    requestSerialize: serialize_google_cloud_iot_v1_SendCommandToDeviceRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_SendCommandToDeviceRequest,
    responseSerialize: serialize_google_cloud_iot_v1_SendCommandToDeviceResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_SendCommandToDeviceResponse,
  },
  // Associates the device with the gateway.
  bindDeviceToGateway: {
    path: '/google.cloud.iot.v1.DeviceManager/BindDeviceToGateway',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse,
    requestSerialize: serialize_google_cloud_iot_v1_BindDeviceToGatewayRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_BindDeviceToGatewayRequest,
    responseSerialize: serialize_google_cloud_iot_v1_BindDeviceToGatewayResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_BindDeviceToGatewayResponse,
  },
  // Deletes the association between the device and the gateway.
  unbindDeviceFromGateway: {
    path: '/google.cloud.iot.v1.DeviceManager/UnbindDeviceFromGateway',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest,
    responseType: google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse,
    requestSerialize: serialize_google_cloud_iot_v1_UnbindDeviceFromGatewayRequest,
    requestDeserialize: deserialize_google_cloud_iot_v1_UnbindDeviceFromGatewayRequest,
    responseSerialize: serialize_google_cloud_iot_v1_UnbindDeviceFromGatewayResponse,
    responseDeserialize: deserialize_google_cloud_iot_v1_UnbindDeviceFromGatewayResponse,
  },
};

exports.DeviceManagerClient = grpc.makeGenericClientConstructor(DeviceManagerService);
