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
var google_cloud_irm_v1alpha2_incidents_pb = require('../../../../google/cloud/irm/v1alpha2/incidents_pb.js');
goog.object.extend(proto, google_cloud_irm_v1alpha2_incidents_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateArtifactRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateIncidentRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateSignalRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.CreateTagRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.DeleteTagRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.GetIncidentRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.GetSignalRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListArtifactsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListArtifactsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListTagsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.ListTagsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.LookupSignalRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchSignalsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchSignalsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.UpdateSignalRequest', null, global);
goog.exportSymbol('proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest', null, global);
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
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateIncidentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateIncidentRequest';
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
proto.google.cloud.irm.v1alpha2.GetIncidentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.GetIncidentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.GetIncidentRequest.displayName = 'proto.google.cloud.irm.v1alpha2.GetIncidentRequest';
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
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.displayName = 'proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest';
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest';
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse';
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.displayName = 'proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result';
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
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest';
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
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest';
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
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse';
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
proto.google.cloud.irm.v1alpha2.CreateTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateTagRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateTagRequest';
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
proto.google.cloud.irm.v1alpha2.DeleteTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.DeleteTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.DeleteTagRequest.displayName = 'proto.google.cloud.irm.v1alpha2.DeleteTagRequest';
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
proto.google.cloud.irm.v1alpha2.ListTagsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListTagsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListTagsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ListTagsRequest';
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
proto.google.cloud.irm.v1alpha2.ListTagsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.ListTagsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListTagsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListTagsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.ListTagsResponse';
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
proto.google.cloud.irm.v1alpha2.CreateSignalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateSignalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateSignalRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateSignalRequest';
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
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchSignalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.SearchSignalsRequest';
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
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchSignalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.SearchSignalsResponse';
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
proto.google.cloud.irm.v1alpha2.GetSignalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.GetSignalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.GetSignalRequest.displayName = 'proto.google.cloud.irm.v1alpha2.GetSignalRequest';
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
proto.google.cloud.irm.v1alpha2.LookupSignalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.LookupSignalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.LookupSignalRequest.displayName = 'proto.google.cloud.irm.v1alpha2.LookupSignalRequest';
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
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.UpdateSignalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.displayName = 'proto.google.cloud.irm.v1alpha2.UpdateSignalRequest';
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
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest';
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
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse';
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
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.displayName = 'proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest';
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
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.displayName = 'proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse';
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
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateArtifactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateArtifactRequest';
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
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListArtifactsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ListArtifactsRequest';
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
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListArtifactsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.ListArtifactsResponse';
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
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.displayName = 'proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest';
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
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.displayName = 'proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest';
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.displayName = 'proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest';
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.displayName = 'proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident';
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.displayName = 'proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse';
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
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest';
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
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.displayName = 'proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest';
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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest';
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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse';
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
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.displayName = 'proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest';
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
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest';
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
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.displayName = 'proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest';
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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest';
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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.displayName = 'proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse';
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
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.displayName = 'proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest';
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
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest';
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
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.displayName = 'proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest';
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
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.displayName = 'proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest';
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
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateIncidentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    incident: (f = msg.getIncident()) && google_cloud_irm_v1alpha2_incidents_pb.Incident.toObject(includeInstance, f),
    parent: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateIncidentRequest;
  return proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateIncidentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Incident;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinaryFromReader);
      msg.setIncident(value);
      break;
    case 2:
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
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateIncidentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncident();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Incident.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Incident incident = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Incident}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.getIncident = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Incident} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Incident, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Incident|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.setIncident = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.clearIncident = function() {
  this.setIncident(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.hasIncident = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateIncidentRequest.prototype.setParent = function(value) {
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
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.GetIncidentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.GetIncidentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.GetIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.GetIncidentRequest;
  return proto.google.cloud.irm.v1alpha2.GetIncidentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.GetIncidentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.GetIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.GetIncidentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.GetIncidentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.GetIncidentRequest.prototype.setName = function(value) {
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
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    incident: (f = msg.getIncident()) && google_cloud_irm_v1alpha2_incidents_pb.Incident.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest;
  return proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Incident;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinaryFromReader);
      msg.setIncident(value);
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
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncident();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Incident.serializeBinaryToWriter
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
 * optional Incident incident = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Incident}
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.getIncident = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Incident} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Incident, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Incident|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.setIncident = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.clearIncident = function() {
  this.setIncident(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.hasIncident = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateIncidentRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest;
  return proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse;
  return proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result;
      reader.readMessage(value,proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.serializeBinaryToWriter
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    incident: (f = msg.getIncident()) && google_cloud_irm_v1alpha2_incidents_pb.Incident.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result;
  return proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Incident;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinaryFromReader);
      msg.setIncident(value);
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
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncident();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Incident.serializeBinaryToWriter
    );
  }
};


