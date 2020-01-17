// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var characters_characters_pb = require('../characters/characters_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');
var characters_characters_model_pb = require('../characters/characters_model_pb.js');

function serialize_mruv_Character(arg) {
  if (!(arg instanceof characters_characters_model_pb.Character)) {
    throw new Error('Expected argument of type mruv.Character');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_Character(buffer_arg) {
  return characters_characters_model_pb.Character.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_CharacterID(arg) {
  if (!(arg instanceof characters_characters_model_pb.CharacterID)) {
    throw new Error('Expected argument of type mruv.CharacterID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CharacterID(buffer_arg) {
  return characters_characters_model_pb.CharacterID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DeathStreamRequest(arg) {
  if (!(arg instanceof characters_characters_pb.DeathStreamRequest)) {
    throw new Error('Expected argument of type mruv.DeathStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DeathStreamRequest(buffer_arg) {
  return characters_characters_pb.DeathStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DeathStreamResponse(arg) {
  if (!(arg instanceof characters_characters_pb.DeathStreamResponse)) {
    throw new Error('Expected argument of type mruv.DeathStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DeathStreamResponse(buffer_arg) {
  return characters_characters_pb.DeathStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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
  // CRUD
  createCharacter: {
    path: '/mruv.MruVCharactersService/CreateCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_model_pb.Character,
    responseType: characters_characters_model_pb.CharacterID,
    requestSerialize: serialize_mruv_Character,
    requestDeserialize: deserialize_mruv_Character,
    responseSerialize: serialize_mruv_CharacterID,
    responseDeserialize: deserialize_mruv_CharacterID,
  },
  getCharacter: {
    path: '/mruv.MruVCharactersService/GetCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_model_pb.CharacterID,
    responseType: characters_characters_model_pb.Character,
    requestSerialize: serialize_mruv_CharacterID,
    requestDeserialize: deserialize_mruv_CharacterID,
    responseSerialize: serialize_mruv_Character,
    responseDeserialize: deserialize_mruv_Character,
  },
  removeCharacter: {
    path: '/mruv.MruVCharactersService/RemoveCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_model_pb.CharacterID,
    responseType: characters_characters_model_pb.CharacterID,
    requestSerialize: serialize_mruv_CharacterID,
    requestDeserialize: deserialize_mruv_CharacterID,
    responseSerialize: serialize_mruv_CharacterID,
    responseDeserialize: deserialize_mruv_CharacterID,
  },
  // Deaths
  permanentCharacterKill: {
    path: '/mruv.MruVCharactersService/PermanentCharacterKill',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_model_pb.CharacterID,
    responseType: characters_characters_model_pb.CharacterID,
    requestSerialize: serialize_mruv_CharacterID,
    requestDeserialize: deserialize_mruv_CharacterID,
    responseSerialize: serialize_mruv_CharacterID,
    responseDeserialize: deserialize_mruv_CharacterID,
  },
  deathsStream: {
    path: '/mruv.MruVCharactersService/DeathsStream',
    requestStream: false,
    responseStream: true,
    requestType: characters_characters_pb.DeathStreamRequest,
    responseType: characters_characters_pb.DeathStreamResponse,
    requestSerialize: serialize_mruv_DeathStreamRequest,
    requestDeserialize: deserialize_mruv_DeathStreamRequest,
    responseSerialize: serialize_mruv_DeathStreamResponse,
    responseDeserialize: deserialize_mruv_DeathStreamResponse,
  },
  // Service status
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
