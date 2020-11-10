/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.mruv.punishments.AcquittalsType', null, global);
goog.exportSymbol('proto.mruv.punishments.AdminJailMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.AdminJailRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.AdminJailResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.BanMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.BanRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.BanResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.BlockMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.BlockRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.BlockResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.GetBanRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.GetBlockRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.GetPlayerAdminJailRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.GetPlayerAdminJailResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.GetPlayerBansRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.GetPlayerBansResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.GetPlayerWarnsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.GetPlayerWarnsResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.GetWarnRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.IsCharacterBlockedRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.IsCharacterBlockedResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.IsCharacterJailedRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.IsCharacterJailedResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.IsPlayerBannedRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.IsPlayerBannedResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.MuteGlobalChatsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.MuteGlobalChatsResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.PunishmentType', null, global);
goog.exportSymbol('proto.mruv.punishments.UnAdminJailMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.UnAdminJailRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.UnAdminJailResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.UnBanMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.UnBanRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.UnBanResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.UnBlockMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.UnBlockRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.UnBlockResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.UnMuteGlobalChatsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.UnMuteGlobalChatsResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.UnWarnMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.UnWarnRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.UnWarnResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.WarnMessage', null, global);
goog.exportSymbol('proto.mruv.punishments.WarnRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WarnResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchAdminJailsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchBansRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchBlocksRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchPlayerAcquittalsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchPlayerAcquittalsResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchPlayerPunishmentsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchPlayerPunishmentsResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchPunishmentsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchPunishmentsResponse', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchUnAdminJailsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchUnBansRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchUnBlocksRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchUnWarnsRequest', null, global);
goog.exportSymbol('proto.mruv.punishments.WatchWarnsRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.BanMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.BanMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.BanMessage.displayName = 'proto.mruv.punishments.BanMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WarnMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WarnMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WarnMessage.displayName = 'proto.mruv.punishments.WarnMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.BlockMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.BlockMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.BlockMessage.displayName = 'proto.mruv.punishments.BlockMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.AdminJailMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.AdminJailMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.AdminJailMessage.displayName = 'proto.mruv.punishments.AdminJailMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnBanMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnBanMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnBanMessage.displayName = 'proto.mruv.punishments.UnBanMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnBlockMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnBlockMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnBlockMessage.displayName = 'proto.mruv.punishments.UnBlockMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnWarnMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnWarnMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnWarnMessage.displayName = 'proto.mruv.punishments.UnWarnMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnAdminJailMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnAdminJailMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnAdminJailMessage.displayName = 'proto.mruv.punishments.UnAdminJailMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.BanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.BanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.BanRequest.displayName = 'proto.mruv.punishments.BanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.BanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.BanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.BanResponse.displayName = 'proto.mruv.punishments.BanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.BlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.BlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.BlockRequest.displayName = 'proto.mruv.punishments.BlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.BlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.BlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.BlockResponse.displayName = 'proto.mruv.punishments.BlockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WarnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WarnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WarnRequest.displayName = 'proto.mruv.punishments.WarnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WarnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WarnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WarnResponse.displayName = 'proto.mruv.punishments.WarnResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.AdminJailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.AdminJailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.AdminJailRequest.displayName = 'proto.mruv.punishments.AdminJailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.AdminJailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.AdminJailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.AdminJailResponse.displayName = 'proto.mruv.punishments.AdminJailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.MuteGlobalChatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.MuteGlobalChatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.MuteGlobalChatsRequest.displayName = 'proto.mruv.punishments.MuteGlobalChatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.MuteGlobalChatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.MuteGlobalChatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.MuteGlobalChatsResponse.displayName = 'proto.mruv.punishments.MuteGlobalChatsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnBanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnBanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnBanRequest.displayName = 'proto.mruv.punishments.UnBanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnBanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnBanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnBanResponse.displayName = 'proto.mruv.punishments.UnBanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnBlockRequest.displayName = 'proto.mruv.punishments.UnBlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnBlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnBlockResponse.displayName = 'proto.mruv.punishments.UnBlockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnWarnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnWarnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnWarnRequest.displayName = 'proto.mruv.punishments.UnWarnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnWarnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnWarnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnWarnResponse.displayName = 'proto.mruv.punishments.UnWarnResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnAdminJailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnAdminJailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnAdminJailRequest.displayName = 'proto.mruv.punishments.UnAdminJailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnAdminJailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnAdminJailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnAdminJailResponse.displayName = 'proto.mruv.punishments.UnAdminJailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnMuteGlobalChatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnMuteGlobalChatsRequest.displayName = 'proto.mruv.punishments.UnMuteGlobalChatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.UnMuteGlobalChatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.UnMuteGlobalChatsResponse.displayName = 'proto.mruv.punishments.UnMuteGlobalChatsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetPlayerBansRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetPlayerBansRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetPlayerBansRequest.displayName = 'proto.mruv.punishments.GetPlayerBansRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetPlayerBansResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mruv.punishments.GetPlayerBansResponse.repeatedFields_, null);
};
goog.inherits(proto.mruv.punishments.GetPlayerBansResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetPlayerBansResponse.displayName = 'proto.mruv.punishments.GetPlayerBansResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetPlayerWarnsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetPlayerWarnsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetPlayerWarnsRequest.displayName = 'proto.mruv.punishments.GetPlayerWarnsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetPlayerWarnsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mruv.punishments.GetPlayerWarnsResponse.repeatedFields_, null);
};
goog.inherits(proto.mruv.punishments.GetPlayerWarnsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetPlayerWarnsResponse.displayName = 'proto.mruv.punishments.GetPlayerWarnsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetPlayerAdminJailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetPlayerAdminJailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetPlayerAdminJailRequest.displayName = 'proto.mruv.punishments.GetPlayerAdminJailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetPlayerAdminJailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetPlayerAdminJailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetPlayerAdminJailResponse.displayName = 'proto.mruv.punishments.GetPlayerAdminJailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetBanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetBanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetBanRequest.displayName = 'proto.mruv.punishments.GetBanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetWarnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetWarnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetWarnRequest.displayName = 'proto.mruv.punishments.GetWarnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.GetBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.GetBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.GetBlockRequest.displayName = 'proto.mruv.punishments.GetBlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.IsPlayerBannedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.IsPlayerBannedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.IsPlayerBannedRequest.displayName = 'proto.mruv.punishments.IsPlayerBannedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.IsPlayerBannedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.IsPlayerBannedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.IsPlayerBannedResponse.displayName = 'proto.mruv.punishments.IsPlayerBannedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.IsCharacterBlockedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.IsCharacterBlockedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.IsCharacterBlockedRequest.displayName = 'proto.mruv.punishments.IsCharacterBlockedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.IsCharacterBlockedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.IsCharacterBlockedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.IsCharacterBlockedResponse.displayName = 'proto.mruv.punishments.IsCharacterBlockedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.IsCharacterJailedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.IsCharacterJailedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.IsCharacterJailedRequest.displayName = 'proto.mruv.punishments.IsCharacterJailedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.IsCharacterJailedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.IsCharacterJailedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.IsCharacterJailedResponse.displayName = 'proto.mruv.punishments.IsCharacterJailedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchBansRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchBansRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchBansRequest.displayName = 'proto.mruv.punishments.WatchBansRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchBlocksRequest.displayName = 'proto.mruv.punishments.WatchBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchWarnsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchWarnsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchWarnsRequest.displayName = 'proto.mruv.punishments.WatchWarnsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchAdminJailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchAdminJailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchAdminJailsRequest.displayName = 'proto.mruv.punishments.WatchAdminJailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchUnBansRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchUnBansRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchUnBansRequest.displayName = 'proto.mruv.punishments.WatchUnBansRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchUnBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchUnBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchUnBlocksRequest.displayName = 'proto.mruv.punishments.WatchUnBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchUnWarnsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchUnWarnsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchUnWarnsRequest.displayName = 'proto.mruv.punishments.WatchUnWarnsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchUnAdminJailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchUnAdminJailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchUnAdminJailsRequest.displayName = 'proto.mruv.punishments.WatchUnAdminJailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchPlayerAcquittalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchPlayerAcquittalsRequest.displayName = 'proto.mruv.punishments.WatchPlayerAcquittalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchPlayerAcquittalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchPlayerAcquittalsResponse.displayName = 'proto.mruv.punishments.WatchPlayerAcquittalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchPlayerPunishmentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchPlayerPunishmentsRequest.displayName = 'proto.mruv.punishments.WatchPlayerPunishmentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchPlayerPunishmentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchPlayerPunishmentsResponse.displayName = 'proto.mruv.punishments.WatchPlayerPunishmentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchPunishmentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchPunishmentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchPunishmentsRequest.displayName = 'proto.mruv.punishments.WatchPunishmentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mruv.punishments.WatchPunishmentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mruv.punishments.WatchPunishmentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mruv.punishments.WatchPunishmentsResponse.displayName = 'proto.mruv.punishments.WatchPunishmentsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.BanMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.BanMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.BanMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BanMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expirationDate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 5, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 6, 0),
    banDate: jspb.Message.getFieldWithDefault(msg, 7, 0),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    unbanDate: jspb.Message.getFieldWithDefault(msg, 9, 0),
    unbanAdmin: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.BanMessage}
 */
