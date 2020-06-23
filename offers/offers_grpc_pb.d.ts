// GENERATED CODE -- DO NOT EDIT!

// package: mruv.offers
// file: offers/offers.proto

import * as offers_offers_pb from "../offers/offers_pb";
import * as grpc from "grpc";

interface IMruVOffersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOffer: grpc.MethodDefinition<offers_offers_pb.CreateOfferRequest, offers_offers_pb.CreateOfferResponse>;
  getOffer: grpc.MethodDefinition<offers_offers_pb.GetOfferRequest, offers_offers_pb.GetOfferResponse>;
  updateOffer: grpc.MethodDefinition<offers_offers_pb.UpdateOfferRequest, offers_offers_pb.UpdateOfferResponse>;
  deleteOffer: grpc.MethodDefinition<offers_offers_pb.DeleteOfferRequest, offers_offers_pb.DeleteOfferResponse>;
  acceptOffer: grpc.MethodDefinition<offers_offers_pb.AcceptOfferRequest, offers_offers_pb.AcceptOfferResponse>;
}

export const MruVOffersServiceService: IMruVOffersServiceService;

export class MruVOffersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createOffer(argument: offers_offers_pb.CreateOfferRequest, callback: grpc.requestCallback<offers_offers_pb.CreateOfferResponse>): grpc.ClientUnaryCall;
  createOffer(argument: offers_offers_pb.CreateOfferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.CreateOfferResponse>): grpc.ClientUnaryCall;
  createOffer(argument: offers_offers_pb.CreateOfferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.CreateOfferResponse>): grpc.ClientUnaryCall;
  getOffer(argument: offers_offers_pb.GetOfferRequest, callback: grpc.requestCallback<offers_offers_pb.GetOfferResponse>): grpc.ClientUnaryCall;
  getOffer(argument: offers_offers_pb.GetOfferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.GetOfferResponse>): grpc.ClientUnaryCall;
  getOffer(argument: offers_offers_pb.GetOfferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.GetOfferResponse>): grpc.ClientUnaryCall;
  updateOffer(argument: offers_offers_pb.UpdateOfferRequest, callback: grpc.requestCallback<offers_offers_pb.UpdateOfferResponse>): grpc.ClientUnaryCall;
  updateOffer(argument: offers_offers_pb.UpdateOfferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.UpdateOfferResponse>): grpc.ClientUnaryCall;
  updateOffer(argument: offers_offers_pb.UpdateOfferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.UpdateOfferResponse>): grpc.ClientUnaryCall;
  deleteOffer(argument: offers_offers_pb.DeleteOfferRequest, callback: grpc.requestCallback<offers_offers_pb.DeleteOfferResponse>): grpc.ClientUnaryCall;
  deleteOffer(argument: offers_offers_pb.DeleteOfferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.DeleteOfferResponse>): grpc.ClientUnaryCall;
  deleteOffer(argument: offers_offers_pb.DeleteOfferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.DeleteOfferResponse>): grpc.ClientUnaryCall;
  acceptOffer(argument: offers_offers_pb.AcceptOfferRequest, callback: grpc.requestCallback<offers_offers_pb.AcceptOfferResponse>): grpc.ClientUnaryCall;
  acceptOffer(argument: offers_offers_pb.AcceptOfferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.AcceptOfferResponse>): grpc.ClientUnaryCall;
  acceptOffer(argument: offers_offers_pb.AcceptOfferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offers_offers_pb.AcceptOfferResponse>): grpc.ClientUnaryCall;
}
