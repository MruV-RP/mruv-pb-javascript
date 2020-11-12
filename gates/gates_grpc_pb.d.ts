// GENERATED CODE -- DO NOT EDIT!

// package: mruv.gates
// file: gates/gates.proto

import * as gates_gates_pb from "../gates/gates_pb";
import * as grpc from "grpc";

interface IMruVGatesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGate: grpc.MethodDefinition<gates_gates_pb.CreateGateRequest, gates_gates_pb.CreateGateResponse>;
  getGate: grpc.MethodDefinition<gates_gates_pb.GetGateRequest, gates_gates_pb.GetGateResponse>;
  updateGate: grpc.MethodDefinition<gates_gates_pb.UpdateGateRequest, gates_gates_pb.UpdateGateResponse>;
  deleteGate: grpc.MethodDefinition<gates_gates_pb.DeleteGateRequest, gates_gates_pb.DeleteGateResponse>;
  lock: grpc.MethodDefinition<gates_gates_pb.LockRequest, gates_gates_pb.LockResponse>;
  unlock: grpc.MethodDefinition<gates_gates_pb.UnlockRequest, gates_gates_pb.UnlockResponse>;
  open: grpc.MethodDefinition<gates_gates_pb.OpenRequest, gates_gates_pb.OpenResponse>;
  close: grpc.MethodDefinition<gates_gates_pb.CloseRequest, gates_gates_pb.CloseResponse>;
  findNearestGate: grpc.MethodDefinition<gates_gates_pb.FindNearestGateRequest, gates_gates_pb.FindNearestGateResponse>;
  fetchAll: grpc.MethodDefinition<gates_gates_pb.FetchAllGatesRequest, gates_gates_pb.FetchAllGatesResponse>;
}

export const MruVGatesServiceService: IMruVGatesServiceService;

export class MruVGatesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createGate(argument: gates_gates_pb.CreateGateRequest, callback: grpc.requestCallback<gates_gates_pb.CreateGateResponse>): grpc.ClientUnaryCall;
  createGate(argument: gates_gates_pb.CreateGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.CreateGateResponse>): grpc.ClientUnaryCall;
  createGate(argument: gates_gates_pb.CreateGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.CreateGateResponse>): grpc.ClientUnaryCall;
  getGate(argument: gates_gates_pb.GetGateRequest, callback: grpc.requestCallback<gates_gates_pb.GetGateResponse>): grpc.ClientUnaryCall;
  getGate(argument: gates_gates_pb.GetGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.GetGateResponse>): grpc.ClientUnaryCall;
  getGate(argument: gates_gates_pb.GetGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.GetGateResponse>): grpc.ClientUnaryCall;
  updateGate(argument: gates_gates_pb.UpdateGateRequest, callback: grpc.requestCallback<gates_gates_pb.UpdateGateResponse>): grpc.ClientUnaryCall;
  updateGate(argument: gates_gates_pb.UpdateGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.UpdateGateResponse>): grpc.ClientUnaryCall;
  updateGate(argument: gates_gates_pb.UpdateGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.UpdateGateResponse>): grpc.ClientUnaryCall;
  deleteGate(argument: gates_gates_pb.DeleteGateRequest, callback: grpc.requestCallback<gates_gates_pb.DeleteGateResponse>): grpc.ClientUnaryCall;
  deleteGate(argument: gates_gates_pb.DeleteGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.DeleteGateResponse>): grpc.ClientUnaryCall;
  deleteGate(argument: gates_gates_pb.DeleteGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.DeleteGateResponse>): grpc.ClientUnaryCall;
  lock(argument: gates_gates_pb.LockRequest, callback: grpc.requestCallback<gates_gates_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: gates_gates_pb.LockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: gates_gates_pb.LockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.LockResponse>): grpc.ClientUnaryCall;
  unlock(argument: gates_gates_pb.UnlockRequest, callback: grpc.requestCallback<gates_gates_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: gates_gates_pb.UnlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: gates_gates_pb.UnlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.UnlockResponse>): grpc.ClientUnaryCall;
  open(argument: gates_gates_pb.OpenRequest, callback: grpc.requestCallback<gates_gates_pb.OpenResponse>): grpc.ClientUnaryCall;
  open(argument: gates_gates_pb.OpenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.OpenResponse>): grpc.ClientUnaryCall;
  open(argument: gates_gates_pb.OpenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.OpenResponse>): grpc.ClientUnaryCall;
  close(argument: gates_gates_pb.CloseRequest, callback: grpc.requestCallback<gates_gates_pb.CloseResponse>): grpc.ClientUnaryCall;
  close(argument: gates_gates_pb.CloseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.CloseResponse>): grpc.ClientUnaryCall;
  close(argument: gates_gates_pb.CloseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.CloseResponse>): grpc.ClientUnaryCall;
  findNearestGate(argument: gates_gates_pb.FindNearestGateRequest, callback: grpc.requestCallback<gates_gates_pb.FindNearestGateResponse>): grpc.ClientUnaryCall;
  findNearestGate(argument: gates_gates_pb.FindNearestGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.FindNearestGateResponse>): grpc.ClientUnaryCall;
  findNearestGate(argument: gates_gates_pb.FindNearestGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gates_gates_pb.FindNearestGateResponse>): grpc.ClientUnaryCall;
  fetchAll(argument: gates_gates_pb.FetchAllGatesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<gates_gates_pb.FetchAllGatesResponse>;
  fetchAll(argument: gates_gates_pb.FetchAllGatesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<gates_gates_pb.FetchAllGatesResponse>;
}
