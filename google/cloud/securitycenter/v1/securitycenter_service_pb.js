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
var google_cloud_securitycenter_v1_asset_pb = require('../../../../google/cloud/securitycenter/v1/asset_pb.js');
goog.object.extend(proto, google_cloud_securitycenter_v1_asset_pb);
var google_cloud_securitycenter_v1_finding_pb = require('../../../../google/cloud/securitycenter/v1/finding_pb.js');
goog.object.extend(proto, google_cloud_securitycenter_v1_finding_pb);
var google_cloud_securitycenter_v1_organization_settings_pb = require('../../../../google/cloud/securitycenter/v1/organization_settings_pb.js');
goog.object.extend(proto, google_cloud_securitycenter_v1_organization_settings_pb);
var google_cloud_securitycenter_v1_run_asset_discovery_response_pb = require('../../../../google/cloud/securitycenter/v1/run_asset_discovery_response_pb.js');
goog.object.extend(proto, google_cloud_securitycenter_v1_run_asset_discovery_response_pb);
var google_cloud_securitycenter_v1_security_marks_pb = require('../../../../google/cloud/securitycenter/v1/security_marks_pb.js');
goog.object.extend(proto, google_cloud_securitycenter_v1_security_marks_pb);
var google_cloud_securitycenter_v1_source_pb = require('../../../../google/cloud/securitycenter/v1/source_pb.js');
goog.object.extend(proto, google_cloud_securitycenter_v1_source_pb);
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
goog.object.extend(proto, google_iam_v1_iam_policy_pb);
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
goog.object.extend(proto, google_iam_v1_policy_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.CreateFindingRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.CreateSourceRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GetSourceRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GroupAssetsRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GroupAssetsResponse', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GroupFindingsRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GroupFindingsResponse', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.GroupResult', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListAssetsRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListAssetsResponse', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListFindingsRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListFindingsResponse', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListSourcesRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.ListSourcesResponse', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.SetFindingStateRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.UpdateFindingRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.UpdateSourceRequest', null, global);
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
proto.google.cloud.securitycenter.v1.CreateFindingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.CreateFindingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.CreateFindingRequest.displayName = 'proto.google.cloud.securitycenter.v1.CreateFindingRequest';
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
proto.google.cloud.securitycenter.v1.CreateSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.CreateSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.CreateSourceRequest.displayName = 'proto.google.cloud.securitycenter.v1.CreateSourceRequest';
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
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.displayName = 'proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest';
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
proto.google.cloud.securitycenter.v1.GetSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GetSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GetSourceRequest.displayName = 'proto.google.cloud.securitycenter.v1.GetSourceRequest';
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
proto.google.cloud.securitycenter.v1.GroupAssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GroupAssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GroupAssetsRequest.displayName = 'proto.google.cloud.securitycenter.v1.GroupAssetsRequest';
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
proto.google.cloud.securitycenter.v1.GroupAssetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.securitycenter.v1.GroupAssetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GroupAssetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GroupAssetsResponse.displayName = 'proto.google.cloud.securitycenter.v1.GroupAssetsResponse';
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
proto.google.cloud.securitycenter.v1.GroupFindingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GroupFindingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GroupFindingsRequest.displayName = 'proto.google.cloud.securitycenter.v1.GroupFindingsRequest';
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
proto.google.cloud.securitycenter.v1.GroupFindingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.securitycenter.v1.GroupFindingsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GroupFindingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GroupFindingsResponse.displayName = 'proto.google.cloud.securitycenter.v1.GroupFindingsResponse';
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
proto.google.cloud.securitycenter.v1.GroupResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.GroupResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.GroupResult.displayName = 'proto.google.cloud.securitycenter.v1.GroupResult';
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
proto.google.cloud.securitycenter.v1.ListSourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListSourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListSourcesRequest.displayName = 'proto.google.cloud.securitycenter.v1.ListSourcesRequest';
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
proto.google.cloud.securitycenter.v1.ListSourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.securitycenter.v1.ListSourcesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListSourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListSourcesResponse.displayName = 'proto.google.cloud.securitycenter.v1.ListSourcesResponse';
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
proto.google.cloud.securitycenter.v1.ListAssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListAssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListAssetsRequest.displayName = 'proto.google.cloud.securitycenter.v1.ListAssetsRequest';
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
proto.google.cloud.securitycenter.v1.ListAssetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.securitycenter.v1.ListAssetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListAssetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListAssetsResponse.displayName = 'proto.google.cloud.securitycenter.v1.ListAssetsResponse';
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
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.displayName = 'proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult';
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
proto.google.cloud.securitycenter.v1.ListFindingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListFindingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListFindingsRequest.displayName = 'proto.google.cloud.securitycenter.v1.ListFindingsRequest';
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
proto.google.cloud.securitycenter.v1.ListFindingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.securitycenter.v1.ListFindingsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListFindingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListFindingsResponse.displayName = 'proto.google.cloud.securitycenter.v1.ListFindingsResponse';
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
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.displayName = 'proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult';
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
proto.google.cloud.securitycenter.v1.SetFindingStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.SetFindingStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.SetFindingStateRequest.displayName = 'proto.google.cloud.securitycenter.v1.SetFindingStateRequest';
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
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.displayName = 'proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest';
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
proto.google.cloud.securitycenter.v1.UpdateFindingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.UpdateFindingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.UpdateFindingRequest.displayName = 'proto.google.cloud.securitycenter.v1.UpdateFindingRequest';
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
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.displayName = 'proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest';
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
proto.google.cloud.securitycenter.v1.UpdateSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.UpdateSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.UpdateSourceRequest.displayName = 'proto.google.cloud.securitycenter.v1.UpdateSourceRequest';
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
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.displayName = 'proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest';
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
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.CreateFindingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.CreateFindingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    findingId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    finding: (f = msg.getFinding()) && google_cloud_securitycenter_v1_finding_pb.Finding.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.CreateFindingRequest}
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.CreateFindingRequest;
  return proto.google.cloud.securitycenter.v1.CreateFindingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.CreateFindingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.CreateFindingRequest}
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFindingId(value);
      break;
    case 3:
      var value = new google_cloud_securitycenter_v1_finding_pb.Finding;
      reader.readMessage(value,google_cloud_securitycenter_v1_finding_pb.Finding.deserializeBinaryFromReader);
      msg.setFinding(value);
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
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.CreateFindingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.CreateFindingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFindingId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFinding();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_securitycenter_v1_finding_pb.Finding.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string finding_id = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.getFindingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.setFindingId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Finding finding = 3;
 * @return {?proto.google.cloud.securitycenter.v1.Finding}
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.getFinding = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.Finding} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_finding_pb.Finding, 3));
};


