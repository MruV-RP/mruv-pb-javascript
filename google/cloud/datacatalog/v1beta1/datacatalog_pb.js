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
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb = require('../../../../google/cloud/datacatalog/v1beta1/gcs_fileset_spec_pb.js');
goog.object.extend(proto, google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb);
var google_cloud_datacatalog_v1beta1_schema_pb = require('../../../../google/cloud/datacatalog/v1beta1/schema_pb.js');
goog.object.extend(proto, google_cloud_datacatalog_v1beta1_schema_pb);
var google_cloud_datacatalog_v1beta1_search_pb = require('../../../../google/cloud/datacatalog/v1beta1/search_pb.js');
goog.object.extend(proto, google_cloud_datacatalog_v1beta1_search_pb);
var google_cloud_datacatalog_v1beta1_table_spec_pb = require('../../../../google/cloud/datacatalog/v1beta1/table_spec_pb.js');
goog.object.extend(proto, google_cloud_datacatalog_v1beta1_table_spec_pb);
var google_cloud_datacatalog_v1beta1_tags_pb = require('../../../../google/cloud/datacatalog/v1beta1/tags_pb.js');
goog.object.extend(proto, google_cloud_datacatalog_v1beta1_tags_pb);
var google_cloud_datacatalog_v1beta1_timestamps_pb = require('../../../../google/cloud/datacatalog/v1beta1/timestamps_pb.js');
goog.object.extend(proto, google_cloud_datacatalog_v1beta1_timestamps_pb);
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
goog.object.extend(proto, google_iam_v1_iam_policy_pb);
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
goog.object.extend(proto, google_iam_v1_policy_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.CreateTagRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.Entry', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.EntryGroup', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.EntryType', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.GetEntryRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.ListTagsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.ListTagsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest', null, global);
goog.exportSymbol('proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest', null, global);
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest';
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.displayName = 'proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope';
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.displayName = 'proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse';
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
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest';
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
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest';
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest';
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
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest';
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
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest';
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest';
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
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.GetEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.GetEntryRequest';
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
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest';
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
proto.google.cloud.datacatalog.v1beta1.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.Entry.displayName = 'proto.google.cloud.datacatalog.v1beta1.Entry';
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
proto.google.cloud.datacatalog.v1beta1.EntryGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.EntryGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.EntryGroup.displayName = 'proto.google.cloud.datacatalog.v1beta1.EntryGroup';
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
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest';
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
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest';
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest';
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest';
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
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.CreateTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.CreateTagRequest';
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest';
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest';
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
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest';
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest';
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
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest';
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest';
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
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.ListTagsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.displayName = 'proto.google.cloud.datacatalog.v1beta1.ListTagsRequest';
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
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datacatalog.v1beta1.ListTagsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.displayName = 'proto.google.cloud.datacatalog.v1beta1.ListTagsResponse';
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: (f = msg.getScope()) && proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.toObject(includeInstance, f),
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderBy: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest;
  return proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope;
      reader.readMessage(value,proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.deserializeBinaryFromReader);
      msg.setScope(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.repeatedFields_ = [2,3];



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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeOrgIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    includeProjectIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    includeGcpPublicDatasets: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope;
  return proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIncludeOrgIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addIncludeProjectIds(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeGcpPublicDatasets(value);
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeOrgIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getIncludeProjectIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIncludeGcpPublicDatasets();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * repeated string include_org_ids = 2;
 * @return {!Array<string>}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.getIncludeOrgIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.setIncludeOrgIdsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.addIncludeOrgIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.clearIncludeOrgIdsList = function() {
  this.setIncludeOrgIdsList([]);
};


/**
 * repeated string include_project_ids = 3;
 * @return {!Array<string>}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.getIncludeProjectIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.setIncludeProjectIdsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.addIncludeProjectIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.clearIncludeProjectIdsList = function() {
  this.setIncludeProjectIdsList([]);
};


/**
 * optional bool include_gcp_public_datasets = 7;
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.getIncludeGcpPublicDatasets = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.prototype.setIncludeGcpPublicDatasets = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Scope scope = 6;
 * @return {?proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.getScope = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope, 6));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope|undefined} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.setScope = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.clearScope = function() {
  this.setScope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.hasScope = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string order_by = 5;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogRequest.prototype.setOrderBy = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.repeatedFields_ = [1];



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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse;
  return proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 3:
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
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated SearchCatalogResult results = 1;
 * @return {!Array<!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResult>}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult, 1));
};


/** @param {!Array<!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResult>} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datacatalog.v1beta1.SearchCatalogResult}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datacatalog.v1beta1.SearchCatalogResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.SearchCatalogResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entryGroupId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entryGroup: (f = msg.getEntryGroup()) && proto.google.cloud.datacatalog.v1beta1.EntryGroup.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest;
  return proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryGroupId(value);
      break;
    case 2:
      var value = new proto.google.cloud.datacatalog.v1beta1.EntryGroup;
      reader.readMessage(value,proto.google.cloud.datacatalog.v1beta1.EntryGroup.deserializeBinaryFromReader);
      msg.setEntryGroup(value);
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
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntryGroupId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntryGroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.datacatalog.v1beta1.EntryGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entry_group_id = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.getEntryGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.setEntryGroupId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EntryGroup entry_group = 2;
 * @return {?proto.google.cloud.datacatalog.v1beta1.EntryGroup}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.getEntryGroup = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.EntryGroup} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.datacatalog.v1beta1.EntryGroup, 2));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.EntryGroup|undefined} value */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.setEntryGroup = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.clearEntryGroup = function() {
  this.setEntryGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.prototype.hasEntryGroup = function() {
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
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readMask: (f = msg.getReadMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest;
  return proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setReadMask(value);
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
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReadMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask read_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.getReadMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.setReadMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.clearReadMask = function() {
  this.setReadMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.prototype.hasReadMask = function() {
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest;
  return proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.prototype.setName = function(value) {
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
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entryId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entry: (f = msg.getEntry()) && proto.google.cloud.datacatalog.v1beta1.Entry.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest;
  return proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryId(value);
      break;
    case 2:
      var value = new proto.google.cloud.datacatalog.v1beta1.Entry;
      reader.readMessage(value,proto.google.cloud.datacatalog.v1beta1.Entry.deserializeBinaryFromReader);
      msg.setEntry(value);
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
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntryId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.datacatalog.v1beta1.Entry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entry_id = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.getEntryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.setEntryId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Entry entry = 2;
 * @return {?proto.google.cloud.datacatalog.v1beta1.Entry}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.getEntry = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.Entry} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.datacatalog.v1beta1.Entry, 2));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.Entry|undefined} value */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.setEntry = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.clearEntry = function() {
  this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.CreateEntryRequest.prototype.hasEntry = function() {
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
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.google.cloud.datacatalog.v1beta1.Entry.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest;
  return proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.datacatalog.v1beta1.Entry;
      reader.readMessage(value,proto.google.cloud.datacatalog.v1beta1.Entry.deserializeBinaryFromReader);
      msg.setEntry(value);
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
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.datacatalog.v1beta1.Entry.serializeBinaryToWriter
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
 * optional Entry entry = 1;
 * @return {?proto.google.cloud.datacatalog.v1beta1.Entry}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.getEntry = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.Entry} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.datacatalog.v1beta1.Entry, 1));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.Entry|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.setEntry = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.clearEntry = function() {
  this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateEntryRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest;
  return proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.DeleteEntryRequest.prototype.setName = function(value) {
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
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.GetEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.GetEntryRequest;
  return proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.GetEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.GetEntryRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.TargetNameCase = {
  TARGET_NAME_NOT_SET: 0,
  LINKED_RESOURCE: 1,
  SQL_RESOURCE: 3
};

/**
 * @return {proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.TargetNameCase}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.getTargetNameCase = function() {
  return /** @type {proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.TargetNameCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_[0]));
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
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    linkedResource: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sqlResource: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest;
  return proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedResource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSqlResource(value);
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
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string linked_resource = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.getLinkedResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.setLinkedResource = function(value) {
  jspb.Message.setOneofField(this, 1, proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.clearLinkedResource = function() {
  jspb.Message.setOneofField(this, 1, proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.hasLinkedResource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sql_resource = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.getSqlResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.setSqlResource = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.clearSqlResource = function() {
  jspb.Message.setOneofField(this, 3, proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.LookupEntryRequest.prototype.hasSqlResource = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_ = [[2],[6,12,15]];

/**
 * @enum {number}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.EntryTypeCase = {
  ENTRY_TYPE_NOT_SET: 0,
  TYPE: 2
};

/**
 * @return {proto.google.cloud.datacatalog.v1beta1.Entry.EntryTypeCase}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getEntryTypeCase = function() {
  return /** @type {proto.google.cloud.datacatalog.v1beta1.Entry.EntryTypeCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.TypeSpecCase = {
  TYPE_SPEC_NOT_SET: 0,
  GCS_FILESET_SPEC: 6,
  BIGQUERY_TABLE_SPEC: 12,
  BIGQUERY_DATE_SHARDED_SPEC: 15
};

/**
 * @return {proto.google.cloud.datacatalog.v1beta1.Entry.TypeSpecCase}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getTypeSpecCase = function() {
  return /** @type {proto.google.cloud.datacatalog.v1beta1.Entry.TypeSpecCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[1]));
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
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    linkedResource: jspb.Message.getFieldWithDefault(msg, 9, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gcsFilesetSpec: (f = msg.getGcsFilesetSpec()) && google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec.toObject(includeInstance, f),
    bigqueryTableSpec: (f = msg.getBigqueryTableSpec()) && google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec.toObject(includeInstance, f),
    bigqueryDateShardedSpec: (f = msg.getBigqueryDateShardedSpec()) && google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec.toObject(includeInstance, f),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    schema: (f = msg.getSchema()) && google_cloud_datacatalog_v1beta1_schema_pb.Schema.toObject(includeInstance, f),
    sourceSystemTimestamps: (f = msg.getSourceSystemTimestamps()) && google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.Entry}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.Entry;
  return proto.google.cloud.datacatalog.v1beta1.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.Entry}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.deserializeBinaryFromReader = function(msg, reader) {
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
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedResource(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.datacatalog.v1beta1.EntryType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = new google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec.deserializeBinaryFromReader);
      msg.setGcsFilesetSpec(value);
      break;
    case 12:
      var value = new google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec.deserializeBinaryFromReader);
      msg.setBigqueryTableSpec(value);
      break;
    case 15:
      var value = new google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec.deserializeBinaryFromReader);
      msg.setBigqueryDateShardedSpec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new google_cloud_datacatalog_v1beta1_schema_pb.Schema;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_schema_pb.Schema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    case 7:
      var value = new google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.deserializeBinaryFromReader);
      msg.setSourceSystemTimestamps(value);
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
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLinkedResource();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {!proto.google.cloud.datacatalog.v1beta1.EntryType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGcsFilesetSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec.serializeBinaryToWriter
    );
  }
  f = message.getBigqueryTableSpec();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec.serializeBinaryToWriter
    );
  }
  f = message.getBigqueryDateShardedSpec();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec.serializeBinaryToWriter
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_cloud_datacatalog_v1beta1_schema_pb.Schema.serializeBinaryToWriter
    );
  }
  f = message.getSourceSystemTimestamps();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string linked_resource = 9;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getLinkedResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setLinkedResource = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional EntryType type = 2;
 * @return {!proto.google.cloud.datacatalog.v1beta1.EntryType}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getType = function() {
  return /** @type {!proto.google.cloud.datacatalog.v1beta1.EntryType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.datacatalog.v1beta1.EntryType} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setType = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.clearType = function() {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GcsFilesetSpec gcs_fileset_spec = 6;
 * @return {?proto.google.cloud.datacatalog.v1beta1.GcsFilesetSpec}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getGcsFilesetSpec = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.GcsFilesetSpec} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec, 6));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.GcsFilesetSpec|undefined} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setGcsFilesetSpec = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.clearGcsFilesetSpec = function() {
  this.setGcsFilesetSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.hasGcsFilesetSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BigQueryTableSpec bigquery_table_spec = 12;
 * @return {?proto.google.cloud.datacatalog.v1beta1.BigQueryTableSpec}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getBigqueryTableSpec = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.BigQueryTableSpec} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec, 12));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.BigQueryTableSpec|undefined} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setBigqueryTableSpec = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.clearBigqueryTableSpec = function() {
  this.setBigqueryTableSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.hasBigqueryTableSpec = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BigQueryDateShardedSpec bigquery_date_sharded_spec = 15;
 * @return {?proto.google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getBigqueryDateShardedSpec = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec, 15));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec|undefined} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setBigqueryDateShardedSpec = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.google.cloud.datacatalog.v1beta1.Entry.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.clearBigqueryDateShardedSpec = function() {
  this.setBigqueryDateShardedSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.hasBigqueryDateShardedSpec = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Schema schema = 5;
 * @return {?proto.google.cloud.datacatalog.v1beta1.Schema}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getSchema = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.Schema} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_schema_pb.Schema, 5));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.Schema|undefined} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setSchema = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.clearSchema = function() {
  this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SystemTimestamps source_system_timestamps = 7;
 * @return {?proto.google.cloud.datacatalog.v1beta1.SystemTimestamps}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.getSourceSystemTimestamps = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.SystemTimestamps} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps, 7));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.SystemTimestamps|undefined} value */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.setSourceSystemTimestamps = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.clearSourceSystemTimestamps = function() {
  this.setSourceSystemTimestamps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.Entry.prototype.hasSourceSystemTimestamps = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.EntryGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.EntryGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dataCatalogTimestamps: (f = msg.getDataCatalogTimestamps()) && google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.EntryGroup}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.EntryGroup;
  return proto.google.cloud.datacatalog.v1beta1.EntryGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.EntryGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.EntryGroup}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.deserializeBinaryFromReader);
      msg.setDataCatalogTimestamps(value);
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
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.EntryGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.EntryGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDataCatalogTimestamps();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SystemTimestamps data_catalog_timestamps = 4;
 * @return {?proto.google.cloud.datacatalog.v1beta1.SystemTimestamps}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.getDataCatalogTimestamps = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.SystemTimestamps} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps, 4));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.SystemTimestamps|undefined} value */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.setDataCatalogTimestamps = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.clearDataCatalogTimestamps = function() {
  this.setDataCatalogTimestamps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.EntryGroup.prototype.hasDataCatalogTimestamps = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tagTemplateId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tagTemplate: (f = msg.getTagTemplate()) && google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest;
  return proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagTemplateId(value);
      break;
    case 2:
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.deserializeBinaryFromReader);
      msg.setTagTemplate(value);
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
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTagTemplateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag_template_id = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.getTagTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.setTagTemplateId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TagTemplate tag_template = 2;
 * @return {?proto.google.cloud.datacatalog.v1beta1.TagTemplate}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.getTagTemplate = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.TagTemplate} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate, 2));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.TagTemplate|undefined} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.setTagTemplate = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.clearTagTemplate = function() {
  this.setTagTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.prototype.hasTagTemplate = function() {
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
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest;
  return proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.prototype.setName = function(value) {
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagTemplate: (f = msg.getTagTemplate()) && google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest;
  return proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.deserializeBinaryFromReader);
      msg.setTagTemplate(value);
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.serializeBinaryToWriter
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
 * optional TagTemplate tag_template = 1;
 * @return {?proto.google.cloud.datacatalog.v1beta1.TagTemplate}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.getTagTemplate = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.TagTemplate} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate, 1));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.TagTemplate|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.setTagTemplate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.clearTagTemplate = function() {
  this.setTagTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.hasTagTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest;
  return proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.prototype.setForce = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: (f = msg.getTag()) && google_cloud_datacatalog_v1beta1_tags_pb.Tag.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateTagRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.CreateTagRequest;
  return proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateTagRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.Tag;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.Tag.deserializeBinaryFromReader);
      msg.setTag(value);
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
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.Tag.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Tag tag = 2;
 * @return {?proto.google.cloud.datacatalog.v1beta1.Tag}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.getTag = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.Tag} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.Tag, 2));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.Tag|undefined} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.setTag = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.clearTag = function() {
  this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagRequest.prototype.hasTag = function() {
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: (f = msg.getTag()) && google_cloud_datacatalog_v1beta1_tags_pb.Tag.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest;
  return proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.Tag;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.Tag.deserializeBinaryFromReader);
      msg.setTag(value);
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.Tag.serializeBinaryToWriter
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
 * optional Tag tag = 1;
 * @return {?proto.google.cloud.datacatalog.v1beta1.Tag}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.getTag = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.Tag} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.Tag, 1));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.Tag|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.setTag = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.clearTag = function() {
  this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.hasTag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest;
  return proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.DeleteTagRequest.prototype.setName = function(value) {
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
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tagTemplateFieldId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tagTemplateField: (f = msg.getTagTemplateField()) && google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest;
  return proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTagTemplateFieldId(value);
      break;
    case 3:
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.deserializeBinaryFromReader);
      msg.setTagTemplateField(value);
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
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTagTemplateFieldId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTagTemplateField();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag_template_field_id = 2;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.getTagTemplateFieldId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.setTagTemplateFieldId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TagTemplateField tag_template_field = 3;
 * @return {?proto.google.cloud.datacatalog.v1beta1.TagTemplateField}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.getTagTemplateField = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.TagTemplateField} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField, 3));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.TagTemplateField|undefined} value */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.setTagTemplateField = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.clearTagTemplateField = function() {
  this.setTagTemplateField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.prototype.hasTagTemplateField = function() {
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tagTemplateField: (f = msg.getTagTemplateField()) && google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest;
  return proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.deserializeBinaryFromReader);
      msg.setTagTemplateField(value);
      break;
    case 3:
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
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTagTemplateField();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.serializeBinaryToWriter
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TagTemplateField tag_template_field = 2;
 * @return {?proto.google.cloud.datacatalog.v1beta1.TagTemplateField}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.getTagTemplateField = function() {
  return /** @type{?proto.google.cloud.datacatalog.v1beta1.TagTemplateField} */ (
    jspb.Message.getWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField, 2));
};


