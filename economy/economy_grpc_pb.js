// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var economy_economy_pb = require('../economy/economy_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_economy_BuyProductRequest(arg) {
  if (!(arg instanceof economy_economy_pb.BuyProductRequest)) {
    throw new Error('Expected argument of type mruv.economy.BuyProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BuyProductRequest(buffer_arg) {
  return economy_economy_pb.BuyProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BuyProductResponse(arg) {
  if (!(arg instanceof economy_economy_pb.BuyProductResponse)) {
    throw new Error('Expected argument of type mruv.economy.BuyProductResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BuyProductResponse(buffer_arg) {
  return economy_economy_pb.BuyProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_DeleteProductRequest(arg) {
  if (!(arg instanceof economy_economy_pb.DeleteProductRequest)) {
    throw new Error('Expected argument of type mruv.economy.DeleteProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_DeleteProductRequest(buffer_arg) {
  return economy_economy_pb.DeleteProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_DeleteProductResponse(arg) {
  if (!(arg instanceof economy_economy_pb.DeleteProductResponse)) {
    throw new Error('Expected argument of type mruv.economy.DeleteProductResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_DeleteProductResponse(buffer_arg) {
  return economy_economy_pb.DeleteProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPriceRequest(arg) {
  if (!(arg instanceof economy_economy_pb.GetPriceRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetPriceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPriceRequest(buffer_arg) {
  return economy_economy_pb.GetPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPriceResponse(arg) {
  if (!(arg instanceof economy_economy_pb.GetPriceResponse)) {
    throw new Error('Expected argument of type mruv.economy.GetPriceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPriceResponse(buffer_arg) {
  return economy_economy_pb.GetPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetProductRequest(arg) {
  if (!(arg instanceof economy_economy_pb.GetProductRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetProductRequest(buffer_arg) {
  return economy_economy_pb.GetProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetProductResponse(arg) {
  if (!(arg instanceof economy_economy_pb.GetProductResponse)) {
    throw new Error('Expected argument of type mruv.economy.GetProductResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetProductResponse(buffer_arg) {
  return economy_economy_pb.GetProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_RegisterProductRequest(arg) {
  if (!(arg instanceof economy_economy_pb.RegisterProductRequest)) {
    throw new Error('Expected argument of type mruv.economy.RegisterProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_RegisterProductRequest(buffer_arg) {
  return economy_economy_pb.RegisterProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_RegisterProductResponse(arg) {
  if (!(arg instanceof economy_economy_pb.RegisterProductResponse)) {
    throw new Error('Expected argument of type mruv.economy.RegisterProductResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_RegisterProductResponse(buffer_arg) {
  return economy_economy_pb.RegisterProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UpdatePriceRequest(arg) {
  if (!(arg instanceof economy_economy_pb.UpdatePriceRequest)) {
    throw new Error('Expected argument of type mruv.economy.UpdatePriceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UpdatePriceRequest(buffer_arg) {
  return economy_economy_pb.UpdatePriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UpdatePriceResponse(arg) {
  if (!(arg instanceof economy_economy_pb.UpdatePriceResponse)) {
    throw new Error('Expected argument of type mruv.economy.UpdatePriceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UpdatePriceResponse(buffer_arg) {
  return economy_economy_pb.UpdatePriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UpdateProductRequest(arg) {
  if (!(arg instanceof economy_economy_pb.UpdateProductRequest)) {
    throw new Error('Expected argument of type mruv.economy.UpdateProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UpdateProductRequest(buffer_arg) {
  return economy_economy_pb.UpdateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UpdateProductResponse(arg) {
  if (!(arg instanceof economy_economy_pb.UpdateProductResponse)) {
    throw new Error('Expected argument of type mruv.economy.UpdateProductResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UpdateProductResponse(buffer_arg) {
  return economy_economy_pb.UpdateProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPriceRequest(arg) {
  if (!(arg instanceof economy_economy_pb.WatchPriceRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchPriceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPriceRequest(buffer_arg) {
  return economy_economy_pb.WatchPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPriceResponse(arg) {
  if (!(arg instanceof economy_economy_pb.WatchPriceResponse)) {
    throw new Error('Expected argument of type mruv.economy.WatchPriceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPriceResponse(buffer_arg) {
  return economy_economy_pb.WatchPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchProductRequest(arg) {
  if (!(arg instanceof economy_economy_pb.WatchProductRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchProductRequest(buffer_arg) {
  return economy_economy_pb.WatchProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchProductResponse(arg) {
  if (!(arg instanceof economy_economy_pb.WatchProductResponse)) {
    throw new Error('Expected argument of type mruv.economy.WatchProductResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchProductResponse(buffer_arg) {
  return economy_economy_pb.WatchProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV economy service provides procedures for managing prices and economy.
var MruVEconomyServiceService = exports.MruVEconomyServiceService = {
  // Register price in economy system.
  registerProduct: {
    path: '/mruv.economy.MruVEconomyService/RegisterProduct',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.RegisterProductRequest,
    responseType: economy_economy_pb.RegisterProductResponse,
    requestSerialize: serialize_mruv_economy_RegisterProductRequest,
    requestDeserialize: deserialize_mruv_economy_RegisterProductRequest,
    responseSerialize: serialize_mruv_economy_RegisterProductResponse,
    responseDeserialize: deserialize_mruv_economy_RegisterProductResponse,
  },
  // Get product information.
  getProduct: {
    path: '/mruv.economy.MruVEconomyService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.GetProductRequest,
    responseType: economy_economy_pb.GetProductResponse,
    requestSerialize: serialize_mruv_economy_GetProductRequest,
    requestDeserialize: deserialize_mruv_economy_GetProductRequest,
    responseSerialize: serialize_mruv_economy_GetProductResponse,
    responseDeserialize: deserialize_mruv_economy_GetProductResponse,
  },
  // Update product information.
  updateProduct: {
    path: '/mruv.economy.MruVEconomyService/UpdateProduct',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.UpdateProductRequest,
    responseType: economy_economy_pb.UpdateProductResponse,
    requestSerialize: serialize_mruv_economy_UpdateProductRequest,
    requestDeserialize: deserialize_mruv_economy_UpdateProductRequest,
    responseSerialize: serialize_mruv_economy_UpdateProductResponse,
    responseDeserialize: deserialize_mruv_economy_UpdateProductResponse,
  },
  //
  deleteProduct: {
    path: '/mruv.economy.MruVEconomyService/DeleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.DeleteProductRequest,
    responseType: economy_economy_pb.DeleteProductResponse,
    requestSerialize: serialize_mruv_economy_DeleteProductRequest,
    requestDeserialize: deserialize_mruv_economy_DeleteProductRequest,
    responseSerialize: serialize_mruv_economy_DeleteProductResponse,
    responseDeserialize: deserialize_mruv_economy_DeleteProductResponse,
  },
  // Update product price.
  updatePrice: {
    path: '/mruv.economy.MruVEconomyService/UpdatePrice',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.UpdatePriceRequest,
    responseType: economy_economy_pb.UpdatePriceResponse,
    requestSerialize: serialize_mruv_economy_UpdatePriceRequest,
    requestDeserialize: deserialize_mruv_economy_UpdatePriceRequest,
    responseSerialize: serialize_mruv_economy_UpdatePriceResponse,
    responseDeserialize: deserialize_mruv_economy_UpdatePriceResponse,
  },
  // Get current value for registered price.
  getPrice: {
    path: '/mruv.economy.MruVEconomyService/GetPrice',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.GetPriceRequest,
    responseType: economy_economy_pb.GetPriceResponse,
    requestSerialize: serialize_mruv_economy_GetPriceRequest,
    requestDeserialize: deserialize_mruv_economy_GetPriceRequest,
    responseSerialize: serialize_mruv_economy_GetPriceResponse,
    responseDeserialize: deserialize_mruv_economy_GetPriceResponse,
  },
  // Send information to the system, that the product has been purchased.
  // This rpc call can affect a product price.
  buyProduct: {
    path: '/mruv.economy.MruVEconomyService/BuyProduct',
    requestStream: false,
    responseStream: false,
    requestType: economy_economy_pb.BuyProductRequest,
    responseType: economy_economy_pb.BuyProductResponse,
    requestSerialize: serialize_mruv_economy_BuyProductRequest,
    requestDeserialize: deserialize_mruv_economy_BuyProductRequest,
    responseSerialize: serialize_mruv_economy_BuyProductResponse,
    responseDeserialize: deserialize_mruv_economy_BuyProductResponse,
  },
  // Subscribe to events related to a product.
  watchProduct: {
    path: '/mruv.economy.MruVEconomyService/WatchProduct',
    requestStream: false,
    responseStream: true,
    requestType: economy_economy_pb.WatchProductRequest,
    responseType: economy_economy_pb.WatchProductResponse,
    requestSerialize: serialize_mruv_economy_WatchProductRequest,
    requestDeserialize: deserialize_mruv_economy_WatchProductRequest,
    responseSerialize: serialize_mruv_economy_WatchProductResponse,
    responseDeserialize: deserialize_mruv_economy_WatchProductResponse,
  },
  // Subscribe to product price changes.
  watchPrice: {
    path: '/mruv.economy.MruVEconomyService/WatchPrice',
    requestStream: false,
    responseStream: true,
    requestType: economy_economy_pb.WatchPriceRequest,
    responseType: economy_economy_pb.WatchPriceResponse,
    requestSerialize: serialize_mruv_economy_WatchPriceRequest,
    requestDeserialize: deserialize_mruv_economy_WatchPriceRequest,
    responseSerialize: serialize_mruv_economy_WatchPriceResponse,
    responseDeserialize: deserialize_mruv_economy_WatchPriceResponse,
  },
};

exports.MruVEconomyServiceClient = grpc.makeGenericClientConstructor(MruVEconomyServiceService);