/** @param {?proto.google.cloud.securitycenter.v1.Finding|undefined} value */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.setFinding = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.clearFinding = function() {
  this.setFinding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.CreateFindingRequest.prototype.hasFinding = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.CreateSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.CreateSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    source: (f = msg.getSource()) && google_cloud_securitycenter_v1_source_pb.Source.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.CreateSourceRequest}
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.CreateSourceRequest;
  return proto.google.cloud.securitycenter.v1.CreateSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.CreateSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.CreateSourceRequest}
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_securitycenter_v1_source_pb.Source;
      reader.readMessage(value,google_cloud_securitycenter_v1_source_pb.Source.deserializeBinaryFromReader);
      msg.setSource(value);
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
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.CreateSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.CreateSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_securitycenter_v1_source_pb.Source.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Source source = 2;
 * @return {?proto.google.cloud.securitycenter.v1.Source}
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.getSource = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.Source} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_source_pb.Source, 2));
};


/** @param {?proto.google.cloud.securitycenter.v1.Source|undefined} value */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.CreateSourceRequest.prototype.hasSource = function() {
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
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest}
 */
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest;
  return proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest}
 */
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.prototype.setName = function(value) {
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
proto.google.cloud.securitycenter.v1.GetSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GetSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GetSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GetSourceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.securitycenter.v1.GetSourceRequest}
 */
proto.google.cloud.securitycenter.v1.GetSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GetSourceRequest;
  return proto.google.cloud.securitycenter.v1.GetSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GetSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GetSourceRequest}
 */
