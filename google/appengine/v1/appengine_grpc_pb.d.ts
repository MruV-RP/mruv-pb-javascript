// GENERATED CODE -- DO NOT EDIT!

// package: google.appengine.v1
// file: google/appengine/v1/appengine.proto

import * as google_appengine_v1_appengine_pb from "../../../google/appengine/v1/appengine_pb";
import * as google_appengine_v1_application_pb from "../../../google/appengine/v1/application_pb";
import * as google_appengine_v1_instance_pb from "../../../google/appengine/v1/instance_pb";
import * as google_appengine_v1_service_pb from "../../../google/appengine/v1/service_pb";
import * as google_appengine_v1_version_pb from "../../../google/appengine/v1/version_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IInstancesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listInstances: grpc.MethodDefinition<google_appengine_v1_appengine_pb.ListInstancesRequest, google_appengine_v1_appengine_pb.ListInstancesResponse>;
  getInstance: grpc.MethodDefinition<google_appengine_v1_appengine_pb.GetInstanceRequest, google_appengine_v1_instance_pb.Instance>;
  deleteInstance: grpc.MethodDefinition<google_appengine_v1_appengine_pb.DeleteInstanceRequest, google_longrunning_operations_pb.Operation>;
  debugInstance: grpc.MethodDefinition<google_appengine_v1_appengine_pb.DebugInstanceRequest, google_longrunning_operations_pb.Operation>;
}

export const InstancesService: IInstancesService;

export class InstancesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listInstances(argument: google_appengine_v1_appengine_pb.ListInstancesRequest, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_appengine_v1_appengine_pb.ListInstancesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_appengine_v1_appengine_pb.ListInstancesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  getInstance(argument: google_appengine_v1_appengine_pb.GetInstanceRequest, callback: grpc.requestCallback<google_appengine_v1_instance_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_appengine_v1_appengine_pb.GetInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_instance_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_appengine_v1_appengine_pb.GetInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_instance_pb.Instance>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_appengine_v1_appengine_pb.DeleteInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_appengine_v1_appengine_pb.DeleteInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_appengine_v1_appengine_pb.DeleteInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  debugInstance(argument: google_appengine_v1_appengine_pb.DebugInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  debugInstance(argument: google_appengine_v1_appengine_pb.DebugInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  debugInstance(argument: google_appengine_v1_appengine_pb.DebugInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}

interface IVersionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listVersions: grpc.MethodDefinition<google_appengine_v1_appengine_pb.ListVersionsRequest, google_appengine_v1_appengine_pb.ListVersionsResponse>;
  getVersion: grpc.MethodDefinition<google_appengine_v1_appengine_pb.GetVersionRequest, google_appengine_v1_version_pb.Version>;
  createVersion: grpc.MethodDefinition<google_appengine_v1_appengine_pb.CreateVersionRequest, google_longrunning_operations_pb.Operation>;
  updateVersion: grpc.MethodDefinition<google_appengine_v1_appengine_pb.UpdateVersionRequest, google_longrunning_operations_pb.Operation>;
  deleteVersion: grpc.MethodDefinition<google_appengine_v1_appengine_pb.DeleteVersionRequest, google_longrunning_operations_pb.Operation>;
}

export const VersionsService: IVersionsService;

export class VersionsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listVersions(argument: google_appengine_v1_appengine_pb.ListVersionsRequest, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListVersionsResponse>): grpc.ClientUnaryCall;
  listVersions(argument: google_appengine_v1_appengine_pb.ListVersionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListVersionsResponse>): grpc.ClientUnaryCall;
  listVersions(argument: google_appengine_v1_appengine_pb.ListVersionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListVersionsResponse>): grpc.ClientUnaryCall;
  getVersion(argument: google_appengine_v1_appengine_pb.GetVersionRequest, callback: grpc.requestCallback<google_appengine_v1_version_pb.Version>): grpc.ClientUnaryCall;
  getVersion(argument: google_appengine_v1_appengine_pb.GetVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_version_pb.Version>): grpc.ClientUnaryCall;
  getVersion(argument: google_appengine_v1_appengine_pb.GetVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_version_pb.Version>): grpc.ClientUnaryCall;
  createVersion(argument: google_appengine_v1_appengine_pb.CreateVersionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createVersion(argument: google_appengine_v1_appengine_pb.CreateVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createVersion(argument: google_appengine_v1_appengine_pb.CreateVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateVersion(argument: google_appengine_v1_appengine_pb.UpdateVersionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateVersion(argument: google_appengine_v1_appengine_pb.UpdateVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateVersion(argument: google_appengine_v1_appengine_pb.UpdateVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteVersion(argument: google_appengine_v1_appengine_pb.DeleteVersionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteVersion(argument: google_appengine_v1_appengine_pb.DeleteVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteVersion(argument: google_appengine_v1_appengine_pb.DeleteVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}

interface IServicesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listServices: grpc.MethodDefinition<google_appengine_v1_appengine_pb.ListServicesRequest, google_appengine_v1_appengine_pb.ListServicesResponse>;
  getService: grpc.MethodDefinition<google_appengine_v1_appengine_pb.GetServiceRequest, google_appengine_v1_service_pb.Service>;
  updateService: grpc.MethodDefinition<google_appengine_v1_appengine_pb.UpdateServiceRequest, google_longrunning_operations_pb.Operation>;
  deleteService: grpc.MethodDefinition<google_appengine_v1_appengine_pb.DeleteServiceRequest, google_longrunning_operations_pb.Operation>;
}

export const ServicesService: IServicesService;

export class ServicesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listServices(argument: google_appengine_v1_appengine_pb.ListServicesRequest, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_appengine_v1_appengine_pb.ListServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_appengine_v1_appengine_pb.ListServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_appengine_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  getService(argument: google_appengine_v1_appengine_pb.GetServiceRequest, callback: grpc.requestCallback<google_appengine_v1_service_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_appengine_v1_appengine_pb.GetServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_service_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_appengine_v1_appengine_pb.GetServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_service_pb.Service>): grpc.ClientUnaryCall;
  updateService(argument: google_appengine_v1_appengine_pb.UpdateServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateService(argument: google_appengine_v1_appengine_pb.UpdateServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateService(argument: google_appengine_v1_appengine_pb.UpdateServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteService(argument: google_appengine_v1_appengine_pb.DeleteServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteService(argument: google_appengine_v1_appengine_pb.DeleteServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteService(argument: google_appengine_v1_appengine_pb.DeleteServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}

interface IApplicationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getApplication: grpc.MethodDefinition<google_appengine_v1_appengine_pb.GetApplicationRequest, google_appengine_v1_application_pb.Application>;
  repairApplication: grpc.MethodDefinition<google_appengine_v1_appengine_pb.RepairApplicationRequest, google_longrunning_operations_pb.Operation>;
}

export const ApplicationsService: IApplicationsService;

export class ApplicationsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getApplication(argument: google_appengine_v1_appengine_pb.GetApplicationRequest, callback: grpc.requestCallback<google_appengine_v1_application_pb.Application>): grpc.ClientUnaryCall;
  getApplication(argument: google_appengine_v1_appengine_pb.GetApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_application_pb.Application>): grpc.ClientUnaryCall;
  getApplication(argument: google_appengine_v1_appengine_pb.GetApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_appengine_v1_application_pb.Application>): grpc.ClientUnaryCall;
  repairApplication(argument: google_appengine_v1_appengine_pb.RepairApplicationRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  repairApplication(argument: google_appengine_v1_appengine_pb.RepairApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  repairApplication(argument: google_appengine_v1_appengine_pb.RepairApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
