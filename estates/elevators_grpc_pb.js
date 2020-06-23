// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var estates_elevators_pb = require('../estates/elevators_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_elevators_CreateElevatorRequest(arg) {
  if (!(arg instanceof estates_elevators_pb.CreateElevatorRequest)) {
    throw new Error('Expected argument of type mruv.elevators.CreateElevatorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_CreateElevatorRequest(buffer_arg) {
  return estates_elevators_pb.CreateElevatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_CreateElevatorResponse(arg) {
  if (!(arg instanceof estates_elevators_pb.CreateElevatorResponse)) {
    throw new Error('Expected argument of type mruv.elevators.CreateElevatorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_CreateElevatorResponse(buffer_arg) {
  return estates_elevators_pb.CreateElevatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_DeleteElevatorRequest(arg) {
  if (!(arg instanceof estates_elevators_pb.DeleteElevatorRequest)) {
    throw new Error('Expected argument of type mruv.elevators.DeleteElevatorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_DeleteElevatorRequest(buffer_arg) {
  return estates_elevators_pb.DeleteElevatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_DeleteElevatorResponse(arg) {
  if (!(arg instanceof estates_elevators_pb.DeleteElevatorResponse)) {
    throw new Error('Expected argument of type mruv.elevators.DeleteElevatorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_DeleteElevatorResponse(buffer_arg) {
  return estates_elevators_pb.DeleteElevatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_GetElevatorFloorsRequest(arg) {
  if (!(arg instanceof estates_elevators_pb.GetElevatorFloorsRequest)) {
    throw new Error('Expected argument of type mruv.elevators.GetElevatorFloorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_GetElevatorFloorsRequest(buffer_arg) {
  return estates_elevators_pb.GetElevatorFloorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_GetElevatorFloorsResponse(arg) {
  if (!(arg instanceof estates_elevators_pb.GetElevatorFloorsResponse)) {
    throw new Error('Expected argument of type mruv.elevators.GetElevatorFloorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_GetElevatorFloorsResponse(buffer_arg) {
  return estates_elevators_pb.GetElevatorFloorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_GetElevatorRequest(arg) {
  if (!(arg instanceof estates_elevators_pb.GetElevatorRequest)) {
    throw new Error('Expected argument of type mruv.elevators.GetElevatorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_GetElevatorRequest(buffer_arg) {
  return estates_elevators_pb.GetElevatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_GetElevatorResponse(arg) {
  if (!(arg instanceof estates_elevators_pb.GetElevatorResponse)) {
    throw new Error('Expected argument of type mruv.elevators.GetElevatorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_GetElevatorResponse(buffer_arg) {
  return estates_elevators_pb.GetElevatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_UpdateElevatorRequest(arg) {
  if (!(arg instanceof estates_elevators_pb.UpdateElevatorRequest)) {
    throw new Error('Expected argument of type mruv.elevators.UpdateElevatorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_UpdateElevatorRequest(buffer_arg) {
  return estates_elevators_pb.UpdateElevatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_elevators_UpdateElevatorResponse(arg) {
  if (!(arg instanceof estates_elevators_pb.UpdateElevatorResponse)) {
    throw new Error('Expected argument of type mruv.elevators.UpdateElevatorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_elevators_UpdateElevatorResponse(buffer_arg) {
  return estates_elevators_pb.UpdateElevatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV entrances service provides procedures for managing an elevators.
// Elevators allow all players in the elevator area to move between building floors.
// Floor change is processed in following steps:
// 1. Someone chooses a floor
// 1. Doors closing event is fired
// 2. Doors closed event is fired.
// 3. Everyone in a elevator are registered as players, that will be teleported to chosen floor.
// 4. X seconds delay (elevator is moving)
// 5. Teleport players to other floor elevator
// 6. Doors opening
// 7. Doors opened - end
// You can define a one-man pseudo-elevator where only point 5 is executed.
var MruVElevatorsServiceService = exports.MruVElevatorsServiceService = {
  // Create an elevator.
  createElevator: {
    path: '/mruv.elevators.MruVElevatorsService/CreateElevator',
    requestStream: false,
    responseStream: false,
    requestType: estates_elevators_pb.CreateElevatorRequest,
    responseType: estates_elevators_pb.CreateElevatorResponse,
    requestSerialize: serialize_mruv_elevators_CreateElevatorRequest,
    requestDeserialize: deserialize_mruv_elevators_CreateElevatorRequest,
    responseSerialize: serialize_mruv_elevators_CreateElevatorResponse,
    responseDeserialize: deserialize_mruv_elevators_CreateElevatorResponse,
  },
  // Get an elevator.
  getElevator: {
    path: '/mruv.elevators.MruVElevatorsService/GetElevator',
    requestStream: false,
    responseStream: false,
    requestType: estates_elevators_pb.GetElevatorRequest,
    responseType: estates_elevators_pb.GetElevatorResponse,
    requestSerialize: serialize_mruv_elevators_GetElevatorRequest,
    requestDeserialize: deserialize_mruv_elevators_GetElevatorRequest,
    responseSerialize: serialize_mruv_elevators_GetElevatorResponse,
    responseDeserialize: deserialize_mruv_elevators_GetElevatorResponse,
  },
  // Update an elevator.
  updateElevator: {
    path: '/mruv.elevators.MruVElevatorsService/UpdateElevator',
    requestStream: false,
    responseStream: false,
    requestType: estates_elevators_pb.UpdateElevatorRequest,
    responseType: estates_elevators_pb.UpdateElevatorResponse,
    requestSerialize: serialize_mruv_elevators_UpdateElevatorRequest,
    requestDeserialize: deserialize_mruv_elevators_UpdateElevatorRequest,
    responseSerialize: serialize_mruv_elevators_UpdateElevatorResponse,
    responseDeserialize: deserialize_mruv_elevators_UpdateElevatorResponse,
  },
  // Delete an elevator.
  deleteElevator: {
    path: '/mruv.elevators.MruVElevatorsService/DeleteElevator',
    requestStream: false,
    responseStream: false,
    requestType: estates_elevators_pb.DeleteElevatorRequest,
    responseType: estates_elevators_pb.DeleteElevatorResponse,
    requestSerialize: serialize_mruv_elevators_DeleteElevatorRequest,
    requestDeserialize: deserialize_mruv_elevators_DeleteElevatorRequest,
    responseSerialize: serialize_mruv_elevators_DeleteElevatorResponse,
    responseDeserialize: deserialize_mruv_elevators_DeleteElevatorResponse,
  },
  // Get available elevator floors.
  getElevatorFloors: {
    path: '/mruv.elevators.MruVElevatorsService/GetElevatorFloors',
    requestStream: false,
    responseStream: false,
    requestType: estates_elevators_pb.GetElevatorFloorsRequest,
    responseType: estates_elevators_pb.GetElevatorFloorsResponse,
    requestSerialize: serialize_mruv_elevators_GetElevatorFloorsRequest,
    requestDeserialize: deserialize_mruv_elevators_GetElevatorFloorsRequest,
    responseSerialize: serialize_mruv_elevators_GetElevatorFloorsResponse,
    responseDeserialize: deserialize_mruv_elevators_GetElevatorFloorsResponse,
  },
};

exports.MruVElevatorsServiceClient = grpc.makeGenericClientConstructor(MruVElevatorsServiceService);