proto.google.cloud.securitycenter.v1.GetSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.securitycenter.v1.GetSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GetSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GetSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GetSourceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.securitycenter.v1.GetSourceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GetSourceRequest.prototype.setName = function(value) {
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
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GroupAssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GroupAssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    groupBy: jspb.Message.getFieldWithDefault(msg, 3, ""),
    compareDuration: (f = msg.getCompareDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.GroupAssetsRequest}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GroupAssetsRequest;
  return proto.google.cloud.securitycenter.v1.GroupAssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GroupAssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GroupAssetsRequest}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupBy(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCompareDuration(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GroupAssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GroupAssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroupBy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompareDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string group_by = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getGroupBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setGroupBy = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Duration compare_duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getCompareDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setCompareDuration = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.clearCompareDuration = function() {
  this.setCompareDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.hasCompareDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp read_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 page_size = 8;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.GroupAssetsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.repeatedFields_ = [1];



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
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GroupAssetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GroupAssetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupByResultsList: jspb.Message.toObjectList(msg.getGroupByResultsList(),
    proto.google.cloud.securitycenter.v1.GroupResult.toObject, includeInstance),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.GroupAssetsResponse}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GroupAssetsResponse;
  return proto.google.cloud.securitycenter.v1.GroupAssetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GroupAssetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GroupAssetsResponse}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.securitycenter.v1.GroupResult;
      reader.readMessage(value,proto.google.cloud.securitycenter.v1.GroupResult.deserializeBinaryFromReader);
      msg.addGroupByResults(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
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
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GroupAssetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GroupAssetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupByResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.securitycenter.v1.GroupResult.serializeBinaryToWriter
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated GroupResult group_by_results = 1;
 * @return {!Array<!proto.google.cloud.securitycenter.v1.GroupResult>}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.getGroupByResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.securitycenter.v1.GroupResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.securitycenter.v1.GroupResult, 1));
};


/** @param {!Array<!proto.google.cloud.securitycenter.v1.GroupResult>} value */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.setGroupByResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.securitycenter.v1.GroupResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.securitycenter.v1.GroupResult}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.addGroupByResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.securitycenter.v1.GroupResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.clearGroupByResultsList = function() {
  this.setGroupByResultsList([]);
};


/**
 * optional google.protobuf.Timestamp read_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total_size = 4;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.GroupAssetsResponse.prototype.setTotalSize = function(value) {
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
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GroupFindingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GroupFindingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    groupBy: jspb.Message.getFieldWithDefault(msg, 3, ""),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    compareDuration: (f = msg.getCompareDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.GroupFindingsRequest}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GroupFindingsRequest;
  return proto.google.cloud.securitycenter.v1.GroupFindingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GroupFindingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GroupFindingsRequest}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupBy(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCompareDuration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GroupFindingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GroupFindingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroupBy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompareDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string group_by = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getGroupBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setGroupBy = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp read_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration compare_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getCompareDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setCompareDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.clearCompareDuration = function() {
  this.setCompareDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.hasCompareDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 page_size = 8;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.GroupFindingsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.repeatedFields_ = [1];



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
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GroupFindingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GroupFindingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupByResultsList: jspb.Message.toObjectList(msg.getGroupByResultsList(),
    proto.google.cloud.securitycenter.v1.GroupResult.toObject, includeInstance),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.GroupFindingsResponse}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GroupFindingsResponse;
  return proto.google.cloud.securitycenter.v1.GroupFindingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GroupFindingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GroupFindingsResponse}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.securitycenter.v1.GroupResult;
      reader.readMessage(value,proto.google.cloud.securitycenter.v1.GroupResult.deserializeBinaryFromReader);
      msg.addGroupByResults(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
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
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GroupFindingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GroupFindingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupByResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.securitycenter.v1.GroupResult.serializeBinaryToWriter
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated GroupResult group_by_results = 1;
 * @return {!Array<!proto.google.cloud.securitycenter.v1.GroupResult>}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.getGroupByResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.securitycenter.v1.GroupResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.securitycenter.v1.GroupResult, 1));
};


/** @param {!Array<!proto.google.cloud.securitycenter.v1.GroupResult>} value */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.setGroupByResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.securitycenter.v1.GroupResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.securitycenter.v1.GroupResult}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.addGroupByResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.securitycenter.v1.GroupResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.clearGroupByResultsList = function() {
  this.setGroupByResultsList([]);
};