proto.mruv.punishments.BanMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.BanMessage;
  return proto.mruv.punishments.BanMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.BanMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.BanMessage}
 */
proto.mruv.punishments.BanMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBanDate(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnbanDate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnbanAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.BanMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.BanMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.BanMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BanMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpirationDate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBanDate();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getUnbanDate();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getUnbanAdmin();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.mruv.punishments.BanMessage.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mruv.punishments.BanMessage.prototype.setIp = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 expiration_date = 4;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getExpirationDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setExpirationDate = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.mruv.punishments.BanMessage.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.mruv.punishments.BanMessage.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 admin = 6;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 ban_date = 7;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getBanDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setBanDate = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool active = 8;
 * @return {boolean}
 */
proto.mruv.punishments.BanMessage.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.mruv.punishments.BanMessage.prototype.setActive = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 unban_date = 9;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getUnbanDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setUnbanDate = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 unban_admin = 10;
 * @return {number}
 */
proto.mruv.punishments.BanMessage.prototype.getUnbanAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanMessage.prototype.setUnbanAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WarnMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WarnMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WarnMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WarnMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0),
    expirationDate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 4, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 5, 0),
    warnDate: jspb.Message.getFieldWithDefault(msg, 6, 0),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    unwarnDate: jspb.Message.getFieldWithDefault(msg, 8, 0),
    unwarnAdmin: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WarnMessage}
 */
proto.mruv.punishments.WarnMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WarnMessage;
  return proto.mruv.punishments.WarnMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WarnMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WarnMessage}
 */
proto.mruv.punishments.WarnMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWarnDate(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnwarnDate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnwarnAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WarnMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WarnMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WarnMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WarnMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getExpirationDate();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getWarnDate();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUnwarnDate();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUnwarnAdmin();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 expiration_date = 3;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getExpirationDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setExpirationDate = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.mruv.punishments.WarnMessage.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.mruv.punishments.WarnMessage.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 admin = 5;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 warn_date = 6;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getWarnDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setWarnDate = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool active = 7;
 * @return {boolean}
 */
proto.mruv.punishments.WarnMessage.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.mruv.punishments.WarnMessage.prototype.setActive = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int64 unwarn_date = 8;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getUnwarnDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setUnwarnDate = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 unwarn_admin = 9;
 * @return {number}
 */
proto.mruv.punishments.WarnMessage.prototype.getUnwarnAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnMessage.prototype.setUnwarnAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.BlockMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.BlockMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.BlockMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BlockMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockDate: jspb.Message.getFieldWithDefault(msg, 5, 0),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    unblockDate: jspb.Message.getFieldWithDefault(msg, 7, 0),
    unblockAdmin: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.BlockMessage}
 */
