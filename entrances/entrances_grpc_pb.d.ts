// GENERATED CODE -- DO NOT EDIT!

// package: mruv.entrances
// file: entrances/entrances.proto

import * as entrances_entrances_pb from "../entrances/entrances_pb";
import * as grpc from "grpc";

interface IMruVEntrancesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createEntrance: grpc.MethodDefinition<entrances_entrances_pb.CreateEntranceRequest, entrances_entrances_pb.CreateEntranceResponse>;
  getEntrance: grpc.MethodDefinition<entrances_entrances_pb.GetEntranceRequest, entrances_entrances_pb.GetEntranceResponse>;
  updateEntrance: grpc.MethodDefinition<entrances_entrances_pb.UpdateEntranceRequest, entrances_entrances_pb.UpdateEntranceResponse>;
  deleteEntrance: grpc.MethodDefinition<entrances_entrances_pb.DeleteEntranceRequest, entrances_entrances_pb.DeleteEntranceResponse>;
  lock: grpc.MethodDefinition<entrances_entrances_pb.LockRequest, entrances_entrances_pb.LockResponse>;
  unlock: grpc.MethodDefinition<entrances_entrances_pb.UnlockRequest, entrances_entrances_pb.UnlockResponse>;
  findNearestEntrance: grpc.MethodDefinition<entrances_entrances_pb.FindNearestEntranceRequest, entrances_entrances_pb.FindNearestEntranceResponse>;
  enter: grpc.MethodDefinition<entrances_entrances_pb.EnterRequest, entrances_entrances_pb.EnterResponse>;
}

export const MruVEntrancesServiceService: IMruVEntrancesServiceService;

export class MruVEntrancesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createEntrance(argument: entrances_entrances_pb.CreateEntranceRequest, callback: grpc.requestCallback<entrances_entrances_pb.CreateEntranceResponse>): grpc.ClientUnaryCall;
  createEntrance(argument: entrances_entrances_pb.CreateEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.CreateEntranceResponse>): grpc.ClientUnaryCall;
  createEntrance(argument: entrances_entrances_pb.CreateEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.CreateEntranceResponse>): grpc.ClientUnaryCall;
  getEntrance(argument: entrances_entrances_pb.GetEntranceRequest, callback: grpc.requestCallback<entrances_entrances_pb.GetEntranceResponse>): grpc.ClientUnaryCall;
  getEntrance(argument: entrances_entrances_pb.GetEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.GetEntranceResponse>): grpc.ClientUnaryCall;
  getEntrance(argument: entrances_entrances_pb.GetEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.GetEntranceResponse>): grpc.ClientUnaryCall;
  updateEntrance(argument: entrances_entrances_pb.UpdateEntranceRequest, callback: grpc.requestCallback<entrances_entrances_pb.UpdateEntranceResponse>): grpc.ClientUnaryCall;
  updateEntrance(argument: entrances_entrances_pb.UpdateEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.UpdateEntranceResponse>): grpc.ClientUnaryCall;
  updateEntrance(argument: entrances_entrances_pb.UpdateEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.UpdateEntranceResponse>): grpc.ClientUnaryCall;
  deleteEntrance(argument: entrances_entrances_pb.DeleteEntranceRequest, callback: grpc.requestCallback<entrances_entrances_pb.DeleteEntranceResponse>): grpc.ClientUnaryCall;
  deleteEntrance(argument: entrances_entrances_pb.DeleteEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.DeleteEntranceResponse>): grpc.ClientUnaryCall;
  deleteEntrance(argument: entrances_entrances_pb.DeleteEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.DeleteEntranceResponse>): grpc.ClientUnaryCall;
  lock(argument: entrances_entrances_pb.LockRequest, callback: grpc.requestCallback<entrances_entrances_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: entrances_entrances_pb.LockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.LockResponse>): grpc.ClientUnaryCall;
  lock(argument: entrances_entrances_pb.LockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.LockResponse>): grpc.ClientUnaryCall;
  unlock(argument: entrances_entrances_pb.UnlockRequest, callback: grpc.requestCallback<entrances_entrances_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: entrances_entrances_pb.UnlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: entrances_entrances_pb.UnlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.UnlockResponse>): grpc.ClientUnaryCall;
  findNearestEntrance(argument: entrances_entrances_pb.FindNearestEntranceRequest, callback: grpc.requestCallback<entrances_entrances_pb.FindNearestEntranceResponse>): grpc.ClientUnaryCall;
  findNearestEntrance(argument: entrances_entrances_pb.FindNearestEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.FindNearestEntranceResponse>): grpc.ClientUnaryCall;
  findNearestEntrance(argument: entrances_entrances_pb.FindNearestEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.FindNearestEntranceResponse>): grpc.ClientUnaryCall;
  enter(argument: entrances_entrances_pb.EnterRequest, callback: grpc.requestCallback<entrances_entrances_pb.EnterResponse>): grpc.ClientUnaryCall;
  enter(argument: entrances_entrances_pb.EnterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.EnterResponse>): grpc.ClientUnaryCall;
  enter(argument: entrances_entrances_pb.EnterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<entrances_entrances_pb.EnterResponse>): grpc.ClientUnaryCall;
}
