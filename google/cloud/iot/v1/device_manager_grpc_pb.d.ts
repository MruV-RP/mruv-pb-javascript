// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.iot.v1
// file: google/cloud/iot/v1/device_manager.proto

import * as google_cloud_iot_v1_device_manager_pb from "../../../../google/cloud/iot/v1/device_manager_pb";
import * as google_cloud_iot_v1_resources_pb from "../../../../google/cloud/iot/v1/resources_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDeviceManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createDeviceRegistry: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest, google_cloud_iot_v1_resources_pb.DeviceRegistry>;
  getDeviceRegistry: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest, google_cloud_iot_v1_resources_pb.DeviceRegistry>;
  updateDeviceRegistry: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest, google_cloud_iot_v1_resources_pb.DeviceRegistry>;
  deleteDeviceRegistry: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest, google_protobuf_empty_pb.Empty>;
  listDeviceRegistries: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest, google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse>;
  createDevice: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest, google_cloud_iot_v1_resources_pb.Device>;
  getDevice: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.GetDeviceRequest, google_cloud_iot_v1_resources_pb.Device>;
  updateDevice: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest, google_cloud_iot_v1_resources_pb.Device>;
  deleteDevice: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest, google_protobuf_empty_pb.Empty>;
  listDevices: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.ListDevicesRequest, google_cloud_iot_v1_device_manager_pb.ListDevicesResponse>;
  modifyCloudToDeviceConfig: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest, google_cloud_iot_v1_resources_pb.DeviceConfig>;
  listDeviceConfigVersions: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest, google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse>;
  listDeviceStates: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest, google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  sendCommandToDevice: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest, google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse>;
  bindDeviceToGateway: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest, google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse>;
  unbindDeviceFromGateway: grpc.MethodDefinition<google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest, google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse>;
}

export const DeviceManagerService: IDeviceManagerService;

export class DeviceManagerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  createDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  createDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  getDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  getDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  getDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  updateDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  updateDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  updateDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceRegistry>): grpc.ClientUnaryCall;
  deleteDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDeviceRegistry(argument: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listDeviceRegistries(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse>): grpc.ClientUnaryCall;
  listDeviceRegistries(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse>): grpc.ClientUnaryCall;
  listDeviceRegistries(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse>): grpc.ClientUnaryCall;
  createDevice(argument: google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  createDevice(argument: google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  createDevice(argument: google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  getDevice(argument: google_cloud_iot_v1_device_manager_pb.GetDeviceRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  getDevice(argument: google_cloud_iot_v1_device_manager_pb.GetDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  getDevice(argument: google_cloud_iot_v1_device_manager_pb.GetDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  updateDevice(argument: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  updateDevice(argument: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  updateDevice(argument: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.Device>): grpc.ClientUnaryCall;
  deleteDevice(argument: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDevice(argument: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDevice(argument: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listDevices(argument: google_cloud_iot_v1_device_manager_pb.ListDevicesRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDevicesResponse>): grpc.ClientUnaryCall;
  listDevices(argument: google_cloud_iot_v1_device_manager_pb.ListDevicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDevicesResponse>): grpc.ClientUnaryCall;
  listDevices(argument: google_cloud_iot_v1_device_manager_pb.ListDevicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDevicesResponse>): grpc.ClientUnaryCall;
  modifyCloudToDeviceConfig(argument: google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceConfig>): grpc.ClientUnaryCall;
  modifyCloudToDeviceConfig(argument: google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceConfig>): grpc.ClientUnaryCall;
  modifyCloudToDeviceConfig(argument: google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_resources_pb.DeviceConfig>): grpc.ClientUnaryCall;
  listDeviceConfigVersions(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse>): grpc.ClientUnaryCall;
  listDeviceConfigVersions(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse>): grpc.ClientUnaryCall;
  listDeviceConfigVersions(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse>): grpc.ClientUnaryCall;
  listDeviceStates(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse>): grpc.ClientUnaryCall;
  listDeviceStates(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse>): grpc.ClientUnaryCall;
  listDeviceStates(argument: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  sendCommandToDevice(argument: google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse>): grpc.ClientUnaryCall;
  sendCommandToDevice(argument: google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse>): grpc.ClientUnaryCall;
  sendCommandToDevice(argument: google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.SendCommandToDeviceResponse>): grpc.ClientUnaryCall;
  bindDeviceToGateway(argument: google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse>): grpc.ClientUnaryCall;
  bindDeviceToGateway(argument: google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse>): grpc.ClientUnaryCall;
  bindDeviceToGateway(argument: google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.BindDeviceToGatewayResponse>): grpc.ClientUnaryCall;
  unbindDeviceFromGateway(argument: google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse>): grpc.ClientUnaryCall;
  unbindDeviceFromGateway(argument: google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse>): grpc.ClientUnaryCall;
  unbindDeviceFromGateway(argument: google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_iot_v1_device_manager_pb.UnbindDeviceFromGatewayResponse>): grpc.ClientUnaryCall;
}