proto.mruv.punishments.BlockMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.BlockMessage;
  return proto.mruv.punishments.BlockMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.BlockMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.BlockMessage}
 */
proto.mruv.punishments.BlockMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockDate(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnblockDate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnblockAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.BlockMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.BlockMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.BlockMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BlockMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getBlockDate();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getUnblockDate();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUnblockAdmin();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.BlockMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.BlockMessage.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockMessage.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.mruv.punishments.BlockMessage.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mruv.punishments.BlockMessage.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 admin = 4;
 * @return {number}
 */
proto.mruv.punishments.BlockMessage.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockMessage.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 block_date = 5;
 * @return {number}
 */
proto.mruv.punishments.BlockMessage.prototype.getBlockDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockMessage.prototype.setBlockDate = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool active = 6;
 * @return {boolean}
 */
proto.mruv.punishments.BlockMessage.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.mruv.punishments.BlockMessage.prototype.setActive = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int64 unblock_date = 7;
 * @return {number}
 */
proto.mruv.punishments.BlockMessage.prototype.getUnblockDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockMessage.prototype.setUnblockDate = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 unblock_admin = 8;
 * @return {number}
 */
proto.mruv.punishments.BlockMessage.prototype.getUnblockAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockMessage.prototype.setUnblockAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.AdminJailMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.AdminJailMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.AdminJailMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.AdminJailMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ajDate: jspb.Message.getFieldWithDefault(msg, 5, 0),
    jailTime: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.AdminJailMessage}
 */
proto.mruv.punishments.AdminJailMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.AdminJailMessage;
  return proto.mruv.punishments.AdminJailMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.AdminJailMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.AdminJailMessage}
 */
proto.mruv.punishments.AdminJailMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAjDate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJailTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.AdminJailMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.AdminJailMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.AdminJailMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.AdminJailMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAjDate();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getJailTime();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.AdminJailMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.AdminJailMessage.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailMessage.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.mruv.punishments.AdminJailMessage.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mruv.punishments.AdminJailMessage.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 admin = 4;
 * @return {number}
 */
proto.mruv.punishments.AdminJailMessage.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailMessage.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 aj_date = 5;
 * @return {number}
 */
proto.mruv.punishments.AdminJailMessage.prototype.getAjDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailMessage.prototype.setAjDate = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 jail_time = 6;
 * @return {number}
 */
proto.mruv.punishments.AdminJailMessage.prototype.getJailTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailMessage.prototype.setJailTime = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnBanMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnBanMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnBanMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBanMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    banId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnBanMessage}
 */
proto.mruv.punishments.UnBanMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnBanMessage;
  return proto.mruv.punishments.UnBanMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnBanMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnBanMessage}
 */
proto.mruv.punishments.UnBanMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnBanMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnBanMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnBanMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBanMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBanId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.UnBanMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnBanMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 ban_id = 2;
 * @return {number}
 */
proto.mruv.punishments.UnBanMessage.prototype.getBanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnBanMessage.prototype.setBanId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnBlockMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnBlockMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnBlockMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBlockMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnBlockMessage}
 */
proto.mruv.punishments.UnBlockMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnBlockMessage;
  return proto.mruv.punishments.UnBlockMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnBlockMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnBlockMessage}
 */
proto.mruv.punishments.UnBlockMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnBlockMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnBlockMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnBlockMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBlockMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBlockId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.UnBlockMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnBlockMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 block_id = 2;
 * @return {number}
 */
proto.mruv.punishments.UnBlockMessage.prototype.getBlockId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnBlockMessage.prototype.setBlockId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnWarnMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnWarnMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnWarnMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnWarnMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    warnId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnWarnMessage}
 */
proto.mruv.punishments.UnWarnMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnWarnMessage;
  return proto.mruv.punishments.UnWarnMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnWarnMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnWarnMessage}
 */
proto.mruv.punishments.UnWarnMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarnId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnWarnMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnWarnMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnWarnMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnWarnMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getWarnId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.UnWarnMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnWarnMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 warn_id = 2;
 * @return {number}
 */
proto.mruv.punishments.UnWarnMessage.prototype.getWarnId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnWarnMessage.prototype.setWarnId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnAdminJailMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnAdminJailMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnAdminJailMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnAdminJailMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnAdminJailMessage}
 */
proto.mruv.punishments.UnAdminJailMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnAdminJailMessage;
  return proto.mruv.punishments.UnAdminJailMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnAdminJailMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnAdminJailMessage}
 */
proto.mruv.punishments.UnAdminJailMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnAdminJailMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnAdminJailMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnAdminJailMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnAdminJailMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.UnAdminJailMessage.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnAdminJailMessage.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.UnAdminJailMessage.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnAdminJailMessage.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.BanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.BanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.BanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 5, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.BanRequest}
 */
proto.mruv.punishments.BanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.BanRequest;
  return proto.mruv.punishments.BanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.BanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.BanRequest}
 */
proto.mruv.punishments.BanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.BanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.BanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.BanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.BanRequest.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanRequest.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.BanRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.mruv.punishments.BanRequest.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mruv.punishments.BanRequest.prototype.setIp = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 time = 4;
 * @return {number}
 */
