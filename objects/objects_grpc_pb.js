// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var objects_objects_pb = require('../objects/objects_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_objects_CreateObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.CreateObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.CreateObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateObjectRequest(buffer_arg) {
  return objects_objects_pb.CreateObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_CreateObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.CreateObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.CreateObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateObjectResponse(buffer_arg) {
  return objects_objects_pb.CreateObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectRequest(buffer_arg) {
  return objects_objects_pb.DeleteObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectResponse(buffer_arg) {
  return objects_objects_pb.DeleteObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectRequest(buffer_arg) {
  return objects_objects_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectResponse(buffer_arg) {
  return objects_objects_pb.GetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.UpdateObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.UpdateObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateObjectRequest(buffer_arg) {
  return objects_objects_pb.UpdateObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.UpdateObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.UpdateObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateObjectResponse(buffer_arg) {
  return objects_objects_pb.UpdateObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV objects service provides procedures for game objects.
var MruVObjectsServiceService = exports.MruVObjectsServiceService = {
  // Create an object.
  createObject: {
    path: '/mruv.objects.MruVObjectsService/CreateObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.CreateObjectRequest,
    responseType: objects_objects_pb.CreateObjectResponse,
    requestSerialize: serialize_mruv_objects_CreateObjectRequest,
    requestDeserialize: deserialize_mruv_objects_CreateObjectRequest,
    responseSerialize: serialize_mruv_objects_CreateObjectResponse,
    responseDeserialize: deserialize_mruv_objects_CreateObjectResponse,
  },
  // Get an object.
  getObject: {
    path: '/mruv.objects.MruVObjectsService/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.GetObjectRequest,
    responseType: objects_objects_pb.GetObjectResponse,
    requestSerialize: serialize_mruv_objects_GetObjectRequest,
    requestDeserialize: deserialize_mruv_objects_GetObjectRequest,
    responseSerialize: serialize_mruv_objects_GetObjectResponse,
    responseDeserialize: deserialize_mruv_objects_GetObjectResponse,
  },
  // Update an object.
  updateObject: {
    path: '/mruv.objects.MruVObjectsService/UpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.UpdateObjectRequest,
    responseType: objects_objects_pb.UpdateObjectResponse,
    requestSerialize: serialize_mruv_objects_UpdateObjectRequest,
    requestDeserialize: deserialize_mruv_objects_UpdateObjectRequest,
    responseSerialize: serialize_mruv_objects_UpdateObjectResponse,
    responseDeserialize: deserialize_mruv_objects_UpdateObjectResponse,
  },
  // Delete an object.
  deleteObject: {
    path: '/mruv.objects.MruVObjectsService/DeleteObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.DeleteObjectRequest,
    responseType: objects_objects_pb.DeleteObjectResponse,
    requestSerialize: serialize_mruv_objects_DeleteObjectRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteObjectRequest,
    responseSerialize: serialize_mruv_objects_DeleteObjectResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteObjectResponse,
  },
};

exports.MruVObjectsServiceClient = grpc.makeGenericClientConstructor(MruVObjectsServiceService);
