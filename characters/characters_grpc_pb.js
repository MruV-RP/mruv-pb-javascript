// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var characters_characters_pb = require('../characters/characters_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');

function serialize_mruv_characters_ChangeClothesRequest(arg) {
  if (!(arg instanceof characters_characters_pb.ChangeClothesRequest)) {
    throw new Error('Expected argument of type mruv.characters.ChangeClothesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_ChangeClothesRequest(buffer_arg) {
  return characters_characters_pb.ChangeClothesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_ChangeClothesResponse(arg) {
  if (!(arg instanceof characters_characters_pb.ChangeClothesResponse)) {
    throw new Error('Expected argument of type mruv.characters.ChangeClothesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_ChangeClothesResponse(buffer_arg) {
  return characters_characters_pb.ChangeClothesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_CharacterID(arg) {
  if (!(arg instanceof characters_characters_pb.CharacterID)) {
    throw new Error('Expected argument of type mruv.characters.CharacterID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_CharacterID(buffer_arg) {
  return characters_characters_pb.CharacterID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_CreateCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.CreateCharacterRequest)) {
    throw new Error('Expected argument of type mruv.characters.CreateCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_CreateCharacterRequest(buffer_arg) {
  return characters_characters_pb.CreateCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_CreateCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.CreateCharacterResponse)) {
    throw new Error('Expected argument of type mruv.characters.CreateCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_CreateCharacterResponse(buffer_arg) {
  return characters_characters_pb.CreateCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_DeathStreamRequest(arg) {
  if (!(arg instanceof characters_characters_pb.DeathStreamRequest)) {
    throw new Error('Expected argument of type mruv.characters.DeathStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_DeathStreamRequest(buffer_arg) {
  return characters_characters_pb.DeathStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_DeathStreamResponse(arg) {
  if (!(arg instanceof characters_characters_pb.DeathStreamResponse)) {
    throw new Error('Expected argument of type mruv.characters.DeathStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_DeathStreamResponse(buffer_arg) {
  return characters_characters_pb.DeathStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_DeleteCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.DeleteCharacterRequest)) {
    throw new Error('Expected argument of type mruv.characters.DeleteCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_DeleteCharacterRequest(buffer_arg) {
  return characters_characters_pb.DeleteCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_DeleteCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.DeleteCharacterResponse)) {
    throw new Error('Expected argument of type mruv.characters.DeleteCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_DeleteCharacterResponse(buffer_arg) {
  return characters_characters_pb.DeleteCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_GetCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.GetCharacterRequest)) {
    throw new Error('Expected argument of type mruv.characters.GetCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_GetCharacterRequest(buffer_arg) {
  return characters_characters_pb.GetCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_GetCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.GetCharacterResponse)) {
    throw new Error('Expected argument of type mruv.characters.GetCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_GetCharacterResponse(buffer_arg) {
  return characters_characters_pb.GetCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_UpdateCharacterRequest(arg) {
  if (!(arg instanceof characters_characters_pb.UpdateCharacterRequest)) {
    throw new Error('Expected argument of type mruv.characters.UpdateCharacterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_UpdateCharacterRequest(buffer_arg) {
  return characters_characters_pb.UpdateCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_characters_UpdateCharacterResponse(arg) {
  if (!(arg instanceof characters_characters_pb.UpdateCharacterResponse)) {
    throw new Error('Expected argument of type mruv.characters.UpdateCharacterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_characters_UpdateCharacterResponse(buffer_arg) {
  return characters_characters_pb.UpdateCharacterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_ServiceStatusRequest(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.common.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_ServiceStatusRequest(buffer_arg) {
  return common_health_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_ServiceStatusResponse(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.common.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_ServiceStatusResponse(buffer_arg) {
  return common_health_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_VersionRequest(arg) {
  if (!(arg instanceof common_health_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.common.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_VersionRequest(buffer_arg) {
  return common_health_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_VersionResponse(arg) {
  if (!(arg instanceof common_health_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.common.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_VersionResponse(buffer_arg) {
  return common_health_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MruVCharactersServiceService = exports.MruVCharactersServiceService = {
  // Create a character.
  createCharacter: {
    path: '/mruv.characters.MruVCharactersService/CreateCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.CreateCharacterRequest,
    responseType: characters_characters_pb.CreateCharacterResponse,
    requestSerialize: serialize_mruv_characters_CreateCharacterRequest,
    requestDeserialize: deserialize_mruv_characters_CreateCharacterRequest,
    responseSerialize: serialize_mruv_characters_CreateCharacterResponse,
    responseDeserialize: deserialize_mruv_characters_CreateCharacterResponse,
  },
  // Get a character.
  getCharacter: {
    path: '/mruv.characters.MruVCharactersService/GetCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.GetCharacterRequest,
    responseType: characters_characters_pb.GetCharacterResponse,
    requestSerialize: serialize_mruv_characters_GetCharacterRequest,
    requestDeserialize: deserialize_mruv_characters_GetCharacterRequest,
    responseSerialize: serialize_mruv_characters_GetCharacterResponse,
    responseDeserialize: deserialize_mruv_characters_GetCharacterResponse,
  },
  // Update a character.
  updateCharacter: {
    path: '/mruv.characters.MruVCharactersService/UpdateCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.UpdateCharacterRequest,
    responseType: characters_characters_pb.UpdateCharacterResponse,
    requestSerialize: serialize_mruv_characters_UpdateCharacterRequest,
    requestDeserialize: deserialize_mruv_characters_UpdateCharacterRequest,
    responseSerialize: serialize_mruv_characters_UpdateCharacterResponse,
    responseDeserialize: deserialize_mruv_characters_UpdateCharacterResponse,
  },
  // Delete a character.
  deleteCharacter: {
    path: '/mruv.characters.MruVCharactersService/DeleteCharacter',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.DeleteCharacterRequest,
    responseType: characters_characters_pb.DeleteCharacterResponse,
    requestSerialize: serialize_mruv_characters_DeleteCharacterRequest,
    requestDeserialize: deserialize_mruv_characters_DeleteCharacterRequest,
    responseSerialize: serialize_mruv_characters_DeleteCharacterResponse,
    responseDeserialize: deserialize_mruv_characters_DeleteCharacterResponse,
  },
  // Kill a character. A character that is killed cannot be played anymore.
  permanentCharacterKill: {
    path: '/mruv.characters.MruVCharactersService/PermanentCharacterKill',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.CharacterID,
    responseType: characters_characters_pb.CharacterID,
    requestSerialize: serialize_mruv_characters_CharacterID,
    requestDeserialize: deserialize_mruv_characters_CharacterID,
    responseSerialize: serialize_mruv_characters_CharacterID,
    responseDeserialize: deserialize_mruv_characters_CharacterID,
  },
  // Change player clothes.
  changeClothes: {
    path: '/mruv.characters.MruVCharactersService/ChangeClothes',
    requestStream: false,
    responseStream: false,
    requestType: characters_characters_pb.ChangeClothesRequest,
    responseType: characters_characters_pb.ChangeClothesResponse,
    requestSerialize: serialize_mruv_characters_ChangeClothesRequest,
    requestDeserialize: deserialize_mruv_characters_ChangeClothesRequest,
    responseSerialize: serialize_mruv_characters_ChangeClothesResponse,
    responseDeserialize: deserialize_mruv_characters_ChangeClothesResponse,
  },
  // Stream of deaths.
  deathsStream: {
    path: '/mruv.characters.MruVCharactersService/DeathsStream',
    requestStream: false,
    responseStream: true,
    requestType: characters_characters_pb.DeathStreamRequest,
    responseType: characters_characters_pb.DeathStreamResponse,
    requestSerialize: serialize_mruv_characters_DeathStreamRequest,
    requestDeserialize: deserialize_mruv_characters_DeathStreamRequest,
    responseSerialize: serialize_mruv_characters_DeathStreamResponse,
    responseDeserialize: deserialize_mruv_characters_DeathStreamResponse,
  },
  // Service status
  getServiceStatus: {
    path: '/mruv.characters.MruVCharactersService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_common_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_common_ServiceStatusRequest,
    responseSerialize: serialize_mruv_common_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_common_ServiceStatusResponse,
  },
  getServiceVersion: {
    path: '/mruv.characters.MruVCharactersService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.VersionRequest,
    responseType: common_health_pb.VersionResponse,
    requestSerialize: serialize_mruv_common_VersionRequest,
    requestDeserialize: deserialize_mruv_common_VersionRequest,
    responseSerialize: serialize_mruv_common_VersionResponse,
    responseDeserialize: deserialize_mruv_common_VersionResponse,
  },
};

exports.MruVCharactersServiceClient = grpc.makeGenericClientConstructor(MruVCharactersServiceService);
