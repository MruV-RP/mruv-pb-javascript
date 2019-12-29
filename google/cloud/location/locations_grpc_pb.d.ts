// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.location
// file: google/cloud/location/locations.proto

import * as google_cloud_location_locations_pb from "../../../google/cloud/location/locations_pb";
import * as grpc from "grpc";

interface ILocationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listLocations: grpc.MethodDefinition<google_cloud_location_locations_pb.ListLocationsRequest, google_cloud_location_locations_pb.ListLocationsResponse>;
  getLocation: grpc.MethodDefinition<google_cloud_location_locations_pb.GetLocationRequest, google_cloud_location_locations_pb.Location>;
}

export const LocationsService: ILocationsService;

export class LocationsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listLocations(argument: google_cloud_location_locations_pb.ListLocationsRequest, callback: grpc.requestCallback<google_cloud_location_locations_pb.ListLocationsResponse>): grpc.ClientUnaryCall;
  listLocations(argument: google_cloud_location_locations_pb.ListLocationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_location_locations_pb.ListLocationsResponse>): grpc.ClientUnaryCall;
  listLocations(argument: google_cloud_location_locations_pb.ListLocationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_location_locations_pb.ListLocationsResponse>): grpc.ClientUnaryCall;
  getLocation(argument: google_cloud_location_locations_pb.GetLocationRequest, callback: grpc.requestCallback<google_cloud_location_locations_pb.Location>): grpc.ClientUnaryCall;
  getLocation(argument: google_cloud_location_locations_pb.GetLocationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_location_locations_pb.Location>): grpc.ClientUnaryCall;
  getLocation(argument: google_cloud_location_locations_pb.GetLocationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_location_locations_pb.Location>): grpc.ClientUnaryCall;
}