proto.mruv.punishments.BanRequest.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanRequest.prototype.setTime = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.mruv.punishments.BanRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.mruv.punishments.BanRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 admin = 6;
 * @return {number}
 */
proto.mruv.punishments.BanRequest.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanRequest.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.BanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.BanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.BanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    banId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.BanResponse}
 */
proto.mruv.punishments.BanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.BanResponse;
  return proto.mruv.punishments.BanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.BanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.BanResponse}
 */
proto.mruv.punishments.BanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.BanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.BanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.BanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBanId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 ban_id = 1;
 * @return {number}
 */
proto.mruv.punishments.BanResponse.prototype.getBanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.BanResponse.prototype.setBanId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.BlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.BlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.BlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    character: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.BlockRequest}
 */
proto.mruv.punishments.BlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.BlockRequest;
  return proto.mruv.punishments.BlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.BlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.BlockRequest}
 */
proto.mruv.punishments.BlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.BlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.BlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.BlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 character = 1;
 * @return {number}
 */
proto.mruv.punishments.BlockRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.mruv.punishments.BlockRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.BlockRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 admin = 3;
 * @return {number}
 */
proto.mruv.punishments.BlockRequest.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockRequest.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.BlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.BlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.BlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.BlockResponse}
 */
proto.mruv.punishments.BlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.BlockResponse;
  return proto.mruv.punishments.BlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.BlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.BlockResponse}
 */
proto.mruv.punishments.BlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.BlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.BlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.BlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.BlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 block_id = 1;
 * @return {number}
 */
proto.mruv.punishments.BlockResponse.prototype.getBlockId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.BlockResponse.prototype.setBlockId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WarnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WarnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WarnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WarnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 4, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WarnRequest}
 */
proto.mruv.punishments.WarnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WarnRequest;
  return proto.mruv.punishments.WarnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WarnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WarnRequest}
 */
proto.mruv.punishments.WarnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WarnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WarnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WarnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WarnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.WarnRequest.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnRequest.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 character = 2;
 * @return {number}
 */
proto.mruv.punishments.WarnRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 time = 3;
 * @return {number}
 */
proto.mruv.punishments.WarnRequest.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnRequest.prototype.setTime = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.mruv.punishments.WarnRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.mruv.punishments.WarnRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 admin = 5;
 * @return {number}
 */
proto.mruv.punishments.WarnRequest.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnRequest.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WarnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WarnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WarnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WarnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    warnId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WarnResponse}
 */
proto.mruv.punishments.WarnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WarnResponse;
  return proto.mruv.punishments.WarnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WarnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WarnResponse}
 */
proto.mruv.punishments.WarnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarnId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WarnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WarnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WarnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WarnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWarnId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 warn_id = 1;
 * @return {number}
 */
proto.mruv.punishments.WarnResponse.prototype.getWarnId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.WarnResponse.prototype.setWarnId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.AdminJailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.AdminJailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.AdminJailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.AdminJailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    character: jspb.Message.getFieldWithDefault(msg, 1, 0),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.AdminJailRequest}
 */
proto.mruv.punishments.AdminJailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.AdminJailRequest;
  return proto.mruv.punishments.AdminJailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.AdminJailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.AdminJailRequest}
 */
proto.mruv.punishments.AdminJailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.AdminJailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.AdminJailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.AdminJailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.AdminJailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 character = 1;
 * @return {number}
 */
proto.mruv.punishments.AdminJailRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 time = 2;
 * @return {number}
 */
proto.mruv.punishments.AdminJailRequest.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailRequest.prototype.setTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.mruv.punishments.AdminJailRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mruv.punishments.AdminJailRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 admin = 4;
 * @return {number}
 */
proto.mruv.punishments.AdminJailRequest.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.AdminJailRequest.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.AdminJailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.AdminJailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.AdminJailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.AdminJailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.AdminJailResponse}
 */
proto.mruv.punishments.AdminJailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.AdminJailResponse;
  return proto.mruv.punishments.AdminJailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.AdminJailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.AdminJailResponse}
 */
proto.mruv.punishments.AdminJailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.AdminJailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.AdminJailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.AdminJailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.AdminJailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.MuteGlobalChatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.MuteGlobalChatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.MuteGlobalChatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.MuteGlobalChatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.MuteGlobalChatsRequest}
 */
proto.mruv.punishments.MuteGlobalChatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.MuteGlobalChatsRequest;
  return proto.mruv.punishments.MuteGlobalChatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.MuteGlobalChatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.MuteGlobalChatsRequest}
 */
proto.mruv.punishments.MuteGlobalChatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.MuteGlobalChatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.MuteGlobalChatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.MuteGlobalChatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.MuteGlobalChatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 account = 1;
 * @return {number}
 */
proto.mruv.punishments.MuteGlobalChatsRequest.prototype.getAccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.MuteGlobalChatsRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.MuteGlobalChatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.MuteGlobalChatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.MuteGlobalChatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.MuteGlobalChatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.MuteGlobalChatsResponse}
 */
proto.mruv.punishments.MuteGlobalChatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.MuteGlobalChatsResponse;
  return proto.mruv.punishments.MuteGlobalChatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.MuteGlobalChatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.MuteGlobalChatsResponse}
 */
proto.mruv.punishments.MuteGlobalChatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.MuteGlobalChatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.MuteGlobalChatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.MuteGlobalChatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.MuteGlobalChatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnBanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnBanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnBanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    banId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnBanRequest}
 */
proto.mruv.punishments.UnBanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnBanRequest;
  return proto.mruv.punishments.UnBanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnBanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnBanRequest}
 */
