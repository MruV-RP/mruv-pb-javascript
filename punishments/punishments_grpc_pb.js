// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var punishments_punishments_pb = require('../punishments/punishments_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_punishments_AdminJailMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.AdminJailMessage)) {
    throw new Error('Expected argument of type mruv.punishments.AdminJailMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_AdminJailMessage(buffer_arg) {
  return punishments_punishments_pb.AdminJailMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_AdminJailRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.AdminJailRequest)) {
    throw new Error('Expected argument of type mruv.punishments.AdminJailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_AdminJailRequest(buffer_arg) {
  return punishments_punishments_pb.AdminJailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_AdminJailResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.AdminJailResponse)) {
    throw new Error('Expected argument of type mruv.punishments.AdminJailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_AdminJailResponse(buffer_arg) {
  return punishments_punishments_pb.AdminJailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_BanMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.BanMessage)) {
    throw new Error('Expected argument of type mruv.punishments.BanMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_BanMessage(buffer_arg) {
  return punishments_punishments_pb.BanMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_BanRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.BanRequest)) {
    throw new Error('Expected argument of type mruv.punishments.BanRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_BanRequest(buffer_arg) {
  return punishments_punishments_pb.BanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_BanResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.BanResponse)) {
    throw new Error('Expected argument of type mruv.punishments.BanResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_BanResponse(buffer_arg) {
  return punishments_punishments_pb.BanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_BlockMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.BlockMessage)) {
    throw new Error('Expected argument of type mruv.punishments.BlockMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_BlockMessage(buffer_arg) {
  return punishments_punishments_pb.BlockMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_BlockRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.BlockRequest)) {
    throw new Error('Expected argument of type mruv.punishments.BlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_BlockRequest(buffer_arg) {
  return punishments_punishments_pb.BlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_BlockResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.BlockResponse)) {
    throw new Error('Expected argument of type mruv.punishments.BlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_BlockResponse(buffer_arg) {
  return punishments_punishments_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetBanRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetBanRequest)) {
    throw new Error('Expected argument of type mruv.punishments.GetBanRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetBanRequest(buffer_arg) {
  return punishments_punishments_pb.GetBanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetBlockRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetBlockRequest)) {
    throw new Error('Expected argument of type mruv.punishments.GetBlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetBlockRequest(buffer_arg) {
  return punishments_punishments_pb.GetBlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetPlayerAdminJailRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerAdminJailRequest)) {
    throw new Error('Expected argument of type mruv.punishments.GetPlayerAdminJailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetPlayerAdminJailRequest(buffer_arg) {
  return punishments_punishments_pb.GetPlayerAdminJailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetPlayerAdminJailResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerAdminJailResponse)) {
    throw new Error('Expected argument of type mruv.punishments.GetPlayerAdminJailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetPlayerAdminJailResponse(buffer_arg) {
  return punishments_punishments_pb.GetPlayerAdminJailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetPlayerBansRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerBansRequest)) {
    throw new Error('Expected argument of type mruv.punishments.GetPlayerBansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetPlayerBansRequest(buffer_arg) {
  return punishments_punishments_pb.GetPlayerBansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetPlayerBansResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerBansResponse)) {
    throw new Error('Expected argument of type mruv.punishments.GetPlayerBansResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetPlayerBansResponse(buffer_arg) {
  return punishments_punishments_pb.GetPlayerBansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetPlayerWarnsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerWarnsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.GetPlayerWarnsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetPlayerWarnsRequest(buffer_arg) {
  return punishments_punishments_pb.GetPlayerWarnsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetPlayerWarnsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetPlayerWarnsResponse)) {
    throw new Error('Expected argument of type mruv.punishments.GetPlayerWarnsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetPlayerWarnsResponse(buffer_arg) {
  return punishments_punishments_pb.GetPlayerWarnsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_GetWarnRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.GetWarnRequest)) {
    throw new Error('Expected argument of type mruv.punishments.GetWarnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_GetWarnRequest(buffer_arg) {
  return punishments_punishments_pb.GetWarnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_IsCharacterBlockedRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterBlockedRequest)) {
    throw new Error('Expected argument of type mruv.punishments.IsCharacterBlockedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_IsCharacterBlockedRequest(buffer_arg) {
  return punishments_punishments_pb.IsCharacterBlockedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_IsCharacterBlockedResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterBlockedResponse)) {
    throw new Error('Expected argument of type mruv.punishments.IsCharacterBlockedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_IsCharacterBlockedResponse(buffer_arg) {
  return punishments_punishments_pb.IsCharacterBlockedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_IsCharacterJailedRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterJailedRequest)) {
    throw new Error('Expected argument of type mruv.punishments.IsCharacterJailedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_IsCharacterJailedRequest(buffer_arg) {
  return punishments_punishments_pb.IsCharacterJailedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_IsCharacterJailedResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsCharacterJailedResponse)) {
    throw new Error('Expected argument of type mruv.punishments.IsCharacterJailedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_IsCharacterJailedResponse(buffer_arg) {
  return punishments_punishments_pb.IsCharacterJailedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_IsPlayerBannedRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsPlayerBannedRequest)) {
    throw new Error('Expected argument of type mruv.punishments.IsPlayerBannedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_IsPlayerBannedRequest(buffer_arg) {
  return punishments_punishments_pb.IsPlayerBannedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_IsPlayerBannedResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.IsPlayerBannedResponse)) {
    throw new Error('Expected argument of type mruv.punishments.IsPlayerBannedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_IsPlayerBannedResponse(buffer_arg) {
  return punishments_punishments_pb.IsPlayerBannedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_MuteGlobalChatsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.MuteGlobalChatsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.MuteGlobalChatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_MuteGlobalChatsRequest(buffer_arg) {
  return punishments_punishments_pb.MuteGlobalChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_MuteGlobalChatsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.MuteGlobalChatsResponse)) {
    throw new Error('Expected argument of type mruv.punishments.MuteGlobalChatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_MuteGlobalChatsResponse(buffer_arg) {
  return punishments_punishments_pb.MuteGlobalChatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnAdminJailMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnAdminJailMessage)) {
    throw new Error('Expected argument of type mruv.punishments.UnAdminJailMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnAdminJailMessage(buffer_arg) {
  return punishments_punishments_pb.UnAdminJailMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnAdminJailRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnAdminJailRequest)) {
    throw new Error('Expected argument of type mruv.punishments.UnAdminJailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnAdminJailRequest(buffer_arg) {
  return punishments_punishments_pb.UnAdminJailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnAdminJailResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnAdminJailResponse)) {
    throw new Error('Expected argument of type mruv.punishments.UnAdminJailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnAdminJailResponse(buffer_arg) {
  return punishments_punishments_pb.UnAdminJailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnBanMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBanMessage)) {
    throw new Error('Expected argument of type mruv.punishments.UnBanMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnBanMessage(buffer_arg) {
  return punishments_punishments_pb.UnBanMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnBanRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBanRequest)) {
    throw new Error('Expected argument of type mruv.punishments.UnBanRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnBanRequest(buffer_arg) {
  return punishments_punishments_pb.UnBanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnBanResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBanResponse)) {
    throw new Error('Expected argument of type mruv.punishments.UnBanResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnBanResponse(buffer_arg) {
  return punishments_punishments_pb.UnBanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnBlockMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBlockMessage)) {
    throw new Error('Expected argument of type mruv.punishments.UnBlockMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnBlockMessage(buffer_arg) {
  return punishments_punishments_pb.UnBlockMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnBlockRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBlockRequest)) {
    throw new Error('Expected argument of type mruv.punishments.UnBlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnBlockRequest(buffer_arg) {
  return punishments_punishments_pb.UnBlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnBlockResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnBlockResponse)) {
    throw new Error('Expected argument of type mruv.punishments.UnBlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnBlockResponse(buffer_arg) {
  return punishments_punishments_pb.UnBlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnMuteGlobalChatsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnMuteGlobalChatsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.UnMuteGlobalChatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnMuteGlobalChatsRequest(buffer_arg) {
  return punishments_punishments_pb.UnMuteGlobalChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnMuteGlobalChatsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnMuteGlobalChatsResponse)) {
    throw new Error('Expected argument of type mruv.punishments.UnMuteGlobalChatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnMuteGlobalChatsResponse(buffer_arg) {
  return punishments_punishments_pb.UnMuteGlobalChatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnWarnMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnWarnMessage)) {
    throw new Error('Expected argument of type mruv.punishments.UnWarnMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnWarnMessage(buffer_arg) {
  return punishments_punishments_pb.UnWarnMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnWarnRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnWarnRequest)) {
    throw new Error('Expected argument of type mruv.punishments.UnWarnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnWarnRequest(buffer_arg) {
  return punishments_punishments_pb.UnWarnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_UnWarnResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.UnWarnResponse)) {
    throw new Error('Expected argument of type mruv.punishments.UnWarnResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_UnWarnResponse(buffer_arg) {
  return punishments_punishments_pb.UnWarnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WarnMessage(arg) {
  if (!(arg instanceof punishments_punishments_pb.WarnMessage)) {
    throw new Error('Expected argument of type mruv.punishments.WarnMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WarnMessage(buffer_arg) {
  return punishments_punishments_pb.WarnMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WarnRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WarnRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WarnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WarnRequest(buffer_arg) {
  return punishments_punishments_pb.WarnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WarnResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WarnResponse)) {
    throw new Error('Expected argument of type mruv.punishments.WarnResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WarnResponse(buffer_arg) {
  return punishments_punishments_pb.WarnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchAdminJailsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchAdminJailsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchAdminJailsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchAdminJailsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchAdminJailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchBansRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchBansRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchBansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchBansRequest(buffer_arg) {
  return punishments_punishments_pb.WatchBansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchBlocksRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchBlocksRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchBlocksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchBlocksRequest(buffer_arg) {
  return punishments_punishments_pb.WatchBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchPlayerAcquittalsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerAcquittalsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchPlayerAcquittalsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchPlayerAcquittalsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerAcquittalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchPlayerAcquittalsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerAcquittalsResponse)) {
    throw new Error('Expected argument of type mruv.punishments.WatchPlayerAcquittalsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchPlayerAcquittalsResponse(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerAcquittalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchPlayerPunishmentsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerPunishmentsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchPlayerPunishmentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchPlayerPunishmentsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerPunishmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchPlayerPunishmentsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPlayerPunishmentsResponse)) {
    throw new Error('Expected argument of type mruv.punishments.WatchPlayerPunishmentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchPlayerPunishmentsResponse(buffer_arg) {
  return punishments_punishments_pb.WatchPlayerPunishmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchPunishmentsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPunishmentsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchPunishmentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchPunishmentsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchPunishmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchPunishmentsResponse(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchPunishmentsResponse)) {
    throw new Error('Expected argument of type mruv.punishments.WatchPunishmentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchPunishmentsResponse(buffer_arg) {
  return punishments_punishments_pb.WatchPunishmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchUnAdminJailsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnAdminJailsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchUnAdminJailsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchUnAdminJailsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnAdminJailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchUnBansRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnBansRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchUnBansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchUnBansRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnBansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchUnBlocksRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnBlocksRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchUnBlocksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchUnBlocksRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchUnWarnsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchUnWarnsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchUnWarnsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchUnWarnsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchUnWarnsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_punishments_WatchWarnsRequest(arg) {
  if (!(arg instanceof punishments_punishments_pb.WatchWarnsRequest)) {
    throw new Error('Expected argument of type mruv.punishments.WatchWarnsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_punishments_WatchWarnsRequest(buffer_arg) {
  return punishments_punishments_pb.WatchWarnsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// This service provides interface for managing punishments for players.
var MruVPunishmentsServiceService = exports.MruVPunishmentsServiceService = {
  // Ban player on account and/or ip.
  // If ban_time is 0, ban will never expire.
  ban: {
    path: '/mruv.punishments.MruVPunishmentsService/Ban',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.BanRequest,
    responseType: punishments_punishments_pb.BanResponse,
    requestSerialize: serialize_mruv_punishments_BanRequest,
    requestDeserialize: deserialize_mruv_punishments_BanRequest,
    responseSerialize: serialize_mruv_punishments_BanResponse,
    responseDeserialize: deserialize_mruv_punishments_BanResponse,
  },
  // Block player character.
  block: {
    path: '/mruv.punishments.MruVPunishmentsService/Block',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.BlockRequest,
    responseType: punishments_punishments_pb.BlockResponse,
    requestSerialize: serialize_mruv_punishments_BlockRequest,
    requestDeserialize: deserialize_mruv_punishments_BlockRequest,
    responseSerialize: serialize_mruv_punishments_BlockResponse,
    responseDeserialize: deserialize_mruv_punishments_BlockResponse,
  },
  // Warn player.
  // If warn_time is 0, warn will never expire.
  warn: {
    path: '/mruv.punishments.MruVPunishmentsService/Warn',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.WarnRequest,
    responseType: punishments_punishments_pb.WarnResponse,
    requestSerialize: serialize_mruv_punishments_WarnRequest,
    requestDeserialize: deserialize_mruv_punishments_WarnRequest,
    responseSerialize: serialize_mruv_punishments_WarnResponse,
    responseDeserialize: deserialize_mruv_punishments_WarnResponse,
  },
  // Put player in an admin jail.
  adminJail: {
    path: '/mruv.punishments.MruVPunishmentsService/AdminJail',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.AdminJailRequest,
    responseType: punishments_punishments_pb.AdminJailResponse,
    requestSerialize: serialize_mruv_punishments_AdminJailRequest,
    requestDeserialize: deserialize_mruv_punishments_AdminJailRequest,
    responseSerialize: serialize_mruv_punishments_AdminJailResponse,
    responseDeserialize: deserialize_mruv_punishments_AdminJailResponse,
  },
  // Mute player global chats.
  muteGlobalChats: {
    path: '/mruv.punishments.MruVPunishmentsService/MuteGlobalChats',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.MuteGlobalChatsRequest,
    responseType: punishments_punishments_pb.MuteGlobalChatsResponse,
    requestSerialize: serialize_mruv_punishments_MuteGlobalChatsRequest,
    requestDeserialize: deserialize_mruv_punishments_MuteGlobalChatsRequest,
    responseSerialize: serialize_mruv_punishments_MuteGlobalChatsResponse,
    responseDeserialize: deserialize_mruv_punishments_MuteGlobalChatsResponse,
  },
  // Deactivate a specific player ban.
  unBan: {
    path: '/mruv.punishments.MruVPunishmentsService/UnBan',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnBanRequest,
    responseType: punishments_punishments_pb.UnBanResponse,
    requestSerialize: serialize_mruv_punishments_UnBanRequest,
    requestDeserialize: deserialize_mruv_punishments_UnBanRequest,
    responseSerialize: serialize_mruv_punishments_UnBanResponse,
    responseDeserialize: deserialize_mruv_punishments_UnBanResponse,
  },
  // Deactivate a character block.
  unBlock: {
    path: '/mruv.punishments.MruVPunishmentsService/UnBlock',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnBlockRequest,
    responseType: punishments_punishments_pb.UnBlockResponse,
    requestSerialize: serialize_mruv_punishments_UnBlockRequest,
    requestDeserialize: deserialize_mruv_punishments_UnBlockRequest,
    responseSerialize: serialize_mruv_punishments_UnBlockResponse,
    responseDeserialize: deserialize_mruv_punishments_UnBlockResponse,
  },
  // Deactivate a specific player warning. If a player was banned by reaching the warning limit, a player will be unbanned.
  unWarn: {
    path: '/mruv.punishments.MruVPunishmentsService/UnWarn',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnWarnRequest,
    responseType: punishments_punishments_pb.UnWarnResponse,
    requestSerialize: serialize_mruv_punishments_UnWarnRequest,
    requestDeserialize: deserialize_mruv_punishments_UnWarnRequest,
    responseSerialize: serialize_mruv_punishments_UnWarnResponse,
    responseDeserialize: deserialize_mruv_punishments_UnWarnResponse,
  },
  // Remove player from admin jail.
  unAdminJail: {
    path: '/mruv.punishments.MruVPunishmentsService/UnAdminJail',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnAdminJailRequest,
    responseType: punishments_punishments_pb.UnAdminJailResponse,
    requestSerialize: serialize_mruv_punishments_UnAdminJailRequest,
    requestDeserialize: deserialize_mruv_punishments_UnAdminJailRequest,
    responseSerialize: serialize_mruv_punishments_UnAdminJailResponse,
    responseDeserialize: deserialize_mruv_punishments_UnAdminJailResponse,
  },
  //
  unMuteGlobalChats: {
    path: '/mruv.punishments.MruVPunishmentsService/UnMuteGlobalChats',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.UnMuteGlobalChatsRequest,
    responseType: punishments_punishments_pb.UnMuteGlobalChatsResponse,
    requestSerialize: serialize_mruv_punishments_UnMuteGlobalChatsRequest,
    requestDeserialize: deserialize_mruv_punishments_UnMuteGlobalChatsRequest,
    responseSerialize: serialize_mruv_punishments_UnMuteGlobalChatsResponse,
    responseDeserialize: deserialize_mruv_punishments_UnMuteGlobalChatsResponse,
  },
  // Get all player bans.
  getPlayerBans: {
    path: '/mruv.punishments.MruVPunishmentsService/GetPlayerBans',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetPlayerBansRequest,
    responseType: punishments_punishments_pb.GetPlayerBansResponse,
    requestSerialize: serialize_mruv_punishments_GetPlayerBansRequest,
    requestDeserialize: deserialize_mruv_punishments_GetPlayerBansRequest,
    responseSerialize: serialize_mruv_punishments_GetPlayerBansResponse,
    responseDeserialize: deserialize_mruv_punishments_GetPlayerBansResponse,
  },
  // Get all player warns.
  getPlayerWarns: {
    path: '/mruv.punishments.MruVPunishmentsService/GetPlayerWarns',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetPlayerWarnsRequest,
    responseType: punishments_punishments_pb.GetPlayerWarnsResponse,
    requestSerialize: serialize_mruv_punishments_GetPlayerWarnsRequest,
    requestDeserialize: deserialize_mruv_punishments_GetPlayerWarnsRequest,
    responseSerialize: serialize_mruv_punishments_GetPlayerWarnsResponse,
    responseDeserialize: deserialize_mruv_punishments_GetPlayerWarnsResponse,
  },
  // Get player admin jail time.
  getPlayerAdminJail: {
    path: '/mruv.punishments.MruVPunishmentsService/GetPlayerAdminJail',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetPlayerAdminJailRequest,
    responseType: punishments_punishments_pb.GetPlayerAdminJailResponse,
    requestSerialize: serialize_mruv_punishments_GetPlayerAdminJailRequest,
    requestDeserialize: deserialize_mruv_punishments_GetPlayerAdminJailRequest,
    responseSerialize: serialize_mruv_punishments_GetPlayerAdminJailResponse,
    responseDeserialize: deserialize_mruv_punishments_GetPlayerAdminJailResponse,
  },
  // Get ban info.
  getBan: {
    path: '/mruv.punishments.MruVPunishmentsService/GetBan',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetBanRequest,
    responseType: punishments_punishments_pb.BanMessage,
    requestSerialize: serialize_mruv_punishments_GetBanRequest,
    requestDeserialize: deserialize_mruv_punishments_GetBanRequest,
    responseSerialize: serialize_mruv_punishments_BanMessage,
    responseDeserialize: deserialize_mruv_punishments_BanMessage,
  },
  // Get warn info.
  getWarn: {
    path: '/mruv.punishments.MruVPunishmentsService/GetWarn',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetWarnRequest,
    responseType: punishments_punishments_pb.WarnMessage,
    requestSerialize: serialize_mruv_punishments_GetWarnRequest,
    requestDeserialize: deserialize_mruv_punishments_GetWarnRequest,
    responseSerialize: serialize_mruv_punishments_WarnMessage,
    responseDeserialize: deserialize_mruv_punishments_WarnMessage,
  },
  // Get block info.
  getBlock: {
    path: '/mruv.punishments.MruVPunishmentsService/GetBlock',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.GetBlockRequest,
    responseType: punishments_punishments_pb.BlockMessage,
    requestSerialize: serialize_mruv_punishments_GetBlockRequest,
    requestDeserialize: deserialize_mruv_punishments_GetBlockRequest,
    responseSerialize: serialize_mruv_punishments_BlockMessage,
    responseDeserialize: deserialize_mruv_punishments_BlockMessage,
  },
  // Check is player or ip banned.
  isPlayerBanned: {
    path: '/mruv.punishments.MruVPunishmentsService/IsPlayerBanned',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.IsPlayerBannedRequest,
    responseType: punishments_punishments_pb.IsPlayerBannedResponse,
    requestSerialize: serialize_mruv_punishments_IsPlayerBannedRequest,
    requestDeserialize: deserialize_mruv_punishments_IsPlayerBannedRequest,
    responseSerialize: serialize_mruv_punishments_IsPlayerBannedResponse,
    responseDeserialize: deserialize_mruv_punishments_IsPlayerBannedResponse,
  },
  // Check is character is blocked.
  isCharacterBlocked: {
    path: '/mruv.punishments.MruVPunishmentsService/IsCharacterBlocked',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.IsCharacterBlockedRequest,
    responseType: punishments_punishments_pb.IsCharacterBlockedResponse,
    requestSerialize: serialize_mruv_punishments_IsCharacterBlockedRequest,
    requestDeserialize: deserialize_mruv_punishments_IsCharacterBlockedRequest,
    responseSerialize: serialize_mruv_punishments_IsCharacterBlockedResponse,
    responseDeserialize: deserialize_mruv_punishments_IsCharacterBlockedResponse,
  },
  //
  isCharacterJailed: {
    path: '/mruv.punishments.MruVPunishmentsService/IsCharacterJailed',
    requestStream: false,
    responseStream: false,
    requestType: punishments_punishments_pb.IsCharacterJailedRequest,
    responseType: punishments_punishments_pb.IsCharacterJailedResponse,
    requestSerialize: serialize_mruv_punishments_IsCharacterJailedRequest,
    requestDeserialize: deserialize_mruv_punishments_IsCharacterJailedRequest,
    responseSerialize: serialize_mruv_punishments_IsCharacterJailedResponse,
    responseDeserialize: deserialize_mruv_punishments_IsCharacterJailedResponse,
  },
  // Subscribe to ban events.
  watchBans: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchBans',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchBansRequest,
    responseType: punishments_punishments_pb.BanMessage,
    requestSerialize: serialize_mruv_punishments_WatchBansRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchBansRequest,
    responseSerialize: serialize_mruv_punishments_BanMessage,
    responseDeserialize: deserialize_mruv_punishments_BanMessage,
  },
  // Subscribe to block events.
  watchBlocks: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchBlocks',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchBlocksRequest,
    responseType: punishments_punishments_pb.BlockMessage,
    requestSerialize: serialize_mruv_punishments_WatchBlocksRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchBlocksRequest,
    responseSerialize: serialize_mruv_punishments_BlockMessage,
    responseDeserialize: deserialize_mruv_punishments_BlockMessage,
  },
  // Subscribe to warn events.
  watchWarns: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchWarns',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchWarnsRequest,
    responseType: punishments_punishments_pb.WarnMessage,
    requestSerialize: serialize_mruv_punishments_WatchWarnsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchWarnsRequest,
    responseSerialize: serialize_mruv_punishments_WarnMessage,
    responseDeserialize: deserialize_mruv_punishments_WarnMessage,
  },
  // Subscribe to admin jail events.
  watchAdminJails: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchAdminJails',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchAdminJailsRequest,
    responseType: punishments_punishments_pb.AdminJailMessage,
    requestSerialize: serialize_mruv_punishments_WatchAdminJailsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchAdminJailsRequest,
    responseSerialize: serialize_mruv_punishments_AdminJailMessage,
    responseDeserialize: deserialize_mruv_punishments_AdminJailMessage,
  },
  // Subscribe to unban events.
  watchUnBans: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchUnBans',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnBansRequest,
    responseType: punishments_punishments_pb.UnBanMessage,
    requestSerialize: serialize_mruv_punishments_WatchUnBansRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchUnBansRequest,
    responseSerialize: serialize_mruv_punishments_UnBanMessage,
    responseDeserialize: deserialize_mruv_punishments_UnBanMessage,
  },
  // Subscribe to unblock events.
  watchUnBlocks: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchUnBlocks',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnBlocksRequest,
    responseType: punishments_punishments_pb.UnBlockMessage,
    requestSerialize: serialize_mruv_punishments_WatchUnBlocksRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchUnBlocksRequest,
    responseSerialize: serialize_mruv_punishments_UnBlockMessage,
    responseDeserialize: deserialize_mruv_punishments_UnBlockMessage,
  },
  // Subscribe to unwarn events.
  watchUnWarns: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchUnWarns',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnWarnsRequest,
    responseType: punishments_punishments_pb.UnWarnMessage,
    requestSerialize: serialize_mruv_punishments_WatchUnWarnsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchUnWarnsRequest,
    responseSerialize: serialize_mruv_punishments_UnWarnMessage,
    responseDeserialize: deserialize_mruv_punishments_UnWarnMessage,
  },
  // Subscribe to admin jail release events.
  watchUnAdminJails: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchUnAdminJails',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchUnAdminJailsRequest,
    responseType: punishments_punishments_pb.UnAdminJailMessage,
    requestSerialize: serialize_mruv_punishments_WatchUnAdminJailsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchUnAdminJailsRequest,
    responseSerialize: serialize_mruv_punishments_UnAdminJailMessage,
    responseDeserialize: deserialize_mruv_punishments_UnAdminJailMessage,
  },
  // Subscribe to player punishments.
  watchPlayerPunishments: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchPlayerPunishments',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchPlayerPunishmentsRequest,
    responseType: punishments_punishments_pb.WatchPlayerPunishmentsResponse,
    requestSerialize: serialize_mruv_punishments_WatchPlayerPunishmentsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchPlayerPunishmentsRequest,
    responseSerialize: serialize_mruv_punishments_WatchPlayerPunishmentsResponse,
    responseDeserialize: deserialize_mruv_punishments_WatchPlayerPunishmentsResponse,
  },
  // Subscribe to player acquittals.
  watchPlayerAcquittals: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchPlayerAcquittals',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchPlayerAcquittalsRequest,
    responseType: punishments_punishments_pb.WatchPlayerAcquittalsResponse,
    requestSerialize: serialize_mruv_punishments_WatchPlayerAcquittalsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchPlayerAcquittalsRequest,
    responseSerialize: serialize_mruv_punishments_WatchPlayerAcquittalsResponse,
    responseDeserialize: deserialize_mruv_punishments_WatchPlayerAcquittalsResponse,
  },
  // Subscribe to all punishments and acquittals events.
  watchPunishments: {
    path: '/mruv.punishments.MruVPunishmentsService/WatchPunishments',
    requestStream: false,
    responseStream: true,
    requestType: punishments_punishments_pb.WatchPunishmentsRequest,
    responseType: punishments_punishments_pb.WatchPunishmentsResponse,
    requestSerialize: serialize_mruv_punishments_WatchPunishmentsRequest,
    requestDeserialize: deserialize_mruv_punishments_WatchPunishmentsRequest,
    responseSerialize: serialize_mruv_punishments_WatchPunishmentsResponse,
    responseDeserialize: deserialize_mruv_punishments_WatchPunishmentsResponse,
  },
};

exports.MruVPunishmentsServiceClient = grpc.makeGenericClientConstructor(MruVPunishmentsServiceService);
