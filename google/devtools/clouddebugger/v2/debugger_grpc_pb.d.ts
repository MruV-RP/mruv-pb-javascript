// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.clouddebugger.v2
// file: google/devtools/clouddebugger/v2/debugger.proto

import * as google_devtools_clouddebugger_v2_debugger_pb from "../../../../google/devtools/clouddebugger/v2/debugger_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDebugger2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setBreakpoint: grpc.MethodDefinition<google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest, google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse>;
  getBreakpoint: grpc.MethodDefinition<google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest, google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse>;
  deleteBreakpoint: grpc.MethodDefinition<google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest, google_protobuf_empty_pb.Empty>;
  listBreakpoints: grpc.MethodDefinition<google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest, google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse>;
  listDebuggees: grpc.MethodDefinition<google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest, google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse>;
}

export const Debugger2Service: IDebugger2Service;

export class Debugger2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse>): grpc.ClientUnaryCall;
  setBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse>): grpc.ClientUnaryCall;
  setBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse>): grpc.ClientUnaryCall;
  getBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse>): grpc.ClientUnaryCall;
  getBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse>): grpc.ClientUnaryCall;
  getBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse>): grpc.ClientUnaryCall;
  deleteBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBreakpoint(argument: google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listBreakpoints(argument: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse>): grpc.ClientUnaryCall;
  listBreakpoints(argument: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse>): grpc.ClientUnaryCall;
  listBreakpoints(argument: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse>): grpc.ClientUnaryCall;
  listDebuggees(argument: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse>): grpc.ClientUnaryCall;
  listDebuggees(argument: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse>): grpc.ClientUnaryCall;
  listDebuggees(argument: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse>): grpc.ClientUnaryCall;
}