proto.mruv.punishments.UnBanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBanId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnBanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnBanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnBanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBanId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 ban_id = 1;
 * @return {number}
 */
proto.mruv.punishments.UnBanRequest.prototype.getBanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnBanRequest.prototype.setBanId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.mruv.punishments.UnBanRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.UnBanRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnBanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnBanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnBanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnBanResponse}
 */
proto.mruv.punishments.UnBanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnBanResponse;
  return proto.mruv.punishments.UnBanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnBanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnBanResponse}
 */
proto.mruv.punishments.UnBanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnBanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnBanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnBanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnBlockRequest}
 */
proto.mruv.punishments.UnBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnBlockRequest;
  return proto.mruv.punishments.UnBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnBlockRequest}
 */
proto.mruv.punishments.UnBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 block_id = 1;
 * @return {number}
 */
proto.mruv.punishments.UnBlockRequest.prototype.getBlockId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnBlockRequest.prototype.setBlockId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.mruv.punishments.UnBlockRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.UnBlockRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnBlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnBlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnBlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnBlockResponse}
 */
proto.mruv.punishments.UnBlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnBlockResponse;
  return proto.mruv.punishments.UnBlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnBlockResponse}
 */
proto.mruv.punishments.UnBlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnBlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnBlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnWarnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnWarnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnWarnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnWarnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    warnId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnWarnRequest}
 */
proto.mruv.punishments.UnWarnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnWarnRequest;
  return proto.mruv.punishments.UnWarnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnWarnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnWarnRequest}
 */
proto.mruv.punishments.UnWarnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarnId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnWarnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnWarnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnWarnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnWarnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWarnId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 warn_id = 1;
 * @return {number}
 */
proto.mruv.punishments.UnWarnRequest.prototype.getWarnId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnWarnRequest.prototype.setWarnId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.mruv.punishments.UnWarnRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.UnWarnRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnWarnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnWarnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnWarnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnWarnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnWarnResponse}
 */
proto.mruv.punishments.UnWarnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnWarnResponse;
  return proto.mruv.punishments.UnWarnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnWarnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnWarnResponse}
 */
proto.mruv.punishments.UnWarnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnWarnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnWarnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnWarnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnWarnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnAdminJailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnAdminJailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnAdminJailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnAdminJailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    character: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnAdminJailRequest}
 */
proto.mruv.punishments.UnAdminJailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnAdminJailRequest;
  return proto.mruv.punishments.UnAdminJailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnAdminJailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnAdminJailRequest}
 */
proto.mruv.punishments.UnAdminJailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnAdminJailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnAdminJailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnAdminJailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnAdminJailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 character = 1;
 * @return {number}
 */
proto.mruv.punishments.UnAdminJailRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnAdminJailRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnAdminJailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnAdminJailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnAdminJailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnAdminJailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnAdminJailResponse}
 */
proto.mruv.punishments.UnAdminJailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnAdminJailResponse;
  return proto.mruv.punishments.UnAdminJailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnAdminJailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnAdminJailResponse}
 */
proto.mruv.punishments.UnAdminJailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnAdminJailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnAdminJailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnAdminJailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnAdminJailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnMuteGlobalChatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnMuteGlobalChatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnMuteGlobalChatsRequest}
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnMuteGlobalChatsRequest;
  return proto.mruv.punishments.UnMuteGlobalChatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnMuteGlobalChatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnMuteGlobalChatsRequest}
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnMuteGlobalChatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnMuteGlobalChatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 account = 1;
 * @return {number}
 */
proto.mruv.punishments.UnMuteGlobalChatsRequest.prototype.getAccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.UnMuteGlobalChatsRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.UnMuteGlobalChatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.UnMuteGlobalChatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.UnMuteGlobalChatsResponse}
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.UnMuteGlobalChatsResponse;
  return proto.mruv.punishments.UnMuteGlobalChatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.UnMuteGlobalChatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.UnMuteGlobalChatsResponse}
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.UnMuteGlobalChatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.UnMuteGlobalChatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.UnMuteGlobalChatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetPlayerBansRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetPlayerBansRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetPlayerBansRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerBansRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetPlayerBansRequest}
 */
proto.mruv.punishments.GetPlayerBansRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetPlayerBansRequest;
  return proto.mruv.punishments.GetPlayerBansRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetPlayerBansRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetPlayerBansRequest}
 */
proto.mruv.punishments.GetPlayerBansRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetPlayerBansRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetPlayerBansRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetPlayerBansRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerBansRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.GetPlayerBansRequest.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetPlayerBansRequest.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ip = 2;
 * @return {string}
 */
proto.mruv.punishments.GetPlayerBansRequest.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.GetPlayerBansRequest.prototype.setIp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mruv.punishments.GetPlayerBansResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetPlayerBansResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetPlayerBansResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetPlayerBansResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerBansResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bansList: jspb.Message.toObjectList(msg.getBansList(),
    proto.mruv.punishments.BanMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetPlayerBansResponse}
 */
proto.mruv.punishments.GetPlayerBansResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetPlayerBansResponse;
  return proto.mruv.punishments.GetPlayerBansResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetPlayerBansResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetPlayerBansResponse}
 */
