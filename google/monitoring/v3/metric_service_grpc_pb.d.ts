// GENERATED CODE -- DO NOT EDIT!

// package: google.monitoring.v3
// file: google/monitoring/v3/metric_service.proto

import * as google_monitoring_v3_metric_service_pb from "../../../google/monitoring/v3/metric_service_pb";
import * as google_api_metric_pb from "../../../google/api/metric_pb";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IMetricServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listMonitoredResourceDescriptors: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest, google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse>;
  getMonitoredResourceDescriptor: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest, google_api_monitored_resource_pb.MonitoredResourceDescriptor>;
  listMetricDescriptors: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest, google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse>;
  getMetricDescriptor: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest, google_api_metric_pb.MetricDescriptor>;
  createMetricDescriptor: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest, google_api_metric_pb.MetricDescriptor>;
  deleteMetricDescriptor: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest, google_protobuf_empty_pb.Empty>;
  listTimeSeries: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest, google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse>;
  createTimeSeries: grpc.MethodDefinition<google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest, google_protobuf_empty_pb.Empty>;
}

export const MetricServiceService: IMetricServiceService;

export class MetricServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listMonitoredResourceDescriptors(argument: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse>): grpc.ClientUnaryCall;
  listMonitoredResourceDescriptors(argument: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse>): grpc.ClientUnaryCall;
  listMonitoredResourceDescriptors(argument: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse>): grpc.ClientUnaryCall;
  getMonitoredResourceDescriptor(argument: google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest, callback: grpc.requestCallback<google_api_monitored_resource_pb.MonitoredResourceDescriptor>): grpc.ClientUnaryCall;
  getMonitoredResourceDescriptor(argument: google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_monitored_resource_pb.MonitoredResourceDescriptor>): grpc.ClientUnaryCall;
  getMonitoredResourceDescriptor(argument: google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_monitored_resource_pb.MonitoredResourceDescriptor>): grpc.ClientUnaryCall;
  listMetricDescriptors(argument: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse>): grpc.ClientUnaryCall;
  listMetricDescriptors(argument: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse>): grpc.ClientUnaryCall;
  listMetricDescriptors(argument: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse>): grpc.ClientUnaryCall;
  getMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest, callback: grpc.requestCallback<google_api_metric_pb.MetricDescriptor>): grpc.ClientUnaryCall;
  getMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_metric_pb.MetricDescriptor>): grpc.ClientUnaryCall;
  getMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_metric_pb.MetricDescriptor>): grpc.ClientUnaryCall;
  createMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest, callback: grpc.requestCallback<google_api_metric_pb.MetricDescriptor>): grpc.ClientUnaryCall;
  createMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_metric_pb.MetricDescriptor>): grpc.ClientUnaryCall;
  createMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_metric_pb.MetricDescriptor>): grpc.ClientUnaryCall;
  deleteMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMetricDescriptor(argument: google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listTimeSeries(argument: google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse>): grpc.ClientUnaryCall;
  listTimeSeries(argument: google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse>): grpc.ClientUnaryCall;
  listTimeSeries(argument: google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse>): grpc.ClientUnaryCall;
  createTimeSeries(argument: google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createTimeSeries(argument: google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createTimeSeries(argument: google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
