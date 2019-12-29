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
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.Celebrity', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.Entity', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.Feature', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionMode', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.LabelFrame', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.LabelSegment', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.Likelihood', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.SpeechContext', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingFeature', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.TextFrame', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.TextSegment', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.Track', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.VideoContext', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.VideoSegment', null, global);
goog.exportSymbol('proto.google.cloud.videointelligence.v1p3beta1.WordInfo', null, global);
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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest';
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
proto.google.cloud.videointelligence.v1p3beta1.VideoContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.VideoContext.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.VideoContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.VideoContext.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.VideoContext';
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
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.VideoSegment';
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
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.LabelSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.LabelSegment';
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
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.LabelFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.LabelFrame';
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
proto.google.cloud.videointelligence.v1p3beta1.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.Entity.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.Entity';
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
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation';
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame';
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation';
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox';
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
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject';
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
proto.google.cloud.videointelligence.v1p3beta1.Track = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.Track.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.Track, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.Track.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.Track';
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
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute';
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
proto.google.cloud.videointelligence.v1p3beta1.Celebrity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.Celebrity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.Celebrity.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.Celebrity';
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack';
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity';
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation';
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
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults';
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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse';
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
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress';
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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress';
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.SpeechContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.SpeechContext';
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription';
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative';
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
proto.google.cloud.videointelligence.v1p3beta1.WordInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.WordInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.WordInfo.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.WordInfo';
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex';
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly';
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
proto.google.cloud.videointelligence.v1p3beta1.TextSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.TextSegment.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.TextSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.TextSegment.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.TextSegment';
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
proto.google.cloud.videointelligence.v1p3beta1.TextFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.TextFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.TextFrame.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.TextFrame';
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
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation';
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame';
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.repeatedFields_, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.oneofGroups_);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation';
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
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults';
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_);
};
goog.inherits(proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.displayName = 'proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.repeatedFields_ = [2];



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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputContent: msg.getInputContent_asB64(),
    featuresList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    videoContext: (f = msg.getVideoContext()) && proto.google.cloud.videointelligence.v1p3beta1.VideoContext.toObject(includeInstance, f),
    outputUri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest;
  return proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputUri(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInputContent(value);
      break;
    case 2:
      var value = /** @type {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Feature>} */ (reader.readPackedEnum());
      msg.setFeaturesList(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoContext;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoContext.deserializeBinaryFromReader);
      msg.setVideoContext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputUri(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getVideoContext();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoContext.serializeBinaryToWriter
    );
  }
  f = message.getOutputUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string input_uri = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getInputUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.setInputUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes input_content = 6;
 * @return {!(string|Uint8Array)}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getInputContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes input_content = 6;
 * This is a type-conversion wrapper around `getInputContent()`
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getInputContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInputContent()));
};


