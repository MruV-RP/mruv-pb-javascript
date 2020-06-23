// GENERATED CODE -- DO NOT EDIT!

// package: mruv.gates
// file: estates/gates.proto

import * as estates_gates_pb from "../estates/gates_pb";
import * as grpc from "grpc";

interface IMruVGatesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGate: grpc.MethodDefinition<estates_gates_pb.CreateGateRequest, estates_gates_pb.CreateGateResponse>;
  getGate: grpc.MethodDefinition<estates_gates_pb.GetGateRequest, estates_gates_pb.GetGateResponse>;
  updateGate: grpc.MethodDefinition<estates_gates_pb.UpdateGateRequest, estates_gates_pb.UpdateGateResponse>;
  deleteGate: grpc.MethodDefinition<estates_gates_pb.DeleteGateRequest, estates_gates_pb.DeleteGateResponse>;
  lock: grpc.MethodDefinition<estates_gates_pb.LockRequest, estates_gates_pb.LockResponse>;
  unlock: grpc.MethodDefinition<estates_gates_pb.UnlockRequest, estates_gates_pb.UnlockResponse>;
  open: grpc.MethodDefinition<estates_gates_pb.OpenRequest, estates_gates_pb.OpenResponse>;
  close: grpc.MethodDefinition<estates_gates_pb.CloseRequest, estates_gates_pb.CloseResponse>;
  findNearestGate: grpc.MethodDefinition<estates_gates_pb.FindNearestGateRequest, estates_gates_pb.FindNearestGateResponse>;
}

export const MruVGatesServiceService: IMruVGatesServiceService;

export class MruVGatesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createGate(argument: estates_gates_pb.CreateGateRequest, callback: grpc.requestCallback<estates_gates_pb.CreateGateResponse>): grpc.ClientUnaryCall;
  createGate(argument: estates_gates_pb.CreateGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.CreateGateResponse>): grpc.ClientUnaryCall;
  createGate(argument: estates_gates_pb.CreateGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.CreateGateResponse>): grpc.ClientUnaryCall;
  getGate(argument: estates_gates_pb.GetGateRequest, callback: grpc.requestCallback<estates_gates_pb.GetGateResponse>): grpc.ClientUnaryCall;
  getGate(argument: estates_gates_pb.GetGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.GetGateResponse>): grpc.ClientUnaryCall;
  getGate(argument: estates_gates_pb.GetGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.GetGateResponse>): grpc.ClientUnaryCall;
  updateGate(argument: estates_gates_pb.UpdateGateRequest, callback: grpc.requestCallback<estates_gates_pb.UpdateGateResponse>): grpc.ClientUnaryCall;
  updateGate(argument: estates_gates_pb.UpdateGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.UpdateGateResponse>): grpc.ClientUnaryCall;
  updateGate(argument: estates_gates_pb.UpdateGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.UpdateGateResponse>): grpc.ClientUnaryCall;
  deleteGate(argument: estates_gates_pb.DeleteGateRequest, callback: grpc.requestCallback<estates_gates_pb.DeleteGateResponse>): grpc.ClientUnaryCall;
  deleteGate(argument: estates_gates_pb.DeleteGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.DeleteGateResponse>): grpc.ClientUnaryCall;
  deleteGate(argument: estates_gates_pb.DeleteGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.DeleteGateResponse>): grpc.ClientUnaryCall;
  lock(argument: estates_gates_pb.LockRequest, callback: grpc.requestCallback<estates_gates_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: estates_gates_pb.LockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: estates_gates_pb.LockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.LockResponse>): grpc.ClientUnaryCall;
  unlock(argument: estates_gates_pb.UnlockRequest, callback: grpc.requestCallback<estates_gates_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: estates_gates_pb.UnlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: estates_gates_pb.UnlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.UnlockResponse>): grpc.ClientUnaryCall;
  open(argument: estates_gates_pb.OpenRequest, callback: grpc.requestCallback<estates_gates_pb.OpenResponse>): grpc.ClientUnaryCall;
  open(argument: estates_gates_pb.OpenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.OpenResponse>): grpc.ClientUnaryCall;
  open(argument: estates_gates_pb.OpenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.OpenResponse>): grpc.ClientUnaryCall;
  close(argument: estates_gates_pb.CloseRequest, callback: grpc.requestCallback<estates_gates_pb.CloseResponse>): grpc.ClientUnaryCall;
  close(argument: estates_gates_pb.CloseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.CloseResponse>): grpc.ClientUnaryCall;
  close(argument: estates_gates_pb.CloseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.CloseResponse>): grpc.ClientUnaryCall;
  findNearestGate(argument: estates_gates_pb.FindNearestGateRequest, callback: grpc.requestCallback<estates_gates_pb.FindNearestGateResponse>): grpc.ClientUnaryCall;
  findNearestGate(argument: estates_gates_pb.FindNearestGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.FindNearestGateResponse>): grpc.ClientUnaryCall;
  findNearestGate(argument: estates_gates_pb.FindNearestGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_gates_pb.FindNearestGateResponse>): grpc.ClientUnaryCall;
}
