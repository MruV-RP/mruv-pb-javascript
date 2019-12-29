// GENERATED CODE -- DO NOT EDIT!

// package: google.monitoring.v3
// file: google/monitoring/v3/uptime_service.proto

import * as google_monitoring_v3_uptime_service_pb from "../../../google/monitoring/v3/uptime_service_pb";
import * as google_monitoring_v3_uptime_pb from "../../../google/monitoring/v3/uptime_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IUptimeCheckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listUptimeCheckConfigs: grpc.MethodDefinition<google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest, google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse>;
  getUptimeCheckConfig: grpc.MethodDefinition<google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest, google_monitoring_v3_uptime_pb.UptimeCheckConfig>;
  createUptimeCheckConfig: grpc.MethodDefinition<google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest, google_monitoring_v3_uptime_pb.UptimeCheckConfig>;
  updateUptimeCheckConfig: grpc.MethodDefinition<google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest, google_monitoring_v3_uptime_pb.UptimeCheckConfig>;
  deleteUptimeCheckConfig: grpc.MethodDefinition<google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest, google_protobuf_empty_pb.Empty>;
  listUptimeCheckIps: grpc.MethodDefinition<google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest, google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse>;
}

export const UptimeCheckServiceService: IUptimeCheckServiceService;

export class UptimeCheckServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listUptimeCheckConfigs(argument: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest, callback: grpc.requestCallback<google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse>): grpc.ClientUnaryCall;
  listUptimeCheckConfigs(argument: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse>): grpc.ClientUnaryCall;
  listUptimeCheckConfigs(argument: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse>): grpc.ClientUnaryCall;
  getUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  getUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  getUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  createUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  createUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  createUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  updateUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  updateUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  updateUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): grpc.ClientUnaryCall;
  deleteUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUptimeCheckConfig(argument: google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listUptimeCheckIps(argument: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest, callback: grpc.requestCallback<google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse>): grpc.ClientUnaryCall;
  listUptimeCheckIps(argument: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse>): grpc.ClientUnaryCall;
  listUptimeCheckIps(argument: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse>): grpc.ClientUnaryCall;
}
