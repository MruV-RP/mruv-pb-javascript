// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gates_gates_pb = require('../gates/gates_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var objects_movable_pb = require('../objects/movable_pb.js');
var spots_spots_pb = require('../spots/spots_pb.js');

function serialize_mruv_gates_CloseRequest(arg) {
  if (!(arg instanceof gates_gates_pb.CloseRequest)) {
    throw new Error('Expected argument of type mruv.gates.CloseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_CloseRequest(buffer_arg) {
  return gates_gates_pb.CloseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_CloseResponse(arg) {
  if (!(arg instanceof gates_gates_pb.CloseResponse)) {
    throw new Error('Expected argument of type mruv.gates.CloseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_CloseResponse(buffer_arg) {
  return gates_gates_pb.CloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_CreateGateRequest(arg) {
  if (!(arg instanceof gates_gates_pb.CreateGateRequest)) {
    throw new Error('Expected argument of type mruv.gates.CreateGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_CreateGateRequest(buffer_arg) {
  return gates_gates_pb.CreateGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_CreateGateResponse(arg) {
  if (!(arg instanceof gates_gates_pb.CreateGateResponse)) {
    throw new Error('Expected argument of type mruv.gates.CreateGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_CreateGateResponse(buffer_arg) {
  return gates_gates_pb.CreateGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_DeleteGateRequest(arg) {
  if (!(arg instanceof gates_gates_pb.DeleteGateRequest)) {
    throw new Error('Expected argument of type mruv.gates.DeleteGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_DeleteGateRequest(buffer_arg) {
  return gates_gates_pb.DeleteGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_DeleteGateResponse(arg) {
  if (!(arg instanceof gates_gates_pb.DeleteGateResponse)) {
    throw new Error('Expected argument of type mruv.gates.DeleteGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_DeleteGateResponse(buffer_arg) {
  return gates_gates_pb.DeleteGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_FetchAllGatesRequest(arg) {
  if (!(arg instanceof gates_gates_pb.FetchAllGatesRequest)) {
    throw new Error('Expected argument of type mruv.gates.FetchAllGatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_FetchAllGatesRequest(buffer_arg) {
  return gates_gates_pb.FetchAllGatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_FetchAllGatesResponse(arg) {
  if (!(arg instanceof gates_gates_pb.FetchAllGatesResponse)) {
    throw new Error('Expected argument of type mruv.gates.FetchAllGatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_FetchAllGatesResponse(buffer_arg) {
  return gates_gates_pb.FetchAllGatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_FindNearestGateRequest(arg) {
  if (!(arg instanceof gates_gates_pb.FindNearestGateRequest)) {
    throw new Error('Expected argument of type mruv.gates.FindNearestGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_FindNearestGateRequest(buffer_arg) {
  return gates_gates_pb.FindNearestGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_FindNearestGateResponse(arg) {
  if (!(arg instanceof gates_gates_pb.FindNearestGateResponse)) {
    throw new Error('Expected argument of type mruv.gates.FindNearestGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_FindNearestGateResponse(buffer_arg) {
  return gates_gates_pb.FindNearestGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_GetGateRequest(arg) {
  if (!(arg instanceof gates_gates_pb.GetGateRequest)) {
    throw new Error('Expected argument of type mruv.gates.GetGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_GetGateRequest(buffer_arg) {
  return gates_gates_pb.GetGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_GetGateResponse(arg) {
  if (!(arg instanceof gates_gates_pb.GetGateResponse)) {
    throw new Error('Expected argument of type mruv.gates.GetGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_GetGateResponse(buffer_arg) {
  return gates_gates_pb.GetGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_LockRequest(arg) {
  if (!(arg instanceof gates_gates_pb.LockRequest)) {
    throw new Error('Expected argument of type mruv.gates.LockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_LockRequest(buffer_arg) {
  return gates_gates_pb.LockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_LockResponse(arg) {
  if (!(arg instanceof gates_gates_pb.LockResponse)) {
    throw new Error('Expected argument of type mruv.gates.LockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_LockResponse(buffer_arg) {
  return gates_gates_pb.LockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_OpenRequest(arg) {
  if (!(arg instanceof gates_gates_pb.OpenRequest)) {
    throw new Error('Expected argument of type mruv.gates.OpenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_OpenRequest(buffer_arg) {
  return gates_gates_pb.OpenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_OpenResponse(arg) {
  if (!(arg instanceof gates_gates_pb.OpenResponse)) {
    throw new Error('Expected argument of type mruv.gates.OpenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_OpenResponse(buffer_arg) {
  return gates_gates_pb.OpenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_UnlockRequest(arg) {
  if (!(arg instanceof gates_gates_pb.UnlockRequest)) {
    throw new Error('Expected argument of type mruv.gates.UnlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_UnlockRequest(buffer_arg) {
  return gates_gates_pb.UnlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_UnlockResponse(arg) {
  if (!(arg instanceof gates_gates_pb.UnlockResponse)) {
    throw new Error('Expected argument of type mruv.gates.UnlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_UnlockResponse(buffer_arg) {
  return gates_gates_pb.UnlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_UpdateGateRequest(arg) {
  if (!(arg instanceof gates_gates_pb.UpdateGateRequest)) {
    throw new Error('Expected argument of type mruv.gates.UpdateGateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_UpdateGateRequest(buffer_arg) {
  return gates_gates_pb.UpdateGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_gates_UpdateGateResponse(arg) {
  if (!(arg instanceof gates_gates_pb.UpdateGateResponse)) {
    throw new Error('Expected argument of type mruv.gates.UpdateGateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_gates_UpdateGateResponse(buffer_arg) {
  return gates_gates_pb.UpdateGateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV gates service provides procedures for managing gates and moving objects groups.
var MruVGatesServiceService = exports.MruVGatesServiceService = {
  // Create a gate or a moving objects objects group.
  createGate: {
    path: '/mruv.gates.MruVGatesService/CreateGate',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.CreateGateRequest,
    responseType: gates_gates_pb.CreateGateResponse,
    requestSerialize: serialize_mruv_gates_CreateGateRequest,
    requestDeserialize: deserialize_mruv_gates_CreateGateRequest,
    responseSerialize: serialize_mruv_gates_CreateGateResponse,
    responseDeserialize: deserialize_mruv_gates_CreateGateResponse,
  },
  // Get a gate or a moving objects objects group.
  getGate: {
    path: '/mruv.gates.MruVGatesService/GetGate',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.GetGateRequest,
    responseType: gates_gates_pb.GetGateResponse,
    requestSerialize: serialize_mruv_gates_GetGateRequest,
    requestDeserialize: deserialize_mruv_gates_GetGateRequest,
    responseSerialize: serialize_mruv_gates_GetGateResponse,
    responseDeserialize: deserialize_mruv_gates_GetGateResponse,
  },
  // Update a gate or a moving objects objects group.
  updateGate: {
    path: '/mruv.gates.MruVGatesService/UpdateGate',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.UpdateGateRequest,
    responseType: gates_gates_pb.UpdateGateResponse,
    requestSerialize: serialize_mruv_gates_UpdateGateRequest,
    requestDeserialize: deserialize_mruv_gates_UpdateGateRequest,
    responseSerialize: serialize_mruv_gates_UpdateGateResponse,
    responseDeserialize: deserialize_mruv_gates_UpdateGateResponse,
  },
  // Delete a gate or a moving objects objects group.
  deleteGate: {
    path: '/mruv.gates.MruVGatesService/DeleteGate',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.DeleteGateRequest,
    responseType: gates_gates_pb.DeleteGateResponse,
    requestSerialize: serialize_mruv_gates_DeleteGateRequest,
    requestDeserialize: deserialize_mruv_gates_DeleteGateRequest,
    responseSerialize: serialize_mruv_gates_DeleteGateResponse,
    responseDeserialize: deserialize_mruv_gates_DeleteGateResponse,
  },
  // Lock a gate. Locked gate cannot be opened.
  lock: {
    path: '/mruv.gates.MruVGatesService/Lock',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.LockRequest,
    responseType: gates_gates_pb.LockResponse,
    requestSerialize: serialize_mruv_gates_LockRequest,
    requestDeserialize: deserialize_mruv_gates_LockRequest,
    responseSerialize: serialize_mruv_gates_LockResponse,
    responseDeserialize: deserialize_mruv_gates_LockResponse,
  },
  // Unload a gate, so it can be open.
  unlock: {
    path: '/mruv.gates.MruVGatesService/Unlock',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.UnlockRequest,
    responseType: gates_gates_pb.UnlockResponse,
    requestSerialize: serialize_mruv_gates_UnlockRequest,
    requestDeserialize: deserialize_mruv_gates_UnlockRequest,
    responseSerialize: serialize_mruv_gates_UnlockResponse,
    responseDeserialize: deserialize_mruv_gates_UnlockResponse,
  },
  // Opens a gate.
  open: {
    path: '/mruv.gates.MruVGatesService/Open',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.OpenRequest,
    responseType: gates_gates_pb.OpenResponse,
    requestSerialize: serialize_mruv_gates_OpenRequest,
    requestDeserialize: deserialize_mruv_gates_OpenRequest,
    responseSerialize: serialize_mruv_gates_OpenResponse,
    responseDeserialize: deserialize_mruv_gates_OpenResponse,
  },
  // Close a gate.
  close: {
    path: '/mruv.gates.MruVGatesService/Close',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.CloseRequest,
    responseType: gates_gates_pb.CloseResponse,
    requestSerialize: serialize_mruv_gates_CloseRequest,
    requestDeserialize: deserialize_mruv_gates_CloseRequest,
    responseSerialize: serialize_mruv_gates_CloseResponse,
    responseDeserialize: deserialize_mruv_gates_CloseResponse,
  },
  // Find gate that is closest to a specific position.
  findNearestGate: {
    path: '/mruv.gates.MruVGatesService/FindNearestGate',
    requestStream: false,
    responseStream: false,
    requestType: gates_gates_pb.FindNearestGateRequest,
    responseType: gates_gates_pb.FindNearestGateResponse,
    requestSerialize: serialize_mruv_gates_FindNearestGateRequest,
    requestDeserialize: deserialize_mruv_gates_FindNearestGateRequest,
    responseSerialize: serialize_mruv_gates_FindNearestGateResponse,
    responseDeserialize: deserialize_mruv_gates_FindNearestGateResponse,
  },
  //
  fetchAll: {
    path: '/mruv.gates.MruVGatesService/FetchAll',
    requestStream: false,
    responseStream: true,
    requestType: gates_gates_pb.FetchAllGatesRequest,
    responseType: gates_gates_pb.FetchAllGatesResponse,
    requestSerialize: serialize_mruv_gates_FetchAllGatesRequest,
    requestDeserialize: deserialize_mruv_gates_FetchAllGatesRequest,
    responseSerialize: serialize_mruv_gates_FetchAllGatesResponse,
    responseDeserialize: deserialize_mruv_gates_FetchAllGatesResponse,
  },
};

exports.MruVGatesServiceClient = grpc.makeGenericClientConstructor(MruVGatesServiceService);