/**
 * optional Incident incident = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Incident}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.prototype.getIncident = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Incident} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Incident, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Incident|undefined} value */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.prototype.setIncident = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.prototype.clearIncident = function() {
  this.setIncident(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.prototype.hasIncident = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Result results = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result>}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result>} value */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    annotation: (f = msg.getAnnotation()) && google_cloud_irm_v1alpha2_incidents_pb.Annotation.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest;
  return proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Annotation;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
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
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Annotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Annotation annotation = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.Annotation}
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.getAnnotation = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Annotation} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Annotation, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Annotation|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.setAnnotation = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.clearAnnotation = function() {
  this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateAnnotationRequest.prototype.hasAnnotation = function() {
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
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest;
  return proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListAnnotationsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationsList: jspb.Message.toObjectList(msg.getAnnotationsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Annotation.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse;
  return proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Annotation;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Annotation.deserializeBinaryFromReader);
      msg.addAnnotations(value);
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
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Annotation.serializeBinaryToWriter
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
 * repeated Annotation annotations = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Annotation>}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.getAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Annotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Annotation, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Annotation>} value */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.setAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Annotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Annotation}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.addAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.Annotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.clearAnnotationsList = function() {
  this.setAnnotationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListAnnotationsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: (f = msg.getTag()) && google_cloud_irm_v1alpha2_incidents_pb.Tag.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateTagRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateTagRequest;
  return proto.google.cloud.irm.v1alpha2.CreateTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateTagRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Tag;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Tag.deserializeBinaryFromReader);
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
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.serializeBinaryToWriter = function(message, writer) {
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
      google_cloud_irm_v1alpha2_incidents_pb.Tag.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Tag tag = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.Tag}
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.getTag = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Tag} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Tag, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Tag|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.setTag = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.clearTag = function() {
  this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateTagRequest.prototype.hasTag = function() {
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
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.DeleteTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteTagRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.DeleteTagRequest;
  return proto.google.cloud.irm.v1alpha2.DeleteTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteTagRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.DeleteTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.DeleteTagRequest.prototype.setName = function(value) {
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
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListTagsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListTagsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListTagsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListTagsRequest;
  return proto.google.cloud.irm.v1alpha2.ListTagsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListTagsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListTagsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListTagsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListTagsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListTagsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListTagsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListTagsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Tag.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListTagsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListTagsResponse;
  return proto.google.cloud.irm.v1alpha2.ListTagsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListTagsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListTagsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Tag;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Tag.deserializeBinaryFromReader);
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
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListTagsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListTagsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Tag.serializeBinaryToWriter
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
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Tag>}
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Tag, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Tag>} value */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Tag}
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListTagsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateSignalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateSignalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signal: (f = msg.getSignal()) && google_cloud_irm_v1alpha2_incidents_pb.Signal.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateSignalRequest;
  return proto.google.cloud.irm.v1alpha2.CreateSignalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateSignalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Signal;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinaryFromReader);
      msg.setSignal(value);
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
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateSignalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateSignalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Signal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Signal signal = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.Signal}
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.getSignal = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Signal} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Signal, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Signal|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.setSignal = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.clearSignal = function() {
  this.setSignal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateSignalRequest.prototype.hasSignal = function() {
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
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSignalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSignalsRequest}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchSignalsRequest;
  return proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSignalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSignalsRequest}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
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
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSignalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSignalsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSignalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signalsList: jspb.Message.toObjectList(msg.getSignalsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Signal.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSignalsResponse}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchSignalsResponse;
  return proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSignalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchSignalsResponse}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Signal;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinaryFromReader);
      msg.addSignals(value);
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
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchSignalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Signal.serializeBinaryToWriter
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
 * repeated Signal signals = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Signal>}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.getSignalsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Signal>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Signal, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Signal>} value */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.setSignalsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Signal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Signal}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.addSignals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.Signal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.clearSignalsList = function() {
  this.setSignalsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchSignalsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.GetSignalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.GetSignalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.GetSignalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.GetSignalRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.GetSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.GetSignalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.GetSignalRequest;
  return proto.google.cloud.irm.v1alpha2.GetSignalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.GetSignalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.GetSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.GetSignalRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.GetSignalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.GetSignalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.GetSignalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.GetSignalRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.GetSignalRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.GetSignalRequest.prototype.setName = function(value) {
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
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.AlternateIdCase = {
  ALTERNATE_ID_NOT_SET: 0,
  CSCC_FINDING: 2,
  STACKDRIVER_NOTIFICATION_ID: 3
};

/**
 * @return {proto.google.cloud.irm.v1alpha2.LookupSignalRequest.AlternateIdCase}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.getAlternateIdCase = function() {
  return /** @type {proto.google.cloud.irm.v1alpha2.LookupSignalRequest.AlternateIdCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_[0]));
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
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.LookupSignalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.LookupSignalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    csccFinding: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stackdriverNotificationId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.irm.v1alpha2.LookupSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.LookupSignalRequest;
  return proto.google.cloud.irm.v1alpha2.LookupSignalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.LookupSignalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.LookupSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsccFinding(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStackdriverNotificationId(value);
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
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.LookupSignalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.LookupSignalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
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
 * optional string cscc_finding = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.getCsccFinding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.setCsccFinding = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.clearCsccFinding = function() {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.hasCsccFinding = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string stackdriver_notification_id = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.getStackdriverNotificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.setStackdriverNotificationId = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.clearStackdriverNotificationId = function() {
  jspb.Message.setOneofField(this, 3, proto.google.cloud.irm.v1alpha2.LookupSignalRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.LookupSignalRequest.prototype.hasStackdriverNotificationId = function() {
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
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateSignalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    signal: (f = msg.getSignal()) && google_cloud_irm_v1alpha2_incidents_pb.Signal.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.UpdateSignalRequest;
  return proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateSignalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateSignalRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Signal;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinaryFromReader);
      msg.setSignal(value);
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
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateSignalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Signal.serializeBinaryToWriter
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
 * optional Signal signal = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Signal}
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.getSignal = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Signal} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Signal, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Signal|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.setSignal = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.clearSignal = function() {
  this.setSignal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.hasSignal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateSignalRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timeZone: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest;
  return proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
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
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string time_zone = 5;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsRequest.prototype.setTimeZone = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    incidentsList: jspb.Message.toObjectList(msg.getIncidentsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Incident.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse;
  return proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Incident;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinaryFromReader);
      msg.addIncidents(value);
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
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncidentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Incident.serializeBinaryToWriter
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
 * repeated Incident incidents = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Incident>}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.getIncidentsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Incident>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Incident, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Incident>} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.setIncidentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Incident=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Incident}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.addIncidents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.Incident, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.clearIncidentsList = function() {
  this.setIncidentsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SearchIncidentsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.repeatedFields_ = [3,4,5,6];



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
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    incident: (f = msg.getIncident()) && google_cloud_irm_v1alpha2_incidents_pb.Incident.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    subscriptionsList: jspb.Message.toObjectList(msg.getSubscriptionsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Subscription.toObject, includeInstance),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Tag.toObject, includeInstance),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.toObject, includeInstance),
    artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Artifact.toObject, includeInstance)
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
 * @return {!proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest;
  return proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Incident;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinaryFromReader);
      msg.setIncident(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Subscription;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinaryFromReader);
      msg.addSubscriptions(value);
      break;
    case 4:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Tag;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 5:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 6:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Artifact;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
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
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncident();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Incident.serializeBinaryToWriter
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
  f = message.getSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.serializeBinaryToWriter
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Artifact.serializeBinaryToWriter
    );
  }
};


/**
 * optional Incident incident = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Incident}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.getIncident = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Incident} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Incident, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Incident|undefined} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.setIncident = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.clearIncident = function() {
  this.setIncident(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.hasIncident = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Subscription subscriptions = 3;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Subscription>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.getSubscriptionsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Subscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Subscription, 3));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Subscription>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.setSubscriptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Subscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Subscription}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.addSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.irm.v1alpha2.Subscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.clearSubscriptionsList = function() {
  this.setSubscriptionsList([]);
};


/**
 * repeated Tag tags = 4;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Tag>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Tag, 4));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Tag>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Tag}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.irm.v1alpha2.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * repeated IncidentRoleAssignment roles = 5;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment, 5));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.setRolesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.clearRolesList = function() {
  this.setRolesList([]);
};


/**
 * repeated Artifact artifacts = 6;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Artifact>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Artifact, 6));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Artifact>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.setArtifactsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Artifact}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.cloud.irm.v1alpha2.Artifact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentRequest.prototype.clearArtifactsList = function() {
  this.setArtifactsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.repeatedFields_ = [2,3,4,5];



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
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    incident: (f = msg.getIncident()) && google_cloud_irm_v1alpha2_incidents_pb.Incident.toObject(includeInstance, f),
    subscriptionsList: jspb.Message.toObjectList(msg.getSubscriptionsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Subscription.toObject, includeInstance),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Tag.toObject, includeInstance),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRole.toObject, includeInstance),
    artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Artifact.toObject, includeInstance)
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
 * @return {!proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse;
  return proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Incident;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinaryFromReader);
      msg.setIncident(value);
      break;
    case 2:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Subscription;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinaryFromReader);
      msg.addSubscriptions(value);
      break;
    case 3:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Tag;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 4:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.IncidentRole;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.IncidentRole.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 5:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Artifact;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
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
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncident();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Incident.serializeBinaryToWriter
    );
  }
  f = message.getSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.IncidentRole.serializeBinaryToWriter
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Artifact.serializeBinaryToWriter
    );
  }
};


/**
 * optional Incident incident = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Incident}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.getIncident = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Incident} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Incident, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Incident|undefined} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.setIncident = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.clearIncident = function() {
  this.setIncident(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.hasIncident = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Subscription subscriptions = 2;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Subscription>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.getSubscriptionsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Subscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Subscription, 2));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Subscription>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.setSubscriptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Subscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Subscription}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.addSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.irm.v1alpha2.Subscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.clearSubscriptionsList = function() {
  this.setSubscriptionsList([]);
};


/**
 * repeated Tag tags = 3;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Tag>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Tag, 3));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Tag>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Tag}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.irm.v1alpha2.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * repeated IncidentRole roles = 4;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.IncidentRole>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.IncidentRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.IncidentRole, 4));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.IncidentRole>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.setRolesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.IncidentRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.IncidentRole}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.irm.v1alpha2.IncidentRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.clearRolesList = function() {
  this.setRolesList([]);
};


/**
 * repeated Artifact artifacts = 5;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Artifact>}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Artifact, 5));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Artifact>} value */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.setArtifactsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Artifact}
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.cloud.irm.v1alpha2.Artifact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.EscalateIncidentResponse.prototype.clearArtifactsList = function() {
  this.setArtifactsList([]);
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
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateArtifactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    artifact: (f = msg.getArtifact()) && google_cloud_irm_v1alpha2_incidents_pb.Artifact.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateArtifactRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateArtifactRequest;
  return proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateArtifactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateArtifactRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Artifact;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
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
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateArtifactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Artifact.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Artifact artifact = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.Artifact}
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.getArtifact = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Artifact} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Artifact, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Artifact|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.setArtifact = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.clearArtifact = function() {
  this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateArtifactRequest.prototype.hasArtifact = function() {
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
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListArtifactsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListArtifactsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListArtifactsRequest;
  return proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListArtifactsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListArtifactsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListArtifactsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListArtifactsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListArtifactsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Artifact.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListArtifactsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListArtifactsResponse;
  return proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListArtifactsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListArtifactsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Artifact;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
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
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListArtifactsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Artifact.serializeBinaryToWriter
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
 * repeated Artifact artifacts = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Artifact>}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Artifact, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Artifact>} value */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.setArtifactsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Artifact}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.Artifact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.clearArtifactsList = function() {
  this.setArtifactsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListArtifactsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    artifact: (f = msg.getArtifact()) && google_cloud_irm_v1alpha2_incidents_pb.Artifact.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest;
  return proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Artifact;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
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
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Artifact.serializeBinaryToWriter
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
 * optional Artifact artifact = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Artifact}
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.getArtifact = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Artifact} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Artifact, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Artifact|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.setArtifact = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.clearArtifact = function() {
  this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateArtifactRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest;
  return proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.DeleteArtifactRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.repeatedFields_ = [2,3,7];



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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    ccList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    subject: jspb.Message.getFieldWithDefault(msg, 4, ""),
    notesContentType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    notesContent: jspb.Message.getFieldWithDefault(msg, 6, ""),
    incidentsList: jspb.Message.toObjectList(msg.getIncidentsList(),
    proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.toObject, includeInstance),
    previewOnly: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest;
  return proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addRecipients(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCc(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotesContentType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotesContent(value);
      break;
    case 7:
      var value = new proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident;
      reader.readMessage(value,proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.deserializeBinaryFromReader);
      msg.addIncidents(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreviewOnly(value);
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCcList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNotesContentType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNotesContent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIncidentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.serializeBinaryToWriter
    );
  }
  f = message.getPreviewOnly();
  if (f) {
    writer.writeBool(
      8,
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident;
  return proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string recipients = 2;
 * @return {!Array<string>}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setRecipientsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.addRecipients = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.clearRecipientsList = function() {
  this.setRecipientsList([]);
};


/**
 * repeated string cc = 3;
 * @return {!Array<string>}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getCcList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setCcList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.addCc = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.clearCcList = function() {
  this.setCcList([]);
};


/**
 * optional string subject = 4;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setSubject = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string notes_content_type = 5;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getNotesContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setNotesContentType = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string notes_content = 6;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getNotesContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setNotesContent = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Incident incidents = 7;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident>}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getIncidentsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident, 7));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident>} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setIncidentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.addIncidents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.clearIncidentsList = function() {
  this.setIncidentsList([]);
};


/**
 * optional bool preview_only = 8;
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.getPreviewOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffRequest.prototype.setPreviewOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse;
  return proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string content_type = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.prototype.setContentType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.SendShiftHandoffResponse.prototype.setContent = function(value) {
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
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscription: (f = msg.getSubscription()) && google_cloud_irm_v1alpha2_incidents_pb.Subscription.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest;
  return proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Subscription;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
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
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Subscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Subscription subscription = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.Subscription}
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.getSubscription = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Subscription} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Subscription, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Subscription|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.setSubscription = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.clearSubscription = function() {
  this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateSubscriptionRequest.prototype.hasSubscription = function() {
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
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscription: (f = msg.getSubscription()) && google_cloud_irm_v1alpha2_incidents_pb.Subscription.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest;
  return proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest}
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Subscription;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
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
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Subscription.serializeBinaryToWriter
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
 * optional Subscription subscription = 1;
 * @return {?proto.google.cloud.irm.v1alpha2.Subscription}
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.getSubscription = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.Subscription} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Subscription, 1));
};


/** @param {?proto.google.cloud.irm.v1alpha2.Subscription|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.setSubscription = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.clearSubscription = function() {
  this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest;
  return proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriptionsList: jspb.Message.toObjectList(msg.getSubscriptionsList(),
    google_cloud_irm_v1alpha2_incidents_pb.Subscription.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse;
  return proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.Subscription;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinaryFromReader);
      msg.addSubscriptions(value);
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
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.Subscription.serializeBinaryToWriter
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
 * repeated Subscription subscriptions = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.Subscription>}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.getSubscriptionsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.Subscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.Subscription, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.Subscription>} value */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.setSubscriptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.Subscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.Subscription}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.addSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.Subscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.clearSubscriptionsList = function() {
  this.setSubscriptionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListSubscriptionsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest;
  return proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.prototype.setName = function(value) {
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
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    incidentRoleAssignment: (f = msg.getIncidentRoleAssignment()) && google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest;
  return proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinaryFromReader);
      msg.setIncidentRoleAssignment(value);
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
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncidentRoleAssignment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IncidentRoleAssignment incident_role_assignment = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.getIncidentRoleAssignment = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment|undefined} value */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.setIncidentRoleAssignment = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.clearIncidentRoleAssignment = function() {
  this.setIncidentRoleAssignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.prototype.hasIncidentRoleAssignment = function() {
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
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest;
  return proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest}
 */
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.prototype.setName = function(value) {
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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest;
  return proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.repeatedFields_ = [1];



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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    incidentRoleAssignmentsList: jspb.Message.toObjectList(msg.getIncidentRoleAssignmentsList(),
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.toObject, includeInstance),
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
 * @return {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse;
  return proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinaryFromReader);
      msg.addIncidentRoleAssignments(value);
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
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncidentRoleAssignmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.serializeBinaryToWriter
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
 * repeated IncidentRoleAssignment incident_role_assignments = 1;
 * @return {!Array<!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment>}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.getIncidentRoleAssignmentsList = function() {
  return /** @type{!Array<!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment, 1));
};


/** @param {!Array<!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment>} value */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.setIncidentRoleAssignmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.addIncidentRoleAssignments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.irm.v1alpha2.IncidentRoleAssignment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.clearIncidentRoleAssignmentsList = function() {
  this.setIncidentRoleAssignmentsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newAssignee: (f = msg.getNewAssignee()) && google_cloud_irm_v1alpha2_incidents_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest;
  return proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.User;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.User.deserializeBinaryFromReader);
      msg.setNewAssignee(value);
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
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewAssignee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User new_assignee = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.User}
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.getNewAssignee = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.User} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.User, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.User|undefined} value */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.setNewAssignee = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.clearNewAssignee = function() {
  this.setNewAssignee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.prototype.hasNewAssignee = function() {
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
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newAssignee: (f = msg.getNewAssignee()) && google_cloud_irm_v1alpha2_incidents_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest;
  return proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.User;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.User.deserializeBinaryFromReader);
      msg.setNewAssignee(value);
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
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewAssignee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User new_assignee = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.User}
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.getNewAssignee = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.User} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.User, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.User|undefined} value */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.setNewAssignee = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.clearNewAssignee = function() {
  this.setNewAssignee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.prototype.hasNewAssignee = function() {
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
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newAssignee: (f = msg.getNewAssignee()) && google_cloud_irm_v1alpha2_incidents_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest;
  return proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.User;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.User.deserializeBinaryFromReader);
      msg.setNewAssignee(value);
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
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewAssignee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User new_assignee = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.User}
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.getNewAssignee = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.User} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.User, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.User|undefined} value */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.setNewAssignee = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.clearNewAssignee = function() {
  this.setNewAssignee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.prototype.hasNewAssignee = function() {
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
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newAssignee: (f = msg.getNewAssignee()) && google_cloud_irm_v1alpha2_incidents_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest;
  return proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest}
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_irm_v1alpha2_incidents_pb.User;
      reader.readMessage(value,google_cloud_irm_v1alpha2_incidents_pb.User.deserializeBinaryFromReader);
      msg.setNewAssignee(value);
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
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewAssignee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_irm_v1alpha2_incidents_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User new_assignee = 2;
 * @return {?proto.google.cloud.irm.v1alpha2.User}
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.getNewAssignee = function() {
  return /** @type{?proto.google.cloud.irm.v1alpha2.User} */ (
    jspb.Message.getWrapperField(this, google_cloud_irm_v1alpha2_incidents_pb.User, 2));
};


/** @param {?proto.google.cloud.irm.v1alpha2.User|undefined} value */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.setNewAssignee = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.clearNewAssignee = function() {
  this.setNewAssignee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.prototype.hasNewAssignee = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.cloud.irm.v1alpha2);