/**
 * optional bytes input_content = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInputContent()`
 * @return {!Uint8Array}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getInputContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInputContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.setInputContent = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * repeated Feature features = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Feature>}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getFeaturesList = function() {
  return /** @type {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Feature>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Feature>} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.setFeaturesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Feature} value
 * @param {number=} opt_index
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.addFeatures = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.clearFeaturesList = function() {
  this.setFeaturesList([]);
};


/**
 * optional VideoContext video_context = 3;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoContext}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getVideoContext = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoContext} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoContext, 3));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoContext|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.setVideoContext = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.clearVideoContext = function() {
  this.setVideoContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.hasVideoContext = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string output_uri = 4;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getOutputUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.setOutputUri = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string location_id = 5;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.prototype.setLocationId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.VideoContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject, includeInstance),
    labelDetectionConfig: (f = msg.getLabelDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.toObject(includeInstance, f),
    shotChangeDetectionConfig: (f = msg.getShotChangeDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.toObject(includeInstance, f),
    explicitContentDetectionConfig: (f = msg.getExplicitContentDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.toObject(includeInstance, f),
    speechTranscriptionConfig: (f = msg.getSpeechTranscriptionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.toObject(includeInstance, f),
    textDetectionConfig: (f = msg.getTextDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.toObject(includeInstance, f),
    objectTrackingConfig: (f = msg.getObjectTrackingConfig()) && proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoContext}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.VideoContext;
  return proto.google.cloud.videointelligence.v1p3beta1.VideoContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoContext}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.deserializeBinaryFromReader);
      msg.setLabelDetectionConfig(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.deserializeBinaryFromReader);
      msg.setShotChangeDetectionConfig(value);
      break;
    case 4:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.deserializeBinaryFromReader);
      msg.setExplicitContentDetectionConfig(value);
      break;
    case 6:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.deserializeBinaryFromReader);
      msg.setSpeechTranscriptionConfig(value);
      break;
    case 8:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.deserializeBinaryFromReader);
      msg.setTextDetectionConfig(value);
      break;
    case 13:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.deserializeBinaryFromReader);
      msg.setObjectTrackingConfig(value);
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
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.VideoContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getLabelDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getShotChangeDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getExplicitContentDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getSpeechTranscriptionConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.serializeBinaryToWriter
    );
  }
  f = message.getTextDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getObjectTrackingConfig();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VideoSegment segments = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setSegmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearSegmentsList = function() {
  this.setSegmentsList([]);
};


/**
 * optional LabelDetectionConfig label_detection_config = 2;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getLabelDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig, 2));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setLabelDetectionConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearLabelDetectionConfig = function() {
  this.setLabelDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.hasLabelDetectionConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ShotChangeDetectionConfig shot_change_detection_config = 3;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getShotChangeDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig, 3));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setShotChangeDetectionConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearShotChangeDetectionConfig = function() {
  this.setShotChangeDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.hasShotChangeDetectionConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ExplicitContentDetectionConfig explicit_content_detection_config = 4;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getExplicitContentDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig, 4));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setExplicitContentDetectionConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearExplicitContentDetectionConfig = function() {
  this.setExplicitContentDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.hasExplicitContentDetectionConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SpeechTranscriptionConfig speech_transcription_config = 6;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getSpeechTranscriptionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig, 6));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setSpeechTranscriptionConfig = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearSpeechTranscriptionConfig = function() {
  this.setSpeechTranscriptionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.hasSpeechTranscriptionConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TextDetectionConfig text_detection_config = 8;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getTextDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig, 8));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setTextDetectionConfig = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearTextDetectionConfig = function() {
  this.setTextDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.hasTextDetectionConfig = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ObjectTrackingConfig object_tracking_config = 13;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.getObjectTrackingConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig, 13));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.setObjectTrackingConfig = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.clearObjectTrackingConfig = function() {
  this.setObjectTrackingConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoContext.prototype.hasObjectTrackingConfig = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelDetectionMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stationaryCamera: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    model: jspb.Message.getFieldWithDefault(msg, 3, ""),
    frameConfidenceThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    videoConfidenceThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionMode} */ (reader.readEnum());
      msg.setLabelDetectionMode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStationaryCamera(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFrameConfidenceThreshold(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVideoConfidenceThreshold(value);
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
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelDetectionMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStationaryCamera();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFrameConfidenceThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getVideoConfidenceThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional LabelDetectionMode label_detection_mode = 1;
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionMode}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.getLabelDetectionMode = function() {
  return /** @type {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionMode} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.setLabelDetectionMode = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool stationary_camera = 2;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.getStationaryCamera = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.setStationaryCamera = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string model = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.setModel = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float frame_confidence_threshold = 4;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.getFrameConfidenceThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.setFrameConfidenceThreshold = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float video_confidence_threshold = 5;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.getVideoConfidenceThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.prototype.setVideoConfidenceThreshold = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
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
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string model = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.prototype.setModel = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string model = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.prototype.setModel = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string model = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.prototype.setModel = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    languageHintsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    model: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguageHints(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
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
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageHintsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string language_hints = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.getLanguageHintsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.setLanguageHintsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.addLanguageHints = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.clearLanguageHintsList = function() {
  this.setLanguageHintsList([]);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.prototype.setModel = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTimeOffset: (f = msg.getStartTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    endTimeOffset: (f = msg.getEndTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
  return proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartTimeOffset(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setEndTimeOffset(value);
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
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTimeOffset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getEndTimeOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration start_time_offset = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.getStartTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.setStartTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.clearStartTimeOffset = function() {
  this.setStartTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.hasStartTimeOffset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration end_time_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.getEndTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.setEndTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.clearEndTimeOffset = function() {
  this.setEndTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.prototype.hasEndTimeOffset = function() {
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
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    segment: (f = msg.getSegment()) && proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(includeInstance, f),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.LabelSegment;
  return proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.setSegment(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
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
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional VideoSegment segment = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.getSegment = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.setSegment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.clearSegment = function() {
  this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
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
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeOffset: (f = msg.getTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.LabelFrame;
  return proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
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
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeOffset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration time_offset = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.getTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.setTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.clearTimeOffset = function() {
  this.setTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.hasTimeOffset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
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
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Entity}
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.Entity;
  return proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Entity}
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
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
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string entity_id = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.getEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.setEntityId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.Entity.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.repeatedFields_ = [2,3,4];



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
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.google.cloud.videointelligence.v1p3beta1.Entity.toObject(includeInstance, f),
    categoryEntitiesList: jspb.Message.toObjectList(msg.getCategoryEntitiesList(),
    proto.google.cloud.videointelligence.v1p3beta1.Entity.toObject, includeInstance),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.toObject, includeInstance),
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
  return proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Entity;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Entity;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinaryFromReader);
      msg.addCategoryEntities(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
      break;
    case 4:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelFrame;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.deserializeBinaryFromReader);
      msg.addFrames(value);
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
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Entity.serializeBinaryToWriter
    );
  }
  f = message.getCategoryEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Entity.serializeBinaryToWriter
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelSegment.serializeBinaryToWriter
    );
  }
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelFrame.serializeBinaryToWriter
    );
  }
};


/**
 * optional Entity entity = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.Entity}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.getEntity = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.Entity} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Entity, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.Entity|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.setEntity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.clearEntity = function() {
  this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Entity category_entities = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Entity>}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.getCategoryEntitiesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Entity, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Entity>} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.setCategoryEntitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Entity}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.addCategoryEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.clearCategoryEntitiesList = function() {
  this.setCategoryEntitiesList([]);
};


/**
 * repeated LabelSegment segments = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment>}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelSegment, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment>} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.setSegmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.clearSegmentsList = function() {
  this.setSegmentsList([]);
};


/**
 * repeated LabelFrame frames = 4;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame>}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelFrame, 4));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame>} value */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.setFramesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelFrame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.prototype.clearFramesList = function() {
  this.setFramesList([]);
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeOffset: (f = msg.getTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    pornographyLikelihood: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame;
  return proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeOffset(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.videointelligence.v1p3beta1.Likelihood} */ (reader.readEnum());
      msg.setPornographyLikelihood(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeOffset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPornographyLikelihood();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration time_offset = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.getTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.setTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.clearTimeOffset = function() {
  this.setTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.hasTimeOffset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Likelihood pornography_likelihood = 2;
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Likelihood}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.getPornographyLikelihood = function() {
  return /** @type {!proto.google.cloud.videointelligence.v1p3beta1.Likelihood} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.videointelligence.v1p3beta1.Likelihood} value */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.prototype.setPornographyLikelihood = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;
  return proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.deserializeBinaryFromReader);
      msg.addFrames(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ExplicitContentFrame frames = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame>}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame>} value */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.prototype.setFramesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.prototype.clearFramesList = function() {
  this.setFramesList([]);
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    left: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    top: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    right: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bottom: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;
  return proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLeft(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTop(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottom(value);
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeft();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTop();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getRight();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getBottom();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float left = 1;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.setLeft = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float top = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.getTop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.setTop = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float right = 3;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.setRight = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float bottom = 4;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.getBottom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.prototype.setBottom = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.repeatedFields_ = [3];



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
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    normalizedBoundingBox: (f = msg.getNormalizedBoundingBox()) && proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.toObject(includeInstance, f),
    timeOffset: (f = msg.getTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject;
  return proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.deserializeBinaryFromReader);
      msg.setNormalizedBoundingBox(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeOffset(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.deserializeBinaryFromReader);
      msg.addAttributes(value);
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
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNormalizedBoundingBox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.serializeBinaryToWriter
    );
  }
  f = message.getTimeOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional NormalizedBoundingBox normalized_bounding_box = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.getNormalizedBoundingBox = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.setNormalizedBoundingBox = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.clearNormalizedBoundingBox = function() {
  this.setNormalizedBoundingBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.hasNormalizedBoundingBox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.getTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.setTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.clearTimeOffset = function() {
  this.setTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.hasTimeOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DetectedAttribute attributes = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute>}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute>} value */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.setAttributesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute}
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.prototype.clearAttributesList = function() {
  this.setAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.repeatedFields_ = [2,3];



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
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.Track.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Track} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.toObject = function(includeInstance, msg) {
  var f, obj = {
    segment: (f = msg.getSegment()) && proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(includeInstance, f),
    timestampedObjectsList: jspb.Message.toObjectList(msg.getTimestampedObjectsList(),
    proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.toObject, includeInstance),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.toObject, includeInstance),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Track}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.Track;
  return proto.google.cloud.videointelligence.v1p3beta1.Track.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Track} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Track}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.setSegment(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.deserializeBinaryFromReader);
      msg.addTimestampedObjects(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
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
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.Track.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Track} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getTimestampedObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject.serializeBinaryToWriter
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional VideoSegment segment = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.getSegment = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.setSegment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.clearSegment = function() {
  this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TimestampedObject timestamped_objects = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject>}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.getTimestampedObjectsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject>} value */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.setTimestampedObjectsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.addTimestampedObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.TimestampedObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.clearTimestampedObjectsList = function() {
  this.setTimestampedObjectsList([]);
};


/**
 * repeated DetectedAttribute attributes = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute>}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute>} value */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.setAttributesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.clearAttributesList = function() {
  this.setAttributesList([]);
};


/**
 * optional float confidence = 4;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.Track.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
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
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute}
 */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute;
  return proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute}
 */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getValue();
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
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.DetectedAttribute.prototype.setValue = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.Celebrity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Celebrity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Celebrity}
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.Celebrity;
  return proto.google.cloud.videointelligence.v1p3beta1.Celebrity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Celebrity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Celebrity}
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.Celebrity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Celebrity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.Celebrity.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.toObject = function(includeInstance, msg) {
  var f, obj = {
    celebritiesList: jspb.Message.toObjectList(msg.getCelebritiesList(),
    proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.toObject, includeInstance),
    faceTrack: (f = msg.getFaceTrack()) && proto.google.cloud.videointelligence.v1p3beta1.Track.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack;
  return proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.deserializeBinaryFromReader);
      msg.addCelebrities(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Track;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Track.deserializeBinaryFromReader);
      msg.setFaceTrack(value);
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCelebritiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.serializeBinaryToWriter
    );
  }
  f = message.getFaceTrack();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Track.serializeBinaryToWriter
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.toObject = function(includeInstance, msg) {
  var f, obj = {
    celebrity: (f = msg.getCelebrity()) && proto.google.cloud.videointelligence.v1p3beta1.Celebrity.toObject(includeInstance, f),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity;
  return proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Celebrity;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Celebrity.deserializeBinaryFromReader);
      msg.setCelebrity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCelebrity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Celebrity.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional Celebrity celebrity = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.Celebrity}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.getCelebrity = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.Celebrity} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Celebrity, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.Celebrity|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.setCelebrity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.clearCelebrity = function() {
  this.setCelebrity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.hasCelebrity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated RecognizedCelebrity celebrities = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity>}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.getCelebritiesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity>} value */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.setCelebritiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.addCelebrities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.clearCelebritiesList = function() {
  this.setCelebritiesList([]);
};


