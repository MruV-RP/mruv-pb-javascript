// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var punishments_punishments_pb = require('../punishments/punishments_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_economy_AdminJailMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.AdminJailMessage)) {
    throw new Error('Expected argument of type mruv.economy.AdminJailMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_AdminJailMessage(buffer_arg) {
  return punishments_punishments_pb.AdminJailMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_AdminJailRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.AdminJailRequest)) {
    throw new Error('Expected argument of type mruv.economy.AdminJailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_AdminJailRequest(buffer_arg) {
  return punishments_punishments_pb.AdminJailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_AdminJailResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.AdminJailResponse)) {
    throw new Error('Expected argument of type mruv.economy.AdminJailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_AdminJailResponse(buffer_arg) {
  return punishments_punishments_pb.AdminJailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BanMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.BanMessage)) {
    throw new Error('Expected argument of type mruv.economy.BanMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BanMessage(buffer_arg) {
  return punishments_punishments_pb.BanMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BanRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.BanRequest)) {
    throw new Error('Expected argument of type mruv.economy.BanRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BanRequest(buffer_arg) {
  return punishments_punishments_pb.BanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BanResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.BanResponse)) {
    throw new Error('Expected argument of type mruv.economy.BanResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BanResponse(buffer_arg) {
  return punishments_punishments_pb.BanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BlockMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.BlockMessage)) {
    throw new Error('Expected argument of type mruv.economy.BlockMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BlockMessage(buffer_arg) {
  return punishments_punishments_pb.BlockMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BlockRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.BlockRequest)) {
    throw new Error('Expected argument of type mruv.economy.BlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BlockRequest(buffer_arg) {
  return punishments_punishments_pb.BlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_BlockResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.BlockResponse)) {
    throw new Error('Expected argument of type mruv.economy.BlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_BlockResponse(buffer_arg) {
  return punishments_punishments_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetBanRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetBanRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetBanRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetBanRequest(buffer_arg) {
  return punishments_punishments_pb.GetBanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetBlockRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetBlockRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetBlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetBlockRequest(buffer_arg) {
  return punishments_punishments_pb.GetBlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPlayerAdminJailRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerAdminJailRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetPlayerAdminJailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPlayerAdminJailRequest(buffer_arg) {
  return punishments_punishments_pb.GetPlayerAdminJailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPlayerAdminJailResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerAdminJailResponse)) {
    throw new Error('Expected argument of type mruv.economy.GetPlayerAdminJailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPlayerAdminJailResponse(buffer_arg) {
  return punishments_punishments_pb.GetPlayerAdminJailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPlayerBansRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerBansRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetPlayerBansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPlayerBansRequest(buffer_arg) {
  return punishments_punishments_pb.GetPlayerBansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPlayerBansResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerBansResponse)) {
    throw new Error('Expected argument of type mruv.economy.GetPlayerBansResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPlayerBansResponse(buffer_arg) {
  return punishments_punishments_pb.GetPlayerBansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPlayerWarnsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerWarnsRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetPlayerWarnsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPlayerWarnsRequest(buffer_arg) {
  return punishments_punishments_pb.GetPlayerWarnsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetPlayerWarnsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerWarnsResponse)) {
    throw new Error('Expected argument of type mruv.economy.GetPlayerWarnsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetPlayerWarnsResponse(buffer_arg) {
  return punishments_punishments_pb.GetPlayerWarnsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_GetWarnRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetWarnRequest)) {
    throw new Error('Expected argument of type mruv.economy.GetWarnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_GetWarnRequest(buffer_arg) {
  return punishments_punishments_pb.GetWarnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_IsCharacterBlockedRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterBlockedRequest)) {
    throw new Error('Expected argument of type mruv.economy.IsCharacterBlockedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_IsCharacterBlockedRequest(buffer_arg) {
  return punishments_punishments_pb.IsCharacterBlockedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_IsCharacterBlockedResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterBlockedResponse)) {
    throw new Error('Expected argument of type mruv.economy.IsCharacterBlockedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_IsCharacterBlockedResponse(buffer_arg) {
  return punishments_punishments_pb.IsCharacterBlockedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_IsCharacterJailedRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterJailedRequest)) {
    throw new Error('Expected argument of type mruv.economy.IsCharacterJailedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_IsCharacterJailedRequest(buffer_arg) {
  return punishments_punishments_pb.IsCharacterJailedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_IsCharacterJailedResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterJailedResponse)) {
    throw new Error('Expected argument of type mruv.economy.IsCharacterJailedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_IsCharacterJailedResponse(buffer_arg) {
  return punishments_punishments_pb.IsCharacterJailedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_IsPlayerBannedRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsPlayerBannedRequest)) {
    throw new Error('Expected argument of type mruv.economy.IsPlayerBannedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_IsPlayerBannedRequest(buffer_arg) {
  return punishments_punishments_pb.IsPlayerBannedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_IsPlayerBannedResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsPlayerBannedResponse)) {
    throw new Error('Expected argument of type mruv.economy.IsPlayerBannedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_IsPlayerBannedResponse(buffer_arg) {
  return punishments_punishments_pb.IsPlayerBannedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_MuteGlobalChatsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.MuteGlobalChatsRequest)) {
    throw new Error('Expected argument of type mruv.economy.MuteGlobalChatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_MuteGlobalChatsRequest(buffer_arg) {
  return punishments_punishments_pb.MuteGlobalChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_MuteGlobalChatsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.MuteGlobalChatsResponse)) {
    throw new Error('Expected argument of type mruv.economy.MuteGlobalChatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_MuteGlobalChatsResponse(buffer_arg) {
  return punishments_punishments_pb.MuteGlobalChatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnAdminJailMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnAdminJailMessage)) {
    throw new Error('Expected argument of type mruv.economy.UnAdminJailMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnAdminJailMessage(buffer_arg) {
  return punishments_punishments_pb.UnAdminJailMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnAdminJailRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnAdminJailRequest)) {
    throw new Error('Expected argument of type mruv.economy.UnAdminJailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnAdminJailRequest(buffer_arg) {
  return punishments_punishments_pb.UnAdminJailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnAdminJailResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnAdminJailResponse)) {
    throw new Error('Expected argument of type mruv.economy.UnAdminJailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnAdminJailResponse(buffer_arg) {
  return punishments_punishments_pb.UnAdminJailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnBanMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBanMessage)) {
    throw new Error('Expected argument of type mruv.economy.UnBanMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnBanMessage(buffer_arg) {
  return punishments_punishments_pb.UnBanMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnBanRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBanRequest)) {
    throw new Error('Expected argument of type mruv.economy.UnBanRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnBanRequest(buffer_arg) {
  return punishments_punishments_pb.UnBanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnBanResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBanResponse)) {
    throw new Error('Expected argument of type mruv.economy.UnBanResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnBanResponse(buffer_arg) {
  return punishments_punishments_pb.UnBanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnBlockMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBlockMessage)) {
    throw new Error('Expected argument of type mruv.economy.UnBlockMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnBlockMessage(buffer_arg) {
  return punishments_punishments_pb.UnBlockMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnBlockRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBlockRequest)) {
    throw new Error('Expected argument of type mruv.economy.UnBlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnBlockRequest(buffer_arg) {
  return punishments_punishments_pb.UnBlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnBlockResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBlockResponse)) {
    throw new Error('Expected argument of type mruv.economy.UnBlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnBlockResponse(buffer_arg) {
  return punishments_punishments_pb.UnBlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnMuteGlobalChatsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnMuteGlobalChatsRequest)) {
    throw new Error('Expected argument of type mruv.economy.UnMuteGlobalChatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnMuteGlobalChatsRequest(buffer_arg) {
  return punishments_punishments_pb.UnMuteGlobalChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnMuteGlobalChatsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnMuteGlobalChatsResponse)) {
    throw new Error('Expected argument of type mruv.economy.UnMuteGlobalChatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnMuteGlobalChatsResponse(buffer_arg) {
  return punishments_punishments_pb.UnMuteGlobalChatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnWarnMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnWarnMessage)) {
    throw new Error('Expected argument of type mruv.economy.UnWarnMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnWarnMessage(buffer_arg) {
  return punishments_punishments_pb.UnWarnMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnWarnRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnWarnRequest)) {
    throw new Error('Expected argument of type mruv.economy.UnWarnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnWarnRequest(buffer_arg) {
  return punishments_punishments_pb.UnWarnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_UnWarnResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnWarnResponse)) {
    throw new Error('Expected argument of type mruv.economy.UnWarnResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_UnWarnResponse(buffer_arg) {
  return punishments_punishments_pb.UnWarnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WarnMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.WarnMessage)) {
    throw new Error('Expected argument of type mruv.economy.WarnMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WarnMessage(buffer_arg) {
  return punishments_punishments_pb.WarnMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WarnRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WarnRequest)) {
    throw new Error('Expected argument of type mruv.economy.WarnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WarnRequest(buffer_arg) {
  return punishments_punishments_pb.WarnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WarnResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WarnResponse)) {
    throw new Error('Expected argument of type mruv.economy.WarnResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WarnResponse(buffer_arg) {
  return punishments_punishments_pb.WarnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchAdminJailsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchAdminJailsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchAdminJailsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchAdminJailsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchAdminJailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchBansRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchBansRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchBansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchBansRequest(buffer_arg) {
  return punishments_punishments_pb.WatchBansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchBlocksRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchBlocksRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchBlocksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchBlocksRequest(buffer_arg) {
  return punishments_punishments_pb.WatchBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPlayerAcquittalsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerAcquittalsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchPlayerAcquittalsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPlayerAcquittalsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerAcquittalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPlayerAcquittalsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerAcquittalsResponse)) {
    throw new Error('Expected argument of type mruv.economy.WatchPlayerAcquittalsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPlayerAcquittalsResponse(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerAcquittalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPlayerPunishmentsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerPunishmentsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchPlayerPunishmentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPlayerPunishmentsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerPunishmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPlayerPunishmentsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerPunishmentsResponse)) {
    throw new Error('Expected argument of type mruv.economy.WatchPlayerPunishmentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPlayerPunishmentsResponse(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerPunishmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPunishmentsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPunishmentsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchPunishmentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPunishmentsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchPunishmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchPunishmentsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPunishmentsResponse)) {
    throw new Error('Expected argument of type mruv.economy.WatchPunishmentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchPunishmentsResponse(buffer_arg) {
  return punishments_punishments_pb.WatchPunishmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchUnAdminJailsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnAdminJailsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchUnAdminJailsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchUnAdminJailsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnAdminJailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchUnBansRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnBansRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchUnBansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchUnBansRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnBansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchUnBlocksRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnBlocksRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchUnBlocksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchUnBlocksRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchUnWarnsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnWarnsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchUnWarnsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchUnWarnsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnWarnsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_economy_WatchWarnsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchWarnsRequest)) {
    throw new Error('Expected argument of type mruv.economy.WatchWarnsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_economy_WatchWarnsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchWarnsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// This service provides interface for managing punishments for players.
var MruVPunishmentsServiceService = exports.MruVPunishmentsServiceService = {
  // Ban player on account and/or ip.
  // If ban_time is 0, ban will never expire.
  ban: {
    path: '/mruv.economy.MruVPunishmentsService/Ban',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.BanRequest,
    responseType: punishments_punishments_pb.BanResponse,
    requestSerialize: serialize_mruv_economy_BanRequest,
    requestDeserialize: deserialize_mruv_economy_BanRequest,
    responseSerialize: serialize_mruv_economy_BanResponse,
    responseDeserialize: deserialize_mruv_economy_BanResponse,
  },
  // Block player character.
  block: {
    path: '/mruv.economy.MruVPunishmentsService/Block',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.BlockRequest,
    responseType: punishments_punishments_pb.BlockResponse,
    requestSerialize: serialize_mruv_economy_BlockRequest,
    requestDeserialize: deserialize_mruv_economy_BlockRequest,
    responseSerialize: serialize_mruv_economy_BlockResponse,
    responseDeserialize: deserialize_mruv_economy_BlockResponse,
  },
  // Warn player.
  // If warn_time is 0, warn will never expire.
  warn: {
    path: '/mruv.economy.MruVPunishmentsService/Warn',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.WarnRequest,
    responseType: punishments_punishments_pb.WarnResponse,
    requestSerialize: serialize_mruv_economy_WarnRequest,
    requestDeserialize: deserialize_mruv_economy_WarnRequest,
    responseSerialize: serialize_mruv_economy_WarnResponse,
    responseDeserialize: deserialize_mruv_economy_WarnResponse,
  },
  // Put player in an admin jail.
  adminJail: {
    path: '/mruv.economy.MruVPunishmentsService/AdminJail',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.AdminJailRequest,
    responseType: punishments_punishments_pb.AdminJailResponse,
    requestSerialize: serialize_mruv_economy_AdminJailRequest,
    requestDeserialize: deserialize_mruv_economy_AdminJailRequest,
    responseSerialize: serialize_mruv_economy_AdminJailResponse,
    responseDeserialize: deserialize_mruv_economy_AdminJailResponse,
  },
  // Mute player global chats.
  muteGlobalChats: {
    path: '/mruv.economy.MruVPunishmentsService/MuteGlobalChats',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.MuteGlobalChatsRequest,
    responseType: punishments_punishments_pb.MuteGlobalChatsResponse,
    requestSerialize: serialize_mruv_economy_MuteGlobalChatsRequest,
    requestDeserialize: deserialize_mruv_economy_MuteGlobalChatsRequest,
    responseSerialize: serialize_mruv_economy_MuteGlobalChatsResponse,
    responseDeserialize: deserialize_mruv_economy_MuteGlobalChatsResponse,
  },
  // Deactivate a specific player ban.
  unBan: {
    path: '/mruv.economy.MruVPunishmentsService/UnBan',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnBanRequest,
    responseType: punishments_punishments_pb.UnBanResponse,
    requestSerialize: serialize_mruv_economy_UnBanRequest,
    requestDeserialize: deserialize_mruv_economy_UnBanRequest,
    responseSerialize: serialize_mruv_economy_UnBanResponse,
    responseDeserialize: deserialize_mruv_economy_UnBanResponse,
  },
  // Deactivate a character block.
  unBlock: {
    path: '/mruv.economy.MruVPunishmentsService/UnBlock',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnBlockRequest,
    responseType: punishments_punishments_pb.UnBlockResponse,
    requestSerialize: serialize_mruv_economy_UnBlockRequest,
    requestDeserialize: deserialize_mruv_economy_UnBlockRequest,
    responseSerialize: serialize_mruv_economy_UnBlockResponse,
    responseDeserialize: deserialize_mruv_economy_UnBlockResponse,
  },
  // Deactivate a specific player warning. If a player was banned by reaching the warning limit, a player will be unbanned.
  unWarn: {
    path: '/mruv.economy.MruVPunishmentsService/UnWarn',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnWarnRequest,
    responseType: punishments_punishments_pb.UnWarnResponse,
    requestSerialize: serialize_mruv_economy_UnWarnRequest,
    requestDeserialize: deserialize_mruv_economy_UnWarnRequest,
    responseSerialize: serialize_mruv_economy_UnWarnResponse,
    responseDeserialize: deserialize_mruv_economy_UnWarnResponse,
  },
  // Remove player from admin jail.
  unAdminJail: {
    path: '/mruv.economy.MruVPunishmentsService/UnAdminJail',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnAdminJailRequest,
    responseType: punishments_punishments_pb.UnAdminJailResponse,
    requestSerialize: serialize_mruv_economy_UnAdminJailRequest,
    requestDeserialize: deserialize_mruv_economy_UnAdminJailRequest,
    responseSerialize: serialize_mruv_economy_UnAdminJailResponse,
    responseDeserialize: deserialize_mruv_economy_UnAdminJailResponse,
  },
  //
  unMuteGlobalChats: {
    path: '/mruv.economy.MruVPunishmentsService/UnMuteGlobalChats',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnMuteGlobalChatsRequest,
    responseType: punishments_punishments_pb.UnMuteGlobalChatsResponse,
    requestSerialize: serialize_mruv_economy_UnMuteGlobalChatsRequest,
    requestDeserialize: deserialize_mruv_economy_UnMuteGlobalChatsRequest,
    responseSerialize: serialize_mruv_economy_UnMuteGlobalChatsResponse,
    responseDeserialize: deserialize_mruv_economy_UnMuteGlobalChatsResponse,
  },
  // Get all player bans.
  getPlayerBans: {
    path: '/mruv.economy.MruVPunishmentsService/GetPlayerBans',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetPlayerBansRequest,
    responseType: punishments_punishments_pb.GetPlayerBansResponse,
    requestSerialize: serialize_mruv_economy_GetPlayerBansRequest,
    requestDeserialize: deserialize_mruv_economy_GetPlayerBansRequest,
    responseSerialize: serialize_mruv_economy_GetPlayerBansResponse,
    responseDeserialize: deserialize_mruv_economy_GetPlayerBansResponse,
  },
  // Get all player warns.
  getPlayerWarns: {
    path: '/mruv.economy.MruVPunishmentsService/GetPlayerWarns',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetPlayerWarnsRequest,
    responseType: punishments_punishments_pb.GetPlayerWarnsResponse,
    requestSerialize: serialize_mruv_economy_GetPlayerWarnsRequest,
    requestDeserialize: deserialize_mruv_economy_GetPlayerWarnsRequest,
    responseSerialize: serialize_mruv_economy_GetPlayerWarnsResponse,
    responseDeserialize: deserialize_mruv_economy_GetPlayerWarnsResponse,
  },
  // Get player admin jail time.
  getPlayerAdminJail: {
    path: '/mruv.economy.MruVPunishmentsService/GetPlayerAdminJail',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetPlayerAdminJailRequest,
    responseType: punishments_punishments_pb.GetPlayerAdminJailResponse,
    requestSerialize: serialize_mruv_economy_GetPlayerAdminJailRequest,
    requestDeserialize: deserialize_mruv_economy_GetPlayerAdminJailRequest,
    responseSerialize: serialize_mruv_economy_GetPlayerAdminJailResponse,
    responseDeserialize: deserialize_mruv_economy_GetPlayerAdminJailResponse,
  },
  // Get ban info.
  getBan: {
    path: '/mruv.economy.MruVPunishmentsService/GetBan',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetBanRequest,
    responseType: punishments_punishments_pb.BanMessage,
    requestSerialize: serialize_mruv_economy_GetBanRequest,
    requestDeserialize: deserialize_mruv_economy_GetBanRequest,
    responseSerialize: serialize_mruv_economy_BanMessage,
    responseDeserialize: deserialize_mruv_economy_BanMessage,
  },
  // Get warn info.
  getWarn: {
    path: '/mruv.economy.MruVPunishmentsService/GetWarn',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetWarnRequest,
    responseType: punishments_punishments_pb.WarnMessage,
    requestSerialize: serialize_mruv_economy_GetWarnRequest,
    requestDeserialize: deserialize_mruv_economy_GetWarnRequest,
    responseSerialize: serialize_mruv_economy_WarnMessage,
    responseDeserialize: deserialize_mruv_economy_WarnMessage,
  },
  // Get block info.
  getBlock: {
    path: '/mruv.economy.MruVPunishmentsService/GetBlock',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetBlockRequest,
    responseType: punishments_punishments_pb.BlockMessage,
    requestSerialize: serialize_mruv_economy_GetBlockRequest,
    requestDeserialize: deserialize_mruv_economy_GetBlockRequest,
    responseSerialize: serialize_mruv_economy_BlockMessage,
    responseDeserialize: deserialize_mruv_economy_BlockMessage,
  },
  // Check is player or ip banned.
  isPlayerBanned: {
    path: '/mruv.economy.MruVPunishmentsService/IsPlayerBanned',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.IsPlayerBannedRequest,
    responseType: punishments_punishments_pb.IsPlayerBannedResponse,
    requestSerialize: serialize_mruv_economy_IsPlayerBannedRequest,
    requestDeserialize: deserialize_mruv_economy_IsPlayerBannedRequest,
    responseSerialize: serialize_mruv_economy_IsPlayerBannedResponse,
    responseDeserialize: deserialize_mruv_economy_IsPlayerBannedResponse,
  },
  // Check is character is blocked.
  isCharacterBlocked: {
    path: '/mruv.economy.MruVPunishmentsService/IsCharacterBlocked',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.IsCharacterBlockedRequest,
    responseType: punishments_punishments_pb.IsCharacterBlockedResponse,
    requestSerialize: serialize_mruv_economy_IsCharacterBlockedRequest,
    requestDeserialize: deserialize_mruv_economy_IsCharacterBlockedRequest,
    responseSerialize: serialize_mruv_economy_IsCharacterBlockedResponse,
    responseDeserialize: deserialize_mruv_economy_IsCharacterBlockedResponse,
  },
  //
  isCharacterJailed: {
    path: '/mruv.economy.MruVPunishmentsService/IsCharacterJailed',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.IsCharacterJailedRequest,
    responseType: punishments_punishments_pb.IsCharacterJailedResponse,
    requestSerialize: serialize_mruv_economy_IsCharacterJailedRequest,
    requestDeserialize: deserialize_mruv_economy_IsCharacterJailedRequest,
    responseSerialize: serialize_mruv_economy_IsCharacterJailedResponse,
    responseDeserialize: deserialize_mruv_economy_IsCharacterJailedResponse,
  },
  // Subscribe to ban events.
  watchBans: {
    path: '/mruv.economy.MruVPunishmentsService/WatchBans',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchBansRequest,
    responseType: punishments_punishments_pb.BanMessage,
    requestSerialize: serialize_mruv_economy_WatchBansRequest,
    requestDeserialize: deserialize_mruv_economy_WatchBansRequest,
    responseSerialize: serialize_mruv_economy_BanMessage,
    responseDeserialize: deserialize_mruv_economy_BanMessage,
  },
  // Subscribe to block events.
  watchBlocks: {
    path: '/mruv.economy.MruVPunishmentsService/WatchBlocks',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchBlocksRequest,
    responseType: punishments_punishments_pb.BlockMessage,
    requestSerialize: serialize_mruv_economy_WatchBlocksRequest,
    requestDeserialize: deserialize_mruv_economy_WatchBlocksRequest,
    responseSerialize: serialize_mruv_economy_BlockMessage,
    responseDeserialize: deserialize_mruv_economy_BlockMessage,
  },
  // Subscribe to warn events.
  watchWarns: {
    path: '/mruv.economy.MruVPunishmentsService/WatchWarns',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchWarnsRequest,
    responseType: punishments_punishments_pb.WarnMessage,
    requestSerialize: serialize_mruv_economy_WatchWarnsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchWarnsRequest,
    responseSerialize: serialize_mruv_economy_WarnMessage,
    responseDeserialize: deserialize_mruv_economy_WarnMessage,
  },
  // Subscribe to admin jail events.
  watchAdminJails: {
    path: '/mruv.economy.MruVPunishmentsService/WatchAdminJails',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchAdminJailsRequest,
    responseType: punishments_punishments_pb.AdminJailMessage,
    requestSerialize: serialize_mruv_economy_WatchAdminJailsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchAdminJailsRequest,
    responseSerialize: serialize_mruv_economy_AdminJailMessage,
    responseDeserialize: deserialize_mruv_economy_AdminJailMessage,
  },
  // Subscribe to unban events.
  watchUnBans: {
    path: '/mruv.economy.MruVPunishmentsService/WatchUnBans',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnBansRequest,
    responseType: punishments_punishments_pb.UnBanMessage,
    requestSerialize: serialize_mruv_economy_WatchUnBansRequest,
    requestDeserialize: deserialize_mruv_economy_WatchUnBansRequest,
    responseSerialize: serialize_mruv_economy_UnBanMessage,
    responseDeserialize: deserialize_mruv_economy_UnBanMessage,
  },
  // Subscribe to unblock events.
  watchUnBlocks: {
    path: '/mruv.economy.MruVPunishmentsService/WatchUnBlocks',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnBlocksRequest,
    responseType: punishments_punishments_pb.UnBlockMessage,
    requestSerialize: serialize_mruv_economy_WatchUnBlocksRequest,
    requestDeserialize: deserialize_mruv_economy_WatchUnBlocksRequest,
    responseSerialize: serialize_mruv_economy_UnBlockMessage,
    responseDeserialize: deserialize_mruv_economy_UnBlockMessage,
  },
  // Subscribe to unwarn events.
  watchUnWarns: {
    path: '/mruv.economy.MruVPunishmentsService/WatchUnWarns',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnWarnsRequest,
    responseType: punishments_punishments_pb.UnWarnMessage,
    requestSerialize: serialize_mruv_economy_WatchUnWarnsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchUnWarnsRequest,
    responseSerialize: serialize_mruv_economy_UnWarnMessage,
    responseDeserialize: deserialize_mruv_economy_UnWarnMessage,
  },
  // Subscribe to admin jail release events.
  watchUnAdminJails: {
    path: '/mruv.economy.MruVPunishmentsService/WatchUnAdminJails',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnAdminJailsRequest,
    responseType: punishments_punishments_pb.UnAdminJailMessage,
    requestSerialize: serialize_mruv_economy_WatchUnAdminJailsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchUnAdminJailsRequest,
    responseSerialize: serialize_mruv_economy_UnAdminJailMessage,
    responseDeserialize: deserialize_mruv_economy_UnAdminJailMessage,
  },
  // Subscribe to player punishments.
  watchPlayerPunishments: {
    path: '/mruv.economy.MruVPunishmentsService/WatchPlayerPunishments',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchPlayerPunishmentsRequest,
    responseType: punishments_punishments_pb.WatchPlayerPunishmentsResponse,
    requestSerialize: serialize_mruv_economy_WatchPlayerPunishmentsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchPlayerPunishmentsRequest,
    responseSerialize: serialize_mruv_economy_WatchPlayerPunishmentsResponse,
    responseDeserialize: deserialize_mruv_economy_WatchPlayerPunishmentsResponse,
  },
  // Subscribe to player acquittals.
  watchPlayerAcquittals: {
    path: '/mruv.economy.MruVPunishmentsService/WatchPlayerAcquittals',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchPlayerAcquittalsRequest,
    responseType: punishments_punishments_pb.WatchPlayerAcquittalsResponse,
    requestSerialize: serialize_mruv_economy_WatchPlayerAcquittalsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchPlayerAcquittalsRequest,
    responseSerialize: serialize_mruv_economy_WatchPlayerAcquittalsResponse,
    responseDeserialize: deserialize_mruv_economy_WatchPlayerAcquittalsResponse,
  },
  // Subscribe to all punishments and acquittals events.
  watchPunishments: {
    path: '/mruv.economy.MruVPunishmentsService/WatchPunishments',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchPunishmentsRequest,
    responseType: punishments_punishments_pb.WatchPunishmentsResponse,
    requestSerialize: serialize_mruv_economy_WatchPunishmentsRequest,
    requestDeserialize: deserialize_mruv_economy_WatchPunishmentsRequest,
    responseSerialize: serialize_mruv_economy_WatchPunishmentsResponse,
    responseDeserialize: deserialize_mruv_economy_WatchPunishmentsResponse,
  },
};

exports.MruVPunishmentsServiceClient = grpc.makeGenericClientConstructor(MruVPunishmentsServiceService);
