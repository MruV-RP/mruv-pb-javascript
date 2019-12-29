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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_devtools_resultstore_v2_action_pb = require('../../../../google/devtools/resultstore/v2/action_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_action_pb);
var google_devtools_resultstore_v2_configuration_pb = require('../../../../google/devtools/resultstore/v2/configuration_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_configuration_pb);
var google_devtools_resultstore_v2_configured_target_pb = require('../../../../google/devtools/resultstore/v2/configured_target_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_configured_target_pb);
var google_devtools_resultstore_v2_file_set_pb = require('../../../../google/devtools/resultstore/v2/file_set_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_file_set_pb);
var google_devtools_resultstore_v2_invocation_pb = require('../../../../google/devtools/resultstore/v2/invocation_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_invocation_pb);
var google_devtools_resultstore_v2_target_pb = require('../../../../google/devtools/resultstore/v2/target_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_target_pb);
var google_devtools_resultstore_v2_upload_metadata_pb = require('../../../../google/devtools/resultstore/v2/upload_metadata_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_upload_metadata_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
goog.exportSymbol('proto.google.devtools.resultstore.v2.CreateActionRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.CreateConfigurationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.CreateFileSetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.CreateInvocationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.CreateTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.DeleteInvocationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FinalizeInvocationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FinalizeInvocationResponse', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FinalizeTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FinalizeTargetResponse', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.MergeActionRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.MergeFileSetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.MergeInvocationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.MergeTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.TouchInvocationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.TouchInvocationResponse', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UpdateActionRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UpdateConfigurationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UpdateFileSetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UpdateInvocationRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UpdateTargetRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UploadBatchRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UploadBatchResponse', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UploadRequest', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UploadRequest.Id', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.UploadRequest.UploadOperation', null, global);
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
proto.google.devtools.resultstore.v2.CreateInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.CreateInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.CreateInvocationRequest.displayName = 'proto.google.devtools.resultstore.v2.CreateInvocationRequest';
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
proto.google.devtools.resultstore.v2.UpdateInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UpdateInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UpdateInvocationRequest.displayName = 'proto.google.devtools.resultstore.v2.UpdateInvocationRequest';
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
proto.google.devtools.resultstore.v2.MergeInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.MergeInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.MergeInvocationRequest.displayName = 'proto.google.devtools.resultstore.v2.MergeInvocationRequest';
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
proto.google.devtools.resultstore.v2.TouchInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.TouchInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.TouchInvocationRequest.displayName = 'proto.google.devtools.resultstore.v2.TouchInvocationRequest';
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
proto.google.devtools.resultstore.v2.TouchInvocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.TouchInvocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.TouchInvocationResponse.displayName = 'proto.google.devtools.resultstore.v2.TouchInvocationResponse';
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
proto.google.devtools.resultstore.v2.DeleteInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.DeleteInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.DeleteInvocationRequest.displayName = 'proto.google.devtools.resultstore.v2.DeleteInvocationRequest';
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
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FinalizeInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.displayName = 'proto.google.devtools.resultstore.v2.FinalizeInvocationRequest';
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
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FinalizeInvocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.displayName = 'proto.google.devtools.resultstore.v2.FinalizeInvocationResponse';
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
proto.google.devtools.resultstore.v2.CreateTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.CreateTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.CreateTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.CreateTargetRequest';
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
proto.google.devtools.resultstore.v2.UpdateTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UpdateTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UpdateTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.UpdateTargetRequest';
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
proto.google.devtools.resultstore.v2.MergeTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.MergeTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.MergeTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.MergeTargetRequest';
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
proto.google.devtools.resultstore.v2.FinalizeTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FinalizeTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FinalizeTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.FinalizeTargetRequest';
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
proto.google.devtools.resultstore.v2.FinalizeTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FinalizeTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FinalizeTargetResponse.displayName = 'proto.google.devtools.resultstore.v2.FinalizeTargetResponse';
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
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest';
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
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest';
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
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest';
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
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.displayName = 'proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest';
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
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.displayName = 'proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse';
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
proto.google.devtools.resultstore.v2.CreateActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.CreateActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.CreateActionRequest.displayName = 'proto.google.devtools.resultstore.v2.CreateActionRequest';
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
proto.google.devtools.resultstore.v2.UpdateActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UpdateActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UpdateActionRequest.displayName = 'proto.google.devtools.resultstore.v2.UpdateActionRequest';
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
proto.google.devtools.resultstore.v2.MergeActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.MergeActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.MergeActionRequest.displayName = 'proto.google.devtools.resultstore.v2.MergeActionRequest';
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
proto.google.devtools.resultstore.v2.CreateConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.CreateConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.CreateConfigurationRequest.displayName = 'proto.google.devtools.resultstore.v2.CreateConfigurationRequest';
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
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UpdateConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.displayName = 'proto.google.devtools.resultstore.v2.UpdateConfigurationRequest';
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
proto.google.devtools.resultstore.v2.CreateFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.CreateFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.CreateFileSetRequest.displayName = 'proto.google.devtools.resultstore.v2.CreateFileSetRequest';
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
proto.google.devtools.resultstore.v2.UpdateFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UpdateFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UpdateFileSetRequest.displayName = 'proto.google.devtools.resultstore.v2.UpdateFileSetRequest';
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
proto.google.devtools.resultstore.v2.MergeFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.MergeFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.MergeFileSetRequest.displayName = 'proto.google.devtools.resultstore.v2.MergeFileSetRequest';
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
proto.google.devtools.resultstore.v2.UploadBatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.resultstore.v2.UploadBatchRequest.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UploadBatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UploadBatchRequest.displayName = 'proto.google.devtools.resultstore.v2.UploadBatchRequest';
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
proto.google.devtools.resultstore.v2.UploadBatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UploadBatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UploadBatchResponse.displayName = 'proto.google.devtools.resultstore.v2.UploadBatchResponse';
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
proto.google.devtools.resultstore.v2.UploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_);
};
goog.inherits(proto.google.devtools.resultstore.v2.UploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UploadRequest.displayName = 'proto.google.devtools.resultstore.v2.UploadRequest';
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
proto.google.devtools.resultstore.v2.UploadRequest.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.UploadRequest.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.UploadRequest.Id.displayName = 'proto.google.devtools.resultstore.v2.UploadRequest.Id';
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
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.displayName = 'proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest';
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
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.CreateInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.CreateInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    invocationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    invocation: (f = msg.getInvocation()) && google_devtools_resultstore_v2_invocation_pb.Invocation.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    autoFinalizeTime: (f = msg.getAutoFinalizeTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    initialResumeToken: jspb.Message.getFieldWithDefault(msg, 7, ""),
    uploaderState: msg.getUploaderState_asB64()
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
 * @return {!proto.google.devtools.resultstore.v2.CreateInvocationRequest}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.CreateInvocationRequest;
  return proto.google.devtools.resultstore.v2.CreateInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.CreateInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.CreateInvocationRequest}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvocationId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_invocation_pb.Invocation;
      reader.readMessage(value,google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinaryFromReader);
      msg.setInvocation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAutoFinalizeTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialResumeToken(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUploaderState(value);
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
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.CreateInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.CreateInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInvocationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInvocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_invocation_pb.Invocation.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAutoFinalizeTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInitialResumeToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUploaderState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string invocation_id = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getInvocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setInvocationId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Invocation invocation = 3;
 * @return {?proto.google.devtools.resultstore.v2.Invocation}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getInvocation = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Invocation} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_invocation_pb.Invocation, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Invocation|undefined} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setInvocation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.clearInvocation = function() {
  this.setInvocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.hasInvocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string authorization_token = 4;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp auto_finalize_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getAutoFinalizeTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setAutoFinalizeTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.clearAutoFinalizeTime = function() {
  this.setAutoFinalizeTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.hasAutoFinalizeTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string initial_resume_token = 7;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getInitialResumeToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setInitialResumeToken = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bytes uploader_state = 8;
 * @return {!(string|Uint8Array)}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getUploaderState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes uploader_state = 8;
 * This is a type-conversion wrapper around `getUploaderState()`
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getUploaderState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUploaderState()));
};


/**
 * optional bytes uploader_state = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUploaderState()`
 * @return {!Uint8Array}
 */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.getUploaderState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUploaderState()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.devtools.resultstore.v2.CreateInvocationRequest.prototype.setUploaderState = function(value) {
  jspb.Message.setProto3BytesField(this, 8, value);
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
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UpdateInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UpdateInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invocation: (f = msg.getInvocation()) && google_devtools_resultstore_v2_invocation_pb.Invocation.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.UpdateInvocationRequest}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UpdateInvocationRequest;
  return proto.google.devtools.resultstore.v2.UpdateInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UpdateInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UpdateInvocationRequest}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_devtools_resultstore_v2_invocation_pb.Invocation;
      reader.readMessage(value,google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinaryFromReader);
      msg.setInvocation(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UpdateInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UpdateInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_invocation_pb.Invocation.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Invocation invocation = 3;
 * @return {?proto.google.devtools.resultstore.v2.Invocation}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.getInvocation = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Invocation} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_invocation_pb.Invocation, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Invocation|undefined} value */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.setInvocation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.clearInvocation = function() {
  this.setInvocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.hasInvocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UpdateInvocationRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.MergeInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.MergeInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    invocation: (f = msg.getInvocation()) && google_devtools_resultstore_v2_invocation_pb.Invocation.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.MergeInvocationRequest}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.MergeInvocationRequest;
  return proto.google.devtools.resultstore.v2.MergeInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.MergeInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.MergeInvocationRequest}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_invocation_pb.Invocation;
      reader.readMessage(value,google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinaryFromReader);
      msg.setInvocation(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.MergeInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.MergeInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInvocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_invocation_pb.Invocation.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Invocation invocation = 3;
 * @return {?proto.google.devtools.resultstore.v2.Invocation}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.getInvocation = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Invocation} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_invocation_pb.Invocation, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Invocation|undefined} value */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.setInvocation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.clearInvocation = function() {
  this.setInvocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.hasInvocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeInvocationRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.TouchInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.TouchInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.TouchInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.resultstore.v2.TouchInvocationRequest}
 */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.TouchInvocationRequest;
  return proto.google.devtools.resultstore.v2.TouchInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.TouchInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.TouchInvocationRequest}
 */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.TouchInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.TouchInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.TouchInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_token = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.TouchInvocationRequest.prototype.setAuthorizationToken = function(value) {
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
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.TouchInvocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.TouchInvocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_devtools_resultstore_v2_invocation_pb.Invocation.Id.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.resultstore.v2.TouchInvocationResponse}
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.TouchInvocationResponse;
  return proto.google.devtools.resultstore.v2.TouchInvocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.TouchInvocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.TouchInvocationResponse}
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_devtools_resultstore_v2_invocation_pb.Invocation.Id;
      reader.readMessage(value,google_devtools_resultstore_v2_invocation_pb.Invocation.Id.deserializeBinaryFromReader);
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
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.TouchInvocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.TouchInvocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_devtools_resultstore_v2_invocation_pb.Invocation.Id.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Invocation.Id id = 2;
 * @return {?proto.google.devtools.resultstore.v2.Invocation.Id}
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Invocation.Id} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_invocation_pb.Invocation.Id, 2));
};


