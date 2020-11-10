// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var texturestudio_texturestudio_server_pb = require('../texturestudio/texturestudio_server_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_texture_studio_GetProjectRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.GetProjectRequest)) {
    throw new Error('Expected argument of type texture_studio.GetProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.GetProjectResponse)) {
    throw new Error('Expected argument of type texture_studio.GetProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.GetProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectsRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.GetProjectsRequest)) {
    throw new Error('Expected argument of type texture_studio.GetProjectsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectsRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.GetProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectsResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.GetProjectsResponse)) {
    throw new Error('Expected argument of type texture_studio.GetProjectsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectsResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.GetProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_RestartServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.RestartServerRequest)) {
    throw new Error('Expected argument of type texture_studio.RestartServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_RestartServerRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.RestartServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_RestartServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.RestartServerResponse)) {
    throw new Error('Expected argument of type texture_studio.RestartServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_RestartServerResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.RestartServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_ServerStatusRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.ServerStatusRequest)) {
    throw new Error('Expected argument of type texture_studio.ServerStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_ServerStatusRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.ServerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_ServerStatusResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.ServerStatusResponse)) {
    throw new Error('Expected argument of type texture_studio.ServerStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_ServerStatusResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.ServerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StartServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.StartServerRequest)) {
    throw new Error('Expected argument of type texture_studio.StartServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StartServerRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.StartServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StartServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.StartServerResponse)) {
    throw new Error('Expected argument of type texture_studio.StartServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StartServerResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.StartServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StopServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.StopServerRequest)) {
    throw new Error('Expected argument of type texture_studio.StopServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StopServerRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.StopServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StopServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.StopServerResponse)) {
    throw new Error('Expected argument of type texture_studio.StopServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StopServerResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.StopServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_SubscribeToProjectsChangesRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesRequest)) {
    throw new Error('Expected argument of type texture_studio.SubscribeToProjectsChangesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_SubscribeToProjectsChangesRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_SubscribeToProjectsChangesResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse)) {
    throw new Error('Expected argument of type texture_studio.SubscribeToProjectsChangesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_SubscribeToProjectsChangesResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_UploadProjectRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.UploadProjectRequest)) {
    throw new Error('Expected argument of type texture_studio.UploadProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_UploadProjectRequest(buffer_arg) {
  return texturestudio_texturestudio_server_pb.UploadProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_UploadProjectResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_server_pb.UploadProjectResponse)) {
    throw new Error('Expected argument of type texture_studio.UploadProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_UploadProjectResponse(buffer_arg) {
  return texturestudio_texturestudio_server_pb.UploadProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage texture studio server.
var TextureStudioServerServiceService = exports.TextureStudioServerServiceService = {
  // Start a texture studio server.
  startServer: {
    path: '/texture_studio.TextureStudioServerService/StartServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.StartServerRequest,
    responseType: texturestudio_texturestudio_server_pb.StartServerResponse,
    requestSerialize: serialize_texture_studio_StartServerRequest,
    requestDeserialize: deserialize_texture_studio_StartServerRequest,
    responseSerialize: serialize_texture_studio_StartServerResponse,
    responseDeserialize: deserialize_texture_studio_StartServerResponse,
  },
  // Stop a texture studio server.
  stopServer: {
    path: '/texture_studio.TextureStudioServerService/StopServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.StopServerRequest,
    responseType: texturestudio_texturestudio_server_pb.StopServerResponse,
    requestSerialize: serialize_texture_studio_StopServerRequest,
    requestDeserialize: deserialize_texture_studio_StopServerRequest,
    responseSerialize: serialize_texture_studio_StopServerResponse,
    responseDeserialize: deserialize_texture_studio_StopServerResponse,
  },
  // Restart a texture studio server.
  restartServer: {
    path: '/texture_studio.TextureStudioServerService/RestartServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.RestartServerRequest,
    responseType: texturestudio_texturestudio_server_pb.RestartServerResponse,
    requestSerialize: serialize_texture_studio_RestartServerRequest,
    requestDeserialize: deserialize_texture_studio_RestartServerRequest,
    responseSerialize: serialize_texture_studio_RestartServerResponse,
    responseDeserialize: deserialize_texture_studio_RestartServerResponse,
  },
  // Get texture studio server status.
  serverStatus: {
    path: '/texture_studio.TextureStudioServerService/ServerStatus',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.ServerStatusRequest,
    responseType: texturestudio_texturestudio_server_pb.ServerStatusResponse,
    requestSerialize: serialize_texture_studio_ServerStatusRequest,
    requestDeserialize: deserialize_texture_studio_ServerStatusRequest,
    responseSerialize: serialize_texture_studio_ServerStatusResponse,
    responseDeserialize: deserialize_texture_studio_ServerStatusResponse,
  },
  // Upload project to texture studio.
  uploadProject: {
    path: '/texture_studio.TextureStudioServerService/UploadProject',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.UploadProjectRequest,
    responseType: texturestudio_texturestudio_server_pb.UploadProjectResponse,
    requestSerialize: serialize_texture_studio_UploadProjectRequest,
    requestDeserialize: deserialize_texture_studio_UploadProjectRequest,
    responseSerialize: serialize_texture_studio_UploadProjectResponse,
    responseDeserialize: deserialize_texture_studio_UploadProjectResponse,
  },
  // Get texture-studio objects project.
  getProject: {
    path: '/texture_studio.TextureStudioServerService/GetProject',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.GetProjectRequest,
    responseType: texturestudio_texturestudio_server_pb.GetProjectResponse,
    requestSerialize: serialize_texture_studio_GetProjectRequest,
    requestDeserialize: deserialize_texture_studio_GetProjectRequest,
    responseSerialize: serialize_texture_studio_GetProjectResponse,
    responseDeserialize: deserialize_texture_studio_GetProjectResponse,
  },
  // Get all projects.
  getProjects: {
    path: '/texture_studio.TextureStudioServerService/GetProjects',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_server_pb.GetProjectsRequest,
    responseType: texturestudio_texturestudio_server_pb.GetProjectsResponse,
    requestSerialize: serialize_texture_studio_GetProjectsRequest,
    requestDeserialize: deserialize_texture_studio_GetProjectsRequest,
    responseSerialize: serialize_texture_studio_GetProjectsResponse,
    responseDeserialize: deserialize_texture_studio_GetProjectsResponse,
  },
  // Listen for project changes - if texture studio project has been created or modified, this will trigger an event.
  subscribeToProjectsChanges: {
    path: '/texture_studio.TextureStudioServerService/SubscribeToProjectsChanges',
    requestStream: false,
    responseStream: true,
    requestType: texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesRequest,
    responseType: texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse,
    requestSerialize: serialize_texture_studio_SubscribeToProjectsChangesRequest,
    requestDeserialize: deserialize_texture_studio_SubscribeToProjectsChangesRequest,
    responseSerialize: serialize_texture_studio_SubscribeToProjectsChangesResponse,
    responseDeserialize: deserialize_texture_studio_SubscribeToProjectsChangesResponse,
  },
};

exports.TextureStudioServerServiceClient = grpc.makeGenericClientConstructor(TextureStudioServerServiceService);
