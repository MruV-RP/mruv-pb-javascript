// GENERATED CODE -- DO NOT EDIT!

// package: google.monitoring.v3
// file: google/monitoring/v3/service_service.proto

import * as google_monitoring_v3_service_service_pb from "../../../google/monitoring/v3/service_service_pb";
import * as google_monitoring_v3_service_pb from "../../../google/monitoring/v3/service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IServiceMonitoringServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createService: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.CreateServiceRequest, google_monitoring_v3_service_pb.Service>;
  getService: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.GetServiceRequest, google_monitoring_v3_service_pb.Service>;
  listServices: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.ListServicesRequest, google_monitoring_v3_service_service_pb.ListServicesResponse>;
  updateService: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.UpdateServiceRequest, google_monitoring_v3_service_pb.Service>;
  deleteService: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.DeleteServiceRequest, google_protobuf_empty_pb.Empty>;
  createServiceLevelObjective: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest, google_monitoring_v3_service_pb.ServiceLevelObjective>;
  getServiceLevelObjective: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest, google_monitoring_v3_service_pb.ServiceLevelObjective>;
  listServiceLevelObjectives: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest, google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse>;
  updateServiceLevelObjective: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest, google_monitoring_v3_service_pb.ServiceLevelObjective>;
  deleteServiceLevelObjective: grpc.MethodDefinition<google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest, google_protobuf_empty_pb.Empty>;
}

export const ServiceMonitoringServiceService: IServiceMonitoringServiceService;

export class ServiceMonitoringServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createService(argument: google_monitoring_v3_service_service_pb.CreateServiceRequest, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  createService(argument: google_monitoring_v3_service_service_pb.CreateServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  createService(argument: google_monitoring_v3_service_service_pb.CreateServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_monitoring_v3_service_service_pb.GetServiceRequest, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_monitoring_v3_service_service_pb.GetServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_monitoring_v3_service_service_pb.GetServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  listServices(argument: google_monitoring_v3_service_service_pb.ListServicesRequest, callback: grpc.requestCallback<google_monitoring_v3_service_service_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_monitoring_v3_service_service_pb.ListServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_service_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_monitoring_v3_service_service_pb.ListServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_service_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  updateService(argument: google_monitoring_v3_service_service_pb.UpdateServiceRequest, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  updateService(argument: google_monitoring_v3_service_service_pb.UpdateServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  updateService(argument: google_monitoring_v3_service_service_pb.UpdateServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.Service>): grpc.ClientUnaryCall;
  deleteService(argument: google_monitoring_v3_service_service_pb.DeleteServiceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteService(argument: google_monitoring_v3_service_service_pb.DeleteServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteService(argument: google_monitoring_v3_service_service_pb.DeleteServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  createServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  createServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.CreateServiceLevelObjectiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  getServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  getServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  getServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.GetServiceLevelObjectiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  listServiceLevelObjectives(argument: google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest, callback: grpc.requestCallback<google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse>): grpc.ClientUnaryCall;
  listServiceLevelObjectives(argument: google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse>): grpc.ClientUnaryCall;
  listServiceLevelObjectives(argument: google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_service_pb.ListServiceLevelObjectivesResponse>): grpc.ClientUnaryCall;
  updateServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  updateServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  updateServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.UpdateServiceLevelObjectiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_service_pb.ServiceLevelObjective>): grpc.ClientUnaryCall;
  deleteServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteServiceLevelObjective(argument: google_monitoring_v3_service_service_pb.DeleteServiceLevelObjectiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