/** @param {?proto.google.devtools.resultstore.v2.Invocation.Id|undefined} value */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.TouchInvocationResponse.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.DeleteInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.DeleteInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.devtools.resultstore.v2.DeleteInvocationRequest}
 */
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.DeleteInvocationRequest;
  return proto.google.devtools.resultstore.v2.DeleteInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.DeleteInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.DeleteInvocationRequest}
 */
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.DeleteInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.DeleteInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.DeleteInvocationRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FinalizeInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.devtools.resultstore.v2.FinalizeInvocationRequest}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FinalizeInvocationRequest;
  return proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FinalizeInvocationRequest}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_token = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeInvocationRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FinalizeInvocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_devtools_resultstore_v2_invocation_pb.Invocation.Id.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.resultstore.v2.FinalizeInvocationResponse}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FinalizeInvocationResponse;
  return proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeInvocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FinalizeInvocationResponse}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_devtools_resultstore_v2_invocation_pb.Invocation.Id;
      reader.readMessage(value,google_devtools_resultstore_v2_invocation_pb.Invocation.Id.deserializeBinaryFromReader);
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
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeInvocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_devtools_resultstore_v2_invocation_pb.Invocation.Id.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Invocation.Id id = 2;
 * @return {?proto.google.devtools.resultstore.v2.Invocation.Id}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Invocation.Id} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_invocation_pb.Invocation.Id, 2));
};