/**
 * optional Track face_track = 3;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.Track}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.getFaceTrack = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.Track} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Track, 3));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.Track|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.setFaceTrack = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.clearFaceTrack = function() {
  this.setFaceTrack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.prototype.hasFaceTrack = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    celebrityTracksList: jspb.Message.toObjectList(msg.getCelebrityTracksList(),
    proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation;
  return proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.deserializeBinaryFromReader);
      msg.addCelebrityTracks(value);
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
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCelebrityTracksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CelebrityTrack celebrity_tracks = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack>}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.prototype.getCelebrityTracksList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack>} value */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.prototype.setCelebrityTracksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack}
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.prototype.addCelebrityTracks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.CelebrityTrack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.prototype.clearCelebrityTracksList = function() {
  this.setCelebrityTracksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.repeatedFields_ = [2,23,3,24,4,6,11,12,14,19];



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
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    segment: (f = msg.getSegment()) && proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(includeInstance, f),
    segmentLabelAnnotationsList: jspb.Message.toObjectList(msg.getSegmentLabelAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject, includeInstance),
    segmentPresenceLabelAnnotationsList: jspb.Message.toObjectList(msg.getSegmentPresenceLabelAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject, includeInstance),
    shotLabelAnnotationsList: jspb.Message.toObjectList(msg.getShotLabelAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject, includeInstance),
    shotPresenceLabelAnnotationsList: jspb.Message.toObjectList(msg.getShotPresenceLabelAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject, includeInstance),
    frameLabelAnnotationsList: jspb.Message.toObjectList(msg.getFrameLabelAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject, includeInstance),
    shotAnnotationsList: jspb.Message.toObjectList(msg.getShotAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject, includeInstance),
    explicitAnnotation: (f = msg.getExplicitAnnotation()) && proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.toObject(includeInstance, f),
    speechTranscriptionsList: jspb.Message.toObjectList(msg.getSpeechTranscriptionsList(),
    proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.toObject, includeInstance),
    textAnnotationsList: jspb.Message.toObjectList(msg.getTextAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.toObject, includeInstance),
    objectAnnotationsList: jspb.Message.toObjectList(msg.getObjectAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.toObject, includeInstance),
    logoRecognitionAnnotationsList: jspb.Message.toObjectList(msg.getLogoRecognitionAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.toObject, includeInstance),
    celebrityRecognitionAnnotations: (f = msg.getCelebrityRecognitionAnnotations()) && proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.toObject(includeInstance, f),
    error: (f = msg.getError()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults;
  return proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputUri(value);
      break;
    case 10:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.setSegment(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader);
      msg.addSegmentLabelAnnotations(value);
      break;
    case 23:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader);
      msg.addSegmentPresenceLabelAnnotations(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader);
      msg.addShotLabelAnnotations(value);
      break;
    case 24:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader);
      msg.addShotPresenceLabelAnnotations(value);
      break;
    case 4:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader);
      msg.addFrameLabelAnnotations(value);
      break;
    case 6:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.addShotAnnotations(value);
      break;
    case 7:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.deserializeBinaryFromReader);
      msg.setExplicitAnnotation(value);
      break;
    case 11:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.deserializeBinaryFromReader);
      msg.addSpeechTranscriptions(value);
      break;
    case 12:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.deserializeBinaryFromReader);
      msg.addTextAnnotations(value);
      break;
    case 14:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.deserializeBinaryFromReader);
      msg.addObjectAnnotations(value);
      break;
    case 19:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.deserializeBinaryFromReader);
      msg.addLogoRecognitionAnnotations(value);
      break;
    case 21:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.deserializeBinaryFromReader);
      msg.setCelebrityRecognitionAnnotations(value);
      break;
    case 9:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getSegmentLabelAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getSegmentPresenceLabelAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getShotLabelAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getShotPresenceLabelAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getFrameLabelAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getShotAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getExplicitAnnotation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getSpeechTranscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.serializeBinaryToWriter
    );
  }
  f = message.getTextAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getObjectAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getLogoRecognitionAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getCelebrityRecognitionAnnotations();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string input_uri = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getInputUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setInputUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional VideoSegment segment = 10;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getSegment = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 10));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setSegment = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearSegment = function() {
  this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated LabelAnnotation segment_label_annotations = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getSegmentLabelAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setSegmentLabelAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addSegmentLabelAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearSegmentLabelAnnotationsList = function() {
  this.setSegmentLabelAnnotationsList([]);
};


/**
 * repeated LabelAnnotation segment_presence_label_annotations = 23;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getSegmentPresenceLabelAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, 23));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setSegmentPresenceLabelAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addSegmentPresenceLabelAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearSegmentPresenceLabelAnnotationsList = function() {
  this.setSegmentPresenceLabelAnnotationsList([]);
};


/**
 * repeated LabelAnnotation shot_label_annotations = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getShotLabelAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setShotLabelAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addShotLabelAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearShotLabelAnnotationsList = function() {
  this.setShotLabelAnnotationsList([]);
};


/**
 * repeated LabelAnnotation shot_presence_label_annotations = 24;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getShotPresenceLabelAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, 24));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setShotPresenceLabelAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addShotPresenceLabelAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearShotPresenceLabelAnnotationsList = function() {
  this.setShotPresenceLabelAnnotationsList([]);
};


/**
 * repeated LabelAnnotation frame_label_annotations = 4;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getFrameLabelAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, 4));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setFrameLabelAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addFrameLabelAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearFrameLabelAnnotationsList = function() {
  this.setFrameLabelAnnotationsList([]);
};


/**
 * repeated VideoSegment shot_annotations = 6;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getShotAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 6));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setShotAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addShotAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearShotAnnotationsList = function() {
  this.setShotAnnotationsList([]);
};


/**
 * optional ExplicitContentAnnotation explicit_annotation = 7;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getExplicitAnnotation = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation, 7));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setExplicitAnnotation = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearExplicitAnnotation = function() {
  this.setExplicitAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.hasExplicitAnnotation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated SpeechTranscription speech_transcriptions = 11;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getSpeechTranscriptionsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription, 11));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setSpeechTranscriptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addSpeechTranscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearSpeechTranscriptionsList = function() {
  this.setSpeechTranscriptionsList([]);
};


/**
 * repeated TextAnnotation text_annotations = 12;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getTextAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation, 12));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setTextAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addTextAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearTextAnnotationsList = function() {
  this.setTextAnnotationsList([]);
};


/**
 * repeated ObjectTrackingAnnotation object_annotations = 14;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getObjectAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation, 14));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setObjectAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addObjectAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearObjectAnnotationsList = function() {
  this.setObjectAnnotationsList([]);
};


/**
 * repeated LogoRecognitionAnnotation logo_recognition_annotations = 19;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getLogoRecognitionAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation, 19));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setLogoRecognitionAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.addLogoRecognitionAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearLogoRecognitionAnnotationsList = function() {
  this.setLogoRecognitionAnnotationsList([]);
};


/**
 * optional CelebrityRecognitionAnnotation celebrity_recognition_annotations = 21;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getCelebrityRecognitionAnnotations = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation, 21));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setCelebrityRecognitionAnnotations = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearCelebrityRecognitionAnnotations = function() {
  this.setCelebrityRecognitionAnnotations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.hasCelebrityRecognitionAnnotations = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.rpc.Status error = 9;
 * @return {?proto.google.rpc.Status}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.getError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 9));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.prototype.hasError = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationResultsList: jspb.Message.toObjectList(msg.getAnnotationResultsList(),
    proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse;
  return proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.deserializeBinaryFromReader);
      msg.addAnnotationResults(value);
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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VideoAnnotationResults annotation_results = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults>}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.prototype.getAnnotationResultsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults>} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.prototype.setAnnotationResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.prototype.addAnnotationResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.prototype.clearAnnotationResultsList = function() {
  this.setAnnotationResultsList([]);
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
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    progressPercent: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    feature: jspb.Message.getFieldWithDefault(msg, 5, 0),
    segment: (f = msg.getSegment()) && proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress;
  return proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputUri(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressPercent(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 5:
      var value = /** @type {!proto.google.cloud.videointelligence.v1p3beta1.Feature} */ (reader.readEnum());
      msg.setFeature(value);
      break;
    case 6:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.setSegment(value);
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
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProgressPercent();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFeature();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string input_uri = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.getInputUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.setInputUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 progress_percent = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.getProgressPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.setProgressPercent = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Feature feature = 5;
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Feature}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.getFeature = function() {
  return /** @type {!proto.google.cloud.videointelligence.v1p3beta1.Feature} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.google.cloud.videointelligence.v1p3beta1.Feature} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.setFeature = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional VideoSegment segment = 6;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.getSegment = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 6));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.setSegment = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.clearSegment = function() {
  this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationProgressList: jspb.Message.toObjectList(msg.getAnnotationProgressList(),
    proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress;
  return proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.deserializeBinaryFromReader);
      msg.addAnnotationProgress(value);
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
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationProgressList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VideoAnnotationProgress annotation_progress = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress>}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.prototype.getAnnotationProgressList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress>} value */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.prototype.setAnnotationProgressList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress}
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.prototype.addAnnotationProgress = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.prototype.clearAnnotationProgressList = function() {
  this.setAnnotationProgressList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.repeatedFields_ = [4,6];



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
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    languageCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxAlternatives: jspb.Message.getFieldWithDefault(msg, 2, 0),
    filterProfanity: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    speechContextsList: jspb.Message.toObjectList(msg.getSpeechContextsList(),
    proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.toObject, includeInstance),
    enableAutomaticPunctuation: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    audioTracksList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    enableSpeakerDiarization: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    diarizationSpeakerCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    enableWordConfidence: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAlternatives(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFilterProfanity(value);
      break;
    case 4:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.SpeechContext;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.deserializeBinaryFromReader);
      msg.addSpeechContexts(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAutomaticPunctuation(value);
      break;
    case 6:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setAudioTracksList(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableSpeakerDiarization(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiarizationSpeakerCount(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableWordConfidence(value);
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxAlternatives();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFilterProfanity();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSpeechContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.serializeBinaryToWriter
    );
  }
  f = message.getEnableAutomaticPunctuation();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAudioTracksList();
  if (f.length > 0) {
    writer.writePackedInt32(
      6,
      f
    );
  }
  f = message.getEnableSpeakerDiarization();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDiarizationSpeakerCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getEnableWordConfidence();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string language_code = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 max_alternatives = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getMaxAlternatives = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setMaxAlternatives = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool filter_profanity = 3;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getFilterProfanity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setFilterProfanity = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated SpeechContext speech_contexts = 4;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext>}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getSpeechContextsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.SpeechContext, 4));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext>} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setSpeechContextsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.addSpeechContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.videointelligence.v1p3beta1.SpeechContext, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.clearSpeechContextsList = function() {
  this.setSpeechContextsList([]);
};


