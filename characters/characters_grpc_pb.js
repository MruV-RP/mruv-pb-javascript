// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');

function serialize_mruv_ServiceStatusRequest(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusRequest(buffer_arg) {
  return common_health_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusResponse(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusResponse(buffer_arg) {
  return common_health_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionRequest(arg) {
  if (!(arg instanceof common_health_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionRequest(buffer_arg) {
  return common_health_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionResponse(arg) {
  if (!(arg instanceof common_health_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionResponse(buffer_arg) {
  return common_health_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MruVCharactersServiceService = exports.MruVCharactersServiceService = {
  getServiceStatus: {
    path: '/mruv.MruVCharactersService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_ServiceStatusRequest,
    responseSerialize: serialize_mruv_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_ServiceStatusResponse,
  },
  getServiceVersion: {
    path: '/mruv.MruVCharactersService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.VersionRequest,
    responseType: common_health_pb.VersionResponse,
    requestSerialize: serialize_mruv_VersionRequest,
    requestDeserialize: deserialize_mruv_VersionRequest,
    responseSerialize: serialize_mruv_VersionResponse,
    responseDeserialize: deserialize_mruv_VersionResponse,
  },
};

exports.MruVCharactersServiceClient = grpc.makeGenericClientConstructor(MruVCharactersServiceService);