/** @param {?proto.google.devtools.resultstore.v2.Invocation.Id|undefined} value */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.FinalizeInvocationResponse.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.CreateTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.CreateTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    target: (f = msg.getTarget()) && google_devtools_resultstore_v2_target_pb.Target.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.CreateTargetRequest}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.CreateTargetRequest;
  return proto.google.devtools.resultstore.v2.CreateTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.CreateTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.CreateTargetRequest}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_target_pb.Target;
      reader.readMessage(value,google_devtools_resultstore_v2_target_pb.Target.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.CreateTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.CreateTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_target_pb.Target.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string target_id = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.setTargetId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Target target = 4;
 * @return {?proto.google.devtools.resultstore.v2.Target}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.getTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Target} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_target_pb.Target, 4));
};


/** @param {?proto.google.devtools.resultstore.v2.Target|undefined} value */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.setTarget = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.clearTarget = function() {
  this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UpdateTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UpdateTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && google_devtools_resultstore_v2_target_pb.Target.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.UpdateTargetRequest}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UpdateTargetRequest;
  return proto.google.devtools.resultstore.v2.UpdateTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UpdateTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UpdateTargetRequest}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_devtools_resultstore_v2_target_pb.Target;
      reader.readMessage(value,google_devtools_resultstore_v2_target_pb.Target.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UpdateTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UpdateTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_target_pb.Target.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional Target target = 3;
 * @return {?proto.google.devtools.resultstore.v2.Target}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.getTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Target} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_target_pb.Target, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Target|undefined} value */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.setTarget = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.clearTarget = function() {
  this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.UpdateTargetRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.MergeTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.MergeTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: (f = msg.getTarget()) && google_devtools_resultstore_v2_target_pb.Target.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.MergeTargetRequest}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.MergeTargetRequest;
  return proto.google.devtools.resultstore.v2.MergeTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.MergeTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.MergeTargetRequest}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_target_pb.Target;
      reader.readMessage(value,google_devtools_resultstore_v2_target_pb.Target.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.MergeTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.MergeTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_target_pb.Target.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Target target = 3;
 * @return {?proto.google.devtools.resultstore.v2.Target}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.getTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Target} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_target_pb.Target, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Target|undefined} value */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.setTarget = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.clearTarget = function() {
  this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.MergeTargetRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FinalizeTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FinalizeTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.devtools.resultstore.v2.FinalizeTargetRequest}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FinalizeTargetRequest;
  return proto.google.devtools.resultstore.v2.FinalizeTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FinalizeTargetRequest}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FinalizeTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_token = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FinalizeTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FinalizeTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_devtools_resultstore_v2_target_pb.Target.Id.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.resultstore.v2.FinalizeTargetResponse}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FinalizeTargetResponse;
  return proto.google.devtools.resultstore.v2.FinalizeTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FinalizeTargetResponse}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_devtools_resultstore_v2_target_pb.Target.Id;
      reader.readMessage(value,google_devtools_resultstore_v2_target_pb.Target.Id.deserializeBinaryFromReader);
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
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FinalizeTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_devtools_resultstore_v2_target_pb.Target.Id.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Target.Id id = 2;
 * @return {?proto.google.devtools.resultstore.v2.Target.Id}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Target.Id} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_target_pb.Target.Id, 2));
};


