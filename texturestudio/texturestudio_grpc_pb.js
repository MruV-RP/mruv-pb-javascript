// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var texturestudio_texturestudio_pb = require('../texturestudio/texturestudio_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_texture_studio_CreateServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.CreateServerRequest)) {
    throw new Error('Expected argument of type texture_studio.CreateServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_CreateServerRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.CreateServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_CreateServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.CreateServerResponse)) {
    throw new Error('Expected argument of type texture_studio.CreateServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_CreateServerResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.CreateServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_DeleteServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.DeleteServerRequest)) {
    throw new Error('Expected argument of type texture_studio.DeleteServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_DeleteServerRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.DeleteServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_DeleteServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.DeleteServerResponse)) {
    throw new Error('Expected argument of type texture_studio.DeleteServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_DeleteServerResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.DeleteServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.GetProjectRequest)) {
    throw new Error('Expected argument of type texture_studio.GetProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.GetProjectResponse)) {
    throw new Error('Expected argument of type texture_studio.GetProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.GetProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectsRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.GetProjectsRequest)) {
    throw new Error('Expected argument of type texture_studio.GetProjectsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectsRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.GetProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_GetProjectsResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.GetProjectsResponse)) {
    throw new Error('Expected argument of type texture_studio.GetProjectsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_GetProjectsResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.GetProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_MyServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.MyServerRequest)) {
    throw new Error('Expected argument of type texture_studio.MyServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_MyServerRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.MyServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_MyServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.MyServerResponse)) {
    throw new Error('Expected argument of type texture_studio.MyServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_MyServerResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.MyServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_RestartServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.RestartServerRequest)) {
    throw new Error('Expected argument of type texture_studio.RestartServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_RestartServerRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.RestartServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_RestartServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.RestartServerResponse)) {
    throw new Error('Expected argument of type texture_studio.RestartServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_RestartServerResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.RestartServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_ServerStatusRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.ServerStatusRequest)) {
    throw new Error('Expected argument of type texture_studio.ServerStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_ServerStatusRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.ServerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_ServerStatusResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.ServerStatusResponse)) {
    throw new Error('Expected argument of type texture_studio.ServerStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_ServerStatusResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.ServerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StartServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.StartServerRequest)) {
    throw new Error('Expected argument of type texture_studio.StartServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StartServerRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.StartServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StartServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.StartServerResponse)) {
    throw new Error('Expected argument of type texture_studio.StartServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StartServerResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.StartServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StopServerRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.StopServerRequest)) {
    throw new Error('Expected argument of type texture_studio.StopServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StopServerRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.StopServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_StopServerResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.StopServerResponse)) {
    throw new Error('Expected argument of type texture_studio.StopServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_StopServerResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.StopServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_SubscribeToProjectsChangesRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.SubscribeToProjectsChangesRequest)) {
    throw new Error('Expected argument of type texture_studio.SubscribeToProjectsChangesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_SubscribeToProjectsChangesRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.SubscribeToProjectsChangesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_SubscribeToProjectsChangesResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.SubscribeToProjectsChangesResponse)) {
    throw new Error('Expected argument of type texture_studio.SubscribeToProjectsChangesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_SubscribeToProjectsChangesResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.SubscribeToProjectsChangesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_UploadProjectRequest(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.UploadProjectRequest)) {
    throw new Error('Expected argument of type texture_studio.UploadProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_UploadProjectRequest(buffer_arg) {
  return texturestudio_texturestudio_pb.UploadProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_texture_studio_UploadProjectResponse(arg) {
  if (!(arg instanceof texturestudio_texturestudio_pb.UploadProjectResponse)) {
    throw new Error('Expected argument of type texture_studio.UploadProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_texture_studio_UploadProjectResponse(buffer_arg) {
  return texturestudio_texturestudio_pb.UploadProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage texture studio servers.
var TextureStudioServiceService = exports.TextureStudioServiceService = {
  // Create a new texture studio server.
  createServer: {
    path: '/texture_studio.TextureStudioService/CreateServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.CreateServerRequest,
    responseType: texturestudio_texturestudio_pb.CreateServerResponse,
    requestSerialize: serialize_texture_studio_CreateServerRequest,
    requestDeserialize: deserialize_texture_studio_CreateServerRequest,
    responseSerialize: serialize_texture_studio_CreateServerResponse,
    responseDeserialize: deserialize_texture_studio_CreateServerResponse,
  },
  // Get texture studio server id for current user.
  myServer: {
    path: '/texture_studio.TextureStudioService/MyServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.MyServerRequest,
    responseType: texturestudio_texturestudio_pb.MyServerResponse,
    requestSerialize: serialize_texture_studio_MyServerRequest,
    requestDeserialize: deserialize_texture_studio_MyServerRequest,
    responseSerialize: serialize_texture_studio_MyServerResponse,
    responseDeserialize: deserialize_texture_studio_MyServerResponse,
  },
  // Delete a texture studio server.
  deleteServer: {
    path: '/texture_studio.TextureStudioService/DeleteServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.DeleteServerRequest,
    responseType: texturestudio_texturestudio_pb.DeleteServerResponse,
    requestSerialize: serialize_texture_studio_DeleteServerRequest,
    requestDeserialize: deserialize_texture_studio_DeleteServerRequest,
    responseSerialize: serialize_texture_studio_DeleteServerResponse,
    responseDeserialize: deserialize_texture_studio_DeleteServerResponse,
  },
  // Start a texture studio server.
  startServer: {
    path: '/texture_studio.TextureStudioService/StartServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.StartServerRequest,
    responseType: texturestudio_texturestudio_pb.StartServerResponse,
    requestSerialize: serialize_texture_studio_StartServerRequest,
    requestDeserialize: deserialize_texture_studio_StartServerRequest,
    responseSerialize: serialize_texture_studio_StartServerResponse,
    responseDeserialize: deserialize_texture_studio_StartServerResponse,
  },
  // Stop a texture studio server.
  stopServer: {
    path: '/texture_studio.TextureStudioService/StopServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.StopServerRequest,
    responseType: texturestudio_texturestudio_pb.StopServerResponse,
    requestSerialize: serialize_texture_studio_StopServerRequest,
    requestDeserialize: deserialize_texture_studio_StopServerRequest,
    responseSerialize: serialize_texture_studio_StopServerResponse,
    responseDeserialize: deserialize_texture_studio_StopServerResponse,
  },
  // Restart a texture studio server.
  restartServer: {
    path: '/texture_studio.TextureStudioService/RestartServer',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.RestartServerRequest,
    responseType: texturestudio_texturestudio_pb.RestartServerResponse,
    requestSerialize: serialize_texture_studio_RestartServerRequest,
    requestDeserialize: deserialize_texture_studio_RestartServerRequest,
    responseSerialize: serialize_texture_studio_RestartServerResponse,
    responseDeserialize: deserialize_texture_studio_RestartServerResponse,
  },
  // Get texture studio server status.
  serverStatus: {
    path: '/texture_studio.TextureStudioService/ServerStatus',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.ServerStatusRequest,
    responseType: texturestudio_texturestudio_pb.ServerStatusResponse,
    requestSerialize: serialize_texture_studio_ServerStatusRequest,
    requestDeserialize: deserialize_texture_studio_ServerStatusRequest,
    responseSerialize: serialize_texture_studio_ServerStatusResponse,
    responseDeserialize: deserialize_texture_studio_ServerStatusResponse,
  },
  // Upload project to texture studio.
  uploadProject: {
    path: '/texture_studio.TextureStudioService/UploadProject',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.UploadProjectRequest,
    responseType: texturestudio_texturestudio_pb.UploadProjectResponse,
    requestSerialize: serialize_texture_studio_UploadProjectRequest,
    requestDeserialize: deserialize_texture_studio_UploadProjectRequest,
    responseSerialize: serialize_texture_studio_UploadProjectResponse,
    responseDeserialize: deserialize_texture_studio_UploadProjectResponse,
  },
  // Get texture-studio objects project.
  getProject: {
    path: '/texture_studio.TextureStudioService/GetProject',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.GetProjectRequest,
    responseType: texturestudio_texturestudio_pb.GetProjectResponse,
    requestSerialize: serialize_texture_studio_GetProjectRequest,
    requestDeserialize: deserialize_texture_studio_GetProjectRequest,
    responseSerialize: serialize_texture_studio_GetProjectResponse,
    responseDeserialize: deserialize_texture_studio_GetProjectResponse,
  },
  // Get all projects.
  getProjects: {
    path: '/texture_studio.TextureStudioService/GetProjects',
    requestStream: false,
    responseStream: false,
    requestType: texturestudio_texturestudio_pb.GetProjectsRequest,
    responseType: texturestudio_texturestudio_pb.GetProjectsResponse,
    requestSerialize: serialize_texture_studio_GetProjectsRequest,
    requestDeserialize: deserialize_texture_studio_GetProjectsRequest,
    responseSerialize: serialize_texture_studio_GetProjectsResponse,
    responseDeserialize: deserialize_texture_studio_GetProjectsResponse,
  },
  // Listen for project changes - if texture studio project has been created or modified, this will trigger an event.
  subscribeToProjectsChanges: {
    path: '/texture_studio.TextureStudioService/SubscribeToProjectsChanges',
    requestStream: false,
    responseStream: true,
    requestType: texturestudio_texturestudio_pb.SubscribeToProjectsChangesRequest,
    responseType: texturestudio_texturestudio_pb.SubscribeToProjectsChangesResponse,
    requestSerialize: serialize_texture_studio_SubscribeToProjectsChangesRequest,
    requestDeserialize: deserialize_texture_studio_SubscribeToProjectsChangesRequest,
    responseSerialize: serialize_texture_studio_SubscribeToProjectsChangesResponse,
    responseDeserialize: deserialize_texture_studio_SubscribeToProjectsChangesResponse,
  },
};

exports.TextureStudioServiceClient = grpc.makeGenericClientConstructor(TextureStudioServiceService);
