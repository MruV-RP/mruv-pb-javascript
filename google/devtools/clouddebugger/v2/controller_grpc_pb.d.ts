// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.clouddebugger.v2
// file: google/devtools/clouddebugger/v2/controller.proto

import * as google_devtools_clouddebugger_v2_controller_pb from "../../../../google/devtools/clouddebugger/v2/controller_pb";
import * as grpc from "grpc";

interface IController2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerDebuggee: grpc.MethodDefinition<google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest, google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse>;
  listActiveBreakpoints: grpc.MethodDefinition<google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest, google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse>;
  updateActiveBreakpoint: grpc.MethodDefinition<google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest, google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse>;
}

export const Controller2Service: IController2Service;

export class Controller2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registerDebuggee(argument: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse>): grpc.ClientUnaryCall;
  registerDebuggee(argument: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse>): grpc.ClientUnaryCall;
  registerDebuggee(argument: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse>): grpc.ClientUnaryCall;
  listActiveBreakpoints(argument: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse>): grpc.ClientUnaryCall;
  listActiveBreakpoints(argument: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse>): grpc.ClientUnaryCall;
  listActiveBreakpoints(argument: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse>): grpc.ClientUnaryCall;
  updateActiveBreakpoint(argument: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse>): grpc.ClientUnaryCall;
  updateActiveBreakpoint(argument: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse>): grpc.ClientUnaryCall;
  updateActiveBreakpoint(argument: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse>): grpc.ClientUnaryCall;
}