/** @param {?proto.google.devtools.resultstore.v2.Target.Id|undefined} value */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.FinalizeTargetResponse.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    configId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    configuredTarget: (f = msg.getConfiguredTarget()) && google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest;
  return proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigId(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget;
      reader.readMessage(value,google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinaryFromReader);
      msg.setConfiguredTarget(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConfigId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfiguredTarget();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string config_id = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.setConfigId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ConfiguredTarget configured_target = 4;
 * @return {?proto.google.devtools.resultstore.v2.ConfiguredTarget}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.getConfiguredTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ConfiguredTarget} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget, 4));
};


/** @param {?proto.google.devtools.resultstore.v2.ConfiguredTarget|undefined} value */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.setConfiguredTarget = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.clearConfiguredTarget = function() {
  this.setConfiguredTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.hasConfiguredTarget = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfiguredTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    configuredTarget: (f = msg.getConfiguredTarget()) && google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest;
  return proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget;
      reader.readMessage(value,google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinaryFromReader);
      msg.setConfiguredTarget(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfiguredTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional ConfiguredTarget configured_target = 3;
 * @return {?proto.google.devtools.resultstore.v2.ConfiguredTarget}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.getConfiguredTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ConfiguredTarget} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.ConfiguredTarget|undefined} value */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.setConfiguredTarget = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.clearConfiguredTarget = function() {
  this.setConfiguredTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.hasConfiguredTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.UpdateConfiguredTargetRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    configuredTarget: (f = msg.getConfiguredTarget()) && google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest;
  return proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget;
      reader.readMessage(value,google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinaryFromReader);
      msg.setConfiguredTarget(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfiguredTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ConfiguredTarget configured_target = 3;
 * @return {?proto.google.devtools.resultstore.v2.ConfiguredTarget}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.getConfiguredTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ConfiguredTarget} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.ConfiguredTarget|undefined} value */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.setConfiguredTarget = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.clearConfiguredTarget = function() {
  this.setConfiguredTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.hasConfiguredTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.MergeConfiguredTargetRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest;
  return proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_token = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse;
  return proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id;
      reader.readMessage(value,google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id.deserializeBinaryFromReader);
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
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ConfiguredTarget.Id id = 2;
 * @return {?proto.google.devtools.resultstore.v2.ConfiguredTarget.Id}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ConfiguredTarget.Id} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id, 2));
};


