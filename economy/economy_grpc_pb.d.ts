// GENERATED CODE -- DO NOT EDIT!

// package: mruv.economy
// file: economy/economy.proto

import * as economy_economy_pb from "../economy/economy_pb";
import * as grpc from "grpc";

interface IMruVEconomyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerProduct: grpc.MethodDefinition<economy_economy_pb.RegisterProductRequest, economy_economy_pb.RegisterProductResponse>;
  getProduct: grpc.MethodDefinition<economy_economy_pb.GetProductRequest, economy_economy_pb.GetProductResponse>;
  updateProduct: grpc.MethodDefinition<economy_economy_pb.UpdateProductRequest, economy_economy_pb.UpdateProductResponse>;
  deleteProduct: grpc.MethodDefinition<economy_economy_pb.DeleteProductRequest, economy_economy_pb.DeleteProductResponse>;
  updatePrice: grpc.MethodDefinition<economy_economy_pb.UpdatePriceRequest, economy_economy_pb.UpdatePriceResponse>;
  getPrice: grpc.MethodDefinition<economy_economy_pb.GetPriceRequest, economy_economy_pb.GetPriceResponse>;
  buyProduct: grpc.MethodDefinition<economy_economy_pb.BuyProductRequest, economy_economy_pb.BuyProductResponse>;
  watchProduct: grpc.MethodDefinition<economy_economy_pb.WatchProductRequest, economy_economy_pb.WatchProductResponse>;
  watchPrice: grpc.MethodDefinition<economy_economy_pb.WatchPriceRequest, economy_economy_pb.WatchPriceResponse>;
}

export const MruVEconomyServiceService: IMruVEconomyServiceService;

export class MruVEconomyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registerProduct(argument: economy_economy_pb.RegisterProductRequest, callback: grpc.requestCallback<economy_economy_pb.RegisterProductResponse>): grpc.ClientUnaryCall;
  registerProduct(argument: economy_economy_pb.RegisterProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.RegisterProductResponse>): grpc.ClientUnaryCall;
  registerProduct(argument: economy_economy_pb.RegisterProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.RegisterProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: economy_economy_pb.GetProductRequest, callback: grpc.requestCallback<economy_economy_pb.GetProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: economy_economy_pb.GetProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.GetProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: economy_economy_pb.GetProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.GetProductResponse>): grpc.ClientUnaryCall;
  updateProduct(argument: economy_economy_pb.UpdateProductRequest, callback: grpc.requestCallback<economy_economy_pb.UpdateProductResponse>): grpc.ClientUnaryCall;
  updateProduct(argument: economy_economy_pb.UpdateProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.UpdateProductResponse>): grpc.ClientUnaryCall;
  updateProduct(argument: economy_economy_pb.UpdateProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.UpdateProductResponse>): grpc.ClientUnaryCall;
  deleteProduct(argument: economy_economy_pb.DeleteProductRequest, callback: grpc.requestCallback<economy_economy_pb.DeleteProductResponse>): grpc.ClientUnaryCall;
  deleteProduct(argument: economy_economy_pb.DeleteProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.DeleteProductResponse>): grpc.ClientUnaryCall;
  deleteProduct(argument: economy_economy_pb.DeleteProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.DeleteProductResponse>): grpc.ClientUnaryCall;
  updatePrice(argument: economy_economy_pb.UpdatePriceRequest, callback: grpc.requestCallback<economy_economy_pb.UpdatePriceResponse>): grpc.ClientUnaryCall;
  updatePrice(argument: economy_economy_pb.UpdatePriceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.UpdatePriceResponse>): grpc.ClientUnaryCall;
  updatePrice(argument: economy_economy_pb.UpdatePriceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.UpdatePriceResponse>): grpc.ClientUnaryCall;
  getPrice(argument: economy_economy_pb.GetPriceRequest, callback: grpc.requestCallback<economy_economy_pb.GetPriceResponse>): grpc.ClientUnaryCall;
  getPrice(argument: economy_economy_pb.GetPriceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.GetPriceResponse>): grpc.ClientUnaryCall;
  getPrice(argument: economy_economy_pb.GetPriceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.GetPriceResponse>): grpc.ClientUnaryCall;
  buyProduct(argument: economy_economy_pb.BuyProductRequest, callback: grpc.requestCallback<economy_economy_pb.BuyProductResponse>): grpc.ClientUnaryCall;
  buyProduct(argument: economy_economy_pb.BuyProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.BuyProductResponse>): grpc.ClientUnaryCall;
  buyProduct(argument: economy_economy_pb.BuyProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<economy_economy_pb.BuyProductResponse>): grpc.ClientUnaryCall;
  watchProduct(argument: economy_economy_pb.WatchProductRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<economy_economy_pb.WatchProductResponse>;
  watchProduct(argument: economy_economy_pb.WatchProductRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<economy_economy_pb.WatchProductResponse>;
  watchPrice(argument: economy_economy_pb.WatchPriceRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<economy_economy_pb.WatchPriceResponse>;
  watchPrice(argument: economy_economy_pb.WatchPriceRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<economy_economy_pb.WatchPriceResponse>;
}