proto.mruv.punishments.GetPlayerBansResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mruv.punishments.BanMessage;
      reader.readMessage(value,proto.mruv.punishments.BanMessage.deserializeBinaryFromReader);
      msg.addBans(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetPlayerBansResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetPlayerBansResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetPlayerBansResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerBansResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mruv.punishments.BanMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BanMessage bans = 1;
 * @return {!Array<!proto.mruv.punishments.BanMessage>}
 */
proto.mruv.punishments.GetPlayerBansResponse.prototype.getBansList = function() {
  return /** @type{!Array<!proto.mruv.punishments.BanMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mruv.punishments.BanMessage, 1));
};


/** @param {!Array<!proto.mruv.punishments.BanMessage>} value */
proto.mruv.punishments.GetPlayerBansResponse.prototype.setBansList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mruv.punishments.BanMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mruv.punishments.BanMessage}
 */
proto.mruv.punishments.GetPlayerBansResponse.prototype.addBans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mruv.punishments.BanMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.mruv.punishments.GetPlayerBansResponse.prototype.clearBansList = function() {
  this.setBansList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetPlayerWarnsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetPlayerWarnsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetPlayerWarnsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerWarnsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetPlayerWarnsRequest}
 */
proto.mruv.punishments.GetPlayerWarnsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetPlayerWarnsRequest;
  return proto.mruv.punishments.GetPlayerWarnsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetPlayerWarnsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetPlayerWarnsRequest}
 */
proto.mruv.punishments.GetPlayerWarnsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetPlayerWarnsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetPlayerWarnsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetPlayerWarnsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerWarnsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.GetPlayerWarnsRequest.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetPlayerWarnsRequest.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mruv.punishments.GetPlayerWarnsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetPlayerWarnsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetPlayerWarnsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetPlayerWarnsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerWarnsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    warnsList: jspb.Message.toObjectList(msg.getWarnsList(),
    proto.mruv.punishments.WarnMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetPlayerWarnsResponse}
 */
proto.mruv.punishments.GetPlayerWarnsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetPlayerWarnsResponse;
  return proto.mruv.punishments.GetPlayerWarnsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetPlayerWarnsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetPlayerWarnsResponse}
 */
proto.mruv.punishments.GetPlayerWarnsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mruv.punishments.WarnMessage;
      reader.readMessage(value,proto.mruv.punishments.WarnMessage.deserializeBinaryFromReader);
      msg.addWarns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetPlayerWarnsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetPlayerWarnsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetPlayerWarnsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerWarnsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWarnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mruv.punishments.WarnMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WarnMessage warns = 1;
 * @return {!Array<!proto.mruv.punishments.WarnMessage>}
 */
proto.mruv.punishments.GetPlayerWarnsResponse.prototype.getWarnsList = function() {
  return /** @type{!Array<!proto.mruv.punishments.WarnMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mruv.punishments.WarnMessage, 1));
};


/** @param {!Array<!proto.mruv.punishments.WarnMessage>} value */
proto.mruv.punishments.GetPlayerWarnsResponse.prototype.setWarnsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mruv.punishments.WarnMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mruv.punishments.WarnMessage}
 */
proto.mruv.punishments.GetPlayerWarnsResponse.prototype.addWarns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mruv.punishments.WarnMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.mruv.punishments.GetPlayerWarnsResponse.prototype.clearWarnsList = function() {
  this.setWarnsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetPlayerAdminJailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetPlayerAdminJailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    character: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetPlayerAdminJailRequest}
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetPlayerAdminJailRequest;
  return proto.mruv.punishments.GetPlayerAdminJailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetPlayerAdminJailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetPlayerAdminJailRequest}
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetPlayerAdminJailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetPlayerAdminJailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 character = 1;
 * @return {number}
 */
proto.mruv.punishments.GetPlayerAdminJailRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetPlayerAdminJailRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetPlayerAdminJailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetPlayerAdminJailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jailTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    admin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetPlayerAdminJailResponse}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetPlayerAdminJailResponse;
  return proto.mruv.punishments.GetPlayerAdminJailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetPlayerAdminJailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetPlayerAdminJailResponse}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJailTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdmin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetPlayerAdminJailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetPlayerAdminJailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJailTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdmin();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional uint32 jail_time = 1;
 * @return {number}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.getJailTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.setJailTime = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 admin = 3;
 * @return {number}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.getAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.setAdmin = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 date = 4;
 * @return {number}
 */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetPlayerAdminJailResponse.prototype.setDate = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetBanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetBanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetBanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetBanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetBanRequest}
 */
proto.mruv.punishments.GetBanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetBanRequest;
  return proto.mruv.punishments.GetBanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetBanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetBanRequest}
 */
proto.mruv.punishments.GetBanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetBanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetBanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetBanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetBanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.mruv.punishments.GetBanRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetBanRequest.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetWarnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetWarnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetWarnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetWarnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetWarnRequest}
 */
proto.mruv.punishments.GetWarnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetWarnRequest;
  return proto.mruv.punishments.GetWarnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetWarnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetWarnRequest}
 */
proto.mruv.punishments.GetWarnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetWarnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetWarnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetWarnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetWarnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.mruv.punishments.GetWarnRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetWarnRequest.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.GetBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.GetBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.GetBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.GetBlockRequest}
 */
proto.mruv.punishments.GetBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.GetBlockRequest;
  return proto.mruv.punishments.GetBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.GetBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.GetBlockRequest}
 */
proto.mruv.punishments.GetBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.GetBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.GetBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.GetBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.GetBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.mruv.punishments.GetBlockRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.GetBlockRequest.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.IsPlayerBannedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.IsPlayerBannedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.IsPlayerBannedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsPlayerBannedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.IsPlayerBannedRequest}
 */
proto.mruv.punishments.IsPlayerBannedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.IsPlayerBannedRequest;
  return proto.mruv.punishments.IsPlayerBannedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.IsPlayerBannedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.IsPlayerBannedRequest}
 */
proto.mruv.punishments.IsPlayerBannedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.IsPlayerBannedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.IsPlayerBannedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.IsPlayerBannedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsPlayerBannedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 player = 1;
 * @return {number}
 */
proto.mruv.punishments.IsPlayerBannedRequest.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.IsPlayerBannedRequest.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ip = 2;
 * @return {string}
 */