/** @param {?proto.google.devtools.resultstore.v2.ConfiguredTarget.Id|undefined} value */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.CreateActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.CreateActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    action: (f = msg.getAction()) && google_devtools_resultstore_v2_action_pb.Action.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.CreateActionRequest}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.CreateActionRequest;
  return proto.google.devtools.resultstore.v2.CreateActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.CreateActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.CreateActionRequest}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_action_pb.Action;
      reader.readMessage(value,google_devtools_resultstore_v2_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.CreateActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.CreateActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_action_pb.Action.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string action_id = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.setActionId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Action action = 4;
 * @return {?proto.google.devtools.resultstore.v2.Action}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.getAction = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Action} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_action_pb.Action, 4));
};


/** @param {?proto.google.devtools.resultstore.v2.Action|undefined} value */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateActionRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UpdateActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UpdateActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && google_devtools_resultstore_v2_action_pb.Action.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.UpdateActionRequest}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UpdateActionRequest;
  return proto.google.devtools.resultstore.v2.UpdateActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UpdateActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UpdateActionRequest}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_devtools_resultstore_v2_action_pb.Action;
      reader.readMessage(value,google_devtools_resultstore_v2_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UpdateActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UpdateActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_action_pb.Action.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional Action action = 3;
 * @return {?proto.google.devtools.resultstore.v2.Action}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.getAction = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Action} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_action_pb.Action, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Action|undefined} value */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.UpdateActionRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.MergeActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.MergeActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: (f = msg.getAction()) && google_devtools_resultstore_v2_action_pb.Action.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.MergeActionRequest}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.MergeActionRequest;
  return proto.google.devtools.resultstore.v2.MergeActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.MergeActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.MergeActionRequest}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_action_pb.Action;
      reader.readMessage(value,google_devtools_resultstore_v2_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.MergeActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.MergeActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_action_pb.Action.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Action action = 3;
 * @return {?proto.google.devtools.resultstore.v2.Action}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.getAction = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Action} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_action_pb.Action, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Action|undefined} value */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.MergeActionRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.CreateConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.CreateConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    configId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    configuration: (f = msg.getConfiguration()) && google_devtools_resultstore_v2_configuration_pb.Configuration.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.CreateConfigurationRequest}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.CreateConfigurationRequest;
  return proto.google.devtools.resultstore.v2.CreateConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.CreateConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.CreateConfigurationRequest}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigId(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_configuration_pb.Configuration;
      reader.readMessage(value,google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.CreateConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.CreateConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConfigId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_configuration_pb.Configuration.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string config_id = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.setConfigId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Configuration configuration = 4;
 * @return {?proto.google.devtools.resultstore.v2.Configuration}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Configuration} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configuration_pb.Configuration, 4));
};


/** @param {?proto.google.devtools.resultstore.v2.Configuration|undefined} value */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.setConfiguration = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.clearConfiguration = function() {
  this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateConfigurationRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UpdateConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    configuration: (f = msg.getConfiguration()) && google_devtools_resultstore_v2_configuration_pb.Configuration.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.devtools.resultstore.v2.UpdateConfigurationRequest}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UpdateConfigurationRequest;
  return proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UpdateConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UpdateConfigurationRequest}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_devtools_resultstore_v2_configuration_pb.Configuration;
      reader.readMessage(value,google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UpdateConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_configuration_pb.Configuration.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional Configuration configuration = 3;
 * @return {?proto.google.devtools.resultstore.v2.Configuration}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Configuration} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configuration_pb.Configuration, 3));
};


