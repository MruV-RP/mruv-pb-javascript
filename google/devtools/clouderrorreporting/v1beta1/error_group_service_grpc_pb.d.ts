// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.clouderrorreporting.v1beta1
// file: google/devtools/clouderrorreporting/v1beta1/error_group_service.proto

import * as google_devtools_clouderrorreporting_v1beta1_error_group_service_pb from "../../../../google/devtools/clouderrorreporting/v1beta1/error_group_service_pb";
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from "../../../../google/devtools/clouderrorreporting/v1beta1/common_pb";
import * as grpc from "grpc";

interface IErrorGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGroup: grpc.MethodDefinition<google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest, google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>;
  updateGroup: grpc.MethodDefinition<google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest, google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>;
}

export const ErrorGroupServiceService: IErrorGroupServiceService;

export class ErrorGroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGroup(argument: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>): grpc.ClientUnaryCall;
  getGroup(argument: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>): grpc.ClientUnaryCall;
  getGroup(argument: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>): grpc.ClientUnaryCall;
  updateGroup(argument: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>): grpc.ClientUnaryCall;
  updateGroup(argument: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>): grpc.ClientUnaryCall;
  updateGroup(argument: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>): grpc.ClientUnaryCall;
}
