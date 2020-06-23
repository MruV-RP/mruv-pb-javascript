// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var characters_characters_pb = require('../characters/characters_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');
var common_spatial_pb = require('../common/spatial_pb.js');

function serialize_mruv_CharacterID(arg) {
  if (!(arg instanceof characters_characters_pb.CharacterID)) {
    throw new Error('Expected argument of type mruv.CharacterID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CharacterID(buffer_arg) {
  return characters_characters_pb.CharacterID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_CreateCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.CreateCharacterRequest)) {
    throw new Error('Expected argument of type mruv.CreateCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CreateCharacterRequest(buffer_arg) {
  return characters_characters_pb.CreateCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_CreateCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.CreateCharacterResponse)) {
    throw new Error('Expected argument of type mruv.CreateCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CreateCharacterResponse(buffer_arg) {
  return characters_characters_pb.CreateCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_mruv_DeleteCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.DeleteCharacterRequest)) {
    throw new Error('Expected argument of type mruv.DeleteCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DeleteCharacterRequest(buffer_arg) {
  return characters_characters_pb.DeleteCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DeleteCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.DeleteCharacterResponse)) {
    throw new Error('Expected argument of type mruv.DeleteCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DeleteCharacterResponse(buffer_arg) {
  return characters_characters_pb.DeleteCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.GetCharacterRequest)) {
    throw new Error('Expected argument of type mruv.GetCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetCharacterRequest(buffer_arg) {
  return characters_characters_pb.GetCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.GetCharacterResponse)) {
    throw new Error('Expected argument of type mruv.GetCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetCharacterResponse(buffer_arg) {
  return characters_characters_pb.GetCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_mruv_UpdateCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.UpdateCharacterRequest)) {
    throw new Error('Expected argument of type mruv.UpdateCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UpdateCharacterRequest(buffer_arg) {
  return characters_characters_pb.UpdateCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_UpdateCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.UpdateCharacterResponse)) {
    throw new Error('Expected argument of type mruv.UpdateCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UpdateCharacterResponse(buffer_arg) {
  return characters_characters_pb.UpdateCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Create a character.
  createCharacter: {
    path: '/mruv.MruVCharactersService/CreateCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.CreateCharacterRequest,
    responseType: characters_characters_pb.CreateCharacterResponse,
    requestSerialize: serialize_mruv_CreateCharacterRequest,
    requestDeserialize: deserialize_mruv_CreateCharacterRequest,
    responseSerialize: serialize_mruv_CreateCharacterResponse,
    responseDeserialize: deserialize_mruv_CreateCharacterResponse,
  },
  // Get a character.
  getCharacter: {
    path: '/mruv.MruVCharactersService/GetCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.GetCharacterRequest,
    responseType: characters_characters_pb.GetCharacterResponse,
    requestSerialize: serialize_mruv_GetCharacterRequest,
    requestDeserialize: deserialize_mruv_GetCharacterRequest,
    responseSerialize: serialize_mruv_GetCharacterResponse,
    responseDeserialize: deserialize_mruv_GetCharacterResponse,
  },
  // Update a character.
  updateCharacter: {
    path: '/mruv.MruVCharactersService/UpdateCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.UpdateCharacterRequest,
    responseType: characters_characters_pb.UpdateCharacterResponse,
    requestSerialize: serialize_mruv_UpdateCharacterRequest,
    requestDeserialize: deserialize_mruv_UpdateCharacterRequest,
    responseSerialize: serialize_mruv_UpdateCharacterResponse,
    responseDeserialize: deserialize_mruv_UpdateCharacterResponse,
  },
  // Delete a character.
  deleteCharacter: {
    path: '/mruv.MruVCharactersService/DeleteCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.DeleteCharacterRequest,
    responseType: characters_characters_pb.DeleteCharacterResponse,
    requestSerialize: serialize_mruv_DeleteCharacterRequest,
    requestDeserialize: deserialize_mruv_DeleteCharacterRequest,
    responseSerialize: serialize_mruv_DeleteCharacterResponse,
    responseDeserialize: deserialize_mruv_DeleteCharacterResponse,
  },
  // Kill a character. A character that is killed cannot be played anymore.
  permanentCharacterKill: {
    path: '/mruv.MruVCharactersService/PermanentCharacterKill',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.CharacterID,
    responseType: characters_characters_pb.CharacterID,
    requestSerialize: serialize_mruv_CharacterID,
    requestDeserialize: deserialize_mruv_CharacterID,
    responseSerialize: serialize_mruv_CharacterID,
    responseDeserialize: deserialize_mruv_CharacterID,
  },
  // Stream of deaths.
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
