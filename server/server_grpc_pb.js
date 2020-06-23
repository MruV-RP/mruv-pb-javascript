// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var server_server_pb = require('../server/server_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var server_server_model_pb = require('../server/server_model_pb.js');

function serialize_mruv_server_GetRegisteredServersRequest(arg) {
  if (!(arg instanceof server_server_pb.GetRegisteredServersRequest)) {
    throw new Error('Expected argument of type mruv.server.GetRegisteredServersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_GetRegisteredServersRequest(buffer_arg) {
  return server_server_pb.GetRegisteredServersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_GetRegisteredServersResponse(arg) {
  if (!(arg instanceof server_server_pb.GetRegisteredServersResponse)) {
    throw new Error('Expected argument of type mruv.server.GetRegisteredServersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_GetRegisteredServersResponse(buffer_arg) {
  return server_server_pb.GetRegisteredServersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_ServerEvent(arg) {
  if (!(arg instanceof server_server_pb.ServerEvent)) {
    throw new Error('Expected argument of type mruv.server.ServerEvent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_ServerEvent(buffer_arg) {
  return server_server_pb.ServerEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_ServerEventsStreamRequest(arg) {
  if (!(arg instanceof server_server_pb.ServerEventsStreamRequest)) {
    throw new Error('Expected argument of type mruv.server.ServerEventsStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_ServerEventsStreamRequest(buffer_arg) {
  return server_server_pb.ServerEventsStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_ServerID(arg) {
  if (!(arg instanceof server_server_model_pb.ServerID)) {
    throw new Error('Expected argument of type mruv.server.ServerID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_ServerID(buffer_arg) {
  return server_server_model_pb.ServerID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_ServerInfo(arg) {
  if (!(arg instanceof server_server_model_pb.ServerInfo)) {
    throw new Error('Expected argument of type mruv.server.ServerInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_ServerInfo(buffer_arg) {
  return server_server_model_pb.ServerInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_UpdateServerStatusRequest(arg) {
  if (!(arg instanceof server_server_pb.UpdateServerStatusRequest)) {
    throw new Error('Expected argument of type mruv.server.UpdateServerStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_UpdateServerStatusRequest(buffer_arg) {
  return server_server_pb.UpdateServerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_server_UpdateServerStatusResponse(arg) {
  if (!(arg instanceof server_server_pb.UpdateServerStatusResponse)) {
    throw new Error('Expected argument of type mruv.server.UpdateServerStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_server_UpdateServerStatusResponse(buffer_arg) {
  return server_server_pb.UpdateServerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV server service provides procedures for managing game platform server actions.
var MruVServerServiceService = exports.MruVServerServiceService = {
  // Register instance of server for further managing.
  registerServer: {
    path: '/mruv.server.MruVServerService/RegisterServer',
    requestStream: false,
    responseStream: false,
    requestType: server_server_model_pb.ServerInfo,
    responseType: server_server_model_pb.ServerID,
    requestSerialize: serialize_mruv_server_ServerInfo,
    requestDeserialize: deserialize_mruv_server_ServerInfo,
    responseSerialize: serialize_mruv_server_ServerID,
    responseDeserialize: deserialize_mruv_server_ServerID,
  },
  // Get all registered servers.
  getRegisteredServers: {
    path: '/mruv.server.MruVServerService/GetRegisteredServers',
    requestStream: false,
    responseStream: false,
    requestType: server_server_pb.GetRegisteredServersRequest,
    responseType: server_server_pb.GetRegisteredServersResponse,
    requestSerialize: serialize_mruv_server_GetRegisteredServersRequest,
    requestDeserialize: deserialize_mruv_server_GetRegisteredServersRequest,
    responseSerialize: serialize_mruv_server_GetRegisteredServersResponse,
    responseDeserialize: deserialize_mruv_server_GetRegisteredServersResponse,
  },
  // Get game server status.
  getServerInfo: {
    path: '/mruv.server.MruVServerService/GetServerInfo',
    requestStream: false,
    responseStream: false,
    requestType: server_server_model_pb.ServerID,
    responseType: server_server_model_pb.ServerInfo,
    requestSerialize: serialize_mruv_server_ServerID,
    requestDeserialize: deserialize_mruv_server_ServerID,
    responseSerialize: serialize_mruv_server_ServerInfo,
    responseDeserialize: deserialize_mruv_server_ServerInfo,
  },
  // Update game server status.
  updateServerStatus: {
    path: '/mruv.server.MruVServerService/UpdateServerStatus',
    requestStream: false,
    responseStream: false,
    requestType: server_server_pb.UpdateServerStatusRequest,
    responseType: server_server_pb.UpdateServerStatusResponse,
    requestSerialize: serialize_mruv_server_UpdateServerStatusRequest,
    requestDeserialize: deserialize_mruv_server_UpdateServerStatusRequest,
    responseSerialize: serialize_mruv_server_UpdateServerStatusResponse,
    responseDeserialize: deserialize_mruv_server_UpdateServerStatusResponse,
  },
  // Stream of server events. Events are streamed back in real-time for chosen server.
  // TODO: Change name to: SubscribeServerEvents
  serverEventsStream: {
    path: '/mruv.server.MruVServerService/ServerEventsStream',
    requestStream: false,
    responseStream: true,
    requestType: server_server_pb.ServerEventsStreamRequest,
    responseType: server_server_pb.ServerEvent,
    requestSerialize: serialize_mruv_server_ServerEventsStreamRequest,
    requestDeserialize: deserialize_mruv_server_ServerEventsStreamRequest,
    responseSerialize: serialize_mruv_server_ServerEvent,
    responseDeserialize: deserialize_mruv_server_ServerEvent,
  },
};

exports.MruVServerServiceClient = grpc.makeGenericClientConstructor(MruVServerServiceService);
