// GENERATED CODE -- DO NOT EDIT!

// package: google.monitoring.v3
// file: google/monitoring/v3/alert_service.proto

import * as google_monitoring_v3_alert_service_pb from "../../../google/monitoring/v3/alert_service_pb";
import * as google_monitoring_v3_alert_pb from "../../../google/monitoring/v3/alert_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IAlertPolicyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listAlertPolicies: grpc.MethodDefinition<google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest, google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse>;
  getAlertPolicy: grpc.MethodDefinition<google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest, google_monitoring_v3_alert_pb.AlertPolicy>;
  createAlertPolicy: grpc.MethodDefinition<google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest, google_monitoring_v3_alert_pb.AlertPolicy>;
  deleteAlertPolicy: grpc.MethodDefinition<google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest, google_protobuf_empty_pb.Empty>;
  updateAlertPolicy: grpc.MethodDefinition<google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest, google_monitoring_v3_alert_pb.AlertPolicy>;
}

export const AlertPolicyServiceService: IAlertPolicyServiceService;

export class AlertPolicyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listAlertPolicies(argument: google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest, callback: grpc.requestCallback<google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse>): grpc.ClientUnaryCall;
  listAlertPolicies(argument: google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse>): grpc.ClientUnaryCall;
  listAlertPolicies(argument: google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse>): grpc.ClientUnaryCall;
  getAlertPolicy(argument: google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  getAlertPolicy(argument: google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  getAlertPolicy(argument: google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  createAlertPolicy(argument: google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  createAlertPolicy(argument: google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  createAlertPolicy(argument: google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  deleteAlertPolicy(argument: google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAlertPolicy(argument: google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAlertPolicy(argument: google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateAlertPolicy(argument: google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  updateAlertPolicy(argument: google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
  updateAlertPolicy(argument: google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_alert_pb.AlertPolicy>): grpc.ClientUnaryCall;
}