/**
 * optional bool enable_automatic_punctuation = 5;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getEnableAutomaticPunctuation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setEnableAutomaticPunctuation = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated int32 audio_tracks = 6;
 * @return {!Array<number>}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getAudioTracksList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<number>} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setAudioTracksList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.addAudioTracks = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.clearAudioTracksList = function() {
  this.setAudioTracksList([]);
};


/**
 * optional bool enable_speaker_diarization = 7;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getEnableSpeakerDiarization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setEnableSpeakerDiarization = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 diarization_speaker_count = 8;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getDiarizationSpeakerCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setDiarizationSpeakerCount = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool enable_word_confidence = 9;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.getEnableWordConfidence = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.prototype.setEnableWordConfidence = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    phrasesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.SpeechContext;
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhrases(value);
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhrasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string phrases = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.prototype.getPhrasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.prototype.setPhrasesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.prototype.addPhrases = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechContext.prototype.clearPhrasesList = function() {
  this.setPhrasesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    alternativesList: jspb.Message.toObjectList(msg.getAlternativesList(),
    proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.toObject, includeInstance),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription;
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.deserializeBinaryFromReader);
      msg.addAlternatives(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlternativesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated SpeechRecognitionAlternative alternatives = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative>}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.getAlternativesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative>} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.setAlternativesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.addAlternatives = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.clearAlternativesList = function() {
  this.setAlternativesList([]);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechTranscription.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.repeatedFields_ = [3];



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
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcript: jspb.Message.getFieldWithDefault(msg, 1, ""),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.google.cloud.videointelligence.v1p3beta1.WordInfo.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative;
  return proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranscript(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.WordInfo;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.WordInfo.deserializeBinaryFromReader);
      msg.addWords(value);
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
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscript();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.WordInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string transcript = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.getTranscript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.setTranscript = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated WordInfo words = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.WordInfo>}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.WordInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.WordInfo, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.WordInfo>} value */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.setWordsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo}
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.WordInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.prototype.clearWordsList = function() {
  this.setWordsList([]);
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
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.WordInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    word: jspb.Message.getFieldWithDefault(msg, 3, ""),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    speakerTag: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.WordInfo;
  return proto.google.cloud.videointelligence.v1p3beta1.WordInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWord(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeakerTag(value);
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
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.WordInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.WordInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWord();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSpeakerTag();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration start_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration end_time = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string word = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.getWord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.setWord = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float confidence = 4;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 speaker_tag = 5;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.getSpeakerTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.WordInfo.prototype.setSpeakerTag = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex;
  return proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.repeatedFields_ = [1];



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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.toObject = function(includeInstance, msg) {
  var f, obj = {
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly;
  return proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.deserializeBinaryFromReader);
      msg.addVertices(value);
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
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NormalizedVertex vertices = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex>}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex>} value */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.prototype.setVerticesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex}
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.NormalizedVertex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.prototype.clearVerticesList = function() {
  this.setVerticesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.repeatedFields_ = [3];



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
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.TextSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    segment: (f = msg.getSegment()) && proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(includeInstance, f),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.google.cloud.videointelligence.v1p3beta1.TextFrame.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.TextSegment;
  return proto.google.cloud.videointelligence.v1p3beta1.TextSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.setSegment(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.TextFrame;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.TextFrame.deserializeBinaryFromReader);
      msg.addFrames(value);
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
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.TextSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.TextFrame.serializeBinaryToWriter
    );
  }
};