/** @param {?proto.google.devtools.resultstore.v2.Configuration|undefined} value */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.setConfiguration = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.clearConfiguration = function() {
  this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool create_if_not_found = 6;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.UpdateConfigurationRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.CreateFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.CreateFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileSetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fileSet: (f = msg.getFileSet()) && google_devtools_resultstore_v2_file_set_pb.FileSet.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.devtools.resultstore.v2.CreateFileSetRequest}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.CreateFileSetRequest;
  return proto.google.devtools.resultstore.v2.CreateFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.CreateFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.CreateFileSetRequest}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSetId(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_file_set_pb.FileSet;
      reader.readMessage(value,google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinaryFromReader);
      msg.setFileSet(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.CreateFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.CreateFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFileSet();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_file_set_pb.FileSet.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string file_set_id = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.getFileSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.setFileSetId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional FileSet file_set = 4;
 * @return {?proto.google.devtools.resultstore.v2.FileSet}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.getFileSet = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.FileSet} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_file_set_pb.FileSet, 4));
};


/** @param {?proto.google.devtools.resultstore.v2.FileSet|undefined} value */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.setFileSet = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.clearFileSet = function() {
  this.setFileSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.hasFileSet = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string authorization_token = 5;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.CreateFileSetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UpdateFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UpdateFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSet: (f = msg.getFileSet()) && google_devtools_resultstore_v2_file_set_pb.FileSet.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.google.devtools.resultstore.v2.UpdateFileSetRequest}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UpdateFileSetRequest;
  return proto.google.devtools.resultstore.v2.UpdateFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UpdateFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UpdateFileSetRequest}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_devtools_resultstore_v2_file_set_pb.FileSet;
      reader.readMessage(value,google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinaryFromReader);
      msg.setFileSet(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UpdateFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UpdateFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_devtools_resultstore_v2_file_set_pb.FileSet.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional FileSet file_set = 1;
 * @return {?proto.google.devtools.resultstore.v2.FileSet}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.getFileSet = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.FileSet} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_file_set_pb.FileSet, 1));
};


/** @param {?proto.google.devtools.resultstore.v2.FileSet|undefined} value */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.setFileSet = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.clearFileSet = function() {
  this.setFileSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.hasFileSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string authorization_token = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool create_if_not_found = 4;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.UpdateFileSetRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.MergeFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.MergeFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fileSet: (f = msg.getFileSet()) && google_devtools_resultstore_v2_file_set_pb.FileSet.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.google.devtools.resultstore.v2.MergeFileSetRequest}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.MergeFileSetRequest;
  return proto.google.devtools.resultstore.v2.MergeFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.MergeFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.MergeFileSetRequest}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = new google_devtools_resultstore_v2_file_set_pb.FileSet;
      reader.readMessage(value,google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinaryFromReader);
      msg.setFileSet(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
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
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.MergeFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.MergeFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileSet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_devtools_resultstore_v2_file_set_pb.FileSet.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FileSet file_set = 2;
 * @return {?proto.google.devtools.resultstore.v2.FileSet}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.getFileSet = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.FileSet} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_file_set_pb.FileSet, 2));
};


/** @param {?proto.google.devtools.resultstore.v2.FileSet|undefined} value */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.setFileSet = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.clearFileSet = function() {
  this.setFileSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.hasFileSet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string authorization_token = 4;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool create_if_not_found = 5;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.MergeFileSetRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.repeatedFields_ = [5];



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
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UploadBatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UploadBatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nextResumeToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resumeToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    uploaderState: msg.getUploaderState_asB64(),
    uploadRequestsList: jspb.Message.toObjectList(msg.getUploadRequestsList(),
    proto.google.devtools.resultstore.v2.UploadRequest.toObject, includeInstance)
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
 * @return {!proto.google.devtools.resultstore.v2.UploadBatchRequest}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UploadBatchRequest;
  return proto.google.devtools.resultstore.v2.UploadBatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UploadBatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UploadBatchRequest}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextResumeToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResumeToken(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUploaderState(value);
      break;
    case 5:
      var value = new proto.google.devtools.resultstore.v2.UploadRequest;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.UploadRequest.deserializeBinaryFromReader);
      msg.addUploadRequests(value);
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
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UploadBatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UploadBatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNextResumeToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResumeToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUploaderState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getUploadRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.devtools.resultstore.v2.UploadRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_token = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string next_resume_token = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getNextResumeToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.setNextResumeToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string resume_token = 4;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getResumeToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.setResumeToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes uploader_state = 6;
 * @return {!(string|Uint8Array)}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getUploaderState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes uploader_state = 6;
 * This is a type-conversion wrapper around `getUploaderState()`
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getUploaderState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUploaderState()));
};


