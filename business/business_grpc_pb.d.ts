// GENERATED CODE -- DO NOT EDIT!

// package: mruv.business
// file: business/business.proto

import * as business_business_pb from "../business/business_pb";
import * as grpc from "grpc";

interface IMruVBusinessServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createBusiness: grpc.MethodDefinition<business_business_pb.CreateBusinessRequest, business_business_pb.CreateBusinessResponse>;
  getBusiness: grpc.MethodDefinition<business_business_pb.GetBusinessRequest, business_business_pb.Business>;
  updateBusiness: grpc.MethodDefinition<business_business_pb.UpdateBusinessRequest, business_business_pb.Business>;
  deleteBusiness: grpc.MethodDefinition<business_business_pb.DeleteBusinessRequest, business_business_pb.DeleteBusinessResponse>;
  assignOwner: grpc.MethodDefinition<business_business_pb.AssignOwnerRequest, business_business_pb.AssignOwnerResponse>;
  assignEstate: grpc.MethodDefinition<business_business_pb.AssignEstateRequest, business_business_pb.AssignEstateResponse>;
  unassignEstate: grpc.MethodDefinition<business_business_pb.UnassignEstateRequest, business_business_pb.UnassignEstateResponse>;
  buyBusiness: grpc.MethodDefinition<business_business_pb.BuyBusinessRequest, business_business_pb.BuyBusinessResponse>;
  watchBusiness: grpc.MethodDefinition<business_business_pb.WatchBusinessRequest, business_business_pb.WatchBusinessResponse>;
  watchBusinesses: grpc.MethodDefinition<business_business_pb.WatchBusinessesRequest, business_business_pb.WatchBusinessesResponse>;
}

export const MruVBusinessServiceService: IMruVBusinessServiceService;

export class MruVBusinessServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createBusiness(argument: business_business_pb.CreateBusinessRequest, callback: grpc.requestCallback<business_business_pb.CreateBusinessResponse>): grpc.ClientUnaryCall;
  createBusiness(argument: business_business_pb.CreateBusinessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.CreateBusinessResponse>): grpc.ClientUnaryCall;
  createBusiness(argument: business_business_pb.CreateBusinessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.CreateBusinessResponse>): grpc.ClientUnaryCall;
  getBusiness(argument: business_business_pb.GetBusinessRequest, callback: grpc.requestCallback<business_business_pb.Business>): grpc.ClientUnaryCall;
  getBusiness(argument: business_business_pb.GetBusinessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.Business>): grpc.ClientUnaryCall;
  getBusiness(argument: business_business_pb.GetBusinessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.Business>): grpc.ClientUnaryCall;
  updateBusiness(argument: business_business_pb.UpdateBusinessRequest, callback: grpc.requestCallback<business_business_pb.Business>): grpc.ClientUnaryCall;
  updateBusiness(argument: business_business_pb.UpdateBusinessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.Business>): grpc.ClientUnaryCall;
  updateBusiness(argument: business_business_pb.UpdateBusinessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.Business>): grpc.ClientUnaryCall;
  deleteBusiness(argument: business_business_pb.DeleteBusinessRequest, callback: grpc.requestCallback<business_business_pb.DeleteBusinessResponse>): grpc.ClientUnaryCall;
  deleteBusiness(argument: business_business_pb.DeleteBusinessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.DeleteBusinessResponse>): grpc.ClientUnaryCall;
  deleteBusiness(argument: business_business_pb.DeleteBusinessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.DeleteBusinessResponse>): grpc.ClientUnaryCall;
  assignOwner(argument: business_business_pb.AssignOwnerRequest, callback: grpc.requestCallback<business_business_pb.AssignOwnerResponse>): grpc.ClientUnaryCall;
  assignOwner(argument: business_business_pb.AssignOwnerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.AssignOwnerResponse>): grpc.ClientUnaryCall;
  assignOwner(argument: business_business_pb.AssignOwnerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.AssignOwnerResponse>): grpc.ClientUnaryCall;
  assignEstate(argument: business_business_pb.AssignEstateRequest, callback: grpc.requestCallback<business_business_pb.AssignEstateResponse>): grpc.ClientUnaryCall;
  assignEstate(argument: business_business_pb.AssignEstateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.AssignEstateResponse>): grpc.ClientUnaryCall;
  assignEstate(argument: business_business_pb.AssignEstateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.AssignEstateResponse>): grpc.ClientUnaryCall;
  unassignEstate(argument: business_business_pb.UnassignEstateRequest, callback: grpc.requestCallback<business_business_pb.UnassignEstateResponse>): grpc.ClientUnaryCall;
  unassignEstate(argument: business_business_pb.UnassignEstateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.UnassignEstateResponse>): grpc.ClientUnaryCall;
  unassignEstate(argument: business_business_pb.UnassignEstateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.UnassignEstateResponse>): grpc.ClientUnaryCall;
  buyBusiness(argument: business_business_pb.BuyBusinessRequest, callback: grpc.requestCallback<business_business_pb.BuyBusinessResponse>): grpc.ClientUnaryCall;
  buyBusiness(argument: business_business_pb.BuyBusinessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.BuyBusinessResponse>): grpc.ClientUnaryCall;
  buyBusiness(argument: business_business_pb.BuyBusinessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<business_business_pb.BuyBusinessResponse>): grpc.ClientUnaryCall;
  watchBusiness(argument: business_business_pb.WatchBusinessRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<business_business_pb.WatchBusinessResponse>;
  watchBusiness(argument: business_business_pb.WatchBusinessRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<business_business_pb.WatchBusinessResponse>;
  watchBusinesses(argument: business_business_pb.WatchBusinessesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<business_business_pb.WatchBusinessesResponse>;
  watchBusinesses(argument: business_business_pb.WatchBusinessesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<business_business_pb.WatchBusinessesResponse>;
}
