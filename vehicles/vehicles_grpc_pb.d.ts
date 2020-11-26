// GENERATED CODE -- DO NOT EDIT!

// package: mruv.vehicles
// file: vehicles/vehicles.proto

import * as vehicles_vehicles_pb from "../vehicles/vehicles_pb";
import * as grpc from "grpc";

interface IMruVVehiclesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createVehicle: grpc.MethodDefinition<vehicles_vehicles_pb.CreateVehicleRequest, vehicles_vehicles_pb.CreateVehicleResponse>;
  getVehicle: grpc.MethodDefinition<vehicles_vehicles_pb.GetVehicleRequest, vehicles_vehicles_pb.GetVehicleResponse>;
  updateVehicle: grpc.MethodDefinition<vehicles_vehicles_pb.UpdateVehicleRequest, vehicles_vehicles_pb.UpdateVehicleResponse>;
  deleteVehicle: grpc.MethodDefinition<vehicles_vehicles_pb.DeleteVehicleRequest, vehicles_vehicles_pb.DeleteVehicleResponse>;
}

export const MruVVehiclesServiceService: IMruVVehiclesServiceService;

export class MruVVehiclesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createVehicle(argument: vehicles_vehicles_pb.CreateVehicleRequest, callback: grpc.requestCallback<vehicles_vehicles_pb.CreateVehicleResponse>): grpc.ClientUnaryCall;
  createVehicle(argument: vehicles_vehicles_pb.CreateVehicleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.CreateVehicleResponse>): grpc.ClientUnaryCall;
  createVehicle(argument: vehicles_vehicles_pb.CreateVehicleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.CreateVehicleResponse>): grpc.ClientUnaryCall;
  getVehicle(argument: vehicles_vehicles_pb.GetVehicleRequest, callback: grpc.requestCallback<vehicles_vehicles_pb.GetVehicleResponse>): grpc.ClientUnaryCall;
  getVehicle(argument: vehicles_vehicles_pb.GetVehicleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.GetVehicleResponse>): grpc.ClientUnaryCall;
  getVehicle(argument: vehicles_vehicles_pb.GetVehicleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.GetVehicleResponse>): grpc.ClientUnaryCall;
  updateVehicle(argument: vehicles_vehicles_pb.UpdateVehicleRequest, callback: grpc.requestCallback<vehicles_vehicles_pb.UpdateVehicleResponse>): grpc.ClientUnaryCall;
  updateVehicle(argument: vehicles_vehicles_pb.UpdateVehicleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.UpdateVehicleResponse>): grpc.ClientUnaryCall;
  updateVehicle(argument: vehicles_vehicles_pb.UpdateVehicleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.UpdateVehicleResponse>): grpc.ClientUnaryCall;
  deleteVehicle(argument: vehicles_vehicles_pb.DeleteVehicleRequest, callback: grpc.requestCallback<vehicles_vehicles_pb.DeleteVehicleResponse>): grpc.ClientUnaryCall;
  deleteVehicle(argument: vehicles_vehicles_pb.DeleteVehicleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.DeleteVehicleResponse>): grpc.ClientUnaryCall;
  deleteVehicle(argument: vehicles_vehicles_pb.DeleteVehicleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vehicles_vehicles_pb.DeleteVehicleResponse>): grpc.ClientUnaryCall;
}
