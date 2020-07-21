// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var spots_spots_pb = require('../spots/spots_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_spots_CreateSpotRequest(arg) {
  if (!(arg instanceof spots_spots_pb.CreateSpotRequest)) {
    throw new Error('Expected argument of type mruv.spots.CreateSpotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_CreateSpotRequest(buffer_arg) {
  return spots_spots_pb.CreateSpotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_CreateSpotResponse(arg) {
  if (!(arg instanceof spots_spots_pb.CreateSpotResponse)) {
    throw new Error('Expected argument of type mruv.spots.CreateSpotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_CreateSpotResponse(buffer_arg) {
  return spots_spots_pb.CreateSpotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_DeleteSpotRequest(arg) {
  if (!(arg instanceof spots_spots_pb.DeleteSpotRequest)) {
    throw new Error('Expected argument of type mruv.spots.DeleteSpotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_DeleteSpotRequest(buffer_arg) {
  return spots_spots_pb.DeleteSpotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_DeleteSpotResponse(arg) {
  if (!(arg instanceof spots_spots_pb.DeleteSpotResponse)) {
    throw new Error('Expected argument of type mruv.spots.DeleteSpotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_DeleteSpotResponse(buffer_arg) {
  return spots_spots_pb.DeleteSpotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_GetSpotRequest(arg) {
  if (!(arg instanceof spots_spots_pb.GetSpotRequest)) {
    throw new Error('Expected argument of type mruv.spots.GetSpotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_GetSpotRequest(buffer_arg) {
  return spots_spots_pb.GetSpotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_GetSpotResponse(arg) {
  if (!(arg instanceof spots_spots_pb.GetSpotResponse)) {
    throw new Error('Expected argument of type mruv.spots.GetSpotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_GetSpotResponse(buffer_arg) {
  return spots_spots_pb.GetSpotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_UpdateSpotRequest(arg) {
  if (!(arg instanceof spots_spots_pb.UpdateSpotRequest)) {
    throw new Error('Expected argument of type mruv.spots.UpdateSpotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_UpdateSpotRequest(buffer_arg) {
  return spots_spots_pb.UpdateSpotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_spots_UpdateSpotResponse(arg) {
  if (!(arg instanceof spots_spots_pb.UpdateSpotResponse)) {
    throw new Error('Expected argument of type mruv.spots.UpdateSpotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_spots_UpdateSpotResponse(buffer_arg) {
  return spots_spots_pb.UpdateSpotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV spots service provides procedures for managing spots.
var MruVSpotsServiceService = exports.MruVSpotsServiceService = {
  // Create a spot.
  createSpot: {
    path: '/mruv.spots.MruVSpotsService/CreateSpot',
    requestStream: false,
    responseStream: false,
    requestType: spots_spots_pb.CreateSpotRequest,
    responseType: spots_spots_pb.CreateSpotResponse,
    requestSerialize: serialize_mruv_spots_CreateSpotRequest,
    requestDeserialize: deserialize_mruv_spots_CreateSpotRequest,
    responseSerialize: serialize_mruv_spots_CreateSpotResponse,
    responseDeserialize: deserialize_mruv_spots_CreateSpotResponse,
  },
  // Get a spot.
  getSpot: {
    path: '/mruv.spots.MruVSpotsService/GetSpot',
    requestStream: false,
    responseStream: false,
    requestType: spots_spots_pb.GetSpotRequest,
    responseType: spots_spots_pb.GetSpotResponse,
    requestSerialize: serialize_mruv_spots_GetSpotRequest,
    requestDeserialize: deserialize_mruv_spots_GetSpotRequest,
    responseSerialize: serialize_mruv_spots_GetSpotResponse,
    responseDeserialize: deserialize_mruv_spots_GetSpotResponse,
  },
  // Update a spot.
  updateSpot: {
    path: '/mruv.spots.MruVSpotsService/UpdateSpot',
    requestStream: false,
    responseStream: false,
    requestType: spots_spots_pb.UpdateSpotRequest,
    responseType: spots_spots_pb.UpdateSpotResponse,
    requestSerialize: serialize_mruv_spots_UpdateSpotRequest,
    requestDeserialize: deserialize_mruv_spots_UpdateSpotRequest,
    responseSerialize: serialize_mruv_spots_UpdateSpotResponse,
    responseDeserialize: deserialize_mruv_spots_UpdateSpotResponse,
  },
  // Delete a spot.
  deleteSpot: {
    path: '/mruv.spots.MruVSpotsService/DeleteSpot',
    requestStream: false,
    responseStream: false,
    requestType: spots_spots_pb.DeleteSpotRequest,
    responseType: spots_spots_pb.DeleteSpotResponse,
    requestSerialize: serialize_mruv_spots_DeleteSpotRequest,
    requestDeserialize: deserialize_mruv_spots_DeleteSpotRequest,
    responseSerialize: serialize_mruv_spots_DeleteSpotResponse,
    responseDeserialize: deserialize_mruv_spots_DeleteSpotResponse,
  },
};

exports.MruVSpotsServiceClient = grpc.makeGenericClientConstructor(MruVSpotsServiceService);
