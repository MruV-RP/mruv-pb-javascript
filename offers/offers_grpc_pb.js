// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var offers_offers_pb = require('../offers/offers_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_offers_AcceptOfferRequest(arg) {
  if (!(arg instanceof offers_offers_pb.AcceptOfferRequest)) {
    throw new Error('Expected argument of type mruv.offers.AcceptOfferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_AcceptOfferRequest(buffer_arg) {
  return offers_offers_pb.AcceptOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_AcceptOfferResponse(arg) {
  if (!(arg instanceof offers_offers_pb.AcceptOfferResponse)) {
    throw new Error('Expected argument of type mruv.offers.AcceptOfferResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_AcceptOfferResponse(buffer_arg) {
  return offers_offers_pb.AcceptOfferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_CreateOfferRequest(arg) {
  if (!(arg instanceof offers_offers_pb.CreateOfferRequest)) {
    throw new Error('Expected argument of type mruv.offers.CreateOfferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_CreateOfferRequest(buffer_arg) {
  return offers_offers_pb.CreateOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_CreateOfferResponse(arg) {
  if (!(arg instanceof offers_offers_pb.CreateOfferResponse)) {
    throw new Error('Expected argument of type mruv.offers.CreateOfferResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_CreateOfferResponse(buffer_arg) {
  return offers_offers_pb.CreateOfferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_DeleteOfferRequest(arg) {
  if (!(arg instanceof offers_offers_pb.DeleteOfferRequest)) {
    throw new Error('Expected argument of type mruv.offers.DeleteOfferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_DeleteOfferRequest(buffer_arg) {
  return offers_offers_pb.DeleteOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_DeleteOfferResponse(arg) {
  if (!(arg instanceof offers_offers_pb.DeleteOfferResponse)) {
    throw new Error('Expected argument of type mruv.offers.DeleteOfferResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_DeleteOfferResponse(buffer_arg) {
  return offers_offers_pb.DeleteOfferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_GetOfferRequest(arg) {
  if (!(arg instanceof offers_offers_pb.GetOfferRequest)) {
    throw new Error('Expected argument of type mruv.offers.GetOfferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_GetOfferRequest(buffer_arg) {
  return offers_offers_pb.GetOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_GetOfferResponse(arg) {
  if (!(arg instanceof offers_offers_pb.GetOfferResponse)) {
    throw new Error('Expected argument of type mruv.offers.GetOfferResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_GetOfferResponse(buffer_arg) {
  return offers_offers_pb.GetOfferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_UpdateOfferRequest(arg) {
  if (!(arg instanceof offers_offers_pb.UpdateOfferRequest)) {
    throw new Error('Expected argument of type mruv.offers.UpdateOfferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_UpdateOfferRequest(buffer_arg) {
  return offers_offers_pb.UpdateOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_offers_UpdateOfferResponse(arg) {
  if (!(arg instanceof offers_offers_pb.UpdateOfferResponse)) {
    throw new Error('Expected argument of type mruv.offers.UpdateOfferResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_offers_UpdateOfferResponse(buffer_arg) {
  return offers_offers_pb.UpdateOfferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV offers service.
var MruVOffersServiceService = exports.MruVOffersServiceService = {
  // Create an offer.
  createOffer: {
    path: '/mruv.offers.MruVOffersService/CreateOffer',
    requestStream: false,
    responseStream: false,
    requestType: offers_offers_pb.CreateOfferRequest,
    responseType: offers_offers_pb.CreateOfferResponse,
    requestSerialize: serialize_mruv_offers_CreateOfferRequest,
    requestDeserialize: deserialize_mruv_offers_CreateOfferRequest,
    responseSerialize: serialize_mruv_offers_CreateOfferResponse,
    responseDeserialize: deserialize_mruv_offers_CreateOfferResponse,
  },
  // Get an offer.
  getOffer: {
    path: '/mruv.offers.MruVOffersService/GetOffer',
    requestStream: false,
    responseStream: false,
    requestType: offers_offers_pb.GetOfferRequest,
    responseType: offers_offers_pb.GetOfferResponse,
    requestSerialize: serialize_mruv_offers_GetOfferRequest,
    requestDeserialize: deserialize_mruv_offers_GetOfferRequest,
    responseSerialize: serialize_mruv_offers_GetOfferResponse,
    responseDeserialize: deserialize_mruv_offers_GetOfferResponse,
  },
  // Update an offer.
  updateOffer: {
    path: '/mruv.offers.MruVOffersService/UpdateOffer',
    requestStream: false,
    responseStream: false,
    requestType: offers_offers_pb.UpdateOfferRequest,
    responseType: offers_offers_pb.UpdateOfferResponse,
    requestSerialize: serialize_mruv_offers_UpdateOfferRequest,
    requestDeserialize: deserialize_mruv_offers_UpdateOfferRequest,
    responseSerialize: serialize_mruv_offers_UpdateOfferResponse,
    responseDeserialize: deserialize_mruv_offers_UpdateOfferResponse,
  },
  // Delete an offer.
  deleteOffer: {
    path: '/mruv.offers.MruVOffersService/DeleteOffer',
    requestStream: false,
    responseStream: false,
    requestType: offers_offers_pb.DeleteOfferRequest,
    responseType: offers_offers_pb.DeleteOfferResponse,
    requestSerialize: serialize_mruv_offers_DeleteOfferRequest,
    requestDeserialize: deserialize_mruv_offers_DeleteOfferRequest,
    responseSerialize: serialize_mruv_offers_DeleteOfferResponse,
    responseDeserialize: deserialize_mruv_offers_DeleteOfferResponse,
  },
  // Accept an offer and proceed transaction.
  acceptOffer: {
    path: '/mruv.offers.MruVOffersService/AcceptOffer',
    requestStream: false,
    responseStream: false,
    requestType: offers_offers_pb.AcceptOfferRequest,
    responseType: offers_offers_pb.AcceptOfferResponse,
    requestSerialize: serialize_mruv_offers_AcceptOfferRequest,
    requestDeserialize: deserialize_mruv_offers_AcceptOfferRequest,
    responseSerialize: serialize_mruv_offers_AcceptOfferResponse,
    responseDeserialize: deserialize_mruv_offers_AcceptOfferResponse,
  },
};

exports.MruVOffersServiceClient = grpc.makeGenericClientConstructor(MruVOffersServiceService);
