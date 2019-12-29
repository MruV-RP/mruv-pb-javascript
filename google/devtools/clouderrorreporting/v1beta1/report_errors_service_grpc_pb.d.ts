// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.clouderrorreporting.v1beta1
// file: google/devtools/clouderrorreporting/v1beta1/report_errors_service.proto

import * as google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb from "../../../../google/devtools/clouderrorreporting/v1beta1/report_errors_service_pb";
import * as grpc from "grpc";

interface IReportErrorsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  reportErrorEvent: grpc.MethodDefinition<google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest, google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse>;
}

export const ReportErrorsServiceService: IReportErrorsServiceService;

export class ReportErrorsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  reportErrorEvent(argument: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse>): grpc.ClientUnaryCall;
  reportErrorEvent(argument: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse>): grpc.ClientUnaryCall;
  reportErrorEvent(argument: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse>): grpc.ClientUnaryCall;
}