/**
 * optional bytes uploader_state = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUploaderState()`
 * @return {!Uint8Array}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getUploaderState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUploaderState()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.setUploaderState = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * repeated UploadRequest upload_requests = 5;
 * @return {!Array<!proto.google.devtools.resultstore.v2.UploadRequest>}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.getUploadRequestsList = function() {
  return /** @type{!Array<!proto.google.devtools.resultstore.v2.UploadRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.resultstore.v2.UploadRequest, 5));
};


/** @param {!Array<!proto.google.devtools.resultstore.v2.UploadRequest>} value */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.setUploadRequestsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.resultstore.v2.UploadRequest}
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.addUploadRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.devtools.resultstore.v2.UploadRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.devtools.resultstore.v2.UploadBatchRequest.prototype.clearUploadRequestsList = function() {
  this.setUploadRequestsList([]);
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
proto.google.devtools.resultstore.v2.UploadBatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UploadBatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UploadBatchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadBatchResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.resultstore.v2.UploadBatchResponse}
 */
proto.google.devtools.resultstore.v2.UploadBatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UploadBatchResponse;
  return proto.google.devtools.resultstore.v2.UploadBatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UploadBatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UploadBatchResponse}
 */
proto.google.devtools.resultstore.v2.UploadBatchResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.resultstore.v2.UploadBatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UploadBatchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UploadBatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadBatchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_ = [[4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.google.devtools.resultstore.v2.UploadRequest.ResourceCase = {
  RESOURCE_NOT_SET: 0,
  INVOCATION: 4,
  TARGET: 5,
  CONFIGURATION: 6,
  CONFIGURED_TARGET: 7,
  ACTION: 8,
  FILE_SET: 9
};

/**
 * @return {proto.google.devtools.resultstore.v2.UploadRequest.ResourceCase}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getResourceCase = function() {
  return /** @type {proto.google.devtools.resultstore.v2.UploadRequest.ResourceCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0]));
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
proto.google.devtools.resultstore.v2.UploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.google.devtools.resultstore.v2.UploadRequest.Id.toObject(includeInstance, f),
    uploadOperation: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    createIfNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    invocation: (f = msg.getInvocation()) && google_devtools_resultstore_v2_invocation_pb.Invocation.toObject(includeInstance, f),
    target: (f = msg.getTarget()) && google_devtools_resultstore_v2_target_pb.Target.toObject(includeInstance, f),
    configuration: (f = msg.getConfiguration()) && google_devtools_resultstore_v2_configuration_pb.Configuration.toObject(includeInstance, f),
    configuredTarget: (f = msg.getConfiguredTarget()) && google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.toObject(includeInstance, f),
    action: (f = msg.getAction()) && google_devtools_resultstore_v2_action_pb.Action.toObject(includeInstance, f),
    fileSet: (f = msg.getFileSet()) && google_devtools_resultstore_v2_file_set_pb.FileSet.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.resultstore.v2.UploadRequest}
 */
proto.google.devtools.resultstore.v2.UploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UploadRequest;
  return proto.google.devtools.resultstore.v2.UploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UploadRequest}
 */
proto.google.devtools.resultstore.v2.UploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.resultstore.v2.UploadRequest.Id;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.UploadRequest.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.google.devtools.resultstore.v2.UploadRequest.UploadOperation} */ (reader.readEnum());
      msg.setUploadOperation(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateIfNotFound(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_invocation_pb.Invocation;
      reader.readMessage(value,google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinaryFromReader);
      msg.setInvocation(value);
      break;
    case 5:
      var value = new google_devtools_resultstore_v2_target_pb.Target;
      reader.readMessage(value,google_devtools_resultstore_v2_target_pb.Target.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 6:
      var value = new google_devtools_resultstore_v2_configuration_pb.Configuration;
      reader.readMessage(value,google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    case 7:
      var value = new google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget;
      reader.readMessage(value,google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinaryFromReader);
      msg.setConfiguredTarget(value);
      break;
    case 8:
      var value = new google_devtools_resultstore_v2_action_pb.Action;
      reader.readMessage(value,google_devtools_resultstore_v2_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 9:
      var value = new google_devtools_resultstore_v2_file_set_pb.FileSet;
      reader.readMessage(value,google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinaryFromReader);
      msg.setFileSet(value);
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
proto.google.devtools.resultstore.v2.UploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.devtools.resultstore.v2.UploadRequest.Id.serializeBinaryToWriter
    );
  }
  f = message.getUploadOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getCreateIfNotFound();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getInvocation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_invocation_pb.Invocation.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_devtools_resultstore_v2_target_pb.Target.serializeBinaryToWriter
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_devtools_resultstore_v2_configuration_pb.Configuration.serializeBinaryToWriter
    );
  }
  f = message.getConfiguredTarget();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_devtools_resultstore_v2_action_pb.Action.serializeBinaryToWriter
    );
  }
  f = message.getFileSet();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_devtools_resultstore_v2_file_set_pb.FileSet.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.resultstore.v2.UploadRequest.UploadOperation = {
  UPLOAD_OPERATION_UNSPECIFIED: 0,
  CREATE: 1,
  UPDATE: 2,
  MERGE: 3,
  FINALIZE: 4
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
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.UploadRequest.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    configurationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fileSetId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.devtools.resultstore.v2.UploadRequest.Id}
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.UploadRequest.Id;
  return proto.google.devtools.resultstore.v2.UploadRequest.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.UploadRequest.Id}
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigurationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSetId(value);
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
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.UploadRequest.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.UploadRequest.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfigurationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFileSetId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string target_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.setTargetId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string configuration_id = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.getConfigurationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.setConfigurationId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string action_id = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.setActionId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string file_set_id = 4;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.getFileSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.UploadRequest.Id.prototype.setFileSetId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Id id = 1;
 * @return {?proto.google.devtools.resultstore.v2.UploadRequest.Id}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.UploadRequest.Id} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.UploadRequest.Id, 1));
};