proto.mruv.punishments.IsPlayerBannedRequest.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mruv.punishments.IsPlayerBannedRequest.prototype.setIp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.IsPlayerBannedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.IsPlayerBannedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.IsPlayerBannedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsPlayerBannedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    banned: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    banId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.IsPlayerBannedResponse}
 */
proto.mruv.punishments.IsPlayerBannedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.IsPlayerBannedResponse;
  return proto.mruv.punishments.IsPlayerBannedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.IsPlayerBannedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.IsPlayerBannedResponse}
 */
proto.mruv.punishments.IsPlayerBannedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBanned(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.IsPlayerBannedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.IsPlayerBannedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.IsPlayerBannedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsPlayerBannedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBanned();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBanId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool banned = 1;
 * @return {boolean}
 */
proto.mruv.punishments.IsPlayerBannedResponse.prototype.getBanned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.mruv.punishments.IsPlayerBannedResponse.prototype.setBanned = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 ban_id = 2;
 * @return {number}
 */
proto.mruv.punishments.IsPlayerBannedResponse.prototype.getBanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.IsPlayerBannedResponse.prototype.setBanId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.IsCharacterBlockedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.IsCharacterBlockedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.IsCharacterBlockedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterBlockedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    character: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.IsCharacterBlockedRequest}
 */
proto.mruv.punishments.IsCharacterBlockedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.IsCharacterBlockedRequest;
  return proto.mruv.punishments.IsCharacterBlockedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.IsCharacterBlockedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.IsCharacterBlockedRequest}
 */
proto.mruv.punishments.IsCharacterBlockedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.IsCharacterBlockedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.IsCharacterBlockedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.IsCharacterBlockedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterBlockedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 character = 1;
 * @return {number}
 */
proto.mruv.punishments.IsCharacterBlockedRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.IsCharacterBlockedRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.IsCharacterBlockedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.IsCharacterBlockedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.IsCharacterBlockedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterBlockedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocked: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    blockId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.IsCharacterBlockedResponse}
 */
proto.mruv.punishments.IsCharacterBlockedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.IsCharacterBlockedResponse;
  return proto.mruv.punishments.IsCharacterBlockedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.IsCharacterBlockedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.IsCharacterBlockedResponse}
 */
proto.mruv.punishments.IsCharacterBlockedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocked(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.IsCharacterBlockedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.IsCharacterBlockedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.IsCharacterBlockedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterBlockedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocked();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBlockId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool blocked = 1;
 * @return {boolean}
 */
proto.mruv.punishments.IsCharacterBlockedResponse.prototype.getBlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.mruv.punishments.IsCharacterBlockedResponse.prototype.setBlocked = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 block_id = 2;
 * @return {number}
 */
proto.mruv.punishments.IsCharacterBlockedResponse.prototype.getBlockId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.IsCharacterBlockedResponse.prototype.setBlockId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.IsCharacterJailedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.IsCharacterJailedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.IsCharacterJailedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterJailedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    character: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.IsCharacterJailedRequest}
 */
proto.mruv.punishments.IsCharacterJailedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.IsCharacterJailedRequest;
  return proto.mruv.punishments.IsCharacterJailedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.IsCharacterJailedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.IsCharacterJailedRequest}
 */
proto.mruv.punishments.IsCharacterJailedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.IsCharacterJailedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.IsCharacterJailedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.IsCharacterJailedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterJailedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 character = 1;
 * @return {number}
 */
proto.mruv.punishments.IsCharacterJailedRequest.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.mruv.punishments.IsCharacterJailedRequest.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.IsCharacterJailedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.IsCharacterJailedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.IsCharacterJailedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterJailedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jailed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    jailTime: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.IsCharacterJailedResponse}
 */
proto.mruv.punishments.IsCharacterJailedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.IsCharacterJailedResponse;
  return proto.mruv.punishments.IsCharacterJailedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.IsCharacterJailedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.IsCharacterJailedResponse}
 */
proto.mruv.punishments.IsCharacterJailedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJailed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJailTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.IsCharacterJailedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.IsCharacterJailedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.IsCharacterJailedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.IsCharacterJailedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJailed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getJailTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool jailed = 1;
 * @return {boolean}
 */
proto.mruv.punishments.IsCharacterJailedResponse.prototype.getJailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.mruv.punishments.IsCharacterJailedResponse.prototype.setJailed = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 jail_time = 2;
 * @return {number}
 */
proto.mruv.punishments.IsCharacterJailedResponse.prototype.getJailTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.IsCharacterJailedResponse.prototype.setJailTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchBansRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchBansRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchBansRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchBansRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchBansRequest}
 */
proto.mruv.punishments.WatchBansRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchBansRequest;
  return proto.mruv.punishments.WatchBansRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchBansRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchBansRequest}
 */
proto.mruv.punishments.WatchBansRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchBansRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchBansRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchBansRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchBansRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchBlocksRequest}
 */
proto.mruv.punishments.WatchBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchBlocksRequest;
  return proto.mruv.punishments.WatchBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchBlocksRequest}
 */
proto.mruv.punishments.WatchBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchWarnsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchWarnsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchWarnsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchWarnsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchWarnsRequest}
 */
proto.mruv.punishments.WatchWarnsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchWarnsRequest;
  return proto.mruv.punishments.WatchWarnsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchWarnsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchWarnsRequest}
 */
proto.mruv.punishments.WatchWarnsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchWarnsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchWarnsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchWarnsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchWarnsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchAdminJailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchAdminJailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchAdminJailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchAdminJailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchAdminJailsRequest}
 */
proto.mruv.punishments.WatchAdminJailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchAdminJailsRequest;
  return proto.mruv.punishments.WatchAdminJailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchAdminJailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchAdminJailsRequest}
 */
