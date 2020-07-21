// GENERATED CODE -- DO NOT EDIT!

// package: mruv.estates
// file: estates/estates.proto

import * as estates_estates_pb from "../estates/estates_pb";
import * as grpc from "grpc";

interface IMruVEstateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createEstate: grpc.MethodDefinition<estates_estates_pb.CreateEstateRequest, estates_estates_pb.CreateEstateResponse>;
  getEstate: grpc.MethodDefinition<estates_estates_pb.GetEstateRequest, estates_estates_pb.Estate>;
  updateEstate: grpc.MethodDefinition<estates_estates_pb.UpdateEstateRequest, estates_estates_pb.UpdateEstateResponse>;
  deleteEstate: grpc.MethodDefinition<estates_estates_pb.DeleteEstateRequest, estates_estates_pb.DeleteEstateResponse>;
  getEstates: grpc.MethodDefinition<estates_estates_pb.GetEstatesRequest, estates_estates_pb.GetEstatesResponse>;
  addGate: grpc.MethodDefinition<estates_estates_pb.AddGateRequest, estates_estates_pb.AddGateResponse>;
  removeGate: grpc.MethodDefinition<estates_estates_pb.RemoveGateRequest, estates_estates_pb.RemoveGateResponse>;
  getEstateGates: grpc.MethodDefinition<estates_estates_pb.GetEstateGatesRequest, estates_estates_pb.GetEstateGatesResponse>;
  addEntrance: grpc.MethodDefinition<estates_estates_pb.AddEntranceRequest, estates_estates_pb.AddEntranceResponse>;
  removeEntrance: grpc.MethodDefinition<estates_estates_pb.RemoveEntranceRequest, estates_estates_pb.RemoveEntranceResponse>;
  getEstateEntrances: grpc.MethodDefinition<estates_estates_pb.GetEstateEntrancesRequest, estates_estates_pb.GetEstateEntrancesResponse>;
}

export const MruVEstateServiceService: IMruVEstateServiceService;

export class MruVEstateServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createEstate(argument: estates_estates_pb.CreateEstateRequest, callback: grpc.requestCallback<estates_estates_pb.CreateEstateResponse>): grpc.ClientUnaryCall;
  createEstate(argument: estates_estates_pb.CreateEstateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.CreateEstateResponse>): grpc.ClientUnaryCall;
  createEstate(argument: estates_estates_pb.CreateEstateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.CreateEstateResponse>): grpc.ClientUnaryCall;
  getEstate(argument: estates_estates_pb.GetEstateRequest, callback: grpc.requestCallback<estates_estates_pb.Estate>): grpc.ClientUnaryCall;
  getEstate(argument: estates_estates_pb.GetEstateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.Estate>): grpc.ClientUnaryCall;
  getEstate(argument: estates_estates_pb.GetEstateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.Estate>): grpc.ClientUnaryCall;
  updateEstate(argument: estates_estates_pb.UpdateEstateRequest, callback: grpc.requestCallback<estates_estates_pb.UpdateEstateResponse>): grpc.ClientUnaryCall;
  updateEstate(argument: estates_estates_pb.UpdateEstateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.UpdateEstateResponse>): grpc.ClientUnaryCall;
  updateEstate(argument: estates_estates_pb.UpdateEstateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.UpdateEstateResponse>): grpc.ClientUnaryCall;
  deleteEstate(argument: estates_estates_pb.DeleteEstateRequest, callback: grpc.requestCallback<estates_estates_pb.DeleteEstateResponse>): grpc.ClientUnaryCall;
  deleteEstate(argument: estates_estates_pb.DeleteEstateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.DeleteEstateResponse>): grpc.ClientUnaryCall;
  deleteEstate(argument: estates_estates_pb.DeleteEstateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.DeleteEstateResponse>): grpc.ClientUnaryCall;
  getEstates(argument: estates_estates_pb.GetEstatesRequest, callback: grpc.requestCallback<estates_estates_pb.GetEstatesResponse>): grpc.ClientUnaryCall;
  getEstates(argument: estates_estates_pb.GetEstatesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.GetEstatesResponse>): grpc.ClientUnaryCall;
  getEstates(argument: estates_estates_pb.GetEstatesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.GetEstatesResponse>): grpc.ClientUnaryCall;
  addGate(argument: estates_estates_pb.AddGateRequest, callback: grpc.requestCallback<estates_estates_pb.AddGateResponse>): grpc.ClientUnaryCall;
  addGate(argument: estates_estates_pb.AddGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.AddGateResponse>): grpc.ClientUnaryCall;
  addGate(argument: estates_estates_pb.AddGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.AddGateResponse>): grpc.ClientUnaryCall;
  removeGate(argument: estates_estates_pb.RemoveGateRequest, callback: grpc.requestCallback<estates_estates_pb.RemoveGateResponse>): grpc.ClientUnaryCall;
  removeGate(argument: estates_estates_pb.RemoveGateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.RemoveGateResponse>): grpc.ClientUnaryCall;
  removeGate(argument: estates_estates_pb.RemoveGateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.RemoveGateResponse>): grpc.ClientUnaryCall;
  getEstateGates(argument: estates_estates_pb.GetEstateGatesRequest, callback: grpc.requestCallback<estates_estates_pb.GetEstateGatesResponse>): grpc.ClientUnaryCall;
  getEstateGates(argument: estates_estates_pb.GetEstateGatesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.GetEstateGatesResponse>): grpc.ClientUnaryCall;
  getEstateGates(argument: estates_estates_pb.GetEstateGatesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.GetEstateGatesResponse>): grpc.ClientUnaryCall;
  addEntrance(argument: estates_estates_pb.AddEntranceRequest, callback: grpc.requestCallback<estates_estates_pb.AddEntranceResponse>): grpc.ClientUnaryCall;
  addEntrance(argument: estates_estates_pb.AddEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.AddEntranceResponse>): grpc.ClientUnaryCall;
  addEntrance(argument: estates_estates_pb.AddEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.AddEntranceResponse>): grpc.ClientUnaryCall;
  removeEntrance(argument: estates_estates_pb.RemoveEntranceRequest, callback: grpc.requestCallback<estates_estates_pb.RemoveEntranceResponse>): grpc.ClientUnaryCall;
  removeEntrance(argument: estates_estates_pb.RemoveEntranceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.RemoveEntranceResponse>): grpc.ClientUnaryCall;
  removeEntrance(argument: estates_estates_pb.RemoveEntranceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.RemoveEntranceResponse>): grpc.ClientUnaryCall;
  getEstateEntrances(argument: estates_estates_pb.GetEstateEntrancesRequest, callback: grpc.requestCallback<estates_estates_pb.GetEstateEntrancesResponse>): grpc.ClientUnaryCall;
  getEstateEntrances(argument: estates_estates_pb.GetEstateEntrancesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.GetEstateEntrancesResponse>): grpc.ClientUnaryCall;
  getEstateEntrances(argument: estates_estates_pb.GetEstateEntrancesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<estates_estates_pb.GetEstateEntrancesResponse>): grpc.ClientUnaryCall;
}