/**
 * optional VideoSegment segment = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.getSegment = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.setSegment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.clearSegment = function() {
  this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated TextFrame frames = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextFrame>}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextFrame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.TextFrame, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextFrame>} value */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.setFramesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.TextFrame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.TextSegment.prototype.clearFramesList = function() {
  this.setFramesList([]);
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
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.TextFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotatedBoundingBox: (f = msg.getRotatedBoundingBox()) && proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.toObject(includeInstance, f),
    timeOffset: (f = msg.getTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.TextFrame;
  return proto.google.cloud.videointelligence.v1p3beta1.TextFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.deserializeBinaryFromReader);
      msg.setRotatedBoundingBox(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeOffset(value);
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
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.TextFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotatedBoundingBox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.serializeBinaryToWriter
    );
  }
  f = message.getTimeOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional NormalizedBoundingPoly rotated_bounding_box = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.getRotatedBoundingBox = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.setRotatedBoundingBox = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.clearRotatedBoundingBox = function() {
  this.setRotatedBoundingBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.hasRotatedBoundingBox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.getTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.setTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.clearTimeOffset = function() {
  this.setTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextFrame.prototype.hasTimeOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.repeatedFields_ = [2];



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
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.google.cloud.videointelligence.v1p3beta1.TextSegment.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation;
  return proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.TextSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.TextSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.TextSegment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.setText = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated TextSegment segments = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextSegment>}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.TextSegment, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.TextSegment>} value */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.setSegmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.TextSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.TextSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.TextAnnotation.prototype.clearSegmentsList = function() {
  this.setSegmentsList([]);
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
    normalizedBoundingBox: (f = msg.getNormalizedBoundingBox()) && proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.toObject(includeInstance, f),
    timeOffset: (f = msg.getTimeOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame;
  return proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.deserializeBinaryFromReader);
      msg.setNormalizedBoundingBox(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeOffset(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNormalizedBoundingBox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.serializeBinaryToWriter
    );
  }
  f = message.getTimeOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional NormalizedBoundingBox normalized_bounding_box = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.getNormalizedBoundingBox = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.setNormalizedBoundingBox = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.clearNormalizedBoundingBox = function() {
  this.setNormalizedBoundingBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.hasNormalizedBoundingBox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration time_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.getTimeOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.setTimeOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.clearTimeOffset = function() {
  this.setTimeOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.prototype.hasTimeOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.oneofGroups_ = [[3,5]];

/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.TrackInfoCase = {
  TRACK_INFO_NOT_SET: 0,
  SEGMENT: 3,
  TRACK_ID: 5
};

/**
 * @return {proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.TrackInfoCase}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.getTrackInfoCase = function() {
  return /** @type {proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.TrackInfoCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.oneofGroups_[0]));
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.google.cloud.videointelligence.v1p3beta1.Entity.toObject(includeInstance, f),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.toObject, includeInstance),
    segment: (f = msg.getSegment()) && proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject(includeInstance, f),
    trackId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;
  return proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Entity;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.deserializeBinaryFromReader);
      msg.addFrames(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.setSegment(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTrackId(value);
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
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Entity.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.serializeBinaryToWriter
    );
  }
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional Entity entity = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.Entity}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.getEntity = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.Entity} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Entity, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.Entity|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.setEntity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.clearEntity = function() {
  this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float confidence = 4;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated ObjectTrackingFrame frames = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame>}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame>} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.setFramesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.clearFramesList = function() {
  this.setFramesList([]);
};


/**
 * optional VideoSegment segment = 3;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.getSegment = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 3));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.VideoSegment|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.setSegment = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.clearSegment = function() {
  this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 track_id = 5;
 * @return {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.getTrackId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.setTrackId = function(value) {
  jspb.Message.setOneofField(this, 5, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.clearTrackId = function() {
  jspb.Message.setOneofField(this, 5, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.prototype.hasTrackId = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.repeatedFields_ = [2,3];



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
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.google.cloud.videointelligence.v1p3beta1.Entity.toObject(includeInstance, f),
    tracksList: jspb.Message.toObjectList(msg.getTracksList(),
    proto.google.cloud.videointelligence.v1p3beta1.Track.toObject, includeInstance),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation;
  return proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Entity;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Entity.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.Track;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.Track.deserializeBinaryFromReader);
      msg.addTracks(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Entity.serializeBinaryToWriter
    );
  }
  f = message.getTracksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.Track.serializeBinaryToWriter
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
};


/**
 * optional Entity entity = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.Entity}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.getEntity = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.Entity} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Entity, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.Entity|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.setEntity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.clearEntity = function() {
  this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Track tracks = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Track>}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.getTracksList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.Track>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.Track, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.Track>} value */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.setTracksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.Track=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.Track}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.addTracks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.Track, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.clearTracksList = function() {
  this.setTracksList([]);
};


/**
 * repeated VideoSegment segments = 3;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 3));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} value */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.setSegmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.prototype.clearSegmentsList = function() {
  this.setSegmentsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.StreamingRequestCase = {
  STREAMING_REQUEST_NOT_SET: 0,
  VIDEO_CONFIG: 1,
  INPUT_CONTENT: 2
};

/**
 * @return {proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.StreamingRequestCase}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.getStreamingRequestCase = function() {
  return /** @type {proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.StreamingRequestCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.oneofGroups_[0]));
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoConfig: (f = msg.getVideoConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.toObject(includeInstance, f),
    inputContent: msg.getInputContent_asB64()
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.deserializeBinaryFromReader);
      msg.setVideoConfig(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInputContent(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional StreamingVideoConfig video_config = 1;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.getVideoConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig, 1));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.setVideoConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.clearVideoConfig = function() {
  this.setVideoConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.hasVideoConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes input_content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.getInputContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes input_content = 2;
 * This is a type-conversion wrapper around `getInputContent()`
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.getInputContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInputContent()));
};


/**
 * optional bytes input_content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInputContent()`
 * @return {!Uint8Array}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.getInputContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInputContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.setInputContent = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.clearInputContent = function() {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.prototype.hasInputContent = function() {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    annotationResults: (f = msg.getAnnotationResults()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.toObject(includeInstance, f),
    annotationResultsUri: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.deserializeBinaryFromReader);
      msg.setAnnotationResults(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnnotationResultsUri(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationResults();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationResultsUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.rpc.Status error = 1;
 * @return {?proto.google.rpc.Status}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.getError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 1));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StreamingVideoAnnotationResults annotation_results = 2;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.getAnnotationResults = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults, 2));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.setAnnotationResults = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.clearAnnotationResults = function() {
  this.setAnnotationResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.hasAnnotationResults = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string annotation_results_uri = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.getAnnotationResultsUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.prototype.setAnnotationResultsUri = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.prototype.setModelName = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.prototype.setModelName = function(value) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    stationaryCamera: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStationaryCamera(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStationaryCamera();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool stationary_camera = 1;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.prototype.getStationaryCamera = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.prototype.setStationaryCamera = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableStorageAnnotationResult: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    annotationResultStorageDirectory: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableStorageAnnotationResult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnnotationResultStorageDirectory(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableStorageAnnotationResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAnnotationResultStorageDirectory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool enable_storage_annotation_result = 1;
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.prototype.getEnableStorageAnnotationResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.prototype.setEnableStorageAnnotationResult = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string annotation_result_storage_directory = 3;
 * @return {string}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.prototype.getAnnotationResultStorageDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.prototype.setAnnotationResultStorageDirectory = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.repeatedFields_ = [1,2,4];



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
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.toObject = function(includeInstance, msg) {
  var f, obj = {
    shotAnnotationsList: jspb.Message.toObjectList(msg.getShotAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.toObject, includeInstance),
    labelAnnotationsList: jspb.Message.toObjectList(msg.getLabelAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.toObject, includeInstance),
    explicitAnnotation: (f = msg.getExplicitAnnotation()) && proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.toObject(includeInstance, f),
    objectAnnotationsList: jspb.Message.toObjectList(msg.getObjectAnnotationsList(),
    proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.toObject, includeInstance)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.VideoSegment;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.deserializeBinaryFromReader);
      msg.addShotAnnotations(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.deserializeBinaryFromReader);
      msg.addLabelAnnotations(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.deserializeBinaryFromReader);
      msg.setExplicitAnnotation(value);
      break;
    case 4:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.deserializeBinaryFromReader);
      msg.addObjectAnnotations(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShotAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.VideoSegment.serializeBinaryToWriter
    );
  }
  f = message.getLabelAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getExplicitAnnotation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getObjectAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VideoSegment shot_annotations = 1;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.getShotAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, 1));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment>} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.setShotAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.VideoSegment}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.addShotAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.videointelligence.v1p3beta1.VideoSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.clearShotAnnotationsList = function() {
  this.setShotAnnotationsList([]);
};


/**
 * repeated LabelAnnotation label_annotations = 2;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.getLabelAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, 2));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.setLabelAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.addLabelAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.videointelligence.v1p3beta1.LabelAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.clearLabelAnnotationsList = function() {
  this.setLabelAnnotationsList([]);
};


/**
 * optional ExplicitContentAnnotation explicit_annotation = 3;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.getExplicitAnnotation = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation, 3));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.setExplicitAnnotation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.clearExplicitAnnotation = function() {
  this.setExplicitAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.hasExplicitAnnotation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ObjectTrackingAnnotation object_annotations = 4;
 * @return {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation>}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.getObjectAnnotationsList = function() {
  return /** @type{!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation, 4));
};


/** @param {!Array<!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation>} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.setObjectAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.addObjectAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.prototype.clearObjectAnnotationsList = function() {
  this.setObjectAnnotationsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_ = [[2,3,4,5,21,22]];

/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.StreamingConfigCase = {
  STREAMING_CONFIG_NOT_SET: 0,
  SHOT_CHANGE_DETECTION_CONFIG: 2,
  LABEL_DETECTION_CONFIG: 3,
  EXPLICIT_CONTENT_DETECTION_CONFIG: 4,
  OBJECT_TRACKING_CONFIG: 5,
  AUTOML_CLASSIFICATION_CONFIG: 21,
  AUTOML_OBJECT_TRACKING_CONFIG: 22
};

/**
 * @return {proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.StreamingConfigCase}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getStreamingConfigCase = function() {
  return /** @type {proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.StreamingConfigCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0]));
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    feature: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shotChangeDetectionConfig: (f = msg.getShotChangeDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.toObject(includeInstance, f),
    labelDetectionConfig: (f = msg.getLabelDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.toObject(includeInstance, f),
    explicitContentDetectionConfig: (f = msg.getExplicitContentDetectionConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.toObject(includeInstance, f),
    objectTrackingConfig: (f = msg.getObjectTrackingConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.toObject(includeInstance, f),
    automlClassificationConfig: (f = msg.getAutomlClassificationConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.toObject(includeInstance, f),
    automlObjectTrackingConfig: (f = msg.getAutomlObjectTrackingConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.toObject(includeInstance, f),
    storageConfig: (f = msg.getStorageConfig()) && proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig;
  return proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.videointelligence.v1p3beta1.StreamingFeature} */ (reader.readEnum());
      msg.setFeature(value);
      break;
    case 2:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.deserializeBinaryFromReader);
      msg.setShotChangeDetectionConfig(value);
      break;
    case 3:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.deserializeBinaryFromReader);
      msg.setLabelDetectionConfig(value);
      break;
    case 4:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.deserializeBinaryFromReader);
      msg.setExplicitContentDetectionConfig(value);
      break;
    case 5:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.deserializeBinaryFromReader);
      msg.setObjectTrackingConfig(value);
      break;
    case 21:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.deserializeBinaryFromReader);
      msg.setAutomlClassificationConfig(value);
      break;
    case 22:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.deserializeBinaryFromReader);
      msg.setAutomlObjectTrackingConfig(value);
      break;
    case 30:
      var value = new proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig;
      reader.readMessage(value,proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.deserializeBinaryFromReader);
      msg.setStorageConfig(value);
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
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeature();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getShotChangeDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getLabelDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getExplicitContentDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getObjectTrackingConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.serializeBinaryToWriter
    );
  }
  f = message.getAutomlClassificationConfig();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.serializeBinaryToWriter
    );
  }
  f = message.getAutomlObjectTrackingConfig();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.serializeBinaryToWriter
    );
  }
  f = message.getStorageConfig();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional StreamingFeature feature = 1;
 * @return {!proto.google.cloud.videointelligence.v1p3beta1.StreamingFeature}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getFeature = function() {
  return /** @type {!proto.google.cloud.videointelligence.v1p3beta1.StreamingFeature} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.cloud.videointelligence.v1p3beta1.StreamingFeature} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setFeature = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StreamingShotChangeDetectionConfig shot_change_detection_config = 2;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getShotChangeDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig, 2));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setShotChangeDetectionConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearShotChangeDetectionConfig = function() {
  this.setShotChangeDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasShotChangeDetectionConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StreamingLabelDetectionConfig label_detection_config = 3;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getLabelDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig, 3));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setLabelDetectionConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearLabelDetectionConfig = function() {
  this.setLabelDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasLabelDetectionConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StreamingExplicitContentDetectionConfig explicit_content_detection_config = 4;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getExplicitContentDetectionConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig, 4));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setExplicitContentDetectionConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearExplicitContentDetectionConfig = function() {
  this.setExplicitContentDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasExplicitContentDetectionConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StreamingObjectTrackingConfig object_tracking_config = 5;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getObjectTrackingConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig, 5));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setObjectTrackingConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearObjectTrackingConfig = function() {
  this.setObjectTrackingConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasObjectTrackingConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StreamingAutomlClassificationConfig automl_classification_config = 21;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getAutomlClassificationConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig, 21));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setAutomlClassificationConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearAutomlClassificationConfig = function() {
  this.setAutomlClassificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasAutomlClassificationConfig = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional StreamingAutomlObjectTrackingConfig automl_object_tracking_config = 22;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getAutomlObjectTrackingConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig, 22));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setAutomlObjectTrackingConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearAutomlObjectTrackingConfig = function() {
  this.setAutomlObjectTrackingConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasAutomlObjectTrackingConfig = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional StreamingStorageConfig storage_config = 30;
 * @return {?proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.getStorageConfig = function() {
  return /** @type{?proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig, 30));
};


/** @param {?proto.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig|undefined} value */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.setStorageConfig = function(value) {
  jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.clearStorageConfig = function() {
  this.setStorageConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.prototype.hasStorageConfig = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.Feature = {
  FEATURE_UNSPECIFIED: 0,
  LABEL_DETECTION: 1,
  SHOT_CHANGE_DETECTION: 2,
  EXPLICIT_CONTENT_DETECTION: 3,
  SPEECH_TRANSCRIPTION: 6,
  TEXT_DETECTION: 7,
  OBJECT_TRACKING: 9,
  LOGO_RECOGNITION: 12,
  CELEBRITY_RECOGNITION: 13
};

/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.LabelDetectionMode = {
  LABEL_DETECTION_MODE_UNSPECIFIED: 0,
  SHOT_MODE: 1,
  FRAME_MODE: 2,
  SHOT_AND_FRAME_MODE: 3
};

/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.Likelihood = {
  LIKELIHOOD_UNSPECIFIED: 0,
  VERY_UNLIKELY: 1,
  UNLIKELY: 2,
  POSSIBLE: 3,
  LIKELY: 4,
  VERY_LIKELY: 5
};

/**
 * @enum {number}
 */
proto.google.cloud.videointelligence.v1p3beta1.StreamingFeature = {
  STREAMING_FEATURE_UNSPECIFIED: 0,
  STREAMING_LABEL_DETECTION: 1,
  STREAMING_SHOT_CHANGE_DETECTION: 2,
  STREAMING_EXPLICIT_CONTENT_DETECTION: 3,
  STREAMING_OBJECT_TRACKING: 4,
  STREAMING_AUTOML_CLASSIFICATION: 21,
  STREAMING_AUTOML_OBJECT_TRACKING: 22
};

goog.object.extend(exports, proto.google.cloud.videointelligence.v1p3beta1);
