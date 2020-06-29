// GENERATED CODE -- DO NOT EDIT!

// package: mruv.elevators
// file: elevators/elevators.proto

import * as elevators_elevators_pb from "../elevators/elevators_pb";
import * as grpc from "grpc";

interface IMruVElevatorsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createElevator: grpc.MethodDefinition<elevators_elevators_pb.CreateElevatorRequest, elevators_elevators_pb.CreateElevatorResponse>;
  getElevator: grpc.MethodDefinition<elevators_elevators_pb.GetElevatorRequest, elevators_elevators_pb.GetElevatorResponse>;
  updateElevator: grpc.MethodDefinition<elevators_elevators_pb.UpdateElevatorRequest, elevators_elevators_pb.UpdateElevatorResponse>;
  deleteElevator: grpc.MethodDefinition<elevators_elevators_pb.DeleteElevatorRequest, elevators_elevators_pb.DeleteElevatorResponse>;
  getElevatorFloors: grpc.MethodDefinition<elevators_elevators_pb.GetElevatorFloorsRequest, elevators_elevators_pb.GetElevatorFloorsResponse>;
}

export const MruVElevatorsServiceService: IMruVElevatorsServiceService;

export class MruVElevatorsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createElevator(argument: elevators_elevators_pb.CreateElevatorRequest, callback: grpc.requestCallback<elevators_elevators_pb.CreateElevatorResponse>): grpc.ClientUnaryCall;
  createElevator(argument: elevators_elevators_pb.CreateElevatorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.CreateElevatorResponse>): grpc.ClientUnaryCall;
  createElevator(argument: elevators_elevators_pb.CreateElevatorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.CreateElevatorResponse>): grpc.ClientUnaryCall;
  getElevator(argument: elevators_elevators_pb.GetElevatorRequest, callback: grpc.requestCallback<elevators_elevators_pb.GetElevatorResponse>): grpc.ClientUnaryCall;
  getElevator(argument: elevators_elevators_pb.GetElevatorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.GetElevatorResponse>): grpc.ClientUnaryCall;
  getElevator(argument: elevators_elevators_pb.GetElevatorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.GetElevatorResponse>): grpc.ClientUnaryCall;
  updateElevator(argument: elevators_elevators_pb.UpdateElevatorRequest, callback: grpc.requestCallback<elevators_elevators_pb.UpdateElevatorResponse>): grpc.ClientUnaryCall;
  updateElevator(argument: elevators_elevators_pb.UpdateElevatorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.UpdateElevatorResponse>): grpc.ClientUnaryCall;
  updateElevator(argument: elevators_elevators_pb.UpdateElevatorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.UpdateElevatorResponse>): grpc.ClientUnaryCall;
  deleteElevator(argument: elevators_elevators_pb.DeleteElevatorRequest, callback: grpc.requestCallback<elevators_elevators_pb.DeleteElevatorResponse>): grpc.ClientUnaryCall;
  deleteElevator(argument: elevators_elevators_pb.DeleteElevatorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.DeleteElevatorResponse>): grpc.ClientUnaryCall;
  deleteElevator(argument: elevators_elevators_pb.DeleteElevatorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.DeleteElevatorResponse>): grpc.ClientUnaryCall;
  getElevatorFloors(argument: elevators_elevators_pb.GetElevatorFloorsRequest, callback: grpc.requestCallback<elevators_elevators_pb.GetElevatorFloorsResponse>): grpc.ClientUnaryCall;
  getElevatorFloors(argument: elevators_elevators_pb.GetElevatorFloorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.GetElevatorFloorsResponse>): grpc.ClientUnaryCall;
  getElevatorFloors(argument: elevators_elevators_pb.GetElevatorFloorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<elevators_elevators_pb.GetElevatorFloorsResponse>): grpc.ClientUnaryCall;
}
