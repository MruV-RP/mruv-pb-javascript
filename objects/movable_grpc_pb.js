// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var objects_movable_pb = require('../objects/movable_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var objects_objects_pb = require('../objects/objects_pb.js');

function serialize_mruv_objects_CreateMovableObjectRequest(arg) {
  if (!(arg instanceof objects_movable_pb.CreateMovableObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.CreateMovableObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateMovableObjectRequest(buffer_arg) {
  return objects_movable_pb.CreateMovableObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_CreateMovableObjectResponse(arg) {
  if (!(arg instanceof objects_movable_pb.CreateMovableObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.CreateMovableObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateMovableObjectResponse(buffer_arg) {
  return objects_movable_pb.CreateMovableObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteMovableObjectRequest(arg) {
  if (!(arg instanceof objects_movable_pb.DeleteMovableObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteMovableObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteMovableObjectRequest(buffer_arg) {
  return objects_movable_pb.DeleteMovableObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteMovableObjectResponse(arg) {
  if (!(arg instanceof objects_movable_pb.DeleteMovableObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteMovableObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteMovableObjectResponse(buffer_arg) {
  return objects_movable_pb.DeleteMovableObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_FetchAllMovableObjectsRequest(arg) {
  if (!(arg instanceof objects_movable_pb.FetchAllMovableObjectsRequest)) {
    throw new Error('Expected argument of type mruv.objects.FetchAllMovableObjectsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_FetchAllMovableObjectsRequest(buffer_arg) {
  return objects_movable_pb.FetchAllMovableObjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_FetchAllMovableObjectsResponse(arg) {
  if (!(arg instanceof objects_movable_pb.FetchAllMovableObjectsResponse)) {
    throw new Error('Expected argument of type mruv.objects.FetchAllMovableObjectsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_FetchAllMovableObjectsResponse(buffer_arg) {
  return objects_movable_pb.FetchAllMovableObjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetMovableObjectRequest(arg) {
  if (!(arg instanceof objects_movable_pb.GetMovableObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetMovableObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetMovableObjectRequest(buffer_arg) {
  return objects_movable_pb.GetMovableObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetMovableObjectResponse(arg) {
  if (!(arg instanceof objects_movable_pb.GetMovableObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetMovableObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetMovableObjectResponse(buffer_arg) {
  return objects_movable_pb.GetMovableObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_MoveObjectNextRequest(arg) {
  if (!(arg instanceof objects_movable_pb.MoveObjectNextRequest)) {
    throw new Error('Expected argument of type mruv.objects.MoveObjectNextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_MoveObjectNextRequest(buffer_arg) {
  return objects_movable_pb.MoveObjectNextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_MoveObjectNextResponse(arg) {
  if (!(arg instanceof objects_movable_pb.MoveObjectNextResponse)) {
    throw new Error('Expected argument of type mruv.objects.MoveObjectNextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_MoveObjectNextResponse(buffer_arg) {
  return objects_movable_pb.MoveObjectNextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_MoveObjectPreviousRequest(arg) {
  if (!(arg instanceof objects_movable_pb.MoveObjectPreviousRequest)) {
    throw new Error('Expected argument of type mruv.objects.MoveObjectPreviousRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_MoveObjectPreviousRequest(buffer_arg) {
  return objects_movable_pb.MoveObjectPreviousRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_MoveObjectPreviousResponse(arg) {
  if (!(arg instanceof objects_movable_pb.MoveObjectPreviousResponse)) {
    throw new Error('Expected argument of type mruv.objects.MoveObjectPreviousResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_MoveObjectPreviousResponse(buffer_arg) {
  return objects_movable_pb.MoveObjectPreviousResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_MoveObjectRequest(arg) {
  if (!(arg instanceof objects_movable_pb.MoveObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.MoveObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_MoveObjectRequest(buffer_arg) {
  return objects_movable_pb.MoveObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_MoveObjectResponse(arg) {
  if (!(arg instanceof objects_movable_pb.MoveObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.MoveObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_MoveObjectResponse(buffer_arg) {
  return objects_movable_pb.MoveObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateMovableObjectRequest(arg) {
  if (!(arg instanceof objects_movable_pb.UpdateMovableObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.UpdateMovableObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateMovableObjectRequest(buffer_arg) {
  return objects_movable_pb.UpdateMovableObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateMovableObjectResponse(arg) {
  if (!(arg instanceof objects_movable_pb.UpdateMovableObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.UpdateMovableObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateMovableObjectResponse(buffer_arg) {
  return objects_movable_pb.UpdateMovableObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV objects service provides procedures for movable game objects.
var MruVMovableObjectsServiceService = exports.MruVMovableObjectsServiceService = {
  // Create a movable object.
  createMovableObject: {
    path: '/mruv.objects.MruVMovableObjectsService/CreateMovableObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.CreateMovableObjectRequest,
    responseType: objects_movable_pb.CreateMovableObjectResponse,
    requestSerialize: serialize_mruv_objects_CreateMovableObjectRequest,
    requestDeserialize: deserialize_mruv_objects_CreateMovableObjectRequest,
    responseSerialize: serialize_mruv_objects_CreateMovableObjectResponse,
    responseDeserialize: deserialize_mruv_objects_CreateMovableObjectResponse,
  },
  // Get a movable object.
  getMovableObject: {
    path: '/mruv.objects.MruVMovableObjectsService/GetMovableObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.GetMovableObjectRequest,
    responseType: objects_movable_pb.GetMovableObjectResponse,
    requestSerialize: serialize_mruv_objects_GetMovableObjectRequest,
    requestDeserialize: deserialize_mruv_objects_GetMovableObjectRequest,
    responseSerialize: serialize_mruv_objects_GetMovableObjectResponse,
    responseDeserialize: deserialize_mruv_objects_GetMovableObjectResponse,
  },
  // Update a movable object.
  updateMovableObject: {
    path: '/mruv.objects.MruVMovableObjectsService/UpdateMovableObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.UpdateMovableObjectRequest,
    responseType: objects_movable_pb.UpdateMovableObjectResponse,
    requestSerialize: serialize_mruv_objects_UpdateMovableObjectRequest,
    requestDeserialize: deserialize_mruv_objects_UpdateMovableObjectRequest,
    responseSerialize: serialize_mruv_objects_UpdateMovableObjectResponse,
    responseDeserialize: deserialize_mruv_objects_UpdateMovableObjectResponse,
  },
  // Delete a movable object.
  deleteMovableObject: {
    path: '/mruv.objects.MruVMovableObjectsService/DeleteMovableObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.DeleteMovableObjectRequest,
    responseType: objects_movable_pb.DeleteMovableObjectResponse,
    requestSerialize: serialize_mruv_objects_DeleteMovableObjectRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteMovableObjectRequest,
    responseSerialize: serialize_mruv_objects_DeleteMovableObjectResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteMovableObjectResponse,
  },
  // Move an object to other state.
  moveObject: {
    path: '/mruv.objects.MruVMovableObjectsService/MoveObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.MoveObjectRequest,
    responseType: objects_movable_pb.MoveObjectResponse,
    requestSerialize: serialize_mruv_objects_MoveObjectRequest,
    requestDeserialize: deserialize_mruv_objects_MoveObjectRequest,
    responseSerialize: serialize_mruv_objects_MoveObjectResponse,
    responseDeserialize: deserialize_mruv_objects_MoveObjectResponse,
  },
  // Move an object to next state.
  moveObjectNext: {
    path: '/mruv.objects.MruVMovableObjectsService/MoveObjectNext',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.MoveObjectNextRequest,
    responseType: objects_movable_pb.MoveObjectNextResponse,
    requestSerialize: serialize_mruv_objects_MoveObjectNextRequest,
    requestDeserialize: deserialize_mruv_objects_MoveObjectNextRequest,
    responseSerialize: serialize_mruv_objects_MoveObjectNextResponse,
    responseDeserialize: deserialize_mruv_objects_MoveObjectNextResponse,
  },
  // Move an object to previous state.
  moveObjectPrevious: {
    path: '/mruv.objects.MruVMovableObjectsService/MoveObjectPrevious',
    requestStream: false,
    responseStream: false,
    requestType: objects_movable_pb.MoveObjectPreviousRequest,
    responseType: objects_movable_pb.MoveObjectPreviousResponse,
    requestSerialize: serialize_mruv_objects_MoveObjectPreviousRequest,
    requestDeserialize: deserialize_mruv_objects_MoveObjectPreviousRequest,
    responseSerialize: serialize_mruv_objects_MoveObjectPreviousResponse,
    responseDeserialize: deserialize_mruv_objects_MoveObjectPreviousResponse,
  },
  //
  fetchAllMovableObjects: {
    path: '/mruv.objects.MruVMovableObjectsService/FetchAllMovableObjects',
    requestStream: false,
    responseStream: true,
    requestType: objects_movable_pb.FetchAllMovableObjectsRequest,
    responseType: objects_movable_pb.FetchAllMovableObjectsResponse,
    requestSerialize: serialize_mruv_objects_FetchAllMovableObjectsRequest,
    requestDeserialize: deserialize_mruv_objects_FetchAllMovableObjectsRequest,
    responseSerialize: serialize_mruv_objects_FetchAllMovableObjectsResponse,
    responseDeserialize: deserialize_mruv_objects_FetchAllMovableObjectsResponse,
  },
};

exports.MruVMovableObjectsServiceClient = grpc.makeGenericClientConstructor(MruVMovableObjectsServiceService);
