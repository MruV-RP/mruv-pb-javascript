// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var estates_estates_pb = require('../estates/estates_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var entrances_entrances_pb = require('../entrances/entrances_pb.js');
var gates_gates_pb = require('../gates/gates_pb.js');

function serialize_mruv_estates_AddEntranceRequest(arg) {
  if (!(arg instanceof estates_estates_pb.AddEntranceRequest)) {
    throw new Error('Expected argument of type mruv.estates.AddEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_AddEntranceRequest(buffer_arg) {
  return estates_estates_pb.AddEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_AddEntranceResponse(arg) {
  if (!(arg instanceof estates_estates_pb.AddEntranceResponse)) {
    throw new Error('Expected argument of type mruv.estates.AddEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_AddEntranceResponse(buffer_arg) {
  return estates_estates_pb.AddEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_AddGateRequest(arg) {
  if (!(arg instanceof estates_estates_pb.AddGateRequest)) {
    throw new Error('Expected argument of type mruv.estates.AddGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_AddGateRequest(buffer_arg) {
  return estates_estates_pb.AddGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_AddGateResponse(arg) {
  if (!(arg instanceof estates_estates_pb.AddGateResponse)) {
    throw new Error('Expected argument of type mruv.estates.AddGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_AddGateResponse(buffer_arg) {
  return estates_estates_pb.AddGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_CreateEstateRequest(arg) {
  if (!(arg instanceof estates_estates_pb.CreateEstateRequest)) {
    throw new Error('Expected argument of type mruv.estates.CreateEstateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_CreateEstateRequest(buffer_arg) {
  return estates_estates_pb.CreateEstateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_CreateEstateResponse(arg) {
  if (!(arg instanceof estates_estates_pb.CreateEstateResponse)) {
    throw new Error('Expected argument of type mruv.estates.CreateEstateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_CreateEstateResponse(buffer_arg) {
  return estates_estates_pb.CreateEstateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_DeleteEstateRequest(arg) {
  if (!(arg instanceof estates_estates_pb.DeleteEstateRequest)) {
    throw new Error('Expected argument of type mruv.estates.DeleteEstateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_DeleteEstateRequest(buffer_arg) {
  return estates_estates_pb.DeleteEstateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_DeleteEstateResponse(arg) {
  if (!(arg instanceof estates_estates_pb.DeleteEstateResponse)) {
    throw new Error('Expected argument of type mruv.estates.DeleteEstateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_DeleteEstateResponse(buffer_arg) {
  return estates_estates_pb.DeleteEstateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_Estate(arg) {
  if (!(arg instanceof estates_estates_pb.Estate)) {
    throw new Error('Expected argument of type mruv.estates.Estate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_Estate(buffer_arg) {
  return estates_estates_pb.Estate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstateEntrancesRequest(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstateEntrancesRequest)) {
    throw new Error('Expected argument of type mruv.estates.GetEstateEntrancesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstateEntrancesRequest(buffer_arg) {
  return estates_estates_pb.GetEstateEntrancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstateEntrancesResponse(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstateEntrancesResponse)) {
    throw new Error('Expected argument of type mruv.estates.GetEstateEntrancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstateEntrancesResponse(buffer_arg) {
  return estates_estates_pb.GetEstateEntrancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstateGatesRequest(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstateGatesRequest)) {
    throw new Error('Expected argument of type mruv.estates.GetEstateGatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstateGatesRequest(buffer_arg) {
  return estates_estates_pb.GetEstateGatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstateGatesResponse(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstateGatesResponse)) {
    throw new Error('Expected argument of type mruv.estates.GetEstateGatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstateGatesResponse(buffer_arg) {
  return estates_estates_pb.GetEstateGatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstateRequest(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstateRequest)) {
    throw new Error('Expected argument of type mruv.estates.GetEstateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstateRequest(buffer_arg) {
  return estates_estates_pb.GetEstateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstatesRequest(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstatesRequest)) {
    throw new Error('Expected argument of type mruv.estates.GetEstatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstatesRequest(buffer_arg) {
  return estates_estates_pb.GetEstatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_GetEstatesResponse(arg) {
  if (!(arg instanceof estates_estates_pb.GetEstatesResponse)) {
    throw new Error('Expected argument of type mruv.estates.GetEstatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_GetEstatesResponse(buffer_arg) {
  return estates_estates_pb.GetEstatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_RemoveEntranceRequest(arg) {
  if (!(arg instanceof estates_estates_pb.RemoveEntranceRequest)) {
    throw new Error('Expected argument of type mruv.estates.RemoveEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_RemoveEntranceRequest(buffer_arg) {
  return estates_estates_pb.RemoveEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_RemoveEntranceResponse(arg) {
  if (!(arg instanceof estates_estates_pb.RemoveEntranceResponse)) {
    throw new Error('Expected argument of type mruv.estates.RemoveEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_RemoveEntranceResponse(buffer_arg) {
  return estates_estates_pb.RemoveEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_RemoveGateRequest(arg) {
  if (!(arg instanceof estates_estates_pb.RemoveGateRequest)) {
    throw new Error('Expected argument of type mruv.estates.RemoveGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_RemoveGateRequest(buffer_arg) {
  return estates_estates_pb.RemoveGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_RemoveGateResponse(arg) {
  if (!(arg instanceof estates_estates_pb.RemoveGateResponse)) {
    throw new Error('Expected argument of type mruv.estates.RemoveGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_RemoveGateResponse(buffer_arg) {
  return estates_estates_pb.RemoveGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_UpdateEstateRequest(arg) {
  if (!(arg instanceof estates_estates_pb.UpdateEstateRequest)) {
    throw new Error('Expected argument of type mruv.estates.UpdateEstateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_UpdateEstateRequest(buffer_arg) {
  return estates_estates_pb.UpdateEstateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_estates_UpdateEstateResponse(arg) {
  if (!(arg instanceof estates_estates_pb.UpdateEstateResponse)) {
    throw new Error('Expected argument of type mruv.estates.UpdateEstateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_estates_UpdateEstateResponse(buffer_arg) {
  return estates_estates_pb.UpdateEstateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV estate service provides procedures for managing buildings and other estates.
var MruVEstateServiceService = exports.MruVEstateServiceService = {
  // Create real estate.
  createEstate: {
    path: '/mruv.estates.MruVEstateService/CreateEstate',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.CreateEstateRequest,
    responseType: estates_estates_pb.CreateEstateResponse,
    requestSerialize: serialize_mruv_estates_CreateEstateRequest,
    requestDeserialize: deserialize_mruv_estates_CreateEstateRequest,
    responseSerialize: serialize_mruv_estates_CreateEstateResponse,
    responseDeserialize: deserialize_mruv_estates_CreateEstateResponse,
  },
  // Get real estate.
  getEstate: {
    path: '/mruv.estates.MruVEstateService/GetEstate',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.GetEstateRequest,
    responseType: estates_estates_pb.Estate,
    requestSerialize: serialize_mruv_estates_GetEstateRequest,
    requestDeserialize: deserialize_mruv_estates_GetEstateRequest,
    responseSerialize: serialize_mruv_estates_Estate,
    responseDeserialize: deserialize_mruv_estates_Estate,
  },
  // Update real estate.
  updateEstate: {
    path: '/mruv.estates.MruVEstateService/UpdateEstate',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.UpdateEstateRequest,
    responseType: estates_estates_pb.UpdateEstateResponse,
    requestSerialize: serialize_mruv_estates_UpdateEstateRequest,
    requestDeserialize: deserialize_mruv_estates_UpdateEstateRequest,
    responseSerialize: serialize_mruv_estates_UpdateEstateResponse,
    responseDeserialize: deserialize_mruv_estates_UpdateEstateResponse,
  },
  // Delete real estate.
  deleteEstate: {
    path: '/mruv.estates.MruVEstateService/DeleteEstate',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.DeleteEstateRequest,
    responseType: estates_estates_pb.DeleteEstateResponse,
    requestSerialize: serialize_mruv_estates_DeleteEstateRequest,
    requestDeserialize: deserialize_mruv_estates_DeleteEstateRequest,
    responseSerialize: serialize_mruv_estates_DeleteEstateResponse,
    responseDeserialize: deserialize_mruv_estates_DeleteEstateResponse,
  },
  // Get all created real estates.
  getEstates: {
    path: '/mruv.estates.MruVEstateService/GetEstates',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.GetEstatesRequest,
    responseType: estates_estates_pb.GetEstatesResponse,
    requestSerialize: serialize_mruv_estates_GetEstatesRequest,
    requestDeserialize: deserialize_mruv_estates_GetEstatesRequest,
    responseSerialize: serialize_mruv_estates_GetEstatesResponse,
    responseDeserialize: deserialize_mruv_estates_GetEstatesResponse,
  },
  // Add a gate to an estate.
  addGate: {
    path: '/mruv.estates.MruVEstateService/AddGate',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.AddGateRequest,
    responseType: estates_estates_pb.AddGateResponse,
    requestSerialize: serialize_mruv_estates_AddGateRequest,
    requestDeserialize: deserialize_mruv_estates_AddGateRequest,
    responseSerialize: serialize_mruv_estates_AddGateResponse,
    responseDeserialize: deserialize_mruv_estates_AddGateResponse,
  },
  // Delete a gate from estate.
  removeGate: {
    path: '/mruv.estates.MruVEstateService/RemoveGate',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.RemoveGateRequest,
    responseType: estates_estates_pb.RemoveGateResponse,
    requestSerialize: serialize_mruv_estates_RemoveGateRequest,
    requestDeserialize: deserialize_mruv_estates_RemoveGateRequest,
    responseSerialize: serialize_mruv_estates_RemoveGateResponse,
    responseDeserialize: deserialize_mruv_estates_RemoveGateResponse,
  },
  // Get all estate gates.
  getEstateGates: {
    path: '/mruv.estates.MruVEstateService/GetEstateGates',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.GetEstateGatesRequest,
    responseType: estates_estates_pb.GetEstateGatesResponse,
    requestSerialize: serialize_mruv_estates_GetEstateGatesRequest,
    requestDeserialize: deserialize_mruv_estates_GetEstateGatesRequest,
    responseSerialize: serialize_mruv_estates_GetEstateGatesResponse,
    responseDeserialize: deserialize_mruv_estates_GetEstateGatesResponse,
  },
  // Add an entrance to estate.
  addEntrance: {
    path: '/mruv.estates.MruVEstateService/AddEntrance',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.AddEntranceRequest,
    responseType: estates_estates_pb.AddEntranceResponse,
    requestSerialize: serialize_mruv_estates_AddEntranceRequest,
    requestDeserialize: deserialize_mruv_estates_AddEntranceRequest,
    responseSerialize: serialize_mruv_estates_AddEntranceResponse,
    responseDeserialize: deserialize_mruv_estates_AddEntranceResponse,
  },
  // Remove an entrance from estate.
  removeEntrance: {
    path: '/mruv.estates.MruVEstateService/RemoveEntrance',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.RemoveEntranceRequest,
    responseType: estates_estates_pb.RemoveEntranceResponse,
    requestSerialize: serialize_mruv_estates_RemoveEntranceRequest,
    requestDeserialize: deserialize_mruv_estates_RemoveEntranceRequest,
    responseSerialize: serialize_mruv_estates_RemoveEntranceResponse,
    responseDeserialize: deserialize_mruv_estates_RemoveEntranceResponse,
  },
  // Get all estate entrances.
  getEstateEntrances: {
    path: '/mruv.estates.MruVEstateService/GetEstateEntrances',
    requestStream: false,
    responseStream: false,
    requestType: estates_estates_pb.GetEstateEntrancesRequest,
    responseType: estates_estates_pb.GetEstateEntrancesResponse,
    requestSerialize: serialize_mruv_estates_GetEstateEntrancesRequest,
    requestDeserialize: deserialize_mruv_estates_GetEstateEntrancesRequest,
    responseSerialize: serialize_mruv_estates_GetEstateEntrancesResponse,
    responseDeserialize: deserialize_mruv_estates_GetEstateEntrancesResponse,
  },
};

exports.MruVEstateServiceClient = grpc.makeGenericClientConstructor(MruVEstateServiceService);
