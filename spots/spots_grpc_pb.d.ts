// GENERATED CODE -- DO NOT EDIT!

// package: mruv.spots
// file: spots/spots.proto

import * as spots_spots_pb from "../spots/spots_pb";
import * as grpc from "grpc";

interface IMruVSpotsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSpot: grpc.MethodDefinition<spots_spots_pb.CreateSpotRequest, spots_spots_pb.CreateSpotResponse>;
  getSpot: grpc.MethodDefinition<spots_spots_pb.GetSpotRequest, spots_spots_pb.GetSpotResponse>;
  updateSpot: grpc.MethodDefinition<spots_spots_pb.UpdateSpotRequest, spots_spots_pb.UpdateSpotResponse>;
  deleteSpot: grpc.MethodDefinition<spots_spots_pb.DeleteSpotRequest, spots_spots_pb.DeleteSpotResponse>;
}

export const MruVSpotsServiceService: IMruVSpotsServiceService;

export class MruVSpotsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createSpot(argument: spots_spots_pb.CreateSpotRequest, callback: grpc.requestCallback<spots_spots_pb.CreateSpotResponse>): grpc.ClientUnaryCall;
  createSpot(argument: spots_spots_pb.CreateSpotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.CreateSpotResponse>): grpc.ClientUnaryCall;
  createSpot(argument: spots_spots_pb.CreateSpotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.CreateSpotResponse>): grpc.ClientUnaryCall;
  getSpot(argument: spots_spots_pb.GetSpotRequest, callback: grpc.requestCallback<spots_spots_pb.GetSpotResponse>): grpc.ClientUnaryCall;
  getSpot(argument: spots_spots_pb.GetSpotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.GetSpotResponse>): grpc.ClientUnaryCall;
  getSpot(argument: spots_spots_pb.GetSpotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.GetSpotResponse>): grpc.ClientUnaryCall;
  updateSpot(argument: spots_spots_pb.UpdateSpotRequest, callback: grpc.requestCallback<spots_spots_pb.UpdateSpotResponse>): grpc.ClientUnaryCall;
  updateSpot(argument: spots_spots_pb.UpdateSpotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.UpdateSpotResponse>): grpc.ClientUnaryCall;
  updateSpot(argument: spots_spots_pb.UpdateSpotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.UpdateSpotResponse>): grpc.ClientUnaryCall;
  deleteSpot(argument: spots_spots_pb.DeleteSpotRequest, callback: grpc.requestCallback<spots_spots_pb.DeleteSpotResponse>): grpc.ClientUnaryCall;
  deleteSpot(argument: spots_spots_pb.DeleteSpotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.DeleteSpotResponse>): grpc.ClientUnaryCall;
  deleteSpot(argument: spots_spots_pb.DeleteSpotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<spots_spots_pb.DeleteSpotResponse>): grpc.ClientUnaryCall;
}
