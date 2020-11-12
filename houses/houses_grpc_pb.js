// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var houses_houses_pb = require('../houses/houses_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_houses_CreateHouseRequest(arg) {
  if (!(arg instanceof houses_houses_pb.CreateHouseRequest)) {
    throw new Error('Expected argument of type mruv.houses.CreateHouseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_CreateHouseRequest(buffer_arg) {
  return houses_houses_pb.CreateHouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_CreateHouseResponse(arg) {
  if (!(arg instanceof houses_houses_pb.CreateHouseResponse)) {
    throw new Error('Expected argument of type mruv.houses.CreateHouseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_CreateHouseResponse(buffer_arg) {
  return houses_houses_pb.CreateHouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_DeleteHouseRequest(arg) {
  if (!(arg instanceof houses_houses_pb.DeleteHouseRequest)) {
    throw new Error('Expected argument of type mruv.houses.DeleteHouseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_DeleteHouseRequest(buffer_arg) {
  return houses_houses_pb.DeleteHouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_DeleteHouseResponse(arg) {
  if (!(arg instanceof houses_houses_pb.DeleteHouseResponse)) {
    throw new Error('Expected argument of type mruv.houses.DeleteHouseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_DeleteHouseResponse(buffer_arg) {
  return houses_houses_pb.DeleteHouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_GetHouseRequest(arg) {
  if (!(arg instanceof houses_houses_pb.GetHouseRequest)) {
    throw new Error('Expected argument of type mruv.houses.GetHouseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_GetHouseRequest(buffer_arg) {
  return houses_houses_pb.GetHouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_GetHouseResponse(arg) {
  if (!(arg instanceof houses_houses_pb.GetHouseResponse)) {
    throw new Error('Expected argument of type mruv.houses.GetHouseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_GetHouseResponse(buffer_arg) {
  return houses_houses_pb.GetHouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_UpdateHouseRequest(arg) {
  if (!(arg instanceof houses_houses_pb.UpdateHouseRequest)) {
    throw new Error('Expected argument of type mruv.houses.UpdateHouseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_UpdateHouseRequest(buffer_arg) {
  return houses_houses_pb.UpdateHouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_houses_UpdateHouseResponse(arg) {
  if (!(arg instanceof houses_houses_pb.UpdateHouseResponse)) {
    throw new Error('Expected argument of type mruv.houses.UpdateHouseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_houses_UpdateHouseResponse(buffer_arg) {
  return houses_houses_pb.UpdateHouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV houses service provides procedures for managing houses.
var MruVHousesServiceService = exports.MruVHousesServiceService = {
  // Create a house.
  createHouse: {
    path: '/mruv.houses.MruVHousesService/CreateHouse',
    requestStream: false,
    responseStream: false,
    requestType: houses_houses_pb.CreateHouseRequest,
    responseType: houses_houses_pb.CreateHouseResponse,
    requestSerialize: serialize_mruv_houses_CreateHouseRequest,
    requestDeserialize: deserialize_mruv_houses_CreateHouseRequest,
    responseSerialize: serialize_mruv_houses_CreateHouseResponse,
    responseDeserialize: deserialize_mruv_houses_CreateHouseResponse,
  },
  // Get a house.
  getHouse: {
    path: '/mruv.houses.MruVHousesService/GetHouse',
    requestStream: false,
    responseStream: false,
    requestType: houses_houses_pb.GetHouseRequest,
    responseType: houses_houses_pb.GetHouseResponse,
    requestSerialize: serialize_mruv_houses_GetHouseRequest,
    requestDeserialize: deserialize_mruv_houses_GetHouseRequest,
    responseSerialize: serialize_mruv_houses_GetHouseResponse,
    responseDeserialize: deserialize_mruv_houses_GetHouseResponse,
  },
  // Update a house.
  updateHouse: {
    path: '/mruv.houses.MruVHousesService/UpdateHouse',
    requestStream: false,
    responseStream: false,
    requestType: houses_houses_pb.UpdateHouseRequest,
    responseType: houses_houses_pb.UpdateHouseResponse,
    requestSerialize: serialize_mruv_houses_UpdateHouseRequest,
    requestDeserialize: deserialize_mruv_houses_UpdateHouseRequest,
    responseSerialize: serialize_mruv_houses_UpdateHouseResponse,
    responseDeserialize: deserialize_mruv_houses_UpdateHouseResponse,
  },
  // Delete a house.
  deleteHouse: {
    path: '/mruv.houses.MruVHousesService/DeleteHouse',
    requestStream: false,
    responseStream: false,
    requestType: houses_houses_pb.DeleteHouseRequest,
    responseType: houses_houses_pb.DeleteHouseResponse,
    requestSerialize: serialize_mruv_houses_DeleteHouseRequest,
    requestDeserialize: deserialize_mruv_houses_DeleteHouseRequest,
    responseSerialize: serialize_mruv_houses_DeleteHouseResponse,
    responseDeserialize: deserialize_mruv_houses_DeleteHouseResponse,
  },
};

exports.MruVHousesServiceClient = grpc.makeGenericClientConstructor(MruVHousesServiceService);
