// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var entrances_entrances_pb = require('../entrances/entrances_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var spots_spots_pb = require('../spots/spots_pb.js');

function serialize_mruv_entrances_CreateEntranceRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.CreateEntranceRequest)) {
    throw new Error('Expected argument of type mruv.entrances.CreateEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_CreateEntranceRequest(buffer_arg) {
  return entrances_entrances_pb.CreateEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_CreateEntranceResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.CreateEntranceResponse)) {
    throw new Error('Expected argument of type mruv.entrances.CreateEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_CreateEntranceResponse(buffer_arg) {
  return entrances_entrances_pb.CreateEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_DeleteEntranceRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.DeleteEntranceRequest)) {
    throw new Error('Expected argument of type mruv.entrances.DeleteEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_DeleteEntranceRequest(buffer_arg) {
  return entrances_entrances_pb.DeleteEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_DeleteEntranceResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.DeleteEntranceResponse)) {
    throw new Error('Expected argument of type mruv.entrances.DeleteEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_DeleteEntranceResponse(buffer_arg) {
  return entrances_entrances_pb.DeleteEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_EnterRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.EnterRequest)) {
    throw new Error('Expected argument of type mruv.entrances.EnterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_EnterRequest(buffer_arg) {
  return entrances_entrances_pb.EnterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_EnterResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.EnterResponse)) {
    throw new Error('Expected argument of type mruv.entrances.EnterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_EnterResponse(buffer_arg) {
  return entrances_entrances_pb.EnterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_ExitRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.ExitRequest)) {
    throw new Error('Expected argument of type mruv.entrances.ExitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_ExitRequest(buffer_arg) {
  return entrances_entrances_pb.ExitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_ExitResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.ExitResponse)) {
    throw new Error('Expected argument of type mruv.entrances.ExitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_ExitResponse(buffer_arg) {
  return entrances_entrances_pb.ExitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_FetchAllEntrancesRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.FetchAllEntrancesRequest)) {
    throw new Error('Expected argument of type mruv.entrances.FetchAllEntrancesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_FetchAllEntrancesRequest(buffer_arg) {
  return entrances_entrances_pb.FetchAllEntrancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_FetchAllEntrancesResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.FetchAllEntrancesResponse)) {
    throw new Error('Expected argument of type mruv.entrances.FetchAllEntrancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_FetchAllEntrancesResponse(buffer_arg) {
  return entrances_entrances_pb.FetchAllEntrancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_FindNearestEntranceRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.FindNearestEntranceRequest)) {
    throw new Error('Expected argument of type mruv.entrances.FindNearestEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_FindNearestEntranceRequest(buffer_arg) {
  return entrances_entrances_pb.FindNearestEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_FindNearestEntranceResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.FindNearestEntranceResponse)) {
    throw new Error('Expected argument of type mruv.entrances.FindNearestEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_FindNearestEntranceResponse(buffer_arg) {
  return entrances_entrances_pb.FindNearestEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_GetEntranceRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.GetEntranceRequest)) {
    throw new Error('Expected argument of type mruv.entrances.GetEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_GetEntranceRequest(buffer_arg) {
  return entrances_entrances_pb.GetEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_GetEntranceResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.GetEntranceResponse)) {
    throw new Error('Expected argument of type mruv.entrances.GetEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_GetEntranceResponse(buffer_arg) {
  return entrances_entrances_pb.GetEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_LockRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.LockRequest)) {
    throw new Error('Expected argument of type mruv.entrances.LockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_LockRequest(buffer_arg) {
  return entrances_entrances_pb.LockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_LockResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.LockResponse)) {
    throw new Error('Expected argument of type mruv.entrances.LockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_LockResponse(buffer_arg) {
  return entrances_entrances_pb.LockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_UnlockRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.UnlockRequest)) {
    throw new Error('Expected argument of type mruv.entrances.UnlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_UnlockRequest(buffer_arg) {
  return entrances_entrances_pb.UnlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_UnlockResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.UnlockResponse)) {
    throw new Error('Expected argument of type mruv.entrances.UnlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_UnlockResponse(buffer_arg) {
  return entrances_entrances_pb.UnlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_UpdateEntranceRequest(arg) {
  if (!(arg instanceof entrances_entrances_pb.UpdateEntranceRequest)) {
    throw new Error('Expected argument of type mruv.entrances.UpdateEntranceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_UpdateEntranceRequest(buffer_arg) {
  return entrances_entrances_pb.UpdateEntranceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_entrances_UpdateEntranceResponse(arg) {
  if (!(arg instanceof entrances_entrances_pb.UpdateEntranceResponse)) {
    throw new Error('Expected argument of type mruv.entrances.UpdateEntranceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_entrances_UpdateEntranceResponse(buffer_arg) {
  return entrances_entrances_pb.UpdateEntranceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV entrances service provides procedures for managing an entrances to estates and teleportation to locations.
var MruVEntrancesServiceService = exports.MruVEntrancesServiceService = {
  // Create an entrance to building or teleport to location.
  createEntrance: {
    path: '/mruv.entrances.MruVEntrancesService/CreateEntrance',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.CreateEntranceRequest,
    responseType: entrances_entrances_pb.CreateEntranceResponse,
    requestSerialize: serialize_mruv_entrances_CreateEntranceRequest,
    requestDeserialize: deserialize_mruv_entrances_CreateEntranceRequest,
    responseSerialize: serialize_mruv_entrances_CreateEntranceResponse,
    responseDeserialize: deserialize_mruv_entrances_CreateEntranceResponse,
  },
  // Get an entrance to building or a teleport to location.
  getEntrance: {
    path: '/mruv.entrances.MruVEntrancesService/GetEntrance',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.GetEntranceRequest,
    responseType: entrances_entrances_pb.GetEntranceResponse,
    requestSerialize: serialize_mruv_entrances_GetEntranceRequest,
    requestDeserialize: deserialize_mruv_entrances_GetEntranceRequest,
    responseSerialize: serialize_mruv_entrances_GetEntranceResponse,
    responseDeserialize: deserialize_mruv_entrances_GetEntranceResponse,
  },
  // Update an entrance to building or a teleport to location.
  updateEntrance: {
    path: '/mruv.entrances.MruVEntrancesService/UpdateEntrance',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.UpdateEntranceRequest,
    responseType: entrances_entrances_pb.UpdateEntranceResponse,
    requestSerialize: serialize_mruv_entrances_UpdateEntranceRequest,
    requestDeserialize: deserialize_mruv_entrances_UpdateEntranceRequest,
    responseSerialize: serialize_mruv_entrances_UpdateEntranceResponse,
    responseDeserialize: deserialize_mruv_entrances_UpdateEntranceResponse,
  },
  // Delete an entrance to building or a teleport to location.
  deleteEntrance: {
    path: '/mruv.entrances.MruVEntrancesService/DeleteEntrance',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.DeleteEntranceRequest,
    responseType: entrances_entrances_pb.DeleteEntranceResponse,
    requestSerialize: serialize_mruv_entrances_DeleteEntranceRequest,
    requestDeserialize: deserialize_mruv_entrances_DeleteEntranceRequest,
    responseSerialize: serialize_mruv_entrances_DeleteEntranceResponse,
    responseDeserialize: deserialize_mruv_entrances_DeleteEntranceResponse,
  },
  // Lock entrance.
  lock: {
    path: '/mruv.entrances.MruVEntrancesService/Lock',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.LockRequest,
    responseType: entrances_entrances_pb.LockResponse,
    requestSerialize: serialize_mruv_entrances_LockRequest,
    requestDeserialize: deserialize_mruv_entrances_LockRequest,
    responseSerialize: serialize_mruv_entrances_LockResponse,
    responseDeserialize: deserialize_mruv_entrances_LockResponse,
  },
  // Unload entrance.
  unlock: {
    path: '/mruv.entrances.MruVEntrancesService/Unlock',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.UnlockRequest,
    responseType: entrances_entrances_pb.UnlockResponse,
    requestSerialize: serialize_mruv_entrances_UnlockRequest,
    requestDeserialize: deserialize_mruv_entrances_UnlockRequest,
    responseSerialize: serialize_mruv_entrances_UnlockResponse,
    responseDeserialize: deserialize_mruv_entrances_UnlockResponse,
  },
  // Find gate that is closest to a specific position.
  findNearestEntrance: {
    path: '/mruv.entrances.MruVEntrancesService/FindNearestEntrance',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.FindNearestEntranceRequest,
    responseType: entrances_entrances_pb.FindNearestEntranceResponse,
    requestSerialize: serialize_mruv_entrances_FindNearestEntranceRequest,
    requestDeserialize: deserialize_mruv_entrances_FindNearestEntranceRequest,
    responseSerialize: serialize_mruv_entrances_FindNearestEntranceResponse,
    responseDeserialize: deserialize_mruv_entrances_FindNearestEntranceResponse,
  },
  // Enter an entrance (player teleport from in spot position to out spot position).
  enter: {
    path: '/mruv.entrances.MruVEntrancesService/Enter',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.EnterRequest,
    responseType: entrances_entrances_pb.EnterResponse,
    requestSerialize: serialize_mruv_entrances_EnterRequest,
    requestDeserialize: deserialize_mruv_entrances_EnterRequest,
    responseSerialize: serialize_mruv_entrances_EnterResponse,
    responseDeserialize: deserialize_mruv_entrances_EnterResponse,
  },
  // Exit from entrance (player teleport from out spot position to in spot position).
  exit: {
    path: '/mruv.entrances.MruVEntrancesService/Exit',
    requestStream: false,
    responseStream: false,
    requestType: entrances_entrances_pb.ExitRequest,
    responseType: entrances_entrances_pb.ExitResponse,
    requestSerialize: serialize_mruv_entrances_ExitRequest,
    requestDeserialize: deserialize_mruv_entrances_ExitRequest,
    responseSerialize: serialize_mruv_entrances_ExitResponse,
    responseDeserialize: deserialize_mruv_entrances_ExitResponse,
  },
  //
  fetchAll: {
    path: '/mruv.entrances.MruVEntrancesService/FetchAll',
    requestStream: false,
    responseStream: true,
    requestType: entrances_entrances_pb.FetchAllEntrancesRequest,
    responseType: entrances_entrances_pb.FetchAllEntrancesResponse,
    requestSerialize: serialize_mruv_entrances_FetchAllEntrancesRequest,
    requestDeserialize: deserialize_mruv_entrances_FetchAllEntrancesRequest,
    responseSerialize: serialize_mruv_entrances_FetchAllEntrancesResponse,
    responseDeserialize: deserialize_mruv_entrances_FetchAllEntrancesResponse,
  },
};

exports.MruVEntrancesServiceClient = grpc.makeGenericClientConstructor(MruVEntrancesServiceService);
