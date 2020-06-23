// GENERATED CODE -- DO NOT EDIT!

// package: mruv.vehicles
// file: vehicles/tuning.proto

import * as vehicles_tuning_pb from "../vehicles/tuning_pb";
import * as grpc from "grpc";

interface IMruVTuningServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
}

export const MruVTuningServiceService: IMruVTuningServiceService;

export class MruVTuningServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
}
