// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var vehicles_vehicles_pb = require('../vehicles/vehicles_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_vehicles_CreateVehicleRequest(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.CreateVehicleRequest)) {
    throw new Error('Expected argument of type mruv.vehicles.CreateVehicleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_CreateVehicleRequest(buffer_arg) {
  return vehicles_vehicles_pb.CreateVehicleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_CreateVehicleResponse(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.CreateVehicleResponse)) {
    throw new Error('Expected argument of type mruv.vehicles.CreateVehicleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_CreateVehicleResponse(buffer_arg) {
  return vehicles_vehicles_pb.CreateVehicleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_DeleteVehicleRequest(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.DeleteVehicleRequest)) {
    throw new Error('Expected argument of type mruv.vehicles.DeleteVehicleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_DeleteVehicleRequest(buffer_arg) {
  return vehicles_vehicles_pb.DeleteVehicleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_DeleteVehicleResponse(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.DeleteVehicleResponse)) {
    throw new Error('Expected argument of type mruv.vehicles.DeleteVehicleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_DeleteVehicleResponse(buffer_arg) {
  return vehicles_vehicles_pb.DeleteVehicleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_GetVehicleRequest(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.GetVehicleRequest)) {
    throw new Error('Expected argument of type mruv.vehicles.GetVehicleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_GetVehicleRequest(buffer_arg) {
  return vehicles_vehicles_pb.GetVehicleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_GetVehicleResponse(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.GetVehicleResponse)) {
    throw new Error('Expected argument of type mruv.vehicles.GetVehicleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_GetVehicleResponse(buffer_arg) {
  return vehicles_vehicles_pb.GetVehicleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_UpdateVehicleRequest(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.UpdateVehicleRequest)) {
    throw new Error('Expected argument of type mruv.vehicles.UpdateVehicleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_UpdateVehicleRequest(buffer_arg) {
  return vehicles_vehicles_pb.UpdateVehicleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_vehicles_UpdateVehicleResponse(arg) {
  if (!(arg instanceof vehicles_vehicles_pb.UpdateVehicleResponse)) {
    throw new Error('Expected argument of type mruv.vehicles.UpdateVehicleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_vehicles_UpdateVehicleResponse(buffer_arg) {
  return vehicles_vehicles_pb.UpdateVehicleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV vehicles service provides procedures for managing vehicles.
var MruVVehiclesServiceService = exports.MruVVehiclesServiceService = {
  // Create a vehicle.
  createVehicle: {
    path: '/mruv.vehicles.MruVVehiclesService/CreateVehicle',
    requestStream: false,
    responseStream: false,
    requestType: vehicles_vehicles_pb.CreateVehicleRequest,
    responseType: vehicles_vehicles_pb.CreateVehicleResponse,
    requestSerialize: serialize_mruv_vehicles_CreateVehicleRequest,
    requestDeserialize: deserialize_mruv_vehicles_CreateVehicleRequest,
    responseSerialize: serialize_mruv_vehicles_CreateVehicleResponse,
    responseDeserialize: deserialize_mruv_vehicles_CreateVehicleResponse,
  },
  // Get a vehicle.
  getVehicle: {
    path: '/mruv.vehicles.MruVVehiclesService/GetVehicle',
    requestStream: false,
    responseStream: false,
    requestType: vehicles_vehicles_pb.GetVehicleRequest,
    responseType: vehicles_vehicles_pb.GetVehicleResponse,
    requestSerialize: serialize_mruv_vehicles_GetVehicleRequest,
    requestDeserialize: deserialize_mruv_vehicles_GetVehicleRequest,
    responseSerialize: serialize_mruv_vehicles_GetVehicleResponse,
    responseDeserialize: deserialize_mruv_vehicles_GetVehicleResponse,
  },
  // Update a vehicle.
  updateVehicle: {
    path: '/mruv.vehicles.MruVVehiclesService/UpdateVehicle',
    requestStream: false,
    responseStream: false,
    requestType: vehicles_vehicles_pb.UpdateVehicleRequest,
    responseType: vehicles_vehicles_pb.UpdateVehicleResponse,
    requestSerialize: serialize_mruv_vehicles_UpdateVehicleRequest,
    requestDeserialize: deserialize_mruv_vehicles_UpdateVehicleRequest,
    responseSerialize: serialize_mruv_vehicles_UpdateVehicleResponse,
    responseDeserialize: deserialize_mruv_vehicles_UpdateVehicleResponse,
  },
  // Delete a vehicle.
  deleteVehicle: {
    path: '/mruv.vehicles.MruVVehiclesService/DeleteVehicle',
    requestStream: false,
    responseStream: false,
    requestType: vehicles_vehicles_pb.DeleteVehicleRequest,
    responseType: vehicles_vehicles_pb.DeleteVehicleResponse,
    requestSerialize: serialize_mruv_vehicles_DeleteVehicleRequest,
    requestDeserialize: deserialize_mruv_vehicles_DeleteVehicleRequest,
    responseSerialize: serialize_mruv_vehicles_DeleteVehicleResponse,
    responseDeserialize: deserialize_mruv_vehicles_DeleteVehicleResponse,
  },
};

exports.MruVVehiclesServiceClient = grpc.makeGenericClientConstructor(MruVVehiclesServiceService);