/** @param {?proto.google.cloud.datacatalog.v1beta1.TagTemplateField|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.setTagTemplateField = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.clearTagTemplateField = function() {
  this.setTagTemplateField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.hasTagTemplateField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newTagTemplateFieldId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest;
  return proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNewTagTemplateFieldId(value);
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
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewTagTemplateFieldId();
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
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_tag_template_field_id = 2;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.prototype.getNewTagTemplateFieldId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.prototype.setNewTagTemplateFieldId = function(value) {
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest;
  return proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
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
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.prototype.setForce = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.ListTagsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.ListTagsRequest}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.ListTagsRequest;
  return proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.ListTagsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.ListTagsRequest}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.ListTagsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.ListTagsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datacatalog.v1beta1.ListTagsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    google_cloud_datacatalog_v1beta1_tags_pb.Tag.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datacatalog.v1beta1.ListTagsResponse}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datacatalog.v1beta1.ListTagsResponse;
  return proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datacatalog.v1beta1.ListTagsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datacatalog.v1beta1.ListTagsResponse}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datacatalog_v1beta1_tags_pb.Tag;
      reader.readMessage(value,google_cloud_datacatalog_v1beta1_tags_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
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
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datacatalog.v1beta1.ListTagsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datacatalog_v1beta1_tags_pb.Tag.serializeBinaryToWriter
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
 * repeated Tag tags = 1;
 * @return {!Array<!proto.google.cloud.datacatalog.v1beta1.Tag>}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.google.cloud.datacatalog.v1beta1.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datacatalog_v1beta1_tags_pb.Tag, 1));
};


/** @param {!Array<!proto.google.cloud.datacatalog.v1beta1.Tag>} value */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datacatalog.v1beta1.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datacatalog.v1beta1.Tag}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datacatalog.v1beta1.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datacatalog.v1beta1.ListTagsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.google.cloud.datacatalog.v1beta1.EntryType = {
  ENTRY_TYPE_UNSPECIFIED: 0,
  TABLE: 2,
  DATA_STREAM: 3,
  FILESET: 4
};

goog.object.extend(exports, proto.google.cloud.datacatalog.v1beta1);