/**
 * optional google.protobuf.Timestamp read_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total_size = 4;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.GroupFindingsResponse.prototype.setTotalSize = function(value) {
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
proto.google.cloud.securitycenter.v1.GroupResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.GroupResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.GroupResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : [],
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.GroupResult}
 */
proto.google.cloud.securitycenter.v1.GroupResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.GroupResult;
  return proto.google.cloud.securitycenter.v1.GroupResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.GroupResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.GroupResult}
 */
proto.google.cloud.securitycenter.v1.GroupResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getPropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "");
         });
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
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
proto.google.cloud.securitycenter.v1.GroupResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.GroupResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.GroupResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.GroupResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * map<string, google.protobuf.Value> properties = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.google.cloud.securitycenter.v1.GroupResult.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.securitycenter.v1.GroupResult.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
};


/**
 * optional int64 count = 2;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.GroupResult.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.GroupResult.prototype.setCount = function(value) {
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
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListSourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListSourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListSourcesRequest}
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListSourcesRequest;
  return proto.google.cloud.securitycenter.v1.ListSourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListSourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListSourcesRequest}
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPageToken(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListSourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListSourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 7;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.ListSourcesRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.repeatedFields_ = [1];



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
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListSourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListSourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcesList: jspb.Message.toObjectList(msg.getSourcesList(),
    google_cloud_securitycenter_v1_source_pb.Source.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.securitycenter.v1.ListSourcesResponse}
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListSourcesResponse;
  return proto.google.cloud.securitycenter.v1.ListSourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListSourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListSourcesResponse}
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_source_pb.Source;
      reader.readMessage(value,google_cloud_securitycenter_v1_source_pb.Source.deserializeBinaryFromReader);
      msg.addSources(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListSourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListSourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_securitycenter_v1_source_pb.Source.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Source sources = 1;
 * @return {!Array<!proto.google.cloud.securitycenter.v1.Source>}
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.getSourcesList = function() {
  return /** @type{!Array<!proto.google.cloud.securitycenter.v1.Source>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_securitycenter_v1_source_pb.Source, 1));
};


/** @param {!Array<!proto.google.cloud.securitycenter.v1.Source>} value */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.setSourcesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.securitycenter.v1.Source=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.securitycenter.v1.Source}
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.addSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.securitycenter.v1.Source, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.clearSourcesList = function() {
  this.setSourcesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListSourcesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListAssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderBy: jspb.Message.getFieldWithDefault(msg, 3, ""),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    compareDuration: (f = msg.getCompareDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pageToken: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsRequest}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListAssetsRequest;
  return proto.google.cloud.securitycenter.v1.ListAssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsRequest}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCompareDuration(value);
      break;
    case 7:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListAssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompareDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_by = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setOrderBy = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp read_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration compare_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getCompareDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setCompareDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.clearCompareDuration = function() {
  this.setCompareDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.hasCompareDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 7;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 7));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.clearFieldMask = function() {
  this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string page_token = 8;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 page_size = 9;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.ListAssetsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.repeatedFields_ = [1];



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
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListAssetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    listAssetsResultsList: jspb.Message.toObjectList(msg.getListAssetsResultsList(),
    proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.toObject, includeInstance),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsResponse}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListAssetsResponse;
  return proto.google.cloud.securitycenter.v1.ListAssetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsResponse}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult;
      reader.readMessage(value,proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.deserializeBinaryFromReader);
      msg.addListAssetsResults(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
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
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListAssetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListAssetsResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.serializeBinaryToWriter
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
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
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: (f = msg.getAsset()) && google_cloud_securitycenter_v1_asset_pb.Asset.toObject(includeInstance, f),
    stateChange: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult;
  return proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_asset_pb.Asset;
      reader.readMessage(value,google_cloud_securitycenter_v1_asset_pb.Asset.deserializeBinaryFromReader);
      msg.setAsset(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange} */ (reader.readEnum());
      msg.setStateChange(value);
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
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_securitycenter_v1_asset_pb.Asset.serializeBinaryToWriter
    );
  }
  f = message.getStateChange();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange = {
  UNUSED: 0,
  ADDED: 1,
  REMOVED: 2,
  ACTIVE: 3
};

