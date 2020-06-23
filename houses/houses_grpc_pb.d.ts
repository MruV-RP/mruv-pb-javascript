// GENERATED CODE -- DO NOT EDIT!

// package: mruv.houses
// file: houses/houses.proto

import * as houses_houses_pb from "../houses/houses_pb";
import * as grpc from "grpc";

interface IMruVHousesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createHouse: grpc.MethodDefinition<houses_houses_pb.CreateHouseRequest, houses_houses_pb.CreateHouseResponse>;
  getHouse: grpc.MethodDefinition<houses_houses_pb.GetHouseRequest, houses_houses_pb.GetHouseResponse>;
  updateHouse: grpc.MethodDefinition<houses_houses_pb.UpdateHouseRequest, houses_houses_pb.UpdateHouseResponse>;
  deleteHouse: grpc.MethodDefinition<houses_houses_pb.DeleteHouseRequest, houses_houses_pb.DeleteHouseResponse>;
}

export const MruVHousesServiceService: IMruVHousesServiceService;

export class MruVHousesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createHouse(argument: houses_houses_pb.CreateHouseRequest, callback: grpc.requestCallback<houses_houses_pb.CreateHouseResponse>): grpc.ClientUnaryCall;
  createHouse(argument: houses_houses_pb.CreateHouseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.CreateHouseResponse>): grpc.ClientUnaryCall;
  createHouse(argument: houses_houses_pb.CreateHouseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.CreateHouseResponse>): grpc.ClientUnaryCall;
  getHouse(argument: houses_houses_pb.GetHouseRequest, callback: grpc.requestCallback<houses_houses_pb.GetHouseResponse>): grpc.ClientUnaryCall;
  getHouse(argument: houses_houses_pb.GetHouseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.GetHouseResponse>): grpc.ClientUnaryCall;
  getHouse(argument: houses_houses_pb.GetHouseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.GetHouseResponse>): grpc.ClientUnaryCall;
  updateHouse(argument: houses_houses_pb.UpdateHouseRequest, callback: grpc.requestCallback<houses_houses_pb.UpdateHouseResponse>): grpc.ClientUnaryCall;
  updateHouse(argument: houses_houses_pb.UpdateHouseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.UpdateHouseResponse>): grpc.ClientUnaryCall;
  updateHouse(argument: houses_houses_pb.UpdateHouseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.UpdateHouseResponse>): grpc.ClientUnaryCall;
  deleteHouse(argument: houses_houses_pb.DeleteHouseRequest, callback: grpc.requestCallback<houses_houses_pb.DeleteHouseResponse>): grpc.ClientUnaryCall;
  deleteHouse(argument: houses_houses_pb.DeleteHouseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.DeleteHouseResponse>): grpc.ClientUnaryCall;
  deleteHouse(argument: houses_houses_pb.DeleteHouseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<houses_houses_pb.DeleteHouseResponse>): grpc.ClientUnaryCall;
}
