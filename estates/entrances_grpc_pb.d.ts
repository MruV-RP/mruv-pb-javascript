// GENERATED CODE -- DO NOT EDIT!

// package: mruv.entrances
// file: estates/entrances.proto

import * as estates_entrances_pb from "../estates/entrances_pb";
import * as grpc from "grpc";

interface IMruVEntrancesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createEntrance: grpc.MethodDefinition<estates_entrances_pb.CreateEntranceRequest, estates_entrances_pb.CreateEntranceResponse>;
  getEntrance: grpc.MethodDefinition<estates_entrances_pb.GetEntranceRequest, estates_entrances_pb.GetEntranceResponse>;
  updateEntrance: grpc.MethodDefinition<estates_entrances_pb.UpdateEntranceRequest, estates_entrances_pb.UpdateEntranceResponse>;
  deleteEntrance: grpc.MethodDefinition<estates_entrances_pb.DeleteEntranceRequest, estates_entrances_pb.DeleteEntranceResponse>;
  lock: grpc.MethodDefinition<estates_entrances_pb.LockRequest, estates_entrances_pb.LockResponse>;
  unlock: grpc.MethodDefinition<estates_entrances_pb.UnlockRequest, estates_entrances_pb.UnlockResponse>;
  findNearestEntrance: grpc.MethodDefinition<estates_entrances_pb.FindNearestEntranceRequest, estates_entrances_pb.FindNearestEntranceResponse>;
  enter: grpc.MethodDefinition<estates_entrances_pb.EnterRequest, estates_entrances_pb.EnterResponse>;
}

export const MruVEntrancesServiceService: IMruVEntrancesServiceService;

export class MruVEntrancesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createEntrance(argument: estates_entrances_pb.CreateEntranceRequest, callback: grpc.requestCallback<estates_entrances_pb.CreateEntranceResponse>): grpc.ClientUnaryCall;
  createEntrance(argument: estates_entrances_pb.CreateEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.CreateEntranceResponse>): grpc.ClientUnaryCall;
  createEntrance(argument: estates_entrances_pb.CreateEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.CreateEntranceResponse>): grpc.ClientUnaryCall;
  getEntrance(argument: estates_entrances_pb.GetEntranceRequest, callback: grpc.requestCallback<estates_entrances_pb.GetEntranceResponse>): grpc.ClientUnaryCall;
  getEntrance(argument: estates_entrances_pb.GetEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.GetEntranceResponse>): grpc.ClientUnaryCall;
  getEntrance(argument: estates_entrances_pb.GetEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.GetEntranceResponse>): grpc.ClientUnaryCall;
  updateEntrance(argument: estates_entrances_pb.UpdateEntranceRequest, callback: grpc.requestCallback<estates_entrances_pb.UpdateEntranceResponse>): grpc.ClientUnaryCall;
  updateEntrance(argument: estates_entrances_pb.UpdateEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.UpdateEntranceResponse>): grpc.ClientUnaryCall;
  updateEntrance(argument: estates_entrances_pb.UpdateEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.UpdateEntranceResponse>): grpc.ClientUnaryCall;
  deleteEntrance(argument: estates_entrances_pb.DeleteEntranceRequest, callback: grpc.requestCallback<estates_entrances_pb.DeleteEntranceResponse>): grpc.ClientUnaryCall;
  deleteEntrance(argument: estates_entrances_pb.DeleteEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.DeleteEntranceResponse>): grpc.ClientUnaryCall;
  deleteEntrance(argument: estates_entrances_pb.DeleteEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.DeleteEntranceResponse>): grpc.ClientUnaryCall;
  lock(argument: estates_entrances_pb.LockRequest, callback: grpc.requestCallback<estates_entrances_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: estates_entrances_pb.LockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: estates_entrances_pb.LockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.LockResponse>): grpc.ClientUnaryCall;
  unlock(argument: estates_entrances_pb.UnlockRequest, callback: grpc.requestCallback<estates_entrances_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: estates_entrances_pb.UnlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: estates_entrances_pb.UnlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.UnlockResponse>): grpc.ClientUnaryCall;
  findNearestEntrance(argument: estates_entrances_pb.FindNearestEntranceRequest, callback: grpc.requestCallback<estates_entrances_pb.FindNearestEntranceResponse>): grpc.ClientUnaryCall;
  findNearestEntrance(argument: estates_entrances_pb.FindNearestEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.FindNearestEntranceResponse>): grpc.ClientUnaryCall;
  findNearestEntrance(argument: estates_entrances_pb.FindNearestEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.FindNearestEntranceResponse>): grpc.ClientUnaryCall;
  enter(argument: estates_entrances_pb.EnterRequest, callback: grpc.requestCallback<estates_entrances_pb.EnterResponse>): grpc.ClientUnaryCall;
  enter(argument: estates_entrances_pb.EnterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.EnterResponse>): grpc.ClientUnaryCall;
  enter(argument: estates_entrances_pb.EnterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_entrances_pb.EnterResponse>): grpc.ClientUnaryCall;
}
