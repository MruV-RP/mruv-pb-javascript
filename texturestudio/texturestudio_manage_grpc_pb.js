// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var texturestudio_texturestudio_manage_pb = require('../texturestudio/texturestudio_manage_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_texture_studio_CreateServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.CreateServerRequest)) {
    throw new Error('Expected argument of type mruv.texture_studio.CreateServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_CreateServerRequest(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.CreateServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_CreateServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.CreateServerResponse)) {
    throw new Error('Expected argument of type mruv.texture_studio.CreateServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_CreateServerResponse(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.CreateServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_DeleteServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.DeleteServerRequest)) {
    throw new Error('Expected argument of type mruv.texture_studio.DeleteServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_DeleteServerRequest(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.DeleteServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_DeleteServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.DeleteServerResponse)) {
    throw new Error('Expected argument of type mruv.texture_studio.DeleteServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_DeleteServerResponse(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.DeleteServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_GetServersRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.GetServersRequest)) {
    throw new Error('Expected argument of type mruv.texture_studio.GetServersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_GetServersRequest(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.GetServersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_GetServersResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.GetServersResponse)) {
    throw new Error('Expected argument of type mruv.texture_studio.GetServersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_GetServersResponse(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.GetServersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_MyServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.MyServerRequest)) {
    throw new Error('Expected argument of type mruv.texture_studio.MyServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_MyServerRequest(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.MyServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_MyServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.MyServerResponse)) {
    throw new Error('Expected argument of type mruv.texture_studio.MyServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_MyServerResponse(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.MyServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_TransferOwnershipRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.TransferOwnershipRequest)) {
    throw new Error('Expected argument of type mruv.texture_studio.TransferOwnershipRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_TransferOwnershipRequest(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.TransferOwnershipRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_texture_studio_TransferOwnershipResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_manage_pb.TransferOwnershipResponse)) {
    throw new Error('Expected argument of type mruv.texture_studio.TransferOwnershipResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_texture_studio_TransferOwnershipResponse(buffer_arg) {
  return texturestudio_texturestudio_manage_pb.TransferOwnershipResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage texture studio servers cluster.
var TextureStudioManagerServiceService = exports.TextureStudioManagerServiceService = {
  // Create a new texture studio server.
  createServer: {
    path: '/mruv.texture_studio.TextureStudioManagerService/CreateServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_manage_pb.CreateServerRequest,
    responseType: texturestudio_texturestudio_manage_pb.CreateServerResponse,
    requestSerialize: serialize_mruv_texture_studio_CreateServerRequest,
    requestDeserialize: deserialize_mruv_texture_studio_CreateServerRequest,
    responseSerialize: serialize_mruv_texture_studio_CreateServerResponse,
    responseDeserialize: deserialize_mruv_texture_studio_CreateServerResponse,
  },
  // Get all existing servers
  getServers: {
    path: '/mruv.texture_studio.TextureStudioManagerService/GetServers',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_manage_pb.GetServersRequest,
    responseType: texturestudio_texturestudio_manage_pb.GetServersResponse,
    requestSerialize: serialize_mruv_texture_studio_GetServersRequest,
    requestDeserialize: deserialize_mruv_texture_studio_GetServersRequest,
    responseSerialize: serialize_mruv_texture_studio_GetServersResponse,
    responseDeserialize: deserialize_mruv_texture_studio_GetServersResponse,
  },
  // Get texture studio server id for current user.
  myServer: {
    path: '/mruv.texture_studio.TextureStudioManagerService/MyServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_manage_pb.MyServerRequest,
    responseType: texturestudio_texturestudio_manage_pb.MyServerResponse,
    requestSerialize: serialize_mruv_texture_studio_MyServerRequest,
    requestDeserialize: deserialize_mruv_texture_studio_MyServerRequest,
    responseSerialize: serialize_mruv_texture_studio_MyServerResponse,
    responseDeserialize: deserialize_mruv_texture_studio_MyServerResponse,
  },
  // Change owner of texture studio server.
  transferOwnership: {
    path: '/mruv.texture_studio.TextureStudioManagerService/TransferOwnership',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest,
    responseType: texturestudio_texturestudio_manage_pb.TransferOwnershipResponse,
    requestSerialize: serialize_mruv_texture_studio_TransferOwnershipRequest,
    requestDeserialize: deserialize_mruv_texture_studio_TransferOwnershipRequest,
    responseSerialize: serialize_mruv_texture_studio_TransferOwnershipResponse,
    responseDeserialize: deserialize_mruv_texture_studio_TransferOwnershipResponse,
  },
  // Delete a texture studio server.
  deleteServer: {
    path: '/mruv.texture_studio.TextureStudioManagerService/DeleteServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_manage_pb.DeleteServerRequest,
    responseType: texturestudio_texturestudio_manage_pb.DeleteServerResponse,
    requestSerialize: serialize_mruv_texture_studio_DeleteServerRequest,
    requestDeserialize: deserialize_mruv_texture_studio_DeleteServerRequest,
    responseSerialize: serialize_mruv_texture_studio_DeleteServerResponse,
    responseDeserialize: deserialize_mruv_texture_studio_DeleteServerResponse,
  },
};

exports.TextureStudioManagerServiceClient = grpc.makeGenericClientConstructor(TextureStudioManagerServiceService);