proto.mruv.punishments.WatchAdminJailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchAdminJailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchAdminJailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchAdminJailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchAdminJailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchUnBansRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchUnBansRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchUnBansRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnBansRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchUnBansRequest}
 */
proto.mruv.punishments.WatchUnBansRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchUnBansRequest;
  return proto.mruv.punishments.WatchUnBansRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchUnBansRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchUnBansRequest}
 */
proto.mruv.punishments.WatchUnBansRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchUnBansRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchUnBansRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchUnBansRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnBansRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchUnBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchUnBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchUnBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchUnBlocksRequest}
 */
proto.mruv.punishments.WatchUnBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchUnBlocksRequest;
  return proto.mruv.punishments.WatchUnBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchUnBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchUnBlocksRequest}
 */
proto.mruv.punishments.WatchUnBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchUnBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchUnBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchUnBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchUnWarnsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchUnWarnsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchUnWarnsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnWarnsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchUnWarnsRequest}
 */
proto.mruv.punishments.WatchUnWarnsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchUnWarnsRequest;
  return proto.mruv.punishments.WatchUnWarnsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchUnWarnsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchUnWarnsRequest}
 */
proto.mruv.punishments.WatchUnWarnsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchUnWarnsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchUnWarnsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchUnWarnsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnWarnsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchUnAdminJailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchUnAdminJailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchUnAdminJailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnAdminJailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchUnAdminJailsRequest}
 */
proto.mruv.punishments.WatchUnAdminJailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchUnAdminJailsRequest;
  return proto.mruv.punishments.WatchUnAdminJailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchUnAdminJailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchUnAdminJailsRequest}
 */
proto.mruv.punishments.WatchUnAdminJailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchUnAdminJailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchUnAdminJailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchUnAdminJailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchUnAdminJailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchPlayerAcquittalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchPlayerAcquittalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchPlayerAcquittalsRequest}
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchPlayerAcquittalsRequest;
  return proto.mruv.punishments.WatchPlayerAcquittalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchPlayerAcquittalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchPlayerAcquittalsRequest}
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchPlayerAcquittalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchPlayerAcquittalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerAcquittalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchPlayerAcquittalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchPlayerAcquittalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchPlayerAcquittalsResponse}
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchPlayerAcquittalsResponse;
  return proto.mruv.punishments.WatchPlayerAcquittalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchPlayerAcquittalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchPlayerAcquittalsResponse}
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchPlayerAcquittalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchPlayerAcquittalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerAcquittalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchPlayerPunishmentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchPlayerPunishmentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchPlayerPunishmentsRequest}
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchPlayerPunishmentsRequest;
  return proto.mruv.punishments.WatchPlayerPunishmentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchPlayerPunishmentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchPlayerPunishmentsRequest}
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchPlayerPunishmentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchPlayerPunishmentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerPunishmentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchPlayerPunishmentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchPlayerPunishmentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    punishmentId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchPlayerPunishmentsResponse}
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchPlayerPunishmentsResponse;
  return proto.mruv.punishments.WatchPlayerPunishmentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchPlayerPunishmentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchPlayerPunishmentsResponse}
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mruv.punishments.PunishmentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPunishmentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchPlayerPunishmentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchPlayerPunishmentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPunishmentId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional PunishmentType type = 1;
 * @return {!proto.mruv.punishments.PunishmentType}
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.prototype.getType = function() {
  return /** @type {!proto.mruv.punishments.PunishmentType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.mruv.punishments.PunishmentType} value */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 punishment_id = 2;
 * @return {number}
 */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.prototype.getPunishmentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.WatchPlayerPunishmentsResponse.prototype.setPunishmentId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchPunishmentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchPunishmentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchPunishmentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPunishmentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchPunishmentsRequest}
 */
proto.mruv.punishments.WatchPunishmentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchPunishmentsRequest;
  return proto.mruv.punishments.WatchPunishmentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchPunishmentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchPunishmentsRequest}
 */
proto.mruv.punishments.WatchPunishmentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchPunishmentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchPunishmentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchPunishmentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPunishmentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mruv.punishments.WatchPunishmentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mruv.punishments.WatchPunishmentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPunishmentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    punishmentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    player: jspb.Message.getFieldWithDefault(msg, 3, 0),
    character: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mruv.punishments.WatchPunishmentsResponse}
 */
proto.mruv.punishments.WatchPunishmentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mruv.punishments.WatchPunishmentsResponse;
  return proto.mruv.punishments.WatchPunishmentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mruv.punishments.WatchPunishmentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mruv.punishments.WatchPunishmentsResponse}
 */
proto.mruv.punishments.WatchPunishmentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mruv.punishments.PunishmentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPunishmentId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mruv.punishments.WatchPunishmentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mruv.punishments.WatchPunishmentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mruv.punishments.WatchPunishmentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPunishmentId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional PunishmentType type = 1;
 * @return {!proto.mruv.punishments.PunishmentType}
 */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.getType = function() {
  return /** @type {!proto.mruv.punishments.PunishmentType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.mruv.punishments.PunishmentType} value */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 punishment_id = 2;
 * @return {number}
 */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.getPunishmentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.setPunishmentId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 player = 3;
 * @return {number}
 */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.setPlayer = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 character = 4;
 * @return {number}
 */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.mruv.punishments.WatchPunishmentsResponse.prototype.setCharacter = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.mruv.punishments.PunishmentType = {
  UNKNOWN_PUNISHMENT: 0,
  BAN: 1,
  BLOCK: 2,
  WARN: 3,
  ADMIN_JAIL: 4
};

/**
 * @enum {number}
 */
proto.mruv.punishments.AcquittalsType = {
  UNKNOWN_ACQUITAL: 0,
  UNBAN: 1,
  UNBLOCK: 2,
  UNWARN: 3,
  UN_ADMIN_JAIL: 4
};

goog.object.extend(exports, proto.mruv.punishments);
