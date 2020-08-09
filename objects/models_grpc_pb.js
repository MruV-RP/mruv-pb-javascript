// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var objects_models_pb = require('../objects/models_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_objects_CreateObjectModelRequest(arg) {
  if (!(arg instanceof objects_models_pb.CreateObjectModelRequest)) {
    throw new Error('Expected argument of type mruv.objects.CreateObjectModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateObjectModelRequest(buffer_arg) {
  return objects_models_pb.CreateObjectModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_CreateObjectModelResponse(arg) {
  if (!(arg instanceof objects_models_pb.CreateObjectModelResponse)) {
    throw new Error('Expected argument of type mruv.objects.CreateObjectModelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateObjectModelResponse(buffer_arg) {
  return objects_models_pb.CreateObjectModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectModelRequest(arg) {
  if (!(arg instanceof objects_models_pb.DeleteObjectModelRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectModelRequest(buffer_arg) {
  return objects_models_pb.DeleteObjectModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectModelResponse(arg) {
  if (!(arg instanceof objects_models_pb.DeleteObjectModelResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectModelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectModelResponse(buffer_arg) {
  return objects_models_pb.DeleteObjectModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectModelRequest(arg) {
  if (!(arg instanceof objects_models_pb.GetObjectModelRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectModelRequest(buffer_arg) {
  return objects_models_pb.GetObjectModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectModelResponse(arg) {
  if (!(arg instanceof objects_models_pb.GetObjectModelResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectModelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectModelResponse(buffer_arg) {
  return objects_models_pb.GetObjectModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateObjectModelRequest(arg) {
  if (!(arg instanceof objects_models_pb.UpdateObjectModelRequest)) {
    throw new Error('Expected argument of type mruv.objects.UpdateObjectModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateObjectModelRequest(buffer_arg) {
  return objects_models_pb.UpdateObjectModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateObjectModelResponse(arg) {
  if (!(arg instanceof objects_models_pb.UpdateObjectModelResponse)) {
    throw new Error('Expected argument of type mruv.objects.UpdateObjectModelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateObjectModelResponse(buffer_arg) {
  return objects_models_pb.UpdateObjectModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV objects service provides procedures for game object models.
var MruVObjectModelsServiceService = exports.MruVObjectModelsServiceService = {
  // Create an object model.
  createObjectModel: {
    path: '/mruv.objects.MruVObjectModelsService/CreateObjectModel',
    requestStream: false,
    responseStream: false,
    requestType: objects_models_pb.CreateObjectModelRequest,
    responseType: objects_models_pb.CreateObjectModelResponse,
    requestSerialize: serialize_mruv_objects_CreateObjectModelRequest,
    requestDeserialize: deserialize_mruv_objects_CreateObjectModelRequest,
    responseSerialize: serialize_mruv_objects_CreateObjectModelResponse,
    responseDeserialize: deserialize_mruv_objects_CreateObjectModelResponse,
  },
  // Get an object model.
  getObjectModel: {
    path: '/mruv.objects.MruVObjectModelsService/GetObjectModel',
    requestStream: false,
    responseStream: false,
    requestType: objects_models_pb.GetObjectModelRequest,
    responseType: objects_models_pb.GetObjectModelResponse,
    requestSerialize: serialize_mruv_objects_GetObjectModelRequest,
    requestDeserialize: deserialize_mruv_objects_GetObjectModelRequest,
    responseSerialize: serialize_mruv_objects_GetObjectModelResponse,
    responseDeserialize: deserialize_mruv_objects_GetObjectModelResponse,
  },
  // Update an object model.
  updateObjectModel: {
    path: '/mruv.objects.MruVObjectModelsService/UpdateObjectModel',
    requestStream: false,
    responseStream: false,
    requestType: objects_models_pb.UpdateObjectModelRequest,
    responseType: objects_models_pb.UpdateObjectModelResponse,
    requestSerialize: serialize_mruv_objects_UpdateObjectModelRequest,
    requestDeserialize: deserialize_mruv_objects_UpdateObjectModelRequest,
    responseSerialize: serialize_mruv_objects_UpdateObjectModelResponse,
    responseDeserialize: deserialize_mruv_objects_UpdateObjectModelResponse,
  },
  // Delete an object model.
  deleteObjectModel: {
    path: '/mruv.objects.MruVObjectModelsService/DeleteObjectModel',
    requestStream: false,
    responseStream: false,
    requestType: objects_models_pb.DeleteObjectModelRequest,
    responseType: objects_models_pb.DeleteObjectModelResponse,
    requestSerialize: serialize_mruv_objects_DeleteObjectModelRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteObjectModelRequest,
    responseSerialize: serialize_mruv_objects_DeleteObjectModelResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteObjectModelResponse,
  },
};

exports.MruVObjectModelsServiceClient = grpc.makeGenericClientConstructor(MruVObjectModelsServiceService);