/** @param {?proto.google.devtools.resultstore.v2.UploadRequest.Id|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UploadOperation upload_operation = 2;
 * @return {!proto.google.devtools.resultstore.v2.UploadRequest.UploadOperation}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getUploadOperation = function() {
  return /** @type {!proto.google.devtools.resultstore.v2.UploadRequest.UploadOperation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.devtools.resultstore.v2.UploadRequest.UploadOperation} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setUploadOperation = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool create_if_not_found = 10;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getCreateIfNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setCreateIfNotFound = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional Invocation invocation = 4;
 * @return {?proto.google.devtools.resultstore.v2.Invocation}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getInvocation = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Invocation} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_invocation_pb.Invocation, 4));
};


/** @param {?proto.google.devtools.resultstore.v2.Invocation|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setInvocation = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearInvocation = function() {
  this.setInvocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasInvocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Target target = 5;
 * @return {?proto.google.devtools.resultstore.v2.Target}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Target} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_target_pb.Target, 5));
};


/** @param {?proto.google.devtools.resultstore.v2.Target|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setTarget = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearTarget = function() {
  this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Configuration configuration = 6;
 * @return {?proto.google.devtools.resultstore.v2.Configuration}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Configuration} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configuration_pb.Configuration, 6));
};


/** @param {?proto.google.devtools.resultstore.v2.Configuration|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setConfiguration = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearConfiguration = function() {
  this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ConfiguredTarget configured_target = 7;
 * @return {?proto.google.devtools.resultstore.v2.ConfiguredTarget}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getConfiguredTarget = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ConfiguredTarget} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget, 7));
};


/** @param {?proto.google.devtools.resultstore.v2.ConfiguredTarget|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setConfiguredTarget = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearConfiguredTarget = function() {
  this.setConfiguredTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasConfiguredTarget = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Action action = 8;
 * @return {?proto.google.devtools.resultstore.v2.Action}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getAction = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Action} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_action_pb.Action, 8));
};


/** @param {?proto.google.devtools.resultstore.v2.Action|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setAction = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional FileSet file_set = 9;
 * @return {?proto.google.devtools.resultstore.v2.FileSet}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.getFileSet = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.FileSet} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_file_set_pb.FileSet, 9));
};


/** @param {?proto.google.devtools.resultstore.v2.FileSet|undefined} value */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.setFileSet = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.google.devtools.resultstore.v2.UploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.clearFileSet = function() {
  this.setFileSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.UploadRequest.prototype.hasFileSet = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest}
 */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest;
  return proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest}
 */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationToken(value);
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
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_token = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.prototype.getAuthorizationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest.prototype.setAuthorizationToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.google.devtools.resultstore.v2);
