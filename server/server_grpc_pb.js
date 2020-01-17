// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var server_server_pb = require('../server/server_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var server_server_model_pb = require('../server/server_model_pb.js');

function serialize_mruv_RegisterServerRequest(arg) {
  if (!(arg instanceof server_server_pb.RegisterServerRequest)) {
    throw new Error('Expected argument of type mruv.RegisterServerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RegisterServerRequest(buffer_arg) {
  return server_server_pb.RegisterServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RegisterServerResponse(arg) {
  if (!(arg instanceof server_server_pb.RegisterServerResponse)) {
    throw new Error('Expected argument of type mruv.RegisterServerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RegisterServerResponse(buffer_arg) {
  return server_server_pb.RegisterServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServerID(arg) {
  if (!(arg instanceof server_server_model_pb.ServerID)) {
    throw new Error('Expected argument of type mruv.ServerID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServerID(buffer_arg) {
  return server_server_model_pb.ServerID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServerStatus(arg) {
  if (!(arg instanceof server_server_model_pb.ServerStatus)) {
    throw new Error('Expected argument of type mruv.ServerStatus');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServerStatus(buffer_arg) {
  return server_server_model_pb.ServerStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV server service provides procedures for managing game platform server actions
var MruVServerServiceService = exports.MruVServerServiceService = {
  // Register instance of server for further managing
  registerServer: {
    path: '/mruv.MruVServerService/RegisterServer',
    requestStream: false,
    responseStream: false,
    requestType: server_server_pb.RegisterServerRequest,
    responseType: server_server_pb.RegisterServerResponse,
    requestSerialize: serialize_mruv_RegisterServerRequest,
    requestDeserialize: deserialize_mruv_RegisterServerRequest,
    responseSerialize: serialize_mruv_RegisterServerResponse,
    responseDeserialize: deserialize_mruv_RegisterServerResponse,
  },
  // Get game server status
  getServerStatus: {
    path: '/mruv.MruVServerService/GetServerStatus',
    requestStream: false,
    responseStream: false,
    requestType: server_server_model_pb.ServerID,
    responseType: server_server_model_pb.ServerStatus,
    requestSerialize: serialize_mruv_ServerID,
    requestDeserialize: deserialize_mruv_ServerID,
    responseSerialize: serialize_mruv_ServerStatus,
    responseDeserialize: deserialize_mruv_ServerStatus,
  },
};

exports.MruVServerServiceClient = grpc.makeGenericClientConstructor(MruVServerServiceService);