/**
 * optional Asset asset = 1;
 * @return {?proto.google.cloud.securitycenter.v1.Asset}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.getAsset = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.Asset} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_asset_pb.Asset, 1));
};


/** @param {?proto.google.cloud.securitycenter.v1.Asset|undefined} value */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.setAsset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.clearAsset = function() {
  this.setAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.hasAsset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StateChange state_change = 2;
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.getStateChange = function() {
  return /** @type {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange} value */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.prototype.setStateChange = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated ListAssetsResult list_assets_results = 1;
 * @return {!Array<!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult>}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.getListAssetsResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult, 1));
};


/** @param {!Array<!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult>} value */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.setListAssetsResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.addListAssetsResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.clearListAssetsResultsList = function() {
  this.setListAssetsResultsList([]);
};


/**
 * optional google.protobuf.Timestamp read_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total_size = 4;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.ListAssetsResponse.prototype.setTotalSize = function(value) {
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
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListFindingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderBy: jspb.Message.getFieldWithDefault(msg, 3, ""),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    compareDuration: (f = msg.getCompareDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pageToken: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsRequest}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListFindingsRequest;
  return proto.google.cloud.securitycenter.v1.ListFindingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsRequest}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCompareDuration(value);
      break;
    case 7:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListFindingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompareDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_by = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setOrderBy = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp read_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration compare_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getCompareDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setCompareDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.clearCompareDuration = function() {
  this.setCompareDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.hasCompareDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 7;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 7));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.clearFieldMask = function() {
  this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string page_token = 8;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 page_size = 9;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.ListFindingsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.repeatedFields_ = [1];



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
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListFindingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    listFindingsResultsList: jspb.Message.toObjectList(msg.getListFindingsResultsList(),
    proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.toObject, includeInstance),
    readTime: (f = msg.getReadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsResponse}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListFindingsResponse;
  return proto.google.cloud.securitycenter.v1.ListFindingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsResponse}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult;
      reader.readMessage(value,proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.deserializeBinaryFromReader);
      msg.addListFindingsResults(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
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
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListFindingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListFindingsResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.serializeBinaryToWriter
    );
  }
  f = message.getReadTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
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
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    finding: (f = msg.getFinding()) && google_cloud_securitycenter_v1_finding_pb.Finding.toObject(includeInstance, f),
    stateChange: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult;
  return proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_finding_pb.Finding;
      reader.readMessage(value,google_cloud_securitycenter_v1_finding_pb.Finding.deserializeBinaryFromReader);
      msg.setFinding(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange} */ (reader.readEnum());
      msg.setStateChange(value);
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
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinding();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_securitycenter_v1_finding_pb.Finding.serializeBinaryToWriter
    );
  }
  f = message.getStateChange();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange = {
  UNUSED: 0,
  CHANGED: 1,
  UNCHANGED: 2,
  ADDED: 3,
  REMOVED: 4
};

/**
 * optional Finding finding = 1;
 * @return {?proto.google.cloud.securitycenter.v1.Finding}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.getFinding = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.Finding} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_finding_pb.Finding, 1));
};


/** @param {?proto.google.cloud.securitycenter.v1.Finding|undefined} value */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.setFinding = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.clearFinding = function() {
  this.setFinding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.hasFinding = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StateChange state_change = 2;
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.getStateChange = function() {
  return /** @type {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange} value */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.prototype.setStateChange = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated ListFindingsResult list_findings_results = 1;
 * @return {!Array<!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult>}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.getListFindingsResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult, 1));
};


/** @param {!Array<!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult>} value */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.setListFindingsResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.addListFindingsResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.clearListFindingsResultsList = function() {
  this.setListFindingsResultsList([]);
};


/**
 * optional google.protobuf.Timestamp read_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.getReadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.setReadTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.clearReadTime = function() {
  this.setReadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.hasReadTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total_size = 4;
 * @return {number}
 */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.securitycenter.v1.ListFindingsResponse.prototype.setTotalSize = function(value) {
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
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.SetFindingStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.SetFindingStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.SetFindingStateRequest}
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.SetFindingStateRequest;
  return proto.google.cloud.securitycenter.v1.SetFindingStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.SetFindingStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.SetFindingStateRequest}
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.cloud.securitycenter.v1.Finding.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
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
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.SetFindingStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.SetFindingStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Finding.State state = 2;
 * @return {!proto.google.cloud.securitycenter.v1.Finding.State}
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.getState = function() {
  return /** @type {!proto.google.cloud.securitycenter.v1.Finding.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.securitycenter.v1.Finding.State} value */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.SetFindingStateRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest}
 */
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest;
  return proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest}
 */
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.prototype.setParent = function(value) {
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
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.UpdateFindingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.UpdateFindingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    finding: (f = msg.getFinding()) && google_cloud_securitycenter_v1_finding_pb.Finding.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.UpdateFindingRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.UpdateFindingRequest;
  return proto.google.cloud.securitycenter.v1.UpdateFindingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateFindingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.UpdateFindingRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_finding_pb.Finding;
      reader.readMessage(value,google_cloud_securitycenter_v1_finding_pb.Finding.deserializeBinaryFromReader);
      msg.setFinding(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.UpdateFindingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateFindingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinding();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_securitycenter_v1_finding_pb.Finding.serializeBinaryToWriter
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
};


/**
 * optional Finding finding = 1;
 * @return {?proto.google.cloud.securitycenter.v1.Finding}
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.getFinding = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.Finding} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_finding_pb.Finding, 1));
};


/** @param {?proto.google.cloud.securitycenter.v1.Finding|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.setFinding = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.clearFinding = function() {
  this.setFinding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.hasFinding = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateFindingRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationSettings: (f = msg.getOrganizationSettings()) && google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest;
  return proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings;
      reader.readMessage(value,google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings.deserializeBinaryFromReader);
      msg.setOrganizationSettings(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings.serializeBinaryToWriter
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
};


/**
 * optional OrganizationSettings organization_settings = 1;
 * @return {?proto.google.cloud.securitycenter.v1.OrganizationSettings}
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.getOrganizationSettings = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.OrganizationSettings} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings, 1));
};


/** @param {?proto.google.cloud.securitycenter.v1.OrganizationSettings|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.setOrganizationSettings = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.clearOrganizationSettings = function() {
  this.setOrganizationSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.hasOrganizationSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.UpdateSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.UpdateSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && google_cloud_securitycenter_v1_source_pb.Source.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.UpdateSourceRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.UpdateSourceRequest;
  return proto.google.cloud.securitycenter.v1.UpdateSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.UpdateSourceRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_source_pb.Source;
      reader.readMessage(value,google_cloud_securitycenter_v1_source_pb.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.UpdateSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_securitycenter_v1_source_pb.Source.serializeBinaryToWriter
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
};


/**
 * optional Source source = 1;
 * @return {?proto.google.cloud.securitycenter.v1.Source}
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.getSource = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.Source} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_source_pb.Source, 1));
};


/** @param {?proto.google.cloud.securitycenter.v1.Source|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateSourceRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    securityMarks: (f = msg.getSecurityMarks()) && google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest;
  return proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks;
      reader.readMessage(value,google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks.deserializeBinaryFromReader);
      msg.setSecurityMarks(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
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
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurityMarks();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks.serializeBinaryToWriter
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
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityMarks security_marks = 1;
 * @return {?proto.google.cloud.securitycenter.v1.SecurityMarks}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.getSecurityMarks = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.SecurityMarks} */ (
    jspb.Message.getWrapperField(this, google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks, 1));
};


/** @param {?proto.google.cloud.securitycenter.v1.SecurityMarks|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.setSecurityMarks = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.clearSecurityMarks = function() {
  this.setSecurityMarks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.hasSecurityMarks = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.google.cloud.securitycenter.v1);
